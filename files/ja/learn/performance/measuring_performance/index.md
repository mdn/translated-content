---
title: パフォーマンスの測定
slug: Learn/Performance/Measuring_performance
---

{{LearnSidebar}} {{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}パフォーマンスの測定は、あなたがあなたのアプリケーション、サイト、ウェブサービスを評価することを助ける重要な指標を提供します。たとえば、パフォーマンスの指標を使うことで、競合と比較してアプリケーションをどのように動作させるか決めたり、リリースごとのパフォーマンスを比較したりできます。測定対象として選択する指標はユーザー、サイト、そしてビジネスのゴールに関連するものであるべきです。それらは一貫した手法で収集、測定され、非技術系の関係者にも理解でき、利用可能なフォーマットで分析される必要があります。この記事ではサイトのパフォーマンス測定と最適化に利用できるウェブパフォーマンスの指標を紹介します。

| 前提: | 基本的なコンピューターリテラシー、[基本的なソフトウェアのインストール](/ja/Learn/Getting_started_with_the_web/Installing_basic_software)、[クライアントサイドのウェブ技術](/ja/docs/Learn/Getting_started_with_the_web)の基本的な知識 |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的: | 様々なウェブパフォーマンス API を通じて収集できる ウェブパフォーマンスの指標とデータの視覚化に利用できるツールの情報を提供すること                                                                                                    |

## パフォーマンス API

ウェブのコードを書くとき、自分自身でパフォーマンス測定ツールを作るために利用できるたくさんのウェブ API があります。

クライアントサイドのウェブパフォーマンスを測定するために [Navigation Timing API](/ja/docs/Web/API/Navigation_timing_API) を利用できます。前のページをアンロードするために必要な時間、ドメインのルックアップにかかる時間、ウィンドウのロードハンドラー実行にかかる時間の合計などが含まれます。この API は、下図に示すナビゲーションイベント全てに関する指標として利用できます。

![The various handlers that the navigation tiiming API can handle including Navigation timing API metrics Prompt for unload redirect unload App cache DNS TCP Request Response Processing onLoad navigationStart redirectStart redirectEnd fetchStart domainLookupEnd domainLookupStart connectStart (secureConnettionStart) connectEnd requestStart responseStart responseEnd unloadStart unloadEnd domLoading domInteractive domContentLoaded domComplete loadEventStart loadEventEnd](navigationtimingapi.jpg)

現在のページのパフォーマンスに関連する情報へのアクセスを提供する [Performance API](/ja/docs/Web/API/Performance_API/Using_the_Performance_API) は、[Performance Timeline API](/ja/docs/Web/API/Performance_Timeline)、[Navigation Timing API](/ja/docs/Web/API/Navigation_timing_API)、[User Timing API](/ja/docs/Web/API/User_Timing_API)、そして [Resource Timing API](/ja/docs/Web/API/Resource_Timing_API) を含みます。これらのインターフェースにより、JavaScript のタスクが完了するまでにかかる時間の正確な測定が可能になります。

[PerformanceEntry](/ja/docs/Web/API/PerformanceEntry) オブジェクトは、パフォーマンスタイムラインの一部です。パフォーマンスエントリーは アプリケーション内の明示的なポイントでパフォーマンスの*{{domxref("PerformanceMark","mark")}}* または _{{domxref("PerformanceMeasure","measure")}}_ を作ること（たとえば {{domxref("Performance.mark","mark()")}} メソッドを呼び出すこと）で直接的に作成されます。パフォーマンスエントリーは、画像などリソースの読み込みのようなタイミングで間接的に作成されることもあります。

[PerformanceObserver API](/ja/docs/Web/API/PerformanceObserver) はパフォーマンス測定のイベントを観察するために利用できます。さらにブラウザーのパフォーマンスタイムラインに新しいパフォーマンスエントリーが記録されるたびに通知することができます。

この記事ではこれらの API に深入りしませんが、これらの存在を知っていると便利です。パフォーマンスウェブ API を使う例についてより深く知りたい場合は [Navigation and timings](/ja/docs/Web/Performance/Navigation_and_resource_timings) の記事を参照してください。

## ツールと指標

パフォーマンスの改善を助けるために利用できるいくつかの異なるツールがあります。これらは一般的にふたつのカテゴリーに分類できます。

- [PageSpeed Insights](/ja/docs/Tools/Network_Monitor) や Firefox の [Network Monitor](/ja/docs/Tools/Network_Monitor) と [Performance Monitor](/ja/docs/Tools/Performance) のようなパフォーマンスを測定したり、指し示したりするツール。これらのツールはウェブアプリケーションやサイトの読み込みがどれくらい速いかまたは遅いかを示します。また、ウェブアプリケーションを最適化して改善するべき領域を指し示します。
- コードを更新してウェブアプリケーションやサイトのパフォーマンスを改善するツール。たとえば、バンドルツールは HTTP リクエストの回数を減らすためにコードを単一のファイルにまとめ、ミニファイツールはファイルをより小さくするためにコードからホワイトスペースを取り除きます。

このコースでは両方のカテゴリーを取り上げます。そしてパフォーマンスの指標だけではなく、サイトのパフォーマンスが改善しているかどうかを測定するための指標についても議論します。

### 一般的なパフォーマンスレポートツール

[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) のようなツールではウェブサイトのパフォーマンスを測定できます。URL を入力すると数秒でパフォーマンスのレポートを入手できます。レポートはモバイルとデスクトップの両方でウェブサイトがどの程度の性能を示すかを表すスコアを含みます。これは、すでにできていることと改善が必要な部分についてのアイデアを得る良いスタート地点になります。

本記事の執筆時点で、MDN のパフォーマンスレポートのサマリーは以下のようになっています。

![A screenshot of PageSpeed Insights report for the Mozilla homepage.](pagespeed-insight-mozilla-homepage.png)

パフォーマンスレポートは、ページに何かが表示されまでにユーザーがどのくらい待たなければならないか、ページを表示するまでに何バイトのデータがダウンロードされる必要があるかなどの情報を含みます。さらに測定された値が良好と考えられるか、あるいは不良であるかも示します。

[webpagetest.org](https://webpagetest.org/) は、サイトを自動的にテストして有益な指標を返すツールのもう一つの実例です。ぜひ webpagetest.org と PageSpeed Insights の両方であなたの好きなウェブサイトを実行してみてください。そしてスコアを見てみましょう。

### ネットワークツール

多くのブラウザーが、読み込み対象のページに対してそれらがどのように動作しているか確認するために使えるツールを用意しています。たとえば、FIrefox の [Network Monitor](/ja/docs/Tools/Network_Monitor) はネットワークからダウンロードされるすべてのアセットの詳細な情報を、それぞれダウンロードのどのくらいの時間がかかるかを示すグラフと合わせて表示します。

![](network-monitor.png)

異なるアクションを実行したときのウェブアプリケーションやサイトのユーザーインターフェースのパフォーマンスを測定するために [Performance Monitor](/ja/docs/Tools/Performance) を利用できます。これは ウェブアプリケーションやサイトを遅くしているかもしれない要素を指し示します。

![](perf-monitor.png)

## 結論

この記事ではウェブアプリケーションやサイトで利用可能なウェブパフォーマンスの指標の簡単な概要を紹介しました。次は、知覚されるパフォーマンスと、避けられないパフォーマンスへの影響をユーザーに深刻に見せない、あるいは完全に気づかれないようにするいくつかのテクニックを見ていきます。

{{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}

## このモジュール内

- [ウェブパフォーマンスの"なぜ"](/ja/docs/Learn/Performance/why_web_performance)
- [ウェブパフォーマンスとは何か](/ja/docs/Learn/Performance/What_is_web_performance)
- [ユーザーはパフォーマンスをどのように知覚するか](/ja/docs/Learn/Performance/Perceived_performance)
- [パフォーマンスの測定](/ja/docs/Learn/Performance/Measuring_performance)
- [Multimedia: images](/ja/docs/Learn/Performance/Multimedia)
- [Multimedia: video](/ja/docs/Learn/Performance/video)
- [JavaScript performance best practices](/ja/docs/Learn/Performance/JavaScript).
- [HTML performance features](/ja/docs/Learn/Performance/HTML)
- [CSS performance features](/ja/docs/Learn/Performance/CSS)
- [Fonts and performance](/ja/docs/Learn/Performance/Fonts)
- [Mobile performance](/ja/docs/Learn/Performance/Mobile)
- [パフォーマスに光をあてる](/ja/docs/Learn/Performance/business_case_for_performance)
