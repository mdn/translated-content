---
title: "HTML 属性: min"
slug: Web/HTML/Attributes/min
---

{{HTMLSidebar}}

**`min`** 属性は、その属性を含む入力欄に対して許容できる有効な最小値を定義します。要素の値 ([`value`](/ja/docs/Web/HTML/Element/input#attr-value)) がこれより大きい場合、その要素は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に失敗します。この値は、 `max` 属性の値以下でなければなりません。 `min` 属性が指定されていないか無効であった場合、最小値は適用されません。

これは数値入力型、例えば {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} 型や {{htmlelement('meter')}} 要素で有効であり、 `min` 属性はフォームコントロールで妥当と見なされる最も小さな値を指定する数値です。

### 構文

<table class="no-markdown">
  <caption>
    <code>min</code> の構文（入力 <code>type</code> 別）
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
      <td><code>yyyy-mm-dd</code></td>
      <td><code>&#x3C;input type="date" min="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>yyyy-mm</code></td>
      <td><code>&#x3C;input type="month" min="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>yyyy-W##</code></td>
      <td><code>&#x3C;input type="week" min="2019-W23" step=""></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>hh:mm</code></td>
      <td><code>&#x3C;input type="time" min="09:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>yyyy-mm-ddThh:mm</code></td>
      <td>
        <code>&#x3C;input type="datetime-local" min="2019-12-25T19:30"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><a href="/ja/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="number" min="0" step="5" max="100"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><a href="/ja/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="range" min="60" step="5" max="100"></code>
      </td>
    </tr>
  </tbody>
</table>

> **メモ:** ユーザーが入力したデータが設定された最大値を満たしていない場合、制約検証では無効とみなされ、 {{cssxref(':invalid')}} の擬似クラスに一致するようになります。

詳しくは [クライアント側検証](/ja/docs/Web/Guide/HTML/Constraint_validation)と {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}} を参照してください。

{{htmlelement('meter')}} 要素における `min` 属性は、測定範囲の上限の数値を定義します。これは、指定されている場合、最大値 ([`max`](/ja/docs/Web/HTML/Attributes/max) 属性) よりも小さくなければなりません。どちらの場合も、省略された場合、値は既定で 1 となります。

<table class="no-markdown">
  <caption>
  その他の要素における <code>min</code> 値の構文
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
      <td>{{HTMLElement("meter")}}</td>
      <td><a href="/ja/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;meter id="fuel" min="0" max="100" low="33" high="66"
          optimum="80" value="40"> at 40/100&#x3C;/meter></code
        >
      </td>
    </tr>
  </tbody>
</table>

### step への影響

`min` と `step` の値は、 `step` 属性がない場合も含め、どの値が有効であるかを定義します。 `step` の既定値は `0` です。

無効な入力の周囲に太く赤い境界を追加します。

```css
input:invalid {
  border: solid red 3px;
}
```

それから入力欄の最小値を 7.2 と定義し、 step 属性は省略しているので、既定値が 1 になります。

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8">
```

`step` の既定値は 1 なので、有効な値は `7.2`, `8.2`, `9.2`, などになります。 8 の値は有効ではありません。無効な値が入っているので、対応しているブラウザーは値が無効であることを表示します。

{{EmbedLiveSample("Impact_on_step",200,55)}}

明示的に含まれていない限り、 `number`、 `range` では `step` は既定値の 1 となり、 date/time 入力型では 1 単位 (秒, 週, 月, 日) となります。

## アクセシビリティの考慮

ユーザーがフォームに記入したり、個々のフォームコントロールを使用するのに役立つ説明を提供してください。必須の入力、任意の入力、データの書式、その他の関連する情報を示してください。 `min` 属性を使用する場合は、この最大値の要件がユーザーに理解されていることを確認してください。 {{htmlelement('label')}} 内で指示を提供すれば十分かもしれません。ラベルの外に指示を提供すれば、より柔軟な配置やデザインが可能になるので、 [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) または [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) を使用することを検討してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`step`](/ja/docs/Web/HTML/Attributes/step)
- [`max`](/ja/docs/Web/HTML/Attributes/max)
- その他の meter 属性: [`low`](/ja/docs/Web/HTML/Attributes/low), [`high`](/ja/docs/Web/HTML/Attributes/high), [`optimum`](/ja/docs/Web/HTML/Attributes/optimum)
- [制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)
- [制約検証 API](/ja/docs/Web/API/Constraint_validation)
- {{domxref('validityState.rangeUnderflow')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} 型、 {{htmlelement('meter')}}
