---
title: TextTrack
slug: Web/API/TextTrack
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("WebVTT")}}

`TextTrack` インターフェイスは — WebVTT (メディア表示上のテキストトラック) を扱う API の一部ですが — 特定の {{HTMLElement("track")}} 要素に関連付けられたテキストトラックを記述および制御します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスは {{domxref("EventTarget")}} からプロパティを継承しています。_

- {{domxref("TextTrack.activeCues")}} {{ReadOnlyInline}}
  - : 現在アクティブなテキストトラックキューのセットをリストする {{domxref("TextTrackCueList")}} オブジェクト。メディアの現在の再生位置がキューの開始時間と終了時間の間にある場合、トラックキューはアクティブです。つまり、キャプションや字幕のような表示されるキューでは、アクティブキューが現在表示されているものです。
- {{domxref("TextTrack.cues")}} {{ReadOnlyInline}}
  - : トラックのすべてのキューを含む {{domxref("TextTrackCueList")}}。
- {{domxref("TextTrack.id")}} {{ReadOnlyInline}}
  - : トラックがある場合は、それを識別する文字列です。 ID がない場合、この値は空文字列 (`""`) です。 `TextTrack` が {{HTMLElement("track")}} 要素に関連付けられている場合、トラックの ID は要素の ID と一致します。
- {{domxref("TextTrack.inBandMetadataTrackDispatchType")}} {{ReadOnlyInline}}
  - : 文字列で、トラックの帯域内メタデータトラックディスパッチ種別を示します。
- {{domxref("TextTrack.kind")}} {{ReadOnlyInline}}
  - : 文字列で、 `TextTrack` が記述するテキストトラックの kind を示します。 値は許可されている値の何れかでなければなりません。
- {{domxref("TextTrack.label")}} {{ReadOnlyInline}}
  - : テキストトラックのラベルがあれば、それを含む人間が読める文字列です。 それ以外の場合、これは空文字列 (`""`) になります。 空文字列の場合、トラックのラベルをユーザーに公開する必要がある場合は、トラックの他の属性を使用してコードでカスタムラベルを生成する必要があります。
- {{domxref("TextTrack.language")}} {{ReadOnlyInline}}
  - : 文字列で、テキストトラックの内容が書かれているテキスト言語を指定します。 値は、HTML の [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性と同じように、 {{RFC(5646, "Tags for Identifying Languages (BCP 47 とも)")}} で指定されている形式に準拠する必要があります。 例えば、米国英語の場合は `"en-US"`、ブラジルポルトガル語の場合は `"pt-BR"` になります。
- {{domxref("TextTrack.mode")}}
  - : 文字列で、トラックの現在のモードを指定します。 このプロパティの値を変更すると、トラックの現在のモードが一致するように変更されます。 許容値は[テキストトラックモード定数](/ja/docs/Web/API/TextTrack/mode#テキストトラックモード定数)にリストされています。既定値は `disabled` ですが、 {{HTMLElement("track")}} 要素の [`default`](/ja/docs/Web/HTML/Reference/Elements/track#default) 論理属性が指定されていた場合は、既定のモードは `started` になります。

## インスタンスメソッド

_このインターフェイスは {{domxref("EventTarget")}} からもメソッドを継承しています。_

> [!NOTE]
> {{domxref("TextTrackCue")}} インターフェイスは、 {{domxref("VTTCue")}} などの他のキューインターフェイスの親クラスとして使用される抽象クラスです。したがって、キューを追加または削除する場合は、`TextTrackCue` を継承するキューの種類のいずれかを入力することになります。

- {{domxref("TextTrack.addCue()")}}
  - : ({{domxref("TextTrackCue")}} オブジェクトとして指定された) キューをトラックのキューのリストに追加します。
- {{domxref("TextTrack.removeCue()")}}
  - : トラックのキューのリストから ({{domxref("TextTrackCue")}} オブジェクトとして指定された) キューを取り除きます。

## イベント

- [`cuechange`](/ja/docs/Web/API/TextTrack/cuechange_event)
  - : キューが出入りしたときに発生します。 特定のテキストキューは、キューに入ると表示され、キューから出ると消えます。
    `oncuechange` プロパティからも利用できます。

## 例

以下の例は、新しい `TextTrack` を動画に追加し、 {{domxref("TextTrack.mode")}} を使用して表示するように設定します。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVTT](/ja/docs/Web/API/WebVTT_API)
- {{domxref("TextTrackCueList")}}
- {{domxref("VTTCue")}}
- {{HTMLElement("track")}}
- {{domxref("HTMLTrackElement")}}
