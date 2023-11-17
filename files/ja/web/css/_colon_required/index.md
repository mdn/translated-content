---
title: ":required"
slug: Web/CSS/:required
---

{{ CSSRef }}

**`:required`** は [CSS](/ja/docs/Web/CSS) の [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} 要素のうち [`required`](/ja/docs/Web/HTML/Element/input#required) 属性が設定されているものを表します。

```css
/* 必須の <input> をすべて選択 */
input:required {
  border: 1px dashed red;
}
```

この擬似クラスは、フォームを送信する前に有効なデータを持っている必要がある入力欄を強調表示するのに便利です。

> **メモ:** {{cssxref(":optional")}} 擬似クラスは*省略可能*なフォーム欄を選択します。

## 構文

```
:required
```

## 例

### 必須フィールドの枠を赤にする

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

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
```

#### 結果

{{EmbedLiveSample('Examples', 600, 120)}}

## アクセシビリティの考慮

入力が必須の {{htmlelement("input")}} には [`required`](/ja/docs/Web/HTML/Element/input#required) 属性を適用してください。これによって、読み上げソフトなどの支援技術を使用している人が、フォームを送信するためにどの入力欄が有効なコンテンツを必要とするかを理解することができます。

フォームに[任意](/ja/docs/Web/CSS/:optional)の入力欄も含まれている場合、必須の入力欄を視覚的に示すのを色だけに依存しないようにしてください。通常、説明する文字列やアイコンが使用されます。

- [MDN WCAG を理解する ― ガイドライン 3.3 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Understanding Success Criterion 3.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の検証関連の擬似クラス: {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [フォームデータの検証](/ja/docs/Learn/Forms/Form_validation)
