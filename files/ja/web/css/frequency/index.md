---
title: <frequency>
slug: Web/CSS/frequency
tags:
  - CSS
  - CSS データ型
  - データ型
  - リファレンス
  - ウェブ
browser-compat: css.types.frequency
translation_of: Web/CSS/frequency
---
{{CSSRef}}

**`<frequency>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、話し声の高さなどの周波数の値を表します。今のところ、どの CSS プロパティでも使われていません。

## 構文

`<frequency>` データ型は、 {{cssxref("&lt;number&gt;")}} とその後に以下に挙げる単位のうちの一つから成ります。他の CSS の数値と同様、単位と数値の間には空白を置きません。

### 単位

- `Hz`
  - : 周波数をヘルツで表します。例： `0Hz`、 `1500Hz`、 `10000Hz`
- `kHz`
  - : 周波数をキロヘルツで表します。例： `0kHz`、 `1.5kHz`、 `10kHz`

> **Note:** `0` の数値は単位に関わらず常に同じですが、単位は省略できません。言い換えれば、 `0` は無効で `0Hz` や `0kHz` を表すものではありません。単位の大文字と小文字は区別されませんが、[国際単位系](http://ja.wikipedia.org/wiki/%E5%9B%BD%E9%9A%9B%E5%8D%98%E4%BD%8D%E7%B3%BB)の表記に従って、 `Hz` や `kHz` の H を大文字にするのが良い習慣です。

## 例

### 有効な周波数の値

```plain example-good
12Hz     正の整数
4.3Hz    非整数
14KhZ    単位は大文字小文字を区別しません（ただ、国際単位系の表記が推奨されます）
+0Hz     先行する + のあるゼロと単位
-0kHz    先行する - のあるゼロと単位
```

### 無効な周波数の値

```plain example-bad
12.0     これは <number> であり、<frequency> ではありません。単位が必須です。
7 Hz     数値と単位の間に空白を置いてはいけません
0        単位のないゼロは <length> では利用できますが、<frequency> では無効です。
```

## 仕様書

{{Specifications}}

> **Note:** このデータ型は初め、 [CSS Level 2](https://www.w3.org/TR/CSS2/) の現在は廃止された [aural](/ja/docs/Web/CSS/@media/aural) [メディア種別](/docs/Web/CSS/@media#メディア種別)で、音声の高さを定義するために導入されました。現時点ではこのデータ型を使う CSS プロパティはありませんが、 CSS 3 で `<frequency>` データ型が再導入されました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;frequency-percentage&gt;")}}
- [CSS 値と単位](/ja/docs/Web/CSS/CSS_Values_and_Units)
