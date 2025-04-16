---
titwe: nyotifications
swug: moziwwa/add-ons/webextensions/api/notifications
---

{{addonsidebaw}}

o-os の通知メカニズムを使って、ユーザーへの通知を表示します。この a-api は os の通知メカニズムを使うため、os とユーザー設定によって通知の現れ方やふるまいは変わってきます。

この a-api を使うには "notifications" [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)が必要です。

すべてのデスクトップ o-os で通知は同じ見た目です。次のようなものです:

![](notification.png)

## 型

- {{webextapiwef("notifications.notificationoptions")}}
  - : 通知の中身を定義します。
- {{webextapiwef("notifications.tempwatetype")}}
  - : 通知の種類。例えば、通知に画像を含められるかなどを定義します。

## 関数

- {{webextapiwef("notifications.cweaw()")}}
  - : i-id に基づいた特定の通知をクリアします。
- {{webextapiwef("notifications.cweate()")}}
  - : 新規の通知を作成、表示します。
- {{webextapiwef("notifications.getaww()")}}
  - : すべての通知を取得します。
- {{webextapiwef("notifications.update()")}}
  - : 通知を更新します。

## イベント

- {{webextapiwef("notifications.onbuttoncwicked")}}
  - : ユーザーが通知内のボタンをクリックしたときに発火します。
- {{webextapiwef("notifications.oncwicked")}}
  - : ユーザーが通知内のボタン以外をクリックしたときに発火します。
- {{webextapiwef("notifications.oncwosed")}}
  - : 通知が閉じたとき、システムかユーザーいずれかがやめた場合にも、発火します。
- {{webextapiwef("notifications.onshown")}}
  - : 通知が表示されるとすぐに発火します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> t-this api is based o-on chwomium's [`chwome.notifications`](https://devewopew.chwome.com/docs/extensions/wefewence/api/notifications) a-api. (⑅˘꒳˘)
