---
title: メディアおよびウェブオーディオ API の自動再生ガイド
slug: Web/Media/Guides/Autoplay
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

ページが読み込まれると、すぐに音声（または音声トラックを含む動画）の再生を自動的に開始されることは、ユーザーにとって歓迎されない驚きです。 メディアの自動再生は便利な目的に役立ちますが、注意して必要なときにだけ使用してください。 ユーザーがこれを制御できるようにするために、ブラウザーは多くの場合、さまざまな形式の自動再生のブロック (autoplay blocking) を提供します。 このガイドでは、さまざまなメディアおよびウェブオーディオ API (Web Audio API) の自動再生機能について説明します。自動再生の使用方法と自動再生のブロックを適切に処理するためのブラウザーの操作方法の簡単な概要を含みます。

ソースメディアに音声トラックがない場合、または音声トラックがミュートされている場合、自動再生のブロックは {{HTMLElement("video")}} 要素には適用されません。 アクティブな音声トラックを持つメディアは**可聴である**と見なされ、自動再生のブロックがそれらに適用されます。**可聴でない**メディアは自動再生のブロックの影響を受けません。

## 自動再生と自動再生のブロック

**自動再生** (**autoplay**) という用語は、ユーザーが再生の開始を明確に要求しなくても音声の再生を開始させる機能を意味します。 これには、メディアの自動再生のための HTML 属性の使用と、ユーザー入力を処理するコンテキストの外で再生を開始するための JavaScript コードのユーザーの両方が含まれます。

つまり、次の両方が自動再生のふるまいと見なされるため、ブラウザーの自動再生のブロックのポリシーに従います。

```html
<audio src="/music.mp3" autoplay></audio>
```

と

```js
audioElement.play();
```

次のウェブ機能および API は自動再生のブロックの影響を受ける可能性があります。

- {{Glossary("HTML")}} の {{HTMLElement("audio")}} 要素と {{HTMLElement("video")}} 要素
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) (Web Audio API)

ユーザーの観点からは、警告なしに自発的にノイズを発し始めるウェブページまたはアプリは、耳障り、不便、または気まずいものになる可能性があります。 そのため、ブラウザーでは通常、特定の状況下でのみ自動再生が正常に行われるようにすることしかできません。

### 自動再生の可用性

一般的なルールとして、次の条件の少なくとも 1 つが当てはまる場合にのみ、メディアの自動再生が許可されると想定できます。

- 音声がミュートになっているか、音量が 0 に設定されている。
- ユーザーがサイトを操作した（クリック、タップ、キーを押すなど）。
- サイトが許可リストに登録されている場合。 これは、ユーザーがメディアと頻繁に関わっているとブラウザーが判断した場合は自動的に、または設定や他のユーザーインターフェイス機能を使用して手動で行われる場合があります。
- 自動再生の[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)を使用して {{HTMLElement("iframe")}} とその文書に自動再生の対応を許可した場合。

そうでないと、再生がブロックされる可能性があります。
ブロックされる正確な状況、およびサイトが許可リストに登録される方法の詳細はブラウザーによって異なりますが、上記のガイドラインを参考にしてください。

詳しくは、 [Google Chrome](https://developer.chrome.com/blog/autoplay/) および [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/) の自動再生ポリシーを参照してください。

> [!NOTE]
> 別の言い方をすれば、音声が含まれているメディアの再生は、ユーザー操作がまだ行われていないタブでプログラム的に再生が開始されると、通常はブロックされます。 ブラウザーはさらに他の状況下でブロックすることを選択するかもしれません。

## メディア要素の自動再生

自動再生とは何か、自動再生が許可されないようにすることができるかについて説明したので、次に、ウェブサイトまたはアプリがページの読み込み時に自動的にメディアを再生する方法、自動再生の失敗の検出方法、および自動再生がブラウザーによって拒否されたときの対処方法について説明します。

### autoplay 属性

コンテンツを自動的に再生する最も簡単な方法は、 [`autoplay`](/ja/docs/Web/HTML/Reference/Elements/audio#autoplay) 属性を{{HTMLElement("audio")}} 要素または {{HTMLElement("video")}} 要素に追加することです。 これにより、要素の {{domxref("HTMLMediaElement.autoplay", "autoplay")}} プロパティが `true` に設定され、`autoplay` が `true` の場合、次のことが発生した後、メディアはできるだけ早く自動的に再生を開始します。

- ページは自動再生機能を使用することを許可されている
- 要素はページの読み込み中に作成された
- ネットワークのパフォーマンスや帯域幅に劇的な変化がないと仮定して、再生を開始し、中断することなくメディアの最後まで再生を続けるのに十分なメディアが受信されている

#### 例: autoplay 属性

`autoplay` 属性を使用する {{HTMLElement("audio")}} 要素は、次のようになります。

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3" />
</audio>
```

#### 例 2: 自動再生が許可されているかどうかの検出

自動再生がアプリケーションにとって重要な場合、自動再生が許可されているか、禁止されているか、または音声のないコンテンツのみに対応しているかによって、動作をカスタマイズする必要があるかもしれません。
例えば、アプリケーションで動画を自動再生する必要がある場合、そのページで自動再生が許可されているのは音声のないコンテンツのみだと分かっている場合、音声をミュートするか、音声トラックのない動画を提供することができます。
同様に、自動再生がまったく許可されていないことが分かっている場合、動画用の既定の画像（[`poster`](/ja/docs/Web/HTML/Reference/Elements/video#poster)属性を使用）を指定するか、動画の読み込みをリクエストされるまで遅延させることを選択できます。

`Navigator.getAutoplayPolicy()` メソッドを使用して、文書内のメディア機能（すべてのメディア要素またはすべての音声コンテキスト）の自動再生ポリシーを確認したり、特定のメディア要素または音声コンテキストが自動再生可能かどうかを確認したりすることができます。

下記の例は、文書内のすべてのメディア要素の自動再生ポリシーを取得するために `mediaelement` 文字列を渡す方法を示しています（音声コンテキストのポリシーを取得するには `audiocontext` を渡します）。
このコードは、 `video` が [`<video>`](/ja/docs/Web/HTML/Reference/Elements/video#autoplay) タグまたは [`HTMLVideoElement`](/ja/docs/Web/API/HTMLVideoElement) を使用した `HTMLVideoElement` メディア要素であり、既定では音声付き自動再生が構成されていることを仮定しています。
もし自動再生が音声のないコンテンツにのみ許可されている場合、音声を出力しないように消音します。自動再生が許可されていない場合、動画のプレースホルダー画像を表示させるようにします。

```js
if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
  // video 要素は音声つきで自動再生される
} else if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
  // 動画の音声を消音
  video.muted = true;
} else if (navigator.getAutoplayPolicy("mediaelement") === "disallowed") {
  // 既定のプレースホルダー画像を設定
  video.poster = "http://example.com/poster_image_url";
}
```

特定の要素または音声コンテキストを検査するコードは、型文字列ではなく検査対象の要素またはコンテキストを渡す点を除き同じです。
ここではテスト対象の `video` オブジェクトを渡します。

```js
if (navigator.getAutoplayPolicy(video) === "allowed") {
  // video 要素は音声つきで自動再生される
} else if (navigator.getAutoplayPolicy(video) === "allowed-muted") {
  // 動画の音声を消音
  video.muted = true;
} else if (navigator.getAutoplayPolicy(video) === "disallowed") {
  // 既定のプレースホルダー画像を設定
  video.poster = "http://example.com/poster_image_url";
}
```

ある型の自動再生ポリシーは、サイト、ページ、特定の要素に対するユーザーの操作によって変更される場合があります。
同様に、特定の要素に対するポリシーは、その種類のポリシーが変更されていなくても、一部のブラウザーでは変更される可能性があります （例：特定の要素をタッチすると、その要素のみが自動再生されるように設定できるブラウザーなど）。

自動再生ポリシーが変更された場合（型または要素のいずれかについて）、通知される方法がないため、一般的に、ページ読み込み時に型を使用してポリシーを確認することを推奨します。

#### 例 3: 自動再生の失敗を検出する

自動再生の成功または失敗によって、特定のイベント（またはその他の通知）が発行されることはありません。そのため、[`Navigator.getAutoplayPolicy()`](/ja/docs/Web/API/Navigator/getAutoplayPolicy) に対応していないブラウザーでは、自動再生が対応しているかどうかを簡単に判断したり、発行された場合や発行されなかった場合に反応したりする方法がありません。

一つの手法は、{{domxref("HTMLMediaElement/play_event", "play")}} イベントの最初の発生を待ち受けすることです。このイベントは、メディア要素が一時停止後に再開し、かつ自動再生が発生した時に発行されます。
つまり、初めて `play` イベントが発生したときは、ページが開かれた後に初めてメディアの再生が開始されたことがわかります。

メディア要素として次の HTML があったとします。

```html
<video src="my-video.mp4" id="video" autoplay></video>
```

ここでは、 {{HTMLElement("video")}} 要素に [`autoplay`](/ja/docs/Web/HTML/Reference/Elements/video#autoplay) 属性が設定されており、 {{domxref("HTMLMediaElement.play_event", "onplay")}} イベントハンドラーが設定されています。イベントは `handleFirstPlay()` と呼ばれる関数によって処理され、この関数は入力として `play` イベントを受け取ります。

`handleFirstPlay()` は次のようになります。

```js
const video = document.getElementById("video");
video.addEventListener("play", handleFirstPlay, false);

let hasPlayed = false;
function handleFirstPlay(event) {
  if (!hasPlayed) {
    hasPlayed = true;

    // リスナーを除去し、これが一度だけ呼び出されるようにする。
    const vid = event.target;
    vid.removeEventListener("play", handleFirstPlay);

    // 再生が開始された後に行う必要があるものをすべて開始する。
  }
}
```

{{domxref("Event")}} オブジェクトの {{domxref("Event.target", "target")}} から video 要素への参照を取得した後、それを使用してイベントリスナーを除去します。
これにより、今後の `play` イベントがハンドラーに配信されることを防ぎます。これは、動画が一時停止され、ユーザーまたはブラウザーによって（文書がバックグラウンドタブにある場合に）自動的に再開された場合に現れる可能性があります。

この点で、サイトやアプリは動画が起動していることを前提に、必要な処理を始めることができます。

### play() メソッド

「自動再生」という用語はまた、スクリプトが、ユーザ入力イベント処理のコンテキストの外側で、音声を含んだメディアの再生を開始しようと試みるシナリオを指します。 これは、メディア要素の {{domxref("HTMLMediaElement.play", "play()")}} メソッドを呼び出すことによって行われます。

> [!NOTE]
> 自動再生設定のサポートは、自動再生の他の手段よりも `autoplay` 属性の方が広く普及しているため、できるだけ `autoplay` 属性を使用することを強くお勧めします。 また、ブラウザーが再生開始の責任を負うようにして、再生のタイミングを最適化します。

#### 例: 動画の再生

この簡単な例では、文書内の最初の {{HTMLElement("video")}} 要素を再生します。 文書に自動的にメディアを再生する権限がない限り、`play()` は再生を開始させません。

```js
document.querySelector("video").play();
```

#### 例: play() のエラー処理

{{domxref("HTMLMediaElement.play", "play()")}} メソッドを使用して開始すると、メディアの自動再生の失敗を検出するのがはるかに簡単になります。 `play()` は、メディアが正常に再生を開始すると解決され、自動再生が拒否された場合など、再生が開始しないと却下される {{jsxref("Promise")}} を返します。 自動再生が失敗した場合、おそらくメディアを再生するための権限をユーザーが与えるようにブラウザーに手動で指示する方法をユーザーに提供したいと思うでしょう。

仕事を達成するために、このようなコードを使うかもしれません。

```js
let startPlayPromise = videoElem.play();

if (startPlayPromise !== undefined) {
  startPlayPromise
    .then(() => {
      // 再生が始まった後でのみ行うべきことを何でも
      // 始めます。
    })
    .catch((error) => {
      if (error.name === "NotAllowedError") {
        showPlayButton(videoElem);
      } else {
        // 読み込みまたは再生エラー
      }
    });
}
```

`play()` の結果に対して最初に行うことは、それが未定義 (`undefined`) ではないことを確認することです。 これは、以前のバージョンの HTML 仕様書では、`play()` が値を返さなかったためです。 操作の成功または失敗を判断できるようにというプロミスを返すことが最近追加されました。 `undefined` をチェックすることで、このコードが古いバージョンのウェブブラウザーでエラーにより失敗することを防ぎます。

`play()` が返すプロミスがエラーなしで解決された場合、 `then()` 節が実行され、自動再生が開始されたときに必要なことを始めることができるようになります。

次にプロミスに {{jsxref("Promise.catch", "catch()")}} ハンドラーを追加します。 これは、エラーの {{domxref("DOMException.name", "name")}} を調べて、`NotAllowedError` かどうかを確認します。 これは、自動再生が拒否されたなど、権限の問題が原因で再生が失敗したことを示します。 その場合は、ユーザーが手動で再生を開始できるようにするためのユーザーインターフェイスを表示する必要があります。 これはここでは関数 `showPlayButton()` によって処理されます。

その他のエラーは適切に処理されます。

このページの最初の操作の後、動画を再生させたい場合、{{domxref("Window.setInterval", "setInterval()")}} を使用して実現できます。

```js
let playAttempt = setInterval(() => {
  videoElem
    .play()
    .then(() => {
      clearInterval(playAttempt);
    })
    .catch((error) => {
      console.log("動画が再生できません。ユーザーはまだ操作をしていません。");
    });
}, 3000);
```

## ウェブオーディオ API を使用した自動再生

[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) では、ウェブサイトまたはアプリは、 {{domxref("AudioContext")}} にリンクされているソースノードで `start()` メソッドを使用して音声の再生を開始できます。 ユーザ入力イベント処理のコンテキストの外側でそうすることは、自動再生ルールの影響を受けます。

## autoplay 権限ポリシー

前述のブラウザー側における自動再生機能の管理・制御に加え、ウェブサーバーも自動再生を許可する意思を表明することができ、かつ、自動再生機能が機能するよう表現することもできます。 {{Glossary("HTTP")}} の {{HTTPHeader("Permissions-Policy")}} ヘッダーの {{httpheader("Permissions-Policy/autoplay", "autoplay")}} ディレクティブは、メディアの自動再生に使用できるドメインがあれば、それを制御するために使用されます。 既定では、`autoplay` 権限ポリシーは `self` に設定されています。 これは、文書と同じドメインでホストされているときに自動再生が許可されることを示します。

空の許可リスト (`()`) を指定すると、自動再生を完全に無効にできます。 `*` を指定すると、すべてのドメインからの自動再生を許可し、空白文字で区切って複数の特定のオリジンを指定すると、それらのオリジンからのメディアを自動的に再生できます。

> [!NOTE]
> 指定された権限ポリシーは、そのフレームとその中にネストされているすべてのフレームに新しい権限ポリシーを設定する [`allow`](/ja/docs/Web/HTML/Reference/Elements/iframe#allow) が含まれていない限り、文書とその中にネストされているすべての {{HTMLElement("iframe")}} に適用されます。

`<iframe>` の [`allow`](/ja/docs/Web/HTML/Reference/Elements/iframe#allow) 属性を使用してそのフレームとそのネストされたフレームの権限ポリシーを指定するときは、値 `'src'` を指定して、フレームの [`src`](/ja/docs/Web/HTML/Reference/Elements/iframe#src) 属性で指定されたものと同じドメインからのメディアの自動再生のみを許可できます。

### 例: 文書のドメインからの自動再生のみを許可

{{HTTPHeader("Permissions-Policy")}} ヘッダーを使用して、文書の{{Glossary("origin","オリジン")}}からのメディアの自動再生のみを許可するには次のようにします。

```http
Permissions-Policy: autoplay=(self)
```

{{HTMLElement("iframe")}} に対して同じことを行うには次のようにします。

```html
<iframe src="mediaplayer.html" allow="autoplay"> </iframe>
```

### 例: 自動再生と全画面モードの許可

前の例に[全画面 API](/ja/docs/Web/API/Fullscreen_API) (Fullscreen API) の権限を追加すると、ドメインに関係なく全画面のアクセスが許可されている場合、次のような `Permissions-Policy` ヘッダーになります。 必要に応じてドメイン制限を追加できます。

```http
Permissions-Policy: autoplay=(self), fullscreen=(self)
```

`<iframe>` 要素の `allow` プロパティを使って同じ権限を設定すると、次のようになります。

```html
<iframe src="mediaplayer.html" allow="autoplay; fullscreen"> </iframe>
```

### 例: 特定のソースからの自動再生を許可する

`Permissions-Policy` ヘッダーで、文書（または `<iframe>`）の独自ドメインと `https://example.media` の両方からメディアを再生できるようにするには、次のようにします。

```http
Permissions-Policy: autoplay=(self "https://example.media")
```

次のように {{HTMLElement("iframe")}} を記述して、この自動再生ポリシーをそれ自体に適用する必要があり、すべての子フレームをこのように記述することを指定することができます。

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### 例: 自動再生を無効にする

`autoplay` 権限ポリシーを `()`/`none` に設定すると、文書または `<iframe>` とすべてのネストされたフレームに対して自動再生が完全に無効になります。 HTTP ヘッダーは次のとおりです。

```http
Permissions-Policy: autoplay=()
```

`<iframe>` の `allow` 属性を使う場合は、次のようになります。

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## ベストプラクティス

ここでは、自動再生を最大限に活用するためのヒントと推奨されるベストプラクティスを紹介します。

### メディアコントロールを使用した自動再生失敗の処理

自動再生の一般的な使用例は、記事、広告、またはページの主な機能のプレビューに合わせてビデオクリップの再生を自動的に開始することです。 このような動画を自動再生するには、2 つの選択肢があります。 音声トラックを使用しない、または音声トラックを使用しますが、既定で音声をミュートするように {{HTMLElement("video")}} 要素を次のように設定する方法です。

```html
<video
  src="/videos/awesomevid.webm"
  controls
  autoplay
  playsinline
  muted></video>
```

この video 要素は、ユーザーコントロール（通常は再生/一時停止、動画のタイムラインでの移動、音量調節、ミュート）が含まれています； また、[`muted`](/ja/docs/Web/HTML/Reference/Elements/video#muted) 属性が記載されており、Safariでの自動再生に要求される[`playsinline`](/ja/docs/Web/HTML/Reference/Elements/video#playsinline) 属性も記載されているため、動画は自動再生されますが、音声は消音の状態となります。ただし、ユーザーには、コントロール内の消音解除ボタンをクリックすることで、音声の再有効化をすることができるオプションが存在します。

## ブラウザー設定オプション

ブラウザーには、自動再生が機能する方法や自動再生のブロックの処理方法を制御する設定があります。 ここでは、ウェブ開発者として特別な意味または重要性があるかもしれないそのような設定がリストされています。 これらには、テストやデバッグに役立つ可能性のあるものや、あなたが処理する準備を整える必要がある方法で設定できるものが含まれます。

### Firefox

- `media.allowed-to-play.enabled`
  - : `HTMLMediaElement.allowedToPlay` プロパティをウェブに公開するかどうかを指定する論理型設定。 これは現在既定では `false` です（既定で `true` になっているナイトリービルドを除く）。 これが `false` の場合、`allowedToPlay` プロパティは `HTMLMediaElement` インターフェイスにないため、{{HTMLElement("audio")}} 要素にも {{HTMLElement("video")}} 要素にも存在しません。
- `media.autoplay.allow-extension-background-pages`
  - : この論理型設定が `true` の場合、ブラウザー拡張機能のバックグラウンドスクリプトは音声メディアを自動再生できます。 この値を `false` に設定すると、この機能は無効になります。 既定値は `true` です。
- `media.autoplay.allow-muted`
  - : `true`（既定）の場合、現在ミュートされている音声メディアを自動的に再生することを許可する論理型設定。 これが `false` に変更された場合、音声トラックのあるメディアはミュートされていても再生が許可されません。
- `media.autoplay.block-webaudio`
  - : [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) に自動再生のブロックを適用するかどうかを示す論理型設定。
    `false` の場合、ウェブオーディオは常に自動再生が許可されます。
    `true` の場合、音声コンテキストは、ページ上で{{Glossary("Sticky activation", "粘着アクティベーション")}}が行われた後にのみ再生可能となります。
    既定値は `true` です。
- `media.autoplay.default`
  - : 既定で自動再生サポートのドメインごとの設定を許可する（`0`）、ブロックする（`1`）、使用時のプロンプト（`2`）のどちらにするかを指定する整数設定。 既定値は `0` です。
- `media.autoplay.enabled.user-gestures-needed`（ナイトリービルドのみ）
  - : ユーザーのジェスチャーの検出によって `media.autoplay.default` の設定をオーバーライドできるかどうかを制御する論理型設定。 `media.autoplay.default` が `0`（既定で自動再生が許可）に設定されて*いない*場合、この設定が `true` の場合、ページがユーザーのジェスチャーによってアクティブにされ、可聴でないメディアはまったく制限されていない場合に、音声トラック付きのメディアを自動再生できます。
- `media.block-autoplay-until-in-foreground`
  - : バックグラウンドタブで開始したときにメディアの再生がブロックされるかどうかを示す論理型設定。 既定値の `true` は、他の方法で利用できる場合でも、タブが前面に表示されるまで自動再生は実行されないことを意味します。 これは、タブが音を出し始めて、ユーザーがすべてのタブやウィンドウの中からそのタブを見つけることができないという煩わしい状況を防ぎます。

## 関連情報

- [ウェブメディア技術](/ja/docs/Web/Media)
- [動画と音声のコンテンツ](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)（学習ガイド）
- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [クロスブラウザー音声の基本](/ja/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
