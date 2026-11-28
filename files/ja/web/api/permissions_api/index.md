---
title: 権限 API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 4b33c650e27ddb5f82b6b0fc6f83c9a810eaca81
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

**権限 API** は、ウェブページやワーカーなどの現在のコンテキストに関連付けられた API 権限の状態を、一貫した方法でプログラムから照会できます。
例えば、特定の機能や API にアクセスする権限が付与されているか、拒否されているか、またはユーザーによる個別の許可が必要かを確認できます。

## 概念と使い方

従来は、API ごとに権限の扱い方が一貫していませんでした。例えば、[通知 API](/ja/docs/Web/API/Notifications_API) は権限を要求したり状態を確認したりする独自のメソッドを提供していましたが、[位置情報 API](/ja/docs/Web/API/Geolocation) は提供していませんでした。
権限 API は、開発者が権限を扱う際に一貫したユーザーエクスペリエンスを実装できるようにするツールを提供します。

この API が返す権限は、コンテキストに関するすべてのセキュリティ制限を事実上集約しています。これには、保護されたコンテキストで API を使用する要件、文書に適用される[権限ポリシー](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy)の制限、ユーザー操作の要件、ユーザーへのプロンプトなどが含まれます。
例えば、API が権限ポリシーによって制限されている場合、返される権限は `denied` となり、ユーザーにアクセス許可を求めるプロンプトは表示されません。

`permissions` プロパティは、標準の閲覧コンテキストでは {{domxref("Navigator")}} オブジェクトに、ワーカーコンテキストでは {{domxref("WorkerNavigator")}} オブジェクトに公開されています。このプロパティは権限 API の機能にアクセスするための {{domxref("Permissions")}} オブジェクトを返すため、ワーカー内でも権限を確認できます。

このオブジェクトを取得した後は、{{domxref("Permissions.query()")}} メソッドを使用して、特定の API の {{domxref("PermissionStatus")}} で解決されるプロミスを返すなど、権限に関するタスクを実行できます。

### 権限の要求

権限の状態が `prompt` の場合、ユーザーは機能へのアクセスを許可するためにプロンプトを確認する必要があります。

このプロンプトを起動する仕組みは特定の API によって異なり、権限 API では定義されていません。
一般には、機能にアクセスしたり開いたりするメソッドを呼び出すコードや、その機能からの通知に登録し、後でその機能にアクセスするコードがきっかけになります。

すべての機能でプロンプトが必要なわけではありません。
権限は `Permission Policy` によって付与される場合もあれば、{{glossary("transient activation", "一時的な有効化")}}によって暗黙的に付与される場合や、その他の仕組みで付与される場合もあります。

### 権限の取り消し

権限の取り消しは、この API では管理されません。
具体的には、{{domxref("Permissions.revoke()")}} メソッドが提案されましたが、これを実装していたブラウザーでも後に削除されました。

ユーザーはブラウザーの設定から、特定のサイトに対する権限を手動で削除できます。

- **Firefox**: _メニューボタン > 設定 > プライバシーとセキュリティ > 許可設定_（対象の権限の **設定** ボタンを選択）。
- **Chrome**: _メニューボタン > 設定 > 詳細設定を表示_ を選択します。_プライバシー_ セクションで _コンテンツの設定_ をクリックします。表示されたダイアログで _位置情報_ セクションを探し、_サイトが要求する場合は確認する_ を選択します。最後に、_例外を管理_ をクリックして、対象サイトに付与した権限を削除します。

### 権限 API で照会できる API

すべての API の権限状態を権限 API で照会できるわけではありません。
権限 API に対応している API の例を挙げます（網羅的ではありません）。

- [バックグラウンド同期 API](/ja/docs/Web/API/Background_Synchronization_API): `background-sync`（常に付与されるべき）
- [クリップボード API](/ja/docs/Web/API/Clipboard_API#セキュリティ上の注意事項): `clipboard-read`, `clipboard-write`
- [圧力計測 API](/ja/docs/Web/API/Compute_Pressure_API): `compute-pressure`
- [位置情報 API](/ja/docs/Web/API/Geolocation_API#セキュリティの考慮事項): `geolocation`
- [ローカルフォントアクセス API](/ja/docs/Web/API/Local_Font_Access_API): `local-fonts`
- [ローカルネットワークアクセス](/ja/docs/Web/Security/Defenses/Local_network_access): `local-network`, `loopback-network`。より細分化された同等の権限の別名として、以前の `local-network-access` 権限にも引き続き対応しています。
- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API): `microphone`, `camera`
- [通知 API](/ja/docs/Web/API/Notifications_API): `notifications`
- [ウェブベースの決済ハンドラー API](/ja/docs/Web/API/Web-Based_Payment_Handler_API): `payment-handler`
- [プッシュ API](/ja/docs/Web/API/Push_API): `push`
- [画面キャプチャ API](/ja/docs/Web/API/Screen_Capture_API): `captured-surface-control`, `display-capture`
- [画面起動ロック API](/ja/docs/Web/API/Screen_Wake_Lock_API): `screen-wake-lock`
- [センサー API](/ja/docs/Web/API/Sensor_APIs): `accelerometer`, `gyroscope`, `magnetometer`, `ambient-light-sensor`
- [ストレージアクセス API](/ja/docs/Web/API/Storage_Access_API): `storage-access`, `top-level-storage-access`
- [ストレージ API](/ja/docs/Web/API/Storage_API): `persistent-storage`
- [Web Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API): `bluetooth`
- [ウェブ MIDI API](/ja/docs/Web/API/Web_MIDI_API): `midi`
- [ウェブ定期バックグラウンド同期 API](/ja/docs/Web/API/Web_Periodic_Background_Synchronization_API): `periodic-background-sync`
- [ウィンドウ制御 API](/ja/docs/Web/API/Window_Management_API): `window-management`

## インターフェイス

- {{domxref("Permissions")}}
  - : 権限を照会したり取り消したりするメソッドなど、権限 API の中核的な機能を提供します。
- {{domxref("PermissionStatus")}}
  - : 権限の現在の状態と、権限状態の変化に応答するためのイベントハンドラーにアクセスできます。

### 他のインターフェイスへの拡張

- {{domxref("Navigator.permissions")}} と {{domxref("WorkerNavigator.permissions")}} {{ReadOnlyInline}}
  - : それぞれメインコンテキストとワーカーコンテキストから {{domxref("Permissions")}} オブジェクトへのアクセスを提供します。

## 例

Location Finder という例を用意しました。
[例をライブで実行する](https://chrisdavidmills.github.io/location-finder-permissions-api/)、[GitHub でソースコードを見る](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages)、または[権限 API の使用](/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API)の記事で仕組みを読むことができます。

[`Permissions.query()` の例](/ja/docs/Web/API/Permissions/query)では、現在のブラウザーが対応するほとんどの権限を検査し、その結果を記録するコードも示されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [権限 API の使用](/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [権限 API を使用して、ユーザーがカメラへのアクセスを許可または拒否する頻度を検出する](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)（英語）
- {{DOMxref("Notification.permission_static", "Notification.permission")}}
- [プライバシー、権限、そして情報セキュリティ](/ja/docs/Web/Privacy)
