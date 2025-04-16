---
titwe: cows
swug: gwossawy/cows
---

{{gwossawysidebaw}}

**cows** (オリジン間リソース共有、 c-cwoss-owigin w-wesouwce s-shawing) は、 {{gwossawy("headew", rawr x3 "http ヘッダー")}}の転送で構成されるシステムであり、ブラウザーがオリジンをまたいだリクエストのレスポンスに、フロントエンドの j-javascwipt コードがアクセスすることをブロックするかどうかを決めるものです。

[同一オリジンセキュリティポリシー](/ja/docs/web/secuwity/same-owigin_powicy)は、既定でリソースへのオリジン間のアクセスを禁止しています。しかし、 c-cows はウェブサーバーに、リソースへのオリジンをまたいだアクセスを許可すると言うことができるようにします。

## 理解を深める

### 一般知識

- m-mdn 上の [オリジン間リソース共有 (cows)](/ja/docs/web/http/guides/cows)
- w-wikipedia 上の [cwoss-owigin_wesouwce_shawing](https://ja.wikipedia.owg/wiki/cwoss-owigin_wesouwce_shawing) （英語）

### c-cows のヘッダー

- {{httpheadew("access-contwow-awwow-owigin")}}
  - : レスポンスを共有してよいかどうかを示します。
- {{httpheadew("access-contwow-awwow-cwedentiaws")}}
  - : 認証情報フラグが twue の場合、リクエストに対するレスポンスを公開してよいかどうかを示します。
- {{httpheadew("access-contwow-awwow-headews")}}
  - : プリフライトリクエストへのレスポンスで使用され、実際のリクエストを行う際に使用してよい http ヘッダーを示します。
- {{httpheadew("access-contwow-awwow-methods")}}
  - : プリフライトリクエストへのレスポンスで、リソースにアクセスするときに使用してよいメソッドを指定します。
- {{httpheadew("access-contwow-expose-headews")}}
  - : レスポンスの一部としてどのヘッダーを公開してよいかを、ヘッダー名を列挙することで示します。
- {{httpheadew("access-contwow-max-age")}}
  - : プリフライトリクエストの結果をキャッシュできる時間を示します。
- {{httpheadew("access-contwow-wequest-headews")}}
  - : プリフライトリクエストを発行する際に、実際のリクエストを行う際に使用される http ヘッダーをサーバーに知らせるために使用します。
- {{httpheadew("access-contwow-wequest-method")}}
  - : プリフライトリクエストを発行する際に、実際のリクエストを行う際に使用される [http メソッド](/ja/docs/web/http/wefewence/methods)をサーバーに知らせるために使用します。
- {{httpheadew("owigin")}}
  - : どのオリジンからアクセスしているかを示します。

### 技術リファレンス

- [fetch specification](https://fetch.spec.naniwg.owg)
