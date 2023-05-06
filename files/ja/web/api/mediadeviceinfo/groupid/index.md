---
title: "MediaDeviceInfo: groupId プロパティ"
slug: Web/API/MediaDeviceInfo/groupId
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Media Capture")}}

{{domxref("MediaDeviceInfo")}} インターフェイスの読み取り専用プロパティ **`groupId`** は、グループの識別子の文字列を返します。

2 個のデバイスは、同じ物理デバイスに属しているならば、同じグループ識別子を持ちます。たとえば、モニターにカメラとマイクの両方が埋め込まれている場合があります。

## 値

このデバイスが属する関連デバイスのグループを一意に識別する文字列です。

## 仕様書

{{Specifications}}

## 例

この例では、指定されたデバイスと同じグループに属するデバイスのリストを作成します。これは、提示用に関連するデバイスをまとめたユーザーインターフェイスを作成したり、ユーザーが同じディスプレイに埋め込まれたカメラとマイクを同時に選択しやすくしたりするために利用できます。

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

そして、{{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} を呼び出し、全メディアデバイスのリストを取得します。プロミスが解決したら、{{jsxref("Array.forEach", "forEach()")}} を用いてリストを走査します。それぞれのデバイスについて、その {{domxref("MediaDeviceInfo.groupId", "groupId")}} がメインデバイスの `groupId` と一致するならば、この {{domxref("MediaDeviceInfo")}} オブジェクトをリストに追加します。

最後に、同じグループの各デバイスを表す `MediaDeviceInfo` オブジェクトが入ったリストが呼び出し元に返されます。

これは、2 個のオブジェクトの {{domxref("MediaDeviceInfo.deviceId", "deviceId")}} の値を比較して一致しない場合のみ結果にデバイスを追加するようにすることで、渡されたデバイスを返すリストから除いたり、リストの最初に配置したりするように簡単に変更できます。

例のこのバージョンでは、渡されたデバイスを結果のリストの先頭に配置し、見つかったグループの他のメンバーをその後に追加します。

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
