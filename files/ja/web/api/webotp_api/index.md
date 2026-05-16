---
title: WebOTP API
slug: Web/API/WebOTP_API
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("WebOTP API")}}{{SeeCompatTable}}{{securecontext_header}}

**WebOTP API** は、電話番号をログイン要素として使用する際、その電話番号がユーザーのものであることを確認するための、ウェブアプリ向けの簡素化された操作性を提供します。WebOTP は、[資格情報管理 API](/ja/docs/Web/API/Credential_Management_API)の拡張機能です。

認証は 2 段階のプロセスで行われます。

1. アプリクライアントがワンタイムパスワード (OTP) をリクエストし、アプリサーバーから送信される特別な書式の SMS メッセージからその OTP を取得します。
2. JavaScript を使用して、アプリクライアント上の検証フォームに OTP を入力し、それをサーバーに送信して、SMS で最初に送信された内容と一致しているかを確認します。

## 概念と使用法

電話番号はアプリケーションがユーザーを識別する方法としてよく使用さます。SMS は、番号がユーザーのものであることを検証するためによく使用されます。SMS には通常、ワンタイムパスワード (OTP) が記載されており、ユーザーはその番号を所有していることを確認するために、アプリ内のフォームにその OTP をコピーして貼り付ける必要があります。これは、やや煩雑な操作であるといえます。

OTP には次のような用途があります。

- ログインのセキュリティの強化。{{glossary("multi-factor authentication", "多要素認証")}}システムの一環として、電話番号を追加の認証要素として使用します。
- 支払いなどの重要な措置の確認。

WebOTP API を使用すると、ウェブアプリは、ユーザーから同意を指定された後、SMS から OTP をコピーしてアプリに自動的に渡すことで、この認証プロセスを迅速化することができます（ほとんどのネイティブプラットフォームには同等の API が持っています）。

なお、OTP は送信元ドメインに紐付けられています。これは、OTP が適切なソースから送信されたものであることを確認するための有益なセキュリティ上の制約であり、日常的な再認証時のフィッシング攻撃のリスクを軽減することができます。

### SMS OTP のセキュリティ上の注意事項

SMS によるワンタイムパスワード (OTP) は電話番号の確認に役立ちますし、二要素認証として SMS を使用することは、二要素認証を全く行わないよりは確かに良い方法です。一部の領域では、メールアドレスや認証器などの他の認証手段が広く普及していないため、SMS による OTP は非常に一般的です。

しかし、SMS はそれほど安全ではありません。攻撃者は SMS を偽装して、他人の電話番号を乗っ取ることが可能です。また、通信事業者は、アカウントが閉じられた後、その電話番号を新しいユーザーに割り当て直すことがあります。

したがって、可能であれば、パスワードとセキュリティキー、あるいはパスキーを組み合わせた[ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API) ベースのソリューションなど、より強固な認証方式を使用することをお勧めします。

## WebOTP API はどのように動作するのか

次のように処理が行われます。

1. 電話番号の確認が要求される段階では、アプリクライアントがユーザーにフォームへの電話番号入力を依頼し、その情報はアプリサーバーに送信されます。
2. その後、アプリクライアントは、{{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} を呼び出し、`otp` オプションで `transport` 型を `"sms"` と指定します。これにより、基盤システムへの OTP リクエストが開始されます。その OTP は、アプリサーバーから受信した[特別な書式の SMS メッセージ](#sms_message_format)（OTP とアプリのドメインを含む）として送信されます。`get()` 呼び出しは {{jsxref("Promise")}} ベースのものであり、SMS メッセージの受信を待機します。
3. アプリサーバーは、指定された電話番号に SMS メッセージを送信します。これは、ステップ 2 が完了した後に行うのが最適です。
4. 端末で SMS が受信され、その内容にアプリのドメインが含まれている場合、ブラウザーは OTP の取得・使用についてユーザーの同意を要求するメッセージを表示します。例えば Chrome では、SMS から OTP を取得する許可を求めるダイアログが表示されますが、さまざまなブラウザーでの処理方法は異なる場合があります。ユーザーが同意した場合、`get()` 呼び出しは OTP を含む {{domxref("OTPCredential")}} オブジェクトを返します。
5. その後、OTP は自由に使用できます。一般的な使い方としては、アプリクライアント上の検証フォームの値として設定し、そのフォームを送信することで、プロセスを可能な限りスムーズに進めることができます。
6. その後、アプリサーバーは、返信された OTP が SMS で送信したものと一致するかどうかを確認し、一致している場合は処理を完了します（例えば、ユーザーをログインさせます）。

### SMS のメッセージ形式

一般的なSMSメッセージは、次のようなものです。

```plain
Your verification code is 123456.

@www.example.com #123456
```

- 1 行目と空白行の 2 行目はオプションであり、人間が読み取り可能にするためのものです。
- 最後の行は必須です。他の行がある場合でも、これが必ず最後の行となり、以下の内容で構成されなければなりません。
  - この API を呼び出したウェブサイトのドメイン部分の URL で、`@` の後に続く。
  - それに続く空白。
  - それに続く OTP で、ナンバーサイン (`#`) の後に続く。

> [!NOTE]
> 指定されたドメイン値には、URLスキーマ、ポート、または以上で示されていないその他のURLの機能を含めないでください。

`get()` メソッドが {{htmlelement("iframe")}} に埋め込まれたサードパーティのサイトから呼び出された場合は、この SMS の構造は次のようになります。

```plain
Your verification code is 123456.

@top-level.example.com #123456 @embedded.com
```

この場合、最後の行は以下の構成になります。

- 最上位ドメインのドメイン部分で、`@` の後に続く。
- それに続く空白。
- それに続く OTP で、ナンバーサイン (`#`) の後に続く。
- それに続く空白。
- 埋め込まれたドメインのドメイン部分で、`@` の後に続く。

## API へのアクセス制御

WebOTP を利用できるかどうかは、[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) の {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} ディレクティブを指定して使用することで制御できます。このディレクティブのデフォルト値は `"self"` です。つまり、デフォルトで、これらのメソッドは最上位の文書コンテキストで使用できます。

特定のクロスオリジンドメイン（つまり、{{htmlelement("iframe")}} 内）で WebOTP を使用することができるディレクティブを指定することもできます。

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

または、同様に `<iframe>` に直接指定することも可能です。

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> [!NOTE]
> ポリシーで WebOTP の `get()` の使用が禁止されている場合、そこで返される {{jsxref("Promise", "promises")}} は `SecurityError` の {{domxref("DOMException")}} で拒否されます。

## インターフェイス

- {{domxref("OTPCredential")}}
  - : WebOTP の `get()` 呼び出しが履行された際に返されます。取得した OTP が含まれる `code` プロパティが含まれます。

### 他のインターフェイスへの拡張

- {{domxref("CredentialsContainer.get()")}}, the `otp` option
  - : `otp` オプションをつけて `get()` を呼び出すと、ユーザーエージェントは基盤となるシステムの SMS アプリから OTP を取得しようとします。

## 例

この例では、SMS メッセージを受信し、ユーザーが許可すると、ワンタイムパスワードを含む {{domxref("OTPCredential")}} オブジェクトが返ります。そして、このパスワードがフォームに入力され、フォームが送信されます。

[電話機を使用してデモを体験する](https://chrome.dev/web-otp-demo/)

このフォームフィールドには、[`autocomplete`](/ja/docs/Web/HTML/Reference/Attributes/autocomplete) 属性が `one-time-code` の値で含まれています。これは WebOTP API が機能するために必須ではありませんが、記載しておく価値があります。その結果、Safari では WebOTP API が完全には対応していないのですが、正しい形式の SMS を受信した際に、このフィールドに OTP を自動入力するようユーザーに促すようになります。

```html
<input type="text" autocomplete="one-time-code" inputmode="numeric" />
```

JavaScript は次の通りです。

```js
// OTPCredential が利用できる場合の機能検出
if ("OTPCredential" in window) {
  const input = document.querySelector('input[autocomplete="one-time-code"]');
  if (!input) return;
  // OTP リクエストで使用するための AbortController を設定
  const ac = new AbortController();
  const form = input.closest("form");
  if (form) {
    // ユーザーが手動でフォームを送信しようとした場合は、OTP リクエストを中止
    form.addEventListener("submit", (e) => {
      ac.abort();
    });
  }
  // OTP を get() でリクエスト
  navigator.credentials
    .get({
      otp: { transport: ["sms"] },
      signal: ac.signal,
    })
    .then((otp) => {
      // アプリクライアントが OTP を受信したら、フォームの入力欄に入力し、
      // 自動的にフォームを送信する
      input.value = otp.code;
      if (form) form.submit();
    })
    .catch((err) => {
      console.error(err);
    });
}
```

{{domxref("AbortController")}} のもう一つの有益な使い方は、一定時点後に `get()` リクエストをキャンセルすることです。

```js
setTimeout(() => {
  // 30 秒後に中止
  ac.abort();
}, 30 * 1000);
```

ユーザーが他のことに気を取られたり、別のページに移動したりした場合は、その時点でリクエストをキャンセルし、もはや関係のないその権限の確認画面が取得されないようにするのが良いでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Verify phone numbers on the web with WebOTP](https://developer.chrome.com/docs/identity/web-apis/web-otp) - developer.chrome.com (2023)
- [Fill OTP forms within cross-origin iframes with WebOTP API](https://web.dev/articles/web-otp-iframe)
