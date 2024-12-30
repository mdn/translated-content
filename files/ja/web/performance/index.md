---
title: ウェブパフォーマンス
slug: Web/Performance
l10n:
  sourceCommit: abf4152eb4a90cefc54e4401261605ca6ee5db35
---

{{QuickLinksWithSubPages}}

ウェブパフォーマンスは客観的な測定値と、読み込み時や実行時のユーザーエクスペリエンスの知覚状況から成ります。ウェブパフォーマンスとは、サイトが読み込まれるまでの時間、操作可能・応答可能になるまでの時間、そしてユーザーが操作する際のコンテンツのスムーズさを意味します。スクロールはスムーズか、ボタンはクリックしやすいか、ポップアップはすぐに読み込まれて表示されるか、表示の際にスムーズにアニメーションするか。ウェブパフォーマンスには、読み込み時間、 1 秒あたりのフレーム数、操作可能になるまでの時間などの客観的な測定値と、コンテンツが読み込まれるまでにどのくらいの時間がかかったように感じたかという主観的な体験の両方が含まれます。

サイトが応答するまでの時間が長ければ長いほど、ユーザーはそのサイトを放棄する傾向があります。読み込み時間と応答時間を最小限に抑え、さらに機能を追加して遅延を隠すことで、できるだけ早く、できるだけ利用可能でインタラクティブな体験を提供し、一方で、体験のロングテール部分では非同期的に読み込みを行うことが重要です。

ウェブパフォーマンスの測定と改善に役立つツール、API、およびベストプラクティスがあります。 この章でそれらをカバーします。

## キーパフォーマンスガイド

{{LandingPageListSubpages}}

## 初心者向けチュートリアル

MDN の[ウェブパフォーマンスの学習領域](/ja/docs/Learn/Performance)には、パフォーマンスの基礎をカバーする最新のチュートリアルが含まれています。パフォーマンスについての初心者は、ここから始めてください。

- [ウェブパフォーマンス: 短い概要](/ja/docs/Learn/Performance/What_is_web_performance)
  - : ウェブパフォーマンスの学習経路の概要です。ここから旅を始めましょう。
- [ウェブパフォーマンスとは](/ja/docs/Learn/Performance/What_is_web_performance)
  - : この記事では、パフォーマンスとは何かをよく理解することからモジュールを始めます。パフォーマンスについて考えるときに考慮すべきツール、指標、API、ネットワーク、人々のグループ、そしてウェブ開発のワークフローの一部としてパフォーマンスを活用する方法などを紹介します。
- [ユーザーはパフォーマンスをどう知覚するのか](/ja/docs/Learn/Performance/Perceived_performance)
  - : ウェブサイトの速さをミリ秒単位で示すことよりも重要なのは、ユーザーがサイトの速さをどのように認識しているかということです。これらの認識は、実際のページロード時間、アイドリング、ユーザーインタラクションへの応答性、スクロールやその他のアニメーションのスムーズさに影響されます。この記事では、様々なロードメトリクス、アニメーション、応答性のメトリクスと、実際の時間ではなくてもユーザーの認識を改善するためのベストプラクティスについて説明します。
- [ウェブパフォーマンスの基本](/ja/docs/Learn/Performance/Web_Performance_Basics)
  - : HTML、CSS、JavaScript、メディアファイルなどのフロントエンド部品に加えて、アプリケーションを遅くする機能と、主観的・客観的にアプリケーションを速くする機能があります。ウェブパフォーマンスに関連する API、開発者ツール、ベストプラクティス、バッドプラクティスは数多くあります。ここでは、これらの機能の多くを基本的なレベルで紹介し、それぞれのトピックについて、パフォーマンスを向上させるためのより深い考察へのリンクを提供します。
- [HTML のパフォーマンス特性](/ja/docs/Learn/Performance/HTML)
  - : マークアップの属性やソースの順序によっては、ウェブサイトのパフォーマンスに影響を与えることがあります。 DOM ノードの数を最小限に抑え、スタイル、スクリプト、メディア、サードパーティのスクリプトなどのコンテンツを含むために、最適な順序と属性を使用することで、ユーザーエクスペリエンスを劇的に向上させることができます。この記事では、最大限のパフォーマンスを確保するために HTML をどのように使用すればよいかを詳しく見ていきます。
- [マルチメディア: 画像と動画](/ja/docs/Learn/Performance/Multimedia)
  - : ウェブパフォーマンスの中で最も身近な位置にあるのは、メディアの最適化です。各ユーザーエージェントの能力、サイズ、ピクセル密度に応じて、異なるメディアファイルを提供することが可能です。また、バックグラウンドのビデオからオーディオトラックを削除するなどのヒントを加えると、さらにパフォーマンスが向上します。この記事では、動画、音声、画像のコンテンツがパフォーマンスに与える影響と、その影響をできるだけ小さくするための方法について説明します。
- [CSS パフォーマンス特性](/ja/docs/Learn/Performance/CSS)
  - : CSS は、パフォーマンス向上のための最適化の焦点としてはあまり重要ではないかもしれませんが、パフォーマンスに影響を与える CSS の機能はいくつかあります。この記事では、パフォーマンスに影響を与えるいくつかの CSS プロパティと、パフォーマンスに悪影響を与えないためのスタイルの処理方法を提案します。
- [JavaScript パフォーマンスのベストプラクティス](/ja/docs/Learn/Performance/JavaScript)
  - : JavaScript は、適切に使用すればインタラクティブで没入感のあるウェブ体験を実現できますが、ダウンロード時間、レンダリング時間、アプリ内のパフォーマンス、バッテリー寿命、ユーザーエクスペリエンスを大きく損なう可能性があります。この記事では、複雑なコンテンツであっても可能な限りパフォーマンスを向上させるために考慮すべき JavaScript のベストプラクティスを紹介します。

## パフォーマンス API の使用

- [リソースタイミング API](/ja/docs/Web/API/Performance_API/Resource_timing)
  - : [リソースの読み込みとそのタイミング](/ja/docs/Web/API/Performance_API/Resource_timing)です。リソースバッファの管理や CORS への対応なども含みます。
- [ユーザータイミング API](/ja/docs/Web/API/Performance_API/User_timing)
  - : アプリケーション固有のタイムスタンプを生成するために、[ユーザータイミング API](/ja/docs/Web/API/Performance_API/User_timing) の "mark" および "measure" の種類の項目を使用します。これらはブラウザーのパフォーマンスタイムラインの一部です。
- [ビーコン API](/ja/docs/Web/API/Beacon_API)
  - : [Beacon](/ja/docs/Web/API/Beacon_API) インターフェイスは、ウェブサーバーへの非同期かつブロックされないリクエストをスケジューリングします。
- [交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : [交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API) を使って要素が見えるようになることを時間的に測定し、関心のある要素が可視化されたときに非同期に通知を受けることができます。

## その他の文書

- [Firefox プロファイラーのパフォーマンス機能](https://profiler.firefox.com/docs/#/)
  - : このウェブサイトでは、[コールツリー](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree)、[フレイムグラフ](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph)、[スタックチャート](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart)、[マーカーチャート](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart)、[ネットワークチャート](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart)など、開発者ツールのパフォーマンス機能を使用し、理解する方法に関する情報を提供しています。
- [組み込みプロファイラーによるプロファイル](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Firefox 組み込みのプロファイラーを使用して、アプリのパフォーマンスをプロファイリングする方法を紹介します。

## 用語集の用語

- {{glossary('Beacon', 'ビーコン')}}
- {{glossary('Brotli compression', 'Brotli 圧縮')}}
- [クライアントヒント](/ja/docs/Web/HTTP/Client_hints)
- {{glossary('Code splitting', 'コード分割')}}
- {{glossary('CSSOM')}}
- {{glossary('Domain sharding', 'ドメインシャーディング')}}
- {{glossary('Effective connection type', '有効接続種別')}}
- {{glossary('First contentful paint')}}
- {{glossary('First CPU idle')}}
- {{glossary('First input delay')}}
- {{glossary('First meaningful paint')}}
- {{glossary('First paint')}}
- {{glossary('HTTP')}}
- {{glossary('HTTP_2', 'HTTP/2')}}
- {{glossary('Jank')}}
- {{glossary('Latency', 'レイテンシー')}}
- {{glossary('Lazy load', '遅延読み込み')}}
- {{glossary('Long task')}}
- {{glossary('Lossless compression', '可逆圧縮')}}
- {{glossary('Lossy compression', '非可逆圧縮')}}
- {{glossary('Main thread', 'メインスレッド')}}
- {{glossary('Minification')}}
- {{glossary('Network throttling', 'ネットワークスロットリング')}}
- {{glossary('Packet', 'パケット')}}
- {{glossary('Page load time', 'ページ読み込み時間')}}
- {{glossary('Page prediction')}}
- {{glossary('Parse', '構文解析')}}
- {{glossary('Perceived performance', '知覚的パフォーマンス')}}
- {{glossary('Prefetch', '先読み')}}
- {{glossary('Prerender')}}
- {{glossary('QUIC')}}
- {{glossary('RAIL')}}
- {{glossary('Real User Monitoring')}}
- {{glossary('Resource Timing')}}
- {{glossary('Round Trip Time', 'Round Trip Time (RTT)')}}
- {{glossary('Server Timing')}}
- {{glossary('Speculative parsing', '投機的解析')}}
- {{glossary('Speed index', 'スピードインデックス')}}
- {{glossary('SSL')}}
- {{glossary('Synthetic monitoring', '合成モニタリング')}}
- {{glossary('TCP handshake', 'TCP ハンドシェイク')}}
- {{glossary('TCP slow start')}}
- {{glossary('Time to first byte', '最初のバイトまでの時間')}}
- {{glossary('Time to interactive', '対話までの時間')}}
- {{glossary('TLS')}}
- {{glossary('TCP', 'Transmission Control Protocol (TCP)')}}
- {{glossary('Tree shaking')}}
- {{glossary('Web performance', 'ウェブパフォーマンス')}}

## 関連情報

HTML

- [`<picture>` 要素](/ja/docs/Web/HTML/Element/picture)
- [`<video>` 要素](/ja/docs/Web/HTML/Element/video)
- [`<source>` 要素](/ja/docs/Web/HTML/Element/source)
- [`<img> srcset` 属性](/ja/docs/Web/HTML/Element/img#attributes)

  - [レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [`rel="preload"` によるコンテンツの事前読み込み](/ja/docs/Web/HTML/Attributes/rel/preload)
- <https://w3c.github.io/preload/>

CSS

- [will-change](/ja/docs/Web/CSS/will-change)
- GPU v CPU
- レイアウトの測定
- フォント読み込みのベストプラクティス

JavaScript

- [DOMContentLoaded](/ja/docs/Web/API/Document/DOMContentLoaded_event)
- [ガベージコレクション](/ja/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/ja/docs/Web/API/Window/requestAnimationFrame)

API

- [パフォーマンス API](/ja/docs/Web/API/Performance_API)
- [ナビゲーションタイミング API](/ja/docs/Web/API/Performance_API/Navigation_timing)
- [Media Capabilities API](/ja/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [ネットワーク情報 API](/ja/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/ja/docs/Web/API/PerformanceNavigationTiming)
- [バッテリー状態 API](/ja/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/ja/docs/Web/API/Navigator/deviceMemory)
- [交差オブザーバー](/ja/docs/Web/API/Intersection_Observer_API)
- [Using the User Timing API](/ja/docs/Web/API/Performance_API/User_timing)
- [High Resolution Timing API](/ja/docs/Web/API/DOMHighResTimeStamp) ([https://w3c.github.io/hr-time/)](https://w3c.github.io/hr-time/)
- [リソースタイミング API](/ja/docs/Web/API/Performance_API/Resource_timing)
- [ページ可視性](/ja/docs/Web/API/Page_Visibility_API)
- [Background Tasks API の協調スケジューリング](/ja/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/ja/docs/Web/API/Window/requestIdleCallback)

- [ビーコン API](/ja/docs/Web/API/Beacon_API)
- リソースのヒント - [dns-prefetch](/ja/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), preconnect, [prefetch](/ja/docs/Glossary/Prefetch), prerender
- [FetchEvent.preloadResponse](/ja/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/ja/docs/Web/API/PerformanceServerTiming)

ヘッダー

- [Content-encoding](/ja/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- [gZip](/ja/docs/Glossary/gzip_compression)
- クライアントヒント

ツール

- [Firefox 開発者ツールのパフォーマンス](https://profiler.firefox.com/docs/#/)

その他の指標

- スピードインデックスと知覚的スピードインデックス

ベストプラクティス

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [ウェブワーカー API](/ja/docs/Web/API/Web_Workers_API)

- [オフラインとバックグラウンド操作](/ja/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [キャッシュ](/ja/docs/Web/HTTP/Caching)
- コンテンツ配信ネットワーク (CDN)
