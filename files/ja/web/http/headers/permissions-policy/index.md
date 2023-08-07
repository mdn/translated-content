---
title: Permissions-Policy
slug: Web/HTTP/Headers/Permissions-Policy
---

{{HTTPSidebar}}

HTTP の **`Permissions-Policy`** ヘッダーは、自身のフレームおよび文書内の {{HTMLElement("iframe")}} 要素で、ブラウザーの機能を使用することを許可または拒否する仕組みを提供します。

詳しくは、[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)の記事を参照してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```
Permissions-Policy: <directive> <allowlist>
```

- `<directive>`
  - : `allowlist` に適用される権限ポリシーディレクティブです。許可されているディレクティブ名の一覧は、以下の[ディレクティブ](#ディレクティブ)を参照してください。
- `<allowlist>`

  - : 許可リストは、以下の値のうち 1 つ以上を取るオリジンの空白区切りのリストです。

    - `*`: この機能は、この文書と、含まれるすべての閲覧コンテキスト (iframe) でオリジンに関係なく許可されます。
    - `()`: (空の許可リスト): この機能は最上位および含まれる閲覧コンテキストで向こうになります。
    - `self`: この機能は、この文書と、含まれるすべての閲覧コンテキスト (iframe) のうち、同じオリジンのものに許可されます。
    - `src`: (iframe の `allow` 属性のみ) この iframe に読み込まれた文書が iframe の {{HTMLElement('iframe','src','#Attributes')}} 属性の URL と同じオリジンから来ている限り、この機能はこの iframe で許可されます。

      > **メモ:** `src` のオリジンは iframe の `allow` 属性の中でのみ使用され、これが*既定の* `allowlist` の値です。

    - \<origin>: この機能は特定のオリジン (例えば、 `https://example.com`) で許可されます。オリジンは空白で区切ってください。ただし、 `<iframe>` の `allow` 属性には引き継がれないことに注意してください。

    `*` の値 (すべてのオリジンで有効) または `()` (すべてのオリジンで無効) は単独でのみ使用できますが、 `self` と `src` は一つ以上のオリジンと一緒に使用することができます。

    機能はそれぞれ、既定の許可リストを持つよう定義されています。

    > **メモ:** ディレクティブにはデフォルトの allowlist があり、 `Permissions-Policy` HTTP ヘッダーでは常に `*`, `self` または `none` になります。これらは個々の[ディレクティブのリファレンスページ](#ディレクティブ)で指定されています。 `<iframe>` の `allow` 属性では、デフォルトの動作は常に `src` です。

ブラウザーがサポートしている場合、許可リストで複数の異なるサブドメインを明示的に指定する代わりに許可ポリシーのオリジンにワイルドカードを含めることができます。

そのため以下のような指定は

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

このように書き換えることができます。

```http
("https://example.com" "https://*.example.com")
```

> **Note:** `"https://*.example.com"` は `"https://example.com"` とは別のオリジンになります。

## ディレクティブ

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}}
  - : 現在の文書が、端末の加速度に関する情報を、 {{DOMxRef("Accelerometer")}} インターフェイスを通じて収集することを許可するかどうかを制御します。
- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}}
  - : 現在の文書が、端末の周囲の環境における光量についての情報を、 {{DOMxRef("AmbientLightSensor")}} インターフェイスを通じて収集することを許可するかどうかを制御します。
- {{httpheader('Permissions-Policy/autoplay','autoplay')}}
  - : 現在の文書で {{domxref("HTMLMediaElement")}} インターフェイスがメディアの自動再生をリクエストすることを無効にするかどうかを制御します。このポリシーが有効であり、ユーザーによる操作がなかった場合、 {{domxref("HTMLMediaElement.play()")}} が返す {{jsxref("Promise")}} が {{domxref("DOMException")}} で拒否されます。 {{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素の `autoplay` 属性は無視されます。
- {{httpheader('Permissions-Policy/battery','battery')}}
  - : [Battery Status API](/ja/docs/Web/API/Battery_Status_API) の使用を許可するかどうかを制御します。このポリシーが無効になっている場合、 {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}} が返す {{JSxRef("Promise")}} は `NotAllowedError` の {{DOMxRef("DOMException")}} で拒否されます。
- {{httpheader('Permissions-Policy/camera', 'camera')}}
  - : 現在の文書が動画入力機器を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} が返す {{jsxref("Promise")}} は `NotAllowedError` の {{DOMxRef("DOMException")}} で拒否されます。
- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}}
  - : 現在の文書が {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} メソッドを使用して画面の内容をキャプチャすることを許可するかどうかを制御します。このポリシーが無効であれば、表示内容をキャプチャする許可がない場合、 `getDisplayMedia()` から返却されるプロミスが `NotAllowedError` で拒否されます。
- {{httpheader('Permissions-Policy/document-domain','document-domain')}}
  - : 現在の文書が {{domxref("document.domain")}} を設定することを許可するかどうかを制御します。このポリシーが無効な場合、 {{domxref("document.domain")}} を設定しようとすると失敗し、 `SecurityError` の {{domxref("DOMException")}} が発生します。
- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}}
  - : 現在の文書が [Encrypted Media Extensions](/ja/docs/Web/API/Encrypted_Media_Extensions_API) API (EME) を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxref("Navigator.requestMediaKeySystemAccess()")}} から返却された {{jsxref("Promise")}} が {{domxref("DOMException")}} で拒否されます。
- {{httpheader('Permissions-Policy/execution-while-not-rendered', 'execution-while-not-rendered')}}
  - : 表示されないフレーム内 (例えば iframe が [`hidden`](/ja/docs/Web/HTML/Global_attributes/hidden) または `display: none` の場合) でタスクを実行するかどうかを制御します。
- {{httpheader('Permissions-Policy/execution-while-out-of-viewport', 'execution-while-out-of-viewport')}}

  - : ビューポートの見える範囲外にあるフレーム内のタスクを実行するかどうかを制御します。

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}}
  - : 現在の文書が {{DOMxRef("Element.requestFullscreen()")}} を使用することを許可するかどうかを制御します。このポリシーが無効であれば、返却された {{jsxref("Promise")}} が {{jsxref("TypeError")}} で拒否されます。
- {{httpheader('Permissions-Policy/gamepad','gamepad')}}
  - : 現在の文書が [Gamepad API](/ja/docs/Web/API/Gamepad_API) を使用することを許可するかどうかを制御します。
    このポリシーが無効であれば、 {{domxref('Navigator.getGamepads()')}} の呼び出しで `SecurityError` の {{domxref('DOMException')}} が発生するようになり、 {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} および {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} イベントは発生しなくなります。
- {{httpheader('Permissions-Policy/geolocation','geolocation')}}
  - : 現在の文書が {{domxref('Geolocation')}} インターフェイスを使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} および {{domxref('Geolocation.watchPosition','watchPosition()')}} を呼び出すと、関数のコールバックが呼び出され、 {{domxref('PositionError')}} コードが `PERMISSION_DENIED` になります。
- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}}
  - : 現在の文書が {{DOMxRef("Gyroscope")}} インターフェイスを通じて、端末の方向に関する情報を収集することを許可するかどうかを制御します。
- {{httpheader('Permissions-Policy/layout-animations','layout-animations')}}
  - : 現在の文書がレイアウトアニメーションを表示することを許可するかどうかを制御します。
- {{httpheader('Permissions-Policy/legacy-image-formats','legacy-image-formats')}}
  - : 現在の文書が古い形式の画像を表示することを許可するかどうかを制御します。
- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}}
  - : 現在の文書が {{DOMxRef("Magnetometer")}} インターフェイスを通じて、端末の方向に関する情報を収集することを許可するかどうかを制御します。
- {{httpheader('Permissions-Policy/microphone','microphone')}}
  - : 現在の文書がオーディオ入力端末を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxref("MediaDevices.getUserMedia()")}} で返却されたプロミス ({{jsxref('Promise')}}) が `NotAllowedError` の {{domxref("DOMException")}} で拒否されます。
- {{httpheader('Permissions-Policy/midi', 'midi')}}
  - : 現在の文書が [Web MIDI API](/ja/docs/Web/API/Web_MIDI_API) を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxref("Navigator.requestMIDIAccess()")}} から返却された {{jsxref("Promise")}} が {{domxref("DOMException")}} で拒否されます。
- {{httpheader('Permissions-Policy/navigation-override','navigation-override')}}
  - : ページ作成者が [空間ナビゲーション](https://www.w3.org/TR/css-nav/)の動作を制御したり、完全にキャンセルしたりすることができる仕組みの利用可能性を制御します。
- {{httpheader('Permissions-Policy/oversized-images','oversized-images')}}
  - : 現在の文書が大きな画像をダウンロードして表示することを許可するかどうかを制御します。
- {{httpheader('Permissions-Policy/payment', 'payment')}}
  - : 現在の文書が [Payment Request API](/ja/docs/Web/API/Payment_Request_API) を使用することを許可するかどうかを制御します。このポリシーが有効であれば、 {{domxref("PaymentRequest","PaymentRequest()")}} コンストラクターで `SecurityError` の {{domxref("DOMException")}} が発生します。
- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}}
  - : 現在の文書が、該当する API を使用して Picture-in-Picture モードで動画を再生することを許可するかどうかを制御します。
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}
  - : 現在の文書が [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) を使用して、すでに保存されている公開鍵資格情報を再取得することを許可するかどうかを制御します (例: {{domxref("CredentialsContainer.get","navigator.credentials.get({publicKey: ..., ...})")}})。
- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}}
  - : 現在の文書が [Audio Output Devices API](/ja/docs/Web/API/Audio_Output_Devices_API) を使用して、スピーカーを列挙したり選択したりすることを許可するかどうかを制御します。
- {{httpheader('Permissions-Policy/sync-xhr', 'sync-xhr')}}
  - : 現在の文書が同期 {{DOMxRef("XMLHttpRequest")}} リクエストを行うことを許可するかどうかを制御します。
- {{httpheader('Permissions-Policy/unoptimized-images', 'unoptimized-images')}} {{experimental_inline}}{{Non-standard_Inline}}
  - : 現在の文書が最適化されていない画像をダウンロードしたり表示したりすることを許可するかどうかを制御します。
- {{httpheader('Permissions-Policy/unsized-media', 'unsized-media')}} {{experimental_inline}}{{Non-standard_Inline}}
  - : 現在の文書が初期レイアウトの完了後にメディア要素の大きさを変更することを許可するかどうかを制御し案す。
- {{httpheader('Permissions-Policy/usb', 'usb')}}
  - : 現在の文書が [WebUSB API](https://wicg.github.io/webusb/) を使用することを許可するかどうかを制御します。
- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}}
  - : 現在の文書が [Screen Wake Lock API](/ja/docs/Web/API/Screen_Wake_Lock_API) を使用して、端末が画面をオフにしたり暗くしたりしてはいけないことを示すことを許可するかどうかを制御します。
- {{httpheader("Permissions-Policy/web-share", "web-share")}}
  - : 現在の文書が Web Share API の {{domxref("Navigator.share","Navigator.share()")}} を使用して、テキスト、リンク、画像、その他のコンテンツをモバイルアプリなどのユーザーが任意に選択した任意の場所に共有することを許可するかどうかを制御します。
- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}}
  - : 現在の文書が [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API) を使用して WebXR セッションと対話することを許可するかどうかを制御します。

## 例

SecureCorp Inc. が、アプリケーションでマイクと Geolocation API を無効にしたがっているとします。以下の権限ポリシーを設定する HTTP レスポンスヘッダーを配信することで実現できます。

```
Permissions-Policy: microphone=(), geolocation=()
```

オリジンのリストに `()` キーワードを指定すると、指定された機能がオリジンに関係なく、すべての閲覧コンテキスト (iframe を含む) で無効になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)
- {{DOMxRef("Document.featurePolicy")}} および {{DOMxRef("FeaturePolicy")}}
- [Feature-Policy Tester (Chrome Developer Tools extension)](https://chrome.google.com/webstore/detail/feature-policy-tester-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
