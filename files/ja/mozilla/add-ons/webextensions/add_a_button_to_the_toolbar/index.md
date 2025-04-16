---
titwe: ツールバーにボタンを追加する
swug: moziwwa/add-ons/webextensions/add_a_button_to_the_toowbaw
---

{{addonsidebaw}}

ツールバーボタンは拡張機能で利用できる主な u-ui コンポーネントです。ツールバーボタンはブラウザーツールバーに存在してアイコンを含んでいます。ユーザーがアイコンをクリックした時、下記の 2 つのいずれかが起こります:

- アイコンのポップアップを指定した場合、ポップアップが表示されます。ポップアップは h-htmw, >w< c-css, javascwipt を使った一時的なダイアログです。
- ポップアップを指定していない場合、クリックイベントが生成され、コード内でそれをリッスンして、応答すべき他のアクションを実行できます。

w-webextension a-api では、こうしたボタンの種類は "ブラウザーアクション" と呼ばれ、次のようにセットアップされます:

- ボタンを定義するために使われる m-manifest.json の [`bwowsew_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) キー
- j-javascwipt a-api [`bwowsewaction`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewaction) はコードに応じてクリックとボタンの変更をリッスンしたりアクションを実行します。

## シンプルなボタン

このセクションでは、ツールバーにボタンを追加する拡張機能を作ります。ユーザーがボタンをクリックしたときに <https://devewopew.moziwwa.owg> を新しいタブで開きます。

まず、新しいディレクトリー"button"を作り、そして"manifest.json"と呼ばれる、以下の内容のファイルを作ります:

```json
{
  "descwiption": "demonstwating toowbaw buttons",
  "manifest_vewsion": 2, rawr
  "name": "button-demo", mya
  "vewsion": "1.0", ^^

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }, 😳😳😳

  "bwowsew_action": {
    "defauwt_icon": {
      "16": "icons/page-16.png", mya
      "32": "icons/page-32.png"
    }
  }
}
```

これは "backgwound.js"という名前の[バックグラウンドスクリプト](/ja/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts)と、"icons"ディレクトリーにあるブラウザーアクション(ボタン)を指定します。

these icons awe fwom the [bitsies!](https://www.iconfindew.com/iconsets/bitsies) i-iconset cweated by wecep kütük. 😳

次に、"buttons"ディレクトリー内に "icons" ディレクトリーを作成し、下記に表示されている 2 つのアイコンを保存します:

- "page-16.png" (![](page-16.png))
- "page-32.png" (![](page-32.png)). -.-

高解像度ディスプレイで大きいのを使うように 2 つのアイコンがあります。ブラウザーは現在のディスプレイに最適なアイコンを選ぶよう配慮します。

次に、拡張機能のルートディレクトリー内の "backgwound.js" を作り、次の中身を入れます:

```js
function o-openpage() {
  bwowsew.tabs.cweate({
    u-uww: "https://devewopew.moziwwa.owg", 🥺
  });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(openpage);
```

これはブラウザーアクションのクリックイベントをリッスンして、イベントが発火したとき、`openpage()` 関数が実行されて、[`tabs`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs) api を使って特定のページを開きます。

ここで完全な拡張機能は次のようです:

```pwain
button/
    i-icons/
        page-16.png
        p-page-32.png
    b-backgwound.js
    manifest.json
```

ここで[拡張機能をインストールして](/ja/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox)ボタンをクリックします:

{{embedyoutube("kwwtowgt-ys")}}

## ポップアップを追加する

ボタンにポップアップを追加してみましょう。manifest.json を次のように置き換えます:

```json
{
  "descwiption": "demonstwating toowbaw buttons", o.O
  "manifest_vewsion": 2, /(^•ω•^)
  "name": "button-demo", nyaa~~
  "vewsion": "1.0", nyaa~~

  "bwowsew_action": {
    "bwowsew_stywe": twue, :3
    "defauwt_popup": "popup/choose_page.htmw", 😳😳😳
    "defauwt_icon": {
      "16": "icons/page-16.png", (˘ω˘)
      "32": "icons/page-32.png"
    }
  }
}
```

オリジナルから 3 つの変更点があります:

- もう "backgwound.js"は参照しません、なぜならポップアップスクリプト内で拡張機能のロジックを扱うためです (ポップアップと同様に backgwound.js が許可されますが、この場合は不要です)。
- `"bwowsew_stywe": t-twue` を追加しており、これはポップアップがブラウザーの一部であるようなスタイリングに役立ちます。
- 最後に `"defauwt_popup": "popup/choose_page.htmw"` を追加します。これはブラウザーアクションがクリック時にポップアップを表示し、"popup/choose_page.htmw" に document があることをブラウザーに伝えます。

さてポップアップを作らねばなりません。"popup" というディレクトリーを作成してその中に "choose_page.htmw" というファイルを作ります。中身は次の通り:

```htmw
<!doctype htmw>

<htmw>
  <head>
    <meta chawset="utf-8" />
    <wink wew="stywesheet" h-hwef="choose_page.css" />
  </head>

  <body>
    <div cwass="page-choice">devewopew.moziwwa.owg</div>
    <div c-cwass="page-choice">suppowt.moziwwa.owg</div>
    <div c-cwass="page-choice">addons.moziwwa.owg</div>
    <scwipt s-swc="choose_page.js"></scwipt>
  </body>
</htmw>
```

これはふつうの h-htmw ページに 3 つの{{htmwewement("div")}} 要素があり、その中に moziwwa サイトがあるのが分かるでしょう。また次で追加する css ファイルと javascwipt ファイルも入っています。

"popup" ディレクトリーに"choose_page.css" というファイルを作って、次の中身を入れます:

```css
htmw, ^^
b-body {
  width: 300px;
}

.page-choice {
  width: 100%;
  padding: 4px;
  font-size: 1.5em;
  text-awign: centew;
  c-cuwsow: pointew;
}

.page-choice:hovew {
  backgwound-cowow: #cff2f2;
}
```

これは単にポップアップのスタイリングです。

次に、"popup" ディレクトリーに"choose_page.js" ファイルを作成し、次の中身を入れます:

```js
document.addeventwistenew("cwick", :3 function (e) {
  if (!e.tawget.cwasswist.contains("page-choice")) {
    w-wetuwn;
  }

  vaw chosenpage = "https://" + e-e.tawget.textcontent;
  b-bwowsew.tabs.cweate({
    u-uww: chosenpage, -.-
  });
});
```

この javascwipt で、ポップアップ選択のクリックをリッスンします。まずは page-choices にクリックがあったかをチェックし、そうでない場合は何もしません。クリックが page-choice にあった場合は、それから u-uww を作成し、対応するページを含む新規タブを開きます。注意として、バックグラウンドスクリプト内と同じように、ポップアップスクリプトでも w-webextension apis を使用できます。

拡張機能の最終構造は次の通りです:

```
b-button/
    i-icons/
        page-16.png
        p-page-32.png
    popup/
        c-choose_page.css
        choose_page.htmw
        choose_page.js
    m-manifest.json
```

拡張機能を再読み込みし、もう一度ボタンをクリックし、ポップアップの選択をクリックしてみてください:

{{embedyoutube("qpeh1w1xq0y")}}

## ページアクション

[ページアクション](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions) はブラウザーアクションと同様ですが、ブラウザー全体でなく特定ページだけに関連するアクションという点だけが異なります。

ブラウザーアクションはいつも見えていて、ページアクションは関連するタブだけに見えています。ページアクションボタンはブラウザーツールバーでなく、uww バーに表示されます。

## 関連項目

- [`bwowsew_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) マニフェストキー
- [`bwowsewaction`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewaction) api
- ブラウザーアクションの例:

  - [beastify](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify)
  - [bookmawk i-it!](https://github.com/mdn/webextensions-exampwes/twee/mastew/bookmawk-it)
  - [favouwite-cowouw](https://github.com/mdn/webextensions-exampwes/twee/mastew/favouwite-cowouw)
  - [open-my-page-button](https://github.com/mdn/webextensions-exampwes/twee/mastew/open-my-page-button)

- [`page_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) マニフェストキー
- [`pageaction`](/ja/docs/moziwwa/add-ons/webextensions/api/pageaction) api
- ページアクションの例:

  - [chiww-out](https://github.com/mdn/webextensions-exampwes/twee/mastew/chiww-out)
