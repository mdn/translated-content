---
title: "KeyboardEvent: charCode プロパティ"
short-title: charCode
slug: Web/API/KeyboardEvent/charCode
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

**`charCode`** は {{domxref("KeyboardEvent")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Element/keypress_event", "keypress")}} イベントの間に押されたキーの Unicode 値を返します。

> [!WARNING]
> このプロパティは非推奨なので、使用しないでください。代わりに {{domxref("KeyboardEvent.key", "key")}} プロパティを使用して、文字の Unicode 値を取得してください。

## 値

押された文字キーの Unicode 値を表す数値です。

## 例

### HTML

```html
<p>下の入力ボックスに何かを入力すると <code>charCode</code> を記録します。</p>
<input type="text" />
<p id="log"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.querySelector("#log");

input.addEventListener("keypress", (e) => {
  log.innerText = `Key pressed: ${String.fromCharCode(e.charCode)}\ncharCode: ${
    e.charCode
  }`;
});
```

### 結果

{{EmbedLiveSample("Examples")}}

## メモ

- {{domxref("Element/keypress_event", "keypress")}} イベントでは、押されたキーの Unicode 値は {{ domxref("KeyboardEvent.keyCode", "keyCode") }} または `charCode` プロパティのどちらかに格納されますが、両方格納されることはありません。押されたキーが文字（例えば 'a'）を生成する場合、 `charCode` にはその文字のコードが設定されます。 `charCode` は文字の大文字小文字を区別します（言い換えれば、 `charCode` は <kbd>shift</kbd> キーが押されていたかどうかを考慮します）。そうでない場合は、押されたキーのコードが `keyCode` に格納されます。

- 1 つ以上の修飾キーが押されたとき、 `charCode` にはいくつかの複雑なルールがあります。詳しくは [Gecko Keypress Event](/ja/docs/Gecko_Keypress_Event) を参照してください。
- `charCode` は {{domxref("Element/keydown_event", "keydown")}} と {{domxref("Element/keyup_event", "keyup")}} イベントで設定されることはありません。これらのケースでは、代わりに `keyCode` が設定されます。
- `keyCode` と `charCode` のどちらに格納されていたとしても、キーのコードを取得するには、{{ domxref("UIEvent.which", "which") }} プロパティを参照してください。
- IME から入力された文字は `keyCode` や `charCode` を通して登録されません。
- 特定のキーに関連付けられた `charCode` 値のリストについては、[例 7: イベントオブジェクトのプロパティを表示する](/ja/docs/Web/API/Document_Object_Model/Examples#例_7_イベントオブジェクトのプロパティの表示)を実行して、結果の HTML の表を表示してみてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
