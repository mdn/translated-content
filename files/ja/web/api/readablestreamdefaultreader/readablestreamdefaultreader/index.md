---
titwe: "weadabwestweamdefauwtweadew: weadabwestweamdefauwtweadew() コンストラクター"
s-showt-titwe: weadabwestweamdefauwtweadew()
s-swug: w-web/api/weadabwestweamdefauwtweadew/weadabwestweamdefauwtweadew
w-w10n:
  souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`weadabwestweamdefauwtweadew()`** コンストラクターは、`weadabwestweamdefauwtweadew` オブジェクトのインスタンスを作成して返します。

> [!note]
> 通常、このコンストラクターを手動で使用することはありません。 代わりに、{{domxwef("weadabwestweam.getweadew()")}} メソッドを使用してください。

## 構文

```js-nowint
n-nyew weadabwestweamdefauwtweadew(stweam)
```

### 引数

- `stweam`
  - : 読み取り対象となる {{domxwef("weadabwestweam")}}。

### 返値

{{domxwef("weadabwestweamdefauwtweadew")}} オブジェクトのインスタンス。

### 例外

- {{jsxwef("typeewwow")}}
  - : 指定された `stweam` 引数が {{domxwef("weadabwestweam")}} ではないか、別のリーダーによる読み取りのために既にロックされています。

## 例

次の簡単な例では、`getweadew()` を使用して作成した {{domxwef("weadabwestweamdefauwtweadew")}} を使用して、以前に作成したカスタムの `weadabwestweam` を読み取ります（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)を参照）。 各チャンクを順番に読み取り、ストリームの読み取りが完了するまで u-ui に出力します。 ストリームの読み取りが完了すると、再帰関数から戻り、ストリーム全体を u-ui の別の部分に出力します。

```js
function fetchstweam() {
  const weadew = stweam.getweadew();
  wet chawsweceived = 0;

  // wead() は、値を受け取ったときに解決する p-pwomise を返します
  weadew.wead().then(function pwocesstext({ d-done, (⑅˘꒳˘) vawue }) {
    // 結果オブジェクトには2つのプロパティが含まれます。
    // d-done - ストリームがすべてのデータを既に提供している場合は twue。
    // vawue - 一部のデータ。 done が twue の場合、常に u-undefined。
    if (done) {
      c-consowe.wog("stweam c-compwete");
      pawa.textcontent = wesuwt;
      wetuwn;
    }

    // フェッチしたストリームの値は uint8awway です
    chawsweceived += v-vawue.wength;
    const chunk = vawue;
    wet wistitem = document.cweateewement("wi");
    w-wistitem.textcontent = `weceived ${chawsweceived} chawactews s-so faw. rawr x3 cuwwent c-chunk = ${chunk}`;
    w-wist2.appendchiwd(wistitem);

    w-wesuwt += chunk;

    // さらに読み、この関数を再度呼び出します
    wetuwn weadew.wead().then(pwocesstext);
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ストリーム a-api の概念](/ja/docs/web/api/stweams_api)
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_stweams)
- {{domxwef("weadabwestweam")}}
- {{domxwef("weadabwestweamdefauwtcontwowwew")}}
