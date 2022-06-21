---
title: XMLHttpRequest.mozBackgroundRequest
slug: Web/API/XMLHttpRequest/mozBackgroundRequest
tags:
  - API
  - バックグラウンドサービス
  - Mozilla
  - 標準外
  - プロパティ
  - リファレンス
  - XHR
  - XMLHttpRequest
  - mozBackgroundRequest
translation_of: Web/API/XMLHttpRequest/mozBackgroundRequest
---
{{APIRef('XMLHttpRequest')}}

> **Note:** このメソッドは、ウェブコンテンツからは使用できません。アクセスするには管理者特権が必要です。

**`XMLHttpRequest.mozBackgroundRequest`** は論理値で、オブジェクトがバックグラウンドサービスリクエストを表すかどうかを示します。 `true` の場合、リクエストに関連付けられているロードグループはなく、セキュリティダイアログはユーザーに表示されません。

通常、セキュリティダイアログ（認証や不正な証明書通知など）が表示される場合、この要求は失敗します。

> **Note:** このプロパティは、 `open()` を呼び出す前に設定する必要があります。
