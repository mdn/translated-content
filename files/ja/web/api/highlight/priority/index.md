---
title: "Highlight: priority プロパティ"
short-title: priority
slug: Web/API/Highlight/priority
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

文書内で重複する {{domxref("Range")}} オブジェクトを作成することができます。

複数の異なる {{domxref("Highlight")}} オブジェクトで重複する範囲が使用され、それらのハイライトが {{cssxref("::highlight")}} 擬似要素を使用してスタイル設定されている場合、スタイルが競合する可能性があります。

2 つのテキスト範囲が重なり、どちらも {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}} を使用して強調表示されており、どちらも CSS プロパティの `color` を使用してスタイル設定されている場合、ブラウザーは、重なり合う部分のテキストのスタイル設定に使用する色を決定する必要があります。

既定では、すべてのハイライトは同じ優先度を持ち、ブラウザーは、重複する部分のスタイル設定には、最も最近登録されたハイライトを指定します。

{{domxref("Highlight")}} インターフェイスの `priority` プロパティは、この既定の動作を変更し、重なり合う部分でスタイル競合を解決するために使用するハイライトのスタイルを決定するために使用する{{jsxref("Number", "数値", "", "nocode")}}です。

ハイライトのスタイルはすべて適用され、ブラウザーが競合を解決する必要があるのは、複数のハイライトが重なって同じ CSS プロパティが使用されている場合のみであることに注意してください。ハイライトのスタイルの競合の解決は、 {{cssxref("::highlight")}} 擬似要素ルールがソースに表示される順序や、 CSS プロパティが `!important` としてマークされているかどうかにも依存しません。

## 値

整数です。

## 例

### 既定のプロパティ

#### HTML

```html live-sample___default_priority
<p>Time is an illusion. Lunchtime doubly so.</p>
```

#### CSS

```css live-sample___default_priority
::highlight(highlight-2) {
  color: blue;
}

::highlight(highlight-1) {
  color: white;
  background: orange;
}
```

#### JavaScript

```js live-sample___default_priority
const text = document.querySelector("p").firstChild;

// 2 つの重なり合うハイライトを作成
const range1 = new Range();
range1.setStart(text, 5);
range1.setEnd(text, 25);

const range2 = new Range();
range2.setStart(text, 15);
range2.setEnd(text, 35);

const highlight1 = new Highlight(range1);
const highlight2 = new Highlight(range2);

CSS.highlights.set("highlight-1", highlight1);
CSS.highlights.set("highlight-2", highlight2);
```

#### 結果

下記のように、既定では、2 つの登録済みハイライトが重なっているテキストノードの部分は、 `highlight-2` が `highlight-1` の後に登録されているため、青色で表示されます。 `highlight-1` で定義された背景色は、他の背景色と競合しないため、 `range1` 範囲全体に記載されます。

{{EmbedLiveSample("Default priority")}}

### 優先度の設定

#### HTML

```html live-sample___setting_priority
<button id="prioritize-1" type="button">優先度付け 1</button>
<button id="prioritize-2" type="button">優先度付け 2</button>
<button id="reset" type="button">リセット</button>
<p>Time is an illusion. Lunchtime doubly so.</p>
```

#### CSS

```css live-sample___setting_priority
::highlight(highlight-1) {
  background-color: blue;
  color: white;
}

::highlight(highlight-2) {
  background-color: orange;
}
```

#### JavaScript

```js live-sample___setting_priority
const text = document.querySelector("p").firstChild;

// 2 つの重なり合うハイライトを作成
const range1 = new Range();
range1.setStart(text, 5);
range1.setEnd(text, 25);

const range2 = new Range();
range2.setStart(text, 15);
range2.setEnd(text, 35);

const highlight1 = new Highlight(range1);
const highlight2 = new Highlight(range2);

CSS.highlights.set("highlight-1", highlight1);
CSS.highlights.set("highlight-2", highlight2);

// ハイライトの優先順位を変更するボタンを追加
const prioritize1 = document.querySelector("#prioritize-1");
const prioritize2 = document.querySelector("#prioritize-2");
const reset = document.querySelector("#reset");

prioritize1.addEventListener("click", () => {
  highlight1.priority = 1;
  highlight2.priority = 0;
});

prioritize2.addEventListener("click", () => {
  highlight1.priority = 0;
  highlight2.priority = 1;
});

reset.addEventListener("click", () => {
  highlight1.priority = 0;
  highlight2.priority = 0;
});
```

#### 結果

下記のように、既定では、 2 つの登録されたハイライトが重なっているテキストノードの部分は、`highlight-2` が `highlight-1` の後に登録されているため、青色で表示されます。

{{EmbedLiveSample("Setting priority")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
