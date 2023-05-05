---
title: Navigator
slug: Web/API/Navigator
---

{{APIRef("DOM")}}

**`Navigator`** インターフェイスは、ユーザーエージェントの状態や身元情報を表します。これにより、スクリプトがこれらの問い合わせを行ったり、アクティビティを実行するために自分自身を登録したりすることができます。

`Navigator` オブジェクトは、読み取り専用の {{domxref("window.navigator")}} プロパティを使用して取得できます。

## プロパティ

_継承しているプロパティはありません。_

### 標準プロパティ

- {{domxref("Navigator.connection")}} {{readonlyInline}} {{experimental_inline}}
  - : 端末のネットワーク状態の情報を提供する {{domxref("NetworkInformation")}} オブジェクトを返します。
- {{domxref("Navigator.cookieEnabled")}} {{readonlyinline}}
  - : Cookie への設定を無視する場合は false、それ以外は true を返します。
- {{domxref("Navigator.credentials")}} {{readonlyInline}}
  - : ログインやログアウトの成功といったイベントが発生したときに、資格情報を要求してユーザーエージェントへ通知する手段を提供する {{domxref("CredentialsContainer")}} インターフェイスを返します。
- {{domxref("Navigator.deviceMemory")}} {{readonlyInline}} {{experimental_inline}}
  - : 端末のメモリーをギガバイト単位で返します。この値は 2 の累乗に最も近い値を 1024 で割った概算値です。
- {{domxref("Navigator.doNotTrack")}} {{readonlyInline}} {{experimental_inline}}
  - : ユーザーの do-not-track 設定の値を返します。この値が "yes" であるとき、ウェブサイトやアプリケーションはユーザーを追跡するべきではありません。
- {{domxref("Navigator.geolocation")}} {{readonlyInline}}
  - : 端末の物理的な場所を取得することができる {{domxref("Geolocation")}} オブジェクトを返します。
- {{domxref("Navigator.hid")}} {{readonlyInline}}
  - : {{domxref("HID")}} オブジェクトを返します。これは HID 機器の接続、接続されている HID 機器の列挙、接続されている HID 機器のイベントハンドラーなどのメソッドを提供します。
- {{domxref("Navigator.hardwareConcurrency")}} {{readonlyInline}}
  - : 使用可能な論理プロセッサーコアの数を返します。
- {{domxref('Navigator.keyboard')}} {{readonlyinline}} {{experimental_inline}}
  - : {{domxref('Keyboard')}} オブジェクトを返し、キーボード配置マップを受け取る関数へのアクセスを提供したり、物理キーボードからキーの押下のキャプチャを有効化・無効化したりできるようにします。
- {{domxref("Navigator.language")}} {{readonlyInline}}
  - : ユーザーにとって一番望ましい言語 (たいていはブラウザー UI の言語) の {{domxref("DOMString")}} を返します。不明な場合には `null` を返します。
- {{domxref("Navigator.languages")}} {{readonlyInline}} {{experimental_inline}}
  - : ユーザーが知っている言語を表す {{domxref("DOMString")}} を、望ましい順に並べた配列を返します。
- {{domxref("Navigator.locks")}} {{readonlyinline}} {{experimental_inline}}
  - : {{domxref("LockManager")}} オブジェクトを返します。これは、新しい {{domxref('Lock')}} オブジェクトを要求したり、既存の {{domxref('Lock')}} オブジェクトをクエリしたりするためのものです。
- {{domxref("Navigator.maxTouchPoints")}} {{readonlyInline}}
  - : 現在の端末で対応している同時タッチ点の最大数を返します。
- {{domxref("Navigator.mediaCapabilities")}} {{readonlyinline}} {{experimental_inline}}
  - : 指定された形式のデコードおよびエンコード能力、それに出力能力についての情報が得られる {{domxref("MediaCapabilities")}} オブジェクトを返します。
- {{domxref("Navigator.mediaDevices")}} {{readonlyinline}}
  - : {{domxref("MediaDevices")}} オブジェクトへの参照を返します。これにより、使用可能なメディア端末の情報を取得する ({{domxref("MediaDevices.enumerateDevices()")}})、ユーザーのコンピューターやユーザーエージェントで、メディアのどのような特性を制限することができるかを確認する ({{domxref("MediaDevices.getSupportedConstraints()")}})、{{domxref("MediaDevices.getUserMedia()")}} を使用してメディアへのアクセスを要求するといったことができます。
- {{domxref("Navigator.mediaSession")}} {{readonlyinline}} {{experimental_inline}}
  - : {{domxref("MediaSession")}} オブジェクトを返します。このオブジェクトは、グローバルメディア制御の UI などで、現在再生中のメディアに関する情報をブラウザーがユーザーに提示する際に使用できるメタデータを提供するために使用することができます。
- {{domxref("Navigator.onLine")}} {{readonlyInline}}
  - : 現在のブラウザーがオンラインかどうかを示す {{domxref("Boolean")}} を返します。
- {{domxref("Navigator.permissions")}} {{readonlyinline}} {{experimental_inline}}
  - : {{domxref("Permissions")}} オブジェクトを返します。これは、 [Permissions API](/ja/docs/Web/API/Permissions_API) が対応する API の許可状態の問い合わせや更新に使用できます。
- {{domxref("Navigator.presentation")}} {{readonlyInline}} {{experimental_inline}}
  - : {{domxref("Presentation")}} API への参照を返します。
- {{domxref("Navigator.serial")}} {{readonlyInline}}
  - : {{domxref("Serial")}} オブジェクトを返します。これは、シリアルポートを制御できるようにする {{domxref("Web Serial API")}} のエントリーポイントを表します。
- {{domxref("Navigator.serviceWorker")}} {{readonlyInline}}
  - : {{domxref("ServiceWorkerContainer")}} オブジェクトを返します。これは、[associated document](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) の {{domxref("ServiceWorker")}} オブジェクトの登録、削除、更新、通信の機能を提供します。
- {{domxref("Navigator.storage")}} {{readonlyinline}}
  - : サイトごとまたはアプリごとに持続的な記憶域の許可の管理や使用可能な記憶域の試算に使用する、シングルトンの {{domxref('StorageManager')}} オブジェクトを返します。
- {{domxref("Navigator.userAgent")}} {{readonlyInline}}
  - : 現在のブラウザーのユーザーエージェントを表す文字列を返します。
- {{domxref("Navigator.vendor")}} {{readonlyInline}}
  - : 現在のブラウザーのベンダー名を返します (例 "Netscape6")。
- {{domxref("Navigator.webdriver")}} {{readonlyInline}} {{experimental_inline}}
  - : ユーザーエージェントが自動で制御されているかどうかを示します。
- {{domxref("Navigator.xr")}} {{readonlyInline}} {{experimental_inline}}
  - : {{domxref("XRSystem")}} オブジェクトを返します。これは [WebXR API](/ja/docs/Web/API/WebXR_API) のエントリーポイントを表します。

### 標準外のプロパティ

- {{domxref("Navigator.buildID")}} {{non-standard_inline}}
  - : ブラウザーのビルド識別子を返します。最近のブラウザーでは、このプロパティはプライバシーの目的で、固定のタイムスタンプを返すようになり、例えば Firefox 64 系列では `20181001000000` となります。
- {{domxref("Navigator.contacts")}} {{readonlyInline}} {{non-standard_inline}}
  - : {{domxref('ContactsManager')}} インターフェイスを返します。ユーザーが連絡先リストから項目を選択し、選択した項目の限られた詳細情報をウェブサイトやアプリケーションと共有することができます。
- {{domxref("Navigator.securitypolicy")}} {{non-standard_inline}}
  - : 空文字列を返します。Netscape 4.7x では "US & CA domestic policy" または "Export policy" を返していました。
- {{domxref("Navigator.standalone")}} {{non-standard_inline}}
  - : ブラウザーをスタンドアロンモードで実行しているかを示す boolean を返します。Apple の iOS Safari だけで使用できます。
- {{domxref("Navigator.wakeLock")}} {{readonlyInline}} {{non-standard_inline}}
  - : {{domxref("WakeLock")}} インターフェイスを返します。これは、画面のウェイクロックを要求したり、画面の減光、消灯、スクリーンセーバーの表示を防止したりするために利用できます。

### 非推奨のプロパティ

- {{domxref("Navigator.appCodeName")}} {{readonlyInline}} {{deprecated_inline}}
  - : 現在のブラウザーの内部のコードネームを返します。このプロパティが正確な値を返すことを期待しないで下さい。
- {{domxref("Navigator.appName")}} {{readonlyInline}} {{deprecated_inline}}
  - : このブラウザーの公式な名前の {{domxref("DOMString")}} を返します。このプロパティが正確な値を返すことを期待しないで下さい。
- {{domxref("Navigator.appVersion")}} {{readonlyInline}} {{deprecated_inline}}
  - : ブラウザーのバージョンを {{domxref("DOMString")}} で返します。このプロパティが正確な値を返すことを期待しないで下さい。
- {{domxref("Navigator.activeVRDisplays")}} {{readonlyInline}} {{deprecated_inline}}
  - : 現在表示中である ({{domxref("VRDisplay.ispresenting")}} が `true` である)、すべての {{domxref("VRDisplay")}} オブジェクトを収めた配列を返します。
- {{domxref("Navigator.battery")}} {{readonlyInline}} {{deprecated_inline}}
  - : バッテリー残量などの情報を取得できる {{domxref("BatteryManager")}} オブジェクトを返します。
- {{domxref("Navigator.oscpu")}} {{readonlyInline}} {{deprecated_inline}}
  - : 現在の OS を表す文字列を返します。
- {{domxref("Navigator.platform")}} {{readonlyInline}} {{deprecated_inline}}
  - : 現在のブラウザーのプラットフォームを表す文字列を返します。このプロパティが正確な値を返すことを期待しないで下さい。
- {{domxref("Navigator.plugins")}} {{readonlyInline}}{{deprecated_inline}}
  - : {{domxref("PluginArray")}} を返します。これはブラウザーにインストールされたプラグインを列挙します。
- {{domxref("Navigator.product")}} {{readonlyInline}} {{deprecated_inline}}
  - : どのブラウザーも、常に `'Gecko'` を返します。このプロパティは、互換性だけの目的で維持されています。
- {{domxref("Navigator.productSub")}} {{readonlyInline}} {{deprecated_inline}}
  - : ブラウザーのビルド番号を返します (例, "20060909")。
- {{domxref("Navigator.vendorSub")}} {{readonlyInline}} {{deprecated_inline}}
  - : vendor version number を返します (例 "6.1").

## メソッド

_継承するメソッドはありません。_

- {{domxref("Navigator.canShare()")}}
  - : `Navigator.share()` の呼び出しが成功した場合は `true` を返します。
- {{domxref("Navigator.clearAppBadge()")}}
  - : 現在のアプリのバッジを消去し、 {{jsxref("undefined")}} に解決する {{jsxref("Promise")}} を返します。
- {{domxref("Navigator.getBattery()")}}
  - : {{domxref("BatteryManager")}} オブジェクトで解決するプロミスを返します。このオブジェクトはバッテリーの充電状態についての情報を返します。
- {{domxref("Navigator.javaEnabled()")}} {{readonlyInline}}
  - : false を返します。
- {{domxref("Navigator.registerProtocolHandler()")}}
  - : 自分自身のサイトに URL などのプロトコルに関連づけたハンドラーを可能な限り登録します。
- {{domxref("Navigator.requestMediaKeySystemAccess()")}}
  - : MediaKeySystemAccess オブジェクト用の {{jsxref("Promise")}} を返します。
- {{domxref("Navigator.sendBeacon()")}}
  - : ユーザーエージェントからウェブサーバーへ、{{Glossary("HTTP")}} を使用して少量のデータを非同期に転送するために使用します。
- {{domxref("Navigator.setAppBadge()")}}
  - : このアプリに関連付けられたアイコンにバッジを設定し、 {{jsxref("undefined")}} で解決する {{jsxref("Promise")}} を返します。
- {{domxref("Navigator.share()")}}
  - : 現在のプラットフォームのネイティブ共有メカニズムを実行します。
- {{domxref("Navigator.vibrate()")}}
  - : バイブレーションに対応している場合、端末にバイブレーションを起こします。対応していない場合は、何もしません。

### 非推奨のメソッド

- {{domxref("Navigator.getVRDisplays()")}} {{deprecated_inline}}
  - : コンピューターに接続されて使用可能な VR 機器を表す {{domxref("VRDisplay")}} の配列に解決されるプロミスを返します。
- {{domxref("Navigator.getUserMedia()")}} {{deprecated_inline}}
  - : ユーザーにプロンプトで許可を取った後に、ローカルコンピューターのマイクやカメラからの音声または動画ストリームを返します。
- {{domxref("Navigator.taintEnabled()")}} {{deprecated_inline}}
  - : `false` を返します。 JavaScript の taint/untaint 関数は JavaScript 1.2 で削除されました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
