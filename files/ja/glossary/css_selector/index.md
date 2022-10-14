---
title: Selector (セレクター (CSS) )
slug: Glossary/CSS_Selector
---

**CSS セレクター**は CSS の規則の一部で、文書中のどの要素がルールと一致するかを記述します。一致した要素には規則で指定されたスタイルが適用されます。

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
  font: 16px Lucida Grande, Arial, Helvetica, sans-serif;
}
```

ここでのセレクターは `"p"` （すべての {{HTMLElement("p")}} 要素内の文字列に緑色を適用）、 `"div.warning"` （{{Glossary("CSS class", "class")}} が `"warning"` であるすべての {{HTMLElement("div")}} 要素が警告ボックスのように見えるようにする）、 `"#customized"` （`"customized"` の ID を持つ要素の基本フォントを 16 ピクセルの高さの Lucida Grande またはいくつかのフォールバックフォントに設定）です。

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

{{EmbedLiveSample("glossary-selector-details", 640, 210)}}

1. CSS 入門内の [CSS セレクターについての詳細](/ja/docs/Learn/CSS/Introduction_to_CSS/Selectors)
2. 基本的なセレクター

    1. [要素型セレクター](/ja/docs/Web/CSS/Type_selectors) `elementname`
    2. [クラスセレクター](/ja/docs/Web/CSS/Class_selectors) `.classname`
    3. [ID セレクター](/ja/docs/Web/CSS/ID_selectors) `#idname`
    4. [全称セレクター](/ja/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
    5. [属性セレクター](/ja/docs/Web/CSS/Attribute_selectors) `[attr=value]`
    6. [状態セレクター](/ja/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

3. グループ化セレクター

    1. [セレクターリスト](/ja/docs/Web/CSS/Selector_list) `A, B`

4. 結合子

    1. [隣接兄弟セレクター](/ja/docs/Web/CSS/Adjacent_sibling_selectors) `A + B`
    2. [一般兄弟セレクター](/ja/docs/Web/CSS/General_sibling_selectors) `A ~ B`
    3. [子セレクター](/ja/docs/Web/CSS/Child_selectors) `A > B`
    4. [子孫セレクター](/ja/docs/Web/CSS/Descendant_selectors) `A B`

5. 擬似クラス・要素

    1. [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes) `:`
    2. [擬似要素](/ja/docs/Web/CSS/Pseudo-elements) `::`

6. 技術リファレンス

    1. {{SpecName("CSS3 Selectors")}}
