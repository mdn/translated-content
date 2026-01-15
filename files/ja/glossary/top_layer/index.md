---
title: Top layer (最上位レイヤー)
slug: Glossary/Top_layer
l10n:
  sourceCommit: 9fa28f84a3aef826a30d402e63153b63db739a89
---

{{GlossarySidebar}}

**最上位レイヤー**は、ビューポートの幅と高さ全体にわたり、ウェブ文書内に表示される他のすべてのレイヤーの最上位に位置する固有のレイヤーです。これは、ページ上の他のすべてのコンテンツの上に現れるべき要素を含むために、ブラウザーによって作成されます。

最上位レイヤーに配置された要素は新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)を生成し、対応する {{cssxref("::backdrop")}} 擬似要素も生成します。

最上位レイヤーに現れる要素は以下の通りです。

- 全画面要素、つまり {{domxref("Element.requestFullscreen()")}} の呼び出しが成功して全画面モードで表示するように指定された要素。
- {{htmlelement("dialog")}} 要素が、 {{domxref("HTMLDialogElement.showModal()")}} の呼び出しに成功してモーダルとして表示された場合。
- {{domxref("HTMLElement.showPopover()")}} の呼び出しに成功して表示されたポップオーバー要素。

Chrome などの一部のブラウザーでは、最上位レイヤーに配置された要素を特別な DOM ツリー項目の中に表示します。例えば、以下のようになります。

![Chrome の開発者ツールで表示されている、最上位レイヤーの要素。](top_layer_devtools.png)

最上位レイヤーはブラウザー内部の概念であり、コードから直接操作することはできないことに注意してください。CSS や JavaScript を使用して最上位レイヤーに配置された要素を対象とすることはできますが、最上位レイヤー自体を対象とすることはできません。

## 関連情報

- [重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- {{htmlelement("dialog")}} 要素、 {{domxref("HTMLDialogElement")}} インターフェイス
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- {{CSSXref(":fullscreen")}} 擬似要素
