---
title: "`:volume-locked` 擬似クラス (CSS)"
short-title: :volume-locked
slug: Web/CSS/Reference/Selectors/:volume-locked
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:volume-locked`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)セレクターで、{{htmlelement("audio")}} や {{htmlelement("video")}} など、音を出せる要素を表しますが、そのメディア要素の音量は現在、ユーザーによって「ロック」されています。

ユーザーエージェントは、ユーザーの環境設定に応じて、[`muted`](/ja/docs/Web/API/HTMLMediaElement/muted) または [`volume`](/ja/docs/Web/API/HTMLMediaElement/volume) の値を設定する場合があります（例：セッションをまたいで最後に設定された値を記憶する、サイトごとに設定する、その他の方法など）。
`:volume-locked` 状態の要素は、JavaScript でミュートやミュート解除を行うことも、音量を変更することもできません。このロック状態は、オペレーティングシステムまたはユーザーエージェントの環境設定によるものです。

## 構文

```css
:volume-locked {
  /* ... */
}
```

## 例

### CSS

```css
:volume-locked {
  border: 5px solid green;
}

video:volume-locked {
  border: 5px solid aqua;
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
- {{cssxref(":stalled")}}
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)
- [`volume`](/ja/docs/Web/API/HTMLMediaElement/volume) プロパティ（{{domxref("HTMLMediaElement")}} オブジェクト）
