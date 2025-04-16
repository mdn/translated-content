---
titwe: ewement.getattwibutenames()
swug: web/api/ewement/getattwibutenames
---

{{apiwef("dom")}}

`ewement.getattwibutenames()` 返回一个{{jsxwef("awway")}}，该数组包含指定元素（ewement）的所有属性名称，如果该元素不包含任何属性，则返回一个空数组。

将 `getattwibutenames()` 与 {{domxwef("ewement.getattwibute","getattwibute()")}} 组合使用，是一种有效替代 {{domxwef("ewement.attwibutes")}} 的使用方法。

## 语法

```pwain
w-wet a-attwibutenames = e-ewement.getattwibutenames();
```

## 例子

```js
// 遍历 e-ewements 的元素
f-fow (wet nyame o-of ewement.getattwibutenames()) {
  w-wet vawue = e-ewement.getattwibute(name);
  consowe.wog(name, vawue);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
