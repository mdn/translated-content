---
title: "Event: eventPhase プロパティ"
short-title: eventPhase
slug: Web/API/Event/eventPhase
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{ApiRef("DOM")}}

**eventPhase`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティは、イベントフローのどの段階が現在評価されているかを示します。

## 値

整数値で、イベントフローの現在の評価段階を指定する値を返します。使用可能な値は以下のとおりです。

- `Event.NONE (0)`
  - : 現在、このイベントは処理されていません。
- `Event.CAPTURING_PHASE (1)`
  - : イベントはターゲットの祖先オブジェクトを通じて伝播されます。
    この処理は {{domxref("Window")}} から始まり、{{domxref("Document")}}、{{domxref("HTMLHtmlElement")}} と、ターゲットの親に到達するまで要素を介して行われます。
    キャプチャモード向けに {{domxref("EventTarget.addEventListener()")}} が呼ばれた時に登録された{{domxref("EventTarget/addEventListener", "イベントリスナー", "", 1)}}は、この段階で起動されます。
- `Event.AT_TARGET (2)`
  - : このイベントが{{domxref("EventTarget", "イベントのターゲット", "", 1)}}に到達しています。
    この段階向けに登録されたイベントリスナーは、この時点で呼び出されます。もし {{domxref("Event.bubbles")}} が `false` ならば、この段階の終了後にイベントの処理を終了します。
- `Event.BUBBLING_PHASE (3)`
  - : イベントはターゲットの祖先を逆順に伝播していきます。親から始まり、最終的に {{domxref("Window")}} を含む先祖に到達します。
    これは*バブリング*と呼ばれ、 {{domxref("Event.bubbles")}} が `true` のときのみ発生します。この段階向けに登録された{{domxref("EventTarget/addEventListener", "イベントリスナー", "", 1)}}は、この処理中に起動されます。

## 例

### HTML

```html
<h4>Event Propagation Chain</h4>
<ul>
  <li>Click 'd1'</li>
  <li>Analyze event propagation chain</li>
  <li>Click next div and repeat the experience</li>
  <li>Change Capturing mode</li>
  <li>Repeat the experience</li>
</ul>
<input type="checkbox" id="chCapture" />
<label for="chCapture">Use Capturing</label>
<div id="d1">
  d1
  <div id="d2">
    d2
    <div id="d3">
      d3
      <div id="d4">d4</div>
    </div>
  </div>
</div>
<div id="divInfo"></div>
```

### CSS

```css
div {
  margin: 20px;
  padding: 4px;
  border: thin black solid;
}

#divInfo {
  margin: 18px;
  padding: 8px;
  background-color: white;
  font-size: 80%;
}
```

### JavaScript

```js
let clear = false;
let divInfo = null;
let divs = null;
let chCapture = null;

window.onload = () => {
  divInfo = document.getElementById("divInfo");
  divs = document.getElementsByTagName("div");
  chCapture = document.getElementById("chCapture");
  chCapture.onclick = () => {
    removeListeners();
    addListeners();
    clearDivs();
  };
  clearDivs();
  addListeners();
};

function removeListeners() {
  for (const div of divs) {
    if (div.id !== "divInfo") {
      div.removeEventListener("click", onDivClick, true);
      div.removeEventListener("click", onDivClick, false);
    }
  }
}

function addListeners() {
  for (const div of divs) {
    if (div.id !== "divInfo") {
      if (chCapture.checked) {
        div.addEventListener("click", onDivClick, true);
      } else {
        div.addEventListener("click", onDivClick, false);
        div.onmousemove = () => {
          clear = true;
        };
      }
    }
  }
}

function onDivClick(e) {
  if (clear) {
    clearDivs();
    clear = false;
  }
  if (e.eventPhase === 2) {
    e.currentTarget.style.backgroundColor = "red";
  }
  const level =
    ["none", "capturing", "target", "bubbling"][e.eventPhase] ?? "error";
  const para = document.createElement("p");
  para.textContent = `${e.currentTarget.id}; eventPhase: ${level}`;
  divInfo.appendChild(para);
}

function clearDivs() {
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].id !== "divInfo") {
      divs[i].style.backgroundColor = i % 2 !== 0 ? "#f6eedb" : "#cceeff";
    }
  }
  divInfo.textContent = "";
}
```

### 結果

{{ EmbedLiveSample('Example', '', '700') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
