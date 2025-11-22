---
title: 圧縮辞書転送
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: e68897ffba66e4bdaffaa5c0a6f6497b6780b1cf
---

{{SeeCompatTable}}

**圧縮辞書転送**は、共有の圧縮辞書を使用して HTTP レスポンスの転送サイズを大幅に縮小する方法です。

## 概要

圧縮アルゴリズムは、ネットワーク経由でダウンロードされるリソースのサイズを縮小し、帯域幅のコストとページの読み込みにかかる時間を短縮するために、HTTP で使用されています。可逆圧縮 HTTP 圧縮アルゴリズムは、ソース内の冗長性、例えば文字列 `"function"` のようなテキストが繰り返されている場所を見つけることで機能します。そして、冗長な文字列のコピーを 1 つだけ記載し、リソース内のその文字列の出現箇所をそのコピーへの参照に置き換えます。参照は文字列よりも短いので、圧縮されたバージョンは短くなります。

> [!NOTE]
> この技術に対する以前の試みは SDCH (Shared Dictionary Compression for HTTP) と呼ばれていましたが、広く対応されることはなく、2017 年に除去されました。圧縮辞書転送は、より広く業界で合意された、よりよく定義され、より堅牢な実装です。

例えば、この JavaScript を考えてみましょう。

```js
function a() {
  console.log("Hello World!");
}

function b() {
  console.log("I am here");
}
```

これは、繰り返し出現する文字列を、以前出現した位置と文字数への参照に置き換えることで圧縮できます。

```plain
function a() {
  console.log("Hello World!");
}

[0:9]b[10:20]I am here[42:46]
```

この例では、`[0:9]` は、文字 0 から始まる 9 文字をコピーすることを参照しています。これは概念を説明するための簡略化した例であり、実際のアルゴリズムはこれよりも複雑であることに注意してください。

クライアントは、ダウンロード後に圧縮を解除して、元の圧縮されていないリソースを復元することができます。

### 圧縮辞書

{{glossary("Brotli compression")}} や {{glossary("Zstandard compression")}} などのアルゴリズムは、よく使用される文字列の辞書を使用することでさらに効率を高めているため、圧縮リソースにそれらのコピーを用意する必要はありません。これらのアルゴリズムには、 HTTP レスポンスの圧縮に使用される、あらかじめ定義された既定の辞書が付属しています。

圧縮辞書転送は、これに基づいて、特定のリソースセットに特に適用できる辞書を自分自身で提供できるようにします。これにより、圧縮アルゴリズムは、リソースの圧縮および解凍時に、その辞書をバイトのソースとして参照することができます。

前回の例からの参照が共通辞書に含まれていると想定すると、これはさらに次のように縮小することができます。

```plain
[d0:9]a[d10:20]Hello World![d42:46]
[d0:9]b[d10:20]I am here[d42:46]
```

辞書は、圧縮辞書転送にのみ要求される別個のリソースでも、ウェブサイトにとにかく必要なリソースでもかまいません。

例えば、ウェブサイトで JavaScript ライブラリーを使用しているとします。通常、ライブラリーの特定のバージョンを読み込み、`<script src="my-library.v1.js">` のように、ライブラリーの名前の中にバージョン名を含めるでしょう。ブラウザーがページを読み込むと、ライブラリーのコピーがサブリソースとして読み取られます。

その後、ライブラリーを v2 に更新しても、ライブラリーのコードのほとんどは変更されていないでしょう。そのため、ブラウザーに `my-library.v2.js` の圧縮辞書として `my-library.v1.js` を使用するように指示することで、`my-library.v2.js` のダウンロードサイズを大幅に縮小することができます。そうすれば、v1 と v2 で共通するすべての文字列は、ブラウザーがすでにそれらを持っているため、v2 のダウンロードに含める必要がなくなります。その結果、`my-library.v2.js` のダウンロードサイズのほとんどは、2 つのバージョンの差分だけになります。

圧縮辞書転送は、既定の組み込み辞書を使用した圧縮よりも、桁違いの圧縮率を実現できます。実際の結果については、[圧縮辞書転送の例](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) をご覧ください。

## 辞書の書式

圧縮辞書は、特定の書式に従ったり、特定の {{Glossary("MIME type", "MIME タイプ")}}を保有したりすることはありません。これらは、同様のコンテンツを持つ他のファイルの圧縮に使用できる通常のファイルです。

通常、ファイルの以前のバージョンには類似のコンテンツが多く含まれているため、優れた辞書として活用できます。
ファイルの以前のバージョンを辞書として使用することで、圧縮アルゴリズムは変更されていないコンテンツをすべて効率的に参照し、新しいバージョンにおける相対的に小さな違いだけを捕捉することができます。この手法は、デルタ圧縮と呼ばれています。

別の手法としては、よく使用される文字列（例えば HTML テンプレート）を新しい `dictionary.txt` ファイルにまとめて、ウェブサイト上の HTML ページを圧縮するために使用できるようにします。これをさらに最適化するには、例えば [Brotli の辞書ジェネレーター](https://github.com/google/brotli/blob/master/research/dictionary_generator.cc)などの専用ツールを使用します。このツールは、辞書のサイズを最小限に縮小し、重複を最小限に抑えます。

辞書は、バイナリー形式を効果的に圧縮するためにも使用できます。例えば、[WASM](/ja/docs/WebAssembly) バイナリーファイルは、デルタ圧縮の恩恵を受けることができる大きなリソースです。

## 既存のリソースを辞書として使用

リソースを辞書として使用するには、サーバーは、リソースを提供するレスポンスに {{HTTPHeader("Use-As-Dictionary")}} ヘッダーを含める必要があります。

```http
Use-As-Dictionary: match="/js/app.*.js"
```

このヘッダーの値は、このリソースを辞書として使用できるリソースを示します。この場合、指定された[パターン](/ja/docs/Web/API/URL_Pattern_API)と URL が一致するすべてのリソースが含まれます。

後で、指定されたパターン（例えば、`app.v2.js`）と一致するリソースがリクエストされた場合、リクエストには、利用可能な辞書の SHA-256 ハッシュが {{HTTPHeader("Available-Dictionary")}} ヘッダーに、 `dcb` や `dcz` の値が {{HTTPHeader("Accept-Encoding")}} ヘッダーに含まれます。（Brotli または ZStandard を適宜使用してデルタ圧縮を行う場合）。

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

サーバーは、 {{HTTPHeader("Content-Encoding")}} ヘッダーで指定されたコンテンツエンコード方式で、適切にエンコードされたレスポンスを返します。

```http
Content-Encoding: dcb
```

レスポンスがキャッシュ可能である場合、キャッシュが辞書圧縮されたリソースを、それをサポートしていないクライアントに配信したり、間違った辞書で圧縮されたレスポンスを配信したりすることを防ぐため、 {{HTTPHeader("Vary")}} ヘッダーを含める必要があります。

```http
Vary: accept-encoding, available-dictionary
```

オプションの `id` を {{HTTPHeader("Use-As-Dictionary")}} ヘッダーで指定することもできます。これにより、サーバーはハッシュで辞書ファイルを格納していない場合でも、辞書ファイルを簡単に見つけることができます。

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

これが指定された場合、その値は、今後のリクエストで {{HTTPHeader("Dictionary-ID")}} ヘッダーで送信されます。

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

サーバーは、 `Available-Dictionary` ヘッダーのハッシュを調べる必要があります。`Dictionary-ID` は、サーバーが辞書を識別するための追加情報であり、`Available-Dictionary` ヘッダーの代わりになるものではありません。

## 独立した辞書

HTML 文書は、ブラウザーが {{htmlelement("script")}} タグなどの要素を介してダウンロードするリソースではない圧縮辞書もブラウザーに提供することができます。これを行うには 2 つの方法があります。

- {{HTMLElement("link")}} 要素に [`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel) 属性を `compression-dictionary` にしたものを記述してください。

  ```html
  <link rel="compression-dictionary" href="/dictionary.dat" />
  ```

- {{HTTPHeader("Link")}} ヘッダーを使用して辞書を参照します。

  ```http
  Link: </dictionary.dat>; rel="compression-dictionary"
  ```

この辞書は、アイドル時間中にブラウザーによってダウンロードされ、そのレスポンスには {{HTTPHeader("Use-As-Dictionary")}} ヘッダーが記載されていなければなりません。

```http
Use-As-Dictionary: match="/js/app.*.js"
```

ここからは、一致するリソースがリクエストされた場合、前回の例と同様のプロセスになります。

## 辞書圧縮レスポンスの作成

辞書圧縮されたレスポンスは、 Brotli または ZStandard アルゴリズムのいずれかを使用することができますが、 2 つの追加要件があります。マジックヘッダーと埋め込み辞書ハッシュも記載する必要があります。

辞書圧縮されたリソースは動的に作成することができますが、静的リソースの場合は、ビルド時に事前に作成しておくほうがよいでしょう。以前のバージョンを辞書として使用する場合、これには、作成するデルタ圧縮バージョンの数を決定する必要があります。最後のバージョンのみ、あるいは X の値に応じた最後の X バージョン分などです。

名前付き辞書ファイル `dictionary.text` と、圧縮するファイル `data.text` が指定されている場合、次の Bash コマンドは Brotli を使用してファイルを圧縮し、`data.txt.dcb` という名前の圧縮ファイルを作成します。

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcb && \
brotli --stdout -D dictionary.txt data.txt >> data.txt.dcb
```

同じ入力ファイルが指定されている場合、次の Bash コマンドは ZStandard を使用してファイルを圧縮し、名前付き圧縮ファイル `data.txt.dcz` を作成します。

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionary.txt >> data.txt.dcz && \
zstd -D dictionary.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Brotli または ZStandard だけでなく、 {{glossary("OpenSSL")}} もローカルにインストールする必要があることにご注意ください。

## 制限

圧縮アルゴリズムはセキュリティ攻撃の危険性があるため、圧縮辞書転送には、次のような制限が数多くあります。

- 辞書は、辞書を使用するリソースと同じオリジンである必要があります。
- 辞書圧縮されたリソースは、文書のオリジンと同じオリジンであるか、 [CORS](/ja/docs/Web/HTTP/Guides/CORS) ルールに従う必要があり、したがって [`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) 属性でリクエストされ、適切な {{HTTPHeader("Access-Control-Allow-Origin")}} ヘッダーで提供されなければなりません。
- 辞書は通常の HTTP キャッシュの分割によってバインドされるため、同じリソースをダウンロードしても、その辞書はオリジン間で共有することはできません。辞書は、それぞれのオリジンについて再度ダウンロードする必要があります。

さらに、辞書自体が追跡の手がかりとなる可能性があるため、クッキーが無効になっている場合や、それ以外にも追加のプライバシー保護機能が有効になっている場合、ブラウザーがこの機能を制限する場合があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 用語集:
  - {{Glossary("Brotli compression", "Brotli 圧縮")}}
  - {{Glossary("Zstandard compression", "Zstandard 圧縮")}}
- [`<link rel="compression-dictionary">`](/ja/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Draft specification](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
- [Resources for Compression Dictionary Transport](https://use-as-dictionary.com/)
