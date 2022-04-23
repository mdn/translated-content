---
title: ':host()'
slug: Web/CSS/:host_function
tags:
  - ':host()'
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
translation_of: Web/CSS/:host()
original_slug: Web/CSS/:host()
browser-compat: css.selectors.hostfunction
---
{{CSSRef}}

**`:host()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)関数で、その中で使われている CSS を含む[シャドウ DOM](/ja/docs/Web/Web_Components/Using_shadow_DOM) のシャドウホストを選択します（従ってカスタム要素をそのシャドウ DOM 内部から選択できます）。ただし、関数の引数として与えられたセレクターがシャドウホストと一致した場合のみです。

この最も明白な使用法は、特定のカスタム要素インスタンスにのみクラス名を付け、関数の引数として関連するクラスセレクターを指定することです。特定の祖先の内部にあるカスタム要素のインスタンスのみを選択するために、子孫セレクター式でこれを使用することはできません。それは {{CSSxRef(":host-context()")}} の仕事です。

> **Note:** これは、シャドウ DOM の外部で使用されても効果がありません。

```css
/* セレクターの引数に一致する場合のみ、
   シャドウルートのホストを選択 */
:host(.special-custom-element) {
  font-weight: bold;
}
```

## 構文

{{CSSSyntax}}

## 例

### シャドウホストの選択的なスタイル付け

以下のスニペットは、 [host-selectors example](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([ライブでも確認](https://mdn.github.io/web-components-examples/host-selectors/)) から引用したものです。

この例では、テキストを囲むことができるシンプルなカスタム要素 `<context-span>` を用意しています。

```html
<h1>Host selectors <a href="#"><context-span>example</context-span></a></h1>
```

要素のコンストラクター内で `style` と `span` の各要素を作成し、 `span` にカスタム要素の内容を入れ、 `style` 要素にいくつかの CSS ルールを入れています。

```js
let style = document.createElement('style');
let span = document.createElement('span');
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({mode: 'open'});
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent = 'span:hover { text-decoration: underline; }' +
                    ':host-context(h1) { font-style: italic; }' +
                    ':host-context(h1):after { content: " - no links in headers!" }' +
                    ':host-context(article, aside) { color: gray; }' +
                    ':host(.footer) { color : red; }' +
                    ':host { background: rgba(0,0,0,0.1); padding: 2px 5px; }';
```

ルール `:host(.footer) { color : red; }` は、文書内の `<context-span>` 要素（この例ではシャドウホスト）のインスタンスで `footer` クラスがあるものにスタイルを設定します。このルールを使って {{htmlelement("footer")}} 内の要素のインスタンスに特殊な色を設定しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブコンポーネント](/ja/docs/Web/Web_Components)
- {{CSSxRef(":host")}}
- {{CSSxRef(":host-context()")}}
