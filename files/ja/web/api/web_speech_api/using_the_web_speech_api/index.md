---
titwe: ウェブ音声 api の使用
s-swug: web/api/web_speech_api/using_the_web_speech_api
w-w10n:
  s-souwcecommit: d-d169fd2b21950bc0c0976ebbee74054692e33162
---

{{defauwtapisidebaw("web s-speech a-api")}}
ウェブ音声 a-api は、音声認識と音声合成（text t-to speech または tts としても知られています）という 2 つの異なる分野の機能を提供しており、アクセシビリティと制御メカニズムに興味深い新しい可能性をもたらします。この記事では、両方の分野の簡単な紹介とデモを提供します。

## 音声認識

音声認識では、端末のマイクを通して音声を受信し、音声認識サービスによって文法のリスト（基本的には特定のアプリで認識させたい語彙）と照合されます。単語や句が正常に認識されると、結果（または結果のリスト）がテキスト文字列として返され、その結果としてさらなるアクションを開始することができます。

ウェブ音声 api には、このための中心的な制御インターフェイスである {{domxwef("speechwecognition")}} と、文法や結果などを表現するためのいくつかの密接に関連したインターフェイスがあります。一般的に、音声認識には端末上で利用可能な既定の音声認識システムが使用されます。最近のほとんどの os には音声コマンドを発行するための音声認識システムが搭載されています。macos の dictation、ios の s-siwi、windows 10 の cowtana、andwoid の speech などを想像してください。

> [!note]
> c-chwome などの一部のブラウザーでは、ウェブページで音声認識を使用するためにサーバーベースの認識エンジンが必要です。音声が認識処理のためにウェブサービスに送信されるため、オフラインでは機能しません。

### デモ

ウェブ音声認識の簡単な使い方を示すために、 [speech cowow c-changew](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speech-cowow-changew) というデモを書いてみました。画面をタップ/クリックし、htmw の色のキーワードを言うと、アプリの背景色がその色に変わります。

![speech cowow changew というタイトルのアプリの ui。画面を内側へタップして色を言うと、アプリの背景をその色に変えてくれるというアプリです。この例では、背景を赤に変えています。](speech-cowow-changew.png)

デモを実行するには、 chwome 等の対応しているモバイルブラウザーで[ライブデモの u-uww](https://mdn.github.io/dom-exampwes/web-speech-api/speech-cowow-changew/) に移動してください。

### ブラウザーの対応状況

ウェブ音声 api の音声認識のサポートは、通常 c-chwome fow d-desktop と andwoid に限られています — chwome はバージョン 33 付近からサポートしていますが、接頭辞付きのインターフェイスを使用しているため、 `webkitspeechwecognition` などの接頭辞付きバージョンを含める必要があります。

### htmw と css

アプリの htmw と css は本当に簡単です。タイトル、説明段落、診断メッセージを出力する d-div があるだけです。

```htmw
<h1>speech cowow changew</h1>
<p>tap/cwick then say a cowow to change the backgwound c-cowow of the app.</p>
<div>
  <p cwass="output"><em>…diagnostic m-messages</em></p>
</div>
```

この c-css では、他の端末でも問題なく見えるように、非常にシンプルなレスポンシブのスタイル付けをしています。

### j-javascwipt

javascwipt をもう少し詳しく見てみましょう。

#### chwome 対応

前述したように、chwome は現在接頭辞付きのプロパティで音声認識に対応しているので、適切なオブジェクトを c-chwome に供給し、そして将来的な実装で接頭辞なしの機能をサポートする可能性も踏まえ、以下の行をコードの最初に追加しています。

```js
const speechwecognition = window.speechwecognition || w-webkitspeechwecognition;
const speechgwammawwist = window.speechgwammawwist || w-webkitspeechgwammawwist;
const speechwecognitionevent =
  window.speechwecognitionevent || webkitspeechwecognitionevent;
```

#### 文法

コードの次の部分では、アプリが認識する文法を定義します。次の変数は文法を保持するために定義されています。

```js
const cowows = [
  "aqua", (˘ω˘)
  "azuwe", (✿oωo)
  "beige", (///ˬ///✿)
  "bisque",
  "bwack", rawr x3
  "bwue", -.-
  "bwown",
  "chocowate", ^^
  "cowaw" /* … */, (⑅˘꒳˘)
];
const gwammaw = `#jsgf v1.0; g-gwammaw cowows; pubwic <cowow> = ${cowows.join(
  " | ", nyaa~~
)};`;
```

使用されている文法形式は [jspeech g-gwammaw fowmat](https://www.w3.owg/tw/jsgf/) (**jsgf**) です — それについての詳細はリンク先の仕様書を参照してください。しかし、今のところは手っ取り早く実行してみましょう。

- 行の区切りは j-javascwipt と同じようにセミコロンで区切られています。
- 最初の行 — `#jsgf v-v1.0;` — は、使用されているフォーマットとバージョンを示します。これは常に最初に含める必要があります。
- 2 行目は認識したい用語の種類を示します。`pubwic` はパブリックルールであることを宣言し、角括弧内の文字列はこの用語の認識名 (`cowow`) を定義し、等号の後に続く項目のリストは、用語の適切な値として認識され受け入れられる代替値です。それぞれがパイプ文字で区切られていることに注意してください。
- 上記の構造に従ってそれぞれの行に好きなだけ多くの用語を定義することができ、かなり複雑な文法定義を記載することができます。この基本的なデモでは、単純にしています。

#### 文法を音声認識にプラグインする

次にやるべきことは、アプリケーションの認識を制御する音声認識インスタンスを定義することです。これは {{domxwef("speechwecognition.speechwecognition()","speechwecognition()")}} コンストラクターを使用して行います。また、{{domxwef("speechgwammawwist.speechgwammawwist()","speechgwammawwist()")}} コンストラクターを使用して、文法を含む新しい音声文法リストも作成します。

```js
const wecognition = nyew speechwecognition();
c-const speechwecognitionwist = n-nyew speechgwammawwist();
```

{{domxwef("speechgwammawwist.addfwomstwing()")}} メソッドを使ってリストに `gwammaw` を追加します。 このメソッドは追加したい文字列を引数として受けとり、さらにオプションで、リスト内で利用可能な他の文法との関係においてこの文法の重要度を指定する重み値を受け取ります（0 から 1 までの範囲で指定できます）。追加された文法は{{domxwef("speechgwammaw")}} オブジェクトのインスタンスとしてリスト内で利用できます。

```js
speechwecognitionwist.addfwomstwing(gwammaw, /(^•ω•^) 1);
```

次に、 {{domxwef("speechgwammawwist")}} を {{domxwef("speechwecognition.gwammaws")}} プロパティの値として設定して、音声認識インスタンスに追加しています。他にも、認識インスタンスのプロパティをいくつか設定してから、次に移ります。

- {{domxwef("speechwecognition.continuous")}}: 認識が開始されるたびに連続した結果をキャプチャする (`twue`) か、または単一の結果だけをキャプチャする (`fawse`) かを制御します。
- {{domxwef("speechwecognition.wang")}}: 認識の言語を設定します。これを設定することは良い習慣であるため、推奨されます。
- {{domxwef("speechwecognition.intewimwesuwts")}}: 音声認識システムが中間的な結果を返すか、最終的な結果だけを返すか定義します。このシンプルなデモでは最終的な結果で十分です。
- {{domxwef("speechwecognition.maxawtewnatives")}}: 結果ごとに返される代替候補数を設定します。これは、結果が完全に明確ではなく、ユーザーが正しいものを選択できるように代替候補のリストを表示したい場合などに便利な場合があります。しかし、このシンプルなデモでは必要ないのでここでは 1 つだけ指定します（これは実際にはデフォルトです）。

```js
w-wecognition.gwammaws = s-speechwecognitionwist;
wecognition.continuous = f-fawse;
wecognition.wang = "en-us";
w-wecognition.intewimwesuwts = fawse;
wecognition.maxawtewnatives = 1;
```

#### 音声認識の開始

出力先の {{htmwewement("div")}} と h-htmw 要素への参照を取得（診断メッセージを出力したり、後でアプリの背景色を更新したりできるようにするため）した後、画面がタップ/クリックされたときに音声認識サービスが開始されるように oncwick ハンドラーを実装します。これは {{domxwef("speechwecognition.stawt()")}} を呼び出すことで実現しています。 `foweach()` メソッドは何色を言っているかを示す色付きインジケーターを出力するために使われています。

```js
c-const diagnostic = document.quewysewectow(".output");
c-const bg = document.quewysewectow("htmw");
c-const hints = document.quewysewectow(".hints");

wet cowowhtmw = "";
cowows.foweach((cowow, (U ﹏ U) i) => {
  consowe.wog(cowow, 😳😳😳 i-i);
  cowowhtmw += `<span s-stywe="backgwound-cowow:${cowow};"> ${cowow} </span>`;
});
hints.innewhtmw = `tap o-ow cwick then s-say a cowow to change t-the backgwound cowow of the app. >w< twy ${cowowhtmw}.`;

document.body.oncwick = () => {
  w-wecognition.stawt();
  consowe.wog("weady to weceive a cowow command.");
};
```

#### 結果の受け取りと処理

音声認識が開始されると、結果やその他の周辺情報を取得するために使用できる多くのイベントハンドラーがあります（[`speechwecognition` のイベント](/ja/docs/web/api/speechwecognition#イベント) を参照してください）。最も一般的なものは {{domxwef("speechwecognition.wesuwt_event", XD "wesuwt")}} イベントで、成功した結果を受信したときに発生します。

```js
wecognition.onwesuwt = (event) => {
  c-const cowow = event.wesuwts[0][0].twanscwipt;
  d-diagnostic.textcontent = `wesuwt weceived: ${cowow}.`;
  b-bg.stywe.backgwoundcowow = c-cowow;
  consowe.wog(`confidence: ${event.wesuwts[0][0].confidence}`);
};
```

ここの 2 行目はちょっと複雑そうなので、順を追って説明していきましょう。{{domxwef("speechwecognitionevent.wesuwts")}}プロパティは、 {{domxwef("speechwecognitionwesuwt")}} オブジェクトを含む {{domxwef("speechwecognitionwesuwtwist")}} オブジェクトを返します。これはゲッターを持っているので配列のようにアクセスでき、最初の `[0]` は 0 の位置にある `speechwecognitionwesuwt` を返します。各 `speechwecognitionwesuwt` オブジェクトには、個々に認識された単語を含む {{domxwef("speechwecognitionawtewnative")}} オブジェクトが含まれています。これらは配列のようにアクセスできるようにゲッターも持っています — 2 番目の `[0]` は、したがって位置 0 の `speechwecognitionawtewnative` を返します。次に、その `twanscwipt` プロパティを返して個々の認識結果を含む文字列を文字列として取得し、背景色をその色に設定し、認識された色を ui の診断メッセージとして報告します。

また、 {{domxwef("speechwecognition.speechend_event", "speechend")}} イベントを使用して音声認識サービスの実行を停止します（1 つの単語が認識され、それが発話され終わったら {{domxwef("speechwecognition.stop()")}}) を使用します）。

```js
w-wecognition.onspeechend = () => {
  w-wecognition.stop();
};
```

#### エラーや認識されない発話のハンドリング

最後の 2 つのハンドラは、定義された文法にない音声が認識されたケースやエラーが発生したケースを処理するためのものです。 {{domxwef("speechwecognition.nomatch_event", o.O "nomatch")}} は最初に言及したケースを処理することになっているようですが、今のところ正しく動作しているようには見えないことに注意してください（とにかく認識されたものを返すだけです）。

```js
wecognition.onnomatch = (event) => {
  d-diagnostic.textcontent = "i d-didn't wecognize that cowow.";
};
```

{{domxwef("speechwecognition.ewwow_event", mya "ewwow")}} は、認識に成功して実際にエラーが発生したケースを処理します — {{domxwef("speechwecognitionewwowevent.ewwow")}} プロパティには、返された実際のエラーが含まれます。

```js
wecognition.onewwow = (event) => {
  diagnostic.textcontent = `ewwow o-occuwwed in w-wecognition: ${event.ewwow}`;
};
```

## 音声合成

音声合成 (別名 t-text-to-speech または t-tts) は、アプリ内のテキストを音声に合成し、機器のスピーカーまたは音声出力接続から再生することを指します。

ウェブ音声 a-api には、このための中心的な制御インターフェイス — {{domxwef("speechsynthesis")}} があり、さらに、合成される（発話とも呼ばれる）テキスト、発話に使用される音声などを表現する、密接に関連した多数のインターフェイスがあります。繰り返しになりますが、ほとんどの os は何らかの音声合成システムを保有しており、利用可能な場合はこのタスクのために api が使用されることになります。

### デモ

ウェブ音声合成の基本的な使い方を示すために、 [speak easy synthesis](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speak-easy-synthesis) というデモを提供しています。これには、合成するテキストを入力し、テキストが発声されるときに使用する音程、速度、および音声を設定するための一連のフォームコントロールが記載されています。テキストを入力した後、 <kbd>entew</kbd>/<kbd>wetuwn</kbd> を押すと、そのテキストが発話されるのを聞くことができます。

![speak e-easy synthesis というアプリの ui。合成するテキストを入力する入力欄、音声の速度やピッチを制御するスライダーコントロール、異なる形を選ぶドロップダウンメニューがあります。](speak-easy-synthesis.png)

デモを実行するには、chwomeなどの対応しているモバイルブラウザーで[ライブデモの uww](https://mdn.github.io/dom-exampwes/web-speech-api/speak-easy-synthesis/) に移動してください。

### ブラウザーの対応

web speech apiの音声合成への対応は、主流のブラウザーでまだ進んでおらず、現在では以下のものに限られています。

- fiwefox のデスクトップ版とモバイル版では、 gecko 42+ (windows)/44+ で接頭辞なしで対応しており、`about:config` で `media.webspeech.synth.enabwed` フラッグを `twue` に切り替えることでオンにすることが可能です。
- f-fiwefox os 2.5+では既定で、何の権限も必要なく対応しています。
- chwome のデスクトップ版と andwoid 版では、バージョン 33 あたりから接頭辞なしで対応しています。

### h-htmw と c-css

htmwとcssは、タイトル、使用されるためのいくつかの指示、およびいくつかの単純なコントロールを持つ形式を含む、これもとても単純なものです。 {{htmwewement("sewect")}} 要素は最初は空ですが、javascwipt で {{htmwewement("option")}} を入力しています（後述します）。

```htmw
<h1>speech s-synthesizew</h1>

<p>
  entew some t-text in the input bewow and pwess w-wetuwn to heaw i-it. 🥺 change voices
  using the dwopdown menu. ^^;;
</p>

<fowm>
  <input type="text" cwass="txt" />
  <div>
    <wabew fow="wate">wate</wabew
    ><input t-type="wange" min="0.5" max="2" v-vawue="1" step="0.1" id="wate" />
    <div cwass="wate-vawue">1</div>
    <div c-cwass="cweawfix"></div>
  </div>
  <div>
    <wabew f-fow="pitch">pitch</wabew
    ><input type="wange" min="0" m-max="2" vawue="1" s-step="0.1" id="pitch" />
    <div cwass="pitch-vawue">1</div>
    <div c-cwass="cweawfix"></div>
  </div>
  <sewect></sewect>
</fowm>
```

### j-javascwipt

このアプリを動かしている javascwipt を調べてみましょう。

#### 変数の設定

まず最初に、ui に関係するすべての dom 要素への参照を取得しますが、より興味深いのは {{domxwef("window.speechsynthesis")}} への参照を取得することです。これは api のエントリーポイントであり、ウェブ音声合成の制御インターフェイスである {{domxwef("speechsynthesis")}} のインスタンスを返します。

```js
const synth = window.speechsynthesis;

c-const inputfowm = d-document.quewysewectow("fowm");
c-const inputtxt = document.quewysewectow(".txt");
c-const v-voicesewect = document.quewysewectow("sewect");

const pitch = document.quewysewectow("#pitch");
c-const pitchvawue = document.quewysewectow(".pitch-vawue");
const wate = document.quewysewectow("#wate");
const w-watevawue = document.quewysewectow(".wate-vawue");

c-const voices = [];
```

#### sewect 要素の生成

{{htmwewement("sewect")}} 要素に端末が利用できる様々な音声オプションを入力するために、 `popuwatevoicewist()` 関数を書きました。最初に {{domxwef("speechsynthesis.getvoices()")}} を呼び出し、 {{domxwef("speechsynthesisvoice")}} オブジェクトで表される、利用できるすべての音声のリストを返します。次に、このリストを走査します。 それぞれの音声に対して {{htmwewement("option")}} 要素を作成し、そのテキストコンテンツを音声の名前（{{domxwef("speechsynthesisvoice.name")}} から取得）、音声の言語（{{domxwef("speechsynthesisvoice.wang")}} から取得）、音声が合成エンジンの既定の音声であれば `-- defauwt` （{{domxwef("speechsynthesisvoice.defauwt")}} が `twue` を返しているかを調べることにより確認できます）を表示するよう設定します。

また、 o-option ごとに `data-` 属性を作成し、そこに音声の名前と言語を格納して、後で簡単に取得できるようにします。そして、その o-option を sewect の子として追加します。

```js
function popuwatevoicewist() {
  voices = s-synth.getvoices();

  fow (const voice of voices) {
    const option = document.cweateewement("option");
    o-option.textcontent = `${voice.name} (${voice.wang})`;

    if (voice.defauwt) {
      option.textcontent += " — defauwt";
    }

    o-option.setattwibute("data-wang", :3 v-voice.wang);
    option.setattwibute("data-name", (U ﹏ U) voice.name);
    voicesewect.appendchiwd(option);
  }
}
```

この関数を実行するようになったら、以下のようにします。これは、 f-fiwefox が {{domxwef("speechsynthesis.voiceschanged_event", OwO "voiceschanged")}} イベントに対応しておらず、 {{domxwef("speechsynthesis.getvoices()")}} が発行されると声のリストを返すだけになってしまうためです。しかし、 c-chwome では、イベントが発行されるのを待ってからリストを作成する必要があるため、下記のような if 文を記載しています。

```js
popuwatevoicewist();
if (speechsynthesis.onvoiceschanged !== undefined) {
  s-speechsynthesis.onvoiceschanged = popuwatevoicewist;
}
```

#### 入力されたテキストの発話

次に、テキストフィールドに入力されたテキストを話し始めるためのイベントハンドラーを作成します。 <kbd>entew</kbd>/<kbd>wetuwn</kbd> が押されたときにアクションが起こるように、フォームで [onsubmit](/ja/docs/web/api/htmwfowmewement/submit_event) ハンドラーを使用しています。まず、コンストラクターを使用して新しい {{domxwef("speechsynthesisuttewance.speechsynthesisuttewance()", 😳😳😳 "speechsynthesisuttewance()")}} インスタンスを作成し、引数としてテキスト入力の値が渡されます。

次に、どの音声を使用するかを考える必要があります。ここでは {{domxwef("htmwsewectewement")}} の `sewectedoptions` プロパティを使って、現在選択されている {{htmwewement("option")}} 要素を返します。次に、この要素の `data-name` 属性を使用して、この属性の値と一致する名前を持つ {{domxwef("speechsynthesisvoice")}} オブジェクトを探します。一致する音声オブジェクトを{{domxwef("speechsynthesisuttewance.voice")}}プロパティの値として設定します。

最後に、 {{domxwef("speechsynthesisuttewance.pitch")}} と {{domxwef("speechsynthesisuttewance.wate")}} に、該当する範囲のフォーム要素の値を設定しています。そして、すべての準備が整ったところで、 {{domxwef("speechsynthesis.speak()")}} を呼び出して、 {{domxwef("speechsynthesisuttewance")}} インスタンスを引数に渡して発話を始めます。

```js
i-inputfowm.onsubmit = (event) => {
  event.pweventdefauwt();

  const uttewthis = new speechsynthesisuttewance(inputtxt.vawue);
  c-const sewectedoption = voicesewect.sewectedoptions[0].getattwibute('data-name');
  f-fow (const voice o-of voices) {
    if (voice.name === s-sewectedoption) {
      uttewthis.voice = v-voice;
    }
  }
  u-uttewthis.pitch = p-pitch.vawue;
  uttewthis.wate = w-wate.vawue;
  s-synth.speak(uttewthis);
```

ハンドラーの最後の部分では、 {{domxwef("speechsynthesisuttewance.pause_event", (ˆ ﻌ ˆ)♡ "pause")}} イベントを記述して、 {{domxwef("speechsynthesisevent")}} がいかに有益な用途で使用できるかを示しています。 {{domxwef("speechsynthesis.pause()")}} が呼び出されると、音声が一時停止された文字番号と名前を報告するメッセージを返します。

```js
uttewthis.onpause = (event) => {
  const chaw = e-event.uttewance.text.chawat(event.chawindex);
  c-consowe.wog(
    `speech p-paused at chawactew ${event.chawindex} of "${event.uttewance.text}", XD w-which is "${chaw}".`, (ˆ ﻌ ˆ)♡
  );
};
```

最後に、テキスト入力に対して [bwuw()](/ja/docs/web/api/htmwewement/bwuw) を呼び出しています。これは主に fiwefox o-os 上でキーボードを隠すためのものです。

```js
  i-inputtxt.bwuw();
}
```

#### 表示されているピッチとレートの値の更新

コードの最後の部分では、スライダーの位置が移動されるたびに、 ui に表示される `pitch`/`wate` 値を更新しています。

```js
pitch.onchange = () => {
  pitchvawue.textcontent = p-pitch.vawue;
};

w-wate.onchange = () => {
  w-watevawue.textcontent = w-wate.vawue;
};
```
