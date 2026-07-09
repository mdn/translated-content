---
title: CSS `-moz-force-broken-image-icon` プロパティ
short-title: -moz-force-broken-image-icon
slug: Web/CSS/Reference/Properties/-moz-force-broken-image-icon
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_header}}{{Deprecated_Header}}

**`-moz-force-broken-image-icon`** は拡張 CSS プロパティで、壊れた画像に `alt` 属性が付いていても、壊れた画像のアイコンを強制的に表示することができます。

## 構文

```css
-moz-force-broken-image-icon: 1;
-moz-force-broken-image-icon: 0;

/* グローバル値 */
-moz-force-broken-image-icon: inherit;
-moz-force-broken-image-icon: initial;
-moz-force-broken-image-icon: revert;
-moz-force-broken-image-icon: revert-layer;
-moz-force-broken-image-icon: unset;
```

### 値

- {{cssxref("&lt;integer&gt;")}}
  - : プロパティの値に `1` を指定した場合、その画像に [`alt`](/ja/docs/Web/HTML/Reference/Elements/img#alt) 属性があったとしても、壊れた画像アイコンが表示されます。`0` を指定した場合、通常通り `alt` 属性のみが表示されます。

> [!NOTE]
> プロパティの値に `1` を指定した場合もなお、 `alt` 属性は壊れた画像アイコンの隣に同時に表示されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntaxRaw(`-moz-force-broken-image-icon = <integer>`)}}

## 例

### HTML

```html
<img src="/broken/image/link.png" alt="Broken image link" />
```

### CSS

```css
img {
  -moz-force-broken-image-icon: 1;
  height: 100px;
  width: 100px;
}
```

### 結果

{{EmbedLiveSample('Examples','125','125')}}

> [!NOTE]
> `-moz-force-broken-image-icon` の値に `1` を指定した場合、その画像に width と height を明示的に指定しない限り、壊れた画像アイコンは表示されず、 `alt` 属性も非表示になります。

## メモ

- このプロパティは Gecko ベースのブラウザーでのみ使用できます。
- このプロパティの使用は非推奨です。代わりに適切な `alt` 属性を使用してください。

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Firefox バグ 58646](https://bugzil.la/58646)
