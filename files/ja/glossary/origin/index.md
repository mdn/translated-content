---
title: Origin (オリジン)
slug: Glossary/Origin
l10n:
  sourceCommit: cd76750e9e68ebdf8bf1ddc0630406d95eddc502
---

{{GlossarySidebar}}

ウェブコンテンツの**オリジン** (Origin) は、ウェブコンテンツにアクセスするために使われる {{Glossary("URL")}} の _スキーム_ （プロトコル）、 _ホスト_ （ドメイン）、 _ポート番号_ によって定義されます。スキーム、ホスト、ポート番号がすべて一致した場合のみ、 2 つのオブジェクトは同じオリジンであると言えます。

操作によっては同じオリジンのコンテンツに限定されており、この制約は {{Glossary("CORS")}} を使用して緩和することができます。

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

- [同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)
- {{Glossary("Site")}}
- [HTML 仕様書: origin](https://html.spec.whatwg.org/multipage/origin.html#origin)（英語）
