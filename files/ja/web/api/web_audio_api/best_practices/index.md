---
title: ウェブオーディオの API ベストプラクティス
slug: Web/API/Web_Audio_API/Best_practices
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{DefaultAPISidebar("Web Audio API")}}

クリエイティブなコードを書く際に、厳密な正解はありません。セキュリティ、パフォーマンス、アクセシビリティを考慮していれば、自分自身のスタイルに合わせることができます。この記事では、ウェブオーディオ API を使用する際のガイドライン、ヒント、テクニックなど、いくつかのベストプラクティスを紹介します。

## 音声／ファイルの読み込み

ウェブオーディオ API で音声を読み込む方法は主に 4 つあり、どれを使用すればよいかは少し分かりにくい場合があります。

ファイルを使用する場合、{{domxref("HTMLMediaElement")}}（つまり、{{htmlelement("audio")}} または {{htmlelement("video")}} 要素）からファイルを取得する方法と、ファイルを取得してバッファーにデコードする方法があります。どちらも正当な方法ですが、フルレングスのトラックを扱う場合は前者の方が一般的で、短くサンプルのようなトラックを扱う場合は後者の方が一般的です。

メディア要素にはストリーミング対応が最初から備わっています。再生終了前に残りのファイルを読み込めるとブラウザーが判断した時点で、音声の再生が開始されます。この方法をウェブオーディオ API で使用する例は、[ウェブオーディオ API のチュートリアル](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)で確認できます。

ただし、バッファーノードを使用すると、より詳細に制御できます。ファイルのリクエストと読み込みを待つ必要がありますが（[高度な記事のこの節](/ja/docs/Web/API/Web_Audio_API/Advanced_techniques#dial-up_—_loading_a_sound_sample)で適切な方法を紹介しています）、データへ直接アクセスできるため、精度や操作の細かさが向上します。

ユーザーのカメラやマイクから音声を使用する場合は、[メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)と {{domxref("MediaStreamAudioSourceNode")}} インターフェイスを介してアクセスできます。これは WebRTC や、音声を録音または解析したい場合に便利です。

最後の方法は、自分自身で音声を生成する方法です。{{domxref("OscillatorNode")}} を使用するか、バッファーを作成して独自のデータを設定できます。オシレーターやバッファーを使用した音声生成については、[独自の楽器を作成するチュートリアル](/ja/docs/Web/API/Web_Audio_API/Advanced_techniques)を参照してください。

## 複数のブラウザー間と古いブラウザーの対応

ウェブオーディオ API の仕様は常に進化しており、ウェブのほかの多くの機能と同様に、ブラウザー間で一貫して動作させることに問題がある場合があります。ここでは、ブラウザー間の互換性の問題を回避するための選択肢を見ていきます。

[`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context)<sup>(英語)</sup> npm パッケージを使用すると、ブラウザー間で一貫した API 機能を提供し、新たに見つかった不足部分を補うことができます。このパッケージは常に開発が続けられており、最新の仕様に追従するよう努めています。

ユースケースに応じて、いくつかのライブラリーを選択することもできます。汎用的なライブラリーとしては、[howler.js](https://howlerjs.com/)<sup>(英語)</sup> が適しています。ブラウザー間に対応しており、有用な機能のサブセットを提供します。ウェブオーディオ API が備えるフィルターやほかの効果をすべて利用できるわけではありませんが、ほとんどの用途には対応できます。

音声を作成したり、楽器を中心とした選択肢を探す場合は、[tone.js](https://tonejs.github.io/)<sup>(英語)</sup> が優れています。高度なスケジューリング機能、シンセサイザー、エフェクトに加えて、ウェブオーディオ API の上に直感的な音楽的抽象化を提供します。

[R-audio](https://github.com/bbc/r-audio)<sup>(英語)</sup> は、[BBC の Research & Development 部門](https://medium.com/bbc-product-technology/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c)<sup>(英語)</sup>が開発したライブラリーで、「ウェブオーディオのより直感的で宣言的なインターフェイス」を提供する React コンポーネントです。JSX を使用したことがある場合は、検討する価値があります。

## 自動再生ポリシー

ブラウザーでは自動再生ポリシーの実装が進められており、一般的には次のように要約できます。

> 「ユーザー操作内でコンテキストを作成または再開する」

しかし、実際にはこれは何を意味するのでしょうか。ユーザー操作とは、通常は `click` イベントなど、ユーザーが開始するイベントを意味します。ブラウザーベンダーは、ウェブオーディオコンテキストが音声を自動再生することを許可せず、ユーザーによって開始されるべきだと判断しました。これは、自動再生される音声が煩わしく、目障りになる可能性があるためです。しかし、これをどのように扱えばよいのでしょうか。

（オフラインまたはオンラインの）オーディオコンテキストを作成すると、`suspended`、`running`、または `closed` のいずれかになる `state` が設定されます。

{{domxref("AudioContext")}} を使用する場合、`click` イベント内でオーディオコンテキストを作成すると、状態は自動的に `running` に設定されます。`click` イベント内でコンテキストを作成する例を次に示します。

```js
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const audioCtx = new AudioContext();
  // オーディオコンテキストを使用
});
```

しかし、ユーザー操作外でコンテキストを作成した場合、状態は `suspended` に設定され、ユーザー操作後に開始する必要があります。同じ `click` イベントの例を使用して、コンテキストの状態を確認し、`suspended` の場合は [`resume()`](/ja/docs/Web/API/AudioContext/resume) メソッドを使用して開始できます。

```js
const audioCtx = new AudioContext();
const button = document.querySelector("button");

button.addEventListener("click", () => {
  // コンテキストがサスペンド状態か確認（自動再生ポリシー）
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
});
```

代わりに {{domxref("OfflineAudioContext")}} を使用している場合は、[`startRendering()`](/ja/docs/Web/API/OfflineAudioContext/startRendering) メソッドを使用してサスペンドされたオーディオコンテキストを再開できます。

## ユーザー制御

ウェブサイトやアプリケーションに音声が含まれる場合、ユーザーが音声を制御できるようにする必要があります。そうでなければ、再び煩わしくなります。再生/停止、音量/ミュートの制御で実現できます。[ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)チュートリアルで、その方法を説明しています。

便利なコントロールには、再生/一時停止用の {{HTMLElement("button")}} 要素、再生速度などのオプションを選択する {{HTMLElement("select")}} 要素、ミュート切り替え用の [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) 要素、音量制御やほかの数値入力用の [`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) 要素があります。

フォームのアクセシビリティに関する一般的な考慮事項はすべて適用されます。{{HTMLElement("button")}} 要素を使用する場合は、明確な[ラベル](/ja/docs/Web/HTML/Reference/Elements/label)があることを確認してください。これにより、スクリーンリーダーやほかの支援技術がボタンの目的を理解できます。音声をオン／オフするボタンがある場合は、ボタンに ARIA の [`role="switch"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) 属性を使用して、支援技術へボタンの正確な目的を通知し、アプリのアクセシビリティを向上させるとよいでしょう。

## AudioParam の値の設定

{{domxref("AudioNode")}} の値を操作する方法は 2 つあります。これらの値は、{{domxref("AudioParam")}} インターフェイス型のオブジェクトです。第 1 の方法は、プロパティを介して値を直接設定することです。例えば、{{domxref("GainNode")}} の `gain` 値を変更する場合は、次のようにします。

```js
gainNode.gain.value = 0.5;
```

これにより音量が半分になります。ただし、`AudioParam` の定義されたメソッドを使用してこれらの値を設定すると、上記のプロパティ設定より優先されます。例えば、2 秒後に `gain` 値を 1 に上げる場合は、次のようにします。

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

前の例（その必要性にかかわらず）がコード内で後に現れる場合でも、前の例を上書きします。

これを念頭に置くと、ウェブサイトやアプリケーションでタイミングやスケジューリングが必要な場合は、値の設定には {{domxref("AudioParam")}} メソッドを使用するのが最善です。それが不要であることが確実な場合は、`value` プロパティで設定してもかまいません。
