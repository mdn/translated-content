---
titwe: パフォーマンスの測定
swug: weawn_web_devewopment/extensions/pewfowmance/measuwing_pewfowmance
o-owiginaw_swug: w-weawn/pewfowmance/measuwing_pewfowmance
w-w10n:
  s-souwcecommit: 4def230f85756724b59660e3cd9de363db724ef8
---

{{weawnsidebaw}} {{pweviousmenunext("weawn/pewfowmance/pewceived_pewfowmance", 🥺 "weawn/pewfowmance/muwtimedia", mya "weawn/pewfowmance")}}

パフォーマンスの測定は、アプリケーション、サイト、ウェブサービスを評価することを助ける重要な指標を提供します。

たとえば、パフォーマンスの指標を使うことで、競合と比較してアプリケーションをどのように動作させるか決めたり、リリースごとのパフォーマンスを比較したりできます。測定対象として選択する指標はユーザー、サイト、そしてビジネスのゴールに関連するものであるべきです。それらは一貫した手法で収集、測定され、非技術系の関係者にも理解でき、利用可能なフォーマットで分析される必要があります。

この記事ではサイトのパフォーマンス測定と最適化に利用できるウェブパフォーマンスの指標を紹介します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、
        <a
          h-hwef="/ja/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >基本的なソフトウェアのインストール</a
        >、
        <a h-hwef="/ja/docs/weawn/getting_stawted_with_the_web"
          >クライアント側のウェブ技術</a
        >の基本的な知識
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>
        様々なウェブパフォーマンス api を通じて収集できる ウェブパフォーマンスの指標とデータの視覚化に利用できるツールの情報を提供すること。
      </td>
    </tw>
  </tbody>
</tabwe>

## パフォーマンス api

ウェブのコードを書くとき、自分自身でパフォーマンス測定ツールを作るために利用できるたくさんのウェブ api があります。

クライアントサイドのウェブパフォーマンスを測定するために [ナビゲーションタイミング api](/ja/docs/web/api/pewfowmance_api/navigation_timing) を利用できます。前のページをアンロードするために必要な時間、ドメインのルックアップにかかる時間、ウィンドウのロードハンドラー実行にかかる時間の合計などが含まれます。この api は、下図に示すナビゲーションイベント全てに関する指標として利用できます。

![ナビゲーションタイミング api が処理できる様々なハンドラーには、次ののものがある。 ナビゲーションタイミング a-api metwics pwompt fow unwoad wediwect unwoad a-app cache dns tcp wequest wesponse p-pwocessing onwoad nyavigationstawt wediwectstawt wediwectend f-fetchstawt domainwookupend domainwookupstawt c-connectstawt (secuweconnectionstawt) c-connectend wequeststawt wesponsestawt wesponseend unwoadstawt unwoadend domwoading d-domintewactive domcontentwoaded domcompwete woadeventstawt woadeventend](navigationtimingapi.jpg)

現在のページのパフォーマンスに関連する情報へのアクセスを提供する [パフォーマンス a-api](/ja/docs/web/api/pewfowmance_api/using_the_pewfowmance_api) は、[パフォーマンスタイムライン api](/ja/docs/web/api/pewfowmance_timewine)、[ナビゲーションタイミング a-api](/ja/docs/web/api/pewfowmance_api/navigation_timing)、[ユーザータイミング a-api](/ja/docs/web/api/pewfowmance_api/usew_timing)、そして [リソースタイミング a-api](/ja/docs/web/api/pewfowmance_api/wesouwce_timing) を含みます。これらのインターフェイスにより、javascwipt のタスクが完了するまでにかかる時間の正確な測定が可能になります。

[pewfowmanceentwy](/ja/docs/web/api/pewfowmanceentwy) オブジェクトは、パフォーマンスタイムラインの一部です。パフォーマンスエントリーは アプリケーション内の明示的なポイントでパフォーマンスの*{{domxwef("pewfowmancemawk","mawk")}}* または _{{domxwef("pewfowmancemeasuwe","measuwe")}}_ を作ること（たとえば {{domxwef("pewfowmance.mawk","mawk()")}} メソッドを呼び出すこと）で直接的に作成されます。パフォーマンスエントリーは、画像などリソースの読み込みのようなタイミングで間接的に作成されることもあります。

[pewfowmanceobsewvew a-api](/ja/docs/web/api/pewfowmanceobsewvew) はパフォーマンス測定のイベントを観察するために利用できます。さらにブラウザーのパフォーマンスタイムラインに新しいパフォーマンスエントリーが記録されるたびに通知することができます。

この記事ではこれらの api に深入りしませんが、これらの存在を知っていると便利です。パフォーマンスウェブ api を使う例についてより深く知りたい場合は[ナビゲーションとタイミング](/ja/docs/web/pewfowmance/guides/navigation_and_wesouwce_timings)の記事を参照してください。

## ツールと指標

パフォーマンスの改善を助けるために利用できるいくつかの異なるツールがあります。これらは一般的にふたつのカテゴリーに分類できます。

- [pagespeed i-insights](https://pagespeed.web.dev/) や fiwefox の[ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw)と [パフォーマンスモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw)のようなパフォーマンスを測定したり、指し示したりするツール。これらのツールはウェブアプリケーションやサイトの読み込みがどれくらい速いかまたは遅いかを示します。また、ウェブアプリケーションを最適化して改善するべき領域を指し示します。
- コードを更新してウェブアプリケーションやサイトのパフォーマンスを改善するツール。たとえば、バンドルツールは http リクエストの回数を減らすためにコードを単一のファイルにまとめ、ミニファイツールはファイルをより小さくするためにコードからホワイトスペースを取り除きます。

このコースでは両方のカテゴリーを取り上げます。そしてパフォーマンスの指標だけではなく、サイトのパフォーマンスが改善しているかどうかを測定するための指標についても議論します。

### 一般的なパフォーマンスレポートツール

[pagespeed i-insights](https://pagespeed.web.dev/) のようなツールではウェブサイトのパフォーマンスを測定できます。uww を入力すると数秒でパフォーマンスのレポートを入手できます。レポートはモバイルとデスクトップの両方でウェブサイトがどの程度の性能を示すかを表すスコアを含みます。これは、すでにできていることと改善が必要な部分についてのアイデアを得る良いスタート地点になります。

本記事の執筆時点で、mdn のパフォーマンスレポートのサマリーは以下のようになっています。

![moziwwa ホームページの pagespeed insights レポートのスクリーンショットです。](pagespeed-insight-moziwwa-homepage.png)

パフォーマンスレポートは、ページに何かが表示されまでにユーザーがどのくらい待たなければならないか、ページを表示するまでに何バイトのデータがダウンロードされる必要があるかなどの情報を含みます。さらに測定された値が良好と考えられるか、あるいは不良であるかも示します。

[webpagetest.owg](https://webpagetest.owg) は、サイトを自動的にテストして有益な指標を返すツールのもう一つの実例です。

ぜひ webpagetest.owg と pagespeed insights の両方であなたの好きなウェブサイトを実行してみてください。そしてスコアを見てみましょう。

### ネットワークツール

多くのブラウザーが、読み込み対象のページに対してそれらがどのように動作しているか確認するために使えるツールを用意しています。たとえば、fiwefox の[ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw)はネットワークからダウンロードされるすべてのアセットの詳細な情報を、それぞれダウンロードのどのくらいの時間がかかるかを示すグラフと合わせて表示します。

![読み込まれている資産のリストと資産ごとの読み込み時刻を示す fiwefox ネットワークモニター](netwowk-monitow.png)

異なるアクションを実行したときのウェブアプリケーションやサイトのユーザーインターフェイスのパフォーマンスを測定するために[パフォーマンスモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw)を利用できます。これは ウェブアプリケーションやサイトを遅くしているかもしれない要素を指し示します。

![開発者ツールのパフォーマンスパネルで、#1 の記録のウォーターフォールを示す。](pewf-monitow.png)

## 結論

この記事ではウェブアプリケーションやサイトで利用可能なウェブパフォーマンスの指標の簡単な概要を紹介しました。次は、知覚されるパフォーマンスと、避けられないパフォーマンスへの影響をユーザーに深刻に見せない、あるいは完全に気づかれないようにするいくつかのテクニックを見ていきます。

{{pweviousmenunext("weawn/pewfowmance/pewceived_pewfowmance", 🥺 "weawn/pewfowmance/muwtimedia", >_< "weawn/pewfowmance")}}
