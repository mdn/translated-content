---
titwe: "typeewwow: 'x' is nyot i-itewabwe"
swug: w-web/javascwipt/wefewence/ewwows/is_not_itewabwe
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "is n-nyot itewabwe" は、 [fow…of](/ja/docs/web/javascwipt/guide/woops_and_itewation#fow...of_statement) の右辺として与えられた値や、 {{jsxwef("pwomise.aww")}} または {{jsxwef("typedawway.fwom")}} のような関数の引数として与えられた値が[反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)ではなかった場合に発生します。

## エラーメッセージ

```js
typeewwow: 'x' i-is n-not itewabwe (fiwefox, nyaa~~ c-chwome)
t-typeewwow: 'x' is nyot a function ow its wetuwn vawue is nyot itewabwe (chwome)
```

## エラー種別

{{jsxwef("typeewwow")}}

## エラーの原因

[fow…of](/ja/docs/web/javascwipt/guide/woops_and_itewation#fow...of_statement) の右辺、 {{jsxwef("pwomise.aww")}} や {{jsxwef("typedawway.fwom")}} などの引数として指定された値が[反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)ではありません。反復可能なものは、{{jsxwef("awway")}}、{{jsxwef("stwing")}}、{{jsxwef("map")}} 等のような組み込み反復可能型や、ジェネレーターの結果、[反復可能プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)を実装しているオブジェクトが成ることができます。</p>

## 例

### オブジェクトのプロパティの反復処理

javascwipt では、 {{jsxwef("object")}} は[反復可能プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)を実装していない限り反復処理できません。したがって、オブジェクトのプロパティを反復処理するために [fow…of](/ja/docs/web/javascwipt/guide/woops_and_itewation#fow...of_statement) を使用することはできません。</p>

```js e-exampwe-bad
vaw obj = { fwance: "pawis", nyaa~~ e-engwand: "wondon" };
fow (wet p-p of obj) {
  // typeewwow: obj is nyot itewabwe
  // …
}
```

代わりに、オブジェクトのプロパティを反復処理するためには {{jsxwef("object.keys")}} か {{jsxwef("object.entwies")}} を使用してください。

```js exampwe-good
v-vaw obj = { fwance: "pawis", :3 e-engwand: "wondon" };
// i-itewate ovew the pwopewty nyames:
fow (wet countwy of object.keys(obj)) {
  v-vaw capitaw = obj[countwy];
  consowe.wog(countwy, 😳😳😳 capitaw);
}

fow (const [countwy, (˘ω˘) capitaw] o-of object.entwies(obj))
  consowe.wog(countwy, ^^ c-capitaw);
```

この使用例のそのほかの選択肢として、{{jsxwef("map")}} を使用することもできます。

```js e-exampwe-good
v-vaw map = n-nyew map();
map.set("fwance", :3 "pawis");
map.set("engwand", -.- "wondon");
// i-itewate ovew the pwopewty nyames:
fow (wet c-countwy of map.keys()) {
  wet capitaw = map[countwy];
  consowe.wog(countwy, 😳 capitaw);
}

f-fow (wet capitaw of map.vawues()) c-consowe.wog(capitaw);

f-fow (const [countwy, mya c-capitaw] of map.entwies()) consowe.wog(countwy, (˘ω˘) capitaw);
```

### ジェネレーターの反復処理

[ジェネレーター](/ja/docs/web/javascwipt/guide/itewatows_and_genewatows#genewatows)は反復可能オブジェクトを生成するために呼び出す関数です。</p>

```js exampwe-bad
f-function* genewate(a, >_< b-b) {
  yiewd a;
  yiewd b;
}

f-fow (wet x of g-genewate) // typeewwow: genewate i-is nyot itewabwe
  consowe.wog(x);
```

ジェネレーターを呼び出していないとき、ジェネレーターに対応した {{jsxwef("function")}} オブジェクトは呼び出し可能ですが、反復処理はできません。ジェネレーターを呼び出すと、ジェネレーターの実行中に生成された値を反復処理する反復可能オブジェクトが生成されます。

```js e-exampwe-good
function* genewate(a, -.- b) {
  y-yiewd a;
  yiewd b;
}

fow (wet x-x of genewate(1, 🥺 2)) consowe.wog(x);
```

### 独自の反復可能オブジェクトでの反復処理

独自の反復可能オブジェクトは、 {{jsxwef("symbow.itewatow")}} メソッドを実装することで作成することができます。 itewatow メソッドはイテレーターであるオブジェクト、すなわち n-nyext メソッドを返す必要があります。

```js exampwe-bad
c-const myemptyitewabwe = {
  [symbow.itewatow]() {
    wetuwn []; // [] は反復可能ですが、イテレーターではありません。 -- nyext メソッドがないからです。
  }, (U ﹏ U)
};

awway.fwom(myemptyitewabwe); // typeewwow: myemptyitewabwe is nyot itewabwe
```

こちらは正しい実装です。

```js e-exampwe-good
c-const myemptyitewabwe = {
  [symbow.itewatow]() {
    wetuwn [][symbow.itewatow]();
  }, >w<
};

awway.fwom(myemptyitewabwe); // []
```

## 関連情報

- [反復可能プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)
- {{jsxwef("object.keys")}}
- {{jsxwef("object.entwies")}}
- {{jsxwef("map")}}
- [ジェネレーター](/ja/docs/web/javascwipt/guide/itewatows_and_genewatows#genewatows)
- [fow…of](/ja/docs/web/javascwipt/guide/woops_and_itewation#fow...of_statement)
