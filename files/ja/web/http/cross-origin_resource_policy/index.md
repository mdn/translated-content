---
title: Cross-Origin Resource Policy (CORP)
slug: Web/HTTP/Cross-Origin_Resource_Policy
---

{{HTTPSidebar}}

**クロスオリジンリソースポリシー**は {{HTTPHeader("Cross-Origin-Resource-Policy")}} ヘッダーによって設定されるポリシーで、ウェブサイトやアプリケーションが他のオリジンから (`<script>` や `<img>` などの要素を使用して発行された) 特定のリクエストに対する保護をオプトインすることで、 [Spectre](https://ja.wikipedia.org/wiki/Spectre) のような投機的なサイドチャネル攻撃や、クロスサイトスクリプトインクルージョン攻撃を緩和することができます。

CORP は既定で {{Glossary("same-origin policy")}} を超えた保護の追加レイヤーです。クロスオリジンリソースポリシーは、既定でクロスオリジンの読み込みを保護するメカニズムである、 [クロスオリジンリードブロッキング](https://fetch.spec.whatwg.org/#corb) (CORB)を補完します。

> **メモ:** このポリシーは、既定で CORS セーフリストメソッド／ヘッダーに対して発行される、[`no-cors`](https://fetch.spec.whatwg.org/#concept-request-mode) リクエストに対してのみ有効です。

このポリシーは*[レスポンスヘッダー](/ja/docs/Glossary/Response_header)*を介して表現されるため、実際のリクエストは防止されません。むしろ、ブラウザーは応答本文を削除することで*結果*が漏洩するのを防ぎます。

## 歴史

コンセプトは 2012 年に（`From-Origin`として）元々提案されましたが、2018 年の Q2 に[再提案されて](https://github.com/whatwg/fetch/issues/687) Safari と Chromium に実装されました。

2018 年の前半に、_Meltdown_ と _Spectre_ として知られる 2 つのサイドチャネルハードウェア脆弱性が公表されました。パフォーマンスを改善するために設計された投機的実行機能の一部として生じた競合状態により、これらの脆弱性は機密性の高いデータを漏洩することができます。

これを受けて Chromium は [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb) を実装しました。これにより、クロスオリジンの読み込みに対してリソース（`Content-Type` が HTML、JSON、XML）を自動的に保護します。アプリケーションが [`no-sniff` ディレクティブ](/ja/docs/Web/HTTP/Headers/X-Content-Type-Options)を渡していない場合、Chromium は `Content-Type` を推測しようと試みて、とにかく保護を適用します。

クロスオリジンリソースポリシーは*どのような*リソースでも保護することができるオプトインのレスポンスヘッダーです。ブラウザーが MIME タイプを嗅ぎ分ける必要はありません。

## 使用方法

> **メモ:** [Chrome のバグ](https://bugs.chromium.org/p/chromium/issues/detail?id=1074261)が原因で、クロスオリジンリソースポリシーが PDF の描画を破壊し、訪問者が PDF の 1 ページ目以降を読めない可能性があります。本番環境ではこのヘッダーの仕様には注意してください。

ウェブアプリケーションは、次の 3 つの値の中から 1 つ受け取ることができる {{HTTPHeader("Cross-Origin-Resource-Policy")}} の HTTP レスポンスヘッダーを介してクロスオリジンリソースポリシーを設定します。

- same-site

  - : 同じ _{{Glossary("Site")}}_ からのリクエストのみリソースを読み込めます。

    > **警告:** これは{{Glossary("origin", "オリジン")}}よりも安全性が低いものです。[2 つのオリジンが同じサイトであるかどうかをチェックするアルゴリズム](https://html.spec.whatwg.org/multipage/origin.html#same-site)は HTML 標準で定義されており、*登録可能なドメイン*をチェックします。

- same-origin
  - : 同じ _{{Glossary("origin")}}_ (すなわち、スキーマ + ホスト + ポート) からのリクエストのみリソースを読み込めます。
- cross-origin
  - : いかなる _{{Glossary("origin")}}_ (same-site と cross-site 両方) からのリクエストでもリソースを読み込めます。

```
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

クロスオリジンリソースポリシーチェックの際に、ヘッダーが設定されている場合、ブラウザーは異なるオリジンやサイトから発行された `no-cors` リクエストを拒否します。

## ブラウザーの互換性

{{Compat("http.headers.Cross-Origin-Resource-Policy")}}

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP Header
- [Bugzilla bug 1459573](https://bugzilla.mozilla.org/show_bug.cgi?id=1459573)
