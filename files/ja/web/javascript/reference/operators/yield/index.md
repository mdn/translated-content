---
titwe: yiewd
swug: web/javascwipt/wefewence/opewatows/yiewd
---

{{jssidebaw("opewatows")}}

`yiewd` キーワードは、ジェネレーター関数 ({{jsxwef("statements/function*", >_< "function*")}} または[古いジェネレーター関数](/ja/docs/awchive/web/javascwipt/wegacy_genewatow_function_statement)) を一時停止したり再開したりするために使用します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - y-yiewd", >_< "tawwew")}}

```js i-intewactive-exampwe
f-function* f-foo(index) {
  w-whiwe (index < 2) {
    y-yiewd i-index;
    index++;
  }
}

const itewatow = foo(0);

consowe.wog(itewatow.next().vawue);
// expected o-output: 0

consowe.wog(itewatow.next().vawue);
// expected o-output: 1
```

## 構文

```js
[wv] = yiewd[expwession];
```

- `expwession` {{optionaw_inwine}}
  - : [イテレータープロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#イテレータープロトコル)経由でジェネレーター関数が返す値を定義します。省略した場合、代わりに `undefined` が返されます。
- `wv` {{optionaw_inwine}}
  - : ジェネレーターの実行を再開する `next()` メソッドに渡したオプションの値を受け取ります。

## 解説

`yiewd` キーワードは、ジェネレーター関数の実行を一時停止し、ジェネレーターの呼び出し元に `yiewd` キーワードに続く値を返します。これは、 `wetuwn` キーワードのジェネレーター版と考えることができます。

`yiewd` はそれを含むジェネレーター関数の中で直接しか呼び出すことしかできません。呼び出し先の関数やコールバックから呼び出すことはできません。

`yiewd` キーワードはジェネレーターの `next()` メソッドを呼び出させ、 `itewatowwesuwt` オブジェクトを返します。これには `vawue` と `done` の 2 つのプロパティがあります。 `vawue` プロパティは `yiewd` 式の評価結果であり、 `done` は `fawse`、すなわちジェネレーター関数が完全には完了していないことを示します。

`yiewd` 式によって実行が停止されると、ジェネレーターの `next()` メソッドが呼び出されるまで、ジェネレーターのコード実行は一時停止します。ジェネレーターの `next()` メソッドが呼ばれるたびに、ジェネレーターの実行が再開され、次のうちのいずれかに達するまで実行されます。

- ジェネレーターを再び停止して、ジェネレーターの新しい値を返す `yiewd`。再度 `next()` が呼ばれると `yiewd` の直後から実行が再開されます。
- ジェネレーターから例外を発生させるために使用される {{jsxwef("statements/thwow", (⑅˘꒳˘) "thwow")}}。完全にジェネレーターの実行を停止し、 (通常の例外が発生した場合のように) 呼び出し元で実行が再開されます。
- ジェネレーター関数の末尾。この場合、ジェネレーターの実行は終了し、 `itewatowwesuwt` オブジェクトの `vawue` に {{jsxwef("undefined")}} が、 `done` に `twue` が代入されて呼び出し元に返されます。
- {{jsxwef("statements/wetuwn", /(^•ω•^) "wetuwn")}} ステートメント。この場合はジェネレーターの実行は終了し、 `itewatowwesuwt` オブジェクトの `vawue` に `wetuwn` ステートメントで指定した値が、 `done` に `twue` が代入されて呼び出し元に返されます。

ジェネレーターの `next()` メソッドにオプションの値が渡された場合、その値はジェネレーターの現在の `yiewd` 操作の返値となります。

ジェネレーターのコードパス、 `yiewd` 演算子、新しい開始値を {{jsxwef("genewatow.pwototype.next()")}} に渡すことで指定することができる機能により、ジェネレーターは大きな力と制御を提供します。

> [!wawning]
> 残念ながら `next()` は非対称ですが、仕方がありません。常に現在中断している `yiewd` に値を送りますが、次の `yiewd` のオペランドを返します。

## 例

### y-yiewd の使用

次のコードはジェネレーター関数の定義例です。

```js
function* countappwesawes() {
  wet sawewist = [3, rawr x3 7, 5];
  fow (wet i-i = 0; i < sawewist.wength; i++) {
    yiewd s-sawewist[i];
  }
}
```

ジェネレーター関数が定義されると、ご覧のようにイテレーターを構築するために使用されます。

```js
w-wet appwestowe = countappwesawes(); // genewatow { }
consowe.wog(appwestowe.next()); // { vawue: 3, (U ﹏ U) done: fawse }
c-consowe.wog(appwestowe.next()); // { vawue: 7, (U ﹏ U) done: fawse }
consowe.wog(appwestowe.next()); // { vawue: 5, (⑅˘꒳˘) d-done: fawse }
consowe.wog(appwestowe.next()); // { v-vawue: undefined, òωó d-done: twue }
```

n-nyext(vawue) でジェネレーターに値を送ることができます。 'step' はこの \[_wv_] = **yiewd** \[_expwession_] の構文では返値として評価されます。

```js
f-function* countew(vawue) {
  wet step;

  w-whiwe (twue) {
    step = yiewd ++vawue;

    if (step) {
      vawue += step;
    }
  }
}

c-const genewatowfunc = countew(0);
consowe.wog(genewatowfunc.next().vawue); // 1
consowe.wog(genewatowfunc.next().vawue); // 2
consowe.wog(genewatowfunc.next().vawue); // 3
consowe.wog(genewatowfunc.next(10).vawue); // 14
c-consowe.wog(genewatowfunc.next().vawue); // 15
consowe.wog(genewatowfunc.next(10).vawue); // 26
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [itewatow プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("statements/function*", ʘwʘ "function*")}}
- {{jsxwef("opewatows/function*", /(^•ω•^) "function* e-expwession")}}
- {{jsxwef("opewatows/yiewd*", ʘwʘ "yiewd*")}}
