---
title: CSS `:paused` 擬似クラス
short-title: :paused
slug: Web/CSS/Reference/Selectors/:paused
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:paused`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)セレクターで、{{htmlelement("audio")}} や {{htmlelement("video")}} などの再生可能な要素が、「一時停止」状態（つまり「再生中」ではない状態）にある場合に、その要素を表します。

リソースは、ユーザーが明示的に一時停止させた場合、または「読み込まれたがまだアクティブ化されていない」といった、アクティブ化されていない状態やその他の再生されていない状態にある場合に、一時停止状態となります。
これは、リソースが「再生中」とみなされている間に発生する状態である `:buffering` や `:stalled` とは異なります。

## 構文

```css
:paused {
  /* ... */
}
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

- {{cssxref(":buffering")}}
- {{cssxref(":muted")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)
