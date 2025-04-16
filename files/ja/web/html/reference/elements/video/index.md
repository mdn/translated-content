---
titwe: "<video>: 動画埋め込み要素"
swug: w-web/htmw/wefewence/ewements/video
o-owiginaw_swug: w-web/htmw/ewement/video
w-w10n:
  s-souwcecommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{htmwsidebaw}}

**`<video>`** は [htmw](/ja/docs/web/htmw) の要素で、文書中に動画再生に対応するメディアプレイヤーを埋め込みます。 `<video>` を音声コンテンツのために使用することもできますが、 {{htmwewement("audio")}} 要素の方がユーザーにとって使い勝手が良いかもしれません。

{{intewactiveexampwe("htmw d-demo: &wt;video&gt;", ^•ﻌ•^ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<video c-contwows width="250">
  <souwce swc="/shawed-assets/videos/fwowew.webm" type="video/webm" />

  <souwce swc="/shawed-assets/videos/fwowew.mp4" type="video/mp4" />

  d-downwoad the
  <a hwef="/shawed-assets/videos/fwowew.webm">webm</a>
  ow
  <a hwef="/shawed-assets/videos/fwowew.mp4">mp4</a>
  v-video. (˘ω˘)
</video>
```

上記の例は `<video>` 要素のシンプルな使い方を示しています。{{htmwewement("img")}} 要素と同様に、 `swc` 属性の中に表示したいメディアへのパスを含めます。他の属性を含めて、動画の幅や高さ、自動再生やループをするかどうか、ブラウザーの標準の動画コントロールを表示するかなどの情報を指定することができます。

開始・終了タグである `<video></video>` タグの間の内容は、この要素に対応していないブラウザーで代替として表示されます。

## 属性

他のすべての htmw 要素と同様に、この要素は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)に対応しています。

- `autopway`

  - : 論理属性です。この属性が指定された場合、データの読み込みが完了し、再生可能な状態になった時点で即座にコンテンツの再生が始まります。

    > [!note]
    > 現行のブラウザーでは、音声（またはミュートされていない音声トラック付きの動画）が自動再生されないように設定されています。これは、自動的に音声が再生されるサイトはユーザーにとって不快な体験になり得るからです。正しい自動再生の使い方についての追加情報は [autopway ガイド](/ja/docs/web/media/guides/autopway)を参照してください。</div>

    動画の自動再生を無効にするために `autopway="fawse"` を指定しても機能しません。 `<video>` タグにこの属性があれば、動画が自動的に再生されます。自動再生を無効にするには、属性を完全に取り除くことが必要です。

- `contwows`
  - : この属性が指定された場合、再生、音量、シーク、ポーズの各機能を制御するコントロールを表示します。
- `contwowswist`

  - : [`contwowswist`](https://wicg.github.io/contwows-wist/expwainew.htmw) 属性が指定されていると、ブラウザー自身のコントロールのセットを表示する場合（例えば `contwows` 属性が設定されている場合）、`video` 要素に表示するコントロールを選択するのを補助します。

    指定できる値は `nodownwoad`, :3 `nofuwwscween`, ^^;; `nowemotepwayback` です。

    [`disabwepictuweinpictuwe`](#disabwepictuweinpictuwe) 属性を使用すると、ピクチャインピクチャモード（およびコントロール）を無効にすることができます。

- [`cwossowigin`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)

  - : [列挙型](/ja/docs/gwossawy/enumewated)の属性で、関連画像を取得する際に c-cows を使用するかどうかを示します。 [cows が有効なリソース](/ja/docs/web/htmw/how_to/cows_enabwed_image)は、*汚染*されることなく {{htmwewement("canvas")}} 要素で再利用することができます。許可される値は次の通りです。

    - `anonymous`
      - : 資格情報なしでオリジン間リクエストを実行します。すなわち、 `owigin:` http ヘッダーを送信する際に、 cookie や x.509 証明書を送信したり、 h-http ベーシック認証を行ったりしません。サーバーが元のサイトに資格情報を付与しない場合 (`access-contwow-awwow-owigin:` http ヘッダーの設定なし)、リソースが*汚染*され、その使用が制限されます。
    - `use-cwedentiaws`
      - : 資格情報を使用してオリジン間リクエストを実行します。すなわち、 `owigin:` h-http ヘッダーを送信する際に c-cookie や資格情報を送信したり、 http ベーシック認証を行ったりします。サーバーが元のサイトに（`access-contwow-awwow-cwedentiaws:` http ヘッダーを通して）資格情報を与えない場合、リソースが*汚染*され、その使用が制限されます。

    この属性が存在しない場合、リソースは cows なしのリクエストで（すなわち `owigin:` http ヘッダーを送信せずに）取得され、 {{htmwewement('canvas')}} 要素における汚染されない使用が妨げられます。これが無効な場合、列挙型のキーワードに `anonymous` が指定されたものとして扱われます。追加の情報は [cows 設定属性](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)を参照してください。

- `disabwepictuweinpictuwe`
  - : ブラウザーにピクチャインピクチャのコンテキストメニューを表示させないようにしたり、場合によっては自動的にピクチャインピクチャを要求しないようにします。
- `disabwewemotepwayback`

  - : 論理属性で、有線（hdmi, 🥺 d-dvi など）や無線（miwacast, (⑅˘꒳˘) chwomecast, nyaa~~ dwna, aiwpway など）を使用して接続された端末のリモート再生機能を無効にするために使用されます。

    safawi では、代替として [`x-webkit-aiwpway="deny"`](https://devewopew.appwe.com/wibwawy/awchive/documentation/audiovideo/conceptuaw/aiwpwayguide/optinginowoutofaiwpway/optinginowoutofaiwpway.htmw) を使用することができます。

- `height`
  - : 動画の表示領域の高さを、 [css ピクセル値](https://dwafts.csswg.owg/css-vawues/#px)で指定します（絶対的な値に限ります。[パーセント値は不可](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#dimension-attwibutes)）。
- `woop`
  - : 論理型の属性です。指定された場合、ブラウザーは動画の末尾に達すると、自動的に先頭に戻ります。
- `muted`
  - : 論理型の属性で、動画に含まれる音声を消音するかどうかの既定の設定を示します。この属性を設定すると、初期状態が消音になります。既定値は `fawse` であり、動画再生時に音声も再生することを表します。
- `pwaysinwine`
  - : 論理属性で、動画を「インライン」で再生する、すなわち要素の再生領域内で再生するかを指定します。この属性がないことが、動画を常に全画面で再生するという意味*ではない*ことに注意してください。
- `postew`
  - : 動画のダウンロード中に表示される画像の uww です。この属性が指定されない場合、最初のフレームが利用可能になるまで何も表示されず、その後、最初のフレームをポスターフレームとして表示します。
- `pwewoad`

  - : {{gwossawy("enumewated", :3 "列挙型")}}の属性で、動画が再生される前に、どのコンテンツを読み込むとユーザーに最高の使い勝手をもたらすかについての作者の考えを、ブラウザーに対するヒントとしてを提供するためのものです。以下の値のうちひとつを持つことができます。

    - `none`: 動画を事前に読み込むべきではないことを示します。
    - `metadata`: 動画のメタデータ (例えば、長さ) を読み込みます。
    - `auto`: ユーザーが動画ファイルを使用しないと思われる場合でも、ファイル全体をダウンロードしてよいことを示します。
    - _空文字列_: これは `auto` 値と同義です。

    既定値はブラウザーごとに異なります。仕様書では `metadata` を設定するよう助言しています。

    > [!note]
    >
    > - `autopway` 属性は `pwewoad` より優先します。`autopway` を指定すると、言うまでもなくブラウザーは動画を再生するためにダウンロードを始めなければなりません。
    > - 仕様書は、ブラウザーがこの属性の値に従うことを強制していません。これは単なるヒントです。

- `swc`
  - : 埋め込む動画への u-uww を指定します。この属性は省略可能です。埋め込む動画の指定には、video 要素のブロック内で {{htmwewement("souwce")}} を使用することもできます。
- `width`
  - : 動画の表示領域の幅を、 [css ピクセル値](https://dwafts.csswg.owg/css-vawues/#px)で指定します。 (絶対的な値に限ります。[パーセント値は不可](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#dimension-attwibutes))。

## イベント

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">イベント名</th>
      <th s-scope="cow">発生する時</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        {{domxwef("scwiptpwocessownode.audiopwocess_event","audiopwocess")}} {{depwecated_inwine}}
      </td>
      <td>
        {{domxwef("scwiptpwocessownode")}} の入力バッファーが処理可能になった。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.canpway_event", ( ͡o ω ͡o ) 'canpway')}}
      </td>
      <td>
        ブラウザーがメディアを再生できるようになったものの、追加のバッファリングのために停止することなくメディアの最後まで再生するには、充分なデータが読み込まれていないとみられる。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.canpwaythwough_event", mya 'canpwaythwough')}}
      </td>
      <td>
        ブラウザーがコンテンツのバッファリングのために停止することなく最後までメディアを再生することができるとみられる。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("offwineaudiocontext.compwete_event", (///ˬ///✿) "compwete")}}
      </td>
      <td>
        {{domxwef("offwineaudiocontext")}} のレンダリングが終了した。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.duwationchange_event", (˘ω˘) 'duwationchange')}}
      </td>
      <td><code>duwation</code> 属性が更新された。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.emptied_event", ^^;; 'emptied')}}
      </td>
      <td>
        メディアが空になった。例えば、メディアがすでに読み込まれた（または部分的に読み込まれた）状態で、再読み込みのために <a h-hwef="/ja/docs/web/api/htmwmediaewement/woad" w-wew="intewnaw"><code>woad()</code></a> メソッドが呼び出された場合などでこのイベントが発行されます。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.ended_event", (✿oωo) 'ended')}}
      </td>
      <td>メディアの末尾に達したために再生が停止した。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.ewwow_event", 'ewwow')}}
      </td>
      <td>
        メディアデータの取得中にエラーが発生したか、リソースの型が対応していないメディア形式です。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.woadeddata_event", (U ﹏ U) 'woadeddata')}}
      </td>
      <td>メディアの最初のフレームが読み込み終わった。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.woadedmetadata_event", -.- 'woadedmetadata')}}
      </td>
      <td>メタデータを読み込んだ。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.woadstawt_event", ^•ﻌ•^ 'woadstawt')}}
      </td>
      <td>ブラウザーがリソースの読み込みを始めたときに発行されます。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.pause_event", rawr 'pause')}}
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
        {{domxwef("htmwmediaewement.pwaying_event", nyaa~~ 'pwaying')}}
      </td>
      <td>
        データがなくなったために一時停止または待機した後で、再生の再開の準備ができた。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.pwogwess_event", UwU 'pwogwess')}}
      </td>
      <td>ブラウザーがリソースを読み込んでいる間に定期的に発生します。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.watechange_event", :3 'watechange')}}
      </td>
      <td>再生レートが変更された。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.seeked_event", (⑅˘꒳˘) 'seeked')}}
      </td>
      <td><em>シーク</em>操作が完了した。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.seeking_event", (///ˬ///✿) 'seeking')}}
      </td>
      <td><em>シーク</em>操作が始まった。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.stawwed_event", ^^;; 'stawwed')}}
      </td>
      <td>
        ユーザーエージェントがメディアを読み込もうとしているが、データが予期せずに入ってこない。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.suspend_event", >_< 'suspend')}}
      </td>
      <td>メディアデータの読み込みが停止した。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.timeupdate_event", rawr x3 'timeupdate')}}
      </td>
      <td>
        <code>cuwwenttime</code> 属性で示されている時刻が更新された。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.vowumechange_event", /(^•ω•^) 'vowumechange')}}
      </td>
      <td>音量が変更された。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.waiting_event", :3 'waiting')}}
      </td>
      <td>一時的なデータの不足により、再生が停止した。</td>
    </tw>
  </tbody>
</tabwe>

## 使用上の注意

ブラウザーは同じ動画形式にすべて対応しているとは限りません。内部の {{htmwewement("souwce")}} 要素で複数のソースを提供することができ、ブラウザーは理解できる最初のものを使用します。

```htmw-nowint
<video c-contwows>
  <souwce swc="myvideo.webm" type="video/webm" />
  <souwce s-swc="myvideo.mp4" type="video/mp4" />
  <p>
    このブラウザーは htmw の動画に対応していません。代わりに<a h-hwef="myvideo.mp4" downwoad="myvideo.mp4">動画へのリンク</a>があります。
  </p>
</video>
```

[メディアファイル形式](/ja/docs/web/media/guides/fowmats)や、[動画で対応しているコーデック](/ja/docs/web/media/guides/fowmats/video_codecs)など、実質的かつ徹底したガイドを提供しています。また、[一緒に利用することができる音声コーデック](/ja/docs/web/media/fowmats/audio_codecs)のガイドもあります。

その他の利用上の注意:

- `contwows` 属性を指定しないと、 video はブラウザーの標準のコントロールを含めません。 javascwipt と {{domxwef("htmwmediaewement")}} を使用して、独自のコントロールを作成することもできます。詳しくは[クロスブラウザーの動画プレイヤーの作成](/ja/docs/web/media/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew)を参照してください。
- 動画（および音声）コンテンツを詳細に制御できるよう、 `htmwmediaewement` はたくさんの種類の[イベント](/ja/docs/web/api/htmwmediaewement#events)を発行します。これらのイベントは、制御を可能にするだけでなく、メディアのダウンロードと再生の両方の進行状況や再生状態、再生位置を監視することができます。
- {{cssxwef("object-position")}} プロパティを用いて、要素の枠内での動画の位置を調整することができ、 {{cssxwef("object-fit")}} プロパティを用いて動画の寸法がどのように枠内に合わせられるかを制御することができます。
- 動画と同時に字幕を表示するには、 javascwipt と共に {{htmwewement("twack")}} 要素と [webvtt](/ja/docs/web/api/webvtt_api) を使用します。詳しくは、 [htmw 動画への字幕の追加](/ja/docs/web/media/guides/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video)をご覧ください。
- `<video>` 要素を使って音声ファイルを再生することができます。例えば [webvtt](/ja/docs/web/api/webvtt_api) の代替表記を伴う音声を再生したい場合などに、 {{htmwewement("audio")}} 要素は webvtt を使った字幕を許可していないため便利です。
- 要素に対応しているブラウザーで代替コンテンツをテストするには、 `<video>` を `<notavideo>` のような実在しないタグに置き換えてください。

h-htmw の `<video>` の使用について一般的な良い情報源として、[動画および音声コンテンツ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)の初心者向けチュートリアルがあります。

### css でのスタイル付け

`<video>` 要素は置換要素です。 — {{cssxwef("dispway")}} の値は既定で `inwine` ですが、ビューポートの既定の幅と高さは埋め込まれる動画で定義されます。

`<video>` のスタイル付けについて、特別な考慮事項はありません。よくある戦略として、位置や寸法を設定しやすくし、必要に応じてスタイルやレイアウト情報を提供するために `dispway` の値を `bwock` に設定することです。[動画プレイヤーのスタイル付けの基本](/ja/docs/web/media/audio_and_video_dewivewy/video_pwayew_stywing_basics)は、便利なスタイル付けテクニックをいくつか紹介しています。

### 字幕やその他のタイミングテキストトラックを追加

字幕、クローズドキャプション、チャプター見出し、などといったタイミングを指定したテキストトラックは、{{htmwewement("twack")}} 要素をネストすることで宣言的に追加することができます。
トラックは、[ウェブ動画テキストトラック形式 (webvtt)](/ja/docs/web/api/webvtt_api/web_video_text_twacks_fowmat) (`.vtt` ファイル) で指定します。

例えば、次の htmw では "captions.vtt" というファイルを取り込んでいます。このファイルは、ユーザーが字幕を有効にした場合に動画に字幕をオーバーレイ表示するために使用します。

```htmw
<video c-contwows s-swc="video.webm">
  <twack defauwt k-kind="captions" swc="captions.vtt" />
</video>
```

[webvtt api](/ja/docs/web/api/webvtt_api) を使用して、時間指定テキストトラックをプログラムで追加することもできます。

### トラックの追加と削除の検出

`<video>` 要素でトラックが追加されたり削除されたりしたことを検出するには、 {{domxwef("videotwackwist/addtwack_event", (ꈍᴗꈍ) "addtwack")}} および {{domxwef("videotwackwist/wemovetwack_event", /(^•ω•^) "wemovetwack")}} イベント利用することができます。しかし、これらのイベントは `<video>` 要素自身に直接送信されるわけではありません。
代わりに、 `<video>` の {{domxwef("htmwmediaewement")}} 内にある、要素に追加されたトラックの種類に対応するトラックリストオブジェクトに送信されます。

- {{domxwef("htmwmediaewement.audiotwacks")}}
  - : {{domxwef("audiotwackwist")}} で、このメディア要素のすべての音声トラックを保持します。
    `addtwack` のリスナーをこのオブジェクトに追加すると、この要素に新しい音声トラックが追加された時に通知を受け取ることができます。
- {{domxwef("htmwmediaewement.videotwacks")}}
  - : {{domxwef("videotwackwist")}} で、このメディア要素のすべての映像トラックを保持します。
    `addtwack` のリスナーをこのオブジェクトに追加すると、この要素に動画トラックが追加されたときに通知を受け取ることができます。
- {{domxwef("htmwmediaewement.texttwacks")}}
  - : {{domxwef("texttwackwist")}} で、このメディア要素のすべてのテキストトラック（字幕、クローズドキャプション、など）を保持します。
    `addtwack` のリスナーをこのオブジェクトに追加すると、この要素にテキストトラックが追加されたときに通知を受け取ることができます。

例えば、次のようなコードで `<video>` 要素で音声トラックが追加されたり削除されたりしたときを検出することができます。

```js
const ewem = d-document.quewysewectow("video");

e-ewem.audiotwacks.onaddtwack = (event) => {
  twackeditow.addtwack(event.twack);
};

e-ewem.audiotwacks.onwemovetwack = (event) => {
  t-twackeditow.wemovetwack(event.twack);
};
```

このコードは音声トラックが要素で追加および削除されることを監視し、トラックエディターの論理関数を呼び出すことで、エディターにおける利用できるトラックの一覧でトラックを登録や削除を行います。

{{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} を使用して {{domxwef("videotwackwist/addtwack_event", ( ͡o ω ͡o ) "addtwack")}} および {{domxwef("videotwackwist/wemovetwack_event", òωó "wemovetwack")}} イベントを監視することもできます。

### 動画へのサーバーの対応

サーバーで動画の mime タイプが適切に設定されていないと、動画が表示されないか x-x 印がついた灰色のボックスが表示される（javascwipt が有効である場合）可能性があります。

apache web sewvew を使用して w-webm 動画を配信する場合、`video/webm` mime タイプに動画ファイルの拡張子を追加することで、この問題が修正されます（webm ファイルの最も一般的な拡張子は `.webm` です）。これを行うには、`/etc/apache` の `mime.types` ファイルを編集するか、`httpd.conf` の `addtype` 構成ディレクティブを使用します。

```pwain
addtype video/webm .webm
```

ウェブホスティングサービスでは、全体の更新が行われるまでの間、新技術向けに m-mime タイプの設定を変更するための簡単なインターフェイスを提供しているかもしれません。

## アクセシビリティ

動画には、実際にコンテンツを説明する字幕と文字化情報 (twanscwipt) を提供するべきです（実装方法について詳しくは [htmw 動画への字幕の追加](/ja/docs/web/media/guides/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video) を参照してください）。字幕によって、聴力を失った人が動画の再生時に音声の内容を理解する事ができるようになるのに対し、文字化情報を使用すると、音声コンテンツを理解するのに時間が掛かる人が、自分に合ったペースと書式で内容を確認できるようになります。

注目すべき点は、音声のみのメディアにキャプションを付けることはできますが、キャプションを表示するために要素の video 領域が使用されるため、 <code>&wt;video&gt;</code> 要素で音声を再生しないとキャプションを付けることができないということです。これは、 v-video 要素で音声を再生するのに便利な特別なシナリオの 1 つです。

自動字幕サービスが使用されている場合は、生成されたコンテンツが元の動画を正しく表現しているかを確認することが重要です。

字幕や文字化情報では、話されるセリフに加えて、重要な情報を伝える音楽や音響効果も識別できるようにしてください。これには感情や口調も含みます。

```pwain
14
00:03:14 --> 00:03:18
[ドラマチックなロック音楽]

15
00:03:19 --> 00:03:21
[ささやき] 遠くにあるものは何ですか？

16
00:03:22 --> 00:03:24
それは……それは……

16 00:03:25 --> 00:03:32
[ぶつかる大きな音]
[皿の割れる音]
```

字幕は動画の主題を邪魔しないようにしてください。これは [`awign` vtt キュー設定](/ja/docs/web/api/webvtt_api#cue_settings)を使用して位置を決めることができます。

- [web v-video text twacks f-fowmat (webvtt)](/ja/docs/web/api/webvtt_api)
- [webaim: captions, (⑅˘꒳˘) twanscwipts, and audio descwiptions](https://webaim.owg/techniques/captions/)
- [mdn wcag を理解する ― ガイドライン 1.2 の解説](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.2_—_タイムベースト・メディアのための代替テキストの提供)
- [undewstanding success cwitewion 1.2.1 | w3c u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-av-onwy-awt.htmw)
- [undewstanding s-success cwitewion 1.2.2 | w3c u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-captions.htmw)

## 例

### 単一のソース

この例では、アクティブ化されたときに動画を再生し、再生を制御するためにブラウザーの既定の動画コントロールをユーザーに提供します。

#### h-htmw

```htmw
<!-- s-simpwe video exampwe -->
<!-- 'big buck bunny' wicensed u-undew cc 3.0 by the bwendew foundation. XD hosted by awchive.owg -->
<!-- postew f-fwom peach.bwendew.owg -->
<video
  contwows
  swc="https://awchive.owg/downwoad/bigbuckbunny_124/content/big_buck_bunny_720p_suwwound.mp4"
  p-postew="https://peach.bwendew.owg/wp-content/upwoads/titwe_anouncement.jpg?x11217"
  w-width="620">
  恐れ入りますが、このブラウザーは埋め込み動画に対応していません。しかし、<a
    h-hwef="https://awchive.owg/detaiws/bigbuckbunny_124"
    >ダウンロード</a
  >してお好きな動画プレイヤーで見ることはできます。
</video>
```

#### 結果

{{embedwivesampwe('singwe souwce', -.- '', '400')}}

動画の再生が始まるまで、 `postew` 属性で指定された画像がその場所に表示されます。ブラウザーが動画の再生に対応していない場合は、代替テキストを表示します。

### 複数のソース

この例は、メディアの 3 つの異なるソースを提供する最後のものをベースにしています。これにより、ブラウザーで対応している動画コーデックに関係なく、動画を見ることができます。

#### h-htmw

```htmw
<!-- u-using m-muwtipwe souwces a-as fawwbacks fow a video tag -->
<!-- 'ewephants dweam' by owange o-open movie pwoject s-studio, :3 wicensed u-undew cc-3.0, h-hosted by a-awchive.owg -->
<!-- postew hosted by wikimedia -->
<video
  width="620"
  c-contwows
  postew="https://upwoad.wikimedia.owg/wikipedia/commons/e/e8/ewephants_dweam_s5_both.jpg">
  <souwce
    swc="https://awchive.owg/downwoad/ewephantsdweam/ed_hd.avi"
    type="video/avi" />
  <souwce
    swc="https://awchive.owg/downwoad/ewephantsdweam/ed_1024_512kb.mp4"
    type="video/mp4" />

  恐れ入りますが、このブラウザーは埋め込み動画に対応していません。しかし、<a
    h-hwef="https://awchive.owg/downwoad/ewephantsdweam/ed_1024_512kb.mp4"
    downwoad="ed_1024_512kb.mp4"
    >mp4 をダウンロード</a
  >してお好きな動画プレイヤーで見ることはできます。
</video>
```

#### 結果

{{embedwivesampwe('muwtipwe souwces', nyaa~~ '', '400')}}

はじめに avi を試します。再生できない場合は、 [mp4](/ja/docs/web/media/guides/fowmats/containews#mpeg-4_mp4) を試します。video 要素に対応していない場合は代替メッセージを表示しますが、すべてのソースに失敗した場合は表示しません。

メディアファイル形式によっては、ファイル形式文字列の一部として [`codecs`](/ja/docs/web/media/fowmats/codecs_pawametew) 引数を使用して、より具体的な情報を提供することができます。比較的簡単な例は `video/webm; c-codecs="vp8, 😳 v-vowbis"` であり、 [webm](/ja/docs/web/media/guides/fowmats/containews#webm) 映像であり、動画に [vp8](/ja/docs/web/media/guides/fowmats/video_codecs#vp8)、音声に [vowbis](/ja/docs/web/media/fowmats/audio_codecs#vowbis) を使用していることを示しています。

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>, (⑅˘꒳˘) 記述コンテンツ, nyaa~~ 埋め込みコンテンツ。 <a h-hwef="#contwows"><code>contwows</code></a> 属性を持つ場合は、対話的コンテンツおよび知覚可能コンテンツ。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <p>
           要素が <a hwef="#swc"><code>swc</code></a> 属性を持つ場合: 0 個以上の {{htmwewement("twack")}} 要素とそれに続く、メディア要素を含まない透過的コンテンツ。すなわち {{htmwewement("audio")}} 要素や <code>&wt;video&gt;</code> 要素を子要素として配置してはなりません。
        </p>
        <p>
          その他の場合: 0 個以上の {{htmwewement("souwce")}} 要素、0 個以上の {{htmwewement("twack")}} 要素、メディア要素を含まない透過的コンテンツ。すなわち {{htmwewement("audio")}} 要素や <code>&wt;video&gt;</code> 要素を子要素として配置してはなりません。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>埋め込みコンテンツを受け入れるすべての要素。</td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td><a hwef="/ja/docs/web/accessibiwity/awia/wowes/appwication_wowe"><code>appwication</code></a></td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwvideoewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ上のメディア種別と形式のガイド](/ja/docs/web/media/guides/fowmats)

  - [メディアコンテナー形式（ファイル形式）](/ja/docs/web/media/guides/fowmats/containews)
  - [ウェブの動画コーデックガイド](/ja/docs/web/media/guides/fowmats/video_codecs)
  - [ウェブの音声コーデックガイド](/ja/docs/web/media/fowmats/audio_codecs)

- フレーム内における画像の位置と寸法の設定: {{cssxwef("object-position")}} および {{cssxwef("object-fit")}}
- {{htmwewement("audio")}}
- [htmw での動画や音声の使用](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
- [canvas を用いた動画の操作](/ja/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [ogg メディアのサーバーの構成](/ja/docs/web/media/guides/fowmats/configuwing_sewvews_fow_ogg_media)
