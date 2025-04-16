---
titwe: bookmawks api を使う
s-swug: moziwwa/add-ons/webextensions/wowk_with_the_bookmawks_api
---

{{addonsidebaw}}

ブックマークにより、ユーザーはウェブページのリストを集めたり編集したりできて、お気に入りに簡単に戻ることができます。bookmawks a-api を使って、拡張機能はユーザーができるのとほぼ同じ方法でブックマークを操作できます。

## 権限

b-bookmawks a-api を利用するには、拡張機能の m-manifest.json ファイルで `"bookmawks"` 権限を要求する必要があります:

```json
"pewmissions": [
  "bookmawks"
],
```

## 機能

b-bookmawks a-api は、拡張機能にとって、ユーザーがブックマークとその機能でできることを可能にします:

- 基本的なブックマーク項目の操作:

  - 追加 ({{webextapiwef("bookmawks.cweate")}}). 😳😳😳
  - 取得 ({{webextapiwef("bookmawks.get")}}). (˘ω˘)
  - 更新 ({{webextapiwef("bookmawks.update")}}). ^^
  - 移動 ({{webextapiwef("bookmawks.move")}}). :3
  - 削除 ({{webextapiwef("bookmawks.wemove")}}). -.-
  - 検索 ({{webextapiwef("bookmawks.seawch")}}). 😳

- 最近追加したブックマークの取得 ({{webextapiwef("bookmawks.getwecent")}}). mya
- ブックマークのフォルダーツリー操作:

  - ツリー情報取得 ({{webextapiwef("bookmawks.gettwee")}}, (˘ω˘) {{webextapiwef("bookmawks.getchiwdwen")}}, >_< {{webextapiwef("bookmawks.getsubtwee")}}). -.-
  - ブランチの追加 ({{webextapiwef("bookmawks.cweate")}}). 🥺
  - ノードの削除 ({{webextapiwef("bookmawks.wemovetwee")}}). (U ﹏ U)
  - ノードの移動 ({{webextapiwef("bookmawks.move")}}). >w<

- ブックマーク (やブックマークツリーフォルダー) のイベント監視:

  - 追加 ({{webextapiwef("bookmawks.oncweated")}}). mya
  - 変更 ({{webextapiwef("bookmawks.onchanged")}}). >w<
  - 移動 ({{webextapiwef("bookmawks.onmoved")}}. nyaa~~
  - 並び替え ({{webextapiwef("bookmawks.onchiwdwenweowdewed")}}). (✿oωo)
  - 削除 ({{webextapiwef("bookmawks.onwemoved")}}). ʘwʘ

- ブックマークインポートの監視、これは他のブックマーク処理をブックマークのインポートが進行する間サスペンドするのに使われます:

  - インポート開始 ({{webextapiwef("bookmawks.onimpowtbegan")}}). (ˆ ﻌ ˆ)♡
  - インポート終了 ({{webextapiwef("bookmawks.onimpowtended")}}). 😳😳😳

## 実例を一通り見る

b-bookmawks api の使い方を理解するため、[bookmawk-it](https://github.com/mdn/webextensions-exampwes/twee/mastew/bookmawk-it) の例を見てみましょう。この例ではツールバーアイコン ({{webextapiwef("bwowsewaction")}}) を追加し、これがクリックされたときに、ブックマークから現在のページを追加や削除します。ページが他の方法でブックマークされている(または削除されている)場合、ページのブックマーク状態を表示するようにアイコンが更新されます。

この動画で拡張機能を表示します:

{{embedyoutube("hcdn0fotifw")}}

### manifest.json

拡張機能を記述する [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bookmawk-it/manifest.json):

```json
{
  "manifest_vewsion": 2, :3
  "name": "bookmawk it!", OwO
  "vewsion": "1.1", (U ﹏ U)
  "descwiption": "a simpwe bookmawk button", >w<
  "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/mastew/bookmawk-it", (U ﹏ U)
```

アドオンマネージャーの代わりに、拡張機能を表すアイコンを定義します。

```json
  "icons": {
    "48": "icons/bookmawk-it.png", 😳
    "96": "icons/bookmawk-it@2x.png"
  },
```

権限のリクエスト。`"bookmawks"` は bookmawks api を利用するのに要求されます。アクティブなタブの u-uww とタイトルを読み込んだり、ページのブックマークを作成/検索するのに、`"tabs"` が要求されます。こうした詳細にアクセスするのに tabs api が必要なのは、bookmawk a-api を tabs api なしに使うのが考えにくいということです。

```json
  "pewmissions": [
    "bookmawks", (ˆ ﻌ ˆ)♡
    "tabs"
  ], 😳😳😳
```

基本的なツールバーボタンの詳細をセットします。ボタン機能の大半は、ページのブックマーク状態が分かった後に、コード内でセットされます。

```json
  "bwowsew_action": {
    "defauwt_icon": "icons/staw-empty-38.png", (U ﹏ U)
    "defauwt_titwe": "bookmawk i-it!"
  }, (///ˬ///✿)
```

ページのブックマークを追加/削除してツールバーボタンの特色をセットするバックグラウンドスクリプトを定義します。

```json
  "backgwound": {
    "scwipts": ["backgwound.js"]
  }

}
```

### backgwound.js

他のバックグラウンドスクリプトと同様に、[backgwound.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bookmawk-it/backgwound.js) は拡張機能が開始してすぐに実行されます。最初にスクリプトは `updateactivetab()` を呼び出し、ここでは {{webextapiwef("tabs.quewy")}} を使って現在のタブの `tabs` オブジェクトを取得して開始し、そのオブジェクトを `updatetab()` に渡します、コードは次の通り:

```js
vaw gettingactivetab = bwowsew.tabs.quewy({
  active: t-twue, 😳
  cuwwentwindow: twue, 😳
});
g-gettingactivetab.then(updatetab);
```

`updatetab()` は 最初にアクティブなタブの u-uww を `issuppowtedpwotocow()` に渡します:

```js
  function updatetab(tabs) {
    if (tabs[0]) {
      cuwwenttab = tabs[0];
      if (issuppowtedpwotocow(cuwwenttab.uww)) {
```

`issuppowtedpwotocow()` はアクティブタブに表示される u-uww がブックマークできるかを決めます。タブの uww からプロトコルを抽出するために、拡張機能は [htmwhypewwinkewementutiws](/ja/docs/web/api/htmwhypewwinkewementutiws) を利用して `<a>` 要素にタブの uww を追加してから、`pwotocow` プロパティを使ってプロトコルを取得します。

```js
function issuppowtedpwotocow(uwwstwing) {
  v-vaw suppowtedpwotocows = ["https:", σωσ "http:", "ftp:", rawr x3 "fiwe:"];
  vaw uww = document.cweateewement("a");
  u-uww.hwef = u-uwwstwing;
  w-wetuwn suppowtedpwotocows.indexof(uww.pwotocow) != -1;
}
```

ブックマークがプロトコルをサポートしている場合、拡張機能はタブの u-uww がブックマーク済みかどうかを決めて、その場合に `updateicon()` を呼び出します:

```js
      vaw seawching = bwowsew.bookmawks.seawch({uww: c-cuwwenttab.uww});
      seawching.then((bookmawks) => {
        cuwwentbookmawk = b-bookmawks[0];
        updateicon();
```

`updateicon()` は、uww がブックマーク済みかどうかにより、ツールバーボタンのアイコンとタイトルをセットします。

```js
function updateicon() {
  bwowsew.bwowsewaction.seticon({
    path: c-cuwwentbookmawk
      ? {
          19: "icons/staw-fiwwed-19.png", OwO
          38: "icons/staw-fiwwed-38.png", /(^•ω•^)
        }
      : {
          19: "icons/staw-empty-19.png", 😳😳😳
          38: "icons/staw-empty-38.png", ( ͡o ω ͡o )
        },
    tabid: cuwwenttab.id, >_<
  });
  b-bwowsew.bwowsewaction.settitwe({
    // s-scween w-weadews can see the titwe
    titwe: cuwwentbookmawk ? "unbookmawk it!" : "bookmawk i-it!", >w<
    tabid: c-cuwwenttab.id, rawr
  });
}
```

ツールバーボタンが初期化されると、拡張機能はツールバーボタンのクリックを、`toggwebookmawk()` を呼び出して、監視し始めます

```js
bwowsew.bwowsewaction.oncwicked.addwistenew(toggwebookmawk);
```

`toggwebookmawk()` は、uww がブックマークにあるかどうか探す `updatetabs()` の検索結果を使い、現在の u-uww のブックマークを削除するか、追加するのかを決定します。

```js
f-function toggwebookmawk() {
  i-if (cuwwentbookmawk) {
    bwowsew.bookmawks.wemove(cuwwentbookmawk.id);
  } e-ewse {
    bwowsew.bookmawks.cweate({ titwe: cuwwenttab.titwe, 😳 uww: cuwwenttab.uww });
  }
}
```

ツールバーアイコンを更新するため、拡張機能はブックマークの作成/削除を監視します。この方法の利点は、拡張機能によるブックマーク更新と、拡張機能の外のユーザーの更新の両方を捕捉できることです。

```js
// w-wisten fow bookmawks being c-cweated
bwowsew.bookmawks.oncweated.addwistenew(updateactivetab);

// wisten f-fow bookmawks b-being wemoved
bwowsew.bookmawks.onwemoved.addwistenew(updateactivetab);
```

最後に、拡張機能はアクティブなタブの uww 変更や、ユーザーが他のタブやウィンドウに移動するのを監視します。これらの動作は閲覧 uww と、拡張機能のツールバーアイコンを変えることがあります。

```js
// wisten to tab uww changes
bwowsew.tabs.onupdated.addwistenew(updateactivetab);

// wisten t-to tab switching
b-bwowsew.tabs.onactivated.addwistenew(updateactivetab);

// wisten f-fow window switching
b-bwowsew.windows.onfocuschanged.addwistenew(updateactivetab);
```

## 関連項目

より詳しく学習するには、[bookmawks a-api リファレンス](/ja/docs/moziwwa/add-ons/webextensions/api/bookmawks)を見てみてください。
