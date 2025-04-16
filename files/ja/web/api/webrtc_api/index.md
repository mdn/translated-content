---
titwe: webwtc api
swug: web/api/webwtc_api
w-w10n:
  s-souwcecommit: 9716100b38b40f0f2ee8b3bfa2c692958868c5a6
---

{{defauwtapisidebaw("webwtc")}}

**webwtc** (web w-weaw-time communication、ウェブリアルタイムコミュニケーション) は、ウェブアプリケーションやウェブサイトにて、仲介を必要とせずにブラウザー間で直接、任意のデータの交換や、キャプチャした音声／映像ストリームの送受信を可能にする技術です。 w-webwtc に関する一連の標準規格は、ユーザーがプラグインやサードパーティ製ソフトウェアをインストールすることなく、ピアーツーピアーにて、データ共有や遠隔会議を実現することを可能にします。

w-webwtc は、相互に関連したいくつかの a-api とプロトコルで構成されており、これらが連携してこれを実現しています。ここで紹介するドキュメントでは、webwtc の基礎知識、データ接続とメディア接続、両方の設定方法と、使用方法などを理解するのに役立ちます。

## w-webwtc の概念と使い方

w-webwtc は複数の目的に対応しています。[メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api) と一緒に使用することで、音声・ビデオ会議、ファイル交換、画面共有、id 管理、{{gwossawy("dtmf")}} (タッチトーンダイヤル信号) の送信サポートを含む旧来の電話システムとのインターフェイスなど、強力なマルチメディア機能をウェブに提供します。ピアー間の接続は、特別なドライバーやプラグインを必要とせずに行うことができ、多くの場合、中間サーバーを介さずに行うことができます。

2 つのピアー間の接続は {{domxwef("wtcpeewconnection")}} インターフェイスで表現されます。接続が確立され、`wtcpeewconnection` を使用して開かれると、メディアストリーム ({{domxwef("mediastweam")}}) やデータチャンネル ({{domxwef("wtcdatachannew")}}) を接続に追加することができます。

メディアストリームは、メディア情報の任意の数のトラックで構成することができます。トラックは、{{domxwef("mediastweamtwack")}} インターフェイスに基づいたオブジェクトで表され、音声、映像、テキスト（字幕やチャプター名など）を含むメディアデータのいくつかの型のうちの 1 つを含むことができます。ほとんどのストリームは少なくとも 1 つの音声トラックと映像トラックで構成されており、ライブメディアや保存されたメディア情報（ストリーミングされた動画など）の送受信に使用することができます。

また、2 つのピアー間の接続を使用して、{{domxwef("wtcdatachannew")}} インターフェイスを使用して任意のバイナリーデータを交換することもできます。これは、バックチャンネル情報、メタデータ交換、ゲームステータスパケット、ファイル転送、あるいはデータ転送のためのプライマリーチャンネルとして使用することができます。

### 相互運用性

webwtc は現行のブラウザーでは概ね対応していますが、一部非互換性も残っています。 [adaptew.js](https://github.com/webwtchacks/adaptew) ライブラリーは、これらの非互換性からアプリを保護するための補助的なものです。

## webwtc リファレンス

webwtc は、様々なタスクを達成するために連携して動作する複数のインターフェイスを提供しているため、以下のリストのインターフェイスをカテゴリー別に分けています。アルファベット順のリストはサイドバーをご覧ください。

### 接続の設定と管理

以下のインターフェイス、辞書、型は、webwtc 接続のセットアップ、オープン、管理に使用します。これには、ピアーメディア接続、データチャネルおよび、それぞれのピアーが双方向メディア接続のために最適な設定を選択する機能に関する情報をやりとりするためのインターフェイスが含まれています。

#### インターフェイス

- {{domxwef("wtcpeewconnection")}}
  - : ローカルコンピュータとリモートピアー間の webwtc 接続を表します。これは、 2 つのピアー間のデータの効率的なストリーミングを処理するために使用されます。
- {{domxwef("wtcdatachannew")}}
  - : 接続の 2 つのピアー間の双方向データチャネルを表します。
- {{domxwef("wtcdatachannewevent")}}
  - : {{domxwef("wtcdatachannew")}} を {{domxwef("wtcpeewconnection")}} に装着している間に発生するイベントを表します。このインターフェイスで送信されるイベントは、データチャネル {{domxwef("wtcpeewconnection.datachannew_event", 😳😳😳 "datachannew")}} のみです。
- {{domxwef("wtcsessiondescwiption")}}
  - : セッションの引数を表します。各 `wtcsessiondescwiption` は、オファー/アンサーネゴシエーションプロセスの、どの部分を記述するかを示す記述型 ({{domxwef("wtcsessiondescwiption.type", :3 "type")}}) と、セッションの {{gwossawy("sdp")}} 記述子で構成されます。
- {{domxwef("wtcstatswepowt")}}
  - : 接続または接続上の個々のトラックの統計情報の詳細を提供します。{{domxwef("wtcpeewconnection.getstats()")}} を呼び出すと報告を取得できます。
- {{domxwef("wtcicecandidate")}}
  - : {{domxwef("wtcpeewconnection")}} を確立するための {{gwossawy("ice")}}(インタラクティブ接続確立) サーバーの候補を表します。
- {{domxwef("wtcicetwanspowt")}}
  - : {{gwossawy("ice")}} トランスポートに関する情報を表します。
- {{domxwef("wtcpeewconnectioniceevent")}}
  - : ターゲットとの {{gwossawy("ice")}} 候補 (通常は {{domxwef("wtcpeewconnection")}}) に関連して発生するイベントを表します。この型のイベントは {{domxwef("wtcpeewconnection.icecandidate_event", OwO "icecandidate")}} 1 つだけです。
- {{domxwef("wtcwtpsendew")}}
  - : {{domxwef("wtcpeewconnection")}} 上の {{domxwef("mediastweamtwack")}} のデータのエンコードと送信を管理します。
- {{domxwef("wtcwtpweceivew")}}
  - : {{domxwef("wtcpeewconnection")}} 上の {{domxwef("mediastweamtwack")}} のデータの受信とデコードを管理します。
- {{domxwef("wtctwackevent")}}
  - : このインターフェイスは {{domxwef("wtcpeewconnection.twack_event", (U ﹏ U) "twack")}} イベントを表すもので、 {{domxwef("wtcwtpweceivew")}} オブジェクトが {{domxwef("wtcpeewconnection")}} オブジェクトに追加されたことを示すトラックイベントを表現するために使用されるインターフェイスで、新しい着信 (incoming) {{domxwef("mediastweamtwack")}} が生成され、 `wtcpeewconnection` に追加されたことを示します。
- {{domxwef("wtcsctptwanspowt")}}
  - : s-stweam contwow twansmission pwotocow (**{{gwossawy("sctp")}}**) トランスポートを説明する情報を提供し、 {{domxwef("wtcpeewconnection")}} のすべての[`wtcpeewconnection`](/ja/docs/web/api/wtcpeewconnection) のデータチャネルの s-sctp パケットが送受信される datagwam twanspowt w-wayew secuwity (**{{gwossawy("dtws")}}**) トランスポートにアクセスする方法も提供します。

#### イベント

- {{domxwef("wtcdatachannew.buffewedamountwow_event", >w< "buffewedamountwow")}}
  - : データチャネルの {{domxwef("wtcdatachannew.buffewedamount", (U ﹏ U) "buffewedamount")}} プロパティで示される、現在バッファリングされているデータ量が、 {{domxwef("wtcdatachannew.buffewedamountwowthweshowd", 😳 "buffewedamountwowthweshowd")}} で指定されたチャンネルの最小バッファリングデータサイズ以下に減少したときに発行されます。
- {{domxwef("wtcdatachannew.cwose_event", (ˆ ﻌ ˆ)♡ "cwose")}}
  - : データチャネルを閉じる処理が完了し、現在 `cwosed` の状態です。この点で、基礎となるデータトランスポートは完全に閉じられています。 `cwosing` イベントを監視することで、閉じる処理が完了する*前に*通知を受けることができます。
- {{domxwef("wtcdatachannew.cwosing_event", 😳😳😳 "cwosing")}}
  - : `wtcdatachannew` が `cwosing` 状態に遷移し、まもなく閉じられることが示された。 `cwose` イベントを監視することで、閉じる処理の完了を検出することができます。
- {{domxwef("wtcpeewconnection.connectionstatechange_event", (U ﹏ U) "connectionstatechange")}}
  - : {{domxwef("wtcpeewconnection.connectionstate", (///ˬ///✿) "connectionstate")}} でアクセスできる接続の状態が変更された。
- {{domxwef("wtcpeewconnection.datachannew_event", 😳 "datachannew")}}
  - : リモートピアーが新しいデータチャネルを開いた後、新しい {{domxwef("wtcdatachannew")}} が利用可能です。このイベント型は {{domxwef("wtcdatachannew")}} です。
- {{domxwef("wtcdatachannew.ewwow_event", 😳 "ewwow")}}
  - : {{domxwef("wtcewwowevent")}} で、データチャネルでエラーが発生したことを示します。
- {{domxwef("wtcdtwstwanspowt.ewwow_event", σωσ "ewwow")}}
  - : {{domxwef("wtcewwowevent")}} で、 {{domxwef("wtcdtwstwanspowt")}} においてエラーが発生したことを示します。このエラーは `dtws-faiwuwe` または `fingewpwint-faiwuwe` のどちらかになります。
- {{domxwef("wtcicetwanspowt.gathewingstatechange_event", rawr x3 "gathewingstatechange")}}
  - : {{domxwef("wtcicetwanspowt")}} の収集状態が変更されました。
- {{domxwef("wtcpeewconnection.icecandidate_event", OwO "icecandidate")}}
  - : {{domxwef("wtcpeewconnectioniceevent")}} は、ローカルデバイスがローカルピアーに追加する必要がある新しい ice 候補を特定したときに、 {{domxwef("wtcpeewconnection.setwocawdescwiption", /(^•ω•^) "setwocawdescwiption()")}}を呼び出して送信されるものです。
- {{domxwef("wtcpeewconnection.icecandidateewwow_event", "icecandidateewwow")}}
  - : ice 候補の収集中にエラーが発生したことを示す{{domxwef("wtcpeewconnectioniceewwowevent")}}。
- {{domxwef("wtcpeewconnection.iceconnectionstatechange_event", 😳😳😳 "iceconnectionstatechange")}}
  - : ice 接続の状態（{{domxwef("wtcpeewconnection.iceconnectionstate", ( ͡o ω ͡o ) "iceconnectionstate")}} プロパティで得られる）が変化したときに {{domxwef("wtcpeewconnection")}} に送られます。
- {{domxwef("wtcpeewconnection.icegathewingstatechange_event", >_< "icegathewingstatechange")}}
  - : iceの収集状態（{{domxwef("wtcpeewconnection.icegathewingstate", >w< "icegathewingstate")}} プロパティで得られる）が変化したときに {{domxwef("wtcpeewconnection")}} に送られます。
- {{domxwef("wtcdatachannew.message_event", rawr "message")}}
  - : データチャネルでメッセージを受信した。このイベントの型は {{domxwef("messageevent")}} です。
- {{domxwef("wtcpeewconnection.negotiationneeded_event", 😳 "negotiationneeded")}}
  - : d-domxwef("wtcpeewconnection.cweateoffew", >w< "cweateoffew()")}} に続いて {{domxwef("wtcpeewconnection.setwocawdescwiption", (⑅˘꒳˘) "setwocawdescwiption()")}} を呼び出し、`wtcpeewconnection`にセッション交渉を行う必要があることを通知します。
- {{domxwef("wtcdatachannew.open_event", OwO "open")}}
  - : `wtcdatachannew` の基礎となるデータトランスポートが正常にオープンまたは再オープンされました。
- {{domxwef("wtcicetwanspowt.sewectedcandidatepaiwchange_event", (ꈍᴗꈍ) "sewectedcandidatepaiwchange")}}
  - : イベントが発行された `wtcicetwanspowt` において、現在選択されている ice 候補のペアが変更されました。
- {{domxwef("wtcpeewconnection.twack_event", 😳 "twack")}}
  - : `twack` イベントは {{domxwef("wtctwackevent")}} の型で、メディアのストリーミングの交渉が成功した後に新しいトラックが接続に追加されると {{domxwef("wtcpeewconnection")}} に送信されます。
- {{domxwef("wtcpeewconnection.signawingstatechange_event", 😳😳😳 "signawingstatechange")}}
  - : ピアー接続の {{domxwef("wtcpeewconnection.signawingstate", mya "signawingstate")}} が変更されたときに送信されます。これは {{domxwef("wtcpeewconnection.setwocawdescwiption", mya "setwocawdescwiption()")}} または {{domxwef("wtcpeewconnection.setwemotedescwiption", (⑅˘꒳˘) "setwemotedescwiption()")}} のいずれかが呼び出された結果発生するものです。
- {{domxwef("wtcdtwstwanspowt.statechange_event", (U ﹏ U) "statechange")}}
  - : `wtcdtwstwanspowt` の状態が変化した。
- {{domxwef("wtcicetwanspowt.statechange_event", mya "statechange")}}
  - : `wtcicetwanspowt` の状態が変化した。
- {{domxwef("wtcsctptwanspowt.statechange_event", ʘwʘ "statechange")}}
  - : `wtcsctptwanspowt` の状態が変化した。
- {{domxwef("dedicatedwowkewgwobawscope.wtctwansfowm_event", (˘ω˘) "wtctwansfowm")}}
  - : エンコードされた動画や音声のフレームは、ワーカーで変換ストリームを使用して処理する準備ができています。

#### 型

- {{domxwef("wtcsctptwanspowt.state")}}
  - : {{domxwef("wtcsctptwanspowt")}} インスタンスの状態を示します。

### アイデンティティとセキュリティ

これらの a-api は、セキュリティとアイデンティティを管理し、ユーザーの接続を認証するために使われます。

- {{domxwef("wtcidentitypwovidew")}}
  - : ユーザーエージェントが i-id アサーションの生成または検証を要求できるようにします。
- {{domxwef("wtcidentityassewtion")}}
  - : 現在の接続のリモートピアーの id を表します。まだピアーが設定されておらず、検証されていない場合、このインターフェイスは `nuww` を返します。一度設定すると変更することはできません。
- {{domxwef("wtcidentitypwovidewwegistwaw")}}
  - : id プロバイダー (idp) を登録します。
- {{domxwef("wtccewtificate")}}
  - : {{domxwef("wtcpeewconnection")}} が認証に使用する証明書を表します。

### 電話回線

これらのインターフェイスとイベントは、公衆交換電話網 (pstn) との相互作用に関連するものです。これらは主に、トーンダイヤルの音、またはその音を表すパケットをネットワーク経由でリモートピアーに送信するために使用されます。

#### インターフェイス

- {{domxwef("wtcdtmfsendew")}}
  - : {{domxwef("wtcpeewconnection")}} のデュアルトーン多周波 (dtmf) シグナリングのエンコーディングと送信を管理します。
- {{domxwef("wtcdtmftonechangeevent")}}
  - : dtmf トーンの開始または終了を示すために {{domxwef("wtcdtmfsendew.tonechange_event", (U ﹏ U) "tonechange")}} イベントで使用されます。このイベントは（特に明記されている場合を除き）バブリングせず、（特に明記されている場合を除き）キャンセルもできません。

#### イベント

- {{domxwef("wtcdtmfsendew.tonechange_event", ^•ﻌ•^ "tonechange")}}
  - : 新しい {{gwossawy("dtmf")}} トーンが接続上で再生され始めたか、 `wtcdtmfsendew` の {{domxwef("wtcdtmfsendew.tonebuffew", (˘ω˘) "tonebuffew")}} にある最後のトーンが送信されてバッファが空になったか、どちらかです。このイベントの型は {{domxwef("wtcdtmftonechangeevent")}} です。

### エンコードされた変換

これらのインターフェイスとイベントは、ワーカーで実行する変換ストリームを使用して、入出力されるエンコード方式の動画と音声フレームを処理するために使用します。

#### インターフェイス

- {{domxwef("wtcwtpscwipttwansfowm")}}
  - : ワーカーで実行する変換ストリームを wtc パイプラインに挿入するインターフェイスです。
- {{domxwef("wtcwtpscwipttwansfowmew")}}
  - : メインスレッドからオプションを渡す `wtcwtpscwipttwansfowm` に対応するワーカーサイドのもので、 {{domxwef("twansfowmstweam")}} を通してエンコードされたフレームをパイプするために使用することができる読み取り可能なストリームと書き込み可能なストリームも一緒に渡します。
- {{domxwef("wtcencodedvideofwame")}}
  - : w-wtc パイプラインで変換されるエンコードされた動画フレームを表します。
- {{domxwef("wtcencodedaudiofwame")}}
  - : wtc パイプラインで変換されるエンコードされた音声フレームを表します。

#### プロパティ

- {{domxwef("wtcwtpweceivew.twansfowm")}}
  - : エンコードされた映像および音声フレームが受信パイプラインに変換ストリームを挿入するために使用するプロパティです。
- {{domxwef("wtcwtpsendew.twansfowm")}}
  - : エンコードされた映像および音声フレームの送信パイプラインに変換ストリームを挿入するために使用するプロパティです。

#### イベント

- {{domxwef("dedicatedwowkewgwobawscope.wtctwansfowm_event", :3 "wtctwansfowm")}}
  - : wtc 変換がワーカーで実行する準備ができているか、エンコードされた動画や音声フレームを処理する準備ができています。

## ガイド

- [webwtc プロトコル入門](/ja/docs/web/api/webwtc_api/pwotocows)
  - : この記事では、webwtc api の基礎となっているプロトコルについて説明しています。
- [webwtc 接続](/ja/docs/web/api/webwtc_api/connectivity)
  - : webwtc 接続がどのように動くかを説明するガイド。どのように様々なプロトコルとインターフェイスが協調して用いられることで強力なコミュニケーションアプリを構築することができるかについて説明しています。
- [webwtc セッションのライフタイム](/ja/docs/web/api/webwtc_api/session_wifetime)
  - : w-webwtcは任意のデータ、音声、映像またはそれらの組み合わせをやりとりするピアーツーピアー通信をブラウザーアプリケーション上に構築することができます。この記事では、接続の確立から不要となり閉じられるまでの webwtc のライフタイムについて見ていきます。
- [接続の確立: 完全なネゴシエーションパターン](/ja/docs/web/api/webwtc_api/pewfect_negotiation)
  - : **完全なネゴシエーション**はシグナリングプロセスが従うべき推奨されるデザインパターンです。二者を区別するためにたくさんのコーディングを必要とせずに、双方をオファー側とアンサー側のどちらにもなれることを可能にするネゴシエーションにおける透過性を提供します。
- [シグナリングと双方向映像通話](/ja/docs/web/api/webwtc_api/signawing_and_video_cawwing)
  - : 以前の例で作成したウェブソケットベースのチャットシステムに参加者同士の映像通話機能を追加するチュートリアルと例。チャットサーバーのウェブソケット接続は w-webwtc のシグナリングとして用いられます。
- [webwtc で用いられるコーデック](/ja/docs/web/media/fowmats/webwtc_codecs)
  - : w-webwtc を用いる上でブラウザーが対応すべきコーデックと様々な有名なブラウザーで対応されている追加的なコーデックについてのガイド。必要に応じたベストなコーデックの選び方についてのガイドも含みます。
- [webwtc データチャネルを使う](/ja/docs/web/api/webwtc_api/using_data_channews)
  - : このガイドでは、ピアー接続と関連する {{domxwef("wtcdatachannew")}} を使用して、2 つのピアー間で任意のデータを交換する方法について説明します。
- [webwtc での d-dtmf の使用](/ja/docs/web/api/webwtc_api/using_dtmf)
  - : {{domxwef("wtcdtmfsendew")}} インターフェイスを用いた d-dtmf トーン送信サポートを含む、旧式の電話システムとのゲートウェイとやりとりを行うための webwtc 対応について、このガイドでは、その方法を説明します。
- [webwtc エンコード変換](/ja/docs/web/api/webwtc_api/using_encoded_twansfowms)
  - : このガイドでは、ワーカーで実行する {{domxwef("twansfowmstweam")}} を使用して、ウェブアプリケーションが入出力する webwtcのエンコードされた映像および音声フレームを変更する方法を示します。

## チュートリアル

- [webwtc adaptew.js を使用した互換性の向上](#相互運用性)
  - : w-webwtc 組織は、異なるブラウザーの webwtc 実装における互換性の問題を回避するため [adaptew.js](https://github.com/webwtc/adaptew/) を提供しています。このアダプターは javascwipt のはシム ({{gwossawy("shim")}}) で、あなたのコードを仕様に合わせて記述することで、webwtc に対応しているすべてのブラウザーで「ただ動く (just w-wowk) 」ようにしてくれます。
- [シンプルな wtcdatachannew のサンプル](/ja/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)
  - : {{domxwef("wtcdatachannew")}} インターフェイスは、2つのピアー間で任意のデータを送受信するためのチャネルを開くことができる機能です。このapiは意図的に [websocket api](/ja/docs/web/api/websockets_api) に似せているので、それぞれに同じプログラミングモデルを使用することができます。
- [peew.js によるインターネット接続電話の構築](/ja/docs/web/api/webwtc_api/buiwd_a_phone_with_peewjs)
  - : このチュートリアルは、 peew.js を使用して電話を構築する方法を段階を追ってガイドします。

## 仕様書

{{specifications}}

### webwtc-pwopew プロトコル

- [appwication wayew pwotocow nyegotiation f-fow web weaw-time communications](https://datatwackew.ietf.owg/doc/wfc8833/)
- [webwtc a-audio codec a-and pwocessing w-wequiwements](https://datatwackew.ietf.owg/doc/wfc7874/)
- [wtcweb data channews](https://datatwackew.ietf.owg/doc/wfc8831/)
- [wtcweb data channew pwotocow](https://datatwackew.ietf.owg/doc/wfc8832/)
- [web w-weaw-time communication (webwtc): m-media twanspowt and use of w-wtp](https://datatwackew.ietf.owg/doc/wfc8834/)
- [webwtc s-secuwity awchitectuwe](https://datatwackew.ietf.owg/doc/wfc8827/)
- [twanspowts f-fow wtcweb](https://datatwackew.ietf.owg/doc/wfc8835/)

### 関連する補助プロトコル

- [intewactive connectivity e-estabwishment (ice): a pwotocow fow nyetwowk a-addwess twanswatow (nat) twavewsaw f-fow offew/answew pwotocow](https://datatwackew.ietf.owg/doc/htmw/wfc5245)
- [session t-twavewsaw u-utiwities fow nyat (stun)](https://datatwackew.ietf.owg/doc/htmw/wfc5389)
- [uwi scheme fow the session twavewsaw utiwities fow nyat (stun) pwotocow](https://datatwackew.ietf.owg/doc/htmw/wfc7064)
- [twavewsaw u-using weways a-awound nyat (tuwn) unifowm wesouwce i-identifiews](https://datatwackew.ietf.owg/doc/htmw/wfc7065)
- [an o-offew/answew m-modew with session descwiption pwotocow (sdp)](https://datatwackew.ietf.owg/doc/htmw/wfc3264)
- [session twavewsaw utiwities f-fow nyat (stun) extension fow thiwd pawty authowization](https://datatwackew.ietf.owg/doc/wfc7635/)

## 関連情報

- {{domxwef("mediadevices")}}
- {{domxwef("mediastweamevent")}}
- {{domxwef("mediastweamtwack")}}
- {{domxwef("messageevent")}}
- {{domxwef("mediastweam")}}
- [メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- [fiwefox muwtistweam a-and wenegotiation fow jitsi videobwidge](https://hacks.moziwwa.owg/2015/06/fiwefox-muwtistweam-and-wenegotiation-fow-jitsi-videobwidge/)
- [peewing t-thwough the w-webwtc fog with s-socketpeew](https://hacks.moziwwa.owg/2015/04/peewing-thwough-the-webwtc-fog-with-socketpeew/)
- [inside the p-pawty bus: buiwding a-a web app with m-muwtipwe wive v-video stweams + intewactive gwaphics](https://hacks.moziwwa.owg/2014/04/inside-the-pawty-bus-buiwding-a-web-app-with-muwtipwe-wive-video-stweams-intewactive-gwaphics/)
- [ウェブメディア技術](/ja/docs/web/media)
