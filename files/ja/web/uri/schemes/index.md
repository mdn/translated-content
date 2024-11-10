---
title: URI スキーム
slug: Web/URI/Schemes
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{QuickLinksWithSubpages("/ja/docs/Web/URI")}}

URI スキームは、URI の最初の部分で、`:` 文字の前の部分です。これは、ブラウザーがリソースを取得する際に使用するプロトコルを示します。スキームは、URI の残りの部分の構造や解釈に影響を与える可能性があります。

## 構文

```url
protocol:
```

- protocol
  - : 使用するプロトコルを識別する文字の列。英数字と、`+`、`-`、`.` の文字のみで構成する必要があります。一般的なスキームは下記です。
    - [`blob`](/ja/docs/Web/API/URL/createObjectURL_static)
      - : 大規模なバイナリーオブジェクト (Binary Large Object)。メモリーに存在する大規模オブジェクトへのポインター
    - [`data`](/ja/docs/Web/URI/Schemes/data)
      - : URL に直接埋め込まれたデータ
    - `file`
      - : ホスト依存のファイル名
    - `ftp`
      - : {{Glossary("FTP","File Transfer Protocol")}}
    - `http` / `https`
      - : Hyper text transfer protocol (Secure) ({{glossary("HTTP")}}/{{glossary("HTTPS")}})
    - [`javascript`](/ja/docs/Web/URI/Schemes/javascript)
      - : URL に埋め込まれた JavaScript コード
    - `mailto`
      - : 電子メールアドレス
    - [`resource`](/ja/docs/Web/URI/Schemes/resource) {{Non-standard_inline}}
      - : Firefox および Firefox のブラウザー拡張機能でリソースを内部的に読み込む
    - `ssh`
      - : Secure shell
    - `tel`
      - : 電話
    - `urn`
      - : Uniform Resource Names
    - `view-source`
      - : このリソースのソースコード
    - `ws` / `wss`
      - : [WebSocket 接続 (Secure)](/ja/docs/Web/API/WebSockets_API)

## 関連情報

- [URI](/ja/docs/Web/URI)
- [Data URL](/ja/docs/Web/URI/Schemes/data)
- [リソース URL](/ja/docs/Web/URI/Schemes/resource)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
