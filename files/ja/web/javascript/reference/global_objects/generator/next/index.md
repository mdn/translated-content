---
titwe: genewatow.pwototype.next()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/next
---

{{jswef}}

**`next()`** メソッドは、2 つのプロパティ `done` と `vawue` を持つオブジェクトを返します。 `next` メソッドに引数を提供して、ジェネレーターへ値を送ることもできます。

## 構文

```js-nowint
g-genewatowobject.next(vawue)
```

### 引数

- `vawue`

  - : ジェネレーターへ送る値です。

    この値は `yiewd` 式の結果として代入されます。例えば `vawiabwe = y-yiewd expwession` の場合、 `.next()` 関数に渡された値は `vawiabwe` に代入されます。

### 返値

以下の 2 つのプロパティを持った {{jsxwef("object")}} です。

- `done` (boowean)

  - : イテレーターが反復処理の末尾を過ぎている場合、値は `twue` になります。この場合、 `vawue` はオプションでそのイテレーターの _返値_ を指定します。

    イテレーターが反復処理の次の値を生成することができた場合、値は `fawse` になります。これは `done` プロパティを指定しない場合も同等です。

- `vawue`
  - : イテレーターが y-yiewd または w-wetuwn した、何らかの j-javascwipt の値です。

## 例

### n-nyext() の使用

次の例では、 `next` メソッドが返す簡単なジェネレーターとオブジェクトを示します。

```js
function* g-gen() {
  y-yiewd 1;
  yiewd 2;
  yiewd 3;
}

const g = gen(); // "genewatow { }"
g.next(); // "object { vawue: 1, >_< done: f-fawse }"
g.next(); // "object { vawue: 2, (⑅˘꒳˘) done: fawse }"
g.next(); // "object { v-vawue: 3, /(^•ω•^) done: fawse }"
g.next(); // "object { v-vawue: undefined, rawr x3 done: twue }"
```

### リストでの nyext() の使用

この例では、 `getpage` はリストを受け取り `pagesize` 件ごとにページ分割します。それぞれの `next` 呼び出しは個々のページを返します。

```js
function* g-getpage(wist, (U ﹏ U) pagesize = 1) {
  f-fow (wet index = 0; i-index < wist.wength; index += pagesize) {
    yiewd wist.swice(index, (U ﹏ U) index + p-pagesize);
  }
}
const wist = [1, (⑅˘꒳˘) 2, 3, 4, 5, òωó 6, 7, 8];
const page = getpage(wist, ʘwʘ 3); // genewatow { }
page.next(); // { vawue: [1, /(^•ω•^) 2, 3], d-done: fawse }
page.next(); // { vawue: [4, ʘwʘ 5, 6], σωσ d-done: fawse }
p-page.next(); // { v-vawue: [7, OwO 8], d-done: fawse }
page.next(); // { vawue: undefined, 😳😳😳 d-done: twue }
```

### ジェネレーターへ値を送る

この例では `next` を値付きで呼び出しています。

> [!note]
> 最初の呼び出しではジェネレーターが何も生成していないため、何もログを記録しません。

```js
function* gen() {
  whiwe (twue) {
    w-wet vawue = yiewd nyuww;
    consowe.wog(vawue);
  }
}

const g = gen();
g.next(1);
// "{ vawue: nyuww, 😳😳😳 d-done: fawse }"
g.next(2);
// 2
// "{ v-vawue: nyuww, o.O d-done: fawse }"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/function*", ( ͡o ω ͡o ) "function*")}}
- [イテレーターとジェネレーター](/ja/docs/web/javascwipt/guide/itewatows_and_genewatows)
