---
title: サブリソース完全性
slug: Web/Security/Defenses/Subresource_Integrity
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

**サブリソース完全性** (Subresource Integrity, SRI) は、（[CDN](/ja/docs/Glossary/CDN) などから）取得したリソースが意図せず改ざんされていないかをブラウザーが検証するセキュリティ機能です。 SRI を利用する際には、取得したリソースのハッシュ値と一致すべきハッシュ値を指定します。

> [!NOTE]
> サブリソース完全性の検証において、サブリソースが埋め込まれる文書のオリジン以外から提供されたリソースについては、ブラウザーは[オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS) を使用してリソースに追加のチェックを行い、オリジンがリソースがリクエストしたオリジンに共有されることを許可しているかどうかを確認します。

## サブリソース完全性の必要性

複数のサイトで使われるスクリプトやスタイルシートなどのファイルを{{glossary("CDN", "コンテンツ配信ネットワーク (CDN)")}} にホストすることにより、読み込みに必要な時間や通信帯域を減らすことができます。例えば、 `https://example.com` から提供される文書内のリソースには、別の場所から取得したリソースを入れることができます。

```html
<script src="https://not-example.com/script.js"></script>
```

これはリスクにもなり得ます。仮に攻撃者が CDN を掌握できれば、攻撃者は CDN 上のファイルに悪意あるコンテンツを挿入することにより（あるいは完全に置き換えることにより）、その CDN からファイルを読み込む全てのサイトを攻撃対象とすることができます。

サブリソース完全性は、ウェブアプリケーションやウェブ文書が (CDN など任意の場所から) 取得したファイルについて、第三者によってファイルの中に別のものが挿入されていないか、そして、それらのファイルに対してその他の改ざんが行われていないかを検証することにより、先程のような攻撃のリスクを軽減します。

## サブリソース完全性の使い方

サブリソース完全性の機能は、ブラウザーが取得するリソース (ファイル) のハッシュ値を base64 エンコードし、その値を {{HTMLElement("script")}} 要素や、 [`rel="stylesheet"`](/ja/docs/Web/HTML/Reference/Attributes/rel#stylesheet)、[`rel="preload"`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload)、[`rel="modulepreload"`](/ja/docs/Web/HTML/Reference/Attributes/rel/modulepreload) のついた {{HTMLElement("link")}} 要素の `integrity` 属性に指定することによって使用します。

`integrity` 属性の値は、ハッシュアルゴリズムを示す接頭辞 (現在利用できる接頭辞は `sha256`, `sha384`, `sha512` です) と、 base64 でエンコードされたハッシュ値をダッシュで繋いだ文字列です。

> [!NOTE]
> `integrity` 属性値には、ホワイトスペースで区切って複数のハッシュ値を含めることができます。リソースはこれらのハッシュ値のいずれかに一致した場合に読み込まれます。

base64 でエンコードされた sha384 ハッシュを含む `integrity` 文字列の例

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

従って、 `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` がハッシュ値の部分であり、接頭辞の `sha384` が sha384 ハッシュであることを示します。

> [!NOTE]
> 厳密に言うと、 `integrity` 属性値におけるハッシュ値の部分は、あるハッシュ関数にデータを入力（スクリプトやスタイルシートファイル）して生成された**暗号学的ダイジェスト値**です。しかし、一般的には短く「ハッシュ」と言えば暗号学的ダイジェスト値を意味するので、本記事でもそのように呼んでいます。

### SRI ハッシュを生成するツール

#### SRI ハッシュジェネレーター

[SRI ハッシュジェネレーター](https://srihash.org/)は、 SRI ハッシュを生成することができるオンラインツールです。

#### OpenSSL の使用

**OpenSSL** を使用して、次のようなコマンドを呼び出すことで、コマンドラインから SRI ハッシュを生成することができます。

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

Windows 環境では、次のコードで SRI ハッシュを生成するツールを作成することができます。

```batch
@echo off
set bits=384
openssl dgst -sha%bits% -binary %1% | openssl base64 -A > tmp
set /p a= < tmp
del tmp
echo sha%bits%-%a%
pause
```

このコードを使用するには、次のようにしてください。

1. こののコードを、 `sri-hash.bat` という名前で、自分の環境の Windows の「送る」フォルダー内（例えば、 `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`）に保存してください。
2. ファイルエクスプローラーでファイルを右クリックし、**送る**を選択してから `sri-hash` を選択します。コマンドボックスに完全性の値が表示されます。
3. 完全性の値を選択し、右クリックしてクリップボードにコピーします。
4. 任意のキーを押し、コマンドボックスを閉じます。

> [!NOTE]
> OpenSSL がシステムにインストールされていない場合は、 [OpenSSL プロジェクトのウェブサイト](https://www.openssl.org/)で、ダウンロードおよびインストールに関する情報を確認してください。 OpenSSL プロジェクトは、 OpenSSL のバイナリーを配布していませんが、サードパーティーの配布に関する非公式なリストを https://github.com/openssl/openssl/wiki/Binaries で管理しています。

#### shasum の使用

SRI ハッシュの生成は、 [**shasum**](https://linux.die.net/man/1/shasum) を次のように呼び出すことで使用することもできます。

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- パイプで `xxd` を通る過程で、 `shasum` からの出力を取り、バイナリーへ変換します。
- パイプで `awk` を通る過程は、 `shasum` がハッシュ化されたファイル名を `xxd` へ渡すために必要です。ファイル名が有効な 16 進数の文字を持っている場合に有害な影響を与える可能性があるからです。 `xxd` はそれを復号して、 `base64` に渡す可能性があるからです。

### オリジン間リソース共有とサブリソース完全性

サブリソース完全性の検証において、サブリソースが埋め込まれる文書のオリジン以外から提供されたリソースについては、ブラウザーは[オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS) を使用してリソースに追加のチェックを行い、オリジンがリソースがリクエストしたオリジンに共有されることを許可しているかどうかを確認します。従って、次の例のように、リソースが要求されたオリジンに共有できるよう [`Access-Control-Allow-Origin`](/ja/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) ヘッダーを付けて提供する必要があります。

```http
Access-Control-Allow-Origin: *
```

## ブラウザーがサブリソース完全性を扱う方法

ブラウザーは SRI を次の方法で扱います。

1. ブラウザーが {{HTMLElement("script")}} 要素または {{HTMLElement("link")}} 要素に `integrity` 属性を検出すると、スクリプトの実行前、または {{HTMLElement("link")}} 要素で指定されたスタイルシートの適用前に、ブラウザーはまずそのスクリプトまたはスタイルシートを `integrity` 値で指定された期待されるハッシュと比較しなければなりません。

   埋め込まれた文書以外から提供されるリソースのサブリソース完全性の検証において、ブラウザーは追加で[オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS) を用いてリソースを確認し、そのリソースを配信するオリジンがリクエスト元オリジンとの共有をすることができることを保証します。

2. スクリプトまたはスタイルシートが関連付けられた `integrity` 値と一致しない場合、ブラウザーは当該スクリプトの実行またはスタイルシートの適用を拒否し、代わりにそのスクリプトまたはスタイルシートの取得に失敗したことを示すネットワークエラーを返さなければなりません。

## 完全性ポリシー

HTTP の {{httpheader("Integrity-Policy")}} ヘッダーおよび {{httpheader("Integrity-Policy-Report-Only")}} ヘッダーを使用することで、文書は読み込まれたスクリプトおよびスタイルシートのサブリソースに対する完全性メタデータ要件に関するポリシーを強制することができるようになります。

`Integrity-Policy` ヘッダーが指定されている場合、ブラウザーは [no-cors](/ja/docs/Web/API/Request/mode#no-cors) モードのリクエストや `integrity` 属性が指定されていないリクエストをブロックします。また、有効な報告用エンドポイントが指定されている場合、同時に違反を報告します。
`Integrity-Policy-Report-Only` ヘッダーが指定されている場合、ブラウザーはポリシーに違反するリクエストをすることができるのですが、違反を報告エンドポイントに報告します（有効な報告エンドポイントが指定されている場合）。

開発者は通常、完全性ポリシー導入の第一段階として `Integrity-Policy-Report-Only` を使用し、文書内に読み込まれるすべてのスクリプトやスタイルシートが適切な完全性メタデータを確実に持つようにします。違反レポートが受信されなくなれば、ユーザーに表示される不具合のリスクなしに `Integrity-Policy` ヘッダーを使用したブロックを有効化できると判断できます。

ヘッダー値は、次のキーを備えた構造化フィールド辞書として定義されます。

- `blocked-destinations`
  - : ブロックする[リクエスト出力先](/ja/docs/Web/API/Request/destination)の一覧を定義します。許可される値は `script` と `style` のみです。
- `sources` {{optional_inline}}
  - : 完全性ソースのリストを定義します。デフォルトかつ現在対応している唯一の値は `inline` です。したがって、ヘッダーに `sources=(inline)` を追加しても、`sources` を除外した場合と同様の効果があります。
- `endpoints` {{optional_inline}}
  - : [報告エンドポイント](/ja/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint) のリストを定義します。報告エンドポイントは {{httpheader("Reporting-Endpoints")}} ヘッダー内で定義する必要があります。

完全性ポリシーによってリクエストがブロックされた場合、[報告 API](/ja/docs/Web/API/Reporting_API) の違反レポートが作成されます。このレポートの型は `integrity-violation`、本体は {{domxref("IntegrityViolationReportBody")}} 型となり、文書の URL やブロックされたリソースなどの情報が含まれます。

典型的なレポートは同様に次のようなものになるでしょう。

```json
{
  "type": "integrity-violation",
  "url": "https://example.com",
  "body": {
    "documentURL": "https://example.com",
    "blockedURL": "https://example.com/main.js",
    "destination": "script",
    "reportOnly": false
  }
}
```

## 例

以下の例では、 `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` が特定のスクリプト `example-framework.js` の期待される SHA-384 ハッシュ値としてすでに知られており、スクリプトのコピーが `https://example.com/example-framework.js` にホストされているものとします。

### \<script> 要素のサブリソース完全性

次の {{HTMLElement("script")}} 要素により、ブラウザーが `https://example.com/example-framework.js` を実行する前に、まず想定されるハッシュ値とスクリプトのハッシュ値が一致することをブラウザーに確認させることができます。

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> `crossorigin` 属性については [CORS 設定属性](/ja/docs/Web/HTML/Reference/Attributes/crossorigin)を参照してください。

### `Integrity-Policy`ヘッダーによる完全性の強制

文書に {{httpheader("Integrity-Policy")}} ヘッダーを追加することで、文書が読み込む外部リソース（この場合はスクリプト）が完全性をもって読み込まれ（[no-cors](/ja/docs/Web/API/Request/mode#no-cors) モードで読み込まれないこと）を保証できます。

```http
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

すべての外部スクリプトに完全性メタデータを持つかどうか不明な場合、この機能のレポート専用バージョンを有効化し、違反レポートを取得することができます。
{{httpheader("Integrity-Policy-Report-Only")}} ヘッダーを使用してこれを実現することができます。

```http
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)
- HTTP の {{httpheader("Content-Security-Policy")}} ヘッダー
- [A CDN that can not XSS you: Using Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://www.srihash.org/)
