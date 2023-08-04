---
title: 能力と制約と設定
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: 19dbdc2139ab1c68651da2b9338061d64567665d
---

{{APIRef("Media Capture and Streams")}}

この記事では、**制約** (constraints) と**能力** (capabilities) という 2 つの概念と、メディア設定について説明し、[制約エクササイザー](#例_制約エクササイザー)と呼ばれる例を挙げています。制約エクササイザーでは、コンピューターの A/V 入力機器（ウェブカメラやマイクなど）から入力される音声と映像のトラックに、異なる形の制約設定を 適用した場合の結果を使い勝手よく試すことができます。

歴史的に、 Web API と密接に連携するウェブ用のスクリプトを作成することには、よく知られた課題がありました。 多くの場合、コードは、API が存在するかどうか、存在する場合は、それを実行している{{Glossary("user agent","ユーザーエージェント")}}の制限を知る必要があります。 これを理解するのは難しい場合が多く、通常、実行している{{Glossary("user agent","ユーザーエージェント")}}（またはブラウザー）とそのバージョンの組み合わせを調べ、特定のオブジェクトが存在するかどうかを確認したり、さまざまなものが機能するかどうかを確認したり、どのエラーが発生したかを判断したりする必要がありました。 その結果、非常に脆弱なコードが大量に発生するか、このような問題を解決するライブラリに依存したり、{{Glossary("polyfill", "ポリフィル")}}を実装して実装の穴にパッチを当てたりしました。

能力と制約により、ブラウザーとウェブサイトまたはアプリケーションは、ブラウザーの実装が対応している **制約可能なプロパティ** と、それぞれについて対応している値についての情報を交換することができます。

## 概要

プロセスは次のように動作します（例として {{domxref("MediaStreamTrack")}} を使用）。

1. 必要に応じて、{{domxref("MediaDevices.getSupportedConstraints()")}} を呼び出して、**対応している制約** (supported constraints) のリストを取得します。 これにより、ブラウザーが知っている制約可能なプロパティがわかります。 これは必ずしも必要なわけではありません。 知らないものは指定すると単に無視されるためです。 ただし、それなしでは手に入らないものがある場合は、リストに載っていることを確認することから始めることができます。
2. 使用したいプロパティに対応しているかどうかをスクリプトが認識すると、トラックの `getCapabilities()` メソッドによって返されたオブジェクトを調べることにより、API とその実装の**能力**を確認できます。 このオブジェクトは、対応している各制約と、対応している値または値の範囲をリストします。
3. 最後に、トラックの `applyConstraints()` メソッドを呼び出して、好みの制約可能なプロパティに使用する値または値の範囲を指定することにより、必要に応じて API を構成します。
4. トラックの `getConstraints()` メソッドは、`applyConstraints()` の最新の呼び出しに渡された制約セットを返します。 これは、要求された値を調整する必要があるプロパティと、プラットフォームの既定値が表されていないため、トラックの実際の現在の状態を表していない場合があります。 トラックの現在の構成を完全に表現するには、`getSettings()` を使用します。

メディアキャプチャとストリーム API では、{{domxref("MediaStream")}} と {{domxref("MediaStreamTrack")}} の両方に制約可能なプロパティがあります。

## 制約を対応しているかどうかの判断

特定の制約にユーザーエージェントが対応しているかどうかを知る必要がある場合は、次のように {{domxref("MediaDevices.getSupportedConstraints", "navigator.mediaDevices.getSupportedConstraints()")}} を呼び出して、ブラウザーが知っている制約可能なプロパティのリストを取得します。

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

この例では、対応している制約を取得し、`frameRate` 制約に対応していない場合、ユーザーがフレームレートを構成できるコントロールを無効にします。

## 制約の定義方法

単一の制約は、目的の値または値の範囲が指定されている制約可能なプロパティと名前が一致するオブジェクトです。 このオブジェクトには、0 個以上の個別の制約と、`advanced` というオプションのサブオブジェクトが含まれます。 このサブオブジェクトには、ユーザーエージェントが可能な限り満たす必要がある 0 個以上の制約の別のセットが含まれます。 ユーザーエージェントは、制約セットで指定された順序で制約を満たすことを試みます。

理解すべき最も重要なことは、ほとんどの制約は必要条件ではないということです。 それよりむしろ、それらは要求です。 例外があり、すぐにそれらに到達します。

### 設定に特定の値を要求

最も簡単には、各制約は、設定に必要な値を示す特定の値である場合があります。 例えば、次のようにです。

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

この場合、制約は、ほぼすべてのプロパティで任意の値が適切であることを示しますが、標準の 16:9 アスペクト比で標準の高解像度 (HD) 動画サイズが望ましいことを示します。 結果のトラックがこれらのいずれかに一致するという保証はありませんが、ユーザーエージェントは可能な限り一致するように最善を尽くす必要があります。

プロパティの優先順位付けは簡単です。 2 つのプロパティの要求値が相互に排他的である場合、制約セットの最初にリストされている値を使用します。 例として、上記のコードを実行しているブラウザーは 1920x1080 のトラックを提供できないが、1920x900 を提供できる場合、それを提供します。

単一の値を指定するこれらのような単純な制約は、常に必須でないものとして扱われます。 ユーザーエージェントは、あなたが要求したものを提供しようとしますが、あなたが得るものが一致することを保証しません。 しかしながら、 {{domxref("MediaStreamTrack.applyConstraints()")}} を呼び出すときにプロパティに単純な値を使用すると、これらの値は必要条件ではなく要求と見なされるため、要求は常に成功します。

### 値の範囲の指定

場合によっては、範囲内の任意の値がプロパティの値として受け入れられることがあります。 範囲は、最小値と最大値のいずれかまたは両方を指定でき、必要に応じて範囲内で理想的な値 ideal を最終結果として指定できます。 理想的な値を指定すると、ブラウザーは、指定された他の制約に応じて、その値にできるだけ一致するように近づけようとします。

```js
const supports = navigator.mediaDevices.getSupportedConstraints();

if (
  !supports["width"] ||
  !supports["height"] ||
  !supports["frameRate"] ||
  !supports["facingMode"]
) {
  // 必要なプロパティが不足しているため、そのエラーを処理します。
} else {
  const constraints = {
    width: { min: 640, ideal: 1920, max: 1920 },
    height: { min: 400, ideal: 1080 },
    aspectRatio: 1.777777778,
    frameRate: { max: 30 },
    facingMode: { exact: "user" },
  };

  myTrack
    .applyConstraints(constraints)
    .then(() => {
      /* 制約が正常に適用されたら何かをする */
    })
    .catch((reason) => {
      /* 制約を適用できませんでした。 reason が理由 */
    });
}
```

ここでは、一致を見つける必要のある制約可能なプロパティ (`width`, `height`, `frameRate`, `facingMode`) がサポートされていることを確認した後、幅は 640 以上 1920 以下（できれば 1920）、高さは 400 以上（理想的には 1080）、アスペクト比は 16:9 (1.777777778)、フレームレートは 30 フレーム/秒以下を要求する制約を設定します。 さらに、唯一の許容可能な入力デバイスは、ユーザーに面したカメラ（自撮りカメラ）です。 `width`、`height`、`frameRate`、`facingMode` の制約が満たされない場合、 `applyConstraints()` によって返されたプロミスは拒否されます。

> **メモ:** `max`、`min`、`exact` のいずれかまたはすべてを使用して指定された制約は、常に必須として扱われます。 `applyConstraints()` を呼び出して、使用する制約を 1 つ以上を満たすことができない場合、プロミスは拒否されます。

### 高度な制約

`advanced` プロパティを制約セットに追加すると、いわゆる高度な制約が作成されます。 このプロパティの値は、オプションと見なされる追加の制約セットの配列です。 この機能のユースケースはほとんどなく、仕様から取り除くことに関心があるため、ここでは説明しません。 詳細については、[Media Capture and Streams 仕様書のセクション 11](https://www.w3.org/TR/mediacapture-streams/#idl-def-Constraints)、過去の例 2 を参照してください。

## 能力の確認

{{domxref("MediaStreamTrack.getCapabilities()")}} を呼び出して、対応しているすべての能力と、そのそれぞれが現在のプラットフォームとユーザーエージェントで受け入れられる値または値の範囲のリストを取得できます。 この関数は、ブラウザーが対応している各制約可能なプロパティと、それらのプロパティのそれぞれが対応している値または値の範囲をリストする {{domxref("MediaTrackCapabilities")}} オブジェクトを返します。

> **メモ:** `getCapabilities()` は、まだすべての主要なブラウザーで実装されていません。 とりあえず、あなたは必要なものを手に入れようとする必要があり、もしそれができなければ、その時点で何をすべきかを決定します。 例えば、 [Firefox バグ 1179084](https://bugzil.la/1179084) を参照してください。

## 制約の適用

制約を使用する最初の最も一般的な方法は、次のように {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を呼び出すときに制約を指定することです。

```js
navigator.mediaDevices
  .getUserMedia({
    video: {
      width: { min: 640, ideal: 1920 },
      height: { min: 400, ideal: 1080 },
      aspectRatio: { ideal: 1.7777777778 },
    },
    audio: {
      sampleSize: 16,
      channelCount: 2,
    },
  })
  .then((stream) => {
    videoElement.srcObject = stream;
  })
  .catch(handleError);
```

この例では、`getUserMedia()` の時点で制約が適用され、動画のためのフォールバックを備えた理想的なオプションのセットが要求されます。

> **メモ:** 1 つ以上のメディア入力デバイス ID を指定して、入力ソースが許可される制限を設定できます。 利用可能なデバイスのリストを収集するには、{{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} を呼び出してから、目的の条件を満たす各デバイスに対して、その `deviceId` を `MediaConstraints` オブジェクトに追加して、最終的に `getUserMedia()` に渡します。

次のようにトラックの {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} メソッドを呼び出し、トラックに適用する制約を表すオブジェクトを渡すことで、既存の {{domxref("MediaStreamTrack")}} の制約を臨機応変に変更することもできます。

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

このスニペットでは、`videoTrack` が参照する映像トラックが更新され、その解像度が可能な限り 1920x1080 ピクセル（1080p 高解像度）に一致するようになります。

## 現在の制約と設定の取得

**制約**と**設定** (settings) の違いを覚えておくことは重要です。 制約は、（{{domxref("MediaTrackConstraints")}} の記事で説明されているように）さまざまな制約可能なプロパティに必要な値、希望する値、および受け入れる値を指定する方法です。 一方、設定は現在の各制約可能なプロパティの実際の値です。

### 実施されている制約の取得

現在メディアに適用されている制約セットを取得する必要がある場合は、次の例に示すように、{{domxref("MediaStreamTrack.getConstraints()")}} を呼び出すことでその情報を取得できます。

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

この関数は、{{domxref("MediaStreamTrack")}} と使用するカメラに面するモードを示す文字列を受け入れ、現在の制約を取得し、{{domxref("MediaTrackConstraints.facingMode")}} の値を指定された値に設定し、更新された制約セットを適用します。

### トラックの現在の設定の取得

厳密な制約のみを使用しない限り（これは非常に制限的ですので、それの意味することを確認してください！）、制約が適用された後に実際に何が得られるかを保証するものではありません。 結果のメディアに実際に存在する制約可能なプロパティの値は、設定と呼ばれます。 メディアの実際の形式やその他のプロパティを知る必要がある場合は、{{domxref("MediaStreamTrack.getSettings()")}} を呼び出してこれらの設定を取得できます。 これは、ディクショナリ {{domxref("MediaTrackSettings")}} に基づくオブジェクトを返します。 例えば次のようにです。

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

この関数は、`getSettings()` を使用して、トラックの制約可能なプロパティの現在使用中の値を取得し、{{domxref("MediaTrackSettings.facingMode", "facingMode")}} の値を返します。

## 例: 制約エクササイザー

この例では、音声トラックと映像トラックの制約セットを記述するソースコードを編集して、メディアの制約を試すことができるエクササイザーを作成します。 その後、これらの変更を適用して、ストリームの外観や、新しい制約を適用した後の実際のメディア設定の両方を含む結果を確認できます。

この例の HTML と CSS は非常に単純であり、ここには示されていません。 {{LiveSampleLink("Example_Constraint_exerciser", "ここをクリックする")}}と、完全な例を見ることができます。

```html hidden
<p>
  メディアの制約を試してください！ 左側の編集ボックスで映像トラックと音声トラックの制約セットを編集し、[制約の適用] ボタンをクリックして試してください。 ブラウザーが選択して使用している実際の設定は、右側のボックスに表示されます。 そのすべての下に、動画自体が表示されます。
</p>
<p>[開始] ボタンをクリックして開始します。</p>

<h3>使用できる制約可能なプロパティ:</h3>
<ul id="supportedConstraints"></ul>
<div id="startButton" class="button">開始</div>
<div class="wrapper">
  <div class="trackrow">
    <div class="leftside">
      <h3>要求した動画の制約:</h3>
      <textarea id="videoConstraintEditor" cols="32" rows="8"></textarea>
    </div>
    <div class="rightside">
      <h3>実際の動画の設定:</h3>
      <textarea id="videoSettingsText" cols="32" rows="8" disabled></textarea>
    </div>
  </div>
  <div class="trackrow">
    <div class="leftside">
      <h3>要求した音声の制約:</h3>
      <textarea id="audioConstraintEditor" cols="32" rows="8"></textarea>
    </div>
    <div class="rightside">
      <h3>実際の音声の設定:</h3>
      <textarea id="audioSettingsText" cols="32" rows="8" disabled></textarea>
    </div>
  </div>

  <div class="button" id="applyButton">制約の適用</div>
</div>
<video id="video" autoplay></video>

<div class="button" id="stopButton">停止</div>

<div id="log"></div>
```

```css hidden
body {
  font: 14px "Open Sans", "Arial", sans-serif;
}

video {
  margin-top: 20px;
  border: 1px solid black;
}

.button {
  cursor: pointer;
  width: 150px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
}

.wrapper {
  margin-bottom: 10px;
  width: 600px;
}

.trackrow {
  height: 200px;
}

.leftside {
  float: left;
  width: calc(calc(100% / 2) - 10px);
}

.rightside {
  float: right;
  width: calc(calc(100% / 2) - 10px);
}

textarea {
  padding: 8px;
}

h3 {
  margin-bottom: 3px;
}

#supportedConstraints {
  column-count: 2;
}

#log {
  padding-top: 10px;
}
```

### 既定値と変数

最初に、文字列として既定の制約セットがあります。 これらの文字列は編集可能な {{HTMLElement("textarea")}} に表示されますが、これはストリームの初期構成です。

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

これらの既定値は、かなり一般的なカメラ構成を要求しますが、特に重要なプロパティであることを主張しません。 ブラウザーは、これらの設定に一致するように最善を尽くす必要がありますが、近い一致と見なされるものなら何でもそれで解決します。

次に、映像トラックおよび音声トラックの {{domxref("MediaTrackConstraints")}} オブジェクトを保持する変数と、映像トラックおよび音声トラック自体への参照を保持する変数を `null` に初期化します。

```js
let videoConstraints = null;
let audioConstraints = null;

let audioTrack = null;
let videoTrack = null;
```

そして、アクセスする必要のあるすべての要素への参照を取得します。

```js
const videoElement = document.getElementById("video");
const logElement = document.getElementById("log");
const supportedConstraintList = document.getElementById("supportedConstraints");
const videoConstraintEditor = document.getElementById("videoConstraintEditor");
const audioConstraintEditor = document.getElementById("audioConstraintEditor");
const videoSettingsText = document.getElementById("videoSettingsText");
const audioSettingsText = document.getElementById("audioSettingsText");
```

これらの要素は次のとおりです。

- `videoElement`
  - : ストリームを表示する {{HTMLElement("video")}} 要素。
- `logElement`
  - : エラーメッセージやその他のログの種類の出力が書き込まれる {{HTMLElement("div")}}。
- `supportedConstraintList`
  - : ユーザーのブラウザーがサポートしている各制約可能なプロパティの名前をプログラムで追加する {{HTMLElement("ul")}}（順序なしリスト）。
- `videoConstraintEditor`
  - : ユーザーが映像トラックの制約セットのコードを編集できるようにする {{HTMLElement("textarea")}} 要素。
- `audioConstraintEditor`
  - : ユーザーが音声トラックの制約セットのコードを編集できるようにする {{HTMLElement("textarea")}} 要素。
- `videoSettingsText`
  - : 映像トラックの制約可能なプロパティの現在の設定を表示する {{HTMLElement("textarea")}}（常に無効）。
- `audioSettingsText`
  - : 音声トラックの制約可能なプロパティの現在の設定を表示する {{HTMLElement("textarea")}}（常に無効）。

最後に、2 つの制約セットエディター要素の現在の内容を既定値に設定します。

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### 設定の表示の更新

各制約セットエディターの右側には、トラックの構成可能なプロパティの現在の構成を表示するために使用する 2 番目のテキストボックスがあります。 この表示を関数 `getCurrentSettings()` で更新します。 この関数は、音声トラックと映像トラックの現在の設定を取得し、 [`value`](/ja/docs/Web/HTML/Element/textarea#value) を設定することで対応するコードをトラックの設定表示ボックスに挿入します。

```js
function getCurrentSettings() {
  if (videoTrack) {
    videoSettingsText.value = JSON.stringify(videoTrack.getSettings(), null, 2);
  }

  if (audioTrack) {
    audioSettingsText.value = JSON.stringify(audioTrack.getSettings(), null, 2);
  }
}
```

これは、以下に示すように、更新した制約を適用するときだけでなく、ストリームの最初の起動後にも呼び出されます。

### トラックの制約セットオブジェクトの構築

`buildConstraints()` 関数は、2 つのトラックの制約セット編集ボックス内のコードを使用して、音声トラックと映像トラックの {{domxref("MediaTrackConstraints")}} オブジェクトを構築します。

```js
function buildConstraints() {
  try {
    videoConstraints = JSON.parse(videoConstraintEditor.value);
    audioConstraints = JSON.parse(audioConstraintEditor.value);
  } catch (error) {
    handleError(error);
  }
}
```

これは {{jsxref("JSON.parse()")}} を使用して、各エディター内のコードをオブジェクトに解析します。 `JSON.parse()` の呼び出しのどちらかが例外をスローした場合、`handleError()` が呼び出されてエラーメッセージがログに出力されます。

### ストリームの構成と開始

`startVideo()` メソッドは、動画ストリームのセットアップと開始を処理します。

```js
function startVideo() {
  buildConstraints();

  navigator.mediaDevices
    .getUserMedia({
      video: videoConstraints,
      audio: audioConstraints,
    })
    .then((stream) => {
      const audioTracks = stream.getAudioTracks();
      const videoTracks = stream.getVideoTracks();

      videoElement.srcObject = stream;

      if (audioTracks.length > 0) {
        audioTrack = audioTracks[0];
      }

      if (videoTracks.length > 0) {
        videoTrack = videoTracks[0];
      }
    })
    .then(() => {
      return new Promise((resolve) => {
        videoElement.onloadedmetadata = resolve;
      });
    })
    .then(() => {
      getCurrentSettings();
    })
    .catch(handleError);
}
```

ここには、次のようないくつかの手順があります。

1. `buildConstraints()` を呼び出して、編集ボックス内のコードから 2 つのトラックの {{domxref("MediaTrackConstraints")}} オブジェクトを作成します。
2. {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} を呼び出し、映像トラックおよび音声トラックの制約オブジェクトを渡します。 これにより、入力に一致するソースからの音声と動画を含む {{domxref("MediaStream")}} が返されます（通常はウェブカメラですが、適切な制約を指定すると他のソースからメディアを取得できます）。
3. ストリームを取得したら、画面に表示されるように {{HTMLElement("video")}} 要素に添付し、音声トラックと映像トラックを変数 `audioTrack` と `videoTrack` に取り込みます。
4. 次に、動画要素で {{domxref("HTMLMediaElement/loadedmetadata_event", "loadedmetadata")}} イベントが発生したときに解決するプロミスを設定します。
5. それが起こると、動画の再生を開始したことがわかるので、`getCurrentSettings()` 関数（上記を参照）を呼び出して、制約とハードウェアの能力を考慮した後にブラウザーが決定した実際の設定を表示します。
6. エラーが発生した場合は、この記事のもっと下で説明する `handleError()` メソッドを使用してログに記録します。

また、\[開始] ボタンがクリックされるのを監視するイベントリスナーを設定する必要があります。

```js
document.getElementById("startButton").addEventListener(
  "click",
  () => {
    startVideo();
  },
  false
);
```

### 制約セットの更新の適用

次に、\[制約の適用] ボタンのイベントリスナーを設定します。 クリックされ、まだ使用中のメディアがない場合は、`startVideo()` を呼び出し、指定された設定でストリームを開始する機能をその関数に処理させます。 それ以外の場合は、次の手順に従って、更新済みの制約を既にアクティブなストリームに適用します。

1. `buildConstraints()` を、音声トラック (`audioConstraints`) および映像トラック (`videoConstraints`) の更新された {{domxref("MediaTrackConstraints")}} オブジェクトを構築するために呼び出します。
2. {{domxref("MediaStreamTrack.applyConstraints()")}} を、新しい `videoConstraints` を適用するために映像トラック（存在する場合）で呼び出します。 これが成功したら、映像トラックの現在の設定ボックスの内容を、{{domxref("MediaStreamTrack.getSettings", "getSettings()")}} メソッドを呼び出した結果に基づいて更新します。
3. それが完了すると、新しい音声制約を適用するために、`applyConstraints()` を音声トラック（存在する場合）で呼び出します。 これが成功したら、音声トラックの現在の設定ボックスの内容を、{{domxref("MediaStreamTrack.getSettings", "getSettings()")}} メソッドを呼び出した結果に基づいて更新しす。
4. いずれかの制約セットを適用してエラーが発生した場合、`handleError()` を使用してメッセージをログに出力します。

```js
document.getElementById("applyButton").addEventListener(
  "click",
  () => {
    if (!videoTrack && !audioTrack) {
      startVideo();
    } else {
      buildConstraints();

      const prettyJson = (obj) => JSON.stringify(obj, null, 2);

      if (videoTrack) {
        videoTrack
          .applyConstraints(videoConstraints)
          .then(() => {
            videoSettingsText.value = prettyJson(videoTrack.getSettings());
          })
          .catch(handleError);
      }

      if (audioTrack) {
        audioTrack
          .applyConstraints(audioConstraints)
          .then(() => {
            audioSettingsText.value = prettyJson(audioTrack.getSettings());
          })
          .catch(handleError);
      }
    }
  },
  false
);
```

### 停止ボタンの処理

次に、\[停止] ボタンのハンドラーを設定します。

```js
document.getElementById("stopButton").addEventListener("click", () => {
  if (videoTrack) {
    videoTrack.stop();
  }

  if (audioTrack) {
    audioTrack.stop();
  }

  videoTrack = audioTrack = null;
  videoElement.srcObject = null;
});
```

これは単にアクティブなトラックを停止し、`videoTrack` 変数と `audioTrack` 変数を `null` に設定してそれらがなくなったことがわかるようにし、{{domxref("HTMLMediaElement.srcObject")}} を `null` に設定して {{HTMLElement("video")}} 要素からストリームを取り除きます。

### エディターでの単純なタブの対応

このコードは、いずれかの制約編集ボックスがフォーカスされているときに Tab キーで 2 つのスペース文字を挿入することにより、{{HTMLElement("textarea")}} 要素に Tab の単純なサポートを追加します。

```js
function keyDownHandler(event) {
  if (event.key === "Tab") {
    const elem = event.target;
    const str = elem.value;

    const position = elem.selectionStart;
    const beforeTab = str.substring(0, position);
    const afterTab = str.substring(position, str.length);
    const newStr = `${beforeTab}  ${afterTab}`;
    elem.value = newStr;
    elem.selectionStart = elem.selectionEnd = position + 2;
    event.preventDefault();
  }
}

videoConstraintEditor.addEventListener("keydown", keyDownHandler, false);
audioConstraintEditor.addEventListener("keydown", keyDownHandler, false);
```

### ブラウザーがサポートする制約可能なプロパティの表示

パズルの最後の重要な部分、ユーザーの参照用に、ブラウザーがサポートする制約可能なプロパティのリストを表示するコードです。 各プロパティは、ユーザーの利便性のために MDN のドキュメントへのリンクです。 このコードの動作の詳細については、[`MediaDevices.getSupportedConstraints()` の例](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#例)を参照してください。

> **メモ:** もちろん、このリストには非標準のプロパティが含まれている場合があります。 その場合、ドキュメントのリンクはあまり役に立たないでしょう。

```js
const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
for (const constraint in supportedConstraints) {
  if (Object.hasOwn(supportedConstraints, constraint)) {
    const elem = document.createElement("li");

    elem.innerHTML = `<code><a href='https://developer.mozilla.org/docs/Web/API/MediaTrackSupportedConstraints/${constraint}' target='_blank'>${constraint}</a></code>`;
    supportedConstraintList.appendChild(elem);
  }
}
```

### エラー処理

また、いくつかの簡単なエラー処理コードがあります。 `handleError()` は失敗したプロミスを処理するために呼び出され、`log()` 関数は動画の下の特別なロギング {{HTMLElement("div")}} ボックスにエラーメッセージを追加します。

```js
function log(msg) {
  logElement.innerHTML += `${msg}<br>`;
}

function handleError(reason) {
  log(
    `Error <code>${reason.name}</code> in constraint <code>${reason.constraint}</code>: ${reason.message}`
  );
}
```

### 結果

ここで、実際の完全な例を見ることができます。

{{EmbedLiveSample("Example_Constraint_exerciser", 650, 800)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaTrackCapabilities")}}
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaTrackSettings")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
