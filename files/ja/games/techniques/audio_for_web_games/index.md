---
title: Web ゲーム用のオーディオ
slug: Games/Techniques/Audio_for_Web_Games
tags:
  - Audio
  - Games
  - Web Audio API
  - audio sprites
translation_of: Games/Techniques/Audio_for_Web_Games
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

オーディオはゲームの重要部分です。つまりこれはフィードバックと雰囲気を与えます。web ベースのオーディオは早くから成熟していますが、まだ多くのブラウザーに案内すべき違いがあります。ゲームエクスペリエンスにとってどのオーディオパーツが重要で、どれがあっても良いけど不要なものかを決めて、それに従って戦略を決めるのが必要となる事がよくあります。この記事では web ゲーム用のオーディオを実装するための詳細なガイドを提供し、現在なるべく広い範囲のプラットフォームで動作するものを観察します。

## モバイルオーディオの注意点

これまでウェブオーディオのサポートを提供するのに最も難しいプラットフォームはモバイルプラットフォームでした。不幸にもこれはゲームで遊ぶ人が良くいるプラットフォームです。デスクトップとモバイルのブラウザーにはいくつかの違いがあり、それがブラウザーベンダーに、ゲーム開発者が作業するのが難しくなるウェブオーディオの選択を起こすことがありました。これを見ていきましょう。

### 自動再生

多くのモバイルブラウザーは、ゲームがオーディオ再生するように要求しても単に無視します。つまりオーディオの再生にはユーザーが開始するイベントが必要です。これはオーディオ再生の構成を考慮する必要があるということです。これは通常、事前にオーディオを読み込んでユーザーが開始するイベントに準備しておくことで守られます。

もっと受け身にオーディオを自動再生するには、例えばゲームがロードするとすぐに始まるバックグラウンドミュージックでは、仕掛けをして \*any\* ユーザー開始イベントを検知して再生を開始します。その他のゲームで使われる予定のアクティブなサウンドについては、スタートボタンのようなものが押されたらすぐに準備しておくよう考慮します。

このようにオーディオを準備するため、その一部を再生したくなります。つまりこの理由のため、オーディオサンプルの最後に無音期間を入れておくのが便利です。その無音に移動したり、再生や停止することは、JavaScript を使ってファイルの任意の地点を再生できることを意味します。

> **Note:** **注**: もしブラウザーがあなたに音量を変更することを許可するならば、ファイルを音量ゼロで再生することも可能でしょう（後述）。また、オーディオを再生後に即時停止することは、オーディオの小さな断片が再生されないことを保証しない、ということにも注意してください。

> **Note:** **注**: モバイルのホーム画面にウェブアプリを追加することで特性が変化してしまうかもしれません。今のところ、iOS 上の自動再生がこのケースに当てはまるようです。可能であれば、いくつかのデバイスとプラットフォームでコードがどう動くか試すべきです。

### 音量

ボリュームコントロールのプログラムはモバイルブラウザーで無効化されていることがあります。この理由はしばしばユーザーが OS レベルでボリュームをコントロールし、上書きが禁止されているためです。

### バッファリングと先読み

急騰するモバイルネットワークのデータ使用を軽減するための試みとして、再生開始前のバッファリングができなくなることが恐らくあります。バッファリングとは、ブラウザが前もってメディアのダウンロードをする処理であり、円滑な再生を確実なものにするために度々必要になります。

{{domxref("HTMLMediaElement")}} インターフェイスが備える [多くのプロパティ](/ja/docs/Web/API/HTMLMediaElement#Properties) はトラックが再生可能な状態にあるかどうかを決定する助けになります。

> **Note:** **注**: 色々な意味でバッファリングの概念は時代遅れです。バイトレンジリクエストが許容される限り（これが既定の振る舞いです）、先行する内容のダウンロードの必要なしにオーディオの任意の点に飛ぶことができるべきです。しかしながら、先読みは依然として便利です。それなしでは、再生が始められるようになる前に、常にいくらかのクライアント・サーバー間通信が必要になるでしょう。

### 並行したオーディオ再生

多くのゲームでは、複数のオーディオを同時に再生することが求められます。例えば、ゲーム内で様々なことが起こるために、バックグラウンドミュージックと効果音を一緒に再生することがあります。この状況は近々、[Web Audio API](/ja/docs/Web/API/Web_Audio_API)の採用でもっと上手くいくようになる予定ですが、現状最も広くサポートされている方法 ― 平凡な{{htmlelement("audio")}}要素を使用すること ― は、モバイルデバイス上では不安定な結果になります。

### テストとサポート

ここでは、どのモバイルプラットフォームが前述した機能をサポートするかを表に示します。

| モバイルブラウザー | バージョン | 同時再生 | 自動再生 | 音量調整 | 先読み |
| ------------------ | ---------- | -------- | -------- | -------- | ------ |
| Chrome (Android)   | 32+        | Y        | N        | N        | N      |
| Firefox (Android)  | 26+        | Y        | Y        | N        | N      |
| Firefox OS         | 1.2+       | Y        | Y        | Y        | Y      |
| IE Mobile          | 11+        | Y        | Y        | N        | Y      |
| Opera Mobile       | 11+        | N        | N        | N        | N      |
| Safari (iOS)       | 7+         | Y/N\*    | N        | N        | Y      |
| Android Browser    | 2.3+       | N        | N        | N        | N      |

> **Note:** **\* 注**: 同時に全てのオーディオを開始させてみる場合、Safari 7 では再生に問題があります。再生をずらした場合、ある程度は成功するかもしれません。

> **Note:** **注**: オーディオの同時再生は私たちの[同時オーディオテストの例](http://jsfiddle.net/dmkyaq0r/)を使ってテストされますが、そこでは標準のオーディオ API を使って３つのオーディオの同時再生を試しています。

> **Note:** **注**: 単純な自動再生機能は私たちの[自動再生テストの例](http://jsfiddle.net/vpdspp2b/)でテストされます。

> **Note:** **注**: 音量の可変性は私たちの[音量テストの例](http://jsfiddle.net/7ta12vw4/)でテストされます。

## モバイルの回避処理

モバイルブラウザーは問題を抱えていますが、上に詳述した問題については回避する方法があります。

### オーディオスプライト

オーディオスプライトは[CSS スプライト](/ja/docs/Web/Guide/CSS/CSS_Image_Sprites)から名前をとったもので、CSS スプライトとは単一グラフィックリソースを連続したスプライトに分解して使う CSS のための視覚的なテクニックです。同じ原理をオーディオに適用することで、読み込みと再生に時間のかかる小さなオーディオファイルの束ではなく、必要とするオーディオすべてを含む大きなオーディオファイル一つを用いることができます。そのファイルから特定の音を再生するには、各オーディオスプライトの既知の開始・停止時間を指定するだけです。

利点は、一つのオーディオを前もって提供しておき、スプライトをすぐ使える状態にできることです。こうすることで、大きな一つのオーディオの再生と即時停止をするだけですみます。また、サーバーリクエスト数を減らすことと、帯域幅を節約することもできます。

```js
var myAudio = document.createElement("audio");
myAudio.src = "mysprite.mp3";
myAudio.play();
myAudio.pause();
```

停止すべき時間を知るために、現在時間のサンプリングをする必要があるでしょう。もし個々の音声について 500ms 以上の間隔をあけるなら、`timeUpdate`イベント(250ms 毎に発動します）を使うことで事足りるはずです。ファイルは厳密に必要であるよりわずかに長くなりますが、無音部分はよく圧縮されます。

ここにオーディオスプライトプレイヤーの例があります。 ― まずは HTML でユーザーインターフェイスを構築しましょう:

```html
<audio id="myAudio" src="http://jPlayer.org/tmp/countdown.mp3"></audio>
<button data-start="18" data-stop="19">0</button>
<button data-start="16" data-stop="17">1</button>
<button data-start="14" data-stop="15">2</button>
<button data-start="12" data-stop="13">3</button>
<button data-start="10" data-stop="11">4</button>
<button data-start="8"  data-stop="9">5</button>
<button data-start="6"  data-stop="7">6</button>
<button data-start="4"  data-stop="5">7</button>
<button data-start="2"  data-stop="3">8</button>
<button data-start="0"  data-stop="1">9</button>
```

今、開始・停止時間を秒単位で指定したボタンがあります。"countdonw\.mp3" という MP3 ファイルは 2 秒ごとに声に出された数字から成り、ここで意図していることは、対応するボタンが押された時にその数が再生されるということです。

このように動作する JavaScript を追加しましょう:

```js
var myAudio = document.getElementById('myAudio');
var buttons = document.getElementsByTagName('button');
var stopTime = 0;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    myAudio.currentTime = this.getAttribute("data-start");
    stopTime = this.getAttribute("data-stop");
    myAudio.play();
  }, false);
}

myAudio.addEventListener('timeupdate', function() {
  if (this.currentTime > stopTime) {
    this.pause();
  }
}, false);
```

> **Note:** **注**: JSFiddle 上で[私たちのオーディオスプライトプレイヤーライブ](http://jsfiddle.net/59vwaame/)を試すことができます。

> **Note:** **注**: 上に詳述したように、モバイルでは、スタートボタンが押されるといったようなユーザー開始イベントからコードを発動させる必要があるかもしれません。

> **Note:** **注**: ビットレートに気をつけてください。低ビットレートのエンコードではファイルサイズは小さくなりますが、シーク精度も低くなります。

## バックグラウンドミュージック(BGM)

ゲーム内の音楽は感情に訴える強力な効果があります。あなたは様々な楽曲サンプルを組み合わせることができ、さらに、オーディオ要素のボリュームをコントロールすることができることを想定すれば、異なる楽曲をクロスフェードさせることができます。[`playbackRate()`](/Apps/Build/Audio_and_video_delivery/HTML5_playbackRate_explained)を使うことで、動きにより良く同期させるために、ピッチに影響なく音楽のスピードの調節もできます。

これは標準の{{HTMLElement("audio")}}要素を使って{{domxref("HTMLMediaElement")}}と連携しさえすれば可能となりますが、より発展した[Web Audio API](/ja/docs/Web/API/Web_Audio_API)を使えばもっと簡単で柔軟になります。次にこれについて見ていきましょう。

## ゲーム用の Web オーディオ API

Now that it's supported in all modern browsers except for Opera Mini and Internet Explorer ([although Microsoft is now working on it](https://status.modern.ie/webaudioapi)), an acceptable approach for many situations is to use the [Web Audio API](/ja/docs/Web/API/Web_Audio_API) (see the [Can I use Web Audio API page](http://caniuse.com/#search=web%20audio%20api) for more on browser compatibility). The Web Audio API is an advanced audio JavaScript API that is ideal for game audio. Developers can generate audio and manipulate audio samples as well as positioning sound in 3D game space.

A feasible cross-browser strategy would be to provide basic audio using the standard {{HTMLElement("audio")}} element and, where supported, enhance the experience using the Web Audio API.

> **Note:** **注**: Significantly, iOS Safari now supports the Web Audio API, which means it's now possible to write web-based games with native-quality audio for iOS.

As the Web Audio API allows precise timing and control of audio playback, we can use it to play samples at specific moments, which is a crucial immersive aspect of gaming. You want those explosions to be **accompanied** by a thundering boom, not **followed** by one, after all.

### Web Audio API での BGM

Although we can use the {{HTMLElement("audio")}} element to deliver linear background music that doesn't change in reaction to the game environment, the Web Audio API is ideal for implementing a more dynamic musical experience. You may want music to change depending on whether you are trying to build suspense or encourage the player in some way. Music is an important part of the gaming experience and depending on the type of game you are making you may wish to invest significant effort into getting it right.

One way you can make your music soundtrack more dynamic is by splitting it up into component loops or tracks. This is often the way that musicians compose music anyway, and the Web Audio API is extremely good at keeping these parts in sync. Once you have the various tracks that make up your piece you can bring tracks in and out as appropriate.

You can also apply filters or effects to music. Is your character in a cave? Increase the echo. Maybe you have underwater scenes, so apply a filter that muffles the sound.

Let's look at some Web Audio API techniques for dynamically adjusting music from its base tracks.

### トラックを読み込む

With the Web Audio API you can load separate tracks and loops individually using [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest), which means you can load them synchronously or in parallel. Loading synchronously might mean parts of your music are ready earlier and you can start playing them while others load.

Either way you may want to synchronize tracks or loops. The Web Audio API contains the notion of an internal clock that starts ticking the moment you create an audio context. You'll need to take account of the time between creating an audio context and when the first audio track starts playing. Recording this offset and querying the playing track's current time gives you enough information to synchronize separate pieces of audio.

To see this in action, let's lay out some separate tracks:

```html
<ul>
  <li><a class="track" href="http://jPlayer.org/audio/mp3/gbreggae-leadguitar.mp3">Lead Guitar</a></li>
  <li><a class="track" href="http://jPlayer.org/audio/mp3/gbreggae-drums.mp3">Drums</a></li>
  <li><a class="track" href="http://jPlayer.org/audio/mp3/gbreggae-bassguitar.mp3">Bass Guitar</a></li>
  <li><a class="track" href="http://jPlayer.org/audio/mp3/gbreggae-horns.mp3">Horns</a></li>
  <li><a class="track" href="http://jPlayer.org/audio/mp3/gbreggae-clav.mp3">Clavi</a></li>
</ul>
```

All of these tracks are the same tempo and are designed to be synchronized with each other.

```js
window.AudioContext = window.AudioContext || window.webkitAudioContext;

var offset = 0;
var context = new AudioContext();

function playTrack(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  var audiobuffer;

  // Decode asynchronously
  request.onload = function() {

    if (request.status == 200) {

      context.decodeAudioData(request.response, function(buffer) {
        var source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        console.log('context.currentTime ' + context.currentTime);

        if (offset == 0) {
          source.start();
          offset = context.currentTime;
        } else {
          source.start(0,context.currentTime - offset);
        }

      }, function(e) {
        console.log('Error decoding audio data:' + e);
      });
    } else {
      console.log('Audio didn\'t load successfully; error code:' + request.statusText);
    }
  }
  request.send();
}

var tracks = document.getElementsByClassName('track');

for (var i = 0, len = tracks.length; i < len; i++) {
  tracks[i].addEventListener('click', function(e){

    playTrack(this.href);
    e.preventDefault();
  });
}
```

> **Note:** **注**: You can try out our [Web Audio API multitrack demo](http://jsfiddle.net/c87z11jj/1/) live on JSFiddle.

Now let's look over the code. First we set up a new {{domxref("AudioContext")}} and create a function (`playTrack()`) that loads and starts playing a track.

`start()` (formerly known as `noteOn()`) will start playing an audio asset. ` start(``) ` asks three (optional) parameters:

1.  when: The absolute time to commence playback.
2.  where (offset): The part of the audio to start playing from.
3.  how long: The duration to play for.

`stop()` takes one optional parameter — when — which is the delay before stopping.

If `start()`'s second parameter — the offset — is zero, we start playing from the start of the given piece of audio, which is what we do in the first instance. We then store the {{domxref("AudioContext.currentTime")}} — the offset of when the first piece began playing, subtract that from any subsequent `currentTime`s to calculate the actual time, and use that to synchronize our tracks.

In the context of your game world you may have loops and samples that are played in different circumstances, and it can be useful to be able to synchronize with other tracks for a more seamless experience.

> **Note:** **注**: This example does not wait for the beat to end before introducing the next piece; we could do this if we knew the BPM (Beats Per Minute) of the tracks.

You may find that the introduction of a new track sounds more natural if it comes in on the beat/bar/phrase or whatever units you want to chunk your background music into.

To do this before playing the track you want to sync, you should calculate how long it is until the start of the next beat/bar etc.

Here's a bit of code that given a tempo (the time in seconds of your beat/bar) will calculate how long to wait until you play the next part — you feed the resulting value to the `start()` function with the first parameter, which takes the absolute time of when that playback should commence. Note the second parameter (where to start playing from in the new track) is relative:

```js
if (offset == 0) {
  source.start();
  offset = context.currentTime;
} else {
  var relativeTime = context.currentTime - offset;
  var beats = relativeTime / tempo;
  var remainder = beats - Math.floor(beats);
  var delay = tempo - (remainder*tempo);
  source.start(context.currentTime+delay, relativeTime+delay);
}
```

> **Note:** **注**: You can [try our wait calculator code](http://jsfiddle.net/c87z11jj/2/) here, on JSFiddle (I've synched to the bar in this case).

> **Note:** **注**: If the first parameter is 0 or less than the context `currentTime`, playback will commence immediately.

### 場所のオーディオ

Positional audio can be an important technique in making audio a key part of an immersive gaming experience. The Web Audio API not only enables us to position a number of audio sources in three-dimensional space but can also allow us to apply filters that make that audio appear more realistic.

In short, using the positional capabilities of the Web Audio API we can relate further information about the game world to the player.

We can relate:

- The position of objects
- The direction of objects (movement of position and recreation of the Doppler effect)
- The environment (cavernous, underwater, etc.)

This is especially useful in a three-dimensional environment rendered using [WebGL](/ja/docs/Web/WebGL), where the Web Audio API makes it possible to tie audio to the objects and viewpoints.

> **Note:** **注**: See [Web Audio API Spatialization Basics](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics) for more details.

## こちらも確認

- [Web Audio API on MDN](/ja/docs/Web/API/Web_Audio_API)
- [`<audio>` on MDN](/ja/docs/Web/HTML/Element/audio)
- [Developing Game Audio with the Web Audio API (HTML5Rocks)](http://www.html5rocks.com/en/tutorials/webaudio/games/)
- [Mixing Positional Audio and WebGL (HTML5Rocks)](http://www.html5rocks.com/en/tutorials/webaudio/positional_audio/)
- [Songs of Diridum: Pushing the Web Audio API to Its Limits](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [Making HTML5 Audio Actually Work on Mobile](http://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audio Sprites (and fixes for iOS)](http://remysharp.com/2010/12/23/audio-sprites/)
