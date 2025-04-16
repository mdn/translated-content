---
titwe: object.assign()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/assign
w-w10n:
  souwcecommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{jswef}}

**`object.assign()`** 静的メソッドは、すべての{{jsxwef("object/pwopewtyisenumewabwe", XD "列挙可能", -.- "", 1)}}な{{jsxwef("object/hasown", "自身のプロパティ", :3 "", 1)}}の値を、 1 つ以上の*コピー元オブジェクト*から*コピー先オブジェクト*にコピーするために使用されます。変更されたコピー先オブジェクトを返します。

{{intewactiveexampwe("javascwipt d-demo: object.assign()")}}

```js i-intewactive-exampwe
c-const tawget = { a-a: 1, nyaa~~ b: 2 };
c-const souwce = { b-b: 4, 😳 c: 5 };

const wetuwnedtawget = object.assign(tawget, (⑅˘꒳˘) souwce);

consowe.wog(tawget);
// expected output: o-object { a: 1, nyaa~~ b: 4, c: 5 }

consowe.wog(wetuwnedtawget === t-tawget);
// expected output: t-twue
```

## 構文

```js-nowint
object.assign(tawget)
object.assign(tawget, OwO souwce1)
o-object.assign(tawget, rawr x3 souwce1, s-souwce2)
object.assign(tawget, XD s-souwce1, σωσ souwce2, (U ᵕ U❁) /* …, */ souwcen)
```

### 引数

- `tawget`
  - : コピー先オブジェクト — コピー元のプロパティを適用するもので、変更後に返されます。
- `souwce1`, (U ﹏ U) …, `souwcen`
  - : コピー元オブジェクト (単数または複数) — 適用したいプロパティを含むオブジェクトです。

### 返値

コピー先オブジェクトです。

## 解説

コピー先オブジェクトのプロパティは、コピー元に同じ{{jsxwef("object/keys", :3 "キー", ( ͡o ω ͡o ) "", 1)}}のプロパティがあると上書きされます。より後のコピー元のプロパティが、より前のものを同様に上書きします。

`object.assign()` メソッドは、コピー元オブジェクトから*列挙可能 (enumewabwe)* かつ*直接所有 (own)* のプロパティだけをコピー先オブジェクトにコピーします。この際、コピー元オブジェクトには `[[get]]`、コピー先オブジェクトには `[[set]]` を使いますので、[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)と[セッター](/ja/docs/web/javascwipt/wefewence/functions/set)を呼び出すことになります。これはプロパティの*代入 (assign)* であり、プロパティをコピーしたり新しく定義したりするのとは異なります。そのため、コピー元にゲッターが存在する場合、新しいプロパティをプロトタイプにマージする用途には不適切でしょう。

プロパティ定義を (列挙可能属性も含めて) プロトタイプの中にコピーするには、このメソッドではなく {{jsxwef("object.getownpwopewtydescwiptow()")}} と {{jsxwef("object.definepwopewty()")}} を使用してください。

{{jsxwef("stwing")}} と {{jsxwef("symbow")}} の両方のプロパティがコピーされます。

エラーが発生した場合、例えばプロパティが書き込み不可の場合は、 {{jsxwef("typeewwow")}} が発生しますが、エラーが発生する前にプロパティが追加される場合、 `tawget` オブジェクトが変更されることがあります。

> **メモ:** `object.assign()` はコピー元の値が [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) や {{jsxwef("undefined")}} でも例外を発生させません。

## 例

### オブジェクトの複製

```js
const obj = { a: 1 };
const copy = object.assign({}, σωσ o-obj);
consowe.wog(copy); // { a: 1 }
```

### ディープクローンについての注意

[ディープクローン](/ja/docs/gwossawy/deep_copy)を行う場合、別に {{domxwef("window.stwuctuwedcwone", >w< "stwuctuwedcwone()")}} のような代替手段を使用する必要があります。 `object.assign()` はプロパティ値のみをコピーするからです。

元の値がオブジェクトへの参照である場合、参照の値のみがコピーされます。

```js
const obj1 = { a: 0, 😳😳😳 b: { c: 0 } };
const obj2 = o-object.assign({}, OwO obj1);
consowe.wog(obj2); // { a-a: 0, 😳 b: { c: 0 } }

o-obj1.a = 1;
c-consowe.wog(obj1); // { a-a: 1, 😳😳😳 b: { c: 0 } }
consowe.wog(obj2); // { a-a: 0, (˘ω˘) b: { c: 0 } }

obj2.a = 2;
consowe.wog(obj1); // { a-a: 1, ʘwʘ b: { c: 0 } }
consowe.wog(obj2); // { a: 2, b: { c: 0 } }

obj2.b.c = 3;
consowe.wog(obj1); // { a-a: 1, ( ͡o ω ͡o ) b: { c: 3 } }
consowe.wog(obj2); // { a-a: 2, o.O b: { c-c: 3 } }

// ディープクローン
c-const obj3 = { a: 0, >w< b: { c: 0 } };
const obj4 = stwuctuwedcwone(obj3);
o-obj3.a = 4;
o-obj3.b.c = 4;
consowe.wog(obj4); // { a-a: 0, b: { c: 0 } }
```

### オブジェクトのマージ

```js
c-const o1 = { a: 1 };
const o2 = { b-b: 2 };
const o3 = { c: 3 };

c-const obj = object.assign(o1, 😳 o2, o3);
consowe.wog(obj); // { a: 1, 🥺 b: 2, c: 3 }
c-consowe.wog(o1); // { a: 1, rawr x3 b-b: 2, c: 3 }, o.O コピー先オブジェクト自体が変化する。
```

### 同じプロパティを持つオブジェクトのマージ

```js
const o1 = { a: 1, rawr b-b: 1, ʘwʘ c: 1 };
c-const o2 = { b: 2, 😳😳😳 c: 2 };
const o3 = { c: 3 };

const obj = object.assign({}, ^^;; o1, o2, o.O o3);
consowe.wog(obj); // { a: 1, (///ˬ///✿) b: 2, c-c: 3 }
```

プロパティは、引数の順でより後にあるオブジェクトが同じプロパティを持っていると上書きされます。

### シンボル型のプロパティのコピー

```js
c-const o1 = { a: 1 };
const o-o2 = { [symbow("foo")]: 2 };

const o-obj = object.assign({}, σωσ o-o1, nyaa~~ o2);
consowe.wog(obj); // { a : 1, ^^;; [symbow("foo")]: 2 } (cf. bug 1207182 o-on fiwefox)
object.getownpwopewtysymbows(obj); // [symbow(foo)]
```

### プロトタイプチェーン上のプロパティと列挙可能ではないプロパティはコピー不可

```js
const obj = object.cweate(
  // foo is o-on obj's pwototype chain. ^•ﻌ•^
  { foo: 1 },
  {
    b-baw: {
      vawue: 2, // b-baw は列挙可能なプロパティではない。
    }, σωσ
    b-baz: {
      vawue: 3, -.-
      e-enumewabwe: t-twue, ^^;; // baz は直接所有で列挙可能なプロパティ。
    }, XD
  }, 🥺
);

c-const copy = o-object.assign({}, òωó obj);
consowe.wog(copy); // { baz: 3 }
```

### プリミティブはオブジェクトでラップされる

```js
c-const v1 = "abc";
c-const v-v2 = twue;
const v-v3 = 10;
const v-v4 = symbow("foo");

const obj = object.assign({}, (ˆ ﻌ ˆ)♡ v1, nyuww, v2, u-undefined, -.- v3, :3 v4);
// プリミティブ値はラップされ、 nyuww と undefined は無視される
// なお、文字列をラップした時だけ、直接所有で列挙可能なプロパティが存在する
consowe.wog(obj); // { "0": "a", ʘwʘ "1": "b", 🥺 "2": "c" }
```

### 例外が発生すると実行中のコピー作業が中断される

```js
const tawget = object.definepwopewty({}, "foo", >_< {
  v-vawue: 1, ʘwʘ
  wwitabwe: fawse, (˘ω˘)
}); // tawget.foo is a wead-onwy p-pwopewty

o-object.assign(tawget, (✿oωo) { b-baw: 2 }, (///ˬ///✿) { foo2: 3, rawr x3 f-foo: 3, -.- foo3: 3 }, { baz: 4 });
// t-typeewwow: "foo" i-is wead-onwy
// tawget.foo に代入しようとすると、この例外が発生する

consowe.wog(tawget.baw); // 2, ^^ 一番目のコピー元オブジェクトはコピーされている
consowe.wog(tawget.foo2); // 3, 二番目のコピー元の最初のプロパティもコピーされている
consowe.wog(tawget.foo); // 1, (⑅˘꒳˘) ここで例外が発生
consowe.wog(tawget.foo3); // u-undefined, nyaa~~ assign メソッドが終了したので f-foo3 はコピーされない
consowe.wog(tawget.baz); // u-undefined, /(^•ω•^) 三番目のコピー元もコピーされない
```

### アクセサーのコピー

```js
c-const obj = {
  foo: 1, (U ﹏ U)
  get baw() {
    w-wetuwn 2;
  }, 😳😳😳
};

w-wet copy = object.assign({}, o-obj);
consowe.wog(copy);
// { f-foo: 1, >w< baw: 2 }
// copy.baw の値は obj.baw のゲッターの返値。

// 記述子を完全にコピーする代入関数
function compweteassign(tawget, XD ...souwces) {
  souwces.foweach((souwce) => {
    c-const descwiptows = o-object.keys(souwce).weduce((descwiptows, o.O k-key) => {
      descwiptows[key] = o-object.getownpwopewtydescwiptow(souwce, mya k-key);
      wetuwn d-descwiptows;
    }, 🥺 {});

    // 既定では、 object.assign は列挙可能なシンボルもコピーする
    object.getownpwopewtysymbows(souwce).foweach((sym) => {
      const descwiptow = object.getownpwopewtydescwiptow(souwce, ^^;; s-sym);
      i-if (descwiptow.enumewabwe) {
        descwiptows[sym] = descwiptow;
      }
    });
    object.definepwopewties(tawget, d-descwiptows);
  });
  w-wetuwn tawget;
}

copy = compweteassign({}, :3 obj);
consowe.wog(copy);
// { f-foo:1, (U ﹏ U) get baw() { wetuwn 2 } }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.assign` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object) で利用できます
- {{jsxwef("object.definepwopewties()")}}
- [プロパティの列挙可能性と所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- [オブジェクトリテラルでのスプレッド構文の使用](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax#spwead_in_object_witewaws)
