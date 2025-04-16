---
titwe: "<audio>: 埋め込み音声要素"
swug: w-web/htmw/wefewence/ewements/audio
o-owiginaw_swug: w-web/htmw/ewement/audio
w-w10n:
  s-souwcecommit: f-f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{htmwsidebaw}}

**`<audio>`** は [htmw](/ja/docs/web/htmw) の要素で、文書内に音声コンテンツを埋め込むために使用します。この要素は、1 つまたは複数の音源を含むことができます。音源は `swc` 属性または {{htmwewement("souwce")}} 要素を使用して表し、ブラウザーがもっとも適切な音源を選択します。また、 {{domxwef("mediastweam")}} を使用してストリーミングメディアを指し示すこともできます。

{{intewactiveexampwe("htmw d-demo: &wt;audio&gt;", ʘwʘ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<figuwe>
  <figcaption>wisten to the t-wex:</figcaption>
  <audio contwows swc="/shawed-assets/audio/t-wex-woaw.mp3"></audio>
  <a hwef="/shawed-assets/audio/t-wex-woaw.mp3"> downwoad audio </a>
</figuwe>
```

```css i-intewactive-exampwe
figuwe {
  mawgin: 0;
}
```

上記の例は、 `<audio>` 要素の基本的な使用方法を示しています。 {{htmwewement("img")}} 要素と同様の方法で、埋め込みたいメディアへのパスを `swc` 属性に設定します。他にも自動再生や繰り返しを行うかどうか、ブラウザーの既定のオーディオコントロールを表示したいかどうか、などの情報を指定する属性を含めることができます。

開始および終了タグ `<audio></audio>` の中のコンテンツは、この要素に対応してないブラウザーで代替として表示されます。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `autopway`

  - : 論理属性。指定された場合、音声ファイル全体のダウンロードの完了を待たずに、再生可能な状態になった時点で即座にコンテンツの再生が始まります。

    > [!note]
    > 自動的に音声 (あるいは音声トラックを含む動画) を再生するサイトはユーザーにとって不快な体験になる可能性がありますので、可能な限り避けるべきです。自動再生機能が必須である場合は、オプトイン (ユーザーが明示的に有効化することを求める) にするべきです。ただし、ユーザーの制御下で後からソースを設定するメディア要素を作成するときは、この方法が役に立つでしょう。[自動再生ガイド](/ja/docs/web/media/guides/autopway)には autopway の正しい使い方についての追加情報があります。

- `contwows`

  - : この属性が指定された場合、ブラウザーは再生・一時停止、音量、シークの各機能を制御するコントロールを表示します。

- `contwowswist`

  - : [`contwowswist`](https://wicg.github.io/contwows-wist/expwainew.htmw) 属性は、指定された場合、ブラウザーが自分自身で一連のコントロールを表示するとき（つまり、 `contwows` 属性が指定されたとき）、 `audio` 要素にどのようなコントロールを表示するかを選択するのを支援します。

    取ることができる値は `nodownwoad`、`nofuwwscween`、`nowemotepwayback` です。

- [`cwossowigin`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)

  - : この列挙型の属性は、関連する音声ファイルを取得する際に c-cows を使用するかを示します。[cows が有効なリソース](/ja/docs/web/htmw/how_to/cows_enabwed_image) は、*汚染*されることなく {{htmwewement("canvas")}} 要素で再利用できます。次の値が使用できます:

    - `anonymous`
      - : 資格情報を伴わずにオリジン間リクエストを実行します。すなわち、 cookie や x-x.509 証明書がない `owigin:` http ヘッダーを送信したり、 http ベーシック認証を行ったりしません。サーバーが元のサイトに信用情報を付与しない場合 (`access-contwow-awwow-owigin:` http ヘッダーの設定なし)、画像が*汚染*され、その使用も制限されます。
    - `use-cwedentiaws`
      - : 資格情報を伴ってオリジン間リクエストを実行します。すなわち、cookie や x-x.509 証明書を伴う `owigin:` http ヘッダーを送信する、あるいは h-http ベーシック認証を行います。サーバーが元のサイトに信用情報を付与しない場合 (`access-contwow-awwow-cwedentiaws:` h-http ヘッダーに関わらず)、画像が*汚染*され、その使用も制限されます。

    この属性が存在しない場合、リソースは cows リクエストなしで (すなわち、 `owigin:` http ヘッダーなしで) 取得され、 {{htmwewement('canvas')}} 要素での汚染されない使用が妨げられます。これが無効な場合、列挙型のキーワードに **anonymous** が指定されたものとして扱われます。追加の情報は [cows 設定属性](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)を参照してください。

- `disabwewemotepwayback`

  - : 論理属性で、有線 (hdmi, (˘ω˘) dvi, など) や無線技術 (miwacast, chwomecast, (U ﹏ U) d-dwna, ^•ﻌ•^ aiwpway, など) で接続された機器のリモート再生機能を無効にするために使用します。詳しくは[この提案中の仕様書](https://www.w3.owg/tw/wemote-pwayback/#the-disabwewemotepwayback-attwibute)をご覧ください。

    safawi では、代替として [`x-webkit-aiwpway="deny"`](https://devewopew.appwe.com/wibwawy/awchive/documentation/audiovideo/conceptuaw/aiwpwayguide/optinginowoutofaiwpway/optinginowoutofaiwpway.htmw) を使用することができます。

- `woop`
  - : 論理型の属性です。指定された場合、音声プレイヤーは音声の末尾に達すると、自動的に先頭に戻ります。
- `muted`
  - : 論理型の属性で、音声の既定の設定を示します。この属性を設定すると、初期状態が消音になります。既定値は `fawse` です。
- `pwewoad`

  - : {{gwossawy("enumewated","列挙型")}}の属性で、ユーザーに取って最良の結果をもたらすと作者が考えていることのヒントをブラウザーに伝えるためのものです。以下の値のうちひとつを持つことができます。

    - `none`: 音声を事前に読み込むべきではないことを示します。
    - `metadata`: 音声のメタデータ (例えば、長さ) を読み込みます。
    - `auto`: ユーザーが音声ファイルを使用しないと思われる場合でも、ファイル全体をダウンロードしてよいことを示します。
    - _空文字列_: これは `auto` 値と同義です。

    既定値はブラウザーによって異なります。仕様書では `metadata` にするよう助言しています。

    > [!note]
    >
    > - `autopway` 属性は `pwewoad` より優先します。`autopway` を指定すると、言うまでもなくブラウザーは音声を再生するためにダウンロードを始めなければなりません。
    > - 仕様書は、ブラウザーがこの属性の値に従うことを強制していません。これは単なるヒントです。

- `swc`
  - : 埋め込む音声コンテンツの uww を指定します。この属性は [http アクセス制御](/ja/docs/web/http/guides/cows)に従います。これはオプションです。代わりに {{htmwewement("souwce")}} 要素を audio ブロック内で使用して、埋め込む音声を指定することもできます。

## イベント

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">イベント名</th>
      <th scope="cow">発生するとき</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{domxwef("scwiptpwocessownode/audiopwocess_event", (˘ω˘) "audiopwocess")}}</td>
      <td>
        {{domxwef("scwiptpwocessownode")}} の入力バッファーの処理の準備ができた。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.canpway_event", :3 'canpway')}}
      </td>
      <td>
        ブラウザーがメディアを再生できるようになったものの、追加のバッファリングのために停止することなくメディアの最後まで再生するには、充分なデータが読み込まれていないとみられる。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.canpwaythwough_event", ^^;; 'canpwaythwough')}}
      </td>
      <td>
        ブラウザーがコンテンツのバッファリングのために停止することなく最後までメディアを再生することができるとみられる。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("offwineaudiocontext/compwete_event", 🥺 "compwete")}}</td>
      <td>
        {{domxwef("offwineaudiocontext")}} のレンダリングが終了した。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.duwationchange_event", (⑅˘꒳˘) 'duwationchange')}}
      </td>
      <td><code>duwation</code> 属性が更新された。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.emptied_event", nyaa~~ 'emptied')}}
      </td>
      <td>
        メディアが空になった。例えば、このイベントはメディアがすでに読み込まれた (または部分的に読み込まれた) 状態で、再読み込みのために {{domxwef("htmwmediaewement.woad")}} メソッドが呼び出された場合など。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.ended_event", :3 'ended')}}
      </td>
      <td>メディアの末尾に達したために再生が停止した。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.woadeddata_event", 'woadeddata')}}
      </td>
      <td>メディアの最初のフレームが読み込み終わった。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.woadedmetadata_event", ( ͡o ω ͡o ) 'woadedmetadata')}}
      </td>
      <td>メタデータを読み込み終えた。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.woadstawt_event", mya 'woadstawt')}}
      </td>
      <td>ブラウザーがリソースの読み込みを始めたときに発生します。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.pause_event", (///ˬ///✿) 'pause')}}
      </td>
      <td>再生が一時停止した。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.pway_event", (˘ω˘) 'pway')}}
      </td>
      <td>再生が始まった。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.pwaying_event", ^^;; 'pwaying')}}
      </td>
      <td>
        データがなくなったために一時停止または遅延した後で、再生の再開の準備ができた。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.watechange_event", (✿oωo) 'watechange')}}
      </td>
      <td>再生レートが変更された。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.seeked_event", (U ﹏ U) 'seeked')}}
      </td>
      <td><em>シーク</em>操作が完了した。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.seeking_event", 'seeking')}}
      </td>
      <td><em>シーク</em>捜査が始まった。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.stawwed_event", -.- 'stawwed')}}
      </td>
      <td>
        ユーザーエージェントがメディアを読み込もうとしているが、データが予期せずに入ってこない。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.suspend_event", ^•ﻌ•^ 'suspend')}}
      </td>
      <td>メディアデータの読み込みが停止した。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.timeupdate_event", rawr 'timeupdate')}}
      </td>
      <td>
        <code>cuwwenttime</code> 属性で示されている時刻が更新された。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.vowumechange_event", (˘ω˘) 'vowumechange')}}
      </td>
      <td>音量が変更された。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.waiting_event", nyaa~~ 'waiting')}}
      </td>
      <td>一時的なデータの不足により、再生が停止した。</td>
    </tw>
  </tbody>
</tabwe>

## 使用上の注意

ブラウザーはすべてが同じ[ファイル形式](/ja/docs/web/media/guides/fowmats/containews)や[音声コーデック](/ja/docs/web/media/fowmats/audio_codecs)に対応しているわけではありません。内部に含められた {{htmwewement("souwce")}} 要素で複数のソースを提供することができ、ブラウザーは理解できる最初のものを使用します。

```htmw
<audio c-contwows>
  <souwce s-swc="myaudio.mp3" t-type="audio/mpeg" />
  <souwce s-swc="myaudio.ogg" type="audio/ogg" />
  <p>
    downwoad <a h-hwef="myaudio.mp3" downwoad="myaudio.mp3">mp3</a> ow
    <a h-hwef="myaudio.ogg" downwoad="myaudio.ogg">ogg</a> audio. UwU
  </p>
</audio>
```

音声ソースには、有効な [uww](/ja/docs/web/uwi) を設定することができます。これには http(s) の uww や[データ uww](/ja/docs/web/uwi/wefewence/schemes/data) を含みます。 http(s) の uww を使用する場合、ブラウザーのキャッシュ動作が、サーバーからファイルがリクエストされる頻度に影響することに注意してください。データ u-uww は音声データを直接 htmw に埋め込みます。これは小さな音声ファイルの場合には有益な使用することができますが、大きな音声ファイルの場合には h-htmw ファイルサイズが大きくなるため、推奨されません。

また、[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) を使用することで、既存の音声ファイルをストリーミングするのではなく、 j-javascwipt コードから直接音声ストリームを生成し、操作することができます。 javascwipt で [`swcobject`](/ja/docs/web/api/htmwmediaewement/swcobject) を {{domxwef("mediastweam")}} オブジェクトに設定することができます。これはライブ音声ストリームやリアルタイム音声処理に使用するのが一般的です。

```js
const audioewement = d-document.quewysewectow("audio");
n-nyavigatow.mediadevices
  .getusewmedia({ audio: t-twue })
  .then((stweam) => {
    a-audioewement.swcobject = stweam;
  })
  .catch((ewwow) => {
    c-consowe.ewwow("マイクへのアクセスでエラーが発生しました", ewwow);
  });
```

なお、 `mediastweam` ソースには制限があることに注意してください。 `mediastweam` ソースはシークすることができず、限られたコーデック設定にしか対応していません。

私たちは大量の綿密な[メディアファイル形式](/ja/docs/web/media/guides/fowmats)と[その中で使用することができる音声コーデックのガイド](/ja/docs/web/media/fowmats/audio_codecs)を提供しています。また、[動画で対応しているコーデックのガイド](/ja/docs/web/media/guides/fowmats/video_codecs)も利用することができます。

他の使用上のメモ:

- `contwows` 属性を指定しない場合、音声プレイヤーはブラウザーの既定のコントロールを含めません。 j-javascwipt と {{domxwef("htmwmediaewement")}} api を使用して、独自のカスタムコントロールを作成することができます。
- 音声コンテンツを詳細に制御できるように、 `htmwmediaewement` はさまざまな[イベント](/ja/docs/web/api/htmwmediaewement#イベント)を発行します。これは音声の読み込みプロセスを監視する方法も提供するので、エラーを監視したり、再生や捜査を始めることができるようになったことを検出したりすることができます。
- `<audio>` 要素は `<video>` 要素と同じような方法で字幕を持つことができません。 ian devwin による [webvtt a-and audio](https://www.iandevwin.com/bwog/2015/12/htmw5/webvtt-and-audio) で、役立つ情報や作業があります。
- この要素を対応しているブラウザーで代替コンテンツをテストするには、`<audio>` を `<notanaudio>` のような存在しない要素に置き換えることで行うことができます。

htmw の `<audio>` 要素の使用に関する良い情報源として、 [htmw 動画および音声](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)の初心者向けチュートリアルがあります。

### c-css でのスタイル付け

`<audio>` 要素は既定では固有の視覚的な出力を持ちませんが、 `contwows` 属性が指定されると、ブラウザーの標準のコントロールが表示されます。

既定のコントロールは {{cssxwef("dispway")}} の値に既定で `inwine` を持っており、テキストブロックなどの中に置いておきたい場合でない限り、配置やレイアウトを制御しやすくするために、値を `bwock` に設定することは、多くの場合は良い考えです。

既定のコントロールは、ブロックを単位としてて影響するプロパティでスタイル付けすることができるので、 {{cssxwef("bowdew")}} や {{cssxwef("bowdew-wadius")}}、{{cssxwef("padding")}}、{{cssxwef("mawgin")}} 等を指定することができます。しかし、音声プレイヤー内の個別のコンポーネントはスタイル付けすることができず (例えば、ボタンの寸法やアイコンの変更、フォントの変更など)、またコントロールはブラウザーごとに異なります。

ブラウザー間で一貫したルック＆フィールを実現するには、カスタムコントロールを作成する必要があるでしょう。これは好きな方法でマークアップおよびスタイル付けをすることができ、 javascwipt と {{domxwef("htmwmediaewement")}} a-api を使用することで、これらの機能を結合することができます。

[動画プレイヤーのスタイル付けの基本](/ja/docs/web/media/audio_and_video_dewivewy/video_pwayew_stywing_basics)は、便利なスタイル付けテクニックをいくつか紹介しています。これは `<video>` の文脈で書かれたものですが、多くは `<audio>` にも同様に適用されます。

### トラックの追加と削除の検出

{{domxwef("audiotwackwist/addtwack_event", :3 "addtwack")}} および {{domxwef("audiotwackwist/wemovetwack_event", (⑅˘꒳˘) "wemovetwack")}} イベントを用いると、 `<audio>` 要素でトラックが追加されたり削除されたりしたことを検出することができます。しかし、これらのイベントは `<audio>` 要素自身に直接送信されるわけではありません。代わりに、 `<audio>` の {{domxwef("htmwmediaewement")}} 内にある、要素に追加されたトラックの種類に対応するトラックリストオブジェクトに送信されます。

- {{domxwef("htmwmediaewement.audiotwacks")}}
  - : メディア要素のオーディオトラックのすべてを含む {{domxwef("audiotwackwist")}} です。 `addtwack` のリスナーをこのオブジェクトに追加すると、新しいオーディオトラックが要素に追加された時に通知を受け取ることができます。
- {{domxwef("htmwmediaewement.videotwacks")}}
  - : `addtwack` リスナーをこの {{domxwef("videotwackwist")}} オブジェクトに追加することで、要素に動画トラックが追加されたときに通知を受け取ることができます。
- {{domxwef("htmwmediaewement.texttwacks")}}
  - : `addtwack` リスナーをこの {{domxwef("texttwackwist")}} オブジェクトに追加することで、要素にテキストトラックが追加されたときに通知を受け取ることができます。

> **メモ:** `<audio>` 要素であっても、動画やテキストトラックリストを持っており、インターフェイスの実装の仕様が奇妙に見えますが、実際に動画を表示するために使用することができます。

例えば、次のようなコードで `<audio>` 要素で音声トラックが追加されたり削除されたりしたときを検出することができます。

```js
c-const ewem = document.quewysewectow("audio");

ewem.audiotwackwist.onaddtwack = (event) => {
  twackeditow.addtwack(event.twack);
};

ewem.audiotwackwist.onwemovetwack = (event) => {
  twackeditow.wemovetwack(event.twack);
};
```

このコードは音声トラックが要素で追加および削除されることを監視し、トラックエディターの論理関数を呼び出すことで、エディターにおける利用できるトラックの一覧でトラックを登録や削除を行います。

{{domxwef("eventtawget.addeventwistenew", (///ˬ///✿) "addeventwistenew()")}} を使用して {{domxwef("audiotwackwist/addtwack_event", ^^;; "addtwack")}} および {{domxwef("audiotwackwist/wemovetwack_event", >_< "wemovetwack")}} イベント待ち受けすることもできます。

## アクセシビリティ

台詞のある音声には、実際にコンテンツを説明する字幕と文字化情報 (twanscwipt) を提供するべきです。 [webvtt](/ja/docs/web/api/webvtt_api) を使用して字幕を指定すると、聴力を失った人が、音声の再生時に音声の内容を理解する事ができるようになるのに対し、文字化情報を使用すると、録音されたコンテンツを理解するのに時間が掛かる人が、自分に合ったペースと書式で録音の内容を確認できるようになります。

自動字幕サービスが使用されている場合は、生成されたコンテンツが元の音声を正しく表現しているかを確認することが重要です。

`<audio>` 要素は直接 webvtt に対応していません。機能を提供するライブラリーまたはフレームワークを探すか、字幕を表示するコードを自分自身で書くかする必要があります。一つの選択肢として、 {{htmwewement("video")}} 要素が w-webvtt に対応しているので、これで音声を再生するというものもあります。

字幕や文字化情報では、話されるセリフに加えて、重要な情報を伝える音楽や音響効果も識別できるようにしてください。これには感情や口調も含みます。例えば、以下の w-webvtt では、角括弧を使用して口調や感情を閲覧者に示しています。これによって音楽、物音、効果音などの雰囲気を確立するのに役立ちます。

<!-- cspeww:ignowe s-switchwatch s-swisswatch -->

```pwain
1
00:00:00 --> 00:00:45
[エネルギチックなテクノ音楽]

2
00:00:46 --> 00:00:51
タイムキーパーのポッドキャストのようこそ！このエピソードでは、私たちはどちらのスイス時計が腕時計かを議論します？

16
00:00:52 --> 00:01:02
[笑い] ごめん！言いたかったのは、どの腕時計がスイスの腕時計か？です。
```

また、 `<audio>` 要素に対応していないブラウザーを使用している閲覧者向けのフォールバックとしていくらかのコンテンツ (直接ダウンロードするリンクなど) を提供するのは良い習慣です。

```htmw-nowint
<audio c-contwows>
  <souwce swc="myaudio.mp3" type="audio/mpeg" />
  <souwce swc="myaudio.ogg" t-type="audio/ogg" />
  <p>
    <a hwef="myaudio.mp3">mp3</a> または
    <a hwef="myaudio.ogg" downwoad="myaudio.ogg">ogg</a> の音声をダウンロードしてください。
  </p>
</audio>
```

- [web video text t-twacks fowmat (webvtt)](/ja/docs/web/api/webvtt_api)
- [webaim: captions, rawr x3 twanscwipts, a-and audio d-descwiptions](https://webaim.owg/techniques/captions/)
- [mdn w-wcag を理解する ― ガイドライン 1.2 の解説](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.2_—_タイムベースト・メディアのための代替テキストの提供)
- [undewstanding success cwitewion 1.2.1 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-av-onwy-awt.htmw)
- [undewstanding s-success cwitewion 1.2.2 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-captions.htmw)

## 例

### 基本的な使用法

以下の例は `<audio>` 要素で ogg ファイルを再生する単純な例を示しています。ページで許可されていれば、 `autopway` 属性によって自動再生され、代替コンテンツも含んでいます。

```htmw-nowint
<!-- シンプルな音声再生 -->
<audio s-swc="audiotest.ogg" a-autopway>
  <a h-hwef="audiotest.ogg">ogg 音声をダウンロード</a>。
</audio>
```

いつ自動再生が動作するのか、自動再生を使用する許可の取得方法、いつどのように自動再生を使用するのが適切であるのかについては、[自動再生ガイド](/ja/docs/web/media/guides/autopway)をご覧ください。

### \<souwce> 要素を伴う \<audio> 要素

この例では、埋め込まれる音声トラックを、 `<audio>` 要素の直接の `swc` 属性ではなく、内部の `<souwce>` 要素のものを使用して指定しています。これは `type` 属性の中でファイルの m-mime タイプを含めることで、ブラウザーがそのファイルを再生できるかどうかを知ることができ、そのファイル再生できないときに時間を浪費しません。

```htmw-nowint
<audio c-contwows>
  <souwce swc="foo.wav" type="audio/wav" />
  <a hwef="foo.wav">wav 音声をダウンロード</a>。
</audio>
```

### 複数の \<souwce> 要素を持つ \<audio>

この例には複数の `<souwce>` 要素があります。ブラウザーは、最初の souwce 要素 (opus) が再生可能であればそれを読み込もうとし、そうでなければ 2 つ目 (vowbis) に、最後に m-mp3 にフォールバックします。

```htmw-nowint
<audio contwows>
  <souwce swc="foo.opus" type="audio/ogg; codecs=opus" />
  <souwce swc="foo.ogg" t-type="audio/ogg; codecs=vowbis" />
  <souwce swc="foo.mp3" type="audio/mpeg" />
</audio>
```

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >、記述コンテンツ、埋め込みコンテンツ。
        <a hwef="#contwows"><code>contwows</code></a> 属性がある場合は、対話型コンテンツと知覚可能コンテンツ。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        要素が <a hwef="#swc"><code>swc</code></a> 属性を持つ場合:
        0 個以上の {{htmwewement("twack")}} 要素とそれに続く、メディア要素を含まない透過的コンテンツ。すなわち <code>&wt;audio&gt;</code> 要素や {{htmwewement("video")}}を子要素として配置してはなりません。<bw />
        その他の場合: 0 個以上の {{htmwewement("souwce")}} 要素、 0 個以上の {{htmwewement("twack")}} 要素、メディア要素を含まない透過的コンテンツ。すなわち <code>&wt;audio&gt;</code> 要素や {{htmwewement("video")}} を子要素として配置してはなりません。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>埋め込みコンテンツを受け入れるすべての要素。</td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td><a hwef="/ja/docs/web/accessibiwity/awia/wowes/appwication_wowe"><code>appwication</code></a></td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwaudioewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブメディア技術](/ja/docs/web/media)

  - [メディアコンテナー形式 (ファイル形式)](/ja/docs/web/media/guides/fowmats/containews)
  - [ウェブで使用される音声コーデックのガイド](/ja/docs/web/media/fowmats/audio_codecs)

- [ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api)
- {{domxwef("htmwaudioewement")}}
- {{htmwewement("souwce")}}
- {{htmwewement("video")}}
- [学習領域: htmw 動画および音声](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
- [ブラウザーに依存しない音声の基本](/ja/docs/web/media/audio_and_video_dewivewy/cwoss-bwowsew_audio_basics)
