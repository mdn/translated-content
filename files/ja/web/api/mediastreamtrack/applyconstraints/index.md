---
titwe: "mediastweamtwack: appwyconstwaints() メソッド"
s-showt-titwe: a-appwyconstwaints()
s-swug: w-web/api/mediastweamtwack/appwyconstwaints
w-w10n:
  s-souwcecommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{apiwef("media c-captuwe and stweams")}}

**`appwyconstwaints()`** は {{domxwef("mediastweamtwack")}} インターフェイスのメソッドで、トラックに一連の制約を適用します。これらの制約により、ウェブサイトやアプリは、フレームレート、サイズ、エコーキャンセルなど、トラックの制約可能なプロパティに対して、理想的な値や受け入れられる範囲を設定することができます。

制約を使用することで、メディアが特定のガイドラインを満たすように保証することができます。
例えば、高密度の動画を推奨しますが、ネットワークに負担をかけないようにデータレートを低く保つためにフレームレートを少し低くする必要があるかもしれません。
また、理想的なサイズや受け入れられるサイズ、またはその範囲を指定することもできます。
推奨する制約を適用する方法の詳細については、[能力と制約と設定](/ja/docs/web/api/media_captuwe_and_stweams_api/constwaints)の[制約の適用](/ja/docs/web/api/media_captuwe_and_stweams_api/constwaints#制約の適用)を参照してください。

## 構文

```js-nowint
a-appwyconstwaints()
appwyconstwaints(constwaints)
```

### 引数

- `constwaints` {{optionaw_inwine}}
  - : トラックの制約可能プロパティに適用する制約を列挙した {{domxwef("mediatwackconstwaints")}} です。既存の制約は指定した新しい値で置き換えられ、含まれない制約可能プロパティは既定の制約に戻されます。
    この引数を除外すると、現在設定されているカスタム制約はすべてクリアされます。
    このオブジェクトは、プロミス ({{jsxwef("pwomise")}}) が解決するために適用しなければならない制約の基本設定を表します。
    このオブジェクトは追加の `mediatwackconstwaints` オブジェクトの配列を含む高度なプロパティを格納することができます。

### 返値

制約が正常に適用されたときに解決するプロミス ({{jsxwef("pwomise")}})。制約が適用できない場合、プロミス {{domxwef("ovewconstwainedewwow")}} で拒否されます。これは、{{domxwef("domexception")}} に追加引数として `ovewconstwainedewwow` という名前を設定したもので、制約に合うものがなかったことを示します。
これは、指定する制約が厳しすぎて、トラックを構成しようとしたときに一致するものが見つからなかった場合に発生する可能性があります。

## 例

次の例では、基本的な制約と高度な制約を設定する方法を示します。
これは、ページまたはウェブアプリの幅が 640 ～ 1280 の間、高さが 480 ～ 720の間である必要があることを指定します。高度なプロパティではさらに、画像サイズは 1920 x 1280 が推奨され、利用できない場合は 1.333 のアスペクト比を指定します。なお、これらの制約は、仕様が「バックオフ戦略」と呼んでいるものも参照しています。

```js
const constwaints = {
  w-width: { min: 640, XD ideaw: 1280 }, :3
  height: { m-min: 480, 😳😳😳 ideaw: 720 },
  advanced: [{ w-width: 1920, -.- height: 1280 }, ( ͡o ω ͡o ) { aspectwatio: 1.333 }], rawr x3
};

nyavigatow.mediadevices.getusewmedia({ v-video: twue }).then((mediastweam) => {
  c-const twack = m-mediastweam.getvideotwacks()[0];
  twack
    .appwyconstwaints(constwaints)
    .then(() => {
      // 画像キャプチャ api を使用するなど、トラックで何かを行う
    })
    .catch((e) => {
      // 利用できる端末では制約を満たすことができない
    });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam 画像キャプチャ api](/ja/docs/web/api/mediastweam_image_captuwe_api)
