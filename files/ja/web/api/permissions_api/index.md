---
title: Permissions API
slug: Web/API/Permissions_API
---

{{DefaultAPISidebar("Permissions API")}}

**Permissions API** は、現在のコンテキストに起因する API のパーミッションの状態を照会するための一貫したプログラム方法を提供します。 例えば、Permissions API を使用して、特定の API にアクセスするためのパーミッションが付与（granted）または拒否（denied）されているかどうかを確認できます。

## 概念と使い方

歴史的に異なる API は独自のパーミッションを一貫性のない方法で扱います。 例えば、[Notifications API](/ja/docs/Web/API/Notifications_API) はパーミッションの状態の明示的なチェックとパーミッションの要求を許可しますが、[Geolocation API](/ja/docs/Web/API/Geolocation) はできません（ユーザーが最初のパーミッションの要求を拒否すると問題を引き起こします）。 Permissions API は、パーミッションに関する限り、開発者がより良いユーザーエクスペリエンスを実装できるようにするためのツールを提供します。

`permissions` プロパティが {{domxref("Navigator")}} オブジェクトで利用可能になり、標準の閲覧コンテキストとワーカーコンテキスト（{{domxref("WorkerNavigator")}} — したがって、ワーカー内でパーミッションの確認が可能）の両方で、Permissions API 機能へのアクセスを提供する {{domxref("Permissions")}} オブジェクトを返します。

このオブジェクトを取得した後は、{{domxref("Permissions.query()")}} メソッドを使用して特定の API の {{domxref("PermissionStatus")}} で解決される Promise を返すなど、パーミッション関連のタスクを実行できます。

Permissions API を使用してすべての API のパーミッションの状態を照会できるわけではありません。 Permissions に対応している注目すべき API は次のとおりです。

- [Clipboard API](/ja/docs/Web/API/Clipboard_API)
- [Notifications API](/ja/docs/Web/API/Notifications_API)
- [Push API](/ja/docs/Web/API/Push_API)
- Web MIDI API

今後、より多くの API が Permissions API のサポートを取得する予定です。

## 例

Location Finder という簡単な例を用意しました。 [例をライブで実行する](https://chrisdavidmills.github.io/location-finder-permissions-api/)か、[Github でソースコードを見る](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages)ことができます。

それがどのように機能するかについてもっと読むには [Permissions API の使用](/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API)を見てください。

## インターフェイス

- {{domxref("Navigator.permissions")}} と {{domxref("WorkerNavigator.permissions")}} {{readonlyinline}}
  - : それぞれメインコンテキストとワーカーコンテキストから {{domxref("Permissions")}} オブジェクトへのアクセスを提供します。
- {{domxref("Permissions")}}
  - : パーミッションの照会や取り消しのためのメソッドなど、コアとなる Permission API 機能を提供します。
- {{domxref("PermissionStatus")}}
  - : パーミッションの現在の状態、およびパーミッションの状態の変更に応答するためのイベントハンドラーへのアクセスを提供します。

## 仕様書

| 仕様書                                   | 状態                                 | 備考     |
| ---------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Permissions API')}} | {{Spec2('Permissions API')}} | 初期定義 |

## ブラウザーの互換性

### Permissions インターフェイス

{{Compat("api.Permissions")}}

## 関連情報

- [Permissions API の使用](/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Permissions API を使用して、ユーザーがカメラへのアクセスを許可または拒否する頻度を検出する](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)（英語）
- {{DOMxRef("Notification.permission")}}
- [プライバシー、パーミッション、そして情報セキュリティ](/ja/docs/Web/Privacy)
