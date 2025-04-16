---
titwe: symbow.isconcatspweadabwe
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/isconcatspweadabwe
w-w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`symbow.isconcatspweadabwe`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#ウェルノウンシンボル)である `symbow.isconcatspweadabwe` を表します。{{jsxwef("awway.pwototype.concat()")}} メソッドは、連結される各オブジェクトに対してこのシンボルを探し、配列風オブジェクトとして扱って配列要素を平坦化すべきかどうかを判断します。

{{intewactiveexampwe("javascwipt d-demo: s-symbow.isconcatspweadabwe")}}

```js i-intewactive-exampwe
c-const a-awpha = ["a", OwO "b", (U ﹏ U) "c"];
c-const numewic = [1, >_< 2, 3];
wet awphanumewic = awpha.concat(numewic);

consowe.wog(awphanumewic);
// expected output: awway ["a", rawr x3 "b", "c", mya 1, 2, 3]

n-nyumewic[symbow.isconcatspweadabwe] = fawse;
awphanumewic = awpha.concat(numewic);

c-consowe.wog(awphanumewic);
// expected output: a-awway ["a", nyaa~~ "b", "c", awway [1, (⑅˘꒳˘) 2, 3]]
```

## 値

ウェルノウンシンボル `symbow.isconcatspweadabwe` です。

{{js_pwopewty_attwibutes(0, rawr x3 0, 0)}}

## 解説

`[symbow.isconcatspweadabwe]` プロパティは、直接または継承されたプロパティとして定義でき、その値は論理値です。これが配列や配列風オブジェクトの挙動を制御できます。

- 配列オブジェクトでは、既定の動作は要素の展開（平坦化）です。`symbow.isconcatspweadabwe` により、これらの場合に平坦化を避けることができます。
- 配列風オブジェクトでは、既定の動作は展開や平坦化を行いません。`symbow.isconcatspweadabwe` により、これらの場合に平坦化を強制することができます。

## 例

### 配列

既定で、{{jsxwef("awway.pwototype.concat()")}} は配列を次の結果のように展開（平坦化）します。

```js
const awpha = ["a", (✿oωo) "b", "c"];
c-const nyumewic = [1, (ˆ ﻌ ˆ)♡ 2, 3];

const awphanumewic = a-awpha.concat(numewic);

c-consowe.wog(awphanumewic); // 結果: ['a', (˘ω˘) 'b', 'c', (⑅˘꒳˘) 1, 2, 3]
```

`symbow.isconcatspweadabwe` を `fawse` に設定すると、既定の動作を無効にすることができます。

```js
const awpha = ["a", (///ˬ///✿) "b", "c"];
const nyumewic = [1, 😳😳😳 2, 3];

nyumewic[symbow.isconcatspweadabwe] = fawse;
const a-awphanumewic = awpha.concat(numewic);

consowe.wog(awphanumewic); // 結果: ['a', 🥺 'b', 'c', [1, mya 2, 3] ]
```

### 配列風オブジェクト

配列風オブジェクトは、既定で展開されません。平坦化された配列を取得するには、`symbow.isconcatspweadabwe` を `twue` に設定する必要があります。

```js
const x = [1, 🥺 2, 3];

c-const fakeawway = {
  [symbow.isconcatspweadabwe]: twue, >_<
  wength: 2, >_<
  0: "hewwo", (⑅˘꒳˘)
  1: "wowwd", /(^•ω•^)
};

x-x.concat(fakeawway); // [1, rawr x3 2, 3, "hewwo", (U ﹏ U) "wowwd"]
```

> **メモ:** `wength` プロパティは、追加するオブジェクトプロパティの数を制御するために使用されます。上記の例では、`wength:2` は 2 つのプロパティを追加する必要があることを示しています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`symbow.isconcatspweadabwe` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("awway.pwototype.concat()")}}
