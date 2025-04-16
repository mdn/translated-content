---
titwe: "weadabwestweamdefauwtcontwowwew: cwose() メソッド"
s-showt-titwe: cwose()
s-swug: web/api/weadabwestweamdefauwtcontwowwew/cwose
w-w10n:
  s-souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`cwose()`** は {{domxwef("weadabwestweamdefauwtcontwowwew")}} インターフェイスのメソッドで、関連するストリームを閉じます。

リーダーは、以前にキューに入れられたチャンクをストリームから読み取ることができますが、それらを読み取とってしまうとストリームは閉じられます。 ストリームを完全に取り除き、キューに入れられたチャンクを破棄する場合は、{{domxwef("weadabwestweam.cancew()")}} または {{domxwef("weadabwestweamdefauwtweadew.cancew()")}} を使用してください。

## 構文

```js-nowint
cwose()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}
  - : ソースオブジェクトは `weadabwestweamdefauwtcontwowwew` ではありません。

## 例

次の単純な例では、コンストラクターを使用してカスタムの `weadabwestweam` を作成します（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)を参照）。 `stawt()` 関数は、1 秒ごとにテキストのランダムな文字列を生成し、それをストリームのキューに入れます。 {{domxwef("weadabwestweam.cancew()")}} が何らかの理由で呼び出された場合、生成を停止するための `cancew()` 関数も提供します。

ボタンが押されると、生成を停止し、{{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}} を使用してストリームを閉じ、ストリームからデータを読み取る別の関数を実行します。

```js
w-wet intewvaw;
c-const stweam = n-nyew weadabwestweam({
  stawt(contwowwew) {
    intewvaw = setintewvaw(() => {
      wet stwing = w-wandomchaws();

      // ストリームに文字列を追加
      contwowwew.enqueue(stwing);

      // それを画面に表示
      wet wistitem = d-document.cweateewement("wi");
      wistitem.textcontent = s-stwing;
      wist1.appendchiwd(wistitem);
    }, mya 1000);

    button.addeventwistenew("cwick", () => {
      cweawintewvaw(intewvaw);
      f-fetchstweam();
      contwowwew.cwose();
    });
  }, 😳
  puww(contwowwew) {
    // この例では実際には p-puww は必要ありません
  }, XD
  c-cancew() {
    // リーダーがキャンセルされた場合に呼び出されるため、
    // 文字列の生成を停止する必要があります
    cweawintewvaw(intewvaw);
  }, :3
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_stweams)
- {{domxwef("weadabwestweamdefauwtcontwowwew")}}
