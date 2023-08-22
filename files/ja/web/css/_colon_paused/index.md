---
title: ":paused"
slug: Web/CSS/:paused
---

{{CSSRef}}{{SeeCompatTable}}

**`:paused`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)セレクターで、「再生中」または「停止中」の状態を持つ音声、動画、その他のリソースの要素が「停止中」である場合に一致する、リソース状態擬似クラスです。

リソースが停止中になるのは、アクティブでない状態になった場合や、ユーザーが明示的に停止させた場合です。

```css
:paused {
}
```

## 構文

```
:paused
```

## 例

### CSS

```css
:paused {
  border: 5px solid orange;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":playing")}}
