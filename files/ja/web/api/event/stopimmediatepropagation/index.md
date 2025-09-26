---
title: "Event: stopImmediatePropagation() メソッド"
short-title: stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`stopImmediatePropagation()`** は {{domxref("Event")}} インターフェイスのメソッドで、呼び出されている同じイベントの他のリスナーを抑止します。

同じ要素で、同じ種類のイベントに複数のリスナーが装着されている場合、追加された順番に呼び出されます。もし、そのような呼び出しの最中に `stopImmediatePropagation()` が呼び出された場合、残りのリスナーは呼び出されなくなります。

## 構文

```js-nolint
event.stopImmediatePropagation()
```

## 例

### イベントを停止する関数の比較

下の例では、3 つの入れ子になった div の中に 3 つのボタンがあります。それぞれのボタンにはクリックイベント用に登録された 3 つのイベントリスナーがあり、それぞれの div にもクリックイベント用に登録されたイベントリスナーがあります。

- 一番上のボタンは、通常のイベント伝播が可能です。
- 中央のボタンは、最初のイベントハンドラーで `stopPropagation()` を呼び出します。
- 一番下のボタンは、最初のイベントハンドラーで `stopImmediatePropagation()` を呼び出します。

#### HTML

```html
<h2>ボタンをクリックしてください</h2>
<div>
  外側の div<br />
  <div>
    中央の div<br />
    <div>
      内側の div<br />
      <button>伝播可能</button><br />
      <button id="stopPropagation">伝播を停止</button><br />
      <button id="stopImmediatePropagation">直ちに伝播を停止</button>
    </div>
  </div>
</div>
<pre></pre>
```

#### CSS

```css
div {
  display: inline-block;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #000;
  margin: 10px;
}

button {
  width: 100px;
  color: #008;
  padding: 5px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 30px;
  margin: 5px;
}
```

#### JavaScript

```js
const outElem = document.querySelector("pre");

/* Clear the output */
document.addEventListener(
  "click",
  () => {
    outElem.textContent = "";
  },
  true,
);

/* Set event listeners for the buttons */
document.querySelectorAll("button").forEach((elem) => {
  for (let i = 1; i <= 3; i++) {
    elem.addEventListener("click", (evt) => {
      /* 最初のイベントハンドラーですべての伝播を停止 */
      if (i === 1 && elem.id) {
        evt[elem.id]();
        outElem.textContent += `イベント 1 のイベントハンドラーが ${elem.id}() を呼び出しました\n`;
      }

      outElem.textContent += `"${elem.textContent}" ボタンのクリックイベント ${i} が処理されました\n`;
    });
  }
});

/* それぞれの div にイベントリスナーを設定 */
document
  .querySelectorAll("div")
  .forEach((elem) =>
    elem.addEventListener(
      "click",
      (evt) =>
        (outElem.textContent += `"${elem.firstChild.data.trim()}" でクリックイベントが処理されました\n`),
    ),
  );
```

#### 結果

それぞれのクリックイベントハンドラーは、呼び出されるとステータスメッセージを表示します。中央のボタンを押すと、`stopPropagation()` によって、そのボタンがクリックされたときに登録されたイベントハンドラーはすべて実行されますが、その後に続くはずの div のクリックイベントハンドラーは実行されないことがわかります。しかし、一番下のボタンを押すと、`stopImmediatePropagation()` はそのイベント以降の伝播をすべて停止します。

{{ EmbedLiveSample("Comparing event-stopping functions", 500, 550) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
