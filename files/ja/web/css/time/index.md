---
title: <time>
slug: Web/CSS/time
tags:
  - CSS
  - CSS データ型
  - データ型
  - レイアウト
  - リファレンス
  - ウェブ
browser-compat: css.types.time
translation_of: Web/CSS/time
---
{{CSSRef}}

**`<time>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、時間の値を秒単位またはミリ秒単位で表現します。これは {{cssxref("animation")}} や {{cssxref("transition")}} および関連するプロパティで使用されています。

## 構文

`<time>` データ型は、 {{cssxref("&lt;number&gt;")}} の直後に下記の単位を続けます。省略可能ですが、その前に単一の `+` または `-` を付けることもあります。どの単位の場合も、単位と数字との間には空白を置きません。

> **Note:** 数値の `0` は単位に関わらず常に同じですが、単位は省略できません。言い換えれば、 `0` は無効であり、 `0s` または `0ms` を表すものではありません。

### 単位

- **`s`**
  - : 秒単位の時間を表します。例: `0s`, `1.5s`, `-60s`
- **`ms`**
  - : ミリ秒単位の時間を表します。例: `0ms`, `150.25ms`, `-60000ms`

> **Note:** `s` と `ms` の間の変換は、論理的に `1s` = `1000ms` となります。

## 例

### 有効な時間

    12s         正の整数
    -456ms      負の整数
    4.3ms       整数でない数値
    14mS        単位では大文字小文字が区別されませんが、大文字は推奨されません。
    +0s         先導する + と単位を伴うゼロです
    -0ms        先導する - と単位を伴うゼロです

### 無効な時間

```plain example-bad
0           単位なしのゼロは <length> では使えますが、他のすべての単位では無効です。
12.0        これは <number> であり、 <time> ではありません。単位が必須です。
7 ms        数値と単位との間に空白を置いてはいけません。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;time-percentage&gt;")}}
- [CSS 値と単位](/ja/docs/Web/CSS/CSS_Values_and_Units)
