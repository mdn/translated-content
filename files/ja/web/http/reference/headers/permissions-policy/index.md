---
title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: 31ba9f6da2dd1175250ece8d8d467d523e79b447
---

{{SeeCompatTable}}

HTTP の **`Permissions-Policy`** {{Glossary("response header", "レスポンスヘッダー")}}は、文書または文書内の {{HTMLElement("iframe")}} 要素で、ブラウザーの機能を使用することを許可または拒否する仕組みを提供します。

詳しくは、[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)の記事を参照してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : `allowlist` に適用される権限ポリシーディレクティブです。許可されているディレクティブ名の一覧は、以下の[ディレクティブ](#ディレクティブ)を参照してください。
- `<allowlist>`
  - : 許可リストとは、括弧内に次の値が空白で区切られて 1 つ以上含まれているオリジンのリストです。
    - `*` （ワイルドカード）
      - : この機能は、この文書と、含まれるすべての閲覧コンテキスト (`<iframe>`) でオリジンに関係なく許可されます。
    - `()` （空の許可リスト）
      - : この機能は最上位および含まれる閲覧コンテキストで無効になります。`<iframe>` の `allow` 属性の同等機能は `'none'` です。
    - `self`
      - : この機能は、この文書と、含まれるすべての閲覧コンテキスト (`<iframe>`) のうち、同じオリジンのもののみで許可されます。オリジンをまたいだ文書内の組み込まれた閲覧コンテキストでは、この機能は許可されていません。 `self` は `https://your-site.example.com` の省略形と考えることができます。 `<iframe>` の `allow` 属性の同等機能は `self` です。
    - `src`
      - : この機能は、この `<iframe>` では許可されます。ただし、その {{HTMLElement('iframe','src','#属性')}} 属性に指定された URL と同じオリジンから読み込まれた文書であることが条件となります。この値は、 `<iframe>` の `allow` 属性でのみ使用され、 `<iframe>` の既定の `allowlist` 値となります。
    - `"<origin>"`
      - : この機能は特定のオリジン（例えば、 `"https://a.example.com"`）で許可されます。オリジンは空白で区切ってください。ただし、 `<iframe>` の `allow` 属性には引き継がれないことに注意してください。

    `*` の値 (すべてのオリジンで有効) または `()` (すべてのオリジンで無効) は単独でのみ使用できますが、 `self` と `src` は一つ以上のオリジンと一緒に使用することができます。

    > [!NOTE]
    > ディレクティブには既定の許可リストがあり、 `Permissions-Policy` HTTP ヘッダーでは常に `*`、`self`、`none` のいずれかになります。これらは個々の[ディレクティブのリファレンスページ](#ディレクティブ)で指定されています。 `<iframe>` の `allow` 属性では、既定の動作は常に `src` です。

対応している場合、その権限ポリシーのオリジンにワイルドカードを含めることができます。 これには、許可リストに複数の異なるサブドメインを明示的に指定する代わりに、ワイルドカードを使用して単一のオリジンですべてのサブドメインを指定するという意味があります。

そのため以下のような指定は

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

このように書き換えることができます。

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` は `"https://example.com"` とは一致しません。

## ディレクティブ

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : 現在の文書が、端末の加速度に関する情報を、 {{DOMxRef("Accelerometer")}} インターフェイスを通じて収集することを許可するかどうかを制御します。

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : 現在の文書が、端末の周囲の環境における光量についての情報を、 {{DOMxRef("AmbientLightSensor")}} インターフェイスを通じて収集することを許可するかどうかを制御します。

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}
  - : 現在の文書が[帰属レポート API](/ja/docs/Web/API/Attribution_Reporting_API) を使用することを許可するかどうかを制御します。

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : 現在の文書で {{domxref("HTMLMediaElement")}} インターフェイスがメディアの自動再生をリクエストすることを無効にするかどうかを制御します。このポリシーが無効であり、ユーザーによる操作がなかった場合、 {{domxref("HTMLMediaElement.play()")}} が返すプロミス ({{jsxref("Promise")}}) が {{domxref("DOMException")}} で拒否されます。 {{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素の `autoplay` 属性は無視されます。

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : [Web Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API) の使用を許可するかどうかを制御します。このポリシーが無効になっている場合、 {{DOMxRef("Navigator.bluetooth")}} が返す {{DOMxRef("Bluetooth")}} オブジェクトのメソッドは `false` を返すか、または返されたプロミス ({{jsxref("Promise")}}) を `SecurityError` の {{DOMxRef("DOMException")}} で拒否します。

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}
  - : [トピック API](/ja/docs/Web/API/Topics_API) へのアクセスを制御します。ポリシーでトピック API の使用が明確に禁止されている場合、 {{domxref("Document.browsingTopics()")}} メソッドを呼び出そうとしたり、 {{httpheader("Sec-Browsing-Topics")}} ヘッダー付きのリクエストを送信しようとしても、 `NotAllowedError` の {{domxref("DOMException")}} で失敗します。

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : 現在の文書が動画入力機器を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} が返すプロミス ({{jsxref("Promise")}}) は `NotAllowedError` の {{DOMxRef("DOMException")}} で拒否されます。

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : [圧力計算 API](/ja/docs/Web/API/Compute_Pressure_API) へのアクセスを制御します。

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : 現在の文書が{{domxref("Window.crossOriginIsolated", "オリジン間分離", "", 1)}}として扱うことができるかどうかを制御します。

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : 最上位ドメインの [`fetchLater()` クオータ](/ja/docs/Web/API/fetchLater_API/fetchLater_quotas)の割り当てを制御します。

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : オリジン間で共有されるサブフレームの [`fetchLater()` クオータ](/ja/docs/Web/API/fetchLater_API/fetchLater_quotas)の割り当てを制御します。

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : 現在の文書が {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} メソッドを使用して画面の内容をキャプチャすることを許可するかどうかを制御します。このポリシーが無効であれば、表示内容をキャプチャする許可がない場合、 `getDisplayMedia()` から返却されるプロミスが `NotAllowedError` で拒否されます。

- {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{Experimental_Inline}}
  - : 現在の文書が {{domxref("document.domain")}} を設定することを許可するかどうかを制御します。このポリシーが無効な場合、 {{domxref("document.domain")}} を設定しようとすると失敗し、 `SecurityError` の {{domxref("DOMException")}} が発生します。

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : 現在の文書が [Encrypted Media Extensions](/ja/docs/Web/API/Encrypted_Media_Extensions_API) API (EME) を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxref("Navigator.requestMediaKeySystemAccess()")}} から返却されたプロミス ({{jsxref("Promise")}}) が {{domxref("DOMException")}} で拒否されます。

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : 現在の文書が {{DOMxRef("Element.requestFullscreen()")}} を使用することを許可するかどうかを制御します。このポリシーが無効であれば、返却されたプロミス ({{jsxref("Promise")}}) が {{jsxref("TypeError")}} で拒否されます。

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : 現在の文書が [Gamepad API](/ja/docs/Web/API/Gamepad_API) を使用することを許可するかどうかを制御します。
    このポリシーが無効であれば、 {{domxref('Navigator.getGamepads()')}} の呼び出しで `SecurityError` の {{domxref('DOMException')}} が発生するようになり、 {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} および {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} イベントは発生しなくなります。

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : 現在の文書が {{domxref('Geolocation')}} インターフェイスを使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} および {{domxref('Geolocation.watchPosition','watchPosition()')}} を呼び出すと、関数のコールバックが呼び出され、 {{domxref('PositionError')}} コードが `PERMISSION_DENIED` になります。

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : 現在の文書が {{DOMxRef("Gyroscope")}} インターフェイスを通じて、端末の方向に関する情報を収集することを許可するかどうかを制御します。

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : 現在の文書が {{domxref("WebHID API", "WebHID API", "", "nocode")}} を使用して、代替キーボードやゲームパッドなどの一般的ではない、または特殊なヒューマンインターフェイス端末に接続することを許可するかどうかを制御します。

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : 現在の文書が[連合資格情報管理 API (FedCM)](/ja/docs/Web/API/FedCM_API) の使用を許可されているかどうか、より具体的には `identity` オプション付きの {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} メソッドの使用を許可されているかどうかを制御します。このポリシーで API の使用が禁止されている場合、 `get()` 呼び出しによって返されるプロミス ({{jsxref("Promise")}}) が `NotAllowedError` の {{domxref("DOMException")}} で拒否されます。

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : 現在の文書が、ユーザーが端末と通信していることを検出する{{domxref("Idle Detection API", "アイドル検出 API", "", "nocode")}} が利用可能かどうかを制御します。例えば、チャットアプリケーションで「在席中」/「離席中」の状態を報告する場合などです。

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : 現在の文書が、 {{DOMxRef("Window.queryLocalFonts()")}} メソッド（{{domxref("Local Font Access API", "ローカルフォントアクセス API", "", "nocode")}} も参照）を介して、ユーザーのローカルにインストールされたフォントに関するデータを収集することを許可するかどうかを制御します。

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : 現在の文書が {{DOMxRef("Magnetometer")}} インターフェイスを通じて、端末の方向に関する情報を収集することを許可するかどうかを制御します。

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}
  - : 現在の文書がオーディオ入力機器を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxref("MediaDevices.getUserMedia()")}} で返却されたプロミス ({{jsxref("Promise")}}) が `NotAllowedError` の {{domxref("DOMException")}} で拒否されます。

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : 現在の文書が [Web MIDI API](/ja/docs/Web/API/Web_MIDI_API) を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxref("Navigator.requestMIDIAccess()")}} から返却されたプロミス ({{jsxref("Promise")}}) が {{domxref("DOMException")}} で拒否されます。

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : 現在の文書が、 [WebOTP API](/ja/docs/Web/API/WebOTP_API) を使用して、アプリのサーバーから送信された特別に書式化された SMS メッセージからワンタイムパスワード (OTP) をリクエストすること、すなわち {{domxref("CredentialsContainer.get", "navigator.credentials.get({otp: ..., ...})")}} を許可するかどうかを制御します。

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : 現在の文書が[決済リクエスト API](/ja/docs/Web/API/Payment_Request_API) を使用することを許可するかどうかを制御します。このポリシーが有効であれば、 {{domxref("PaymentRequest","PaymentRequest()")}} コンストラクターで `SecurityError` の {{domxref("DOMException")}} が発生します。

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : 現在の文書が、該当する API を使用してピクチャインピクチャモードで動画を再生することを許可するかどうかを制御します。

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : 現在の文書が[ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API) を使用して、新しい非対称キー資格情報を作成すること、すなわち {{domxref("CredentialsContainer.create", "navigator.credentials.create({publicKey: ..., ...})")}} を許可するかどうかを制御します。

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : 現在の文書が[ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API) を使用して、すでに保存されている公開鍵資格情報を再取得すること、すなわち {{domxref("CredentialsContainer.get", "navigator.credentials.get({publicKey: ..., ...})")}} を許可するかどうかを制御します 。

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : 現在の文書が[画面起動ロック API](/ja/docs/Web/API/Screen_Wake_Lock_API) を使用して、端末が画面をオフにしたり暗くしたりしてはいけないことを示すことを許可するかどうかを制御します。

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : 現在の文書が、{{domxref("Web Serial API", "ウェブシリアル API", "", "nocode")}} を使用して、シリアルポートに直接接続されたシリアル機器、またはシリアルポートをエミュレートする USB または Bluetooth 機器と通信することを許可するかどうかを制御します。

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : 現在の文書が[オーディオ出力機器 API](/ja/docs/Web/API/Audio_Output_Devices_API) を使用して、スピーカーを列挙したり選択したりすることを許可するかどうかを制御します。

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : サードパーティのコンテキスト（すなわち、 {{htmlelement("iframe")}} に埋め込まれた）で読み込まれた文書内の{{domxref("Storage Access API", "ストレージアクセス API", "", "nocode")}} を使用して、分離されていないクッキーにアクセスすることを許可するかどうかを制御します。

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : 現在の文書が [WebUSB API](https://wicg.github.io/webusb/) を使用することを許可するかどうかを制御します。

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : 現在の文書が Web Share API の {{domxref("Navigator.share","Navigator.share()")}} を使用して、テキスト、リンク、画像、その他のコンテンツをモバイルアプリなどのユーザーが任意に選択した任意の場所に共有することを許可するかどうかを制御します。

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : 現在の文書が、[ウィンドウ管理 API](/ja/docs/Web/API/Window_Management_API) を使用して複数のディスプレイ上のウィンドウを管理することを許可するかどうかを制御します。

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : 現在の文書が [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API) を使用して WebXR セッションと対話することを許可するかどうかを制御します。

## 例

### 基本的な用途

#### Permissions-Policy ヘッダー

すべてのオリジンが位置情報にアクセスできるようにするには、次のようにします。

```http
Permissions-Policy: geolocation=*
```

または、一部のオリジンにアクセスできるようにするには、次のようにします。

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

ヘッダーにカンマ区切りで掲載されているポリシーのリストを送信するか、または各ポリシーに対して別個のヘッダーを送信することで、同時に複数の機能を制御することができます。

例えば、次のものは同等です。

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframe

`<iframe>` が機能を有効にするためには、その許可されたオリジンが親ページのにも含まれていなければなりません。 この[継承の動作](/ja/docs/Web/HTTP/Guides/Permissions_Policy#埋め込みコンテンツのポリシーの継承)のため、 HTTP ヘッダーで機能の最も受け入れられるサポートを指定し、その後、それぞれの `<iframe>` で必要なサポートのサブセットを指定するのが良い考えです。

すべてのオリジンが位置情報にアクセスできるようにするには、次のようにします。

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

現在のオリジンやそれ以外にもポリシーを適用するには、次のようにします。

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

これは重要です。既定では、`<iframe>` が別のオリジンに移動する場合、その `<iframe>` の移動先のオリジンにはポリシーが適用されません。 `allow` 属性に `<iframe>` の移動先のオリジンが掲載されている場合、元の `<iframe>` に適用された権限ポリシーが、その `<iframe>` の移動先のオリジンにも適用されます。

セミコロンで区切られたポリシーディレクティブのリストを `allow` 属性内に記載することで、同時に複数の機能を制御することができます。

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

`src` 値について特に言及する価値があります。上記で述べたように、この許可リスト値を使用すると、 {{HTMLElement('iframe','src','#属性')}} 属性の URL と同じオリジンから読み込まれた文書である限り、関連付けられた機能がこの `<iframe>` で許可されることになります。この値は、 `allow` に列挙された機能の既定の `allowlist` 値であるため、次のものは同等です。

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

### 強力な機能へのアクセスを拒否する

SecureCorp Inc. が、アプリケーションでマイクと位置情報 API を無効にしたがっているとします。以下の権限ポリシーを設定する HTTP レスポンスヘッダーを配信することで実現できます。

```http
Permissions-Policy: microphone=(), geolocation=()
```

オリジンのリストに `()` キーワードを指定すると、指定された機能がオリジンに関係なく、すべての閲覧コンテキスト (すべての `<iframe>` を含む) で無効になります。

### HTTP ヘッダーと `<iframe>` のポリシーの組み合わせ

例えば、自分自身のオリジンや、信頼できる広告ネットワークから配信される埋め込みコンテンツで、位置情報の利用を可能にしたいとします。 ページ全体に適用される権限ポリシーを次のように設定することができます。

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

広告の `<iframe>` では、このようにして `https://trusted-ad-network.com` 元にアクセスするように設定することができます。

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

結果的に異なるオリジンが `<iframe>` に読み込まれた場合、そのオリジンは位置情報にアクセスすることはできません。

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- {{DOMxRef("Document.featurePolicy")}} および {{DOMxRef("FeaturePolicy")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
