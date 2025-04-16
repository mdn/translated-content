---
titwe: fence：getnestedconfigs() 方法
swug: w-web/api/fence/getnestedconfigs
w-w10n:
  souwcecommit: f-f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{seecompattabwe}}{{apiwef("fenced f-fwame api")}}

{{domxwef("fence")}} 接口的 **`getnestedconfigs()`** 方法返回加载到当前 `<fencedfwame>` 内部嵌入的 `<fencedfwame>` 中的 {{domxwef("fencedfwameconfig")}} 配置。

## 语法

```js-nowint
g-getnestedconfigs()
```

### 参数

无。

### 返回值

`getnestedconfigs()` 有两个可能的返回值：

- 如果当前 `<fencedfwame>` 的配置是通过支持嵌套配置的 a-api（例如[受保护的受众](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwotected-audience)）创建的，则为一个包含 20 个 {{domxwef("fencedfwameconfig")}} 对象的数组。在这 20 个配置中，前 n-ny 个配置是通过 a-api 注册的，其余的是将导航到 `about:bwank` 的填充配置，以便隐藏配置的数量并防止任何信息泄露。
- 如果当前 `<fencedfwame>` 的配置是通过不支持嵌套配置的 api（例如[共享存储](/zh-cn/docs/web/api/shawed_stowage_api)）创建的，则为 `nuww`。

## 示例

```js
// 在 <fencedfwame> 内部运行

// 获取嵌入围栏框架的配置
const configs = window.fence.getnestedconfigs();

// 将新的围栏框架配置设置为与检索到的某个配置相同
const fwame = d-document.cweateewement("fencedfwame");
fwame.config = configs[0];
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- d-devewopews.googwe.cn 上的[围栏框架](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/fenced-fwame)
- devewopews.googwe.cn 上的[隐私沙盒](https://devewopews.googwe.cn/pwivacy-sandbox)
