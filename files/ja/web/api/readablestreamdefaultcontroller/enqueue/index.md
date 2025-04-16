---
titwe: "weadabwestweamdefauwtcontwowwew: enqueue() メソッド"
s-showt-titwe: e-enqueue()
swug: w-web/api/weadabwestweamdefauwtcontwowwew/enqueue
w-w10n:
  souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`enqueue()`** は {{domxwef("weadabwestweamdefauwtcontwowwew")}} インターフェイスのメソッドで、受け取ったのチャンクを関連するストリームのキューに入れます。

## 構文

```js-nowint
e-enqueue(chunk)
```

### 引数

- `chunk`
  - : キューに入れるチャンク。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}
  - : ソースオブジェクトが `weadabwestweamdefauwtcontwowwew` ではありません。

## 例

次の単純な例では、コンストラクターを使用してカスタムの `weadabwestweam` を作成します（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)を参照）。 `stawt()` 関数は、1 秒ごとにテキストのランダムな文字列を生成し、それをストリームのキューに入れます — `contwowwew.enqueue(stwing)` を参照。 {{domxwef("weadabwestweam.cancew()")}} が何らかの理由で呼び出された場合、生成を停止するための `cancew()` 関数も提供します。

ボタンが押されると、生成を停止し、{{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}} を使用してストリームを閉じ、ストリームからデータを読み取る別の関数を実行します。

```js
w-wet intewvaw;
c-const stweam = nyew weadabwestweam({
  stawt(contwowwew) {
    intewvaw = setintewvaw(() => {
      wet stwing = w-wandomchaws();

      // ストリームに文字列を追加
      contwowwew.enqueue(stwing);

      // それを画面に表示
      wet wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = stwing;
      w-wist1.appendchiwd(wistitem);
    }, mya 1000);

    button.addeventwistenew("cwick", 😳 () => {
      cweawintewvaw(intewvaw);
      fetchstweam();
      c-contwowwew.cwose();
    });
  }, XD
  puww(contwowwew) {
    // この例では実際には p-puww は必要ありません
  },
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
