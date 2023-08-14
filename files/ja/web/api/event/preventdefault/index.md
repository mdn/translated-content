---
title: Event.preventDefault()
slug: Web/API/Event/preventDefault
---

{{apiref("DOM")}}

**`preventDefault()`** は {{domxref("Event")}} インターフェイスのメソッドで、{{Glossary("user agent", "ユーザーエージェント")}}に、このイベントが明示的に処理されない場合に、その既定のアクションを通常どおりに行うべきではないことを伝えます。

このイベントは通常、イベントリスナーの 1 つが {{domxref("Event.stopPropagation", "stopPropagation()")}} または {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}} を呼び出し、いずれかが一度に伝播を終了しない限り、伝播し続けます。

後述のように、 **`preventDefault()`** を {{domxref("EventTarget.dispatchEvent()")}} によってディスパッチされたイベントのようなキャンセルできないイベントに対して、 `cancelable: true` を指定せずに呼び出しても何も効果がありません。

## 構文

```js
event.preventDefault();
```

## 例

### 既定のクリック処理のブロック

チェックボックスのクリック時、既定の動作ではチェックボックスが切り替わります。この既定の動作を止める方法を以下に示します。

#### JavaScript

```js
document.querySelector("#id-checkbox").addEventListener(
  "click",
  function (event) {
    document.getElementById("output-box").innerHTML +=
      "ごめん！ <code>preventDefault()</code> がチェックさせません！<br>";
    event.preventDefault();
  },
  false,
);
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

こちらがフォームです。

```html
<div class="container">
  <p>名前を小文字のみで入力してください。</p>

  <form>
    <input type="text" id="my-textbox" />
  </form>
</div>
```

#### CSS

ユーザが無効なキーを押したときに描画する警告ボックスには、CSS を少し使用します。

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

そして、こちらがその仕事を行う JavaScript コードです。まず、{{domxref("Element/keypress_event", "keypress")}} イベントを待ち受けします。

```js
var myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keypress", checkName, false);
```

`checkName()` 関数は押されたキーを調べ、それを許可するかどうかを決定します。

```js
function checkName(evt) {
  var charCode = evt.charCode;
  if (charCode != 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
      displayWarning(
        "小文字のみを使用してください。" +
          "\n" +
          "charCode: " +
          charCode +
          "\n",
      );
    }
  }
}
```

`displayWarning()` 関数は、問題発生の通知を表示します。これはエレガントな関数ではありませんが、この例の目的には十分です。

```js
var warningTimeout;
var warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    window.clearTimeout(warningTimeout);
  } else {
    // insert warningBox after myTextbox
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = window.setTimeout(function () {
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
