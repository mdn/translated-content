---
title: サブリソース完全性
slug: Web/Security/Subresource_Integrity
l10n:
  sourceCommit: 8df009472bbc7f0fc8a69717e1493de02982ed66
---

{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}

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

[SRI ハッシュジェネレーター](https://www.srihash.org/)は、 SRI ハッシュを生成することができるオンラインツールです。

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
> OpenSSL がシステムにインストールされていない場合は、 [OpenSSL プロジェクトのウェブサイト](https://www.openssl.org/)で、ダウンロードおよびインストールに関する情報を確認してください。 OpenSSL プロジェクトは、 OpenSSL のバイナリーを配布していませんが、サードパーティーの配布に関する非公式なリストを https://wiki.openssl.org/index.php/Binaries で管理しています。

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

## サブリソース完全性のブラウザーでの扱い

ブラウザーは SRI を以下のように処理します。

1. ブラウザーは `integrity` 属性を持った {{HTMLElement("script")}} または {{HTMLElement("link")}} 属性を見つけると、スクリプトや {{HTMLElement("link")}} 属性で指定された任意のスタイルシートを適用する前に、`integrity` 属性のハッシュ値とスクリプトやスタイルシートのハッシュ値を比較しなくてはなりません。

   サブリソース完全性の検証において、サブリソースが埋め込まれる文書のオリジン以外から提供されたリソースについては、ブラウザーは[オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS) を使用してリソースに追加のチェックを行い、オリジンがリソースがリクエストしたオリジンに共有されることを許可しているかどうかを確認します。

2. スクリプトやスタイルシートが対応する `integrity` 属性値と一致しない場合、ブラウザーはスクリプトを実行したりスタイルシートを適用してはいけません。その代わりに、スクリプトやスタイルシートの取得が失敗したというネットワークエラーを返さなくてはなりません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)
- HTTP の {{httpheader("Content-Security-Policy")}} ヘッダー
- [A CDN that can not XSS you: Using Subresource Integrity](https://frederikbraun.de/using-subresource-integrity.html)
- [SRI Hash Generator](https://www.srihash.org/)
