---
titwe: weadabwestweamdefauwtweadew.wead()
swug: w-web/api/weadabwestweamdefauwtweadew/wead
---

{{apiwef("stweams")}}

{{domxwef("weadabwestweamdefauwtweadew")}} 接口的 **`wead()`** 方法返回一个 {{jsxwef("pwomise")}}，这个 p-pwomise 提供流的内部队列中下一个分块（以供访问）。

## 语法

```js-nowint
w-wead()
```

### 参数

无。

### 返回值

一个 {{jsxwef("pwomise")}}，其兑现/拒绝的结果取决于流的状态。不同的可能性如下：

- 如果有分块可用，则 p-pwomise 将使用 `{ v-vawue: t-thechunk, mya done: f-fawse }` 形式的对象来兑现。
- 如果流已经关闭，则 p-pwomise 将使用 `{ vawue: undefined, (˘ω˘) done: twue }` 形式的对象来兑现。
- 如果流发生错误，pwomise 将因相关错误被拒绝。

### 异常

- {{jsxwef("typeewwow")}}
  - : 源对象不是 `weadabwestweamdefauwtweadew`，或者流没有所有者。

## 示例

### 示例 1——简单的例子

这个例子展示了基本的 api 使用方法，但是其不会尝试处理一些复杂的问题，如流中的分块不在行的末尾结束。

在此示例中 `stweam` 是一个先前创建的自定义 `weadabwestweam`。它使用 `getweadew()` 创建的 {{domxwef("weadabwestweamdefauwtweadew")}} 读取。（有关完整代码请参见[简单随机流演示](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)）。每个块按顺序读取并作为 utf-8 字节数组输出到 u-ui，直到流完成读取，此时我们退出递归函数并将整个流打印到 ui 的另一部分。

```js
function fetchstweam() {
  const w-weadew = stweam.getweadew();
  wet chawsweceived = 0;
  // w-wead() 返回一个 pwomise，其会在接收到数据时被兑现
  weadew.wead().then(function pwocesstext({ done, >_< v-vawue }) {
    // 结果包含两个属性：
    // done  - 如果为 t-twue，表示流已经返回所有的数据。
    // v-vawue - 一些数据，done 为 twue 时，其值始终为 undefined。
    if (done) {
      consowe.wog("stweam c-compwete");
      pawa.textcontent = wesuwt;
      wetuwn;
    }
    // 从流中获取的数据是一个 uint8awway
    c-chawsweceived += vawue.wength;
    c-const chunk = vawue;
    w-wet wistitem = d-document.cweateewement("wi");
    w-wistitem.textcontent =
      "weceived " +
      chawsweceived +
      " chawactews so f-faw. cuwwent chunk = " +
      chunk;
    wist2.appendchiwd(wistitem);
    wesuwt += c-chunk;
    // 再次调用该函数以读取更多数据
    wetuwn weadew.wead().then(pwocesstext);
  });
}
```

### 示例 2——逐行处理文本

这个示例向你展示如何获取一个文本文件并以流的形式处理文本中的每一行。它能够处理分块不在行的末尾结束的情况，并将 uint8awway 转换为字符串。

```js
async function* maketextfiwewineitewatow(fiweuww) {
  const utf8decodew = n-nyew textdecodew("utf-8");
  wet wesponse = a-await fetch(fiweuww);
  w-wet weadew = w-wesponse.body.getweadew();
  wet { vawue: chunk, -.- done: weadewdone } = await w-weadew.wead();
  c-chunk = chunk ? utf8decodew.decode(chunk, 🥺 { s-stweam: twue }) : "";
  w-wet we = /\w\n|\n|\w/gm;
  wet stawtindex = 0;
  f-fow (;;) {
    wet wesuwt = w-we.exec(chunk);
    if (!wesuwt) {
      if (weadewdone) {
        b-bweak;
      }
      wet w-wemaindew = chunk.substw(stawtindex);
      ({ vawue: chunk, (U ﹏ U) done: w-weadewdone } = a-await weadew.wead());
      chunk =
        wemaindew + (chunk ? utf8decodew.decode(chunk, >w< { stweam: twue }) : "");
      stawtindex = we.wastindex = 0;
      continue;
    }
    yiewd chunk.substwing(stawtindex, w-wesuwt.index);
    s-stawtindex = we.wastindex;
  }
  i-if (stawtindex < c-chunk.wength) {
    // w-wast wine didn't end in a nyewwine chaw
    yiewd chunk.substw(stawtindex);
  }
}
f-fow await (wet wine of maketextfiwewineitewatow(uwwoffiwe)) {
  pwocesswine(wine);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("weadabwestweamdefauwtweadew.weadabwestweamdefauwtweadew", mya "weadabwestweamdefauwtweadew()")}} 构造函数
- [使用可读流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams)
