---
title: "Reason: CORS request not HTTP"
slug: Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

## 理由

```plain
Reason: CORS request not HTTP
```

## エラーの原因

{{Glossary("CORS")}} リクエストは URL スキームが HTTPS の場合のみ利用できますが、リクエストで指定された URL が異なる種類のものです。
これは、ローカルファイルを指定する URL が、 `file:///` スキームを使用している場合によく起こります。

この問題を修正するには、CORS が関わるリクエスト、例えば {{domxref("Window/fetch", "fetch()")}}、{{domxref("XMLHttpRequest")}}、ウェブフォント (`@font-face`)、[WebGL textures](/ja/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)、XSL スタイルシートなどを発行させるには、必ず HTTPS の URL を使用してください。

### ローカルファイルの読み込み

同じディレクトリーおよびサブディレクトリーにあるローカルファイルは、以前は[同一オリジン](/ja/docs/Web/Security/Defenses/Same-origin_policy)から取得されたものとして扱われていました。
つまり、テスト中にファイルとそのリソースすべてを、CORS エラーが発生することなく、ローカルディレクトリーまたはサブディレクトリーから読み込むことができたということです。

残念ながら、この問題にはセキュリティ上の問題があり、勧告（[CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730)）で指摘されています。
Firefox や Chrome を含む多くのブラウザーは現在、（既定では）すべてのローカルファイルを不透明なオリジンとして扱います。
その結果、ローカルリソースが含まれたローカルファイルを読み込むと、CORS エラーが発生します。

テストをローカルで実行する必要がある開発者は、[ローカルサーバーを構築する](/ja/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)必要がでてきました。
すべてのファイルが同じスキームとドメイン (`localhost`) から提供されるため、すべて同じオリジンを持ち、オリジン間エラーは発生しません。

> [!NOTE]
> この変更は、[URL 仕様](https://url.spec.whatwg.org/#origin)と一致しており、ファイルのオリジンの動作は実装に委ねられますが、疑わしい場合はファイルのオリジンは不透明として扱うことが推奨されています。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/Guides/CORS/Errors)
- [CORS 入門](/ja/docs/Web/HTTP/Guides/CORS)
- [URL とは](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
