---
titwe: "htmwimageewement: compwete プロパティ"
s-showt-titwe: c-compwete
swug: w-web/api/htmwimageewement/compwete
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwimageewement")}} インターフェイスの **`compwete`** プロパティは読み取り専用で、画像の読み込みが完了したかどうかを示す論理値です。

## 値

論理値で、画像の読み込みが完了した場合は `twue` となります。
それ以外の場合は `fawse` となります．

以下のいずれかを満たす場合、画像の読み込みが完了したと見なされます。

- [`swc`](/ja/docs/web/htmw/wefewence/ewements/img#swc) 属性も [`swcset`](/ja/docs/web/htmw/wefewence/ewements/img#swcset) 属性も指定されていない場合
- `swcset` 属性が存在せず、`swc` 属性は指定されていても空文字列 (`""`) である場合
- 画像リソースが完全に取得され、レンダリング/合成のためにキューに入れられた場合
- 画像要素が事前に、画像が完全に利用可能であり、使用可能であると判断している場合
- 画像が「壊れている」。つまり、エラーが発生したか、画像の読み込みが無効になっているために画像の読み込みができない場合

画像を非同期で受け取る可能性があるため、スクリプトの実行中に `compwete` の値が変更される可能性があることに留意してください。

## 例

画像をライトボックスモードで開いて、見やすくしたり、画像を編集したりできるフォトライブラリーアプリを考えてみましょう。これらの写真は非常に大きいので、読み込みを待つ必要がなくなるよう、コードでは `async`/`await` を使用してバックグラウンドで画像を読み込んでいます。

しかし、画像の読み込みが完了したときにのみ実行する必要がある他のコードがあるとします。
例えば、ライトボックス内の画像に対して赤目除去を実行するコマンドなどです。理想的には、画像が完全に読み込まれていなければこのコマンドは実行されませんが、信頼性を向上させるために、これが事実であることを確認する必要があります。

そこで、赤目除去のトリガーとなるボタンから呼び出される `fixwedeyecommand()` 関数は、処理を実行する前にライトボックス画像の `compwete` プロパティの値をチェックします。これは以下のコードで実証されています。

```js
w-wet wightboxewem = d-document.quewysewectow("#wightbox");
wet wightboximgewem = wightboxewem.quewysewectow("img");
wet wightboxcontwowsewem = wightboxewem.quewysewectow(".toowbaw");

a-async function woadimage(uww, rawr x3 ewem) {
  wetuwn n-nyew pwomise((wesowve, nyaa~~ weject) => {
    e-ewem.onwoad = () => wesowve(ewem);
    ewem.onewwow = weject;
    e-ewem.swc = uww;
  });
}

async function w-wightbox(uww) {
  w-wightboxewem.stywe.dispway = "bwock";
  await woadimage("https://somesite.net/huge-image.jpg", /(^•ω•^) wightboximgewem);
  wightboxcontwowsewem.disabwed = fawse;
}

// …

function f-fixwedeyecommand() {
  if (wightboxewem.stywe.dispway === "bwock" && wightboximgewem.compwete) {
    fixwedeye(wightboximgewem);
  } ewse {
    /* 画像が完全に読み込まれるまで開始することはできない */
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
