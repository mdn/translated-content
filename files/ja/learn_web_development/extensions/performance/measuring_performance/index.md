---
title: パフォーマンスの測定
slug: Learn_web_development/Extensions/Performance/Measuring_performance
original_slug: Learn/Performance/Measuring_performance
l10n:
  sourceCommit: 4def230f85756724b59660e3cd9de363db724ef8
---

{{LearnSidebar}} {{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}

パフォーマンスの測定は、アプリケーション、サイト、ウェブサービスを評価することを助ける重要な指標を提供します。

たとえば、パフォーマンスの指標を使うことで、競合と比較してアプリケーションをどのように動作させるか決めたり、リリースごとのパフォーマンスを比較したりできます。測定対象として選択する指標はユーザー、サイト、そしてビジネスのゴールに関連するものであるべきです。それらは一貫した手法で収集、測定され、非技術系の関係者にも理解でき、利用可能なフォーマットで分析される必要があります。

この記事ではサイトのパフォーマンス測定と最適化に利用できるウェブパフォーマンスの指標を紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >基本的なソフトウェアのインストール</a
        >、
        <a href="/ja/docs/Learn/Getting_started_with_the_web"
          >クライアント側のウェブ技術</a
        >の基本的な知識
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        様々なウェブパフォーマンス API を通じて収集できる ウェブパフォーマンスの指標とデータの視覚化に利用できるツールの情報を提供すること。
      </td>
    </tr>
  </tbody>
</table>

## パフォーマンス API

ウェブのコードを書くとき、自分自身でパフォーマンス測定ツールを作るために利用できるたくさんのウェブ API があります。

クライアントサイドのウェブパフォーマンスを測定するために [ナビゲーションタイミング API](/ja/docs/Web/API/Performance_API/Navigation_timing) を利用できます。前のページをアンロードするために必要な時間、ドメインのルックアップにかかる時間、ウィンドウのロードハンドラー実行にかかる時間の合計などが含まれます。この API は、下図に示すナビゲーションイベント全てに関する指標として利用できます。

![ナビゲーションタイミング API が処理できる様々なハンドラーには、次ののものがある。 ナビゲーションタイミング API metrics Prompt for unload redirect unload App cache DNS TCP Request Response Processing onLoad navigationStart redirectStart redirectEnd fetchStart domainLookupEnd domainLookupStart connectStart (secureConnectionStart) connectEnd requestStart responseStart responseEnd unloadStart unloadEnd domLoading domInteractive domContentLoaded domComplete loadEventStart loadEventEnd](navigationtimingapi.jpg)

現在のページのパフォーマンスに関連する情報へのアクセスを提供する [パフォーマンス API](/ja/docs/Web/API/Performance_API/Using_the_Performance_API) は、[パフォーマンスタイムライン API](/ja/docs/Web/API/Performance_Timeline)、[ナビゲーションタイミング API](/ja/docs/Web/API/Performance_API/Navigation_timing)、[ユーザータイミング API](/ja/docs/Web/API/Performance_API/User_timing)、そして [リソースタイミング API](/ja/docs/Web/API/Performance_API/Resource_timing) を含みます。これらのインターフェイスにより、JavaScript のタスクが完了するまでにかかる時間の正確な測定が可能になります。

[PerformanceEntry](/ja/docs/Web/API/PerformanceEntry) オブジェクトは、パフォーマンスタイムラインの一部です。パフォーマンスエントリーは アプリケーション内の明示的なポイントでパフォーマンスの*{{domxref("PerformanceMark","mark")}}* または _{{domxref("PerformanceMeasure","measure")}}_ を作ること（たとえば {{domxref("Performance.mark","mark()")}} メソッドを呼び出すこと）で直接的に作成されます。パフォーマンスエントリーは、画像などリソースの読み込みのようなタイミングで間接的に作成されることもあります。

[PerformanceObserver API](/ja/docs/Web/API/PerformanceObserver) はパフォーマンス測定のイベントを観察するために利用できます。さらにブラウザーのパフォーマンスタイムラインに新しいパフォーマンスエントリーが記録されるたびに通知することができます。

この記事ではこれらの API に深入りしませんが、これらの存在を知っていると便利です。パフォーマンスウェブ API を使う例についてより深く知りたい場合は[ナビゲーションとタイミング](/ja/docs/Web/Performance/Navigation_and_resource_timings)の記事を参照してください。

## ツールと指標

パフォーマンスの改善を助けるために利用できるいくつかの異なるツールがあります。これらは一般的にふたつのカテゴリーに分類できます。

- [PageSpeed Insights](https://pagespeed.web.dev/) や Firefox の[ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)と [パフォーマンスモニター](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)のようなパフォーマンスを測定したり、指し示したりするツール。これらのツールはウェブアプリケーションやサイトの読み込みがどれくらい速いかまたは遅いかを示します。また、ウェブアプリケーションを最適化して改善するべき領域を指し示します。
- コードを更新してウェブアプリケーションやサイトのパフォーマンスを改善するツール。たとえば、バンドルツールは HTTP リクエストの回数を減らすためにコードを単一のファイルにまとめ、ミニファイツールはファイルをより小さくするためにコードからホワイトスペースを取り除きます。

このコースでは両方のカテゴリーを取り上げます。そしてパフォーマンスの指標だけではなく、サイトのパフォーマンスが改善しているかどうかを測定するための指標についても議論します。

### 一般的なパフォーマンスレポートツール

[PageSpeed Insights](https://pagespeed.web.dev/) のようなツールではウェブサイトのパフォーマンスを測定できます。URL を入力すると数秒でパフォーマンスのレポートを入手できます。レポートはモバイルとデスクトップの両方でウェブサイトがどの程度の性能を示すかを表すスコアを含みます。これは、すでにできていることと改善が必要な部分についてのアイデアを得る良いスタート地点になります。

本記事の執筆時点で、MDN のパフォーマンスレポートのサマリーは以下のようになっています。

![Mozilla ホームページの PageSpeed Insights レポートのスクリーンショットです。](pagespeed-insight-mozilla-homepage.png)

パフォーマンスレポートは、ページに何かが表示されまでにユーザーがどのくらい待たなければならないか、ページを表示するまでに何バイトのデータがダウンロードされる必要があるかなどの情報を含みます。さらに測定された値が良好と考えられるか、あるいは不良であるかも示します。

[webpagetest.org](https://webpagetest.org) は、サイトを自動的にテストして有益な指標を返すツールのもう一つの実例です。

ぜひ webpagetest.org と PageSpeed Insights の両方であなたの好きなウェブサイトを実行してみてください。そしてスコアを見てみましょう。

### ネットワークツール

多くのブラウザーが、読み込み対象のページに対してそれらがどのように動作しているか確認するために使えるツールを用意しています。たとえば、Firefox の[ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)はネットワークからダウンロードされるすべてのアセットの詳細な情報を、それぞれダウンロードのどのくらいの時間がかかるかを示すグラフと合わせて表示します。

![読み込まれている資産のリストと資産ごとの読み込み時刻を示す Firefox ネットワークモニター](network-monitor.png)

異なるアクションを実行したときのウェブアプリケーションやサイトのユーザーインターフェイスのパフォーマンスを測定するために[パフォーマンスモニター](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)を利用できます。これは ウェブアプリケーションやサイトを遅くしているかもしれない要素を指し示します。

![開発者ツールのパフォーマンスパネルで、#1 の記録のウォーターフォールを示す。](perf-monitor.png)

## 結論

この記事ではウェブアプリケーションやサイトで利用可能なウェブパフォーマンスの指標の簡単な概要を紹介しました。次は、知覚されるパフォーマンスと、避けられないパフォーマンスへの影響をユーザーに深刻に見せない、あるいは完全に気づかれないようにするいくつかのテクニックを見ていきます。

{{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}
