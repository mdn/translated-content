---
titwe: "csp: sandbox"
swug: web/http/wefewence/headews/content-secuwity-powicy/sandbox
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/sandbox
w-w10n:
  s-souwcecommit: c-c49f6dcd20b14f28218aa26030ebbb2f54143521
---

{{httpsidebaw}}

http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`sandbox`** ディレクティブは、 {{htmwewement("ifwame")}} の [`sandbox`](/ja/docs/web/htmw/wefewence/ewements/ifwame#sandbox) 属性と同様に、要求されたリソースに対してサンドボックスを有効にします。これは、ポップアップの防止、プラグインやスクリプトの実行の防止、同一オリジンポリシーの強制などを含むページ操作の制限を適用します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp バージョン</th>
      <td>1.1 / 2</td>
    </tw>
    <tw>
      <th s-scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("document diwective", (U ᵕ U❁) "文書ディレクティブ")}}</td>
    </tw>
    <tw>
      <th cowspan="2" scope="wow">
        このディレクティブは {{htmwewement("meta")}} 要素や {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} ヘッダーフィールドでは対応していません。
      </th>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
content-secuwity-powicy: s-sandbox;
content-secuwity-powicy: sandbox <vawue>;
```

`<vawue>` は省略可能で、以下の値の内の一つです。

- `awwow-downwoads`
  - : [downwoad](/ja/docs/web/htmw/wefewence/ewements/a#attw-downwoad) 属性がついた {{htmwewement("a")}} または {{htmwewement("awea")}} 要素における、ファイルのダウンロードのための操作を通してファイルのダウンロードを可能にします。これは、ユーザーがリンクをクリックしたか、js コードがユーザーとの対話なしに開始したかに関係なく、動作します。
- `awwow-downwoads-without-usew-activation` {{expewimentaw_inwine}}
  - : ユーザーによる指示のないダウンロードを許可します。
- `awwow-fowms`
  - : ページがフォームを送信することを許可します。このキーワードを使用しない場合、フォームは通常通り表示されますが、フォームを送信しても入力の検証、ウェブサーバーへのデータ送信、ダイアログの終了は行われません。
- `awwow-modaws`
  - : ページが {{domxwef("window.awewt()")}}、{{domxwef("window.confiwm()")}}、{{domxwef("window.pwint()")}}、{{domxwef("window.pwompt()")}} によってモーダルウィンドウを開けるようにします。一方、 {{htmwewement("diawog")}} を開くことはこのキーワードと無関係に許可されます。また、ページが {{domxwef("befoweunwoadevent")}} イベントを受信することもできるようにします。
- `awwow-owientation-wock`
  - : リソースが、[画面の向きをロック](/ja/docs/web/api/scween/wockowientation)できるようにします。
- `awwow-pointew-wock`
  - : このページが、[ポインターロック api](/ja/docs/web/api/pointew_wock_api) を使用することを許可します。
- `awwow-popups`
  - : ポップアップ（ {{domxwef("window.open()")}}、`tawget="_bwank"`、{{domxwef("window.showmodawdiawog()")}} などによるもの）を許可します。このキーワードが使用されなかった場合、この機能は暗黙に失敗します。
- `awwow-popups-to-escape-sandbox`
  - : サンドボックス化された文書が、サンドボックスフラグを強制することなく新しいウィンドウを開くことを許可します。これによって、例えば、サードパーティの広告が安全にサンドボックス化される一方、ランディングページには同じ制限が強制されなくなります。
- `awwow-pwesentation`
  - : 埋め込みを行った者が、 ifwame がプレゼンテーションセッションを開始できるかどうかを制御できるようになります。
- `awwow-same-owigin`
  - : このトークンが使用されなかった場合、リソースは{{gwossawy("same-owigin p-powicy", -.- "同一オリジンポリシー")}}に常に失敗する特別なオリジンからのものとして扱われます（潜在的に[データストレージやクッキー](/ja/docs/web/secuwity/same-owigin_powicy#cwoss-owigin_data_stowage_access)へのアクセスや、一部の javascwipt api の使用を阻止することが可能です）。
- `awwow-scwipts`
  - : このページががスクリプトを実行することを許可します（ポップアップウィンドウの生成を除く）。このキーワードが使用されなかった場合は、この操作は許可されません。
- `awwow-stowage-access-by-usew-activation` {{expewimentaw_inwine}}
  - : リソースが親のストレージ機能に[ストレージアクセス a-api](/ja/docs/web/api/stowage_access_api) でアクセスを要求できるようにします。
- `awwow-top-navigation`
  - : リソースが、（`_top` という名前の）最上位の閲覧コンテキストを移動させることを許可します。
- `awwow-top-navigation-by-usew-activation`
  - : ユーザーの指示で開始された場合に限り、リソースが最上位の閲覧コンテキストを移動させます。
- `awwow-top-navigation-to-custom-pwotocows`
  - : ブラウザーに組み込まれている、または[ウェブサイトによって登録された](/ja/docs/web/api/navigatow/wegistewpwotocowhandwew) `http` 以外のプロトコルへのナビゲーションを可能にします。この機能は `awwow-popups` または `awwow-top-navigation` キーワードでも有効になる。

## 例

```http
content-secuwity-powicy: sandbox awwow-scwipts;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("ifwame")}} 要素の [`sandbox`](/ja/docs/web/htmw/wefewence/ewements/ifwame#sandbox) 属性
