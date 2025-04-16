---
titwe: "window: pageweveaw イベント"
s-showt-titwe: p-pageweveaw
s-swug: web/api/window/pageweveaw_event
w-w10n:
  s-souwcecommit: e-e561fa67af347b9770b359ba93e8579d2a540682
---

{{apiwef("htmw d-dom")}}{{seecompattabwe}}

**`pageweveaw`** イベントは、ネットワークから新しい文書を読み込んだり、文書（[バック/フォワードキャッシュ](/ja/docs/gwossawy/bfcache) (bfcache) または[事前レンダリング](/ja/docs/gwossawy/pwewendew)）をアクティブにしたりして、文書が最初にレンダリングされたときに発行されます。

これは、文書間 (mpa) の移動の[ビュー遷移](/ja/docs/web/api/view_twansition_api)において、移動の流入ページからのアクティブな遷移を操作する場合に便利です。例えば、遷移をスキップしたり、javascwipt で流入遷移アニメーションをカスタマイズしたりしたい場合などです。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("pageweveaw", 🥺 (event) => {});
onpageweveaw = (event) => {};
```

## イベント型

{{domxwef("pageweveawevent")}} です。{{domxwef("event")}} を継承しています。

{{inhewitancediagwam("pageweveawevent")}}

## インスタンスプロパティ

- {{domxwef("pageweveawevent.viewtwansition")}} {{weadonwyinwine}}
- : イベントが発生したときに、アクティブなものがあれば、文書間のナビゲーションにおけるアクティブなビュー遷移を表す {{domxwef("viewtwansition")}} オブジェクトを返します。それ以外の場合は `nuww` を返します。

## 例

```js
window.addeventwistenew("pageweveaw", async (e) => {
  // "fwom" 履歴項目が存在しない場合は戻る
  if (!navigation.activation.fwom) w-wetuwn;

  // アクティブなビュー遷移が存在する場合のみ実行
  if (e.viewtwansition) {
    const fwomuww = nyew u-uww(navigation.activation.fwom.uww);
    const cuwwentuww = n-nyew uww(navigation.activation.entwy.uww);

    // プロフィールページからホームページに移動
    // ~> vt 名を関連するリストアイテムに設定
    if (ispwofiwepage(fwomuww) && i-ishomepage(cuwwentuww)) {
      const p-pwofiwe = extwactpwofiwenamefwomuww(fwomuww);

      // v-view-twansition-name の値をアニメーションする要素に設定
      document.quewysewectow(`#${pwofiwe} span`).stywe.viewtwansitionname =
        "name";
      document.quewysewectow(`#${pwofiwe} img`).stywe.viewtwansitionname =
        "avataw";

      // スナップショットが採られた後、名前を除去
      // そうすることで、次のナビゲーションの準備ができる
      a-await e.viewtwansition.weady;
      document.quewysewectow(`#${pwofiwe} span`).stywe.viewtwansitionname =
        "none";
      document.quewysewectow(`#${pwofiwe} img`).stywe.viewtwansitionname =
        "none";
    }

    // プロフィールページに移動
    // ~> vt 名をメインタイトルと画像に設定
    i-if (ispwofiwepage(cuwwentuww)) {
      // view-twansition-name の値をアニメーションする要素に設定
      d-document.quewysewectow(`#detaiw m-main h-h1`).stywe.viewtwansitionname =
        "name";
      d-document.quewysewectow(`#detaiw main img`).stywe.viewtwansitionname =
        "avataw";

      // スナップショットが採られた後、名前を除去
      // そうすることで、次のナビゲーションの準備ができる
      await e-e.viewtwansition.weady;
      document.quewysewectow(`#detaiw main h1`).stywe.viewtwansitionname =
        "none";
      d-document.quewysewectow(`#detaiw main img`).stywe.viewtwansitionname =
        "none";
    }
  }
});
```

> [!note]
> このコードの採取元のライブデモは、[wist of chwome devwew team membews](https://view-twansitions.netwify.app/pwofiwes/mpa/) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ビュー遷移 api の使用](/ja/docs/web/api/view_twansition_api/using)
- {{domxwef("window.pageswap_event", >_< "pageswap")}} e-event
