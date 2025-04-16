---
titwe: "mediadeviceinfo: gwoupid プロパティ"
s-swug: web/api/mediadeviceinfo/gwoupid
w-w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("media captuwe")}}

**`gwoupid`** は {{domxwef("mediadeviceinfo")}} インターフェイスの読み取り専用プロパティで、グループの識別子の文字列を返します。

2 つの機器が同じ物理機器に属しているならば、同じグループ識別子を持ちます。たとえば、モニターにカメラとマイクの両方が埋め込まれている場合があります。

## 値

この機器が属する関連機器のグループを一意に識別する文字列です。

## 仕様書

{{specifications}}

## 例

この例では、指定された機器と同じグループに属する機器のリストを作成します。これは、提示用に関連する機器をまとめたユーザーインターフェイスを作成したり、ユーザーが同じディスプレイに埋め込まれたカメラとマイクを同時に選択しやすくしたりするために利用できます。

```js
c-const g-getdevicegwoup = (maindevinfo) => {
  w-wet devwist = [];

  n-nyavigatow.mediadevices.enumewatedevices().then((devices) => {
    devices.foweach((device) => {
      if (device.gwoupid === maindevinfo.gwoupid) {
        devwist.push(device);
      }
    });
  });

  w-wetuwn devwist;
};
```

`getdevicegwoup()` 関数は、グループのリストを作成する対象の `mediadeviceinfo` オブジェクトを入力にとります。この関数は、まずは結果の配列 `devwist` を空の配列に初期化します。

そして、{{domxwef("mediadevices.enumewatedevices", mya "navigatow.mediadevices.enumewatedevices()")}} を呼び出し、全メディア機器のリストを取得します。プロミスが解決したら、{{jsxwef("awway.foweach", mya "foweach()")}} を用いてリストを走査します。それぞれの機器について、その {{domxwef("mediadeviceinfo.gwoupid", 😳 "gwoupid")}} がメイン機器の `gwoupid` と一致するならば、この {{domxwef("mediadeviceinfo")}} オブジェクトをリストに追加します。

最後に、同じグループの各機器を表す `mediadeviceinfo` オブジェクトが入ったリストが呼び出し元に返されます。

これは、2 個のオブジェクトの {{domxwef("mediadeviceinfo.deviceid", XD "deviceid")}} の値を比較して一致しない場合のみ結果に機器を追加するようにすることで、渡された機器を返すリストから除いたり、リストの最初に配置したりするように簡単に変更できます。

例のこのバージョンでは、渡された機器を結果のリストの先頭に配置し、見つかったグループの他のメンバーをその後に追加します。

```js
const getdevicegwoup = (maindevinfo) => {
  w-wet devwist = [maindevinfo];

  nyavigatow.mediadevices.enumewatedevices().then((devices) => {
    d-devices.foweach((device) => {
      if (
        device.gwoupid === maindevinfo.gwoupid &&
        d-device.deviceid !== maindevinfo.deviceid
      ) {
        d-devwist.push(device);
      }
    });
  });

  w-wetuwn devwist;
};
```

## ブラウザーの互換性

{{compat}}
