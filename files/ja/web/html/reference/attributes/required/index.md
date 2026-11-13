---
title: "`required` 属性"
short-title: required
slug: Web/HTML/Reference/Attributes/required
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

[論理](/ja/docs/Glossary/Boolean/HTML)属性の **`required`** 属性は、存在する場合、所有するフォームを送信する前にユーザーが入力欄に値を指定しなければならないことを示します。

`required` 属性は `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, `{{HTMLElement("input/number","number")}}`, `{{HTMLElement("input/checkbox","checkbox")}}`, `{{HTMLElement("input/radio","radio")}}`, `{{HTMLElement("input/file","file")}}` の {{HTMLElement("input")}} 型と {{HTMLElement("select")}} および {{HTMLElement("textarea")}} のフォームコントロール要素で対応しています。これらの入力型や要素の何れかに設定された場合、 {{cssxref(':required')}} 擬似クラスが一致します。属性が設定されていない場合は {{cssxref(':optional')}} 擬似クラスが一致します。

この属性は、どちらもデフォルト値を持つ {{HTMLElement("input/range","range")}} と {{HTMLElement("input/color","color")}} の入力型には対応しておらず、適用する意味もありません。`color` 型のデフォルト値は `#000000` です。`range` 型のデフォルト値は `min` と `max` の中間点です。これらの属性が指定されていない場合、ほとんどのブラウザーでは `min` と `max` のデフォルト値はそれぞれ 0 と 100 です。`required` は {{HTMLElement("input/hidden","hidden")}} 入力型にも対応していません。ユーザーが非表示のフォームフィールドに入力することは期待できないためです。また、{{HTMLElement("input/image","image")}} を含むボタン入力型も、いずれも対応していません。

同じ名前の {{HTMLElement("input/radio","radio")}} ボタンのグループでは、グループ内のいずれか 1 つに `required` 属性が設定されている場合、そのボタンでなくても、グループ内のいずれかのラジオボタンをチェックする必要があります。コードの保守性を高めるため、グループ内の同じ名前のラジオボタンすべてに `required` 属性を設定するか、どれにも設定しないことをお勧めします。

同じ名前の {{HTMLElement("input/checkbox","checkbox")}} 入力型のグループでは、`required` 属性が設定されたチェックボックスだけが必須になります。

> [!NOTE]
> [`aria-required="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) を設定すると、ある要素（任意の要素）が必須であることをスクリーンリーダーに伝えますが、その要素が任意であるかどうかには関係ありません。

## 解説

### 属性の相互作用

読み取り専用フィールドは値を変更することができないので、 `required` は [`readonly`](/ja/docs/Web/HTML/Reference/Attributes/readonly) 属性が指定されている入力欄には影響を与えません。

### ユーザビリティ

`required` 属性を設定する場合は、その {{HTMLElement("input")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}} が必須であることをユーザーに知らせるため、コントロールの近くに視覚的な表示を設けてください。さらに、必須フォームコントロールを {{cssxref(':required')}} 擬似クラスで指定し、必須であることが分かるようにスタイルを設定してください。これにより、視覚で情報を得るユーザーの使いやすさが向上します。支援技術は `required` 属性に基づいてフォームコントロールが必須であることをユーザーに伝えるはずですが、ブラウザーとスクリーンリーダーの組み合わせがまだ `required` に対応していない場合に備えて、`aria-required="true"` を追加しても問題ありません。

### 制約検証

要素が必須で、その値が空文字列の場合、その要素では {{domxref('ValidityState.valueMissing','valueMissing')}} 制約違反が発生し、{{cssxref(':invalid')}} 擬似クラスに一致します。

## アクセシビリティの注意事項

ユーザーにフォームコントロールが必須であることを知らせてください。色覚の違いや認知機能の違いがあるユーザー、スクリーンリーダーを使用するユーザーを含むすべてのユーザーが要件を理解できるよう、テキスト、色、マーク、属性など複数の方法で伝えてください。

## 例

### HTML

```html
<form>
  <div class="group">
    <input type="text" />
    <label>通常</label>
  </div>
  <div class="group">
    <input type="text" required />
    <label>必須</label>
  </div>
  <input type="submit" />
</form>
```

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

### 結果

{{EmbedLiveSample('Example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('validityState.valueMissing')}}
- {{cssxref(':required')}} および {{cssxref(':optional')}}
- {{htmlelement('input')}}
- {{htmlelement('select')}}
