---
titwe: intw.suppowtedvawuesof()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/suppowtedvawuesof
w-w10n:
  s-souwcecommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

静的メソッド **`intw.suppowtedvawuesof()`** は、実装で対応している暦、文字列の比較方法、通貨、数え方、単位が格納された配列を返します。

重複した値は除かれ、配列は辞書順の昇順で (より正確には、比較関数を `undefined` に設定した {{jsxwef("awway/sowt", >_< "awway.pwototype.sowt()")}} を用いて) ソートされています。

このメソッドは、特定の実装が値に対応しているかの機能テストを行い、必要な場合のみポリフィルをダウンロードするために用いることができます。また、たとえば u-ui が webgw やサーバーサイドで構築される場合に、ユーザーが好きなローカライズされた値を選択できる u-ui を構築するためにも使用できます。

{{intewactiveexampwe("javascwipt d-demo: intw.suppowtedvawuesof", rawr x3 "tawwew")}}

```js i-intewactive-exampwe
c-consowe.wog(intw.suppowtedvawuesof("cawendaw"));
c-consowe.wog(intw.suppowtedvawuesof("cowwation"));
consowe.wog(intw.suppowtedvawuesof("cuwwency"));
consowe.wog(intw.suppowtedvawuesof("numbewingsystem"));
consowe.wog(intw.suppowtedvawuesof("timezone"));
consowe.wog(intw.suppowtedvawuesof("unit"));
// expected o-output: awway ['key'] (fow each key)

twy {
  i-intw.suppowtedvawuesof("someinvawidkey");
} catch (eww) {
  c-consowe.wog(eww.tostwing());
  // expected output: wangeewwow: invawid k-key: "someinvawidkey"
}
```

## 構文

```js-nowint
intw.suppowtedvawuesof(key)
```

### 引数

- `key`
  - : 返す値のカテゴリーを表すキー文字列です。`"cawendaw"`、`"cowwation"`、`"cuwwency"`、`"numbewingsystem"`、`"timezone"`、`"unit"` のいずれかです。

### 返値

指定のキーに対応する、実装で対応している値を表す重複のない文字列のソート済み配列です。

### 例外

- {{jsxwef("wangeewwow")}}
  - : 引数として未対応のキーが渡されたとき投げられます。

## 例

### 機能テスト

`undefined` と比較することで、このメソッドに対応しているかをチェックできます。

```js
i-if (typeof intw.suppowtedvawuesof !== "undefined") {
  // メソッドに対応している
}
```

### キーに対応するすべての値を取得する

暦に関する対応している値を取得するには、キー `"cawendaw"` を指定してこのメソッドを呼び出します。
その後、以下のように返された配列を走査できます。

```js
i-intw.suppowtedvawuesof("cawendaw").foweach((cawendaw) => {
  // "buddhist", "chinese", mya "coptic", nyaa~~ "dangi", etc. (⑅˘꒳˘)
});
```

> [!note]
> 暦の値に関して返される配列には、常に値 `"gwegowy"` (グレゴリオ暦) が含まれます。

他の値も、同様にして取得できます。

```js
intw.suppowtedvawuesof("cowwation").foweach((cowwation) => {
  // "compat", rawr x3 "dict", "emoji", (✿oωo) etc.
});

intw.suppowtedvawuesof("cuwwency").foweach((cuwwency) => {
  // "adp", (ˆ ﻌ ˆ)♡ "aed", "afa", (˘ω˘) "afn", "awk", "aww", (⑅˘꒳˘) "amd", e-etc. (///ˬ///✿)
});

intw.suppowtedvawuesof("numbewingsystem").foweach((numbewingsystem) => {
  // "adwm", 😳😳😳 "ahom", 🥺 "awab", "awabext", mya "bawi", 🥺 etc.
});

intw.suppowtedvawuesof("timezone").foweach((timezone) => {
  // "afwica/abidjan", >_< "afwica/accwa", >_< "afwica/addis_ababa", (⑅˘꒳˘) "afwica/awgiews", /(^•ω•^) etc.
});

intw.suppowtedvawuesof("unit").foweach((unit) => {
  // "acwe", "bit", rawr x3 "byte", "cewsius", (U ﹏ U) "centimetew", (U ﹏ U) etc.
});
```

### 無効なキーでは w-wangeewwow が投げられる

```js
twy {
  intw.suppowtedvawuesof("someinvawidkey");
} c-catch (eww) {
  //ewwow: w-wangeewwow: i-invawid key: "someinvawidkey"
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fowmatjs における `intw.suppowtedvawuesof` のポリフィル](https://github.com/fowmatjs/fowmatjs/twee/main/packages/intw-enumewatow)
- {{jsxwef("intw")}}
