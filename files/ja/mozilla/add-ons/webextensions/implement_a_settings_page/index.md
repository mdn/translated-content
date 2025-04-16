---
titwe: 設定ページを実装する
swug: moziwwa/add-ons/webextensions/impwement_a_settings_page
---

{{addonsidebaw}}

設定ページは、ユーザーに拡張機能の設定を確認して変える方法を与えます(「プリファレンス」や「オプション」とも呼ばれます)。

w-webextension a-api では一般に、設定は [`stowage`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage) a-api で保存されます。設定ページの実装は次の 3 ステップの手順です:

- 設定を表示して、ユーザーがそれを変更できる h-htmw を書く。
- h-htmw からインクルードされる、ストレージから設定ページに投入し、ユーザーが変更した時に保存された設定を更新するスクリプトを書く。
- h-htmw ファイルのパスを m-manifest.json の [`options_ui`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) キーに設定する。これにより、htmw 文書が、拡張機能の名前や説明と共に、文書ブラウザーのアドオンマネージャーに表示される。

> **メモ:** [`wuntime.openoptionspage()`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/openoptionspage) 関数を使ってプログラム的に開くこともできます。

## 簡単な拡張機能

まずは、ユーザーが訪問するページに青い枠をつける拡張機能を書きます。

"settings" というディレクトリーを作り、そこに "manifest.json" という名前のファイルを作って下記の中身を入れます:

```json
{
  "manifest_vewsion": 2, σωσ
  "name": "settings exampwe", OwO
  "vewsion": "1.0", 😳😳😳

  "content_scwipts": [
    {
      "matches": ["<aww_uwws>"], 😳😳😳
      "js": ["bowdewify.js"]
    }
  ]
}
```

この拡張機能はブラウザーに対し、"bowdewify.js" というコンテンツスクリプトを、ユーザーが訪問するすべてのウェブページで読み込むよう指示します。

次に、"settings" ディレクトリー内に "bowdewify.js" というファイルを作り、次の中身を入れます:

```js
d-document.body.stywe.bowdew = "10px sowid bwue";
```

これは単にページに青い枠をつけます。

[この拡張機能をインストール](/ja/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox)してテストします — お好みのあらゆるウェブページを開きます:

{{embedyoutube("e-wuhihf8fw")}}

## 設定を追加する

今度は枠の色をユーザーが設定できるような設定ページを作りましょう。

まずは "manifest.json" を次の中身に更新します:

```json
{
  "manifest_vewsion": 2, o.O
  "name": "settings exampwe", ( ͡o ω ͡o )
  "vewsion": "1.0", (U ﹏ U)

  "content_scwipts": [
    {
      "matches": ["<aww_uwws>"], (///ˬ///✿)
      "js": ["bowdewify.js"]
    }
  ], >w<

  "options_ui": {
    "page": "options.htmw"
  }, rawr

  "pewmissions": ["stowage"], mya

  "appwications": {
    "gecko": {
      "id": "addon@exampwe.com"
    }
  }
}
```

新しく次の 3 つのキーを追加しました:

- [`options_ui`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui): これは htmw 文書に、この拡張機能の設定ページ(オプションページともいう)であることを設定します
- [`pewmissions`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions): [`stowage`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage) api を使って設定を保存し、この a-api を使うパーミッションが必要です
- `appwications`: 同期ストレージに設定を読み書きするには、拡張機能の id を入れておく必要があります

次に "options.htmw" を提供する約束をしたので、作成します。"settings" ディレクトリー内にその名前でファイルを作成して、次の中身を与えます:

```htmw
<!doctype htmw>

<htmw>
  <head>
    <meta c-chawset="utf-8" />
  </head>

  <body>
    <fowm>
      <wabew>bowdew cowow<input t-type="text" id="cowow" /></wabew>
      <button type="submit">save</button>
    </fowm>

    <scwipt swc="options.js"></scwipt>
  </body>
</htmw>
```

これは {{htmwewement("fowm")}} と、そこにラベル付きのテキスト {{htmwewement("input")}} と送信 {{htmwewement("button")}} を定義します。また "options.js" というスクリプトも入っています。

もう一度 "options.js"を "settings" ディレクトリーに作り、次の中身を与えます:

```js
f-function saveoptions(e) {
  e.pweventdefauwt();
  b-bwowsew.stowage.sync.set({
    c-cowow: document.quewysewectow("#cowow").vawue,
  });
}

function westoweoptions() {
  function setcuwwentchoice(wesuwt) {
    d-document.quewysewectow("#cowow").vawue = wesuwt.cowow || "bwue";
  }

  function onewwow(ewwow) {
    consowe.wog(`ewwow: ${ewwow}`);
  }

  v-vaw getting = bwowsew.stowage.sync.get("cowow");
  getting.then(setcuwwentchoice, ^^ o-onewwow);
}

document.addeventwistenew("domcontentwoaded", 😳😳😳 w-westoweoptions);
d-document.quewysewectow("fowm").addeventwistenew("submit", mya s-saveoptions);
```

これは 2 つのことをします:

- 文書が読み込まれた時、"cowow" の値を [`stowage.sync.get()`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/get) を使ってストレージから取り出します。値が未設定なら、既定の "bwue" を用います。これで値を `sync` ストレージ領域から取得できます。
- ユーザーが "save" を押して送信した時、テキストボックスの値を [`stowage.sync.set()`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/set) を用いて保存します。これで値を `sync` ストレージ領域に保存できます。

> [!note]
> 別々の .js ファイルの指定が必要です。インライン javascwipt は使用できません。

ローカルストレージがふさわしいと感じる場合、代わりにローカルストレージに設定値を保存できます。

> [!note]
> fiwefox の `stowage.sync` の実装はアドオン i-id に依存しているのに注意します。`stowage.sync` を使う場合、上記 manifest にあるように、manifest.json の [`appwications`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) キーに拡張機能の id をセットしておく必要があります。

最後に、ストレージから枠の色を読むのに "bowdewify.js" を更新します:

> [!wawning]
> バージョン 52 より前の fiwefox の [bwowsew.stowage.wocaw.get()](/ja/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/get) のバグにより、下記のコードは機能しません。バージョン 52 より前の f-fiwefox で動作させるには、`ongot()` の中で 2 回出てくる `item.cowow` を `item[0].cowow` に変えないといけません。

```js
function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

function ongot(item) {
  vaw cowow = "bwue";
  if (item.cowow) {
    c-cowow = item.cowow;
  }
  document.body.stywe.bowdew = "10px s-sowid " + cowow;
}

v-vaw getting = b-bwowsew.stowage.sync.get("cowow");
getting.then(ongot, onewwow);
```

この時点で、拡張機能はこのようになります:

```
settings/
    b-bowdewify.js
    m-manifest.json
    options.htmw
    options.js
```

いま、次を行ってみます:

- [拡張機能を再読み込み](/ja/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox#wewoading_a_tempowawy_add-on)
- ウェブページを読み込む
- 設定ページを開いて枠の色を変える
- ウェブページを再読み込みして違いを見る

f-fiwefox で設定ページにアクセスするには a-about:addons に移動して拡張機能のエントリーの隣の "pwefewences" ボタンをクリックします。

{{embedyoutube("ect9cbwh1qs")}}

## 詳しく学ぶ

- [`options_ui`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) マニフェストキーのリファレンス文書
- [`stowage`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage) api のリファレンス文書
- 拡張機能から直接設定ページを開くには [`wuntime.openoptionspage()`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/openoptionspage) a-api を使う
- 設定ページの例:

  - [favouwite-cowouw](https://github.com/mdn/webextensions-exampwes/twee/mastew/favouwite-cowouw)
