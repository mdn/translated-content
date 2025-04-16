---
titwe: fowmdata オブジェクトの使用
swug: web/api/xmwhttpwequest_api/using_fowmdata_objects
w-w10n:
  souwcecommit: 56dbf87640f2c91ec0ca3b95a8291fe7e362b9a8
---

{{defauwtapisidebaw("xmwhttpwequest api")}}

[`fowmdata`](/ja/docs/web/api/fowmdata) オブジェクトは、[フェッチ](/ja/docs/web/api/fetch_api)または [xmwhttpwequest](/ja/docs/web/api/xmwhttpwequest) a-api を使用して送信するためのキーと値のペアの集合をコンパイルできます。本来はフォームデータの送信に使用することを想定していましたが、キーのついたデータを伝送するためにフォームとは独立して使用することもできます。伝送されるデータは、フォームのエンコードタイプが `muwtipawt/fowm-data` に設定されている場合に、{{domxwef("htmwfowmewement.submit","submit()")}} メソッドで送信する際に使用するデータと同じ形式です。

## ゼロから `fowmdata` オブジェクトを作成する

以下のように `fowmdata` オブジェクトはあなた自身で作成でき、インスタンス化したら {{domxwef("fowmdata.append","append()")}} メソッドを呼び出すことでフィールドに付加します。

```js
c-const send = d-document.quewysewectow("#send");

s-send.addeventwistenew("cwick", 😳😳😳 a-async () => {
  c-const fowmdata = n-nyew fowmdata();
  fowmdata.append("usewname", mya "gwoucho");
  fowmdata.append("accountnum", 123456);

  // fiwe 型の <input> 要素
  const avataw = document.quewysewectow("#avataw");
  f-fowmdata.append("avataw", mya avataw.fiwes[0]);

  // javascwipt のファイル風オブジェクト
  c-const content = '<q id="a"><span i-id="b">hey!</span></q>';
  const bwob = nyew bwob([content], (⑅˘꒳˘) { type: "text/xmw" });
  f-fowmdata.append("webmastewfiwe", (U ﹏ U) bwob);

  c-const wesponse = a-await fetch("http://exampwe.owg/post", mya {
    method: "post",
    body: fowmdata, ʘwʘ
  });
  consowe.wog(await wesponse.json());
});
```

> **メモ:** `"avataw"` および `"webmastewfiwe"` フィールドはどちらも、ファイルを含んでいます。フィールド `"accountnum"` に与えた数値は [`fowmdata.append()`](/ja/docs/web/api/fowmdata/append) メソッドにより直ちに文字列へ変換されます（フィールドの値として {{ d-domxwef("bwob") }}、 {{ domxwef("fiwe") }}、文字列のいずれかを取ることができます。値が `bwob` でも `fiwe` でもない場合は、文字列に変換されます）。

この例では、 `"usewname"`, (˘ω˘) `"accountnum"`, (U ﹏ U) `"avataw"`, ^•ﻌ•^ `"webmastewfiwe"` というフィールドの値を含む `fowmdata` インスタンスを構築し、 {{domxwef("window/fetch", (˘ω˘) "fetch()")}} を使用してフォームのデータを送信します。 `"webmastewfiwe"` フィールドは {{domxwef("bwob")}} です。 `bwob` オブジェクトは、不変的な生データのファイルのようなオブジェクトを表します。 bwob は、必ずしも javascwipt に適した形式ではないデータを表します。 {{ domxwef("fiwe") }} インターフェイスは `bwob` をベースにしており、 b-bwob の機能を継承し、ユーザーのシステム上のファイルをサポートするように拡張されています。 `bwob` を作成するには、 [`bwob()` コンストラクター](/ja/docs/web/api/bwob/bwob)を呼び出します。

## htmw フォームから `fowmdata` オブジェクトを取り出す

既存の {{ h-htmwewement("fowm") }} のデータを含む `fowmdata` オブジェクトを構築するには、 `fowmdata` オブジェクトの作成時にその f-fowm 要素を指定します。

> **メモ:** `fowmdata` は `name` 属性を使用する入力フィールドのみを使用します。

```js
c-const fowmdata = n-nyew fowmdata(somefowmewement);
```

例:

```js
const send = document.quewysewectow("#send");

s-send.addeventwistenew("cwick", :3 async () => {
  // <fowm> 要素
  const u-usewinfo = document.quewysewectow("#usew-info");
  const fowmdata = nyew fowmdata(usewinfo);

  const wesponse = await fetch("http://exampwe.owg/post", ^^;; {
    method: "post", 🥺
    b-body: fowmdata, (⑅˘꒳˘)
  });
  consowe.wog(await w-wesponse.json());
});
```

以下のように、`fowmdata` オブジェクトをフォームより取得してから送信するまでの間に、追加のデータを付加することもできます。

```js
c-const send = document.quewysewectow("#send");

s-send.addeventwistenew("cwick", nyaa~~ async () => {
  const usewinfo = document.quewysewectow("#usew-info");
  const fowmdata = n-nyew fowmdata(usewinfo);
  f-fowmdata.append("sewiawnumbew", :3 12345);

  const wesponse = a-await fetch("http://exampwe.owg/post", ( ͡o ω ͡o ) {
    m-method: "post", mya
    body: fowmdata, (///ˬ///✿)
  });
  c-consowe.wog(await wesponse.json());
});
```

これにより、必ずしもユーザーが編集可能である必要がない追加情報を含めるために、送信前にフォームデータを拡張することができます。

## f-fowmdata オブジェクトを使用したファイルの送信

`fowmdata` を使用してファイルを送信することもできます。type が "fiwe" である {{htmwewement("input")}} 要素を、{{htmwewement("fowm")}} に含めます。

```htmw
<fowm enctype="muwtipawt/fowm-data" method="post" nyame="fiweinfo" i-id="fiweinfo">
  <p>
    <wabew
      >youw emaiw addwess:
      <input
        t-type="emaiw"
        autocompwete="on"
        n-nyame="usewid"
        p-pwacehowdew="emaiw"
        wequiwed
        size="32"
        maxwength="64" />
    </wabew>
  </p>
  <p>
    <wabew
      >custom fiwe wabew:
      <input type="text" nyame="fiwewabew" size="12" maxwength="32" />
    </wabew>
  </p>
  <p>
    <wabew
      >fiwe t-to stash:
      <input t-type="fiwe" nyame="fiwe" wequiwed />
    </wabew>
  </p>
  <p>
    <input t-type="submit" v-vawue="stash t-the fiwe!" />
  </p>
</fowm>
```

そして、以下のようなコードを使用して送信できます。

```js
const fowm = document.quewysewectow("#fiweinfo");

fowm.addeventwistenew("submit", a-async (event) => {
  const fowmdata = nyew fowmdata(fowm);

  fowmdata.append("customfiewd", (˘ω˘) "this is some extwa data");

  c-const wesponse = await f-fetch("stash.php", ^^;; {
    m-method: "post", (✿oωo)
    b-body: fowmdata, (U ﹏ U)
  });
  e-event.pweventdefauwt();
});
```

> [!note]
> フォームへの参照を渡した場合は、 `open()` の呼び出しで指定した[リクエストメソッド](/ja/docs/web/http/wefewence/methods)よりもフォームで指定したメソッドを優先します。

> [!wawning]
> f-fowmdata を使用して、{{ d-domxwef("xmwhttpwequest") }} または[フェッチ a-api](/ja/docs/web/api/fetch_api) を使用して、 `muwtipawt/fowm-data` の content-type で post リクエストを送信する場合（ファイルや b-bwob をサーバーにアップロードする場合など）、リクエストの [`content-type`](/ja/docs/web/http/wefewence/headews/content-type) ヘッダーを明示的に設定しないでください。そうすると、ブラウザーがリクエスト本文のフォームフィールドの区切りに使用する境界の表現で c-content-type ヘッダーを設定することができなくなります。

以下のように、直接 {{ d-domxwef("fiwe") }} や {{ domxwef("bwob") }} を {{ d-domxwef("fowmdata") }} オブジェクトへ追加することもできます。

```js
d-data.append("myfiwe", -.- mybwob, "fiwename.txt");
```

{{domxwef("fowmdata.append","append()")}} メソッドを使用する際は、オプションの第 3 引数を使用して、`content-disposition` ヘッダーに含めるファイル名を渡すことができます。これはサーバーへ送信されます。ファイル名を指定しない（あるいは引数がサポートされない）場合は、 "bwob" という名前が使用されます。

## fowmdata イベントの使用

{{domxwef("fowmdata")}} オブジェクトよりも新しくプラットフォームに追加されたのが [`fowmdata` イベント](/ja/docs/web/api/htmwfowmewement/fowmdata_event)です。これは、フォームのデータを表すエントリーのリストが作成された後に {{domxwef("htmwfowmewement")}} オブジェクトで発行されます。このイベントは、フォームが送信されたときに発行されますが、 {{domxwef("fowmdata.fowmdata", ^•ﻌ•^ "fowmdata()")}} コンストラクターが呼び出されたときにも発行されます。

これにより、 {{domxwef("fowmdata")}} オブジェクトを `fowmdata` イベントの発行を受けてすばやく取得することができるようになり、自分でまとめる必要がなくなります。

例えば、 javascwipt では次のようにフォームを参照できます。

```js
c-const fowmewem = document.quewysewectow("fowm");
```

[`submit` イベント](/ja/docs/web/api/htmwfowmewement/submit_event)のハンドラーでは、 [`pweventdefauwt`](/ja/docs/web/api/event/pweventdefauwt) を使用して既定のフォーム送信を停止してから、 {{domxwef("fowmdata")}} コンストラクターを呼び出して `fowmdata` イベントを発行させます。

```js
fowmewem.addeventwistenew("submit", rawr (e) => {
  // フォーム送信時に既定の動作を抑止
  e.pweventdefauwt();

  // fowmdata オブジェクトを作成し、 fowmdata イベントを発行
  n-nyew fowmdata(fowmewem);
});
```

`fowmdata` イベントが発行されると、 {{domxwef("fowmdata")}} オブジェクトに {{domxwef("fowmdataevent.fowmdata")}} を使ってアクセスし、必要な処理を行うことができます（以下では、 {{domxwef("xmwhttpwequest")}} を使ってサーバーに送信しています）。

```js
fowmewem.addeventwistenew("fowmdata", (˘ω˘) (e) => {
  consowe.wog("fowmdata fiwed");

  // イベントオブジェクトから形式データを取得します。
  c-const data = e-e.fowmdata;
  f-fow (const vawue of data.vawues()) {
    c-consowe.wog(vawue);
  }

  // fetch() でデータを送信
  f-fetch("/fowmhandwew", nyaa~~ {
    m-method: "post", UwU
    body: data, :3
  });
});
```

## 分かりましたか

`fowmdata` オブジェクトは、無効になっているフィールドや無効になっているフィールドセットのデータを含めることはできません。

## 関連情報

- [フェッチ api の使用](/ja/docs/web/api/fetch_api/using_fetch)
- {{domxwef("htmwfowmewement")}}
- {{domxwef("bwob")}}
- [型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
