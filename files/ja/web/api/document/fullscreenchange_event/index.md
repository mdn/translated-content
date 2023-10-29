---
title: "Document: fullscreenchange イベント"
short-title: fullscreenchange
slug: Web/API/Document/fullscreenchange_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
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

### `fullscreenchange` イベントのログ記録

この例では、 `fullscreenchange` イベントのハンドラーが {{domxref("Document")}} に追加されます。

ユーザーが "Toggle Fullscreen Mode" ボタンをクリックすると、 `click` ハンドラーは `div` の全画面モードを切り替えます。もし `document.fullscreenElement` に値があれば、全画面モードを終了します。そうでない場合は、 div は全画面モードに配置されます。

`fullscreenchange` イベントが処理される時点で、要素の状態はすでに変化していることを覚えておいてください。そのため、もし変更が全画面モードへのものであれば、 `document.fullscreenElement` は、これで全画面モードになった要素を指すことになります。他にも、 `document.fullscreenElement` が null の場合、全画面モードは取り消される可能性があります。

この例のコードで意味しているのは、ある要素が現在全画面モードである場合、 `fullscreenchange` ハンドラーは全画面要素の `id` をコンソールにログ出力するということです。もし `document.fullscreenElement` が null ならば、このコードは全画面モードを離れるための変更であることをメッセージとしてログ出力します。

#### HTML

```html
<h1>fullscreenchange イベントの例</h1>
<div id="fullscreen-div">
  <button id="toggle-fullscreen">全画面モードの切り替え</button>
  <pre id="logger"></pre>
</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

#fullscreen-div {
  height: 150px;
  padding: 1rem;
  background-color: pink;
}

#logger {
  height: 80px;
  padding: 0 0.5rem;
  background-color: white;
  overflow: scroll;
}
```

#### JavaScript

```js
const logger = document.querySelector("#logger");
const fullScreenElement = document.querySelector("#fullscreen-div");

function log(message) {
  logger.textContent = `${logger.textContent}\n${message}`;
}

function fullscreenchanged(event) {
  // document.fullscreenElement は、全画面モードにある要素があれば
  // それを指します。要素がなければ、このプロパティの値は null に
  // なります。
  if (document.fullscreenElement) {
    log(`要素: ${document.fullscreenElement.id} が全画面モードに入りました。`);
  } else {
    log("全画面モードを終了しました。");
  }
}

document.addEventListener("fullscreenchange", fullscreenchanged);

// トグルボタンがクリックされたら、全画面モードを切り替える
document.getElementById("toggle-fullscreen").addEventListener("click", () => {
  if (document.fullscreenElement) {
    // exitFullscreen は Document オブジェクトでのみ使用可
    document.exitFullscreen();
  } else {
    fullScreenElement.requestFullscreen();
  }
});
```

{{EmbedLiveSample("Logging fullscreenchange events", 640, 250, "", "", "", "fullscreen")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document/fullscreenerror_event", "fullscreenerror")}}
- {{domxref("Element")}}: {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} イベント
- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- [全画面 API のガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
