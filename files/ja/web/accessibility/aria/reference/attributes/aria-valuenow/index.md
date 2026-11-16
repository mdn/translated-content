---
title: "ARIA: aria-valuenow 属性"
short-title: aria-valuenow
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

`aria-valuenow` 属性は `range` ウィジェットの現在の値を定義します。

## 解説

`aria-valuenow` 属性は、範囲ウィジェットの現在の値を定義します。これは、{{HTMLElement('progress')}}、{{HTMLElement('meter')}}、および `type` が [`range`](/ja/docs/Web/HTML/Reference/Elements/input/range)、[`number`](/ja/docs/Web/HTML/Reference/Elements/input/number)、または日付・時刻型のいずれかである {{HTMLElement('input')}} の `value` 属性に似ています。

非セマンティック要素で [`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)、[`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)、[`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)、および [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) を含む範囲型ロールを作成する場合、`aria-valuenow` を使用して最小値と最大値の間である現在の数値を定義できます。最小値と最大値は [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) と [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) で定義します。

> [!WARNING]
> [`range`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) ロール自体は [「抽象ロール」](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#6._抽象ロール) であるため、**使用しないで**ください。`aria-valuenow` 属性は、`range` ロールの全てのサブタイプで使用されます。

```html
<p id="birthyearLabel">生まれた年は何年ですか？</p>
<div
  role="spinbutton"
  tabindex="-1"
  aria-valuenow="1984"
  aria-valuemin="1900"
  aria-valuemax="2021"
  aria-labelledby="birthyearLabel">
  <span class="value"> 1984 </span>
  <span role="button">
    <span aria-hidden="true">+</span>
    年を 1 増やす
  </span>
  <span role="button">
    <span aria-hidden="true">-</span>
    年を 1 減らす
  </span>
</div>
```

可能な場合は、意味を持つ HTML 要素を使用してください。

```html
<label for="birthyear">生まれた年は何年ですか？</label>
<input type="number" id="birthyear" value="1984" min="1900" max="2021" />
```

進行状況バーが不確定な状態にあるときなど、既知の値がない場合には、`aria-valuenow` 属性を設定しないでください。

`aria-valuenow` が設定されていない場合は、現在の値に関する情報は示されません。

スライダーやスピンボタンと組み合わせて使用すると、支援技術は実際の値をユーザーに通知します。

進捗状況バーおよびスクロールバーと一緒に使用すると、支援技術は値をパーセントとしてユーザーに通知します。`aria-valuemin` と `aria-valuemax` が両方とも定義されている場合、パーセント値は範囲内の位置として計算されます。それ以外の場合は、実際の値がパーセントとして通知されます。

通知される値 (実際の値またはパーセント値) がユーザーにとって明確でない可能性がある場合は、[`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) 属性を使用して、値をユーザーにとってわかりやすい形で表す必要があります。設定すると、`aria-valuenow` の数値の代わりに `aria-valuetext` の文字列が通知されます。例えば、スライダーが曜日を表し、曜日の `aria-valuenow` が数字である場合、`aria-valuetext` プロパティは、スライダーの値が理解できるような文字列 (「月曜日」など) に設定する必要があります。

## 値

- `<number>`
  - : 最小値と最大値の間の 10 進数。

## 関連インターフェイス

- {{domxref("Element.ariaValueNow")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaValueNow`](/ja/docs/Web/API/Element/ariaValueNow) プロパティは、`aria-valuenow` 属性の値を反映します。
- {{domxref("ElementInternals.ariaValueNow")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaValueNow`](/ja/docs/Web/API/ElementInternals/ariaValueNow) プロパティは、`aria-valuenow` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

継承先のロール:

- [`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`progressbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

## 例

```html
<p id="temperatureLabel">オーブンの温度</p>
<div
  role="meter"
  id="temperature"
  aria-valuenow="205"
  aria-valuemin="70"
  aria-valuemax="250"
  aria-labelledby="temperatureLabel">
  <div class="meter-color" aria-hidden="true"></div>
</div>
```

ARIA を使用する際の第一のルールは、「必要な意味や動作がすでに組み込まれているネイティブ機能を使える場合は、要素を再利用して ARIA のロール、状態、プロパティを**追加して**アクセシブルにするのではなく、その機能を使う」というものです。

```html
<label for="temperature">オーブンの温度</label>
<input type="range" id="temperature" value="205" min="70" max="250" step="5" />
```

{{HTMLElement('input')}} のようなネイティブ HTML 要素を使えば、スタイルと意味が最初から備わっています。

## 仕様書

{{Specifications}}

## 関連情報

- [`range` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [`<input type="range">` 要素の `value` 属性](/ja/docs/Web/HTML/Reference/Elements/input/range#value)
- [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
- [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
