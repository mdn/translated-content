---
title: content-visibility
slug: Web/CSS/content-visibility
tags:
  - CSS
  - CSS 封じ込め
  - CSS プロパティ
  - レイアウト
  - Paint
  - リファレンス
  - Style
  - Visibility
  - ウェブ
browser-compat: css.properties.content-visibility
translation_of: Web/CSS/content-visibility
---
{{CSSRef}}

**`content-visibility`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素がその内容物をレンダリングするかどうかを制御するとともに、強力な封じ込めのセットを強制することで、必要になるまでユーザーエージェントが大量のレイアウトとレンダリングの作業を省略できるようにします。基本的に、ユーザーエージェントは、レイアウトやペイントなどの要素のレンダリング作業を必要になるまでスキップできるため、最初のページの読み込みがはるかに高速になります。

## 構文

```css
/* キーワード値 */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* グローバル値 */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: unset;
```

### 値

- `visible`
  - : 効果なし。要素の内容物は通常通りにレイアウトおよび描画されます。
- `hidden`
  - : 要素はその内容物を読み飛ばします。読み飛ばされた内容物は、ページ内検索やタブ順序ナビゲーションなどのユーザーエージェント機能でアクセス可能になることはなく、また選択可能やフォーカス可能にもなりません。これは、内容物に `display: none` を設定することに似ています。
- `auto`
  - : この要素の、レイアウトの封じ込め、スタイルの封じ込め、描画の封じ込めをオンにします。要素がユーザーに関連していない場合、その内容の読み飛ばしも行われます。 hidden の場合とは異なり、読み飛ばされたコンテンツは、ページ内検索やタブ順序ナビゲーションなどのユーザーエージェント機能で通常通り利用可能となり、通常通りフォーカスや選択が可能になります。

## 公式定義

{{cssinfo}}

## アクセシビリティの考慮

見出しやその他のコンテンツが画面外にあるとみなされた場合、 `content-visibility` によって抑制されます。これは、画面リーダーの利用者が、ページのアウトラインを完全に読み上げるという利点を失う可能性があることを意味します。

詳しくは [Content-visibility and Accessible Semantics](https://marcysutton.com/content-visibility-accessible-semantics) をご覧ください。

## 例

### auto を使用して長いページのレンダリングコストを削減

次の例は、 auto を使用して画面外のセクションのペイントとレンダリングを飛ばす方法を示しています。ビューポート外の内容物はレンダリングされないため、これはページの読み込みと操作の両方に役立ちます。</p>

```html
<style>
section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}

<section>...
<section>...
<section>...
<section>...
...
```

### hidden を使用して手動で可視性を管理

次の例は、スクリプトで可視性を管理できることを示しています。 `content-visiblity: hidden` を、たとえば `display: none` の代わりに使用することの追加の利点は、 `content-visibility` で非表示にしたときにレンダリングされたコンテンツがレンダリング状態を保持することです。これは、コンテンツが再度表示される場合、他のコンテンツよりも高速にレンダリングされることを意味します。

```html
<style>
.hidden {
  content-visibility: hidden;
  /* 非表示の場合、要素のサイズを 0 x 500px サイズの子が 1 つあるかのようにします */
  contain-intrinsic-size: 0 500px;
}
.visible {
  content-visibility: visible;
  /* これは、 .hidden と .visible を切り替えるときにレイアウトがシフトしないようにするためです */
  contain: style layout paint;
}

<div class=hidden>...
<div class=visible>...
<div class=hidden>...
<div class=hidden>...
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/) (web.dev)
