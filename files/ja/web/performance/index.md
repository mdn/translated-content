---
title: ウェブパフォーマンス
slug: Web/Performance
---

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
- [ユーザーはパフォーマンスをどう知覚するのか](/ja/docs/Learn/Performance/perceived_performance)
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
- [モバイルパフォーマンス](/ja/docs/Learn/Performance/Mobile)
  - : モバイル端末でのウェブアクセスは非常に人気があり、すべてのモバイルプラットフォームには本格的なウェブブラウザーが搭載されていますが、帯域幅、CPU、バッテリーの寿命が限られている可能性があるため、これらのプラットフォームでのウェブコンテンツのパフォーマンスを考慮することが重要です。この記事では、モバイルに特化したパフォーマンスの考慮点について説明します。

## パフォーマンス API の使用

- [Performance API](/ja/docs/Web/API/Performance_API/Using_the_Performance_API)
  - : このガイドでは、 [`Performance`](/ja/docs/Web/API/Performance) インターフェイスの使い方を説明します。これは [High-Resolution Time](https://w3c.github.io/hr-time/) 標準で定義されているものです。
- [Resource Timing API](/ja/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)
  - : [リソースの読み込みとそのタイミング](/ja/docs/Web/API/Resource_Timing_API)です。リソースバッファの管理や CORS への対応なども含みます。
- [パフォーマンスタイムライン](/ja/docs/Web/API/Performance_Timeline/Using_Performance_Timeline)
  - : [Performance Timeline](/ja/docs/Web/API/Performance_Timeline) 標準は、アプリケーション内のクライアントサイドのレイテンシー測定をサポートする [`Performance`](/ja/docs/Web/API/Performance) インターフェイスの拡張機能を定義しています。これらのインターフェイスを併用することで、アプリケーションのパフォーマンスのボトルネックを特定するのに役立ちます。
- [User Timing API](/ja/docs/Web/API/User_Timing_API/Using_the_User_Timing_API)
  - : アプリケーション固有のタイムスタンプを生成するために、 [user timing API](/ja/docs/Web/API/User_Timing_API) の "mark" および "measure" の種類の項目を使用します。これらはブラウザーのパフォーマンスタイムラインの一部です。
- [Frame Timing API](/ja/docs/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API)
  - : [`PerformanceFrameTiming`](/ja/docs/Web/API/PerformanceFrameTiming) インターフェイスは、ブラウザーのイベントループに関する*フレーム*のタイミングデータを提供します。
- [Beacon API](/ja/docs/Web/API/Beacon_API)
  - : [Beacon](/ja/docs/Web/API/Beacon_API) インターフェイスは、ウェブサーバーへの非同期かつブロックされないリクエストをスケジューリングします。
- [Intersection Observer API](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : [Intersection Observer API](/ja/docs/Web/API/Intersection_Observer_API) を使って要素が見えるようになることを時間的に測定し、関心のある要素が可視化されたときに非同期に通知を受けることができます。

## その他の文書

- [開発者ツールのパフォーマンス機能](/ja/docs/Tools/Performance)
  - : この節では、[ウォーターフォール](/ja/docs/Tools/Performance/Waterfall)、[コールツリー](/ja/docs/Tools/Performance/Call_Tree)、[フレイムチャート](/ja/docs/Tools/Performance/Flame_Chart)など、開発者ツールのパフォーマンス機能の使い方と理解について説明します。
- [組み込みプロファイラーによるプロファイル](/ja/docs/Mozilla/Performance/Profiling_with_the_Built-in_Profiler)
  - : Learn how to profile app performance with Firefox's built-in profiler.

## 用語集の用語

- {{glossary('Beacon')}}
- {{glossary('Brotli compression')}}
- {{glossary('Client hints')}}
- {{glossary('Code splitting')}}
- {{glossary('CSSOM')}}
- {{glossary('Domain sharding')}}
- {{glossary('Effective connection type')}}
- {{glossary('First contentful paint')}}
- {{glossary('First CPU idle')}}
- {{glossary('First input delay')}}
- {{glossary('First interactive')}}
- {{glossary('First meaningful paint')}}
- {{glossary('First paint')}}
- {{glossary('HTTP')}}
- {{glossary('HTTP_2', 'HTTP/2')}}
- {{glossary('Jank')}}
- {{glossary('Latency')}}
- {{glossary('Lazy load')}}
- {{glossary('Long task')}}
- {{glossary('Lossless compression')}}
- {{glossary('Lossy compression')}}
- {{glossary('Main thread')}}
- {{glossary('Minification')}}
- {{glossary('Network throttling')}}
- {{glossary('Packet')}}
- {{glossary('Page load time')}}
- {{glossary('Page prediction')}}
- {{glossary('Parse')}}
- {{glossary('Perceived performance')}}
- {{glossary('Prefetch')}}
- {{glossary('Prerender')}}
- {{glossary('QUIC')}}
- {{glossary('RAIL')}}
- {{glossary('Real User Monitoring')}}
- {{glossary('Resource Timing')}}
- {{glossary('Round Trip Time (RTT)')}}
- {{glossary('Server Timing')}}
- {{glossary('Speculative parsing')}}
- {{glossary('Speed index')}}
- {{glossary('SSL')}}
- {{glossary('Synthetic monitoring')}}
- {{glossary('TCP handshake')}}
- {{glossary('TCP slow start')}}
- {{glossary('Time to first byte')}}
- {{glossary('Time to interactive')}}
- {{glossary('TLS')}}
- {{glossary('TCP', 'Transmission Control Protocol (TCP)')}}
- {{glossary('Tree shaking')}}
- {{glossary('Web performance')}}

## まだ書かれていない文書

- [JavaScript performance best practices](/ja/docs/Learn/Performance/JavaScript)
  - : JavaScript, when used properly, can allow for interactive and immersive web experiences ... or it can significantly harm download time, render time, in app performance, battery life, and user experience. This article outlines some JavaScript best practices that can ensure even complex content's performance is the highest possible.
- [Mobile performance](/ja/docs/Learn/Performance/Mobile)
  - : With web access on mobile devices being so popular, and all mobile platforms having fully-fledged web browsers, but possibly limited bandwidth, CPU, and battery life, it is important to consider the performance of your web content on these platforms. This article also looks at mobile-specific performance considerations.
- Web font performance
  - : An often overlooked aspect of performance landscape are web fonts. Web fonts are more prominent in web design than ever, yet many developers embed them from a third party service and think nothing of it. In this article, we'll covers methods for getting your font files as small as possible with efficient file formats and sub setting. From there, we'll go on to talk about how browsers text, and how you can use CSS and JavaScript features to ensure your fonts render quickly, and with minimal disruption to the user experience.
- Performance bottlenecks
  - : ...
- Understanding bandwidth
  - : Bandwidth is the amount of data measured in Megabits(Mb) or Kilobits(Kb) that one can send per second. This article explains the role of bandwidth in media-rich internet applications, how you can measure it, and how you can optimize applications to make the best use of available bandwidth
- The role of TLS in performance
  - : TLS—or HTTPS as we tend to call it—is crucial in creating secure and safe user experiences. While hardware has reduced the negative impacts TLS has had on server performance, it still represents a substantial slice of the time we spend waiting for browsers to connect to servers. This article explains the TLS handshake process, and offers some tips for reducing this time, such as OCSP stapling, HSTS preload headers, and the potential role of resource hints in masking TLS latency for third parties.
- Reading performance charts
  - : Developer tools provide information on performance, memory, and network requests. Knowing how to read [waterfall](/ja/docs/Tools/Performance/Waterfall) charts, [call trees](/ja/docs/Tools/Performance/Call_Tree), traces, [flame charts](/ja/docs/Tools/Performance/Flame_Chart) , and [allocations](/ja/docs/Tools/Performance/Allocations) in your browser developer tools will help you understand waterfall and flame charts in other performance tools.
- Alternative media formats
  - : When it comes to images and videos, there are more formats than you're likely aware of. Some of these formats can take your highly optimized media-rich pages even further by offering additional reductions in file size. In this guide we'll discuss some alternative media formats, how to use them responsibly so that non-supporting browsers don't get left out in the cold, and some advanced guidance on transcoding your existing assets to them.
- Analyzing JavaScript bundles
  - : No doubt, JavaScript is a big part of modern web development. While you should always strive to reduce the amount of JavaScript you use in your applications, it can be difficult to know where to start. In this guide, we'll show you how to analyze your application's script bundles, so you know _what_ you're using, as well how to detect if your app contains duplicated scripts between bundles.
- [Lazy loading](/ja/docs/Web/Performance/Lazy_loading)
  - : It isn't always necessary to load all of a web applications assets on initial page load. Lazy Loading is deferring the loading of assets on a page, such as scripts, images, etc., on a page to a later point in time i.e when those assets are actually needed.
- Lazy-loading JavaScript with dynamic imports
  - : When developers hear the term "lazy loading", they immediately think of below-the-fold imagery that loads when it scrolls into the viewport. But did you know you can lazy load JavaScript as well? In this guide we'll talk about the dynamic import() statement, which is a feature in modern browsers that loads a JavaScript module on demand. Of course, since this feature isn't available everywhere, we'll also show you how you can configure your tooling to use this feature in a widely compatible fashion.
- [Controlling resource delivery with resource hints](/ja/docs/Web/Performance/Controlling_resource_delivery_with_resource_hints)
  - : Browsers often know better than we do when it comes to resource prioritization and delivery however they're far from clairyovant. Native browser features enable us to hint to the browser when it should connect to another server, or preload a resource before the browser knows it ever needs it. When used judiciously, this can make fast experience seem even faster. In this article, we cover native browser features like rel=preconnect, rel=dns-prefetch, rel=prefetch, and rel=preload, and how to use them to your advantage.
- [Performance Budgets](/ja/docs/Web/Performance/Performance_budgets)
  - : Marketing, design, and sales needs, and developer experience, often ad bloat, third-party scripts, and other features that can slow down web performance. To help set priorities, it is helpful to set a performance budget: a set of restrictions to not exceed during the development phase. In this article, we'll discuss creating and sticking to a performance budget.
- [Web performance checklist](/ja/docs/Web/Performance/Checklist)
  - : A performance checklist of features to consider when developing applications with links to tutorials on how to implement each feature, include service workers, diagnosing performance problems, font loading best practices, client hints, creating performant animations, etc.
- [Mobile performance checklist](/ja/docs/Web/Performance/Mobile_performance_checklist)
  - : A concise checklist of performance considerations impacting mobile network users on hand-held, battery operated devices.

## 関連情報

HTML

- [`<picture>` 要素](/ja/docs/Web/HTML/Element/picture)
- [`<video>` 要素](/ja/docs/Web/HTML/Element/video)
- [`<source>` 要素](/ja/docs/Web/HTML/Element/source)
- [`<img> srcset` 属性](/ja/docs/Web/HTML/Element/img#attributes)

  - [レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [`rel="preload"` によるコンテンツの先読み](/ja/docs/Web/HTML/Link_types/preload) - [(https://w3c.github.io/preload/](https://w3c.github.io/preload/))

CSS

- [will-change](/ja/docs/Web/CSS/will-change)
- GPU v CPU
- レイアウトの測定
- フォント読み込みのベストプラクティス

JavaScript

- [DOMContentLoaded](/ja/docs/Web/API/Window/DOMContentLoaded_event)
- [ガベージコレクション](/ja/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/ja/docs/Web/API/Window/requestAnimationFrame)

API

- [Performance API](/ja/docs/Web/API/Performance_API)
- [Navigation Timing API](/ja/docs/Web/API/Navigation_timing_API)
- [Media Capabilities API](/ja/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [Network Information API](/ja/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/ja/docs/Web/API/PerformanceNavigationTiming)
- [Battery Status API](/ja/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/ja/docs/Web/API/Navigator/deviceMemory)
- [Intersection Observer](/ja/docs/Web/API/Intersection_Observer_API)
- [Using the User Timing API](/ja/docs/Web/API/User_Timing_API/Using_the_User_Timing_API)
- [Long Tasks API](/ja/docs/Web/API/Long_Tasks_API)
- [High Resolution Timing API](/ja/docs/Web/API/DOMHighResTimeStamp) ([https://w3c.github.io/hr-time/)](https://w3c.github.io/hr-time/)
- [Resource Timing API](/ja/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)
- [Page Visibility](/ja/docs/Web/API/Page_Visibility_API)
- [Background Tasks API の協調スケジューリング](/ja/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/ja/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/ja/docs/Web/API/Beacon_API)
- リソースのヒント - [dns-prefetch](/ja/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), preconnect, [prefetch](/ja/docs/Web/HTTP/Link_prefetching_FAQ), prerender
- [FetchEvent.preloadResponse](/ja/docs/Web/API/FetchEvent/PreloadResponse)
- [Performance Server Timing API](/ja/docs/Web/API/PerformanceServerTiming)

ヘッダー

- [Content-encoding](/ja/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- [gZip](/ja/docs/Glossary/GZip_compression)
- クライアントヒント

ツール

- [Firefox 開発者ツールのパフォーマンス](/ja/docs/Tools/Performance)
- フレイムチャート
- ネットワークパネル
- ウォーターフォールチャート

その他の指標

- スピードインデックスと知覚的スピードインデックス

ベストプラクティス

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [Web Workers API](/ja/docs/Web/API/Web_Workers_API)

- [PWA](/ja/docs/Web/Progressive_web_apps/Offline_Service_workers)
- [キャッシュ](/ja/docs/Web/HTTP/Caching)
- コンテンツ配信ネットワーク (CDN)
