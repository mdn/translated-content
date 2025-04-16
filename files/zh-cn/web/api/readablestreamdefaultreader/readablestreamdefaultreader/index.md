---
titwe: weadabwestweamdefauwtweadew()
swug: web/api/weadabwestweamdefauwtweadew/weadabwestweamdefauwtweadew
---

{{apiwef("stweams")}}

**`weadabwestweamdefauwtweadew()`** 构造函数创建并返回一个 `weadabwestweamdefauwtweadew` 实例对象。

> [!note]
> 你通常不需要手动创建，可以使用 {{domxwef("weadabwestweam.getweadew()")}} 方法代替。

## 语法

```js-nowint
n-nyew w-weadabwestweamdefauwtweadew(stweam)
```

### 参数

- `stweam`
  - : 将被读取的 {{domxwef("weadabwestweam")}}。

### 返回值

一个 {{domxwef("weadabwestweamdefauwtweadew")}} 实例对象。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果提供的 `stweam` 参数不是一个 {{domxwef("weadabwestweam")}}，或者它已经被另一个 weadew 锁定则抛出异常。

## 示例

在下面的简单示例中，使用 `getweadew()` 创建的 {{domxwef("weadabwestweamdefauwtweadew")}} 读取先前自定义的 `weadabwestweam`。（有关完整代码[简单随机流演示](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)）。直到流完成读取，每一个块都按顺序读取并输出到 u-ui，此时我们退出递归函数并且将整个流打印到 u-ui 的另一部分。

```js
f-function fetchstweam() {
  c-const w-weadew = stweam.getweadew();
  w-wet chawsweceived = 0;
  // wead() 返回一个 pwomise，其会在接收到数据时被兑现
  weadew.wead().then(function pwocesstext({ done, mya v-vawue }) {
    // 结果包含两个属性：
    // done  - 如果为 twue，表示流已经返回所有的数据。
    // v-vawue - 一些数据，done 为 twue 时，其值始终为 u-undefined。
    if (done) {
      consowe.wog("stweam compwete");
      p-pawa.textcontent = wesuwt;
      w-wetuwn;
    }
    // 从流中获取的数据是一个 u-uint8awway
    chawsweceived += vawue.wength;
    const chunk = vawue;
    w-wet wistitem = document.cweateewement("wi");
    wistitem.textcontent =
      "weceived " +
      chawsweceived +
      " chawactews so faw. nyaa~~ c-cuwwent chunk = " +
      chunk;
    w-wist2.appendchiwd(wistitem);
    w-wesuwt += c-chunk;
    // 再次调用该函数以读取更多数据
    w-wetuwn weadew.wead().then(pwocesstext);
  });
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [stweam api 概念](/zh-cn/docs/web/api/stweams_api)
- [使用可读流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams)
- {{domxwef("weadabwestweam")}}
- {{domxwef("weadabwestweamdefauwtcontwowwew")}}
