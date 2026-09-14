---
title: rel="noopener"
slug: Web/HTML/Reference/Attributes/rel/noopener
l10n:
  sourceCommit: 0389dd29e0827791ad9d2f6b8cda217c121f9c19
---

{{HTMLSidebar}}

**`noopener`** キーワードを [`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel) 属性に指定すると、 {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}} の各要素では、ターゲットリソースへ移動する際、開いた元の文書へのアクセスを新しい閲覧コンテキストに許可しないことをブラウザーに指示します。開かれたウィンドウの {{DOMxRef("Window.opener")}} プロパティプロパティは設定されません（`null` を返します）。

これは、信頼されていないリンクを開くときに特に有効で、 {{DOMxRef("Window.opener")}} プロパティを介して発信元の文書を改ざんできないようにするためです（詳細は [rel=noopener について](https://mathiasbynens.github.io/rel-noopener/)を参照してください）。ただし、 HTTP の `Referer` ヘッダーは（`noreferrer` を同時に使用しない限り）提供されます。

なお、 `noopener` を使用した場合、ターゲット名に `_top`, `_self`, `_parent` 以外の空でない名前を使用すると、新しいウィンドウやタブを開くかどうかの判断において、すべて `_blank` と同様に扱われます。

> [!NOTE]
> `target="_blank"` を `<a>`、`<area>`、`<form>` 要素に設定すると、暗黙的に `rel` の動作が `rel="noopener"` を設定した場合と同様、 `window.opener` を設定しないようになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
