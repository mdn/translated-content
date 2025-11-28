---
title: :empty
slug: Web/CSS/Reference/Selectors/:empty
original_slug: Web/CSS/:empty
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:empty`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、子を持たない要素を表します。子とは要素のノードまたは文字列（ホワイトスペースを含む）です。コメント、処理指示、 CSS の {{cssxref("content")}} は要素が空であるかどうかの判断には影響しません。

{{InteractiveExample("CSS デモ: :empty", "tabbed-shorter")}}

```css interactive-example
div:empty {
  outline: 2px solid deeppink;
  height: 1em;
}
```

```html interactive-example
<p>コンテンツのない要素:</p>
<div></div>

<p>コメントのある要素:</p>
<div><!-- コメント --></div>

<p>内部に空の要素を持つ要素:</p>
<div><p></p></div>
```

> [!NOTE]
> [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) では、 `:empty` 擬似クラスは {{CSSxRef(":-moz-only-whitespace")}} のような動作に変更されましたが、現在これに対応しているブラウザーはありません。

## 構文

```css
:empty {
  /* ... */
}
```

## アクセシビリティ

スクリーンリーダーなどの支援技術は、空の対話型コンテンツを解釈できません。すべての対話型コンテンツには、アクセシブル名が必要です。アクセシブル名は、対話型コントロールの親要素（[アンカー](/ja/docs/Web/HTML/Reference/Elements/a)、[ボタン](/ja/docs/Web/HTML/Reference/Elements/button) など）にテキスト値を指定して作成してください。アクセシブル名は対話型コントロールを、支援技術に有用な情報を伝達する API である[アクセシビリティツリー](/ja/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#アクセシビリティの_api_群)に公開します。

インタラクティブコントロールのアクセシブル名を提供するテキストは、画面から視覚的に削除するものの、支援技術によって解析可能なままにする[プロパティの組み合わせ](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link)を使用して非表示にすることができます。これは、アイコンのみによってその目的を伝えるボタンに一般的に使用されます。

- [What is an accessible name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [Hidden content for better a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN WCAG を理解する、ガイドライン 2.4 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#ガイドライン_2.4_—_ナビゲート可能_ユーザーがナビゲートし、コンテンツを見つけ、どこにいるのかを判断するのに役立つ方法を提供する)
- [Understanding Success Criterion 2.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

## 例

### HTML

```html
<div class="box"><!-- ライム色になります。 --></div>
<div class="box">ピンク色になります。</div>
<div class="box">
  <!-- このコメントの周囲には空白があるため、古いブラウザーではピンク色になります。 -->
</div>
<div class="box">
  <p>
    <!-- このコメントの周囲には統合することができない空白や要素があるため、すべてのブラウザーでピンク色で表示されます。 -->
  </p>
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":-moz-only-whitespace")}} – {{glossary("Vendor_Prefix", "接頭辞付き")}}で、 [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) の変更を実装
- {{CSSxRef(":blank")}}
