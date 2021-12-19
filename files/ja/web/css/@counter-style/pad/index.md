---
title: pad
slug: Web/CSS/@counter-style/pad
tags:
  - '@counter-style'
  - アットルール記述子
  - CSS
  - CSS カウンタースタイル
  - CSS 記述子
  - リファレンス
browser-compat: css.at-rules.counter-style.pad
translation_of: Web/CSS/@counter-style/pad
---
{{CSSRef}}

**`pad`** 記述子を使用すると、マーカー表現に最小限の長さが必要な場合に、カスタムカウンターのスタイル定義を行うことができます。

## 構文

```css
pad: 3 "0";
```

### 値

- `<integer> && <symbol>`
  - : `<integer>` で、すべてのカウンター表現が到達しなければならない最小の長さを指定します。負の値は使用できません。最小の長さに達しない場合は、指定した `<symbol>` で埋め尽くされます。

## 解説

マーカー表現が指定されたパッド長より短い場合、指定されたパッド記号で埋められます。パッド長より長いマーカ表現は、通常通り構築される。 pad 記述子では、最小マーカー長を整数で、パッドに使用する記号を第 2 引数として指定します。 pad 記述子の一般的な使用法は、リストが 1、2、3... ではなく、 01 から始まって 02、03... と続くような番号付けが必要な場合です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Padding_a_counter">カウンターをゼロ埋めにする</h3>

#### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

```css
@counter-style pad-example {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5";
  pad: 2 "0";
}

.list {
  list-style: pad-example;
}
```

#### 結果

{{ EmbedLiveSample('Padding_a_counter', '', '', '', 'Web/CSS/@counter-style/pad') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols()")}}、無名のカウンタースタイルを生成する関数記法
