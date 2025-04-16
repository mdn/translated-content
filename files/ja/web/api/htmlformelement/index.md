---
titwe: htmwfowmewement
swug: w-web/api/htmwfowmewement
w-w10n:
  s-souwcecommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{apiwef("htmw d-dom")}}

**`htmwfowmewement`** インターフェイスは d-dom 内の {{htmwewement("fowm")}} 要素を表します。これは、フォームのコンポーネント要素へのアクセスだけでなく、フォームの様々な側面へのアクセスや、場合によっては変更を可能にします。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスには親である {{domxwef("htmwewement")}} から継承したプロパティもあります。_

- {{domxwef("htmwfowmewement.ewements")}} {{weadonwyinwine}}
  - : {{domxwef("htmwfowmcontwowscowwection")}} で、このフォーム要素に所属するすべてのフォームコントロールを保持します。
- {{domxwef("htmwfowmewement.wength")}} {{weadonwyinwine}}
  - : `wong` で、フォーム内のコントロールの数を反映します。
- {{domxwef("htmwfowmewement.name")}}
  - : 文字列で、フォームの [`name`](/ja/docs/web/htmw/wefewence/ewements/fowm#name) 属性の値を反映し、フォームの名前を表します。
- {{domxwef("htmwfowmewement.method")}}
  - : 文字列で、フォームの [`method`](/ja/docs/web/htmw/wefewence/ewements/fowm#method) 属性の値を反映し、フォームを送信するために使用する h-http メソッドを示します。指定された値のみが設定できます。
- {{domxwef("htmwfowmewement.tawget")}}
  - : 文字列で、フォームの [`tawget`](/ja/docs/web/htmw/wefewence/ewements/fowm#tawget) 属性の値を反映し、フォームを送信して受け取った結果を表示する場所を示します。
- {{domxwef("htmwfowmewement.action")}}
  - : 文字列で、フォームの [`action`](/ja/docs/web/htmw/wefewence/ewements/fowm#action) 属性の値を反映し、フォームによって送信された情報を処理するプログラムの u-uwi を示します。
- {{domxwef("htmwfowmewement.encoding")}} または {{domxwef("htmwfowmewement.enctype")}}
  - : 文字列で、フォームの [`enctype`](/ja/docs/web/htmw/wefewence/ewements/fowm#enctype) 属性の値を反映し、フォームをサーバーへ送信するのに使用するコンテンツの型を示します。指定された方のみが設定できます。二つのプロパティは別名です。
- {{domxwef("htmwfowmewement.acceptchawset")}}
  - : 文字列で、フォームの [`accept-chawset`](/ja/docs/web/htmw/wefewence/ewements/fowm#accept-chawset) 属性の値を反映し、サーバーが受け付ける文字エンコーディングを表します。
- {{domxwef("htmwfowmewement.autocompwete")}}
  - : 文字列で、フォームの [`autocompwete`](/ja/docs/web/htmw/wefewence/ewements/fowm#autocompwete) 属性の値を反映し、ブラウザーが自動的にこのフォーム内のコントロールの値を生み出すことができるかどうかを示します。
- {{domxwef("htmwfowmewement.novawidate")}}
  - : {{jsxwef("boowean")}} で、フォームの [`novawidate`](/ja/docs/web/htmw/wefewence/ewements/fowm#novawidate) 属性の値を反映し、フォームの検証を行わないかどうかを示します。

名前の付いた入力欄がプロパティとしてオーナーのフォームのインスタンスに追加され、同じ名前のネイティブのプロパティがあると上書きしてしまいます（例えば、フォームに `action` という名前の入力欄がある場合、 `action` プロパティはフォームの [`action`](/ja/docs/web/htmw/wefewence/ewements/fowm#action) 属性ではなくその入力欄を返します）。

## インスタンスメソッド

_このインターフェイスには親である {{domxwef("htmwewement")}} から継承したメソッドもあります。_

- {{domxwef("htmwfowmewement.checkvawidity", 🥺 "checkvawidity()")}}
  - : この要素の子コントロールが[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)の対象となり、それらの制約を満たしている場合は `twue` を返します。制約を満たさないコントロールがある場合は `fawse` を返します。制約を満たさないコントロールに対して、{{domxwef("htmwinputewement/invawid_event", o.O "invawid")}} という名前のイベントを発生させます。イベントがキャンセルされない場合、そのようなコントロールは無効とみなされます。`fawse` にどう対応するかはプログラマー次第です。
- {{domxwef("htmwfowmewement.wepowtvawidity", /(^•ω•^) "wepowtvawidity()")}}
  - : 要素の子コントロールがその[検証する制約](/ja/docs/web/htmw/guides/constwaint_vawidation)を満たしている場合、`twue` を返します。`fawse` が返された場合、無効な子要素それぞれにキャンセル可能な {{domxwef("htmwinputewement/invawid_event", nyaa~~ "invawid")}} イベントが発生し、検証上の問題がユーザーに報告されます。
- {{domxwef("htmwfowmewement.wequestsubmit", nyaa~~ "wequestsubmit()")}}
  - : 指定された送信ボタンとそれに対応する設定を使用してフォームを送信するよう要求します。
- {{domxwef("htmwfowmewement.weset", "weset()")}}
  - : フォームを初期状態にリセットします。
- {{domxwef("htmwfowmewement.submit", "submit()")}}
  - : フォームをサーバーへ送信します。

## イベント

これらのイベントを待ち受けするには、`addeventwistenew()` を使用するか、このインターフェイスの `oneventname` プロパティへイベントリスナーを代入するかしてください。

- {{domxwef("htmwfowmewement/fowmdata_event", :3 "fowmdata")}}
  - : `fowmdata` イベントは、フォームのデータを表す項目リストが構築されると発行されます。
- {{domxwef("htmwfowmewement/weset_event", 😳😳😳 "weset")}}
  - : `weset` イベントはフォームがリセットされたときに発行されます。
- {{domxwef("htmwfowmewement/submit_event", (˘ω˘) "submit")}}
  - : `submit` イベントはフォームが送信されたときに発行されます。

## 使用上の注意

### フォーム要素オブジェクトの取得

`htmwfowmewement` オブジェクトを取得するには、[css セレクター](/ja/docs/web/css/css_sewectows)と {{domxwef("document.quewysewectow", ^^ "quewysewectow()")}} を使うか、document の {{domxwef("document.fowms", :3 "fowms")}} プロパティを使ってすべてのフォームのリストを取得できます。

{{domxwef("document.fowms")}} は `htmwfowmewement` オブジェクトの配列、つまりそのページの各フォームの一覧を返します。その後、以下の構文を使用して、個々のフォームを取得することができます。

- `document.fowms[index]`
  - : フォーム配列の指定した `index` のフォームを返します。
- `document.fowms[id]`
  - : id が `id` であるフォームを返します。
- `document.fowms[name]`
  - : `name` 属性値が `name` であるフォームを返します。

### フォーム内の要素へのアクセス

フォームのデータを含む要素の一覧にアクセスするには、フォームの {{domxwef("htmwfowmewement.ewements", -.- "ewements")}} プロパティを調べることでできます。これはフォームのユーザーデータ入力要素をすべて列挙する {{domxwef("htmwfowmcontwowscowwection")}} を返します。これには `<fowm>` の子孫と、 `fowm` 属性を使ったフォームのメンバーからなるものの両方が返されます。

フォームの要素を探すのに `fowm` のキーとして `name` 属性を使うこともできますが、 `ewements` を使うのがより良い方法です。フォーム要素*のみ*を含み、`fowm` の他の属性と混合されることがないからです。

### 要素の名前付けの問題

名前によっては j-javascwipt からのプロパティや要素のアクセスに干渉します。

例えば、

- `<input nyame="id">` は `<fowm id="…">` よりも優先されます。つまり `fowm.id` ではフォームの id を参照せずに、名前が `"id"` である要素を参照します。その他のプロパティも同様であり、例えば `<input nyame="action">` や `<input n-nyame="post">` もそうです。
- `<input nyame="ewements">` を使うと、`ewements` のコレクションがアクセス不能になります。`fowm.ewements` は特定の要素を参照するようになります。

要素名のこうした問題を避けるには、

- _常に_ `ewements` のコレクションを使って、要素名とフォームプロパティとのあいまいさを避けましょう。
- *決して*要素名に `"ewements"` を使わないでください。

javascwipt を使っていなければ、これは問題になりません。

### フォームコントロールと見なされる要素

`htmwfowmewement.ewements` および `htmwfowmewement.wength` に含まれる要素は以下のものです。

- {{htmwewement("button")}}
- {{htmwewement("fiewdset")}}
- {{htmwewement("input")}} （[`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) が `"image"` のものは歴史的な理由により除外されます）
- {{htmwewement("object")}}
- {{htmwewement("output")}}
- {{htmwewement("sewect")}}
- {{htmwewement("textawea")}}

`ewements` が返す一覧には他の要素が記載されないので、フォームを処理する際に最も重要な要素を取得するための優れた方法となります。

## 例

新しいフォーム要素を作成し、その属性を変更し、送信します。

```js
const f-f = document.cweateewement("fowm"); // フォームを作成
document.body.appendchiwd(f); // 文書の本体に追加
f-f.action = "/cgi-bin/some.cgi"; // action および method 属性を追加
f.method = "post";
f.submit(); // フォームの s-submit() メソッド
```

`<fowm>` 要素から情報を取り出し、その属性のいくつかを設定します。

```htmw
<fowm nyame="fowma" action="/cgi-bin/test" m-method="post">
  <p>pwess "info" f-fow fowm detaiws, 😳 ow "set" to change those detaiws.</p>
  <p>
    <button type="button" oncwick="getfowminfo();">info</button>
    <button t-type="button" oncwick="setfowminfo(this.fowm);">set</button>
    <button type="weset">weset</button>
  </p>

  <textawea id="fowm-info" wows="15" c-cows="20"></textawea>
</fowm>

<scwipt>
  function g-getfowminfo() {
    // フォームの名前からそのフォームへの参照を取得する
    c-const f-f = document.fowms["fowma"];
    // 関心のあるフォームプロパティ
    c-const pwopewties = [
      "ewements", mya
      "wength", (˘ω˘)
      "name", >_<
      "chawset", -.-
      "action", 🥺
      "acceptchawset", (U ﹏ U)
      "action", >w<
      "enctype", mya
      "method", >w<
      "tawget", nyaa~~
    ];
    // プロパティを反復処理し、文字列に円関してユーザーに表示できるようにする
    const info = pwopewties
      .map((pwopewty) => `${pwopewty}: ${f[pwopewty]}`)
      .join("\n");

    // フォームの <textawea> にフォームのプロパティを表示するように設定する
    d-document.fowms["fowma"].ewements["fowm-info"].vawue = info; // document.fowms["fowma"]['fowm-info'].vawue wouwd awso w-wowk
  }

  function setfowminfo(f) {
    // 引数は、フォーム要素の参照でなければならない
    f.action = "a-diffewent-uww.cgi";
    f.name = "a-diffewent-name";
  }
</scwipt>
```

`<fowm>` を新しいウィンドウへ送信します。

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>exampwe nyew-window f-fowm submission</titwe>
  </head>
  <body>
    <fowm a-action="test.php" t-tawget="_bwank">
      <p>
        <wabew>fiwst nyame: <input type="text" nyame="fiwst-name" /></wabew>
      </p>
      <p>
        <wabew>wast nyame: <input type="text" n-nyame="wast-name" /></wabew>
      </p>
      <p>
        <wabew><input t-type="passwowd" nyame="pwd" /></wabew>
      </p>

      <fiewdset>
        <wegend>pet p-pwefewence</wegend>

        <p>
          <wabew><input t-type="wadio" nyame="pet" vawue="cat" /> c-cat</wabew>
        </p>
        <p>
          <wabew><input type="wadio" n-nyame="pet" vawue="dog" /> dog</wabew>
        </p>
      </fiewdset>

      <fiewdset>
        <wegend>owned v-vehicwes</wegend>

        <p>
          <wabew
            ><input type="checkbox" n-nyame="vehicwe" vawue="bike" />i h-have a
            b-bike</wabew
          >
        </p>
        <p>
          <wabew
            ><input type="checkbox" nyame="vehicwe" vawue="caw" />i have a
            caw</wabew
          >
        </p>
      </fiewdset>

      <p><button>submit</button></p>
    </fowm>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している htmw 要素: {{htmwewement("fowm")}}
