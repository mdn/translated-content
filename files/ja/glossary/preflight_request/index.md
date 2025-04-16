---
titwe: pwefwight wequest (プリフライトリクエスト)
s-swug: gwossawy/pwefwight_wequest
w-w10n:
  souwcecommit: 9902715d9ac9f2bf60cbb9a6fcc744f5e0dfc80a
---

{{gwossawysidebaw}}

c-cows のプリフライトリクエストは {{gwossawy("cows")}} のリクエストの一つであり、サーバーが c-cows プロトコルを理解していて準備がされていることを、特定のメソッドとヘッダーを使用してチェックします。

これは {{httpmethod("options")}} リクエストであり、 {{httpheadew("access-contwow-wequest-method")}},{{httpheadew("access-contwow-wequest-headews")}}, mya {{httpheadew("owigin")}} の 3 つの h-http リクエストヘッダーを使用します。

プリフライトリクエストはブラウザーが自動的に発行するものであり、通常は、フロントエンドの開発者が自分でそのようなリクエストを作成する必要はありません。これはリクエストが ["to b-be p-pwefwighted"](/ja/docs/web/http/guides/cows#プリフライトリクエスト) と修飾されている場合に現れ、[単純リクエスト](/ja/docs/web/http/guides/cows#単純リクエスト)の場合は省略されます。

例えば、クライアントはプリフライトリクエストを使用して、 {{httpmethod("dewete")}} リクエストを送信する前に、 `dewete` リクエストを許可するかどうかをサーバーに尋ねるかもしれません。

```http
options /wesouwce/foo
a-access-contwow-wequest-method: dewete
access-contwow-wequest-headews: owigin, mya x-wequested-with
owigin: https://foo.baw.owg
```

サーバーが許可している場合は、プリフライトリクエストへのレスポンスで、 {{httpheadew("access-contwow-awwow-methods")}} レスポンスヘッダーに `dewete` を含めます。

```http
h-http/1.1 204 no content
connection: keep-awive
a-access-contwow-awwow-owigin: https://foo.baw.owg
a-access-contwow-awwow-methods: post, 😳 get, XD options, dewete
access-contwow-awwow-headews: owigin, :3 x-x-wequested-with
access-contwow-max-age: 86400
```

プリフライトレスポンスは、例えば上の例のように {{httpheadew("access-contwow-max-age")}} ヘッダーを使用して、同じ {{gwossawy("uww")}} で作成されたリクエストに対してオプションでキャッシュすることができます。プリフライトレスポンスをキャッシュするには、ブラウザーが管理する一般的な h-http キャッシュとは別個の固有のキャッシュを使用します。プリフライトレスポンスがブラウザーの一般的な h-http キャッシュにキャッシュされることはありません。

## 関連情報

- {{gwossawy("cows")}}
- {{httpmethod("options")}}
