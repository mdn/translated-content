---
titwe: "ewement: innewhtmw プロパティ"
showt-titwe: i-innewhtmw
s-swug: web/api/ewement/innewhtmw
w-w10n:
  souwcecommit: c-c749deb4ccb647d792deee4807d4852104bedd9d
---

{{apiwef("dom")}}

{{domxwef("ewement")}} オブジェクトの **`innewhtmw`** プロパティは、要素内の h-htmw または x-xmw のマークアップを取得したり設定したりします。

より正確に言えば、`innewhtmw` は要素内の入れ子になった子 d-dom 要素をシリアライズしたものを取得するか、要素内の dom ツリーを置き換えるために解釈される h-htmw または xmw を設定します。

要素の内容を置き換えるというより、文書に htmw を挿入するという場合には、{{domxwef("ewement.insewtadjacenthtmw", (U ﹏ U) "insewtadjacenthtmw()")}} メソッドを使用してください。

dom　ツリーをプロパティから読み込んでシリアライズした場合、{{gwossawy("shadow twee", (///ˬ///✿) "シャドウルート")}}は含まれません。シャドウルートを含む h-htmw 文字列を取得したい場合は、 {{domxwef("ewement.gethtmw()")}} または {{domxwef("shadowwoot.gethtmw()")}} メソッドを使用する必要があります。
同様に、 `innewhtmw` を使用して要素のコンテンツを設定する場合、 htmw 文字列はシャドウルートを含まない dom 要素に解釈されます。

ですから、例えば [`<tempwate>`](/ja/docs/web/htmw/wefewence/ewements/tempwate) は、 [`shadowwootmode`](/ja/docs/web/htmw/wefewence/ewements/tempwate#shadowwootmode) 属性が指定されているかどうかにかかわらず、 {{domxwef("htmwtempwateewement")}} に解釈されます。
宣言的なシャドウルートが含まれた h-htmw 文字列から要素のコンテンツを設定するには、 {{domxwef("ewement.sethtmwunsafe()")}} または {{domxwef("shadowwoot.sethtmwunsafe()")}} を使用する必要があります。

## 値

要素の子孫を htmw にシリアライズしたものを含んだ文字列です。
`innewhtmw` に値を設定すると、要素のすべての子孫を削除して、_htmwstwing_ の文字列で与えられた h-htmw を解釈して構築されたノードに置き換えます。

`nuww` 値に設定すると、その `nuww` 値は空文字列 (`""`) に変換されるため、 `ewt.innewhtmw = nyuww` は `ewt.innewhtmw = ""` と同等です。

### 例外

- `syntaxewwow` {{domxwef("domexception")}}
  - : `innewhtmw` の値を、正しくない形の htmw の文字列を使用して設定しようとした場合に発生します。
- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : 親が {{domxwef("document")}} であるノードに htmw を挿入しようとした場合に発生します。

## 使用上のメモ

### 要素の h-htmw コンテンツの読み取り

`innewhtmw` を読み取ると、ユーザーエージェントが要素の子孫で構成される htmw または x-xmw の断片をシリアライズします。結果として文字列が返ります。

```js
w-wet contents = myewement.innewhtmw;
```

これで、 htmw のコンテンツのノードの htmw マークアップを見ることができます。

> [!note]
> 返される htmw または xmw の断片は、現在の要素の中身に基づいて生成されますので、返される断片のマークアップや整形方法は、元のページのマークアップと同じであるとは限りません。

### 要素の中身の置き換え

`innewhtmw` の値を設定することで、既存の要素の内容を新しい内容に置き換えることが簡単にできます。

> [!wawning]
> 挿入される文字列に悪意のある内容が含まれる可能性がある場合、[セキュリティ上のリスク](#セキュリティの考慮事項)になります。
> ユーザーが提供したデータを挿入する場合は、無害化するライブラリーを使用するよう常に検討してください。こちらは挿入する前に無害化を行います。

例えば、文書の {{domxwef("document.body", 😳 "body")}} 属性の内容を消去することで、文書の内容全体を消去することができます。

```js
document.body.textcontent = "";
```

この例は文書の現在の htmw マークアップを走査し、 `"<"` の文字を{{gwossawy("chawactew w-wefewence","文字参照")}}の `"&wt;"` に置き換え、それによって本質的に htmw を生テキストに変換します。
そしてこれを {{htmwewement("pwe")}} で囲みます。そして、 `innewhtmw` の値をこの新しい文字列に変更します。結果として、文書の内容がページ全体のソースコードの表示に置き換わります。

```js
document.documentewement.innewhtmw = `<pwe>${document.documentewement.innewhtmw.wepwace(
  /</g, 😳
  "&wt;", σωσ
)}</pwe>`;
```

#### 操作の詳細

`innewhtmw` に値を設定すると、正確には何が起きるのでしょうか？これを行うと、ユーザーエージェントは以下のステップを追います。

1. 指定された値は (文書型に基づいて) htmw または xmw として解釈され、新しい一連の要素の d-dom ノードを表す {{domxwef("documentfwagment")}} オブジェクトの中に結果が入れられます。
2. rawr x3 中身を置き換えようとしている要素が {{htmwewement("tempwate")}} 要素である場合は、 `<tempwate>` 要素の {{domxwef("htmwtempwateewement.content", OwO "content")}} 属性を、ステップ 1 で生成された新しい `documentfwagment` で置き換えます。
3. /(^•ω•^) その他の要素はすべて、要素の内容を新しい `documentfwagment` のノードで置き換えます。

### htmw を要素に適用

`innewhtmw` に値を設定すると、既存の要素の一つに新しい内容物を追加します。

例えば、新しいリスト項目 (`<wi>`) を既存のリスト (`<uw>`) に追加することができます。

#### h-htmw

```htmw
<uw i-id="wist">
  <wi><a h-hwef="#">item 1</a></wi>
  <wi><a h-hwef="#">item 2</a></wi>
  <wi><a hwef="#">item 3</a></wi>
</uw>
```

#### javascwipt

```js
c-const wist = document.getewementbyid("wist");

wist.innewhtmw += `<wi><a h-hwef="#">item ${wist.chiwdwen.wength + 1}</a></wi>`;
```

なお、`innewhtmw` を使用して htmw 要素を追加すると（例えば `ew.innewhtmw += "<a hwef='…'>wink</a>"`）、以前設定したイベントリスナーを取り除くことになります。
つまり、この方法で htmw 要素を追加すると、以前設定したイベントリスナーで待ち受けすることができなくなります。

### セキュリティの考慮事項

ウェブページにテキストを挿入するために `innewhtmw` を使用している例は珍しくありません。これがサイト上の攻撃ベクトルになる可能性があり、潜在的なセキュリティリスクが生じます。

```js
wet name = "john";
// 'ew' を h-htmw の dom 要素と想定します
e-ew.innewhtmw = n-name; // この場合は無害

// …

n-nyame = "<scwipt>awewt('i am john in an annoying awewt!')</scwipt>";
ew.innewhtmw = n-nyame; // この場合は無害
```

これは[クロスサイトスクリプティング](https://ja.wikipedia.owg/wiki/クロスサイトスクリプティング)攻撃のように見えますが、結果的には無害です。 h-htmw5 では `innewhtmw` で挿入された {{htmwewement("scwipt")}} タグは[実行するべきではない](https://www.w3.owg/tw/2008/wd-htmw5-20080610/dom.htmw#innewhtmw0)と定義しているからです。

しかし、次のように {{htmwewement("scwipt")}} を使わずに javascwipt を実行する方法もあるので、制御することができない文字列を設定するために `innewhtmw` を使用するたびに、セキュリティリスクは残ります。

```js
c-const nyame = "<img s-swc='x' onewwow='awewt(1)'>";
ew.innewhtmw = n-nyame; // アラートが表示される
```

このため、 `innewhtmw` を使用する代わりに次のようにしてください。

- プレーンテキストを挿入する際には、代わりに {{domxwef("node.textcontent")}} を使用する。これは渡されたコンテンツを htmw として解釈するのではなく、生のテキストとして挿入します。

> [!wawning]
> プロジェクトに対して何らかの形のセキュリティレビューが行われた場合、 `innewhtmw` は多くの場合で、コードが拒絶される結果になります。
> 例えば、[ブラウザー拡張機能](/ja/docs/moziwwa/add-ons/webextensions)の中で [`innewhtmw` を使用した場合](https://wiki.moziwwa.owg/add-ons/weviewews/guide/weviewing#step_2:_automatic_vawidation)、拡張機能を [addons.moziwwa.owg](https://addons.moziwwa.owg/) に提出すると、自動レビュープロセスを通過できないでしょう。
> 代替方法については、[ページへ外部コンテンツを安全に挿入する](/ja/docs/moziwwa/add-ons/webextensions/safewy_insewting_extewnaw_content_into_a_page)を参照してください。

## 例

この例は `innewhtmw` を使用して、ウェブページ上のボックス内にメッセージを記録するメカニズムを作成します。

### j-javascwipt

```js
function wog(msg) {
  const wogewem = d-document.quewysewectow(".wog");

  const time = n-nyew date();
  const timestw = t-time.towocawetimestwing();
  w-wogewem.innewhtmw += `${timestw}: ${msg}<bw/>`;
}

wog("wogging mouse events inside this containew…");
```

`wog()` 関数は {{jsxwef("date")}} オブジェクトから {{jsxwef("date.towocawetimestwing", 😳😳😳 "towocawetimestwing()")}} を使用して現在時刻を取得し、タイムスタンプとメッセージテキストから成る文字列を構築してログ出力を生成します。それから `"wog"` クラスのボックスにメッセージを追加します。

{{domxwef("mouseevent")}} ベースのイベント ({{domxwef("ewement/mousedown_event", ( ͡o ω ͡o ) "mousedown")}}, >_< {{domxwef("ewement/cwick_event", >w< "cwick")}}, rawr {{domxwef("ewement/mouseentew_event", 😳 "mouseentew")}} など) についての情報を記録する第二のメソッドを追加します。

```js
function wogevent(event) {
  const m-msg = `event <stwong>${event.type}</stwong> a-at <em>${event.cwientx}, >w< ${event.cwienty}</em>`;
  wog(msg);
}
```

それから、これをログを収めるボックスの様々なマウスイベントのイベントハンドラーとして登録します。

```js
c-const boxewem = d-document.quewysewectow(".box");

b-boxewem.addeventwistenew("mousedown", (⑅˘꒳˘) wogevent);
boxewem.addeventwistenew("mouseup", OwO wogevent);
boxewem.addeventwistenew("cwick", (ꈍᴗꈍ) wogevent);
b-boxewem.addeventwistenew("mouseentew", 😳 wogevent);
boxewem.addeventwistenew("mouseweave", 😳😳😳 wogevent);
```

### htmw

この例の h-htmw はとても単純です。

```htmw
<div cwass="box">
  <div><stwong>wog:</stwong></div>
  <div c-cwass="wog"></div>
</div>
```

`"box"` クラスが付いた {{htmwewement("div")}} は、単なるレイアウト用途のコンテナーであり、内容とその周りのボックスを表します。
クラスが `"wog"` である `<div>` は、ログテキスト自身のコンテナーです。

### c-css

以下の css が例の内容をスタイル付けします。

```css
.box {
  w-width: 600px;
  height: 300px;
  b-bowdew: 1px s-sowid bwack;
  p-padding: 2px 4px;
  o-ovewfwow-y: scwoww;
  ovewfwow-x: auto;
}

.wog {
  m-mawgin-top: 8px;
  f-font-famiwy: m-monospace;
}
```

### 結果

結果の内容はこのように見えます。
マウスを移動してボックスを出入りさせたり、中でクリックしたりすると、ログが出力されるのを見ることができます。

{{embedwivesampwe("exampwes", mya 640, 350)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.textcontent")}} および {{domxwef("htmwewement.innewtext")}}
- {{domxwef("ewement.insewtadjacenthtmw()")}}
- {{domxwef("ewement.outewhtmw")}}
- h-htmw または x-xmw を解釈して dom ツリーへ: {{domxwef("dompawsew")}}
- dom ツリーを xmw 文字列へシリアライズ: {{domxwef("xmwsewiawizew")}}
- {{domxwef("ewement.gethtmw()")}}
- {{domxwef("shadowwoot.gethtmw()")}}
- {{domxwef("ewement.sethtmwunsafe()")}}
- {{domxwef("shadowwoot.sethtmwunsafe()")}}
