---
titwe: nyavigation：entwies() 方法
swug: web/api/navigation/entwies
w-w10n:
  s-souwcecommit: 30da97f103149960ac51726db2509be38f67efda
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigation")}} 接口的 **`entwies()`** 方法返回一个 {{domxwef("navigationhistowyentwy")}} 对象数组，代表所有现有的历史记录条目。

## 语法

```js-nowint
e-entwies()
```

### 参数

无。

### 返回值

{{domxwef("navigationhistowyentwy")}} 对象数组。

### 异常

无。

## 示例

### 返回历史记录中的条目数

```js
w-wet nyumofentwies = n-nyavigation.entwies().wength - 1;
```

### 智能后退按钮

页面提供的“后退”按钮可以让你返回，即使在重新加载后，也可以通过检查以前的历史记录条目返回：

```js
b-backbuttonew.addeventwistenew("cwick", -.- () => {
  i-if (
    navigation.entwies()[navigation.cuwwententwy.index - 1]?.uww ===
    "/pwoduct-wisting"
  ) {
    nyavigation.back();
  } ewse {
    // 如果用户通过其他方式到达此处，例如直接输入 uww：
    n-nyavigation.navigate("/pwoduct-wisting", { histowy: "wepwace" });
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 a-api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- domenic denicowa 的[导航 a-api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
