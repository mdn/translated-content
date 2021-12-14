---
title: '-ms-high-contrast'
slug: Web/CSS/@media/-ms-high-contrast
tags:
  - '@media'
  - CSS
  - 標準外
  - リファレンス
  - メディア特性
translation_of: Web/CSS/@media/-ms-high-contrast
original_slug: Web/CSS/-ms-high-contrast
---
{{CSSRef}}{{Non-standard_header}}

**-ms-high-contrast** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、 [Microsoft 拡張](/ja/docs/Web/CSS/Microsoft_Extensions)であり、アプリケーションが高コントラストモードで表示されているかどうか、どの配色で表示されているかを記述します。

高コントラストモードとは、前景色と背景色をユーザーが指定したテーマに動的に置き換えることで、コンテンツを可能な限り見やすくすることを優先した表示モードです。ウェブコンテンツの場合、テーマカラーはコンテンツタイプに対応付けられます。

このメディア特性はビットマップメディア型に適用されます。 *min/max* 接頭辞は受け付けません。

## 構文

**`-ms-high-contrast`** メディア特性は以下の値のうちの一つで指定します。

### 値

- `none` {{Deprecated_Inline}}
  - : ...
    **Microsoft Edge 18 で対応がなくなりました。**
- `active`
  - : 配下の整形規則は、システムが任意の配色の高コントラストモードの時に適用されることを示します。
- `black-on-white`
  - : 配下の整形規則は、システムが白地に黒の高コントラストモードの時に適用されることを示します。
- `white-on-black`
  - : 配下の整形規則は、システムが黒地に白の高コントラストモードの時に適用されることを示します。

## 例

### 何らかの high-contrast 変化形に一致

```css
@media screen and (-ms-high-contrast: active) {
  /* All high contrast styling rules */
}
```

### black-on-white の変化形に一致

```css
@media screen and (-ms-high-contrast: black-on-white) {
  div { background-image: url('image-bw.png'); }
}
```

### white-on-black の変化形に一致

```css
@media screen and (-ms-high-contrast: white-on-black) {
  div { background-image: url('image-wb.png'); }
}
```

## アクセシビリティの考慮

### テーマ

高コントラストモードのテーマカラーは、非推奨となったの [CSS2 システムカラー](https://www.w3.org/TR/2018/REC-css-color-3-20180619/#css2-system)の限られたサブセットに由来しています。利用可能な色のキーワードは以下の通りです。

- `windowText`: テキストコンテンツの色を制御します。
- `highlightText`: 選択されたテキストの色を制御します。
- `highlight`: 選択されたテキストの背景色を制御します。
- `buttonFace`: {{HTMLElement("button")}} 要素のテキストの色を制御します。
- `window`: 背景色を制御します。
- {{HTMLElement("a")}} 要素でリンクの色を制御します。

高コントラストモードのテーマは動的なので、他の [CSS カラー値](/ja/docs/Web/CSS/color)の代わりにこれらのカラーキーワードを使用してください。これにより、コンテンツが常に認識できるようになります。

### コンテンツ

可能な限り、 CSS2 システムカラーのキーワードを使用してコンテンツを変更するよりも、 HTML マークアップを更新することをお勧めします。これは、コンテンツをより予測しやすくするのに役立ちます。

## 仕様書

何れかの仕様書の一部ではありません。

## 注釈

Microsoft Edge 18 で、 `-ms-high-contrast: none` は対応がなくなりました。 Microsoft Edge バージョン 18 以降では、代わりに [`forced-colors` メディア特性](/ja/docs/Web/CSS/@media/forced-colors)が使用される予定ですが、 `forced-colors` メディア特性の仕様は現在も作業中です。

`-ms-high-contrast` メディア特性は、 {{CSSxRef("-ms-high-contrast-adjust")}} プロパティと共に動作します。

`-ms-high-contrast` メディア特性は Windows 8 で導入されました。

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/ja/docs/Web/CSS/@media)
