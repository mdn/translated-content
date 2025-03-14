---
title: Window.getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 27e11bf5ee2425dc6b939d0d1825ac741414a688
---

{{APIRef("CSSOM")}}

**`Window.getComputedStyle()`** メソッドは、アクティブなスタイルシートを適用し、それらの値に含まれる可能性のある基本的な計算を解決した後、要素のすべての CSS プロパティの値を含むオブジェクトを返します。

個々の CSS プロパティの値は、オブジェクトによって提供される API を介してアクセスするか、CSS プロパティ名でインデックスを作成することでアクセスすることができます。

## 構文

```js
getComputedStyle(element);
getComputedStyle(element, pseudoElt);
```

### 引数

- `element`
  - : この {{DOMxRef("Element")}} の計算したスタイルを取得します。
- `pseudoElt` {{optional_inline}}
  - : 一致させる擬似要素を指定する文字列。実在する要素の場合は省略 (または `null`)。

### 返値

_生きた_ {{DOMxRef("CSSStyleDeclaration")}} オブジェクトで、要素のスタイルが変わると自動で更新されます。

### 例外

- {{JSxRef("TypeError")}}

  - : 渡されたオブジェクトが {{DOMxRef("Element")}} ではないか、 `pseudoElt` が有効な擬似要素セレクターではないか、 {{CSSxRef("::part", "::part()")}} または {{CSSxRef("::slotted", "::slotted()")}} である場合。

    > [!NOTE]
    > 有効な擬似要素とは構文的に適切であることを指します。例えば `::unsupported` は擬似要素として対応されていませんが、有効と判断されます。さらに、最新の W3 標準では `::before` と `::after` のみを[明示的に対応しています](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle)が、CSS の WG 草案は[この値を制限していません](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle)。 ブラウザーの互換性は様々かもしれません。

## 例

この例では、 {{HTMLElement("p")}} の要素のスタイルを設定してから、`getComputedStyle()` を使用してそれらのスタイルを取得し、それらを `<p>` のテキストコンテンツに出力します。

### HTML

```html
<p>Hello</p>
```

### CSS

```css
p {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  font: 2rem/2 sans-serif;
  text-align: center;
  background: purple;
  color: white;
}
```

### JavaScript

```js
const para = document.querySelector("p");
const compStyles = window.getComputedStyle(para);
para.textContent =
  `My computed font-size is ${compStyles.getPropertyValue("font-size")},\n` +
  `and my computed line-height is ${compStyles.getPropertyValue(
    "line-height",
  )}.`;
```

### 結果

{{EmbedLiveSample('Examples', '100%', '240px')}}

## 解説

返されるオブジェクトは {{DOMxRef("CSSStyleDeclaration")}} 型で、これは要素の {{DOMxRef("HTMLElement.style", "style")}} プロパティから返されるオブジェクトと同じです。しかし、2 つのオブジェクトは異なる目的を持っています。

- `getComputedStyle` から返されたオブジェクトは読み取り専用で、 `<style>` 要素や外部スタイルシートで設定されたものも含めて、要素のスタイルを検査するために使用するためのものです。
- `element.style` オブジェクトは、その要素にスタイルを**設定**したり、 JavaScript の操作やグローバルの `style` 属性から直接追加されたスタイルを検査したりするために使用するためのものです。

最初の引数は {{domxref("Element")}} でなければなりません。要素以外、例えば {{DOMxRef("Text")}} ノードであった場合はエラーが発生します。

## defaultView

多くのコードサンプルでは、 `getComputedStyle` は {{DOMxRef("document.defaultView")}} オブジェクトから使用されています。ほとんどの場合、 `getComputedStyle` は `window` オブジェクト上に存在するので、これは必要ありません。 `defaultView` パターンは、 `window` のテスト仕様を書きたくない人たちと、 Java でも使える API を作りたくない人たちの組み合わせだったのかもしれません。

## 擬似要素の使用

`getComputedStyle` は擬似要素 (例えば `::after`, `::before`, `::marker`, `::line-marker` — [the pseudo-element spec](https://www.w3.org/TR/css-pseudo-4/) を参照してください) からスタイル情報を取得することができます。

```html
<style>
  h3::after {
    content: " rocks!";
  }
</style>

<h3>Generated content</h3>

<script>
  const h3 = document.querySelector("h3");
  const result = getComputedStyle(h3, ":after").content;

  console.log("the generated content is: ", result); // returns ' rocks!'
</script>
```

## メモ

- 返された {{DOMxRef("CSSStyleDeclaration")}} オブジェクトは、 CSS プロパティの**個別指定**の名前のアクティブな値を含んでいます。例えば、 `border-bottom-width` の値は `border-width` や `border` などの[一括指定プロパティ名](/ja/docs/Web/CSS/Shorthand_properties)ではアクセスできません。 `font-size` のような個別指定の名前だけで値を問い合わせるのが最も安全です。 `font` のような一括指定の名前では、ほとんどのブラウザーでは動作しません。
- CSS のプロパティ値は、 `getPropertyValue(propName)` API を使用してアクセスすることも、 `obj['z-index']` や `obj.zIndex`のようにオブジェクトに直接添字を指定してアクセスすることもできます。
- `getComputedStyle` によって返される値は、{{CSSxRef("resolved_value", "解決値", "", 1)}}です。これらの値は通常、CSS 2.1 の{{CSSxRef("computed_value","計算値", "", 1)}}と同じですが、 `width`, `height`, `padding` のような古いプロパティの場合は、{{CSSxRef("used_value","使用値", "", 1)}}と同じになります。もともと CSS 2.0 では、*計算値*はカスケードと継承後のプロパティの「使用可能な」最終値として定義されていましたが、 CSS 2.1 ではレイアウトする前の値として再定義され、*使用値*はレイアウト後の値として再定義されています。 CSS 2.0 のプロパティでは、 `getComputedStyle` は計算値の古い意味を返しますが、現在は**使用値**と呼ばれています。レイアウト前の値とレイアウト後の値の違いの例として、 `width` や `height` のパーセント値の解像度があり、これらは*使用値*のみ同等のピクセル数に置き換えられます。
- 返される値が意図的に不正確になる場合があります。 "CSS History Leak" のセキュリティ問題を回避するために、ブラウザーは訪問したリンクの計算されたスタイルについて嘘をつき、ユーザーがリンク先の URL を訪問していないかのような値を返すことがあります。これがどのように実装されているかについては、 [Plugging the CSS History Leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) と [Privacy-related changes coming to CSS :visited](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) を参照してください。
- [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions)が動作している間、 `getComputedStyle` は、 Firefox では元のプロパティ値を返しますが、 WebKit では最終的なプロパティ値を返します。
- Firefox では、 `auto` の値を持つプロパティは `auto` の値ではなく、使用値を返します。そのため、 `top:auto` と `bottom:0` を `height:30px` の要素に適用し、包含ブロックを `height:100px` を適用すると、 Firefox の `top` のスタイルの計算値は、 100 − 30 = 70 なので `70px` となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("window.getDefaultComputedStyle")}}
- {{CSSxRef("resolved_value", "Resolved Value")}}
