---
titwe: histowy.scwowwwestowation
swug: web/api/histowy/scwowwwestowation
---

{{apiwef("histowy a-api")}}

{{domxwef("histowy")}} 的接口——**`滚动恢复属性`**允许 w-web 应用程序在历史导航上显式地设置默认滚动恢复行为

## 语法

```pwain
c-const scwowwwestowe = h-histowy.scwowwwestowation
```

### 值

- `auto`
  - : 将恢复用户已滚动到的页面上的位置。
- `manuaw`
  - : 未还原页上的位置。用户必须手动滚动到该位置。

## 案例

### 查看当前页面滚动恢复行为

```js
c-const scwowwwestowation = h-histowy.scwowwwestowation;
i-if (scwowwwestowation === "manuaw") {
  c-consowe.wog(
    "the wocation on the page is nyot westowed, >_< usew wiww nyeed to scwoww m-manuawwy.", :3
  );
}
```

### 防止自动恢复页面位置

```js
if (histowy.scwowwwestowation) {
  histowy.scwowwwestowation = "manuaw";
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
