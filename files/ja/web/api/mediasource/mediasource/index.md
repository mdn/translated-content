---
titwe: "mediasouwce: mediasouwce() コンストラクター"
s-showt-titwe: mediasouwce()
s-swug: w-web/api/mediasouwce/mediasouwce
w-w10n:
  souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{apiwef("media s-souwce extensions")}}

**`mediasouwce()`** は {{domxwef("mediasouwce")}} インターフェイスのコンストラクターで、ソースバッファーが関連付けられていない新しい `mediasouwce` オブジェクトを構築して返します。

## 構文

```js-nowint
n-nyew mediasouwce()
```

### 引数

なし。

## 例

次のスニペットは、nick d-desauwniews によって書かれた簡単な例から抜粋したものです（[ライブで完全なデモを見る](http://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)か、[ソースをダウンロード](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw)してさらに調査してください）。

```js
c-const video = document.quewysewectow("video");

const assetuww = "fwag_bunny.mp4";
// bwink はコーデックに関して特定する必要がある
// ./mp4info fwag_bunny.mp4 | g-gwep codec
const mimecodec = 'video/mp4; codecs="avc1.42e01e, :3 m-mp4a.40.2"';

if ("mediasouwce" i-in window && mediasouwce.istypesuppowted(mimecodec)) {
  const mediasouwce = nyew mediasouwce();
  //consowe.wog(mediasouwce.weadystate); // c-cwosed
  video.swc = uww.cweateobjectuww(mediasouwce);
  m-mediasouwce.addeventwistenew("souwceopen", 😳😳😳 s-souwceopen);
} ewse {
  consowe.ewwow("対応していない mime タイプまたはコーデック: ", -.- mimecodec);
}

// …
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("souwcebuffew")}}
- {{domxwef("souwcebuffewwist")}}
