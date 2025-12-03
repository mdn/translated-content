---
title: :host-context()
slug: Web/CSS/Reference/Selectors/:host-context
original_slug: Web/CSS/:host-context
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

**`:host-context()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、シャドウホスト（シャドウルートを保有する要素）とその DOM 上の祖先のセレクターに基づいて、[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) 内の要素のスタイルを別々に設定することができます。

通常、シャドウ DOM 内の要素は、その外部の DOM から分離されています。`:host-context()` を使用すると、このシャドウ DOM の「外側を覗き見」して、要素の親要素のいずれかが特定の CSS セレクターと一致するかどうかを確認することができます。例えば、`<body>` に `.dark-theme` クラスが適用されている場合、シャドウルート内の要素に別のテキストの色を適用することができます。

これを次のように考えてみてください。 `<greenhouse>` という独自の要素があり、その中に `<chameleon>` が存在するとします。ここで、 `<greenhouse>` はシャドウ DOM ホストであり、 `<chameleon>` 要素はシャドウ DOM 内にあります。 `:host-context()` を使用すると、 `<greenhouse>` の環境に応じて `<chameleon>` の外観を変更することができます。 `<greenhouse>` が日なた（クラス "sunny-theme" が指定されている）にある場合、 `<chameleon>` は黄色になります。 `<greenhouse>` が日陰（代わりにクラス "shady-theme" が適用されている）にある場合、 `<chameleon>` は青色になります。

このセレクターは、すべてのシャドウ境界を貫通します。これは、`<greenhouse>` またはホストの祖先および祖先の DOM のいずれかに直接適用されている、日なたのテーマまたは日陰のテーマを、文書ルートに到達するまでずっと見ていきます。

セレクターを直接 `<greenhouse>` ホストのみに制限したり、選択をホストの DOM に制限したりするには、代わりに {{cssxref(":host")}} または {{cssxref(":host_function", ":host()")}} 擬似クラスを使用します。

> [!NOTE]
> これは、シャドウ DOM の外で使用しても効果はありません。

`:host-context()` の[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)は、[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)の詳細度と、関数の引数として渡されたセレクターの詳細度の合計です。

{{InteractiveExample("CSS デモ: :host-context()", "tabbed-shorter")}}

```css interactive-example
/* 以下の CSS がシャドウ DOM 内に適用されています。 */

:host-context(.container) {
  border: 5px dashed green;
}

:host-context(h1) {
  color: red;
}
```

```html interactive-example
<!-- シャドウ DOM 外の要素 -->
<div class="container">
  <h1 id="shadow-dom-host"></h1>
</div>
```

```js interactive-example
const shadowDom = init();

// シャドウ DOM に <span> 要素を追加
const span = document.createElement("span");
span.textContent = "シャドウ DOM の内部";
shadowDom.appendChild(span);

// シャドウ DOM を #shadow-dom-host 要素に添付する
function init() {
  const host = document.getElementById("shadow-dom-host");
  const shadowDom = host.attachShadow({ mode: "open" });

  const cssTab = document.querySelector("#css-output");
  const shadowStyle = document.createElement("style");
  shadowStyle.textContent = cssTab.textContent;
  shadowDom.appendChild(shadowStyle);

  cssTab.addEventListener("change", () => {
    shadowStyle.textContent = cssTab.textContent;
  });
  return shadowDom;
}
```

```css
/* 指定されたセレクター引数の子孫である場合にのみ、
   シャドウルートホストを選択します。 */
:host-context(h1) {
  font-weight: bold;
}

/* .dark-theme クラスが文書本体に適用されている場合に、
   段落のテキストの色を黒から白に変更します。 */
p {
  color: black;
}

:host-context(body.dark-theme) p {
  color: white;
}
```

## 構文

```css-nolint
:host-context(<compound-selector>) {
  /* ... */
}
```

## 例

### シャドウホストの選択的なスタイル設定

以下は、[ホストセレクターの例](https://github.com/mdn/web-components-examples/tree/main/host-selectors)（[ライブでも見る](https://mdn.github.io/web-components-examples/host-selectors/)）から抜粋したものです。

この例では、テキストを囲むことができる基本的なカスタム要素 `<context-span>` があります。

```html
<h1>
  ホストセレクターの<a href="#"><context-span>例</context-span></a>
</h1>
```

要素のコンストラクター内で `style` 要素と `span` 要素を作成し、 `span` 要素にカスタム要素のコンテンツを入れ、`style` 要素に CSS ルールを入れます。

```js
const style = document.createElement("style");
const span = document.createElement("span");
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({ mode: "open" });
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent =
  "span:hover { text-decoration: underline; }" +
  ":host-context(h1) { font-style: italic; }" +
  ':host-context(h1)::after { content: " - no links in headers!" }' +
  ":host(.footer) { color : red; }" +
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

`:host-context(h1) { font-style: italic; }` および `:host-context(h1):after { content: " - no links in headers!" }` のルールは `<h1>` 内の `<context-span>` 要素のインスタンス（この例ではシャドウホスト）をスタイル設定します。このデザインでは、カスタム要素が `<h1>` の中に現れてはいけないことを明確にするために使用しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブコンポーネント](/ja/docs/Web/API/Web_components)
- CSS {{cssxref(":host")}} 擬似クラス
- CSS {{cssxref(":host_function", ":host()")}} 擬似クラス
- CSS {{cssxref(":state",":state()")}} 擬似クラス
- CSS {{CSSXref("::slotted")}} 擬似要素
- HTML {{HTMLElement("template")}} 要素
- [CSS スコープ](/ja/docs/Web/CSS/Guides/Scoping)モジュール
