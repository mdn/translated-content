---
title: "@view-transition"
slug: Web/CSS/Reference/At-rules/@view-transition
original_slug: Web/CSS/@view-transition
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{SeeCompatTable}}

**`@view-transition`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、文書間のナビゲーションの場合に、移動元及び移動先の文書で[ビュー遷移](/ja/docs/Web/API/View_Transition_API)を行うように指定するために使用します。

文書間のビュー遷移を機能させるには、ナビゲーションの移動元と移動先の文書が同じオリジンにある必要があります。

## 構文

```css
@view-transition {
  navigation: auto;
}
```

### 記述子

- `navigation`
  - : このアットルールが文書内のビュー遷移の動作に与える効果を指定します。 可能な値は以下のとおりです。
    - `auto`: この文書でビュー遷移が発生するのは、同一オリジン内のナビゲーションで、オリジン間リダイレクトがなく、{{domxref("NavigateEvent.navigationType", "navigationType")}} が`traverse`、`push`、`replace` のいずれかである場合です。`push` または `replace` の場合、ナビゲーションはブラウザーの UI 機能ではなく、ページコンテンツを操作するユーザーによって開始されたものでなければなりません。

    - `none`: この文書でビュー遷移は発生しません。

## 形式文法

{{csssyntax}}

## 例

### ページビューの遷移

以下のコードスニペットは、ページ遷移のデモで使用される主要な概念を示しています。
このデモでは、文書間のビュー遷移を使用しています。これは、同一サイトの 2 つのページ間を移動する際に発生する 0.5 秒の遷移です。
デモ全体については、[View transitions multi-page app demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) をご覧ください。

`@view-transition` アットルールは、ナビゲーションの移動元と移動先の両方の文書内の CSS で指定することで、ビュー遷移が有効になります。

```css
@view-transition {
  navigation: auto;
}
```

`@view-transition` アットルールに加えて、2 つの {{cssxref("@keyframes")}} アニメーションを定義し、{{cssxref("animation")}} 一括指定プロパティを使用して、アニメーションさせたい流出側 ({{cssxref("::view-transition-old()")}}) および流入側 ({{cssxref("::view-transition-new()")}}) ページの要素にそれらのキーフレームアニメーションを適用します。

```css
/* 独自アニメーションの作成 */
@keyframes move-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes move-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}

/* 独自アニメーションを新旧のページ状態に適用 */
::view-transition-old(root) {
  animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
  animation: 0.4s ease-in both move-in;
}
```

[transitions multi-page app](https://mdn.github.io/dom-examples/view-transitions/mpa/) デモをライブで参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::view-transition", "::view-transition")}}
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [CSS アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)
- [CSS アットルール関数](/ja/docs/Web/CSS/At-rule_functions)
