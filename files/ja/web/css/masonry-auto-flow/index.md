---
title: masonry-auto-flow
slug: Web/CSS/masonry-auto-flow
---

{{CSSRef}}

{{SeeCompatTable}}

**`masonry-auto-flow`** は CSS のプロパティで、[CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout)において[組積](/ja/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout)を使用する際のアイテムの配置方法を変更します。

## 構文

```css
/* キーワード値 */
masonry-auto-flow: pack;
masonry-auto-flow: next;
masonry-auto-flow: ordered;
masonry-auto-flow: definite-first;
masonry-auto-flow: next ordered;

/* グローバル値 */
masonry-auto-flow: inherit;
masonry-auto-flow: initial;
maosnry-auto-flow: revert;
masonry-auto-flow: unset;
```

このプロパティは 2 つの形式のうちの 1 つから成ります。

- 単一のキーワード: `pack`, `next`, `definite-first`, `ordered` のうちの何れか
- 2 つのキーワード。例えば `next ordered`。

### 値

- `pack`
  - : 既定の組積アルゴリズムで、アイテムは最も余裕のあるトラックに配置されます。
- `next`
  - : アイテムはグリッド軸に次々と配置されていきます。
- `definite-first`
  - : 既定の組積アルゴリズムのように、場所が確定しているアイテムを最初に配置してから、他の組積アイテムを配置するように表示します。
- `ordered`
  - : 配置が確定しているものは無視して、すべてを order で変更した文書順に従って配置します。

## 公式定義

{{cssinfo}}

## 関連情報

{{csssyntax}}

## 例

### next キーワードの使用

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
  <div id="item4"></div>
  <div id="item5"></div>
</div>
<select id="flow">
  <option value="pack">pack</option>
  <option value="next">next</option>
</select>
```

#### CSS

```css
#grid {
  height: 200px;
  width: 200px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;
  masonry-auto-flow: pack;
}

#item1 {
  background-color: lime;
  height: 2em;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
  height: 3em;
}

#item4 {
  background-color: red;
  height: 2.5em;
}

#item5 {
  background-color: aqua;
  height: 4em;
}
```

```js
const selectElem = document.querySelector("select");

function changeMasonryFlow() {
  var grid = document.getElementById("grid");
  var direction = document.getElementById("flow");
  var masonryAutoFlow = direction.value === "pack" ? "pack" : "next";

  grid.style.masonryAutoFlow = masonryAutoFlow;
}

selectElem.addEventListener("change", changeMasonryFlow);
```

#### 結果

{{EmbedLiveSample("Using_the_next_keyword", "200px", "230px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("align-tracks")}}, {{cssxref("justify-tracks")}}
