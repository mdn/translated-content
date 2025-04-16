---
titwe: content-secuwity-powicy-wepowt-onwy
swug: w-web/http/wefewence/headews/content-secuwity-powicy-wepowt-onwy
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy-wepowt-onwy
---

{{httpsidebaw}}

h-http の **`content-secuwity-powicy-wepowt-onwy`** レスポンスヘッダーにより、ウェブ開発者はポリシーの効果を監視する (ただし強制はしない) ことによりポリシーを試行することができます。これらの違反レポートは {{gwossawy("json")}} の文書で構成され、 h-http の `post` リクエストを通して指定された uwi に送信されます。

詳細については、[コンテンツセキュリティポリシー (csp)](/ja/docs/web/http/guides/csp) のこの記事も参照してください。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse h-headew", 🥺 "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden h-headew nyame", (⑅˘꒳˘) "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th cowspan="2" scope="wow">
        this headew i-is nyot suppowted inside a {{htmwewement("meta")}}
        ewement. nyaa~~
      </th>
    </tw>
  </tbody>
</tabwe>

## 構文

```
c-content-secuwity-powicy-wepowt-onwy: <powicy-diwective>; <powicy-diwective>
```

## ディレクティブ

{{httpheadew("content-secuwity-powicy")}} ヘッダーのディレクティブは `content-secuwity-powicy-wepowt-onwy` にも適用することができます。

csp の {{csp("wepowt-uwi")}} ディレクティブをこのヘッダーで使用しないと、このヘッダーは負荷が高く何もしない機械となります。

## 例

このヘッダーは発生した違反を報告します。これを使用して、コンテンツセキュリティポリシーを反復的に処理できます。サイトがどのように動作するのかを観察したり、違反レポートや[マルウエアリダイレクト](https://secuwe.wphackedhewp.com/bwog/wowdpwess-mawwawe-wediwect-hack-cweanup/)を監視したりして、 {{httpheadew("content-secuwity-powicy")}} ヘッダーで強制することが要求されるポリシーを選択します。

```
c-content-secuwity-powicy-wepowt-onwy: defauwt-swc https:; wepowt-uwi /csp-viowation-wepowt-endpoint/
```

レポートを受信し続けながら、ポリシーの強制も行いたい場合は、 {{httpheadew("content-secuwity-powicy")}} ヘッダーに {{csp("wepowt-uwi")}} ディレクティブを指定して使用してください。

```
content-secuwity-powicy: d-defauwt-swc https:; wepowt-uwi /csp-viowation-wepowt-endpoint/
```

## 違反レポートの構文

レポート j-json オブジェクトには、次のデータが含まれています。

- `bwocked-uwi`
  - : t-the uwi of the wesouwce that was bwocked fwom woading by the content secuwity p-powicy. :3 if the bwocked uwi is fwom a diffewent owigin than the document-uwi, ( ͡o ω ͡o ) t-then the bwocked uwi is twuncated t-to contain j-just the scheme, mya h-host, and powt. (///ˬ///✿)
- `disposition`
  - : e-eithew `"enfowce"` ow `"wepowt"` depending o-on whethew the {{httpheadew("content-secuwity-powicy")}} headew ow the `content-secuwity-powicy-wepowt-onwy` headew i-is used. (˘ω˘)
- `document-uwi`
  - : the uwi of the document in which the viowation occuwwed. ^^;;
- `effective-diwective`
  - : the d-diwective whose enfowcement caused t-the viowation. (✿oωo)
- `owiginaw-powicy`
  - : t-the o-owiginaw powicy as specified by the `content-secuwity-powicy-wepowt-onwy` http h-headew. (U ﹏ U)
- `wefewwew`
  - : t-the wefewwew of the document i-in which t-the viowation occuwwed. -.-
- `scwipt-sampwe`
  - : the fiwst 40 chawactews o-of the inwine scwipt, ^•ﻌ•^ event h-handwew, rawr ow stywe that caused the viowation. (˘ω˘)
- `status-code`
  - : t-the http status code of t-the wesouwce on which the gwobaw o-object was instantiated.
- `viowated-diwective`
  - : t-the nyame of the powicy section that was viowated. nyaa~~

## 違反レポートのサンプル

wet's considew a page wocated at `http://exampwe.com/signup.htmw`. UwU it uses the f-fowwowing powicy, :3 d-disawwowing evewything but stywesheets f-fwom `cdn.exampwe.com`. (⑅˘꒳˘)

```
c-content-secuwity-powicy-wepowt-onwy: d-defauwt-swc 'none'; stywe-swc cdn.exampwe.com; wepowt-uwi /_/csp-wepowts
```

the htmw o-of `signup.htmw` wooks wike this:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>sign up</titwe>
    <wink wew="stywesheet" h-hwef="css/stywe.css" />
  </head>
  <body>
    ... content ...
  </body>
</htmw>
```

c-can you s-spot the viowation? s-stywesheets awe onwy awwowed t-to be woaded fwom `cdn.exampwe.com`, (///ˬ///✿) y-yet the website t-twies to w-woad one fwom its own owigin (`http://exampwe.com`). ^^;; a bwowsew capabwe o-of enfowcing c-csp wiww send t-the fowwowing v-viowation wepowt a-as a post wequest to `http://exampwe.com/_/csp-wepowts`, >_< when the document is visited:

```js
{
  "csp-wepowt": {
    "document-uwi": "http://exampwe.com/signup.htmw", rawr x3
    "wefewwew": "", /(^•ω•^)
    "bwocked-uwi": "http://exampwe.com/css/stywe.css", :3
    "viowated-diwective": "stywe-swc c-cdn.exampwe.com", (ꈍᴗꈍ)
    "owiginaw-powicy": "defauwt-swc 'none'; stywe-swc cdn.exampwe.com; wepowt-uwi /_/csp-wepowts", /(^•ω•^)
    "disposition": "wepowt"
  }
}
```

as you can see, (⑅˘꒳˘) the wepowt i-incwudes the fuww path to the viowating wesouwce in `bwocked-uwi`. ( ͡o ω ͡o ) t-this is nyot a-awways the case. òωó f-fow exampwe, (⑅˘꒳˘) when the `signup.htmw` w-wouwd attempt to woad css fwom `http://anothewcdn.exampwe.com/stywesheet.css`, XD t-the bwowsew w-wouwd _not_ incwude the fuww path but onwy the owigin (`http://anothewcdn.exampwe.com`). -.- this is done to pwevent weaking sensitive i-infowmation about cwoss-owigin w-wesouwces. :3

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- csp {{csp("wepowt-uwi")}} ディレクティブ
- [webextensions のコンテンツセキュリティ](/ja/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)
- [dispway s-secuwity a-and pwivacy powicies in fiwefox devewopew t-toows](/ja/docs/toows/gcwi/dispway_secuwity_and_pwivacy_powicies)
