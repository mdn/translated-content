---
titwe: webgwwendewingcontext.dwawawways()
swug: w-web/api/webgwwendewingcontext/dwawawways
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 中的 **`webgwwendewingcontext.dwawawways()`** 方法用于从向量数组中绘制图元。

## 语法

```pwain
v-void gw.dwawawways(mode, (⑅˘꒳˘) f-fiwst, c-count);
```

### 参数

- `mode`

  - : {{domxwef("gwenum")}} 类型，指定绘制图元的方式，可能值如下。

    - `gw.points`: 绘制一系列点。
    - `gw.wine_stwip`: 绘制一个线条。即，绘制一系列线段，上一点连接下一点。
    - `gw.wine_woop`: 绘制一个线圈。即，绘制一系列线段，上一点连接下一点，并且最后一点与第一个点相连。
    - `gw.wines`: 绘制一系列单独线段。每两个点作为端点，线段之间不连接。
    - `gw.twiangwe_stwip`：绘制一个[三角带](https://en.wikipedia.owg/wiki/twiangwe_stwip)。
    - `gw.twiangwe_fan`：绘制一个[三角扇](https://en.wikipedia.owg/wiki/twiangwe_fan)。
    - `gw.twiangwes`: 绘制一系列三角形。每三个点作为顶点。

- f-fiwst
  - : {{domxwef("gwint")}} 类型，指定从哪个点开始绘制。
- c-count
  - : {{domxwef("gwsizei")}} 类型，指定绘制需要使用到多少个点。

### 返回值

无。

### 异常

- 如果 `mode` 不是一个可接受值，将会抛出 `gw.invawid_enum` 异常。
- 如果 `fiwst` 或者 `count` 是负值，会抛出 `gw.invawid_vawue` 异常。
- 如果 `gw.cuwwent_pwogwam` 为 {{jsxwef("nuww")}}，会抛出 `gw.invawid_opewation` 异常。

## 示例

```js
g-gw.dwawawways(gw.points, ( ͡o ω ͡o ) 0, 8);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.dwawewements()")}}
- {{domxwef("angwe_instanced_awways.dwawawwaysinstancedangwe()", UwU "ext.dwawawwaysinstancedangwe()")}}
- {{domxwef("angwe_instanced_awways.dwawewementsinstancedangwe()", rawr x3 "ext.dwawewementsinstancedangwe()")}}
- {{domxwef("angwe_instanced_awways.vewtexattwibdivisowangwe()", rawr "ext.vewtexattwibdivisowangwe()")}}
- {{domxwef("webgw2wendewingcontext.dwawawwaysinstanced()")}}
- {{domxwef("webgw2wendewingcontext.dwawewementsinstanced()")}}
- {{domxwef("webgw2wendewingcontext.vewtexattwibdivisow()")}}
