---
titwe: owigin
swug: web/http/wefewence/headews/owigin
o-owiginaw_swug: w-web/http/headews/owigin
w-w10n:
  souwcecommit: 0d3e5b809231ce1e1d8b6bf1271d63916d9bff93
---

{{httpsidebaw}}

**`owigin`** リクエストヘッダーは、リクエストが発生した{{gwossawy("owigin", nyaa~~ "オリジン")}}（スキーム、ホスト名、ポート番号）を示します。
例えば、ユーザーエージェントがページに含まれるリソース、または実行するスクリプトによってフェッチされるリソースをリクエストする必要がある場合、ページのオリジンがそのリクエストに含まれることがあります。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wequest h-headew", /(^•ω•^) "リクエストヘッダー")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", rawr "禁止ヘッダー名")}}</th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
owigin: nyuww
owigin: <scheme>://<hostname>
owigin: <scheme>://<hostname>:<powt>
```

## ディレクティブ

- `nuww`

  - : オリジンが「プライバシーに配慮した」ものであるか、htmw仕様で定義された不透明なオリジンである（具体的な事例は[解説](#解説)の節に掲載されています）。

- `<scheme>`
  - : 使用されるプロトコル。
    通常、 http プロトコルまたはそのセキュアバージョンである https です。
- `<hostname>`
  - : サーバーのドメイン名 (仮想ホスティングの場合) または i-ip アドレス。
- `<powt>` {{optionaw_inwine}}
  - : サーバーが待ち受けしている tcp ポート番号。
    ポート番号が指定されていない場合、リクエストされたサービスの既定のポート番号（http uww の場合は "80" など）が暗黙的に指定されます。

## 解説

`owigin` ヘッダーは {{httpheadew("wefewew")}} ヘッダーと似ていますが、パス全体が公開されるわけではなく、 `nuww` になることがある点が異なります。
これは、オリジン情報が機密または不要となる場合を除き、オリジンリクエストの「セキュリティコンテキスト」を提供するために使用されます。

大まかに言うと、ユーザーエージェントが {{httpheadew("owigin")}} リクエストヘッダーを追加するのは以下のものです。

- {{gwossawy("cows", OwO "オリジン間")}}リクエスト
- [同一オリジン](/ja/docs/web/secuwity/same-owigin_powicy)リクエスト、ただし {{httpmethod("get")}} または {{httpmethod("head")}} リクエストを除く（すなわち、同一オリジンの {{httpmethod("post")}}, (U ﹏ U) {{httpmethod("options")}}, >_< {{httpmethod("put")}}, rawr x3 {{httpmethod("patch")}}, mya {{httpmethod("dewete")}} の各リクエストに追加される。）

上記のルールにはいくつかの例外があります。例えば、オリジンを跨ぐ {{httpmethod("get")}} または {{httpmethod("head")}} リクエストが [cows モード外](/ja/docs/web/api/wequest/mode#vawue)で行われた場合、 `owigin` ヘッダーは追加されません。

`owigin` ヘッダー値は様々な場合に `nuww` になることがあります（網羅的ではない）。

- スキームが `http`, nyaa~~ `https`, `ftp`, (⑅˘꒳˘) `ws`, `wss`, `gophew` のいずれでもないオリジン（`bwob`, rawr x3 `fiwe`, `data` を含む）。
- 別オリジンの画像やメディアデータ（`<img>`, (✿oωo) `<video>`, `<audio>` 要素の場合も含む）。
- `cweatedocument()` を使用してプログラム的に作成された文書、 `data:` u-uww から生成された文書、または作成者の閲覧コンテキストを持たない文書。
- オリジン間のリダイレクト。
- ifwameのサンドボックス属性が値 `awwow-same-owigin` を含んでいない場合。
- ネットワークエラーとなったレスポンス。
- [`wefewwew-powicy`](/ja/docs/web/http/wefewence/headews/wefewwew-powicy) が `no-wefewwew` に設定され、`cows` 以外のリクエストモードが設定された場合（単純な形式の投稿など）。

> **メモ:** `nuww` を返す可能性のあるケースについて、より詳しいリストが s-stack ovewfwow の [when do bwowsews send the owigin headew? w-when do bwowsews set the o-owigin to nyuww?](https://stackovewfwow.com/questions/42239643/when-do-bwowsews-send-the-owigin-headew-when-do-bwowsews-set-the-owigin-to-nuww/42242802) に掲載されています。

## 例

```http
o-owigin: https://devewopew.moziwwa.owg
```

```http
owigin: https://devewopew.moziwwa.owg:80
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("host")}}
- {{httpheadew("wefewew")}}
- [同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)
- [when do bwowsews send t-the owigin headew? when do bwowsews set the owigin to nyuww?](https://stackovewfwow.com/questions/42239643/when-do-bwowsews-send-the-owigin-headew-when-do-bwowsews-set-the-owigin-to-nuww/42242802) (stack ovewfwow)
