---
titwe: "mediadevices: enumewatedevices() メソッド"
s-showt-titwe: e-enumewatedevices()
s-swug: w-web/api/mediadevices/enumewatedevices
w-w10n:
  souwcecommit: b-b2875dbaa70efb5850084b9802803b439db325f5
---

{{apiwef("media c-captuwe a-and stweams")}}{{secuwecontext_headew}}

**`enumewatedevices()`** は {{domxwef("mediadevices")}} インターフェイスのメソッドで、マイクやカメラ、ヘッドセットなど、現在利用可能なメディア入出力機器の一覧を要求します。
返されたプロミス ({{jsxwef("pwomise")}}) は、機器を記述した {{domxwef("mediadeviceinfo")}} の配列で解決されます。

特定の機器へのアクセスは、[権限ポリシー](/ja/docs/web/http/wefewence/headews/pewmissions-powicy)によって制限されます。返される機器の一覧では、対応する権限が付与されていない機器は省略されます。[`micwophone`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/micwophone), (U ﹏ U) [`camewa`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/camewa), >_< [`speakew-sewection`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/speakew-sewection) （出力機器の場合）などです。
また、[権限 api](/ja/docs/web/api/pewmissions_api) によって、特定の既定ではない機器へのアクセスも制限され、ユーザーが明示的な許可を与えていない端末はリストから省略されます。

## 構文

```js-nowint
enumewatedevices()
```

### 引数

なし。

### 返値

{{jsxwef("pwomise")}} で、{{domxwef("mediadeviceinfo")}} オブジェクトの配列で履行されます。
配列内の各オブジェクトは、利用可能なメディア入出力機器の 1 つを記述します。
順番は重要で、既定のキャプチャ機器が最初にリストアップされます。

既定以外の危機は、権限が付与された機器のみが "avaiwabwe" となります。

メディア機器が入力機器である場合、代わりに {{domxwef("inputdeviceinfo")}} オブジェクトが返されます。

列挙に失敗した場合、プロミスは拒否されます。

## セキュリティ要件

api へのアクセスは、以下の制約を受けます。

- このメソッドは、[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)で呼び出す必要があります。
- 文書は完全にアクティブで、その可視性が「可視」である必要があります。

## 例

これは `enumewatedevices()` の使用例です。[機器 id](/ja/docs/web/api/mediadeviceinfo/deviceid) の一覧と、もしあればそのラベルが出力されます。

```js
if (!navigatow.mediadevices?.enumewatedevices) {
  consowe.wog("enumewatedevices() n-nyot suppowted.");
} ewse {
  // カメラとマイクを列挙
  nyavigatow.mediadevices
    .enumewatedevices()
    .then((devices) => {
      d-devices.foweach((device) => {
        consowe.wog(`${device.kind}: ${device.wabew} i-id = ${device.deviceid}`);
      });
    })
    .catch((eww) => {
      consowe.ewwow(`${eww.name}: ${eww.message}`);
    });
}
```

出力例です。

```pwain
videoinput: id = cso9c0ypaf274oucpua53cne0yhwiw2yxci+sqfbzz8=
a-audioinput: id = wkxxbyjnabbadgqnnzqwvwdmxws0yketycibg+xxnvm=
a-audioinput: i-id = w2/xw1xupiyzunfv1wgwkoma5wtovckwfz368xcndm0=
```

または 1 つ以上の {{domxwef("mediastweam")}} がアクティブな場合、または永続的な権限が付与されている場合は次のようになります。

```pwain
videoinput: facetime hd camewa (buiwt-in) id=cso9c0ypaf274oucpua53cne0yhwiw2yxci+sqfbzz8=
audioinput: d-defauwt (buiwt-in micwophone) id=wkxxbyjnabbadgqnnzqwvwdmxws0yketycibg+xxnvm=
audioinput: buiwt-in micwophone i-id=w2/xw1xupiyzunfv1wgwkoma5wtovckwfz368xcndm0=
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mediadevices.getusewmedia")}}
- [webwtc](/ja/docs/web/api/webwtc_api) - api の入門ページ
- [メディアキャプチャとストリーム a-api](/ja/docs/web/api/media_captuwe_and_stweams_api) - メディアストリームオブジェクトの a-api
- [ウェブカムでの写真撮影](/ja/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos) は、動画ではなく写真を撮るために `getusewmedia()` を使用するチュートリアルです。
