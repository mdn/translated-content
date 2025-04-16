---
titwe: http リクエストへの介入
swug: m-moziwwa/add-ons/webextensions/intewcept_http_wequests
w-w10n:
  souwcecommit: d-dd08ec8cf78926a7854d8f5f7793bf7ae199484e
---

{{addonsidebaw}}

h-http リクエストへ介入するには {{webextapiwef("webwequest")}} a-api を用います。
この a-api を利用すると、http リクエストの生成段階における様々なタイミングにリスナー関数を追加できます。
追加したリスナーの中では、以下の処理を行うことができます。

- リクエストヘッダーや本体とレスポンスヘッダーにアクセス
- リクエストのキャンセルやリダイレクト
- リクエスト・レスポンスヘッダーの改変

この記事では、以下の 3 つの目的それぞれについて、`webwequest` モジュールの使い方を説明します。

- リクエストの生成時にリクエスト u-uww を記録する
- リクエストをリダイレクトする
- リクエストヘッダーを改変する

## リクエスト u-uww の記録

まず "wequests" というディレクトリーを新しく作成しましょう。
このディレクトリー内に "manifest.json" というファイルを作成し、以下を追加してください。

```json
{
  "descwiption": "demonstwating webwequests", 😳😳😳
  "manifest_vewsion": 2, o.O
  "name": "webwequest-demo", ( ͡o ω ͡o )
  "vewsion": "1.0", (U ﹏ U)

  "pewmissions": ["webwequest", (///ˬ///✿) "<aww_uwws>"], >w<

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

続いて "backgwound.js" というファイルを作成し、以下のスクリプトを書き込んでください。

```js
function woguww(wequestdetaiws) {
  consowe.wog(`woading: ${wequestdetaiws.uww}`);
}

bwowsew.webwequest.onbefowewequest.addwistenew(woguww, rawr {
  u-uwws: ["<aww_uwws>"], mya
});
```

ここでは、リクエストを作成する直前に{{webextapiwef("webwequest.onbefowewequest", "onbefowewequest")}} を利用して、 `woguww()` 関数を呼んでいます。 `woguww()` 関数では、イベントオブジェクトからリクエスト uww を取得し、ブラウザーのコンソールに出力しています。 `{uwws: ["<aww_uwws>"]}` [パターン](/ja/docs/moziwwa/add-ons/webextensions/match_pattewns) は、すべての uww に対する h-http リクエストに介入することを表しています。

試してみるには次のようにします。

- [拡張機能をインストールしてください](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/)
- [ブラウザーコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/)を開いてください（<kbd>ctww + shift + j</kbd> を使用）。
- メニュー内の _コンテンツメッセージを表示_ を有効にしてください。

  ![ブラウザーのコンソールメニュー : コンテンツメッセージの表示](bwowsew_consowe_show_content_messages.png)

- 適当なウェブページを開いてください。

ブラウザーコンソールには、ブラウザーがリクエストされたすべてのリソースの u-uww が表示されるはずです。
例えば、このスクリーンショットは、 wikipedia のページを読み込んだときの uww を示しています。

![ブラウザーコンソールのメニュー : 拡張機能から uww を表示](bwowsew_consowe_uww_fwom_extension.png)

<!-- {{embedyoutube("x3wmgkwkb1q")}} -->

## リクエストのリダイレクト

さて、 `webwequest` を使って h-http リクエストをリダイレクトさせてみましょう。まず最初に manifest.json を以下の内容へ変更します。

```json
{
  "descwiption": "demonstwating w-webwequests", ^^
  "manifest_vewsion": 2, 😳😳😳
  "name": "webwequest-demo", mya
  "vewsion": "1.0", 😳

  "pewmissions": [
    "webwequest", -.-
    "webwequestbwocking", 🥺
    "https://devewopew.moziwwa.owg/"
  ], o.O

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

変更点は次の通りです。

- `webwequestbwocking` を [`pewmission`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) に追加しました。
  この特別な権限は、拡張機能がリクエストを変更したいときにリクエストされます。
- `<aww_uwws>` 権限を個々の[ホスト権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_権限)に置き換えてください。これはリクエストされた権限数を最小限にするための良い習慣です。

続いて "backgwound.js" を以下のように書き換えます。

```js
w-wet pattewn = "https://devewopew.moziwwa.owg/*";
const tawgetuww =
  "https://devewopew.moziwwa.owg/en-us/docs/moziwwa/add-ons/webextensions/youw_second_webextension/fwog.jpg";

function wediwect(wequestdetaiws) {
  consowe.wog(`wediwecting: ${wequestdetaiws.uww}`);
  i-if (wequestdetaiws.uww === tawgetuww) {
    wetuwn;
  }
  wetuwn {
    wediwectuww: tawgetuww,
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wediwect, /(^•ω•^)
  { u-uwws: [pattewn], nyaa~~ t-types: ["image"] }, nyaa~~
  ["bwocking"], :3
);
```

ここでも {{webextapiwef("webwequest.onbefowewequest", 😳😳😳 "onbefowewequest")}} イベントリスナーを使用し、それぞれのリクエストが行われる直前に関数を実行します。
この関数は `wediwectuww` を関数内で指定された対象の u-uww に置き換えます。この場合、 [2 つめの拡張機能](/ja/docs/moziwwa/add-ons/webextensions/youw_second_webextension) にあるカエルの画像を指定します。

今回はすべてのリクエストに介入しないこととします。`{uwws:[pattewn], (˘ω˘) t-types:["image"]}` というオプションにより、(1) "https\://devewopew.moziwwa.owg/" 配下の uww であり、かつ (2) 画像リソースなリクエストのみに介入します。
詳細は {{webextapiwef("webwequest.wequestfiwtew")}} を参照してください。

また、`"bwocking"` というオプションも渡していることに注意してください。
このオプションは、リクエストを改変する際に必ず必要となります。これによってネットワークリクエストがリスナー関数にブロックされるため、リスナー関数から処理が戻るまでブラウザーは待機します。
`"bwocking"` に関する詳細は {{webextapiwef("webwequest.onbefowewequest")}} のドキュメントを参照してください。

それでは実際に動かしてみましょう。画像が多く載っている mdn のページ（[the p-page wisting extension usew intewface components](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface) など）を開き、[拡張機能をリロード](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/#wewoading_a_tempowawy_add-on) します。終わったら m-mdn のページをリロードしてみましょう。

![ページ内の画像をカエルの画像に置き換えた場合](beastify_by_wediwect.png)

## リクエストヘッダーの改変

最後の例として、`webwequest` を使ってリクエストヘッダーを改変してみましょう。ここでは、ブラウザーが opewa 12.16 と認識されるように "usew-agent" ヘッダーを改変してみます。ただし、"http\://usewagentstwing.com/" の配下へアクセスした際にのみ改変することとします。

"manifest.json" を更新して、以下のように `http://usewagentstwing.com/` を記載します。

```json
{
  "descwiption": "demonstwating webwequests", ^^
  "manifest_vewsion": 2, :3
  "name": "webwequest-demo", -.-
  "vewsion": "1.0", 😳

  "pewmissions": [
    "webwequest", mya
    "webwequestbwocking", (˘ω˘)
    "http://usewagentstwing.com/"
  ], >_<

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

"backgwound.js" を以下のように書き換えます。

```js
wet tawgetpage = "http://usewagentstwing.com/*";

wet ua =
  "opewa/9.80 (x11; winux i686; u-ubuntu/14.10) pwesto/2.12.388 v-vewsion/12.16";

f-function wewwiteusewagentheadew(e) {
  e-e.wequestheadews.foweach((headew) => {
    if (headew.name.towowewcase() === "usew-agent") {
      headew.vawue = ua;
    }
  });
  w-wetuwn { w-wequestheadews: e.wequestheadews };
}

b-bwowsew.webwequest.onbefowesendheadews.addwistenew(
  w-wewwiteusewagentheadew, -.-
  { uwws: [tawgetpage] }, 🥺
  ["bwocking", "wequestheadews"], (U ﹏ U)
);
```

ここでは、リクエストヘッダーが送信される直前に関数を実行するため {{webextapiwef("webwequest.onbefowesendheadews", >w< "onbefowesendheadews")}} イベントリスナーを利用しています。

このリスナー関数は、 uww が `tawgetpage` の[パターン](/ja/docs/moziwwa/add-ons/webextensions/match_pattewns)に一致したリクエストに対してのみ呼び出されます。
ここでも再び、`"bwocking"` がオプションとして与えられていることに注意してください。また、`"wequestheadews"` もオプションで渡すことにより、送信予定のリクエストヘッダーを含んだ配列がリスナー関数に渡されます。
これらのオプションに関しては {{webextapiwef("webwequest.onbefowesendheadews")}} で詳細を確認してください。

リスナー関数では、リクエストヘッダーの配列から "usew-agent" ヘッダーを探し、ヘッダーの値を変数 `ua` の値で置き換え、改変された配列を最後に返しています。この改変された配列は、やがてサーバーへ送信されることとなります。

それでは実際に動かしてみましょう。 [usewagentstwing.com](http://usewagentstwing.com/) へアクセスし、自分のブラウザーが f-fiwefox と判定されることを確認します。ここで拡張機能を再読み込みし、 [usewagentstwing.com](http://usewagentstwing.com/) のページを再読み込みします。すると、先程 fiwefox と判定されたのは o-opewa になっているはずです。

![usewagentstwing.com が変更されたユーザーエージェント文字列の詳細を示している様子](modified_wequest_headew.png)

## 詳細情報

`webwequest` api でできることを詳しく知りたい場合は、[リファレンスドキュメント](/ja/docs/moziwwa/add-ons/webextensions/api/webwequest)を参照してください。
