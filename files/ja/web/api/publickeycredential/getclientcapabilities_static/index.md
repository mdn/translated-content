---
title: "PublicKeyCredential: getClientCapabilities() 静的メソッド"
short-title: getClientCapabilities()
slug: Web/API/PublicKeyCredential/getClientCapabilities_static
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`getClientCapabilities()`** は {{domxref("PublicKeyCredential")}} インターフェイスの静的メソッドで、特定の WebAuthn クライアント機能および [拡張機能](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions)が対応しているかどうかを確認するために使用できるオブジェクトで解決される {{jsxref("Promise")}} を返します。

認証依頼者 (RP) は、この情報を使用することで、ログインやサインアップのユーザーインターフェイスやワークフローを適切にカスタマイズすることができます。

## 構文

```js-nolint
PublicKeyCredential.getClientCapabilities()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} であり、その解決結果として得られるオブジェクトのプロパティ名はクライアントの機能対応状況を示す文字列であり、値は対応する機能や拡張機能が対応しているかどうかを示す論理値です。

WebAuthn のクライアント能力文字列は次の通りです。

- `"conditionalCreate"`
  - : このクライアントは、[検出可能な資格情報](/ja/docs/Web/API/Web_Authentication_API#検出可能な資格情報と条件付き仲介)を生成する能力があります。
- `"conditionalGet"`
  - : このクライアントは[条件付き仲介](/ja/docs/Web/API/Web_Authentication_API#autofill_ui)が可能です。
    この機能は、[`isConditionalMediationAvailable()`](/ja/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) が true を返すことと同等です。
- `"hybridTransport"`
  - : このクライアントは、[ハイブリッド](/ja/docs/Web/API/AuthenticatorAttestationResponse/getTransports#hybrid)トランスポートの使用に対応しています。
    つまり、クライアントは Bluetooth、NFC、USB による認証器を使用することができます。
- `"passkeyPlatformAuthenticator"`
  - : このクライアントでは、PIN や生体認証などの{{glossary("multi-factor authentication", "多要素認証")}}メカニズムに対応するパスキー認証器の使用をすることができる。
    認証器は、クライアントと同じプラットフォーム（端末）の一部である場合もあれば、Bluetooth や USB などのハイブリッド通信方式を介して接続される場合もあります。
    資格情報は認証器に格納されます。
    [認証依頼者向けのパスキー開発者ガイド](https://developers.google.com/identity/passkeys/developer-guides)を参照してください。
- `userVerifyingPlatformAuthenticator`
  - : クライアントには、PIN　や生体認証などの{{glossary("multi-factor authentication", "多要素認証")}}メカニズムに対応したプラットフォーム認証器（同一端末に組み込まれている）が搭載されています。
    資格情報は、RP または認証器のいずれかに格納されることがあります。
- `relatedOrigins`
  - : このクライアントは、[関連オリジンリクエスト](https://web.dev/articles/webauthn-related-origin-requests)に対応しています。
    これらのクライアントでは、同じオリジンを持つ複数のサイトでパスキーを共通して使用することができます。
- `signalAllAcceptedCredentials`
  - : このクライアントは、[`PublicKeyCredential.signalAllAcceptedCredentials()`](/ja/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static) 静的メソッドに対応しています。
    対応していない場合、RP ワークフローでは、ユーザーに対し、認証器上で資格情報を手動で削除するよう促す必要があります。
- `signalCurrentUserDetails`
  - : このクライアントは、[`PublicKeyCredential.signalCurrentUserDetails()`](/ja/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static) 静的メソッドに対応しています。
    対応していない場合、RP ワークフローでは、ユーザーに対し、認証器上のユーザー情報を手動で更新するよう促す必要があります。
- `signalUnknownCredential`
  - : このクライアントは、[`PublicKeyCredential.signalUnknownCredential()`](/ja/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) 静的メソッドに対応しています。
    対応していない場合、RP ワークフローでは、ユーザーに対し、認証器から資格情報を手動で削除する必要があることを促す必要があります。

[ウェブ拡張機能](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions)の文字列は、[拡張機能識別子](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#利用可能な拡張機能)の先頭に `extension:` をつけて書式化されます。
例えば、キー `extension:appid` を使用することで、[`appid` 拡張機能](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#appid) が対応しているかどうかを調べることができます。

### 例外

返される {{jsxref(「Promise」)}} は、以下の値で拒否されることがあります。

- `SecurityError` {{domxref("DOMException")}}
  - : RP のドメインが有効ではありません。

## 解説

`getClientCapabilities()` を使用すると、指定された機能や拡張機能が対応しているかどうかを調べることができるし、その情報に基づいて適切なユーザー体験を提供することができます。

例えば、`userVerifyingPlatformAuthenticator` 能力に対応しているということは、指紋センサーなどの生体認証が利用できることを示します。
ウェブアプリケーションはこれを使用して、当該能力に対応している場合は指紋のアイコンを表示させ、対応していない場合はパスワード入力欄を表示することができます。
生体認証によるログインが必須の場合、代わりに、そのブラウザーや端末では認証できない旨の通知を表示することも可能です。
同様に、`conditionalGet` は、クライアントがユーザーのログイン時における条件付き仲介に対応していることを示します。これは、ブラウザーがログインフォーム（例えば、自動補完機能付きのテキストフィールドやドロップダウンリストなど）に、自動入力可能な資格情報を表示し、ログインボタンを併せて提供できることを意味します。

返されたオブジェクトに指定された能力の値が存在する場合、`true` はその機能が現在対応していることを示し、`false` は対応していないことを示します。
ただし、ある能力に対応するキーが存在しない場合、その機能が利用できるかどうかについて何らかの推測を行うことはできません。

拡張機能についても、仮定は同様である。
ただし、クライアントがその拡張機能を対応している場合であっても、具体的な認証器がその拡張機能を対応していない可能性があるため、RP は、その拡張機能に対する認証器の処理ステップが確実に実行されるとは想定してはなりません。
拡張機能に対応するキーが存在しない場合、RP は、その拡張機能に対するクライアント側の処理手順がこのクライアントによって実行されること、あるいはその拡張機能が認証器に転送されることを想定してはなりません。

## 例

### すべての能力をチェック

この例では、能力オブジェクトを取得し、その値を反復処理する方法を示しています。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 230px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

まず、`getClientCapabilities()` が能力情報を含むオブジェクトを取得するのを待ちます。
次に、そのオブジェクトを反復処理し、結果をログ出力します（ログ出力コードは示していません）。

```js
async function checkClientCapabilities() {
  const capabilities = await PublicKeyCredential.getClientCapabilities();

  if (capabilities) {
    log("Client Capabilities:");

    for (const [key, value] of Object.entries(capabilities)) {
      log(` ${key}: ${value}`);
    }
  }
}
```

関数を呼び出す前に、その関数が定義されているかを調べ、その結果をログ出力します。

```js
// 能力を調べるために関数を呼び出す
if (PublicKeyCredential.getClientCapabilities) {
  checkClientCapabilities();
} else {
  log(
    "このブラウザーは PublicKeyCredential.getClientCapabilities() には対応していません。",
  );
}
```

#### 結果

{{EmbedLiveSample("Check all capabilities", "", "280")}}

### プラットフォーム認証器のユーザーの検証テスト

この例では、`userVerifyingPlatformAuthenticator` という単一の機能を調べています。実際のアプリケーションでは、この結果を利用してユーザーインターフェイスを設定する場合があります。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 40px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

このコードは前回の例と似ていますが、特定の返された能力を調べている点と、`getClientCapabilities()` が対応していない場合を捕捉するために `try...catch` を使用している点が異なります。

```js
checkIsUserVerifyingPlatformAuthenticatorAvailable();

async function checkIsUserVerifyingPlatformAuthenticatorAvailable() {
  try {
    const capabilities = await PublicKeyCredential.getClientCapabilities();

    if (capabilities.userVerifyingPlatformAuthenticator) {
      log("生体認証ログインに対応しています。");
    } else {
      log("生体認証ログインに対応していません。パスワードでログインしてください。");
    }
  } catch (error) {
    if (error instanceof TypeError) {
      log(
        "このブラウザーは PublicKeyCredential.getClientCapabilities() に対応していません。",
      );
    } else {
      log(`想定外のエラー: ${error}`);
    }
  }
}
```

ここで、チェックの結果をログ出力している点に注意してください。
実際のアプリケーションでは、ユーザーを認証するための適切なオプションを示して、ユーザーインターフェイスを更新する場合もあります。

#### 結果

下記ログには、そのメソッドが未対応である旨を示す文字列、あるいは生体認証またはパスワードによるログインが対応しているかどうかを示す文字列が表示されます。

{{EmbedLiveSample("Test for user verifying platform authenticator", "", "90")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API)
