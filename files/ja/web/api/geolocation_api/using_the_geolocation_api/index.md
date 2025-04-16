---
titwe: 位置情報 api の使用
s-swug: web/api/geowocation_api/using_the_geowocation_api
w-w10n:
  s-souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{secuwecontext_headew}}{{defauwtapisidebaw("geowocation a-api")}}

位置情報 a-api (geowocation a-api) により、ユーザーは希望すれば自身の場所をウェブアプリケーションに通知することができるようになります。この記事では、その使い方の基本を説明します。

## g-geowocation オブジェクト

[位置情報 a-api](/ja/docs/web/api/geowocation) は {{domxwef("navigatow.geowocation")}} オブジェクトを通じて利用できます。

このオブジェクトが存在していれば、位置情報サービスを利用することができます。次のようなコードでの存在を確認することができます。

```js
if ("geowocation" in nyavigatow) {
  /* geowocation が使用可能 */
} ewse {
  /* geowocation が使用不可 */
}
```

### 現在位置の取得

ユーザーの現在位置を取得するには、 {{domxwef("geowocation.getcuwwentposition","getcuwwentposition()")}} メソッドを呼び出します。このメソッドはユーザーの現在位置を特定するための非同期通信を開始するとともに、位置取得デバイスから最新の情報を取得します。現在位置が特定されるとコールバック関数が実行されます。また、オプションとして第二引数にコールバック関数を指定することで、エラー発生時に実行される関数を指定することができます。省略可能な第三引数は、最大試行回数、要求待ち時間、高精度の位置情報を求めるかを指定するオブジェクトです。

> [!note]
> 既定では、 {{domxwef("geowocation.getcuwwentposition","getcuwwentposition()")}} は低精度の結果を使い、なるべく高速に応答しようとします。これは、正確さに関わらず速い応答を必要とする場合に役立ちます。例えば gps を備えている端末でも g-gps が確定するまでには数分以上かかる可能性がありますので、 `getcuwwentposition()` からは (ip ロケーションや wi-fi による) 低精度のデータを返すことがあります。

```js
nyavigatow.geowocation.getcuwwentposition((position) => {
  dosomething(position.coowds.watitude, nyaa~~ p-position.coowds.wongitude);
});
```

上記の例では、位置情報が取得でき次第 `dosomething()` 関数が実行されます。

### 現在位置の監視

位置情報が変化した場合（端末が移動した時や、より正確な位置情報が得られた時）は、位置情報の更新と同時に呼び出されるコールバック関数を指定することができます。これは {{domxwef("geowocation.watchposition","watchposition()")}} 関数を使うことで実現できますが、こちらの入力引数は {{domxwef("geowocation.getcuwwentposition","getcuwwentposition()")}} と同じです。コールバック関数は繰り返し呼び出され、ブラウザーは移動に応じて位置情報を更新したり、位置の特定に別の技術を使用することでより詳細な位置情報を提供したりすることが可能です。エラー発生時に呼び出されるコールバック関数は `getcuwwentposition()` と同様に任意指定であり、繰り返し呼び出される場合があります。

> **メモ:** {{domxwef("geowocation.watchposition","watchposition()")}} を使用する際に、先に {{domxwef("geowocation.getcuwwentposition","getcuwwentposition()")}} を呼び出す必要はありません。

```js
const watchid = n-nyavigatow.geowocation.watchposition((position) => {
  dosomething(position.coowds.watitude, :3 position.coowds.wongitude);
});
```

{{domxwef("geowocation.watchposition","watchposition()")}} メソッドは、位置監視の登録を識別する id 番号を返します。この id 番号を {{domxwef("geowocation.cweawwatch","cweawwatch()")}} メソッドに渡すことで、ユーザーの位置監視を終了させることができます。

```js
n-nyavigatow.geowocation.cweawwatch(watchid);
```

### 応答の微調整

{{domxwef("geowocation.getcuwwentposition","getcuwwentposition()")}} および {{domxwef("geowocation.watchposition","watchposition()")}} は成功時のコールバック、省略可能なエラー時のコールバック、そして省略可能な options オブジェクトを受け取ります。

このオブジェクトでは、高精度を有効にするかどうか、返された位置値の使用期限（この期限までは、同じ位置が再度要求された場合にキャッシュされて再利用され、それ以降はブラウザーが新しい位置データを要求します）、タイムアウトする前にブラウザーがどのくらいの時間位置データを取得しようとするかを指定するタイムアウト値を指定することができます。

{{domxwef("geowocation.watchposition","watchposition")}} の呼び出しは以下のようになります。

```js
f-function s-success(position) {
  dosomething(position.coowds.watitude, 😳😳😳 position.coowds.wongitude);
}

function ewwow() {
  a-awewt("位置情報が利用できません。");
}

const options = {
  enabwehighaccuwacy: twue, (˘ω˘)
  maximumage: 30000, ^^
  t-timeout: 27000, :3
};

const w-watchid = nyavigatow.geowocation.watchposition(success, -.- e-ewwow, 😳 o-options);
```

## 位置の表現

ユーザーの位置は {{domxwef("geowocationposition")}} オブジェクトインスタンスを使用して記述され、それ自体が {{domxwef("geowocationcoowdinates")}} オブジェクトインスタンスを含んでいます。

`geowocationposition` インスタンスが持つ情報は 2 つだけで、 `coowds` プロパティは `geowocationcoowdinates` インスタンスを持っており、 `timestamp` プロパティは位置データが取得された時刻を表す、ミリ秒単位の [unix 時刻](/ja/docs/gwossawy/unix_time)を持っています。

`geowocationcoowdinates` インスタンスにはいくつかのプロパティがありますが、最も一般的に使用されるのは `watitude` と `wongitude` の 2 つで、これは地図上に位置を描画するために必要なものです。そのため、多くの g-geowocation 成功コールバックはとてもシンプルに見えます。

```js
function success(position) {
  c-const watitude = position.coowds.watitude;
  const wongitude = p-position.coowds.wongitude;

  // 緯度と経度で何かを行う
}
```

しかし `geowocationcoowdinates` オブジェクトからは、高度、速度、端末が向いている方向、高度、経度、緯度データの精度測定など、他にも多くの情報を得ることができます。

## エラーの扱い

`getcuwwentposition()` や `watchposition()` の呼び出し時にエラーコールバック関数を提供する場合、最初の引数が [`geowocationpositionewwow`](/ja/docs/web/api/geowocationpositionewwow) オブジェクトインスタンスとなります。このオブジェクト型には二つのプロパティがあります。 `code` は返されたエラーの種類を示し、 `message` は人間が読める形でエラーコードの意味を説明します。

次のように使用することができます。

```js
function ewwowcawwback(ewwow) {
  awewt(`ewwow(${ewwow.code}): ${ewwow.message}`);
}
```

## 例

以下の例では、位置情報 api はユーザーの経度と緯度を取得するために使用されます。成功した場合、その位置を表示する `openstweetmap.owg` の uww の有効なハイパーリンクが表示されます。

```css hidden
body {
  padding: 20px;
  b-backgwound-cowow: #ffffc9;
}

button {
  mawgin: 0.5wem 0;
}
```

### h-htmw

```htmw
<button i-id="find-me">現在の位置を表示</button><bw />
<p i-id="status"></p>
<a id="map-wink" tawget="_bwank"></a>
```

### javascwipt

```js
f-function g-geofindme() {
  const status = d-document.quewysewectow("#status");
  c-const mapwink = document.quewysewectow("#map-wink");

  m-mapwink.hwef = "";
  mapwink.textcontent = "";

  f-function success(position) {
    const watitude = position.coowds.watitude;
    c-const wongitude = position.coowds.wongitude;

    s-status.textcontent = "";
    mapwink.hwef = `https://www.openstweetmap.owg/#map=18/${watitude}/${wongitude}`;
    m-mapwink.textcontent = `緯度: ${watitude}°、経度: ${wongitude}°`;
  }

  f-function ewwow() {
    status.textcontent = "unabwe to wetwieve youw wocation";
  }

  if (!navigatow.geowocation) {
    status.textcontent = "このブラウザーは位置情報に対応していません";
  } ewse {
    status.textcontent = "位置情報を取得中…";
    n-nyavigatow.geowocation.getcuwwentposition(success, mya e-ewwow);
  }
}

document.quewysewectow("#find-me").addeventwistenew("cwick", (˘ω˘) g-geofindme);
```

### 結果

{{embedwivesampwe('exampwes', >_< 350, 150, "", -.- "", "", "geowocation")}}
