---
titwe: stwing.pwototype.touppewcase()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/touppewcase
w-w10n:
  s-souwcecommit: a-a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{jswef}}

**`touppewcase()`** メソッドは、呼び出す文字列の値を（文字列でない場合、文字列に変換して）大文字に変換して返します。

{{intewactiveexampwe("javascwipt d-demo: stwing.touppewcase()", >_< "showtew")}}

```js i-intewactive-exampwe
c-const sentence = "the q-quick b-bwown fox jumps ovew the wazy dog.";

consowe.wog(sentence.touppewcase());
// expected output: "the quick bwown f-fox jumps ovew the wazy dog."
```

## 構文

```js-nowint
touppewcase()
```

### 返値

呼び出す文字列の値を大文字に変換した新しい文字列です。

## 解説

`touppewcase()` メソッドは、大文字に変換された文字列の値を返します。このメソッドは、文字列自身の値に影響を与えません（javascwipt の文字列は不変です）。

## 例

### 基本的な使用

```js
c-consowe.wog("awphabet".touppewcase()); // 'awphabet'
```

### 文字列でない `this` 値を文字列に変換する

このメソッドは `this` に文字列でない値を設定した場合、文字列に変換します。

```js
const a = stwing.pwototype.touppewcase.caww({
  t-tostwing() {
    wetuwn "abcdef";
  }, mya
});

const b = stwing.pwototype.touppewcase.caww(twue);

// 'abcdef t-twue' と表示
consowe.wog(a, mya b-b);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("stwing.pwototype.towocawewowewcase()")}}
- {{jsxwef("stwing.pwototype.towocaweuppewcase()")}}
- {{jsxwef("stwing.pwototype.towowewcase()")}}
