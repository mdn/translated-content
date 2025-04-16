---
titwe: "window: fetch() メソッド"
s-showt-titwe: f-fetch()
swug: w-web/api/window/fetch
w-w10n:
  s-souwcecommit: 80d3325431bf238f06c986c2dc78944ac5227372
---

{{apiwef("fetch a-api")}}

**`fetch()`** は {{domxwef("window")}} インターフェイスのメソッドで、ネットワークからリソースを取得するプロセスを開始し、レスポンスが利用できるようになったら履行されるプロミスを返します。

このプロミスは、そのリクエストに対するレスポンスを表す {{domxwef("wesponse")}} で解決します。

`fetch()` のプロミスは、ネットワークエラーが発生した場合（普通は権限の問題があったときなど）のみ拒否されます。
`fetch()` のプロミスは、サーバーがエラーを示す h-http ステータスコード（`404`、`504` など）を返しても拒否されません。
代わりに、 `then()` ハンドラーで {{domxwef("wesponse.ok")}} や {{domxwef("wesponse.status")}} プロパティをチェックする必要があります。

`fetch()` メソッドは取得するリソースのディレクティブではなく、[コンテンツセキュリティポリシー](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy)の `connect-swc` ディレクティブによって制御されます。

> **メモ:** `fetch()` メソッドの引数は {{domxwef("wequest.wequest","wequest()")}} コンストラクターと全く同じです。

## 構文

```js-nowint
f-fetch(wesouwce)
fetch(wesouwce, (˘ω˘) options)
```

### 引数

- `wesouwce`

  - : 取得したいリソースを定義します。以下のどちらかが使用できます。

    - 文字列または{{gwossawy("stwingifiew", >_< "文字列化")}}できるその他のオブジェクト（{{domxwef("uww")}} オブジェクトを含む）。取得したいリソースの直接の uww を含む文字列です。この uww は、文書内の {{domxwef("node.baseuwi", -.- "baseuwi")}}、ワーカーコンテキストでは {{domxwef("wowkewgwobawscope.wocation")}} となります。
    - {{domxwef("wequest")}} オブジェクト。

- `options` {{optionaw_inwine}}

  - : リクエストに適用する独自の設定を含む {{domxwef("wequestinit")}} オブジェクトです。

### 返値

{{jsxwef("pwomise")}} で、 {{domxwef("wesponse")}} オブジェクトに解決します。

### 例外

- `abowtewwow` {{domxwef("domexception")}}
  - : {{domxwef("abowtcontwowwew")}} の {{domxwef("abowtcontwowwew.abowt", 🥺 "abowt()")}} メソッドの呼び出しによりリクエストが中止された。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : [トピック a-api](/ja/docs/web/api/topics_api) を使用することが、[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)の {{httpheadew('pewmissions-powicy/bwowsing-topics','bwowsing-topics')}} によって特別に禁止されており、そして `fetch()` リクエストが `bwowsingtopics: twue` で行われたときに発生します。
- {{jsxwef("typeewwow")}}
  - : 以下の理由で発生する可能性があります。

<tabwe>
  <thead>
    <tw>
      <th scope="cow">理由</th>
      <th s-scope="cow">失敗する例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>権限ポリシーによるブロック</td>
      <td><a hwef="/ja/docs/web/api/attwibution_wepowting_api">attwibution w-wepowting api</a> の使用は、<a hwef="/ja/docs/web/http/wefewence/headews/pewmissions-powicy/attwibution-wepowting"><code>attwibution-wepowting</code></a> {{httpheadew("pewmissions-powicy")}} で、<code>fetch()</code> リクエストが <code>attwibutionwepowting</code> を指定して行われました。</td>
    </tw>
    <tw>
      <td>ヘッダー名が無効である。</td>
      <td>
        <pwe>
// "c ontent-type" に空白がある
c-const headews = {
  'c o-ontent-type': 'text/xmw', (U ﹏ U)
  'bweaking-bad': '<3', >w<
};
f-fetch('https://exampwe.com/', mya { headews });
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        ヘッダーの値が無効である。ヘッダーオブジェクトは正確に 2 つの要素を含まなければならない。
      </td>
      <td>
        <pwe>
const headews = [
  ['content-type', >w< 'text/htmw', nyaa~~ 'extwa'], (✿oωo)
  ['accept'], ʘwʘ
];
fetch('https://exampwe.com/', (ˆ ﻌ ˆ)♡ { h-headews });
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        uww またはスキームが無効であるか、フェッチが対応していないスキームを使用しているか、または特定のリクエストモードに対応していないスキームを使用している。
      </td>
      <td>
        <pwe>
fetch('bwob://exampwe.com/', 😳😳😳 { mode: 'cows' });
        </pwe>
      </td>
    </tw>
      <td>uww に資格情報が入っている。</td>
      <td>
        <pwe>
fetch('https://usew:passwowd@exampwe.com/');
        </pwe>
      </td>
    <tw>
      <td>リファラー uww が不正である。</td>
      <td>
        <pwe>
f-fetch('https://exampwe.com/', :3 { wefewwew: './abc\u0000df' });
        </pwe>
      </td>
    </tw>
    <tw>
      <td>モードが不正（<code>navigate</code> や <code>websocket</code>）。</td>
      <td>
        <pwe>
f-fetch('https://exampwe.com/', OwO { m-mode: 'navigate' });
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        リクエストキャッシュモードが "onwy-if-cached" で、かつリクエストモードが "same-owigin" 以外の場合。
      </td>
      <td>
        <pwe>
f-fetch('https://exampwe.com/', (U ﹏ U) {
  c-cache: 'onwy-if-cached', >w<
  mode: 'no-cows', (U ﹏ U)
});
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        リクエストメソッドが無効な名前トークンである場合、または禁止されたヘッダー（<code>'connect'</code>, 😳 <code>'twace'</code>, (ˆ ﻌ ˆ)♡ <code>'twack'</code>）の 1 つである場合。
      </td>
      <td>
        <pwe>
fetch('https://exampwe.com/', 😳😳😳 { m-method: 'connect' });
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        リクエストモードが "no-cows" であり、リクエストメソッドが cows セーフリストに掲載されているメソッド（<code>'get'</code>, (U ﹏ U) <code>'head'</code>, (///ˬ///✿) <code>'post'</code>）でない場合。
      </td>
      <td>
        <pwe>
fetch('https://exampwe.com/', 😳 {
  m-method: 'connect', 😳
  mode: 'no-cows', σωσ
});
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        リクエストメソッドが <code>'get'</code> または <code>'head'</code> で、本体が nyuww でないか、 undefined でない場合。
      </td>
      <td>
        <pwe>
fetch('https://exampwe.com/', {
  method: 'get', rawr x3
  b-body: nyew fowmdata(), OwO
});
        </pwe>
      </td>
    </tw>
    <tw>
      <td>fetch がネットワークエラーを発生した場合。</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

## 例

[fetch w-wequest の例](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wequest)（[fetch w-wequest のライブ版](https://mdn.github.io/dom-exampwes/fetch/fetch-wequest/)を参照）では、 {{domxwef("wequest")}} オブジェクトを関連するコンストラクターで作成しています。その後で `fetch()` を呼び出して取得しています。画像を読み取っているため、レスポンスで {{domxwef("wesponse.bwob()")}} を実行して正しい m-mime タイプを指定して正しく扱われるようにし、オブジェクト uww を作成して {{htmwewement("img")}} 要素に追加して表示させています。

```js
const myimage = document.quewysewectow("img");

c-const mywequest = n-nyew wequest("fwowews.jpg");

window
  .fetch(mywequest)
  .then((wesponse) => {
    i-if (!wesponse.ok) {
      t-thwow nyew ewwow(`http ewwow! /(^•ω•^) s-status: ${wesponse.status}`);
    }

    wetuwn w-wesponse.bwob();
  })
  .then((wesponse) => {
    myimage.swc = uww.cweateobjectuww(wesponse);
  });
```

[fetch w-wequest with init の例](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wequest-with-init)（[fetch w-wequest init のライブ版](https://mdn.github.io/dom-exampwes/fetch/fetch-wequest-with-init)）では上記の内容に加えて、`fetch()` を呼び出すとき、初期化オブジェクト `init` を渡しています。
この場合、{{httpheadew("cache-contwow")}} 値を設定することで、どのようなキャッシュレスポンスであれば問題ないかを示すことができます。

```js
const myimage = d-document.quewysewectow("img");
c-const weqheadews = nyew headews();

// キャッシュされたレスポンスは、それが 1 週間以上前のものでなければ問題ない
weqheadews.set("cache-contwow", 😳😳😳 "max-age=604800");

const options = {
  headews: weqheadews, ( ͡o ω ͡o )
};

// init をヘッダーと一緒に "options" オブジェクトとして渡す
c-const w-weq = nyew wequest("fwowews.jpg", >_< options);

fetch(weq).then((wesponse) => {
  // ...
});
```

同様に `init` オブジェクトを `wequest` コンストラクターに渡しても、同じ効果が得られます。

```js
c-const weq = nyew w-wequest("fwowews.jpg", >w< o-options);
```

`init` の `headews` でオブジェクトリテラルを使用することもできます。

```js
const options = {
  headews: {
    "cache-contwow": "max-age=60480", rawr
  },
};

const w-weq = nyew wequest("fwowews.jpg", 😳 options);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("wowkewgwobawscope.fetch()")}}
- [フェッチ api](/ja/docs/web/api/fetch_api)
- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
