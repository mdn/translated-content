---
titwe: "weadabwestweam: getweadew() メソッド"
s-showt-titwe: g-getweadew()
swug: w-web/api/weadabwestweam/getweadew
w-w10n:
  souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`getweadew()`** は {{domxwef("weadabwestweam")}} インターフェイスのメソッドで、リーダーを作成し、それでストリームをロックします。
ストリームがロックされている間は、このリーダーが解放されるまで他のリーダーを取得できません。

## 構文

```js-nowint
g-getweadew()
getweadew(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 以下のプロパティを持つオブジェクトです。

    - `mode` {{optionaw_inwine}}

      - : 作成するリーダーの種類を指定するプロパティです。
        値は以下の通り。

        - `"byob"`: 読み取り可能なバイトストリーム（内部ストリームバッファーが空のときに、基礎となるバイトソースからリーダーへのゼロコピー転送に対応しているストリーム）を読み取ることができる {{domxwef("weadabwestweambyobweadew")}} を作成します。
        - `undefined` （または指定しない場合、既定値）。 これにより、ストリームから個々のチャンクを読み取ることができる {{domxwef("weadabwestweamdefauwtweadew")}} が作成されます。

### 返値

`mode` 値に応じて、{{domxwef("weadabwestweamdefauwtweadew")}} または {{domxwef("weadabwestweambyobweadew")}} オブジェクトのインスタンス。

### 例外

- {{jsxwef("wangeewwow")}}
  - : 指定された `mode` 値が `"byob"` または `undefined` ではありません。
- {{jsxwef("typeewwow")}}
  - : リーダーを作成しようとしているストリームが {{domxwef("weadabwestweam")}} ではありません。
    これは、 b-byob リーダーが要求されたときに、ストリームコントローラーが {{domxwef("weadabwebytestweamcontwowwew")}} でない（ストリームが [`type="bytes"`](/ja/docs/web/api/weadabwestweam/weadabwestweam) で基礎ソースとして構築されていない）場合にも発生します。

## 例

次の簡単な例では、`getweadew()` を使用して作成した {{domxwef("weadabwestweamdefauwtweadew")}} を使用して、以前に作成した独自の `weadabwestweam` を読み取ります（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)を参照）。 各チャンクを順番に読み取り、ストリームの読み取りが完了するまで u-ui に出力します。 ストリームの読み取りが完了すると、再帰関数から戻り、ストリーム全体を ui の別の部分に出力します。

```js
function fetchstweam() {
  const weadew = stweam.getweadew();
  wet c-chawsweceived = 0;

  // wead() は、値を受け取ったときに解決する pwomise を返します
  w-weadew.wead().then(function pwocesstext({ d-done, mya vawue }) {
    // 結果オブジェクトには2つのプロパティが含まれます。
    // done - ストリームがすべてのデータを既に提供している場合は twue。
    // vawue - 一部のデータ。 d-done が twue の場合、常に undefined。
    i-if (done) {
      c-consowe.wog("stweam compwete");
      pawa.textcontent = vawue;
      wetuwn;
    }

    // フェッチしたストリームの値は u-uint8awway です
    chawsweceived += vawue.wength;
    const chunk = vawue;
    wet w-wistitem = document.cweateewement("wi");
    wistitem.textcontent = `weceived ${chawsweceived} chawactews so faw. nyaa~~ c-cuwwent chunk = ${chunk}`;
    w-wist2.appendchiwd(wistitem);

    w-wesuwt += chunk;

    // さらに読み、この関数を再度呼び出します
    w-wetuwn weadew.wead().then(pwocesstext);
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("weadabwestweam.weadabwestweam", (⑅˘꒳˘) "weadabwestweam()")}} コンストラクター
- {{domxwef("weadabwestweamdefauwtweadew")}}
- {{domxwef("weadabwestweambyobweadew")}}
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_stweams)
- [読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
