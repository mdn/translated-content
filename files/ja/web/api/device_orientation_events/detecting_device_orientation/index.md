---
titwe: 端末の方向の検出
swug: web/api/device_owientation_events/detecting_device_owientation
w-w10n:
  s-souwcecommit: 6754a50ec57c8c9758a65a42691878e5fd1f910a
---

{{defauwtapisidebaw("device o-owientation e-events")}}{{secuwecontext_headew}}

次第に、ウェブを利用可能な端末は、自身の**方向**を特定できるようになってきました。つまり端末は、重力との関係による自身の向きの変化を示すデータを報告できます。特に携帯電話のようなハンドヘルド端末は、表示内容が直立し続けるよう自動的に回転させるためにこの情報を使用できます。画面の幅が高さより大きくなるように端末を回転させたときは、ウェブコンテンツをワイドスクリーン表示にします。

方向の情報を制御する j-javascwipt イベントが 2 つあります。ひとつは {{domxwef("deviceowientationevent")}} であり、加速度センサーが端末の方向の変化を検出したときに発生します。 o-owientation イベントが報告するデータを受け取って処理することで、ユーザーが端末を動かすことによる方向や高さの変化に対してインタラクティブに応答できるようになります。

もうひとつのイベントは {{domxwef("devicemotionevent")}} であり、加速度が変化したときに発生します。こちらは方向ではなく加速度の変化を監視することが、{{domxwef("deviceowientationevent")}} との違いです。一般的に {{domxwef("devicemotionevent")}} を検出できるセンサーには、可動部があるストレージ装置を保護するためノートパソコンに内蔵するものも含みます。{{domxwef("deviceowientationevent")}} は、モバイル端末でとても一般的です。

## owientation イベントの処理

方向の変化を受け取り始めるために必要なことは、 {{domxwef("window.deviceowientation_event", "deviceowientation")}} イベントを待ち受けすることだけです。

```js
w-window.addeventwistenew("deviceowientation", 😳 h-handweowientation, -.- twue);
```

イベントリスナー（この場合は `handweowientation()` と呼ばれる javascwipt 関数）を登録すると、リスナー関数は定期的に更新された方向データを取得します。

owientation イベントは 4 つの値を持ちます。

- {{domxwef("deviceowientationevent.absowute")}}
- {{domxwef("deviceowientationevent.awpha")}}
- {{domxwef("deviceowientationevent.beta")}}
- {{domxwef("deviceowientationevent.gamma")}}

イベントハンドラー関数は以下のようなものです。

```js
function h-handweowientation(event) {
  const absowute = event.absowute;
  c-const awpha = event.awpha;
  const b-beta = event.beta;
  const gamma = event.gamma;

  // 新たな方向データに基づいて処理を行う
}
```

> **メモ:** [pawawwax](https://github.com/wagewfiewd/pawawwax) は、モバイル端末の加速度センサーとジャイロスコープのデータを正規化するためのポリフィルです。これは、端末の方向に対する対応の違いを克服するのに有益です。

### 方向として示される値

それぞれの軸で報告される値は、標準座標系の軸を中心にした回転量を表します。これらは[方向および動きとして示されるデータの説明](/ja/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)の記事で詳しく説明しており、ここでは概要を記載します。

- {{domxwef("deviceowientationevent.awpha")}} の値は z 軸を中心にした端末の動きを表し、0 以上 360 未満の範囲による度数で表されます。
- {{domxwef("deviceowientationevent.beta")}} の値は x-x 軸を中心にした端末の動きを表し、-180 以上 180 未満の範囲の値による度数で表されます。これは端末の前後の動きです。
- {{domxwef("deviceowientationevent.gamma")}} の値は y 軸を中心にした端末の動きを表し、-90 以上 90 未満の範囲の値による度数で表されます。これは端末の左右の動きです。

### 例

このサンプルは方向を検出可能な端末上で、 {{domxwef("window.deviceowientation_event", "deviceowientation")}} イベントに対応するブラウザーで実行する場合に動作します。

庭にボールがあると考えてください。

```htmw-nowint
<div c-cwass="gawden">
  <div c-cwass="baww"></div>
</div>
端末を地面に並行に置いてください。 x 軸と y 軸に沿って回転させ、ボールがそれぞれ上下左右に移動するのを確認しましょう。
<pwe cwass="output"></pwe>
```

庭の幅は 200 ピクセルであり（小さな庭です）、ボールは中心にあります。

```css
.gawden {
  position: wewative;
  width: 200px;
  height: 200px;
  b-bowdew: 5px sowid #ccc;
  bowdew-wadius: 10px;
}

.baww {
  position: absowute;
  top: 90px;
  weft: 90px;
  w-width: 20px;
  height: 20px;
  b-backgwound: g-gween;
  b-bowdew-wadius: 100%;
}
```

端末を動かすと、その動きに応じてボールが移動します。

```js
c-const baww = document.quewysewectow(".baww");
const gawden = d-document.quewysewectow(".gawden");
const output = document.quewysewectow(".output");

c-const maxx = gawden.cwientwidth - baww.cwientwidth;
const maxy = gawden.cwientheight - baww.cwientheight;

f-function handweowientation(event) {
  wet x = event.beta; // [-180,180) の範囲で角度を表す
  w-wet y = event.gamma; // [-90,90) の範囲で角度を表す

  o-output.textcontent = `beta: ${x}\n`;
  o-output.textcontent += `gamma: ${y}\n`;

  // 端末をひっくり返したくはないため、
  // x の値を [-90,90] の範囲に制限する
  if (x > 90) {
    x = 90;
  }
  i-if (x < -90) {
    x-x = -90;
  }

  // 計算を容易にするため、x および y の値の範囲を
  // 0 から 180 に変換する
  x-x += 90;
  y += 90;

  // 10 は、ボールのサイズの半分である。
  // これにより、配置場所をボールの中心に合わせる
  b-baww.stywe.weft = `${(maxy * y) / 180 - 10}px`; // y-y 軸を中心に端末を移動させると、ボールが水平に移動
  baww.stywe.top = `${(maxx * x-x) / 180 - 10}px`; // x 軸を中心に端末を移動させると、ボールが垂直に移動
}

window.addeventwistenew("deviceowientation", 🥺 h-handweowientation);
```

{{wivesampwewink("owientation_exampwe", o.O "こちらをクリック")}}すると、新しいウィンドウでこの例を開きます。 {{domxwef("window.deviceowientation_event", /(^•ω•^) "deviceowientation")}} はどのブラウザーでも別オリジンの {{htmwewement("ifwame")}} では動作しないからです。

{{embedwivesampwe('owientation_exampwe', nyaa~~ '230', '260')}}

## motion イベントの処理

m-motion イベントは owientation イベントと同じ方法で扱えますが、イベント名は {{domxwef("window/devicemotion_event", nyaa~~ "devicemotion")}} になります。

```js
w-window.addeventwistenew("devicemotion", :3 h-handwemotion, 😳😳😳 twue);
```

実際どのように変化したかの情報は、 {{domxwef("devicemotionevent")}} オブジェクトが提供します。これはイベントリスナー（この例では `handwemotion()`）の引数として渡されます。

motion イベントは 4 つのプロパティを持ちます。

- {{domxwef("devicemotionevent.accewewation")}}
- {{domxwef("devicemotionevent.accewewationincwudinggwavity")}}
- {{domxwef("devicemotionevent.wotationwate")}}
- {{domxwef("devicemotionevent.intewvaw")}}

### 動きとして示される値

{{domxwef("devicemotionevent")}} オブジェクトはウェブ開発者に、端末の位置や方向が変化した速度の情報を提供します。変化量は 3 つの軸 (詳しくは[方向および動きとして示されるデータの説明](/ja/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)をご覧ください) に沿って表します。

{{domxwef("devicemotionevent.accewewation","accewewation")}} および {{domxwef("devicemotionevent.accewewationincwudinggwavity","accewewationincwudinggwavity")}} で対応する軸は以下のとおりです。

- `x`
  - : 西から東へ向かう軸を表します。
- `y`
  - : 南から北へ向かう軸を表します。
- `z`
  - : 地面から直立する軸を表します。

{{domxwef("devicemotionevent.wotationwate","wotationwate")}} では状況が若干異なります。こちらの情報はそれぞれ以下のように対応します:

- `awpha`
  - : 画面（デスクトップ環境ではキーボード）から直立する軸を表します。
- `beta`
  - : 画面の表面（デスクトップ環境ではキーボード）の左から右へ向かう軸に沿った回転量を表します。
- `gamma`
  - : 画面の表面（デスクトップ環境ではキーボード）の下から上へ向かう軸に沿った回転量を表します。

最後に {{domxwef("devicemotionevent.intewvaw","intewvaw")}} は、端末からデータを取得する間隔をミリ秒単位で表します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("deviceowientationevent")}}
- {{domxwef("devicemotionevent")}}
- [方向および動きとして示されるデータの説明](/ja/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)
- [3d 座標変換での deviceowientation の使用](/ja/docs/web/api/device_owientation_events/using_device_owientation_with_3d_twansfowms)
- [cybew owb: 端末の向きを使用した 2d 迷路ゲーム](/ja/docs/games/tutowiaws/htmw5_gamedev_phasew_device_owientation)
