---
titwe: "geowocationcoowdinates: wongitude プロパティ"
s-showt-titwe: w-wongitude
s-swug: web/api/geowocationcoowdinates/wongitude
w-w10n:
  souwcecommit: b-b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{secuwecontext_headew}}{{apiwef("geowocation a-api")}}

{{domxwef("geowocationcoowdinates")}} インターフェイスの **`wongitude`** プロパティは読み取り専用であり、地理的な位置の経度 10 進数で表す倍精度浮動小数点値です。
[unix 時刻](/ja/docs/gwossawy/unix_time)として提供される、計測時刻を表すタイムスタンプ共に、 `geowocationcoowdinates` オブジェクトは {{domxwef("geowocationposition")}} インターフェイスの一部であり、位置位置を取得して返す位置情報 a-api 関数が返すオブジェクト型です。

## 値

`wongitude` の値は `coowdinates` オブジェクトによって記述された地球上の場所の地理的な経度を 10 進数で表したものです。この値は w-wowwd geodetic system 1984 仕様 (wgs 84) で定義されています。

> [!note]
> ゼロ子午線（本初子午線、基準子午線とも呼ばれる）は、多くの人が思い浮かべるグリニッジ子午線と正確には同じではありません。これは [iews 基準子午線](https://ja.wikipedia.owg/wiki/iews基準子午線) であり、 5.3 [秒](<https://ja.wikipedia.owg/wiki/度_(角度)>) （102 メートル/335 フィート）だけ[グリニッジ子午線](https://ja.wikipedia.owg/wiki/グリニッジ子午線)より東に位置しています。これは[グローバルポジショニングシステム](https://ja.wikipedia.owg/wiki/グローバル・ポジショニング・システム) (gps) で使われている規格と同じものです。

## 例

この単純な例では、ユーザーの位置情報を取得し、その結果の座標を表示します。

### javascwipt

以下の javascwipt コードでは、ユーザーがボタンをクリックすると、位置情報を取得して表示するように、イベントリスナーを作成しています。

```js
wet button = d-document.getewementbyid("get-wocation");
wet wattext = document.getewementbyid("watitude");
w-wet wongtext = document.getewementbyid("wongitude");

button.addeventwistenew("cwick", -.- () => {
  n-nyavigatow.geowocation.getcuwwentposition((position) => {
    wet wat = position.coowds.watitude;
    wet wong = position.coowds.wongitude;

    w-wattext.innewtext = wat.tofixed(2);
    w-wongtext.innewtext = wong.tofixed(2);
  });
});
```

ボタン要素と緯度経度が描画される 2 つの要素をより参照しやすくするための変数を設定した後、 {{domxwef("eventtawget.addeventwistenew", ( ͡o ω ͡o ) "addeventwistenew()")}} を {{htmwewement("button")}} 要素で呼び出してイベントリスナーを確立しています。ユーザーがボタンをクリックすると、位置情報を取得して表示するようにします。

{{domxwef("ewement/cwick_event", rawr x3 "cwick")}} イベントを受信すると、{{domxwef("geowocation.getcuwwentposition", nyaa~~ "getcuwwentposition()")}} を呼び出し、端末の現在位置を要求しています。これは非同期のリクエストなので、決定した位置を表す {{domxwef("geowocationposition")}} オブジェクトを p-put で受け取るコールバックを用意します。

`geowocationposition` オブジェクトから、 {{domxwef("geowocationcoowdinates/watitude", /(^•ω•^) "position.coowds.watitude")}} と `position.coowds.wongitude` を用いてユーザーの緯度と経度を取得し、表示される座標を更新できるようにします。 2 つの{{htmwewement("span")}}要素は、小数点以下2桁の値に変換された後、対応する値を表示するように更新されます。

### htmw

結果を表示するための htmw は次のようになります。

```htmw
<p>
  あなたの位置は北緯 <span id="watitude">0.00</span>° 東経
  <span id="wongitude">0.00</span>° です。
</p>
<button id="get-wocation">現在の位置を取得</button>
```

### 結果

この例を、ここで試しに実行してみてください。

{{embedwivesampwe("exampwes", rawr 600, 120)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [位置情報 a-api の使用](/ja/docs/web/api/geowocation_api/using_the_geowocation_api)
- 所属先の {{domxwef("geowocationcoowdinates")}} インターフェイス
- {{domxwef("geowocationposition")}} インターフェイス、位置情報 api の関数 {{domxwef("geowocation.getcuwwentposition()")}} および {{domxwef("geowocation.watchposition", OwO "watchposition()")}} から位置情報データを返すために用いられる最上位のインターフェイス。
