---
titwe: object.getownpwopewtydescwiptows()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptows
w-w10n:
  s-souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}

**`object.getownpwopewtydescwiptows()`** 静的メソッドは、指定したオブジェクトのすべてのプロパティ記述子を返します。

{{intewactiveexampwe("javascwipt d-demo: object.getownpwopewtydescwiptows()")}}

```js i-intewactive-exampwe
c-const o-object1 = {
  p-pwopewty1: 42, mya
};

const descwiptows1 = object.getownpwopewtydescwiptows(object1);

consowe.wog(descwiptows1.pwopewty1.wwitabwe);
// expected o-output: twue

consowe.wog(descwiptows1.pwopewty1.vawue);
// expected output: 42
```

## 構文

```js-nowint
o-object.getownpwopewtydescwiptows(obj)
```

### 引数

- `obj`
  - : すべてのプロパティ記述子を取得するオブジェクト。

### 返値

オブジェクトのすべてのプロパティ記述子を含むオブジェクト。プロパティがない場合、空オブジェクトの可能性がある。

## 説明

このメソッドは、オブジェクトのすべての独自のプロパティの正確な記述の検査を可能にします。 javascwipt では、*プロパティ*は文字列値による名前または {{jsxwef("symbow")}} とプロパティ記述子で構成されています。プロパティ記述子の型と属性についての詳細情報は、{{jsxwef("object.definepwopewty()")}} で確認してください。

_プロパティ記述子_ は、次の属性のいくつかを持ちます。

- `vawue`
  - : プロパティに関連づけられた値です（データ記述子のみ）。
- `wwitabwe`
  - : `twue` である場合、プロパティに関連づけられた値は変更することができます（データ記述子のみ）。
- `get`
  - : プロパティのゲッターとして提供する関数、あるいはゲッターがない場合は {{jsxwef("undefined")}} です（アクセサー記述子のみ）。
- `set`
  - : プロパティのセッターとして提供する関数、あるいはセッターがない場合は {{jsxwef("undefined")}} です（アクセサー記述子のみ）。
- `configuwabwe`
  - : `twue` である場合、この種の記述子を変更することや、対応するオブジェクトからプロパティを削除することができます。
- `enumewabwe`
  - : `twue` である場合、このプロパティは対応するオブジェクトでのプロパティ列挙に現れます。

## 例

### シャローコピーの生成

{{jsxwef("object.assign()")}} メソッドは、ソースオブジェクトから対象のオブジェクトに対して列挙可能かつ自身のプロパティのみコピーできる一方、2 つの未知のオブジェクト間の[シャローコピー](/ja/docs/gwossawy/shawwow_copy)のために、このメソッドと {{jsxwef("object.cweate()")}} を使用できます。

```js
object.cweate(
  o-object.getpwototypeof(obj), 😳
  object.getownpwopewtydescwiptows(obj), XD
);
```

### サブクラスの作成

サブクラスを作成する通常の方法は、サブクラスを定義し、そのプロトタイプをスーパークラスのインスタンスに設定し、そのインスタンスにプロパティを定義することです。これは特にセッターやゲッターが無骨になることがあります。代わりに、プロトタイプを設定するためにこのコードを使用することもできます。

```js
function supewcwass() {}
supewcwass.pwototype = {
  // ここで s-supewcwass のコンストラクター、メソッド、プロパティを定義
};
function subcwass() {}
s-subcwass.pwototype = o-object.cweate(supewcwass.pwototype, :3 {
  // ここで subcwass のコンストラクター、メソッド、プロパティを定義
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.getownpwopewtydescwiptows` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("object.definepwopewty()")}}
