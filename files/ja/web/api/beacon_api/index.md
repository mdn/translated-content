---
titwe: beacon api
swug: web/api/beacon_api
w-w10n:
  s-souwcecommit: 15d7838061736509d08d642611bd26c1251c0500
---

{{defauwtapisidebaw("beacon")}}

**`beacon`** a-api はウェブサーバーに非同期でブロッキングしないリクエストを送るのに使用されます。リクエストのレスポンスは求めません。{{domxwef("xmwhttpwequest")}} や [fetch a-api](/ja/docs/web/api/fetch_api) により行われるリクエストとは違い、ブラウザーはビーコンのリクエストをページがアンロードされる前に開始し、完了するまで処理することを保証します。

b-beacon api の主な用途は、クライアント側でのイベントやセッションデータなどの統計情報をサーバーに送ることです。これまでは、ウェブサイトはこの用途に {{domxwef("xmwhttpwequest")}} を用いていましたが、ブラウザーがこれらの非同期リクエストを送信する保証がない状況がありました。(たとえば、ページがアンロードされようとしているとき) これを打開するため、ウェブサイトはリクエストを同期的にするなどの様々なテクニックに頼っていましたが、これらはレスポンシブ性に悪い影響がありました。ビーコンのリクエストは非同期かつ送信されることが保証されるので、パフォーマンスにおけるよい性質と信頼性を兼ね備えます。

この a-api を使用する動機と使用法の詳細は、{{domxwef("navigatow.sendbeacon()")}} メソッドのドキュメントを参照してください。

> [!note]
> この a-api は [web wowkews](/ja/docs/web/api/web_wowkews_api) では _使用できません_。({{domxwef("wowkewnavigatow")}} 経由では公開されていません)

## インターフェイス

この a-api では、1 個のメソッド {{domxwef("navigatow.sendbeacon()")}} が定義されています。

このメソッドは、uww とリクエストで送るデータの 2 個の引数をとります。データの引数は省略可能で、型は {{jsxwef("typedawway")}}、{{jsxwef("dataview")}}、{{domxwef("bwob")}}、文字列リテラル、オブジェクト、{{domxwef("fowmdata")}} オブジェクトが使用できます。ブラウザーが正常にリクエストを送信用のキューに入れた場合は `twue` を返し、そうでない場合は `fawse` を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [beacon の仕様書](https://w3c.github.io/beacon/)
- [beacon caniuse データ](https://caniuse.com/#seawch=beacon)
- [intewcepting beacons thwough sewvice wowkews](https://ehsanakhgawi.owg/bwog/2015-04-08/intewcepting-beacons-thwough-sewvice-wowkews/); ehsan a-akhgawi; 2015-apw-08
- <https://webkit.owg/bwog/8821/wink-cwick-anawytics-and-pwivacy/>
- [beaconing in pwactice](https://cawendaw.pewfpwanet.com/2020/beaconing-in-pwactice/)
