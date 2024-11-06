---
title: Beacon API
slug: Web/API/Beacon_API
l10n:
  sourceCommit: 15d7838061736509d08d642611bd26c1251c0500
---

{{DefaultAPISidebar("Beacon")}}

**`Beacon`** API はウェブサーバーに非同期でブロッキングしないリクエストを送るのに使用されます。リクエストのレスポンスは求めません。{{domxref("XMLHttpRequest")}} や [Fetch API](/ja/docs/Web/API/Fetch_API) により行われるリクエストとは違い、ブラウザーはビーコンのリクエストをページがアンロードされる前に開始し、完了するまで処理することを保証します。

Beacon API の主な用途は、クライアント側でのイベントやセッションデータなどの統計情報をサーバーに送ることです。これまでは、ウェブサイトはこの用途に {{domxref("XMLHttpRequest")}} を用いていましたが、ブラウザーがこれらの非同期リクエストを送信する保証がない状況がありました。(たとえば、ページがアンロードされようとしているとき) これを打開するため、ウェブサイトはリクエストを同期的にするなどの様々なテクニックに頼っていましたが、これらはレスポンシブ性に悪い影響がありました。ビーコンのリクエストは非同期かつ送信されることが保証されるので、パフォーマンスにおけるよい性質と信頼性を兼ね備えます。

この API を使用する動機と使用法の詳細は、{{domxref("navigator.sendBeacon()")}} メソッドのドキュメントを参照してください。

> [!NOTE]
> この API は [Web Workers](/ja/docs/Web/API/Web_Workers_API) では _使用できません_。({{domxref("WorkerNavigator")}} 経由では公開されていません)

## インターフェイス

この API では、1 個のメソッド {{domxref("navigator.sendBeacon()")}} が定義されています。

このメソッドは、URL とリクエストで送るデータの 2 個の引数をとります。データの引数は省略可能で、型は {{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref("Blob")}}、文字列リテラル、オブジェクト、{{domxref("FormData")}} オブジェクトが使用できます。ブラウザーが正常にリクエストを送信用のキューに入れた場合は `true` を返し、そうでない場合は `false` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Beacon の仕様書](https://w3c.github.io/beacon/)
- [Beacon CanIUse データ](https://caniuse.com/#search=beacon)
- [Intercepting beacons through service workers](https://ehsanakhgari.org/blog/2015-04-08/intercepting-beacons-through-service-workers/); Ehsan Akhgari; 2015-Apr-08
- <https://webkit.org/blog/8821/link-click-analytics-and-privacy/>
- [Beaconing in Practice](https://calendar.perfplanet.com/2020/beaconing-in-practice/)
