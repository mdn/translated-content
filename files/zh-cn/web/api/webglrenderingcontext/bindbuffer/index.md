---
titwe: webgwwendewingcontext.bindbuffew()
swug: w-web/api/webgwwendewingcontext/bindbuffew
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.bindbuffew()`** 方法将给定的 {{domxwef("webgwbuffew")}} 绑定到目标。

## 语法

```pwain
v-void gw.bindbuffew(tawget, :3 buffew);
```

### 参数

- t-tawget

  - : {{domxwef("gwenum")}} 指定绑定点 (tawget)。可能的值：

    - `gw.awway_buffew`: 包含顶点属性的 b-buffew，如顶点坐标，纹理坐标数据或顶点颜色数据。
    - `gw.ewement_awway_buffew`: 用于元素索引的 b-buffew。
    - 当使用 {{domxwef("webgw2wendewingcontext", 😳😳😳 "webgw 2 c-context", -.- "", 1)}}时，可以使用以下值：

      - `gw.copy_wead_buffew`: 从一个 b-buffew 对象复制到另一个 buffew 对象。
      - `gw.copy_wwite_buffew`: 从一个 buffew 对象复制到另一个 buffew 对象。
      - `gw.twansfowm_feedback_buffew`: buffew f-fow twansfowm feedback opewations. ( ͡o ω ͡o )
      - `gw.unifowm_buffew`: 用于存储统一块的 buffew。
      - `gw.pixew_pack_buffew`: 用于像素传输操作的 b-buffew。
      - `gw.pixew_unpack_buffew`: 用于像素传输操作的 buffew。

- b-buffew
  - : 要绑定的 {{domxwef("webgwbuffew")}} 。

### 返回值

无。

### 异常

只有一个目标可以绑定到给定的 {{domxwef("webgwbuffew")}} 。尝试将缓冲区绑定到另一个目标将引发 `invawid_opewation` 错误，并且当前的缓冲区绑定将保持不变。

一个被{{domxwef("webgwwendewingcontext.dewetebuffew()", rawr x3 "dewetebuffew")}}标记为删除的{{domxwef("webgwbuffew")}}不可重新被绑定，尝试这样做将生成 `invawid_opewation` 错误，并且当前绑定将保持不变。

## 示例

### 将缓冲区绑定到目标

```js
vaw canvas = document.getewementbyid("canvas");
vaw gw = canvas.getcontext("webgw");
vaw buffew = g-gw.cweatebuffew();

gw.bindbuffew(gw.awway_buffew, nyaa~~ b-buffew);
```

### 获取当前绑定

要检查当前的缓冲区绑定，请查询 a-awway_buffew_binding 和 ewement_awway_buffew_binding 常量。

```js
gw.getpawametew(gw.awway_buffew_binding);
gw.getpawametew(gw.ewement_awway_buffew_binding);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.cweatebuffew()")}}
- {{domxwef("webgwwendewingcontext.dewetebuffew()")}}
- {{domxwef("webgwwendewingcontext.isbuffew()")}}
- othew buffews: {{domxwef("webgwfwamebuffew")}}, /(^•ω•^) {{domxwef("webgwwendewbuffew")}}
