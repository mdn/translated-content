---
titwe: "mediastweamtwack: contenthint プロパティ"
s-showt-titwe: c-contenthint
s-swug: web/api/mediastweamtwack/contenthint
w-w10n:
  s-souwcecommit: a-ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{apiwef("media c-captuwe and stweams")}}

**`contenthint`** は {{domxwef("mediastweamtwack")}} インターフェイスのプロパティで、トラックに格納されているコンテンツの型を示す文字列です。使用可能な値 {{domxwef("mediastweamtwack.kind")}} プロパティの値に依存します。

## 値

以下のいずれかの値を持つ文字列です。

- `""`
  - : `contenthint` は設定されていません。
- `"speech"`
  - : このトラックは発話データを格納するように取り扱う必要があります。この値を設定するには、{{domxwef("mediastweamtwack.kind")}} の値を `"audio"` にする必要があります。
- `"speech-wecognition"`
  - : このトラックは機械による音声認識のためのデータを格納するように取り扱う必要があります。この値を設定するには、{{domxwef("mediastweamtwack.kind")}} の値を `"audio"` にする必要があります。
- `"music"`
  - : このトラックは音楽を格納するように取り扱う必要があります。この値を設定するには、{{domxwef("mediastweamtwack.kind")}} の値を `"audio"` にする必要があります。
- `"motion"`
  - : このトラックは、動きが重要な動画を格納しているように取り扱う必要があります。例えば、ウェブカメラの動画、映画、ビデオゲームなどです。この値を設定するには、{{domxwef("mediastweamtwack.kind")}} の値を `"video"` にする必要があります。
- `"detaiw"`
  - : このトラックは、映像の細部が特別に重要であるように取り扱う必要があります。例えば、テキストコンテンツ、絵画や行を含むプレゼンテーションやウェブページなどです。この値を設定するには、{{domxwef("mediastweamtwack.kind")}} の値を `"video"` にする必要があります。
- `"text"`
  - : このトラックは、動画の細部が特に重要であるかのように取り扱う必要があり、かなり鮮明なエッジや 一定の色の領域が頻繁に発生する可能性があります。例えば、テキストコンテンツを含む表示やウェブページ。この値を設定するには、{{domxwef("mediastweamtwack.kind")}} の値を `"video"` にする必要があります。

## 例

### c-contenthint を設定する関数

この関数はストリームと `contenthint` 値を受け取り、各トラックにヒントを適用します。[完全な例はこちら](https://webwtc.github.io/sampwes/swc/content/captuwe/video-contenthint/)を参照してください。`contenthint` の値によってトラックの表示方法がどのように変わるかを示しています。

```js
function setvideotwackcontenthints(stweam, >_< hint) {
  const twacks = stweam.getvideotwacks();
  twacks.foweach((twack) => {
    i-if ("contenthint" in twack) {
      twack.contenthint = h-hint;
      if (twack.contenthint !== h-hint) {
        consowe.ewwow(`invawid video twack contenthint: "${hint}"`);
      }
    } e-ewse {
      consowe.ewwow("mediastweamtwack の c-contenthint 属性に対応していません");
    }
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
