---
title: コンテンツセキュリティポリシー (CSP) の実装
short-title: Content Security Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

HTTP の [`Content-Security-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) ヘッダーは、サイト上で読み込まれたコードや、そのコードが実行できることについて、きめ細かな制御を提供します。

## 問題

この記事で主に取り上げる問題は、クロスサイトスクリプティング ({{Glossary("Cross-site_scripting", "XSS")}}) 攻撃です。これらは一般的に、サイトのリソースが読み込まれるソースに対する制御と認識が不足していることが原因です。サイトが大きくなり複雑化するにつれ、またJavaScript ライブラリーなどのサードパーティー製リソースへの依存度が高まるにつれ、この問題への対処はますます困難になっています。

> [!NOTE]
> CSP は、XSS 攻撃から防御するための包括的な戦略の一環です。それ以外にも、[出力エンコード](/ja/docs/Web/Security/Attacks/XSS#出力エンコード)や[無害化](/ja/docs/Web/Security/Attacks/XSS#無害化)など、重要な要素がいくつかあります。

CSP は、他の記事で取り上げられている他の問題の解決にも役立ちます。

- サイトが {{htmlelement("iframe")}} 要素に埋め込まれるのを防ぐことで、[クリックジャッキング](/ja/docs/Web/Security/Attacks/Clickjacking)を防止します。これは、CSP の [`frame-ancestors`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) ディレクティブを使用して行います。
- すべての HTTP 接続を HTTPS にアップグレードすることで、[中間者攻撃](/ja/docs/Web/Security/Attacks/MITM) (MiTM) を防ぎます。これには、CSP の [`upgrade-insecure-requests`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) ディレクティブが役立ちます。[保護されていないリクエストのアップグレード](/ja/docs/Web/HTTP/Guides/CSP#保護されていないリクエストのアップグレード)をご覧ください。

## 解決策

[厳格な CSP](/ja/docs/Web/HTTP/Guides/CSP#厳格な_csp) を実装することが、CSP を用いて XSS の脆弱性を軽減する最善の方法です。このディレクティブでは、[nonce-](/ja/docs/Web/HTTP/Guides/CSP#nonces) または [hash-](/ja/docs/Web/HTTP/Guides/CSP#hashes) ベースのフェッチディレクティブを使用し、正しい{{Glossary("Nonce", "ノンス")}}またはハッシュを含むスクリプトやスタイルのみが実行されるように実現します。ハッカーによって挿入された JavaScript は、単純に実行されません。

厳格な CSP は次のことも実現します。

- 安全でない[インライン JavaScript](/ja/docs/Web/HTTP/Guides/CSP#インライン_javascript)、つまり `onclick` などの [イベントハンドラー属性](/ja/docs/Web/HTML/Reference/Attributes#イベントハンドラー属性)の使用を無効にします。これにより、適切にエスケープされていないユーザー入力が、ブラウザーによって JavaScript として解釈されるのを防ぐことができます。
- `script-src` ディレクティブのもう一つの効果として、[`eval()` などの危険な API 呼び出し](/ja/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis)の使用を無効にします。
- `object-src 'none'` を使用して、すべてのオブジェクトの埋め込みを無効にします。
- `base-uri 'none';` を使用して、`<base>` 要素によるベース URI の設定を無効にします。

厳格な CSP は、スクリプトを実行するドメインを指定する[場所ベース](/ja/docs/Web/HTTP/Guides/CSP#場所ベースのポリシー)のポリシー（別名：許可リストポリシー）よりも推奨されます。これは、許可リスト方式では安全でないドメインが許可されてしまうことが多く、CSP を導入する本来の目的が損なわれてしまうためです。また、特に多くのサードパーティー製スクリプトを必要とするサービスの動作を許可しようとする場合、許可リストが非常に大規模で扱いにくくなる恐れがあります。

### CSP を実装する手順

厳格な CSP を実装した後、そのポリシーの影響で読み込みに失敗しているリソースを特定し、これらの課題を回避するための対策を講じてください。

> [!NOTE]
> `Content-Security-Policy` ヘッダーを使用して実際の CSP を実装する前に、まず HTTP の [`Content-Security-Policy-Report-Only`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) ヘッダーを使用してテストすることをお勧めします。詳細は、下記[レポート専用 CSP](#report-only_csps) をご覧ください。

1. ノンスとハッシュのどちらを使用するか選択してください。コンテンツを動的に生成できる場合はノンスを使用しましょう。静的コンテンツを提供する必要がある場合はハッシュを使用しましょう。
2. [解決策](#解決策)の節で概要を説明しているように、厳格な CSP を実装してください。実行したい外部および内部のスクリプト（{{htmlelement("script")}} 要素を介して記載されるもの）には、サーバーによって [`nonce`](/ja/docs/Web/HTML/Reference/Elements/script#nonce) 属性に正しいノンスが挿入されていることを確認してください。代わりにハッシュを使用する場合は、外部スクリプトの [`integrity`](/ja/docs/Web/HTML/Reference/Elements/script#integrity) 属性に正しいハッシュが挿入されている必要があります。
3. 許可されたスクリプトがサードパーティースクリプトを読み込もうとした場合、それらのスクリプトには必要なノンスやハッシュを保有していないため、読み込みに失敗します。この問題を緩和するには、[`strict-dynamic`](/ja/docs/Web/HTTP/Guides/CSP#strict-dynamic_キーワード) ディレクティブを追加してください。これにより、まず最初のスクリプトによって読み込まれたスクリプトは、明示的にノンスやハッシュが指定されなくても、同じレベルの信頼を得ることができます。
4. インラインのイベントハンドラーや `eval()` など、厳格な CSP で許可されていないパターンを書き換えてください。例えば、インラインのイベントハンドラーを、スクリプト内での [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) の呼び出しに置き換えてください。
5. サイトが埋め込み機能を記載する必要がない限り、`object-src 'none'` を使用してその実行を無効にするべきです。
6. `eval()` の使用を除去できない場合は、厳格な CSP に [`unsafe-eval`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) キーワードを追加してすることができるが、これにより CSP のセキュリティは大幅に低下します。
7. イベントハンドラーの属性を除去できない場合は、厳格な CSP に [`unsafe-hashes`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes) キーワードを追加することで、それらを許可することができます。これは多少のリスクはありますが、すべてのインライン JavaScript を許可するよりははるかに安全です。

厳格な CSP を導入できない場合でも、許可リストベースの CSP を採用する方が、何も設定しないよりははるかにましです。また、`default-src https:` のような CSP でも、安全でないインライン実行や `eval()` を無効にし、HTTPS 経由でのリソース（画像、フォント、スクリプトなど）の読み込みのみを許可することで、ある程度の保護効果は得られます。

> [!WARNING]
> 可能な限り、CSP 内に安全でないソースを記載しないようにしてください。例えば次のようなものです。
>
> - `unsafe-inline`
> - `data:` URI を `script-src`, `object-src`, `default-src` の中で使用する
> - ソースやフォーム送信先が不必要に広範囲にわたっている。

`Content-Security-Policy` ヘッダーを使用できない場合、代わりにページに [`<meta http-equiv="Content-Security-Policy" content="…">`](/ja/docs/Web/HTML/Reference/Elements/meta/http-equiv) 要素を記載することができます。これは、文書の {{htmlelement("head")}} 内に最初に現れる {{htmlelement("meta")}} 要素である必要があります。

### レポート専用 CSP

`Content-Security-Policy` ヘッダーを使用して実際の CSP を実装する前に、まず HTTP の [`Content-Security-Policy-Report-Only`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) ヘッダーを使用してテストすることをお勧めします。これにより、そのポリシーで違反が発生していたかどうかを確認することができます。

ウェブサイトでは、[`report-to`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) および [`report-uri`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) という[報告ディレクティブ](/ja/docs/Glossary/Reporting_directive)を使用しましょう。これらにより、ブラウザーはエンドポイント（`report-to` の場合は {{httpheader("Reporting-Endpoints")}} ヘッダーで指定されたもの）に対して、 CSP 違反に関する JSON 形式のレポートを [`POST`](/ja/docs/Web/HTTP/Reference/Methods/POST) で送信します。これにより、CSP 違反をすばやく検知し、修正することができます。

> [!NOTE]
> `report-to` ディレクティブは、非推奨となった `report-uri` ディレクティブよりも推奨されます。ただし、`report-to` はまだすべてのブラウザーで完全に対応していないため、両方がまだ必要です。

## 関連情報

- [コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP)
- [クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS)
- [CSP evaluator](https://csp-evaluator.withgoogle.com/)
