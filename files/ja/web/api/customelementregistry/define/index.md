---
title: CustomElementRegistry.define()
slug: Web/API/CustomElementRegistry/define
tags:
  - API
  - CustomElementRegistry
  - メソッド
  - リファレンス
  - ウェブコンポーネント
  - カスタム要素
  - define
browser-compat: api.CustomElementRegistry.define
translation_of: Web/API/CustomElementRegistry/define
---
{{APIRef("CustomElementRegistry")}}

**`define()`** は {{domxref("CustomElementRegistry")}} インターフェイスのメソッドで、新しいカスタム要素を定義します。

作成することができるのは、次の 2 種類のカスタム要素です。

- **自律カスタム要素** (Autonomous custom element): 独立した要素です。組み込みの HTML 要素を継承していません。
- **カスタム組み込み要素** (Customized built-in element): 組み込みの HTML 要素を継承し、拡張した要素です。

## 構文

```js
customElements.define(name, constructor, options);
```

### 引数

- name
  - : 新しいカスタム要素の名前です。カスタム要素の名前は、少なくとも 1 つのハイフンを含まなければならないことに注意してください。
- constructor
  - : 新しいカスタム要素のコンストラクターです。
- options {{optional_inline}}

  - : 要素の定義の仕方を制御するオブジェクト。現在は、次の 1 つのオプションのみに対応しています。

 - `extends`: 拡張する組み込み要素の名前を示す文字列。*カスタム組み込み要素*を作成するのに使われる。

### 返値

なし。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : {{domxref("CustomElementRegistry")}} に既に同じ名前の項目または同じコンストラクターが含まれている（または既に定義されている）、または <code>extends</code> で[有効なカスタム要素名](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)が指定されていた場合、または <code>extends</code> で未知の要素を拡張しようとした場合に発生します。
- `SyntaxError` {{domxref("DOMException")}}
  - : 指定された名前が[有効なカスタム要素名](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)ではなかった場合に発生します。
- `TypeError` {{domxref("DOMException")}}
  - : 参照されたコンストラクターがコンストラクターではなかった場合に発生します。

> **Note:** `NotSupportedError` 例外が多く発生する場合、 `define()` が失敗しているように思えるかもしれませんが、多くの場合は {{domxref("Element.attachShadow()")}} に問題があります。

## 例

### 自律カスタム要素

以下のコードは [popup-info-box-web-component](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component)
の例から取ったものです ([ライブでもご覧ください](https://mdn.github.io/web-components-examples/popup-info-box-web-component/))。

```js
// 要素のクラスを作成
class PopUpInfo extends HTMLElement {
  constructor() {
    // コンストラクターでは常に super を最初に呼び出す
    super();

    // シャドウルートを生成
    var shadow = this.attachShadow({mode: 'open'});

    // span を生成
    var wrapper = document.createElement('span');
    wrapper.setAttribute('class','wrapper');
    var icon = document.createElement('span');
    icon.setAttribute('class','icon');
    icon.setAttribute('tabindex', 0);
    var info = document.createElement('span');
    info.setAttribute('class','info');

    // 属性の中身を取り出し、 info の span の中に入れる
    var text = this.getAttribute('text');
    info.textContent = text;

    // アイコンを挿入
    var imgUrl;
    if(this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'img/default.png';
    }
    var img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    // いくらかの CSS を生成してシャドウ DOM に適用
    var style = document.createElement('style');

    style.textContent = '.wrapper {' +
                           'position: relative;' +
                        '}' +

                         '.info {' +
                            'font-size: 0.8rem;' +
                            'width: 200px;' +
                            'display: inline-block;' +
                            'border: 1px solid black;' +
                            'padding: 10px;' +
                            'background: white;' +
                            'border-radius: 10px;' +
                            'opacity: 0;' +
                            'transition: 0.6s all;' +
                            'position: absolute;' +
                            'bottom: 20px;' +
                            'left: 10px;' +
                            'z-index: 3;' +
                          '}' +

                          'img {' +
                            'width: 1.2rem' +
                          '}' +

                          '.icon:hover + .info, .icon:focus + .info {' +
                            'opacity: 1;' +
                          '}';

    // 生成された要素をシャドウ DOM に取り付ける

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// 新しい要素を定義
customElements.define('popup-info', PopUpInfo);
```

```html
<popup-info img="img/alt.png" text="Your card validation code (CVC) is an extra
                                    security feature — it is the last 3 or 4
                                    numbers on the back of your card.">
```

> **Note:** 自律カスタム要素のコンストラクターは {{domxref("HTMLElement")}} を継承していなければなりません。

### カスタム組み込み要素

以下のコードは [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component)
の例から取ったものです ([ライブでもご覧ください](https://mdn.github.io/web-components-examples/word-count-web-component/))。

```js
// 要素のクラスを作成
class WordCount extends HTMLParagraphElement {
  constructor() {
    // コンストラクターでは常に super を最初に呼び出す
    super();

    // 要素の親要素の語数を数える
    var wcParent = this.parentNode;

    function countWords(node){
      var text = node.innerText || node.textContent
      return text.split(/\s+/g).length;
    }

    var count = '語数: ' + countWords(wcParent);

    // シャドウルートを生成
    var shadow = this.attachShadow({mode: 'open'});

    // テキストノードを生成し、語数を追加
    var text = document.createElement('span');
    text.textContent = count;

    // シャドウルートに追加
    shadow.appendChild(text);

    // 要素の内容が変化した際に語数を更新
    setInterval(function() {
      var count = '語数: ' + countWords(wcParent);
      text.textContent = count;
    }, 200)

  }
}

// 新しい要素を定義
customElements.define('word-count', WordCount, { extends: 'p' });
```

```html
<p is="word-count"></p>
```

### シャドウルートを取り付けられないようにする要素の作成

要素に使用されているクラスが、文字列 \`shadow\` を返す静的プロパティ `disabledFeatures` を含んでいる場合、 {{domxref("Element.attachShadow()")}} は {{domxref("DOMException")}} の `NotSupportedError` を返すようになります。

```js
class PopUpInfo extends HTMLElement {
  static get disabledFeatures() { return ['shadow']; }

  constructor() {
    super();

    var shadow = this.attachShadow({mode: 'open'});
    // これは要素が定義されたときにエラーが発生するようになります。
  }
}

```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
