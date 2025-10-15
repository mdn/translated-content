---
title: URI スキーム
short-title: スキーム
slug: Web/URI/Reference/Schemes
l10n:
  sourceCommit: 44373c3805ba65db7542af75b664dc6fdce2aec0
---

URI の**スキーム**は、URI の最初の部分で、`:` 文字の前の部分です。
これは、ブラウザーがリソースを取得する際に使用するプロトコルを示します。スキームは、URI の残りの部分の構造や解釈に影響を与える可能性があります。

## 構文

```url
protocol:
```

- `protocol`
  - : 使用するプロトコルを識別する文字の並び。英数字と、`+`、`-`、`.` の文字のみで構成する必要があります。
    一般的なスキームは次の通りです。
    - [`blob`](/ja/docs/Web/URI/Reference/Schemes/blob)
      - : 大規模なバイナリーオブジェクト (Binary Large Object)。メモリーに存在する大規模オブジェクトへのポインター
    - [`data`](/ja/docs/Web/URI/Reference/Schemes/data)
      - : URL に直接埋め込まれたデータ
    - `file`
      - : ホスト依存のファイル名
    - `ftp`
      - : {{Glossary("FTP","File Transfer Protocol")}}
    - `http` / `https`
      - : [ハイパーテキスト転送プロトコル](/ja/docs/Web/HTTP)（および保護された接続）
    - [`javascript`](/ja/docs/Web/URI/Reference/Schemes/javascript)
      - : URL に埋め込まれた JavaScript コード
    - `mailto`
      - : 電子メールアドレス
    - [`resource`](/ja/docs/Web/URI/Reference/Schemes/resource) {{Non-standard_inline}}
      - : Firefox および Firefox のブラウザー拡張機能で内部リソースを読み込む
    - `ssh`
      - : Secure shell
    - `tel`
      - : 電話
    - [`urn`](/ja/docs/Web/URI/Reference/Schemes/urn)
      - : Uniform Resource Names
    - `view-source`
      - : このリソースのソースコード
    - `ws` / `wss`
      - : [WebSocket 接続](/ja/docs/Web/API/WebSockets_API)（および保護された接続）

## 解説

次の URL を考えてみましょう。

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`http` は URL のスキームであり、ブラウザーが使用するプロトコルを示します。通常、これは HTTP プロトコルまたはそのセキュリティ強化版である HTTPS です。ウェブでは `http` または `https` が要求されますが、ブラウザーは `mailto:` （メールクライアントを起動するための）や `ftp:` （ファイル転送）で始まるものなど、それ以外にもさまざまなスキームの URI を開くことができます。

{{Glossary("HTML")}} コンテンツ内で URL を使用する場合、通常はこれらの URL スキームのうちいくつかしか使用しません。サブリソース、つまり、より大きな文書の一部として読み込まれるファイルを参照する場合は、HTTP および HTTPS スキームのみを使用してください。セキュリティ上の理由から、ブラウザーでは FTP を使用してサブリソースを読み込む機能が徐々に除去されています。

FTP は、最上位（ブラウザーの URL バーに直接入力したもの、リンクのターゲットなど）では引き続き受け入れられますが、一部のブラウザーでは FTP コンテンツの読み込みを別のアプリケーションに委任する場合があります。

## 例

### さまざまな URI スキーム

次の例は、URI スキームに基づくさまざまな URI 形式を示しています。

```url
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
```

## 仕様書

{{Specifications}}

## 関連情報

- [URI](/ja/docs/Web/URI)
- [データ URL](/ja/docs/Web/URI/Reference/Schemes/data)
- [リソース URL](/ja/docs/Web/URI/Reference/Schemes/resource)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
