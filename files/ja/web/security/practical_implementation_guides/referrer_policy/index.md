---
title: リファラーポリシーの設定
short-title: リファラーポリシー
slug: Web/Security/Practical_implementation_guides/Referrer_policy
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

[`Referrer-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Referrer-Policy) ヘッダーは、ブラウザーが [`Referer`](/ja/docs/Web/HTTP/Reference/Headers/Referer) ヘッダーをいつ、どのように送信するかをきめ細かく制御するためのものです。

## 課題

ユーザーがハイパーリンクを経由してサイトにアクセスしたり、ウェブサイトが外部リソースを読み込んだりすると、ブラウザーは HTTP の `Referer`（原文ママ）ヘッダーを通じて、リクエストの発信元を出力先に通知します。これはさまざまな目的で役立つ一方で、ユーザーの[プライバシー](/ja/docs/Web/Privacy)に対するリスクとなる可能性もあります。

例えば、`https://example.com/page.html` のページに次のような HTML が含まれている場合、

```html
<img src="https://not.example.com/image.jpg" />
```

ブラウザーはこのようなリクエストを送信します。

```http
GET /image.jpg HTTP/1.1
Host: not.example.com
Referer: https://example.com/page.html
```

`not.example.com` は、リクエストがどこから送信されたかを把握しました。このわずかな情報でさえ、プライバシーのリスクとなります。

それ以外にも、ブラウザーが、本来公開する意図がなかった内部利用専用の URL や、機密情報を含む URL 引数を送信してしまう可能性があります。

## 解決策

[`Referrer-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Referrer-Policy) を使用して、`Referer` ヘッダーに含まれる情報を制限したり、`Referer` ヘッダーの送信自体を停止したりすることができます。

`Referrer-Policy` で利用できる最も有益なディレクティブの一覧を、厳格さの低い順に以下に示します。サイトの正常な動作を確保できる範囲で、最も厳格なものを選択できます：

- `no-referrer`: `Referer` ヘッダーを送信しません。
- `same-origin`: `Referrer` ヘッダーを送信しますが、同一オリジンのリクエストに限定されます。
- `strict-origin`: すべてのオリジンに対して `Referrer` ヘッダーを送信しますが、パスを除いた URL のみを含めます（例： `https://example.com/`）。
- `strict-origin-when-cross-origin`: 同一オリジンのリクエストでは `Referrer` ヘッダー全体を送信し、オリジンを越えるリクエストでは、パスを除いた URL のみを送信します。これがデフォルト値です。

`Referrer-Policy` ディレクティブはそれ以外にもありますが、それらは上記のオプションほど効果的にユーザーのプライバシーを保護したり、情報の漏洩を制限したりすることはできません。Firefox や Safari の最新バージョンでは、「安全でない」ディレクティブ（`no-referrer-when-downgrade`、`origin-when-cross-origin`、`unsafe-url`）は、`strict-origin-when-cross-origin` と同様に動作します。

`Referrer-Policy` ヘッダーを使用できない場合は、代わりに [`<meta http-equiv="Referrer-Policy" content="…">`](/ja/docs/Web/HTML/Reference/Elements/meta/http-equiv) 要素を使用して、ページ全体に適用されるポリシーを設定することもできます。これは、文書の {{htmlelement("head")}} 内にまず現れる {{htmlelement("meta")}} 要素である必要があります。同時に、個々の要素に HTML の [`referrerpolicy`](/ja/docs/Web/HTML/Reference/Elements/a#referrerpolicy) 属性を使用してポリシーを設定したり、個々の [fetch](/ja/docs/Web/API/Window/fetch) リクエストに {{domxref("Request.referrerPolicy")}} プロパティを使用してポリシーを設定したりすることもできます。

## 例

`example.com` では、他の `example.com` リソースを読み込む場合や、それらへのリンクを張る場合にのみ、`Referer` ヘッダーを送信します。

```http
Referrer-Policy: same-origin
```

オリジンを越えるリクエストでは短縮されたリファラーを、同一オリジンリクエストでは完全なリファラーを送信します。

```http
Referrer-Policy: strict-origin-when-cross-origin
```

`strict-origin-when-cross-origin` に対応していないブラウザーでは、リファラーを無効にし、対応しているブラウザーでは `strict-origin-when-cross-origin` を使用します。

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

同じことを、`<meta>` 要素をつけて行います。

```html
<meta
  http-equiv="Referrer-Policy"
  content="no-referrer, strict-origin-when-cross-origin" />
```

`referrerpolicy` 属性は複数の値に対応していないため、`no-referrer` のみを設定します。

```html
<a href="https://example.org/" referrerpolicy="no-referrer"> My link </a>
```

## 関連情報

- [Referer ヘッダー: プライバシーとセキュリティの考慮事項](/ja/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns)
