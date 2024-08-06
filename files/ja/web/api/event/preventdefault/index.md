---
title: "Event: preventDefault() メソッド"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`preventDefault()`** は {{domxref("Event")}} インターフェイスのメソッドで、{{Glossary("user agent", "ユーザーエージェント")}}に、このイベントが明示的に処理されない場合に、その既定のアクションを通常どおりに行うべきではないことを伝えます。

このイベントは通常、イベントリスナーの 1 つが {{domxref("Event.stopPropagation", "stopPropagation()")}} または {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}} を呼び出し、いずれかが一度に伝播を終了しない限り、伝播し続けます。

後述のように、 **`preventDefault()`** を {{domxref("EventTarget.dispatchEvent()")}} によってディスパッチされたイベントのようなキャンセルできないイベントに対して、 `cancelable: true` を指定せずに呼び出しても何も効果がありません。

## 構文

```js-nolint
event.preventDefault()
```

## 例

### 既定のクリック処理のブロック

チェックボックスのクリック時、既定の動作ではチェックボックスが切り替わります。この既定の動作を止める方法を以下に示します。

#### JavaScript

```js
const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  let warn = "preventDefault() がこのチェックを妨害しています。<br>";
  document.getElementById("output-box").innerHTML += warn;
  event.preventDefault();
}
```

#### HTML

```html
<p>チェックボックスコントロールをクリックしてください。</p>

<form>
  <label for="id-checkbox">チェックボックス:</label>
  <input type="checkbox" id="id-checkbox" />
</form>

<div id="output-box"></div>
```

#### 結果

{{EmbedLiveSample("Blocking_default_click_handling")}}

### キーストロークが編集フィールドに到達するのを止める

次の例は、無効なテキスト入力が入力フィールドに到達するのを `preventDefault()` で止める方法を示しています。今日では、[ネイティブの HTML フォーム検証](/ja/docs/Learn/Forms/Form_validation)を代わりに使用してください。

#### HTML

下の HTML フォームはユーザーの入力をキャプチャします。
キー入力にしか興味がないので、`autocomplete` を無効にして、ブラウザーがキャッシュした値で入力フィールドを埋めるのを防いでいます。

```html
<div class="container">
  <p>名前を小文字のみで入力してください。</p>

  <form>
    <input type="text" id="my-textbox" autocomplete="off" />
  </form>
</div>
```

#### CSS

ユーザーが無効なキーを押したときに描画する警告ボックスには、CSS を少し使用します。

```css
.warning {
  border: 2px solid #f39389;
  border-radius: 2px;
  padding: 10px;
  position: absolute;
  background-color: #fbd8d4;
  color: #3b3c40;
}
```

#### JavaScript

そして、こちらがその仕事を行う JavaScript コードです。まず、{{domxref("Element/keydown_event", "keydown")}} イベントを待ち受けします。

```js
const myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keydown", checkName, false);
```

`checkName()` 関数は押されたキーを調べ、それを許可するかどうかを決定します。

```js
function checkName(evt) {
  const key = evt.key;
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  if (!lowerCaseAlphabet.includes(key)) {
    evt.preventDefault();
    displayWarning(
      "小文字のみを使用してください。\n" + `押されたキー: ${key}\n`,
    );
  }
}
```

`displayWarning()` 関数は、問題発生の通知を表示します。これはエレガントな関数ではありませんが、この例の目的には十分です。

```js
let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    clearTimeout(warningTimeout);
  } else {
    // insert warningBox after myTextbox
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = setTimeout(() => {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}
```

#### 結果

{{ EmbedLiveSample('Stopping_keystrokes_from_reaching_an_edit_field', 600, 200) }}

## メモ

イベントフローのいずれかの段階でイベントをキャンセルする途中で `preventDefault()` を呼び出すと、通常はブラウザーの実装によって処理される既定のアクションが動作しなくなり、結果としてイベントが発生しなくなります。

イベントがキャンセル可能かどうかは {{domxref("event.cancelable")}} を使って確認できます。キャンセル不可のイベントに対して `preventDefault()` を呼び出しても効果はありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
