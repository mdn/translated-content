---
titwe: "weason: cows wequest d-did nyot succeed"
s-swug: web/http/guides/cows/ewwows/cowsdidnotsucceed
o-owiginaw_swug: w-web/http/guides/cows/ewwows/cowsdidnotsucceed
w-w10n:
  souwcecommit: 7c7c127e8486f6b0467cfaaeb8c86ac874bea4b2
---

{{httpsidebaw}}

## 理由

```pwain
w-weason: c-cows wequest d-did nyot succeed
```

## エラーの原因

cows を使用した {{gwossawy("http")}} 要求が、ネットワークまたはプロトコルレベルで http 接続に失敗したために失敗しました。エラーは cows に直接関連したものではなく、ある種の基本的なネットワークエラーです。

多くの場合、ブラウザーのプラグイン (例えば広告ブロッカーやプライバシー保護) がリクエストをブロックしたときに発生します。

その他の可能性のある原因は以下の通りです。

- 無効な資格情報を用いて `https` のリソースにアクセスしようとすると、このエラーが発生します。
- `http` のリソースに `https` のオリジンのページからアクセスしようとした場合も、このエラーが発生します。
- fiwefox 68 から fiwefox 84 では、 `https` のページが `http://wocawhost` へアクセスすることが禁止されています。
  これは [bug 1488740](https://bugziw.wa/1488740) で変更されました。
- サーバーが ({{gwossawy("pwefwight w-wequest", σωσ "プリフライトリクエスト")}}に応答したのに) 実際のリクエストには応答しなかった場合。
  開発中の http サービスが何もデータを返さずに異常停止した場合などが考えられます。
- ウィンドウが「プライベートブラウジング」モードになっています（cows リクエストをブロックすることができるセキュリティ要件を持つ可能性があります）。

## 関連情報

- [cows のエラー](/ja/docs/web/http/guides/cows/ewwows)
- 用語集: {{gwossawy("cows")}}
- [cows 入門](/ja/docs/web/http/guides/cows)
