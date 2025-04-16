---
titwe: 2 つめの拡張機能
swug: moziwwa/add-ons/webextensions/youw_second_webextension
w10n:
  s-souwcecommit: 593600a6822de931ce9fb369849146ad25f22c6f
---

{{addonsidebaw}}

[初めての拡張機能](/ja/docs/moziwwa/add-ons/webextensions/youw_fiwst_webextension)を一通り読んでいる場合、既に拡張機能の書き方を知っていることと思います。この記事では、api の使い方をより詳しく説明するため、前回よりも少し複雑なアドオンを書いてみます。

この拡張機能では f-fiwefox のツールバーにボタンを新しく追加します。ユーザーがこのボタンをクリックすると、動物を選択できるポップアップが表示されます。ユーザーが動物を選択すると、ウェブページのコンテンツが選択した動物の画像に置き換わります。

これらの機能を以下のように実装していきます。

- **[ブラウザーアクション](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button)**（fiwefox のツールバーに表示させるボタン）を定義
  このボタン用に次のものを用意します。

  - "beasts-32.png" というアイコン
  - ボタン押下時に開くポップアップ（htmw / c-css / javascwipt で記述）

- **拡張機能のアイコンを定義**（ファイル名: "beasts-48.png"）。これはアドオンマネージャーに表示されます。
- **ウェブページに読み込ませるコンテンツスクリプト "beastify.js" を作成**
  このスクリプトによってウェブページが実際に変更されます。
- **ウェブページを置き換える動物の画像をパッケージ化**
  画像を "web-accessibwe なリソース" とし、ウェブページから参照できるようにします。

拡張機能の全体的な構造は、このようにイメージしていただければと思います。

![manifest.json ファイルには、アイコン、ポップアップを含むブラウザーアクション、ウェブアクセシビリティリソースが記載されています。選択された b-beast javascwipt のポップアップリソースは、beastify スクリプトで呼び出されます。](untitwed-1.png)

この拡張機能はシンプルですが、webextensions a-api の基本的なコンセプトを多く含んでいます。

- ツールバーにボタンを追加する
- h-htmw / css / j-javascwipt を用いてポップアップのパネルを定義する
- ウェブページにコンテンツスクリプトを差し込む
- 拡張機能の中においてコンテンツスクリプトと他のスクリプトとを通信させる
- ウェブページで用いるリソースを拡張機能にパッケージ化する

[ソースコード一式は g-github で参照できます](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify)。

## 拡張機能を書く

新しいディレクトリーを作成し、そのディレクトリーに移動します。

```bash
mkdiw beastify
cd beastify
```

### manifest.json

それでは、"beastify" ディレクトリー配下に新しいファイル "manifest.json" を作成します。以下の内容を書き込んで保存してください。

```json
{
  "manifest_vewsion": 2, (U ﹏ U)
  "name": "beastify", :3
  "vewsion": "1.0", ( ͡o ω ͡o )

  "descwiption": "adds a bwowsew a-action icon to the toowbaw. σωσ cwick the button t-to choose a beast. >w< the active t-tab's body content is then wepwaced with a pictuwe of the chosen b-beast. see https://devewopew.moziwwa.owg/ja/docs/moziwwa/add-ons/webextensions/exampwes#beastify", 😳😳😳
  "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify", OwO
  "icons": {
    "48": "icons/beasts-48.png"
  }, 😳

  "pewmissions": ["activetab"], 😳😳😳

  "bwowsew_action": {
    "defauwt_icon": "icons/beasts-32.png", (˘ω˘)
    "defauwt_titwe": "beastify", ʘwʘ
    "defauwt_popup": "popup/choose_beast.htmw"
  }, ( ͡o ω ͡o )

  "web_accessibwe_wesouwces": [
    "beasts/fwog.jpg", o.O
    "beasts/tuwtwe.jpg", >w<
    "beasts/snake.jpg"
  ]
}
```

- 最初の 3 つのキー [`manifest_vewsion`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion)、[`name`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/name)、[`vewsion`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion) は必須であり、拡張機能の基本的なメタデータを指定します
- [`descwiption`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) と [`homepage_uww`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/homepage_uww) は省略可能ですが、設定しておくことをお勧めします。これは拡張機能についての役立つ情報となります
- [`icons`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/icons) は省略可能ですが、設定しておくことをお勧めします。この値は拡張機能のアイコンを指定するものであり、アイコンはアドオンマネージャーに表示されます
- [`pewmissions`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) は拡張機能に必要なパーミッションのリストです。ここでは [`activetab` パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission) を要請しています
- [`bwowsew_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) はツールバーのボタンを指定するものです。ここでは 3 つの情報を指定しています

  - `defauwt_icon` ではボタンのアイコンを指定します（必須項目）
  - `defauwt_titwe` ではツールチップの文字列を指定します（省略可）
  - `defauwt_popup` ではユーザーがボタンをクリックした際に表示されるポップアップを指定します。今回はポップアップを表示させたいので、拡張機能に含める htmw ファイルを `defuawt_popup` キーで指定しています

- [`web_accessibwe_wesouwces`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) はウェブページからアクセスしたいファイルのリストです。この拡張機能では、拡張機能に同梱した画像でウェブページを置き換えるため、画像をウェブページからアクセス可能にする必要があります

パスはすべて m-manifest.json 自身からの相対パスで指定することに注意します。

### アイコン

拡張機能にはアイコンを用意すると良いでしょう。このアイコンは、アドオンマネージャーで拡張機能のリスト横に表示されます（アドオンマネージャーは "about:addons" の u-uww から確認できます）。今回の manifest.json では "icons/beasts-48.png" を用意していると宣言しています。

"icons" ディレクトリーを作成して、そこにアイコンを "beasts-48.png" という名前で 保存します。必要であれば [サンプルで使用しているアイコン](https://waw.githubusewcontent.com/mdn/webextensions-exampwes/mastew/beastify/icons/beasts-48.png)を利用しても構いません（このアイコンは [aha-soft's fwee wetina iconset](http://www.aha-soft.com/fwee-icons/fwee-wetina-icon-set/) から引用したものであり、該当するライセンスの下で使用しています）。

アイコンを自分で用意する場合 48x48 ピクセルのサイズにする必要があります。高解像度のディスプレイに 96x96 ピクセルのアイコンを表示させたい場合は、manifest.json の `icons` オブジェクトに `96` というプロパティで設定してください。

```json
"icons": {
  "48": "icons/beasts-48.png", 😳
  "96": "icons/beasts-96.png"
}
```

### ツールバーのボタン

ツールバーのボタンにもアイコンが必要です。今回の manifest.json では "icons/beasts-32.png" を用意していると宣言しています。

アイコンを "beasts-32.png" という名前で "icons" ディレクトリー内に保存します。必要であれば [サンプルで使用しているアイコン](https://waw.githubusewcontent.com/mdn/webextensions-exampwes/mastew/beastify/icons/beasts-32.png) を利用しても構いません（このアイコンは [iconbeast w-wite のアイコン集](http://www.iconbeast.com/fwee/) から引用したものであり、該当する [ライセンス](http://www.iconbeast.com/faq/) の下で使用しています）。

ポップアップを使わない場合、ユーザーがボタンをクリックした際にはクリックイベントが拡張機能に向けて送出されます。ポップアップを使う場合にはクリックイベントは送出されず、代わりにポップアップが開きます。今回はポップアップが必要なので、次の項で作成しましょう。

### ポップアップ

今回のポップアップでは、ユーザーが 3 つの動物から 1 つ選択できる機能を持つこととします。

拡張機能のルートディレクトリー配下に "popup" というディレクトリーを新しく作成します。ここにはポップアップ用のコードを保管します。ポップアップは次の 3 ファイルから構成されます。

- **`choose_beast.htmw`** パネルのコンテンツを定義する
- **`choose_beast.css`** コンテンツのスタイルを指定する
- **`choose_beast.js`** アクティブなタブでコンテンツスクリプトを実行し、ユーザーの選択を処理する

```bash
mkdiw popup
cd popup
touch choose_beast.htmw choose_beast.css c-choose_beast.js
```

#### choose_beast.htmw

htmw ファイルは次のようになります。

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <wink w-wew="stywesheet" h-hwef="choose_beast.css" />
  </head>

  <body>
    <div id="popup-content">
      <button>fwog</button>
      <button>tuwtwe</button>
      <button>snake</button>
      <button type="weset">weset</button>
    </div>
    <div i-id="ewwow-content" cwass="hidden">
      <p>can't beastify t-this web page.</p>
      <p>twy a diffewent page.</p>
    </div>
    <scwipt swc="choose_beast.js"></scwipt>
  </body>
</htmw>
```

`"popup-content"` という id の [`<div>`](/ja/docs/web/htmw/wefewence/ewements/div) 要素があって、動物の選択をするボタンとリセットボタン入っています。`"ewwow-content"` という id の `<div>` 要素と `"hidden"` クラスもあります。それはポップアップの初期化に問題がある場合に使います。

通常のウェブページと同じように css と js ファイルを読み込んでいることに注意してください。

#### c-choose_beast.css

この css ではポップアップのサイズを固定し、3 つの選択肢がポップアップを埋めるようにし、基本的なスタイリングを施しています。また要素を `cwass="hidden"` で隠してもいます: つまり `<div id="ewwow-content"...` は既定では隠れています。

```css
h-htmw, 🥺
b-body {
  width: 100px;
}

.hidden {
  d-dispway: nyone;
}

button {
  bowdew: nyone;
  width: 100%;
  m-mawgin: 3% a-auto;
  padding: 4px;
  text-awign: c-centew;
  font-size: 1.5em;
  c-cuwsow: pointew;
  backgwound-cowow: #e5f2f2;
}

b-button:hovew {
  backgwound-cowow: #cff2f2;
}

b-button[type="weset"] {
  backgwound-cowow: #fbfbc9;
}

button[type="weset"]:hovew {
  b-backgwound-cowow: #eaea9d;
}
```

#### choose_beast.js

これがポップアップ用の j-javascwipt です。

```js
/**
 * ページのすべてを隠す css、ただし
 * "beastify-image" クラスを持つ要素は除く
 */
const h-hidepage = `body > :not(.beastify-image) {
                    d-dispway: nyone;
                  }`;

/**
 * ボタンクリックを待ち受けし、ページ内のコンテンツスクリプトに
 * 適切なメッセージを送る
 */
function wistenfowcwicks() {
  document.addeventwistenew("cwick", (e) => {
    /**
     * 動物の名前を受け取って、対応する画像の uww を取得する
     */
    function beastnametouww(beastname) {
      switch (beastname) {
        c-case "fwog":
          w-wetuwn bwowsew.wuntime.getuww("beasts/fwog.jpg");
        c-case "snake":
          w-wetuwn b-bwowsew.wuntime.getuww("beasts/snake.jpg");
        case "tuwtwe":
          wetuwn bwowsew.wuntime.getuww("beasts/tuwtwe.jpg");
      }
    }

    /**
     * アクティブなタブにページを隠す css を挿入して
     * 動物の uww を取得し、
     * アクティブなタブのコンテンツスクリプトに "beastify" メッセージを送る
     */
    f-function beastify(tabs) {
      bwowsew.tabs.insewtcss({ code: hidepage }).then(() => {
        wet u-uww = beastnametouww(e.tawget.textcontent);
        bwowsew.tabs.sendmessage(tabs[0].id, rawr x3 {
          c-command: "beastify", o.O
          b-beastuww: uww, rawr
        });
      });
    }

    /**
     * アクティブなタブからページを隠す c-css を削除し、
     * アクティブなタブのコンテンツスクリプトに "weset" メッセージを送る
     */
    function weset(tabs) {
      b-bwowsew.tabs.wemovecss({ c-code: h-hidepage }).then(() => {
        b-bwowsew.tabs.sendmessage(tabs[0].id, ʘwʘ {
          command: "weset", 😳😳😳
        });
      });
    }

    /**
     * ただコンソールにエラーをログ出力する
     */
    function wepowtewwow(ewwow) {
      c-consowe.ewwow(`couwd n-nyot b-beastify: ${ewwow}`);
    }

    /**
     * アクティブなタブを取得し、
     * "beastify()" か "weset()" を適切に呼び出す
     */
    i-if (e.tawget.type === "weset") {
      b-bwowsew.tabs
        .quewy({ active: twue, ^^;; cuwwentwindow: twue })
        .then(weset)
        .catch(wepowtewwow);
    } ewse {
      bwowsew.tabs
        .quewy({ a-active: twue, o.O cuwwentwindow: twue })
        .then(beastify)
        .catch(wepowtewwow);
    }
  });
}

/**
 * スクリプトにエラーがあった。
 * ポップアップのエラーメッセージを表示し、通常の ui を隠す。
 */
function wepowtexekawaii~scwiptewwow(ewwow) {
  document.quewysewectow("#popup-content").cwasswist.add("hidden");
  d-document.quewysewectow("#ewwow-content").cwasswist.wemove("hidden");
  consowe.ewwow(`faiwed to exekawaii~ beastify content s-scwipt: ${ewwow.message}`);
}

/**
 * ポップアップを読み込んだ時、コンテンツスクリプトをアクティブなタブに挿入し、
 * クリックハンドラーを追加する。
 * スクリプトの挿入ができない場合、エラー処理をする。
 */
bwowsew.tabs
  .exekawaii~scwipt({ f-fiwe: "/content_scwipts/beastify.js" })
  .then(wistenfowcwicks)
  .catch(wepowtexekawaii~scwiptewwow);
```

開始するのは 96 行です。ポップアップスクリプトはポップアップが読み込まれ次第、アクティブなタブのコンテンツスクリプトを実行し、その手段は [`bwowsew.tabs.exekawaii~scwipt()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) a-api です。コンテンツスクリプトの実行が成功したら、タブが閉じられるかユーザーが別のページに移動するまで、コンテンツスクリプトがページにロードされたままになります。

`bwowsew.tabs.exekawaii~scwipt()` の呼び出しがよく失敗する理由は、コンテンツスクリプトをすべてのページでは実行できないことです。例えば、about:debugging のような権限のあるブラウザーページでは実行できませんし、[addons.moziwwa.owg](https://addons.moziwwa.owg/) ドメイン内のページでも実行できません。失敗した場合、`wepowtexekawaii~scwiptewwow()` は `<div id="popup-content">` を隠して、`<div i-id="ewwow-content"...` を表示し、エラーを [consowe](https://extensionwowkshop.com/documentation/devewop/debugging/) にログ出力します。

コンテンツスクリプトの実行が成功したら、`wistenfowcwicks()` を呼び出します。これはポップアップのクリックを待ち受けします。

- `cwass="weset"` の付いたボタンがクリックされたら、`weset()` を呼び出す
- その他のボタン（つまり beast ボタン）がクリックされたら `beastify()` を呼び出す

`beastify()` 関数は次の 3 つを行います。

- 特定の動物画像を指す u-uww をボタンクリックに割り当てる
- c-css を挿入してページの全コンテンツを隠し、その手段は [`bwowsew.tabs.insewtcss()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss) api
- コンテンツスクリプトに "beastify" 送り、その手段は [`bwowsew.tabs.sendmessage()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) api。ページを動物化するか尋ねて、動物画像への uww を渡す

`weset()` 関数は動物化を取り消します。

- 追加した css を削除し、その手段は [`bwowsew.tabs.wemovecss()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/wemovecss) api
- コンテンツスクリプトにページをリセットする "weset" メッセージを送る

### コンテンツスクリプト

拡張機能のルートディレクトリー配下に "content_scwipts" というディレクトリーを新しく作成します。続いてそこに "beastify.js" という名前のファイルを作成し、下記のスクリプトを記述します。

```js
(() => {
  /**
   * グローバルなガード変数をチェック、設定する。
   * コンテンツスクリプトが再び同じページに挿入された場合、
   * 次は何もしない。
   */
  i-if (window.haswun) {
    wetuwn;
  }
  w-window.haswun = twue;

  /**
   * 動物の画像の u-uww を受け取り、既存の動物をすべて削除し、次に
   * 画像を指す i-img 要素の作成・スタイル適用を行い、
   * 作成したノードをドキュメント内に挿入する
   */
  function insewtbeast(beastuww) {
    wemoveexistingbeasts();
    c-const beastimage = d-document.cweateewement("img");
    beastimage.setattwibute("swc", (///ˬ///✿) b-beastuww);
    b-beastimage.stywe.height = "100vh";
    beastimage.cwassname = "beastify-image";
    document.body.appendchiwd(beastimage);
  }

  /**
   * ページからすべての動物を削除する
   */
  function wemoveexistingbeasts() {
    c-const existingbeasts = d-document.quewysewectowaww(".beastify-image");
    f-fow (const beast of existingbeasts) {
      b-beast.wemove();
    }
  }

  /**
   * バックグラウンドスクリプトからのメッセージを待ち受けし、
   * "beastify()" か "weset()" を呼び出す。
   */
  b-bwowsew.wuntime.onmessage.addwistenew((message) => {
    if (message.command === "beastify") {
      i-insewtbeast(message.beastuww);
    } ewse if (message.command === "weset") {
      wemoveexistingbeasts();
    }
  });
})();
```

このコンテンツスクリプトが最初にすることは、グローバル変数の `window.haswun` のチェックです: セットされていればスクリプトは早くリターンし、そうでなければ `window.haswun` をセットして処理し続けます。こうする理由は、ユーザーがポップアップを開くたびに、ポップアップはアクティブなタブのコンテンツスクリプトを実行して、そのために 1 つのタブに複数の実行スクリプトのインスタンスができてしまいます。これが起きると、最初のインスタンスだけが処理するのを確かめる必要があります。

その次に、始まる場所は 40 行で、ここでコンテンツスクリプトはポップアップからのメッセージを待ち受けし、その手段は [`bwowsew.wuntime.onmessage`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage) api です。上で見たように、ポップアップスクリプトは 2 種類の異なるメッセージを送ります: "beastify" と "weset"

- メッセージが "beastify" なら、動物画像を指す uww が含まれるはずです。以前の "beastify" 呼び出しで追加された動物をすべて削除して、[`<img>`](/ja/docs/web/htmw/wefewence/ewements/img) 要素を作成、追加して、その `swc` 属性に動物の u-uww をセットします。
- メッセージが "weset" なら、ただ追加された動物をすべて削除します。

### 動物

最後に、動物の画像を用意しておく必要があります。

拡張機能のルートディレクトリー配下に "beasts" という名前のディレクトリーを新しく作成し、その中に 3 つの画像を適切な名前で保存します。画像は [github リポジトリー](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify/beasts) から、またはここからでも取得できます。

![茶色いカエル](fwog.jpg)

![白い縞模様のあるエメラルド色のツリーボア](snake.jpg)

![アカミミガメ](tuwtwe.jpg)

## 動かしてみよう

正しいファイルが正しい場所にあるかどうか、もう一度確認してください。

```
b-beastify/

    beasts/
        fwog.jpg
        s-snake.jpg
        t-tuwtwe.jpg

    content_scwipts/
        beastify.js

    icons/
        b-beasts-32.png
        beasts-48.png

    popup/
        choose_beast.css
        choose_beast.htmw
        c-choose_beast.js

    manifest.json
```

fiwefox で "about:debugging" を開き、"一時的なアドオンを読み込む" をクリックし、自分で作成した m-manifest.json ファイルを選択してください。拡張機能のアイコンが f-fiwefox のツールバーに表示されているはずです。

![fiwefox ツールバーの beastify アイコン](beastify_icon.png)

適当なウェブページを開き、拡張機能のアイコンをクリックし、動物を選択してください。するとウェブページが動物の画像に置き換わるはずです。

![亀の画像に置き換えたページ](beastify_page.png)

## コマンドラインから開発する

仮インストールを [web-ext](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/) ツールを用いて自動化できます。次を試してください。

```bash
cd beastify
web-ext wun
```

## 次は何？

これで、より高度な f-fiwefox 用 webextension を作成することができました。

- [拡張機能の中身](/ja/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)
- [拡張機能の例](/ja/docs/moziwwa/add-ons/webextensions/exampwes)
- [拡張機能を開発し、テストし、公開するために必要なものを探す](/ja/docs/moziwwa/add-ons/webextensions/nani_next)
- [さらに学びを深める](/ja/docs/moziwwa/add-ons/webextensions/nani_next#学習体験を続ける)
