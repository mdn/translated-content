---
title: "Reason: CORS request did not succeed"
slug: Web/HTTP/CORS/Errors/CORSDidNotSucceed
---

{{HTTPSidebar}}

## 理由

```
Reason: CORS request did not succeed
```

## 何に失敗したか

CORS を使用した {{Glossary("HTTP")}} 要求が、ネットワークまたはプロトコルレベルで HTTP 接続に失敗したために失敗しました。エラーは CORS に直接関連したものではなく、ある種の基本的なネットワークエラーです。

多くの場合、ブラウザーのプラグイン (例えば広告ブロッカーやプライバシー保護) がリクエストをブロックしたときに発生します。

その他の可能性のある原因は以下の通りです。

- 無効な資格情報を用いて `https` のリソースにアクセスしようとすると、このエラーが発生します。
- `http` のリソースに `https` のオリジンのページからアクセスしようとした場合も、このエラーが発生します。
- Firefox 68 では、 `https` のページが `http://localhost` へアクセスすることが禁止されていますが、これは [Bug 1488740](https://bugzilla.mozilla.org/show_bug.cgi?id=1488740) で変更される可能性があります。
- サーバーが ({{Glossary("Preflight request", "プリフライトリクエスト")}}に応答したのに) 実際のリクエストには応答しなかった場合。開発中の HTTP サービスが何もデータを返さずに異常停止した場合などが考えられます。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
