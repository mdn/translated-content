---
title: MouseEvent.relatedTarget
slug: Web/API/MouseEvent/relatedTarget
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("UI Events")}}

**`MouseEvent.relatedTarget`** は読み取り専用プロパティで、もしあれば、マウスイベントの副ターゲットを表します。

すなわち、

<table class="no-markdown">
  <thead>
    <tr>
      <th>イベント名</th>
      <th><code>target</code></th>
      <th><code>relatedTarget</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("Element/mouseenter_event", "mouseenter")}}</td>
      <td>
        ポインティングデバイスが入った {{domxref("EventTarget")}}
      </td>
      <td>
        ポインティングデバイスが離れた {{domxref("EventTarget")}}
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element/mouseleave_event", "mouseleave")}}</td>
      <td>
        ポインティングデバイスが離れた {{domxref("EventTarget")}}
      </td>
      <td>
        ポインティングデバイスが入った {{domxref("EventTarget")}}
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element/mouseout_event", "mouseout")}}</td>
      <td>
        ポインティングデバイスが離れた {{domxref("EventTarget")}}
      </td>
      <td>
        ポインティングデバイスが入った {{domxref("EventTarget")}}
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element/mouseover_event", "mouseover")}}</td>
      <td>
        ポインティングデバイスが入った {{domxref("EventTarget")}}
      </td>
      <td>
        ポインティングデバイスが離れた {{domxref("EventTarget")}}
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLElement/dragenter_event", "dragenter")}}</td>
      <td>
        ポインティングデバイスが入った {{domxref("EventTarget")}}
      </td>
      <td>
        ポインティングデバイスが離れた {{domxref("EventTarget")}}
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLElement/dragleave_event", "dragleave")}}</td>
      <td>
        ポインティングデバイスが離れた {{domxref("EventTarget")}}
      </td>
      <td>
        ポインティングデバイスが入った {{domxref("EventTarget")}}
      </td>
    </tr>
  </tbody>
</table>

副ターゲットがないイベントでは、 `relatedTarget` は
`null` を返します。

{{domxref("FocusEvent.relatedTarget")}} はフォーカスイベントでの同様のプロパティです。

## 値

{{domxref("EventTarget")}} オブジェクトまたは `null` です。

## 例

赤と青のボックスを出たり入ったりしてみてください。

### HTML

```html
<body id="body">
  <div id="outer">
    <div id="red"></div>
    <div id="blue"></div>
  </div>
  <p id="log"></p>
</body>
```

### CSS

```css
#outer {
  width: 250px;
  height: 125px;
  display: flex;
}

#red {
  flex-grow: 1;
  background: red;
}

#blue {
  flex-grow: 1;
  background: blue;
}

#log {
  max-height: 120px;
  overflow-y: scroll;
}
```

### JavaScript

```js
const mouseoutLog = document.getElementById("log"),
  red = document.getElementById("red"),
  blue = document.getElementById("blue");

red.addEventListener("mouseover", overListener);
red.addEventListener("mouseout", outListener);
blue.addEventListener("mouseover", overListener);
blue.addEventListener("mouseout", outListener);

function outListener(event) {
  let related = event.relatedTarget ? event.relatedTarget.id : "unknown";

  mouseoutLog.innerText = `\nfrom ${event.target.id} into ${related} ${mouseoutLog.innerText}`;
}

function overListener(event) {
  let related = event.relatedTarget ? event.relatedTarget.id : "unknown";

  mouseoutLog.innerText = `\ninto ${event.target.id} from ${related} ${mouseoutLog.innerText}`;
}
```

### 結果

{{EmbedLiveSample("Examples", 700, 280)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("MouseEvent") }}
- [イベントターゲットの比較](/ja/docs/Web/API/Event/Comparison_of_Event_Targets)
