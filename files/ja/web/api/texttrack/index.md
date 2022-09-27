---
title: TextTrack
slug: Web/API/TextTrack
---

{{APIRef("WebVTT")}}

`TextTrack` インターフェイスは — WebVTT (メディア表示上のテキストトラック) を扱う API の一部ですが — 特定の {{HTMLElement("track")}} 要素に関連付けられたテキストトラックを記述および制御します。

## プロパティ

_このインターフェイスは {{domxref("EventTarget")}} からプロパティを継承しています。_

- {{domxref("TextTrack.activeCues")}} {{readonlyInline}}
  - : 現在アクティブなテキストトラックキューのセットをリストする {{domxref("TextTrackCueList")}} オブジェクト。メディアの現在の再生位置がキューの開始時間と終了時間の間にある場合、トラックキューはアクティブです。つまり、キャプションや字幕のような表示されるキューでは、アクティブキューが現在表示されているものです。
- {{domxref("TextTrack.cues")}} {{readonlyInline}}
  - : トラックのすべてのキューを含む {{domxref("TextTrackCueList")}}。
- {{domxref("TextTrack.id")}} {{readonlyInline}}
  - : トラックがある場合は、それを識別する {{domxref("DOMString")}}。 ID がない場合、この値は空の文字列 (`""`) です。 `TextTrack` が {{HTMLElement("track")}} 要素に関連付けられている場合、トラックの ID は要素の ID と一致します。
- {{domxref("TextTrack.inBandMetadataTrackDispatchType")}} {{readonlyInline}}
  - : トラックのインバンドメタデータトラックディスパッチタイプ（in-band metadata track dispatch type）を示す {{domxref("DOMString")}} を返します。 _**詳細が必要**_
- {{domxref("TextTrack.kind")}} {{readonlyInline}}
  - : `TextTrack` が記述するテキストトラックの kind を示す {{domxref("DOMString")}} を返します。 値は `TextTrackKind` 列挙型のいずれかでなければなりません。
- {{domxref("TextTrack.label")}} {{readonlyInline}}
  - : テキストトラックのラベルがあれば、それを含む人間が読める {{domxref("DOMString")}}。 それ以外の場合、これは空の文字列（`""`）になります。 空の文字列の場合、トラックのラベルをユーザーに公開する必要がある場合は、トラックの他の属性を使用してコードでカスタムラベルを生成する必要があります。
- {{domxref("TextTrack.language")}} {{readonlyInline}}
  - : テキストトラックの内容が書かれているテキスト言語を指定する {{domxref("DOMString")}}。 値は、HTML の lang 属性と同じように、IETF の[言語を識別するためのタグ](https://tools.ietf.org/html/bcp47)（[BCP 47](https://tools.ietf.org/html/bcp47)）文書で指定されている形式に準拠する必要があります。 例えば、米国英語の場合は `"en-US"`、ブラジルポルトガル語の場合は `"pt-BR"` になります。
- {{domxref("TextTrack.mode")}}
  - : トラックの現在のモードを指定する {{domxref("DOMString")}}。 このプロパティの値を変更すると、トラックの現在のモードが一致するように変更されます。 許容値は[テキストトラックモード定数](/ja/docs/Web/API/TextTrack/mode#Text_track_mode_constants)にリストされています。既定値は `disabled` ですが、 {{HTMLElement("track")}} 要素の {{htmlattrxref("default", "track")}} 論理属性が指定されていた場合は、既定のモードは `started` になります。

## イベント

- {{domxref("TextTrack.cuechange_event","cuechange")}}
  - : キューが出入りしたときに発生します。 特定のテキストキューは、キューに入ると表示され、キューから出ると消えます。
    {{domxref("TextTrack.oncuechange","oncuechange")}} プロパティからも利用できます。

## メソッド

_このインターフェイスは {{domxref("EventTarget")}} からもメソッドを継承しています。_

- {{domxref("TextTrack.addCue()")}}
  - : ({{domxref("TextTrackCue")}} オブジェクトとして指定された) キューをトラックのキューのリストに追加します。
- {{domxref("TextTrack.removeCue()")}}
  - : トラックのキューのリストから ({{domxref("TextTrackCue")}} オブジェクトとして指定された) キューを取り除きます。

<!---->

## 例

作成中

## 仕様書

| 仕様書                                                                       | 状態                                 | 備考 |
| ---------------------------------------------------------------------------- | ------------------------------------ | ---- |
| {{ SpecName('HTML WHATWG', '#texttrack', 'TextTrack') }} | {{ Spec2('HTML WHATWG') }} |      |

## ブラウザーの互換性

{{Compat("api.TextTrack")}}

## 関連情報

- [WebVTT](/ja/docs/Web/API/WebVTT_API)
- {{domxref("TextTrackCueList")}}
- {{domxref("VTTCue")}}
- {{HTMLElement("track")}}
- {{domxref("HTMLTrackElement")}}
