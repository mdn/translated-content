---
title: "HTML 属性: readonly"
slug: Web/HTML/Attributes/readonly
---

{{HTMLSidebar}}

**`readonly`** は論理属性で、存在する場合、要素が変更可能ではなくなり、ユーザーがそのコントロールを編集できなくなります。

`readonly` 属性が input 要素に指定された場合、その入力欄をユーザーが編集できないので、その要素は制約検証が行われません。

`readonly` 属性はフォームコントロールの `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, `{{HTMLElement("input/number","number")}}` の `{{HTMLElement("input")}}` 型と `{{HTMLElement("textarea")}}` 要素が対応しています。これらの入力型や要素のいずれかに設定された場合、 `{{cssxref(':read-only')}}` 擬似クラスが一致します。この属性が含まれなかった場合は、 `{{cssxref(':read-write')}}` 擬似クラスが一致します。

この属性は `{{HTMLElement("select")}}` や、 {{HTMLElement("input/checkbox","checkbox")}} や {{HTMLElement("input/radio","radio")}} のように既に変更不可能な入力型、 {{HTMLElement("input/file","file")}} 入力型のように定義上初期状態で値を設定できない入力型は対応していません。 {{HTMLElement("input/range","range")}} や {{HTMLElement("input/color","color")}} は、どちらも既定値があります。 {{HTMLElement("input/hidden","hidden")}} も、非表示であればユーザーが値を入力することが期待できないので対応していません。ボタン型も、 `image` を含め、すべて対応していません。

> **メモ:** テキストコントロールだけが読み取り専用にすることができます。他のコントロール (チェックボックスやボタンなど) は、読み取り専用と無効との間に有用な違いがないため、 `readonly` 属性は適用されません。

入力に `readonly` 属性が設定されている場合、 {{cssxref(":read-only")}} 擬似クラスも適用されます。逆に、 `readonly` 属性に対応していても、この属性が設定されていない入力欄は、 {{cssxref(":read-write")}} 擬似クラスに一致します。

### 属性の相互作用

[`disabled`](/ja/docs/Web/HTML/Attributes/disabled) と `readonly` の違いは、読み取り専用 (readonly) のコントロールは機能し、フォーカスを設定することもできるのに対し、無効な (disabled) コントロールはフォーカスを受け取ることができず、フォームで送信されず、一般に有効化されるまでコントロールとしては機能しません。

読み取り専用のフィールドはユーザーの操作で値を変更することはできないので、 [`required`](/ja/docs/Web/HTML/Attributes/required) は `readonly` 属性が一緒に指定されている入力欄では効果がありません。

readonly が付いた値を動的に変更できる唯一の方法は、スクリプトを通して行うことです。

> **メモ:** `required` 属性は `readonly` 属性が指定された入力欄では許可されていません。

### ユーザビリティ

ブラウザーは `readonly` 属性を表示します...

### 制約検証

要素が読み取り専用である場合、要素の値をユーザーによって更新することができないため、制約検証は行われません。

## 例

### HTML

```html
<div class="group">
  <input type="text" value="Some value" readonly="readonly" id="text"/>
  <label for="text">Text box</label>
</div>
<div class="group">
  <input type="date" value="2020-01-01" readonly="readonly" id="date"/>
  <label for="date">Date</label>
</div>
<div class="group">
  <input type="email" value="Some value" readonly="readonly" id="email"/>
  <label for="email">Email</label>
</div>
<div class="group">
  <input type="password" value="Some value" readonly="readonly" id="pwd"/>
  <label for="pwd">Password</label>
</div>
<div class="group">
  <textarea readonly="readonly" id="ta">Some value</textarea>
  <label for="ta">Message</label>
</div>
```

### 結果

{{EmbedLiveSample('Example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(':read-only')}} および {{cssxref(':read-write')}}
- {{htmlelement('input')}}
- {{htmlelement('select')}}
