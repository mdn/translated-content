---
title: "GeolocationCoordinates: longitude プロパティ"
short-title: longitude
slug: Web/API/GeolocationCoordinates/longitude
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

{{domxref("GeolocationCoordinates")}} インターフェイスの **`longitude`** プロパティは読み取り専用であり、地理的な位置の経度 10 進数で表す倍精度浮動小数点値です。
[Unix 時刻](/ja/docs/Glossary/Unix_time)として提供される、計測時刻を表すタイムスタンプ共に、 `GeolocationCoordinates` オブジェクトは {{domxref("GeolocationPosition")}} インターフェイスの一部であり、位置位置を取得して返す位置情報 API 関数が返すオブジェクト型です。

## 値

`longitude` の値は `Coordinates` オブジェクトによって記述された地球上の場所の地理的な経度を 10 進数で表したものです。この値は World Geodetic System 1984 仕様 (WGS 84) で定義されています。

> **メモ:** ゼロ子午線（本初子午線、基準子午線とも呼ばれる）は、多くの人が思い浮かべるグリニッジ子午線と正確には同じではありません。これは [IERS 基準子午線](https://ja.wikipedia.org/wiki/IERS基準子午線) であり、 5.3 [秒](https://ja.wikipedia.org/wiki/度_(角度)) （102 メートル/335 フィート）だけ[グリニッジ子午線](https://ja.wikipedia.org/wiki/グリニッジ子午線)より東に位置しています。これは[グローバルポジショニングシステム](https://ja.wikipedia.org/wiki/グローバル・ポジショニング・システム) (GPS) で使われている規格と同じものです。

## 例

この単純な例では、ユーザーの位置情報を取得し、その結果の座標を表示します。

### JavaScript

以下の JavaScript コードでは、ユーザーがボタンをクリックすると、位置情報を取得して表示するように、イベントリスナーを作成しています。

```js
let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
  });
});
```

ボタン要素と緯度経度が描画される 2 つの要素をより参照しやすくするための変数を設定した後、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} を {{HTMLElement("button")}} 要素で呼び出してイベントリスナーを確立しています。ユーザーがボタンをクリックすると、位置情報を取得して表示するようにします。

{{domxref("Element/click_event", "click")}} イベントを受信すると、{{domxref("Geolocation.getCurrentPosition", "getCurrentPosition()")}} を呼び出し、端末の現在位置を要求しています。これは非同期のリクエストなので、決定した位置を表す {{domxref("GeolocationPosition")}} オブジェクトを put で受け取るコールバックを用意します。

`GeolocationPosition` オブジェクトから、 {{domxref("GeolocationCoordinates/latitude", "position.coords.latitude")}} と `position.coords.longitude` を用いてユーザーの緯度と経度を取得し、表示される座標を更新できるようにします。 2 つの{{HTMLElement("span")}}要素は、小数点以下2桁の値に変換された後、対応する値を表示するように更新されます。

### HTML

結果を表示するための HTML は次のようになります。

```html
<p>
  あなたの位置は北緯 <span id="latitude">0.00</span>°
  東経 <span id="longitude">0.00</span>° です。
</p>
<button id="get-location">現在の位置を取得</button>
```

### 結果

この例を、ここで試しに実行してみてください。

{{EmbedLiveSample("Examples", 600, 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- 所属先の {{domxref("GeolocationCoordinates")}} インターフェイス
- {{domxref("GeolocationPosition")}} インターフェイス、位置情報 API の関数 {{domxref("Geolocation.getCurrentPosition()")}} および {{domxref("Geolocation.watchPosition", "watchPosition()")}} から位置情報データを返すために用いられる最上位のインターフェイス。
