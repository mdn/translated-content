---
title: HTML is グローバル属性
short-title: is
slug: Web/HTML/Reference/Global_attributes/is
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

> [!NOTE]
> [Safari はカスタム組み込み要素に対応する予定はなく](https://github.com/WebKit/standards-positions/issues/97)、[ブラウザーベンダーは組み込み要素のカスタマイズに関する代替ソリューションを検討しています](https://github.com/WICG/webcomponents/issues/1029)。対応情報については、[ブラウザーの互換性](#ブラウザーの互換性)の節で調べてください。

**`is`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)で、標準の HTML 要素が定義されたカスタム組み込み要素のように振る舞うよう指定することができます（詳しくは[カスタム要素の使用](/ja/docs/Web/API/Web_components/Using_custom_elements)を参照してください）。

この属性は、指定されたカスタム要素名が現在の文書で正常に[定義され](/ja/docs/Web/API/CustomElementRegistry/define)、適用されている要素型が拡張されている場合にのみ使用します。

## 例

次のコードは、 [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) の例から取得されたものです（[ライブで参照](https://mdn.github.io/web-components-examples/word-count-web-component/)）。

```js
// 要素のクラスを作成
class WordCount extends HTMLParagraphElement {
  constructor() {
    // コンストラクターでは常に最初に super を呼び出すこと
    super();

    // コンストラクターの内容は簡略化のため除外しています
    // …
  }
}

// 新しい要素を定義
customElements.define("word-count", WordCount, { extends: "p" });
```

```html
<p is="word-count"></p>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)。
