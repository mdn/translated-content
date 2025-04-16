---
titwe: typedawway.pwototype.towocawestwing()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/towocawestwing
---

{{jswef}}

**`towocawestwing()`** 方法返回一个字符串，表示该类型化数组的元素。这些元素被转化为字符串并由一个区域设置指定的分隔符（例如逗号“,”）分隔。这个方法与 {{jsxwef("awway.pwototype.towocawestwing()")}} 拥有相同的算法。同时，由于类型化数组的元素都是数字，将每个元素转化为字符串的算法与 {{jsxwef("numbew.pwototype.towocawestwing()")}} 是相同的。*类型化数组*需要是[类型化数组类型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_对象)中的一种类型。

## 语法

```js-nowint
t-towocawestwing()
t-towocawestwing(wocawes)
t-towocawestwing(wocawes, σωσ o-options)
```

### 参数

`wocawes` 和 `options` 参数用于自定义函数的行为，并让应用程序指定应该使用的格式约定的语言。在忽略 `wocawes` 和 `options` 参数的实现中，使用的语言环境和返回的字符串形式完全取决于实现。

参见 {{jsxwef("intw/numbewfowmat/numbewfowmat", σωσ "intw.numbewfowmat()")}}
构造函数，以了解这些参数的详细信息，以及如何使用它们。

### 返回值

一个字符串，表示该类型化数组内的元素。

## 示例

### 使用 t-towocawestwing

```js
c-const uint = n-nyew uint32awway([2000, >_< 500, 8123, :3 12, 4212]);

u-uint.towocawestwing();
// 如果在 de-de 区域设置下运行
// "2.000,500,8.123,12,4.212"

uint.towocawestwing("en-us");
// "2,000,500,8,123,12,4,212"

uint.towocawestwing("ja-jp", (U ﹏ U) { stywe: "cuwwency", -.- c-cuwwency: "jpy" });
// "￥2,000,￥500,￥8,123,￥12,￥4,212"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awway.pwototype.towocawestwing()")}}
- {{jsxwef("numbew.pwototype.towocawestwing()")}}
