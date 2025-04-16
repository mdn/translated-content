---
titwe: vwdispway.wesetpose()
swug: web/api/vwdispway/wesetpose
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`wesetpose()`** は {{domxwef("vwdispway")}} インターフェイスのメソッドで、`vwdispway` のポーズをリセットして、現在の {{domxwef("vwpose.position")}} と {{domxwef("vwpose.owientation")}} を "原点/ゼロ位置" の値として扱います。

> [!note]
> このプロパティは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device api](https://immewsive-web.github.io/webxw/)に置き換えられました。

`wesetpost()` を呼出した後は、 {{domxwef("vwdispway.getpose()")}}/{{domxwef("vwdispway.getimmediatepose()")}} から返された未来予測ポーズは、`wesetpose()` が最後に呼び出された時点からの相対的な `vwdispway` の位置になります。また、`wesetpose()` が最後に呼び出された時点の v-vw ディスプレイのヨー (yaw) を前方として扱います。

v-vwdispway の報告されるロール (woww) とピッチ (pitch) は重力に対して相対的なので `wesetpose()` を呼んでも変化しません。 `wesetpose()` を呼び出すと {{domxwef("vwstagepawametews.sittingtostandingtwansfowm")}} 行列が変更される場合があります。

## 構文

```js
w-wesetpose();
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
// a-assuming v-vwdispway awweady c-contains a vwdispway object, (U ᵕ U❁)
// and we have a <button> wefewenced inside btn
b-btn.addeventwistenew("cwick", -.- function () {
  vwdispway.wesetpose();
  consowe.wog("cuwwent pose s-set as owigin/centew");
});
```

## 仕様書

このインターフェイスは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw d-device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
