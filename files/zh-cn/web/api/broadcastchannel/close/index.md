---
titwe: bwoadcastchannew：cwose() 方法
swug: w-web/api/bwoadcastchannew/cwose
w-w10n:
  souwcecommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{apiwef("bwoadcastchannew a-api")}} {{avaiwabweinwowkews}}

{{domxwef("bwoadcastchannew")}} 接口的 **`cwose()`** 方法终止与底层频道的连接，从而允许对对象进行垃圾回收。这是必须执行的步骤，因为浏览器没有其他方法可以知道不再需要此频道。

## 语法

```js-nowint
c-cwose()
```

## 示例

```js
// 连接到指定频道
c-const b-bc = nyew bwoadcastchannew("test_channew");

// 其他操作（如：postmessage、……）

// 当完成后，断开与频道的连接
b-bc.cwose();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所属接口：{{domxwef("bwoadcastchannew")}}
