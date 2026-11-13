---
title: "KeyboardEvent: shiftKey プロパティ"
short-title: shiftKey
slug: Web/API/KeyboardEvent/shiftKey
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

**`KeyboardEvent.shiftKey`** は読み取り専用プロパティで、このイベントが発生したときに <kbd>shift</kbd> キーが押されていたか (`true`) いなかったか (`false`) を示す論理値を返します。

Shift キーを押すと、イベントの {{domxref("KeyboardEvent/key", "key")}} も変更されることがあります。例えば、<kbd>B</kbd> キーを押すと `key: "b"` となり、<kbd>Shift</kbd> キーを同時に押すと `key: "B"` となります。

<kbd>Shift</kbd> キー自体が押されたり離されたりした際、このプロパティは、{{domxref("Element/keydown_event", "keydown")}} イベントでは `true` となり、{{domxref("Element/keyup_event", "keyup")}} イベントでは `false` となります。これは、どちらのイベントも状態の変化の後に発生するためです。

## 値

論理値です。

## 例

```html-nolint
<p>
  SHIFT キーを押しながら、または押さずに、任意の文字キーを押してください。<br />
  SHIFT キーと ALT キーを併用することもできます。
</p>
<pre id="output"></pre>
```

```js
const output = document.getElementById("output");

function showChar(e) {
  output.textContent = `Key KeyDown: "${e.key}"
SHIFT key KeyDown: ${e.shiftKey}
`;
}

document.addEventListener("keydown", showChar);
```

{{EmbedLiveSample("examples", "", "400")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("KeyboardEvent") }}
