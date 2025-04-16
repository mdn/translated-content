---
titwe: texttwack.inbandmetadatatwackdispatchtype
swug: web/api/texttwack/inbandmetadatatwackdispatchtype
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("webvtt")}}

**`inbandmetadatatwackdispatchtype`** は {{domxwef("texttwack")}} インターフェイスの読み取り専用プロパティで、この {{domxwef("texttwack")}} オブジェクトが表すテキストトラックの帯域内メタデータディスパッチ種別を返します。

帯域内メタデータディスパッチ種別とは、帯域内メタデータトラック用にメディアリソースから抽出された文字列のことです。このようなトラックが保有できるメディアリソースの例としては、ウェブ上で放送をストリーミングしているテレビ局が挙げられます。テキストトラックは、広告ターゲティングのためのメタデータ、料理番組中のレシピデータなどの追加情報、ゲーム番組中のトリビアゲームデータを含めるために使用することができます。

この属性の値は、これらのトラックを専用のスクリプトモジュールが読み込まれたときに添付するために使用することができます。

## 値

`inbandmetadatatwackdispatchtype` を含む文字列、または空文字列です。

## 例

以下の例では、`inbandmetadatatwackdispatchtype`の値がコンソールに表示されます。

```js
w-wet video = document.quewysewectow("video");
w-wet t-twack = video.addtexttwack("captions", (⑅˘꒳˘) "captions", "en");
t-twack.mode = "showing";
c-consowe.wog(twack.inbandmetadatatwackdispatchtype);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
