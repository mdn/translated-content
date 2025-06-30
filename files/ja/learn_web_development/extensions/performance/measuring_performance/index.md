---
title: パフォーマンスの測定
slug: Learn_web_development/Extensions/Performance/Measuring_performance
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance")}}

パフォーマンスの測定は、アプリケーション、サイト、ウェブサービスを評価することを助ける重要な指標を提供します。

たとえば、パフォーマンスの指標を使うことで、競合と比較してアプリケーションをどのように動作させるか決めたり、リリースごとのパフォーマンスを比較したりできます。指標は、ユーザー、サイト、およびビジネス目標に関連しているものにする必要があります。指標は、技術的な知識のない関係者も利用および理解できる形式で、一貫して収集、測定、分析する必要があります。

この記事では、ウェブパフォーマンスの測定値にアクセスするために使用できるツールを紹介します。このツールは、サイトのパフォーマンスを測定および最適化するために使用できます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、
        <a
          href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >基本的なソフトウェアのインストール</a
        >、
        <a href="/ja/docs/Learn_web_development/Getting_started/Your_first_website"
          >クライアント側のウェブ技術</a
        >の基本的な知識
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        <p>
          さまざまなウェブパフォーマンス API およびそのデータを視覚化するために使用できるツールを通じて収集できる、ウェブパフォーマンスの測定基準に関する情報を提供すること。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## パフォーマンスツール

パフォーマンスの測定と改善に役立つさまざまなツールがいくつか利用できます。これらは、一般的に 2 つのカテゴリーに分類できます。

- パフォーマンスを示す、または測定するツール（[PageSpeed Insights](https://pagespeed.web.dev/)、Firefox [ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)、[パフォーマンスモニター](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)など）。これらのツールは、ウェブサイトの読み込み速度の速さまたは遅さを表示します。また、ウェブアプリを最適化するために改善できる領域も示します。
- 独自のパフォーマンスツールを構築するために使用できる[パフォーマンス API](/ja/docs/Web/API/Performance_API)。

## 一般的なパフォーマンス報告ツール

[PageSpeed Insights](https://pagespeed.web.dev/) などのツールを使用すると、パフォーマンスをすばやく測定できます。URL を入力すると、数秒でパフォーマンスレポートが取得できます。レポートには、モバイルおよびデスクトップでのウェブサイトのパフォーマンスを示すスコアが含まれます。これは、何がうまくいっているか、何が改善できるかを理解するための良い出発点となります。

この記事の執筆時点では、MDN のパフォーマンスレポートの概要は次のようになっています。

![Mozilla ホームページの PageSpeed Insights レポートのスクリーンショットです。
](pagespeed-insight-mozilla-homepage.png)

パフォーマンスレポートには、ページに何かが表示されるまでにユーザーが待つ時間、ページを表示するためにダウンロードする必要のあるバイト数など、さまざまな情報が含まれます。また、測定値が良好か不良かについても知ることができます。

[webpagetest.org](https://www.webpagetest.org/) は、サイトを自動的に検査し、貴重な測定値を返すツールのもう 1 つの例です。

これらのツールを使って、お気に入りのウェブサイトを実行し、スコアを確認してみてください。

## ネットワークモニターツール

最近のブラウザーには、読み込まれたページに対して実行し、そのパフォーマンスを判断するために使用できるツールが備わっています。これらのツールのほとんどは、同様の動作をします。例えば、Firefox の[ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)は、ネットワークからダウンロードしたすべてのセットに関する詳細情報を、ダウンロードに要した時間をウォーターフォールグラフで表示させます。

![Firefox ネットワークモニターは、読み込まれた資産の一覧と、資産ごとの読み込み時間を表示します](network-monitor.png)

また、[Chrome のネットワークモニターに関するドキュメント](https://developer.chrome.com/docs/devtools/network/)も確認してください。

## パフォーマンスモニターツール

また、[Firefox Performance Monitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) などのブラウザーのパフォーマンスツールを使用して、さまざまな操作を実行しながら、ウェブアプリケーションやサイトのユーザーインターフェイスのパフォーマンスを測定することもできます。これにより、ウェブアプリケーションやサイトの速度低下の原因となる可能性のある機能を示すことができます。

![記録 1 のウォーターフォールを表示している、開発者ツールパフォーマンスパネル](perf-monitor.png)

[Chrome のパフォーマンスツールのドキュメント](https://developer.chrome.com/docs/devtools/performance/)も参照してください。

## パフォーマンス API

ウェブ用のコードを書く場合、多くの [Web API](/ja/docs/Web/API) を利用して、パフォーマンス測定ツールを自分自身で作成することができます。

[ナビゲーションタイミング API](/ja/docs/Web/API/Performance_API/Navigation_timing) を使用すると、前回のページのアンロードに必要な時間、ドメインの検索にかかる時間、ウィンドウのロードハンドラーの実行に費やされた合計時間など、クライアント側のウェブパフォーマンスを測定することができます。この API は、以下の図に示すすべてのナビゲーションイベントに関連する指標に使用できます。

![ナビゲーションタイミング API が処理できる様々なハンドラーには、次ののものがある。 ナビゲーションタイミング API metrics Prompt for unload redirect unload App cache DNS TCP Request Response Processing onLoad navigationStart redirectStart redirectEnd fetchStart domainLookupEnd domainLookupStart connectStart (secureConnectionStart) connectEnd requestStart responseStart responseEnd unloadStart unloadEnd domLoading domInteractive domContentLoaded domComplete loadEventStart loadEventEnd](navigationtimingapi.jpg)

現在のページのパフォーマンスに関連する情報へのアクセスを提供する[パフォーマンス API](/ja/docs/Web/API/Performance_API) は、[ナビゲーションタイミング API](/ja/docs/Web/API/Performance_API/Navigation_timing)、[ユーザータイミング API](/ja/docs/Web/API/Performance_API/User_timing)、そして[リソースタイミング API](/ja/docs/Web/API/Performance_API/Resource_timing) を含みます。これらのインターフェイスにより、 JavaScript のタスクが完了するまでにかかる時間の正確な測定が可能になります。

[PerformanceEntry](/ja/docs/Web/API/PerformanceEntry) オブジェクトは、パフォーマンスタイムラインの一部です。パフォーマンスエントリーは アプリケーション内の明示的なポイントでパフォーマンスの _{{domxref("PerformanceMark","mark")}}_ または _{{domxref("PerformanceMeasure","measure")}}_ を作ること（たとえば {{domxref("Performance.mark","mark()")}} メソッドを呼び出すこと）で直接的に作成されます。パフォーマンスエントリーは、画像などリソースの読み込みのようなタイミングで間接的に作成されることもあります。

[PerformanceObserver API](/ja/docs/Web/API/PerformanceObserver) はパフォーマンス測定のイベントを観察するために利用できます。さらにブラウザーのパフォーマンスタイムラインに新しい[パフォーマンスエントリー](/ja/docs/Web/API/PerformanceEntry)が記録されるたびに通知することができます。

この記事ではこれらの API に深入りしませんが、これらの存在を知っていると便利です。パフォーマンスウェブ API を使う例についてより深く知りたい場合は[ナビゲーションとタイミング](/ja/docs/Web/Performance/Guides/Navigation_and_resource_timings)の記事を参照してください。

## まとめ

この記事では、ウェブアプリやウェブサイトのパフォーマンスを測定するのに役立つツールをいくつか簡単に紹介します。次の記事では、サイトのパフォーマンスを改善するために、サイト上の画像を最適化する方法をご紹介します。

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance")}}
