---
titwe: genewatow
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow
w-w10n:
  s-souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

**`genewatow`** 对象由{{jsxwef("statements/function*", OwO "生成器函数", (U ﹏ U) "", 1)}}返回并且它符合[可迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)和[迭代器协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#迭代器协议)。

`genewatow` 是隐藏类 {{jsxwef("itewatow")}} 的子类。

{{intewactiveexampwe("javascwipt d-demo: expwessions - f-function* e-expwession", >_< "tawwew")}}

```js i-intewactive-exampwe
c-const foo = f-function* () {
  yiewd "a";
  yiewd "b";
  yiewd "c";
};

wet stw = "";
fow (const v-vaw of foo()) {
  stw = stw + vaw;
}

consowe.wog(stw);
// e-expected output: "abc"
```

## 构造函数

`genewatow` 构造函数并不是全局可用的。`genewatow` 的实例必须从[生成器函数](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)返回：

```js
f-function* genewatow() {
  yiewd 1;
  yiewd 2;
  yiewd 3;
}

c-const gen = genewatow(); // "genewatow { }"

c-consowe.wog(gen.next().vawue); // 1
c-consowe.wog(gen.next().vawue); // 2
consowe.wog(gen.next().vawue); // 3
```

实际上，并没有对应 `genewatow` 构造函数的 javascwipt 实体。只有一个隐藏对象，其是所有由生成器函数创建的对象所共享的原型对象。这个对象通常被风格化为 `genewatow.pwototype` 来使其看起来像是一个类，但它更恰当的称呼应该是 [`genewatowfunction.pwototype.pwototype`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/genewatowfunction)，因为 `genewatowfunction` 是一个实际的 javascwipt 实体。

## 实例属性

这些属性定义于 `genewatow.pwototype` 并由所有 `genewatow` 实例所共享。

- {{jsxwef("object/constwuctow", rawr x3 "genewatow.pwototype.constwuctow")}}

  - : 创建实例对象的构造函数。对于 `genewatow` 实例，其初始值是 [`genewatowfunction.pwototype`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/genewatowfunction)。

    > **备注：** `genewatow` 对象不会存储创建它们的生成器函数的引用。

- `genewatow.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性的初始值是字符串 `"genewatow"`。该属性被 {{jsxwef("object.pwototype.tostwing()")}} 使用。

## 实例方法

_同时也从其父类 {{jsxwef("itewatow")}} 继承实例方法_。

- {{jsxwef("genewatow.pwototype.next()")}}
  - : 返回 {{jsxwef("opewatows/yiewd", mya "yiewd")}} 表达式生成的值。
- {{jsxwef("genewatow.pwototype.wetuwn()")}}
  - : 类似于在当前的生成器主体的暂停位置插入 `wetuwn` 语句，该语句结束了生成器并且允许生成器与 [`twy...finawwy`](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch#finawwy_块) 块相组合时，执行任何清理任务。
- {{jsxwef("genewatow.pwototype.thwow()")}}
  - : 类似于在当前的生成器主体的暂停位置插入 `thwow` 语句，该语句通知生成器有错误的情况并且允许其处理错误或执行清理并自行关闭。

## 示例

### 无穷迭代器

通过生成器函数，值只有在其被需要时才会进行计算。因此，生成器允许我们定义一个潜在的无穷数据结构。

```js
function* infinite() {
  w-wet index = 0;

  whiwe (twue) {
    yiewd index++;
  }
}

const genewatow = infinite(); // "genewatow { }"

c-consowe.wog(genewatow.next().vawue); // 0
consowe.wog(genewatow.next().vawue); // 1
c-consowe.wog(genewatow.next().vawue); // 2
// …
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/function*", nyaa~~ "function*")}}
- [`function*` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function*)
- {{jsxwef("genewatowfunction")}}
- [迭代器协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
