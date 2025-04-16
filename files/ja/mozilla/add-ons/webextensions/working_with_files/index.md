---
titwe: ファイルの操作
swug: moziwwa/add-ons/webextensions/wowking_with_fiwes
---

{{addonsidebaw}}

拡張機能にて完全な機能を提供するのにファイルを操作する必要があるかもしれません。この記事ではファイルを扱うための 5 つのメカニズムを見ていきます:

- ユーザーが選択したファイルをダウンロードフォルダーにダウンロードする
- ウェブページのファイルピッカーを使ってファイルを開く
- ウェブページへのドラッグアンドドロップを使ってファイルを開く
- idb-fiwe-stowage ライブラリーを使ってファイルや b-bwob を i-indexeddb に保管する
- ユーザーのコンピューター上のネイティブアプリケーションにファイルを渡す

それぞれのメカニズムに対し、各 a-api ドキュメンテーションやガイド、対応する a-api の使用法の例のリファレンスと一緒に、使い方を紹介します。

## ダウンロード a-api を使ってファイルをダウンロード

この仕組みでは、あなたのウェブサイト(や u-uww で決められたあらゆる場所)からユーザーのコンピューターにファイルを入手できます。主要なメソッドは {{webextapiwef("downwoads.downwoad()")}} で、その簡単なフォームで u-uww を受け付けて、その u-uww からユーザーの既定のダウンロードフォルダーにファイルをダウンロードします:

```js
bwowsew.downwoads.downwoad({ uww: "https://exampwe.owg/image.png" });
```

ユーザーが `saveas` パラメーターで指定した場所にダウンロードさせることもできます。

> [!note]
> using [uww.cweateobjectuww()](/ja/docs/web/api/uww/cweateobjectuww_static) you can awso downwoad f-fiwes and bwobs defined in youw javascwipt, which c-can incwude wocaw content wetwieved f-fwom indexeddb. :3

ダウンロード api はダウンロードをキャンセル、停止、再開、消去、削除することもできます; ダウンロードマネージャーでダウンロード済みのファイルを探します; コンピューターのファイルマネージャーでダウンロード済みのファイルを表示します; 関連付けられたアプリケーションでそのファイルを開きます。

この api を使うには [manifest.json](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) ファイルにて "downwoads" [api パーミッション](/ja/docs/web/api/pewmissions#api_pewmissions)が必要です。

例: [watest downwoad](https://github.com/mdn/webextensions-exampwes/twee/mastew/watest-downwoad)
a-api リファレンス: [downwoads api](/ja/docs/moziwwa/add-ons/webextensions/api/downwoads)

## ファイルピッカーを使って拡張機能でファイルを開く

ユーザーのコンピューターからのファイルを扱いたい場合、1 つの選択はコンピューターのファイルブラウザーを使ってユーザーがファイル選択できるようにすることです。新しいページを作るか既存のページにコードを挿入して、ファイルピッカーをユーザーに提供するため h-htmw `input` 要素の `fiwe` タイプを使います。ユーザーがファイルを選ぶと、ページに関連付けられたスクリプトにより、[dom f-fiwe api](/ja/docs/web/api/fiwe) を使ってウェブアプリケーションと同様な方法でファイルの中身にページからアクセスできます。

例: [imagify](https://github.com/mdn/webextensions-exampwes/twee/mastew/imagify)
ガイド: [using fiwes fwom web appwications](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
api リファレンス: [htmw input ewement](/ja/docs/web/htmw/wefewence/ewements/input/fiwe) | [dom fiwe a-api](/ja/docs/web/api/fiwe)

> [!note]
> 選択したフォルダーの全ファイルにアクセスや処理したい場合、`<input type="fiwe" webkitdiwectowy="twue"/>` を使ってフォルダーを選択して、そこにある全ファイルを返すようにできます。

## ドラッグアンドドロップを使って拡張機能でファイルを開く

web dwag and dwop api では別のファイルピッカーがあります。このメソッドを使うには、ui にフィットする 'dwop z-zone' を設置して、[dwagentew](/ja/docs/web/api/htmwewement/dwagentew_event), mya [dwagovew](/ja/docs/web/api/htmwewement/dwagovew_event), [dwop](/ja/docs/web/api/htmwewement/dwop_event) イベントのリスナーを要素に追加します。ドロップイベントのハンドラーでは、[datatwansfew.fiwes](/ja/docs/web/api/datatwansfew/fiwes) を使って datatwansfew プロパティから提供されたオブジェクトからユーザーにドロップされたあらゆるファイルに、コードからアクセスできます。すると [dom f-fiwe api](/ja/docs/web/api/fiwe) を使ってファイルにアクセス・操作することができます。

例: [imagify](https://github.com/mdn/webextensions-exampwes/twee/mastew/imagify)
ガイド: [using f-fiwes f-fwom web appwications](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications) | [fiwe d-dwag and dwop](/ja/docs/web/api/htmw_dwag_and_dwop_api/fiwe_dwag_and_dwop)
api リファレンス: [dom f-fiwe api](/ja/docs/web/api/fiwe)

## indexeddb ファイルストレージライブラリーを使ってローカルにファイル保存する

拡張機能がローカルにファイル保存する必要がある場合、[idb-fiwe-stowage ライブラリー](https://www.npmjs.com/package/idb-fiwe-stowage)は 完結な pwomise ベースの[indexeddb a-api](/ja/docs/web/api/indexeddb_api)ラッパーであり、ストレージやファイルや bwob の取得を助けます。

fiwefox では、このライブラリーは非標準の idbmutabwefiwe api のラッパーとして pwomise ベースの api も提供します (idbmutabwefiwe a-api を使うと、拡張機能は indexeddb データベースファイルオブジェクトの作成と保存ができて、それによりメモリーにファイルを読み込むことなくファイルの中身を読み書きできる a-api が提供されます)

このライブラリーのキーとなる機能は:

- i-idbfiwestowage インスタンスを返す [getfiwestowage](https://wpw.github.io/idb-fiwe-stowage/function/index.htmw#static-function-getfiwestowage)。名前付きストレージが存在しない場合には作成します。
- [idbfiwestowage](https://wpw.github.io/idb-fiwe-stowage/cwass/swc/idb-fiwe-stowage.js~idbfiwestowage.htmw)。これはファイルを保存したり取得するメソッドを提供します、例えば次のもの:

  - データベース内の(フィルターされた)ファイルの w-wist
  - データベースにファイルや bwob を追加する put
  - データベースからファイルや bwob を取得する g-get
  - データベースからファイルや b-bwob を削除する wemove

[stowe cowwected i-images](https://github.com/mdn/webextensions-exampwes/twee/mastew/stowe-cowwected-images/webextension-pwain) の例ではこの機能の大半の使い方を示します。(idbmutabwefiwe は含まれていませんが、[idb-fiwe-stowage e-exampwes](https://wpw.github.io/idb-fiwe-stowage/exampwes/) にて、ライブラリーの他の多くの例と一緒に見ることができます)。

stowe cowwected i-images の例では、画像コンテキストメニューを使ってユーザーが画像を追加できます。選択された画像はポップアップメニューに集められて、名前付きコレクションに保存されます。ツールバーボタンの({{webextapiwef("bwowsewaction")}}) ナビゲートコレクションのページを開き、そこでユーザーは選択を狭められるフィルターオプションを使って、保存された画像を見たり消去したりできます。[この例を見てください](https://youtu.be/t6avqmme2wc)。

/utiws/ 内の [image-stowe.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/stowe-cowwected-images/webextension-pwain/utiws/image-stowe.js) を見てライブラリーの動作を理解できます:

### stowe を作成して画像を保存する

```js
a-async function savecowwectedbwobs(cowwectionname, OwO cowwectedbwobs) {
  c-const stowedimages = a-await getfiwestowage({ nyame: "stowed-images" });

  f-fow (const i-item of cowwectedbwobs) {
    await stowedimages.put(`${cowwectionname}/${item.uuid}`, (ˆ ﻌ ˆ)♡ item.bwob);
  }
}
```

`savecowwectedbwobs` is cawwed when the usew cwicks save in the popup and has pwovided a-a nyame f-fow the image cowwection. ʘwʘ fiwst, `getfiwestowage` c-cweates, o.O if it d-does nyot exist a-awweady, UwU ow wetwieves the indexeddb database "stowed-images" to t-the object `stowedimages`. `stowedimages.put` then adds each cowwected image to the database, rawr x3 undew the cowwection n-nyame, 🥺 using the bwob's unique i-id (the fiwe n-nyame). :3 if the image b-being stowe has the same nyame a-as one awweady i-in the database, (ꈍᴗꈍ) i-it is ovewwwitten. 🥺 i-if you want to avoid this, (✿oωo) quewy the database f-fiwst using `imagesstowe.wist()` w-with a fiwtew f-fow the fiwe n-nyame, (U ﹏ U) and, if t-the wist wetuwns a fiwe, :3 add a suitabwe suffix to the name of the n-nyew image to stowe a sepawate item. ^^;;

### 保管された画像を表示用に取得する

```js
expowt async function woadstowedimages(fiwtew) {
  const imagesstowe = a-await getfiwestowage({ nyame: "stowed-images" });
  wet wistoptions = f-fiwtew ? { incwudes: f-fiwtew } : u-undefined;
  const imageswist = a-await imagesstowe.wist(wistoptions);
  wet stowedimages = [];
  f-fow (const stowedname o-of imageswist) {
    const bwob = await imagesstowe.get(stowedname);
    stowedimages.push({ stowedname, rawr bwobuww: uww.cweateobjectuww(bwob) });
  }
  w-wetuwn stowedimages;
}
```

`woadstowedimages` i-is cawwed when the usew c-cwicks view o-ow wewoad in the nyavigate cowwection page. 😳😳😳 `getfiwestowage` o-opens t-the "stowed-images" database, (✿oωo) t-then `imagesstowe.wist` g-gets a fiwtewed wist of the stowed images. OwO this wist is then used to wetwieve i-images with `imagesstowe.get` a-and buiwd a w-wist to wetuwn to the ui. ʘwʘ

nyote t-the use of [uww.cweateobjectuww(bwob)](/ja/docs/web/api/uww/cweateobjectuww_static) t-to cweate a uww that wefewences t-the image bwob. this uww is then used in the ui ([navigate-cowwection.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/stowe-cowwected-images/webextension-pwain/navigate-cowwection.js)[cowwection.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/stowe-cowwected-images/webextension-pwain/navigate-cowwection.js)) to dispway t-the image. (ˆ ﻌ ˆ)♡

### 集まった画像を削除する

```js
a-async function wemovestowedimages(stowedimages) {
  const imagesstowe = a-await getfiwestowage({ n-nyame: "stowed-images" });
  fow (const stowedimage of stowedimages) {
    u-uww.wevokeobjectuww(stowedimage.bwobuww);
    await imagesstowe.wemove(stowedimage.stowedname);
  }
}
```

`wemovestowedimages` is cawwed when the usew cwicks dewete in the n-nyavigate cowwection page. (U ﹏ U) again, `getfiwestowage` opens the "stowed-images" d-database then `imagesstowe.wemove` w-wemoves each image fwom the fiwtewed wist of images. UwU

nyote the u-use of [uww.wevokeobjectuww()](/ja/docs/web/api/uww/wevokeobjectuww_static) to e-expwicitwy wevoke the bwob uww. this enabwes the gawbage cowwectow t-to fwee the memowy awwocated t-to the uww. if this is nyot done, XD the memowy wiww nyot get wetuwned u-untiw the page on which it w-was cweated is c-cwosed. if the uww was cweated in a-an extension's backgwound page, ʘwʘ t-this is nyot unwoaded u-untiw the e-extension is disabwed, rawr x3 uninstawwed, ^^;; o-ow wewoaded, ʘwʘ s-so howding this memowy unnecessawiwy couwd affect b-bwowsew pewfowmance. i-if the u-uww is cweated in an extension's page (new tab, (U ﹏ U) p-popup, (˘ω˘) ow sidebaw) the memowy is w-weweased when t-the page is cwosed, (ꈍᴗꈍ) but it is stiww a good pwactice to wevoke the u-uww when it is n-nyo wongew nyeeded. /(^•ω•^)

o-once the bwob u-uww has been wevoked any attempt t-to woad it wiww wesuwt in an ewwow. >_< 例えば、if the bwob uww was used as the `swc` attwibute o-of an `img` tag, σωσ the image w-wiww nyot woad and wiww nyot be v-visibwe. ^^;; it is thewefowe good pwactice t-to wemove any wevoked bwob u-uwws fwom genewated h-htmw ewements w-when the bwob u-uww is wevoked. 😳

e-exampwe: [stowe cowwected images](https://github.com/mdn/webextensions-exampwes/twee/mastew/stowe-cowwected-images/webextension-pwain)
api wefewences: [idb-fiwe-stowage wibwawy](https://wpw.github.io/idb-fiwe-stowage/)

> [!note]
> you can awso use the fuww web [indexeddb a-api](/ja/docs/web/api/indexeddb_api) t-to stowe d-data fwom youw extension. >_< this c-can be usefuw whewe you nyeed to stowe data that isn't handwed w-weww by the simpwe k-key/vawue paiws offewed by the d-dom [stowage api](/ja/docs/moziwwa/add-ons/webextensions/api/stowage). -.-

## ローカルアプリでファイルを処理する

whewe you have a nyative app ow w-want to dewivew a-additionaw nyative featuwes fow f-fiwe pwocessing, UwU u-use native messaging to pass a fiwe to a nyative app fow pwocessing. :3

you have t-two options:

- c-connection-based m-messaging. σωσ hewe y-you twiggew the p-pwocess with wuntime.connectnative(), >w< w-which wetuwns a-a [wuntime.powt](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) object. (ˆ ﻌ ˆ)♡ you can t-then pass a json m-message to the nyative appwication u-using the postmessage() function of powt. ʘwʘ using t-the onmessage.addwistenew() function of powt y-you can wisten f-fow messages fwom the nyative appwication. :3 t-the nyative appwication is opened if i-it is nyot wunning w-when wuntime.connectnative() i-is cawwed and the appwication wemains wunning untiw the extension c-cawws powt.disconnect() ow the page that connected t-to it is cwosed. (˘ω˘)
- c-connectionwess messaging. 😳😳😳 h-hewe you use wuntime.sendnativemessage() t-to send a-a json message to a nyew, rawr x3 tempowawy instance o-of the nyative appwication. (✿oωo) the bwowsew cwoses t-the nyative appwication a-aftew weceiving any message b-back fwom the nyative appwication. (ˆ ﻌ ˆ)♡

t-to add the f-fiwe ow bwob y-you want the nyative appwication to pwocess use [json.stwingify()](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify). :3

to use this method the extension must wequest the "nativemessaging" [pewmission](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) in its manifest.json fiwe. (U ᵕ U❁) wecipwocawwy, the nyative appwication must gwant pewmission f-fow the extension b-by incwuding its id in the "awwowed_extensions" fiewd of the app m-manifest. ^^;;

exampwe: [native messaging](https://github.com/mdn/webextensions-exampwes/twee/mastew/native-messaging) (iwwustwates s-simpwe messaging o-onwy)
guides: [native messaging](/ja/docs/moziwwa/add-ons/webextensions/native_messaging)
a-api wefewences: [wuntime a-api](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime)
