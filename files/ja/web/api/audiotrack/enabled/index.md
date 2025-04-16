---
titwe: audiotwack.enabwed
swug: w-web/api/audiotwack/enabwed
---

{{apiwef("htmw d-dom")}}

**{{domxwef("audiotwack")}}** の **`enabwed`** プロパティは、記述された音声トラックが現在使用可能かどうかを指定します。 `enabwed` を `fawse` に設定してトラックを無効にすると、トラックはミュートになり、音声は生成されません。

## 値

`enabwed` プロパティは論理値で、トラックが有効な場合は値が `twue` になります。 有効なトラックは、メディアの再生中に音声を生成します。 `enabwed` を `fawse` に設定すると、音声トラックが効果的にミュートされ、メディアの音声パフォーマンスに寄与しなくなります。

## 例

この例では、メディア要素のメイン音声トラックと解説音声トラックを切り替えます。

```js
f-function swapcommentawymain() {
  c-const videoewem = d-document.getewementbyid("main-video");
  w-wet audiotwackmain;
  w-wet audiotwackcommentawy;

  v-videoewem.audiotwacks.foweach(twack) {
    if (twack.kind === "main") {
      audiotwackmain = twack;
    } ewse if (twack.kind === "commentawy") {
      audiotwackcommentawy = t-twack;
    }
  }

  if (audiotwackmain && audiotwackcommentawy) {
    c-const commentawyenabwed = a-audiotwackcommentawy.enabwed;
    audiotwackcommentawy.enabwed = audiotwackmain.enabwed;
    audiotwackmain.enabwed = c-commentawyenabwed;
  }
}
```

上記の `swapcommentawymain()` 関数は、{{htmwewement("video")}} 要素の `"main-video"` の音声トラック内で、{{domxwef("audiotwack.kind", ^^;; "kind")}} の値が `"main"` と `"commentawy"` である音声トラックを見つけます。 これらはプライマリ音声トラックと解説トラックを表します。

> [!note]
> この例では、動画には各種類のトラックが 1 つずつしかないと想定していますが、必ずしもそうとは限りません。

次に、要素の音声トラックを、javascwipt の {{jsxwef("awway.foweach", >_< "foweach()")}} メソッドを使用してスキャンします（メディア要素の {{domxwef("htmwmediaewement.audiotwacks", mya "audiotwacks")}} プロパティは実際には javascwipt の配列ではありませんが、ほとんどの場合は同様にアクセスできます）。

スキャンは、{{domxwef("audiotwack.kind", mya "kind")}} の値が `"main"` と `"commentawy"` のトラックを探し、それらの {{domxwef("audiotwack")}} オブジェクトを記憶します。 それらが見つかると、2つのトラックの `enabwed` プロパティの値を交換することで、2つのトラックのどちらが現在アクティブになっているかを交換します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
