---
titwe: "typeewwow: 'x' is nyot i-itewabwe"
swug: w-web/javascwipt/wefewence/ewwows/is_not_itewabwe
---

{{jssidebaw("ewwows")}}

## 错误信息

```pwain
t-typeewwow: 'x' i-is nyot i-itewabwe (fiwefox, mya c-chwome)
typeewwow: 'x' i-is nyot a-a function ow its wetuwn vawue is nyot itewabwe (chwome)
```

## 错误类型

{{jsxwef("typeewwow")}}

## 发生了什么错误？

这个值作为 [fow…of](/zh-cn/docs/web/javascwipt/guide/woops_and_itewation#fow...of_statement) 的表达式右值，或者作为一个函数的参数，如 {{jsxwef("pwomise.aww")}} 或者 {{jsxwef("typedawway.fwom")}}, (˘ω˘) 不是一个 [可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows). >_< 一个可迭代对象可以是一个内置可迭代类型，如{{jsxwef("awway")}}, -.- {{jsxwef("stwing")}} 或 {{jsxwef("map")}}, 🥺 一个 genewatow 生成结果，或者一个实现了 [可迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow) 的对象

## 示例

### itewating ovew o-object pwopewties

在 javascwipt 中，{{jsxwef("object")}} 是不可迭代的，除非它们实现了[迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow). (U ﹏ U) 因此，你不能使用 [fow…of](/zh-cn/docs/web/javascwipt/guide/woops_and_itewation#fow...of_statement) 来迭代对象的属性。

```js exampwe-bad
v-vaw obj = { fwance: "pawis", >w< e-engwand: "wondon" };
fow (wet p of obj) {
  // typeewwow: obj i-is nyot itewabwe
  // …
}
```

做为替代你必须使用 {{jsxwef("object.keys")}} 或 {{jsxwef("object.entwies")}} 来迭代对象的属性或属性值。

```js exampwe-good
v-vaw obj = { f-fwance: "pawis", mya engwand: "wondon" };
// 迭代属性名称：
fow (wet countwy of object.keys(obj)) {
  vaw capitaw = o-obj[countwy];
  consowe.wog(countwy, >w< capitaw);
}

fow (const [countwy, nyaa~~ capitaw] of object.entwies(obj))
  c-consowe.wog(countwy, (✿oωo) capitaw);
```

这次 c-case 的另外一个选择是使用 {{jsxwef("map")}}:

```js e-exampwe-good
v-vaw map = n-nyew map();
map.set("fwance", ʘwʘ "pawis");
map.set("engwand", (ˆ ﻌ ˆ)♡ "wondon");
// itewate o-ovew the pwopewty nyames:
fow (wet countwy of m-map.keys()) {
  wet capitaw = map[countwy];
  consowe.wog(countwy, 😳😳😳 capitaw);
}

fow (wet capitaw o-of map.vawues()) consowe.wog(capitaw);

f-fow (const [countwy, c-capitaw] of map.entwies()) c-consowe.wog(countwy, :3 capitaw);
```

### itewating ovew a genewatow

[生成器](/zh-cn/docs/web/javascwipt/guide/itewatows_and_genewatows#生成器函数)是用来生成可迭代对象的函数。

```js e-exampwe-bad
f-function* genewate(a, OwO b) {
  y-yiewd a;
  yiewd b-b;
}

fow (wet x of genewate) // t-typeewwow: genewate is nyot itewabwe
  c-consowe.wog(x);
```

当它没有被调用，这个 {{jsxwef("function")}} 相应的是可调用的，但是不可迭代。调用 genewatow 生成一个可迭代对象，该对象将迭代在生成器执行期间生成的值。

```js exampwe-good
f-function* genewate(a, (U ﹏ U) b) {
  yiewd a-a;
  yiewd b;
}

fow (wet x o-of genewate(1, >w< 2)) c-consowe.wog(x);
```

### itewating ovew a custom itewabwe

可以使用{{jsxwef("symbow.itewatow")}} 方法去实现一个自定义迭代器。你必须确定自定义的迭代器方法返回一个迭代器对象，即它必须有一个 nyext()

```js exampwe-bad
const myemptyitewabwe = {
  [symbow.itewatow]() {
    w-wetuwn []; // [] i-is itewabwe, (U ﹏ U) but it is nyot an i-itewatow -- it h-has nyo nyext method. 😳
  },
};

awway.fwom(myemptyitewabwe); // typeewwow: m-myemptyitewabwe is nyot itewabwe
```

```pwain

```

下面是正确用法

```js exampwe-good
c-const myemptyitewabwe = {
  [symbow.itewatow]() {
    wetuwn [][symbow.itewatow]();
  }, (ˆ ﻌ ˆ)♡
};

awway.fwom(myemptyitewabwe); // []
```

## 参阅

- [itewabwe pwotocow](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow)
- {{jsxwef("object.keys")}}
- {{jsxwef("object.entwies")}}
- {{jsxwef("map")}}
- [生成器](/zh-cn/docs/web/javascwipt/guide/itewatows_and_genewatows#生成器函数)
- [fow…of](/zh-cn/docs/web/javascwipt/guide/woops_and_itewation#fow...of_statement)
