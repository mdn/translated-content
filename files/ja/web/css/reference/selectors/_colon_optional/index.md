---
title: CSS `:optional` 擬似クラス
short-title: :optional
slug: Web/CSS/Reference/Selectors/:optional
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:optional`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、{{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} 要素のうち [`required`](/ja/docs/Web/HTML/Reference/Elements/input#required) 属性が設定されていないものすべてを表します。

{{InteractiveExample("CSS デモ: :optional", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

.req {
  color: red;
}

*:optional {
  background-color: palegreen;
}
```

```html interactive-example
<form>
  <label for="name">名前: <span class="req">*</span></label>
  <input id="name" name="name" type="text" required />

  <label for="birth">生年月日:</label>
  <input id="birth" name="birth" type="date" />

  <label for="origin"
    >どうやって見つけましたか？ <span class="req">*</span></label
  >
  <select id="origin" name="origin" required>
    <option>Google</option>
    <option>Facebook</option>
    <option>広告</option>
  </select>
  <p><span class="req">*</span> - 必須フィールド</p>
</form>
```

この擬似クラスは。フォームを送信するにあたって必須ではない入力欄にスタイルを適用するのに便利です。

> [!NOTE]
> {{cssxref(":required")}} 擬似クラスは必須のフォーム欄を選択します。

## 構文

```css
:optional {
  /* ... */
}
```

## アクセシビリティ

[フォーム](/ja/docs/Web/HTML/Reference/Elements/form)に必須ではない {{htmlelement("input")}} が含まれている場合、必須の入力欄には [`required`](/ja/docs/Web/HTML/Reference/Elements/input#required) 属性を適用してください。これによって、読み上げソフトなどの支援技術を使用している人が、フォームを送信するためにどの入力欄が有効なコンテンツを必要とするかを理解することができます。

必須の入力欄を視覚的に示すのに、色だけに依存しないようにしてください。通常、説明する文字列やアイコンが使用されます。

- [MDN WCAG を理解する ― ガイドライン 3.3 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#ガイドライン_3.3_—_入力支援_ユーザーが間違いを避けて修正できるようにする)
- [Understanding Success Criterion 3.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## 例

### 省略可能なフィールドの枠を紫にする

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">URL を入力:</label>
    <input type="url" id="url_input" />
  </div>

  <div class="field">
    <label for="email_input">メールアドレスを入力:</label>
    <input type="email" id="email_input" required />
  </div>
</form>
```

#### CSS

```css
label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

input:optional {
  border-color: rebeccapurple;
  border-width: 3px;
}
```

#### 結果

{{EmbedLiveSample('Examples', 600, 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の検証関連の擬似クラス: {{ cssxref(":required") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [フォームデータの検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
