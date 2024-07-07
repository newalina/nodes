from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    type: str
    position: dict
    data: dict
    width: int
    height: int

class Edge(BaseModel):
    source: str
    sourceHandle: str
    target: str
    targetHandle: str
    type: str
    animated: bool
    markerEnd: dict
    id: str

class PipelineData(BaseModel):
    nodes: list[Node]
    edges: list[Edge]

def is_dag(nodes, edges):
    graph = {}
    in_degree = {}

    for node in nodes:
        graph[node.id] = []
        in_degree[node.id] = 0

    for edge in edges:
        graph[edge.source].append(edge.target)
        in_degree[edge.target] += 1

    queue = [node.id for node in nodes if in_degree[node.id] == 0]
    sort = []

    while queue:
        current = queue.pop(0)
        sort.append(current)
        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return len(sort) == len(nodes)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(data: PipelineData):
    num_nodes = len(data.nodes)
    num_edges = len(data.edges)
    nodes = data.nodes
    edges = data.edges

    if is_dag(nodes, edges):
        is_dag_result = True
    else:
        is_dag_result = False

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag_result }
