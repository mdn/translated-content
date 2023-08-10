---
title: "Element: fullscreenchange イベント"
short-title: fullscreenchange
slug: Web/API/Element/fullscreenchange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

`fullscreenchange` イベントは、ある要素 ({{domxref("Element")}}) が全画面モードに切り替わったり、終了したりした直後に発生します。

このイベントは、全画面モードに移行しようとしている、あるいは全画面モードから脱出しようとしている `Element` に送られます。

`Element` が全画面モードに移行しようとしているのか、終了しようとしているのかを判別するには、 {{domxref("Document.fullscreenElement")}} の値をチェックしてください。この値が `null` ならば、要素が全画面モードを終了するところであり、そうでなければ全画面モードに移行するところです。

このイベントはキャンセルできません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("fullscreenchange", (event) => {});

onfullscreenchange = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

この例では、 `fullscreenchange` イベントのハンドラーは、 ID が `fullscreen-div` である要素に追加されます。

ユーザーが "Toggle Fullscreen Mode" ボタンをクリックすると、 `click` ハンドラーが `div` の全画面モードを切り替えます。もし `document.fullscreenElement` に値があれば、全画面モードを終了します。そうでなければ、 div は全画面モードに移行します。

`fullscreenchange` イベントが処理されたとき、要素の状態はすでに変化していることを思い出してください。よって、全画面モードへ変化した場合は、 `document.fullscreenElement` が全画面モードになった要素を指します。一方、 `document.fullscreenElement` が null の場合は、全画面モードが取り消されています。

すなわち、この例のコードでは、要素が現在全画面モードである場合、 `fullscreenchange` ハンドラーはコンソールへ全画面の要素の `id` をログ出力します。 `document.fullscreenElement` が null の場合は、このコードは全画面モードが終了した旨をログ出力します。

### HTML

```html
<h1>fullscreenchange event example</h1>
<div id="fullscreen-div">
  <button id="toggle-fullscreen">Toggle Fullscreen Mode</button>
</div>
```

### JavaScript

```js
function fullscreenchanged(event) {
  // document.fullscreenElement は、全画面モードにある要素があれば
  // それを指します。要素がなければ、このプロパティの値は null に
  // あります。
  if (document.fullscreenElement) {
    console.log(
      `Element: ${document.fullscreenElement.id} entered fullscreen mode.`,
    );
  } else {
    console.log("Leaving fullscreen mode.");
  }
}

const el = document.getElementById("fullscreen-div");

el.addEventListener("fullscreenchange", fullscreenchanged);
// or
el.onfullscreenchange = fullscreenchanged;

// トグルボタンがクリックされたら、全画面モードを切り替える
document
  .getElementById("toggle-fullscreen")
  .addEventListener("click", (event) => {
    if (document.fullscreenElement) {
      // exitFullscreen は Document オブジェクトでのみ使用可
      document.exitFullscreen();
    } else {
      el.requestFullscreen();
    }
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Document: fullscreenchange イベント](/ja/docs/Web/API/Document/fullscreenchange_event)
- [Element: fullscreenerror イベント](/ja/docs/Web/API/Element/fullscreenerror_event)
- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- [全画面 API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
