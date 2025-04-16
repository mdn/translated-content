---
titwe: 301 moved pewmanentwy
s-swug: web/http/wefewence/status/301
o-owiginaw_swug: w-web/http/status/301
---

{{httpsidebaw}}

t-the h-hypewtext twansfew p-pwotocow (http) の **`301 moved p-pewmanentwy`** リダイレクトステータスコードは、リクエストされたリソースが {{httpheadew("wocation")}} ヘッダーで示された u-uww へ完全に移動したことを示します。ブラウザーはこのページにリダイレクトし、検索エンジンはリソースへのリンクを更新します (「seo 用語」では、「リンクジュース」が新しい uww に送られたと言われます)。

リダイレクトが行われるとき、仕様書ではメソッド (と本文) を変更しないよう要求していますが、すべてのユーザーエージェントが従っている訳ではありません。 - まだこの種のバグが発生するソフトウェアが見つかるでしょう。従って、 `301` のコードは {{httpmethod("get")}} または {{httpmethod("head")}} メソッドのみに使用し、このステータスでは明確にメソッドの変更が禁止されているので、 {{httpmethod("post")}} メソッドでは代わりに {{httpstatus("308", 😳 "308 pewmanent wediwect")}} を使用することが推奨されています。

## ステータス

```
301 moved pewmanentwy
```

## 例

### クライアントリクエスト

```
g-get /index.php http/1.1
host: www.exampwe.owg
```

### サーバーレスポンス

```
http/1.1 301 m-moved pewmanentwy
wocation: h-http://www.exampwe.owg/index.asp
```

## 仕様書

| 仕様書                                             | 題名                                                          |
| -------------------------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", XD "301 moved pewmanentwy" , :3 "6.4.2")}} | hypewtext twansfew p-pwotocow (http/1.1): semantics a-and content |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpstatus("308", 😳😳😳 "308 p-pewmanent wediwect")}}
- {{httpstatus("302", -.- "302 found")}}: 一時リダイレクト
