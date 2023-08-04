---
title: HTMLMediaElement.videoTracks
slug: Web/API/HTMLMediaElement/videoTracks
l10n:
  sourceCommit: e60194342c9666ad8a2e6e5e6c25705fe818bcde
---

{{APIRef("HTML DOM")}}

**`videoTracks`** は {{DOMxRef("HTMLMediaElement")}} オブジェクトの読み取り専用プロパティで、メディア要素の動画トラックを表すすべての {{DOMxRef("VideoTrack")}} オブジェクトを列挙した {{DOMxRef("VideoTrackList")}} オブジェクトを返します。

返されたリストは*生きて*います。つまり、トラックがメディア要素に追加されたり取り除かれたりすると、リストの内容は動的に変化します。 リストへの参照を取得したら、新しい動画トラックが追加されたのか既存のトラックが取り除かれたのかを検出するために変更を監視できます。 メディア要素のトラックリストへの変更を監視する方法の詳細については、[VideoTrackList のイベント](/ja/docs/Web/API/VideoTrackList#イベント)を参照してください。

## 値

メディア要素に含まれる動画トラックのリストを表す {{DOMxRef("VideoTrackList")}} オブジェクト。 トラックのリストは、配列記法や、オブジェクトの {{domxref("VideoTrackList.getTrackById", "getTrackById()")}} メソッドを使ってアクセスできます。

各トラックは、トラックに関する情報を提供する {{DOMxRef("VideoTrack")}} オブジェクトによって表されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{DOMxRef("HTMLMediaElement")}} インターフェイス
- {{HTMLElement("video")}}
- {{DOMxRef("VideoTrack")}} および {{DOMxRef("VideoTrackList")}}
