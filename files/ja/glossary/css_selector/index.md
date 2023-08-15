---
title: Selector (セレクター) (CSS)
slug: Glossary/CSS_Selector
l10n:
  sourceCommit: ed947b2c608428b62a60f07d09dc543f732dc09b
---

**CSS セレクター**は CSS のルールの一部で、文書中のどの要素がルールと一致するかを記述します。一致した要素にはルールで指定されたスタイルが適用されます。

## 例

この CSS を見てください。

```css
p {
  color: green;
}

div.warning {
  width: 100%;
  border: 2px solid yellow;
  color: white;
  background-color: darkred;
  padding: 0.8em 0.8em 0.6em;
}

#customized {
  font:
    16px Lucida Grande,
    Arial,
    Helvetica,
    sans-serif;
}
```

ここでのセレクターは `"p"` （すべての {{HTMLElement("p")}} 要素内の文字列に緑色を適用）、 `"div.warning"` （{{HTMLElement("div")}} 要素で[クラス](/ja/docs/Web/HTML/Global_attributes/class)が `"warning"` であるものがすべて警告ボックスのように見えるようにする）、 `"#customized"` （`"customized"` の ID を持つ要素の基本フォントを 16 ピクセルの高さの Lucida Grande またはいくつかの代替フォントに設定）です。

この CSS を次のような HTML に適用します。

```html
<p>This is happy text.</p>

<div class="warning">
  Be careful! There are wizards present, and they are quick to anger!
</div>

<div id="customized">
  <p>This is happy text.</p>

  <div class="warning">
    Be careful! There are wizards present, and they are quick to anger!
  </div>
</div>
```

結果的に、ページの内容は次のように整形されます。

{{EmbedLiveSample("Example", 640, 240)}}

## 関連情報

- CSS 入門内の [CSS セレクターについての詳細](/ja/docs/Learn/CSS/Building_blocks/Selectors)
- 基本的なセレクター

  - [要素型セレクター](/ja/docs/Web/CSS/Type_selectors) `elementname`
  - [クラスセレクター](/ja/docs/Web/CSS/Class_selectors) `.classname`
  - [ID セレクター](/ja/docs/Web/CSS/ID_selectors) `#idname`
  - [全称セレクター](/ja/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [属性セレクター](/ja/docs/Web/CSS/Attribute_selectors) `[attr=value]`
  - [状態セレクター](/ja/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

- グループ化セレクター

  - [セレクターリスト](/ja/docs/Web/CSS/Selector_list) `A, B`

- 結合子

  - [隣接兄弟セレクター](/ja/docs/Web/CSS/Adjacent_sibling_combinator) `A + B`
  - [一般兄弟セレクター](/ja/docs/Web/CSS/General_sibling_combinator) `A ~ B`
  - [子セレクター](/ja/docs/Web/CSS/Child_combinator) `A > B`
  - [子孫セレクター](/ja/docs/Web/CSS/Descendant_combinator) `A B`

- 擬似クラス・要素

  - [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes) `:`
  - [擬似要素](/ja/docs/Web/CSS/Pseudo-elements) `::`
