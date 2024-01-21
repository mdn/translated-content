---
title: rgb()
slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: d71f07e831c84f37c25e920571471d2ea032b63c
---

{{CSSRef}}

**`rgb()`** 関数記法は、赤、緑、青の成分によって色を表現します。オプションのアルファ成分は、色の透明度を表します。

> **メモ:** 古い `rgba()` 構文は `rgb()` の別名であり、同じ引数を受け入れ、同じように動作します。

{{EmbedInteractiveExample("pages/css/function-rgb.html")}}

## 構文

```css
rgb(255 255 255)
rgb(255 255 255 / .5)
```

この関数は、すべての値をカンマで区切った古い構文も受け入れます。

### 値

- 関数記法: `rgb(R G B[ / A])`

- `R`, `G`, `B`
  - : それぞれ {{CSSXref("&lt;number&gt;")}} で `0` から `255` の間、 {{CSSXref("&lt;percentage&gt;")}} で `0%` から `100%` の間、またはキーワード `none` で、赤、緑、青のチャンネルを表します。
- `A` {{optional_inline}}
  - : {{CSSXref("&lt;alpha-value&gt;")}} またはキーワード `none` です。 `1` は `100%` （完全に不透明）に対応します。

> **メモ:** この関数記法は sRGB 値にシリアライズされます。赤、緑、青の成分の値はシリアライズ時に丸められる可能性があります。

> **メモ:** `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/color_value#色成分の欠落)を参照してください。

### 形式文法

{{csssyntax}}

## 例

### 古い構文: カンマで区切った値

歴史的な理由から、 `rgb()` 関数はすべての値をカンマで使用する区切り文字による形式を受け入れます。

#### HTML

```html
<div class="space-separated"></div>
<div class="comma-separated"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.space-separated {
  background-color: rgb(255 0 0 / 0.5);
}

div.comma-separated {
  background-color: rgb(255, 0, 0, 0.5);
}
```

#### 結果

{{EmbedLiveSample('Legacy syntax: comma-separated values', '100%', '150px')}}

### 古い構文: rgba()

古い `rgba()` の構文は `rgb()` の別名です。

#### HTML

```html
<div class="rgb"></div>
<div class="rgba"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.rgb {
  background-color: rgb(255 0 0 / 0.5);
}

div.rgba {
  background-color: rgba(255 0 0 / 0.5);
}
```

#### 結果

{{EmbedLiveSample('Legacy syntax: rgba()', '100%', '150px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXref("&lt;color&gt;")}} データ型: すべての色記法の一覧
