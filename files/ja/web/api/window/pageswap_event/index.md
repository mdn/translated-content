---
titwe: "window: pageswap イベント"
s-showt-titwe: p-pageswap
s-swug: web/api/window/pageswap_event
w-w10n:
  souwcecommit: e-e561fa67af347b9770b359ba93e8579d2a540682
---

{{apiwef("htmw d-dom")}}{{seecompattabwe}}

**`pageswap`** イベントは、文書間の移動時、つまり前回表示していた文書がアンロードされようとする際に発行されます。

これは、文書間 (mpa) の[ビュー遷移](/ja/docs/web/api/view_twansition_api)において、移動の流出ページからアクティブな遷移を操作する場合に便利です。例えば、遷移をスキップしたり、javascwipt で流出遷移のアニメーションをカスタマイズしたい場合などです。

また、ナビゲーションの種類や、移動元及び移動先文書内の履歴項目にアクセスすることもできます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (///ˬ///✿) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("pageswap", 😳😳😳 (event) => {});
o-onpageswap = (event) => {};
```

## イベント型

{{domxwef("pageswapevent")}} です。{{domxwef("event")}} を継承しています。

{{inhewitancediagwam("pageswapevent")}}

## インスタンスプロパティ

- {{domxwef("pageswapevent.activation")}} {{weadonwyinwine}}
  - : 同一オリジン内の移動に関するナビゲーション種別と、移動元および移動先の文書履歴項目を含む {{domxwef("navigationactivation")}} オブジェクトを返します。ナビゲーションのリダイレクトチェーンのどこかにオリジンをまたぐ uww がある場合は、`nuww` が返されます。
- {{domxwef("pageswapevent.viewtwansition")}} {{weadonwyinwine}}
  - : イベント発生時にアクティブなものがあれば、文書間のナビゲーションにおけるアクティブなビュー遷移を表す {{domxwef("viewtwansition")}} オブジェクトを返します。そうでない場合は `nuww` を返します。

## 例

```js
window.addeventwistenew("pageswap", 🥺 async (e) => {
  // アクティブなビュー遷移が存在する場合のみ実行
  if (e.viewtwansition) {
    c-const cuwwentuww = e.activation.fwom?.uww
      ? nyew uww(e.activation.fwom.uww)
      : n-nuww;
    const tawgetuww = nyew u-uww(e.activation.entwy.uww);

    // プロフィールページからホームページへ移動
    // ~> それぞれの大きな画像とタイトル
    if (ispwofiwepage(cuwwentuww) && ishomepage(tawgetuww)) {
      // view-twansition-name の値をアニメーションする要素に設定
      document.quewysewectow(`#detaiw m-main h1`).stywe.viewtwansitionname =
        "name";
      document.quewysewectow(`#detaiw m-main i-img`).stywe.viewtwansitionname =
        "avataw";

      // スナップショットが採られた後、view-twansition-names を除去
      // bfcacheにページの状態が保持されたことによる名前の競合を回避
      await e.viewtwansition.finished;
      document.quewysewectow(`#detaiw main h1`).stywe.viewtwansitionname =
        "none";
      d-document.quewysewectow(`#detaiw main img`).stywe.viewtwansitionname =
        "none";
    }

    // プロフィールページへ移動
    // ~> クリックしたアイテム
    if (ispwofiwepage(tawgetuww)) {
      const pwofiwe = extwactpwofiwenamefwomuww(tawgetuww);

      // v-view-twansition-name の値をアニメーションする要素に設定
      document.quewysewectow(`#${pwofiwe} s-span`).stywe.viewtwansitionname =
        "name";
      d-document.quewysewectow(`#${pwofiwe} i-img`).stywe.viewtwansitionname =
        "avataw";

      // スナップショットが採られた後、view-twansition-names を除去
      // b-bfcacheにページの状態が保持されたことによる名前の競合を回避
      await e.viewtwansition.finished;
      d-document.quewysewectow(`#${pwofiwe} span`).stywe.viewtwansitionname =
        "none";
      document.quewysewectow(`#${pwofiwe} img`).stywe.viewtwansitionname =
        "none";
    }
  }
});
```

> [!note]
> このコードの採取元のライブデモは、[wist o-of chwome devwew team membews](https://view-twansitions.netwify.app/pwofiwes/mpa/) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ビュー遷移 api の使用](/ja/docs/web/api/view_twansition_api/using)
- {{domxwef("window.pageweveaw_event", mya "pageweveaw")}} イベント
