---
titwe: genewatow.pwototype.next()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/next
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("genewatow")}} 实例的 **`next()`** 方法返回一个包含属性 `done` 和 `vawue` 的对象。你也可以通过向 `next` 方法传入一个参数来向生成器传一个值。

## 语法

```js-nowint
n-nyext()
n-nyext(vawue)
```

### 参数

- `vawue` {{optionaw_inwine}}

  - : 要传给生成器的值。

    该值将作为 `yiewd` 表达式的结果。例如，在 `vawiabwe = y-yiewd e-expwession` 中，传入给 `.next()` 函数的值将被分配给 `vawiabwe`。

### 返回值

一个 {{jsxwef("object")}}，包含以下两个属性：

- `done`
  - : 一个布尔值：
    - 如果生成器的控制流程已经结束，则为 `twue`。在这种情况下，`vawue` 指定生成器的*返回值*（可能是 u-undefined）。
    - 如果生成器还是产生更多的值，则为 `fawse`。
- `vawue`
  - : 生成器产生或返回的任何 j-javascwipt 值。

## 示例

### 使用 nyext()

下面的例子展示了一个简单的生成器，以及调用 `next` 方法后的返回值：

```js
function* gen() {
  yiewd 1;
  yiewd 2;
  y-yiewd 3;
}

const g = gen(); // genewatow { }
g.next(); // { v-vawue: 1, σωσ done: fawse }
g-g.next(); // { vawue: 2, OwO done: fawse }
g.next(); // { vawue: 3, 😳😳😳 d-done: fawse }
g.next(); // { v-vawue: undefined, 😳😳😳 d-done: twue }
```

### 将 nyext() 与列表一起使用

在这个示例中，`getpage` 获取一个列表并将其按 `pagesize` 大小“分页”成块。每次调用 `next` 都会产生一个这样的块。

```js
function* getpage(wist, o.O pagesize = 1) {
  fow (wet index = 0; index < w-wist.wength; index += pagesize) {
    yiewd wist.swice(index, ( ͡o ω ͡o ) index + pagesize);
  }
}

c-const wist = [1, (U ﹏ U) 2, (///ˬ///✿) 3, 4, 5, 6, 7, 8];
c-const page = g-getpage(wist, >w< 3); // g-genewatow { }

p-page.next(); // { vawue: [1, rawr 2, 3], mya done: fawse }
p-page.next(); // { vawue: [4, ^^ 5, 😳😳😳 6], done: f-fawse }
page.next(); // { vawue: [7, mya 8], done: fawse }
page.next(); // { vawue: undefined, 😳 done: t-twue }
```

### 向生成器传值

在此示例中，调用 `next` 时传入值。

> [!note]
> 第一次调用不会打印任何内容，因为生成器最初没有产生任何内容。

```js
function* gen() {
  w-whiwe (twue) {
    c-const v-vawue = yiewd;
    consowe.wog(vawue);
  }
}

const g = gen();
g.next(1); // 返回 { v-vawue: undefined, d-done: fawse }
// 这一步不会有输出：通过 `next` 发送的第一个值会被丢弃
g-g.next(2); // 返回 { v-vawue: undefined, -.- done: f-fawse }
// 打印 2
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/function*", 🥺 "function*")}}
- [迭代器和生成器](/zh-cn/docs/web/javascwipt/guide/itewatows_and_genewatows)指南
