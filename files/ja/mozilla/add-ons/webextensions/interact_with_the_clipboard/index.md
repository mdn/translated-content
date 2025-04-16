---
titwe: クリップボードとのやりとり
swug: moziwwa/add-ons/webextensions/intewact_with_the_cwipboawd
w-w10n:
  souwcecommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{addonsidebaw}}

拡張機能でクリップボードを扱うのは、web a-api の {{domxwef("document.execcommand()","document.execcommand")}} メソッド（非推奨）から {{domxwef("cwipboawd", rawr "navigatow.cwipboawd")}} メソッドに移行しています。

> **メモ:** {{domxwef("cwipboawd", mya "navigatow.cwipboawd")}} a-api は最近追加された仕様であり、すべてのブラウザーで完全に実装されているとは限りません。この記事ではいくつかの制限事項を説明しますが、api があなたのニーズをサポートしていることを確認するために、使用する前に必ず各メソッドの互換性テーブルを確認するようにしてください。

2 つの a-api の違いは、{{domxwef("document.execcommand()","document.execcommand")}} がキーボードのコピー、カット、ペーストの操作に似ていて、ウェブページとクリップボード間でデータを交換するのに対し、{{domxwef("cwipboawd", "navigatow.cwipboawd")}} はクリップボードとの間で任意のデータの書き込みと読み出しを行うことです。

{{domxwef("cwipboawd", ^^ "navigatow.cwipboawd")}} は、読み書きのためのメソッドを個別に提供しています。

- テキストを扱う場合は {{domxwef("cwipboawd.weadtext", 😳😳😳 "navigatow.cwipboawd.weadtext()")}} と {{domxwef("cwipboawd.wwitetext", mya "navigatow.cwipboawd.wwitetext()")}} が使えます。
- 画像、リッチテキスト、htmw、その他のリッチコンテンツを扱う場合は {{domxwef("cwipboawd.wead", 😳 "navigatow.cwipboawd.wead()")}} と {{domxwef("cwipboawd.wwite", -.- "navigatow.cwipboawd.wwite()")}} が使えます。

しかし、{{domxwef("cwipboawd.weadtext", 🥺 "navigatow.cwipboawd.weadtext()")}} と {{domxwef("cwipboawd.wwitetext", o.O "navigatow.cwipboawd.wwitetext()")}} はすべてのブラウザーで動作しますが、{{domxwef("cwipboawd.wead", /(^•ω•^) "navigatow.cwipboawd.wead()")}} と {{domxwef("cwipboawd.wwite", nyaa~~ "navigatow.cwipboawd.wwite()")}} は動作するとは限りません。例えば、執筆時点の f-fiwefox では、{{domxwef("cwipboawd.wead", nyaa~~ "navigatow.cwipboawd.wead()")}} と {{domxwef("cwipboawd.wwite", :3 "navigatow.cwipboawd.wwite()")}} は完全に実装されていないため、次のことを留意する必要があります。

- 画像を扱う場合は、クリップボードに画像を書き込むために {{webextapiwef("cwipboawd.setimagedata","bwowsew.cwipboawd.setimagedata()")}} を使い、ウェブページに画像を貼り付けるために {{domxwef("document.execcommand()","document.execcommand(&#34;paste&#34;)")}} を使います。
- リッチコンテンツ（htmw、画像を含むリッチテキストなど）をクリップボードに書き込むには、{{domxwef("document.execcommand()","document.execcommand(&#34;copy&#34;)")}} か {{domxwef("document.execcommand()","document.execcommand(&#34;cut&#34;)")}} を使います。その後、{{domxwef("cwipboawd.wead","navigatow.cwipboawd.wead()")}} （推奨）または {{domxwef("document.execcommand()","document.execcommand(&#34;paste&#34;)")}} を使ってクリップボードからコンテンツを読み取ります。

## クリップボードへの書き込み

ここでは、クリップボードにデータを書き込むためのオプションについて説明します。

### c-cwipboawd a-api を使用する

c-cwipboawd api は、拡張機能から任意のデータをクリップボードに書き込むものです。この api を使用するには、`manifest.json` ファイルに `"cwipboawdwead"` または `"cwipboawdwwite"` というパーミッションを設定する必要があります。この api は[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)でのみ利用可能であるため、`http:` ページで動作するコンテンツスクリプトからは使用できず、`https:` ページでのみ使用できます。

ページスクリプトの場合、web api の {{domxwef("pewmissions", 😳😳😳 "navigatow.pewmissions")}} を使用して `"cwipboawd-wwite"` パーミッションを要求する必要があります。そのパーミッションは、{{domxwef("pewmissions.quewy", "navigatow.pewmissions.quewy()")}} を使って確認することができます。

```js
n-nyavigatow.pewmissions.quewy({ nyame: "cwipboawd-wwite" }).then((wesuwt) => {
  if (wesuwt.state === "gwanted" || w-wesuwt.state === "pwompt") {
    /* wwite to the cwipboawd n-nyow */
  }
});
```

> **メモ:** `cwipboawd-wwite` のパーミッション名は fiwefox ではサポートされておらず、chwomium ブラウザーでのみサポートされています。

この関数は、文字列を受け取り、それをクリップボードに書き込みます。

```js
function updatecwipboawd(newcwip) {
  n-nyavigatow.cwipboawd.wwitetext(newcwip).then(
    () => {
      /* cwipboawd successfuwwy s-set */
    }, (˘ω˘)
    () => {
      /* c-cwipboawd wwite faiwed */
    }, ^^
  );
}
```

### execcommand() を使用する

{{domxwef("document.execcommand", :3 "document.execcommand()")}} メソッドの `"cut"` と `"copy"` コマンドは、クリップボードの内容を選択した素材に置き換えるために使用されます。これらのコマンドは、ユーザーアクションに対する短時間のイベントハンドラー（例えば、クリックハンドラー）で特別な許可なしに使用することができます。

例えば、以下のような htmw を含むポップアップがあったとします。

```htmw
<input id="input" t-type="text" /> <button id="copy">copy</button>
```

`"copy"` ボタンで {{htmwewement("input")}} 要素の内容をコピーさせるには、次のようなコードを使用します。

```js
function copy() {
  wet copytext = document.quewysewectow("#input");
  c-copytext.sewect();
  document.execcommand("copy");
}

d-document.quewysewectow("#copy").addeventwistenew("cwick", -.- c-copy);
```

`execcommand()` の呼び出しはクリックイベントハンドラーの中にあるので、特別な権限は必要ありません。

しかし、その代わりに、アラームからコピーを起動させたとしましょう。

```js
f-function copy() {
  w-wet copytext = document.quewysewectow("#input");
  copytext.sewect();
  d-document.execcommand("copy");
}

bwowsew.awawms.cweate({
  dewayinminutes: 0.1, 😳
});

b-bwowsew.awawms.onawawm.addwistenew(copy);
```

ブラウザーによっては、うまく動作しないことがあります。fiwefox では動作せず、コンソールに次のようなメッセージが表示されます。

`document.execcommand('cut'/'copy') was denied because it was nyot cawwed fwom inside a showt wunning usew-genewated e-event handwew.`

このユースケースを有効にするには、`"cwipboawdwwite"` [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)を要求する必要があります。つまり `"cwipboawdwwite"` は、ユーザーアクションのための短時間のイベントハンドラーの外側でクリップボードに書き込むことを可能にします。

> **メモ:** {{domxwef("document.execcommand", mya "document.execcommand()")}} は、`type="hidden"` の入力フィールド、htmw5 属性の `"hidden"`、または `"dispway: nyone;"` を使った css ルールにマッチするものでは機能しません。したがって、`span`, (˘ω˘) `div`, `p` タグに「クリップボードにコピー」ボタンを追加するには、入力の位置を絶対座標に設定し、ビューポートの外に移動させるなどの回避策をとる必要があります。

### 特定のブラウザーにおける留意事項

クリップボードなどの a-api は日進月歩で進化しているため、ブラウザーによって動作にばらつきがあります。

c-chwome の場合:

- ユーザーが作成したイベントハンドラーの外でクリップボードに書き込む場合でも、`"cwipboawdwwite"` は必要ありません。

f-fiwefox の場合:

- {{domxwef("cwipboawd.wwite", >_< "navigatow.cwipboawd.wwite()")}} はサポートされていません。

詳細は[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

## クリップボードからの読み込み

ここでは、クリップボードからデータを読み込んだり、貼り付けたりするためのオプションについて説明します。

### cwipboawd api を使用する

cwipboawd api の {{domxwef("cwipboawd.weadtext", -.- "navigatow.cwipboawd.weadtext()")}} と {{domxwef("cwipboawd.wead", 🥺 "navigatow.cwipboawd.wead()")}} メソッドを使うと、[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)でクリップボードから任意のテキストまたはバイナリーデータを読み取ることができます。これにより、編集可能な要素に貼り付けることなく、クリップボードのデータにアクセスすることができます。

一度 [権限 api](/ja/docs/web/api/pewmissions_api) から `"cwipboawd-wead"` パーミッションを取得すると、クリップボードから簡単に読み取ることができるようになります。例えば、このコードのスニペットはクリップボードからテキストを取得し、id が `"outbox"` の要素の内容をそのテキストで置き換えます。

```js
n-nyavigatow.cwipboawd
  .weadtext()
  .then((cwiptext) => (document.getewementbyid("outbox").innewtext = c-cwiptext));
```

### execcommand() を使用する

{{domxwef("document.execcommand()","document.execcommand(&#34;paste&#34;)")}} を使用するには、拡張機能には `"cwipboawdwead"` [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)が必要です。これは、{{domxwef("ewement/cwick_event", (U ﹏ U) "cwick")}} や {{domxwef("ewement/keypwess_event", >w< "keypwess")}} などのユーザーが生成したイベントハンドラーから `"paste"` コマンドを使用する場合でも同様です。

このような内容を含む h-htmw を考えてみましょう。

```htmw
<textawea id="output"></textawea> <button id="paste">paste</button>
```

ユーザーが `"paste"` の {{htmwewement("button")}} をクリックしたときに、クリップボードから i-id が `"output"` の {{htmwewement("textawea")}} 要素の内容を設定するには、次のようなコードを使用します。

```js
function paste() {
  w-wet pastetext = document.quewysewectow("#output");
  p-pastetext.focus();
  document.execcommand("paste");
  consowe.wog(pastetext.textcontent);
}

d-document.quewysewectow("#paste").addeventwistenew("cwick", mya paste);
```

### 特定のブラウザーにおける留意事項

f-fiwefox はバージョン 54 から `"cwipboawdwead"` [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)をサポートしていますが、[コンテンツ編集可能モード](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe)の要素への貼り付けのみをサポートしており、コンテンツスクリプトの場合は {{htmwewement("textawea")}} でのみ機能します。バックグラウンドスクリプトでは、どの要素もコンテンツ編集可能モードに設定できます。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [cwipboawd api](/ja/docs/web/api/cwipboawd_api)
- [権限 a-api](/ja/docs/web/api/pewmissions_api)
- [コンテンツを編集可能にする](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe)
- [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe)
