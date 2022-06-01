---
title: '@color-profile'
slug: Web/CSS/@color-profile
tags:
  - アットルール
  - CSS
  - リファレンス
  - ウェブ
  - プロパティ
  - Color
  - color-profile
browser-compat: css.at-rules.color-profile
translation_of: Web/CSS/@color-profile
---
{{CSSRef}}

**`@color-profile`** は [CSS](/ja/docs/Web/CSS) の{{cssxref("at-rule", "アットルール", "", 1)}}で、色を指定するために後で使用する {{cssxref("color_value/color()", "color()")}} 関数で使用できるカラープロファイルを定義し名前を付けます。

## 構文

```css
@color-profile --swop5c {
  src: url('https://example.org/SWOP2006_Coated5v2.icc');
}
```

### 記述子

- `src`
  - : カラープロファイル情報を取得するための URL を指定します。
- `rendering-intent`

  - : カラープロファイルが複数のレンダリングインテントを含む場合、このプロファイルが定義されているよりも小さな色域に色をマッピングする方法を定義するために使用するものを選択します。
    使用する場合は、以下のキーワードのうちの一つでなければなりません。

    - `relative-colorimetric`
      - : メディア相対測色で、宛先メディアの色域内に入るソースカラーは、それぞれのメディアの白色点に対して変更しないことが求められます。宛先メディアの色域から外れたソースカラーは、さまざまな方法で色域境界上のカラーにマッピングされます。
    - `absolute-colorimetric`
      - : ICC 絶対測色で、宛先メディアの色域内に入るソースカラーを、採用した白（完全反射板）に対して変更しないことが要求されています。宛先メディアの色域から外れたソースカラーは、さまざまな方法で色域境界上のカラーにマッピングされます。
    - `perceptual`
      - : 特にソースと宛先に大きな違いがある画像（反射プリントに投映されたディスプレイ画面の画像など）には、しばしば好んで使用されます。ソース画像の色を取り込み、独自の方法で出力先メディア用に外観を再最適化します。
    - `saturation`
      - : このオプションは、オリジナルの相対的な彩度（クロマ）を保持し、ソリッドカラーの純度を保つために作成されました。しかし、知覚的インテントと同様に相互運用性に問題があった。

## 例

この例では、 ISO 12647-2:2004 に準拠したオフセット印刷で、グレード 5 の用紙に CGATS/SWOP TR005 2007 特性データを使用し、インク制限を 300% Total Area Coverage、グレー成分置換 (GCR) を中程度にしたものです。

`src` 記述子は、カラープロファイル情報を取得するための URL を指定します。

```css
@color-profile --swop5c {
  src: url('https://example.org/SWOP2006_Coated5v2.icc');
}
.header {
  background-color:   color(--swop5c 0% 70% 20% 0%);
}
```

## 形式文法

{{csssyntax}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
