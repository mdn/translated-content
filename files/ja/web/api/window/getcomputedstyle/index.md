---
title: "Window: getComputedStyle() メソッド"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{APIRef("CSSOM")}}

**`Window.getComputedStyle()`** メソッドは、アクティブなスタイルシートを適用し、それらの値に含まれる可能性のある基本的な計算を解決した後の、要素のすべての CSS プロパティの値を含むオブジェクトを返します。

個々の CSS プロパティの値は、返される {{DOMxRef("CSSStyleDeclaration")}} オブジェクトによって提供される API を介してアクセスするか、 CSS プロパティ名でインデックスを引くことでアクセスすることができます。 `getComputedStyle` から返される値は[解決値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#解決値)です。

## 構文

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### 引数

- `element`
  - : この {{DOMxRef("Element")}} の計算したスタイルを取得します。
- `pseudoElt` {{optional_inline}}
  - : 一致させる擬似要素を指定する文字列。実在する要素の場合は省略（または `null`）。

### 返値

_生きた_ {{DOMxRef("CSSStyleDeclaration")}} オブジェクトで、要素のスタイルが変わると自動で更新されます。

注意事項:

- 返される {{DOMxRef("CSSStyleDeclaration")}} オブジェクトには、CSS プロパティの個別指定名および省略名のアクティブな値が含まれます。例えば、返されるオブジェクトには、 {{cssxref("border-width")}} および {{cssxref("border")}} [一括指定プロパティ名](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)に加えて {{cssxref("border-bottom-width")}} の値の項目が含まれます。
- 返値は、意図的に不正確にされる場合もあります。セキュリティ上の課題である「CSS 履歴の漏洩」を避けるため、ブラウザーは、訪問したリンクの計算済みスタイルについて、ユーザーがリンク先の URL を訪問したことがないかのように値を返して偽装する場合があります。この実装の例については、 [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) および [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) を参照してください。
- [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)の間、 `getComputedStyle` は Firefox では元のプロパティの値を返しますが、WebKit では最終的なプロパティの値を返します。
- Firefox では、値 `auto` のプロパティは、値 `auto` ではなく、使用値を返します。したがって、`height:30px` の要素に `top:auto` および `bottom:0` を適用し、その要素を `height:100px` の包含ブロックで囲んだ場合、 Firefox の `top` の計算値は 100 − 30 = 70 であるため、`70px` が返されます。
- 互換性の理由から、シリアル化された色値は、アルファチャンネルの値が正確に `1` の場合は [`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb) 色として、それ以外の場合は `rgba()` 色として表現されます。どちらの場合も、区切り文字としてカンマを使用した古い構文が使用されます（例えば `rgb(255, 0, 0)`）。

返されるオブジェクトは {{DOMxRef("CSSStyleDeclaration")}} 型であり、要素の {{DOMxRef("HTMLElement/style", "style")}} プロパティから返されるオブジェクトと同じです。ただし、2 つのオブジェクトは目的が異なります。

- `getComputedStyle` から取得されるオブジェクトは読み取り専用であり、`<style>` 要素または外部スタイルシートによって設定されたものも含め、要素のスタイルを検査するために使用します。
- `element.style` オブジェクトは、その要素のスタイルを**設定**したり、 JavaScript による操作やグローバルの `style` 属性から直接追加されたスタイルを検査したりするために使用します。

### 例外

- {{JSxRef("TypeError")}}
  - : 渡されたオブジェクトが {{DOMxRef("Element")}} ではないか、 `pseudoElt` が有効な擬似要素セレクターではないか、 {{CSSxRef("::part", "::part()")}} または {{CSSxRef("::slotted", "::slotted()")}} である場合。

    > [!NOTE]
    > 有効な擬似要素とは、構文的に適切であることを指します。例えば `::unsupported` は擬似要素としての対応はありませんが、有効と判断されます。さらに、最新の W3 標準では `::before` と `::after` のみを[明示的に対応しています](https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle)が、 CSS の WG 草案は[この値を制限していません](https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle)。ブラウザーの互換性は様々かもしれません。

## 例

### 計算値を受け取る

この例では、 {{HTMLElement("p")}} の要素のスタイルを設定してから、`getComputedStyle()` を使用してそれらのスタイルを取得し、それらを `<p>` のテキストコンテンツに出力します。

#### HTML

```html
<p>Hello</p>
```

#### CSS

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

#### JavaScript

```js-nolint
const para = document.querySelector("p");
const compStyles = window.getComputedStyle(para);
para.textContent =
  `この font-size の計算値は ${compStyles.getPropertyValue("font-size")} です。\n` +
  `この line-height の計算値は ${compStyles.getPropertyValue(
    "line-height",
  )} です。`;
```

#### 結果

{{EmbedLiveSample('retrieving_computed_styles', '100%', '240px')}}

### 擬似要素の使用

`getComputedStyle` は擬似要素 (例えば `::after`, `::before`, `::marker`, `::line-marker` — [the pseudo-element spec](https://www.w3.org/TR/css-pseudo-4/) を参照してください) からスタイル情報を取得することができます。

```html
<style>
  h3::after {
    content: " rocks!";
  }
</style>

<h3>生成コンテンツ</h3>

<script>
  const h3 = document.querySelector("h3");
  const result = getComputedStyle(h3, ":after").content;

  console.log("生成コンテンツ: ", result); // ' rocks!' を返す
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("window.getDefaultComputedStyle()")}}
- {{DOMxRef("CSSStyleDeclaration.getPropertyValue", "getPropertyValue()")}}
- {{domxref("Element.computedStyleMap()")}}
- [解決値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#解決値)
