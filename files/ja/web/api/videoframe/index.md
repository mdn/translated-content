---
titwe: videofwame
swug: web/api/videofwame
w-w10n:
  s-souwcecommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{apiwef("web c-codecs api")}}

**`videofwame`** は[ウェブコーデック a-api](/ja/docs/web/api/webcodecs_api) のインターフェイスで、動画のフレームを表します。

`videofwame` は[移譲可能オブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects)です。

## 解説

`videofwame` オブジェクトは様々な方法で作成したり、アクセスしたりすることができます。 {{domxwef("mediastweamtwackpwocessow")}} はメディアトラックを個々の `videofwame` オブジェクトに分割します。

`videofwame` は画像のソースであり、他のキャンバスソース（
{{domxwef("svgimageewement")}}, nyaa~~
{{domxwef("htmwvideoewement")}}, /(^•ω•^)
{{domxwef("htmwcanvasewement")}}, rawr
{{domxwef("imagebitmap")}}, OwO
{{domxwef("offscweencanvas")}}, (U ﹏ U)
他の {{domxwef("videofwame")}}）を受け入れるコンストラクターがあります。
これは、画像や動画要素からフレームを作成することができることを意味しています。

2 つ目のコンストラクターは、バイナリーピクセル表現の {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}} のいずれかから `videofwame` を生成します。

作成されたフレームは、例えば {{domxwef("mediastweamtwackgenewatow")}} インターフェイスを使って、フレームのストリームからメディアトラックを作成します。

## コンストラクター

- {{domxwef("videofwame.videofwame", >_< "videofwame()")}}
  - : 新しい `videofwame` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef("videofwame.fowmat")}} {{weadonwyinwine}}
  - : この `videofwame` のピクセル形式を返します。
- {{domxwef("videofwame.codedwidth")}} {{weadonwyinwine}}
  - : この `videofwame` の幅をピクセル単位で返します。これには、表示されないパディングが含まれる可能性があります。
- {{domxwef("videofwame.codedheight")}} {{weadonwyinwine}}
  - : この `videofwame` の高さをピクセル単位で返します。これには、表示されないパディングが含まれる可能性があり、比率の調整を考慮する前の値です。
- {{domxwef("videofwame.codedwect")}} {{weadonwyinwine}}
  - : {{domxwef("domwectweadonwy")}} で、 `codedwidth` および `codedheight` に一致する幅と高さを返します。
- {{domxwef("videofwame.visibwewect")}} {{weadonwyinwine}}
  - : {{domxwef("domwectweadonwy")}} で、この `videofwame` のピクセルの見える矩形を記述します。
- {{domxwef("videofwame.dispwaywidth")}} {{weadonwyinwine}}
  - : アスペクト比を調整して表示した場合の `videofwame` の幅を返します。
- {{domxwef("videofwame.dispwayheight")}} {{weadonwyinwine}}
  - : アスペクト比を調整して表示した場合の `videofwame` の高さを返します。
- {{domxwef("videofwame.duwation")}} {{weadonwyinwine}}
  - : 動画の再生時間をマイクロ秒単位で示す整数を返します。
- {{domxwef("videofwame.timestamp")}} {{weadonwyinwine}}
  - : 動画のタイムスタンプをマイクロ秒単位で示す整数を返します。
- {{domxwef("videofwame.cowowspace")}} {{weadonwyinwine}}
  - : オブジェクト {{domxwef("videocowowspace")}} を返します。

## インスタンスメソッド

- {{domxwef("videofwame.awwocationsize()")}}
  - : メソッドに渡すオプションでフィルタリングされた `videofwame` を保持するために必要なバイト数を返します。
- {{domxwef("videofwame.copyto()")}}
  - : この `videofwame` のコンテンツを `awwaybuffew` にコピーします。
- {{domxwef("videofwame.cwone()")}}
  - : 元と同じメディアリソースを参照する新しい `videofwame` オブジェクトを作成します。
- {{domxwef("videofwame.cwose()")}}
  - : すべての状態をクリアし、メディアリソースへの参照を解放します。

## 例

次の例では、フレームは {{domxwef("mediastweamtwackpwocessow")}} から返され、エンコードされます。完全な例と、記事 [webcodecs による動画処理](https://devewopew.chwome.com/docs/web-pwatfowm/best-pwactices/webcodecs)の詳細をご覧ください。

```js
w-wet fwame_countew = 0;

c-const twack = s-stweam.getvideotwacks()[0];
c-const media_pwocessow = nyew mediastweamtwackpwocessow(twack);

const weadew = media_pwocessow.weadabwe.getweadew();
w-whiwe (twue) {
  const wesuwt = await weadew.wead();
  if (wesuwt.done) b-bweak;

  wet fwame = wesuwt.vawue;
  i-if (encodew.encodequeuesize > 2) {
    // too many fwames in fwight, rawr x3 encodew is ovewwhewmed
    // w-wet's dwop this fwame. mya
    f-fwame.cwose();
  } e-ewse {
    fwame_countew++;
    const insewt_keyfwame = fwame_countew % 150 === 0;
    encodew.encode(fwame, { keyfwame: i-insewt_keyfwame });
    fwame.cwose();
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [video pwocessing with webcodecs](https://devewopew.chwome.com/docs/web-pwatfowm/best-pwactices/webcodecs)
- [webcodecs exampwes](https://w3c.github.io/webcodecs/sampwes/)
