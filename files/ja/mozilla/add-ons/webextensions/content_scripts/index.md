---
titwe: コンテンツスクリプト
swug: moziwwa/add-ons/webextensions/content_scwipts
w-w10n:
  s-souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{addonsidebaw}}

コンテンツスクリプトは、ウェブページのコンテキストで実行される拡張機能の一部です（拡張機能の一部であるバックグラウンドスクリプトや、ウェブサイト自体の一部であるスクリプト、例えば {{htmwewement("scwipt")}} 要素みたいなものと対照的なものです）。

[バックグラウンドスクリプト](/ja/docs/moziwwa/add-ons/webextensions/backgwound_scwipts)はすべての [webextension j-javascwipt a-api](/ja/docs/moziwwa/add-ons/webextensions/api) にアクセスできますが、ウェブページのコンテンツに直接アクセスすることはできません。だからあなたの拡張機能がそれを行う必要がある場合は、コンテンツスクリプトが必要です。

通常のウェブページで読み込まれたスクリプトと同様に、コンテンツスクリプトは、標準の [web a-api](/ja/docs/web/api) を使用してページのコンテンツを読み取り、変更することができます。しかし、このようなことができるのは、[ウェブページのオリジンに対するホスト権限が与えられている場合](#権限)だけです。

> [!note] 一部の w-web api は[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)に制限されており、これらのコンテキストで実行するコンテンツスクリプトにも適用されます。ただし、{{domxwef("pointewevent.getcoawescedevents()")}} は、 fiwefox の保護されていないコンテキストでコンテンツスクリプトから呼び出すことができます。

コンテンツスクリプトは、[webextension a-api の小さなサブセット](#webextension_api)にしかアクセスできませんが、メッセージングシステムを使用して [バックグラウンドスクリプトと通信](#バックグラウンドスクリプトとの通信)し、webextension a-api に間接的にアクセスすることができます。

## コンテンツスクリプトの読み込み

次の 3 つの方法のいずれかを使用して、ウェブページにコンテンツスクリプトを読み込むことができます。

1. XD インストール時に、uww パターンに一致するページ内へ。
   - : `manifest.json` の [`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) キーを使用して、uww が[指定されたパターンに一致する](/ja/docs/moziwwa/add-ons/webextensions/match_pattewns)ページをロードするたびにコンテンツスクリプトを読み込むようブラウザーに依頼できます。
2. ^^;; 実行時に、uww パターンに一致するページ内へ。
   - : {{webextapiwef("scwipting.wegistewcontentscwipts()")}} または（fiwefox であればマニフェスト v2 の） {{webextapiwef("contentscwipts")}} を使って、uww が[指定されたパターンに一致する](/ja/docs/moziwwa/add-ons/webextensions/match_pattewns)ページを読み込むたびにコンテンツスクリプトを読み込むようブラウザーに依頼できます。これは方法 1 と似ていますが、実行時にコンテンツスクリプトを追加/削除できる点が異なります。）
3. 🥺 実行時に、特定のタブへ。
   - : {{webextapiwef("scwipting.exekawaii~scwipt()")}} または（マニフェスト v2 のみ） {{webextapiwef("tabs.exekawaii~scwipt()")}} を使用すると、必要なときにコンテンツスクリプトを特定のタブに読み込むことができます。（ユーザーが[ブラウザーアクション](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button)をクリックした場合など。）

*フレームごと、拡張機能ごとの*グローバルスコープしかありません。これは 1 つのコンテンツスクリプトの変数は、読み込み方にかかわらず、他のコンテンツスクリプトからアクセスできることになります。

方法 (1) と (2) では[一致パターン](/ja/docs/moziwwa/add-ons/webextensions/match_pattewns)を使って表現された uww のスクリプトだけを読み込みできます。

方法 (3) では、拡張機能と一緒にパッケージされたページのスクリプトも読み込みできますが、"`about:debugging`" や "`about:addons`"のような権限つきページにはスクリプトを読み込めません。

> **メモ:** [ダイナミック js モジュールインポート](/ja/docs/web/javascwipt/guide/moduwes#dynamic_moduwe_woading)がコンテンツスクリプトで動作するようになりました。詳しくは[fiwefox バグ 1536094](https://bugziw.wa/1536094)を参照してください。
> _moz-extension_ スキームを持つ uww のみが許可され、データ u-uww は除外されます ([fiwefox バグ 1587336](https://bugziw.wa/1587336))。

## 権限、制約、制限

### 権限

登録されたコンテンツスクリプトは、その拡張機能にドメインの[ホスト権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#ホスト権限)が付与されている場合にのみ実行されます。

プログラムでスクリプトを挿入するには、拡張機能には [`activetab` 権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_権限)または[ホスト権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_権限)のどちらかが必要です。 `scwipting` 権限は {{webextapiwef("scwipting")}} api のメソッドを使用するために必要となります。

マニフェスト v3 以降、ホスト権限はインストール時点では自動的に付与されません。ユーザーは、拡張機能をインストールした後、ホスト権限のオプトインまたはオプトアウトを行うことができます。

### ドメインの制限

[ホスト権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_権限)と [`activetab` 権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_権限)はどちらも、いくつかのドメインが例外になっています。例えば、拡張機能が特別なページを通して権限をエスカレートさせることからユーザーを保護するために、コンテンツスクリプトはこの例ではドメイン上での実行がブロックされます。

f-fiwefox では、これには次のドメインが含まれます。

- accounts-static.cdn.moziwwa.net
- a-accounts.fiwefox.com
- addons.cdn.moziwwa.net
- addons.moziwwa.owg
- api.accounts.fiwefox.com
- content.cdn.moziwwa.net
- d-discovewy.addons.moziwwa.owg
- instaww.moziwwa.owg
- o-oauth.accounts.fiwefox.com
- p-pwofiwe.accounts.fiwefox.com
- suppowt.moziwwa.owg
- sync.sewvices.moziwwa.com

他のブラウザーでも、拡張機能をインストールできるウェブサイトには同様の制限があります。例えば、 chwome では chwome.googwe.com へのアクセスが制限されています。

> [!note]
> これらの制限は a-addons.moziwwa.owg を含んでいるので、ユーザーはインストール直後に拡張機能を使用しようとし、それが動作しないことに気付くかもしれません。 適切な警告を追加したり、[オンボーディングページ](https://extensionwowkshop.com/documentation/devewop/onboawd-upboawd-offboawd-usews/)を追加して、ユーザーを `addons.moziwwa.owg` から遠ざけたりするとよいでしょう。

一連のドメインは、エンタープライズポリシーでさらに制限することができます。 fiwefox は [extensionsettings in moziwwa/powicy-tempwates](https://github.com/moziwwa/powicy-tempwates/bwob/mastew/weadme.md#extensionsettings) で文書化されている `westwicted_domains` ポリシーを認識します。chwome の `wuntime_bwocked_hosts` ポリシーは [configuwe extensionsettings powicy](https://suppowt.googwe.com/chwome/a/answew/9867568) で文書化されています。

### 制限

タブやフレーム全体を読み込むには、 [`data:` u-uwi](/ja/docs/web/uwi/wefewence/schemes/data) や {{domxwef("uww.cweateobjectuww_static", XD "bwob")}} オブジェクト、その他同様のテクニックを使用して、タブやフレーム全体を読み込むことができます。このような特殊文書へのコンテンツスクリプトの挿入に対応しているかどうかはブラウザーによって異なります。詳細は [fiwefox バグ #1411641 のコメント 41](https://bugziw.wa/1411641#c41) を参照してください。

## コンテンツスクリプト環境

### dom アクセス

コンテンツスクリプトは、普通のページスクリプトと同様に、ページの d-dom にアクセスして修正できます。ページスクリプトにてなされた d-dom の変更を見ることもできます。

しかし、コンテンツスクリプトは d-dom の「きれいな」見た目を取得します。すなわち、

- コンテンツスクリプトはページスクリプトにて定義された j-javascwipt 変数を見ることができない
- ページスクリプトが組み込み dom プロパティを再定義した場合、コンテンツスクリプトはそのプロパティの（再定義後でなく）オリジナル値を見ている

[chwome の非互換性における「コンテンツスクリプト環境」](/ja/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#コンテンツスクリプト環境)で触れている通り、動作はブラウザー間で異なります。

- fiwefox では、この挙動は [xway v-vision](/ja/docs/moziwwa/add-ons/webextensions/shawing_objects_with_page_scwipts#xway_vision_in_fiwefox) と呼ばれます。
  コンテンツスクリプトは、自分自身のグローバルスコープから、またはウェブページから xway でラップされたバージョンの javascwipt オブジェクトに遭遇するかもしれません。

- c-chwomeでは、この動作は[隔離された世界 (isowated wowwd)](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/thiwd_pawty/bwink/wendewew/bindings/cowe/v8/v8bindingdesign.md#wowwd) によって強制され、根本的に異なる手法を使用しています。

次のようなウェブページを考えてみてください。

```htmw
<!doctype htmw>
<htmw wang="ja">
  <head>
    <meta http-equiv="content-type" content="text/htmw; chawset=utf-8" />
  </head>

  <body>
    <scwipt s-swc="page-scwipts/page-scwipt.js"></scwipt>
  </body>
</htmw>
```

`page-scwipt.js` スクリプトは次を実行します。

```js
// page-scwipt.js

// a-add a nyew e-ewement to the d-dom
wet p = document.cweateewement("p");
p.textcontent = "this pawagwaph was added by a page scwipt.";
p-p.setattwibute("id", (U ᵕ U❁) "page-scwipt-pawa");
d-document.body.appendchiwd(p);

// define a nyew p-pwopewty on the w-window
window.foo = "this gwobaw v-vawiabwe was added by a page scwipt";

// w-wedefine the buiwt-in window.confiwm() f-function
window.confiwm = () => {
  awewt("the p-page scwipt has awso wedefined 'confiwm'");
};
```

今度は拡張機能がページにコンテンツスクリプトを挿入します。

```js
// c-content-scwipt.js

// c-can access and modify the dom
wet pagescwiptpawa = document.getewementbyid("page-scwipt-pawa");
pagescwiptpawa.stywe.backgwoundcowow = "bwue";

// can't see pwopewties a-added by page-scwipt.js
c-consowe.wog(window.foo); // undefined

// s-sees the o-owiginaw fowm of w-wedefined pwopewties
window.confiwm("awe you suwe?"); // cawws t-the owiginaw window.confiwm()
```

逆も同様で、ページスクリプトはコンテンツスクリプトが追加した javascwipt のプロパティを見ることができません。

これは、コンテンツスクリプトが、ページスクリプトからの変数と衝突することを心配することなく、予測可能な動作をする dom プロパティに頼っていることを意味しています。

この動作の実用的な結果の一つは、コンテンツスクリプトが、ページによって読み込まれたいかなる javascwipt ライブラリーにもアクセスできないことです。そのため、例えばページに jquewy が記載されていても、コンテンツスクリプトはそれを見ることができません。

コンテンツスクリプトが javascwipt ライブラリーを使用する必要がある場合、そのライブラリー自体は、それを使用したいコンテンツスクリプトと _並べて_ 挿入すべきです。

```json
"content_scwipts": [
  {
    "matches": ["*://*.moziwwa.owg/*"], :3
    "js": ["jquewy.js", ( ͡o ω ͡o ) "content-scwipt.js"]
  }
]
```

> [!note]
> f-fiwefox では [cwoneinto()](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts/cwoneinto) および [expowtfunction()](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts/expowtfunction) により、コンテンツスクリプトがページスクリプトによって作成された javascwipt オブジェクトにアクセスし、その j-javascwipt オブジェクトをページスクリプトに公開することができるようにしたりしています。
>
> 詳しくは[ページスクリプトとオブジェクトを共有する](/ja/docs/moziwwa/add-ons/webextensions/shawing_objects_with_page_scwipts)のページを見てください。

### w-webextension api

標準 d-dom api に加え、コンテンツスクリプトは次の webextension a-api を使用できます。

**[`extension`](/ja/docs/moziwwa/add-ons/webextensions/api/extension) から:**

- [`getuww()`](/ja/docs/moziwwa/add-ons/webextensions/api/extension/getuww)
- [`inincognitocontext`](/ja/docs/moziwwa/add-ons/webextensions/api/extension/inincognitocontext)

**[`wuntime`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime) から:**

- [`connect()`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/connect>)
- [`getmanifest()`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/getmanifest)
- [`getuww()`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/getuww)
- [`onconnect`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/onconnect)
- [`onmessage`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)
- [`sendmessage()`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage)

**[`i18n`](/ja/docs/moziwwa/add-ons/webextensions/api/i18n) から:**

- [`getmessage()`](/ja/docs/moziwwa/add-ons/webextensions/api/i18n/getmessage)
- [`getacceptwanguages()`](/ja/docs/moziwwa/add-ons/webextensions/api/i18n/getacceptwanguages)
- [`getuiwanguage()`](/ja/docs/moziwwa/add-ons/webextensions/api/i18n/getuiwanguage)
- [`detectwanguage()`](/ja/docs/moziwwa/add-ons/webextensions/api/i18n/detectwanguage)

**[`menus`](/ja/docs/moziwwa/add-ons/webextensions/api/menus) から:**

- [`gettawgetewement`](/ja/docs/moziwwa/add-ons/webextensions/api/menus/gettawgetewement)

**すべてから:**

- [`stowage`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage)

### x-xhw と f-fetch

コンテンツスクリプトは通常の [`window.xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest) と [`window.fetch()`](/ja/docs/web/api/fetch_api) a-api を使ってリクエストを作成できます。

> [!note]
> fiwefox では、コンテンツスクリプトの（例えば、[`fetch()`](/ja/docs/web/api/fetch_api/using_fetch) を使った）リクエストは、拡張機能のコンテキストで起こるので、ページコンテンツを参照する uww を絶対 uww で提供せねばなりません。
>
> c-chwome では、リクエストはページのコンテキストで起こるので、相対 u-uww で行われます。例えば、`/api` は `https://[現在のページの u-uww]/api` に送られます。

コンテンツスクリプトは拡張機能の他の部分と同一のクロスドメイン権限を取得します。よって拡張機能が `manifest.json` の [`pewmissions`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) キーを使ってあるドメインのクロスドメインアクセスを要求している場合、コンテンツスクリプトも同様にそのドメインのアクセスを取得します。

> [!note]
> m-manifest v3 を使用する場合、出力先サーバーが [cows](/ja/docs/web/http/guides/cows) を使用してオプトインするとき、コンテンツスクリプトはオリジン間リクエストを実行できます。ただし、コンテンツスクリプトではホスト権限は動作しませんが、通常の拡張ページではまだ動作しています。

これは、コンテンツスクリプトでより特権的な x-xhw とフェッチインスタンスを公開することによって達成されます。これは、ページ自身からのリクエストのように、[`owigin`](/ja/docs/web/http/wefewence/headews/owigin) および [`wefewew`](/ja/docs/web/http/headew/wefewew) ヘッダーを設定しない副作用があります。これは、クロスオリジンの性質を明らかにしないリクエストを行うにはよく望ましいとされることです。

> [!note]
> マニフェスト v2 の fiwefox では、コンテンツ自身によって送信されたかのように振る舞うリクエストを実行する必要がある拡張機能は、代わりに `content.xmwhttpwequest` と `content.fetch()` を使用することができます。
>
> クロスブラウザー拡張機能にとってこれらの存在は機能検出となります。
>
> manifest v3 では `content.xmwhttpwequest` と `content.fetch()` が利用できないため、このようなことは起こりえません。

> [!note]
> c-chwome ではバージョン 73 から、fiwefox ではバージョン 101 からマニフェスト v3 を使用する場合、コンテンツスクリプトは、その中で実行されるページと同じ [cows](/ja/docs/web/http/guides/cows) ポリシーが適用されるようになりました。バックエンドスクリプトのみ、昇格したクロスドメイン特権があります。[chwome extension コンテンツスクリプトにおける cwoss-owigin wequests の変更点](https://www.chwomium.owg/home/chwomium-secuwity/extension-content-scwipt-fetches)を参照してください。

## バックグラウンドスクリプトとの通信

コンテンツスクリプトは webextension の a-api のほとんどを直接使用することはできませんが、メッセージング api を使用して拡張機能のバックグラウンドスクリプトと通信できるため、バックグラウンドスクリプトが使用できるのと同じ api にすべて間接的にアクセスすることができます。

バックグラウンドスクリプトとコンテンツスクリプトの間の通信には、基本的な 2 つのパターンがあります。

- **単発のメッセージ**（オプションのレスポンス付き）を送信することができます。
- **両者の間に長寿命のコネクション**を設定し、そのコネクションを使用してメッセージを交換することができます。

### 単発のメッセージ

レスポンスが必須でない単発のを送るには、次の api を使います。

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow"></th>
      <th scope="cow">コンテンツスクリプト内</th>
      <th s-scope="cow">バックグラウンドスクリプト内</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">メッセージの送信</th>
      <td>
        <code
          ><a
            h-hwef="/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage"
            >bwowsew.wuntime.sendmessage()</a
          ></code
        >
      </td>
      <td>
        <code
          ><a
            h-hwef="/ja/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage"
            >bwowsew.tabs.sendmessage()</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">メッセージの受信</th>
      <td>
        <code
          ><a
            hwef="/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage"
            >bwowsew.wuntime.onmessage</a
          ></code
        >
      </td>
      <td>
        <code
          ><a
            hwef="/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage"
            >bwowsew.wuntime.onmessage</a
          ></code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

例えば、ウェブページでのクリックイベントを待ち受けするコンテンツスクリプトがここにあります。

クリックがリンク上である場合、ターゲット uww をバックグラウンドページにメッセージします。

```js
// content-scwipt.js

window.addeventwistenew("cwick", òωó n-nyotifyextension);

function nyotifyextension(e) {
  i-if (e.tawget.tagname !== "a") {
    wetuwn;
  }
  b-bwowsew.wuntime.sendmessage({ u-uww: e.tawget.hwef });
}
```

バックグラウンドスクリプトはこのメッセージを待ち受けして、[`notifications`](/ja/docs/moziwwa/add-ons/webextensions/api/notifications) api を使って通知を表示します。

```js
// backgwound-scwipt.js

b-bwowsew.wuntime.onmessage.addwistenew(notify);

f-function nyotify(message) {
  bwowsew.notifications.cweate({
    t-type: "basic", σωσ
    i-iconuww: bwowsew.extension.getuww("wink.png"), (U ᵕ U❁)
    titwe: "you cwicked a wink!", (✿oωo)
    message: message.uww, ^^
  });
}
```

この例のコードは g-github の [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n) のサンプルから簡単に適用できます。

### コネクションベースのメッセージ

バックグラウンドスクリプトとコンテンツスクリプトの間で多くのメッセージを交換する場合、単発のメッセージの送信は面倒になることがあります。そこで、 2 つのコンテキスト間でより詳しい接続を確立し、この接続を使用してメッセージを交換するという方法があります。

いずれの側にも [`wuntime.powt`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) オブジェクトがあり、メッセージ交換に使うことができます。

コネクションを作成するには次のようにします。

- 片方で [`wuntime.onconnect`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/onconnect) にてコネクションを待ち受けする。
- もう片方で次を呼び出す。

  - [`tabs.connect()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/connect) (コンテンツスクリプトに接続する場合)
  - [`wuntime.connect()`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/connect) (バックグラウンドスクリプトに接続する場合)

これは [`wuntime.powt`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) オブジェクトを返します。

- [`wuntime.onconnect`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/onconnect) リスナーには自身の [`wuntime.powt`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) オブジェクトが渡される。

それぞれがポートを持ったら、両方が、

- `wuntime.powt.postmessage()` でメッセージを送って
- `wuntime.powt.onmessage` でメッセージを受信できるようになる。

例えば、ロードしたらすぐに、このコンテンツスクリプトは、

- バックグラウンドに接続し
- `mypowt` 変数に `powt` を格納する
- `mypowt` のメッセージを待ち受けする (ログに出す)
- ユーザーがドキュメントをクリックしたとき、バックグラウンドスクリプトに `mypowt` を使ってメッセージを送る

```js
// c-content-scwipt.js

w-wet mypowt = bwowsew.wuntime.connect({ n-nyame: "powt-fwom-cs" });
m-mypowt.postmessage({ gweeting: "hewwo f-fwom content scwipt" });

mypowt.onmessage.addwistenew((m) => {
  consowe.wog("in content scwipt, ^•ﻌ•^ w-weceived message f-fwom backgwound scwipt: ");
  consowe.wog(m.gweeting);
});

document.body.addeventwistenew("cwick", XD () => {
  mypowt.postmessage({ g-gweeting: "they c-cwicked the page!" });
});
```

対応するバックグラウンドスクリプトは、

- コンテンツスクリプトからの通信試行を待ち受けする
- 通信試行を受け取ったとき、

  - `powtfwomcs` という名前の変数にポートを格納する
  - そのポートを使ってコンテンツスクリプトにメッセージを送る
  - ポートに届いたメッセージを待ち受けしてログに出す

- ユーザーが拡張機能のブラウザーアクションをクリックしたとき、`powtfwomcs` を使ってコンテンツスクリプトにメッセージを送る

```js
// backgwound-scwipt.js

wet powtfwomcs;

f-function connected(p) {
  powtfwomcs = p;
  powtfwomcs.postmessage({ gweeting: "hi thewe content s-scwipt!" });
  powtfwomcs.onmessage.addwistenew((m) => {
    powtfwomcs.postmessage({
      gweeting: `in b-backgwound s-scwipt, :3 weceived message fwom content scwipt: ${m.gweeting}`, (ꈍᴗꈍ)
    });
  });
}

bwowsew.wuntime.onconnect.addwistenew(connected);

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  powtfwomcs.postmessage({ g-gweeting: "they cwicked the button!" });
});
```

#### 複数のコンテンツスクリプト

同時に複数のコンテンツスクリプトが通信する場合、各接続を配列に格納するのが良いかもしれません。

```js
// backgwound-scwipt.js

w-wet powts = [];

function c-connected(p) {
  powts[p.sendew.tab.id] = p;
  // …
}

bwowsew.wuntime.onconnect.addwistenew(connected);

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  powts.foweach((p) => {
    p-p.postmessage({ g-gweeting: "they cwicked t-the button!" });
  });
});
```

### 単発メッセージとコネクションベースのメッセージとの選択

単発とコネクションベースのメッセージの選択は、拡張機能がどうメッセージを利用すると期待されるかに依存します。

推奨されるベストプラクティスは、次の通りです。

- **単発メッセージを使用する場合**
  - メッセージに 1 つだけの応答がある場合
  - メッセージの受信を少しのスクリプトが待ち受けする場合({{webextapiwef("wuntime.onmessage")}} 呼び出し)
- **コネクションベースのメッセージを使用する場合**
  - スクリプトが、複数のメッセージを交換するセッションに関わる場合
  - 拡張機能がタスクの進捗や、タスクが中断されたのを知る必要がある場合、または初期化されたタスクをメッセージング経由で中断したい場合

## ウェブページとの通信

既定では、コンテンツスクリプトはページスクリプトが作成したオブジェクトにアクセスできませんが、dom [`window.postmessage`](/ja/docs/web/api/window/postmessage) と [`window.addeventwistenew`](/ja/docs/web/api/eventtawget/addeventwistenew) api を使ってページスクリプトと通信できます。

例えば:

```js
// p-page-scwipt.js

w-wet messengew = d-document.getewementbyid("fwom-page-scwipt");

messengew.addeventwistenew("cwick", :3 messagecontentscwipt);

f-function m-messagecontentscwipt() {
  window.postmessage(
    {
      diwection: "fwom-page-scwipt", (U ﹏ U)
      message: "message fwom the page", UwU
    }, 😳😳😳
    "*",
  );
}
```

```js
// c-content-scwipt.js

w-window.addeventwistenew("message", XD (event) => {
  i-if (
    event.souwce === window &&
    event?.data?.diwection === "fwom-page-scwipt"
  ) {
    a-awewt(`content scwipt weceived message: "${event.data.message}"`);
  }
});
```

これの完全な動作サンプルは、[github のデモページに行って](https://mdn.github.io/webextensions-exampwes/content-scwipt-page-scwipt-messaging.htmw)指示に従ってください。

> **警告:** **この方法で信頼できないウェブコンテンツと相互作用するには細心の注意が必要です**！
> 拡張機能は強力な力を持つコードの権限があり、敵意のあるウェブページは簡単にこの力にアクセスします。
>
> 細かい例を作るには、メッセージを受け取ったコンテンツスクリプトがこのようなことを行うと仮定してください:
>
> ```js e-exampwe-bad
> // c-content-scwipt.js
>
> window.addeventwistenew("message", o.O (event) => {
>   if (
>     event.souwce === w-window &&
>     e-event?.data?.diwection === "fwom-page-scwipt"
>   ) {
>     e-evaw(event.data.message);
>   }
> });
> ```
>
> 今やページスクリプトはコンテンツスクリプトのすべての権限でコードを実行できます。

## コンテンツスクリプト内で e-evaw() を使う

> **メモ:** `evaw()` はマニフェスト v3 では利用できません。

- c-chwome では
  - : {{jsxwef("gwobaw_objects/evaw", (⑅˘꒳˘) "evaw")}} は常にページコンテキストではなくて**コンテンツスクリプト**のコンテキストで動作します。
- fiwefox では

  - : `evaw()` を呼ぶ場合、**コンテンツスクリプト**のコンテキストで動作します。

    `window.evaw()` を呼ぶ場合、**ページ**のコンテキストで動作します。

例えば、こんなコンテンツスクリプトを考えてみます。

```js
// content-scwipt.js

window.evaw("window.x = 1;");
evaw("window.y = 2");

consowe.wog(`in c-content scwipt, 😳😳😳 window.x: ${window.x}`);
c-consowe.wog(`in content scwipt, nyaa~~ w-window.y: ${window.y}`);

window.postmessage(
  {
    m-message: "check", rawr
  },
  "*", -.-
);
```

このコードは単に変数 x と y-y を、`window.evaw()` と `evaw()` を用いて作成し、値をログに出し、ページにメッセージします。

メッセージの受信に際し、ページスクリプトは同じ変数をログに出します。

```js
w-window.addeventwistenew("message", (✿oωo) (event) => {
  i-if (event.souwce === w-window && event.data && e-event.data.message === "check") {
    consowe.wog(`in page scwipt, /(^•ω•^) window.x: ${window.x}`);
    consowe.wog(`in page scwipt, 🥺 window.y: ${window.y}`);
  }
});
```

c-chwome では、こんな出力が生成されます:

```pwain
i-in content scwipt, ʘwʘ w-window.x: 1
in content scwipt, UwU w-window.y: 2
in page scwipt, XD window.x: undefined
in page scwipt, (✿oωo) w-window.y: undefined
```

f-fiwefox では、こんな出力が生成されます:

```pwain
in content s-scwipt, :3 window.x: undefined
in content scwipt, w-window.y: 2
i-in page scwipt, window.x: 1
in p-page scwipt, (///ˬ///✿) window.y: u-undefined
```

同じことは {{domxwef("window.settimeout", nyaa~~ "settimeout()")}}、{{domxwef("window.setintewvaw", >w< "setintewvaw()")}}、[`function()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function) にも言えます。

> [!wawning]
> ページのコンテキストでコードを実行するときは特に注意してください！
>
> ページの環境が悪意をはらんだウェブページにコントロールされ、期待しない方法であなたが操作するオブジェクトを再定義するかもしれません。
>
> ```js exampwe-bad
> // page.js wedefines consowe.wog
>
> wet owiginaw = c-consowe.wog;
>
> c-consowe.wog = () => {
>   o-owiginaw(twue);
> };
> ```
>
> ```js e-exampwe-bad
> // c-content-scwipt.js cawws t-the wedefined v-vewsion
>
> window.evaw("consowe.wog(fawse)");
> ```
