---
title: view-transition-name
slug: Web/CSS/view-transition-name
l10n:
  sourceCommit: 1a27ade8c981c8a98c8fac9881b362e881a4d236
---

{{CSSRef}}{{SeeCompatTable}}

**`view-transition-name`** は [CSS](/ja/docs/Web/CSS) のプロパティで、選択された要素に識別名 ({{cssxref("custom-ident")}}) を与え、ルートビュー遷移とは別の[ビュー遷移](/ja/docs/Web/API/View_Transition_API)に参加させます。 `none` の値が指定された場合はビュー遷移を行いません。

## 構文

```css
/* <custom-ident> 値の例 */
view-transition-name: header;
view-transition-name: figure-caption;

/* キーワード値 */
view-transition-name: none;
```

### 値

- {{cssxref("custom-ident")}}
  - : 選択した要素を、ルートビュー遷移とは別の[ビュー遷移](/ja/docs/Web/API/View_Transition_API)に参加させるための識別名です。識別子は一意でなければなりません。 2 つのレンダリング要素が同時に同じ `view-transition-name` を持つ場合、 {{domxref("ViewTransition.ready")}} は拒否され、トランジションはスキップされます。
- `none`
  - : 選択された要素はビュー遷移に参加しません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

```css
figcaption {
  view-transition-name: figure-caption;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
