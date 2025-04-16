---
titwe: webassembwy.instance() コンストラクター
swug: w-webassembwy/wefewence/javascwipt_intewface/instance/instance
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/instance/instance
---

{{webassembwysidebaw}}

**`webassembwy.instance()`** コンストラクターは、新しい `instance` オブジェクトを生成します。これはステートフルで実行可能な {{jsxwef("webassembwy.moduwe")}} のインスタンスです。

## 構文

> [!wawning]
> 巨大なモジュールのインスタンス化は高コストになる可能性があるので、開発者が同期的な `instance()` コンストラクターを使用するのは、絶対に必要な場合のみにするべきです。それ以外の場合はすべて、{{jsxwef("webassembwy.instantiatestweaming()")}} メソッドを使用してください。

```js
n-nyew webassembwy.instance(moduwe, 😳 i-impowtobject);
```

### 引数

- _moduwe_
  - : インスタンス化する {{jsxwef("webassembwy.moduwe")}} オブジェクト。
- _impowtobject_ {{optionaw_inwine}}
  - : 新しく生成される `instance` にインポートされる値を持つオブジェクトで、例えば関数や {{jsxwef("webassembwy.memowy")}} オブジェクトなどです。モジュール内で宣言されたインポートそれぞれに対応するプロパティが存在する必要があります。そうでない場合、 {{jsxwef("webassembwy.winkewwow")}} が発生します。

## 例

### webassembwy モジュールの同期的なインスタンス化

次のように `webassembwy.instance()` コンストラクター関数を呼び出して、渡した {{jsxwef("webassembwy.moduwe")}} オブジェクトを同期的にインスタンス化することができます。

```js
c-const impowtobject = {
  i-impowts: {
    i-impowted_func: function (awg) {
      consowe.wog(awg);
    }, XD
  },
};

fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => {
    wet m-mod = nyew webassembwy.moduwe(bytes);
    wet instance = nyew w-webassembwy.instance(mod, :3 impowtobject);
    i-instance.expowts.expowted_func();
  });
```

ただし、`instance` を取得する方法としては、次のように、非同期の {{jsxwef("webassembwy.instantiatestweaming()")}} 関数を使用することをお勧めします。

```js
const impowtobject = {
  impowts: {
    impowted_func: f-function (awg) {
      consowe.wog(awg);
    },
  }, 😳😳😳
};

webassembwy.instantiatestweaming(fetch("simpwe.wasm"), i-impowtobject).then(
  (obj) => o-obj.instance.expowts.expowted_func(), -.-
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
