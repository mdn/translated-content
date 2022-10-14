---
title: Origin (オリジン)
slug: Glossary/Origin
---

ウェブコンテンツの**オリジン** (Origin) は、ウェブコンテンツにアクセスするために使われる {{Glossary("URL")}} の*スキーム* (プロトコル)、 _ホスト_ (ドメイン)、 _ポート_ によって定義されます。スキーム、ホスト、ポートがすべて一致した場合のみ、二つのオブジェクトは同じオリジンであると言えます。

操作によっては同じオリジンのコンテンツに限定されており、この制約は {{Glossary("CORS")}} を使用して緩和することができます。

## 同一オリジンの例

| `http://example.com/app1/index.html` `http://example.com/app2/index.html` | スキーム (`http`) およびホスト (`example.com`) が同じなので同一オリジン    |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `http://Example.com:80` `http://example.com`                              | サーバーは既定で 80 番ポートで HTTP コンテンツを配信するため、同一オリジン |

## 異なるオリジンの例

| `http://example.com/app1` `https://example.com/app2`                     | スキームが異なる |
| ------------------------------------------------------------------------ | ---------------- |
| `http://example.com` `http://www.example.com` `http://myapp.example.com` | ホストが異なる   |
| `http://example.com` `http://example.com:8080`                           | ポートが異なる   |

## 仕様書

| 仕様書                                                           | 状態                             | 備考 |
| ---------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', '#origin', 'origin')}} | {{Spec2('HTML WHATWG')}} |      |

## 理解を深める

詳しくは[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)をご覧ください。

{{QuickLinksWithSubpages("/ja/docs/Glossary")}}
