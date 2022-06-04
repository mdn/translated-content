---
title: DOMTokenList.value
slug: Web/API/DOMTokenList/value
tags:
- プロパティ
- リファレンス
browser-compat: api.DOMTokenList.value
translation_of: Web/API/DOMTokenList/value
---
{{APIRef("DOM")}}

**`value`** は {{domxref("DOMTokenList")}} インターフェイスのプロパティで、リストの値を {{domxref("DOMString")}} として文字列化して返したり、リストを空にしたり渡された値に設定したりするための{{Glossary("stringifier", "文字列化")}}を行うためのものです。

## 値

リストの内容をシリアライズした文字列です。
それぞれの項目は空白で区切られます。

## 例

次の例では、 {{htmlelement("span")}} 要素に設定されたクラスのリストを {{domxref("Element.classList")}} を使用して `DOMTokenList` として取得し、リストの値を `<span>` の {{domxref("Node.textContent")}} の中に書き込みます。

最初に HTML です。

```html
<span class="a b c"></span>
```

そして JavaScript です。

```js
const span = document.querySelector("span");
const classes = span.classList;
span.textContent = classes.value;
```

出力結果は以下のようになります。

{{ EmbedLiveSample('Examples', '100%', 60) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
