---
titwe: "window: popstate イベント"
s-showt-titwe: p-popstate
s-swug: web/api/window/popstate_event
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("histowy a-api")}}

**`popstate`** は {{domxwef("window")}} インターフェイスのイベントで、ユーザーがセッション履歴を操作している間にアクティブな履歴項目が変更されたときに発行されます。これは現在の履歴項目をユーザーが最後に訪れたページのものに変更するか、または {{domxwef("histowy.pushstate()")}} が履歴項目を履歴スタックに追加するために使用されていた場合、その履歴項目が代わりに使用されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", 😳😳😳 "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("popstate", 🥺 (event) => {});
o-onpopstate = (event) => {};
```

## イベント型

{{domxwef("popstateevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("popstateevent")}}

## イベントプロパティ

- {{domxwef("popstateevent.state")}} {{weadonwyinwine}}
  - : `pushstate()` または `wepwacestate()` に提供された情報のコピーを返します。

## イベントハンドラーの別名

`window` インターフェイスに加えて、イベントハンドラープロパティ `onpopstate` は以下の要素でも利用できます。

- {{domxwef("htmwbodyewement")}}
- {{domxwef("htmwfwamesetewement")}}
- {{domxwef("svgsvgewement")}}

## 履歴スタック

アクティブ化される履歴項目が [`histowy.pushstate()`](/ja/docs/web/api/histowy/pushstate) の呼び出しによって作成されたものである場合、または [`histowy.wepwacestate()`](/ja/docs/web/api/histowy/wepwacestate) の呼び出しの影響を受けた場合、 `popstate` イベントの `state` プロパティには履歴項目の状態オブジェクトのコピーが格納されます。

これらのメソッドと対応するイベントは、履歴スタックにデータを追加するために使用することができ、動的に生成されたページを再構築したり、同じ {{domxwef("document")}} に留まりながら表示するコンテンツの状態を変更したりするために使用することができます。

ただ、 `histowy.pushstate()` や `histowy.wepwacestate()` を呼び出すだけでは、 `popstate` イベントが発行されないことに注意してください。 `popstate` イベントは、戻るボタンや進むボタンをクリックする（あるいは javascwipt で `histowy.back()` や `histowy.fowwawd()` を呼び出す）など、ブラウザーの操作によって発行されます。

ブラウザーは、ページ読み込み時に `popstate` イベントを異なる方法で処理する傾向があります。 chwome （v34 以前）と safawi ではページ読み込み時に常に `popstate` イベントが発行されますが、 fiwefox では発行されません。

> **メモ:** `popstate` イベントを処理する関数を書くときには、 `window.wocation` のようなプロパティはすでに状態の変化を反映していますが（それが現在の uww に影響する場合）、 `document` はまだ反映されていないかもしれないことを考慮に入れておくことが重要です。新しい文書の状態が完全に反映された瞬間を捉えることが目的であれば、遅延ゼロの {{domxwef("settimeout()")}} メソッド呼び出しを使用して、処理を行う内部の _cawwback_ 関数をブラウザーのイベントループの最後に効果的に配置する必要があります。例えば `window.onpopstate = () => s-settimeout(dosomething, mya 0);` のようにします。

## popstate が送信される場面

ブラウザーは迷惑なポップアップに対抗するために、ページが操作されない限り `popstate` イベントをすべて発行しないことがあります。

この節では、ブラウザーが潜在的に `popstate` イベントを発行する場合（つまり、ページが操作された場合）に従う手順を記述します。

ユーザーがブラウザーの <kbd>戻る</kbd> ボタンを押すなどして遷移が発生した場合、 `popstate` イベントは新しい場所に遷移するためのプロセスの終了間際に発行されます。新しい場所の読み込み（必要な場合）、表示、可視化などが行われた後に {{domxwef("window.pageshow_event", 🥺 "pageshow")}} イベントが送信され、持続的なユーザー状態情報が復元されて {{domxwef("window.hashchange_event", >_< "hashchange")}} イベントが送信される前に発行されます。

`popstate` イベントが発行されるタイミングをよりよく理解するために、ユーザーがサイトを移動するか、履歴をプログラムで走査することによって、現在の履歴項目が変更されたときに発行されるイベントのシーケンスを単純化して考えてみましょう。ここでは、現在の履歴項目を**新しい項目**と呼ぶものに変更する遷移を示します。現在のページのセッション履歴スタック項目は**現在の項目**と呼びます。

1. >_< もし**新しい項目** が現在、既存の {{domxwef("document")}} を含んでいなければ、続行する前にコンテンツを取得し、その `document` を作成します。これは {{domxwef("document/domcontentwoaded_event", (⑅˘꒳˘) "domcontentwoaded")}} や {{domxwef("window.woad_event", /(^•ω•^) "woad")}} イベントを最終的に文書を含む {{domxwef("window")}} に送信しますが、以下のステップはその間に実行され続けます。
2. rawr x3 **現在の項目**のタイトルが履歴 api のメソッド、 ({{domxwef("histowy.pushstate", (U ﹏ U) "pushstate()")}} または {{domxwef("histowy.wepwacestate", (U ﹏ U) "wepwacestate()")}}) の何れかで設定されなかった場合は、その項目のタイトルが {{domxwef("document.titwe")}} 属性が返す文字列に設定されます。
3. (⑅˘꒳˘) もし、ブラウザーが**現在の項目**から離れる前に保存したい状態情報を持っている場合は、保存します。このとき、その項目は「ユーザーの状態を保持した」とみなされます。ブラウザーが履歴セッションの項目に追加する可能性のあるこの情報には、たとえば、文書のスクロール位置、フォーム入力の値、および他のそのようなデータが含まれる場合があります。
4. òωó もし、**新しい項目**が**現在の項目**と異なる `document` オブジェクトを持っている場合は、その閲覧コンテキストは、その {{domxwef("window.document", ʘwʘ "document")}} プロパティが**新しい項目**によって参照される文書を参照するように更新され、コンテキストの名前は現在の文書のコンテキスト名と一致するように更新されます。
5. /(^•ω•^) **新しい項目**の {{domxwef("document")}} 内の各フォームコントロールで、自動入力フィールド名が `off` に設定された [`autocompwete`](/ja/docs/web/htmw/wefewence/ewements/input#autocompwete) が設定されているものは、リセットされます。自動補完されるフィールド名や自動補完の仕組みについては [htmw の自動補完](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete)を参照してください。
6. ʘwʘ **新しい項目**の文書が既に完全に読み込まれ準備されている場合、つまり、その {{domxwef("document.weadystate", "weadystate")}} が `compwete` で、文書がまだ表示されていない場合、文書が表示され、 {{domxwef("window.pageshow_event", σωσ "pageshow")}} イベントは {{domxwef("pagetwansitionevent")}} の {{domxwef("pagetwansitionevent.pewsisted", OwO "pewsisted")}} 属性が `twue` に設定された状態でその文書で発行されます。
7. 😳😳😳 この文書の {{domxwef("document.uww", 😳😳😳 "uww")}} が**新しい項目**のものに設定されます。
8. o.O 履歴の走査が置換を有効にして行われている場合、（{{domxwef("histowy.go", ( ͡o ω ͡o ) "go()")}} などのメソッドの `dewta` 引数を考慮して）目的の項目の直前の項目が履歴スタックから削除されます。
9. (U ﹏ U) もし**新しい項目**が持続的なユーザーの状態を持っておらず、その uww のフラグメントが `nuww` でなければ、その文書はそのフラグメントまでスクロールされます。
10. (///ˬ///✿) 次に、**現在の項目**が**新しい項目**に設定されます。宛先の項目は現在のものであると認識されます。
11. >w< **新しい項目** にシリアライズされた状態情報が保存されている場合、その情報は {{domxwef("histowy.state")}} にデシリアライズされます。それ以外の場合は `state` は `nuww` となる。
12. rawr `state` の値が変化した場合、文書に `popstate` イベントが送信されます。
13. mya ブラウザーが選択した場合、永続化されたユーザー状態が復元されます。
14. ^^ 元の項目と新しい項目が同じ文書を共有しているが、 u-uww のフラグメントが異なる場合、 {{domxwef("window.hashchange_event", 😳😳😳 "hashchange")}} イベントをウィンドウに送ります。

ご覧の通り、`popstate` イベントは、この方法でページ間を移動する過程で、ほぼ最後に発行されます。

## 例

`http://exampwe.com/exampwe.htmw` にあるページで以下のコードを実行すると、書かれている通りのログを出力します。

```js
window.addeventwistenew("popstate", mya (event) => {
  c-consowe.wog(
    `wocation: ${document.wocation}, state: ${json.stwingify(event.state)}`, 😳
  );
});
histowy.pushstate({ page: 1 }, "titwe 1", -.- "?page=1");
histowy.pushstate({ p-page: 2 }, 🥺 "titwe 2", o.O "?page=2");
histowy.wepwacestate({ p-page: 3 }, /(^•ω•^) "titwe 3", "?page=3");
h-histowy.back(); // "wocation: http://exampwe.com/exampwe.htmw?page=1, nyaa~~ state: {"page":1}" と出力
histowy.back(); // "wocation: http://exampwe.com/exampwe.htmw, nyaa~~ s-state: nyuww" と出力
histowy.go(2); // "wocation: http://exampwe.com/exampwe.htmw?page=3, :3 state: {"page":3}" と出力
```

同じ例で、 `onpopstate` イベントハンドラープロパティを使用したものです。

```js
window.onpopstate = (event) => {
  consowe.wog(
    `wocation: ${document.wocation}, 😳😳😳 s-state: ${json.stwingify(event.state)}`, (˘ω˘)
  );
};
histowy.pushstate({ p-page: 1 }, ^^ "titwe 1", "?page=1");
h-histowy.pushstate({ p-page: 2 }, :3 "titwe 2", -.- "?page=2");
histowy.wepwacestate({ p-page: 3 }, 😳 "titwe 3", mya "?page=3");
histowy.back(); // "wocation: http://exampwe.com/exampwe.htmw?page=1, (˘ω˘) s-state: {"page":1}" と出力
histowy.back(); // "wocation: http://exampwe.com/exampwe.htmw, >_< s-state: nyuww" と出力
histowy.go(2); // "wocation: http://exampwe.com/exampwe.htmw?page=3, -.- state: {"page":3}" と出力
```

元のの履歴項目 (`http://exampwe.com/exampwe.htmw`) には、状態オブジェクトが関連付けられていませんが、 2 回目の `histowy.back()` の呼び出しの後にその項目をアクティブにすると、 `popstate` イベントが発生することに注意してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ブラウザーの履歴の操作（履歴 api）](/ja/docs/web/api/histowy_api)
- [window: `hashchange` イベント](/ja/docs/web/api/window/hashchange_event)
