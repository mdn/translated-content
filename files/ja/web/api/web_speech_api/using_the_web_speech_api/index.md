---
title: ウェブ音声 API の使用
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

{{DefaultAPISidebar("Web Speech API")}}

ウェブ音声 API は、音声認識と音声合成（text to speech または TTS としても知られています）という 2 つの異なる分野の機能を提供しており、アクセシビリティと制御に興味深い新しい可能性をもたらします。この記事では、両方の分野の紹介とデモを提供します。

## 音声認識

音声認識では、端末のマイク（または音声トラック）から音声を受け取り、それを音声認識サービスで調べます。サービスが単語やフレーズを正しく認識すると、さらなる操作を起動するために使用できるテキスト文字列（または文字列のリスト）が返されます。

ウェブ音声 API には、このための中心的な制御インターフェイスである {{domxref("SpeechRecognition")}} と、文法や結果などを表現するためのいくつかの密接に関連したインターフェイスがあります。

通常、音声認識には、ユーザーの端末に搭載されている音声認識システムが使用されます。現行のオペレーティングシステムのほとんどには、macOS の **Dictation** や Windows の **Copilot** など、音声コマンドを実行するための音声認識システムが備わっています。

一部のブラウザーでは、ウェブページで音声認識を使用するためにサーバーベースの認識エンジンが必要です。音声が認識処理のためにウェブサービスに送信されるため、オフラインでは機能しません。

プライバシーとパフォーマンスを改善するため、音声認識を端末上で実行するように指定します。これにより、音声データも文字起こしされた会話も、処理のためにサードパーティのサービスに送信されることはなくなります。端末上での機能については、[端末上での音声認識](#on-device_speech_recognition)の節で詳しく取り上げます。

### デモ

ウェブ音声認識の簡単な使い方を示すために、 [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer) というデモを書いてみました。画面をタップ/クリックし、HTML の色のキーワードを言うと、アプリの背景色がその色に変わります。

![Speech Color changer というタイトルのアプリの UI。画面を内側へタップして色を言うと、アプリの背景をその色に変えてくれるというアプリです。この例では、背景を赤に変えています。](speech-color-changer.png)

デモを実行するには、[ライブデモの URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) に[対応しているブラウザー](/ja/docs/Web/API/SpeechRecognition#ブラウザーの互換性)でアクセスしてください。

### HTML と CSS

このアプリの HTML と CSS は基本的なものです。タイトル、説明文の段落 ({{htmlelement("p")}})、制御ボタン ({{htmlelement("button")}})、そしてアプリが認識した単語を含む診断メッセージを表示させる出力用段落があります。

```html
<h1>Speech color changer</h1>

<p class="hints"></p>

<button>Start recognition</button>

<p class="output"><em>...diagnostic messages</em></p>
```

この CSS では、他の端末でも問題なく見えるように、基本的なレスポンシブのスタイル付けをしています。

### JavaScript

JavaScript をもう少し詳しく見てみましょう。

#### 接頭辞付きプロパティ

現在、一部のブラウザーでは、接頭辞つきプロパティで音声認識に対応しています。
そのため、コードの冒頭で、接頭辞をつけたプロパティと、接頭辞のないバージョンの両方を扱うことができるように、以下の行を記述します。

```js
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
```

#### 色リスト

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
  "coral",
  // …
];
```

#### 音声認識インスタンスの作成

次にやるべきことは、アプリケーションの認識を制御する音声認識インスタンスを定義することです。これは {{domxref("SpeechRecognition.SpeechRecognition()","SpeechRecognition()")}} コンストラクターを使用して行います。

```js
const recognition = new SpeechRecognition();
```

次に、認識インスタンスのいくつかのプロパティを設定します。

- {{domxref("SpeechRecognition.continuous")}}: 認識が開始されるたびに連続した結果をキャプチャする (`true`) か、または単一の結果だけをキャプチャする (`false`) かを制御します。
- {{domxref("SpeechRecognition.lang")}}: 認識の言語を設定します。このことを明示的に設定することが、推奨される最善の手法です。
- {{domxref("SpeechRecognition.interimResults")}}: 音声認識システムが中間的な結果を返すか、最終的な結果だけを返すか定義します。このデモでは、最終的な結果で十分です。
- {{domxref("SpeechRecognition.maxAlternatives")}}: 結果ごとに返される代替候補数を設定します。これは、たとえば結果が完全には明確ではなく、ユーザーが選択できる候補の一覧を表示したい場合などに役立つことがあります。しかし、このデモでは必要ないため、ここでは 1 つだけ指定します（これはデフォルトの設定です）。

```js
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### 音声認識の開始

出力段落、`<html>` 要素、説明文、および `<button>` への参照を取得した後、`onclick` ハンドラーを実装します。ユーザーがボタンを押すと、{{domxref("SpeechRecognition.start()")}} を呼び出すことで音声認識サービスが開始されます。また、`forEach()` メソッドを使用して、ユーザーが発声できる色を示す色付きのインジケーターを出力しています。

```js
const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const hints = document.querySelector(".hints");
const startBtn = document.querySelector("button");

const colorHTML = colors
  .map((v) => `<span style="background-color:${v};">${v}</span>`)
  .join("");
hints.innerHTML = `Press the button then say a color to change the background color of the app. Try ${colorHTML}.`;

startBtn.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};
```

#### 結果の受け取りと処理

音声認識が開始されると、いくつものイベントハンドラーが利用できるようになり、結果やその他の関連情報を受け取るために使うことができます（`SpeechRecognition` の[イベント](/ja/docs/Web/API/SpeechRecognition#イベント)を参照してください）。最も一般的なものは {{domxref("SpeechRecognition.result_event", "result")}} イベントで、成功した結果を受信したときに発生します。

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

ここの 2 行目はちょっと複雑そうなので、順を追って説明していきましょう。

- {{domxref("SpeechRecognitionEvent.results")}} プロパティは、{{domxref("SpeechRecognitionResult")}} オブジェクトを含む {{domxref("SpeechRecognitionResultList")}} オブジェクトを返します。これはゲッターを持っているので配列のようにアクセスでき、最初の `[0]` は `0` の位置にある `SpeechRecognitionResult` を返します。
- 各 `SpeechRecognitionResult` オブジェクトには、個々に認識された単語を含む {{domxref("SpeechRecognitionAlternative")}} オブジェクトが含まれています。これらは配列のようにアクセスできるようにゲッターも持っています — 2 番目の `[0]` は、したがって位置 `0` の `SpeechRecognitionAlternative` を返します。
- `SpeechRecognitionAlternative` の `transcript` プロパティは、認識されたテキストを含む文字列を返します。この値は、背景色を認識された色に設定するために使用されるほか、UI 上で診断メッセージとして表示されることもあります。

また、1 つの単語が認識された後に、{{domxref("SpeechRecognition.speechend_event", "speechend")}} イベントを使用して、（{{domxref("SpeechRecognition.stop()")}} により）音声認識サービスを停止します。

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### エラーや認識されない発話の処理

最後の 2 つのハンドラーは、発話された用語が認識されなかった場合や、認識中にエラーが発生した場合を扱います。{{domxref("SpeechRecognition.nomatch_event", "nomatch")}} イベントは前者のケースを処理するためのものですが、ほとんどの場合、たとえ意味不明なものであっても、認識エンジンは何らかの結果を返すことになります。

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

## 端末上の音声認識

音声認識は通常、オンラインサービスを利用して行われます。つまり、音声記録がサーバーに送信されて処理され、その結果がブラウザーに返される仕組みです。これにはいくつかの問題があります。

- プライバシー：多くのユーザーは、自分の音声がサーバーに送信されることに抵抗を感じています。
- パフォーマンス：認識のたびにデータをサーバーに送信すると、負荷の高いアプリケーションではパフォーマンスが低下する恐れがあり、またアプリがオフラインでは動作しなくなります。

これらの問題を軽減するため、ウェブ音声APIでは、音声認識をブラウザー上で端末内処理として実行するよう指定することができます。これには、認識対象とする各言語ごとに、言語パックを1回だけダウンロードする必要があります。インストールが完了すれば、オフラインでもこの機能を利用できるようになります。

この節で、端末内音声認識の使用方法について説明します。

### デモ

デバイス上での音声認識を実演するために、[On-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) というサンプルアプリを作成しました （[デモを実際に実行する](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)）。

このデモは、先ほど説明したオンラインの音声カラーチェンジャーデモと非常に似た仕組みで動作しますが、以下の点が異なります。

> [!NOTE]
> 当初の音声色変更デモでは、ウェブ音声 API をベンダー接頭辞付きのプロパティでのみ対応するブラウザーに対応するため、追加のコード行を盛り込んでいました（詳細については、[接頭辞付きプロパティ](#接頭辞付きプロパティ)の節を参照してください）。端末上で動作するバージョンのデモでは、この機能に対応する実装は接頭辞なしで動作するため、接頭辞付きのコードは必要ありません。

### 端末上の認識の指定

ブラウザーのローカル処理を使用するように指定するには、音声認識を開始する前に、{{domxref("SpeechRecognition.processLocally")}} プロパティを `true` に設定してください（デフォルト値は `false` です）。

```js
recognition.processLocally = true;
```

### 利用可能性の確認と言語パックのインストール

端末上の音声認識を機能させるには、認識したい言語に対応した言語パックがブラウザーにインストールされている必要があります。`processLocally = true` を指定した後に `start()` メソッドを実行しても、正しい言語パックがインストールされていない場合、その関数呼び出しは [`language-not-supported`](/ja/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) エラーにより失敗します。

正しい言語パックをインストールするには、以下の 2 つの手順に従ってください。

1. ユーザーの端末に言語パックが利用可能かどうかを確認します。これは、{{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} 静的メソッドを使用して処理されます。
2. 言語パックが利用できない場合はインストールします。これは、{{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}} 静的メソッドを使用して処理されます。

これらの処理は、アプリのコントロールボタン (`<button>`) における以下の `click` イベントハンドラーで処理されます。

```js
startBtn.addEventListener("click", () => {
  // 対象言語の利用可否を確認する
  SpeechRecognition.available({ langs: ["en-US"], processLocally: true }).then(
    (result) => {
      if (result === "unavailable") {
        diagnostic.textContent = `en-US is not available to download at this time. Sorry!`;
      } else if (result === "available") {
        recognition.start();
        console.log("Ready to receive a color command.");
      } else {
        diagnostic.textContent = `en-US language pack is downloading...`;
        SpeechRecognition.install({
          langs: ["en-US"],
          processLocally: true,
        }).then((result) => {
          if (result) {
            diagnostic.textContent = `en-US language pack downloaded. Start recognition again.`;
          } else {
            diagnostic.textContent = `en-US language pack failed to download. Try again later.`;
          }
        });
      }
    },
  );
});
```

`available()` メソッドは、2 つのプロパティを含むオプションオブジェクトを受け取ります。

- 利用可能かどうかを確認する言語を含む `langs` 配列。
- 言語の利用可能かどうかをデバイス上でのみ確認するか（`true`）、またはローカルまたはサーバーベースの認識サービスを通じて確認するかを指定する論理値の `processLocally`（`false`、デフォルト）。

このメソッドを実行すると、指定された言語の利用可否を示す列挙型値で解決される {{jsxref("Promise")}} が返されます。このデモでは、次の 3 つの条件についてチェックを行います。

- 結果の値が `unavailable` の場合、ダウンロード可能な適切な言語パックが存在しないことを意味します。この場合、出力に適切なメッセージを表示します。
- 結果の値が `unavailable` の場合、ローカルに利用可能な言語パックがないことを意味します。この場合、適切なメッセージを出力に表示します。
- 値がそれ以外（`downloadable` または `downloading`）の場合、言語パックのダウンロードが開始されることをユーザーに知らせる診断メッセージを出力し、その後、ダウンロードを処理するために `install()` メソッドを実行します。

`install()` メソッドは `available()` メソッドと似たように動作しますが、そのオプションオブジェクトが `langs` 配列のみを受け取る点が異なります。実行されると、`langs` で指定された言語のすべての言語パックのダウンロードが開始され、指定された言語パックが正常にダウンロードおよびインストールされたかどうかを示す論理値（`true` または `false`）で解決される {{jsxref("Promise")}} が返されます。

このデモでは、成功時と失敗時を示す診断メッセージを出力しています。より本格的なアプリでは、ダウンロード処理中はコントロールを無効にし、プロミスが解決した後に再び有効にするのが一般的でしょう。

### 権限ポリシーの統合

`available()` および `install()` メソッドの使用は、{{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} によって制御されます。具体的には、定義されたポリシーによって使用がブロックされている場合、これらのメソッドを呼び出そうとしても失敗します。

`on-device-speech-recognition` のデフォルトの許可リスト値は `self` です。つまり、埋め込まれた別オリジンの文書内でこれらのメソッドを使用しようとする場合や、その使用を明示的に無効にしたい場合を除き、ポリシーの調整について心配する必要はありません。

### 品質レベルの要件の指定

`available()` メソッドと `install()` メソッドは、いずれも [`quality`](/ja/docs/Web/API/SpeechRecognition/available_static#quality) オプションに対応しています。これにより、音声認識の複雑さのレベルに応じた対応状況を確認できます。たとえば、短い音声コマンドの処理は、ディクテーションや文字起こしの処理よりもはるかに単純であり、前者のユースケースは後者よりも多くのハードウェアと言語パックの組み合わせでサポートされている可能性が高いです。

たとえば、以下のコードスニペットは、[デバイス内音声カラーチェンジャー](#デモ_2)の例のコードを修正したもので、`quality` オプションを `dictation` に設定して `available()` メソッドを呼び出し、デバイス内認識がこの品質レベルに対応しているかどうかを確認しています。返された結果が `unavailable` の場合、`SpeechRecognition` オブジェクトの {{domxref("SpeechRecognition.processLocally", "processLocally")}} プロパティを `false` に設定して、API にクラウド認識サービスの使用を強制し、その後、認識サービスを `start()` で開始します。

結果が `available` の場合は問題ないので、`start()` を呼び出してデバイス上の認識を開始します。結果がそれ以外の値の場合は、`quality` オプションを `dictation` に設定して `install()` メソッドを実行し、必要な言語パックをインストールします。

```js
startBtn.addEventListener("click", () => {
  // 端末上の対象言語のディクテーション品質の利用可否を確認する
  SpeechRecognition.available({
    langs: ["en-US"],
    processLocally: true,
    quality: "dictation",
  }).then((result) => {
    if (result === "unavailable") {
      diagnostic.textContent = `On-device recognition for dictation not available, running with cloud recognition`;
      recognition.processLocally = false;
      recognition.start();
    } else if (result === "available") {
      recognition.start();
      console.log("Ready to receive a color command.");
    } else {
      diagnostic.textContent = `en-US language pack downloading`;
      SpeechRecognition.install({
        langs: ["en-US"],
        processLocally: true,
        quality: "dictation",
      }).then((result) => {
        if (result) {
          diagnostic.textContent = `en-US language pack downloaded. Try again.`;
        } else {
          diagnostic.textContent = `en-US language pack failed to download. Try again later.`;
        }
      });
    }
  });
});
```

## 音声認識における文脈バイアス

音声認識サービスが特定の単語やフレーズを正しく認識できない場合があります。これは、専門用語（医学用語や科学用語など）、固有名詞、あまり一般的ではないフレーズ、あるいは他の単語と発音が似ていて誤認識されやすい単語などで、特に頻繁に発生します。

例えば、テスト中に、[On-device speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) が、色 `azure` の認識に問題があることが判明しました。この機能は、"as you" のような結果を繰り返し返していました。その他にも、頻繁に誤認識された色として、`khaki` ("car key")、`tan`、`thistle` ("this all") などがありました。

こうした問題を軽減するため、ウェブ音声APIでは、発話される可能性が高く、認識エンジンが優先的に注目すべきフレーズを強調するよう、認識エンジンにヒントを与えることができます。これにより、それらの単語やフレーズが正しく認識される可能性が高まります。

これを行うには、{{domxref("SpeechRecognitionPhrase")}} オブジェクトの配列を {{domxref("SpeechRecognition.phrases")}} プロパティの値として設定します。各 `SpeechRecognitionPhrase` オブジェクトには、以下の情報が含まれています：

- `phrase` プロパティ：ブーストしたい単語やフレーズを含む文字列です。
- `boost` プロパティ：`0.0` 以上 `10.0` 以下の浮動小数点数で、その単語やフレーズに適用するブーストの度合いを設定します。値が大きいほど、その単語やフレーズが認識されやすくなります。

"On-device speech color changer" のデモでは、ブーストするフレーズとそれぞれのブースト値の配列を作成することで、この処理を行っています。

```js
const phraseData = [
  { phrase: "azure", boost: 5.0 },
  { phrase: "khaki", boost: 3.0 },
  { phrase: "tan", boost: 2.0 },
];
```

これらは、`SpeechRecognitionPhrase` オブジェクトの `ObservableArray` として表現する必要があります。これを実現するために、元の配列をマッピングし、{{domxref("SpeechRecognitionPhrase.SpeechRecognitionPhrase", "SpeechRecognitionPhrase()")}} コンストラクターを使用して、各配列要素を `SpeechRecognitionPhrase` オブジェクトに変換します。

```js
const phraseObjects = phraseData.map(
  (p) => new SpeechRecognitionPhrase(p.phrase, p.boost),
);
```

`SpeechRecognition` インスタンスを作成した後、`phraseObjects` 配列を `SpeechRecognition.phrases` プロパティの値として設定することで、文脈に応じたバイアスフレーズを追加します。

```js
recognition.phrases = phraseObjects;
```

フレーズ配列は、通常の JavaScript 配列と同じように変更できます。例えば、新しいフレーズを動的に追加（push）することで変更できます。

```js
recognition.phrases.push(new SpeechRecognitionPhrase("thistle", 5.0));
```

このコードにより、問題となっていた色キーワードが以前よりも正確に認識されるようになったことがわかりました。

## 音声合成

音声合成 (別名 text-to-speech または TTS) は、アプリ内のテキストを音声に合成し、機器のスピーカーまたは音声出力接続から再生することを指します。

ウェブ音声 API には、このための中心的な制御インターフェイス — {{domxref("SpeechSynthesis")}} があり、さらに、合成される（発話とも呼ばれる）テキスト、発話に使用される音声などを表現する、密接に関連した多数のインターフェイスがあります。繰り返しになりますが、ほとんどの OS は何らかの音声合成システムを保有しており、利用可能な場合はこのタスクのために API が使用されることになります。

### デモ

ウェブ音声合成の使い方を紹介するために、[Speech synthesizer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) というサンプルアプリを作成しました。このアプリには、合成したいテキストを入力するための入力フィールドがあります。読み上げ速度や音程を調整できるほか、ドロップダウンメニューから使用する音声を選択することもできます。テキストを入力したら、<kbd>Enter</kbd>/<kbd>Return</kbd> キーを押すか、**Play** ボタンをクリックすると、テキストが読み上げられます。

![speak easy synthesis というアプリの UI。合成するテキストを入力する入力欄、音声の速度やピッチを制御するスライダーコントロール、異なる形を選ぶドロップダウンメニューがあります。](speak-easy-synthesis.png)

デモを実行するには、[対応ブラウザー](/ja/docs/Web/API/SpeechSynthesis#ブラウザーの互換性)で[ライブデモの URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) にアクセスしてください。

### HTML と CSS

このアプリの HTML と CSS はかなり基本的なものです。タイトル、使用方法の説明、そして基本的なコントロールがいくつかあるフォームがあります。 {{htmlelement("select")}} 要素は最初は空です。JavaScript で {{htmlelement("option")}} を入力しています（後述します）。

```html
<h1>Speech synthesizer</h1>

<p>
  Enter some text in the input below and press return to hear it. Change voices
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

古いブラウザーでは、{{domxref("SpeechSynthesis.voiceschanged_event", "voiceschanged")}} イベントに対応しておらず、{{domxref("SpeechSynthesis.getVoices()")}} が実行されると、単に音声のリストが返されるだけです。
一方、Chrome などのブラウザーでは、リストを初期化する前に、このイベントが発生するのを待つ必要があります。
両方のケースに対応するため、以下に示すような関数を実行します。

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
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (const voice of voices) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);
  utterThis.onpause = (event) => {
    const char = event.utterance.text.charAt(event.charIndex);
    console.log(
      `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
    );
  };
  inputTxt.blur();
};
```

ハンドラーの最後の部分では、 {{domxref("SpeechSynthesisUtterance.pause_event", "pause")}} イベントを記述して、 {{domxref("SpeechSynthesisEvent")}} がいかに有益な用途で使用できるかを示しています。 {{domxref("SpeechSynthesis.pause()")}} が呼び出されると、音声が一時停止された文字番号と名前を報告するメッセージを返します。

最後に、テキスト入力に対して [`blur()`](/ja/docs/Web/API/HTMLElement/blur) を呼び出しています。これは主に Firefox OS 上でキーボードを隠すためのものです。

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
