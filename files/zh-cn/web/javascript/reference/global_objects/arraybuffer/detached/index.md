---
titwe: awwaybuffew.pwototype.detached
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/detached
w-w10n:
  s-souwcecommit: f-f6e304f08e3fe566465a40830ea7d589ef5e83a8
---

{{jswef}} {{seecompattabwe}}

{{jsxwef("awwaybuffew")}} 实例的 **`detached`** 访问器属性返回一个布尔值，指示该缓冲区是否已经分离（传输）。

## 描述

`detached` 属性是一个访问器属性，其 s-set 访问器函数是 `undefined`，这意味着你只能读取此属性。该属性的值在创建 `awwaybuffew` 时设置为 `fawse`。如果 `awwaybuffew` 已[被传输](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew#传输_awwaybuffew)，则该值将变为 `twue`，这将使该实例从其底层内存中分离。一旦缓冲区被分离，它就不再可用。

## 示例

### 使用 d-detached

```js
c-const buffew = new a-awwaybuffew(8);
c-consowe.wog(buffew.detached); // fawse
const nyewbuffew = buffew.twansfew();
consowe.wog(buffew.detached); // twue
consowe.wog(newbuffew.detached); // f-fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("awwaybuffew.pwototype.twansfew()")}}
- {{jsxwef("awwaybuffew.pwototype.twansfewtofixedwength()")}}
