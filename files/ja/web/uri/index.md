---
title: URI
slug: Web/URI
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/ja/docs/Web/URI")}}

**Uniform Resource Identifiers (統一リソース識別子、URI)** は、ウェブ上の「リソース」を識別するために使用されます。これらは一般的に [HTTP](/ja/docs/Web/HTTP) リクエストの対象として使用され、その場合、URI は文書、写真、バイナリーデータなどの物理的なリソースの場所を表します。URI は、HTML の `<a>` リンクの [`href`](/ja/docs/Web/HTML/Element/a#href) など、他の場所で使用された場合、リソースを取得する以外の動作を起動するために使用することもできます。

## URL と URN

### URL

URI の形で最も一般的に使用されているものは、Uniform Resource Locator ({{Glossary("URL")}}) であり、これは「ウェブアドレス」として知られています。

```url
https://developer.mozilla.org
https://developer.mozilla.org/ja/docs/Learn/
https://developer.mozilla.org/ja/search?q=URL
```

これらの URL のいずれかをブラウザーのアドレスバーに入力すると、関連するページ（リソース）を読み込むよう指示することができます。

URL は、さまざまな部分で構成されており、必須のものと省略可能なものがあります。例えば、より複雑な例としては、次のようなものがあります。

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URN

Uniform Resource Name (統一リソース名、URN) は、特定の名前空間において名前でリソースを識別する URI です。

```url
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

これら 2 つの URN は次のものに対応します。

- George Orwell の書籍 Nineteen Eighty-Four
- IETF 仕様書 7230、 Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing

## Uniform Resource Identifiers (URI) の構文

以下の URL をその部品に分解します。

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### スキーム

![Protocol](mdn-url-protocol@x2.png)

`http://` は URL の[スキーム](/ja/docs/Web/URI/Schemes)です。これは、ブラウザーが使用すべきプロトコルを示します。通常、HTTP プロトコルまたは安全なバージョンである HTTPS になります。ウェブではこれら 2 つのうちひとつを必要としますが、ブラウザーは `mailto:` （メールクライアントを開く）やファイル転送を扱う `ftp:` といったほかのプロトコルの扱い方も知っていますので、このようなプロトコルが現れても驚かないでください。[スキーム](/ja/docs/Web/URI/Schemes)のリファレンスでは、最も一般的なスキームの一覧と、その一部のドキュメントが提供されています。

{{Glossary("HTML")}} コンテンツで URL を使用する際には、一般的にこれらの URL スキームのうちのいくつかのみを使用します。サブリソース（つまり、より大きな文書の一部として読み込まれるファイル）を参照する際には、HTTP と HTTPS のスキームのみを使用します。セキュリティ上の理由から、ブラウザーではサブリソースの読み込みに FTP を使用する対応が徐々に除去されるようになっています。

FTP は現在でも最上位のレベルでは受け入れられます（ブラウザーの URL バーに直接入力したり、リンクの対象とするな）)。ただし、一部のブラウザーでは、FTP コンテンツの読み込みを別のアプリケーションに委任する場合があります。

### オーソリティ

URI の[オーソリティ](/ja/docs/Web/URI/Authority)は、ユーザー情報（オプションで通常は指定しない）、ホスト名、ポートで構成されます。

![ドメイン名](mdn-url-domain@x2.png)

`www.example.com` は、名前空間を統制するドメイン名またはオーソリティです。これは、どのウェブサーバーがリクエストされているかを示します。代わりに {{Glossary("IP address","IP アドレス")}}を直接使用することもできますが、利便性が低いためウェブではあまり使用されません。

![ポート番号](mdn-url-port@x2.png)

`:80` は URL のポート番号です。これはウェブサーバー内のリソースへアクセスするために使用する、技術上の「出入口」です。ウェブサーバーがリソースへのアクセスを受け入れるために HTTP プロトコルの標準ポート（HTTP では 80、HTTPS では 443）を使用している場合、通常はポートを省略します。それ以外の場合は、ポートが必須です。

### パス

- ![ファイルへのパス](mdn-url-path@x2.png)

  - : `/path/to/myfile.html` は、ウェブサーバー内にあるリソースのパスです。初期のウェブではこのようなパスが、ウェブサーバー内の物理的なファイルの場所を表していました。現代のパスはたいてい物理的な実情と関係がない、ウェブサーバーによって制御される抽象的なものになっています。

### クエリー

![引数](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` は、ウェブサーバーに提供する追加の引数です。この引数は `&` 記号で区切られた、キーと値のペアのリストです。ウェブサーバーは、ユーザーへリソースを返す前に追加の処理を行うために、この引数を使用できます。それぞれのウェブサーバーは引数について独自の規則を持っており、特定のウェブサーバーが引数を扱う方法を知るために唯一信頼できる方法は、ウェブサーバーの所有者に尋ねることです。

### フラグメント

- ![アンカー](mdn-url-anchor@x2.png)

  - : `#SomewhereInTheDocument` は、リソース自体の別の場所へのアンカーです。アンカーはリソース内の一種の「ブックマーク」を表しており、「ブックマーク」地点にあるコンテンツを表示するようにブラウザーへ指示を与えます。例えば HTML 文書では、ブラウザーはアンカーが定義されている位置にスクロールします。動画や音声の文書では、ブラウザーはアンカーが示す位置への移動を試みます。 # より後の部分はフラグメント識別子としても知られており、リクエストでサーバーには送信されないことは注目に値します。

[テキストフラグメント](/ja/docs/Web/URI/Fragment/Text_fragments)という特別な機能があり、テキストコンテンツで識別されるウェブページの特定の部分にリンクすることができます。

## 例

```url
https://developer.mozilla.org/ja/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
```

## 仕様書

{{Specifications}}

## 関連情報

- [URL とは何か](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
