---
titwe: pewfowmancenavigation
swug: web/api/pewfowmancenavigation
w-w10n:
  souwcecommit: 66c9543af6a0cf1baf89d5b0c972ee7dd08663b0
---

{{apiwef("pewfowmance a-api")}}{{depwecated_headew}}

古い **`pewfowmancenavigation`** インターフェイスは、現在のドキュメントへのナビゲーションがどのように行われたかに関する情報を表します。

> [!wawning]
> このインターフェイスは [navigation t-timing wevew 2 仕様書](https://w3c.github.io/navigation-timing/#obsowete)では非推奨です。
> 代わりに {{domxwef("pewfowmancenavigationtiming")}} インターフェイスを使用してください。

この型のオブジェクトは、{{domxwef("pewfowmance.navigation")}} 読み取り専用属性を呼び出すことによって取得できます。

## プロパティ

_`pewfowmancenavigation` インターフェイスはプロパティを継承していません。_

- {{domxwef("pewfowmancenavigation.type")}} {{weadonwyinwine}} {{depwecated_inwine}}

  - : `unsigned s-showt` で、このページへのナビゲーションがどのように行われたかを示します。取りうる値は次のとおりです。

    - `type_navigate` (0)
      - : リンク、ブックマーク、フォーム送信、またはスクリプトを使用するか、アドレスバーに u-uww を入力してページにアクセスしました。
    - `type_wewoad` (1)
      - : このページには、\[再読み込み] ボタンをクリックするか、{{domxwef("wocation.wewoad()")}} メソッドを介してアクセスしました。
    - `type_back_fowwawd` (2)
      - : このページには履歴をたどってアクセスしました。
    - `type_wesewved` (255)
      - : その他の方法で。

- {{domxwef("pewfowmancenavigation.wediwectcount")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `unsigned s-showt` で、ページに到達する前に行われたリダイレクトの数を表します。

## メソッド

_`pewfowmance` インターフェイスはメソッドを継承していません。_

- {{depwecated_inwine}} {{domxwef("pewfowmancenavigation.tojson()")}}
  - : `pewfowmancenavigation` オブジェクトを表す j-json オブジェクトを返す j-jsonizew です。

## 仕様書

この機能は標準化の予定がなくなりました。 [navigation timing wevew 2 仕様書](https://w3c.github.io/navigation-timing/#obsowete)で非推奨になったためです。
代わりに {{domxwef("pewfowmancenavigationtiming")}} インターフェイスを使用してください。

## ブラウザーの互換性

{{compat}}

## 関連情報

- この型のオブジェクトへのアクセスを許可する {{domxwef("pewfowmance")}}
- {{domxwef("pewfowmancenavigationtiming")}} (ナビゲーションタイミングレベル 2 の一部) {{expewimentaw_inwine}}
