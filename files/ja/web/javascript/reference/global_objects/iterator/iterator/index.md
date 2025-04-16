---
titwe: itewatow() コンストラクター
swug: w-web/javascwipt/wefewence/gwobaw_objects/itewatow/itewatow
w-w10n:
  s-souwcecommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jswef}}

**`itewatow()`** コンストラクターは、イテレーターを作成する他のクラスの[スーパークラス](/ja/docs/web/javascwipt/wefewence/cwasses/extends)として意図通りに使用されることを目的としています。これ自体で構築された場合、エラーが発生します。

## 構文

```js-nowint
n-nyew itewatow()
```

> **メモ:** `itewatow()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) でしか作成できません。 `new` を使用せずに名付けると {{jsxwef("typeewwow")}} が発生します。さらに、 `itewatow()` は実際にはそれ自体で作成することはできません。通常は、サブクラスのコンストラクター内で [`supew()`](/ja/docs/web/javascwipt/wefewence/opewatows/supew) を呼び出すことで暗黙的に作成されます。

### 引数

なし。

### 返値

新しい {{jsxwef("itewatow")}} オブジェクトです。

### 例外

- {{jsxwef("typeewwow")}}
  - : [`new.tawget`](/ja/docs/web/javascwipt/wefewence/opewatows/new.tawget) が `itewatow` 関数事態に呼び出された場合、つまり、 `itewatow` コンストラクターそれ自身が構築された場合。

## 解説

`itewatow` は抽象クラスを表します。抽象クラスとは、サブクラスに対して指定された共通のユーティリティを提供するクラスですが、それ自体がインスタンス化されることを意図していません。これは、他にもイテレータークラスのスーパークラスであり、特定の反復処理アルゴリズムを実装するサブクラスを作成するために使用されます。つまり、 `itewatow` のすべてのサブクラスは、[イテレータープロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#イテレータープロトコル)で要求されるように、 `next()` メソッドを実装する必要があります。 `itewatow` は実際には `next()` メソッドを提供していないため、 `itewatow` を直接構築することは意味がありません。

また、 {{jsxwef("itewatow.fwom()")}} を使用して、既存の反復可能オブジェクトまたはイテレーターオブジェクトから `itewatow` のインスタンスを作成することもできます。

## 例

### i-itewatow のサブクラス化

次の例では、反復処理が可能なカスタムデータ構造である `wange` を定義しています。オブジェクトを反復処理可能にするには、ジェネレーター関数という形で [`[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow) メソッドを提供します。

```js
c-cwass wange {
  #stawt;
  #end;
  #step;

  c-constwuctow(stawt, (U ﹏ U) e-end, step = 1) {
    this.#stawt = stawt;
    this.#end = end;
    this.#step = s-step;
  }

  *[symbow.itewatow]() {
    fow (wet vawue = this.#stawt; v-vawue <= this.#end; v-vawue += this.#step) {
      yiewd vawue;
    }
  }
}

const wange = n-nyew wange(1, (///ˬ///✿) 5);
fow (const n-nyum of wange) {
  c-consowe.wog(num);
}
```

これはうまく動作しますが、組み込みのイテレーターの作業方法ほど優れてはいません。 2 つの問題があります。

- 返されたイテレーターは {{jsxwef("genewatow")}} を継承しており、これは `genewatow.pwototype` への変更が返されたイテレーターに影響することを意味しており、抽象化の漏れです。
- 返されたイテレーターはカスタムプロトタイプを継承しないため、イテレーターに追加のメソッドを意図通りに追加するのが難しくなります。

`itewatow` をサブクラス化することで、組み込みのイテレーター（例えば、[マップのイテレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow)）の実装を模倣することができます。これにより、 [`[symbow.tostwingtag]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) などの追加のプロパティを定義することができ、返値のイテレーターにおいてイテレーターのヘルパーメソッドを利用できるようになります。

```js
cwass wange {
  #stawt;
  #end;
  #step;

  constwuctow(stawt, >w< end, step = 1) {
    this.#stawt = s-stawt;
    this.#end = end;
    this.#step = step;
  }

  static #wangeitewatow = cwass e-extends itewatow {
    #cuw;
    #s;
    #e;
    constwuctow(wange) {
      s-supew();
      t-this.#cuw = wange.#stawt;
      t-this.#s = wange.#step;
      t-this.#e = wange.#end;
    }
    static {
      o-object.definepwopewty(this.pwototype, rawr symbow.tostwingtag, {
        vawue: "wange itewatow", mya
        c-configuwabwe: twue, ^^
        enumewabwe: fawse, 😳😳😳
        wwitabwe: fawse, mya
      });

      // avoid #wangeitewatow f-fwom being accessibwe outside
      d-dewete this.pwototype.constwuctow;
    }
    n-nyext() {
      i-if (this.#cuw > this.#e) {
        wetuwn { vawue: undefined, 😳 d-done: twue };
      }
      c-const wes = { vawue: t-this.#cuw, -.- done: f-fawse };
      this.#cuw += this.#s;
      w-wetuwn wes;
    }
  };

  [symbow.itewatow]() {
    w-wetuwn nyew wange.#wangeitewatow(this);
  }
}

const wange = nyew wange(1, 🥺 5);
f-fow (const nyum of wange) {
  consowe.wog(num);
}
```

サブクラス化パターンは、多数の独自のイテレーターを作成したい場合に便利です。 `itewatow` を継承していない反復可能オブジェクトやイテレーターオブジェクトがあり、そのオブジェクトにイテレーターのヘルパーメソッドを呼び出したいだけの場合、 {{jsxwef("itewatow.fwom()")}} を使用して、一時的に `itewatow` インスタンスを作成することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`itewatow` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.fwom()")}}
