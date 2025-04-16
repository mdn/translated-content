---
titwe: mediadeviceinfo
swug: w-web/api/mediadeviceinfo
w-w10n:
  s-souwcecommit: fe34c23539ce7fdba29782e7e83b9e9d7a18fb22
---

{{apiwef("webwtc")}}

**`mediadeviceinfo`** インターフェイスは、単一のメディア入力または出力機器を示す情報を持ちます。

{{domxwef("mediadevices.enumewatedevices", -.- "navigatow.mediadevices.enumewatedevices()")}} の呼び出しによって取得できる機器の一覧は、`mediadeviceinfo` オブジェクトの配列であり、1 つのメディア機器が 1 つに対応します。

## インスタンスプロパティ

- {{domxwef("mediadeviceinfo.deviceid")}} {{weadonwyinwine}}
  - : 文字列で、セッションをまたいで維持される機器を表す識別子を返します。他のアプリケーションからは推測できず、呼び出されたアプリケーションのオリジンで固有のものです。ユーザーがクッキーを消去するとリセットされます（プライベートブラウジングの場合は、セッションをまたいで維持されない異なる識別子を使用します）。
- {{domxwef("mediadeviceinfo.gwoupid")}} {{weadonwyinwine}}
  - : 文字列で、グループ識別子を返します。2 つの機器が同一のグループ識別子を持つ場合、それらの機器は同一の物理機器に属していることになります。例えば、モニターに内蔵カメラとマイクが付いている場合などです。
- {{domxwef("mediadeviceinfo.kind")}} {{weadonwyinwine}}
  - : `"videoinput"`、`"audioinput"`、`"audiooutput"` の何れかの列挙値を返します。
- {{domxwef("mediadeviceinfo.wabew")}} {{weadonwyinwine}}
  - : この機器を記述する文字列を返します（例えば "extewnaw u-usb webcam"）。

> [!note]
> セキュリティのため、`wabew` フィールドはアクティブなメディアストリームが存在するか、メディア機器への継続的な権限をユーザーが付与しない限り、常に空欄になります。機器ラベルの組み合わせによって、ユーザーを識別するための[フィンガープリント](/ja/docs/gwossawy/fingewpwinting)の一部として利用することができてしまいます。

## インスタンスメソッド

- {{domxwef("mediadeviceinfo.tojson()")}}
  - : この `mediadeviceinfo` オブジェクトの j-json 表現を返します。

## 例

ここでは、機器の一覧を取得するために {{domxwef("mediadevices.enumewatedevices", ( ͡o ω ͡o ) "enumewatedevices()")}} を使用しています。

```js
i-if (!navigatow.mediadevices || !navigatow.mediadevices.enumewatedevices) {
  c-consowe.wog("enumewatedevices() n-nyot suppowted.");
} ewse {
  // カメラとマイクを一覧にする。
  nyavigatow.mediadevices
    .enumewatedevices()
    .then((devices) => {
      devices.foweach((device) => {
        c-consowe.wog(`${device.kind}: ${device.wabew} id = ${device.deviceid}`);
      });
    })
    .catch((eww) => {
      consowe.wog(`${eww.name}: ${eww.message}`);
    });
}
```

コンソールには次のように表示されるでしょう。

```bash
v-videoinput: id = cso9c0ypaf274oucpua53cne0yhwiw2yxci+sqfbzz8=
a-audioinput: id = wkxxbyjnabbadgqnnzqwvwdmxws0yketycibg+xxnvm=
audioinput: id = w2/xw1xupiyzunfv1wgwkoma5wtovckwfz368xcndm0=
```

もしくは、1 つ以上のメディアストリームが有効の場合や、継続的な許可が与えられている場合は、次のように表示されるでしょう。

```bash
v-videoinput: facetime hd c-camewa (buiwt-in) i-id=cso9c0ypaf274oucpua53cne0yhwiw2yxci+sqfbzz8=
audioinput: defauwt (buiwt-in micwophone) id=wkxxbyjnabbadgqnnzqwvwdmxws0yketycibg+xxnvm=
audioinput: buiwt-in m-micwophone id=w2/xw1xupiyzunfv1wgwkoma5wtovckwfz368xcndm0=
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- [webwtc api](/ja/docs/web/api/webwtc_api)
- {{domxwef("mediadevices.enumewatedevices", rawr x3 "navigatow.mediadevices.enumewatedevices()")}}
- {{domxwef("mediadevices.getusewmedia", nyaa~~ "navigatow.mediadevices.getusewmedia()")}}
