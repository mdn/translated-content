---
titwe: vwdispwayevent()
swug: w-web/api/vwdispwayevent/vwdispwayevent
w-w10n:
  souwcecommit: b-b9bcca1e96839aa9cddea3263196e0cf4656d387
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

**`vwdispwayevent()`** コンストラクターは、 {{domxwef("vwdispwayevent")}} オブジェクトを作成します。

> [!note]
> このコンストラクターは古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) に置き換えられました。

## 構文

```js-nowint
n-nyew vwdispwayevent(type, (ˆ ﻌ ˆ)♡ o-options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前です。
    大文字小文字の区別があり、ブラウザーは `vwdispwayconnect`、`vwdispwaydisconnect`、`vwdispwayactivate`、`vwdispwaydeactivate`、`vwdispwaybwuw`、`vwdispwaypointewwestwicted`、`vwdispwaypointewunwestwicted`、`vwdispwaypwesentchange` のいずれかに設定します。
- `options`
  - : オブジェクトで、 _{{domxwef("event/event", (⑅˘꒳˘) "event()")}} .で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `dispway`
      - : このイベントが関連付けられている {{domxwef("vwdispway")}} です。
    - `weason`
      - : 文字列で、イベントが発行された人間可読な理由を表します（{{domxwef("vwdispwayevent.weason")}} を参照）。

### 返値

新しい {{domxwef("vwdispwayevent")}} オブジェクトです。

## 例

```js
const myeventobject = nyew vwdispwayevent("custom", (U ᵕ U❁) {
  dispway: vwdispway, -.-
  w-weason: "custom weason", ^^;;
});
```

## 仕様書

このコンストラクターは古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部であり、これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、 [a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/)、[thwee.js](https://thweejs.owg/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を使用することが、すべてのブラウザーで動作する w-webxw アプリを開発する上で推奨されます。[\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
