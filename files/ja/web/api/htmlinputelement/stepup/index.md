---
title: HTMLInputElement.stepUp()
slug: Web/API/HTMLInputElement/stepUp
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - メソッド
  - リファレンス
  - テキスト欄選択 API
browser-compat: api.HTMLInputElement.stepUp
translation_of: Web/API/HTMLInputElement/stepUp
---
{{APIRef("HTML DOM")}}

**`HTMLInputElement.stepUp()`** メソッドは、数値型の {{HTMLElement("input")}} 要素の値を
[`step`](/ja/docs/Web/HTML/Attributes/step) 属性の値、または step 属性が明示的に設定されていない場合は既定の `step` の値だけ増加させるものです。このメソッドを呼び出すと、 {{htmlattrxref("value","input")}} は ({{htmlattrxref("step","input")}} \* n) だけ減少します。ここで、n は指定されなかった場合、既定で `1` となり、[`step`](/ja/docs/Web/HTML/Attributes/step) が指定されなかった場合、 `step` の既定値となります。

<table class="no-markdown">
  <thead>
    <tr>
      <th>入力型</th>
      <th>既定の step の値</th>
      <th>step の宣言の例</th>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>1</code> （日）</td>
      <td>
        7 日（1 週間）単位の増加:<br /><code
          >&#x3C;input type="date" min="2019-12-25" step="7"></code
        >
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>1</code> （ヶ月）</td>
      <td>
        12 ヶ月（1 年）単位の増加:<br /><code
          >&#x3C;input type="month" min="2019-12" step="12"></code
        >
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>1</code> （週間）</td>
      <td>
        2 週間単位の増加:<br /><code
          >&#x3C;input type="week" min="2019-W23" step="2"></code
        >
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>60</code> （秒）</td>
      <td>
        900 秒（15 分）単位の増加:<br /><code
          >&#x3C;input type="time" min="09:00" step="900"></code
        >
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>1</code> （日）</td>
      <td>
        同じ曜日:<br /><code
          >&#x3C;input type="datetime-local" min="019-12-25T19:30"
          step="7"></code
        >
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><code>1</code></td>
      <td>
        0.1 刻み<br /><code
          >&#x3C;input type="number" min="0" step="0.1" max="10"></code
        >
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><code>1</code></td>
      <td>
        2 ずつ増加:<br /><code
          >&#x3C;input type="range" min="0" step="2" max="10"></code
        >
      </td>
    </tr>
  </thead>
</table>

このメソッドを呼び出すと、フォームコントロール内で設定された制約の範囲内で、 `step` 属性で指定された値に引数を掛けた値だけ、フォームコントロールの値を変更します。引数が渡されなかった場合の既定値は `1` です。このメソッドは、値が [`max`](/ja/docs/Web/HTML/Attributes/max) を上回ったり、 [`step`](/ja/docs/Web/HTML/Attributes/step) 属性が設定する制約に違反させるようなことはしません。

`stepUp()` メソッドを呼び出す前の値が無効であった場合、例えば `step` 属性で設定した制約に適合しない場合、 `stepUp()` メソッドを呼び出すと、フォームコントロールの制約に適合する値が返されます。

フォームコントロールが時刻、日付、数値以外のもので、 `step` 属性に対応していない場合（前述の表に対応する入力型のリストを参照）、または `step` 値が `any` に設定されている場合、 `InvalidStateError` 例外が発生します。

## 構文

```js
element.stepUp( [ stepIncrement ] );
```

### 引数

- _`stepIncrement`_
  - : `stepDecrement` 引数は省略可能で数値を指定します。引数が渡されなかった場合、 _stepDecrement_ は既定で 1 になります。

## 例

この例のボタンをクリックすると、 {{HTMLElement("input/number", "number")}} 入力型の値が増加します。

### HTML

```html
<p>
  <label>0 から 400 までの 5 で割り切れる数を入力してください。
   <input type="number" step="5" id="theNumber" min="0" max="400">
  </label>
</p>
<p>
  <label>増加させたい段階の数を入力するか、空欄のままにしてください。
   <input type="number" step="1" id="incrementer" min="0" max="25">
  </label>
</p>
<input type="button" value="Increment" id="theButton">
```

### JavaScript

```js
/* 関数を呼び出すボタンを生成 */
let button = document.getElementById('theButton')
button.addEventListener('click', function() {
  steponup()
})

function steponup() {
  let input = document.getElementById('theNumber')
  let val = document.getElementById('incrementer').value

  if (val) {  /* 引数付きで加算 */
    input.stepUp(val)
  } else {    /* 引数なしで加算。 0 を試してください。 */
    input.stepUp()
  }
}
```

### CSS

```css
input:invalid {
  border: red solid 3px;
}
```

### Result

{{EmbedLiveSample("Example")}}

`stepUp` メソッドに引数を渡さなかった場合、既定値は `1` になります。他の値は `step` 属性の値に乗算されるので、この場合は `5` となります。 _`stepIncrement`_ に 4 を渡した場合、 `stepUp` は `4 * 5` すなわち `20` だけ行われます。この引数が `0` であった場合、数値は加算されません。 `stepUp` メソッドは入力が範囲外にならないように、この場合は `400` になった時点で停止し、引数として渡された値の小数点以下を切り捨てます。

段階の加算係数を `1.2` に設定してみてください。メソッドを呼び出すとどうなるでしょうか？

値を不正な数値である `4` に設定してみてください。メソッドを呼び出すとどうなるでしょうか？

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLInputElement.stepDown")}}
- [`step`](/ja/docs/Web/HTML/Attributes/step),
  [`min`](/ja/docs/Web/HTML/Attributes/min),  [`max`](/ja/docs/Web/HTML/Attributes/max) 属性
