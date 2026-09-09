---
title: Origin (オリジン)
slug: Glossary/Origin
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

ウェブコンテンツの**オリジン** (Origin) は、ウェブコンテンツにアクセスするために使われる {{Glossary("URL")}} の _スキーム_ （プロトコル）、 _ホスト_ （ドメイン）、 _ポート番号_ によって定義されます。スキーム、ホスト、ポート番号がすべて一致した場合のみ、 2 つのオブジェクトは同じオリジンであると言えます。

操作によっては同じオリジンのコンテンツに限定されており、この制約は {{Glossary("CORS")}} を使用して緩和することができます。

## 不透明なオリジン

不透明なオリジンとは、リソースの真のオリジンを隠蔽する、ブラウザー内部の特殊な値の一種です（不透明なオリジンは常に `null` としてシリアライズされます）。これらは、他のいかなるオリジン（他の不透明なオリジンを含む）とも同一とはみなされないため、ブラウザーがリソースの分離を実現するために使用されています。

不透明なオリジンは、リソースの真のオリジンが機密情報である場合、セキュリティチェックに安全に使用できない場合、または存在しない場合に適用されます。
不透明なオリジンを持つリソースの場合、リクエスト内の {{httpheader("Origin")}} ヘッダーは [`null`](/ja/docs/Web/HTTP/Reference/Headers/Origin#null) に設定されます。
また、他のどのリソースとの同一オリジンチェックにも失敗するため、オリジンを越えることができるリソースで利用できる操作のみに制限されます。

不透明なオリジンが使用されている一般的な用途としては、次のようなものがあります。

- [sandbox](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) 属性が設定されており、`allow-same-origin` フラグが含まれていない iframe 内の文書。
- `file:` URL は通常、不透明なオリジンとして扱われるため、ファイルシステム上のファイル同士が互いに読み取ることはできません。
- {{domxref("DOMImplementation.createDocument()")}} などの API を使用してプログラム的に作成された文書。

## 例

これらはスキーム (`http`) とホスト名 (`example.com`) が同じなので同一オリジンであり、ファイルパスが異なるのは関係がありません。

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

サーバーは HTTP コンテンツを配信するのに既定で 80 番ポートを使うため、これらは同一オリジンです。

- `http://example.com:80`
- `http://example.com`

これらは、異なるスキームを使用しているため、同じオリジンではありません。

- `http://example.com/app1`
- `https://example.com/app2`

これらは、異なるホスト名を使用しているため、同一オリジンではありません。

- `http://example.com`
- `http://www.example.com`
- `http://myapp.example.com`

これらは異なるポートを使用するため、同一オリジンではありません。

- `http://example.com`
- `http://example.com:8080`

## 関連情報

- [同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)
- 関連用語:
  - {{Glossary("Site", "サイト")}}
- [HTML 仕様書: origin](https://html.spec.whatwg.org/multipage/origin.html#origin)（英語）
