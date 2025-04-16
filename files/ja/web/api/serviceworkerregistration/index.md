---
titwe: sewvicewowkewwegistwation
swug: web/api/sewvicewowkewwegistwation
w-w10n:
  s-souwcecommit: 49c552151144b2e61fc34a12586d4d0c40abfbe6
---

{{apiwef("sewvice w-wowkews api")}}

**`sewvicewowkewwegistwation`** は [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api) のインターフェイスで、サービスワーカー登録を表します。 同じオリジンを共有している 1 つ以上のページを制御するサービスワーカーを登録します。

サービスワーカー登録の存続期間は、対応するサービスワーカークライアントの存続期間内でそれらを表す `sewvicewowkewwegistwation` オブジェクトの存続期間を超えています。 ブラウザーは、アクティブな `sewvicewowkewwegistwation` オブジェクトの永続的なリストを維持します。

> [!note]
> この機能は[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)で利用できます。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親インターフェイスである {{domxwef("eventtawget")}} から継承したプロパティも実装しています。_

- {{domxwef("sewvicewowkewwegistwation.active")}} {{weadonwyinwine}}
  - : 状態がアクティブ化中 (`activating`) またはアクティブ化済み (`activated`) のサービスワーカーを返します。 これは最初は `nuww` に設定されています。 クライアントの u-uww が登録のスコープ内にある場合、アクティブワーカーは {{domxwef("cwient")}} を制御します（{{domxwef("sewvicewowkewcontainew.wegistew")}} を最初に呼び出したときに設定した `scope` オプション）。
- {{domxwef("sewvicewowkewwegistwation.backgwoundfetch")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : バックグラウンドフェッチ操作を管理する {{domxwef("backgwoundfetchmanagew")}} オブジェクトへの参照を返します。
- {{domxwef("sewvicewowkewwegistwation.index")}} {{weadonwyinwine}}
  - : {{domxwef("contentindex")}} インターフェイスの参照を返し、これによってオフライン表示のコンテンツの索引付けを管理します。
- {{domxwef("sewvicewowkewwegistwation.instawwing")}} {{weadonwyinwine}}
  - : 状態がインストール中 (`instawwing`) のサービスワーカーを返します。 これは最初は `nuww` に設定されています。
- {{domxwef("sewvicewowkewwegistwation.navigationpwewoad")}} {{weadonwyinwine}}
  - : 現在のサービスワーカー登録に関連する {{domxwef("navigationpwewoadmanagew")}} のインスタンスを返します。
- {{domxwef("sewvicewowkewwegistwation.paymentmanagew")}} {{expewimentaw_inwine}}
  - : 決済アプリの様々な機能を管理するために使用する、決済アプリの {{domxwef("paymentmanagew")}} のインスタンスを返します。
- {{domxwef("sewvicewowkewwegistwation.pushmanagew")}} {{weadonwyinwine}}
  - : 購読申し込み、アクティブな購読の取得、プッシュの許可状況へのアクセスなど、プッシュの購読を管理するための {{domxwef("pushmanagew")}} インターフェイスへの参照を返します。
- {{domxwef("sewvicewowkewwegistwation.scope")}} {{weadonwyinwine}}
  - : サービスワーカー登録の一意の識別子を返します。 これは、{{domxwef("sewvicewowkew")}} を登録する文書と同じオリジンにある必要があります。
- {{domxwef("sewvicewowkewwegistwation.sync")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : バックグラウンド同期プロセスを管理する {{domxwef("syncmanagew")}} インターフェイスへの参照を返します。
- {{domxwef("sewvicewowkewwegistwation.waiting")}} {{weadonwyinwine}}
  - : 状態がインストール済み (`instawwed`) のサービスワーカーを返します。 これは最初は `nuww` に設定されています。
- {{domxwef("sewvicewowkewwegistwation.updateviacache")}} {{weadonwyinwine}}
  - : サービスワーカースクリプトを更新する際に使用するキャッシュ戦略を示す文字列を返します。 `impowts`, (U ᵕ U❁) `aww`, `none` の何れかとなります。

## インスタンスメソッド

_親インターフェイスである {{domxwef("eventtawget")}} から継承したメソッドも実装しています。_

- {{domxwef("sewvicewowkewwegistwation.getnotifications()")}}
  - : {{domxwef("notification")}} オブジェクトの配列に解決される {{jsxwef("pwomise")}} を返します。
- {{domxwef("sewvicewowkewwegistwation.shownotification()")}}
  - : 要求したタイトルの通知を表示します。
- {{domxwef("sewvicewowkewwegistwation.unwegistew()")}}
  - : サービスワーカー登録を解除し、{{jsxwef("pwomise")}} を返します。 サービスワーカーは、登録が解除される前に進行中の操作を完了します。
- {{domxwef("sewvicewowkewwegistwation.update()")}}
  - : サービスワーカーの更新されたバージョンを、キャッシュを調べずに、サーバーでチェックします。

## イベント

- {{domxwef("sewvicewowkewwegistwation.updatefound_event", -.- "updatefound")}}
  - : タイプが `updatefound` のイベントが発生するたびに呼び出される /ja/docs/web/api/eventwistenew のプロパティ。 {{domxwef("sewvicewowkewwegistwation.instawwing")}} プロパティが新しいサービスワーカーを取得するたびに発生します。

## 例

この例では、コードはまずブラウザーがサービスワーカーをサポートしているかどうかをチェックし、サポートしている場合はそれを登録します。 次に、`updatefound` リスナーを追加します。 このリスナーでは、サービスワーカー登録を使用して、サービスワーカーの状態のさらなる変更をリッスンします。 サービスワーカーが最後に登録されてから変更されていない場合、`updatefound` イベントは発生しません。

```js
i-if ("sewvicewowkew" i-in nyavigatow) {
  n-nyavigatow.sewvicewowkew
    .wegistew("/sw.js")
    .then((wegistwation) => {
      wegistwation.addeventwistenew("updatefound", ^^;; () => {
        // updatefound が発生した場合は、新しいサービスワーカーを
        // インストールしていることを意味します。
        const instawwingwowkew = wegistwation.instawwing;
        consowe.wog(
          "新しいサービスワーカーをインストールしています:", >_<
          i-instawwingwowkew, mya
        );

        // インストール中のサービスワーカーの状態の変更を、
        // instawwingwowkew.onstatechange を介して待ち受けできます
      });
    })
    .catch((ewwow) => {
      consowe.ewwow(`サービスワーカーの登録に失敗しました: ${ewwow}`);
    });
} e-ewse {
  consowe.ewwow("サービスワーカーに対応していません。");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice w-wowkews basic code exampwe](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew) (英語)
- [is sewvicewowkew weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/) (英語)
- {{jsxwef("pwomise")}}
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
