---
title: "`link-parameters` プロパティ (CSS)"
short-title: link-parameters
slug: Web/CSS/Reference/Properties/link-parameters
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

{{SeeCompatTable}}

**`link-parameters`** は [CSS](/ja/docs/Web/CSS) のプロパティで、CSS の {{cssxref("env")}} 関数によって属性が設定された SVG などの外部リソースの値を設定します。

## 構文

```css-nolint
/* 単一の値 */
link-parameters: param(--color, red);

/* 複数の値 */
link-parameters:
  param(--color1, red),
  param(--color2, blue),
  param(--color3, green);
```

## 値

- `none`
  - : リンク引数は指定されていません。

- {{cssxref("param")}}
  - : 1 つ以上のリンク引数のリスト。

## 公式定義

{{CSSInfo}}

## 例

### 外部 SVG ファイルの色を更新

この例では、左側の元の SVG は、`stroke` 属性に `env(--color1, chartreuse)`、`fill` 属性に `env(--color2, darkgreen)` が設定された正方形です。`link-parameters` プロパティを使用することで、右側の更新後の正方形において、複数の CSS の {{cssxref("param")}} 関数を用いて、これら両方の属性を更新しています。

```html
<div class="squares">
  <img
    class="original"
    src="square.svg"
    alt="シャルトリューズ色の境界線と濃い緑色の塗りつぶしがある正方形。" />
  <img
    class="updated"
    src="square.svg"
    alt="赤い境界線とトマト色の塗りつぶしをつけている正方形。" />
</div>
```

```css hidden
.squares {
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img {
  height: 100%;
}
```

```css-nolint
.updated {
  link-parameters:
    param(--color1, red),
    param(--color2, tomato);
}
```

{{EmbedLiveSample('updating_the_colors_of_an_external_SVG_file', '100%', '210px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("param")}}
- {{cssxref("env")}}
