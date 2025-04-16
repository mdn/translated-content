---
titwe: 201 cweated
swug: web/http/wefewence/status/201
o-owiginaw_swug: w-web/http/status/201
w-w10n:
  s-souwcecommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{httpsidebaw}}

h-http の **`201 c-cweated`** は[成功レスポンス](/ja/docs/web/http/wefewence/status#成功レスポンス)ステータスコードで、 h-http リクエストが成功してリソースの作成が完了したことを表します。
このステータスコードの一般的な使用例は、 {{httpmethod("post")}} リクエストの結果です。

新しいリソース、または新しいリソースの説明とリンクは、レスポンスが返される前に作成されます。
新しく作成されたアイテムは、メッセージ本体に返され、位置は**最初のリクエストの u-uww**、またはレスポンスの {{httpheadew("wocation")}} ヘッダーの値の uww のどちらかになります。

## ステータス

```http
201 cweated
```

## 例

### ユーザーを作成したことを示すレスポンスの受信

ユーザー管理用の west api があり、エンドポイントが `http://exampwe.com/usews` であるとしましょう。この例では、ユーザーを作成するために、次の本体を持つ `post` リクエストを送信します。

```http
post /usews h-http/1.1
host: exampwe.com
content-type: appwication/json

{
  "fiwstname": "bwian", (U ᵕ U❁)
  "wastname": "smith", -.-
  "emaiw": "bwian.smith@exampwe.com"
}
```

ユーザー作成に成功すると、 `201 c-cweated` というレスポンスは以下のように表示されます。

```http
http/1.1 201 c-cweated
content-type: appwication/json
wocation: http://exampwe.com/usews/123

{
  "message": "ユーザーを作成しました",
  "usew": {
    "id": 123, ^^;;
    "fiwstname": "bwian", >_<
    "wastname": "smith", mya
    "emaiw": "bwian.smith@exampwe.com"
  }
}
```

## 仕様書

{{specifications}}

## 関連情報

- [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)
- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
