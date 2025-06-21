---
title: URI スキーム
short-title: スキーム
slug: Web/URI/Reference/Schemes
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

URI の**スキーム**は、URI の最初の部分で、`:` 文字の前の部分です。
これは、ブラウザーがリソースを取得する際に使用するプロトコルを示します。スキームは、URI の残りの部分の構造や解釈に影響を与える可能性があります。

## 構文

```url
protocol:
```

- `protocol`
  - : 使用するプロトコルを識別する文字の列。英数字と、`+`、`-`、`.` の文字のみで構成する必要があります。一般的なスキームは下記です。
    - [`blob`](/ja/docs/Web/API/URL/createObjectURL_static)
      - : 大規模なバイナリーオブジェクト (Binary Large Object)。メモリーに存在する大規模オブジェクトへのポインター
    - [`data`](/ja/docs/Web/URI/Reference/Schemes/data)
      - : URL に直接埋め込まれたデータ
    - `file`
      - : ホスト依存のファイル名
    - `ftp`
      - : {{Glossary("FTP","File Transfer Protocol")}}
    - `http` / `https`
      - : ハイパーテキスト転送プロトコル（および保護された接続） ({{glossary("HTTP")}}/{{glossary("HTTPS")}})
    - [`javascript`](/ja/docs/Web/URI/Reference/Schemes/javascript)
      - : URL に埋め込まれた JavaScript コード
    - `mailto`
      - : 電子メールアドレス
    - [`resource`](/ja/docs/Web/URI/Reference/Schemes/resource) {{Non-standard_inline}}
      - : Firefox および Firefox のブラウザー拡張機能でリソースを内部から読み込む
    - `ssh`
      - : Secure shell
    - `tel`
      - : 電話
    - `urn`
      - : Uniform Resource Names
    - `view-source`
      - : このリソースのソースコード
    - `ws` / `wss`
      - : [WebSocket 接続](/ja/docs/Web/API/WebSockets_API)（および保護された接続）

## 仕様書

{{Specifications}}

## 関連情報

- [URI](/ja/docs/Web/URI)
- [データ URL](/ja/docs/Web/URI/Reference/Schemes/data)
- [リソース URL](/ja/docs/Web/URI/Reference/Schemes/resource)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
