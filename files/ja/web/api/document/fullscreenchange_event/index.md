---
title: "Document: fullscreenchange イベント"
slug: Web/API/Document/fullscreenchange_event
l10n:
  sourceCommit: 77b8cdb3a05999ade4a269d0ef2443618bb7cd66
---

{{APIRef}}

`fullscreenchange` イベントは、ブラウザーが全画面モードに移行したり終了したりした直後に発生します。

このイベントは、全画面モードに移行または終了しようとしている `Element` に送られ、それから `Document` までバブリングします。

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

この例では、 `fullscreenchange` イベントのハンドラーが {{domxref("Document")}} に追加されます。

ユーザーが "Toggle Fullscreen Mode" ボタンをクリックすると、 `click` ハンドラーは `div` の全画面モードを切り替えます。もし `document.fullscreenElement` に値があれば、全画面モードを終了します。そうでない場合は、 div は全画面モードに配置されます。

`fullscreenchange` イベントが処理される時点で、要素の状態はすでに変化していることを覚えておいてください。そのため、もし変更が全画面モードへのものであれば、 `document.fullscreenElement` は、これで全画面モードになった要素を指すことになります。他にも、 `document.fullscreenElement` が null の場合、全画面モードは取り消される可能性があります。

この例のコードで意味しているのは、ある要素が現在全画面モードである場合、 `fullscreenchange` ハンドラーは全画面要素の `id` をコンソールにログ出力するということです。もし `document.fullscreenElement` が null ならば、このコードは全画面モードを離れるための変更であることをメッセージとしてログ出力します。

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

document.addEventListener("fullscreenchange", fullscreenchanged);
// or
document.onfullscreenchange = fullscreenchanged;

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

- {{domxref("Document/fullscreenerror_event", "fullscreenerror")}}
- {{domxref("Element")}}: {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} イベント
- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- [全画面 API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
