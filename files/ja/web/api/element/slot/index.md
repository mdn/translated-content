---
title: Element.slot
slug: Web/API/Element/slot
tags:
  - API
  - Element
  - プロパティ
  - リファレンス
  - シャドウ DOM
  - slot
browser-compat: api.Element.slot
translation_of: Web/API/Element/slot
---
{{APIRef("Shadow DOM")}}

**`slot`** は {{domxref("Element")}} インターフェイスのプロパティで、この要素が挿入されたシャドウ DOM のスロットの名前を返します。

スロットは[ウェブコンポーネント](/ja/docs/Web/Web_Components)内のプレースホルダーで、ユーザーが独自のマークアップで埋めることができます（詳しくは、[テンプレートとスロットの使用](/ja/docs/Web/Web_Components/Using_templates_and_slots)をご覧ください）。

## 構文

```js
var aString = element.slot
element.slot = aString
```

### 値

{{domxref("DOMString")}} です。

## 例

[simple-template の例](https://github.com/mdn/web-components-examples/tree/master/simple-template) ([ライブで見る](https://mdn.github.io/web-components-examples/simple-template/)) では、`<my-paragraph>` という些細なカスタム要素の例を作りました。この要素にはシャドウルートが取り付けられ、次に `my-text` というスロットを含むテンプレートの内容を使って入力されるようになっています。

文書内で `<my-paragraph>` が使用されると、スロットは `my-text` という値を持つ [`slot`](/ja/docs/Web/HTML/Global_attributes/slot) 属性を持つ要素内に含めることによって、 slotable 要素によって生成されることになります。以下はそのような例です。

```html
<my-paragraph>
  <span slot="my-text">別なテキストにしましょう。</span>
</my-paragraph>
```

JavaScript ファイルで {{htmlelement("span")}} への参照を取得すると、対応する `<slot>` の名前が取得できます。

```js
let slottedSpan = document.querySelector('my-paragraph span')
console.log(slottedSpan.slot); // 'my-text' と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
