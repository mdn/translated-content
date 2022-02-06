---
title: 'HTMLInputElement: invalid イベント'
slug: Web/API/HTMLInputElement/invalid_event
tags:
  - API
  - 制約検証 API
  - 制約検証
  - イベント
  - フォーム
  - リファレンス
  - invalid
browser-compat: api.HTMLInputElement.invalid_event
translation_of: Web/API/HTMLInputElement/invalid_event
---
{{APIRef}}

**`invalid`** イベントは、送信可能な要素が制約の検証を受け、制約を満たしていない場合に発行されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>{{domxref("GlobalEventHandlers.oninvalid")}}</td>
    </tr>
  </tbody>
</table>

このイベントは、送信時にフォームの問題の概要を表示するのに便利です。フォームが送信されると、 `invalid` イベントがそれぞれの妥当ではない状態にあるフォームコントロールで発生します。送信可能な要素が妥当であるかどうかは、その所有者である {{HtmlElement("form")}} を送信する前、または [`checkValidity()`](/ja/docs/Learn/Forms#constraint_validation_api) メソッドがその要素またはその所有者である `<form>` に呼び出された後にチェックされます。

{{domxref("Element/blur_event", "blur")}} ではチェックが行われません。

## 例<

フォームが無効な値で送信された場合、送信可能な要素がチェックされ、エラーが見つかった場合、無効な要素で `invalid` イベントが発生します。この例では、入力に無効な値があったために `invalid` イベントが発生した場合、無効な値がログに記録されます。

### HTML

```html
<form action="#">
  <ul>
    <li><label>1 から 10 までの整数を入力してください: <input type="number" min="1" max="10" required></label></li>
    <li><input type="submit" value="送信"></li>
  </ul>
</form><p id="log"></p>
```

### JavaScript

```js
const input = document.querySelector('input')
const log = document.getElementById('log')

input.addEventListener('invalid', logValue)

function logValue(e) {
  log.textContent += e.target.value
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{HtmlElement("form")}} element
- 関連イベント: {{domxref("HTMLFormElement/submit_event", "submit")}}
- CSS の {{cssxref(":invalid")}} 擬似クラス
