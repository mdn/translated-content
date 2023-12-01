---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
---

{{CSSRef}}

**`aspect-ratio`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ボックスの**推奨アスペクト比**を設定します。これは auto の大きさを計算したり、他のレイアウト関数で使用されたりします。

```css
aspect-ratio: 1 / 1;
aspect-ratio: 1;

/* グローバル値 */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: unset;
```

### 値

- `auto`
  - : 内在的なアスペクト比がある[置換要素](/ja/docs/Web/CSS/Replaced_element)の場合は、*その*アスペクト比を使用し、それ以外の場合はボックスに推奨アスペクト比が設定されません。内在的なアスペクト比を使用して寸法を計算する際には、常にコンテンツボックスの寸法に対して行われます。
- {{cssxref("&lt;ratio&gt;")}}
  - : ボックスの推奨アスペクト比は、`width` / `height` で指定された比率です。`height` とそれに先立つスラッシュ文字が省略された場合、`height` の既定値は `1` です。推奨アスペクト比を含む寸法の計算では、`box-sizing` で指定されたボックスの寸法で行われます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### aspect-ratio の値の例

```css
aspect-ratio: 1 / 1;
aspect-ratio: 16 / 9;
aspect-ratio: 0.5;
```

## 幅と高さの aspect-ratio への対応付け

ブラウザーは、内部の `aspect-ratio` プロパティを追加しました。これは[置換要素](/ja/docs/Web/CSS/Replaced_element)や、 `width` と `height` 属性を受け入れるその他の関連要素に適用されます。これは、ブラウザーの内部 UA スタイルシートに現れます。

Firefox では、内部のスタイルシートルールはこのようになっています。

```css
img,
input[type="image"],
video,
embed,
iframe,
marquee,
object,
table {
  aspect-ratio: attr(width) / attr(height);
}
```

この機能については[画像に高さと幅を設定することが再び重要に](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/) (英語) で詳しく読むことができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアのコンテナー要素の幅と高さの属性をアスペクト比にマッピングする](/ja/docs/Web/Media/images/aspect_ratio_mapping)
- [Designing an aspect ratio unit for CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Setting Height And Width On Images Is Important Again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
