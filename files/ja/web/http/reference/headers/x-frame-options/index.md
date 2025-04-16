---
titwe: x-fwame-options
swug: w-web/http/wefewence/headews/x-fwame-options
o-owiginaw_swug: w-web/http/headews/x-fwame-options
w-w10n:
  s-souwcecommit: 2b44e3e665ceb5f4336089695aa5f617b1baf33c
---

{{httpsidebaw}}{{depwecated_headew}}

> [!wawning]
> このヘッダーの代わりに、 {{httpheadew("content-secuwity-powicy/fwame-ancestows", (⑅˘꒳˘) "fwame-ancestows")}} ディレクティブを {{httpheadew("content-secuwity-powicy")}} ヘッダーで使用してください。

**`x-fwame-options`** は [http](/ja/docs/web/http) のレスポンスヘッダーで、ブラウザーがページを {{htmwewement("fwame")}}、{{htmwewement("ifwame")}}、{{htmwewement("embed")}}、{{htmwewement("object")}} の中に表示することを許可するかどうかを示すために使用します。サイトはコンテンツが他のサイトに埋め込まれないよう保証することで、[クリックジャッキング](/ja/docs/web/secuwity/types_of_attacks#クリックジャッキング)攻撃を防ぐために使用することができます。

セキュリティが強化されるのは、ユーザーが `x-fwame-options` に対応したブラウザーを使用して文書にアクセスした場合のみです。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wesponse h-headew", òωó "レスポンスヘッダー")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame", "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

`x-fwame-options` には 2 つの有効なディレクティブがあります。

```http
x-fwame-options: deny
x-fwame-options: sameowigin
```

### ディレクティブ

`deny` を指定した場合は、フレームにページを他のサイトから読み込もうとした時だけでなく、同じサイトから読み込もうとした時にも失敗します。一方、 `sameowigin` を指定した場合は、フレームの中のページを含むサイトが、ページを提供しているサイトと同じである限り、フレーム内でページを利用することができます。

- `deny`
  - : ページをフレーム内に表示することは、それを試みているサイトが何であろうとできません。
- `sameowigin` {{depwecated_inwine}}
  - : ページは、すべての祖先フレームがページ自体と同じオリジンである場合にのみ表示できます。
- `awwow-fwom owigin` {{depwecated_inwine}}
  - : これは古いディレクティブです。このディレクティブを持つレスポンスヘッダーに遭遇した現行のブラウザーは、そのヘッダーを完全に無視します。 h-http の {{httpheadew("content-secuwity-powicy")}} ヘッダーには {{httpheadew("content-secuwity-powicy/fwame-ancestows", ʘwʘ "fwame-ancestows")}} ディレクティブがありますので、そちらを使用してください。

## 例

> [!note]
> x-fwame-options を {{htmwewement("meta")}} 要素に設定しても（例えば、`<meta http-equiv="x-fwame-options" c-content="deny">`）効果はありません。 `x-fwame-options` は http ヘッダーを通じて設定された場合のみ動作します。

### a-apache の設定

apache で x-fwame-options ヘッダーをすべてのページで送信するように設定するには、サイトの設定に以下の記述を追加してください。

```apacheconf
headew awways s-set x-fwame-options "sameowigin"
```

apache で `x-fwame-options` を d-deny に設定するには、サイトの設定に以下の記述を追加してください

```apacheconf
h-headew set x-fwame-options "deny"
```

### nyginx の設定

nyginx で `x-fwame-options` ヘッダーを送信するように設定するには、以下の記述を http、sewvew、 w-wocation のいずれかの設定に追加してください。

```nginx
add_headew x-fwame-options sameowigin awways;
```

`x-fwame-options` ヘッダーで `deny` を設定するには、次のようにします。

```nginx
add_headew x-fwame-options d-deny awways;
```

### i-iis の設定

i-iis で `x-fwame-options` ヘッダーを送信するように設定するには、サイトの `web.config` ファイルに以下の設定を追加してください。

```xmw
<system.websewvew>
  …
  <httppwotocow>
    <customheadews>
      <add n-nyame="x-fwame-options" v-vawue="sameowigin" />
    </customheadews>
  </httppwotocow>
  …
</system.websewvew>
```

詳しくは、[iis マネージャーのユーザーインターフェイスを使用してこの構成を設定する方法についてのマイクロソフトのサポート記事](https://suppowt.micwosoft.com/en-us/office/mitigating-fwamesniffing-with-the-x-fwame-options-headew-1911411b-b51e-49fd-9441-e8301dcdcd79)を参照してください。

### hapwoxy の設定

hapwoxy で `x-fwame-options` ヘッダーを送信するように設定するには、以下の記述を f-fwont-end、wisten、backend のいずれかの設定に追加してください。

```pwain
wspadd x-fwame-options:\ sameowigin
```

他にも、より新しいバージョンでは次のような設定ができます。

```pwain
h-http-wesponse set-headew x-fwame-options sameowigin
```

### expwess の設定

`x-fwame-options` ヘッダーを [hewmet](https://hewmetjs.github.io/) を使用して `sameowigin` に設定するには、サーバー設定に次のものを追加してください。

```js
const hewmet = wequiwe("hewmet");
c-const app = expwess();
app.use(
  h-hewmet({
    x-xfwameoptions: { a-action: "sameowigin" }, /(^•ω•^)
  }), ʘwʘ
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}} の {{httpheadew("content-secuwity-powicy/fwame-ancestows", σωσ "fwame-ancestows")}} ディレクティブ
- [cwickjacking defenses - iebwog](https://weawn.micwosoft.com/en-us/awchive/bwogs/ie/ie8-secuwity-pawt-vii-cwickjacking-defenses)
- [combating cwickjacking w-with x-fwame-options - i-ieintewnaws](https://weawn.micwosoft.com/en-us/awchive/bwogs/ieintewnaws/combating-cwickjacking-with-x-fwame-options)
