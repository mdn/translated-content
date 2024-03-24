---
title: prefix
slug: Web/CSS/@counter-style/prefix
---

{{CSSRef}}

**`prefix`** は {{cssxref('@counter-style')}} ルールの記述子で、マーカーに先立って表示される内容を指定します。指定されていない場合、既定値は `""` (空文字列) になります。

## 構文

```css
/* <symbol> 値 */
prefix: "»";
prefix: "Page ";
prefix: url(bullet.png);
```

### 値

- `<symbol>`
  - : マーカーに先立って表示される `<symbol>` を指定します。 {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;custom-ident&gt;")}} の何れかです。

## 公式定義

{{cssinfo}}

## 形式文法

```
<symbol>

<symbol> =
  <string>       |
  <image>        |
  <custom-ident>
```

## 例

### カウンターに接頭辞を追加

#### HTML

```html
<ul class="index">
  <li>The Boy Who Lived</li>
  <li>The Vanishing Glass</li>
  <li>The Letters from No One</li>
  <li>The Keeper of the Keys</li>
  <li>Diagon Alley</li>
</ul>
```

#### CSS

```css
@counter-style chapters {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  prefix: "Chapter ";
}

.index {
  list-style: chapters;
  padding-left: 15ch;
}
```

#### 結果

{{ EmbedLiveSample('Adding_a_prefix_to_a_counter') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}、無名のカウンタースタイルを作成する関数記法
