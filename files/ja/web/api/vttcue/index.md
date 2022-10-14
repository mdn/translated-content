---
title: VTTCue
slug: Web/API/VTTCue
---

{{APIRef("WebVTT")}}
WebVTT（メディアプレゼンテーションに関するテキストトラック）を処理するための API の一部である `VTTCue` インターフェイスは、特定の {{HTMLElement("track")}} 要素に関連付けられたテキストトラックを記述および制御します。

## コンストラクタ

- {{domxref("VTTCue.VTTCue", "VTTCue(startTime, endTime, text)")}}
  - : 指定された時間範囲をカバーし、指定されたテキストを持つ、新しく作成された `VTTCue` オブジェクトを返します。

## プロパティ

_このインターフェイスは {{domxref("TextTrackCue")}} からもプロパティを継承しています。_

- {{domxref("VTTCue.region")}}
  - : キューが描画される動画のサブ領域を説明する {{domxref("VTTRegion")}} オブジェクト。 割り当てられていない場合は `null`。
- {{domxref("VTTCue.vertical")}}
  - : キューの書き込み方向を表す列挙型を返します。
- {{domxref("VTTCue.snapToLines")}}
  - : {{domxref("VTTCue.line")}} 属性が整数の行数または動画サイズのパーセントである場合、`true` を返します。
- {{domxref("VTTCue.line")}}
  - : キューの行位置を返します。 これは、文字列 `auto` またはその解釈が {{domxref("VTTCue.snapToLines")}} の値に依存する数値になります。
- {{domxref("VTTCue.lineAlign")}}
  - : {{domxref("VTTCue.line")}} の配置を表す列挙型を返します。
- {{domxref("VTTCue.position")}}
  - : 行内のキューのインデントを返します。 これは、文字列 `auto` または {{domxref("VTTCue.region")}} のパーセントを表す数値、または {{domxref("VTTCue.region")}} が `null` の場合は動画サイズです。
- {{domxref("VTTCue.positionAlign")}}
  - : キューの配置を表す列挙型を返します。 これは {{domxref("VTTCue.position")}} が何に固定されているかを決定するために使用されます。
- {{domxref("VTTCue.size")}}
  - : キューのサイズを表す `double` 型を動画サイズのパーセントで返します。
- {{domxref("VTTCue.textAlign")}}
  - : キューボックス内のすべてのテキスト行の配置を表す列挙型を返します。
- {{domxref("VTTCue.text")}}
  - : キューの内容を含む {{domxref("DOMString")}} を返します。

## メソッド

- {{domxref("VTTCue.getCueAsHTML")}}
  - : キューのテキストを {{domxref("DocumentFragment")}} として返します。

## 例

```js
var cue = new VTTCue(2, 3, 'かっこいい文章を表示する');
var tracks = document.querySelector('video').textTracks;
tracks[0].addCue(cue);
```

新しいキューを作成したら、それを {{domxref("TextTrack")}} に追加する必要があります。 追加すると、このキューを 2 秒から 3 秒の間に描画し、「`かっこいい文章を表示する`」というテキストを表示します。

## 仕様

| 仕様                         | 状態                     | コメント |
| ---------------------------- | ------------------------ | -------- |
| {{SpecName("WebVTT")}} | {{Spec2("WebVTT")}} |          |

## ブラウザーの互換性

{{Compat("api.VTTCue")}}
