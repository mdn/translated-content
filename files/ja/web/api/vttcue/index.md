---
title: VTTCue
slug: Web/API/VTTCue
l10n:
  sourceCommit: 0fe27ff068e18f54bc689577c036fd7d82a55c4a
---

{{APIRef("WebVTT")}}

`VTTCue` インターフェイスは WebVTT（メディアプレゼンテーションに関するテキストトラック）を処理するための API の一部で、特定の {{HTMLElement("track")}} 要素に関連付けられたテキストトラックを記述および制御します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("VTTCue.VTTCue", "VTTCue()")}}
  - : 指定された時間範囲をカバーし、指定されたテキストを持つ、新しく作成された `VTTCue` オブジェクトを返します。

## インスタンスプロパティ

_このインターフェイスには {{domxref("TextTrackCue")}} から継承したプロパティもあります。_

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
  - : 行内のキューのインデントを返します。 これは、文字列 `auto` または {{domxref("VTTCue.region")}} のパーセント値、または {{domxref("VTTCue.region")}} が `null` の場合は動画サイズです。
- {{domxref("VTTCue.positionAlign")}}
  - : キューの配置を表す列挙型を返します。 これは {{domxref("VTTCue.position")}} が何に固定されているかを決定するために使用されます。
- {{domxref("VTTCue.size")}}
  - : キューのサイズを表す `double` 型を動画サイズのパーセントで返します。
- {{domxref("VTTCue.align")}}
  - : キューボックス内のすべてのテキスト行の配置を表す列挙型を返します。
- {{domxref("VTTCue.text")}}
  - : キューの内容を含む文字列を返します。

## メソッド

- {{domxref("VTTCue.getCueAsHTML", "getCueAsHTML()")}}
  - : キューのテキストを {{domxref("DocumentFragment")}} として返します。

## 例

### HTML

次の例は、新しい {{domxref("TextTrack")}} を動画に追加し、次に {{domxref("TextTrack.addCue()")}} メソッドを使用して `VTTCue` オブジェクトを値としてキューを追加します。

```html
<video controls src="/shared-assets/videos/friday.mp4"></video>
```

### CSS

```css
video {
  width: 420px;
  height: 300px;
}
```

### JavaScript

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
track.addCue(new VTTCue(0, 0.9, "Hildy!"));
track.addCue(new VTTCue(1, 1.4, "How are you?"));
track.addCue(new VTTCue(1.5, 2.9, "Tell me, is the lord of the universe in?"));
track.addCue(new VTTCue(3, 4.2, "Yes, he's in - in a bad humor"));
track.addCue(new VTTCue(4.3, 6, "Somebody must've stolen the crown jewels"));
console.log(track.cues);
```

### 結果

{{EmbedLiveSample('Example','400','330')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
