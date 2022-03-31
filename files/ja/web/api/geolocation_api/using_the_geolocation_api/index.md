---
title: 位置情報 API の使用
slug: Web/API/Geolocation_API/Using_the_Geolocation_API
tags:
  - 位置情報 API
  - ガイド
  - チュートリアル
translation_of: Web/API/Geolocation_API/Using_the_Geolocation_API
---
{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

位置情報 API (Geolocation API) により、ユーザーは希望すれば自身の場所をウェブアプリケーションに通知することができるようになります。この記事では、その使い方の基本を説明します。

## geolocation オブジェクト

[位置情報 API](/ja/docs/Web/API/Geolocation) は {{domxref("navigator.geolocation")}} オブジェクトを通じて利用できます。

このオブジェクトが存在していれば、位置情報サービスを利用することができます。次のようなコードでの存在を確認することができます。

```js
if('geolocation' in navigator) {
  /* geolocation が使用可能 */
} else {
  /* geolocation が使用不可 */
}
```

### 現在位置の取得

ユーザーの現在位置を取得するには、 {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} メソッドを呼び出します。このメソッドはユーザーの現在位置を特定するための非同期通信を開始するとともに、位置取得デバイスから最新の情報を取得します。現在位置が特定されるとコールバック関数が実行されます。また、オプションとして第二引数にコールバック関数を指定することで、エラー発生時に実行される関数を指定することができます。省略可能な第三引数は、最大試行回数、要求待ち時間、高精度の位置情報を求めるかを指定するオブジェクトです。

> **Note:** 既定では、 {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} は低精度の結果を使い、なるべく高速に応答しようとします。これは、正確さに関わらず速い応答を必要とする場合に役立ちます。例えば GPS を備えている端末でも GPS が確定するまでには数分以上かかる可能性がありますので、 `getCurrentPosition()` からは (IP ロケーションや Wi-Fi による) 低精度のデータを返すことがあります。

```js
navigator.geolocation.getCurrentPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

上記の例では、位置情報が取得でき次第 `doSomething()` 関数が実行されます。

### 現在位置の監視

位置情報が変化した場合（端末が移動した時や、より正確な位置情報が得られた時）は、位置情報の更新と同時に呼び出されるコールバック関数を指定することができます。これは {{domxref("Geolocation.watchPosition","watchPosition()")}} 関数を使うことで実現できますが、こちらの入力引数は {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} と同じです。コールバック関数は繰り返し呼び出され、ブラウザーは移動に応じて位置情報を更新したり、位置の特定に別の技術を使用することでより詳細な位置情報を提供したりすることが可能です。エラー発生時に呼び出されるコールバック関数は `getCurrentPosition()` と同様に任意指定であり、繰り返し呼び出される場合があります。

> **Note:** {{domxref("Geolocation.watchPosition","watchPosition()")}} を使用する際に、先に {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} を呼び出す必要はありません。

```js
const watchID = navigator.geolocation.watchPosition((position) => {
  doSomething(position.coords.latitude, position.coords.longitude);
});
```

{{domxref("Geolocation.watchPosition","watchPosition()")}} メソッドは、位置監視の登録を識別する ID 番号を返します。この ID 番号を {{domxref("Geolocation.clearWatch","clearWatch()")}} メソッドに渡すことで、ユーザーの位置監視を終了させることができます。

```js
navigator.geolocation.clearWatch(watchID);
```

### 応答の微調整

{{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} および {{domxref("Geolocation.watchPosition","watchPosition()")}} は成功時のコールバック、省略可能なエラー時のコールバック、そして省略可能な options オブジェクトを受け取ります。

このオブジェクトでは、高精度を有効にするかどうか、返された位置値の使用期限（この期限までは、同じ位置が再度要求された場合にキャッシュされて再利用され、それ以降はブラウザーが新しい位置データを要求します）、タイムアウトする前にブラウザーがどのくらいの時間位置データを取得しようとするかを指定するタイムアウト値を指定することができます。

{{domxref("Geolocation.watchPosition","watchPosition")}} の呼び出しは以下のようになります。

```js
function success(position) {
  doSomething(position.coords.latitude, position.coords.longitude);
}

function error() {
  alert('位置情報が利用できません。');
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
};

const watchID = navigator.geolocation.watchPosition(success, error, options);
```

## 位置の表現

ユーザーの位置は {{domxref("GeolocationPosition")}} オブジェクトインスタンスを使用して記述され、それ自体が {{domxref("GeolocationCoordinates")}} オブジェクトインスタンスを含んでいます。

`GeolocationPosition` インスタンスが持つ情報は 2 つだけで、 `coords` プロパティは `GeolocationCoordinates` インスタンスを持っており、 `timestamp` プロパティは位置データが取得された時刻を表す {{domxref("DOMTimeStamp")}} インスタンスを持ちます。

`GeolocationCoordinates` インスタンスにはいくつかのプロパティがありますが、最も一般的に使用されるのは `latitude` と `longitude` の 2 つで、これは地図上に位置を描画するために必要なものです。そのため、多くの Geolocation 成功コールバックはとてもシンプルに見えます。

```js
function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  // 緯度と経度で何かを行う
}
```

しかし `GeolocationCoordinates` オブジェクトからは、高度、速度、端末が向いている方向、高度、経度、緯度データの精度測定など、他にも多くの情報を得ることができます。

## エラーの扱い

`getCurrentPosition()` や `watchPosition()` の呼び出し時にエラーコールバック関数を提供する場合、最初の引数が [`GeolocationPositionError`](/ja/docs/Web/API/GeolocationPositionError) オブジェクトインスタンスとなります。このオブジェクト型には二つのプロパティがあります。 `code` は返されたエラーの種類を示し、 `message` は人間が読める形でエラーコードの意味を説明します。

次のように使用することができます。

```js
function errorCallback(error) {
  alert(`ERROR(${error.code}): ${error.message}`);
};
```

## 例

以下の例では、位置情報 API はユーザーの経度と緯度を取得するために使用されます。成功した場合、その位置を表示する `openstreetmap.org` の URL の有効なハイパーリンクが表示されます。
```css hidden
body {
  padding: 20px;
  background-color:#ffffc9
}

button {
  margin: .5rem 0;
}
```

### HTML

```html
<button id = "find-me">Show my location</button><br/>
<p id = "status"></p>
<a id = "map-link" target="_blank"></a>
```

### JavaScript

```js
function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
```

### 結果

{{EmbedLiveSample('Examples', 350, 150, "", "", "", "geolocation")}}
