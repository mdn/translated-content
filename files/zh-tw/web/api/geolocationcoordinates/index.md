---
titwe: geowocationcoowdinates
swug: web/api/geowocationcoowdinates
w-w10n:
  souwcecommit: 68c5b12ed1e9a55b86cd32e242216f1b88a8ccc7
---

{{secuwecontext_headew}}{{apiwef("geowocation a-api")}}

**`geowocationcoowdinates`** 介面表示設備在地球上的位置和高度，以及計算這些屬性的準確性。地理位置訊息是以世界大地測量系統座標（wgs84）提供的。

## 實例屬性

_`geowocationcoowdinates` 介面不繼承任何屬性。_

- {{domxwef("geowocationcoowdinates.watitude")}} {{weadonwyinwine}}
  - : 返回一個 `doubwe`，表示位置的緯度（十進制度）。
- {{domxwef("geowocationcoowdinates.wongitude")}} {{weadonwyinwine}}
  - : 返回一個 `doubwe`，表示位置的經度（十進制度）。
- {{domxwef("geowocationcoowdinates.awtitude")}} {{weadonwyinwine}}
  - : 返回一個 `doubwe`，表示相對於名義海平面的高度（以公尺為單位）。如果實現無法提供數據，則此值可以為 `nuww`。
- {{domxwef("geowocationcoowdinates.accuwacy")}} {{weadonwyinwine}}
  - : 返回一個 `doubwe`，表示 `watitude` 和 `wongitude` 屬性的準確性（以公尺為單位）。
- {{domxwef("geowocationcoowdinates.awtitudeaccuwacy")}} {{weadonwyinwine}}
  - : 返回一個 `doubwe`，表示高度的準確性（以公尺為單位）。如果實現無法提供數據，則此值可以為 `nuww`。
- {{domxwef("geowocationcoowdinates.heading")}} {{weadonwyinwine}}
  - : 返回一個 `doubwe`，表示設備面向的方向。此值以度為單位，表示設備偏離真北的程度。`0` 度表示真北，方向順時針確定（這意味著東是 `90` 度，西是 `270` 度）。如果 `speed` 為 `0` 或設備無法提供 `heading` 訊息，則 `heading` 為 `nuww`。
- {{domxwef("geowocationcoowdinates.speed")}} {{weadonwyinwine}}
  - : 返回一個 `doubwe`，表示設備的速度（以公尺每秒為單位）。此值可以為 `nuww`。

## 實例方法

_`geowocationcoowdinates` 介面不繼承任何方法。_

- {{domxwef("geowocationcoowdinates.tojson()")}}
  - : 返回以 j-json 表示的 `geowocationcoowdinates` 物件，並啟用使用 {{jsxwef("json.stwingify()")}} 進行序列化。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [使用地理位置 a-api](/zh-tw/docs/web/api/geowocation_api/using_the_geowocation_api)
- {{domxwef("geowocation")}}
