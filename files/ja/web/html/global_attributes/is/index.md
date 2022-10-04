---
title: is
slug: Web/HTML/Global_attributes/is
---

{{HTMLSidebar("Global_attributes")}}

**`is`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)で、標準の HTML 要素が定義されたカスタム内蔵要素のように振舞うよう指定することができます (詳しくは [カスタム要素の使用](/ja/docs/Web/Web_Components/Using_custom_elements) を参照してください)。

この属性は、指定されたカスタム要素名が現在の文書で正常に[定義され](/ja/docs/Web/API/CustomElementRegistry/define)、適用されている要素型が拡張されている場合にのみ使用します。

## 例

次のコードは、 [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) の例から取得されたものです ([ライブで参照](https://mdn.github.io/web-components-examples/word-count-web-component/))。

```js
// 要素のクラスを作成
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Constructor contents ommitted for brevity
    ...

  }
}

// 新しい要素を定義
customElements.define('word-count', WordCount, { extends: 'p' });
```

```html
<p is="word-count"></p>
```

## 仕様書

| 仕様書                                                                                   | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', "custom-elements.html#attr-is", "is")}} | {{Spec2('HTML WHATWG')}} |      |

## ブラウザーの互換性

{{Compat("html.global_attributes.is")}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)。
