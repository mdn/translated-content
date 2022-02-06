---
title: HTMLInputElement.stepDown()
slug: Web/API/HTMLInputElement/stepDown
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - メソッド
  - リファレンス
  - テキスト欄選択 API
browser-compat: api.HTMLInputElement.stepDown
translation_of: Web/API/HTMLInputElement/stepDown
---
{{APIRef("HTML DOM")}}

**`HTMLInputElement.stepDown([n])`** メソッドは、数値型の {{HTMLElement("input")}} 要素の値を
[`step`](/ja/docs/Web/HTML/Attributes/step) 属性の値、または引数として数値が渡された場合は step 属性の最大 `n` 倍の値だけ減少させるものです。

このメソッドを呼び出すと、 {{htmlattrxref("value","input")}} は ({{htmlattrxref("step","input")}} \* n) だけ減少します。ここで、n は指定されなかった場合、既定で 1 となり、[`step`](/ja/docs/Web/HTML/Attributes/step) が指定されなかった場合、 `step` の既定値となります。

step 属性に対応しているすべての数値、日付、時刻の入力タイプ（{{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}},
{{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}},{{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}}）で有効です。

`<input id="myTime" type="time" max="17:00" step="900" value="17:00">` と指定された場合、 `myTime.step(3)` を呼び出すと値は 16:15 になります。これは `3 * 900` または 45 分を引くからです。 `myTime.step()` を引数無しで呼び出すと、 `n` が既定で `1` となるので `16:45` になります。

```html
<!--  900 秒 (15 分) の間隔で減算 -->
<input type="time" max="17:00" step="900">

<!-- 7 日 (1 週間) の間隔で減算 -->
<input type="date" max="2019-12-25" step="7">

<!-- 12 ヶ月 (1 年) の間隔で減算 -->
<input type="month" max="2019-12" step="12">
```

しかし、 `stepDown` を `<input type="time" max="17:00" step="900">` で呼び出すと、期待するような `17:00` にはなりません。 — `stepUp` を `<input type="time" min="17:00" step="900">` で呼び出した場合も同様です。初めて `stepDown` を呼び出すと、 `max` 属性が設定されているにもかかわらず `23:45` になります。次に呼び出すと、値は `17:00` となり、もう一度呼び出すと、値は `16:45` になります。

```js
let input1 = document.createElement('input');
input1.setAttribute('type', 'time');
input1.setAttribute('min', '17:00');
input1.setAttribute('step', 900);
console.log(input1.value); // ""
input1.stepUp();
console.log(input1.value); // "17:00"
// However
let input2 = document.createElement('input');
input2.setAttribute('type', 'time');
input2.setAttribute('max', '17:00');
input2.setAttribute('step', 900);
console.log(input2.value); // ""
input2.stepDown();
console.log(input2.value); // "23:45"
input2.stepDown();
console.log(input2.value); // "17:00"
input2.stepDown();
console.log(input2.value); // "16:45"
```

このメソッドを呼び出すと、フォームコントロール内で設定された制約の範囲内で、 `step` 属性で指定された値に引数を掛けた値だけ、フォームコントロールの値を変更します。引数が渡されなかった場合の既定値は `1` です。このメソッドは、値が [`min`](/ja/docs/Web/HTML/Attributes/min) を下回ったり、 [`step`](/ja/docs/Web/HTML/Attributes/step) 属性が設定する制約に違反させるようなことはしません。 `n` に負の値を指定すると、値が増加しますが、[`max`](/ja/docs/Web/HTML/Attributes/max) の値を超えて増加することはありません。

`stepDown()` メソッドを呼び出す前の値が無効であった場合、例えば `step` 属性で設定した制約に適合しない場合、 `stepDown()` メソッドを呼び出すと、フォームコントロールの制約に適合する値が返されます。

フォームコントロールが時刻、日付、数値以外のもので、 `step` 属性に対応していない場合（前述の入力型のリストを参照）、または `step` 値が `any` に設定されている場合、 `InvalidStateError` 例外が発生します。

- {{domxref("HTMLInputElement.stepDown()")}}

  - : {{htmlattrxref("value","input")}} を（{{htmlattrxref("step","input")}} \* n だけ）減少させます。ここで n が指定されなかった場合は、既定で 1 になります。次の場合は例外 `InvalidStateError` が発生します。

    - このメソッドが現在の {{htmlattrxref("type","input")}} の値に適切ではない場合
    - この要素に {{htmlattrxref("step","input")}} の値がなかった場合
    - {{htmlattrxref("value","input")}} が数値に変換できなかった場合
    - 結果の値が {{htmlattrxref("max","input")}} を超えたり、 {{htmlattrxref("min","input")}} を下回ったりした場合

## 構文

```js
element.stepDown( [ stepDecrement ] );
```

### 引数

- _`stepDecrement`_

  - : `stepDecrement` 引数は省略可能で数値を指定します。引数が渡されなかった場合、 _stepDecrement_ は既定で 1 になります。

    この値が浮動小数点数であった場合、値は [`Math.floor(stepDecrement)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) が渡されたときと同様に減少します。この値が負の数であった場合は、値は減少するのではなく増加します。

## 例

この例のボタンをクリックすると、 {{HTMLElement("input/number", "number")}} 入力型の値が減少します。

### HTML

```html
<p>
  <label>0 から 400 までの 5 で割り切れる数を入力してください。
   <input type="number" step="5" id="theNumber" min="0" max="400">
  </label>
</p>
<p>
  <label>減少させたい段階の数を入力するか、空欄のままにしてください。
   <input type="number" step="1" id="decrementer" min="-2" max="15">
  </label>
</p>
<input type="button" value="Decrement" id="theButton">
```

### JavaScript

```js
/* 関数を呼び出すボタンを生成 */
let button = document.getElementById('theButton');
button.addEventListener('click', function() {
  stepondown();}
);

function stepondown() {
  let input = document.getElementById('theNumber');
  let val = document.getElementById('decrementer').value;

  if (val) {  /* 引数付きで減算 */
    input.stepDown(val);
  } else {    /* 引数なしで減算。 0, 5, -2 などを試してください。 */
    input.stepDown();
  }
}
```

### CSS

```css
input:invalid {
  border: red solid 3px;
}
```

### 結果

{{EmbedLiveSample("Example")}}

`stepDown()` メソッドに引数を渡さなかった場合、既定値は 1 になります。他の値は `step` 属性の値に乗算されるので、この場合は 5 となります。 _`stepDecrement`_ に 4 を渡した場合、 `stepDown` は `4 * 5` すなわち `20` だけ行われます。この引数が `0` であった場合、数値は減算されません。 `stepDown()` メソッドは入力が範囲外にならないように、この場合は 0 になった時点で停止し、引数として渡された値の小数点以下を切り捨てます。

段階の減算係数を `1.2` に設定してみてください。メソッドを呼び出すとどうなるでしょうか？

値を不正な数値である `44` に設定してみてください。メソッドを呼び出すとどうなるでしょうか？

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLInputElement.stepUp", "HTMLInputElement.stepUp()")}}
- [`step`](/ja/docs/Web/HTML/Attributes/step),
  [`min`](/ja/docs/Web/HTML/Attributes/min),  [`max`](/ja/docs/Web/HTML/Attributes/max) 属性
