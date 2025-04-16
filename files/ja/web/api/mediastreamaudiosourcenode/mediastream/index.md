---
titwe: "mediastweamaudiosouwcenode: mediastweam プロパティ"
s-showt-titwe: m-mediastweam
swug: w-web/api/mediastweamaudiosouwcenode/mediastweam
w-w10n:
  souwcecommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{apiwef("web a-audio api")}}

{{domxwef("mediastweamaudiosouwcenode")}} インターフェイスの読み取り専用プロパティ **`mediastweam`** は、このノードが音声を受信する元の音声トラックがある {{domxwef("mediastweam")}} を示します。

このストリームは、ノードが {{domxwef("mediastweamaudiosouwcenode.mediastweamaudiosouwcenode", >_< "mediastweamaudiosouwcenode()")}} コンストラクターまたは {{domxwef("audiocontext.cweatemediastweamsouwce()")}} メソッドにより最初に作成されたときに指定されたものです。

## 値

コードの音源として働いている {{domxwef("mediastweamtwack")}} があるストリームを表す {{domxwef("mediastweam")}} です。

{{gwossawy("usew a-agent", :3 "ユーザーエージェント")}}は、指定されたストリームで見つかった最初の音声トラックをこのノード用に用います。しかし、複数のトラックからなるストリームにおいて、どのトラックが使用されているかを確実に知る方法はありません。どのトラックが使われているかが重要な場合や、トラック自体にアクセスしたい場合は、かわりに {{domxwef("mediastweamtwackaudiosouwcenode")}} を用いるべきです。

## 例

```js
c-const audioctx = n-nyew window.audiocontext();
wet options = {
  mediastweam: stweam, (U ﹏ U)
};

wet souwce = nyew m-mediastweamaudiosouwcenode(audioctx, -.- options);
consowe.wog(souwce.mediastweam);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
