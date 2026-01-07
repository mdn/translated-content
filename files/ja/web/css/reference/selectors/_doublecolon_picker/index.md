---
title: ::picker()
slug: Web/CSS/Reference/Selectors/::picker
original_slug: Web/CSS/::picker
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

`::picker()` は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、要素のピッカー部分を対象とします。例えば、[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)のドロップダウンピッカーなどが該当します。

## 構文

```css-nolint
::picker(<ident>) {
  /* ... */
}
```

### 引数

- {{cssxref("ident")}}
  - : ターゲットとするピッカーの要素を表す文字列。次の値が利用できます。
    - `select`
      - : カスタマイズ可能な select 要素のドロップダウンピッカーです。

## 解説

`::picker()` 擬似要素は、フォームコントロールのピッカー部分（つまり、コントロールボタンを押した際に表示される選択可能なポップアップ部分）を対象とします。この擬似要素は、親要素がピッカーを持ち、かつ {{cssxref("appearance")}} プロパティの `base-select` 値によって基本外観が設定されている場合にのみ対象として利用可能です。

`::picker(select)` セレクターは、カスタマイズ可能な `<select>` 要素の子孫要素のうち、最初の `<button>` 子要素を除くすべてを対象とします。これらの子孫要素はブラウザーによってグループ化され、ピッカーとしてレンダリングされます。最初の `<button>` 子要素は、押下時にピッカーを開くためのボタンを表します。

これにより、ピッカーのコンテンツすべてを単一のエンティティとして操作できます。例えば、境界線のカスタマイズ、表示・非表示時のアニメーション、既定の位置とは異なる配置などが可能です。 私たちの[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)ガイドでは、 `::picker(select)` の使用例を多数紹介しています。

### ピッカーポップオーバーの動作

`<select>` 要素とピッカーは、[ポップオーバー API](/ja/docs/Web/API/Popover_API) で指定されている通り、自動的に暗黙の呼び出し元/ポップオーバー関係が割り当てられます。ポップオーバーの動作の詳細については、[ポップオーバー API の使用](/ja/docs/Web/API/Popover_API/Using)を参照してください。また、一般的な用途で、ポップオーバーの暗黙的な関連付けが許可できるケースについては、[ポップオーバー状態を使ったピッカーのアニメーション](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select#ポップオーバー状態を使ったピッカーのアニメーション)を参照してください。

### ピッカーのアンカー位置指定

上記の暗黙的な呼び出し元/ポップオーバーの関係によるさらなる効果として、 `<select>` 要素とピッカーの間にも暗黙のアンカー参照が存在します。これは、ピッカーが [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)によって自動的に選択要素に関連付けられるということです。これにはいくつかの利点があり、特に以下の点が挙げられます。

- ブラウザーの既定のスタイルでは、ピッカーはボタン（アンカー）を基準に位置決めされます。この位置は、[アンカーを基準とした要素の位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor)で説明されているようにカスタマイズできます。参考までに、関連の既定のスタイルは次の通りです：

  ```css
  inset: auto;
  margin: 0;
  min-inline-size: anchor-size(self-inline);
  min-block-size: 1lh;
  /* ビューポートの端に移動し、スクロールバーを追加する必要がある場合に追加する */
  max-block-size: stretch;
  overflow: auto;
  /* 既定では、下記に配置され、右にスパンされる */
  position-area: block-end span-inline-end;
  ```

- ブラウザーの既定のスタイルでは、ビューポートからオーバーフローする危険がある場合に、ピッカーの位置を再調整する位置指定の代替処理も定義されています。位置指定の代替処理については、[オーバーフロー時の代替処理と条件付き非表示](/ja/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)ガイドで説明されています。参照までに、関連する既定の代替スタイルは以下の通りです。

  ```css
  position-try-order: most-block-size;
  position-try-fallbacks:
    /* First try above and span-right, */
    /* then below but span-left, */
    /* then above and span-left. */
    block-start span-inline-end,
    block-end span-inline-start,
    block-start span-inline-start;
  ```

## 例

### 基本的なカスタム選択の使用方法

カスタム選択機能と最小限のブラウザー基本スタイルを有効化し（OS提供のスタイルを除去し）、 `<select>` 要素とそのピッカーの両方に {{cssxref("appearance")}} 値として `base-select` を設定する必要があります。

```css
select,
::picker(select) {
  appearance: base-select;
}
```

そうすれば、例えば、ピッカーの既定の黒い {{cssxref("border")}} が除去されます。

```css
::picker(select) {
  border: none;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}
- [カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)
