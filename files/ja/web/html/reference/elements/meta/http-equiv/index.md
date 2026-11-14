---
title: "`<meta http-equiv>` 属性"
short-title: <meta http-equiv>
slug: Web/HTML/Reference/Elements/meta/http-equiv
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

**`http-equiv`** は {{htmlelement("meta")}} 要素の属性で、文書を返したレスポンスに特定の HTTP ヘッダーが含まれているかのように、ブラウザーに処理指示を与えることができます。
このメタデータは、ページ全体に適用される文書レベルのものです。

`<meta>` 要素に `http-equiv` 属性が指定されている場合、[`content`](/ja/docs/Web/HTML/Reference/Attributes/content) 属性には対応する `http-equiv` の値を定義します。
例えば、次の `<meta>` タグは、5 分後にページを更新するようにブラウザーに指示します。

```html
<meta http-equiv="Refresh" content="300" />
```

## 値

HTTP ヘッダーの一部のみが `http-equiv` 値として対応しています。
これらは、以下に含まれます。

- `content-language` {{deprecated_inline}}
  - : 支援技術やブラウザーのスタイル設定で使用される、文書のデフォルト言語を設定します。
    HTTP の {{httpheader("Content-Language")}} ヘッダーと同様です。
    代わりに [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性を使用してください。
- `content-type`
  - : 文書の[メディア種別（MIME タイプ）](/ja/docs/Web/HTTP/Guides/MIME_types)および文字エンコードを宣言します。
    `content` 属性を指定する場合、その値は `"text/html; charset=utf-8"` でなければなりません。
    これは、[`charset`](/ja/docs/Web/HTML/Reference/Elements/meta#charset) 属性が指定された `<meta>` 要素と同等であり、文書内の配置に関する同じ制限があります。
    `text/html` メディア種別で提供される文書でのみ使用できます。XML 型（`application/xml` または `application/xhtml+xml`）で提供される文書では使用できません。
    HTTP の {{httpheader("Content-Type")}} ヘッダーを参照してください。
- `content-security-policy`
  - : ページ作成者が、現在のページに対するコンテンツセキュリティポリシー (CSP) を定義できるようにします。通常、クロスサイトスクリプティング攻撃を防ぐために、許可するオリジンやスクリプトのエンドポイントを指定します。
    HTTP の {{httpheader("Content-Security-Policy")}} ヘッダーを参照してください。
- `default-style`
  - : デフォルトの [CSS スタイルシート](/ja/docs/Web/CSS)セットの名前を設定します。
- `refresh`
  - : HTTP の {{httpheader("Refresh")}} ヘッダーと同等です。
    この命令は、次のことを指定します。
  - `content` 属性が非負の整数である場合、ページが再読み込みされるまでの秒数です。
  - `content` 属性が非負の整数で、その後に `;url=` および有効な URL が続く場合、ページが別の URL にリダイレクトされるまでの秒数。

    タイマーは、ページが完全に読み込まれたとき、つまり {{domxref("Window/load_event", "load")}} および {{domxref("Window/pageshow_event", "pageshow")}} イベントが両方発生した後、開始されます。
    詳細は[アクセシビリティの注意事項](#アクセシビリティの注意事項)を参照してください。

- `set-cookie` {{deprecated_inline}}
  - : 文書にクッキーを設定します。
    ブラウザーはこのプラグマを無視するようになりました。代わりに、HTTP の {{httpheader("Set-Cookie")}} レスポンスヘッダーまたは [`document.cookie`](/ja/docs/Web/API/Document/cookie) を使用してください。
- `x-ua-compatible` {{deprecated_inline}}
  - : 現在は廃止された {{glossary("Microsoft Internet Explorer")}} の古いバージョンで使用されており、指定された動作により忠実に従うようにしています。
    指定する場合、`content` 属性の値は `"IE=edge"` でなければなりません。
    ユーザーエージェントは、このプラグマを無視するようになりました。
    この名前は、HTTP の `X-UA-Compatible` ヘッダーに由来しています。

> [!WARNING]
> 一部のブラウザーは、上記に掲載されていない追加のヘッダーを処理します。
> 認識されないヘッダーや不正な値は無視されるため、ブラウザーの実装によって動作に不整合が生じる可能性があります。
> 特に、`<meta http-equiv=` を使用して **その他のセキュリティヘッダーを設定しないでください**。誤った安心感につながるおそれがあります。

## アクセシビリティの注意事項

`http-equiv="Refresh"` が設定されたページでは、更新間隔が短くなりすぎるおそれがあります。
スクリーンリーダーなどの支援技術を利用している人は、自動的にリダイレクトされる前にページの内容を読み、理解できない可能性があります。
また、予告なくページの内容が突然更新されると、弱視の人が混乱する可能性もあります。

- [MDN WCAG を理解する、ガイドライン 2.2 の説明](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#ガイドライン_2.2_—_十分な時間_コンテンツを読んで使用するのに十分な時間をユーザーに提供する)
- [MDN WCAG を理解する、ガイドライン 3.2 の説明](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#ガイドライン_3.2_—_予測可能_ウェブページを予測可能な方法で表示して操作させる)
- [達成基準 2.2.1 の理解 | W3C WCAG 2.0 の解説](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)<sup>(英語)</sup>
- [達成基準 2.2.4 の理解 | W3C WCAG 2.0 の解説](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)<sup>(英語)</sup>
- [達成基準 3.2.5 の理解 | W3C WCAG 2.0 の解説](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)<sup>(英語)</sup>

## 例

### 安全でないインラインコードをブロックし、HTTPS リソースのみを許可する

この HTML の `<meta>` 要素は、HTTPS 経由でのリソース（画像、フォント、スクリプトなど）の読み込みのみを許可するように、デフォルトの CSP を設定します。
CSP の `unsafe-inline` および `unsafe-eval` ディレクティブは設定していないため、インラインスクリプトはブロックされます。

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

同じ制限は、HTTP {{httpheader("Content-Security-Policy")}} ヘッダーを使用して適用することができます。

```http
Content-Security-Policy: default-src https:
```

### ページのリダイレクトを設定

次の例では、`http-equiv="refresh"` を使用して、ブラウザーにリダイレクトを実行するように指示しています。
`content="3;url=https://www.mozilla.org"` 属性は、3 秒後にページを `https://www.mozilla.org` にリダイレクトします。

```html
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<meta name="referrer">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/referrer)
- [メタデータ: `<meta>` 要素](/ja/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#メタデータ_meta_要素)
- [`<meta>` を使用した攻撃の防止](https://almanac.httparchive.org/en/2022/security#preventing-attacks-using-meta)<sup>(英語)</sup> (httparchive.org, 2022)
