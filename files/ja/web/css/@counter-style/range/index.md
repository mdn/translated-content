---
title: range
slug: Web/CSS/@counter-style/range
---

{{CSSRef}}

カスタムカウンターのスタイルを定義する際、 **`range`** 記述子により、スタイルが適用されるカウンター値の範囲を指定することができます。カウンターの値が指定された範囲の外にある場合、代替スタイルがそのマーカーの表現を構築するために使用されます。

## 構文

```css
/* キーワード値 */
range: auto;

/* 範囲の値 */
range: 2 5;
range: infinite 10;
range: 6 infinite;
range: infinite infinite;

/* 複数の範囲の値 */
range:
  2 5,
  8 10;
range:
  infinite 6,
  10 infinite;
```

### 値

- `auto`

  - : 範囲はカウンターシステムによって決まります。

    - cyclic, numeric, fixed の各システムでは、範囲は負の無限大から正の無限大までです。
    - alphabetic および symbolic システムでは、範囲は 1 から正の無限大までです。
    - additive システムでは、範囲は 0 から正の無限大までです。
    - extends システムでは、範囲は拡張されたシステムのために自動的に生成されます。 複雑な定義済みスタイル（§7 複雑な定義済みカウンタースタイル）を拡張する場合、範囲はスタイルの定義範囲になります。

- `[ [ | infinite ]{2} ]#`
  - : カンマで区切られた範囲のリストを定義します。個々の範囲については、最初の値が下限、 2 番目の値が上限となります。範囲は包括的であり、常に下限と上限の両方の数値を含むことを意味します。範囲の最初の値として無限大が使用された場合は負の無限大を表し、 2 番目の値として使われた場合は正の無限大を表します。カウンタースタイルの範囲は，リストで定義されたすべての範囲を合わせたものとなります。
    いずれかの範囲の下限が上限より大きい場合は、その記述子全体は無効となり、無視されます。

## 解説

range 記述子の値は、 auto またはカンマで区切られた下限値と上限値を整数で指定することができます。

auto の場合、 cyclic, numeric, fixed システムでは、負の無限大から正の無限大までの範囲になります。 alphabetic および symbolic システムでは， 1 から正の無限大の範囲になります。 additive システムでは、 auto は 0 から正の無限大の範囲になります。 extends システムの場合，範囲は auto が拡張システムに対して生成するすべてのものになります。

range を整数で指定する場合、無限大を表す値として `infinite` を使用することができます。もし _infinite_ が範囲の最初の値として指定された場合、負の無限大として解釈されます。上限値として使われた場合は、正の無限大とみなされます。

## 公式定義

{{cssinfo}}

## 形式文法

```
[ [ <integer> | infinite ]{2} ]# |
auto
```

## 例

### 範囲を超えるカウンタースタイルを設定

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
  <li>Nine</li>
  <li>Ten</li>
</ul>
```

```css
@counter-style range-multi-example {
  system: cyclic;
  symbols: "\25A0" "\25A1";
  range:
    2 4,
    7 9;
}

.list {
  list-style: range-multi-example;
}
```

上記のリストは次のように表示されます。

{{EmbedLiveSample('Setting counter style over a range')}}:

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}、無名のカウンタースタイルを生成する関数記法
