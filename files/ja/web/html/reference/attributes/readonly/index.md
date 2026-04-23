---
title: "HTML 属性: readonly"
short-title: readonly
slug: Web/HTML/Reference/Attributes/readonly
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`readonly`** は論理属性で、存在する場合、要素が変更可能ではなくなり、ユーザーがそのコントロールを編集できなくなります。

{{InteractiveExample("HTML デモ: readonly", "tabbed-shorter")}}

```html interactive-example
<label for="firstName">名前:</label>
<input id="firstName" name="firstName" type="text" value="アダム" />

<label for="age">年齢:</label>
<input id="age" name="age" type="number" value="42" readonly />

<label for="hobbies">趣味:</label>
<textarea id="hobbies" name="hobbies" readonly>野球</textarea>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:read-only,
textarea:read-only {
  background-color: silver;
}
```

## 概要

`readonly` 属性が input 要素に指定された場合、その入力欄をユーザーが編集できないので、その要素は制約検証が行われません。

`readonly` 属性は、次のようなテキストのフォームコントロールで対応してます。

- {{HTMLElement("input")}} 要素の型:
  - `{{HTMLElement("input/text","text")}}`
  - `{{HTMLElement("input/search","search")}}`
  - `{{HTMLElement("input/tel","tel")}}`
  - `{{HTMLElement("input/url","url")}}`
  - `{{HTMLElement("input/email","email")}}`
  - `{{HTMLElement("input/password","password")}}`
  - `{{HTMLElement("input/date","date")}}`
  - `{{HTMLElement("input/month","month")}}`
  - `{{HTMLElement("input/week","week")}}`
  - `{{HTMLElement("input/time","time")}}`
  - `{{HTMLElement("input/datetime-local","datetime-local")}}`
  - `{{HTMLElement("input/number","number")}}`
- {{HTMLElement("textarea")}}

この属性は、 {{HTMLElement("select")}} や {{HTMLElement("button")}} を含む他のすべての要素には影響しません。また、次のようなテキスト以外の入力要素にも適用されません。

- `{{HTMLElement("input/hidden","hidden")}}`
- `{{HTMLElement("input/range","range")}}`
- `{{HTMLElement("input/color","color")}}`
- `{{HTMLElement("input/checkbox","checkbox")}}`
- `{{HTMLElement("input/radio","radio")}}`
- `{{HTMLElement("input/file","file")}}`
- `{{HTMLElement("input/submit","submit")}}`
- `{{HTMLElement("input/image","image")}}`
- `{{HTMLElement("input/reset","reset")}}`
- `{{HTMLElement("input/button","button")}}`

`readonly` 属性に対応しており、この属性が設定されていない入力フィールドは、 {{cssxref(":read-write")}} 擬似クラスに一致します。それ以外の要素はすべて、 {{cssxref(":read-only")}} 擬似クラスに一致します。

### 属性の相互作用

[`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled) と `readonly` の違いは、読み取り専用 (read-only) のコントロールは機能し、フォーカスを設定することもできるのに対し、無効な (disabled) コントロールはフォーカスを受け取ることができず、フォームで送信されず、一般に有効化されるまでコントロールとしては機能しません。

読み取り専用のフィールドはユーザーの操作で値を変更することはできないので、 [`required`](/ja/docs/Web/HTML/Reference/Attributes/required) は `readonly` 属性が一緒に指定されている入力欄では効果がありません。

readonly が付いた値を動的に変更できる唯一の方法は、スクリプトを通して行うことです。

> [!NOTE]
> `required` 属性は `readonly` 属性が指定された入力欄では許可されていません。

### ユーザビリティ

ブラウザーは `readonly` 属性を表示します。

### 制約検証

要素が読み取り専用である場合、要素の値をユーザーによって更新することができないため、制約検証は行われません。

## 例

### HTML

```html
<div class="group">
  <input type="text" value="何らかの値" readonly="readonly" id="text" />
  <label for="text">テキストボックス</label>
</div>
<div class="group">
  <input type="date" value="2020-01-01" readonly="readonly" id="date" />
  <label for="date">日付</label>
</div>
<div class="group">
  <input type="email" value="何らかの値" readonly="readonly" id="email" />
  <label for="email">メールドレス</label>
</div>
<div class="group">
  <input type="password" value="何らかの値" readonly="readonly" id="pwd" />
  <label for="pwd">パスワード</label>
</div>
<div class="group">
  <textarea readonly="readonly" id="ta">何らかの値</textarea>
  <label for="ta">メッセージ</label>
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
