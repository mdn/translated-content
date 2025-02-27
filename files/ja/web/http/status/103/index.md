---
title: 103 Early Hints
slug: Web/HTTP/Status/103
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{HTTPSidebar}}

HTTP の **`103 Early Hints`** は[情報レスポンス](/ja/docs/Web/HTTP/Status#情報レスポンス)ステータスコードで、サーバーが最終的なレスポンスがリンクする予定のサイトやリソースに関するヒントを記載したレスポンスを準備している間に送信される場合があります。
これにより、サーバーが最終的なレスポンスを準備し送信する前に、ブラウザーがサイトに[事前接続](/ja/docs/Web/HTML/Attributes/rel/preconnect)したり、リソースの[事前読み込み](/ja/docs/Web/HTML/Attributes/rel/preload)を開始したりすることができます。
早期ヒントで示された先読みされたリソースは、ヒントが受信されるとすぐにクライアントによって取得されます。

早期ヒントレスポンスは、主に読み込まれたリソースを示す {{HTTPHeader("Link")}} ヘッダーと使用することを意図しています。
また、早期ヒントの処理中に強制される [`Content-Security-Policy`](/ja/docs/Web/HTTP/CSP) ヘッダーが格納されている場合もあります。

サーバーは、例えばリダイレクトに続く複数の `103` レスポンスを送信することがあります。
ブラウザーは最初の早期ヒントレスポンスのみを処理し、リクエストがオリジン間リダイレクトの結果である場合は、このレスポンスを破棄しなければなりません。

> [!NOTE]
> 互換性とセキュリティ上の理由から、クライアントが情報レスポンスを正しく処理することが分かっている場合を除き、 [HTTP/2 以降でのみ HTTP 103 Early Hints レスポンス](https://www.rfc-editor.org/rfc/rfc8297#section-3)を送信することが推奨されます。
>
> ほとんどのブラウザーでは、この理由により、 HTTP/2 以降に対応するよう制限されています。下記の[ブラウザーの互換性](#ブラウザーの互換性)をご確認ください。
> これにもかかわらず、下記では、通常の慣例に従って、 HTTP/1.1 スタイルの表記を使用しています。

## 構文

```http
103 Early Hints
```

## 例

### 事前接続の例

次の `103` の初期ヒントレスポンスは、サーバーがクライアントが具体的な元のサーバー (`https://cdn.example.com`) に事前接続したい可能性があることを示す初期ヒントレスポンスを表示させるものです。
HTML の [`rel=preconnect`](/ja/docs/Web/HTML/Attributes/rel/preconnect) 属性と同様に、これはそのページが対象とするリソースの元からリソースが必要になる可能性が高いことを示すヒントであり、ブラウザーがその元への接続を事前に開始することで、ユーザーの使い勝手が向上する可能性があることを示します。

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

この例では、`https://cdn.example.com` に 2 回事前接続します。

- 最初の接続は、 CORS を使用せずに取得できるリソース（画像など）を読み込むために使用することができます。
- 2 つ目の接続には [`crossorigin`](/ja/docs/Web/HTML/Attributes/crossorigin) 属性が含まれており、フォントなどの [CORS](/ja/docs/Web/HTTP/CORS) で保護されたリソースを読み込むために使用されます。

CORS で保護されたリソースは、完全に別個の接続でフェッチする必要があります。元から 1 つのリソース型だけが必要な場合は、事前接続は 1 回だけで済みます。

その後、サーバーは最終的なレスポンスを送信します。
これには、別オリジンのフォントの先読みと、追加のオリジンから読み込まれた `<img>` が含まれます。

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="preload" href="https://cdn.example.com/fonts/my-font.woff2" as="font" type="font/woff2" crossorigin>
...
<img src="https://cdn.example.com/images/image.jpg" alt="">
...
```

### 事前読み込みの例

次の `103` 早期ヒントレスポンスは、最終レスポンスでこのスタイルシート `style.css` が必要になる可能性があることを示しています。

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

その後、サーバーは最終的なレスポンスを送信します。
このレスポンスには、このスタイルシートへのリンクが含まれます。このリンクは、初期ヒントからすでに事前読み込みされている可能性があります。

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### CSP つきの早期ヒントレスポンス

次の例は、同じ早期ヒントレスポンスを示していますが、`Content-Security-Policy`ヘッダーが含まれます。

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

早期レスポンスにより、リクエストと同じオリジンに事前読み込みが制限されます。
オリジンが一致すれば、このスタイルシートは事前読み込みされます。

最終的なレスポンスは、下記のように CSP を `none` に設定するかもしれません。
このスタイルシートは事前読み込みされていますが、ページのレンダリング時には使用されません。

```http
200 OK
Content-Security-Policy: style-src: none;
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Link")}}
- [オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/CORS)
- [コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/CSP)
- [`rel="preconnect"`](/ja/docs/Web/HTML/Attributes/rel/preconnect) （{{htmlelement("link")}} の属性）
- [`rel="preload"`](/ja/docs/Web/HTML/Attributes/rel/preload) （{{htmlelement("link")}} の属性）
- [`fetchpriority`](/ja/docs/Web/HTML/Element/link#fetchpriority) （{{htmlelement("link")}} の属性）
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone](https://blog.cloudflare.com/early-hints-performance/) （Cloudflare のブログより）
