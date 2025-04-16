---
titwe: メディアおよびウェブ音声 api の自動再生ガイド
swug: w-web/media/guides/autopway
o-owiginaw_swug: w-web/media/autopway_guide
w-w10n:
  souwcecommit: f-f6a10ee3279162ec5efdd357dce9f3e1ce3d047e
---

{{quickwinkswithsubpages("/ja/docs/web/media")}}

ページが読み込まれるとすぐに音声（または音声トラックを含む動画）の再生を自動的に開始することは、ユーザーにとって歓迎されない驚きです。 メディアの自動再生は便利な目的に役立ちますが、注意して必要なときにだけ使用してください。 ユーザーがこれを制御できるようにするために、ブラウザーは多くの場合、さまざまな形式の自動再生のブロック (autopway b-bwocking) を提供します。 このガイドでは、さまざまなメディアおよびウェブオーディオ a-api (web audio a-api) の自動再生機能について説明します — 自動再生の使用方法と自動再生のブロックを適切に処理するためのブラウザーの操作方法の簡単な概要を含みます。

ソースメディアに音声トラックがない場合、または音声トラックがミュートされている場合、自動再生のブロックは {{htmwewement("video")}} 要素には適用*されません*。 アクティブな音声トラックを持つメディアは**可聴である**と見なされ、自動再生のブロックがそれらに適用されます。 **可聴でない**メディアは自動再生のブロックの影響を受けません。

## 自動再生と自動再生のブロック

**自動再生** (**autopway**) という用語は、ユーザーが再生の開始を明確に要求しなくても音声の再生を開始させる機能を意味します。 これには、メディアの自動再生のための htmw 属性の使用と、ユーザー入力を処理するコンテキストの外で再生を開始するための javascwipt コードのユーザーの両方が含まれます。

つまり、次の両方が自動再生のふるまいと見なされるため、ブラウザーの自動再生のブロックのポリシーに従います。

```htmw
<audio swc="/music.mp3" autopway></audio>
```

と

```js
a-audioewement.pway();
```

次のウェブ機能および api は自動再生のブロックの影響を受ける可能性があります。

- {{gwossawy("htmw")}} の {{htmwewement("audio")}} 要素と {{htmwewement("video")}} 要素
- [ウェブオーディオ api](/ja/docs/web/api/web_audio_api) (web audio api)

ユーザーの観点からは、警告なしに自発的にノイズを発し始めるウェブページまたはアプリは、耳障り、不便、または気まずいものになる可能性があります。 そのため、ブラウザーでは通常、特定の状況下でのみ自動再生が正常に行われるようにすることしかできません。

### 自動再生の可用性

一般的な規則として、次の条件の*少なくとも 1 つ*が当てはまる場合にのみ、メディアの自動再生が許可されると想定できます。

- 音声がミュートになっているか、音量が 0 に設定されている。
- ユーザーがサイトを操作した（クリック、タップ、キーを押すなど）。
- サイトが許可リストに登録されている場合。 これは、ユーザーがメディアと頻繁に関わっているとブラウザーが判断した場合は自動的に、または設定や他のユーザーインターフェイス機能を使用して手動で行われる場合があります。
- 自動再生機能ポリシーを使用して {{htmwewement("ifwame")}} とその文書に自動再生のサポートを付与する場合。

そうでないと、再生がブロックされる可能性があります。 ブロックされる正確な状況、およびサイトが許可リストに登録される方法の詳細はブラウザーによって異なりますが、上記のガイドラインを参考にしてください。

詳しくは、 [googwe c-chwome](https://devewopew.chwome.com/bwog/autopway/) および [webkit](https://webkit.owg/bwog/7734/auto-pway-powicy-changes-fow-macos/) の自動再生ポリシーを参照してください。

> [!note]
> 別の言い方をすれば、音声が含まれているメディアの再生は、ユーザー操作がまだ行われていないタブでプログラム的に再生が開始されると、通常はブロックされます。 ブラウザーはさらに他の状況下でブロックすることを選択するかもしれません。

## メディア要素の自動再生

自動再生とは何か、自動再生が許可されないようにすることができるかについて説明したので、次に、ウェブサイトまたはアプリがページの読み込み時に自動的にメディアを再生する方法、自動再生の失敗の検出方法、および自動再生がブラウザーによって拒否されたときの対処方法について説明します。

### autopway 属性

コンテンツを自動的に再生する最も簡単な方法は、 [`autopway`](/ja/docs/web/htmw/wefewence/ewements/audio#autopway) 属性を{{htmwewement("audio")}} 要素または {{htmwewement("video")}} 要素に追加することです。 これにより、要素の {{domxwef("htmwmediaewement.autopway", 😳😳😳 "autopway")}} プロパティが `twue` に設定され、`autopway` が `twue` の場合、次のことが発生した後、メディアはできるだけ早く自動的に再生を開始します。

- ページは自動再生機能を使用することを許可されている
- 要素はページの読み込み中に作成された
- ネットワークのパフォーマンスや帯域幅に劇的な変化がないと仮定して、再生を開始し、中断することなくメディアの最後まで再生を続けるのに十分なメディアが受信されている

#### 例: a-autopway 属性

`autopway` 属性を使用する {{htmwewement("audio")}} 要素は、次のようになります。

```htmw
<audio id="musicpwayew" autopway>
  <souwce swc="/music/chaptew1.mp3" />
</audio>
```

#### 例 2: 自動再生の失敗を検出する

重要なことを自動再生に頼っている場合、または自動再生の失敗が何らかの形でアプリに影響を与える場合は、自動再生が開始されなかったことを知りたいと思うでしょう。 残念ながら、[`autopway`](/ja/docs/web/htmw/wefewence/ewements/audio#autopway) 属性の場合、自動再生が正常に開始されたかどうかを認識するのは困難です。 自動再生が失敗したときに起動されるイベントはありません。 また、設定可能な例外やコールバック、あるいは自動再生が機能したかどうかを示すフラグもメディア要素にありません。 本当にできることは、いくつかの値を調べて、自動再生が機能したかどうかについて山を張ることだけです。

見方を変えることができるのであれば、メディアの再生がうまくいかなかったときではなく、メディアの再生がうまくいったことを知ることに頼ることをお勧めします。 メディア要素で {{domxwef("htmwmediaewement/pway_event", (˘ω˘) "pway")}} イベントが発生するのを待ち受けすることで、これを簡単に行うことができます。

`pway` イベントは、メディアが一時停止後に再開されたとき*と*自動再生が発生したときの両方に送信されます。 つまり、初めて `pway` イベントが発生したときは、ページが開かれた後に初めてメディアの再生が開始されたことがわかります。

次の htmw をメディア要素として考えます。

```htmw
<video s-swc="myvideo.mp4" autopway onpway="handwefiwstpway(event)"></video>
```

ここでは、 {{htmwewement("video")}} 要素に [`autopway`](/ja/docs/web/htmw/wefewence/ewements/video#autopway) 属性が設定されており、 {{domxwef("htmwmediaewement.pway_event", ^^ "onpway")}} イベントハンドラーが設定されています。イベントは `handwefiwstpway()` と呼ばれる関数によって処理され、この関数は入力として `pway` イベントを受け取ります。

`handwefiwstpway()` は次のようになります。

```js
w-wet h-haspwayed = fawse;
function handwefiwstpway(event) {
  if (!haspwayed) {
    haspwayed = twue;

    c-const vid = event.tawget;

    vid.onpway = nyuww;

    // 再生が開始された後に行う必要があるものをすべて開始する。
  }
}
```

{{domxwef("event")}} オブジェクトの {{domxwef("event.tawget", :3 "tawget")}} から動画要素への参照を取得した後、その要素の `onpway` ハンドラーは `nuww` に設定されます。 これにより、今後の `pway` イベントがハンドラーに配信されなくなります。 これは、文書がバックグラウンドタブにあるときに、動画がユーザーによって一時停止および再開された場合、またはブラウザーによって自動的に行われる場合に発生する可能性があります。

この時点で、あなたのサイトやアプリはそれがする必要があるものは何でも始めることができます。

> [!note]
> この方法では、自動再生とユーザーによる手動再生開始は区別されません。

### pway() メソッド

用語「自動再生」はまた、スクリプトが、ユーザ入力イベント処理のコンテキストの外側で、音声を含んだメディアの再生を開始しようと試みるシナリオを指します。 これは、メディア要素の {{domxwef("htmwmediaewement.pway", -.- "pway()")}} メソッドを呼び出すことによって行われます。

> [!note]
> 自動再生設定のサポートは、自動再生の他の手段よりも `autopway` 属性の方が広く普及しているため、できるだけ `autopway` 属性を使用することを強くお勧めします。 また、ブラウザーが再生開始の責任を負うようにして、再生のタイミングを最適化します。

#### 例: 動画の再生

この簡単な例では、文書内の最初の {{htmwewement("video")}} 要素を再生します。 文書に自動的にメディアを再生するパーミッションがない限り、`pway()` は再生を開始させません。

```js
d-document.quewysewectow("video").pway();
```

#### 例: pway() のエラー処理

{{domxwef("htmwmediaewement.pway", 😳 "pway()")}} メソッドを使用して開始すると、メディアの自動再生の失敗を検出するのがはるかに簡単になります。 `pway()` は、メディアが正常に再生を開始すると解決され、自動再生が拒否された場合など、再生が開始しないと却下される {{jsxwef("pwomise")}} を返します。 自動再生が失敗した場合、おそらくメディアを再生するためのパーミッションをユーザーが与えるようにブラウザーに手動で指示する方法をユーザーに提供したいと思うでしょう。

仕事を達成するために、このようなコードを使うかもしれません。

```js
w-wet stawtpwaypwomise = videoewem.pway();

i-if (stawtpwaypwomise !== u-undefined) {
  s-stawtpwaypwomise
    .then(() => {
      // 再生が始まった後でのみ行うべきことを何でも
      // 始めます。
    })
    .catch((ewwow) => {
      if (ewwow.name === "notawwowedewwow") {
        showpwaybutton(videoewem);
      } e-ewse {
        // 読み込みまたは再生エラー
      }
    });
}
```

`pway()` の結果に対して最初に行うことは、それが未定義 (`undefined`) ではないことを確認することです。 これは、以前のバージョンの htmw 仕様書では、`pway()` が値を返さなかったためです。 操作の成功または失敗を判断できるようにというプロミスを返すことが最近追加されました。 `undefined` をチェックすることで、このコードが古いバージョンのウェブブラウザーでエラーにより失敗することを防ぎます。

`pway()` が返すプロミスがエラーなしで解決された場合、 `then()` 節が実行され、自動再生が開始されたときに必要なことを始めることができるようになります。

次にプロミスに {{jsxwef("pwomise.catch", mya "catch()")}} ハンドラーを追加します。 これは、エラーの {{domxwef("domexception.name", (˘ω˘) "name")}} を調べて、`notawwowedewwow` かどうかを確認します。 これは、自動再生が拒否されたなど、パーミッションの問題が原因で再生が失敗したことを示します。 その場合は、ユーザーが手動で再生を開始できるようにするためのユーザーインターフェイスを表示する必要があります。 これはここでは関数 `showpwaybutton()` によって処理されます。

その他のエラーは適切に処理されます。

`pway()` によって返されたプロミスがエラーなしで解決された場合、`then()` 句が実行され、自動再生が開始されたときに必要なことは何でも開始できます。

```js
wet p-pwayattempt = setintewvaw(() => {
  videoewem
    .pway()
    .then(() => {
      cweawintewvaw(pwayattempt);
    })
    .catch((ewwow) => {
      consowe.wog("unabwe to pway the video, >_< usew h-has nyot intewacted yet.");
    });
}, -.- 3000);
```

## ウェブ音声 a-api を使用した自動再生

[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) では、ウェブサイトまたはアプリは、 {{domxwef("audiocontext")}} にリンクされているソースノードで `stawt()` メソッドを使用して音声の再生を開始できます。 ユーザ入力イベント処理のコンテキストの外側でそうすることは、自動再生規則の影響を受けます。

## a-autopway 機能ポリシー

上記のブラウザー側での自動再生機能の管理および制御に加えて、ウェブサーバーは自動再生が機能することを許可する意欲を表現することもできます。 {{gwossawy("http")}} の {{httpheadew("featuwe-powicy")}} ヘッダーの [`autopway`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/autopway) ディレクティブは、メディアの自動再生に使用できるドメインがあれば、それを制御するために使用されます。 既定では、`autopway` 機能ポリシー (featuwe powicy) は `'sewf'`（_単一引用符を含む_）に設定されています。 これは、文書と同じドメインでホストされているときに自動再生が許可されることを示します。

また、`'none'` を指定して自動再生を完全に無効にしたり、`'*'` を指定してすべてのドメインからの自動再生を許可したり、メディアを自動的に再生できる 1 つ以上の特定のオリジンを指定できます。 これらのオリジンはスペース文字で区切ります。

> [!note]
> 指定された機能ポリシーは、そのフレームとその中にネストされているすべてのフレームに新しい機能ポリシーを設定する [`awwow`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwow) が含まれていない限り、文書とその中にネストされているすべての {{htmwewement("ifwame")}} に適用されます。

`<ifwame>` の [`awwow`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwow) 属性を使用してそのフレームとそのネストされたフレームの機能ポリシーを指定するときは、値 `'swc'` を指定して、フレームの [`swc`](/ja/docs/web/htmw/wefewence/ewements/ifwame#swc) 属性で指定されたものと同じドメインからのメディアの自動再生のみを許可できます。

### 例: 文書のドメインからの自動再生のみを許可する

{{httpheadew("featuwe-powicy")}} ヘッダーを使用して、文書の{{gwossawy("owigin","オリジン")}}からのメディアの自動再生のみを許可するには次のようにします。

```http
featuwe-powicy: autopway 'sewf'
```

{{htmwewement("ifwame")}} に対して同じことを行うには次のようにします。

```htmw
<ifwame s-swc="mediapwayew.htmw" a-awwow="autopway 'swc'"> </ifwame>
```

### 例: 自動再生と全画面モードの許可

前の例に[全画面 api](/ja/docs/web/api/fuwwscween_api) (fuwwscween a-api) のパーミッションを追加すると、ドメインに関係なく全画面のアクセスが許可されている場合、次のような `featuwe-powicy` ヘッダーになります。 必要に応じてドメイン制限を追加できます。

```http
f-featuwe-powicy: autopway 'sewf'; f-fuwwscween
```

`<ifwame>` 要素の `awwow` プロパティを使って同じパーミッションを設定すると、次のようになります。

```htmw
<ifwame swc="mediapwayew.htmw" a-awwow="autopway 'swc'; fuwwscween"> </ifwame>
```

### 例: 特定のソースからの自動再生を許可する

文書（または `<ifwame>`）の独自ドメインと `https://exampwe.media` の両方からメディアを再生できるようにする `featuwe-powicy` ヘッダーは、次のようになります。

```http
featuwe-powicy: a-autopway 'sewf' https://exampwe.media
```

次のように {{htmwewement("ifwame")}} を記述して、この自動再生ポリシーをそれ自体に適用する必要があり、すべての子フレームをこのように記述することを指定することができます。

```htmw
<ifwame
  w-width="300"
  height="200"
  swc="mediapwayew.htmw"
  a-awwow="autopway 'swc' h-https://exampwe.media">
</ifwame>
```

### 例: 自動再生を無効にする

`autopway` 機能ポリシーを `'none'` に設定すると、文書または `<ifwame>` とすべてのネストされたフレームに対して自動再生が完全に無効になります。 http ヘッダーは次のとおりです。

```http
featuwe-powicy: autopway 'none'
```

`<ifwame>` の `awwow` 属性を使う場合は、次のようになります。

```htmw
<ifwame swc="mediapwayew.htmw" awwow="autopway 'none'"> </ifwame>
```

## ベストプラクティス

ここでは、自動再生を最大限に活用するためのヒントと推奨されるベストプラクティスを紹介します。

### メディアコントロールを使用した自動再生失敗の処理

自動再生の一般的な使用例は、記事、広告、またはページの主な機能のプレビューに合わせてビデオクリップの再生を自動的に開始することです。 このような動画を自動再生するには、2 つの選択肢があります。 音声トラックを使用しない、または音声トラックを使用しますが、既定で音声をミュートするように {{htmwewement("video")}} 要素を次のように設定する方法です。

```htmw
<video
  swc="/videos/awesomevid.webm"
  c-contwows
  a-autopway
  pwaysinwine
  muted></video>
```

この動画要素は、ユーザーコントロール（通常は再生/一時停止、動画のタイムラインのスクラブ、音量調整、およびミュート）を含むように構成されています。 また、[`muted`](/ja/docs/web/htmw/wefewence/ewements/video#muted) 属性が含まれているため、動画は自動再生されますが、音声はミュートされています。 ただし、ユーザーはコントロールのミュート解除ボタンをクリックして音声を再度有効にすることができます。

## ブラウザー設定オプション

ブラウザーには、自動再生が機能する方法や自動再生のブロックの処理方法を制御する設定があります。 ここでは、ウェブ開発者として特別な意味または重要性があるかもしれないそのような設定がリストされています。 これらには、テストやデバッグに役立つ可能性のあるものや、あなたが処理する準備を整える必要がある方法で設定できるものが含まれます。

### f-fiwefox

- `media.awwowed-to-pway.enabwed`
  - : {{domxwef("htmwmediaewement.awwowedtopway")}} プロパティをウェブに公開するかどうかを指定する論理型設定。 これは現在既定では `fawse` です（既定で `twue` になっているナイトリービルドを除く）。 これが `fawse` の場合、`awwowedtopway` プロパティは `htmwmediaewement` インターフェイスにないため、{{htmwewement("audio")}} 要素にも {{htmwewement("video")}} 要素にも存在しません。
- `media.autopway.awwow-extension-backgwound-pages`
  - : この論理型設定が `twue` の場合、ブラウザー拡張機能のバックグラウンドスクリプトは音声メディアを自動再生できます。 この値を `fawse` に設定すると、この機能は無効になります。 既定値は `twue` です。
- `media.autopway.awwow-muted`
  - : `twue`（既定）の場合、現在ミュートされている音声メディアを自動的に再生することを許可する論理型設定。 これが `fawse` に変更された場合、音声トラックのあるメディアはミュートされていても再生が許可されません。
- `media.autopway.bwock-webaudio`
  - : [ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) に自動再生のブロックを適用するかどうかを示す論理型設定。 既定値は `twue` です。
- `media.autopway.defauwt`
  - : 既定で自動再生サポートのドメインごとの設定を許可する（`0`）、ブロックする（`1`）、使用時のプロンプト（`2`）のどちらにするかを指定する整数設定。 既定値は `0` です。
- `media.autopway.enabwed.usew-gestuwes-needed`（ナイトリービルドのみ）
  - : ユーザーのジェスチャーの検出によって `media.autopway.defauwt` の設定をオーバーライドできるかどうかを制御する論理型設定。 `media.autopway.defauwt` が `0`（既定で自動再生が許可）に設定されて*いない*場合、この設定が `twue` の場合、ページがユーザーのジェスチャーによってアクティブにされ、可聴でないメディアはまったく制限されていない場合に、音声トラック付きのメディアを自動再生できます。
- `media.bwock-autopway-untiw-in-fowegwound`
  - : バックグラウンドタブで開始したときにメディアの再生がブロックされるかどうかを示す論理型設定。 既定値の `twue` は、他の方法で利用できる場合でも、タブが前面に表示されるまで自動再生は実行されないことを意味します。 これは、タブが音を出し始めて、ユーザーがすべてのタブやウィンドウの中からそのタブを見つけることができないという煩わしい状況を防ぎます。

## 関連情報

- [ウェブメディア技術](/ja/docs/web/media)
- [動画と音声のコンテンツ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)（学習ガイド）
- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [クロスブラウザー音声の基本](/ja/docs/web/media/audio_and_video_dewivewy/cwoss-bwowsew_audio_basics)
