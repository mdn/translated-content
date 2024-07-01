---
title: list-style-position
slug: Web/CSS/list-style-position
---

{{CSSRef}}

**`list-style-position`** は [CSS](/ja/docs/Web/CSS) のプロパティで、リスト項目に対する {{cssxref("::marker")}} の位置を指定します。

{{EmbedInteractiveExample("pages/css/list-style-position.html")}}

多くの場合、一括指定の {{cssxref("list-style")}} を使ったほうが便利です。

> **メモ:** このプロパティはリスト項目に対して適用されます。つまり、 `{{cssxref("display")}}: list-item;` が指定された要素です。[既定では](https://www.w3.org/TR/html5/rendering.html#lists)、 {{HTMLElement("li")}} 要素が該当します。このプロパティは継承されるので、親要素 (通常は {{HTMLElement("ol")}} や {{HTMLElement("ul")}}) に設定することで、すべてのリスト項目に適用することができます。

なお、 `list-style-position: inside` を指定したリスト要素の中で最初にブロック要素が配置された場合、その動作はブラウザーによって異なります。 Chrome と Safari では、この要素はマーカーボックスと同じ行に配置されますが、 Firefox、 Internet Explorer、 Opera では次の行に配置されます。 詳細については [Firefox バグ 36854](https://bugzil.la/36854) をご覧ください。

## 構文

```css
/* キーワード値 */
list-style-position: inside;
list-style-position: outside;

/* グローバル値 */
list-style-position: inherit;
list-style-position: initial;
list-style-position: revert;
list-style-position: unset;
```

`list-style-position` プロパティには、下記の値の中の一つが指定されます。

### 値

- `inside`
  - : {{cssxref("::marker")}} はリスト項目の最初の要素として配置されます。
- `outside`
  - : {{cssxref("::marker")}} は主要ブロックボックスの外に配置されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_list_item_position">リスト項目の位置の設定</h3>

#### HTML

```html
<ul class="inside">
  List 1
  <li>List Item 1-1</li>
  <li>List Item 1-2</li>
  <li>List Item 1-3</li>
  <li>List Item 1-4</li>
</ul>
<ul class="outside">
  List 2
  <li>List Item 2-1</li>
  <li>List Item 2-2</li>
  <li>List Item 2-3</li>
  <li>List Item 2-4</li>
</ul>
<ul class="inside-img">
  List 3
  <li>List Item 3-1</li>
  <li>List Item 3-2</li>
  <li>List Item 3-3</li>
  <li>List Item 3-4</li>
</ul>
```

#### CSS

```css
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
  list-style-image: url("starsolid.gif");
}
```

#### 結果

{{EmbedLiveSample("Setting_list_item_position", 200, 420)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style")}}, {{Cssxref("list-style-type")}}, {{Cssxref("list-style-image")}}
