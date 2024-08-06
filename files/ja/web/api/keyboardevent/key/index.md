---
title: "KeyboardEvent: key プロパティ"
short-title: key
slug: Web/API/KeyboardEvent/key
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}

{{domxref("KeyboardEvent")}} インターフェイスの **`key`** プロパティは読み取り専用で、ユーザーが押したキーの値を、 <kbd>Shift</kbd> キーなどの修飾キーやキーボードのロケールやレイアウトを考慮した値で返します。

## 値

文字列です。

この値は、以下のように決定されます。

- 押されたキーが表示可能なものである場合、返される値は、そのキーの表示可能な表現を含む空でない Unicode 文字列になります。
- 押されたキーが制御文字や特殊文字の場合、返される値は[事前に定義されたキー値](/ja/docs/Web/API/UI_Events/Keyboard_event_key_values)のいずれかになります。
- もし `KeyboardEvent` が[デッドキー](https://ja.wikipedia.org/wiki/デッドキー)が押されたことを表している場合は、キー値は "`Dead`" になります。
- 一部の特殊なキーボードのキー（マルチメディアキーボードでメディアを制御するための拡張キーなど）は、 Windows ではキーコードを生成しません。その代わりに、 `WM_APPCOMMAND` イベントが発生します。これらのイベントは DOM キーボードイベントにマッピングされ、 Windows の「仮想キーコード」にリストアップされます（実際にはキーコードではありませんが）。
- キーを特定できない場合、返される値は `Unidentified` になります。

> [!CALLOUT]
>
> [キー値の完全なリスト](/ja/docs/Web/API/UI_Events/Keyboard_event_key_values)をご覧ください。

## KeyboardEvent の順序

それぞれの `KeyboardEvent` はあらかじめ定められた順序で発生します。キーが押された場合、発生する一連の `KeyboardEvent` は {{domxref("Event.preventDefault")}} が呼び出されないと仮定すれば次のようになります。

1. 最初に {{domxref("Element/keydown_event", "keydown")}} イベントが発生します。キーがそれ以上押され続けてそのキーが文字を入力する場合は、イベントはプラットフォームの実装に依存した間隔で発生し続け、読み取り専用の {{domxref("KeyboardEvent.repeat")}} プロパティが `true` に設定されます。
2. もしキー入力が {{HTMLElement("input")}}、{{HTMLElement("textarea")}}もしくは{{domxref("HTMLElement.contentEditable")}} が `true` の要素に文字を挿入する場合は、 {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} と {{domxref("HTMLElement/input_event", "input")}} イベント型がその順番で発生します。一部の他の実装では、 {{domxref("Element/keypress_event", "keypress")}} イベントを実装していれば発生する可能性があることに注意してください。イベントはキーが押されている間、連続で発生します。
3. キーを離した際に {{domxref("Element/keyup_event", "keyup")}} イベントが発生します。これで一連の処理は終わりです。

1 と 3 の処理で、 `KeyboardEvent.key` 属性が定義され、先ほど定義したルールに則って値が設定されます。

## 一連の KeyboardEvent の例

米国キーボードレイアウトで <kbd>Shift</kbd> キーと <kbd>2</kbd> キーを使用した場合と、英国キーボードレイアウトで使用した場合のイベントシーケンスについて考えてみましょう。

以下の 2 つのテストケースを使用して実験してみてください。

1. <kbd>Shift</kbd> キーを押しながら、 <kbd>2</kbd> キーを押して離します。次に <kbd>Shift</kbd> キーを離します。

2. <kbd>Shift</kbd> キーを押しながら、 <kbd>2</kbd> を押し続けます。 <kbd>Shift</kbd> キーを離します。最後に <kbd>2</kbd> を離します。

### HTML

```html
<div class="fx">
  <div>
    <textarea rows="5" name="test-target" id="test-target"></textarea>
    <button type="button" name="btn-reset" id="btn-reset">Reset</button>
  </div>
  <div class="flex">
    <pre id="console-log"></pre>
  </div>
</div>
```

### CSS

```css
.fx {
  -webkit-display: flex;
  display: flex;
  margin-left: -20px;
  margin-right: -20px;
}

.fx > div {
  padding-left: 20px;
  padding-right: 20px;
}

.fx > div:first-child {
  width: 30%;
}

.flex {
  -webkit-flex: 1;
  flex: 1;
}

#test-target {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
```

### JavaScript

```js
let textarea = document.getElementById("test-target"),
  consoleLog = document.getElementById("console-log"),
  btnReset = document.getElementById("btn-reset");

function logMessage(message) {
  consoleLog.innerHTML += `${message}<br>`;
}

textarea.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    logMessage(`Key "${e.key}" pressed [event: keydown]`);
  } else {
    logMessage(`Key "${e.key}" repeating [event: keydown]`);
  }
});

textarea.addEventListener("beforeinput", (e) => {
  logMessage(`Key "${e.data}" about to be input [event: beforeinput]`);
});

textarea.addEventListener("input", (e) => {
  logMessage(`Key "${e.data}" input [event: input]`);
});

textarea.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
});

btnReset.addEventListener("click", (e) => {
  let child = consoleLog.firstChild;
  while (child) {
    consoleLog.removeChild(child);
    child = consoleLog.firstChild;
  }
  textarea.value = "";
});
```

### 結果

{{EmbedLiveSample('KeyboardEvent_sequence_example')}}

> **メモ:** {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} と {{domxref("HTMLElement/input_event", "input")}} イベントで使用されている {{domxref("InputEvent")}} インターフェイスを完全に実装していないブラウザーでは、誤ったログ出力をする可能性があります。

### ケース 1

Shift キーが押されると、まず {{domxref("Element/keydown_event", "keydown")}} イベントが発行され、 `key` プロパティの値として文字列 `Shift` が設定されます。このキーを押し続けても、文字が発生しないので {{domxref("Element/keydown_event", "keydown")}} イベントが繰り返し発行され続けるわけではありません。

`2 キー`が押されると、この新しいキー押下に対して別の {{domxref("Element/keydown_event", "keydown")}} イベントが発行され、修飾キー `shift` が有効なので、このイベントの `key` プロパティ値には米国のキーボード型の場合は `@` 、英国のキーボード型の場合は `"` という文字列が設定されます。文字キーが生成されたので、次に {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} と {{domxref("HTMLElement/input_event", "input")}} イベントが発行されます。

`2 キー`を離すと、{{domxref("Element/keyup_event", "keyup")}} イベントが発行され、`key` プロパティにはそれぞれ異なるキーボードレイアウト用の `@` と `"` という文字列が保持されるようになります。

最後に `shift` キーを離すと、別の {{domxref("Element/keyup_event", "keyup")}} イベントが発行され、 key 属性の値は `Shift` のまま残ります。

### ケース 2

Shift キーが押されると、まず {{domxref("Element/keydown_event", "keydown")}} イベントが発行され、`key` プロパティの値として文字列 `Shift` がセットされます。このキーを押し続けても、文字キーは生成されないので、 keydown イベントは繰り返し発行され続けることはありません。

`2 キー`が押されると、この新しいキー押下に対して別の {{domxref("Element/keydown_event", "keydown")}} イベントが発行され、修飾キー `shift` が有効になっているので、そのイベントの `key` プロパティの値は、米国キーボード型の場合は `@` 、英国キーボード型の場合は `"` という文字列に設定されています。文字が生成されたので、次に {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} と {{domxref("HTMLElement/input_event", "input")}} イベントが発行されています。キーを押し続けると、{{domxref("Element/keydown_event", "keydown")}} イベントが繰り返し発行され、{{domxref("KeyboardEvent.repeat")}}プロパティは `true` にセットされています。同様に {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} と {{domxref("HTMLElement/input_event", "input")}} イベントが繰り返し発行されています。

`Shift` キーを離すと、それに対して {{domxref("Element/keyup_event", "keyup")}} イベントが発行され、キー属性の値は `Shift` のままとなります。このとき、修飾キー `shift` は有効ではなくなるので、`2 キー`を押したときの keydown イベントを繰り返すための `key` プロパティの値が "2" になっていることに注目してください。同じことが {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} と {{domxref("HTMLElement/input_event", "input")}} イベントの {{domxref("InputEvent.data")}} プロパティにも当てはまります。

最後に `2 キー`を離すと、{{domxref("Element/keyup_event", "keyup")}} イベントが発行されますが、修飾キー `shift` はもはやアクティブではないので、`key` プロパティはどちらのキーボードレイアウトでも、文字列値 `2` に設定されます。

## 例

この例では {{domxref("EventTarget.addEventListener()")}} を使用して {{domxref("Element/keydown_event", "keydown")}} イベントを待ち受けています。イベントが発生すると、キーの値がチェックされ、コードが関心を持つキーの一つであるかどうかが確認され、もしそうであれば、何らかの方法で処理されます（宇宙船の操縦や、スプレッドシートの選択セルの変更など）。

```js
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "ArrowDown":
        // Do something for "down arrow" key press.
        break;
      case "ArrowUp":
        // Do something for "up arrow" key press.
        break;
      case "ArrowLeft":
        // Do something for "left arrow" key press.
        break;
      case "ArrowRight":
        // Do something for "right arrow" key press.
        break;
      case "Enter":
        // Do something for "enter" or "return" key press.
        break;
      case "Escape":
        // Do something for "esc" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
