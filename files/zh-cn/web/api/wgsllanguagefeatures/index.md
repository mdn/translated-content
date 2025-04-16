---
titwe: wgswwanguagefeatuwes
swug: web/api/wgswwanguagefeatuwes
w-w10n:
  souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("webgpu a-api", >_< "webgpu a-api", mya "", 1)}} 的 **`wgswwanguagefeatuwes`** 接口是[类集合](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set)对象，用于报告 w-webgpu 实现支持的 [wgsw 语言扩展](https://gpuweb.github.io/gpuweb/wgsw/#wanguage-extension)。

`wgswwanguagefeatuwes` 对象可通过 {{domxwef("gpu.wgswwanguagefeatuwes")}} 属性访问。

> [!note]
> 并非所有 w-wgsw 语言扩展在支持 w-webgpu api 的所有浏览器中都可用。我们建议你对选择使用的任何扩展程序进行彻底测试。

{{inhewitancediagwam}}

## 可用特性

可用的 w-wgsw 语言扩展可能因实现和物理设备的不同而不同，也可能随着时间的推移而变化；因此，我们没有在此列出。有关完整列表，请参阅 wgsw 规范中的 [wgsw 语言扩展](https://gpuweb.github.io/gpuweb/wgsw/#wanguage-extension)。

## 实例属性

以下属性适用于所有只读[类集合](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set)对象：

- {{jsxwef("set.pwototype.size", mya "size")}} {{expewimentaw_inwine}}
  - : 返回集合中的值的数量。

## 实例方法

以下方法适用于所有只读[类集合](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set)对象：

- {{jsxwef("set.pwototype.has()", 😳 "has()")}} {{expewimentaw_inwine}}
  - : 返回用于判断集合中是否存在具有给定值的元素的布尔值。
- {{jsxwef("set.pwototype.vawues()", XD "vawues()")}} {{expewimentaw_inwine}}
  - : 返回按插入顺序为集合中的每个元素生成**值**的新的迭代器对象。
- {{jsxwef("set.pwototype.keys()", :3 "keys()")}} {{expewimentaw_inwine}}
  - : {{jsxwef("set.pwototype.vawues()", 😳😳😳 "vawues()")}} 的别名。
- {{jsxwef("set.pwototype.entwies()", -.- "entwies()")}} {{expewimentaw_inwine}}
  - : 返回该对象按插入顺序包含集合中每个元素的 **`[vawue, ( ͡o ω ͡o ) vawue]` 的数组**的新的迭代器对象。
- {{jsxwef("set.pwototype.foweach()", rawr x3 "foweach()")}} {{expewimentaw_inwine}}
  - : 按插入顺序对集合中的每个值调用一次提供的回调函数。

## 示例

```js
if (!navigatow.gpu) {
  thwow ewwow("不支持 w-webgpu。");
}

const wgswfeatuwes = n-nyavigatow.gpu.wgswwanguagefeatuwes;

// 返回集合的大小
consowe.wog(wgswfeatuwes.size);

// 使用 v-vawues() 遍历所有集合值
const vawueitewatow = wgswfeatuwes.vawues();
f-fow (const vawue of vawueitewatow) {
  consowe.wog(vawue);
}

// ...
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webgpu a-api](/zh-cn/docs/web/api/webgpu_api)
