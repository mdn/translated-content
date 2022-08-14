---
title: 'HTML 属性: disabled'
slug: Web/HTML/Attributes/disabled
tags:
  - 属性
  - Attributes
  - 制約検証
  - フォーム
  - required
spec-urls: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled
translation_of: Web/HTML/Attributes/disabled
---

{{HTMLSidebar}}

**`disabled`** は論理属性で、存在する場合、その要素は変更不可、フォーカス不可、フォームへの送信不可となります。ユーザーはそのコントロールやフォームコントロールの子孫を編集したり、フォーカスしたりすることができません。

フォームコントロールに `disabled` 属性が指定された場合、その要素とフォームコントロールの子孫は制約検証が行われません。多くの場合、ブラウザーはそのようなコントロールをグレーアウトし、マウスクリックやフォーカス関連のイベントなどの閲覧イベントを受け取りません。

`disabled` 属性は、 {{ HTMLElement("button") }}, {{ HTMLElement("command") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}, {{ HTMLElement("input")}} が対応しています。

論理属性の disabled は、ユーザーがコントロールやその子孫のコントロールと対話できないことを示します。この属性が指定されていない場合、コントロールは、例えば `fieldset` のような包含要素からその設定を継承します。 `disabled` 属性が設定されている包含要素がなく、コントロール自体がこの属性を持っていない場合、コントロールは有効になります。 {{ HTMLElement("optgroup") }}上で宣言された場合、 select は（特に無効化されていない限り）操作可能になりますが、オプショングループの項目はどれも選択不可能になります。

> **Note:** {{ HTMLElement("fieldset") }}が 無効になると、 {{ HTMLElement("legend") }} 内のフォーム制御を除いて、子孫のフォーム制御もすべて無効になります。

対応する要素に `disabled` 属性が適用されている場合、 {{cssxref(":disabled")}} 擬似クラスも適用されます。逆に、 `disabled` 属性に対応しているが、その属性が設定されていない要素は、 {{cssxref(":enabled")}} 擬似クラスに一致します。

この論理属性は、ユーザーがボタンを操作することを防ぎます。この属性が設定されていない場合でも、例えば {{htmlelement('fieldset')}} のような包含要素からボタンを無効にすることができます。 `disabled` 属性が設定された包含要素が存在しない場合、ボタンは有効になります。

Firefox は他のブラウザーとは異なり、ページを再読み込みしても {{htmlelement('button')}} の動的な無効状態を維持します。この機能を制御するには [`autocomplete`](/ja/docs/Web/HTML/Attributes/autocomplete) 属性を使用します。

### 属性の操作

`disabled` と [`readonly`](/ja/docs/Web/HTML/Attributes/readonly) の違いは、コントロールは読み取り専用 (read-only) になっても機能し、フォーカスを受けることができますが、無効なコントロールはフォーカスを受けることができず、フォームと共に送信されず、一般的には有効になるまでコントロールとして機能しないということです。

無効にされたフィールドはその値を変更することができないので、 [`required`](/ja/docs/Web/HTML/Attributes/required) は `disabled` 属性も指定されている入力に対しては効果がありません。さらに、要素が変更不可になるので、[`pattern`](/ja/docs/Web/HTML/Attributes/pattern) のような他のほとんどの属性も、コントロールが有効になるまで効果がありません。

> **Note:** `disabled` 属性が指定されている入力フィールドでは、 `required` 属性は許可されません。

### ユーザビリティ

ブラウザーは無効なフォームコントロールを灰色で表示します。無効なフォームコントロールは不変であり、フォーカスやマウスクリックなどの閲覧イベントを受け取らず、フォームと一緒に送信されないためです。

対応している要素に `{{cssxref(':disabled')}}` 擬似クラスが存在する場合、それに一致するようになります。この属性が含まれていない場合は `{{cssxref(':enabled')}}` 擬似クラスが一致します。要素が disabled 属性に対応していない場合は、この属性は何の効果も持たず、 `:disabled` および `:enabled` 擬似クラスにも一致しません。

### 制約検証

要素が `disabled` である場合、要素の値はフォーカスを受けることができず、ユーザーによって更新されることもなく、制約検証が行われることもありません。

## 例

フォームコントロールが無効になったとき、多くのブラウザーは既定で、より薄いグレーアウトした色で表示します。ここでは、無効になったチェックボックス、ラジオボタン、 {{ HTMLElement("option") }} と {{ HTMLElement("optgroup") }} の例と、祖先の {{HTMLElement("fieldset")}} 要素に設定された disabled 属性によって無効にされているいくつかのフォーム制御の例を示します。 {{ HTMLElement("option") }} は無効になっていますが、 {{ HTMLElement("select") }} 自体は無効になっていません。 {{ HTMLElement("select") }} 是t内を無効にするには、子孫ではなく、その要素にこの属性を追加します。

```html
<fieldset>
  <legend>チェックボックス</legend>
  <p><label>
    <input type="checkbox" name="chbox" value="regular"> 通常
  </label></p>
  <p><label>
    <input type="checkbox" name="chbox" value="disabled" disabled> disabled
  </label></p>
</fieldset>

<fieldset>
  <legend>ラジオボタン</legend>
  <p><label>
    <input type="radio" name="radio" value="regular"> 通常
  </label></p>
  <p><label>
    <input type="radio" name="radio" value="disabled" disabled> disabled
  </label></p>
</fieldset>

<p>
 <label>選択してください
  <select>
    <optgroup label="Group 1">
      <option>Option 1.1</option>
    </optgroup>
    <optgroup label="Group 2">
      <option>Option 2.1</option>
      <option disabled>Option 2.2</option>
      <option>Option 2.3</option>
    </optgroup>
    <optgroup label="Group 3" disabled>
      <option>Disabled 3.1</option>
      <option>Disabled 3.2</option>
      <option>Disabled 3.3</option>
    </optgroup>
  </select>
 </label>
</p>

<fieldset disabled>
  <legend>無効なフィールドセット</legend>
  <p>
   <label>名前: <input type="name" name="radio" value="通常"> 通常 </label>
  </p>
  <p>
   <label>数値: <input type="number"></label>
  </p>
</fieldset>
```

{{EmbedLiveSample('Examples', 500, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.attributes.disabled")}}

## 関連情報

- {{cssxref(':disabled')}} および {{cssxref(':enabled')}}
