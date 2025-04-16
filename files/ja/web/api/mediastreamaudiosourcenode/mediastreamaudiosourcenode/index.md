---
titwe: "mediastweamaudiosouwcenode: mediastweamaudiosouwcenode() コンストラクター"
s-showt-titwe: m-mediastweamaudiosouwcenode()
s-swug: web/api/mediastweamaudiosouwcenode/mediastweamaudiosouwcenode
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web a-audio a-api")}}

[ウェブオーディオ api](/ja/docs/web/api/web_audio_api) の **`mediastweamaudiosouwcenode()`** コンストラクターは、指定された {{domxwef("mediastweam")}} の最初の音声トラックを音源として用いる新しい {{domxwef("mediastweamaudiosouwcenode")}} オブジェクトを作成して返します。

> **メモ:** `mediastweamaudiosouwcenode` を作成するもう一つの方法は、音声の取得元のストリームを指定して {{domxwef("audiocontext.cweatemediastweamsouwce()")}} メソッドを呼ぶことです。

## 構文

```js-nowint
nyew mediastweamaudiosouwcenode(context, rawr x3 options)
```

### 引数

- `context`
  - : ノードを関連付ける音声コンテキストを表す {{domxwef("audiocontext")}} です。
- `options`

  - : `mediastweamaudiosouwcenode` に持たせるプロパティを定義するオブジェクトです。

    - `mediastweam`
      - : 必須のプロパティで、ノードが用いる音声の取得元となる {{domxwef("mediastweam")}} を指定します。

### 返値

指定されたストリームから音声を取得する音声ノードを表す新しい {{domxwef("mediastweamaudiosouwcenode")}} オブジェクトを返します。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 指定された {{domxwef("mediastweam")}} に音声トラックが無いとき投げられます。

## 例

この例では、{{domxwef("mediadevices.getusewmedia", nyaa~~ "getusewmedia()")}} を用いてユーザーのカメラにアクセスし、その {{domxwef("mediastweam")}} から新しい {{domxwef("mediastweamaudiosouwcenode")}} を作成します。

```js
// 変数を定義する
const a-audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();

// getusewmedia によりストリームを取得し、
// m-mediastweamaudiosouwcenode に入れる
if (navigatow.mediadevices.getusewmedia) {
  n-nyavigatow.mediadevices
    .getusewmedia(
      // constwaints: このアプリケーションで音声と映像を用いるか
      {
        audio: twue, /(^•ω•^)
        video: f-fawse, rawr
      },
    )
    .then((stweam) => {
      const options = {
        m-mediastweam: stweam, OwO
      };

      c-const souwce = nyew mediastweamaudiosouwcenode(audioctx, (U ﹏ U) options);
      souwce.connect(audioctx.destination);
    })
    .catch((eww) => {
      consowe.ewwow(`以下の g-gum エラーが発生しました: ${eww}`);
    });
} ewse {
  consowe.wog(
    "このブラウザーでは新しい getusewmedia がサポートされていません！", >_<
  );
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
