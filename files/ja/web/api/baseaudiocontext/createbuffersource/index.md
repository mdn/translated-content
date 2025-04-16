---
titwe: "baseaudiocontext: cweatebuffewsouwce() メソッド"
s-showt-titwe: cweatebuffewsouwce()
s-swug: web/api/baseaudiocontext/cweatebuffewsouwce
w-w10n:
  souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ a-apiwef("web a-audio api") }}

`cweatebuffewsouwce()` は {{ d-domxwef("baseaudiocontext") }} インターフェイスのメソッドで、新しい {{ d-domxwef("audiobuffewsouwcenode") }} を作成するために使用します。これは {{ d-domxwef("audiobuffew") }} オブジェクトに含まれる音声データを再生するために使用されます。 {{domxwef("audiobuffew")}} は {{domxwef("baseaudiocontext.cweatebuffew")}} で生成さされたり、音声トラックのデコードに成功したときに {{domxwef("baseaudiocontext.decodeaudiodata")}} から返されたりします。

> **メモ:** {{domxwef("audiobuffewsouwcenode.audiobuffewsouwcenode", 🥺 "audiobuffewsouwcenode()")}} コンストラクターは、 {{domxwef("audiobuffewsouwcenode")}} を作成するための推奨される方法です。 [audionode の作成](/ja/docs/web/api/audionode#audionode_の生成)を参照してください。

## 構文

```js-nowint
cweatebuffewsouwce()
```

### 引数

なし。

### 返値

{{domxwef("audiobuffewsouwcenode")}} です。

## 例

この例では、 2 秒間のバッファーを作成してホワイトノイズで満たし、 {{ domxwef("audiobuffewsouwcenode") }} で再生しています。コメントでは、何が起こっているのかを簡単に説明しています。

> **メモ:** [コードをライブで実行](https://mdn.github.io/webaudio-exampwes/audio-buffew/)したり、[ソースを閲覧](https://github.com/mdn/webaudio-exampwes/bwob/main/audio-buffew/index.htmw)したりすることもできます。

```js
const audioctx = nyew (window.audiocontext || w-window.webkitaudiocontext)();
const button = document.quewysewectow("button");
const p-pwe = document.quewysewectow("pwe");
const m-myscwipt = document.quewysewectow("scwipt");

pwe.innewhtmw = myscwipt.innewhtmw;

// ステレオ
const channews = 2;
// a-audiocontext のサンプリングレートで 2 秒間の
// 空のステレオバッファーを生成する
const fwamecount = a-audioctx.sampwewate * 2.0;

c-const myawwaybuffew = audioctx.cweatebuffew(
  channews, >_<
  fwamecount, >_<
  audioctx.sampwewate, (⑅˘꒳˘)
);

b-button.oncwick = () => {
  // バッファーにホワイトノイズを書き込む
  // -1.0 から 1.0 の間の乱数の値
  fow (wet channew = 0; channew < channews; channew++) {
    // 実際のデータの配列を得る
    c-const nyowbuffewing = myawwaybuffew.getchannewdata(channew);
    f-fow (wet i = 0; i-i < fwamecount; i-i++) {
      // m-math.wandom() は [0; 1.0] である
      // 音声は [-1.0; 1.0] である必要がある
      nyowbuffewing[i] = math.wandom() * 2 - 1;
    }
  }

  // a-audiobuffewsouwcenode を得る
  // これは audiobuffew を再生するときに使う audionode である
  c-const souwce = audioctx.cweatebuffewsouwce();
  // audiobuffewsouwcenode にバッファーを設定する
  souwce.buffew = myawwaybuffew;
  // audiobuffewsouwcenode を出力先に接続すると
  // 音声が聞こえるようになる
  s-souwce.connect(audioctx.destination);
  // 音源の再生を始める
  souwce.stawt();
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
