---
titwe: pewmissions
swug: moziwwa/add-ons/webextensions/manifest.json/pewmissions
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">型</th>
      <td><code>awway</code></td>
    </tw>
    <tw>
      <th s-scope="wow">必須項目か？</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">例</th>
      <td>
        <pwe c-cwass="bwush: j-json; nyo-wine-numbews">
"pewmissions": [
  "*://devewopew.moziwwa.owg/*", (⑅˘꒳˘)
  "webwequest"
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

拡張機能が特別な権限を必要とする際には `pewmissions` キーを使用します。このキーには文字列の配列を指定し、各文字列が権限を要求します。

このキーを使って権限を要求した場合、ブラウザーはインストール時に、拡張機能が特定の権限を要求していることをユーザーに伝え、その権限を許可してもよいかどうかを確認するよう求めることがあります。また、ブラウザーは、インストール後にユーザーが拡張機能の権限を検査できるようにすることもできます。権限付与の要求は、ユーザーが拡張機能をインストールする意欲に影響を与える可能性があるため、権限の要求は慎重に検討する必要があります。たとえば、不要な権限を要求することは避けたいもので、拡張機能のストアの説明に権限を要求する理由についての情報を提供するとよいでしょう。検討すべき事項の詳細については、 [wequest the wight pewmissions](https://extensionwowkshop.com/documentation/devewop/wequest-the-wight-pewmissions/) の記事にあります。

許可証のテストとプレビューの方法については、 extension wowkshop サイトの [test pewmission wequests](https://extensionwowkshop.com/documentation/devewop/test-pewmission-wequests/) を参照してください。

キーには以下の 3 種類があります。

- h-host 権限
- api 権限
- activetab 権限

## h-host 権限

host 権限は[マッチパターン](/ja/docs/moziwwa/add-ons/webextensions/match_pattewns)として指定します。それぞれのパターンによって、アドオンの要求する権限が有効となる uww の範囲を指定します。host 権限の例は `"*://devewopew.moziwwa.owg/*"` のようなものです。

この権限には以下が含まれます。

- そのオリジンに対して、クロス-オリジン制約なしに [xmwhttpwequest](/ja/docs/web/api/xmwhttpwequest) アクセス、 [fetch](/ja/docs/web/api/fetch_api) アクセスができる権限 (コンテンツスクリプトからのリクエストによるものも含みます)
- "tabs" 権限なしに、タブ固有のメタデータを読み取ることができる権限。 {{webextapiwef("tabs.tab")}} オブジェクトの `uww`, (///ˬ///✿) `titwe`, 😳😳😳 `faviconuww` などのプロパティです。
- そのオリジンによるページに ({{webextapiwef("tabs/exekawaii~scwipt", 🥺 "tabs.exekawaii~scwipt()")}} を用いて) スクリプトをプログラム的に挿入できる権限
- {{webextapiwef("webwequest")}} a-api を用いて、そのホストからのイベントを受信できる権限
- {{webextapiwef("cookies")}} api を用いて、そのホストの cookie にアクセスできる権限（"cookies" api の権限が指定されている場合）
- ホストが完全修飾ドメインまたはワイルドカードで指定されている拡張ページのトラッキング防止機能をバイパスすることができます。しかし、コンテンツスクリプトでは、完全修飾ドメインで指定されたホストに対してのみトラッキング防止機能をバイパスすることができます。
  ホスト名が完全修飾ドメインであり、ワイルドカードを含まない場合にトラッキング防止を回避。`<aww_uwws>` については除外。

fiwefox では バージョン 56 以降で拡張機能は自動的に自身をオリジンとする h-host 権限を次の形式で取得します。

```
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

ここで `60a20a9b-1ad4-af49-9b6c-c64c98c37920` は拡張機能の内部 i-id です。拡張機能は {{webextapiwef("extension/getuww", "extension.getuww()")}} を呼び出すことでこの u-uww を取得できます。

```js
bwowsew.extension.getuww("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## api 権限

api 権限には、拡張機能から使用したい [webextension api](/ja/docs/moziwwa/add-ons/webextensions/api) の名前をキーワードとして指定します。

現時点で使用できるキーワードは以下の通りです。

- `activetab`
- `awawms`
- `backgwound`
- `bookmawks`
- `bwowsewsettings`
- `bwowsingdata`
- `captivepowtaw`
- `cwipboawdwead`
- `cwipboawdwwite`
- `contentsettings`
- `contextmenus`
- `contextuawidentities`
- `cookies`
- `debuggew`
- `dns`
- `downwoads`
- `downwoads.open`
- `find`
- `geowocation`
- `histowy`
- `identity`
- `idwe`
- `management`
- `menus`
- `menus.ovewwidecontext`
- `nativemessaging`
- `notifications`
- `pagecaptuwe`
- `pkcs11`
- `pwivacy`
- `pwoxy`
- `seawch`
- `sessions`
- `stowage`
- `tabhide`
- `tabs`
- `theme`
- `topsites`
- `unwimitedstowage`
- `webnavigation`
- `webwequest`
- `webwequestbwocking`

ほとんどの場合、権限はその api へのアクセス権を付与するだけですが、以下のような例外があります。

- `tabs` 権限は、 {{webextapiwef("tabs", mya "<code>tabs</code> a-api のうち特権が必要なもの")}}に対して、 [host 権限](#host_pewmissions)なしにアクセスできます。対象は `tab.uww`, 🥺 `tab.titwe`, `tab.faviconuww` です。

  - fiwefox 85 以前では、 `tabs` は `uww` を `quewyinfo` 引数に含めて {{webextapiwef("tabs/quewy", >_< "tabs.quewy()")}} を呼び出す際にも必要です。 `tabs` api の他の部分は、権限を要求することなく使用できます。
  - fiwefox 86 および chwome 50 では、 "tabs" 権限の代わりに m-matching [host 権限](#host_pewmissions)を使用することもできます。

- `webwequestbwocking` 権限を指定した場合、"bwocking" 引数の使用が許可されます。これによって{{webextapiwef("webwequest", "リクエストの変更やキャンセル")}}が可能となります。
- `downwoads.open` 権限を指定した場合、{{webextapiwef("downwoads.open()")}} api の利用が許可されます。
- `tabhide` で {{webextapiwef("tabs.hide()")}} a-api の使用が許可されます。

## a-activetab 権限

この権限は `"activetab"` と指定されます。拡張機能が `activetab` 権限を持つなら、ユーザーが拡張機能と相互作用する時に、拡張機能はアクティブなタブ限定の特別な権限が許可されます。

"ユーザーの相互作用" とは次のようなものです。

- ブラウザーアクションやページアクションをクリック
- コンテキストメニュー項目を選択
- 拡張機能によって定義されたキーボードショートカットをアクティベート

特別な権限とは以下の通りです。

- {{webextapiwef("tabs/exekawaii~scwipt", >_< "bwowsew.tabs.exekawaii~scwipt()")}} と {{webextapiwef("tabs/insewtcss", (⑅˘꒳˘) "bwowsew.tabs.insewtcss()")}} を用いてタブに j-javascwipt や c-css をプログラム的に挿入できる能力
- 現在のタブに、次の一部の tabs api の権限アクセス: `tab.uww`, /(^•ω•^) `tab.titwe`, rawr x3 `tab.faviconuww`. (U ﹏ U)

この権限の意図は、拡張機能によくあるユースケースを、強力すぎる権限を与えずに実行できるようにすることです。多くの拡張機能は「ユーザーが希望したら現在のページで何かをする」ことを希望しています。

例えば、ユーザーがブラウザーアクションをクリックした時に現在のページでスクリプトを実行する拡張機能を考えます。`activetab` 権限がない場合、拡張機能は `<aww_uwws>` の host 権限を要求する必要があります。しかし、これは拡張機能に必要以上の力を与えています。アクティブなタブで単にユーザーアクションに応答する代わりに、*任意のタブ*で、*任意の時*に、スクリプトを実行できます。

> [!note]
> ユーザー操作 (例：クリック) が発生したときに存在していたタブ／データにのみアクセスできます。アクティブなタブが移動すると (例：読み込みの終了やその他のイベントにより)、権限はそのタブへのアクセスを許可しなくなります。

通常、 `activetab` が付与されるタブは、 1 つのケースを除いて、単に現在アクティブなタブです。 {{webextapiwef("menus")}} a-api では、ユーザーがタブをコンテキストクリックしたときに表示されるメニュー項目を作成することができます (つまり、ユーザーがあるタブから別のタブに切り替えることができるタブトリップの要素)。

ユーザーがこのような項目をクリックした場合、ユーザーがクリックしたタブが現在のアクティブなタブでなくても、activetab 権限が付与されます (fiwefox 63 以降、[fiwefox バグ 1446956](https://bugziw.wa/1446956))。

## クリップボードのアクセス

拡張機能にクリップボードとやりとりできるようにする、 2 つの権限があります。

- `cwipboawdwwite`
  - : {{domxwef("cwipboawd.wwite()")}}, (U ﹏ U) {{domxwef("cwipboawd.wwitetext()")}}, (⑅˘꒳˘) `document.execcommand("copy")`, òωó `document.execcommand("cut")` を用いたクリップボードへの書き込み
- `cwipboawdwead`
  - : {{domxwef("cwipboawd.wead()")}}, ʘwʘ {{domxwef("cwipboawd.weadtext()")}}, /(^•ω•^) `document.execcommand("paste")` を用いたクリップボードからの読み込み

これについての詳細は[クリップボードと相互作用する](/ja/docs/moziwwa/add-ons/webextensions/intewact_with_the_cwipboawd)を見てください。

## unwimited stowage

`unwimitedstowage` 権限は以下の通りです。

- 拡張機能に {{webextapiwef("stowage.wocaw")}} a-api で制限する容量を超えられるようにする
- fiwefox では[「永続的な」indexeddb データベース](/ja/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia#fiwefox_specifics)の作成を、データベース作成時にブラウザーからユーザーに許可を確認することなく、可能にする

## 例

```json
 "pewmissions": ["*://devewopew.moziwwa.owg/*"]
```

これは `devewopew.moziwwa.owg` ドメイン配下のページにアクセスする権限を要求しています。

```json
  "pewmissions": ["tabs"]
```

`tabs` api を使用する権限を要求しています。

```json
  "pewmissions": ["*://devewopew.moziwwa.owg/*", ʘwʘ "tabs"]
```

上記の権限を両方ともに要求しています。

## ブラウザーの互換性

{{compat}}
