---
title: ':host-context()'
slug: Web/CSS/:host-context()
tags:
  - ':host-context()'
  - CSS
  - 実験的
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.host-context
translation_of: Web/CSS/:host-context()
---
<div>{{CSSRef}}</div>

**`:host-context()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)関数で、内部で使用される CSS を含む[シャドウ DOM](/ja/docs/Web/Web_Components/Using_shadow_DOM) のシャドウホストを選択します (そのため、シャドウ DOM の中のカスタム要素を選択することができます)。 — しかし、関数の引数として与えられたセレクターがシャドウホストの祖先に一致した場合のみです。

言い換えれば、これによってカスタム要素やそのカスタム要素のシャドウ DOM 内のものは、外部 DOM 内の位置や、祖先要素に適用されたクラスや属性に基づいて、異なるスタイルを適用することができます。

典型的な使い方としては、子孫のセレクター式 (例えば `h1`) を使って、 `<h1>` の中にあるカスタム要素のインスタンスのみを選択することができます。もう一つの典型的な使用法は、内部要素が任意の子孫要素のクラスや属性に反応するようにすることです。例えば、 `.dark-theme` クラスが `<body>` に適用されたときに、異なるテキスト色を適用することができます。

> **Note:** これはシャドウ DOM の外で使用した場合、効果がありません。

```css
/* 与えられたセレクター引数の子孫である場合のみ、
   シャドウルートホストを選択します。 */
:host-context(h1) {
  font-weight: bold;
}

:host-context(main article) {
  font-weight: bold;
}

/* .dark-theme クラスが文書の body に適用されているとき、
    段落のテキストの色を黒から白に変更します。 */
p {
  color: #000;
}

:host-context(body.dark-theme) p {
  color: #fff;
}
```

## 構文

{{CSSSyntax}}

## 例

### シャドウホストの選択的なスタイル付け

以下のスニペットは [host-selectors の例](https://github.com/mdn/web-components-examples/tree/master/host-selectors)から取ったものです ([ライブ版もあります](https://mdn.github.io/web-components-examples/host-selectors/)。

この例には、単純なカスタム要素 — `<context-span>` — があり、テキストを囲むことができます。

```html
<h1>Host selectors <a href="#"><context-span>example</context-span></a></h1>
```

要素のコンストラクターの中で、 `style` および `span` 要素を生成し、 `span` の中をカスタム要素の内容で埋め、 `style` 要素をいくつかの CSS 規則で埋めます。

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

`:host-context(h1) { font-style: italic; }` および `:host-context(h1):after { content: " - no links in headers!" }` の規則は `<h1>` の中にある `<context-span>` 要素 (このインスタンスのシャドウホスト) のインスタンスをスタイル付けします。これは設計上、 `<h1>` 内部にカスタム要素が現れるべきではないことを明確にするために使用しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブコンポーネント](/ja/docs/Web/Web_Components)
- {{cssxref(":host")}}
- {{cssxref(":host()")}}
