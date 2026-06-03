---
title: "Element: checkVisibility() メソッド"
short-title: checkVisibility()
slug: Web/API/Element/checkVisibility
l10n:
  sourceCommit: 2b07e7febdc4b51243873b0b4978228a603f3f73
---

{{APIRef("DOM")}}

**`checkVisibility()`** は {{domxref("Element")}} インターフェイスのメソッドで、この要素が可視状態であるかどうかを検査します。

このメソッドは以下のどちらかの場合に `false` を返します。

- 例えば CSS の {{cssxref("display")}} プロパティが [`none`](/ja/docs/Web/CSS/Reference/Properties/display#none) または [`contents`](/ja/docs/Web/CSS/Reference/Properties/display#contents) に設定されている場合のように、要素に関連づけられたボックスがない場合。
- 要素または祖先要素が {{cssxref("content-visibility")}} プロパティを [`hidden`](/ja/docs/Web/CSS/Reference/Properties/content-visibility#hidden) に設定しているため、要素が描画されない場合。

オプションの引数を指定することで、「可視」の意味を他の解釈として検査することができます。
例えば、要素の不透明度が `0` であるかどうか、要素の [`visibility`](/ja/docs/Web/CSS/Reference/Properties/visibility) プロパティの値が不可視であるかどうか、要素 {{cssxref("content-visibility")}} プロパティの値が [`auto`](/ja/docs/Web/CSS/Reference/Properties/content-visibility#auto) であり、現在その描画がスキップされているかどうかを追加で検査することができます。

## 構文

```js-nolint
checkVisibility(options)
```

### 引数

- `options` {{optional_inline}}
  - : 実行する追加チェックを示すオブジェクト。
    可能なオプションは以下の通りです。
    - `contentVisibilityAuto`
      - : `true` を指定すると、要素 {{cssxref("content-visibility")}} プロパティに値 [`auto`](/ja/docs/Web/CSS/Reference/Properties/content-visibility#auto) がある（または継承している）場合に、現在その描画がスキップされているかどうかを調べます。
        既定では `false` です。
    - `opacityProperty`
      - : `true` を指定すると、要素の {{cssxref("opacity")}} プロパティが `0` の値である（または継承している）かどうかを調べます。
        既定では `false` です。
    - `visibilityProperty`
      - : `true` を指定すると、{{cssxref("visibility")}} プロパティの値によって要素が不可視になっているかどうかを調べます。
        既定では `false` です。

        > [!NOTE]
        > 不可視の要素には、[`visibility: hidden`](/ja/docs/Web/CSS/Reference/Properties/visibility#hidden) が設定された要素や、[`visibility: collapse`](/ja/docs/Web/CSS/Reference/Properties/visibility#collapse) が設定された要素が含まれます。

    - `checkOpacity`
      - : [`opacityProperty`](#opacityproperty) の過去の別名です。
    - `checkVisibilityCSS`
      - : [`visibilityProperty`](#visibilityproperty) の過去の別名です。

### 返値

以下の条件に当てはまる場合は `false`、当てはまらない場合は `true` となります。

- 要素に関連づけられたボックスがない場合。
- 要素の {{cssxref("content-visibility")}} プロパティが [`hidden`](/ja/docs/Web/CSS/Reference/Properties/visibility#hidden) の値である（または継承している）場合。
- `opacityProperty`（または `checkOpacity`）が `true` で、要素 {{cssxref("opacity")}} プロパティの値が `0` である（または継承している）場合。
- `visibilityProperty`（または `checkVisibilityCSS`）が `true` で、{{cssxref("visibility")}} プロパティの値によって要素が不可視になっている場合。
- `contentVisibilityAuto` が `true` で、{{cssxref("content-visibility")}} プロパティの値が [`auto`](/ja/docs/Web/CSS/Reference/Properties/content-visibility#auto) の値で（または継承している）、要素の描画がスキップされている場合。

## 例

### さまざまな CSS で checkVisibility() の検査

次の例では、`display`、`content-visibility`、`visibility`、`opacity` の各 CSS プロパティのさまざまな値の場合に、`checkVisibility()` の結果がどのように変化するかを検査することができます。

#### HTML

この HTML は `<select>` 要素を `checkVisibility()` の結果に影響を与える CSS プロパティのために定義します。
最初の値 （選択された既定値） は、要素に適用されたときに `checkVisibility()` が `true` を返すようにし、他の値は可視性に影響します。

```html
<select id="css_display" name="css_display">
  <option value="block" selected>display: block</option>
  <option value="none">display: none</option>
  <option value="content">display: content</option>
</select>

<select id="css_content_visibility" name="css_content_visibility">
  <option value="visible" selected>content-visibility: visible</option>
  <option value="hidden">content-visibility: hidden</option>
  <option value="auto">content-visibility: auto</option>
</select>

<select id="css_opacity" name="css_opacity">
  <option value="1" selected>opacity: 1</option>
  <option value="0">opacity: 0</option>
</select>

<select id="css_visibility" name="css_visibility">
  <option value="visible" selected>visibility: visible</option>
  <option value="hidden">visibility: hidden</option>
  <option value="collapse">visibility: collapse</option>
</select>
```

次に `<pre>` があり、引数にオプションを渡さなかった場合と、別個のオプション値が渡された場合の `checkVisibility()` の検査の結果を出力するために使用します。
最後には、検査される要素（選択された CSS プロパティ値が適用される要素）があります。

```html
<pre id="output_result"></pre>
<div id="test_element">可視性を検査する要素</div>
```

#### CSS

CSSはテストする要素を強調表示するだけです。

```css
#test_element {
  border: solid;
  border-color: blue;
}
```

#### JavaScript

下記のコードは、それぞれの `<select>` 要素を取得しています。
始めに `updateCSS()` メソッドが呼び出され、select 要素が変わるたびに、選択した CSS を対象とする要素に適用します。

```js
const displayCssSelect = document.getElementById("css_display");
const contentVisibilityCssSelect = document.getElementById(
  "css_content_visibility",
);
const displayCssOpacity = document.getElementById("css_opacity");
const displayCssVisibility = document.getElementById("css_visibility");

const outputResult = document.getElementById("output_result");
const elementToCheck = document.getElementById("test_element");

updateCSS();

const cssSelectors = document.querySelectorAll("select");
cssSelectors.forEach((select) => {
  select.addEventListener("change", (event) => {
    updateCSS();
  });
});

function updateCSS() {
  // 選択した CSS プロパティを対象とする要素に適用する
  elementToCheck.style.display = displayCssSelect.value;
  elementToCheck.style.contentVisibility = contentVisibilityCssSelect.value;
  elementToCheck.style.opacity = displayCssOpacity.value;
  elementToCheck.style.visibility = displayCssVisibility.value;

  // 既定および各オプションでは、要素に対して checkVisibility() を呼び出す
  const defaultVisibilityCheck = elementToCheck.checkVisibility();
  const opacityVisibilityCheck = elementToCheck.checkVisibility({
    opacityProperty: true,
  });
  const cssVisibilityCheck = elementToCheck.checkVisibility({
    visibilityProperty: true,
  });
  const contentVisibilityAutoCheck = elementToCheck.checkVisibility({
    contentVisibilityAuto: true,
  });

  // テスト結果の出力
  outputResult.innerText = `下記の要素の検査結果（非表示になる可能性あり）:
- checkVisibility() の結果: ${defaultVisibilityCheck}
- checkVisibility({opacityProperty: true}) の結果: ${opacityVisibilityCheck}
- checkVisibility({visibilityProperty: true}) の結果: ${cssVisibilityCheck}
- checkVisibility({contentVisibilityAuto: true}) の結果: ${contentVisibilityAutoCheck}`;
}
```

#### 結果

結果は下記に示す通りです。
選択範囲を変更すると、その結果が（青い輪郭線の）検査要素に適用され、それぞれの設定に対する `checkVisibility()` の結果が表示されます。
例えば、`opacity: 0` を設定した場合、その検査（のみ）は `false` を示すはずです。
しかし、`display: none` と設定した場合は、すべての検査で `false` を返すはずです。

{{ EmbedLiveSample('Test checkVisibility() with varied CSS', "100%", "200" ) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
