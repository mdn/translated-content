---
title: "HTMLMediaElement: autoplay プロパティ"
short-title: autoplay
slug: Web/API/HTMLMediaElement/autoplay
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.autoplay`** プロパティは、 HTML の [`autoplay`](/ja/docs/Web/HTML/Element/video#autoplay) 属性を反映しています。これは、メディアが中断なく再生できるようになった時点で自動的に再生を開始するかどうかを示します。

ソースが {{domxref("MediaStream")}} で `autoplay` プロパティが `true` のメディア要素は、アクティブになると（つまり、{{domxref("MediaStream.active")}} が `true` になると）再生を開始します。

> [!NOTE]
> 自動的に音声（または音声トラックを含む動画）を再生するサイトは、ユーザーにとって不快な経験になる可能性があるため、可能な限り避けるべきです。 自動再生機能を提供する必要がある場合は、オプトインする必要があります（ユーザーに明確に有効にするよう要求する）。 ただし、自動再生は、ソースが後でユーザーの制御下で設定されるメディア要素を作成するときには便利です。

自動再生、自動再生のブロック、およびユーザーのブラウザーによって自動再生がブロックされた場合の対応方法についての詳細は、[メディアおよびウェブオーディオ API の自動再生ガイド](/ja/docs/Web/Media/Autoplay_guide)を参照してください。

## 値

論理値で、このメディア要素が中断することなく再生できる量のコンテンツを読み込んだらすぐに再生を開始する場合は `true` となります。

> [!NOTE]
> ブラウザーによっては、ユーザーに無断でまたはバックグラウンドで破壊的な音声または動画が再生されるのを防ぐために、ユーザーが `autoplay` を無効にすることができるようにしている場合があります。 `autoplay` が実際に再生を開始するとは限りませんので、代わりに {{domxref("HTMLMediaElement.play_event", 'play')}} イベントを使用してください。

## 例

```html
<video id="video" controls>
  <source
    src="https://player.vimeo.com/external/250688977.sd.mp4?s=d14b1f1a971dde13c79d6e436b88a6a928dfe26b&profile_id=165" />
</video>
```

```js
// 自動再生を無効化（推奨）
// false が既定値です
document.querySelector("#video").autoplay = false;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.autoplay` プロパティを定義しているインターフェイス
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
