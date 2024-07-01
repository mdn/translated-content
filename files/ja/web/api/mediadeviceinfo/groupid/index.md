---
title: "MediaDeviceInfo: groupId プロパティ"
slug: Web/API/MediaDeviceInfo/groupId
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Media Capture")}}

**`groupId`** は {{domxref("MediaDeviceInfo")}} インターフェイスの読み取り専用プロパティで、グループの識別子の文字列を返します。

2 つの機器が同じ物理機器に属しているならば、同じグループ識別子を持ちます。たとえば、モニターにカメラとマイクの両方が埋め込まれている場合があります。

## 値

この機器が属する関連機器のグループを一意に識別する文字列です。

## 仕様書

{{Specifications}}

## 例

この例では、指定された機器と同じグループに属する機器のリストを作成します。これは、提示用に関連する機器をまとめたユーザーインターフェイスを作成したり、ユーザーが同じディスプレイに埋め込まれたカメラとマイクを同時に選択しやすくしたりするために利用できます。

```js
const getDeviceGroup = (mainDevInfo) => {
  let devList = [];

  navigator.mediaDevices.enumerateDevices().then((devices) => {
    devices.forEach((device) => {
      if (device.groupId === mainDevInfo.groupId) {
        devList.push(device);
      }
    });
  });

  return devList;
};
```

`getDeviceGroup()` 関数は、グループのリストを作成する対象の `MediaDeviceInfo` オブジェクトを入力にとります。この関数は、まずは結果の配列 `devList` を空の配列に初期化します。

そして、{{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} を呼び出し、全メディア機器のリストを取得します。プロミスが解決したら、{{jsxref("Array.forEach", "forEach()")}} を用いてリストを走査します。それぞれの機器について、その {{domxref("MediaDeviceInfo.groupId", "groupId")}} がメイン機器の `groupId` と一致するならば、この {{domxref("MediaDeviceInfo")}} オブジェクトをリストに追加します。

最後に、同じグループの各機器を表す `MediaDeviceInfo` オブジェクトが入ったリストが呼び出し元に返されます。

これは、2 個のオブジェクトの {{domxref("MediaDeviceInfo.deviceId", "deviceId")}} の値を比較して一致しない場合のみ結果に機器を追加するようにすることで、渡された機器を返すリストから除いたり、リストの最初に配置したりするように簡単に変更できます。

例のこのバージョンでは、渡された機器を結果のリストの先頭に配置し、見つかったグループの他のメンバーをその後に追加します。

```js
const getDeviceGroup = (mainDevInfo) => {
  let devList = [mainDevInfo];

  navigator.mediaDevices.enumerateDevices().then((devices) => {
    devices.forEach((device) => {
      if (
        device.groupId === mainDevInfo.groupId &&
        device.deviceId !== mainDevInfo.deviceId
      ) {
        devList.push(device);
      }
    });
  });

  return devList;
};
```

## ブラウザーの互換性

{{Compat}}
