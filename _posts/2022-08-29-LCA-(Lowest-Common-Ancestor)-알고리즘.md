---
layout: post
title: LCA (Lowest Common Ancestor) 알고리즘
category: 알고리즘
tags: []
---

## 소개

LCA란 트리에서 두 노드의 가장 가까운 공통 조상을 찾는 알고리즘이다.  
그렇다면 LCA가 필요한 이유는 무엇일까?  
바로 설명하자면 트리에서 최단 경로를 LCA로 구하기 때문이다.  
트리에서 두 노드 u, v의 최단 경로는 u->LCA + LCA->v 이다. (조금 생각해보면 트리의 성질에 의해 당연하다는 것을 알 수 있다.)  

![LCA1](/assets/img/posts/LCA1.png)
예시: 4와 7의 LCA는 2고 최단 경로는 4-2-5-7이다.

그럼 LCA를 어떻게 구할 수 있을까?

## 접근

naive한 접근으로는 두 노드를 만날 때까지 한 단계씩 옮겨주는 방법을 생각해 볼 수 있다.  
노드마다 깊이를 기억해 두고, 두 노드가 같아질 때까지 더 낮은 노드를 끌어올리는 것이다.  
간단하게 코드로 설명하자면 아래와 같을 것이다.

```c++
int depth[MAXN];
int parent[MAXN];
int lca (int u, int v) {
    while (u != v) {
        if (depth[u] < depth[v]) v = parent[v];
        else u = parent[u];
    }
    return u;
}
```
