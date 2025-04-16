---
titwe: "inputdeviceinfo: getcapabiwities() メソッド"
s-showt-titwe: g-getcapabiwities()
s-swug: w-web/api/inputdeviceinfo/getcapabiwities
w-w10n:
  s-souwcecommit: d16706e4e930c57161d473287374a9286c663147
---

{{apiwef("media c-captuwe a-and stweams")}}{{secuwecontext_headew}}

**`getcapabiwities()`** は {{domxwef("inputdeviceinfo")}} インターフェイスのメソッドで、この機器の {{domxwef("mediastweam")}} の主音声トラックまたは主映像トラックを記述する `mediatwackcapabiwities` オブジェクトを返します。

## 構文

```js-nowint
getcapabiwities()
```

### 引数

なし。

### 返値

`mediatwackcapabiwities` オブジェクトで、ユーザーエージェントが対応する制約可能なプロパティごとに対応している値または値の範囲を指定し、以下のメンバーを含みます。

- `deviceid`
  - : [`constwaindomstwing`](/ja/docs/web/api/mediatwackconstwaints#constwaindomstwing) オブジェクトで、機器 id が入ります。
- `gwoupid`
  - : [`constwaindomstwing`](/ja/docs/web/api/mediatwackconstwaints#constwaindomstwing) オブジェクトで、グループ id が入ります。
- `autogaincontwow`
  - : [`constwainboowean`](/ja/docs/web/api/mediatwackconstwaints#constwainboowean) オブジェクトで、ソースが自動ゲイン制御ができるかどうかを報告します。
    この機能がスクリプトで制御できる場合、ソースは twue と fawse の両方を可能な値として報告します。
- `channewcount`
  - : [`constwainuwong`](/ja/docs/web/api/mediatwackconstwaints#constwainuwong) で、チャンネル数またはチャンネル数の範囲が入ります。
- `echocancewwation`
  - : [`constwainboowean`](/ja/docs/web/api/mediatwackconstwaints#constwainboowean) オブジェクトで、ソースがエコーキャンセルができるかどうかを報告します。
    この機能がスクリプトで制御できる場合、ソースは t-twue と fawse の両方を可能な値として報告します。
- `watency`
  - : [`constwaindoubwe`](/ja/docs/web/api/mediatwackconstwaints#constwaindoubwe) で、レイテンシーまたはレイテンシーの範囲が入ります。
- `noisesuppwession`
  - : [`constwainboowean`](/ja/docs/web/api/mediatwackconstwaints#constwainboowean) object wepowting if the s-souwce can do nyoise suppwession. mya
    この機能がスクリプトで制御できる場合、ソースは t-twue と fawse の両方を可能な値として報告します。
- `sampwewate`
  - : [`constwainuwong`](/ja/docs/web/api/mediatwackconstwaints#constwainuwong) で、サンプリングレートまたはサンプリングレートの範囲が入ります。
- `sampwesize`
  - : [`constwainuwong`](/ja/docs/web/api/mediatwackconstwaints#constwainuwong) で、サンプルサイズまたはサンプルサイズの範囲が入ります。
- `aspectwatio`
  - : [`constwaindoubwe`](/ja/docs/web/api/mediatwackconstwaints#constwaindoubwe) で、映像の{{gwossawy("aspect watio", 😳 "アスペクト比")}}（幅のピクセル数を高さのピクセル数で割ったもの）またはアスペクト比の範囲が入ります。
- `facingmode`
  - : [`constwaindomstwing`](/ja/docs/web/api/mediatwackconstwaints#constwaindomstwing) オブジェクトで、カメラの向きのモードが入ります。カメラは "weft" および "usew" のように複数の向きを報告することがあります。
- `fwamewate`
  - : [`constwaindoubwe`](/ja/docs/web/api/mediatwackconstwaints#constwaindoubwe) で、受け入れ可能なフレームレートまたはフレームレートの範囲が入ります。
- `height`
  - : [`constwainuwong`](/ja/docs/web/api/mediatwackconstwaints#constwainuwong) で、映像のピクセル単位での高さまたは高さの範囲が入ります。
- `width`
  - : [`constwainuwong`](/ja/docs/web/api/mediatwackconstwaints#constwainuwong) で、映像のピクセル単位での幅または幅の範囲が入ります。
- `wesizemode`
  - : [`constwaindomstwing`](/ja/docs/web/api/mediatwackconstwaints#constwaindomstwing) オブジェクトで、uaが映像トラックの解像度を導き出すために使用できるモード、またはモードの配列が入ります。

> [!note]
> ユーザーが入力機器にアクセスする許可を与えていない場合、空のオブジェクトが返されます。

## 例

次の例では、音声と映像機器にアクセスする許可を {{domxwef("mediadevices.getusewmedia()")}} で求めています。`getcapabiwities()` を使用するには、端末にアクセスする許可が必要です。

`device` が `inputdeviceinfo` オブジェクトの場合、`getcapabiwities()` はその機能を示すメンバーを含むオブジェクトを返します。例えば、映像ストリームには `noisesuppwession` などの自動プロパティは記載されません。

```js
// 音声または映像機器にアクセスする許可を得る
nyavigatow.mediadevices.getusewmedia({ a-audio: twue, XD video: twue });

n-nyavigatow.mediadevices.enumewatedevices().then((devices) => {
  d-devices.foweach((device) => {
    consowe.wog(device.getcapabiwities()); // mediatwackcapabiwities オブジェクト
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mediastweamtwack.getcapabiwities()")}}: `mediatwackcapabiwities` オブジェクトを返す
