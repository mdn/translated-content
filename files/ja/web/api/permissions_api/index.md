---
title: 権限 API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

**権限 API** は、現在のコンテキストに起因する API の利用許可の状態を照会するための一貫したプログラム方法を提供します。例えば、権限 API を使用して、特定の API にアクセスするための権限が付与 (granted) または拒否 (denied) されているかどうかを確認できます。

この API による権限は、API が保護されたコンテキストで使用されるための要件、文書に適用される[権限ポリシー](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy)の制限、ユーザーへのプロンプトなど、コンテキストのすべてのセキュリティ制限を効果的に集約します。
例えば、API が権限ポリシーによって制限されている場合、返される権限は `denied` となり、ユーザーにはアクセス許可を求めるプロンプトは表示されません。

## 概念と使い方

従来は、様々な API が独自の権限を一貫性のない方法で扱ってきました。例えば、[通知 API](/ja/docs/Web/API/Notifications_API) は権限の状態の明示的なチェックと権限の要求を許可しますが、[位置情報 API](/ja/docs/Web/API/Geolocation) はできません（ユーザーが最初の権限の要求を拒否すると問題を引き起こします）。権限 API は、権限に関する限り、開発者がより良いユーザーエクスペリエンスを実装できるようにするためのツールを提供します。

`permissions` プロパティが {{domxref("Navigator")}} オブジェクトで利用可能になり、標準の閲覧コンテキストとワーカーコンテキスト（{{domxref("WorkerNavigator")}} — したがって、ワーカー内で権限の確認が可能）の両方で、権限 API 機能へのアクセスを提供する {{domxref("Permissions")}} オブジェクトを返します。

このオブジェクトを取得した後は、{{domxref("Permissions.query()")}} メソッドを使用して特定の API の {{domxref("PermissionStatus")}} で解決されるプロミスを返すなど、権限関連のタスクを実行できます。
なお、状態が `prompt` の場合、ユーザーは機能にアクセスする前にプロンプトを確認する必要があります。また、このプロンプトの起動メカニズムは、特定の API に依存します。これは、権限 API の一部として定義されていません。

### 権限 API が使える API

すべての API の権限の状態が権限 API を使用して照会できるわけではありません。
権限に対応している注目すべき API には次のようなものがあります。

- [バックグラウンド同期 API](/ja/docs/Web/API/Background_Synchronization_API): `background-sync` （常に許可されるべき）
- [圧力計測 API](/ja/docs/Web/API/Compute_Pressure_API): `compute-pressure`
- [位置情報 API](/ja/docs/Web/API/Geolocation_API): `geolocation`
- [ローカルフォントアクセス API](/ja/docs/Web/API/Local_Font_Access_API): `local-fonts`
- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API): `microphone`, `camera`
- [通知 API](/ja/docs/Web/API/Notifications_API): `notifications`
- [決済ハンドラー API](/ja/docs/Web/API/Payment_Handler_API): `payment-handler`
- [プッシュ通知 API](/ja/docs/Web/API/Push_API): `push`
- [画面起動ロック API](/ja/docs/Web/API/Screen_Wake_Lock_API): `screen-wake-lock`
- [センサー API](/ja/docs/Web/API/Sensor_APIs): `accelerometer`, `gyroscope`, `magnetometer`, `ambient-light-sensor`
- [ストレージアクセス API](/ja/docs/Web/API/Storage_Access_API): `storage-access`, `top-level-storage-access`
- [ストレージ API](/ja/docs/Web/API/Storage_API): `persistent-storage`
- [ウェブ MIDI API](/ja/docs/Web/API/Web_MIDI_API): `midi`
- [ウィンドウ制御 API](/ja/docs/Web/API/Window_Management_API): `window-management`

## 例

Location Finder という簡単な例を用意しました。 [例をライブで実行する](https://chrisdavidmills.github.io/location-finder-permissions-api/)か、[Github でソースコードを見る](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages)ことができます。

それがどのように機能するかについてもっと読むには [権限 API の使用](/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API)を見てください。

## インターフェイス

- {{domxref("Permissions")}}
  - : 権限の照会や取り消しのためのメソッドなど、コアとなる Permission API 機能を提供します。
- {{domxref("PermissionStatus")}}
  - : 権限の現在の状態、および権限の状態の変更に応答するためのイベントハンドラーへのアクセスを提供します。

### 他のインターフェイスへの拡張

- {{domxref("Navigator.permissions")}} と {{domxref("WorkerNavigator.permissions")}} {{ReadOnlyInline}}
  - : それぞれメインコンテキストとワーカーコンテキストから {{domxref("Permissions")}} オブジェクトへのアクセスを提供します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [権限 API の使用](/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [権限 API を使用して、ユーザーがカメラへのアクセスを許可または拒否する頻度を検出する](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)（英語）
- {{DOMxref("Notification.permission_static", "Notification.permission")}}
- [プライバシー、権限、そして情報セキュリティ](/ja/docs/Web/Privacy)
