---
title: ウェブ上のリソースの識別
slug: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}

HTTP リクエストの対象は「リソース」と呼ばれ、その本質は細かく定義されていません。文書、写真、その他の何でもなりえます。それぞれのリソースは、リソースを特定するために HTTP の至るところで使用される Uniform Resource Identifier ({{Glossary("URI")}}) で特定されます。

## URL と URN

### URL

もっとも一般的な URI の形式は Uniform Resource Locator ({{Glossary("URL")}}) であり、*ウェブアドレス*として知られています。

```url
https://developer.mozilla.org
https://developer.mozilla.org/ja/docs/Learn/
https://developer.mozilla.org/ja/search?q=URL
```

ブラウザーのアドレスバーに URL を入力して、URL に関連付けられているページ (リソース) を読み込むように指示できます。

URL はさまざまな部品で構成されており、必須のものと省略可能なものがあります。より複雑な URL として、例えば次のようなものがあります。

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URN

Uniform Resource Name (URN) は、特定の名前空間内における名前によってリソースを特定する URI です。

```url
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

2 つの URN は以下のものに対応します。

- George Orwell の書籍 Nineteen Eighty-Four
- IETF 仕様書 7230、 Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing

## Uniform Resource Identifiers (URI) の構文

### スキームまたはプロトコル

- ![Protocol](mdn-url-protocol@x2.png)
  - : `http://` はプロトコルです。これは、ブラウザーが使用すべきプロトコルを示します。通常、 HTTP プロトコルまたは安全なバージョンである HTTPS になります。ウェブではこれら 2 つのうちひとつを必要としますが、ブラウザーは `mailto:` （メールクライアントを開く）やファイル転送を扱う `ftp:` といったほかのプロトコルの扱い方も知っていますので、このようなプロトコルが現れても驚かないでください。主なスキームは以下のとおりです。

| スキーム    | 説明                                                             |
| ----------- | ---------------------------------------------------------------- |
| data        | [Data URI](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)           |
| file        | ホスト固有のファイル名                                           |
| ftp         | {{Glossary("FTP","File Transfer Protocol")}}                     |
| http/https  | [Hyper text transfer protocol (安全)](/ja/docs/Glossary/HTTP)    |
| javascript  | URL に埋め込まれた JavaScript のコード                           |
| mailto      | 電子メールアドレス                                               |
| ssh         | Secure shell                                                     |
| tel         | 電話                                                             |
| urn         | Uniform Resource Names                                           |
| view-source | リソースのソースコード                                           |
| ws/wss      | (暗号化された) [WebSocket](/ja/docs/Web/API/WebSockets_API) 接続 |

### オーソリティ

- ![ドメイン名](mdn-url-domain@x2.png)
  - : `www.example.com` は、名前空間を統制するドメイン名またはオーソリティです。これは、どのウェブサーバーがリクエストされているかを示します。代わりに {{Glossary("IP address","IP アドレス")}}を直接使用することもできますが、利便性が低いためウェブではあまり使用されません。

### ポート番号

- ![ポート番号](mdn-url-port@x2.png)
  - : ここで `:80` はポート番号です。これはウェブサーバー内のリソースへアクセスするために使用する、技術上の「出入口」です。ウェブサーバーがリソースへのアクセスを受け入れるために HTTP プロトコルの標準ポート（HTTP では 80、HTTPS では 443）を使用している場合、通常はポートを省略します。それ以外の場合は、ポートが必須です。

### パス

- ![ファイルへのパス](mdn-url-path@x2.png)
  - : `/path/to/myfile.html` は、ウェブサーバー内にあるリソースのパスです。初期のウェブではこのようなパスが、ウェブサーバー内の物理的なファイルの場所を表していました。現代のパスはたいてい物理的な実情と関係がない、ウェブサーバーによって制御される抽象的なものになっています。

### クエリー

- ![引数](mdn-url-parameters@x2.png)
  - : `?key1=value1&key2=value2` は、ウェブサーバーに提供する追加の引数です。この引数は `&` 記号で区切られた、キーと値のペアのリストです。ウェブサーバーは、ユーザーへリソースを返す前に追加の処理を行うために、この引数を使用できます。それぞれのウェブサーバーは引数について独自の規則を持っており、特定のウェブサーバーが引数を扱う方法を知るために唯一信頼できる方法は、ウェブサーバーの所有者に尋ねることです。

### フラグメント

- ![アンカー](mdn-url-anchor@x2.png)
  - : `#SomewhereInTheDocument` は、リソース自体の別の場所へのアンカーです。アンカーはリソース内の一種の「ブックマーク」を表しており、「ブックマーク」地点にあるコンテンツを表示するようにブラウザーへ指示を与えます。例えば HTML 文書では、ブラウザーはアンカーが定義されている位置にスクロールします。動画や音声の文書では、ブラウザーはアンカーが示す位置への移動を試みます。 # より後の部分はフラグメント識別子としても知られており、リクエストでサーバーには送信されないことは注目に値します。

## 使用上のメモ

{{Glossary("HTML")}} コンテンツの中で URL を使用するとき、一般に使うことができる URL スキームはわずかです。サブリソースを参照する場合 — つまり、最初は巨大な文書の一部だけを使用する場合 — は、 HTTP 及び HTTPS スキームしか使用することができません。加えて、ブラウザーはセキュリティ上の理由から、 FTP を使用したサブリソースの読み込みの対応を削除しつつあります。

FTP は最上位では利用できますが (ブラウザーの URL バーに直接入力したり、リンクの対象とした理)、ブラウザーによっては FTP コンテンツの読み込みを他のアプリケーションに委譲するかもしれません。

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

- [URL とは何か](/ja/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
