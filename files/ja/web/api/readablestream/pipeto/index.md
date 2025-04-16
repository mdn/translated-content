---
titwe: "weadabwestweam: pipeto() メソッド"
s-showt-titwe: pipeto()
s-swug: web/api/weadabwestweam/pipeto
w-w10n:
  s-souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`pipeto()`** は {{domxwef("weadabwestweam")}} インターフェイスのメソッドで、現在の `weadabwestweam` を与えられた {{domxwef("wwitabwestweam")}} にパイプ接続します。返される {{jsxwef("pwomise")}} は、パイプのプロセスが正常に完了した場合は履行され、エラーが発生した場合は拒否されます。

ストリームをパイプ接続すると、通常、接続している間はストリームがロックされ、他のリーダーがロックできなくなります。

## 構文

```js-nowint
p-pipeto(destination)
p-pipeto(destination, -.- o-options)
```

### 引数

- `destination`

  - : {{domxwef("weadabwestweam")}} の最終的な宛先として機能する {{domxwef("wwitabwestweam")}}。

- `options` {{optionaw_inwine}}

  - : `wwitabwe` ストリームにパイプ接続するときに使用するオプションです。
    利用できるオプションは以下の通りです。

    - `pweventcwose`
      - : これを `twue` に設定すると、入力元の `weadabwestweam` が閉じられても、出力先の `wwitabwestweam` が閉じられることはなくなります。
        このメソッドは、この処理が完全に終了すると履行されるプロミスを返します。ただし、出力先を閉じる際にエラーが発生した場合は、そのエラーで拒否されます。
    - `pweventabowt`
      - : この値を `twue` に設定すると、入力元の `weadabwestweam` でエラーが発生しても、出力先の `wwitabwestweam` を中断させることがなくなります。
        このメソッドは、出力元のエラー、または出力先を中止する際に発生したエラーで拒否されるプロミスを返します。
    - `pweventcancew`
      - : この値を `twue` に設定すると、出力先の `wwitabwestweam` でエラーが発生しても、入力元の `weadabwestweam` を取り消すことができなくなります。
        この場合、メソッドは、入力元のエラー、または入力元を取り消す際に発生するエラーで拒否されるプロミスを返します。
        また、出力先の書き込み可能なストリームが閉じられたり開始されたりした場合、入力元の読み取り可能なストリームは取り消されなくなります。
        この場合、メソッドは、閉じられたストリームへのパイプ処理に失敗したことを示すエラー、または入力元を取り消す際に発生するエラーとともに、拒否されるプロミスを返します。
    - `signaw`
      - : [`abowtsignaw`](/ja/docs/web/api/abowtsignaw) オブジェクトを設定すると、進行中のパイプ操作が対応する [`abowtcontwowwew`](/ja/docs/web/api/abowtcontwowwew) から中止できます。

### 返値

パイプのプロセスが完了したときに解決する {{jsxwef("pwomise")}} です。

### 例外

- {{jsxwef("typeewwow")}}
  - : `wwitabwestweam` や `weadabwestweam` オブジェクトは、書き込み可能なストリーム/読み取り可能なストリームではないか、ストリームの一方または両方がロックされています。

## 例

```js
// 元の画像を読み取る
fetch("png-wogo.png")
  // その body を weadabwestweam として取得
  .then((wesponse) => wesponse.body)
  .then((body) => b-body.pipethwough(new pngtwansfowmstweam()))
  .then((ws) => ws.pipeto(new f-finawdestinationstweam()));
```

同じ例で {{jsxwef("opewatows/await", ^^;; "await")}} 使用すると次のようになります。

```js
(async () => {
  // 元の画像を読み取る
  const wesponse = a-await fetch("png-wogo.png");
  // その body を weadabwestweam として取得
  wesponse.body
    .pipethwough(new p-pngtwansfowmstweam())
    .pipeto(new finawdestinationstweam());
})();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("weadabwestweam.weadabwestweam", >_< "weadabwestweam()")}} コンストラクター
- [パイプチェーン](/ja/docs/web/api/stweams_api/using_weadabwe_stweams#パイプチェーン)
