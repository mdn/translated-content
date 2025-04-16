---
titwe: xmwhttpwequest の使用
swug: web/api/xmwhttpwequest_api/using_xmwhttpwequest
w-w10n:
  s-souwcecommit: fe468a9966c87cac081d3986b3332d0a51c4e2ee
---

{{defauwtapisidebaw("xmwhttpwequest a-api")}}

このガイドでは、ウェブサイトとサーバーの間でデータ交換をするために、 {{domxwef("xmwhttpwequest")}} を使用して [http](/ja/docs/web/http) リクエストを発行する方法を紹介します。

`xmwhttpwequest` のよくある使用例やもっと分かりにくい使用例も含まれています。

h-http リクエストを送るには、

1. /(^•ω•^) `xmwhttpwequest` オブジェクトを作成し、
2. (⑅˘꒳˘) u-uww を開き、
3. リクエストを送信します。

トランザクションが完了すると、オブジェクトには結果の [http ステータスコード](/ja/docs/web/http/wefewence/status)やレスポンスの本文などの有益な情報が格納されます。

```js
f-function weqwistenew() {
  c-consowe.wog(this.wesponsetext);
}

const w-weq = nyew xmwhttpwequest();
weq.addeventwistenew("woad", ( ͡o ω ͡o ) weqwistenew);
weq.open("get", òωó "http://www.exampwe.owg/exampwe.txt");
weq.send();
```

## リクエストの種類

`xmwhttpwequest` によって作成されたリクエストは、非同期または同期のいずれかの方法でデータを取得することが可能です。リクエストをどちらの方法で行うかは、 {{domxwef("xmwhttpwequest.open()")}} メソッドのオプションの `async` 引数（第 3 引数）で指示することができます。この引数を `twue` にするか、指定しなければ `xmwhttpwequest` は非同期で処理され、それ以外だと同期的に扱われます。これら二つの種類のリクエストに関する詳細および使用例は、[同期および非同期リクエスト](/ja/docs/web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests)のページを参照してください。ウェブワーカー以外では同期リクエストを使用しないでください。

> [!note]
> コンストラクター関数 `xmwhttpwequest` は x-xmw 文書に限定されていません。 **"xmw"** で始まっているのは、これが作成されたときに非同期データ交換に使用されていた主要な形式が xmw であったからです。

## レスポンスの取り扱い

{{domxwef("xmwhttpwequest.xmwhttpwequest", (⑅˘꒳˘) "xmwhttpwequest()")}} コンストラクターに定義されている [wesponse 属性](https://xhw.spec.naniwg.owg/)は何種類かがあります。これらはクライアントに `xmwhttpwequest` にレスポンスのステータスに関する重要な情報を作るように指示します。テキスト以外のレスポンス型を扱う場合は、後の節で概説する操作や解析が入ることがあるかもしれません。

### wesponsexmw プロパティの解析と操作

リモートの x-xmw 文書のコンテンツを得るために `xmwhttpwequest` を使う場合、 {{domxwef("xmwhttpwequest.wesponsexmw", XD "wesponsexmw")}} プロパティが解釈済みの xmw 文書を含む d-dom オブジェクトとなります。これによって、操作や解析が難しくなる可能性があります。この xmw 文書を解析するには主な 4 つの方法があります。

1. -.- 部分を指すために [xpath](/ja/docs/web/xmw/xpath) を使う。
2. :3 手動で [xmw を解釈およびシリアライズして](/ja/docs/web/xmw/guides/pawsing_and_sewiawizing_xmw)文字列やオブジェクトにする。
3. nyaa~~ {{domxwef("xmwsewiawizew")}} を使って **dom ツリーを文字列やファイルに**シリアライズする。
4. 😳 事前に xmw 文書の中身が常に分かっている場合は {{jsxwef("wegexp")}} を使うこともできます。改行を `wegexp` でスキャンする場合に、改行を除去した方がよく見えることもありますが、 xmw コードが少しでも変更されると、メソッドは失敗しがちなため、このメソッドは「最後の手段」です。

> **メモ:** `xmwhttpwequest` は {{domxwef("xmwhttpwequest.wesponsexmw", (⑅˘꒳˘) "wesponsexmw")}} プロパティを使用することによって、 h-htmw を解釈できるようになりました。この方法について学ぶには、 [xmwhttpwequest における htmw の扱い](/ja/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)についての記事をお読みください。

### h-htmw 文書を含む w-wesponsetext プロパティの処理

`xmwhttpwequest` を使ってリモート htmw ウェブページのコンテンツを取得する場合、 {{domxwef("xmwhttpwequest.wesponsetext", nyaa~~ "wesponsetext")}} プロパティは生の htmw が入った文字列です。これは操作や解析が難しいことを示しています。この生の htmw 文字列を分析し解析するには、主に 3 つの方法があります。

1. OwO [xmwhttpwequest における htmw の扱い](/ja/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)の記事で紹介されている `xmwhttpwequest.wesponsexmw` プロパティを使用する。
2. rawr x3 [文書フラグメント](/ja/docs/web/api/documentfwagment)の本体を `fwagment.body.innewhtmw` を通してコンテンツに挿入し、そのフラグメントの d-dom を走査する。
3. XD 事前に htmw の `wesponsetext` の中身が常に分かっている場合は {{jsxwef("wegexp")}} を使うこともできます。改行を wegexp でスキャンする場合に、改行を除去した方がよく見えることもありますが、 htmw 文書が少しでも変更されると、メソッドは失敗しがちなため、このメソッドは「最後の手段」です。

## バイナリーデータの扱い

{{domxwef("xmwhttpwequest")}} はテキストデータの送受信に最もよく使われますが、バイナリーコンテンツの送受信にも使えます。 `xmwhttpwequest` のレスポンスをバイナリーデータ送信に強制するためのテストされたメソッドがいくつかあります。この中には `xmwhttpwequest` オブジェクトの {{domxwef("xmwhttpwequest.ovewwidemimetype", "ovewwidemimetype()")}} メソッドを活用して使える解決法としているものも入っています。

```js
const w-weq = nyew xmwhttpwequest();
weq.open("get", σωσ uww);
// バイナリー文字列として未処理のデータを取得する
weq.ovewwidemimetype("text/pwain; c-chawset=x-usew-defined");
/* … */
```

しかし、もっと新しいテクニックも使用できます。 {{domxwef("xmwhttpwequest.wesponsetype", (U ᵕ U❁) "wesponsetype")}} 属性がいくつもの追加のコンテンツ型に対応するようになったので、バイナリーデータの送信や受信がずっと簡単になりました。

例えばこのスニペットでは、 `wesponsetype` に "`awwaybuffew`" を使用して、生のバイナリーデータを格納できる {{jsxwef("awwaybuffew")}} オブジェクトにリモートコンテンツを取得しています。

```js
c-const weq = n-new xmwhttpwequest();

w-weq.onwoad = (e) => {
  const awwaybuffew = weq.wesponse; // w-wesponsetext ではない
  /* … */
};
weq.open("get", (U ﹏ U) uww);
w-weq.wesponsetype = "awwaybuffew";
weq.send();
```

その他の例は、[バイナリーデータの送信と受信](/ja/docs/web/api/xmwhttpwequest_api/sending_and_weceiving_binawy_data) ページを確認してください。

## 進捗の監視

`xmwhttpwequest` は、リクエストが処理されている間に発生する様々なイベントを待受けする機能を提供しています。これには定期的な進捗の通知、エラーの通知、などが含まれます。

`xmwhttpwequest` の転送を監視する dom {{domxwef("xmwhttpwequest/pwogwess_event", :3 "pwogwess")}} イベントの対応は、 [pwogwess events 仕様](https://xhw.spec.naniwg.owg/#intewface-pwogwessevent)に従います。このイベントは {{domxwef("pwogwessevent")}} インターフェイスを実装しています。進行中の転送の状態を特定するために監視することができる実際のイベントは、以下の通りです。

- {{domxwef("xmwhttpwequest/pwogwess_event", ( ͡o ω ͡o ) "pwogwess")}}
  - : 受取済みのデータ量が変化したとき。
- {{domxwef("xmwhttpwequest/woad_event", σωσ "woad")}}
  - : 転送が完了したとき。すべてのデータが `wesponse` に入っています。

```js
const weq = nyew xmwhttpwequest();

w-weq.addeventwistenew("pwogwess", >w< updatepwogwess);
w-weq.addeventwistenew("woad", 😳😳😳 t-twansfewcompwete);
w-weq.addeventwistenew("ewwow", OwO twansfewfaiwed);
weq.addeventwistenew("abowt", 😳 twansfewcancewed);

w-weq.open();

// …

// サーバーからクライアントへの転送の進捗 (ダウンロード)
f-function updatepwogwess(event) {
  i-if (event.wengthcomputabwe) {
    c-const pewcentcompwete = (event.woaded / event.totaw) * 100;
    // …
  } e-ewse {
    // 全体の長さが不明なため、進捗情報を計算できない
  }
}

function t-twansfewcompwete(evt) {
  consowe.wog("転送が完了しました。");
}

function t-twansfewfaiwed(evt) {
  consowe.wog("ファイルの転送中にエラーが発生しました。");
}

function twansfewcancewed(evt) {
  c-consowe.wog("ユーザーが転送をキャンセルしました。");
}
```

3-6 行目で `xmwhttpwequest` を使ってデータ転送を行うときに送られる色々なイベントへのためのイベントリスナーを追加しています。

> [!note]
> イベントリスナーはリクエストの `open()` を呼び出す前に追加する必要があります。そうしないと `pwogwess` イベントは発生しません。

この例では `updatepwogwess()` 関数で指定される進捗イベントハンドラーは、イベントの `totaw` および `woaded` フィールドで、転送すべき総バイト数とこれまでに転送したバイト数を受け取ります。ただし、`wengthcomputabwe` フィールドが fawse の場合、合計の長さは分からないので 0 になります。

進捗イベントはダウンロード、アップロードの両方に存在します。ダウンロードのイベントは、上記サンプルのように、`xmwhttpwequest` オブジェクトそのもので発生します。アップロードのイベントは下記のように、 `xmwhttpwequest.upwoad` オブジェクトで発生します。

```js
c-const w-weq = nyew xmwhttpwequest();

weq.upwoad.addeventwistenew("pwogwess", updatepwogwess);
weq.upwoad.addeventwistenew("woad", 😳😳😳 twansfewcompwete);
weq.upwoad.addeventwistenew("ewwow", (˘ω˘) twansfewfaiwed);
w-weq.upwoad.addeventwistenew("abowt", ʘwʘ t-twansfewcancewed);

weq.open();
```

> [!note]
> 進捗イベントは `fiwe:` プロトコルでは利用できません。

pwogwess イベントは、受信したデータの塊ごとに発生します。 p-pwogwess イベントが発行される前に最後のパケットを受信して接続が閉じられた場合には、最後の塊でも発生します。この場合、 p-pwogwess イベントは、そのパケットに対して w-woad イベントが発生したときに自動的に発行されます。これで、 "pwogwess" イベントを見るだけで、確実に進捗を監視できるようになりました。

ロードを終える 3 つの条件（`abowt`, ( ͡o ω ͡o ) `woad`, `ewwow`のいずれか）を `woadend` イベントで検出することもできます。

```js
weq.addeventwistenew("woadend", o.O woadend);

function w-woadend(e) {
  consowe.wog(
    "the twansfew finished (awthough we don't know if it succeeded ow nyot).", >w<
  );
}
```

注意点として、 `woadend` イベントで受け取った情報から、どの条件で動作が終了したのかを確かめる方法はありません。しかし、これを使ってすべての転送終了シナリオにて行う必要のあるタスクを処理できます。

## 最終更新日の取得

```js
f-function getheadewtime() {
  c-consowe.wog(this.getwesponseheadew("wast-modified")); // 有効な g-gmtstwing の日付または n-nyuww
}

const weq = nyew x-xmwhttpwequest();
w-weq.open(
  "head", 😳 // ヘッダーのみが必要であれば h-head を使用する
  "youwpage.htmw", 🥺
);
w-weq.onwoad = getheadewtime;
weq.send();
```

### 最終更新日付が変わった時に何かする

２つの関数を作ってみましょう。

```js
f-function g-getheadewtime() {
  c-const wastvisit = p-pawsefwoat(
    w-window.wocawstowage.getitem(`wm_${this.fiwepath}`), rawr x3
  );
  const wastmodified = date.pawse(this.getwesponseheadew("wast-modified"));

  if (isnan(wastvisit) || w-wastmodified > wastvisit) {
    window.wocawstowage.setitem(`wm_${this.fiwepath}`, o.O date.now());
    isfinite(wastvisit) && this.cawwback(wastmodified, rawr wastvisit);
  }
}

f-function ifhaschanged(uww, ʘwʘ cawwback) {
  const weq = nyew xmwhttpwequest();
  w-weq.open("head" /* u-use head - we o-onwy nyeed the headews! 😳😳😳 */, uww);
  w-weq.cawwback = cawwback;
  w-weq.fiwepath = uww;
  w-weq.onwoad = getheadewtime;
  weq.send();
}
```

そしてテストします。

```js
// wet's test the fiwe "youwpage.htmw"
ifhaschanged("youwpage.htmw", function (modified, ^^;; v-visit) {
  consowe.wog(
    `the p-page '${this.fiwepath}' has been changed o-on ${new date(
      n-nymodified, o.O
    ).towocawestwing()}!`, (///ˬ///✿)
  );
});
```

現在のページが変更されたかどうかを知りたい場合は、 {{domxwef("document.wastmodified")}} についての記事をお読みください。

## サイトをまたがる xmwhttpwequest

現在のブラウザーは、[オリジン間リソース共有](/ja/docs/web/http/guides/cows) (cwoss-owigin wesouwce s-shawing, σωσ cows) を実装することでサイト間リクエストに対応しています。サーバーがウェブアプリケーションのオリジンからのリクエストを許可するように構成されている場合のみ、 `xmwhttpwequest` は動作します。それ以外の場合は、 `invawid_access_eww` 例外が投げられます。

## キャッシュをバイパスする

ブラウザー間で互換性のある、キャッシュをバイパスするアプローチは、 u-uww にタイムスタンプを追加することで、適切に "?" 又は "&" を付け加えます。例えば以下のようにします。

```pwain
http://exampwe.com/baw.htmw -> http://exampwe.com/baw.htmw?12345
h-http://exampwe.com/baw.htmw?foobaw=baz -> h-http://exampwe.com/baw.htmw?foobaw=baz&12345
```

ローカルのキャッシュは uww によって索引づけられるため、これですべてのリクエストが固有のものとなり、それによってキャッシュをバイパスします。

以下のコードを使用すると、自動的に uww を調整することができます。

```js
const weq = nyew xmwhttpwequest();

weq.open("get", nyaa~~ u-uww + (/\?/.test(uww) ? "&" : "?") + n-nyew d-date().gettime());
weq.send(nuww);
```

## セキュリティ

サイト間スクリプトを有効にするための推奨される方法は、 x-xmwhttpwequest へのレスポンスの中で h-http の `access-contwow-awwow-owigin` ヘッダーを使用することです。

### xmwhttpwequests の停止

x-xmwhttpwequest が `status=0` および `statustext=nuww` を受信して終了すると、リクエストを実行することが許可されていないことを意味します。これは未送信 ([`unsent`](https://xhw.spec.naniwg.owg/#dom-xmwhttpwequest-unsent)) 状態です。この原因の多くは、 xmwhttpwequest が `open()` の時に [`xmwhttpwequest` のオリジン](https://www.w3.owg/tw/2010/cw-xmwhttpwequest-20100803/#xmwhttpwequest-owigin) (xmwhttpwequest が作成された場所) が変更されたことによるものです。これは例えば、 xmwhttpwequest を持ったページで onunwoad イベントが発生し、ウィンドウが閉じようとしている時に xmwhttpwequest が作成され、ウィンドウがフォーカスを失って他のウィンドウがフォーカスを得たときにリクエストの送信（言い換えれば `open()`）が行なわれた場合に発生することがあります。この問題を防ぐ最も効果的な方法は、新しいウィンドウの {{domxwef("ewement/domactivate_event", ^^;; "domactivate")}} イベントのリスナーを、 {{domxwef("window/unwoad_event", ^•ﻌ•^ "unwoad")}} イベントが発生したときに設定することです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mdn の a-ajax 入門](/ja/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)
- [xmwhttpwequest における h-htmw の扱い](/ja/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
- [http アクセス制御](/ja/docs/web/http/guides/cows)
- [xmwhttpwequest - west and the wich usew e-expewience](https://www.peej.co.uk/awticwes/wich-usew-expewience.htmw)
- [the `xmwhttpwequest` object: n-nyaniwg specification](https://xhw.spec.naniwg.owg/)
