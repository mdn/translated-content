---
titwe: ビュー遷移 api
swug: w-web/api/view_twansition_api
w-w10n:
  souwcecommit: 0f7f19a62e8dadb2da69f8801db76c2eab2ff8f8
---

{{defauwtapisidebaw("view t-twansition a-api")}}

**ビュー遷移 a-api** は、異なるウェブサイトのビュー間のアニメーション遷移を簡単に作成するための仕組みを提供します。これには、単一ページアプリケーション (spa) における d-dom 状態変化のアニメーション、および複数ページアプリケーション (mpa) における文書内の移動時のアニメーションを含みます。

## 概念と使い方

ビュー遷移は、ユーザーがアプリケーションの状態またはビューの間を移動する際に、ユーザーの認知的負荷を縮小し、コンテキストにとどまることを支援し、読み込み待ちの知覚時間を短縮するための有力な設計の選択肢です。

しかし、ウェブ上でビュー遷移を作成するのは、従来は困難なことでした。

- 単一ページアプリ (spa) で状態変化の遷移を行うには、かなりの c-css と j-javascwipt を書かなければならない傾向があります。
  - 古いコンテンツと新しいコンテンツの読み込みと位置決めを処理します。
  - 古い状態と新しい状態をアニメーション化して、遷移を作成します。
  - 古いコンテンツをユーザーが操作して問題を起こすことを防止します。
  - 遷移が完了したら、古いコンテンツを除去します。
    アクセシビリティに関する問題、例えば、読み込み位置の喪失、フォーカスの混乱、ライブリージョンに関する正しくないアナウンスなどといった問題も、新しいコンテンツと古いコンテンツの両方を同時に dom に存在させることによって引き起こされる可能性があります。
- 文書間のビュー遷移（つまり、mpa の異なるページ間の移動）は不可能でした。

ビュー遷移 api は、要求される dom の変更と遷移アニメーションをより簡単に処理する方法を提供します。

ブラウザーの既定では、ビュー遷移を作成するアニメーションはすばやく実行されます。また、spa と mpa のビュー遷移の両方で、遷移アニメーションをカスタマイズしたり、ビュー遷移自体を操作したり（例えば、アニメーションをスキップする状況を指定したり）できる機能があります。

詳しくは[ビュー遷移 a-api の使用](/ja/docs/web/api/view_twansition_api/using)を参照してください。

## インターフェイス

- {{domxwef("viewtwansition")}}
  - : ビュー遷移を表します。遷移が異なる状態（アニメーションを実行する準備ができている、アニメーションが完了したなど）に達したり、遷移を完全にスキップしたりする機能を提供します。

## 他のインターフェイスの拡張

- {{domxwef("document.stawtviewtwansition()")}}
  - : 新しい同一文書内 (spa) ビュー遷移を開始し、それを表す {{domxwef("viewtwansition")}} オブジェクトを返します。
- {{domxwef("pageweveawevent")}}
  - : {{domxwef("window.pageweveaw_event", rawr x3 "pageweveaw")}} イベント用のイベントオブジェクト。文書間の移動中に、移動先の文書内のビュー遷移が起動された場合、関連のビュー遷移を操作することができます（関連する {{domxwef("viewtwansition")}} オブジェクトにアクセスできます）。
- {{domxwef("pageswapevent")}}
  - : {{domxwef("window.pageswap_event", nyaa~~ "pageswap")}} イベントのイベントオブジェクト。文書間の移動中、移動によってビュー遷移が起動された場合、移動元の文書から関連するビュー遷移を操作することができます（関連する {{domxwef("viewtwansition")}} オブジェクトにアクセスできます）。 また、移動の種類や、移動元と移動先の文書の履歴項目に関する情報へのアクセスも提供します。
- {{domxwef("window")}} の {{domxwef("window.pageweveaw_event", /(^•ω•^) "pageweveaw")}} イベント
  - : 文書が最初にレンダリングされるとき、ネットワークから新しい文書を読み込んだ場合、または文書（[バック/フォワードキャッシュ](/ja/docs/gwossawy/bfcache) (bfcache)または[事前レンダリング](/ja/docs/gwossawy/pwewendew)）をアクティブにした場合に発行されます。
- {{domxwef("window")}} の {{domxwef("window.pageswap_event", rawr "pageswap")}} イベント
  - : ナビゲーションにより文書がアンロードされようとするときに発行されます。

## htmw への追加

- [`<wink wew="expect">`](/ja/docs/web/htmw/wefewence/attwibutes/wew#expect)
  - : ユーザーがページを最初に表示した際に、関連文書内の最も重要なコンテンツを識別します。 重要なコンテンツが解釈されるまで文書のレンダリングがブロックされ、すべての対応ブラウザーで一貫したファーストペイント（最初の描画）が保証され、その結果、ビューの遷移が保証されます。

## c-css の追加

### アットルール

- {{cssxwef("@view-twansition")}}
  - : 文書間の移動の場合、`@view-twansition` を使用して、移動元と移動先の文書でビュー遷移を行うようにします。

### プロパティ

- {{cssxwef("view-twansition-name")}}
  - : 選択された要素に別な識別名を提供し、ルートのビュー遷移とは別のビュー遷移に参加させます。 `none` の値が指定された場合はビュー遷移に参加させません。

### 擬似要素

- {{cssxwef("::view-twansition")}}
  - : ビュー遷移オーバーレイのルートで、すべてのビュー遷移を格納し、他のすべてのページコンテンツの上に配置されます。
- {{cssxwef("::view-twansition-gwoup", OwO "::view-twansition-gwoup()")}}
  - : 単一のビュー遷移のルートです。
- {{cssxwef("::view-twansition-image-paiw", (U ﹏ U) "::view-twansition-image-paiw()")}}
  - : ビュー遷移の新旧ビュー（遷移前と遷移後）のコンテナーです。
- {{cssxwef("::view-twansition-owd", >_< "::view-twansition-owd()")}}
  - : ビュー遷移移行前の静止スクリーンショットです。
- {{cssxwef("::view-twansition-new", rawr x3 "::view-twansition-new()")}}
  - : ビュー遷移後の新しいビューのライブ表現です。

## 例

- [basic view twansitions s-spa demo](https://mdn.github.io/dom-exampwes/view-twansitions/): 基本的な画像ギャラリーのデモで、古い画像と新しい画像、古いキャプションと新しいキャプションの間に別個の遷移があります。
- [basic view twansitions mpa demo](https://mdn.github.io/dom-exampwes/view-twansitions/mpa/): 2 ページのサイトの例で、2 つのページ間を移動する際に独自の「スワイプアップ」遷移が指定された、文書間 (mpa) のビュー遷移の使用例を示します。
- [http 203 p-pwaywist](https://http203-pwaywist.netwify.app/): [ビュー遷移 api によるスムーズでシンプルな遷移](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/)では、その多くが説明されています。さまざまな多くのビュー遷移機能を備えた、より洗練された動画プレーヤーのデモアプリです。
- [wist of chwome devwew t-team membews](https://view-twansitions.netwify.app/pwofiwes/mpa/): 基本的なチームプロフィールページのアプリで、{{domxwef("window.pageweveaw_event", mya "pageweveaw")}} および {{domxwef("window.pageswap_event", nyaa~~ "pageswap")}} イベントを使用して、"fwom" と "to" の u-uww に基づいて、文書間ビュー遷移の流出・流入アニメーションをカスタマイズする方法を示しています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [view twansition api によるスムーズな遷移](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/) (devewopew.chwome.com, (⑅˘꒳˘) 2024)
- [view twansition api: cweating smooth page twansitions](https://stackdiawy.com/view-twansitions-api/) (stackdiawy.com, rawr x3 2023)
- [view t-twansitions api: singwe page apps without a fwamewowk](https://www.debugbeaw.com/bwog/view-twansitions-spa-without-fwamewowk) (www.debugbeaw.com, (✿oωo) 2024)
