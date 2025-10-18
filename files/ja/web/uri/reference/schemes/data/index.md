---
title: "data: URL"
short-title: "data:"
slug: Web/URI/Reference/Schemes/data
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

**data URL** は `data:` スキームが先頭についた URL で、小さなファイルをインラインで文書に埋め込むことができます。以前、 WHATWG で取り下げられるまでは "data URIs" と呼ばれていました。

> [!NOTE]
> 最近のブラウザーでは、データ URL はナビゲーションを担当する設定オブジェクトのオリジンを継承するのではなく、一意の不透明なオリジンとして扱われます。

## 構文

```url
data:[<media-type>][;base64],<data>
```

- `data:`
  - : この URL のスキームです。
- `<media-type>` {{optional_inline}}
  - : JPEG 画像ファイルの場合は image/jpeg など、データの型を示す [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types)。省略した場合は、既定で `text/plain;charset=US-ASCII` になります。 [MIME タイプの構造の詳細な解説](/ja/docs/Web/HTTP/Guides/MIME_types)と、[ウェブ上の一般的な MIME タイプの表](/ja/docs/Web/HTTP/Guides/MIME_types/Common_types)を確認できます。
- `;base64` {{optional_inline}}
  - : データが base64 デコードされるべきであることを示します。[データの base64 形式へのエンコード](#データの_base64_形式へのエンコード)を参照してください。
- `<data>`
  - : データ自体。データに [RFC 3986 で予約文字として定義されている文字](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2) が含まれている場合、または空白文字、改行文字、その他の非印刷文字が含まれている場合、それらの文字は{{Glossary("Percent-encoding", "パーセントエンコーディング")}}でエンコードする必要があります。データがテキストの場合は、そのテキストを埋め込むことができます（囲んでいる文書の型に応じて、適切なエンティティまたはエスケープを使用してください）。それ以外の場合は、 `base64` を指定して、base64 エンコードされたバイナリーデータを埋め込むことができます。

例:

- `data:,Hello%2C%20World%21`
  - : text/plain データで `Hello, World!` です。なお、カンマは{{Glossary("Percent-encoding", "パーセントエンコード")}}で `%2C`となり、空白は `%20` となります。
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : 同じ内容の base64 エンコード版
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : HTML 文書で `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : HTML 文書で `<script>alert('hi');</script>` であり、JavaScript のアラートを実行する HTML 文書。終了タグが必要ですので注意してください。

## データの base64 形式へのエンコード

Base64 は、バイナリーからテキストへエンコードする方式の総称で、バイナリーデータを {{Glossary("ASCII")}} 文字列形式へ、64 進表現に変換することで表します。URL 構文で許可されている文字（「URL セーフ」）のみで構成されているため、データ URL にバイナリーデータを安全にエンコードすることができます。Base64 は、URL で特別な意味を持つ可能性のある文字 `+` と `/` を使用することができます。データ URL には URL パス区間やクエリー引数がないため、このコンテキストではこのエンコード方式は安全です。

### JavaScript でのエンコード

Web API には、 base64 をエンコードまたはデコードするためのネイティブメソッド、 [Base64](/ja/docs/Glossary/Base64) があります。

### Unix システムでのエンコード

Linux や macOS システムでのファイルまたは文字列の Base64 エンコードは、コマンドラインの `base64` （または、他にも `uuencode` ユーティリティの `-m` オプションつき）を使用して実現できます。

```bash
echo -n hello|base64
# コンソールへの出力: aGVsbG8=

echo -n hello>a.txt
base64 a.txt
# コンソールへの出力: aGVsbG8=

base64 a.txt>b.txt
# b.txt ファイルへの出力: aGVsbG8=
```

### Microsoft Windows でのエンコード

Windows では、 [Convert.ToBase64String](https://learn.microsoft.com/ja-jp/dotnet/api/system.convert.tobase64string?view=net-5.0) を PowerShell で使用することで Base64 エンコードを行うことができます。

```plain
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# outputs to console: aGVsbG8=
```

他にも、 GNU/Linux シェル ([WSL](https://ja.wikipedia.org/wiki/Windows_Subsystem_for_Linux) など) が `base64` ユーティリティを提供しています。

```bash
bash$ echo -n hello | base64
# outputs to console: aGVsbG8=
```

## よくある問題

この章では `data` の URL を作ったり使ったりするときに、よく起こる問題について述べます。

```plain
data:text/html,lots of text…<p><a name%3D"bottom">bottom</a>?arg=val</p>
```

これは次の内容の HTML リソースを表します。

```html
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

- 構文
  - : `data` URL の書式は非常に単純ですが、"データ" 部分の前にカンマを置くのを忘れがちです。忘れるとデータが正しく base64 形式にエンコードされません。
- HTML におけるフォーマット
  - : `data` はファイル内でファイルを提供しますが、外側の文書に比べて幅がとても広くなる可能性があります。 URL としては、 `data` はホワイトスペース (改行、タブ、空白) で体裁を整えることができるはずですが、 [base64 エンコードをすると起こる問題](https://bugzil.la/73026#c12) があります。
- 長さの制限
  - : ブラウザーは特定の最大長のデータに対応する必要はありません。
    Chromium と Firefox では `data` URL は 512MB に制限されており、 Safari (WebKit) は 2048MB に制限されています。
    なお、 Firefox 97 では制限が 256KB から 32MB へ拡大され、 [Firefox 136 ではさらに 512MB に拡大されました](/ja/docs/Mozilla/Firefox/Releases/136)。
- エラー処理の欠如
  - : メディア内の不正な引数や、 `'base64'` の定義内の打ち間違いは無視され、何もエラーは出ません。
- クエリー文字列のサポートの欠如、など
  - : データ URL のデータ部分は不透明 (opaque) なので、データ URL と一緒にクエリー文字列 (`<url>?parameter-data` という構文で表されるページ固有の引数) を使うと、データ URL が表現するデータに単にクエリー文字列が含まれたものになります。
- セキュリティの課題
  - : 多数のセキュリティ問題 (フィッシングなど) がデータ URL に関連付けられており、ブラウザーの最上位でそれらに移動しています。このような問題を軽減するために、最近のすべてのブラウザーでは `data:` URL へのトップレベルのナビゲーションがブロックされています。詳細については、 [Mozilla Security Team のブログ投稿](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{Glossary("Base64")}}
- {{Glossary("Percent-encoding", "パーセントエンコーディング")}}
- {{domxref("WorkerGlobalScope.atob()", "atob()")}}
- {{domxref("WorkerGlobalScope.btoa()", "btoa()")}}
- CSS の {{CSSXref("url_value", "&lt;url&gt;")}}
- {{Glossary("URI")}}
