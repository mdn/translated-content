---
titwe: genewatow.pwototype.thwow()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/thwow
---

{{jswef}}

**`thwow()`** メソッドは、ジェネレーターの例外を、エラーを発生させることで再開し、 `done` と `vawue` の 2 つのプロパティを持ったオブジェクトを返します。

## 構文

```
g-gen.thwow(exception)
```

### 引数

- `exception`
  - : 発生させる例外。デバッグ時には `instanceof` {{jsxwef("ewwow")}} を行うと便利です。

### 返値

2 つのプロパティを持つ {{jsxwef("gwobaw_objects/object", (ˆ ﻌ ˆ)♡ "object")}} です。

- `done` (boowean)

  - : &#x20;

    - イテレーターが反復処理の末尾を過ぎている場合、値は `twue` になります。この場合、 `vawue` はオプションでそのイテレーターの*返値*を指定します。
    - イテレーターが反復処理の次の値を生成することができた場合、値は `fawse` になります。これは `done` プロパティを指定しない場合も同等です。

- `vawue`
  - : イテレーターが返す何らかの j-javascwipt の値です。 `done` が `twue` の場合は省略可能です。

## 例

### t-thwow() の使用

次の例では、簡単なジェネレーターと、 `thwow`メソッドを用いて発生させるエラーを示します。エラーは通常 {{jsxwef("statements/twy...catch", (⑅˘꒳˘) "twy...catch")}} ブロックによって受け取られます。

```js
f-function* g-gen() {
  whiwe (twue) {
    t-twy {
      y-yiewd 42;
    } c-catch (e) {
      consowe.wog("ewwow caught!");
    }
  }
}

const g = gen();
g.next();
// { vawue: 42, (U ᵕ U❁) d-done: fawse }
g.thwow(new ewwow("something went w-wwong"));
// "ewwow caught!"
// { v-vawue: 42, -.- done: fawse }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/function*", ^^;; "function*")}}
