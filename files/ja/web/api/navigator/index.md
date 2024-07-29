---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: 074f2292d37c07f6e364830cd6fabc0b41a9db4f
---

{{APIRef("DOM")}}

**`Navigator`** インターフェイスは、ユーザーエージェントの状態や身元情報を表します。これにより、スクリプトがこれらの問い合わせを行ったり、アクティビティを実行するために自分自身を登録したりすることができます。

`Navigator` オブジェクトは、読み取り専用の {{domxref("window.navigator")}} プロパティを使用して取得できます。

## インスタンスプロパティ

_継承しているプロパティはありません。_

### 標準プロパティ

- {{domxref("Navigator.clipboard")}} {{ReadOnlyInline}}
  - : システムクリップボードへの読み書きアクセスを提供する {{domxref("Clipboard")}} オブジェクトです。
- {{domxref("Navigator.connection")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 端末のネットワーク状態の情報を提供する {{domxref("NetworkInformation")}} オブジェクトを返します。
- {{domxref("Navigator.cookieEnabled")}} {{ReadOnlyInline}}
  - : Cookie への設定を無視する場合は false、それ以外は true を返します。
- {{domxref("Navigator.credentials")}} {{ReadOnlyInline}}
  - : ログインやログアウトの成功といったイベントが発生したときに、資格情報を要求してユーザーエージェントへ通知する手段を提供する {{domxref("CredentialsContainer")}} インターフェイスを返します。
- {{domxref("Navigator.deviceMemory")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 端末のメモリーをギガバイト単位で返します。この値は 2 の累乗に最も近い値を 1024 で割った概算値です。
- {{domxref("Navigator.geolocation")}} {{ReadOnlyInline}}
  - : 端末の物理的な場所を取得することができる {{domxref("Geolocation")}} オブジェクトを返します。
- {{domxref("Navigator.gpu")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在の閲覧コンテキストの {{domxref("GPU")}} オブジェクトを返します。 {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}} のエントリーポイントです。
- {{domxref("Navigator.hid")}} {{ReadOnlyInline}}
  - : {{domxref("HID")}} オブジェクトを返します。これは HID 機器の接続、接続されている HID 機器の列挙、接続されている HID 機器のイベントハンドラーなどのメソッドを提供します。
- {{domxref("Navigator.hardwareConcurrency")}} {{ReadOnlyInline}}
  - : 使用可能な論理プロセッサーコアの数を返します。
- {{domxref("Navigator.ink")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在の文書の {{domxref("Ink")}} オブジェクトを返し、 [インク API](/ja/docs/Web/API/Ink_API) の機能へのアクセスを提供します。
- {{domxref('Navigator.keyboard')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref('Keyboard')}} オブジェクトを返し、キーボード配置マップを受け取る関数へのアクセスを提供したり、物理キーボードからキーの押下のキャプチャを有効化・無効化したりできるようにします。
- {{domxref("Navigator.language")}} {{ReadOnlyInline}}
  - : ユーザーにとって一番望ましい言語（たいていはブラウザー UI の言語）の文字列を返します。不明な場合には `null` を返します。
- {{domxref("Navigator.languages")}} {{ReadOnlyInline}}
  - : ユーザーが知っている言語を表す文字列を、望ましい順に並べた配列を返します。
- {{domxref("Navigator.locks")}} {{ReadOnlyInline}}
  - : {{domxref("LockManager")}} オブジェクトを返します。これは、新しい {{domxref('Lock')}} オブジェクトを要求したり、既存の {{domxref('Lock')}} オブジェクトをクエリしたりするためのものです。
- {{domxref("Navigator.maxTouchPoints")}} {{ReadOnlyInline}}
  - : 現在の端末で対応している同時タッチ点の最大数を返します。
- {{domxref("Navigator.mediaCapabilities")}} {{ReadOnlyInline}}
  - : 指定された形式のデコードおよびエンコード能力、それに出力能力についての情報が得られる {{domxref("MediaCapabilities")}} オブジェクトを返します。
- {{domxref("Navigator.mediaDevices")}} {{ReadOnlyInline}}
  - : {{domxref("MediaDevices")}} オブジェクトへの参照を返します。これにより、使用可能なメディア端末の情報を取得する ({{domxref("MediaDevices.enumerateDevices()")}})、ユーザーのコンピューターやユーザーエージェントで、メディアのどのような特性を制限することができるかを確認する ({{domxref("MediaDevices.getSupportedConstraints()")}})、{{domxref("MediaDevices.getUserMedia()")}} を使用してメディアへのアクセスを要求するといったことができます。
- {{domxref("Navigator.mediaSession")}} {{ReadOnlyInline}}
  - : {{domxref("MediaSession")}} オブジェクトを返します。このオブジェクトは、グローバルメディア制御の UI などで、現在再生中のメディアに関する情報をブラウザーがユーザーに提示する際に使用できるメタデータを提供するために使用することができます。
- {{domxref("Navigator.onLine")}} {{ReadOnlyInline}}
  - : 現在のブラウザーがオンラインかどうかを示す論理値を返します。
- {{domxref("Navigator.pdfViewerEnabled")}} {{ReadOnlyInline}}
  - : ブラウザーが PDF に移動したときにインラインで表示できるのであれば `true` を、そうでなければ `false` を返します。
- {{domxref("Navigator.permissions")}} {{ReadOnlyInline}}
  - : {{domxref("Permissions")}} オブジェクトを返します。これは、[権限 API](/ja/docs/Web/API/Permissions_API) が対応する API の許可状態の問い合わせや更新に使用できます。
- {{domxref("Navigator.presentation")}} {{ReadOnlyInline}}
  - : {{domxref("Presentation")}} API への参照を返します。
- {{domxref("Navigator.serial")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("Serial")}} オブジェクトを返します。これは、シリアルポートを制御できるようにする {{domxref("Web Serial API")}} のエントリーポイントを表します。
- {{domxref("Navigator.serviceWorker")}} {{ReadOnlyInline}}
  - : {{domxref("ServiceWorkerContainer")}} オブジェクトを返します。これは、[関連付けれた文書](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)の {{domxref("ServiceWorker")}} オブジェクトの登録、削除、更新、通信の機能を提供します。
- {{domxref("Navigator.scheduling")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在の文書の {{domxref("Scheduling")}} オブジェクトを返します。
- {{domxref("Navigator.storage")}} {{ReadOnlyInline}}
  - : サイトごとまたはアプリごとに持続的な記憶域の許可の管理や使用可能な記憶域の試算に使用する、シングルトンの {{domxref('StorageManager')}} オブジェクトを返します。
- {{domxref("Navigator.userActivation")}} {{ReadOnlyInline}}
  - : 現在のウィンドウのユーザー起動状態に関する情報を格納した {{domxref("UserActivation")}} オブジェクトを返します。
- {{domxref("Navigator.userAgent")}} {{ReadOnlyInline}}
  - : 現在のブラウザーのユーザーエージェントを表す文字列を返します。
- {{domxref("Navigator.userAgentData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ユーザーのブラウザーとオペレーティングシステムに関する情報にアクセスするための {{domxref("NavigatorUAData")}} オブジェクトを返します。
- {{domxref("Navigator.virtualKeyboard")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 画面上の仮想キーボードを制御するための {{domxref("VirtualKeyboard")}} API への参照を返します。
- {{domxref("Navigator.webdriver")}} {{ReadOnlyInline}}
  - : ユーザーエージェントが自動で制御されているかどうかを示します。
- {{domxref("Navigator.windowControlsOverlay")}} {{ReadOnlyInline}}
  - : デスクトッププログレッシブウェブアプリケーションにおけるタイトルバーのジオメトリーに関する情報と、それが変更されるたびに知るためのイベントを公開する {{domxref("WindowControlsOverlay")}} インターフェイスを返します。
- {{domxref("Navigator.xr")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("XRSystem")}} オブジェクトを返します。これは [WebXR API](/ja/docs/Web/API/WebXR_API) のエントリーポイントを表します。

### 標準外のプロパティ

- {{domxref("Navigator.buildID")}} {{Non-standard_Inline}}
  - : ブラウザーのビルド識別子を返します。最近のブラウザーでは、このプロパティはプライバシーの目的で、固定のタイムスタンプを返すようになり、例えば Firefox 64 系列では `20181001000000` となります。
- {{domxref("Navigator.contacts")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref('ContactsManager')}} インターフェイスを返します。ユーザーが連絡先リストから項目を選択し、選択した項目の限られた詳細情報をウェブサイトやアプリケーションと共有することができます。
- {{domxref("Navigator.globalPrivacyControl")}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : ユーザーの情報が共有または販売されることへの同意を示す論理値を返します。
- {{domxref("Navigator.securitypolicy")}} {{Non-standard_Inline}}
  - : 空文字列を返します。 Netscape 4.7x では "US & CA domestic policy" または "Export policy" を返していました。
- {{domxref("Navigator.standalone")}} {{Non-standard_Inline}}
  - : ブラウザーをスタンドアロンモードで実行しているかを示す論理値を返します。 Apple の iOS Safari だけで使用できます。
- {{domxref("Navigator.wakeLock")}} {{ReadOnlyInline}}
  - : {{domxref("WakeLock")}} インターフェイスを返します。これは、画面のウェイクロックを要求したり、画面の減光、消灯、スクリーンセーバーの表示を防止したりするために利用できます。

### 非推奨のプロパティ

- {{domxref("Navigator.appCodeName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : どのブラウザーでも `'Mozilla'` を返します。
- {{domxref("Navigator.appName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : どのブラウザーでも `'Netscape'` を返します。
- {{domxref("Navigator.appVersion")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : ブラウザーのバージョンを文字列で返します。このプロパティが正確な値を返すことを期待しないで下さい。
- {{domxref("Navigator.activeVRDisplays")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 現在表示中である（{{domxref("VRDisplay.ispresenting")}} が `true` である）、すべての {{domxref("VRDisplay")}} オブジェクトを収めた配列を返します。
- {{domxref("Navigator.doNotTrack")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : ユーザーの do-not-track 設定の値を返します。この値が "yes" であるとき、ウェブサイトやアプリケーションはユーザーを追跡するべきではありません。
- {{domxref("Navigator.mimeTypes")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : ブラウザーが対応している MIME タイプの一覧を {{domxref("MimeTypeArray")}} で返します。
- {{domxref("Navigator.oscpu")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 現在の OS を表す文字列を返します。
- {{domxref("Navigator.platform")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 現在のブラウザーのプラットフォームを表す文字列を返します。このプロパティが正確な値を返すことを期待しないで下さい。
- {{domxref("Navigator.plugins")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : {{domxref("PluginArray")}} を返します。これはブラウザーにインストールされているプラグインを列挙します。
- {{domxref("Navigator.product")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : どのブラウザーも、常に `'Gecko'` を返します。
- {{domxref("Navigator.productSub")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : `'20030107'` または `'"20100101'` の文字列のどちらかを返します。
- {{domxref("Navigator.vendor")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 空文字列、`'Apple Computer Inc.'`、`'Google Inc.'` のいずれかを返します。
- {{domxref("Navigator.vendorSub")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 常に空文字列を返します。

## インスタンスメソッド

_継承するメソッドはありません。_

- {{domxref("Navigator.canShare()")}}
  - : `Navigator.share()` の呼び出しが成功した場合は `true` を返します。
- {{domxref("Navigator.clearAppBadge()")}}
  - : 現在のアプリのバッジを消去し、 {{jsxref("undefined")}} に解決する {{jsxref("Promise")}} を返します。
- {{domxref("Navigator.getAutoplayPolicy()")}} {{Experimental_Inline}}
  - : 指定したメディア要素、音声コンテキスト、またはメディア機能の "type" が自動再生を許可されているかどうかを示す値を返します。
- {{domxref("Navigator.getBattery()")}}
  - : {{domxref("BatteryManager")}} オブジェクトで解決するプロミスを返します。このオブジェクトはバッテリーの充電状態についての情報を返します。
- {{domxref("Navigator.getInstalledRelatedApps()")}} {{Experimental_Inline}}
  - : ユーザーがインストールしている、関連するネイティブまたは[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps)を表すオブジェクトの配列で解決するプロミスを返します。
- {{domxref("Navigator.registerProtocolHandler()")}}
  - : 自分自身のサイトに URL などのプロトコルに関連づけたハンドラーを可能な限り登録します。
- {{domxref("Navigator.unregisterProtocolHandler()")}}
  - : 指定されたプロトコルのハンドラーであるウェブサイトの登録を解除します。
- {{domxref("Navigator.requestMediaKeySystemAccess()")}}
  - : MediaKeySystemAccess オブジェクト用の {{jsxref("Promise")}} を返します。
- {{domxref("Navigator.requestMIDIAccess()")}}
  - : ユーザーのシステムにおいて MIDI 機器にアクセスするリクエストを表す {{jsxref('Promise')}} を返します。
- {{domxref("Navigator.sendBeacon()")}}
  - : ユーザーエージェントからウェブサーバーへ、{{Glossary("HTTP")}} を使用して少量のデータを非同期に転送するために使用します。
- {{domxref("Navigator.setAppBadge()")}}
  - : このアプリに関連付けられたアイコンにバッジを設定し、 {{jsxref("undefined")}} で解決する {{jsxref("Promise")}} を返します。
- {{domxref("Navigator.share()")}}
  - : 現在のプラットフォームのネイティブ共有メカニズムを実行します。
- {{domxref("Navigator.vibrate()")}}
  - : バイブレーションに対応している場合、端末にバイブレーションを起こします。対応していない場合は、何もしません。

### 非推奨のメソッド

- {{domxref("Navigator.getVRDisplays()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : コンピューターに接続されて使用可能な VR 機器を表す {{domxref("VRDisplay")}} の配列に解決されるプロミスを返します。
- {{domxref("Navigator.getUserMedia()")}} {{Deprecated_Inline}}
  - : ユーザーにプロンプトで許可を取った後に、ローカルコンピューターのマイクやカメラからの音声または動画ストリームを返します。
- {{domxref("Navigator.taintEnabled()")}} {{Deprecated_Inline}}
  - : `false` を返します。 JavaScript の taint/untaint 関数は JavaScript 1.2 で削除されました。
- {{domxref("Navigator.javaEnabled()")}} {{Deprecated_Inline}}
  - : 常に false を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
