---
title: 지배자 (Dominator)
slug: Glossary/Dominator
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

그래프 이론에서, 루트 노드에서 노드 B까지 모든 경로가 A를 통과하면 노드 A가 노드 B를 지배합니다.

이 개념은 A를 통해서만 B에 접근할 수 있다는 것을 의미하므로 {{Glossary("가비지 컬렉션")}}에 중요한 개념입니다. 따라서 가비지 컬렉터가 A에 도달할 수 없고 회수하기에 적합하다고 판단하면, B 또한 도달할 수 없고, 회수에 적합하다고 판단합니다. 따라서 A가 지배하는 객체는 A가 가지고 있는 크기(A 자체가 해제될 경우 해제될 수 있는 총 메모리 양)에 포함됩니다.

## 같이 보기

- 위키백과의 [지배자](<https://en.wikipedia.org/wiki/Dominator_(graph_theory)>)
- [지배자](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators/index.html)
- [가비지 컬렉션](/ko/docs/Web/JavaScript/Memory_management#garbage_collection)
