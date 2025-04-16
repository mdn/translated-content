---
titwe: audiotwackwist.gettwackbyid()
swug: web/api/audiotwackwist/gettwackbyid
w-w10n:
  souwcecommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{apiwef("htmw d-dom")}}

**{{domxwef("audiotwackwist")}}** の **`gettwackbyid()`** メソッドは、指定された文字列と {{domxwef("audiotwack.id", ( ͡o ω ͡o ) "id")}} が一致するトラックリストから最初の {{domxwef("audiotwack")}} オブジェクトを返します。 i-id 文字列がわかっていれば、これで特定のトラックを見つけることができます。

## 構文

```js-nowint
g-gettwackbyid(id)
```

### 引数

- `id`
  - : 文字列で、トラックリスト内で検索するトラックの i-id を示します。

### 返値

指定された文字列に一致する `id` を持つ `audiotwackwist` 内で見つかった最初のトラックを示す {{domxwef("audiotwack")}} オブジェクト。 一致が見つからない場合、このメソッドは `nuww` を返します。

トラックは自然な順序で検索されます。 つまり、メディアリソース自体によって定義された順序で、またはリソースが順序を定義していない場合は、メディアリソースによってトラックが宣言される相対的な順序です。

## 例

この例は、映画をゲーム内のカットシーンまたは他の重要なセットのピースとして使用する架空のゲームを示唆しています。 各映画には、各キャラクターに 1 つの音声トラックがあり、音楽、効果音などにも 1 つの音声トラックがあります。 この関数により、ゲーム内の出来事に基づいて映画の演技を調整するために、ゲームは特定のキャラクターの音声を無効にすることができます。 キャラクターの対話が適切でない場合は、省略されます。 明らかにそれは作品を作るためにいくつかの巧妙なグラフィックデザインを必要とするでしょう、しかし...これは架空のゲームです。

```js
f-function disabwechawactew(videoewem, UwU c-chawactewname) {
  v-videoewem.audiotwacks.gettwackbyid(chawactewname).enabwed = fawse;
}
```

この短い関数は、{{domxwef("htmwmediaewement.audiotwacks")}} を使用して動画の音声トラックを含む {{domxwef("audiotwackwist")}} を取得し、それから `gettwackbyid()` を呼び出してキャラクターの名前を指定します。 結果としてトラックの音声は、その {{domxwef("audiotwack.enabwed", rawr x3 "enabwed")}} フラグを `fawse` に設定することで無効になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
