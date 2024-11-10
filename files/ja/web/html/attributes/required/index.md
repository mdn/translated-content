---
title: "HTML 属性: required"
slug: Web/HTML/Attributes/required
l10n:
  sourceCommit: 7d4b73a11e1547dd59cea043b45e57df815f9b3d
---

{{HTMLSidebar}}

[論理](/ja/docs/Glossary/Boolean/HTML)属性の **`required`** 属性は、存在する場合、所有するフォームを送信する前にユーザーが入力に値を指定しなければならないことを示します。

`required` 属性は `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, `{{HTMLElement("input/number","number")}}`, `{{HTMLElement("input/checkbox","checkbox")}}`, `{{HTMLElement("input/radio","radio")}}`, `{{HTMLElement("input/file","file")}}` の {{HTMLElement("input")}} 型と {{HTMLElement("select")}} および {{HTMLElement("textarea")}} のフォームコントロール要素で対応しています。これらの入力型や要素の何れかに設定された場合、 {{cssxref(':required')}} 擬似クラスが一致します。属性が設定されていない場合は {{cssxref(':optional')}} 擬似クラスが一致します。

この属性は {{HTMLElement("input/range","range")}} と {{HTMLElement("input/color","color")}} は対応していませんし、どちらも既定値を持っているので関係がありません。 {{HTMLElement("input/hidden","hidden")}} は、非表示のフォームにユーザーが記入することを期待できないため、対応していません。また、 `image` を含むボタンの種類もいずれも対応していません。

なお、 `color` と `range` はどちらも常に値があるため、 `required` に対応していません。 `color` 型は既定値が `#000000` です。 `range` の既定値は、 `min` と `max` の中間点です。宣言されていない場合、ほとんどのブラウザーでは `min` と `max` の既定値はそれぞれ 0 と 100 です。

同じ名前が付けられた {{HTMLElement("input/radio","radio")}} ボタンのグループのでは、グループ内の一つのラジオボタンに `required` 属性が設定されていた場合、この属性が設定されているものでなくても構わないのですが、グループ内のラジオボタンの一つをチェックする必要があります。コードの保守性を向上させるために、グループ内の同じ名前のラジオボタンすべてに `required` 属性を設定するか、またはどれにも設定しないようにすることをお勧めします。

同じ名前が付けられた {{HTMLElement("input/checkbox","checkbox")}} 入力型のグループでは、 `required` 属性がついたチェックボックスのみが必須になります。

> **メモ:** `aria-required="true"` を設定すると、ある要素（任意の要素）が必須であることを画面リーダーに伝えますが、その要素が任意であるかどうかには関係ありません。

### 属性の相互作用

読み取り専用フィールドは値を持つことができないので、 `required` は [`readonly`](/ja/docs/Web/HTML/Attributes/readonly) 属性が指定されている入力欄には影響を与えません。

### ユーザビリティ

`required`属性を設定する、その {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} が必須であることをユーザーに知らせるために、コントロールの近くに目に見える表示を提供してください。さらに、必須フォームコントロールを {{cssxref(':required')}} 擬似クラスでターゲットにし、必須であることを示すようにスタイル付けしてください。これにより、視覚障碍者のユーザーのユーザービリティが向上します。しかし、 `aria-required="true"` を追加しても、ブラウザーと画面リーダーの組み合わせがまだ `required` に対応していない場合には問題ありません。

### 制約検証

要素が必須で、かつ要素の値が空文字列の場合、その要素は {{domxref('ValidityState.valueMissing','valueMissing')}} に悩まされ、その要素が {{cssxref(':invalid')}} 擬似クラスに一致してします。

## アクセシビリティの考慮

ユーザーにフォームコントロールが必須であることを知らせる表示を提供してください。色盲、認知機能の違い、スクリーンリーダーを使用しているかどうかにかかわらず、すべてのユーザーが要件を理解できるように、メッセージを伝えるものがテキスト、色、マーキング、属性などの多面的なものであることを確認してください。

## 例

### HTML

```html
<form>
  <div class="group">
    <input type="text" />
    <label>Normal</label>
  </div>
  <div class="group">
    <input type="text" required />
    <label>Required</label>
  </div>
  <input type="submit" />
</form>
```

### 結果

{{EmbedLiveSample('Example')}}

## 関連情報

- {{domxref('validityState.valueMissing')}}
- {{cssxref(':required')}} および {{cssxref(':optional')}}
- {{htmlelement('input')}}
- {{htmlelement('select')}}
