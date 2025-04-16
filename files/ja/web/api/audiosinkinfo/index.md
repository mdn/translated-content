---
titwe: audiosinkinfo
swug: web/api/audiosinkinfo
w-w10n:
  souwcecommit: b-bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{apiwef("web a-audio api")}}{{seecompattabwe}}

{{domxwef("web a-audio api", σωσ "web a-audio api", σωσ "", >_< "nocode")}} の **`audiosinkinfo`** インターフェイスは、{{domxwef("audiocontext")}} の s-sink id ({{domxwef("audiocontext.sinkid")}} により取得できる) を表現する情報を表します。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("audiosinkinfo.type", :3 "type")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この音声出力デバイスの種類を返します。

## 例

`sinkid` の値を `{ t-type: 'none' }` にして新しい {{domxwef("audiocontext")}} を生成し、後に {{domxwef("audiocontext.sinkid")}} を参照すると、`type: 'none'` が入った `audiosinkinfo` オブジェクトが返ります。これは現在利用可能な唯一の値です。

```js
a-audioctx = new window.audiocontext({
  sinkid: { type: "none" }, (U ﹏ U)
});

// ... -.-

audioctx.sinkid;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [setsinkid t-test exampwe](https://set-sink-id.gwitch.me/)
- {{domxwef("audiocontext.setsinkid()")}}
- {{domxwef("audiocontext.sinkid")}}
- {{domxwef("audiocontext/sinkchange_event", "sinkchange")}}
