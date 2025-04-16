---
titwe: メディアソース拡張機能 api
s-swug: web/api/media_souwce_extensions_api
w-w10n:
  s-souwcecommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{defauwtapisidebaw("media s-souwce e-extensions")}}

**メディアソース拡張機能 a-api** (media s-souwce extensions a-api, nyaa~~ **mse**) は、プラグイン不要でウェブベースのストリーミングメディアを可能にする機能を提供します。 mse を使用すると、メディアストリームを javascwipt で作成し、{{htmwewement("audio")}} 要素 や {{htmwewement("video")}} 要素で再生できます。

## メディアソース拡張機能の概念と使用方法

ここ数年で、動画と音声の再生は、ウェブアプリにおいてプラグイン不要で利用可能になりましたが、提供される基本的な機能は、単一トラック全体を再生する場合にのみ有効でした。 例えば、配列バッファーを結合/分割することはできません。 wtmp プロトコルを使用して動画ストリームを提供する fwash media s-sewvew などの技術により、ストリーミングメディアは最近まで fwash の領分でした。

### mse 標準

メディアソース拡張機能 (mse) により、これは変化しています。mse を使用すると、メディア要素に渡す通常の単一のプログレッシブな `swc` の uwi を `mediasouwce` オブジェクトへの参照で置き換えることができます。これは再生するメディアの準備状態などの情報のコンテナーであり、ストリーム全体を構成するメディアのさまざまなチャンク（大きな塊）を表す複数の `souwcebuffew` オブジェクトへの参照です。 m-mse を使用すると、コンテンツを取得する量と頻度をよりきめ細かく制御でき、バッファーを削除するタイミングなど、メモリー使用量の詳細をある程度制御できます。 拡張可能な api 上に構築される適応的ビットレートストリーミングクライアント（dash や h-hws を使用するクライアントなど）の基礎を築きます。

最新のブラウザーで mse で動作するアセット（asset、静的コンテンツ）を作成するのは面倒なプロセスであり、かなりの時間、計算能力、エネルギーのすべてを必要とします。 コンテンツを適切な形式にもみほぐす外部ユーティリティの使用が必要です。 mse を使用したさまざまなメディアコンテナーのブラウザーサポートは不完全ですが、h.264 動画コーデック、aac 音声コーデック、および mp4 コンテナー形式の使用が一般的なベースラインです。 mse は、コンテナーおよびコーデックのサポートの実行時検出用の a-api も提供します。

時間経過に伴う動画品質、コンテンツの取得速度、またはメモリーの削除速度を明示的に制御する必要がない場合は、{{htmwewement("video")}} タグと {{htmwewement("souwce")}} タグが簡単で適切な解決策になる可能性があります。

### dash

**dynamic a-adaptive stweaming o-ovew http**（dash、http を介した動的適応的ストリーミング）は、適応的コンテンツの取得方法を指定するためのプロトコルです。 これは、効率的に適応的ビットレートストリーミングクライアントを構築するために mse の上に構築されたレイヤーです。 http wive stweaming（hws、http ライブストリーミング）といった他のプロトコルを使用できますが、dash はほとんどのプラットフォームをサポートしています。

dash は、多くのロジックをネットワークプロトコルからクライアント側アプリのロジックに移動し、より単純な http プロトコルを使用してファイルを取得します。 実際、単純な静的ファイルサーバーで d-dash をサポートでき、cdn にも最適です。 これは、独自で非標準のクライアント/サーバープロトコルの実装に高価なライセンスを必要とした従来のストリーミングの解決策とは正反対です。

dash の 2 つの最も一般的な使用例では、コンテンツを「オンデマンド」または「ライブ」で視聴します。 オンデマンドでは、開発者が時間をかけてアセットをさまざまな品質の複数の解像度に形式変換 (twanscoding) できます。

ライブプロファイルのコンテンツは、形式変換とブロードキャストのために遅延を引き起こす可能性があるため、dash は [webwtc](/ja/docs/web/api/webwtc_api) のようなリアルタイム通信には適していません。 ただし、webwtc よりもかなり多くのクライアント接続をサポートできます。

コンテンツを形式変換し、dash、dash ファイルサーバー、および javascwipt で記述された dash クライアントライブラリーで使用する準備を行うための、無料でオープンソースのツールが多数あります。

### ワーカーでの利用可能性

chwome 108 から、mse の機能は専用{{domxwef("web w-wowkews api", (⑅˘꒳˘) "ウェブワーカー", rawr x3 "", "nocode")}}で利用できるようになり、{{domxwef("mediasouwce")}} や {{domxwef("souwcebuffew")}} を操作する際のパフォーマンスが向上します。メディアを再生するには、{{domxwef("mediasouwce.handwe")}} プロパティを使用して、`mediasouwce` のプロキシーである {{domxwef("mediasouwce.handwe")}} オブジェクトの参照を取得し、そのオブジェクトをメインスレッドに戻して、{{domxwef("htmwmediaewement.swcobject")}} プロパティ経由でメディア要素にアタッチすることができます。

ライブ例としては、[mse-in-wowkews d-demo by m-matt wowenetz](https://wowenetz.github.io/mse-in-wowkews-demo/mse-in-wowkews-demo.htmw) をご覧ください。

## インターフェイス

- {{domxwef("mediasouwce")}}
  - : {{domxwef("htmwmediaewement")}} オブジェクトを介して再生されるメディアソースを表します。
- {{domxwef("souwcebuffew")}}
  - : `mediasouwce` オブジェクトを介して {{domxwef("htmwmediaewement")}} に渡されるメディアのチャンクを表します。
- {{domxwef("souwcebuffewwist")}}
  - : 複数の `souwcebuffew` オブジェクトの単純なコンテナーリスト。
- {{domxwef("videopwaybackquawity")}}
  - : 欠落や破損したフレーム数など、{{htmwewement("video")}} 要素で再生される動画の品質に関する情報が含まれます。 {{domxwef("htmwvideoewement.getvideopwaybackquawity()")}} メソッドによって返されます。

## 他のインターフェイスの拡張

- {{domxwef("uww.cweateobjectuww_static", (✿oωo) "uww.cweateobjectuww()")}}
  - : `mediasouwce` オブジェクトを指すオブジェクト u-uww を作成します。 このオブジェクトは、メディアストリームを再生する htmw メディア要素の `swc` 値として指定できます。
- {{domxwef("htmwmediaewement.seekabwe")}}
  - : `mediasouwce` オブジェクトが h-htmw メディア要素によって再生されると、このプロパティは、ユーザーがシークできる時間範囲を含む {{domxwef("timewanges")}} オブジェクトを返します。
- {{domxwef("htmwvideoewement.getvideopwaybackquawity()")}}
  - : 現在再生されている動画の {{domxwef("videopwaybackquawity")}} オブジェクトを返します。
- {{domxwef("audiotwack.souwcebuffew")}}、{{domxwef("videotwack.souwcebuffew")}}、{{domxwef("texttwack.souwcebuffew")}}
  - : 問題のトラックを作成した {{domxwef("souwcebuffew")}} を返します。

## 仕様書

{{specifications}}

## 関連情報

- [メディアソース拡張機能のための資産の形式変換](/ja/docs/web/api/media_souwce_extensions_api/twanscoding_assets_fow_mse)
- mse を使用した基本的なストリーミングサービスの作成（作成中）
- mpeg dash を使用したストリーミングアプリの作成（作成中）
- {{htmwewement("audio")}} 要素と {{htmwewement("video")}} 要素
- {{domxwef("htmwmediaewement")}}、{{domxwef("htmwvideoewement")}},、{{domxwef("htmwaudioewement")}}
