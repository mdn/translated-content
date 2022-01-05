---
title: ':host'
slug: Web/CSS/:host
tags:
  - ':host'
  - CSS
  - DOM
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
  - ウェブコンポーネント
  - shadow
  - シャドウ DOM
browser-compat: css.selectors.host
translation_of: Web/CSS/:host
---
{{ CSSRef }}

**`:host`** は [CSS](/ja/docs/Web/CSS) の [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、その CSS を含む[シャドウ DOM](/ja/docs/Web/Web_Components/Using_shadow_DOM) のシャドウホストを選択します。 — 言い換えれば、シャドウ DOM の中からカスタム要素を選択できるようにします。

> **Note:** これはシャドウ DOM の外で使われたときには効果がありません。

```css
/* シャドウのルートホストを選択 */
:host {
  font-weight: bold;
}
```

## 構文

    :host

## 例

### シャドウホストのスタイル付け

以下のスニペットは、 [host セレクターの例](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([ライブでも参照してください](https://mdn.github.io/web-components-examples/host-selectors/)) から取りました。

この例では、テキストの周りを囲むことができる簡単なカスタム要素 — `<context-span>` — を使います。

```html
<h1>Host selectors <a href="#"><context-span>example</context-span></a></h1>
```

要素のコンストラクターの中で、 `style` および `span` 要素を作成し、 `span` の中をカスタム要素の中身で埋め、 `style` 要素をいくつかの CSS ルールで埋めます。

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

`:host { background: rgba(0,0,0,0.1); padding: 2px 5px; }` のルールは、文書中の `<context-span>` 要素 (このインスタンスのシャドウホスト) のすべてのインスタンスにスタイル付けします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブコンポーネント](/ja/docs/Web/Web_Components)
- {{cssxref(":host()")}}
- {{cssxref(":host-context()")}}
