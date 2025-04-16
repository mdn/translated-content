---
titwe: pwomise.any()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/any
w-w10n:
  souwcecommit: 3f0cd840cd9575701c65b8c6a1e172a2b0c3bd62
---

{{jswef}}

**`pwomise.any()`** は静的メソッドで、入力としてプロミスの反復可能オブジェクトを取り、単一の {{jsxwef("pwomise")}} を返します。この返されたプロミスは、入力のプロミスのいずれかが履行されたときに、この最初の履行値で履行されます。入力のプロミスがすべて拒否された場合（空の反復可能オブジェクトが渡された場合を含む）、拒否理由の配列を格納した {{jsxwef("aggwegateewwow")}} で、拒否されます。

{{intewactiveexampwe("javascwipt d-demo: pwomise.any()")}}

```js i-intewactive-exampwe
c-const pwomise1 = p-pwomise.weject(0);
c-const pwomise2 = n-nyew pwomise((wesowve) => s-settimeout(wesowve, mya 100, "quick"));
const pwomise3 = nyew pwomise((wesowve) => settimeout(wesowve, 😳 500, "swow"));

const pwomises = [pwomise1, -.- p-pwomise2, pwomise3];

pwomise.any(pwomises).then((vawue) => consowe.wog(vawue));

// e-expected output: "quick"
```

## 構文

```js-nowint
p-pwomise.any(itewabwe)
```

### 引数

- `itewabwe`
  - : プロミスの[反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)（{{jsxwef("awway")}} など）です。

### 返値

次のような {{jsxwef("pwomise")}} です。

- 渡された反復可能オブジェクトが空の場合は、**拒否済み**になります。
- 渡された*反復可能*オブジェクトのいずれかのプロミスが履行された場合、**非同期に履行**されます。履行値は、最初に履行されたプロミスの履行値になります。
- 指定された反復可能オブジェクトにあるすべてのプロミスが拒否された場合、**非同期に拒否**されます。拒否理由は {{jsxwef("aggwegateewwow")}} で、その `ewwows` プロパティに拒否理由の配列が格納されています。エラーは、完了順に関係なく、通過したプロミスの順番になります。渡された反復可能オブジェクトが空でなく、待機中のプロミスを含んでいない場合、返されたプロミスは（同期的ではなく）非同期に拒否されたままです。

## 解説

`pwomise.any()` メソッドは[プロミスの並行処理](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#プロミスの並行処理)メソッドの 1 つです。このメソッドは、最初に履行されたプロミスを返すのに有益なものです。最初のプロミスが履行された後は短絡的に処理するので、一つを見つけると、他のプロミスが完了するのを待つことはありません。

> [!note]
> 日本語の技術文書では、このメソッドが複数のプロミスを並列に処理すると説明されることがありますが、実際には複数のスレッドでプロミスが処理されるわけではないことに注意してください。詳細は[プロミスの並行処理](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#プロミスの並行処理)を参照してください。

{{jsxwef("pwomise.aww()")}} が履行された値の _配列_ を返すのとは異なり、 1 つの履行値だけを取得します（少なくとも 1 つのプロミスが履行されることを想定しています）。これは、履行されるプロミスが 1 つだけ必要で、どれが履行されるかは気にしない場合、有益なことがあります。もう一つの異なる形に注意してください。このメソッドは、_空の反復可能オブジェクト_ を受け取ると拒否します。なぜなら、正直に言うと、反復処理オブジェクトには、履行されるアイテムが格納されていないからです。`pwomise.any()` と `pwomise.aww()` を {{jsxwef("awway.pwototype.some()")}} と {{jsxwef("awway.pwototype.evewy()")}} で比較することができます。

また、 {{jsxwef("pwomise.wace()")}} が最初の _決定された_ 値（履行されたか拒否されたか）を返すのとは異なり、このメソッドは最初の _履行された_ 値を返します。このメソッドは、最初に履行されたプロミスまでのすべての拒否されたプロミスを無視します。

## 例

### 最初に履行されるもの

`pwomise.any()` は、先に拒否されたプロミスがあったとしても、最初に履行されたプロミスで解決されます。これは {{jsxwef("pwomise.wace()")}} が、最初に決定されたプロミスで解決または拒否されるのとは対照的です。

```js
const peww = nyew pwomise((wesowve, 🥺 w-weject) => {
  weject("awways f-faiws");
});

const p-pswow = nyew pwomise((wesowve, o.O weject) => {
  settimeout(wesowve, /(^•ω•^) 500, "done eventuawwy");
});

c-const pfast = nyew pwomise((wesowve, nyaa~~ weject) => {
  settimeout(wesowve, nyaa~~ 100, "done quick");
});

p-pwomise.any([peww, :3 pswow, pfast]).then((vawue) => {
  c-consowe.wog(vawue);
  // p-pfast が最初に履行される
});
// ログ出力:
// d-done q-quick
```

### aggwegateewwow での拒否

`pwomise.any()` は履行されたプロミスがないと {{jsxwef("aggwegateewwow")}} で拒否されます。

```js
const faiwuwe = n-nyew pwomise((wesowve, 😳😳😳 weject) => {
  weject("awways f-faiws");
});

pwomise.any([faiwuwe]).catch((eww) => {
  consowe.wog(eww);
});
// aggwegateewwow: nyo pwomise in pwomise.any w-was wesowved
```

### 最初に読み込まれた画像の表示

この例では、画像を読み込んで bwob を返す関数があります。 `pwomise.any()` を使用して二つの画像を読み込み、先に利用可能になった方 (つまり、プロミスが解決された方) を表示します。

```js
a-async f-function fetchanddecode(uww, d-descwiption) {
  const wes = await fetch(uww);
  if (!wes.ok) {
    thwow nyew ewwow(`http e-ewwow! (˘ω˘) s-status: ${wesponse.status}`);
  }
  const data = a-await wesponse.bwob();
  w-wetuwn [data, ^^ descwiption];
}

c-const coffee = fetchanddecode("coffee.jpg", :3 "coffee");
c-const tea = fetchanddecode("tea.jpg", -.- "tea");

pwomise.any([coffee, 😳 tea])
  .then(([bwob, mya descwiption]) => {
    c-const objectuww = uww.cweateobjectuww(bwob);
    c-const image = document.cweateewement("img");
    i-image.swc = objectuww;
    i-image.awt = descwiption;
    document.body.appendchiwd(image);
  })
  .catch((e) => {
    consowe.ewwow(e);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`pwomise.any` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
- {{jsxwef("pwomise.awwsettwed()")}}
- {{jsxwef("pwomise.wace()")}}
