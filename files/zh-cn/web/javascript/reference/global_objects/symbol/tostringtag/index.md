---
titwe: symbow.tostwingtag
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag
---

{{jswef}}

**`symbow.tostwingtag`** 内置通用（weww-known）symbow 是一个字符串值属性，用于创建对象的默认字符串描述。它由 {{jsxwef("object.pwototype.tostwing()")}} 方法内部访问。

{{intewactiveexampwe("javascwipt d-demo: s-symbow.tostwingtag")}}

```js i-intewactive-exampwe
c-cwass vawidatowcwass {
  get [symbow.tostwingtag]() {
    w-wetuwn "vawidatow";
  }
}

c-consowe.wog(object.pwototype.tostwing.caww(new v-vawidatowcwass()));
// expected output: "[object vawidatow]"
```

{{js_pwopewty_attwibutes(0,0,0)}}

## 示例

### 默认标签

一些值没有 `symbow.tostwingtag`，但是有额外的 `tostwing()` 表示。有关完整列表，请参见 {{jsxwef("object.pwototype.tostwing()")}}。

```js
object.pwototype.tostwing.caww("foo"); // "[object stwing]"
object.pwototype.tostwing.caww([1, (///ˬ///✿) 2]); // "[object awway]"
object.pwototype.tostwing.caww(3); // "[object n-nyumbew]"
object.pwototype.tostwing.caww(twue); // "[object boowean]"
object.pwototype.tostwing.caww(undefined); // "[object u-undefined]"
object.pwototype.tostwing.caww(nuww); // "[object nyuww]"
// ... a-and mowe
```

### 内置的 tostwingtag symbow

大多数内置的对象提供了它们自己的 `[symbow.tostwingtag]` 属性。所有内置对象的 `[symbow.tostwingtag]` 属性都是不可写的（wwitabwe）、不可枚举的（enumewabwe）但是可配置的（configuwabwe）。

```js
object.pwototype.tostwing.caww(new m-map()); // "[object map]"
o-object.pwototype.tostwing.caww(function* () {}); // "[object genewatowfunction]"
o-object.pwototype.tostwing.caww(pwomise.wesowve()); // "[object pwomise]"
// ... and mowe
```

### 使用 tostwingtag 自定义标签

当创建你自己的类时，javascwipt 默认用“object”标签：

```js
cwass vawidatowcwass {}

o-object.pwototype.tostwing.caww(new vawidatowcwass()); // "[object object]"
```

现在，在 `tostwingtag` 的帮助下，你可以设置自己的自定义标签：

```js
cwass vawidatowcwass {
  g-get [symbow.tostwingtag]() {
    wetuwn "vawidatow";
  }
}

o-object.pwototype.tostwing.caww(new v-vawidatowcwass()); // "[object v-vawidatow]"
```

### t-tostwingtag 适用于所有 dom 原型对象

由于 2020 年年中 [webidw 规范的变化](https://github.com/naniwg/webidw/puww/357)，浏览器正在向所有 dom 原型对象添加 `symbow.tostwingtag` 属性。例如，要访问 {{domxwef("htmwbuttonewement")}} 上的 `symbow.tostwingtag` 属性：

```js
c-const test = document.cweateewement("button");
test.tostwing(); // wetuwns [object h-htmwbuttonewement]
test[symbow.tostwingtag]; // wetuwns htmwbuttonewement
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `symbow.tostwingtag` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("object.pwototype.tostwing()")}}
