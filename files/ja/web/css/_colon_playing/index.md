---
title: ':playing'
slug: Web/CSS/:playing
tags:
  - CSS
  - 擬似クラス
  - リファレンス
  - playing
browser-compat: css.selectors.playing
translation_of: Web/CSS/:playing
---
{{CSSRef}}{{SeeCompatTable}}

**`:playing`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)セレクターで、「再生中」または「停止中」の状態を持つ音声、動画、その他のリソースの要素が「再生中」である場合に一致する、リソース状態擬似クラスです。

バッファリング状態にある場合や、ユーザーの操作以外で停止している状態の場合も、リソースが再生中として扱われます。

```css
:playing {

}
```

## 構文

{{csssyntax}}

## 例

### CSS

```css
:playing {
  border: 5px solid green;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":paused")}}
