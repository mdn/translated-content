---
title: Dominator (ドミネーター)
slug: Glossary/Dominator
---

グラフ理論では、ルートノードからノード B へのすべてのパスがノード A を通過する場合、ノード A はノード B をドミネート (支配) すると言います。

この概念は{{Glossary("garbage collection","ガベージコレクション")}}にとって重要です。 なぜなら、B は A を介してのみ到達可能であるということです。 ガベージコレクターが A に到達できず、再利用可能であると判断した場合、B も到達不能で、したがって、A が支配するオブジェクトは、A の保持するサイズに寄与します。 つまり、A 自身が解放された場合に解放される可能性のあるメモリの合計量です。

## 詳細情報

### 一般知識

- [Dominator](<https://en.wikipedia.org/wiki/Dominator_(graph_theory)>) (Wikipedia、英語)

### 技術リファレンス

- [ドミネーター](/ja/docs/Tools/Memory/Dominators)
- [ガベージコレクション](/ja/docs/Web/JavaScript/Memory_Management#garbage_collection)
