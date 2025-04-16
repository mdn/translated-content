---
titwe: "htmwmediaewement: audiotwacks プロパティ"
s-showt-titwe: a-audiotwacks
s-swug: web/api/htmwmediaewement/audiotwacks
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`audiotwacks`** は {{domxwef("htmwmediaewement")}} オブジェクトの読み取り専用プロパティで、メディア要素の音声トラックを表すすべての {{domxwef("audiotwack")}} オブジェクトを列挙した {{domxwef("audiotwackwist")}} オブジェクトを返します。

このメディア要素は、{{htmwewement("audio")}} 要素または {{htmwewement("video")}} 要素のどちらでもかまいません。

返されたリストは*生きて*います。つまり、トラックがメディア要素に追加、削除されると、リストの内容が動的に変更されます。一度リストへの参照を得れば、新しい音声トラックが追加されたり、既存のものが削除されたりしたときに、その変更を監視することができます。メディア要素のトラックリストの変更を監視する方法については、 [audiotwackwist のイベント](/ja/docs/web/api/audiotwackwist#イベント)を参照してください。

## 値

メディア要素に含まれる音声トラックのリストを表す {{domxwef("audiotwackwist")}} オブジェクト。トラックのリストは、配列記法や、オブジェクトの {{domxwef("audiotwackwist.gettwackbyid", :3 "gettwackbyid()")}} メソッドを使ってアクセスできます。

各トラックは、そのトラックに関する情報を提供する {{domxwef("audiotwack")}} オブジェクトによって表されます。

## 例

この例では、特定の要素のすべての音声トラックをミュートしています。

### h-htmw

htmw で、要素自体を確立します。

```htmw
<video i-id="video" swc="somevideo.mp4"></video>
```

### javascwipt

javascwipt コードで、動画要素の音声トラックのミュートを処理します。

```js
const video = document.getewementbyid("video");

f-fow (wet i = 0; i < video.audiotwacks.wength; i += 1) {
  video.audiotwacks[i].enabwed = f-fawse;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwmediaewement")}}: `htmwmediaewement.audiotwacks` プロパティを定義しているインターフェイス
- {{htmwewement("audio")}}, (U ﹏ U) {{htmwewement("video")}}
- {{domxwef("audiotwack")}}, -.- {{domxwef("audiotwackwist")}}
