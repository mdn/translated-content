---
title: CSS セレクター
short-title: セレクター
slug: Web/CSS/Reference/Selectors
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

**CSS セレクター**は、 [CSS ルール](/ja/docs/Web/CSS/Guides/Syntax/Introduction#css_rulesets)で使用されるパターンであり、スタイル設定のために特定の要素をターゲットとして選択するためのものです。

例えば、段落にスタイル設定するには、 `p` [要素型セレクター](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors)を使用してすべての {{HTMLElement("p")}} 要素を選択し、スタイルを適用します。

```css
/* フォントサイズをすべての <p> 要素に設定 */
p {
  font-size: 12px;
  color: rebeccapurple;
}
```

## 構文

```css
/* 要素を選択してスタイルを適用 */
セレクター {
  プロパティ: 値;
}
```

## セレクターの索引

- [& 入れ子セレクター](/ja/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [クラスセレクター](/ja/docs/Web/CSS/Reference/Selectors/Class_selectors)
- [ID セレクター](/ja/docs/Web/CSS/Reference/Selectors/ID_selectors)
- [擬似クラスセレクター](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [擬似要素セレクター](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [要素型セレクター](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [全称セレクター](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors)

## 仕様書

{{Specifications}}

[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes#specifications)と[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements#specifications)については、それぞれのページで仕様書一覧表を確認してください。

## 関連情報

- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
- [CSS セレクターの構造](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [CSS 結合子](/ja/docs/Web/CSS/Reference/Selectors/Combinators)
- [セレクターリスト](/ja/docs/Web/CSS/Reference/Selectors/Selector_list)
- [セレクターと結合子](/ja/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュール
- [CSS 入れ子](/ja/docs/Web/CSS/Guides/Nesting)モジュール
- [詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)
