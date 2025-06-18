---
title: ウェブ音声 API の使用
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
l10n:
  sourceCommit: d169fd2b21950bc0c0976ebbee74054692e33162
---

{{DefaultAPISidebar("Web Speech API")}}
ウェブ音声 API は、音声認識と音声合成（text to speech または tts としても知られています）という 2 つの異なる分野の機能を提供しており、アクセシビリティと制御メカニズムに興味深い新しい可能性をもたらします。この記事では、両方の分野の簡単な紹介とデモを提供します。

## 音声認識

音声認識では、端末のマイクを通して音声を受信し、音声認識サービスによって文法のリスト（基本的には特定のアプリで認識させたい語彙）と照合されます。単語や句が正常に認識されると、結果（または結果のリスト）がテキスト文字列として返され、その結果としてさらなるアクションを開始することができます。

ウェブ音声 API には、このための中心的な制御インターフェイスである {{domxref("SpeechRecognition")}} と、文法や結果などを表現するためのいくつかの密接に関連したインターフェイスがあります。一般的に、音声認識には端末上で利用可能な既定の音声認識システムが使用されます。最近のほとんどの OS には音声コマンドを発行するための音声認識システムが搭載されています。macOS の Dictation、iOS の Siri、Windows 10 の Cortana、Android の Speech などを想像してください。

> [!NOTE]
> Chrome などの一部のブラウザーでは、ウェブページで音声認識を使用するためにサーバーベースの認識エンジンが必要です。音声が認識処理のためにウェブサービスに送信されるため、オフラインでは機能しません。

### デモ

ウェブ音声認識の簡単な使い方を示すために、 [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) というデモを書いてみました。画面をタップ/クリックし、HTML の色のキーワードを言うと、アプリの背景色がその色に変わります。

![Speech Color changer というタイトルのアプリの UI。画面を内側へタップして色を言うと、アプリの背景をその色に変えてくれるというアプリです。この例では、背景を赤に変えています。](speech-color-changer.png)

デモを実行するには、 Chrome 等の対応しているモバイルブラウザーで[ライブデモの URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) に移動してください。

### ブラウザーの対応状況

ウェブ音声 API の音声認識のサポートは、通常 Chrome for Desktop と Android に限られています — Chrome はバージョン 33 付近からサポートしていますが、接頭辞付きのインターフェイスを使用しているため、 `webkitSpeechRecognition` などの接頭辞付きバージョンを含める必要があります。

### HTML と CSS

アプリの HTML と CSS は本当に簡単です。タイトル、説明段落、診断メッセージを出力する div があるだけです。

```html
<h1>Speech color changer</h1>
<p>Tap/click then say a color to change the background color of the app.</p>
<div>
  <p class="output"><em>…diagnostic messages</em></p>
</div>
```

この CSS では、他の端末でも問題なく見えるように、非常にシンプルなレスポンシブのスタイル付けをしています。

### JavaScript

JavaScript をもう少し詳しく見てみましょう。

#### Chrome 対応

前述したように、Chrome は現在接頭辞付きのプロパティで音声認識に対応しているので、適切なオブジェクトを Chrome に供給し、そして将来的な実装で接頭辞なしの機能をサポートする可能性も踏まえ、以下の行をコードの最初に追加しています。

```js
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
```

#### 文法

コードの次の部分では、アプリが認識する文法を定義します。次の変数は文法を保持するために定義されています。

```js
const colors = [
  "aqua",
  "azure",
  "beige",
  "bisque",
  "black",
  "blue",
  "brown",
  "chocolate",
  "coral" /* … */,
];
const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(
  " | ",
)};`;
```

使用されている文法形式は [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) です — それについての詳細はリンク先の仕様書を参照してください。しかし、今のところは手っ取り早く実行してみましょう。

- 行の区切りは JavaScript と同じようにセミコロンで区切られています。
- 最初の行 — `#JSGF V1.0;` — は、使用されているフォーマットとバージョンを示します。これは常に最初に含める必要があります。
- 2 行目は認識したい用語の種類を示します。`public` はパブリックルールであることを宣言し、角括弧内の文字列はこの用語の認識名 (`color`) を定義し、等号の後に続く項目のリストは、用語の適切な値として認識され受け入れられる代替値です。それぞれがパイプ文字で区切られていることに注意してください。
- 上記の構造に従ってそれぞれの行に好きなだけ多くの用語を定義することができ、かなり複雑な文法定義を記載することができます。この基本的なデモでは、単純にしています。

#### 文法を音声認識にプラグインする

次にやるべきことは、アプリケーションの認識を制御する音声認識インスタンスを定義することです。これは {{domxref("SpeechRecognition.SpeechRecognition()","SpeechRecognition()")}} コンストラクターを使用して行います。また、{{domxref("SpeechGrammarList.SpeechGrammarList()","SpeechGrammarList()")}} コンストラクターを使用して、文法を含む新しい音声文法リストも作成します。

```js
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
```

{{domxref("SpeechGrammarList.addFromString()")}} メソッドを使ってリストに `grammar` を追加します。 このメソッドは追加したい文字列を引数として受けとり、さらにオプションで、リスト内で利用可能な他の文法との関係においてこの文法の重要度を指定する重み値を受け取ります（0 から 1 までの範囲で指定できます）。追加された文法は{{domxref("SpeechGrammar")}} オブジェクトのインスタンスとしてリスト内で利用できます。

```js
speechRecognitionList.addFromString(grammar, 1);
```

次に、 {{domxref("SpeechGrammarList")}} を {{domxref("SpeechRecognition.grammars")}} プロパティの値として設定して、音声認識インスタンスに追加しています。他にも、認識インスタンスのプロパティをいくつか設定してから、次に移ります。

- {{domxref("SpeechRecognition.continuous")}}: 認識が開始されるたびに連続した結果をキャプチャする (`true`) か、または単一の結果だけをキャプチャする (`false`) かを制御します。
- {{domxref("SpeechRecognition.lang")}}: 認識の言語を設定します。これを設定することは良い習慣であるため、推奨されます。
- {{domxref("SpeechRecognition.interimResults")}}: 音声認識システムが中間的な結果を返すか、最終的な結果だけを返すか定義します。このシンプルなデモでは最終的な結果で十分です。
- {{domxref("SpeechRecognition.maxAlternatives")}}: 結果ごとに返される代替候補数を設定します。これは、結果が完全に明確ではなく、ユーザーが正しいものを選択できるように代替候補のリストを表示したい場合などに便利な場合があります。しかし、このシンプルなデモでは必要ないのでここでは 1 つだけ指定します（これは実際にはデフォルトです）。

```js
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### 音声認識の開始

出力先の {{htmlelement("div")}} と HTML 要素への参照を取得（診断メッセージを出力したり、後でアプリの背景色を更新したりできるようにするため）した後、画面がタップ/クリックされたときに音声認識サービスが開始されるように onclick ハンドラーを実装します。これは {{domxref("SpeechRecognition.start()")}} を呼び出すことで実現しています。 `forEach()` メソッドは何色を言っているかを示す色付きインジケーターを出力するために使われています。

```js
const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const hints = document.querySelector(".hints");

let colorHTML = "";
colors.forEach((color, i) => {
  console.log(color, i);
  colorHTML += `<span style="background-color:${color};"> ${color} </span>`;
});
hints.innerHTML = `Tap or click then say a color to change the background color of the app. Try ${colorHTML}.`;

document.body.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};
```

#### 結果の受け取りと処理

音声認識が開始されると、結果やその他の周辺情報を取得するために使用できる多くのイベントハンドラーがあります（[`SpeechRecognition` のイベント](/ja/docs/Web/API/SpeechRecognition#イベント) を参照してください）。最も一般的なものは {{domxref("SpeechRecognition.result_event", "result")}} イベントで、成功した結果を受信したときに発生します。

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

ここの 2 行目はちょっと複雑そうなので、順を追って説明していきましょう。{{domxref("SpeechRecognitionEvent.results")}}プロパティは、 {{domxref("SpeechRecognitionResult")}} オブジェクトを含む {{domxref("SpeechRecognitionResultList")}} オブジェクトを返します。これはゲッターを持っているので配列のようにアクセスでき、最初の `[0]` は 0 の位置にある `SpeechRecognitionResult` を返します。各 `SpeechRecognitionResult` オブジェクトには、個々に認識された単語を含む {{domxref("SpeechRecognitionAlternative")}} オブジェクトが含まれています。これらは配列のようにアクセスできるようにゲッターも持っています — 2 番目の `[0]` は、したがって位置 0 の `SpeechRecognitionAlternative` を返します。次に、その `transcript` プロパティを返して個々の認識結果を含む文字列を文字列として取得し、背景色をその色に設定し、認識された色を UI の診断メッセージとして報告します。

また、 {{domxref("SpeechRecognition.speechend_event", "speechend")}} イベントを使用して音声認識サービスの実行を停止します（1 つの単語が認識され、それが発話され終わったら {{domxref("SpeechRecognition.stop()")}}) を使用します）。

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### エラーや認識されない発話のハンドリング

最後の 2 つのハンドラは、定義された文法にない音声が認識されたケースやエラーが発生したケースを処理するためのものです。 {{domxref("SpeechRecognition.nomatch_event", "nomatch")}} は最初に言及したケースを処理することになっているようですが、今のところ正しく動作しているようには見えないことに注意してください（とにかく認識されたものを返すだけです）。

```js
recognition.onnomatch = (event) => {
  diagnostic.textContent = "I didn't recognize that color.";
};
```

{{domxref("SpeechRecognition.error_event", "error")}} は、認識に成功して実際にエラーが発生したケースを処理します — {{domxref("SpeechRecognitionErrorEvent.error")}} プロパティには、返された実際のエラーが含まれます。

```js
recognition.onerror = (event) => {
  diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
};
```

## 音声合成

音声合成 (別名 text-to-speech または tts) は、アプリ内のテキストを音声に合成し、機器のスピーカーまたは音声出力接続から再生することを指します。

ウェブ音声 API には、このための中心的な制御インターフェイス — {{domxref("SpeechSynthesis")}} があり、さらに、合成される（発話とも呼ばれる）テキスト、発話に使用される音声などを表現する、密接に関連した多数のインターフェイスがあります。繰り返しになりますが、ほとんどの OS は何らかの音声合成システムを保有しており、利用可能な場合はこのタスクのために API が使用されることになります。

### デモ

ウェブ音声合成の基本的な使い方を示すために、 [Speak easy synthesis](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) というデモを提供しています。これには、合成するテキストを入力し、テキストが発声されるときに使用する音程、速度、および音声を設定するための一連のフォームコントロールが記載されています。テキストを入力した後、 <kbd>Enter</kbd>/<kbd>Return</kbd> を押すと、そのテキストが発話されるのを聞くことができます。

![speak easy synthesis というアプリの UI。合成するテキストを入力する入力欄、音声の速度やピッチを制御するスライダーコントロール、異なる形を選ぶドロップダウンメニューがあります。](speak-easy-synthesis.png)

デモを実行するには、Chromeなどの対応しているモバイルブラウザーで[ライブデモの URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) に移動してください。

### ブラウザーの対応

Web Speech APIの音声合成への対応は、主流のブラウザーでまだ進んでおらず、現在では以下のものに限られています。

- Firefox のデスクトップ版とモバイル版では、 Gecko 42+ (Windows)/44+ で接頭辞なしで対応しており、`about:config` で `media.webspeech.synth.enabled` フラッグを `true` に切り替えることでオンにすることが可能です。
- Firefox OS 2.5+では既定で、何の権限も必要なく対応しています。
- Chrome のデスクトップ版と Android 版では、バージョン 33 あたりから接頭辞なしで対応しています。

### HTML と CSS

HTMLとCSSは、タイトル、使用されるためのいくつかの指示、およびいくつかの単純なコントロールを持つ形式を含む、これもとても単純なものです。 {{htmlelement("select")}} 要素は最初は空ですが、JavaScript で {{htmlelement("option")}} を入力しています（後述します）。

```html
<h1>Speech synthesizer</h1>

<p>
  Enter some text in the input below and press return to hear it. change voices
  using the dropdown menu.
</p>

<form>
  <input type="text" class="txt" />
  <div>
    <label for="rate">Rate</label
    ><input type="range" min="0.5" max="2" value="1" step="0.1" id="rate" />
    <div class="rate-value">1</div>
    <div class="clearfix"></div>
  </div>
  <div>
    <label for="pitch">Pitch</label
    ><input type="range" min="0" max="2" value="1" step="0.1" id="pitch" />
    <div class="pitch-value">1</div>
    <div class="clearfix"></div>
  </div>
  <select></select>
</form>
```

### JavaScript

このアプリを動かしている JavaScript を調べてみましょう。

#### 変数の設定

まず最初に、UI に関係するすべての DOM 要素への参照を取得しますが、より興味深いのは {{domxref("Window.speechSynthesis")}} への参照を取得することです。これは API のエントリーポイントであり、ウェブ音声合成の制御インターフェイスである {{domxref("SpeechSynthesis")}} のインスタンスを返します。

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");

const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

const voices = [];
```

#### select 要素の生成

{{htmlelement("select")}} 要素に端末が利用できる様々な音声オプションを入力するために、 `populateVoiceList()` 関数を書きました。最初に {{domxref("SpeechSynthesis.getVoices()")}} を呼び出し、 {{domxref("SpeechSynthesisVoice")}} オブジェクトで表される、利用できるすべての音声のリストを返します。次に、このリストを走査します。 それぞれの音声に対して {{htmlelement("option")}} 要素を作成し、そのテキストコンテンツを音声の名前（{{domxref("SpeechSynthesisVoice.name")}} から取得）、音声の言語（{{domxref("SpeechSynthesisVoice.lang")}} から取得）、音声が合成エンジンの既定の音声であれば `-- DEFAULT` （{{domxref("SpeechSynthesisVoice.default")}} が `true` を返しているかを調べることにより確認できます）を表示するよう設定します。

また、 option ごとに `data-` 属性を作成し、そこに音声の名前と言語を格納して、後で簡単に取得できるようにします。そして、その option を select の子として追加します。

```js
function populateVoiceList() {
  voices = synth.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
}
```

この関数を実行するようになったら、以下のようにします。これは、 Firefox が {{domxref("SpeechSynthesis.voiceschanged_event", "voiceschanged")}} イベントに対応しておらず、 {{domxref("SpeechSynthesis.getVoices()")}} が発行されると声のリストを返すだけになってしまうためです。しかし、 Chrome では、イベントが発行されるのを待ってからリストを作成する必要があるため、下記のような if 文を記載しています。

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### 入力されたテキストの発話

次に、テキストフィールドに入力されたテキストを話し始めるためのイベントハンドラーを作成します。 <kbd>Enter</kbd>/<kbd>Return</kbd> が押されたときにアクションが起こるように、フォームで [onsubmit](/ja/docs/Web/API/HTMLFormElement/submit_event) ハンドラーを使用しています。まず、コンストラクターを使用して新しい {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()", "SpeechSynthesisUtterance()")}} インスタンスを作成し、引数としてテキスト入力の値が渡されます。

次に、どの音声を使用するかを考える必要があります。ここでは {{domxref("HTMLSelectElement")}} の `selectedOptions` プロパティを使って、現在選択されている {{htmlelement("option")}} 要素を返します。次に、この要素の `data-name` 属性を使用して、この属性の値と一致する名前を持つ {{domxref("SpeechSynthesisVoice")}} オブジェクトを探します。一致する音声オブジェクトを{{domxref("SpeechSynthesisUtterance.voice")}}プロパティの値として設定します。

最後に、 {{domxref("SpeechSynthesisUtterance.pitch")}} と {{domxref("SpeechSynthesisUtterance.rate")}} に、該当する範囲のフォーム要素の値を設定しています。そして、すべての準備が整ったところで、 {{domxref("SpeechSynthesis.speak()")}} を呼び出して、 {{domxref("SpeechSynthesisUtterance")}} インスタンスを引数に渡して発話を始めます。

```js
inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (const voice of voices) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);
```

ハンドラーの最後の部分では、 {{domxref("SpeechSynthesisUtterance.pause_event", "pause")}} イベントを記述して、 {{domxref("SpeechSynthesisEvent")}} がいかに有益な用途で使用できるかを示しています。 {{domxref("SpeechSynthesis.pause()")}} が呼び出されると、音声が一時停止された文字番号と名前を報告するメッセージを返します。

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  console.log(
    `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
  );
};
```

最後に、テキスト入力に対して [blur()](/ja/docs/Web/API/HTMLElement/blur) を呼び出しています。これは主に Firefox OS 上でキーボードを隠すためのものです。

```js
  inputTxt.blur();
}
```

#### 表示されているピッチとレートの値の更新

コードの最後の部分では、スライダーの位置が移動されるたびに、 UI に表示される `pitch`/`rate` 値を更新しています。

```js
pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
```
