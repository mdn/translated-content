---
title: list-style-position
slug: Web/CSS/Reference/Properties/list-style-position
original_slug: Web/CSS/list-style-position
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

**`list-style-position`** は [CSS](/ja/docs/Web/CSS) のプロパティで、リストアイテムに対する {{cssxref("::marker")}} の位置を指定します。

{{InteractiveExample("CSS デモ: list-style-position")}}

```css interactive-example-choice
list-style-position: inside;
```

```css interactive-example-choice
list-style-position: outside;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>NASA Notable Missions</p>
    <ul class="transition-all" id="example-element">
      <li>Apollo 11: First Human Landing</li>
      <li>City in Space: The International Space Station</li>
      <li>Great Observatory: The Hubble Space Telescope</li>
      <li>Everlasting Mars Rovers</li>
    </ul>
  </div>
</section>
```

```css interactive-example
.default-example {
  font-size: 1.2rem;
}

#example-element {
  width: 100%;
  background: #be094b;
  color: white;
}

section {
  text-align: left;
  flex-direction: column;
}

hr {
  width: 50%;
  color: lightgray;
  margin: 0.5em;
}

.note {
  font-size: 0.8rem;
}

.note a {
  color: #009e5f;
}

@counter-style space-counter {
  symbols: "\1F680" "\1F6F8" "\1F6F0" "\1F52D";
  suffix: " ";
}
```

## 構文

```css
/* キーワード値 */
list-style-position: inside;
list-style-position: outside;

/* グローバル値 */
list-style-position: inherit;
list-style-position: initial;
list-style-position: revert;
list-style-position: revert-layer;
list-style-position: unset;
```

`list-style-position` プロパティには、下記の値の中の一つが指定されます。

### 値

- `inside`
  - : {{cssxref("::marker")}} はリストアイテムの最初の要素として配置されます。
- `outside`
  - : {{cssxref("::marker")}} は主要ブロックボックスの外に配置されます。これは {{cssxref("list-style")}} の既定値です。

## 解説

このプロパティはリストアイテムに対して適用されます。つまり、 `{{cssxref("display")}}: list-item;` が指定された要素です。[既定では](https://html.spec.whatwg.org/multipage/rendering.html#lists)、 {{HTMLElement("li")}} 要素が該当します。このプロパティは継承されるので、親要素 (通常は {{HTMLElement("ol")}} や {{HTMLElement("ul")}}) に設定することで、すべてのリストアイテムに適用することができます。

ブロック要素が `list-style-position: inside` の宣言されたリスト要素の最初の子である場合、そのブロック要素はマーカーボックスの次の行に配置されます。

多くの場合、一括指定の {{cssxref("list-style")}} を使ったほうが便利です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### リストアイテムの位置の設定

#### HTML

```html live-sample___setting_list_item_position
<ul class="inside">
  リスト 1
  <li>リストアイテム 1-1</li>
  <li>リストアイテム 1-2</li>
  <li>リストアイテム 1-3</li>
  <li>リストアイテム 1-4</li>
</ul>
<ul class="outside">
  リスト 2
  <li>リストアイテム 2-1</li>
  <li>リストアイテム 2-2</li>
  <li>リストアイテム 2-3</li>
  <li>リストアイテム 2-4</li>
</ul>
<ul class="inside-img">
  リスト 3
  <li>リストアイテム 3-1</li>
  <li>リストアイテム 3-2</li>
  <li>リストアイテム 3-3</li>
  <li>リストアイテム 3-4</li>
</ul>
```

#### CSS

```css live-sample___setting_list_item_position
.inside {
  list-style-position: inside;
  list-style-type: square;
}

.outside {
  list-style-position: outside;
  list-style-type: circle;
}

.inside-img {
  list-style-position: inside;
  list-style-image: url("star-solid.gif");
}
```

#### 結果

{{EmbedLiveSample("Setting_list_item_position", 200, 420)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style")}} 一括指定プロパティ
- {{Cssxref("list-style-type")}} プロパティ
- {{Cssxref("list-style-image")}} プロパティ
- {{cssxref("::marker")}} 擬似要素
- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
