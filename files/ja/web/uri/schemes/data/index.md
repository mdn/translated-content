---
title: データ URL
slug: Web/URI/Schemes/data
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/ja/docs/Web/URI")}}

**データ URL** は `data:` スキームが先頭についた URL で、小さなファイルをインラインで文書に埋め込むことができます。以前、 WHATWG で取り下げられるまでは「データ URI」と呼ばれていました。

> [!NOTE]
> 最近のブラウザーでは、データ URL はナビゲーションを担当する設定オブジェクトのオリジンを継承するのではなく、一意の不透明なオリジンとして扱われます。

## 構文

データ URL は接頭辞 (`data:`)、データの種類を示す [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)、テキストではないデータである場合のオプションである `base64` トークン、データ自体の 4 つの部品で構成されます。

```plain
data:[<mediatype>][;base64],<data>
```

`mediatype` は [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)で, 例えば `'image/jpeg'` で JPEG 画像を表します。省略時の既定値は `text/plain;charset=US-ASCII` です。

データに [RFC 3986 で予約文字として定義されている文字](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2)が含まれている場合、または空白文字、改行文字、その他の出力されない文字が含まれている場合は、それらの文字は{{Glossary("Percent-encoding", "パーセントエンコード")}}でエンコードする必要があります。

データが文字ならば、そのまま埋め込めます (埋め込む文書タイプに応じて、適切な実体参照やエスケープを行なってください)。それ以外では `base64` を指定し、 base64 エンコードしたバイナリーデータを埋め込みます。 MIME タイプについての詳しい情報は[こちら](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)や[こちら](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)にあります。

例:

- `data:,Hello%2C%20World%21`
  - : text/plain データで `Hello, World!` です。なお、カンマは{{Glossary("Percent-encoding", "パーセントエンコード")}}で `%2C`となり、スペースは `%20` となります。
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : 同じ内容の base64 エンコード版
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : HTML 文書で `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : HTML 文書で `<script>alert('hi');</script>` であり、JavaScript のアラートを実行する HTML 文書。終了タグが必要ですので注意してください。

## データの base64 形式へのエンコード

Base64 は、バイナリーからテキストへエンコードする方式の総称で、バイナリーデータを {{Glossary("ASCII")}} 文字列形式へ、64 進表現に変換することで表します。URL 構文で許可されている文字（「URL セーフ」）のみで構成されているため、データ URL にバイナリーデータを安全にエンコードすることができます。Base64 は、URL で特別な意味を持つ可能性のある文字 `+` と `/` を使用することができます。データ URL には URL パス区間やクエリー引数がないため、このコンテキストではこのエンコード方式は安全です。

### Javascript でのエンコード

Web API には、 Base64 をエンコードまたはデコードするためのネイティブメソッド、 [Base64](/ja/docs/Glossary/Base64) があります。

### Unix システムでのエンコード

Linux や Mac OS X システムでのファイルまたは文字列の Base64 エンコードは、コマンドラインの `base64` (または、他にも `uuencode` ユーティリティの `-m` オプションつき) を使用して実現できます。

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

```html
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
  - : ブラウザーは特定の最大長のデータに対応する必要はありません。たとえば、 Opera 11 ブラウザーでは URL が 65535 文字に制限されており、 `data` URL は 65529 文字に制限されています (65529 文字は、 MIME タイプを指定せずにプレーンの `data:` を使用した場合、ソースではなくエンコードされたデータの長さです)。Firefox 97 以降 では、最大 32MB の `data` URL がサポートされます (97 より前のバージョンでは、制限は約 256MB でした)。 Chromium は 512MB 以上の URL 、Webkit (Safari) は 2048MB 以上の URL をサポートしています。
- エラー処理の欠如
  - : メディア内の不正な引数や、 `'base64'` の定義内の打ち間違いは無視され、何もエラーは出ません。
- クエリー文字列のサポートの欠如、など
  - : データ URL のデータ部分は不透明 (opaque) なので、データ URL と一緒にクエリー文字列 (`<url>?parameter-data` という構文で表されるページ固有のパラメーター) を使うと、データ URL が表現するデータに単にクエリー文字列が含まれたものになります。
- セキュリティの課題
  - : 多数のセキュリティ問題 (フィッシングなど) がデータ URL に関連付けられており、ブラウザーの最上位でそれらに移動しています。このような問題を軽減するために、Firefox 59+ (リリース版、Nightly/Beta は 58 以降) では `data:` URL へのトップレベルのナビゲーションがブロックされており、他のブラウザーがすぐに対応することを期待しています。詳細については、[Firefox 58 におけるデータ URL へのトップレベルナビゲーションのブロック](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-58/)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{Glossary("Base64")}}
- {{Glossary("Percent-encoding", "パーセントエンコーディング")}}
- {{domxref("WorkerGlobalScope.atob()", "atob()")}}
- {{domxref("WorkerGlobalScope.btoa()", "btoa()")}}
- CSS の {{CSSXref("url", "url()")}}
- {{Glossary("URI")}}
