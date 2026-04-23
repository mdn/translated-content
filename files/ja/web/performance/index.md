---
title: ウェブパフォーマンス
short-title: パフォーマンス
slug: Web/Performance
l10n:
  sourceCommit: d37026a4d0e1e3a5a2ab82d34566689aada039f7
---

ウェブパフォーマンスは客観的な測定値と、読み込み時や実行時のユーザー体験の知覚状況からなります。
ウェブパフォーマンスとは、サイトが読み込まれるまでの時間、操作可能・応答可能になるまでの時間、そしてユーザーが操作する際のコンテンツのスムーズさを意味します。
パフォーマンスに関する懸念事項としては、スクロールはスムーズか、ボタンは反応が良いか、ポップアップはすばやく読み込まれ、アニメーションは滑らかか、などが挙げられます。
客観的な測定項目としては、読み込み時間、1 秒あたりのフレーム数、操作可能になるまでの時間などが挙げられ、主観的な使用感としては、コンテンツの読み込みに時間がかかると感じるかどうかが挙げられます。

サイトが応答するまでの時間が長ければ長いほど、ユーザーはそのサイトを放棄する傾向があります。読み込み時間と応答時間を最小限に抑え、さらに機能を追加して遅延を隠すことで、できるだけ早く、できるだけ利用可能でインタラクティブな体験を提供し、一方で、体験のロングテール部分では非同期的に読み込みを行うことが重要です。

ウェブパフォーマンスの測定と改善に役立つツール、API、およびベストプラクティスがあります。以下のページでそれを扱います。

## ウェブパフォーマンスガイド

[パフォーマンスガイド](/ja/docs/Web/Performance/Guides) は、ブラウザーの動作、パフォーマンスに影響を与える要素、およびアプリケーションのさまざまな側面におけるパフォーマンスの測定、最適化、監視の方法について説明したリソースです。

- [パフォーマンスの基本](/ja/docs/Web/Performance/Guides/Fundamentals)
  - : パフォーマンスとは効率を意味します。オープンウェブアプリというコンテキストにおいて、この記事では、パフォーマンスとは何か、ブラウザープラットフォームがパフォーマンスの改善にどのように役立つか、そしてパフォーマンスを検査および改善するために使用できるツールやプロセスについて、全般的に説明しています。
- [ページの生成: ブラウザーの動作の仕組み](/ja/docs/Web/Performance/Guides/How_browsers_work)
  - : ユーザーは、コンテンツの読み込みが速く、操作がスムーズなウェブの使い勝手を求めています。したがって、開発者はこの 2 つの目標の達成に努める必要があります。
    パフォーマンスと知覚的パフォーマンスを改善する方法を理解するには、ブラウザーの動作を理解することが役立ちます。
- [レイテンシーを理解する](/ja/docs/Web/Performance/Guides/Understanding_latency)
  - : **レイテンシー**は、データパケットがソースから宛先まで到達するのにかかる時間です。パフォーマンスの最適化に関しては、レイテンシーの原因を縮小するための最適化を行い、接続速度が遅いまたは不安定なユーザーに対応するために、高レイテンシーをエミュレートしてサイトのパフォーマンスを検査することが重要です。
- [推奨されるウェブパフォーマンスのタイミング：どのくらいの時間が長すぎるのか](/ja/docs/Web/Performance/Guides/How_long_is_too_long)
  - : ページの読み込み速度が遅いという明確な基準は設定されていませんが、コンテンツの読み込み（1 秒）、アイドル状態（50 ミリ秒）、アニメーション（16.7 ミリ秒）、ユーザー入力への応答（50～200 ミリ秒）を示すための具体的なガイドラインがあります。
- [dns-prefetch の使い方](/ja/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** は、リソースがリクエストされる前にドメイン名を解決しようとする試みです。これは、後で読み込まれるファイルや、ユーザーが従おうとするリンク先などです。
- [ナビゲーションタイミングとリソースタイミング](/ja/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : **ナビゲーションタイミング**は、ブラウザーの文書ナビゲーションイベントを測定する指標です。**リソースタイミング**は、アプリケーションのリソースの読み込みに関する詳細なネットワークタイミング測定値です。どちらも同じ読み取り専用プロパティを提供しますが、ナビゲーションタイミングはメイン文書のタイミングを測定するのに対し、リソースタイミングは、そのメイン文書によって呼び出されたすべての資産またはリソース、およびリソースが要求したリソースの時間を測定します。
- [起動パフォーマンスの最適化](/ja/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : 起動パフォーマンスの改善は、多くの場合、実行できるパフォーマンスの最適化の中で最も価値の高いものの 1 つです。
    良い使い勝手を得るためには、アプリケーションが確実にすばやく読み込まれるようにすることが重要です。この記事では、新しいアプリケーションを作成する場合と、他のプラットフォームからアプリケーションをウェブに移植する場合の両方について、パフォーマンスに関するヒントや提案を提供します。
- [クリティカルレンダリングパス](/ja/docs/Web/Performance/Guides/Critical_rendering_path)
  - : クリティカルレンダリングパスとは、HTML、CSS、JavaScript を画面にピクセルとして表示するために、ブラウザーが実行する一連の段階のことです。クリティカルレンダリングパスを最適化すると、レンダリングのパフォーマンスが改善されます。
    重要なレンダリングパスには、[ドキュメントオブジェクトモデル](/ja/docs/Web/API/Document_Object_Model) (DOM)、[CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model) (CSSOM)、レンダリングツリー、レイアウトがあります。
- [遅延読み込み](/ja/docs/Web/Performance/Guides/Lazy_loading)
  - : **遅延読み込み**は、リソースを非ブロック（非クリティカル）として識別し、必要な場合にのみ読み込む戦略です。これは、[クリティカルレンダリングパス](/ja/docs/Web/Performance/Guides/Critical_rendering_path) の長さを短縮する方法であり、ページの読み込み時間を短縮することになります。
- [投機的読み込み](/ja/docs/Web/Performance/Guides/Speculative_loading)
  - : **投機的読み込み**とは、ユーザーが次に訪問する可能性が最も高いページを予測し、関連付けられたページが実際に訪問される前に、ナビゲーション措置（DNS の先読み、リソースの取得、文書のレンダリングなど）を実行する慣行を指します。
- [パフォーマンス予算](/ja/docs/Web/Performance/Guides/Performance_budgets)
  - : パフォーマンス予算は、パフォーマンスの低下を防ぐための制限です。パフォーマンス予算は、ファイル、ファイル形式、ページに読み込まれたすべてのファイル、特定の指標（[対話までの時間](/ja/docs/Glossary/Time_to_interactive) など）、独自の指標（ヒーロー要素までの時間など）、または一定期間におけるしきい値に適用できます。
- [パフォーマンスモニタリング: RUM と合成モニタリング](/ja/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : **合成モニタリング**と**実ユーザーモニタリング (RUM)** は、ウェブパフォーマンスを監視し、その洞察を提供する 2 つの手法です。RUM と合成モニタリングは、パフォーマンスの異なるビューを提供し、それぞれ長所、用途、短所があります。RUM は一般的に、長期的な傾向の把握に最適ですが、合成モニタリングは、開発中の回帰検査や短期的なパフォーマンスの問題の軽減に非常に適しています。この記事では、これら 2 つのパフォーマンス監視手法を定義し、比較します。
- [CSS および JavaScript によるアニメーションのパフォーマンス](/ja/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : アニメーションは、多くのアプリケーションで快適な使い勝手を実現するために不可欠です。Web アニメーションを実装するには、CSS {{cssxref("transition","transitions")}}/{{cssxref("animation","animations")}} や JavaScript ベースのアニメーション（{{domxref("Window.requestAnimationFrame","requestAnimationFrame()")}} を使用）など、さまざまな方法があります。この記事では、CSS ベースと JavaScript ベースのアニメーションのパフォーマンスの違いを分析します。
- [アニメーションのパフォーマンスとフレームレート](/ja/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : ウェブ上のアニメーションは、{{domxref('SVGAnimationElement', 'SVG')}}、 {{domxref('Window.requestAnimationFrame','JavaScript')}} を使用することで実現できます。これには、{{htmlelement('canvas')}} および {{domxref('WebGL_API', 'WebGL')}}、CSS {{cssxref('animation')}}、{{htmlelement('video')}}、アニメーション GIF、さらにはアニメーション PNG およびそれ以外の画像形式も含まれます。
    CSS プロパティのアニメーションのパフォーマンスコストはプロパティごとに異なり、コストの高い CSS プロパティをアニメーション化すると、ブラウザーがスムーズな{{glossary("FPS", "フレームレート")}}を実現できなくなり、{{glossary('Jank', 'ジャンク')}}が発生する場合があります。

## 初心者向けチュートリアル

MDN の[ウェブパフォーマンスの学習領域](/ja/docs/Learn_web_development/Extensions/Performance)には、パフォーマンスの基礎をカバーする最新のチュートリアルが含まれています。パフォーマンスについての初心者は、ここから始めてください。

- [ウェブパフォーマンス: 短い概要](/ja/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : ウェブパフォーマンスの学習経路の概要です。ここから旅を始めましょう。
- [ウェブパフォーマンスとは](/ja/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : この記事では、パフォーマンスとは何かをよく理解することからモジュールを始めます。パフォーマンスについて考えるときに考慮すべきツール、指標、API、ネットワーク、人々のグループ、そしてウェブ開発のワークフローの一部としてパフォーマンスを活用する方法などを紹介します。
- [ユーザーはパフォーマンスをどう知覚するのか](/ja/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : ウェブサイトの速さをミリ秒単位で示すことよりも重要なのは、ユーザーがサイトの速さをどのように認識しているかということです。これらの認識は、実際のページロード時間、アイドリング、ユーザーインタラクションへの応答性、スクロールやその他のアニメーションのスムーズさに影響されます。この記事では、様々なロード指標、アニメーション、応答性の指標と、実際の時間ではなくてもユーザーの認識を改善するためのベストプラクティスについて説明します。
- [ウェブパフォーマンスの基本](/ja/docs/Learn_web_development/Extensions/Performance/Best_practices)
  - : HTML、CSS、JavaScript、メディアファイルなどのフロントエンド部品に加えて、アプリケーションを遅くする機能と、主観的・客観的にアプリケーションを速くする機能があります。ウェブパフォーマンスに関連する API、開発者ツール、ベストプラクティス、バッドプラクティスは数多くあります。ここでは、これらの機能の多くを基本的なレベルで紹介し、それぞれのトピックについて、パフォーマンスを向上させるためのより深い考察へのリンクを提供します。
- [HTML のパフォーマンス特性](/ja/docs/Learn_web_development/Extensions/Performance/HTML)
  - : マークアップの属性やソースの順序によっては、ウェブサイトのパフォーマンスに影響を与えることがあります。 DOM ノードの数を最小限に抑え、スタイル、スクリプト、メディア、サードパーティのスクリプトなどのコンテンツを含むために、最適な順序と属性を使用することで、ユーザーエクスペリエンスを劇的に向上させることができます。この記事では、最大限のパフォーマンスを確保するために HTML をどのように使用すればよいかを詳しく見ていきます。
- [マルチメディア: 画像と動画](/ja/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : ウェブパフォーマンスの中で最も身近な位置にあるのは、メディアの最適化です。各ユーザーエージェントの能力、サイズ、ピクセル密度に応じて、異なるメディアファイルを提供することが可能です。また、バックグラウンドのビデオからオーディオトラックを削除するなどのヒントを加えると、さらにパフォーマンスが向上します。この記事では、動画、音声、画像のコンテンツがパフォーマンスに与える影響と、その影響をできるだけ小さくするための方法について説明します。
- [CSS パフォーマンス特性](/ja/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS は、パフォーマンス向上のための最適化の焦点としてはあまり重要ではないかもしれませんが、パフォーマンスに影響を与える CSS の機能はいくつかあります。この記事では、パフォーマンスに影響を与えるいくつかの CSS プロパティと、パフォーマンスに悪影響を与えないためのスタイルの処理方法を提案します。
- [JavaScript パフォーマンスのベストプラクティス](/ja/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript は、適切に使用すればインタラクティブで没入感のあるウェブ体験を実現できますが、ダウンロード時間、レンダリング時間、アプリ内のパフォーマンス、バッテリー寿命、ユーザーエクスペリエンスを大きく損なう可能性があります。この記事では、複雑なコンテンツであっても可能な限りパフォーマンスを向上させるために考慮すべき JavaScript のベストプラクティスを紹介します。

## パフォーマンス API

[パフォーマンス API](/ja/docs/Web/API/Performance_API) は、ウェブアプリケーションのパフォーマンスを測定するために使用される一連の標準です。
次のページでは、パフォーマンス API の概要と、その使用方法に関する情報を記載しています。

- [高精度タイミング](/ja/docs/Web/API/Performance_API/High_precision_timing)
  - : パフォーマンス API は、システムクロックのずれや調整の影響を受けない、潜在的に 1 ミリ秒以下の分解能を持つ、安定した単調なクロックに基づく高精度な測定を可能にします。
    高分解能のタイマーは、精度が低く単調ではない {{jsxref("Date")}} タイムスタンプの代わりに、正確なベンチマーク測定を行うために必要です。
- [長いアニメーションフレームのタイミング](/ja/docs/Web/API/Performance_API/Long_animation_frame_timing)
  - : **長いアニメーションフレーム** (LoAF) は、ウェブサイトの使い勝手に影響を与える可能性があります。
    ユーザーインターフェイス (UI) の更新が遅くなり、コントロールが反応しないように見えたり、アニメーション効果やスクロールが[ぎこちない](/ja/docs/Glossary/Jank)（または滑らかでない）ものになったりして、ユーザーに不満を与える原因となります。
    [長いアニメーションフレーム API](https://w3c.github.io/long-animation-frames/) を使用すると、開発者は長いアニメーションフレームに関する情報を取得し、その根本的な原因をより深く理解することができます。この記事では、長いアニメーションフレーム API の使い方について説明します。
- [bfcache ブロックの原因の監視](/ja/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
  - : {{domxref("PerformanceNavigationTiming.notRestoredReasons")}} プロパティは、ナビゲーション時に現在の文書が {{Glossary("bfcache")}} を使用できなくなった理由に関する情報を報告します。
    開発者は、この情報を使用して、bfcache 対応にするために更新が必要なページを特定し、サイトのパフォーマンスを改善することができます。
- [ナビゲーションタイミング](/ja/docs/Web/API/Performance_API/Navigation_timing)
  - : ナビゲーションタイミングは、[PerformanceNavigationTiming](/ja/docs/Web/API/PerformanceNavigationTiming) API を使用して、あるページから別のページへ移動することに関連する指標を提供します。
    例えば、ドキュメントの読み込みやアンロードに要した時間を測定したり、{{Glossary("DOM")}} の構築が完了し、DOM との操作が可能になるまでに要した時間を記録したりすることができます。
- [パフォーマンスデータ](/ja/docs/Web/API/Performance_API/Performance_data)
  - : パフォーマンス API は、パフォーマンスデータの分析や視覚化は提供しません。
    しかし、パフォーマンス API は開発者ツールとよく統合されており、そのデータは多くの場合、分析の終了点やライブラリーに送信され、パフォーマンスの指標を記録します。この指標は、ユーザーに影響を与えるパフォーマンスのボトルネックを見つけるためにデータを評価するのに役立ちます。
    このページでは、パフォーマンス API データの種類、その収集方法、およびアクセス方法の概要について説明します。
- [リソースタイミング API](/ja/docs/Web/API/Performance_API/Resource_timing)
  - : リソースタイミングは、アプリケーションのリソースの読み込みに関する詳細なネットワークタイミングデータを取得および分析することを可能にします。
    アプリケーションは、タイミングメトリクスを使用して、例えば、ページ読み込みの一部として暗黙的に、あるいは JavaScript から明示的に（例えば {{domxref("Window/fetch", "fetch()")}} API を使用して）特定のリソース（画像やスクリプトなど）の読み込みにかかる時間を決定することができます。
- [サーバータイミング](/ja/docs/Web/API/Performance_API/Server_timing)
  - : サーバータイミングにより、サーバーはリクエストとレスポンスのサイクルに関する指標をユーザーエージェントに伝えることができます。
    この情報を収集し、パフォーマンス API で処理される他のすべての指標と同じ方法で、サーバー側の指標に基づいてアクションを実行することができます。
- [ユーザータイミング API](/ja/docs/Web/API/Performance_API/User_timing)
  - : アプリケーション固有のタイムスタンプを生成するために、[ユーザータイミング API](/ja/docs/Web/API/Performance_API/User_timing) の "mark" および "measure" の種類の項目を使用します。これらはブラウザーのパフォーマンスタイムラインの一部です。

### 関連 API

以下の API も、ページのパフォーマンスを測定および改善するのに有益です。

- [ページ可視 API](/ja/docs/Web/API/Page_Visibility_API)
  - : 文書が非表示になったことを知らせるイベント、およびページの現在の表示状態を見ていく機能を提供します。
- [バックグラウンドタスク API](/ja/docs/Web/API/Background_Tasks_API)
  - : **バックグラウンドタスクの協調スケジューリング API** (バックグラウンドタスク API または [`requestIdleCallback()`](/ja/docs/Web/API/Window/requestIdleCallback) API とも呼ばれる) は、ユーザーエージェントが実行可能な空き時間があると判断したときに、自動的に実行されるタスクをキューに入れる機能を提供します。
- [ビーコン API](/ja/docs/Web/API/Beacon_API)
  - : [Beacon](/ja/docs/Web/API/Beacon_API) インターフェイスは、ウェブサーバーへの非同期かつブロックされないリクエストをスケジューリングします。
- [交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : [交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API) を使って要素が見えるようになることを時間的に測定し、関心のある要素が可視化されたときに非同期に通知を受けることができます。
- [メディア能力 API](/ja/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
  - : メディアに対応しているかどうか、再生をスムーズかつ電力効率良く行うべきかどうかなど、クライアント端末のデコードおよびエンコード機能を公開し、再生に関するリアルタイムのフィードバックを提供して、適応型ストリーミングの実現とディスプレイのプロパティ情報へのアクセスを可能にします。
- [ネットワーク情報 API](/ja/docs/Web/API/Network_Information_API)
  - : 一般的な接続の種類（例: 'wifi'、'cellular' など）に関する、システムの接続に関する情報。
    これは、ユーザーの接続に基づいて、高解像度コンテンツまたは低解像度コンテンツを選択するために使用できます。
- [バッテリー状態 API](/ja/docs/Web/API/Battery_Status_API)
  - : **バッテリー API** は、システムのバッテリー充電レベルに関する情報を提供し、バッテリーレベルや充電ステータスが変化したときに送信されるイベントによって通知を受け取ることができます。
    これは、バッテリー残量が少ないときにバッテリーの消耗を縮小するためにアプリのリソース使用量を調整したり、データの損失を防ぐためにバッテリーが切れる前に変更内容を保存したりするために使用できます。
- [Navigator.deviceMemory](/ja/docs/Web/API/Navigator/deviceMemory)
  - : **`deviceMemory`** は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、端末のおよそのメモリー量をギガバイト単位で返します。
- [FetchEvent.preloadResponse](/ja/docs/Web/API/FetchEvent/preloadResponse)
  - : **`preloadResponse`** は {{domxref("FetchEvent")}} インターフェイスの読み取り専用プロパティで、 {{jsxref("Promise")}} を返します。これは、[ナビゲーション先読み](/ja/docs/Web/API/NavigationPreloadManager)が発生した場合はその {{domxref("Response")}} に解決し、それ以外の場合は `undefined` に解決します。

## プロファイリングとツール

- [Firefox プロファイラーのパフォーマンス機能](https://profiler.firefox.com/docs/#/)
  - : このウェブサイトでは、[コールツリー](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree)、[フレイムグラフ](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph)、[スタックチャート](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart)、[マーカーチャート](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart)、[ネットワークチャート](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart)など、開発者ツールのパフォーマンス機能を使用し、理解する方法に関する情報を提供しています。
- [組み込みプロファイラーによるプロファイル](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Firefox 組み込みのプロファイラーを使用して、アプリのパフォーマンスをプロファイリングする方法を紹介します。

## リファレンス

### HTML

- [`<picture>`](/ja/docs/Web/HTML/Reference/Elements/picture) 要素
- [`<video>`](/ja/docs/Web/HTML/Reference/Elements/video) 要素
- [`<source>`](/ja/docs/Web/HTML/Reference/Elements/source) 要素
- [`<img>`](/ja/docs/Web/HTML/Reference/Elements/img#属性) のレスポンシブ画像向け属性（`srcset` など）
- [`rel="preload"`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) 属性

### CSS

- [will-change](/ja/docs/Web/CSS/Reference/Properties/will-change)

### JavaScript

- [DOMContentLoaded](/ja/docs/Web/API/Document/DOMContentLoaded_event)
- [ガベージコレクション](/ja/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/ja/docs/Web/API/Window/requestAnimationFrame)

### HTTP

- [Content-encoding](/ja/docs/Web/HTTP/Reference/Headers/Content-Encoding)
- リソースヒント（[dns-prefetch](/ja/docs/Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control)、[preconnect](/ja/docs/Web/HTML/Reference/Attributes/rel/preconnect)、[prefetch](/ja/docs/Glossary/Prefetch)、事前レンダリングによる
- [HTTP/2](/ja/docs/Web/HTTP/Guides/Messages#http2_メッセージ)
- [クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)

## 関連情報

- [レスポンシブ画像](/ja/docs/Web/HTML/Guides/Responsive_images) HTML ガイド
- [ウェブワーカー API](/ja/docs/Web/API/Web_Workers_API)、[サービスワーカーの使い方](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)と[ウェブワーカーの使い方](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)を含む
- [オフラインおよびバックグラウンド操作](/ja/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [キャッシュ](/ja/docs/Web/HTTP/Guides/Caching)
- [クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)
- 用語集:
  - {{glossary('Beacon', 'ビーコン')}}
  - {{glossary('Brotli compression', 'Brotli 圧縮')}}
  - {{glossary('CDN', 'Content Delivery Networks (CDN)')}}
  - {{glossary('CLS', 'Cumulative Layout Shifts (CLS)')}}
  - {{glossary('Code splitting', 'コード分割')}}
  - {{glossary('CSSOM')}}
  - {{glossary('Domain sharding', 'ドメインシャーディング')}}
  - {{glossary('Effective connection type', '有効接続種別')}}
  - {{glossary('First contentful paint')}}
  - {{glossary('First CPU idle')}}
  - {{glossary('First paint')}}
  - {{glossary('gzip_compression', 'gzip 圧縮')}}
  - {{glossary('HTTP_2', 'HTTP/2')}}
  - {{glossary('HTTP')}}
  - {{glossary('Interaction to next paint', 'Interaction to next paint (INP)')}}
  - {{glossary('Jank', 'ジャンク')}}
  - {{glossary('Largest contentful paint', 'Largest Contentful Paint (LCP)')}}
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
  - {{glossary('Prerender', '事前レンダリング')}}
  - {{glossary('QUIC')}}
  - {{glossary('RAIL')}}
  - {{glossary('Real User Monitoring', 'Real User Monitoring (RUM)')}}
  - {{glossary('Resource Timing')}}
  - {{glossary('Round Trip Time', 'Round Trip Time (RTT)')}}
  - {{glossary('Server Timing')}}
  - {{glossary('Speculative parsing', '投機的解析')}}
  - {{glossary('Speed index', 'スピードインデックス')}}
  - {{glossary('SSL')}}
  - {{glossary('Synthetic monitoring', '合成モニタリング')}}
  - {{glossary('TCP handshake', 'TCP ハンドシェイク')}}
  - {{glossary('TCP slow start')}}
  - {{glossary('TCP', 'Transmission Control Protocol (TCP)')}}
  - {{glossary('Time to first byte', '最初のバイトまでの時間')}}
  - {{glossary('Time to interactive', '対話までの時間')}}
  - {{glossary('TLS')}}
  - {{glossary('Tree shaking')}}
  - {{glossary('Web performance', 'ウェブパフォーマンス')}}
- [Firefox 開発者ツール内のパフォーマンス](https://profiler.firefox.com/docs/#/)（英語）
