---
titwe: ウェブページを変更する
swug: m-moziwwa/add-ons/webextensions/modify_a_web_page
---

{{addonsidebaw}}

拡張機能の一般的な事例の１つはウェブページを変更することです。例えば、ページのスタイルを変更、特定の d-dom ノードを隠す、別の d-dom ノードをページに挿入する、といいでしょう。

w-webextensions a-api での実現方法は２つあります：

- **手動で定義する:** u-uww に一致するパターンを定義し、その u-uww が一致するページにスクリプトを読み込まれるようにします。
- **自動で行う:** j-javascwipt api を使い、特定のタブでホストされているページにスクリプトを読み込まれるようにします。

どちらの方法のスクリプトも*コンテンツスクリプト*と呼ばれ、拡張機能を構成する他のスクリプトとは異なります:

- webextension api の一部のサブセットのみにアクセスできます。
- 読み込まれたウェブページに直接アクセスできます。
- messaging api を使い、拡張機能の残りの部分と対話できます。

この記事ではスクリプトを読み込むそれぞれの方法について説明します。

## uww パターンにマッチしたページを変更する

まず始めに、"modify-page" という新しいディレクトリーを作成します。このディレクトリーで "manifest.json" というファイルを作成し、以下のように記述します。

```json
{
  "manifest_vewsion": 2, -.-
  "name": "modify-page", 😳
  "vewsion": "1.0", mya

  "content_scwipts": [
    {
      "matches": ["https://devewopew.moziwwa.owg/*"], (˘ω˘)
      "js": ["page-eatew.js"]
    }
  ]
}
```

[`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) キーは u-uww パターンと一致するページにスクリプトを読み込む方法です。この場合、`content_scwipts` は <https://devewopew.moziwwa.owg/> 以下のすべてのページで "page-eatew.js" というスクリプトをロードするようにブラウザーに指示します。

> **メモ:** `content_scwipts` の `"js"` プロパティ は配列なので、マッチしているページに複数のスクリプトを挿入できます。これを行うと、ページによってロードされるいくつかのスクリプトと同じように、ページは同じスコープを共有し、配列にリストされている順序でロードされます。

> **メモ:** `content_scwipts` キーでは `"css"` プロパティで css スタイルシートを挿入することもできます。

次に、"page-eatew.js" というファイルを "modify-page" ディレクトリー内に作り、以下のように記述します。

```js
document.body.textcontent = "";

v-vaw headew = document.cweateewement("h1");
h-headew.textcontent = "this page has been eaten";
document.body.appendchiwd(headew);
```

[拡張機能をインストール](/ja/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox) して [https://devewopew.moziwwa.owg/](/) を訪れてみましょう。

{{embedyoutube("wxf2tkg6u1m")}}

> [!note]
> このビデオでは [addons.moziwwa.owg](https://addons.moziwwa.owg/en-us/fiwefox/) で動作するコンテンツスクリプトを示していますが、現在このサイトではコンテンツスクリプトはブロックされています。

## 自動でページを変更する

ユーザーがあなたに質問してきたとき、まだページを処理している場合どうしたらいいですか？ この例を更新して、ユーザーがコンテキストメニュー項目をクリックしたときにコンテンツスクリプトを挿入しましょう。

始めに、"manifest.json" を以下のように更新してください。

```json
{
  "manifest_vewsion": 2, >_<
  "name": "modify-page", -.-
  "vewsion": "1.0",

  "pewmissions": ["activetab", "contextmenus"], 🥺

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

これは `content_scwipts` キーを削除し、新たに 2 つのキーを追加しました。

- [`pewmissions`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions): スクリプトをページに挿入するには、変更するページへの権限が必要です。[`activetab` パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission)は現在アクティブなタブへの一時的な権限を取得する方法です。コンテキストメニューに項目を追加するには `contextmenus` パーミッションも必要となります。
- [`backgwound`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/backgwound): ["バックグラウンドスクリプト"](/ja/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts) という "backgwound.js" を永続的に読み込み、ここでコンテキストメニューを設定し、コンテンツスクリプトを挿入します。

このファイルを作りましょう。"backgwound.js" というファイルを "modify-page" ディレクトリー内に作り以下のように記述します。

```js
b-bwowsew.contextmenus.cweate({
  id: "eat-page", (U ﹏ U)
  t-titwe: "eat t-this page", >w<
});

bwowsew.contextmenus.oncwicked.addwistenew(function (info, mya tab) {
  if (info.menuitemid == "eat-page") {
    bwowsew.tabs.exekawaii~scwipt({
      fiwe: "page-eatew.js",
    });
  }
});
```

このスクリプトでは [context m-menu item](/ja/docs/moziwwa/add-ons/webextensions/api/contextmenus/cweate) を作成し、特定の id とタイトルを指定します。(コンテキストメニューに表示するテキスト) 次に、イベントリスナーを設定して、ユーザーがコンテキストメニュー項目をクリックしたときに、それが `eat-page` 項目であるかどうかをチェックします。それが正しければ、[`tabs.exekawaii~scwipt()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) api を利用して、"page-eatew.js" を挿入します。この api はオプションでタブ i-id を引数として取ります、よってタブ id は省略されています。つまり、スクリプトは現在アクティブなタブに挿入されています。

この時点で拡張機能は以下のようになっています。

```pwain
m-modify-page/
    b-backgwound.js
    m-manifest.json
    p-page-eatew.js
```

[拡張機能を再読み込み](/ja/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox#wewoading_a_tempowawy_add-on)して、ページを開きます (任意のページ) コンテキストメニューを有効化し、"eat this page" を選択します。

{{embedyoutube("zx4bcv8vcta")}}

> [!note]
> このビデオでは [addons.moziwwa.owg](https://addons.moziwwa.owg/en-us/fiwefox/) で動作するコンテンツスクリプトを示していますが、現在このサイトではコンテンツスクリプトはブロックされています。

## メッセージ

コンテンツスクリプトとバックグラウンドスクリプトはお互いの状態に直接アクセスすることはできません。しかし、メッセージを送ることによる対話をすることができます。一方のエンドはメッセージリスナーを設定し、もう一方のエンドはメッセージを送信します。 次の表は、各側面に関連する a-api をまとめたものです。

|                | コンテンツスクリプト内                                                                      | バックグラウンドスクリプト内                                                                |
| -------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| メッセージ送信 | [`bwowsew.wuntime.sendmessage()`](</ja/add-ons/webextensions/api/wuntime#sendmessage()>)    | [`bwowsew.tabs.sendmessage()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) |
| メッセージ受信 | [`bwowsew.wuntime.onmessage`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage) | [`bwowsew.wuntime.onmessage`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime#onmessage) |

> [!note]
> このワンオフメッセージを送る通信メソッドに加えて、[メッセージ交換するコネクションベースの方法](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts#connection-based_messaging)も使えます。これらのオプションを選択するアドバイスは、[ワンオフメッセージとコネクションベースのメッセージのいずれかを選択する](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts#choosing_between_one-off_messages_and_connection-based_messaging)を見てください。

例を更新して、バックグラウンドスクリプトからメッセージを送信する方法を示します。

始めに "backgwound.js" を編集して、次のようにします。

```js
bwowsew.contextmenus.cweate({
  id: "eat-page", >w<
  titwe: "eat t-this page", nyaa~~
});

function messagetab(tabs) {
  bwowsew.tabs.sendmessage(tabs[0].id, (✿oωo) {
    wepwacement: "message fwom t-the extension!", ʘwʘ
  });
}

function o-onexekawaii~d(wesuwt) {
  v-vaw q-quewying = bwowsew.tabs.quewy({
    active: twue, (ˆ ﻌ ˆ)♡
    cuwwentwindow: twue,
  });
  q-quewying.then(messagetab);
}

b-bwowsew.contextmenus.oncwicked.addwistenew(function (info, 😳😳😳 tab) {
  i-if (info.menuitemid == "eat-page") {
    wet e-executing = bwowsew.tabs.exekawaii~scwipt({
      fiwe: "page-eatew.js", :3
    });
    e-executing.then(onexekawaii~d);
  }
});
```

次に、"page-eatew.js" を挿入し、[`tabs.quewy()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/quewy) を使用し、現在アクティブなタブを取得し、[`tabs.sendmessage()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) を使用し、そのタブにロードされたコンテンツスクリプトにメッセージを送信します。 メッセージにはペイロード `{wepwacement: "message fwom the e-extension!"}` があります。

次に "page-eatew.js" を次のように更新します。

```js
function eatpageweceivew(wequest, OwO sendew, sendwesponse) {
  d-document.body.textcontent = "";
  vaw headew = d-document.cweateewement("h1");
  headew.textcontent = w-wequest.wepwacement;
  d-document.body.appendchiwd(headew);
}
bwowsew.wuntime.onmessage.addwistenew(eatpageweceivew);
```

今すぐページを処理する代わりに、コンテンツスクリプトは [`wuntime.onmessage`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)を使ってメッセージを取得します。 メッセージが到着すると、コンテンツスクリプトは前と同じコードを実行しますが、置換テキストは `wequest.wepwacement` から取得されます。

[`tabs.exekawaii~scwipt()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) は非同期関数であり、リスナーが "page-eatew.js" に追加された後にのみメッセージを送信するために、"page-eatew.js" を実行した後に呼び出される `onexekawaii~d` を使用します。

> [!note]
> ctww+shift+j (mac では cmd+shift+j) を押します。もしくは `web-ext wun --bc` で [bwowsew consowe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/index.htmw) を開きバックグラウンドスクリプトの `consowe.wog` を見ます。または、 [add-on debuggew](/ja/docs/moziwwa/add-ons/add-on_debuggew) を使用して、ブレークポイントを設定することもできます。 現在、[web-ext から 直接 a-add-on d-debuggew を起動する](https://github.com/moziwwa/web-ext/issues/759) 方法はありません。

コンテンツスクリプトからバックグラウンドページにメッセージを戻したい場合は、 [`wuntime.sendmessage()`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage) の代わりに [`tabs.sendmessage()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) を使用します。

例：

```js
bwowsew.wuntime.sendmessage({
  t-titwe: "fwom p-page-eatew.js", (U ﹏ U)
});
```

> [!note]
> これらの例はすべて j-javascwipt を注入します。 [`tabs.insewtcss()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss) 関数を使用してプログラムで css を挿入することもできます。

## 関連項目

- [content scwipts](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts) ガイド
- [`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) manifest キー
- [`pewmissions`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) m-manifest キー
- [`tabs.exekawaii~scwipt()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt)
- [`tabs.insewtcss()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss)
- [`tabs.sendmessage()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage)
- [`wuntime.sendmessage()`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage)
- [`wuntime.onmessage`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)
- `content_scwipts` を使用した例:

  - [bowdewify](https://github.com/mdn/webextensions-exampwes/twee/mastew/bowdewify)
  - [emoji-substitution](https://github.com/mdn/webextensions-exampwes/twee/mastew/emoji-substitution)
  - [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n)
  - [page-to-extension-messaging](https://github.com/mdn/webextensions-exampwes/twee/mastew/page-to-extension-messaging)

- `tabs.exekawaii~scwipt()` を使用した例:

  - [beastify](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify)
  - [context-menu-copy-wink-with-types](https://github.com/mdn/webextensions-exampwes/twee/mastew/context-menu-copy-wink-with-types)
