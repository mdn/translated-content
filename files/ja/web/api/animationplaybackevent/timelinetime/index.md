---
title: "AnimationPlaybackEvent: timelineTime プロパティ"
short-title: timelineTime
slug: Web/API/AnimationPlaybackEvent/timelineTime
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

**`timelineTime`** は {{domxref("AnimationPlaybackEvent")}} インターフェイスの読み取り専用プロパティで、イベントがキューに入った瞬間のアニメーションの {{domxref("AnimationTimeline", "timeline")}} の時刻値を表します。イベントが生成された時刻にアニメーションがタイムラインに関連付けられていなかったり、関連付けられていたタイムラインが非アクティブだった場合、これは未解決になります。

## 値

現在の時刻をミリ秒単位で表す数値、または `null` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationPlayBackEvent")}}
- {{domxref("AnimationTimeline")}}
