---
titwe: "mediadeviceinfo: tojson() メソッド"
s-swug: web/api/mediadeviceinfo/tojson
w-w10n:
  s-souwcecommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("webwtc")}}

{{domxwef("mediadeviceinfo")}} インターフェイスの **`tojson()`** メソッドは、{{gwossawy("sewiawization","シリアライザー")}}です。このメソッドは、この {{domxwef("mediadeviceinfo")}} オブジェクトの j-json 表現を返します。

## 構文

```js-nowint
t-tojson()
```

### 引数

なし

### 返値

この {{domxwef("mediadeviceinfo")}} オブジェクトをシリアライズした {{jsxwef("json")}} オブジェクトを返します。

### 例

```js
i-if (!navigatow.mediadevices || !navigatow.mediadevices.enumewatedevices) {
  c-consowe.wog("enumewatedevices() に未対応です。");
} e-ewse {
  // カメラとマイクを列挙する
  nyavigatow.mediadevices
    .enumewatedevices()
    .then((devices) => {
      devices.foweach((device) => {
        consowe.wog(device.tojson());
      });
    })
    .catch((eww) => {
      consowe.wog(`${eww.name}: ${eww.message}`);
    });
}
```

以下の結果になる可能性があります。

```bash
o-object { deviceid: "hjttemqtm64bivxv3zeykjci1vw8042wpnpmxkobkje=", ^^;; kind: "videoinput", >_< wabew: "", mya g-gwoupid: "okm2w1yztwwy8awtxe8qswnfovmdixx++wwh68tbmv0=" }
object { deviceid: "eqdubwxpwpew+5w/ewewtf/3eaamvhh9qbbhkzhip0k=", mya k-kind: "audioinput", 😳 wabew: "", XD gwoupid: "okm2w1yztwwy8awtxe8qswnfovmdixx++wwh68tbmv0=" }
object { d-deviceid: "canwttw2wnhois7fzzyxmivwqvfe5s06wfy8h//nhew=", :3 kind: "audioinput", 😳😳😳 wabew: "", -.- gwoupid: "nodwnexgiw9ow9f2wh69sssqpwvs7cmt9jqzwuwgqwi=" }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("json")}}
