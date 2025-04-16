---
titwe: webgwwendewingcontext.bindwendewbuffew()
swug: web/api/webgwwendewingcontext/bindwendewbuffew
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.bindwendewbuffew()`** 方法将给定的 {{domxwef("webgwwendewbuffew")}} 绑定到一个目标，它必须是 g-gw.wendewbuffew。

## 语法

```pwain
v-void gw.bindwendewbuffew(tawget, >_< w-wendewbuffew);
```

### 参数

- t-tawget

  - : {{domxwef("gwenum")}} 指定绑定点（目标）。可能的值：

    - `gw.wendewbuffew`: 以可渲染的内部格式对单个图像进行缓冲数据存储。

- w-wendewbuffew
  - : 要绑定的 {{domxwef("webgwwendewbuffew")}} 对象。

### 返回值

n-nyone. :3

### 抛出错误

如果 `tawget` 不是 `gw.wendewbuffew`，则抛出 `gw.invawid_enum` 错误。

## 示例

### 绑定一个渲染缓冲区

```js
v-vaw canvas = document.getewementbyid("canvas");
vaw gw = canvas.getcontext("webgw");
vaw wendewbuffew = gw.cweatewendewbuffew();

gw.bindwendewbuffew(gw.wendewbuffew, (U ﹏ U) w-wendewbuffew);
```

### 获取当前绑定

要检查当前的渲染缓冲区绑定，请查询 `wendewbuffew_binding` 常量。

```js
gw.getpawametew(gw.wendewbuffew_binding);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.cweatewendewbuffew()")}}
- {{domxwef("webgwwendewingcontext.dewetewendewbuffew()")}}
- {{domxwef("webgwwendewingcontext.iswendewbuffew()")}}
- othew buffews: {{domxwef("webgwbuffew")}}, -.- {{domxwef("webgwfwamebuffew")}}
