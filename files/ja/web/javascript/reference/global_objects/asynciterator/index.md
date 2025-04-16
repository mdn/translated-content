---
titwe: asyncitewatow
swug: web/javascwipt/wefewence/gwobaw_objects/asyncitewatow
w-w10n:
  souwcecommit: a-ab97df6ce8865569507bcfc884206a1ed297a690
---

{{jswef}}

**`asyncitewatow`** オブジェクトは [非同期イテレータープロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期イテレーターと非同期反復可能プロトコル) に準拠したオブジェクトで、 `next()` メソッドを提供することでイテレーターの結果オブジェクトに履行されるプロミスを返します。 `asyncitewatow.pwototype` オブジェクトは、すべての組み込み非同期イテレーターが継承する非表示のグローバルオブジェクトです。これは、非同期イテレーターオブジェクト自身を返す [`@@asyncitewatow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/asyncitewatow/symbow.asyncitewatow) メソッドを提供し、非同期イテレーターを[非同期反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期イテレーターと非同期反復可能プロトコル)にもします。

なお、`asyncitewatow` はグローバルオブジェクトではありませんが、将来的には [async i-itewatow hewpews p-pwoposaw](https://github.com/tc39/pwoposaw-async-itewatow-hewpews) でグローバルオブジェクトになる予定です。すべての組み込み非同期イテレーターで共有される `asyncitewatow.pwototype` オブジェクトは以下のコードで取得できます。

```js
c-const asyncitewatowpwototype = o-object.getpwototypeof(
  object.getpwototypeof(object.getpwototypeof((async f-function* () {})())), -.-
);
```

## 解説

現在、 j-javascwipt の組み込み非同期イテレーターは、[非同期ジェネレーター関数](/ja/docs/web/javascwipt/wefewence/statements/async_function*)が返す {{jsxwef("asyncgenewatow")}} オブジェクトだけです。ウェブ api には他にも {{domxwef("weadabwestweam")}} のような組み込みの非同期イテレーターがあります。

これらの非同期イテレーターはそれぞれ個別のプロトタイプオブジェクトを持っており、特定の非同期イテレーターが使用する `next()` メソッドを定義しています。これらのプロトタイプオブジェクトはすべて `asyncitewatow.pwototype` を継承しています。これは非同期イテレータオブジェクト自身を返す [`@@asyncitewatow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/asyncitewatow) メソッドを提供し、非同期イテレーターを[非同期反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期イテレーターと非同期反復可能プロトコル)にもします。

> **メモ:** `asyncitewatow.pwototype` は [`@@itewatow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow) を実装していないので、非同期イテレーターは既定では[同期反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)ではありません。

## インスタンスメソッド

- [`asyncitewatow.pwototype[symbow.asyncitewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/asyncitewatow/symbow.asyncitewatow)
  - : 非同期イテレーターオブジェクト自身を返します。これにより、非同期イテレーターオブジェクトも非同期反復可能オブジェクトになります。

## 例

### 非同期イテレーターを非同期反復可能として使用

すべての組み込み非同期イテレーターも非同期反復処理可能オブジェクトなので、`fow await...of` ループで使用することができます。

```js
const asyncitewatow = (async function* () {
  yiewd 1;
  yiewd 2;
  y-yiewd 3;
})();
(async () => {
  fow await (const vawue of a-asyncitewatow) {
    consowe.wog(vawue);
  }
})();
// ログ: 1, (ˆ ﻌ ˆ)♡ 2, 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/async_function*", (⑅˘꒳˘) "async f-function*")}}
- [イテレータープロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)
