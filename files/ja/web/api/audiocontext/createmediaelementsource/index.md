---
title: AudioContext.createMediaElementSource()
slug: Web/API/AudioContext/createMediaElementSource
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }}インターフェースの createMediaElementSource()メソッドは、新しく{{ domxref("MediaElementAudioSourceNode") }} オブジェクトを作成するために使用されます。HTML 内に存在する{{htmlelement("audio")}} または {{htmlelement("video")}} を指定すると、そのオーディオを再生し、操作することができます。

media element audio source nodes についての詳細は、 {{ domxref("MediaElementAudioSourceNode") }} を参照して下さい。

## 構文

```js
var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);
```

### 引数

- `myMediaElement`
  - : プロセッシング・グラフで操作するための {{ domxref("HTMLMediaElement") }} オブジェクトです。

### 戻り値

{{domxref("MediaElementAudioSourceNode")}}

## 例

以下の例では、createMediaElementSource()を使用して {{ htmlelement("audio") }} から音源を作成します。 再生される音源は {{ domxref("GainNode") }} を介し {{ domxref("AudioDestinationNode") }} に渡されます。マウスポインタが動くと updatePage()関数が呼ばれ、マウスポインタの Y 座標の値をウィンドウの高さで割った比率を元に現在のゲインを計算します。また、マウスポインタを上下に動かすことで、再生している音楽の音量を上げ下げできます。

> **メモ:** [この例のデモ](http://mdn.github.io/media-source-buffer/)と、[ソース](https://github.com/mdn/media-source-buffer)を見ることができます。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector("audio");
var pre = document.querySelector("pre");
var myScript = document.querySelector("script");

pre.innerHTML = myScript.innerHTML;

// MediaElementAudioSourceNodeを作成
// HTMLMediaElementをそこへ接続
var source = audioCtx.createMediaElementSource(myAudio);

// gain nodeを作成
var gainNode = audioCtx.createGain();

// マウスポインタのY座標と
// 画面の高さを保持するための変数を作成
var CurY;
var HEIGHT = window.innerHeight;

// マウスが動いたら新しいY座標を取得し、
// ゲインの値を設定する
document.onmousemove = updatePage;

function updatePage(e) {
  CurY = window.Event
    ? e.pageY
    : event.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop);

  gainNode.gain.value = CurY / HEIGHT;
}

// AudioBufferSourceNodeをgainNodeへ接続
// gainNodeをdestinationへ接続
// これで音楽の再生と、マウスカーソルで音量を調節できるようになる
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

> **メモ:** createMediaElementSource()を呼んだ結果として {{ domxref("HTMLMediaElement") }} から再生される音声は AudioContext のプロセッシング・グラフへ再度ルーティングされます。従って、*createMediaElementSource()を呼んだ後も*音声の再生/一時停止は media element API 及びプレーヤーの再生/一時停止ボタンから操作できます。

## 仕様

{{Specifications}}

## ブラウザの互換性

{{Compat("api.AudioContext.createMediaElementSource")}}

## 関連情報

- [Web Audio API の利用](/ja/docs/Web_Audio_API/Using_Web_Audio_API)
