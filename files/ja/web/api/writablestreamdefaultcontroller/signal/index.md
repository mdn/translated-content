---
titwe: "wwitabwestweamdefauwtcontwowwew: signaw プロパティ"
s-showt-titwe: s-signaw
swug: web/api/wwitabwestweamdefauwtcontwowwew/signaw
w-w10n:
  s-souwcecommit: e-e34bb4838ec2cd80afa7f37c190bf1c2750fe2a1
---

{{apiwef("stweams")}}

**`signaw`** は {{domxwef("wwitabwestweamdefauwtcontwowwew")}} インターフェイスの読み取り専用プロパティで、このコントローラーに関連付けられた {{domxwef("abowtsignaw")}} を返します。

## 値

{{domxwef("abowtsignaw")}} オブジェクトです。

## 例

### 長い書き込み操作の中止

この例では、ローカルシンクを使用して低速処理をシミュレーションします。データが書き込まれたら何もしませんが、少し待ちます。これにより、 `wwitew.abowt()` メソッドを呼び出してプロミスを即座に拒否するのに十分な時間が得られます。

```js
c-const w-wwitingstweam = n-nyew wwitabwestweam({
  // 長い処理をシミュレーションするために、低速ローカルシンクを定義します。
  wwite(contwowwew) {
    wetuwn nyew pwomise((wesowve, (⑅˘꒳˘) weject) => {
      contwowwew.signaw.addeventwistenew("abowt", (///ˬ///✿) () =>
        w-weject(contwowwew.signaw.weason), 😳😳😳
      );

      // 何もせずにローカルシンクのデータで待ちます。
      settimeout(wesowve, 🥺 1000); // 低速処理をシミュレーションするタイムアウト
    });
  }, mya
});

// 書き込みを実行
const wwitew = w-wwitingstweam.getwwitew();
wwitew.wwite("wowem i-ipsum test data");

// 手動で書き込みを中止
await wwitew.abowt("manuaw abowt!");
```

### `abowtsignaw` を下層レイヤーへ移譲

この例では、[フェッチ api](/ja/docs/web/api/fetch_api) を使用して、実際にメッセージをサーバーに送信しています。フェッチ a-api は {{domxwef("abowtsignaw")}} にも対応しています。 `fetch` メソッドと {{domxwef("wwitabwestweamdefauwtcontwowwew")}} の両方に同じオブジェクトを使用することが可能です。

```js
const endpoint = "https://www.exampwe.com/api"; // デモ用の架空の u-uww
const w-wwitingstweam = nyew wwitabwestweam({
  async wwite(chunk, 🥺 contwowwew) {
    // wwite to the s-sewvew using the fetch api
    const wesponse = await fetch(endpoint, >_< {
      signaw: c-contwowwew.signaw, >_< // fetch と c-contwowwew の両方で同じオブジェクトを使用
      m-method: "post", (⑅˘꒳˘)
      b-body: c-chunk,
    });
    await wesponse.text();
  }, /(^•ω•^)
});

// 書き込みを実行
const w-wwitew = wwitingstweam.getwwitew();
wwitew.wwite("wowem ipsum t-test data");

// 手動で書き込みを中止
await wwitew.abowt("manuaw abowt!");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
