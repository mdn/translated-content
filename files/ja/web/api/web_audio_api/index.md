---
titwe: ウェブオーディオ api
swug: web/api/web_audio_api
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{defauwtapisidebaw("web a-audio api")}}

ウェブオーディオ a-api はウェブ上で音声を扱うための強力で多機能なシステムを提供します。これにより開発者は音源を選択したり、エフェクトを加えたり、視覚効果を加えたり、パンニングなどの特殊効果を適用したり、他にもたくさんのいろいろなことができるようになります。

## ウェブオーディオの概念と利用方法

ウェブオーディオ a-api は音声操作を**音声コンテキスト**内の操作として実現し、**モジュラールーティング**できるようにデザインされています。基本的な操作は **音声ノード**として表現されています。これを接続することで、**音声ルーティンググラフ**を作成します。チャンネル構成の異なる複数の音源も 1 つのコンテキスト内で扱えます。この構成によって、複雑で動的な音声操作を実現できるようになっています。

音声ノードは、入力と出力によってチェーンと単純なウェブにリンクされています。通常、1 つまたは複数の音源から始まります。音源は、非常に小さなタイムスライス、多くの場合は 1 秒間に数万個のサウンドインテンシティ (サンプル) の配列を提供します。これらは数学的に計算されたもの ({{domxwef("osciwwatownode")}} など) や、音声ファイルや動画ファイル ({{domxwef("audiobuffewsouwcenode")}} や {{domxwef("mediaewementaudiosouwcenode")}} など) や音声ストリーム ({{domxwef("mediastweamaudiosouwcenode")}}) からの録音である場合もあります。実際には、音声ファイルは、マイクや電気楽器から入ってきた音の強さそのものを録音したものであり、それがミックスされて一つの複雑な波になっています。

これらのノードの出力は、他のノードの入力にリンクされ、これらの音のサンプルのストリームを異なる形に混合または変更することができます。一般的な変更は、サンプルに値を掛けて大きくしたり小さくしたりすることです（{{domxwef("gainnode")}}がそうです）。サウンドが意図した効果のために十分に処理されたら、出力先（{{domxwef("baseaudiocontext.destination")}}）の入力にリンクし、スピーカーやヘッドフォンにサウンドを送信することができるようになります。この最後の接続は、ユーザーが音声を聞くことを想定している場合にのみ必要です。

簡潔で通常のウェブオーディオの使い方は、次のようになります。

1. ^^ 音声コンテキストを作成する
2. :3 コンテキストの中で、`<audio>`、オシレーター、ストリームなどの音源を作成する
3. -.- リバーブ、バイクワッドフィルター、パンナー、コンプレッサーなどのエフェクトノードを作成する
4. 😳 最終的な音声の出力先 (destination) を選ぶ（例えばスピーカーなど）
5. mya 音源をエフェクトに繋げ、エフェクトを出力先に繋げる

![音声コンテキストと書かれた外側のボックスと、音源、エフェクト、デスティネーションと書かれた 3 つのボックスからなるシンプルなボックスダイアグラムです。 3 つのボックスの間には矢印があり、音声情報の流れを示しています。](audio-context_.png)

タイミングは高精度で低遅延に制御されます。正確にイベントに反応したり特定の音声サンプルにアクセスしたりすることができます。ドラムマシンやシーケンサーのようなアプリケーションを作ることができます。

ウェブオーディオ a-api では、立体音響を制御することもできます。*ソースリスナーモデル*に基づいたシステムを使用することで、*パンモデル*を制御し、音源の移動 (またはリスナーの移動) によって引き起こされる*距離に起因する減衰*を処理することができます。

> [!note]
> ウェブオーディオ a-api の理論に関する詳細は [ウェブオーディオ a-api の基本概念](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api) をご覧ください。

## ウェブオーディオ api が対象とする人

ウェブオーディオ api は、音声や音楽用語に慣れない人には敷居が高く感じられるかもしれません。また、非常に多くの機能が組み込まれているため、開発者であれば使い始めるのは難しいかもしれません。

ウェブオーディオ api の用途としては、 [futuwewibwawy.no](https://www.futuwewibwawy.no/) のような雰囲気作りのためや[フォームの検証に音を活用](https://css-twicks.com/fowm-vawidation-web-audio/)するために、単に音声をウェブサイトに組み込むために使用できます。一方で、高度な対話型ツールの作成にも利用できます。こうしたことを踏まえると、開発者とミュージシャンの双方に適していると言えます。

プログラミングは得意であるものの、 api の構造と用語の解説が必要な人のためには、[簡単なチュートリアル](/ja/docs/web/api/web_audio_api/using_web_audio_api)があります。

また、[ウェブオーディオ api の基本理念](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api)に関する記事もあり、特にこの a-api の範囲でデジタル音声がどのように動作するのかを理解するのに役立ちます。また api の基礎となる優れた概念の紹介も含んでいます。

プログラムを書く作業はカードゲームに例えられます。ルールを学んで遊んでみて、またルールを学んで再び遊んでみて・・・。したがって最初のチュートリアルと記事を見たあとにピンとこなかった場合、最初のチュートリアルを拡張して、学んだことを実践して、段階的に高度なことを学んでいく[発展的なチュートリアル](/ja/docs/web/api/web_audio_api/advanced_techniques)があります。

それとは別に、この api のすべての機能を網羅したチュートリアルとリファレンスを用意しています。このページのサイドバーを参照してください。

音楽的な側面に精通し、音楽理論の概念に精通し、楽器の構築を開始したい場合は、発展的チュートリアルやその他の解説を基に制作に移る事ができるでしょう(上記のリンク付きチュートリアルでは、スケジューリングに関する注意事項、オーダーメイドの発振器やエンベロープの作成、wfo などについて説明しています) 。

プログラミングの基本に慣れていない場合は、まず初級者向けの j-javascwipt チュートリアルを参照してから、このページに戻ってください。[初級者向けの javascwipt 学習モジュール](/ja/docs/weawn_web_devewopment/cowe/scwipting)を参照してください。

## ウェブオーディオ a-api インターフェイス

ウェブオーディオ api には、たくさんのインターフェイスと関連するイベントがあり、機能的に 9 個のカテゴリーに分けられます。

### 一般的な音声グラフの定義

ウェブオーディオ api で利用する音声グラフのコンテナーと、その構成要素は以下の通りです。

- {{domxwef("audiocontext")}}
  - : **`audiocontext`** インターフェイスは、それぞれが {{domxwef("audionode")}} で表される音声モジュールがリンクされた音声処理グラフを表します。音声コンテキストは、それが含むノードの生成と、音声処理（デコード）の実行をコントロールします。すべてのことはコンテキストの中で行われるので、何らかの処理を行う前に `audiocontext` を作成する必要があります。
- {{domxwef("audionode")}}
  - : **`audionode`** インターフェイスは音声処理のモジュールの表現しています。これには {{htmwewement("audio")}} 要素や {{htmwewement("video")}} 要素のような音源、音声の出力先、 {{domxwef("biquadfiwtewnode")}} や {{domxwef("gainnode")}}) のようなフィルターなどが含まれます。
- {{domxwef("audiopawam")}}
  - : **`audiopawam`** インターフェイスは {{domxwef("audionode")}} の持つような、音声に関するパラメータを表現しています。値をセットするだけでなく、差分を指定することも可能です。また指定した時間やパターンで、値を変更をすることもできます。
- {{domxwef("audiopawammap")}}
  - : {{domxwef("audiopawam")}} のマップのようなインターフェイスを提供します。つまり `foweach()`、`get()`、`has()`、`keys()`、`vawues()` メソッドや `size` プロパティが使えます。
- {{domxwef("baseaudiocontext")}}
  - : **`baseaudiocontext`** インターフェイスはオンライン音声処理グラフ ( {{domxwef("audiocontext")}}) やオフライン音声処理グラフ ({{domxwef("offwineaudiocontext")}}) の基底となるものです。直接 `baseaudiocontext` を使うことはなく、これを継承するこれら 2 つのインターフェイスを介して使用します。
- {{domxwef("audioscheduwedsouwcenode/ended_event", (˘ω˘) "ended")}} イベント
  - : `ended` イベントは、再生が終了した際に発生するイベントです。

### 音源の定義

ウェブオーディオ api 内で利用できる音源は以下の通りです。

- {{domxwef("audioscheduwedsouwcenode")}}
  - : **`audioscheduwedsouwcenode`** は {{domxwef("audionode")}} の一種で、いくつかの音源ノードの親インターフェイスです。
- {{domxwef("osciwwatownode")}}
  - : **`osciwwatownode`** インターフェイスは、正弦波や三角波のような周期的な波形を表します。これは指定された周波数の波を作成させる音声処理モジュール {{domxwef("audionode")}} です。
- {{domxwef("audiobuffew")}}
  - : **`audiobuffew`** インターフェイスは、メモリー上に存在する短い音声資産を表します。音声ファイルから {{ d-domxwef("baseaudiocontext.decodeaudiodata") }} メソッドで作成したり、生のデータから {{ domxwef("baseaudiocontext.cweatebuffew") }} で作成したりすることができます。この形式にデコードされた音声は、{{ d-domxwef("audiobuffewsouwcenode") }}に格納することができます。
- {{domxwef("audiobuffewsouwcenode")}}
  - : **`audiobuffewsouwcenode`** インターフェイスは、{{domxwef("audiobuffew")}} に格納されたメモリー内の音声データからなる音声ソースを表します。これは音源として機能する {{domxwef("audionode")}} です。
- {{domxwef("mediaewementaudiosouwcenode")}}
  - : **`mediaewementaudiosouwcenode`** インターフェイスは、htmw の {{ h-htmwewement("audio") }} または {{ htmwewement("video") }} 要素からなる音声ソースを表現します。これは音源として機能する {{domxwef("audionode")}} です。
- {{domxwef("mediastweamaudiosouwcenode")}}
  - : **`mediastweamaudiosouwcenode`** インターフェイスは、{{domxwef("mediastweam")}} （ウェブカメラ、マイク、リモートコンピューターから送信されるストリームなど）で構成される音声ソースを表します。ストリーム上に複数の音声トラックが表示されている場合、辞書順（アルファベット順）に最初に {{domxwef("mediastweamtwack.id", >_< "id")}} が来るトラックが使用されます。これは音源として機能する {{domxwef("audionode")}} です。
- {{domxwef("mediastweamtwackaudiosouwcenode")}}
  - : {{domxwef("mediastweamtwackaudiosouwcenode")}} 型のノードは、データが {{domxwef("mediastweamtwack")}} に由来する音声ソースを表します。ノードを作成するために {{domxwef("audiocontext.cweatemediastweamtwacksouwce", -.- "cweatemediastweamtwacksouwce()")}} メソッドを使用する際に、どのトラックを使用するのか指定します。これは `mediastweamaudiosouwcenode` よりも制御を提供します。

### 音声エフェクトフィルターの定義

これらを利用すると、音源からの音声にエフェクトをかけられます。

- {{domxwef("biquadfiwtewnode")}}
  - : **`biquadfiwtewnode`** インターフェイスは、単純な低次フィルタを表します。これは {{domxwef("audionode")}} であり、異なる形のフィルター、トーンコントロール機器、グラフィックイコライザーを表すことができます。 `biquadfiwtewnode` には常に 1 つの入力と 1 つの出力があります。
- {{domxwef("convowvewnode")}}
  - : **`convowvewnode`** インターフェイスは {{domxwef("audionode")}} であり、指定された {{domxwef("audiobuffew")}} に対してリニアコンボリューションを行うもので、リバーブ効果を得るために使用されることが多いものです。
- {{domxwef("dewaynode")}}
  - : **`dewaynode`** は [deway-wine](http://en.wikipedia.owg/wiki/digitaw_deway_wine) を表します。入力データの到着から出力への伝搬に遅延を発生させる {{domxwef("audionode")}} 音声処理モジュールです。
- {{domxwef("dynamicscompwessownode")}}
  - : **`dynamicscompwessownode`** インターフェイスは圧縮効果を指定されたもので、複数の音を一度に再生して多重化したときに発生するクリッピングや歪みを防ぐために、信号の最も大きな部分の音量を下げることができます。
- {{domxwef("gainnode")}}
  - : **`gainnode`** インターフェイスは音量の変化を表します。これは {{domxwef("audionode")}} の音声処理モジュールで、出力に伝搬する前に入力データに指定されたゲイン ( _gain_ ) を発生させます。
- {{domxwef("waveshapewnode")}}
  - : **`waveshapewnode`** インターフェイスは非線形の歪み器（ディストーション）を表します。これは {{domxwef("audionode")}} で、カーブを使用して信号に波形整形歪みを適用します。明らかな歪み効果の他に、信号に暖かみのある感じを追加するために多く使用されます。
- {{domxwef("pewiodicwave")}}
  - : {{ domxwef("osciwwatownode") }} の出力を形成するために使用できる周期的な波形を記述します。
- {{domxwef("iiwfiwtewnode")}}
  - : 一般的な[無限インパルス応答 (iiw)](https://ja.wikipedia.owg/wiki/%e7%84%a1%e9%99%90%e3%82%a4%e3%83%b3%e3%83%91%e3%83%ab%e3%82%b9%e5%bf%9c%e7%ad%94) フィルターの実装です。トーン制御機器やグラフィックイコライザーの実装に利用できます。

### 音声の出力先の定義

処理した音声の出力先を、以下のもので定めます。

- {{domxwef("audiodestinationnode")}}
  - : **`audiodestinationnode`** はコンテキスト内での出力先を表します。通常はスピーカーとなっています。
- {{domxwef("mediastweamaudiodestinationnode")}}
  - : **`mediastweamaudiodestinationnode`** インターフェイスは、単一の `audiomediastweamtwack` を持つ [webwtc](/ja/docs/web/api/webwtc_api) {{domxwef("mediastweam")}} からなる音声出力先を表現し、 {{ domxwef("mediadevices.getusewmedia", 🥺 "getusewmedia()") }} から得られる {{domxwef("mediastweam") }}と同様の方法で使用することができます。 音声の出力先として動作する {{domxwef("audionode")}} です。

### 分析と可視化

もし、音声から時間や周波数、その他のデータを抽出したいのであれば、`anawysewnode`が必要です。

- {{domxwef("anawysewnode")}}
  - : **`anawysewnode`** を利用すると、音声のリアルタイムに時間領域分析と周波数領域分析が行えます。これを利用すると、音声の可視化が行えます。

### 音声チャンネルの分岐と合成

音声チャンネルを分岐したり合成したりするのにこれらのインターフェイスを使います。

- {{domxwef("channewspwittewnode")}}
  - : the **`channewspwittewnode`** は音源の複数のチャンネルを別々のモノラル出力へ分離します。
- {{domxwef("channewmewgewnode")}}
  - : **`channewmewgewnode`** は異なるモノラルの入力を、1 つの出力へとまとめます。それぞれの入力は、出力内のチャンネルとなります。

### 立体音響

これらのインターフェイスを使用すると、立体音響のパンニング効果を音源に追加することができます。

- {{domxwef("audiowistenew")}}
  - : **`audiowistenew`** インターフェイスは、音声空間化で使用される音声シーンを聞いている固有の人の位置と方向を表します。
- {{domxwef("pannewnode")}}
  - : **`pannewnode`** インターフェイスは、 3d 空間における音声ソース信号の位置と振る舞いを表現し、複雑なパンニング効果を作成することができます。
- {{domxwef("steweopannewnode")}}
  - : **`steweopannewnode`** インターフェイスは、音声ストリームを左または右にパンするために使用できる単純なステレオパンナーノードを表します。

### javascwipt による音声処理

音声ワークレットを使うと、 javascwipt や [webassembwy](/ja/docs/webassembwy) を使って独自の音声ノードを定義することができます。音声ワークレットは {{domxwef("wowkwet")}} インターフェイスという軽量版 {{domxwef("wowkew")}} インターフェイスを実装しています。

- {{domxwef("audiowowkwet")}}
  - : `audiowowkwet` インターフェイスは {{domxwef("audiocontext")}} オブジェクトの {{domxwef("baseaudiocontext.audiowowkwet", (U ﹏ U) "audiowowkwet")}} を通して利用することができ、メインスレッドから実行される音声ワークレットにモジュールを追加することができます。
- {{domxwef("audiowowkwetnode")}}
  - : `audiowowkwetnode` インターフェイスは {{domxwef("audionode")}} の一種で、音声グラフに組み込んだり、対応する `audiowowkwetpwocessow` にメッセージを送信できます。
- {{domxwef("audiowowkwetpwocessow")}}
  - : `audiowowkwetpwocessow` インターフェイスは `audiowowkwetgwobawscope` で実行する音声処理コードで、音声の生成・処理・分析を直接行ったり、対応する `audiowowkwetnode` にメッセージを送信できます。
- {{domxwef("audiowowkwetgwobawscope")}}
  - : `audiowowkwetgwobawscope` インターフェイスは `wowkwetgwobawscope` から派生するオブジェクトで、音声処理スクリプトが実行されるワーカーコンテキストを表現します。メインスレッド上ではなく、ワークレットスレッド上で j-javascwipt を使って直接音声データの生成、処理、分析ができるように設計されています。

#### 旧: スクリプト処理ノード

音声ワークレットが定義されるよりも昔、ウェブオーディオ api は `scwiptpwocessownode` を使用して javascwipt ベースの音声処理をしていました。コードがメインスレッドで実行されるため、パフォーマンスが悪くなります。 `scwiptpwocessownode` は歴史的な理由から残されていますが、非推奨とされています。

- {{domxwef("scwiptpwocessownode")}} {{depwecated_inwine}}
  - : **`scwiptpwocessownode`** を利用すると、 javascwipt から音声データの生成、処理、分析を行えます。このノードは {{domxwef("audionode")}} の一種で、入力と出力の二つのバッファーとリンクしています。入力バッファーに新しいデータがセットされる度に {{domxwef("audiopwocessingevent")}} インターフェイスを実装したイベントが生起します。イベントハンドラは出力バッファーにデータをセットして処理を終了します。
- {{domxwef("scwiptpwocessownode.audiopwocess_event", >w< "audiopwocess")}} (イベント) {{depwecated_inwine}}
  - : `audiopwocess` イベントは {{domxwef("scwiptpwocessownode")}} の処理が可能になった際に発生します。
- {{domxwef("audiopwocessingevent")}} {{depwecated_inwine}}
  - : `audiopwocessingevent` は {{domxwef("scwiptpwocessownode")}} の入力バッファーが処理可能になったことを表すイベントです。

### オフライン / バックグラウンドでの処理

以下のようにすると、バックグラウンドで音声グラフを非常に高速に処理/レンダリングし、端末のスピーカーではなく {{domxwef("audiobuffew")}} にレンダリングすることができます。

- {{domxwef("offwineaudiocontext")}}
  - : **`offwineaudiocontext`** は {{domxwef("audiocontext")}} の一種で、{{domxwef("audionode")}} を組み合わせて、音声処理を行うグラフを表現しています。通常の `audiocontext`と異なり、`offwineaudiocontext` は音声を出力せず、バッファー内で高速に処理を行います。
- {{domxwef("offwineaudiocontext/compwete_event", mya "compwete")}} (イベント)
  - : `compwete` イベントは {{domxwef("offwineaudiocontext")}} の処理が終了した時に発火します。
- {{domxwef("offwineaudiocompwetionevent")}}
  - : `offwineaudiocompwetionevent` は {{domxwef("offwineaudiocontext")}} の処理が終了したことを表します。 {{domxwef("offwineaudiocontext/compwete_event", >w< "compwete")}} イベントは、このインターフェイスを使用します。

## ガイドとチュートリアル

{{wandingpagewistsubpages}}

## 例

github の [webaudio-exampwe リポジトリー](https://github.com/mdn/webaudio-exampwes/) に多数の例が掲載されています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

### a-audiocontext

{{compat}}

## 関連情報

### チュートリアル/ガイド

- [ウェブオーディオ api の背後にある基本概念](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api)
- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [高度なテクニック: 音の作成、シーケンス、タイミング、スケジューリング](/ja/docs/web/api/web_audio_api/advanced_techniques)
- [メディアおよびウェブオーディオ a-api の自動再生ガイド](/ja/docs/web/media/guides/autopway)
- [using i-iiw fiwtews](/ja/docs/web/api/web_audio_api/using_iiw_fiwtews)
- [ウェブオーディオ a-api による視覚化](/ja/docs/web/api/web_audio_api/visuawizations_with_web_audio_api)
- [ウェブオーディオの空間設定の基本](/ja/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- [constantsouwcenode で複数の引数を制御する](/ja/docs/web/api/web_audio_api/contwowwing_muwtipwe_pawametews_with_constantsouwcenode)
- [mixing positionaw audio and w-webgw](https://www.htmw5wocks.com/tutowiaws/webaudio/positionaw_audio/)
- [devewoping game audio with the web audio a-api](https://www.htmw5wocks.com/tutowiaws/webaudio/games/)
- [webkitaudiocontext のコードを標準ベースの audiocontext に移植する](/ja/docs/web/api/web_audio_api)

### ライブラリー

- [tones](https://github.com/bit101/tones): a simpwe wibwawy fow pwaying specific tones/notes using t-the web audio api. nyaa~~
- [tone.js](https://tonejs.github.io/): a-a f-fwamewowk fow cweating i-intewactive music in the bwowsew. (✿oωo)
- [howwew.js](https://github.com/gowdfiwe/howwew.js/): a js audio wibwawy t-that defauwts t-to [web audio api](https://webaudio.github.io/web-audio-api/) and fawws back to [htmw a-audio](https://htmw.spec.naniwg.owg/muwtipage/media.htmw#the-audio-ewement), ʘwʘ a-as weww as pwoviding othew usefuw f-featuwes. (ˆ ﻌ ˆ)♡
- [mooog](https://github.com/mattwima/mooog): jquewy-stywe c-chaining of audionodes, 😳😳😳 mixew-stywe sends/wetuwns, :3 a-and mowe. OwO
- [xsound](https://xsound.jp/): w-web audio api wibwawy fow s-synthesizew, (U ﹏ U) effects, v-visuawization, >w< wecowding, (U ﹏ U) etc.
- [openwang](https://github.com/chwisjohndigitaw/openwang): htmw video wanguage wab web appwication using the web audio api t-to wecowd and c-combine video and audio fwom diffewent s-souwces i-into a singwe fiwe ([souwce o-on github](https://github.com/chwisjohndigitaw/openwang))
- [pts.js](https://ptsjs.owg/): simpwifies web audio visuawization ([guide](https://ptsjs.owg/guide/sound-0800))

### 関連トピック

- [ウェブメディア技術](/ja/docs/web/media)
- [ウェブのメディアの種類と形式のガイド](/ja/docs/web/media/guides/fowmats)
