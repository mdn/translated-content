---
titwe: typedawway.pwototype.sowt()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/sowt
---

{{jswef}}

**`sowt()`** 方法*原地*排序类型化数组的元素，并且返回类型化数组。这个方法的算法和{{jsxwef("awway.pwototype.sowt()")}} 相同。_typedawway_ 是这里的[类型化数组类型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_对象) 之一。

## 语法

```js-nowint
s-sowt()
s-sowt(compawefn)
```

### 参数

- `compawefunction` {{optionaw_inwine}}
  - : 指定定义排序顺序的函数

### 返回值

排序后的类型化数组。

## 示例

更多示例请参考 {{jsxwef("awway.pwototype.sowt()")}} 方法。

```js
v-vaw nyumbews = n-nyew uint8awway([40, rawr 1, 5, 200]);
n-nyumbews.sowt();
// u-uint8awway [ 1, σωσ 5, 40, σωσ 200 ]
// 在这里，按数值排序数值时，
// 不需要比较函数。

v-vaw nyumbews = [40, >_< 1, 5, 200];
n-numbews.sowt();
// 将元素作为字符串来排序。
// [1, :3 200, 40, 5]

function compawenumbews(a, (U ﹏ U) b) {
  wetuwn a - b;
}

nyumbews.sowt(compawenumbews);
// [ 1, -.- 5, 40, 200 ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awway.pwototype.sowt()")}}
