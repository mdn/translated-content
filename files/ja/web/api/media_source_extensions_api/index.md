---
title: メディアソース拡張機能 API
slug: Web/API/Media_Source_Extensions_API
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{DefaultAPISidebar("Media Source Extensions")}}

**メディアソース拡張機能 API** (Media Source Extensions API, **MSE**) は、プラグイン不要でウェブベースのストリーミングメディアを可能にする機能を提供します。 MSE を使用すると、メディアストリームを JavaScript で作成し、{{htmlelement("audio")}} 要素 や {{htmlelement("video")}} 要素で再生できます。

## メディアソース拡張機能の概念と使用方法

ここ数年で、動画と音声の再生は、ウェブアプリにおいてプラグイン不要で利用可能になりましたが、提供される基本的な機能は、単一トラック全体を再生する場合にのみ有効でした。 例えば、配列バッファーを結合/分割することはできません。 RTMP プロトコルを使用して動画ストリームを提供する Flash Media Server などの技術により、ストリーミングメディアは最近まで Flash の領分でした。

### MSE 標準

メディアソース拡張機能 (MSE) により、これは変化しています。MSE を使用すると、メディア要素に渡す通常の単一のプログレッシブな `src` の URI を `MediaSource` オブジェクトへの参照で置き換えることができます。これは再生するメディアの準備状態などの情報のコンテナーであり、ストリーム全体を構成するメディアのさまざまなチャンク（大きな塊）を表す複数の `SourceBuffer` オブジェクトへの参照です。 MSE を使用すると、コンテンツを取得する量と頻度をよりきめ細かく制御でき、バッファーを削除するタイミングなど、メモリー使用量の詳細をある程度制御できます。 拡張可能な API 上に構築される適応的ビットレートストリーミングクライアント（DASH や HLS を使用するクライアントなど）の基礎を築きます。

最新のブラウザーで MSE で動作するアセット（asset、静的コンテンツ）を作成するのは面倒なプロセスであり、かなりの時間、計算能力、エネルギーのすべてを必要とします。 コンテンツを適切な形式にもみほぐす外部ユーティリティの使用が必要です。 MSE を使用したさまざまなメディアコンテナーのブラウザーサポートは不完全ですが、H.264 動画コーデック、AAC 音声コーデック、および MP4 コンテナー形式の使用が一般的なベースラインです。 MSE は、コンテナーおよびコーデックのサポートの実行時検出用の API も提供します。

時間経過に伴う動画品質、コンテンツの取得速度、またはメモリーの削除速度を明示的に制御する必要がない場合は、{{htmlelement("video")}} タグと {{htmlelement("source")}} タグが簡単で適切な解決策になる可能性があります。

### DASH

**Dynamic Adaptive Streaming over HTTP**（DASH、HTTP を介した動的適応的ストリーミング）は、適応的コンテンツの取得方法を指定するためのプロトコルです。 これは、効率的に適応的ビットレートストリーミングクライアントを構築するために MSE の上に構築されたレイヤーです。 HTTP Live Streaming（HLS、HTTP ライブストリーミング）といった他のプロトコルを使用できますが、DASH はほとんどのプラットフォームをサポートしています。

DASH は、多くのロジックをネットワークプロトコルからクライアント側アプリのロジックに移動し、より単純な HTTP プロトコルを使用してファイルを取得します。 実際、単純な静的ファイルサーバーで DASH をサポートでき、CDN にも最適です。 これは、独自で非標準のクライアント/サーバープロトコルの実装に高価なライセンスを必要とした従来のストリーミングの解決策とは正反対です。

DASH の 2 つの最も一般的な使用例では、コンテンツを「オンデマンド」または「ライブ」で視聴します。 オンデマンドでは、開発者が時間をかけてアセットをさまざまな品質の複数の解像度に形式変換 (transcoding) できます。

ライブプロファイルのコンテンツは、形式変換とブロードキャストのために遅延を引き起こす可能性があるため、DASH は [WebRTC](/ja/docs/Web/API/WebRTC_API) のようなリアルタイム通信には適していません。 ただし、WebRTC よりもかなり多くのクライアント接続をサポートできます。

コンテンツを形式変換し、DASH、DASH ファイルサーバー、および JavaScript で記述された DASH クライアントライブラリーで使用する準備を行うための、無料でオープンソースのツールが多数あります。

### ワーカーでの利用可能性

Chrome 108 から、MSE の機能は専用{{domxref("Web Workers API", "ウェブワーカー", "", "nocode")}}で利用できるようになり、{{domxref("MediaSource")}} や {{domxref("SourceBuffer")}} を操作する際のパフォーマンスが向上します。メディアを再生するには、{{domxref("MediaSource.handle")}} プロパティを使用して、`MediaSource` のプロキシーである {{domxref("MediaSource.handle")}} オブジェクトの参照を取得し、そのオブジェクトをメインスレッドに戻して、{{domxref("HTMLMediaElement.srcObject")}} プロパティ経由でメディア要素にアタッチすることができます。

ライブ例としては、[MSE-in-Workers Demo by Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html) をご覧ください。

## インターフェイス

- {{domxref("MediaSource")}}
  - : {{domxref("HTMLMediaElement")}} オブジェクトを介して再生されるメディアソースを表します。
- {{domxref("SourceBuffer")}}
  - : `MediaSource` オブジェクトを介して {{domxref("HTMLMediaElement")}} に渡されるメディアのチャンクを表します。
- {{domxref("SourceBufferList")}}
  - : 複数の `SourceBuffer` オブジェクトの単純なコンテナーリスト。
- {{domxref("VideoPlaybackQuality")}}
  - : 欠落や破損したフレーム数など、{{htmlelement("video")}} 要素で再生される動画の品質に関する情報が含まれます。 {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} メソッドによって返されます。

## 他のインターフェイスの拡張

- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
  - : `MediaSource` オブジェクトを指すオブジェクト URL を作成します。 このオブジェクトは、メディアストリームを再生する HTML メディア要素の `src` 値として指定できます。
- {{domxref("HTMLMediaElement.seekable")}}
  - : `MediaSource` オブジェクトが HTML メディア要素によって再生されると、このプロパティは、ユーザーがシークできる時間範囲を含む {{domxref("TimeRanges")}} オブジェクトを返します。
- {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}}
  - : 現在再生されている動画の {{domxref("VideoPlaybackQuality")}} オブジェクトを返します。
- {{domxref("AudioTrack.sourceBuffer")}}、{{domxref("VideoTrack.sourceBuffer")}}、{{domxref("TextTrack.sourceBuffer")}}
  - : 問題のトラックを作成した {{domxref("SourceBuffer")}} を返します。

## 仕様書

{{Specifications}}

## 関連情報

- [メディアソース拡張機能のための資産の形式変換](/ja/docs/Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE)
- MSE を使用した基本的なストリーミングサービスの作成（作成中）
- MPEG DASH を使用したストリーミングアプリの作成（作成中）
- {{htmlelement("audio")}} 要素と {{htmlelement("video")}} 要素
- {{domxref("HTMLMediaElement")}}、{{domxref("HTMLVideoElement")}},、{{domxref("HTMLAudioElement")}}
