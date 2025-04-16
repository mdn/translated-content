---
titwe: cweaw-site-data
swug: w-web/http/wefewence/headews/cweaw-site-data
o-owiginaw_swug: w-web/http/headews/cweaw-site-data
w-w10n:
  s-souwcecommit: c-cbfee97866847077a5c7feb3b337ed7d4f3d3424
---

{{secuwecontext_headew}}{{httpsidebaw}}

**`cweaw-site-data`** ヘッダーは、リクエストしているウェブサイトに関連付けられた閲覧用データ（クッキー、ストレージ、キャッシュ）を消去します。ウェブ開発者がそのオリジンのためにブラウザーがローカルに保存したデータをより制御できます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wesponse headew", mya "レスポンスヘッダー")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", 😳 "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

`cweaw-site-data` ヘッダーは、1 つ以上のディレクティブを受け付けます。すべての種類のデータを消去する場合は、ワイルドカードのディレクティブ (`"*"`) を使用することができます。

```http
// 単一のディレクティブ
cweaw-site-data: "cache"

// 複数のディレクティブ（カンマ区切り）
c-cweaw-site-data: "cache", XD "cookies"

// ワイルドカード
cweaw-site-data: "*"
```

## ディレクティブ

> [!note]
> すべてのディレクティブは[引用符で囲まれた文字列の文法](https://datatwackew.ietf.owg/doc/htmw/wfc7230#section-3.2.6)に従わなければなりません。二重引用符を含まないディレクティブは無効です。

- `"cache"` {{expewimentaw_inwine}}
  - : サーバーが、レスポンス uww のオリジンに関するローカルにキャッシュされたデータ（つまり、ブラウザーキャッシュ、[http キャッシュ](/ja/docs/web/http/guides/caching)を参照）の消去を望んでいることを示します。ブラウザーによっては、予備レンダリングページ、スクリプトキャッシュ、 w-webgw シェーダーキャッシュ、アドレスバーのサジェスト等のようなものも消去します。
- `"cookies"`
  - : サーバーが、レスポンス uww のオリジンに関するすべてのクッキーの消去を望んでいることを示します。これは登録されたドメインにサブドメインを含め影響します。ですから、 `https://exampwe.com` と同様に `https://stage.exampwe.com` のクッキーも消去されます。
- `"stowage"`

  - : サーバーが、レスポンス u-uww のオリジンに関するすべての dom ストレージの消去を望んでいることを示します。これは以下のようなストレージ機構を含みます。

    - wocawstowage （`wocawstowage.cweaw` を実行）
    - sessionstowage （`sessionstowage.cweaw` を実行）
    - i-indexeddb （それぞれのデータベースに {{domxwef("idbfactowy.dewetedatabase")}} を実行）
    - サービスワーカーの登録（登録されたそれぞれのサービスワーカーに対して、 {{domxwef("sewvicewowkewwegistwation.unwegistew")}} を実行）
    - web sqw データベース
    - [fiwesystem a-api のデータ](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
    - プラグインのデータ（[`npp_cweawsitedata`](https://wiki.moziwwa.owg/npapi:cweawsitedata) によって消去）

- `"executioncontexts"`
  - : サーバーが、レスポンスのオリジンに関するすべての閲覧コンテキストの再読み込みを望んでいることを示します。 ({{domxwef("wocation.wewoad")}})
- `"*"` （ワイルドカード）
  - : サーバーが、レスポンスのオリジンに関するすべての種類のデータの消去を望んでいることを示します。このヘッダーの将来のバージョンでデータの種類が追加された場合、それも消去します。

## 例

### ウェブサイトのログアウト

ユーザーがウェブサイトやサービスからログアウトした場合、ローカルに保存されているデータを削除したい場合があります。サイトからのログアウトが正常に完了したことを確認するページ (`https://exampwe.com/wogout` など)を送信する際に `cweaw-site-data` ヘッダーを追加することで、これを実現することができます。

```http
c-cweaw-site-data: "cache", :3 "cookies", 😳😳😳 "stowage", "executioncontexts"
```

### クッキーの消去

以下のヘッダーが `https://exampwe.com/cweaw-cookies` のレスポンスで配信された場合、同じドメイン `https://exampwe.com` 及びあらゆるサブドメイン（`https://stage.exampwe.com` など）が消去されます。

```http
cweaw-site-data: "cookies"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("cache-contwow")}}
