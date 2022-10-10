---
title: Web Speech APIを使う
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
---

Web Speech API は、音声認識と音声合成（text to speech または tts としても知られています）という 2 つの異なる分野の機能を提供しており、アクセシビリティと制御メカニズムに興味深い新しい可能性をもたらします。この記事では、両方の分野の簡単な紹介とデモを提供します。

## 音声認識

音声認識ではデバイスのマイクを通して音声を受信し、音声認識サービスによって文法のリスト（基本的には特定のアプリで認識させたいボキャブラリー）と照合されます。単語やフレーズが正常に認識されると、結果（または結果のリスト）がテキスト文字列として返され、その結果としてさらなるアクションを開始することができます。

Web Speech API には、このための主要なコントローラインターフェイスである {{domxref("SpeechRecognition")}} と、文法や結果などを表現するためのいくつかの密接に関連したインターフェースがあります。一般的には、デバイス上で利用可能なデフォルトの音声認識システムが音声認識に使用されます — 最近のほとんどの OS には音声コマンドを発行するための音声認識システムが搭載されています。macOS の Dictation、iOS の Siri、Windows 10 の Cortana、Android の Speech などを考えてみてください。

> **メモ:** **注釈**: Chrome などの一部のブラウザでは、Web ページで音声認識を使用するためにサーバーベースの認識エンジンが必要です。音声が認識処理のためにウェブサービスに送信されるため、オフラインでは機能しません。

### デモ

Web 音声認識の簡単な使い方を示すために、[Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer)というデモを書いてみました。画面をタップ/クリックし、HTML の色のキーワードを言うと、アプリの背景色がその色に変わります。

![The UI of an app titled Speech Color changer. It invites the user to tap the screen and say a color, and then it turns the background of the app that colour. In this case it has turned the background red.](speech-color-changer.png)

デモを実行するには、それが一部となっている Github リポジトリをクローン（または[直接ダウンロード](https://github.com/mdn/web-speech-api/archive/master.zip)）し、サポートされているデスクトップブラウザで HTML index ファイルを開くか、Chrome のようなサポートされているモバイルブラウザで[ライブデモの URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)に移動することができます。

### ブラウザ対応

Web Speech API 音声認識のサポートは、通常 Chrome for Desktop と Android に限られています — Chrome はバージョン 33 付近からサポートしていますが、プレフィックス付きのインターフェイスを使用しているため、 `webkitSpeechRecognition` などのプレフィックス付きバージョンを含める必要があります。

### HTML と CSS

アプリの HTML と CSS は本当に簡単です。タイトル、説明段落、診断メッセージを出力する div があるだけです。

```html
<h1>Speech color changer</h1>
<p>Tap/click then say a color to change the background color of the app.</p>
<div>
  <p class="output"><em>...diagnostic messages</em></p>
</div>
```

この CSS では、デバイスをまたいでも問題なく見えるように、非常にシンプルなレスポンシブ・スタイリングを提供しています。

### JavaScript

JavaScript をもう少し詳しく見てみましょう。

#### Chrome 対応

前述したように、Chrome は現在プレフィックス付きのプロパティで音声認識をサポートしているので、適切なオブジェクトを Chrome に供給し、そして将来的な実装でプレフィックスなしの機能をサポートする可能性も踏まえ、以下の行をコードの最初に追加しています。

```js
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
```

#### 文法

コードの次の部分では、アプリが認識する文法を定義します。次の変数は文法を保持するために定義されています。

```js
var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral' ... ];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
```

使用されている文法形式は [JSpeech Grammar Format](http://www.w3.org/TR/jsgf/) (**JSGF**) です — それについての詳細はリンク先の仕様書を参照してください。しかし、今のところは手っ取り早く実行してみましょう。

- 行の区切りは JavaScript と同じようにセミコロンで区切られています。
- 最初の行 — `#JSGF V1.0;` — は、使用されているフォーマットとバージョンを示します。これは常に最初に含める必要があります。
- 2 行目は認識したい用語のタイプを示します。`public` はパブリックルールであることを宣言し、角括弧内の文字列はこの用語の認識名 (`color`) を定義し、等号の後に続く項目のリストは、用語の適切な値として認識され受け入れられる代替値です。それぞれがパイプ文字で区切られていることに注意してください。
- 上記の構造に沿って別の行に好きなだけ多くの用語を定義し、かなり複雑な文法定義を含めることができます。この基本的なデモのために私たちは物事をシンプルにしています。

#### 文法を音声認識にプラグインする

次にやるべきことは、アプリケーションの認識を制御する音声認識インスタンスを定義することです。これは {{domxref("SpeechRecognition.SpeechRecognition()","SpeechRecognition()")}} コンストラクタを使用して行います。また、{{domxref("SpeechGrammarList.SpeechGrammarList()","SpeechGrammarList()")}} コンストラクタを使用して、文法を含む新しい音声文法リストも作成します。

```js
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
```

{{domxref("SpeechGrammarList.addFromString()")}} メソッドを使ってリストに `grammar` を追加します。 このメソッドは追加したい文字列をパラメータとして受けとり、さらにオプションで、リスト内で利用可能な他の文法との関係においてこの文法の重要度を指定する重み値を受け取ります（0 から 1 までの範囲で指定できます）。追加された文法は{{domxref("SpeechGrammar")}} オブジェクトのインスタンスとしてリスト内で利用できます。

```js
speechRecognitionList.addFromString(grammar, 1);
```

次に、 {{domxref("SpeechGrammarList")}} を {{domxref("SpeechRecognition.grammars")}} プロパティの値に設定することで、音声認識インスタンスに {{domxref("SpeechGrammarList")}} を追加します。次に進む前に、認識インスタンスの他のいくつかのプロパティも設定します。

- {{domxref("SpeechRecognition.continuous")}}: 認識が開始されるたびに連続した結果をキャプチャする (`true`) か、または単一の結果だけをキャプチャする (`false`) かを制御します。
- {{domxref("SpeechRecognition.lang")}}: 認識の言語を設定します。これを設定することは良い習慣であるため、推奨されます。
- {{domxref("SpeechRecognition.interimResults")}}: 音声認識システムが中間的な結果を返すか、最終的な結果だけを返すか定義します。このシンプルなデモでは最終的な結果で十分です。
- {{domxref("SpeechRecognition.maxAlternatives")}}: 結果ごとに返される代替候補数を設定します。これは、結果が完全に明確ではなく、ユーザーが正しいものを選択できるように代替候補のリストを表示したい場合などに便利な場合があります。しかし、このシンプルなデモでは必要ないのでここでは 1 つだけ指定します（これは実際にはデフォルトです）。

```js
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### 音声認識の開始

出力 {{htmlelement("div")}} と HTML 要素への参照を取得（診断メッセージを出力したり、後でアプリの背景色を更新したりできるようにするため）した後、画面がタップ/クリックされたときに音声認識サービスが開始されるように onclick ハンドラを実装します。これは {{domxref("SpeechRecognition.start()")}} を呼び出すことで実現しています。 `forEach()` メソッドは何色を言っているかを示す色付きインジケータを出力するために使われています。

```js
var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

var colorHTML= '';
colors.forEach(function(v, i, a){
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});
hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try ' + colorHTML + '.';

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}
```

#### 結果の受け取りとハンドリング

音声認識が開始されると、結果やその他の周辺情報を取得するために使用できる多くのイベントハンドラがあります（[`SpeechRecognition` のイベントハンドラのリスト](/ja/docs/Web/API/SpeechRecognition#Event_handlers) を参照してください）。最も一般的なものは {{domxref("SpeechRecognition.onresult")}} で、成功した結果を受信したときに発火されます。

```js
recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;
  console.log('Confidence: ' + event.results[0][0].confidence);
}
```

ここの 2 行目はちょっと複雑そうなので、順を追って説明していきましょう。{{domxref("SpeechRecognitionEvent.results")}}プロパティは、 {{domxref("SpeechRecognitionResult")}} オブジェクトを含む {{domxref("SpeechRecognitionResultList")}} オブジェクトを返します。これはゲッターを持っているので配列のようにアクセスでき、最初の`[0]`は 0 の位置にある`SpeechRecognitionResult`を返します。各 `SpeechRecognitionResult` オブジェクトには、個々に認識された単語を含む {{domxref("SpeechRecognitionAlternative")}} オブジェクトが含まれています。これらは配列のようにアクセスできるようにゲッターも持っています — 2 番目の`[0]`は、したがって位置 0 の `SpeechRecognitionAlternative` を返します。次に、その `transcript` プロパティを返して個々の認識結果を含む文字列を文字列として取得し、背景色をその色に設定し、認識された色を UI の診断メッセージとして報告します。

また、 {{domxref("SpeechRecognition.onspeechend")}} ハンドラを使用して音声認識サービスの実行を停止します（1 つの単語が認識され、それが発話され終わったら {{domxref("SpeechRecognition.stop()")}}) を使用します）。

```js
recognition.onspeechend = function() {
  recognition.stop();
}
```

#### エラーや認識されない発話のハンドリング

最後の 2 つのハンドラは、定義された文法にない音声が認識されたケースやエラーが発生したケースを処理するためのものです。{{domxref("SpeechRecognition.onnomatch")}} は最初に言及したケースを処理することになっているようですが、今のところ正しく動作しているようには見えないことに注意してください（とにかく認識されたものを返すだけです）。

```js
recognition.onnomatch = function(event) {
  diagnostic.textContent = 'I didnt recognise that color.';
}
```

{{domxref("SpeechRecognition.onerror")}} は、認識に成功して実際にエラーが発生したケースを処理します — {{domxref("SpeechRecognitionError.error")}} プロパティには、返された実際のエラーが含まれます。

```js
recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}
```

## Speech synthesis

Speech synthesis (aka text-to-speech, or tts) involves receiving synthesising text contained within an app to speech, and playing it out of a device's speaker or audio output connection.

The Web Speech API has a main controller interface for this — {{domxref("SpeechSynthesis")}} — plus a number of closely-related interfaces for representing text to be synthesised (known as utterances), voices to be used for the utterance, etc. Again, most OSes have some kind of speech synthesis system, which will be used by the API for this task as available.

### Demo

To show simple usage of Web speech synthesis, we've provided a demo called [Speak easy synthesis](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis). This includes a set of form controls for entering text to be synthesised, and setting the pitch, rate, and voice to use when the text is uttered. After you have entered your text, you can press <kbd>Enter</kbd>/<kbd>Return</kbd> to hear it spoken.

![UI of an app called speak easy synthesis. It has an input field in which to input text to be synthesised, slider controls to change the rate and pitch of the speech, and a drop down menu to choose between different voices.](speak-easy-synthesis.png)

To run the demo, you can clone (or [directly download](https://github.com/mdn/web-speech-api/archive/master.zip)) the Github repo it is part of, open the HTML index file in a supporting desktop browser, or navigate to the [live demo URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) in a supporting mobile browser like Chrome, or Firefox OS.

### Browser support

Support for Web Speech API speech synthesis is still getting there across mainstream browsers, and is currently limited to the following:

- Firefox desktop and mobile support it in Gecko 42+ (Windows)/44+, without prefixes, and it can be turned on by flipping the `media.webspeech.synth.enabled` flag to `true` in `about:config`.
- Firefox OS 2.5+ supports it, by default, and without the need for any permissions.
- Chrome for Desktop and Android have supported it since around version 33, without prefixes.

### HTML and CSS

The HTML and CSS are again pretty trivial, simply containing a title, some instructions for use, and a form with some simple controls. The {{htmlelement("select")}} element is initially empty, but is populated with {{htmlelement("option")}}s via JavaScript (see later on.)

```html
<h1>Speech synthesiser</h1>

<p>Enter some text in the input below and press return to hear it. change voices using the dropdown menu.</p>

<form>
  <input type="text" class="txt">
  <div>
    <label for="rate">Rate</label><input type="range" min="0.5" max="2" value="1" step="0.1" id="rate">
    <div class="rate-value">1</div>
    <div class="clearfix"></div>
  </div>
  <div>
    <label for="pitch">Pitch</label><input type="range" min="0" max="2" value="1" step="0.1" id="pitch">
    <div class="pitch-value">1</div>
    <div class="clearfix"></div>
  </div>
  <select>

  </select>
</form>
```

### JavaScript

Let's investigate the JavaScript that powers this app.

#### Setting variables

First of all, we capture references to all the DOM elements involved in the UI, but more interestingly, we capture a reference to {{domxref("Window.speechSynthesis")}}. This is API's entry point — it returns an instance of {{domxref("SpeechSynthesis")}}, the controller interface for web speech synthesis.

```js
var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');
var voiceSelect = document.querySelector('select');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');

var voices = [];
```

#### Populating the select element

To populate the {{htmlelement("select")}} element with the different voice options the device has available, we've written a `populateVoiceList()` function. We first invoke {{domxref("SpeechSynthesis.getVoices()")}}, which returns a list of all the available voices, represented by {{domxref("SpeechSynthesisVoice")}} objects. We then loop through this list — for each voice we create an {{htmlelement("option")}} element, set its text content to display the name of the voice (grabbed from {{domxref("SpeechSynthesisVoice.name")}}), the language of the voice (grabbed from {{domxref("SpeechSynthesisVoice.lang")}}), and `-- DEFAULT` if the voice is the default voice for the synthesis engine (checked by seeing if {{domxref("SpeechSynthesisVoice.default")}} returns `true`.)

We also create `data-` attributes for each option, containing the name and language of the associated voice, so we can grab them easily later on, and then append the options as children of the select.

```js
function populateVoiceList() {
  voices = synth.getVoices();

  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}
```

When we come to run the function, we do the following. This is because Firefox doesn't support {{domxref("SpeechSynthesis.onvoiceschanged")}}, and will just return a list of voices when {{domxref("SpeechSynthesis.getVoices()")}} is fired. With Chrome however, you have to wait for the event to fire before populating the list, hence the if statement seen below.

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### Speaking the entered text

Next, we create an event handler to start speaking the text entered into the text field. We are using an [onsubmit](/ja/docs/Web/API/GlobalEventHandlers/onsubmit) handler on the form so that the action happens when <kbd>Enter</kbd>/<kbd>Return</kbd> is pressed. We first create a new {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()", "SpeechSynthesisUtterance()")}} instance using its constructor — this is passed the text input's value as a parameter.

Next, we need to figure out which voice to use. We use the {{domxref("HTMLSelectElement")}} `selectedOptions` property to return the currently selected {{htmlelement("option")}} element. We then use this element's `data-name` attribute, finding the {{domxref("SpeechSynthesisVoice")}} object whose name matches this attribute's value. We set the matching voice object to be the value of the {{domxref("SpeechSynthesisUtterance.voice")}} property.

Finally, we set the {{domxref("SpeechSynthesisUtterance.pitch")}} and {{domxref("SpeechSynthesisUtterance.rate")}} to the values of the relevant range form elements. Then, with all necessary preparations made, we start the utterance being spoken by invoking {{domxref("SpeechSynthesis.speak()")}}, passing it the {{domxref("SpeechSynthesisUtterance")}} instance as a parameter.

```js
inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);
```

In the final part of the handler, we include an {{domxref("SpeechSynthesisUtterance.onpause")}} handler to demonstrate how {{domxref("SpeechSynthesisEvent")}} can be put to good use. When {{domxref("SpeechSynthesis.pause()")}} is invoked, this returns a message reporting the character number and name that the speech was paused at.

```js
   utterThis.onpause = function(event) {
    var char = event.utterance.text.charAt(event.charIndex);
    console.log('Speech paused at character ' + event.charIndex + ' of "' +
    event.utterance.text + '", which is "' + char + '".');
  }
```

Finally, we call [blur()](/ja/docs/Web/API/HTMLElement/blur) on the text input. This is mainly to hide the keyboard on Firefox OS.

```js
  inputTxt.blur();
}
```

#### Updating the displayed pitch and rate values

The last part of the code simply updates the `pitch`/`rate` values displayed in the UI, each time the slider positions are moved.

```js
pitch.onchange = function() {
  pitchValue.textContent = pitch.value;
}

rate.onchange = function() {
  rateValue.textContent = rate.value;
}
```
