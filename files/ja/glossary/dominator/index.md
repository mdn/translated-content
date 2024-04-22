---
title: Dominator (ドミネーター)
slug: Glossary/Dominator
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

グラフ理論では、ルートノードからノード B へのすべてのパスがノード A を通過する場合、ノード A はノード B をドミネート (支配) すると言います。

この概念は{{Glossary("garbage collection","ガベージコレクション")}}にとって重要です。 なぜなら、B は A を介してのみ到達可能であるということです。 ガベージコレクターが A に到達できず、再利用可能であると判断した場合、B も到達不能で、したがって、A が支配するオブジェクトは、A の保持するサイズに寄与します。 つまり、A 自身が解放された場合に解放される可能性のあるメモリーの合計量です。

## 関連情報

- [Dominator](<https://en.wikipedia.org/wiki/Dominator_(graph_theory)>) (Wikipedia、英語)
- [ドミネーター](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators/index.html)
- [ガベージコレクション](/ja/docs/Web/JavaScript/Memory_management#ガベージコレクション)
