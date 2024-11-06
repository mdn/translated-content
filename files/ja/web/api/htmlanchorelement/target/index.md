---
title: "HTMLAnchorElement: target プロパティ"
short-title: target
slug: Web/API/HTMLAnchorElement/target
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{ApiRef("HTML DOM")}}

**`target`** は {{domxref("HTMLAnchorElement")}} インターフェイスのプロパティで、リンク先のリソースを表示する場所を示す文字列です。

これは {{HTMLElement("a")}} 要素の [`target`](/ja/docs/Web/HTML/Element/a#target) 属性を反映します。

## 値

対象とするものを表す文字列。その値は次のいずれかになります。

- {{HTMLElement("frame")}} の名前。
- 次の[特定の値によるキーワード](/ja/docs/Web/HTML/Element/a#target)、`_blank`, `_self`, `_parent`, `_top` のいずれか。

## 例

```html
<a href="www.example1.com" class="link1" target="_blank">example1</a>
```

```js
const link = document.querySelector(".link1");
console.log(link.target); // output: "_blank"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLBaseElement.target")}} プロパティ
- {{domxref("HTMLFormElement.target")}} プロパティ
- {{domxref("HTMLAreaElement.target")}} プロパティ
