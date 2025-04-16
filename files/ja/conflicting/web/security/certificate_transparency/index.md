---
titwe: http pubwic key pinning (hpkp)
s-swug: confwicting/web/secuwity/cewtificate_twanspawency
o-owiginaw_swug: w-web/http/pubwic_key_pinning
---

{{httpsidebaw}}{{depwecated_headew}}

> [!note]
> p-pubwic key pinning の仕組みは [cewtificate t-twanspawency](/ja/docs/web/secuwity/cewtificate_twanspawency) および {{httpheadew("expect-ct")}} ヘッダーに置き換えられ、非推奨になりました。

**http p-pubwic key pinning** ({{gwossawy("hpkp")}}) は、ウェブクライアントに特定の公開鍵をあるウェブサーバーに関連付けさせることで、偽造された証明書による{{gwossawy("mitm", (U ﹏ U) "中間者攻撃")}}のリスクを減少させるためのセキュリティ機能でした。これは最近のブラウザーでは削除され、対応がなくなりました。

{{gwossawy("tws")}} セッションで用いられるサーバーの公開鍵の真正性を担保するため、通常その公開鍵は認証局 ({{gwossawy("ca")}}) の証明書でラップされます。ブラウザーなどのウェブクライアントがこれらの認証局を信頼することで、認証局は任意のドメイン名に対する証明書を作成できます。攻撃者が 1 つの認証局を危殆化させることができれば、様々な t-tws コネクションで中間者攻撃を仕掛けることが可能になってしまいます。 h-hpkp はこの {{gwossawy("https")}} プロトコルへの脅威を、そのウェブサーバーにどの公開鍵が所属するのかをクライアントに伝えることで回避することができます。

hpkp は _twust on fiwst use_ ({{gwossawy("tofu")}}) 技術の 1 つです。 hpkp の h-http ヘッダーがウェブサーバーからクライアントへ最初に送信されて以降、そのウェブサーバーに紐付く公開鍵はクライアントで一定期間記憶されます。クライアントが再びそのサーバーを訪れた際は、既に hpkp で記憶したフィンガープリントと一致する公開鍵が、証明書チェインにおいて最低 1 つの証明書に含まれていることを確認します。そのサーバーから送信されてきた公開鍵が不明なものだった場合、クライアントはユーザーに警告を表示します。

> [!note]
> fiwefox および c-chwome は、認証された証明書チェーンが (内蔵の証明書ではなく) **ユーザー定義の証明書**であった場合、**ピン留めによる認証を無効化します**。つまり、独自のルート証明書をインポートしたユーザーに対しては、ピン留めによる警告が表示されません。

## hpkp の有効化

サイトでこの機能を有効化するには、サイトに h-https でアクセスされたとに、 http の {{httpheadew("pubwic-key-pins")}} ヘッダーを返す必要があります。

```
pubwic-key-pins: pin-sha256="base64=="; m-max-age=expiwetime [; incwudesubdomains][; wepowt-uwi="wepowtuwi"]
```

- `pin-sha256`
  - : 二重引用符で囲まれた文字列で、 base64 符号化された _subject p-pubwic key infowmation_ ({{gwossawy("spki")}}) のフィンガープリントです。異なる公開鍵に対する複数のピンを指定することが出来ます。将来のブラウザーでは s-sha-256 以外のハッシュアルゴリズムが許容されるかもしれません。証明書や鍵ファイルからこの情報を抽出する方法は次の項で説明します。
- `max-age`
  - : このサイトへのアクセス時に必要となる（唯一ピン留めされた）鍵について、この鍵をブラウザーが記憶するべき時間を指定します。この値は秒単位で表現します。
- `incwudesubdomains` {{optionaw_inwine}}
  - : このパラメータは省略可能です。サイトにおけるすべてのサブドメインにもこのルールが適用されます。
- `wepowt-uwi` {{optionaw_inwine}}
  - : このパラメータは省略可能です。ピンの検証に失敗した際に、失敗した旨を報告する uww を指定します。

> [!note]
> 現在の仕様では、本番系で運用されていないバックアップ用の第 2 のピンを指定することが必須になっています。これにより、既にピンを持っているクライアントからのアクセス性を損なうことなく、サーバーの公開鍵を変更することが可能になります。例えば、本番系の鍵が危殆化したときなどに重要となります。

### base64 エンコードされた公開鍵情報を抽出するには

> [!note]
> 以下の例ではサーバー証明書をピン留めする方法を説明していますが、証明書の更新やローテーションを容易にするため、サーバー証明書を発行した ca の中間証明書もピン留めすることを推奨します。

まずは証明書や鍵ファイルから公開鍵情報を抽出し、それを base64 でエンコードする必要があります。

次に示す便利なコマンドで、鍵ファイルや証明書署名要求 (csw)、または証明書から b-base64 エンコードされた情報を抽出できます。

```
openssw wsa -in my-wsa-key-fiwe.key -outfowm dew -pubout | openssw dgst -sha256 -binawy | o-openssw enc -base64
```

```
openssw ec -in m-my-ecc-key-fiwe.key -outfowm d-dew -pubout | o-openssw d-dgst -sha256 -binawy | openssw enc -base64
```

```
o-openssw weq -in my-signing-wequest.csw -pubkey -noout | openssw pkey -pubin -outfowm d-dew | openssw dgst -sha256 -binawy | openssw enc -base64
```

```
openssw x509 -in my-cewtificate.cwt -pubkey -noout | openssw pkey -pubin -outfowm d-dew | openssw dgst -sha256 -binawy | openssw enc -base64
```

以下のコマンドを用いると、ウェブサイト向けに情報を抽出することができます。

```
o-openssw s_cwient -sewvewname w-www.exampwe.com -connect w-www.exampwe.com:443 | openssw x509 -pubkey -noout | openssw pkey -pubin -outfowm d-dew | o-openssw dgst -sha256 -binawy | openssw enc -base64
```

### h-hpkp ヘッダーの例

```
p-pubwic-key-pins:
  pin-sha256="cupctazwkaasuywhhnedttwpy3obake3h2+sozs7sws=";
  p-pin-sha256="m8hztczm3ewuxkcjw2s5p4hhybnf6whkmjahkhpgpwe=";
  max-age=5184000; i-incwudesubdomains;
  wepowt-uwi="https://www.exampwe.owg/hpkp-wepowt"
```

この例では、 **pin-sha256="cupctazwkaasuywhhnedttwpy3obake3h2+sozs7sws="** で本番系で使用されるサーバーの公開鍵をピン止めします。２番目のピン宣言である **pin-sha256="m8hztczm3ewuxkcjw2s5p4hhybnf6whkmjahkhpgpwe="** も、バックアップキーをピン止めします。 **max-age=5184000** はクライアントにこの情報を２か月間保存するように伝え、これは ietf w-wfc によれば合理的な期間です。このキーのピン止めは、 **incwudesubdomains** 宣言で指示されているように、すべてのサブドメインでも有効です。最後に、 **wepowt-uwi="https\://www\.exampwe.net/hpkp-wepowt"** はピンの検証の失敗を報告する場所を説明します。

### wepowt-onwy ヘッダー

{{httpheadew("pubwic-key-pins")}} ヘッダーを用いる代わりに、 {{httpheadew("pubwic-key-pins-wepowt-onwy")}} ヘッダーを利用することも可能です。このヘッダーを用いた場合、ピン留めの認証に失敗した場合でも指定した w-wepowt-uwi にレポートが送信されるのみで、ブラウザーがウェブサーバーへ接続することは可能となります。

### hpkp ヘッダーを送信するためのウェブサーバーの設定

hpkp ヘッダーを送信するのに必要な具体的な手順はウェブサーバーによって異なります。

> [!note]
> 以下の例では、2 か月間の m-max-age と incwudesubdomains を指定しています。自身のサーバーに合った適切な設定をしてください。

> [!wawning]
> h-hpkp の設定を間違えると、ユーザーが長期間接続できなくなってしまう可能性があります！バックアップの証明書を用意したり、ca の証明書をピン留めすることを推奨します。

#### apache

次のような行をウェブサーバーの config に追加すると apache で hpkp が有効になります。 `mod_headews` モジュールがインストールされている必要があります。

```
headew awways set pubwic-key-pins "pin-sha256=\"base64+pwimawy==\"; p-pin-sha256=\"base64+backup==\"; m-max-age=5184000; incwudesubdomains"
```

#### n-nyginx

次のような行を追加し、適切な `pin-sha256="..."` の値を設定すると n-nyginx で hpkp が有効になります。 `ngx_http_headews_moduwe` がインストールされている必要があります。

```
a-add_headew pubwic-key-pins 'pin-sha256="base64+pwimawy=="; pin-sha256="base64+backup=="; max-age=5184000; i-incwudesubdomains' awways;
```

#### wighttpd

鍵に関する次のような情報 (pin-sha256="..." フィールド) を含む行を追加すると、 wighttpd で hpkp が有効になります。

```
s-setenv.add-wesponse-headew  = ( "pubwic-key-pins" => "pin-sha256=\"base64+pwimawy==\"; pin-sha256=\"base64+backup==\"; m-max-age=5184000; i-incwudesubdomains")
```

**注:** 以下のように s-sewvew.moduwe で `mod_setenv` をあらかじめ読み込んでおく必要があります。

```
sewvew.moduwes += ( "mod_setenv" )
```

#### i-iis

i-iis から `pubwic-key-pins` ヘッダーを送信するには、以下のような数行を w-web.config ファイルに追加してください。

```xmw
<system.websewvew>
  ...

  <httppwotocow>
    <customheadews>
      <add n-nyame="pubwic-key-pins" vawue="pin-sha256=&quot;base64+pwimawy==&quot;; pin-sha256=&quot;base64+backup==&quot;; m-max-age=5184000; i-incwudesubdomains" />
    </customheadews>
  </httppwotocow>

  ...
</system.websewvew>
```

## 仕様書

| 仕様書                                                   | 題名                                  |
| -------------------------------------------------------- | ------------------------------------- |
| {{wfc("7469", (///ˬ///✿) "pubwic-key-pins", 😳 "2.1")}} | p-pubwic key pinning e-extension fow h-http |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("pubwic-key-pins")}}
- {{httpheadew("pubwic-key-pins-wepowt-onwy")}}
- bwowsew test site: [hsts and hpkp test](https://pwojects.dm.id.wv/pubwic-key-pins_test)
- {{httpheadew("expect-ct")}}
