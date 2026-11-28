---
title: "urn: URL"
short-title: "urn:"
slug: Web/URI/Reference/Schemes/urn
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Uniform Resource Name (URN) は、特定の名前空間で名前によってリソースを識別する URI です。
URN は、リソースの場所に関する情報 (URL) ではなく、リソースにグローバルに固有の名前を提供します。

## 構文

```url
urn:<NID>:<NSS>
```

- `<NID>`
  - : NID (Namespace Identifier) は、大文字と小文字を区別しない名前空間の識別子です（例えば、`ISBN` と `isbn` は同等です）。
    NID は [IANA などのレジストリー](https://www.iana.org/assignments/urn-namespaces)<sup>(英語)</sup>によって管理されており、その解決はそれぞれの名前空間によって異なります。
    例えば、`ISBN` の NID の解決は、[国際 ISBN エージェンシー](https://www.isbn-international.org/) システムによって処理されています。
- `<NSS>`
  - : NSS (Namespace Specific String) は、URN 名前空間内で固有の文字列です。
    NID （"urn"スキーム全体で固有の）と NSS を組み合わせることで、結果の URN がグローバルに一意であることを確実になります。

## 例

### ISBN の URN

この ISBN は、[ジョージ・オーウェルの 1984](https://isbnsearch.org/isbn/9780141036144) の書籍に対応しています。

```url
urn:isbn:9780141036144
```

### IETF の URN

この URN は、IETF 仕様書 {{rfc("7230", "Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing")}} に対応しています。

```url
urn:ietf:rfc:7230
```

## 仕様書

{{specifications}}

## 関連情報

- [URI](/ja/docs/Web/URI)
- [URL とは何か](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [IANA リストの URI スキーム](https://www.iana.org/assignments/uri-schemes)<sup>(英語)</sup>
