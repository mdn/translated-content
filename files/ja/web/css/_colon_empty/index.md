---
title: ':empty'
slug: Web/CSS/:empty
tags:
  - CSS
  - レイアウト
  - NeedsUpdate
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.empty
translation_of: Web/CSS/:empty
---
{{CSSRef}}

**`:empty`** は [CSS](/ja/docs/Web/CSS) の [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、子を持たない要素を表します。子とは要素のノードまたは文字列 (ホワイトスペースを含む) です。コメント、処理指示、 CSS の {{cssxref("content")}} は要素が空であるかどうかの判断には影響しません。

> **Note:** {{SpecName("CSS4 Selectors", "#the-empty-pseudo")}} では、 `:empty` 擬似クラスは {{CSSxRef(":-moz-only-whitespace")}} のような動作に変更されましたが、現在これに対応しているブラウザーはありません。

```css
/* 内容を含まない <div> 要素を選択 */
div:empty {
  background: lime;
}
```

## 構文

{{CSSSyntax}}

## 例

### HTML

```html
<div class="box"><!-- I will be lime. --></div>
<div class="box">I will be pink.</div>
<div class="box">
	<!-- I will be pink in older browsers because of the whitespace around this comment. -->
</div>
<div class="box">
	<p><!-- I will be pink in all browsers because of the non-collapsible whitespace and elements around this comment. --></p>
</div>
```

### CSS

```css hidden
body {
  display: flex;
  justify-content: space-around;
}
```

```css
.box {
  background: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  background: lime;
}
```

### 結果

{{EmbedLiveSample("Examples", 300, 80)}}

## アクセシビリティの考慮

画面リーダーなどの支援技術は、空の対話型コンテンツを解釈することができません。すべての対話型コンテンツは、対話型コントロールの親要素 ([アンカー](/ja/docs/Web/HTML/Element/a)や[ボタン](/ja/docs/Web/HTML/Element/button)など) に文字列の値を設定することで作成されるアクセシブル名を持つ必要があります。アクセシブル名は、支援技術に有益な情報を通信する API である [アクセシビリティツリー](/ja/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) で使用されます。

対話型コントロールのアクセシブル名を提供する文字列は、[プロパティの組み合わせ](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link" rel="noopener)を使用して非表示にすることができ、画面からは視覚的に削除されますが、支援技術からは解釈できるようにすることができます。これは、アイコンだけで目的を示すボタンでよく使用されます。

- [What is an accessible name? | The Paciello Group](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)
- [Hidden content for better a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN "WCAG を理解する ― ガイドライン 2.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":-moz-only-whitespace")}} {{Non-standard_Inline}} – {{glossary("prefix", "接頭辞付き")}}で、 {{SpecName("CSS4 Selectors", "#the-empty-pseudo")}} の変更を実装
- {{CSSxRef(":blank")}} {{Experimental_Inline}}
