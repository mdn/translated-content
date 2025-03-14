---
title: HTTP Public Key Pinning (HPKP)
slug: conflicting/Web/Security/Certificate_Transparency
original_slug: Web/HTTP/Public_Key_Pinning
---

{{HTTPSidebar}}{{deprecated_header}}

> [!NOTE]
> Public Key Pinning の仕組みは [Certificate Transparency](/ja/docs/Web/Security/Certificate_Transparency) および {{HTTPHeader("Expect-CT")}} ヘッダーに置き換えられ、非推奨になりました。

**HTTP Public Key Pinning** ({{Glossary("HPKP")}}) は、ウェブクライアントに特定の公開鍵をあるウェブサーバーに関連付けさせることで、偽造された証明書による{{Glossary("MITM", "中間者攻撃")}}のリスクを減少させるためのセキュリティ機能でした。これは最近のブラウザーでは削除され、対応がなくなりました。

{{Glossary("TLS")}} セッションで用いられるサーバーの公開鍵の真正性を担保するため、通常その公開鍵は認証局 ({{GLossary("CA")}}) の証明書でラップされます。ブラウザーなどのウェブクライアントがこれらの認証局を信頼することで、認証局は任意のドメイン名に対する証明書を作成できます。攻撃者が 1 つの認証局を危殆化させることができれば、様々な TLS コネクションで中間者攻撃を仕掛けることが可能になってしまいます。 HPKP はこの {{Glossary("HTTPS")}} プロトコルへの脅威を、そのウェブサーバーにどの公開鍵が所属するのかをクライアントに伝えることで回避することができます。

HPKP は _Trust on First Use_ ({{Glossary("TOFU")}}) 技術の 1 つです。 HPKP の HTTP ヘッダーがウェブサーバーからクライアントへ最初に送信されて以降、そのウェブサーバーに紐付く公開鍵はクライアントで一定期間記憶されます。クライアントが再びそのサーバーを訪れた際は、既に HPKP で記憶したフィンガープリントと一致する公開鍵が、証明書チェインにおいて最低 1 つの証明書に含まれていることを確認します。そのサーバーから送信されてきた公開鍵が不明なものだった場合、クライアントはユーザーに警告を表示します。

> [!NOTE]
> Firefox および Chrome は、認証された証明書チェーンが (内蔵の証明書ではなく) **ユーザー定義の証明書**であった場合、**ピン留めによる認証を無効化します**。つまり、独自のルート証明書をインポートしたユーザーに対しては、ピン留めによる警告が表示されません。

## HPKP の有効化

サイトでこの機能を有効化するには、サイトに HTTPS でアクセスされたとに、 HTTP の {{HTTPHeader("Public-Key-Pins")}} ヘッダーを返す必要があります。

```
Public-Key-Pins: pin-sha256="base64=="; max-age=expireTime [; includeSubDomains][; report-uri="reportURI"]
```

- `pin-sha256`
  - : 二重引用符で囲まれた文字列で、 Base64 符号化された _Subject Public Key Information_ ({{Glossary("SPKI")}}) のフィンガープリントです。異なる公開鍵に対する複数のピンを指定することが出来ます。将来のブラウザーでは SHA-256 以外のハッシュアルゴリズムが許容されるかもしれません。証明書や鍵ファイルからこの情報を抽出する方法は次の項で説明します。
- `max-age`
  - : このサイトへのアクセス時に必要となる（唯一ピン留めされた）鍵について、この鍵をブラウザーが記憶するべき時間を指定します。この値は秒単位で表現します。
- `includeSubDomains` {{optional_inline}}
  - : このパラメータは省略可能です。サイトにおけるすべてのサブドメインにもこのルールが適用されます。
- `report-uri` {{optional_inline}}
  - : このパラメータは省略可能です。ピンの検証に失敗した際に、失敗した旨を報告する URL を指定します。

> [!NOTE]
> 現在の仕様では、本番系で運用されていないバックアップ用の第 2 のピンを指定することが必須になっています。これにより、既にピンを持っているクライアントからのアクセス性を損なうことなく、サーバの公開鍵を変更することが可能になります。例えば、本番系の鍵が危殆化したときなどに重要となります。

### Base64 エンコードされた公開鍵情報を抽出するには

> [!NOTE]
> 以下の例ではサーバ証明書をピン留めする方法を説明していますが、証明書の更新やローテーションを容易にするため、サーバ証明書を発行した CA の中間証明書もピン留めすることを推奨します。

まずは証明書や鍵ファイルから公開鍵情報を抽出し、それを Base64 でエンコードする必要があります。

次に示す便利なコマンドで、鍵ファイルや証明書署名要求 (CSR)、または証明書から Base64 エンコードされた情報を抽出できます。

```
openssl rsa -in my-rsa-key-file.key -outform der -pubout | openssl dgst -sha256 -binary | openssl enc -base64
```

```
openssl ec -in my-ecc-key-file.key -outform der -pubout | openssl dgst -sha256 -binary | openssl enc -base64
```

```
openssl req -in my-signing-request.csr -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64
```

```
openssl x509 -in my-certificate.crt -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64
```

以下のコマンドを用いると、ウェブサイト向けに情報を抽出することができます。

```
openssl s_client -servername www.example.com -connect www.example.com:443 | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64
```

### HPKP ヘッダーの例

```
Public-Key-Pins:
  pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs=";
  pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE=";
  max-age=5184000; includeSubDomains;
  report-uri="https://www.example.org/hpkp-report"
```

この例では、 **pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="** で本番系で使用されるサーバーの公開鍵をピン止めします。２番目のピン宣言である **pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE="** も、バックアップキーをピン止めします。 **max-age=5184000** はクライアントにこの情報を２か月間保存するように伝え、これは IETF RFC によれば合理的な期間です。このキーのピン止めは、 **includeSubDomains** 宣言で指示されているように、すべてのサブドメインでも有効です。最後に、 **report-uri="https\://www\.example.net/hpkp-report"** はピンの検証の失敗を報告する場所を説明します。

### Report-Only ヘッダー

{{HTTPHeader("Public-Key-Pins")}} ヘッダーを用いる代わりに、 {{HTTPHeader("Public-Key-Pins-Report-Only")}} ヘッダーを利用することも可能です。このヘッダーを用いた場合、ピン留めの認証に失敗した場合でも指定した report-uri にレポートが送信されるのみで、ブラウザーがウェブサーバーへ接続することは可能となります。

### HPKP ヘッダーを送信するためのウェブサーバーの設定

HPKP ヘッダーを送信するのに必要な具体的な手順はウェブサーバーによって異なります。

> [!NOTE]
> 以下の例では、2 か月間の max-age と includeSubDomains を指定しています。自身のサーバに合った適切な設定をしてください。

> [!WARNING]
> HPKP の設定を間違えると、ユーザーが長期間接続できなくなってしまう可能性があります！バックアップの証明書を用意したり、CA の証明書をピン留めすることを推奨します。

#### Apache

次のような行をウェブサーバーの config に追加すると Apache で HPKP が有効になります。 `mod_headers` モジュールがインストールされている必要があります。

```
Header always set Public-Key-Pins "pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; max-age=5184000; includeSubDomains"
```

#### Nginx

次のような行を追加し、適切な `pin-sha256="..."` の値を設定すると nginx で HPKP が有効になります。 `ngx_http_headers_module` がインストールされている必要があります。

```
add_header Public-Key-Pins 'pin-sha256="base64+primary=="; pin-sha256="base64+backup=="; max-age=5184000; includeSubDomains' always;
```

#### Lighttpd

鍵に関する次のような情報 (pin-sha256="..." フィールド) を含む行を追加すると、 lighttpd で HPKP が有効になります。

```
setenv.add-response-header  = ( "Public-Key-Pins" => "pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; max-age=5184000; includeSubDomains")
```

**注:** 以下のように server.module で `mod_setenv` をあらかじめ読み込んでおく必要があります。

```
server.modules += ( "mod_setenv" )
```

#### IIS

IIS から `Public-Key-Pins` ヘッダーを送信するには、以下のような数行を Web.config ファイルに追加してください。

```xml
<system.webServer>
  ...

  <httpProtocol>
    <customHeaders>
      <add name="Public-Key-Pins" value="pin-sha256=&quot;base64+primary==&quot;; pin-sha256=&quot;base64+backup==&quot;; max-age=5184000; includeSubDomains" />
    </customHeaders>
  </httpProtocol>

  ...
</system.webServer>
```

## 仕様書

| 仕様書                                                   | 題名                                  |
| -------------------------------------------------------- | ------------------------------------- |
| {{RFC("7469", "Public-Key-Pins", "2.1")}} | Public Key Pinning Extension for HTTP |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Public-Key-Pins")}}
- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
- Browser test site: [HSTS and HPKP test](https://projects.dm.id.lv/Public-Key-Pins_test)
- {{HTTPHeader("Expect-CT")}}
