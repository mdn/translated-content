---
title: :nth-last-of-type()
slug: Web/CSS/:nth-last-of-type
---

{{CSSRef}}

**`:nth-last-of-type()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、兄弟要素のグループの中で指定された型の要素を、最後から数えた位置に基づいて選択します。

```
/* 兄弟の <p> 要素の中で、
   後ろから数えて 3 つおきに選択 */
p:nth-last-of-type(4n) {
  color: lime;
}
```

{{InteractiveExample("CSS Demo: :nth-last-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:nth-last-of-type(3n) {
  border: 2px solid orange;
}
```

```html interactive-example
<dl>
  <dt>Vegetables:</dt>
  <dd>1. Tomatoes</dd>
  <dd>2. Cucumbers</dd>
  <dd>3. Mushrooms</dd>
  <dt>Fruits:</dt>
  <dd>4. Apples</dd>
  <dd>5. Mangos</dd>
  <dd>6. Pears</dd>
  <dd>7. Oranges</dd>
</dl>
```

> [!NOTE]
> この擬似クラスは、最初から後に向けてではなく*最後*から前に向けて数えるという点を除けば、本質的に {{Cssxref(":nth-of-type")}} と同じです。

## 構文

`nth-last-of-type` 擬似クラスは、要素を選択する最後から数えるパターンを表す引数を 1 つ取ります。

構文の詳しい説明は {{Cssxref(":nth-last-child")}} を参照してください。

```
:nth-last-of-type( <an-plus-b> | even | odd )
```

## 例

### HTML

```html
<div>
  <span>This is a span.</span>
  <span>This is another span.</span>
  <em>This is emphasized.</em>
  <span>Wow, this span gets limed!!!</span>
  <del>This is struck through.</del>
  <span>Here is one last span.</span>
</div>
```

### CSS

```css
span:nth-last-of-type(2) {
  background-color: lime;
}
```

#### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref(":nth-last-child")}}, {{Cssxref(":nth-of-type")}}
