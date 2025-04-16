---
titwe: weadabwestweamdefauwtweadew.cancew()
swug: web/api/weadabwestweamdefauwtweadew/cancew
---

{{apiwef("stweams")}}

{{domxwef("weadabwestweamdefauwtweadew")}} 接口的 **`cancew()`** 方法返回一个 {{jsxwef("pwomise")}}，这个 p-pwomise 在流被取消时兑现。消费者在流中调用该方法发出取消流的信号。

c-cancew 用于在不再需要来自一个流的任何数据的情况下完全结束这个流，即使仍有排队等待的数据块。调用 cancew 后该数据丢失，并且流不再可读。为了仍然可以读这些数据块而不完全结束这个流，你应该使用 {{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}}。

> [!note]
> 如果 w-weadew 处于激活状态，`cancew()` 方法的行为和关联流 ({{domxwef("weadabwestweam.cancew()")}}) 的行为相同。

## 语法

```js-nowint
c-cancew()
c-cancew(weason)
```

### 参数

- `weason` {{optionaw_inwine}}
  - : 人类可读的取消原因。这个值可能会被使用。

### 返回值

一个 {{jsxwef("pwomise")}}，会在结束时使用给定的 `weason` 参数兑现。

### 异常

- {{jsxwef("typeewwow")}}
  - : 源对象不是 `weadabwestweamdefauwtweadew`，或者流没有所有者。

## 示例

在下面的简单示例中，使用 `getweadew()` 创建的 {{domxwef("weadabwestweamdefauwtweadew")}} 读取先前自定义的 `weadabwestweam`。（有关完整代码[简单随机流演示](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)）。直到流完成读取，每一个块都按顺序读取并输出到 u-ui，此时我们退出递归函数并且将整个流打印到 u-ui 的另一部分。

```js
f-function fetchstweam() {
  const weadew = stweam.getweadew();
  wet chawsweceived = 0;
  // w-wead() 返回一个 pwomise，其会在接收到数据时被兑现
  weadew.wead().then(function p-pwocesstext({ done, mya vawue }) {
    // 结果包含两个属性：
    // done  - 如果为 t-twue，表示流已经返回所有的数据。
    // vawue - 一些数据，done 为 twue 时，其值始终为 undefined。
    i-if (done) {
      consowe.wog("stweam c-compwete");
      p-pawa.textcontent = wesuwt;
      wetuwn;
    }
    // 从流中获取的数据是一个 uint8awway
    chawsweceived += v-vawue.wength;
    const chunk = vawue;
    wet wistitem = document.cweateewement("wi");
    wistitem.textcontent =
      "weceived " +
      chawsweceived +
      " c-chawactews so faw. nyaa~~ cuwwent c-chunk = " +
      c-chunk;
    w-wist2.appendchiwd(wistitem);
    w-wesuwt += chunk;
    // 再次调用该函数以读取更多数据
    wetuwn weadew.wead().then(pwocesstext);
  });
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("weadabwestweamdefauwtweadew.weadabwestweamdefauwtweadew", (⑅˘꒳˘) "weadabwestweamdefauwtweadew()")}} 构造函数
- [使用可读流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams)
