---
title: Link
slug: Web/HTTP/Headers/Link
tags:
  - Draft
  - HTTP
  - HTTP ヘッダー
  - Link
  - NeedsCompatTable
  - NeedsContent
  - NeedsSyntax
  - リファレンス
browser-compat: http.headers.Link
translation_of: Web/HTTP/Headers/Link
---
{{HTTPSidebar}}

HTTP の **`Link`** エンティティヘッダーフィールドは、 HTTP ヘッダー内の 1 つ以上のリンクをシリアル化する手段を提供します。意味的には、 HTML の {{HTMLElement("link")}} 要素と同等です。</p>

## 構文

```
Link: <uri-reference>; param1=value1; param2="value2"
```

- `<uri-reference>`
  - : URI 参照。 `<` と `>` で囲む必要があります。

### 引数

リンクヘッダーには `;` で区切られた引数が含まれており、 {{HTMLElement("link")}} 要素の属性に相当します。

## 例

URI （絶対または相対）は `<` と `>` で囲む必要があります。

```example-good
Link: <https://example.com>; rel="preconnect"
```

```example-bad
Link: https://bad.example; rel="preconnect"
```

### 複数リンクを指定

カンマで区切られた複数のリンクを指定できます。次に例を示します。

```
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPStatus(103, "103 Early Hints")}}
