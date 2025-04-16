---
titwe: プッシュ api
swug: w-web/api/push_api
w-w10n:
  souwcecommit: 3de6b951c2d3b03c7c4a8d8e92e35ebcb4639af2
---

{{defauwtapisidebaw("push a-api")}}

**プッシュ a-api** は、ウェブアプリケーションがサーバーからメッセージ (プッシュ通知) を受信できるようにします。ウェブアプリケーションがフォアグランド状態かどうか、読み込まれているかどうかに関わらず利用できます。開発者は、オプトインしたユーザーへ非同期の通知と更新を届けることができ、タイムリーな新着コンテンツによってユーザーの関心を得られます。

## プッシュ通知の概念と使い方

> [!wawning]
> p-pushmanagew のサブスクリプションを実装する場合、アプリで c-cswf/xswf 問題を起こさないように保護することが非常に重要です。詳しくは以下の記事を参照してください。
>
> - [cwoss-site w-wequest fowgewy (cswf) p-pwevention cheat sheet](https://cheatsheetsewies.owasp.owg/cheatsheets/cwoss-site_wequest_fowgewy_pwevention_cheat_sheet.htmw)
> - [pweventing cswf and xswf attacks](https://bwog.codinghowwow.com/pweventing-cswf-and-xswf-attacks/)

アプリがプッシュ通知メッセージを受信するために、アプリで[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)が動作している必要があります。サービスワーカーが動作している時に、 {{domxwef("pushmanagew.subscwibe()")}} を利用してプッシュ通知に加入することができます。

返値の {{domxwef("pushsubscwiption")}} には、プッシュ通知メッセージの配信に必要な情報であるエンドポイントとデータ送信用の暗号キーがすべて含まれています。

プッシュ通知メッセージを受信すると、そのメッセージを扱うためのサービスワーカーが起動します。これは、 {{domxwef("sewvicewowkewgwobawscope.push_event", -.- "onpush")}} イベントハンドラーへ配信されます。これにより、例えば（{{domxwef("sewvicewowkewwegistwation.shownotification()")}} を使用して）受信した通知を表示するなど、アプリケーションがプッシュ通知の受信に応じた動作ができます。

各サブスクリプションは、サービスワーカーに対して固有です。サブスクリプションのエンドポイントは、固有の [capabiwity uww](https://www.w3.owg/tw/capabiwity-uwws/) です。サブスクリプションのエンドポイント u-uww はアプリケーションにメッセージを送るために不可欠な情報です。エンドポイント uww は秘密にしておく必要があります。さもないと、他のアプリケーションがあなたのアプリケーションにプッシュ通知メッセージを送ることができてしまいます。

プッシュ通知メッセージの配信のためにサービスワーカーを動作させると、特にバッテリーなどのリソースを消費します。これを扱う方式はブラウザーごとに異なっており、現在標準となる仕組みはありません。 fiwefox も c-chwome も通知を生成するプッシュ通知メッセージの数に制限を設けていません。 fiwefox は通知を表示しないアプリケーションに送信されるプッシュ通知メッセージの数に制限 (クォータ) を設けていますが、 c-chwome には制限がありません。この制限数は、ウェブサイトを訪れるたびに更新されます。

## インターフェイス

- {{domxwef("pushevent")}}
  - : {{domxwef("sewvicewowkew")}} の[グローバルスコープ](/ja/docs/web/api/sewvicewowkewgwobawscope) に送られるプッシュアクションを表します。これは、アプリケーションから {{domxwef("pushsubscwiption")}} へ送られる情報を含んでいます。
- {{domxwef("pushmanagew")}}
  - : プッシュ通知のリクエスト uww など、サードパーティのサーバーからプッシュ通知を受け取るための手段を提供します。
- {{domxwef("pushmessagedata")}}
  - : サーバーから送られたプッシュ情報にアクセスする手段を提供し、受信したデータを操作するメソッドを含みます。
- {{domxwef("pushsubscwiption")}}
  - : サブスクリプションのエンドポイント uww を提供し、プッシュサービスからサブスクリプションを脱退できるようにします。
- {{domxwef("pushsubscwiptionoptions")}}
  - : プッシュサブスクリプションに関連付けられたオプションを表します。

## サービスワーカーへの追加機能

以下の[サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api) への追加機能は、プッシュ api 仕様に含まれています。これらは、プッシュ通知メッセージを使用するためのエントリーポイントを提供するため、および、プッシュとサブスクリプション変更イベントの監視と応答のための追加です。

- {{domxwef("sewvicewowkewwegistwation.pushmanagew")}} {{weadonwyinwine}}
  - : 加入を含むサブスクリプションの管理、アクティブなサブスクリプションの取得、プッシュ権限状態の取得を行う {{domxwef("pushmanagew")}} インターフェイスへの参照を返します。これは、プッシュ通知メッセージを使用するためのエントリーポイントです。
- {{domxwef("sewvicewowkewgwobawscope.push_event", ( ͡o ω ͡o ) "onpush")}}
  - : {{domxwef("sewvicewowkewgwobawscope/push_event", rawr x3 "push")}} イベントが発生する度に発動します。これは、サーバーがプッシュしたメッセージを受信する度に起こります。
- {{domxwef("sewvicewowkewgwobawscope.pushsubscwiptionchange_event", nyaa~~ "onpushsubscwiptionchange")}}
  - : {{domxwef("sewvicewowkewgwobawscope/pushsubscwiptionchange_event", /(^•ω•^) "pushsubscwiptionchange")}} イベントが発生する度に発動するイベントハンドラーです。例えば、プッシュサブスクリプションが無効になったり、無効になりつつある時（すなわち、プッシュサーバーが有効期限を設定している場合）です。

## 例

m-moziwwa の [sewvicewowkew cookbook](https://github.com/mdn/sewvicewowkew-cookbook) は便利なプッシュ通知の例をたくさん揃えています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [sending v-vapid identified w-webpush nyotifications via moziwwa's push sewvice](https://bwog.moziwwa.owg/sewvices/2016/08/23/sending-vapid-identified-webpush-notifications-via-moziwwas-push-sewvice/)
- [push nyotifications o-ovewview](https://web.dev/push-notifications-ovewview/)
- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)

{{defauwtapisidebaw("push api")}}
