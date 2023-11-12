---
title: "Document: DOMContentLoaded イベント"
slug: Web/API/Document/DOMContentLoaded_event
---

{{APIRef}}

**`DOMContentLoaded`** イベントは、 HTML の初期文書が完全に読み込まれ解釈された時点で発生し、スタイルシート、画像、サブフレームの読み込みが完了するのを待ちません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>
        可 (ただし、キャンセル可能ではない単純イベントとして定義されている)
      </td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>なし</td>
    </tr>
  </tbody>
</table>

別なイベントである {{domxref("Window/load_event", "load")}} は、ページ全体が読み込まれたときにのみ使用します。 `load` を `DOMContentLoaded` がより適切である場面で使ってしまうことがよくある誤りです。

同期 JavaScript は DOM の解析をいったん中断します。ユーザーがページをリクエストした後でできるだけ早く DOM が解析されるようにしたい場合は、 [JavaScript を非同期に](/ja/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)して、[スタイルシートの読み込みを最適化](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery)してください。ふつう通りに読み込むと、スタイルシートは HTML と並行で読み込まれ、中心となる HTML 文書の帯域を「盗む」ため、ふつう通りに読み込むと DOM 解析の速度を低下させます。

## 例

### 基本的な使用

```js
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
```

### DOMContentLoaded の遅延

```html
<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });

  for (let i = 0; i < 1000000000; i++) {} // This synchronous script is going to delay parsing of the DOM,
  // so the DOMContentLoaded event is going to launch later.
</script>
```

### 読み込みが完了しているかどうかのチェック

`DOMContentLoaded` はスクリプト実行の機会がある前に発生することがあるため、リスナーを追加する前にチェックするのが賢明です。

```js
function doSomething() {
  console.info("DOM loaded");
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doSomething);
} else {
  // `DOMContentLoaded` has already fired
  doSomething();
}
```

### ライブデモ

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Reload</button>
</div>

<div class="event-log">
  <label>Event log:</label>
  <textarea readonly class="event-log-contents" rows="8" cols="30"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control  log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

#reload {
  height: 2rem;
}
```

#### JS

```js
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  window.setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent = log.textContent + "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent = log.textContent + `DOMContentLoaded\n`;
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '160px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Window/load_event", "load")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}
- {{domxref("Window")}} を対象とした同じイベント: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}
