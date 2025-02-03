---
title: "HTML 属性: step"
short-title: step
slug: Web/HTML/Attributes/step
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

**`step`** 属性は、が従わなければならない刻み値を指定する数値、またはキーワード `any` です。数値の入力型、たとえば {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} 型に有効です。

`step` は、スピナーボタンを上下にクリックしたり、範囲上でスライダーを左右に動かしたり、異なる日付タイプを検証したりする際の*刻み間隔*を設定します。明示的に指定されていない場合、 `step` の既定値は、 `number` と `range` の場合は 1、日付/時刻入力型の場合は1単位 (分、週、月、日) になります。値は正の整数または浮動小数点数、または刻みが指定されておらず、 ([`min`](/ja/docs/Web/HTML/Attributes/min) や [`max`](/ja/docs/Web/HTML/Attributes/max) のような他の制約を除いて) すべての値が可能であることを意味する特別な値 `any` のいずれかでなければなりません。

`number` 入力型の既定の刻み値は 1 で、刻みの基底値が整数でない場合を除き、整数のみを入力することができます。 `time` の既定の刻み値は 60 秒で、 900 は 15 分と等しくなります。

## 構文

<table class="no-markdown">
  <caption>
    step の既定値
  </caption>
  <thead>
    <tr>
      <th>入力型</th>
      <th>構文</th>
      <th>例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td>1 (日)</td>
      <td><code>&#x3C;input type="date" min="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>1 (月)</td>
      <td><code>&#x3C;input type="month" min="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td>1 (週)</td>
      <td><code>&#x3C;input type="week" min="2019-W23" step="2"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td>60 (秒)</td>
      <td><code>&#x3C;input type="time" min="09:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td>60 (秒)</td>
      <td>
        <code
          >&#x3C;input type="datetime-local" min="2019-12-25T19:30"
          step="900"></code
        >
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>1</td>
      <td>
        <code>&#x3C;input type="number" min="0" step="0.1" max="10"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>1</td>
      <td><code>&#x3C;input type="range" min="0" step="2" max="10"></code></td>
    </tr>
  </tbody>
</table>

`any` が明示的に設定されていない場合、 `number`, 日付/時刻入力型, `range` の入力型で有効な値は、刻みの基底値と等しくなります。 - [`min`](/ja/docs/Web/HTML/Attributes/min) の値と、それに step の値を [`max`](/ja/docs/Web/HTML/Attributes/max) の値 (指定されている場合) まで加えていった値です。以下の例では、 10 以上のあらゆる偶数の整数が有効となります。

```html
<input type="number" min="10" step="2" />
```

`step` が省略された場合、任意の整数が有効ですが、`step` が既定で 1 に設定されているため、4.2 のような実数は無効です。 4.2 が有効であるためには、

- `step` が `any`, 0.1, 0.2 のいずれかに設定されているか、
- `min` の値が .2 で終わる数値、例えば 0.2, 1.2, -5.2 などである必要があります。

## 例

### `min` の step への影響

`min` の値は、 `step` 属性がなくても有効な値を定義します。これは `step` の既定値が `number` 入力型では `1` であるからです。

無効な入力の周囲に太く赤い境界を追加します。

```css
input:invalid {
  border: solid red 3px;
}
```

それから入力欄の最小値を 1.2 と定義し、 step の値を 2 に定義します。

```html
<input id="myNumber" name="myNumber" type="number" step="2" min="1.2" />
```

有効な値は、 1.2, 3.2, 5.2, 7.2, 9.2, 11.2 などになります。整数部が奇数で小数部が .2 の実数のみが有効です。数値スピナーを表示している場合は、 1.2 以上の実数を 2 ずつ増加した値を生成します。

{{EmbedLiveSample("min_impact_on_step","100%",55)}}

> [!NOTE]
> ユーザーが入力したデータが刻みの設定に従っていない場合、制約検証では無効とみなされ、 {{cssxref(":invalid")}} と {{cssxref(":out-of-range")}} の擬似クラスに一致します。

詳しくは[クライアント側制約検証](/ja/docs/Web/HTML/Constraint_validation)と {{domxref("ValidityState.stepMismatch", "stepMismatch")}} を参照してください。

## アクセシビリティの考慮

ユーザーがフォームに記入したり、個々のフォームコントロールを使用するのに役立つ説明を提供してください。必須の入力、任意の入力、データの書式、その他の関連する情報を示してください。 `min` 属性を使用する場合は、この最大値の要件がユーザーに理解されていることを確認してください。 {{htmlelement('label')}} 内で指示を提供すれば十分かもしれません。ラベルの外に指示を提供すれば、より柔軟な配置やデザインが可能になるので、 [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) または [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) を使用することを検討してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`max`](/ja/docs/Web/HTML/Attributes/max)
- [`min`](/ja/docs/Web/HTML/Attributes/min)
- [制約検証](/ja/docs/Web/HTML/Constraint_validation)
- [制約検証 API](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{domxref('validityState.stepMismatch')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} 型と {{htmlelement('meter')}}
