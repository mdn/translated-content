---
title: ":optional"
slug: Web/CSS/:optional
---

{{ CSSRef }}

**`:optional`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 [`required`](/ja/docs/Web/HTML/Element/input#required) 属性が設定されていない {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} 要素を表します。

```css
/* 任意の <input> をすべて選択 */
input:optional {
  border: 1px dashed black;
}
```

この擬似クラスは。フォームを送信するにあたって必須ではない入力欄にスタイルを適用するのに便利です。

> **メモ:** {{cssxref(":required")}} 擬似クラスは<em>必須</em>のフォーム欄を選択します。

## 構文

```
:optional
```

## 例

### 省略可能なフィールドの枠を紫にする

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">Enter a URL:</label>
    <input type="url" id="url_input" />
  </div>

  <div class="field">
    <label for="email_input">Enter an email address:</label>
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

## アクセシビリティの考慮

[フォーム](/ja/docs/Web/HTML/Element/form)に必須ではない {{htmlelement("input")}} が含まれている場合、必須の入力欄には [`required`](/ja/docs/Web/HTML/Element/input#required) 属性を適用してください。これによって、読み上げソフトなどの支援技術を使用している人が、フォームを送信するためにどの入力欄が有効なコンテンツを必要とするかを理解することができます。

必須の入力欄を視覚的に示すのに、色だけに依存しないようにしてください。通常、説明する文字列やアイコンが使用されます。

- [MDN WCAG を理解する ― ガイドライン 3.3 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Understanding Success Criterion 3.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の検証関連の擬似クラス: {{ cssxref(":required") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [フォームデータの検証](/ja/docs/Learn/Forms/Form_validation)
