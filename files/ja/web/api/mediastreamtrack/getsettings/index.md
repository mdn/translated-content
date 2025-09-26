---
title: "MediaStreamTrack: getSettings() メソッド"
short-title: getSettings()
slug: Web/API/MediaStreamTrack/getSettings
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

**`getSettings()`** は{{domxref("MediaStreamTrack")}} インターフェイスのメソッドで、現在の `MediaStreamTrack` の制約可能なプロパティの現在の値を含む {{domxref("MediaTrackSettings")}} オブジェクトを返します。

制約されるプロパティの働きの詳細については、[能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)を参照してください。

## 構文

```js-nolint
getSettings()
```

### 引数

なし。

### 返値

トラックの制約可能なプロパティの現在の構成を記述する {{domxref("MediaTrackSettings")}} オブジェクトです。

> [!NOTE]
> 返されたオブジェクトは、サイトコードで明示的に設定されたものではなく、プラットフォームの既定値として保有するものも含め、制約されるすべてのプロパティの現在の値を特定します。 代わりに、サイトのコードで指定されたトラックのプロパティに対して、最近設定された制約を取得するには、{{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
