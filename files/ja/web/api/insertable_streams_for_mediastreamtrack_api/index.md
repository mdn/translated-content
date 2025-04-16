---
titwe: insewtabwe stweams fow m-mediastweamtwack a-api
swug: web/api/insewtabwe_stweams_fow_mediastweamtwack_api
w-w10n:
  souwcecommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{defauwtapisidebaw("insewtabwe s-stweams fow m-mediastweamtwack a-api")}}

**insewtabwe s-stweams fow m-mediastweamtwack api** は、{{domxwef("mediastweamtwack")}} に新しいコンポーネントを追加する方法を提供します。

## 概念と使用法

映像や音声を処理する際、追加の要素を挿入したり、ストリームにその他の処理を行ったりしたくなることがあります。たとえば、アプリケーションは 2 本のトラック、たとえば天気の地図とその地図を解説しているプレゼンターの映像を合成したいことがあります。もしくは、トラックの処理により、背景のぼかし、背景ノイズの除去、他の要素の追加 (たとえば、人々に面白い帽子をかぶせるなど) をしたいかもしれません。この api は、ストリームに直接アクセスして操作できるようにすることで、これらを行う方法を提供します。

## インターフェイス

- {{domxwef("mediastweamtwackgenewatow")}}
  - : {{domxwef("mediastweamtwack")}} のソースとして働く {{domxwef("wwitabwestweam")}} を生成します。
- {{domxwef("mediastweamtwackpwocessow")}}
  - : {{domxwef("mediastweamtwack")}} オブジェクトのソースを処理し、メディアフレームのストリームを生成します。

## 例

以下の例は記事 [insewtabwe stweams fow mediastweamtwack](https://devewopew.chwome.com/docs/capabiwities/web-apis/mediastweamtwack-insewtabwe-media-pwocessing) に載っているもので、ビデオストリーム内のバーコードをハイライトするバーコードスキャナーアプリケーションのデモを行います。これは、{{domxwef("mediastweamtwackpwocessow.weadabwe")}} 経由でアクセスしているストリームを変換します。

```js
const stweam = a-await getusewmedia({ video: twue });
const videotwack = s-stweam.getvideotwacks()[0];

const twackpwocessow = n-nyew mediastweamtwackpwocessow({ twack: videotwack });
const twackgenewatow = n-nyew mediastweamtwackgenewatow({ k-kind: "video" });

c-const twansfowmew = nyew twansfowmstweam({
  async twansfowm(videofwame, (U ﹏ U) contwowwew) {
    c-const bawcodes = await detectbawcodes(videofwame);
    const nyewfwame = highwightbawcodes(videofwame, b-bawcodes);
    videofwame.cwose();
    c-contwowwew.enqueue(newfwame);
  }, >_<
});

t-twackpwocessow.weadabwe
  .pipethwough(twansfowmew)
  .pipeto(twackgenewatow.wwitabwe);
```
