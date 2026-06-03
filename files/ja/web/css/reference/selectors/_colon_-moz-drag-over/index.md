---
title: :-moz-drag-over
slug: Web/CSS/Reference/Selectors/:-moz-drag-over
original_slug: Web/CSS/:-moz-drag-over
l10n:
  sourceCommit: 469d7dd1064fb2911aca110e1d653e19f3438ca5
---

{{Non-standard_header}}

**`:-moz-drag-over`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)であり、 {{domxref("HTMLElement/dragover_event", "dragover")}} イベントが呼び出された時に要素に一致します。

## 構文

```css
:-moz-drag-over {
  /* ... */
}
```

## 例

### HTML

```html
<div id="drop-target">
  <p>Drop target</p>
</div>

<div draggable="true">
  <p>Draggable</p>
</div>
```

### JavaScript

ほとんどの要素はデータをドロップするのに妥当な場所ではないため、ドロップを許可するには、[`dragenter`](/ja/docs/Web/API/HTMLElement/dragenter_event) イベントまたは [`dragover`](/ja/docs/Web/API/HTMLElement/dragover_event) イベント (またはその両方) を取り消すことで既定の動作を防ぐ必要があります。
この例では、`dragenter` イベントを取り消すだけです。これは、要素がドロップ対象になるかどうかをブラウザーが評価するときに最初に発生するイベントです。
詳細情報については、ドラッグ処理を運営しています： ドロップ対象を指定します。
詳しくは、[ドラッグ操作: ドロップ先の指定](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#ドロップ先の指定)を参照してください。

```js
const target = document.getElementById("drop-target");
/* dragenter イベントはドロップ先に発生する */
target.addEventListener(
  "dragenter",
  (event) => {
    // ドロップを受け付けるために、既定の動作が出て来ないようにする
    event.preventDefault();
  },
  false,
);
```

### CSS

```css
body {
  font-family: arial;
}
div {
  display: inline-block;
  width: 150px;
  height: 150px;
  border: 2px dotted black;
  background-color: aquamarine;
  margin: 1rem;
}
p {
  padding: 1rem;
}
```

以下の CSS は、ドラッグ可能な要素がドロップ領域に重なったときに、ドロップ対象の色を赤に変更します。

```css
#drop-target {
  background-color: cornflowerblue;
}
#drop-target:-moz-drag-over {
  background-color: red;
}
```

### 結果

{{EmbedLiveSample("Examples", "100%", "200px")}}

## 仕様書

いずれの標準にも含まれていません。

## 関連情報

- [Mozilla の CSS 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)
- [HTML ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
