---
title: "Document: DOMContentLoaded イベント"
short-title: DOMContentLoaded
slug: Web/API/Document/DOMContentLoaded_event
l10n:
  sourceCommit: 0474b1e858a9d6261cbcd6763ec5e13a60cae2da
---

{{APIRef}}

**`DOMContentLoaded`** イベントは、HTML の文書が完全に読み込まれ構文解析され、すべての遅延スクリプト（[`<script defer src="…">`](/ja/docs/Web/HTML/Reference/Elements/script#defer) および [`<script type="module">`](/ja/docs/Web/HTML/Reference/Elements/script#module)）がダウンロードされ、実行されたときに発生します。画像、サブフレーム、非同期スクリプトの読み込みの完了は待ちません。

`DOMContentLoaded` はスタイルシートの読み込みを待ちませんが、遅延スクリプトはスタイルシートの読み込みを待ちますし、`DOMContentLoaded` イベントは遅延スクリプトの後にキューイングされます。また、遅延や非同期でないスクリプト（`<script>` など）は、すでに解釈できるスタイルシートの読み込みを待ちます。

別なイベントである {{domxref("Window/load_event", "load")}} は、ページ全体が読み込まれたときにのみ使用します。 `load` を `DOMContentLoaded` がより適切である場面で使ってしまうことがよくある誤りです。

このイベントはキャンセル不可です。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラーのプロパティを設定するかしてください。

```js
addEventListener("DOMContentLoaded", (event) => {});
```

## イベント型

一般的な {{domxref("Event")}} です。

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
    console.log("DOM は完全に読み込まれ解釈されました");
  });

  for (let i = 0; i < 1_000_000_000; i++);
  // この同期スクリプトは DOM の構文解析を遅らせるので、
  // DOMContentLoaded イベントはその後で起動することになります。
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

> [!NOTE]
> ここでは競合条件はありません。 `if` チェックと `addEventListener()` 呼び出しの間に文書が読み込まれることはあり得ません。JavaScript には run-to-completion という意味づけがあります。つまり、イベントループのある特定のタイミングで文書が読み込まれていたとしても、次のサイクルまで読み込まれることはなく、その時には `doSomething` ハンドラーはすでに取り付けられており、発生します。

### ライブサンプル

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">再読み込み</button>
</div>

<div class="event-log">
  <label for="eventLog">イベントログ:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control log";
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

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += "DOMContentLoaded\n";
});
```

#### 結果

{{ EmbedLiveSample('ライブサンプル', '100%', '160px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Window/load_event", "load")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}
