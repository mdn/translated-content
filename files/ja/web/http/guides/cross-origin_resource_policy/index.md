---
title: オリジン間リソースポリシー (CORP)
slug: Web/HTTP/Guides/Cross-Origin_Resource_Policy
l10n:
  sourceCommit: d5c3db4df1e063769b8113567f4558ad4298b00b
---

**オリジン間リソースポリシー**は [HTTP の `Cross-Origin-Resource-Policy` ヘッダー](/ja/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy) によって設定されるポリシーで、ウェブサイトやアプリケーションが他のオリジンから (`<script>` や `<img>` などの要素を使用して発行された) 特定のリクエストに対する保護をオプトインすることで、 [Spectre](https://ja.wikipedia.org/wiki/Spectre) のような投機的なサイドチャネル攻撃や、クロスサイトスクリプトインクルージョン攻撃を緩和することができます。
CORP はデフォルトで{{Glossary("same-origin policy", "同一オリジンポリシー")}}を超えた保護の追加レイヤーです。

> [!NOTE]
> このポリシーは、デフォルトで CORS セーフリストメソッド／ヘッダーに対して発行される、[`no-cors`](https://fetch.spec.whatwg.org/#concept-request-mode) リクエストに対してのみ有効です。

このポリシーは[レスポンスヘッダー](/ja/docs/Glossary/Response_header)を介して表現されるため、実際のリクエストは防止されません。むしろ、ブラウザーはレスポンス本文を削除することで結果が漏洩するのを防ぎます。

## 使用方法

> [!NOTE]
> [Chrome のバグ](https://bug.com/1074261)が原因で、オリジン間リソースポリシーが PDF の描画を破壊し、訪問者が PDF の 1 ページ目よりも後を読めない可能性があります。本番環境ではこのヘッダーの仕様には注意してください。

ウェブアプリケーションは、次の 3 つの値の中から 1 つ受け取ることができる {{HTTPHeader("Cross-Origin-Resource-Policy")}} の HTTP レスポンスヘッダーを介してオリジン間リソースポリシーを設定します。

- `same-site`
  - : 同じ _{{Glossary("Site")}}_ からのリクエストのみリソースを読み込めます。

    > [!WARNING]
    > これは{{Glossary("origin", "オリジン")}}よりも安全性が低いものです。[2 つのオリジンが同じサイトであるかどうかをチェックするアルゴリズム](https://html.spec.whatwg.org/multipage/origin.html#same-site)は HTML 標準で定義されており、*登録可能なドメイン*をチェックします。

- `same-origin`
  - : 同じ _{{Glossary("origin")}}_ (すなわち、スキーム + ホスト + ポート) からのリクエストのみリソースを読み込めます。
- `cross-origin`
  - : いかなる _{{Glossary("origin")}}_ （same-site と cross-site 両方）からのリクエストでもリソースを読み込めます。

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

オリジン間リソースポリシーチェックの際に、ヘッダーが設定されている場合、ブラウザーは異なるオリジンやサイトから発行された `no-cors` リクエストを拒否します。

## オリジン間埋め込みポリシー (COEP) との関係

HTTP の {{HTTPHeader("Cross-Origin-Embedder-Policy")}} レスポンスヘッダーを文書に対して使用した場合、サブリソースに対して、文書と同じオリジンであるか、あるいは埋め込みを許可していることを示す {{HTTPHeader("Cross-Origin-Resource-Policy")}} レスポンスヘッダーを伴うことを要求することができます。これが、`cross-origin` という値が存在する理由です。

## 歴史

コンセプトは 2012 年に（`From-Origin`として）元々提案されましたが、2018 年の Q2 に[再提案されて](https://github.com/whatwg/fetch/issues/687) Safari と Chromium に実装されました。

2018 年の前半に、_Meltdown_ と _Spectre_ として知られる 2 つのサイドチャネルハードウェア脆弱性が公表されました。パフォーマンスを改善するために設計された投機的実行機能の一部として生じた競合状態により、これらの脆弱性は機密性の高いデータを漏洩する可能性があります。

オリジン間リソースポリシー (CORS) は、サイトが望ましくない `no-cors` のオリジン間リクエストを直接ブロックするための手段として策定されました。これは、攻撃者がレスポンスにアクセスする前にブラウザーがレスポンスの本文を削除するため、Spectre のような攻撃に対する効果的な防御策となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTTP {{HTTPHeader("Cross-Origin-Resource-Policy")}} ヘッダー
