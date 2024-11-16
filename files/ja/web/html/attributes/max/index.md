---
title: "HTML 属性: max"
short-title: max
slug: Web/HTML/Attributes/max
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{HTMLSidebar}}

**`max`** 属性は、その属性を含む入力に対して許容可能で有効な最大値を定義します。要素の値 ([`value`](/ja/docs/Web/HTML/Element/input#value)) がこれより大きい場合、その要素は[制約検証](/ja/docs/Learn/Forms/Form_validation)に失敗します。この値は、 [`min`](/ja/docs/Web/HTML/Attributes/min) 属性の値以上でなければなりません。 `max` 属性が存在していても、指定されていないか無効であった場合、 `max` 値は適用されません。 `max` 属性が有効で、値が空でなく、 `max` 属性によって許容される最大値よりも大きい場合、制約検証によってフォームの送信が阻止されます。

`max` 属性は、数値入力型、例えば {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} 型や {{htmlelement('progress')}} および {{htmlelement('meter')}} 要素で有効です。フォームコントロールで妥当と見なされる最も大きな値を指定する数値です。

値が許容される最大値を超えた場合、 {{domxref('validityState.rangeOverflow')}} が true となり、そのコントロールは {{cssxref(':out-of-range')}} および {{cssxref(':invalid')}} 擬似クラスに一致するようになります。

## 構文

<table class="no-markdown">
  <caption>
    <code>max</code> の構文（入力 <code>type</code> 別）
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
      <td><code>&#x3C;input type="date" max="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>yyyy-mm</code></td>
      <td><code>&#x3C;input type="month" max="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>yyyy-W##</code></td>
      <td><code>&#x3C;input type="week" max="2019-W23" step=""></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>HH:mm</code></td>
      <td><code>&#x3C;input type="time" max="17:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>yyyy-mm-ddTHH:mm</code></td>
      <td>
        <code>&#x3C;input type="datetime-local" max="2019-12-25T23:59"></code>
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

> [!NOTE]
> ユーザーが入力したデータが設定された最大値を満たしていない場合、制約検証では無効とみなされ、 {{cssxref(':invalid')}} と {{cssxref(':out-of-range')}} の擬似クラスに一致するようになります。

詳しくは [クライアント側検証](/ja/docs/Web/HTML/Constraint_validation)と {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}} を参照してください。

{{htmlelement('progress')}} 要素における `max` 属性は、 `progress` 要素で示されたタスクの作業の必要量を記述します。存在する場合、ゼロより大きい値を持ち、有効な浮動小数点数でなければなりません。 {{htmlelement('meter')}} 要素における `max` 属性は、測定範囲の上限の数値を定義します。これは、指定されている場合、最小値（[`min`](/ja/docs/Web/HTML/Attributes/min) 属性）よりも大きくなければなりません。どちらの場合も、省略された場合、値は既定で 1 となります。

<table class="no-markdown">
  <caption>
    その他の要素における <code>max</code> 値の構文
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
      <td>{{HTMLElement("progress")}}</td>
      <td><a href="/ja/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;progress id="file" max="100" value="70"> 70%
          &#x3C;/progress></code
        >
      </td>
    </tr>
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

## アクセシビリティの考慮

ユーザーがフォームに記入したり、個々のフォームコントロールを使用するのに役立つ説明を提供してください。必須の入力、任意の入力、データの書式、その他の関連する情報を示してください。 `max` 属性を使用する場合は、この最大値の要件がユーザーに理解されていることを確認してください。 {{htmlelement('label')}} 内で指示を提供すれば十分かもしれません。ラベルの外に指示を提供すれば、より柔軟な配置やデザインが可能になるので、 [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) または [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) を使用することを検討してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`step`](/ja/docs/Web/HTML/Attributes/step)
- [`min`](/ja/docs/Web/HTML/Attributes/min)
- 他の meter の属性: [`low`](/ja/docs/Web/HTML/Attributes/low), [`high`](/ja/docs/Web/HTML/Attributes/high), [`optimum`](/ja/docs/Web/HTML/Attributes/optimum)
- [制約検証](/ja/docs/Web/HTML/Constraint_validation)
- [制約検証 API](/ja/docs/Learn/Forms/Form_validation)
- {{domxref('validityState.rangeOverflow')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} 型、 {{htmlelement('meter')}} 要素
