---
title: "`:stalled` 擬似クラス (CSS)"
short-title: :stalled
slug: Web/CSS/Reference/Selectors/:stalled
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:stalled`** [CSS](/ja/docs/Web/CSS) [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes) セレクターは、{{htmlelement("audio")}} や {{htmlelement("video")}} などの再生可能な要素で、再生が停止している状態にある場合に表します。
ユーザーがメディアリソースの特定の位置からの再生をリクエストしたにもかかわらず、一定時間データを一切受信できなかった場合、そのリソースは停滞状態にあるとみなされます。
これは、{{cssxref(":buffering")}} とは異なり、メディア要素が（ネットワークエラーなどの理由で）約 3 秒間（正確な時間は[ユーザーエージェントによって異なる](https://html.spec.whatwg.org/multipage/media.html#stall-timeout)）停止状態にある際、予期せずデータを読み込まないという点が異なります。

> [!NOTE]
> {{cssxref(":buffering")}} 擬似クラスと同様に、要素が「停滞中」状態であっても、「再生中」とみなされます。
> `:stalled` が要素に一致する場合、{{cssxref(":playing")}} もその要素に一致します。

## 構文

```css
:stalled {
  /* ... */
}
```

## 例

### CSS

```css
:stalled {
  outline: 5px solid red;
}

audio:stalled {
  background-color: red;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":buffering")}}
- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":volume-locked")}}
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)
- [`stalled`](/ja/docs/Web/API/HTMLMediaElement/stalled_event) イベント
