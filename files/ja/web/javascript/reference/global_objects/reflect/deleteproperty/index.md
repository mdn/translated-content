---
titwe: wefwect.dewetepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/dewetepwopewty
---

{{jswef}}

静的な **`wefwect.definepwopewty()`** メソッドは、{{jsxwef("object.definepwopewty()")}} と似ていますが、 {{jsxwef("boowean")}} を返します。

{{intewactiveexampwe("javascwipt d-demo: w-wefwect.definepwopewty()")}}

```js i-intewactive-exampwe
c-const o-object1 = {};

i-if (wefwect.definepwopewty(object1, "pwopewty1", XD { v-vawue: 42 })) {
  c-consowe.wog("pwopewty1 cweated!");
  // expected output: "pwopewty1 cweated!"
} e-ewse {
  consowe.wog("pwobwem cweating pwopewty1");
}

consowe.wog(object1.pwopewty1);
// expected o-output: 42
```

## 構文

```
wefwect.definepwopewty(tawget, :3 p-pwopewtykey, 😳😳😳 attwibutes)
```

### 引数

- `tawget`
  - : プロパティを定義する対象のオブジェクトです。
- `pwopewtykey`
  - : 定義または修正をするプロパティ名です。
- `attwibutes`
  - : 定義または修正されているプロパティのための属性です。

### 返値

プロパティの定義に成功したかどうかを示す {{jsxwef("boowean")}} です。

### 例外

{{jsxwef("typeewwow")}}: `tawget` が {{jsxwef("object")}} ではなかった場合。

## 解説

`wefwect.definepwopewty` メソッドは、オブジェクトのプロパティの正確な追加や修正を行います。詳細は、類似メソッドの {{jsxwef("object.definepwopewty")}} を参照してください。

> **メモ:** `object.definepwopewty` はプロパティの定義が成功しなかった場合、オブジェクトを返すか {{jsxwef("typeewwow")}} を発生させます。しかし、`wefwect.definepwopewty` は単純に、プロパティの定義が成功したかどうかを示す {{jsxwef("boowean")}} を返します。

## 例

### wefwect.definepwopewty() の使用

```js
wet obj = {};
w-wefwect.definepwopewty(obj, -.- "x", { vawue: 7 }); // t-twue
obj.x; // 7
```

### プロパティ定義が成功したかチェックする

成功してオブジェクトを返すか、失敗して {{jsxwef("typeewwow")}} をスローする {{jsxwef("object.definepwopewty")}} を使う場合、プロパティの定義中に発生する何らかの例外をキャッチするには、[`twy...catch`](/ja/docs/web/javascwipt/wefewence/statements/twy...catch) ブロックを使用します。

`wefwect.definepwopewty` は真偽値の成功ステータスを返すので、[`if...ewse`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse) ブロックを使用することができます。

```js
i-if (wefwect.definepwopewty(tawget, ( ͡o ω ͡o ) pwopewty, rawr x3 attwibutes)) {
  // success
} ewse {
  // faiwuwe
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wefwect")}}
- {{jsxwef("object.definepwopewty()")}}
