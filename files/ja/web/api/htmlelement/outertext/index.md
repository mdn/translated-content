---
title: HTMLElement.outerText
slug: Web/API/HTMLElement/outerText
tags:
  - API
  - HTML DOM
  - HTMLElement
  - プロパティ
  - リファレンス
browser-compat: api.HTMLElement.outerText
translation_of: Web/API/HTMLElement/outerText
---
{{APIRef("DOM")}}

**`outerText`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、 {{domxref("HTMLElement.innerText")}} と同じ値を返します。
セッターとして使用するときは、現在のノード全体を指定されたテキストに置き換えます（これは現在のノードの*内部*のコンテンツを置き換える `innerText` と異なります）。

詳しい情報や、両プロパティをゲッターとして使用する方法を示した例は {{domxref("HTMLElement.innerText")}} を参照してください。

## 値

{{domxref("DOMString")}} で、この要素とその配下で表示されるテキストコンテンツを表します。

要素自身が[表示されていない場合](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered)（例えば、文書から切り離されていた場合や表示から隠されていた場合）、返値は {{domxref("Node.textContent")}} プロパティのものと同じになります。

セッターとして使用された場合、この要素の子要素を指定された値で置き換え、すべての改行を {{HTMLElement("br")}} 要素に変換します。

## 例

この例では、 `outerText` と `innerText` をセッターとして使用した場合の根本的な違いを強調しています（ゲッターで使用した場合は同じです）。

> **Note:** この例は [What is the difference between innerText and outerText?](https://stackoverflow.com/questions/18481382/what-is-the-difference-between-innertext-and-outertext/18481435#18481435) (Stack overflow) の記事で [codingintrigue](https://stackoverflow.com/users/571194/codingintrigue) が作成し、 [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) のライセンスで配布されているものを変更したものです。

以下のような HTML が入っているページがあるとします。

```html
<div>
  <p>元の内容</p>
</div>
```

`outerText` は選択された要素全体を置き換えますので、 JavaScript で `p.outerText = "要素全体を置換"` を実行すると、選択された `p` 要素全体を置き換えます。

```html
<div>
   要素全体を置換
</div>
```

一方 `p.innerText = "要素内のコンテンツを置換"` を実行すると、選択された `p` 要素の*内部の*コンテンツを置き換えます。

```html
<div>
  <p>要素内のコンテンツを置換</p>
</div>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.outerHTML")}}
