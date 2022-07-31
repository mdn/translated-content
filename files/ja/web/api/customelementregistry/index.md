---
title: CustomElementRegistry
slug: Web/API/CustomElementRegistry
tags:
  - API
  - CustomElementRegistry
  - 実験的
  - インターフェイス
  - リファレンス
  - ウェブコンポーネント
  - カスタム要素
browser-compat: api.CustomElementRegistry
translation_of: Web/API/CustomElementRegistry
---
{{DefaultAPISidebar("Web Components")}}

**`CustomElementRegistry`** インターフェイスは、カスタム要素の登録と、登録された要素を照会するためのメソッドを提供します。このインスタンスを取得するには、{{domxref("window.customElements")}} プロパティを使用してください。

## メソッド

- {{domxref("CustomElementRegistry.define()")}}
  - : 新しい[カスタム要素](/ja/docs/Web/Web_Components/Using_custom_elements)を定義します。
- {{domxref("CustomElementRegistry.get()")}}
  - : 名前付きカスタム要素のコンストラクターを返します。カスタム要素が定義されていない場合は {{jsxref("undefined")}} を返します。
- {{domxref("CustomElementRegistry.upgrade()")}}
  - : シャドウルートに接続する前であっても、直接カスタム要素をアップグレードします。
- {{domxref("CustomElementRegistry.whenDefined()")}}
  - : 指定された名前でカスタム要素が定義されたときに解決する空の{{jsxref("Promise", "プロミス", "", 1)}}を返します。そのようなカスタム要素が既に定義されていた場合、返されたプロミスは即座に履行状態になります。

## 例

以下のコードは [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) という例 ([ライブデモも見てください](https://mdn.github.io/web-components-examples/word-count-web-component/)) から持ってきています。カスタム要素のクラスを作成した後に、 {{domxref("CustomElementRegistry.define()")}} メソッドを使用してカスタム要素を定義していることに注意してください。

```js
// 要素のクラスを作成
class WordCount extends HTMLParagraphElement {
  constructor() {
    // コンストラクターでは常に super を最初に呼び出してください
    super();

    // 要素の親要素の語数を数える
    var wcParent = this.parentNode;

    function countWords(node){
      var text = node.innerText || node.textContent
      return text.split(/\s+/g).length;
    }

    var count = 'Words: ' + countWords(wcParent);

    // シャドウルートを生成
    var shadow = this.attachShadow({mode: 'open'});

    // テキストノードを生成し、語数を追加
    var text = document.createElement('span');
    text.textContent = count;

    // シャドウルートに追加
    shadow.appendChild(text);

    // 要素の内容が変化したとき、語数を更新
    setInterval(function() {
      var count = 'Words: ' + countWords(wcParent);
      text.textContent = count;
    }, 200)

  }
}

// 新しい要素を定義
customElements.define('word-count', WordCount, { extends: 'p' });
```

> **Note:** CustomElementsRegistry は {{domxref("Window.customElements")}} プロパティを通して利用可能です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
