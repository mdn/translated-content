---
title: device-aspect-ratio
slug: Web/CSS/Reference/At-rules/@media/device-aspect-ratio
original_slug: Web/CSS/@media/device-aspect-ratio
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{deprecated_header}}

> [!NOTE]
> ビューポートの{{glossary("aspect ratio", "アスペクト比")}}を問い合わせる場合、開発者は代わりに [`aspect-ratio`](/ja/docs/Web/CSS/Reference/At-rules/@media/aspect-ratio) メディア特性を使用してください。

**`device-aspect-ratio`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、出力機器の幅対高さのアスペクト比を調べるために使用します。

## 構文

`device-aspect-ratio` 特性は、 {{cssxref("&lt;ratio&gt;")}} で指定します。これは範囲の特性であり、つまり接頭辞の付いた **`min-device-aspect-ratio`** および **`max-device-aspect-ratio`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

### min-device-aspect-ratio の使用

```css
article {
  padding: 1rem;
}

@media screen and (min-device-aspect-ratio: 16/9) {
  article {
    padding: 1rem 5vw;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
