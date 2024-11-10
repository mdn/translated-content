---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("DOM")}}

**`Navigator`** インターフェイスは、ユーザーエージェントの状態や身元情報を表します。これにより、スクリプトがこれらの問い合わせを行ったり、アクティビティを実行するために自分自身を登録したりすることができます。

`Navigator` オブジェクトは、読み取り専用の {{domxref("window.navigator")}} プロパティを使用して取得できます。

## インスタンスプロパティ

_継承しているプロパティはありません。_

### 標準プロパティ

- {{domxref("Navigator.bluetooth")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 現在の文書の {{domxref("Bluetooth")}} オブジェクトを返し、 [Web Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API) の機能へのアクセスを提供します。
- {{domxref("Navigator.clipboard")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : {{domxref("Clipboard")}} オブジェクトを返し、システムクリップボードへの読み書きアクセスを提供します。
- {{domxref("Navigator.connection")}} {{ReadOnlyInline}}
  - : 端末のネットワーク状態の情報を含む {{domxref("NetworkInformation")}} オブジェクトを返します。
- {{domxref("Navigator.contacts")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : {{domxref('ContactsManager')}} インターフェイスを返します。これにより、ユーザーが連絡先リストから項目を選択したり、選択した項目の制限付きの詳細をウェブサイトやアプリケーションと共有したりすることができます。
- {{domxref("Navigator.cookieEnabled")}} {{ReadOnlyInline}}
  - : Cookie への設定を無視する場合は false、それ以外は true を返します。
- {{domxref("Navigator.credentials")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : {{domxref("CredentialsContainer")}} インターフェイスを返し、ログインやログアウトの成功といったイベントが発生したときに、資格情報を要求してユーザーエージェントへ通知する手段を提供します。
- {{domxref("Navigator.deviceMemory")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 端末のメモリーをギガバイト単位で返します。この値は 2 の累乗に最も近い値を 1024 で割った概算値です。
- {{domxref("Navigator.geolocation")}} {{ReadOnlyInline}}
  - : 端末の物理的な場所を取得することができる {{domxref("Geolocation")}} オブジェクトを返します。
- {{domxref("Navigator.gpu")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 現在の閲覧コンテキストの {{domxref("GPU")}} オブジェクトを返します。 {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}} のエントリーポイントです。
- {{domxref("Navigator.hardwareConcurrency")}} {{ReadOnlyInline}}
  - : 使用可能な論理プロセッサーのコア数を返します。
- {{domxref("Navigator.hid")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : {{domxref("HID")}} オブジェクトを返します。これは HID 機器の接続、接続されている HID 機器の列挙、接続されている HID 機器のイベントハンドラーなどのメソッドを提供します。
- {{domxref("Navigator.ink")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在の文書の {{domxref("Ink")}} オブジェクトを返し、 [インク API](/ja/docs/Web/API/Ink_API) の機能へのアクセスを提供します。
- {{domxref('Navigator.keyboard')}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : {{domxref('Keyboard')}} オブジェクトを返し、キーボード配置マップを受け取る関数へのアクセスを提供したり、物理キーボードからキーの押下のキャプチャを有効化・無効化したりできるようにします。
- {{domxref("Navigator.language")}} {{ReadOnlyInline}}
  - : ユーザーにとって一番望ましい言語（たいていはブラウザー UI の言語）の文字列を返します。不明な場合には `null` を返します。
- {{domxref("Navigator.languages")}} {{ReadOnlyInline}}
  - : ユーザーが知っている言語を表す文字列を、望ましい順に並べた配列を返します。
- {{domxref("Navigator.locks")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : {{domxref("LockManager")}} オブジェクトを返します。これは、新しい {{domxref('Lock')}} オブジェクトを要求したり、既存の {{domxref('Lock')}} オブジェクトをクエリーしたりするためのものです。
- {{domxref("Navigator.login")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : ブラウザーの {{domxref("NavigatorLogin")}} オブジェクトへのアクセスを提供します。これは、連合 ID プロバイダー (IdP) が、ユーザーが IdP にログインまたはログインする際に、ユーザーのログインステータスを設定するために使用することができます。詳細は、[連合資格情報管理 (FedCM) API](/ja/docs/Web/API/FedCM_API) を参照してください。
- {{domxref("Navigator.maxTouchPoints")}} {{ReadOnlyInline}}
  - : 現在の端末で対応している同時タッチ点の最大数を返します。
- {{domxref("Navigator.mediaCapabilities")}} {{ReadOnlyInline}}
  - : 指定された形式のデコードおよびエンコード能力、それに出力能力についての情報が得られる {{domxref("MediaCapabilities")}} オブジェクトを返します。
- {{domxref("Navigator.mediaDevices")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : {{domxref("MediaDevices")}} オブジェクトへの参照を返します。これにより、使用可能なメディア端末の情報を取得する ({{domxref("MediaDevices.enumerateDevices()")}})、ユーザーのコンピューターやユーザーエージェントで、メディアのどのような特性を制限することができるかを確認する ({{domxref("MediaDevices.getSupportedConstraints()")}})、{{domxref("MediaDevices.getUserMedia()")}} を使用してメディアへのアクセスを要求するといったことができます。
- {{domxref("Navigator.mediaSession")}} {{ReadOnlyInline}}
  - : {{domxref("MediaSession")}} オブジェクトを返します。このオブジェクトは、グローバルメディア制御の UI などで、現在再生中のメディアに関する情報をブラウザーがユーザーに提示する際に使用できるメタデータを提供するために使用することができます。
- {{domxref("Navigator.onLine")}} {{ReadOnlyInline}}
  - : 現在のブラウザーがオンラインかどうかを示す論理値を返します。
- {{domxref("Navigator.pdfViewerEnabled")}} {{ReadOnlyInline}}
  - : ブラウザーが PDF に移動したときにインラインで表示できるのであれば `true` を、そうでなければ `false` を返します。
- {{domxref("Navigator.permissions")}} {{ReadOnlyInline}}
  - : {{domxref("Permissions")}} オブジェクトを返します。これは、[権限 API](/ja/docs/Web/API/Permissions_API) が対応する API の許可状態の問い合わせや更新に使用できます。
- {{domxref("Navigator.presentation")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : {{domxref("Presentation")}} API への参照を返します。
- {{domxref("Navigator.scheduling")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在の文書の {{domxref("Scheduling")}} オブジェクトを返します。
- {{domxref("Navigator.serial")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : {{domxref("Serial")}} オブジェクトを返します。これは、シリアルポートを制御できるようにする[ウェブシリアル API](/ja/docs/Web/API/Web_Serial_API) のエントリーポイントを表します。
- {{domxref("Navigator.serviceWorker")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : {{domxref("ServiceWorkerContainer")}} オブジェクトを返します。これは、[関連付けれた文書](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)の {{domxref("ServiceWorker")}} オブジェクトの登録、削除、更新、通信の機能を提供します。
- {{domxref("Navigator.storage")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : サイトごとまたはアプリごとに持続的な記憶域の許可の管理や使用可能な記憶域の試算に使用する、シングルトンの {{domxref('StorageManager')}} オブジェクトを返します。
- {{domxref("Navigator.usb")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : 現在の文書内の {{domxref("USB")}} オブジェクトを返します。[WebUSB API](/ja/docs/Web/API/WebUSB_API) の機能へのアクセスを提供します。
- {{domxref("Navigator.userActivation")}} {{ReadOnlyInline}}
  - : 現在のウィンドウのユーザー起動状態に関する情報を格納した {{domxref("UserActivation")}} オブジェクトを返します。
- {{domxref("Navigator.userAgent")}} {{ReadOnlyInline}}
  - : 現在のブラウザーのユーザーエージェントを表す文字列を返します。
- {{domxref("Navigator.userAgentData")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : ユーザーのブラウザーとオペレーティングシステムに関する情報にアクセスするための {{domxref("NavigatorUAData")}} オブジェクトを返します。
- {{domxref("Navigator.virtualKeyboard")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 画面上の仮想キーボードを制御するための {{domxref("VirtualKeyboard")}} API への参照を返します。
- {{domxref("Navigator.wakeLock")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : {{domxref("WakeLock")}} インターフェイスを返します。これは、画面のウェイクロックを要求したり、画面の減光、消灯、スクリーンセーバーの表示を防止したりするために利用できます。
- {{domxref("Navigator.webdriver")}} {{ReadOnlyInline}}
  - : ユーザーエージェントが自動で制御されているかどうかを示します。
- {{domxref("Navigator.windowControlsOverlay")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : {{domxref("WindowControlsOverlay")}} インターフェイスを返します。これは、デスクトップのプログレッシブウェブアプリにおける、タイトルバーの形状に関する情報と、それが変更されるたびに知るためのイベントを公開します。
- {{domxref("Navigator.xr")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : {{domxref("XRSystem")}} オブジェクトを返します。これは [WebXR API](/ja/docs/Web/API/WebXR_Device_API) のエントリーポイントを表します。

### 標準外のプロパティ

- {{domxref("Navigator.buildID")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : ブラウザーのビルド識別子を返します。最近のブラウザーでは、このプロパティはプライバシーの目的で、固定のタイムスタンプを返すようになり、例えば Firefox 64 系列では `20181001000000` となります。
- {{domxref("Navigator.globalPrivacyControl")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : ユーザーの情報が共有または販売されることへの同意を示す論理値を返します。
- {{domxref("Navigator.standalone")}} {{Non-standard_Inline}}
  - : ブラウザーをスタンドアロンモードで実行しているかを示す論理値を返します。 Apple の iOS Safari だけで使用できます。

### 非推奨のプロパティ

- {{domxref("Navigator.activeVRDisplays")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : {{domxref("VRDisplay")}} オブジェクトのうち、現在表示している（{{domxref("VRDisplay.ispresenting")}} が `true` である）ものすべてを格納する配列を返します。
- {{domxref("Navigator.appCodeName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : どのブラウザーでも `'Mozilla'` を返します。
- {{domxref("Navigator.appName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : どのブラウザーでも `'Netscape'` を返します。
- {{domxref("Navigator.appVersion")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : ブラウザーのバージョンを文字列で返します。このプロパティが正確な値を返すことを期待しないで下さい。
- {{domxref("Navigator.doNotTrack")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
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

- {{domxref("Navigator.canShare()")}} {{SecureContext_Inline}}
  - : `Navigator.share()` の呼び出しが成功した場合は `true` を返します。
- {{domxref("Navigator.clearAppBadge()")}} {{SecureContext_Inline}}
  - : 現在のアプリのバッジを消去し、 {{jsxref("undefined")}} に解決するプロミス ({{jsxref("Promise")}}) を返します。
- {{domxref("Navigator.deprecatedReplaceInURN()")}} {{Experimental_Inline}}
  - : 指定された文字列は、指定された不透明な URN または `FencedFrameConfig` 内部の `url` プロパティに対応する URL で置換されます。このメソッドは、一時的な措置として利用できるようになりました（そのため「非推奨」となっています）。フェンスで囲まれたフレームの URL で置換できるようにすることで、広告技術プロバイダーが既存の実装を[プライバシーサンドボックス](https://developers.google.com/privacy-sandbox) API に移行するのに役立つためです。
- {{domxref("Navigator.getAutoplayPolicy()")}} {{Experimental_Inline}}
  - : 指定したメディア要素、音声コンテキスト、またはメディア機能の "type" が自動再生を許可されているかどうかを示す値を返します。
- {{domxref("Navigator.getBattery()")}} {{SecureContext_Inline}}
  - : {{domxref("BatteryManager")}} オブジェクトで解決するプロミスを返します。このオブジェクトはバッテリーの充電状態についての情報を返します。
- {{domxref("Navigator.getGamepads()")}}
  - : {{domxref("Gamepad")}} オブジェクトの配列を返します。それぞれがこの端末に接続されているゲームパッドを表します。
- {{domxref("Navigator.getInstalledRelatedApps()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : ユーザーがインストールしている、関連するネイティブまたは[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps)を表すオブジェクトの配列で解決するプロミスを返します。
- {{domxref("Navigator.registerProtocolHandler()")}} {{SecureContext_Inline}}
  - : 自分自身のサイトに URL などのプロトコルに関連づけたハンドラーを可能な限り登録します。
- {{domxref("Navigator.requestMediaKeySystemAccess()")}} {{SecureContext_Inline}}
  - : MediaKeySystemAccess オブジェクト用の {{jsxref("Promise")}} を返します。
- {{domxref("Navigator.requestMIDIAccess()")}} {{SecureContext_Inline}}
  - : ユーザーのシステムにおいて MIDI 機器にアクセスするリクエストを表す {{jsxref('Promise')}} を返します。
- {{domxref("Navigator.sendBeacon()")}}
  - : ユーザーエージェントからウェブサーバーへ、{{Glossary("HTTP")}} を使用して少量のデータを非同期に転送するために使用します。
- {{domxref("Navigator.setAppBadge()")}} {{SecureContext_Inline}}
  - : このアプリに関連付けられたアイコンにバッジを設定し、 {{jsxref("undefined")}} で解決する {{jsxref("Promise")}} を返します。
- {{domxref("Navigator.share()")}} {{SecureContext_Inline}}
  - : 現在のプラットフォームのネイティブ共有メカニズムを実行します。
- {{domxref("Navigator.vibrate()")}}
  - : バイブレーションに対応している場合、端末にバイブレーションを起こします。対応していない場合は、何もしません。
- {{domxref("Navigator.unregisterProtocolHandler()")}} {{SecureContext_Inline}}
  - : 指定されたプロトコルのハンドラーであるウェブサイトの登録を解除します。

### 非推奨のメソッド

- {{domxref("Navigator.getUserMedia()")}} {{Deprecated_Inline}} {{SecureContext_Inline}}
  - : ユーザーにプロンプトで許可を取った後に、ローカルコンピューターのマイクやカメラからの音声または動画ストリームを返します。
- {{domxref("Navigator.getVRDisplays()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : コンピューターに接続されて使用可能な VR 機器を表す {{domxref("VRDisplay")}} の配列に解決されるプロミスを返します。
- {{domxref("Navigator.javaEnabled()")}} {{Deprecated_Inline}}
  - : 常に false を返します。
- {{domxref("Navigator.taintEnabled()")}} {{Deprecated_Inline}}
  - : `false` を返します。 JavaScript の taint/untaint 関数は JavaScript 1.2 で削除されました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
