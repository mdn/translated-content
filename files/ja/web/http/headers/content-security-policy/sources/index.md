---
title: CSP ソース値
slug: Web/HTTP/Headers/Content-Security-Policy/Sources
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) ヘッダーディレクティブで、リソースを読み込むための `<source>` を指定する場合、以下の一覧のいずれかを使用することができます。
関連するディレクティブには{{Glossary("fetch directive", "フェッチディレクティブ")}}や、その他の[以下の一覧](#関連ディレクティブ)にあるものがあります。

## ソース

- `<host-source>`

  - : ホスト名または IP アドレスによるインターネットホストで、任意で [URL スキーム](/ja/docs/Learn/Common_questions/What_is_a_URL)やポート番号を付けることができます。サイトのアドレスはワイルドカード (アスタリスク文字、`'*'`) で始めることができ、更にポート番号にワイルドカード (`'*'`) を使ってすべての有効なポート番号をソースとして示すことができます。
    例:

    - `http://*.example.com`: `http:` のスキームを使用した、 example.com のすべてのサブドメインからのすべての読み込みの試行に一致します。
    - `mail.example.com:443`: mail.example.com の 443 番ポートへのアクセスの試行に一致します。
    - `https://store.example.com`: `https:` を使用した store.example.com へのアクセスの試行に一致します。
    - `*.example.com`: 現在のプロトコルを使用した example.com のすべてのサブドメインからの読み込みのすべての試行に一致します。

- `<scheme-source>`

  - : `http:` または `https:` のようなスキームです。
    コロンは必要です。
    以下の他の値とは異なり、単一引用符は使用しないでください。
    data スキームも指定することができます (非推奨)。

    - `data:` コンテンツのソースとして [`data:` URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) が使えるようにします。
      _これは安全ではありません。攻撃者は任意の data: URI を挿入することもできます。使用は控え、スクリプトには絶対に使用しないでください。_
    - `mediastream:` コンテンツのソースとして [`mediastream:` URI](/ja/docs/Web/API/Media_Streams_API) が使えるようにします。
    - `blob:` コンテンツのソースとして [`blob:` URI](/ja/docs/Web/API/Blob) が使えるようにします。
    - `filesystem:` コンテンツのソースとして [`filesystem:` URI](/ja/docs/Web/API/FileSystem) が使えるようにします。

- `'self'`
  - : 保護された文書が提供されたオリジンを、同じ URL スキームおよびポート番号で参照します。
    単一引用符が必要です。ブラウザーによっては独自にソースディレクティブから `blob` および `filesystem` を除外していることがあります。
    これらのコンテンツ種別を許可する必要があるサイトは、Data 属性を使用して指定することができます。
- `'unsafe-eval'`
  - : 文字列からコードを生成する `eval()` および同様のメソッドの利用を許可します。
    単一引用符が必要です。
- `'unsafe-hashes'`
  - : 特定のインラインの[イベントハンドラー](/ja/docs/Web/Events/Event_handlers)を許可します。
    インラインイベントハンドラーを許可したいが、インラインの {{HTMLElement("script")}} 要素や `javascript:` URL は不要な場合、これは `unsafe-inline` を使うよりも安全な方法です。
- `'unsafe-inline'`
  - : インラインの {{HTMLElement("script")}} 要素、`javascript:` の URL、インラインイベントハンドラー、インライン {{HTMLElement("style")}} 要素のような、インラインリソースの使用を許可します。
    単一引用符が必要です。
- `'none'`
  - : 空のセットを参照します。つまり、一致する URL はありません。
    単一引用符が必要です。
- `'nonce-<base64-value>'`

  - : 暗号化ノンス (一度だけ使われる数値) を使用する特定のインラインスクリプトのための許可リストです。
    サーバーはポリシーを転送するたびに固有のノンスを生成する必要があります。
    リソースのポリシーを回避することを難しくするため、推測できないノンスを提供することが重要です。
    例えば[安全でないインラインスクリプト](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script)を参照してください。
    ノンスを指定すると、最近のブラウザーは、ノンスの対応がない古いブラウザーのために設定されている可能性がある `'unsafe-inline'` を無視するようになります。

    > **メモ:** CSP の `nonce` ソースは _ノンス指定可能_ な要素にのみ適用できます（例えば {{HTMLElement("img")}} 要素には `nonce` 属性がないので、この CSP ソースに関連付ける方法はありません）。

- `'<hash-algorithm>-<base64-value>'`
  - : スクリプトまたはスタイルの sha256, sha384, sha512 の何れかのハッシュです。このソースは、ハッシュを生成するために使用する暗号化アルゴリズムと、スクリプトまたはスタイルのハッシュを base64 でエンコードしたものの二つの部分をダッシュで区切ったもので構成されます。ハッシュを生成するときは、 \<script> または \<style> タグを含めないようにし、大文字・小文字の区別と、ホワイトスペースの扱い（先頭や末尾のホワイトスペースを含む）に注意してください。
    例えば[安全でないインラインスクリプト](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script)を参照してください。
    CSP 2.0 では、これはインラインスクリプトにのみ適用されます。CSP 3.0 では、外部スクリプトの `script-src` の場合にも適用されます。
- `'strict-dynamic'`
  - : `strict-dynamic` ソース式は、ノンスやハッシュを付加して、それらがルートスクリプトに読み込まれるすべてのスクリプトに伝搬することで、マークアップ内のスクリプトに明示的な信用を指定します。
    それと同時に、`'self'` や `'unsafe-inline'` といった、あらゆる許可リストやソース式が無視されます。
    [script-src](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) の例を参照してください。
- `'report-sample'`
  - : 違反レポートに入れる違反コードのサンプルを要求します。

## 関連ディレクティブ

上記のソースが適用されるディレクティブは以下の通りです。

- {{Glossary("fetch directive", "フェッチディレクティブ")}} （すべて）:

  - {{CSP("default-src")}}
  - {{CSP("child-src")}}
  - {{CSP("connect-src")}}
  - {{CSP("font-src")}}
  - {{CSP("frame-src")}}
  - {{CSP("img-src")}}
  - {{CSP("manifest-src")}}
  - {{CSP("media-src")}}
  - {{CSP("object-src")}}
  - {{CSP("prefetch-src")}}
  - {{CSP("script-src")}}
  - {{CSP("script-src-elem")}}
  - {{CSP("script-src-attr")}}
  - {{CSP("style-src")}}, {{CSP("style-src-elem")}}
  - {{CSP("style-src-attr")}}
  - {{CSP("worker-src")}}

- {{Glossary("Document directive", "文書ディレクティブ")}}:
  - {{CSP("base-uri")}}

- {{Glossary("Navigation directive", "ナビゲーションディレクティブ")}}:

  - {{CSP("navigate-to")}}
  - {{CSP("form-action")}}
