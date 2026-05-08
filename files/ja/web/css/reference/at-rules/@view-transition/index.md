---
title: "@view-transition"
slug: Web/CSS/Reference/At-rules/@view-transition
l10n:
  sourceCommit: b88f711ce4944f97162d7f1a7bcb8283af06f690
---

**`@view-transition`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、文書間のナビゲーションの場合に、移動元及び移動先の文書で[ビュー遷移](/ja/docs/Web/API/View_Transition_API)を行うように指定するために使用します。

文書間のビュー遷移を機能させるには、ナビゲーションの移動元と移動先の文書が同じオリジンにある必要があります。

## 構文

```css
@view-transition {
  navigation: auto | none;
  types: none | <custom-ident>#;
}
```

### 記述子

- `navigation`
  - : このアットルールが文書内のビュー遷移の動作に与える効果を指定します。指定可能な値は以下のとおりです。
    - `auto`
      - : この文書でビュー遷移が発生するのは、同一オリジン内のナビゲーションで、オリジン間リダイレクトがなく、{{domxref("NavigateEvent.navigationType", "navigationType")}} が`traverse`、`push`、`replace` のいずれかである場合です。`push` または `replace` の場合、ナビゲーションはブラウザーの UI 機能ではなく、ページコンテンツを操作するユーザーによって開始されたものでなければなりません。

    - `none`
      - : この文書でビュー遷移は発生しません。

- `types`
  - : 現在の文書と出力先の文書に対して、アクティブなビュー遷移に設定するビュー遷移の[型](/ja/docs/Web/API/View_Transition_API/Using_types)を指定します。指定可能な値は以下の通りです。
    - `<custom-ident>+`
      - : 1 つ以上の空白区切りの {{cssxref("&lt;custom-ident>")}} 値で、設定する型を表します。
    - `none`
      - : 設定する型はありません。

## 形式文法

{{csssyntax}}

## 例

### ページビューの遷移

以下のコードスニペットは、ページ遷移のデモで使用される主要な概念を示しています。
このデモでは、文書間のビュー遷移を使用しています。これは、同一サイトの 2 つのページ間を移動する際に発生する 0.5 秒の遷移です。
デモ全体については、[複数ページアプリのビュー遷移のデモ](https://mdn.github.io/dom-examples/view-transitions/mpa/)をご覧ください。

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

[複数ページアプリの遷移](https://mdn.github.io/dom-examples/view-transitions/mpa/)のデモをライブで参照してください。

### ビュー遷移の型の使用

[MPA 遷移型の例](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/)（[ソースコード](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-transition-types)）では、`@view-transition` を通じて `types` を使用する方法を示しています。

```css
@view-transition {
  navigation: auto;
  types: slide;
}
```

参照されている例の詳細な手順については、[`@view-transition` を使用した文書間ビュー遷移の型の使用](/ja/docs/Web/API/View_Transition_API/Using_types#using_types_with_cross-document_view_transitions_via_view-transition)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::view-transition", "::view-transition")}}
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-image-pair()")}}
- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [ビュー遷移型の使用](/ja/docs/Web/API/View_Transition_API/Using_types)
- [CSS アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)
- [CSS アットルール関数](/ja/docs/Web/CSS/Reference/At-rules/At-rule_functions)
