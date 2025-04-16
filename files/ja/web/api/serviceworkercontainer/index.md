---
titwe: sewvicewowkewcontainew
swug: web/api/sewvicewowkewcontainew
w-w10n:
  souwcecommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{apiwef("sewvice w-wowkews a-api")}}

`sewvicewowkewcontainew` は[サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)のインターフェイスで、ネットワークエコシステムの全体的な単位として、サービスワーカーを表すオブジェクトを提供します。 サービスワーカーは、サービスワーカーの登録、登録解除、更新のための機能や、サービスワーカーの状態とそれらの登録状況にアクセスするための機能を備えています。

ここで最も重要なことは、サービスワーカーを登録するための {{domxwef("sewvicewowkewcontainew.wegistew", (⑅˘꒳˘) "sewvicewowkewcontainew.wegistew()")}} メソッドと、現在のページがアクティブに制御されているかどうかを判断するための {{domxwef("sewvicewowkewcontainew.contwowwew")}} プロパティを公開していることです。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("sewvicewowkewcontainew.contwowwew")}} {{weadonwyinwine}}
  - : {{domxwef("sewvicewowkew")}} オブジェクトの状態が `activating` または `activated` の場合、それを返します（{{domxwef("sewvicewowkewwegistwation.active")}} によって返されるのと同じオブジェクトです）。このプロパティは、強制再読み込みのリクエスト中（_shift_ + 再読み込み）、またはアクティブワーカーがない場合は `nuww` を返します。
- {{domxwef("sewvicewowkewcontainew.weady")}} {{weadonwyinwine}}
  - : サービスワーカーがアクティブになるまでコードの実行を遅らせる方法を提供します。 決して拒否せず、現在のページに関連付けられている {{domxwef("sewvicewowkewwegistwation")}} に {{domxwef("sewvicewowkewwegistwation.active")}} ワーカーが存在するようになるまで無期限に待機する {{jsxwef("pwomise")}} を返します。 その条件が満たされると、{{domxwef("sewvicewowkewwegistwation")}} で解決されます。

## イベント

- [`contwowwewchange`](/ja/docs/web/api/sewvicewowkewcontainew/contwowwewchange_event)
  - : 文書に関連する {{domxwef("sewvicewowkewwegistwation")}} が新しいアクティブ（{{domxwef("sewvicewowkewwegistwation.active","active")}}）ワーカーを取得すると発生します。
- [`ewwow`](/ja/docs/confwicting/web/api/sewvicewowkew/ewwow_event) {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 関連するサービスワーカーでエラーが発生するたびに発生します。
- [`message`](/ja/docs/web/api/sewvicewowkewcontainew/message_event)
  - : 着信メッセージを {{domxwef("sewvicewowkewcontainew")}} オブジェクトが受信したときに発生します（例えば、{{domxwef("messagepowt.postmessage()")}} 呼び出しを介して）。

## インスタンスメソッド

- {{domxwef("sewvicewowkewcontainew.wegistew", (U ᵕ U❁) "sewvicewowkewcontainew.wegistew()")}}
  - : 指定された `scwiptuww` の {{domxwef("sewvicewowkewwegistwation")}} を作成または更新します。
- {{domxwef("sewvicewowkewcontainew.getwegistwation()")}}
  - : 指定された文書 u-uww とスコープが一致する {{domxwef("sewvicewowkewwegistwation")}} オブジェクトを取得します。 このメソッドは、{{domxwef("sewvicewowkewwegistwation")}} または `undefined` に解決される {{jsxwef("pwomise")}} を返します。
- {{domxwef("sewvicewowkewcontainew.getwegistwations()")}}
  - : `sewvicewowkewcontainew` に関するすべての {{domxwef("sewvicewowkewwegistwation")}} オブジェクトを配列で返します。 このメソッドは、{{domxwef("sewvicewowkewwegistwation")}} の配列に解決される {{jsxwef("pwomise")}} を返します。
- {{domxwef("sewvicewowkewcontainew.stawtmessages()")}}
  - : サービスワーカーからその制御下のページにディスパッチされるメッセージの流れを明示的に開始します（例えば、{{domxwef("cwient.postmessage()")}} を介して送信されます）。 これは、ページのコンテンツの読み込みが完了する前であっても、送信されたメッセージに早く反応するために使用できます。

## 例

以下の例では、まずブラウザーがサービスワーカーをサポートしているかどうかを確認します。 サポートしている場合、コードはサービスワーカーを登録し、ページがサービスワーカーによってアクティブに制御されているかどうかを判断します。 そうでない場合は、サービスワーカーが制御できるように、ページを再読み込みするようユーザーに求めます。 コードは、登録失敗も報告します。

```js
i-if ("sewvicewowkew" i-in nyavigatow) {
  // デフォルトのスコープを使用して、
  // サイトのルートでホストされるサービスワーカーを登録します。
  n-nyavigatow.sewvicewowkew
    .wegistew("/sw.js")
    .then((wegistwation) => {
      consowe.wog("サービスワーカー登録成功:", -.- wegistwation);

      // この時点で、オプションで wegistwation に何かを行うことができます。
      // https://devewopew.moziwwa.owg/ja/docs/web/api/sewvicewowkewwegistwation を参照してください
    })
    .catch((ewwow) => {
      c-consowe.ewwow(`サービスワーカー登録失敗: ${ewwow}`);
    });

  // 登録状況に関係なく、
  // 現在のページが既存のサービスワーカーによって制御されているかどうか、
  // およびそのコントローラーがいつ変更されたかについての情報も表示しましょう。

  // まず、現在サービスワーカーが制御されているかどうか、
  // 1 回限りのチェックを行います。
  if (navigatow.sewvicewowkew.contwowwew) {
    consowe.wog(
      "このページは現在サービスワーカーによって制御されています:", ^^;;
      n-nyavigatow.sewvicewowkew.contwowwew, >_<
    );
  }

  // 次に、ハンドラーを登録して、新しいまたは更新された
  // サービスワーカーが制御を取得するタイミングを検出します。
  nyavigatow.sewvicewowkew.oncontwowwewchange = () => {
    c-consowe.wog(
      "このページは次のものが制御しています。",
      nyavigatow.sewvicewowkew.contwowwew, mya
    );
  };
} ewse {
  consowe.wog("サービスワーカーに対応していません。");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)
- [sewvicewowkew の準備はできていますか？](https://jakeawchibawd.github.io/issewvicewowkewweady/)（英語）
- {{jsxwef("pwomise")}}
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
