---
title: ::picker-icon
slug: Web/CSS/Reference/Selectors/::picker-icon
original_slug: Web/CSS/::picker-icon
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{SeeCompatTable}}

**`::picker-icon`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、アイコンが関連付けられたフォームコントロール内のピッカーアイコンを対象とします。[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)の場合、 `<select>` 要素に示される矢印アイコン（閉じられた状態では下向きを指す）を選択します。

## 構文

```css-nolint
::picker-icon {
  /* ... */
}
```

## 解説

`::picker-icon`擬似要素は、フォームコントロールのピッカーアイコン、すなわちコントロールボタン上に表示させるアイコンを対象とします。 元の要素にピッカーがあり、かつ {{cssxref("appearance")}} プロパティの `base-select` 値によって基本的な外観が設定されている場合にのみ、対象として利用できます。 生成されたボックスは、 {{cssxref("::after")}} 擬似要素によって生成されたボックスの後に現れ、既定のブラウザースタイルシートで指定されたアイコンが表示されます。 {{cssxref("content")}} プロパティを使用してカスタマイズできます。

`::picker-icon` セレクターを使用すると、[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)のインライン末尾側にある下向きの矢印を選択できます。例えば、アイコンの色やサイズをカスタマイズしたり、別のアイコンに（{{cssxref("content")}} や [SVG](/ja/docs/Web/SVG) を使用して）置き換えたり、ピッカーが開くための操作時と閉じられた時にアニメーションを適用したい場合に便利です。

現在はカスタマイズ可能な `<select>` ピッカーアイコンの選択が、 `::picker-icon` の唯一の用途ですが、将来的に追加される可能性があります。

> [!NOTE]
> `::picker-icon`擬似要素はアクセシビリティツリーに含まれないため、これに設定された生成された {{cssxref("content")}} は支援技術によって読み上げられません。それでも、新たに設定するアイコンが視覚的にその意図する目的に沿った意味を持つことを確認する必要があります。

## 例

### ピッカーアイコンのアニメーション

カスタマイズ可能な選択機能を利用するには、 `<select>` 要素とそのピッカーの両方に、 {{cssxref("appearance")}} 値として `base-select` を設定する必要があります：

```css
select,
::picker(select) {
  appearance: base-select;
}
```

そうすれば、例えば `::picker-icon` を対象として、独自の {{cssxref("color")}} と {{cssxref("transition")}} を適用することで、その {{cssxref("rotate")}} プロパティの変更を滑らかにアニメーションさせることができます。

```css
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

次のルールでは、`::picker-icon` が `<select>` が開かれていた場合にのみアイコンを対象とする擬似クラス {{cssxref(":open")}} と組み合わされ、`<select>` が開かれた際に `rotate` の値を `180deg` にトランジションさせます。

```css
select:open::picker-icon {
  rotate: 180deg;
}
```

このコードを使用した、完全な例とライブのレンダリング例については、[ピッカーアイコンのスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select#ピッカーアイコンのスタイリング)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}
- [カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)
