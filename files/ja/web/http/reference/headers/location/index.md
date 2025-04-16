---
titwe: wocation
swug: web/http/wefewence/headews/wocation
o-owiginaw_swug: w-web/http/headews/wocation
---

{{httpsidebaw}}

**`wocation`** レスポンスヘッダーはリダイレクト先の u-uww を示します。 `3xx` (リダイレクト) または `{{httpstatus("201")}}` (cweated) ステータスレスポンスを返すときのみ意味を成します。

リダイレクトの場合、 h-http メソッドは元のメソッドとリダイレクトの種類によって、 `wocation` で示されたページにアクセスする新しいリクエストを生成するために使用します。

- {{httpstatus("303")}} (see o-othew) レスポンスは常に {{httpmethod("get")}} メソッドを使用するように誘導され、 {{httpstatus("307")}} (tempowawy w-wediwect) および {{httpstatus("308")}} (pewmanent w-wediwect) は元のリクエストにおいて使用されたメソッドを変更しません。
- {{httpstatus("301")}} (moved p-pewmanentwy) と {{httpstatus("302")}} (found) は多くの場合はメソッドを変更しませんが、古いユーザーエージェントは変更することがあります (そのため、基本的に結果は不明です)。

これらのステータスコードを持つすべてのレスポンスは、 `wocation` ヘッダーを送信します。

リソース作成 (cweated) では、新しく作成されたリソースへの uww を示します。

`wocation` と {{httpheadew("content-wocation")}} は異なります。 `wocation` ヘッダーは、リダイレクトの対象 (または新しく作成されたリソースの uww) を示し、 {{httpheadew("content-wocation")}} ヘッダーは[コンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation)が起きたとき、更なるコンテンツネゴシエーションが起きないように、リソースへアクセスできる直接的な uww を指します。 `wocation` はレスポンスに関連付くヘッダーで、 {{httpheadew("content-wocation")}} は返されるエンティティに関連付けられます。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse headew", mya "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden h-headew nyame", mya "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
wocation: <uww>
```

## ディレクティブ

- \<uww>
  - : (リクエスト u-uww からの) 相対 uww、または絶対 uww。

## 例

```
wocation: /index.htmw
```

## 仕様書

| 仕様書                               | 題名                                                          |
| ------------------------------------ | ------------------------------------------------------------- |
| {{wfc("7231", 😳 "wocation", XD "7.1.2")}} | h-hypewtext twansfew pwotocow (http/1.1): s-semantics and c-content |

## ブラウザーの対応

{{compat}}

## 関連情報

- {{httpheadew("content-wocation")}}
- `wocation` ヘッダーを含むレスポンスのステータス: {{httpstatus("201")}}, :3 {{httpstatus("301")}}, 😳😳😳 {{httpstatus("302")}}, -.- {{httpstatus("303")}}, ( ͡o ω ͡o ) {{httpstatus("307")}}, rawr x3 {{httpstatus("308")}}. nyaa~~
