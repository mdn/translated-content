---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
---

**`HTMLAudioElement`** インターフェイスは {{HTMLElement("audio")}} 要素のプロパティと、操作するメソッドを提供します。 {{domxref("HTMLMediaElement")}} インターフェイスから派生しています。

{{InheritanceDiagram(600, 120)}}

## プロパティ

_固有のプロパティはありません。親である {{domxref("HTMLMediaElement")}} および {{domxref("HTMLElement")}} からプロパティを継承しています。_

## メソッド

_{{domxref("HTMLMediaElement")}} および {{domxref("HTMLElement")}} からメソッドを継承しています。_

### コンストラクター

#### 構文

```
mySound = new Audio([URLString]);
```

#### 説明

audio 要素のコンストラクターです。返されるオブジェクトの `preload` プロパティは `auto` に設定され、 `src` プロパティは引数の値が設定されます。ブラウザーはオブジェクトを返す前、*非同期的に*リソースの選択を始めます。

_メモ: `new Audio()` で作成された audio 要素は、音声を再生中にガベージコレクションされることはありません。 `pause()` メソッドが呼ばれるか、再生が終了するまで、再生を続けます。_

#### 引数

- `URLString` (期待される型: {{domxref("DOMString")}}; 任意)
  - : 構築される `HTMLAudioElement` の `src` プロパティ

### 通常メソッド

| 名前と引数                                                                          | 返値                 | 説明                                                                                                                                                                   |
| ------------------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mozCurrentSampleOffset()` {{non-standard_inline}}                         | `unsigned long long` | `mozWriteAudio()` によって作成された音声ストリームの、現在のオフセットを示します。このオフセットは、ストリームの先頭からのサンプル番号で指定されます。                 |
| `mozSetup(in PRUint32 channels, in PRUint32 rate)` {{non-standard_inline}} | `void`               | 書き込み用の音声ストリームを初期化します。引数でチャンネル数 (`1` でモノラル、 `2` でステレオ) とサンプリング周波数 (例えば 44.1kHz の場合は `44100`) を指定できます。 |
| `mozWriteAudio(in jsval data)` {{non-standard_inline}}                     | `unsigned long`      | ストリームの現在のオフセットに音声を書き込みます。実際にストリームに書き込まれたバイト数を返します。                                                                   |

## 例

### 基本的な使用

`HTMLAudioElement` を完全に JavaScript で生成します。

```
var flush = new Audio('toilet_flush.wav');
flush.play();
```

audio 要素でもっと一般的に使用されるプロパティとしては、 `src`, `currentTime`, `duration`, `paused`, `muted`, `volume` などがあります。

```
var flush = new Audio('toilet_flush.wav');
flush.addEventListener('loadeddata',() => {
    var duration = flush.duration; // the duration variable now holds the duration (in seconds) of the audio clip
})
```

## 仕様書

| 仕様書                                                                                                                   | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------ |
| {{SpecName('HTML WHATWG', "#htmlaudioelement", "HTMLAudioElement")}}                             | {{Spec2('HTML WHATWG')}} |        |
| {{SpecName('HTML5 W3C', "embedded-content-0.html#the-audio-element", "HTMLAudioElement")}} | {{Spec2('HTML5 W3C')}}     |    |

## ブラウザーの互換性

{{Compat("api.HTMLAudioElement")}}

## 関連情報

- このインタフェースを実装した HTML 要素: {{HTMLElement("audio")}}

{{APIRef("HTML DOM")}}
