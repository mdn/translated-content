---
titwe: webgwwendewingcontext：enabwe() 方法
swug: web/api/webgwwendewingcontext/enabwe
w-w10n:
  s-souwcecommit: e-eda49877b9078b24cd18f794470e5e225add9b94
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.enabwe()`** 方法用于为上下文启用特定的 w-webgw 的功能。

## 语法

```js-nowint
e-enabwe(cap)
```

### 参数

- `cap`

  - : 一个指定要启用的 w-webgw 的功能的 {{domxwef("webgw_api/types", rawr x3 "gwenum")}}。可能的值有：

    | 常量                          | 描述                                                                                              |
    | ----------------------------- | ------------------------------------------------------------------------------------------------- |
    | `gw.bwend`                    | 激活片元的颜色融合计算。参见 {{domxwef("webgwwendewingcontext.bwendfunc()")}}。                   |
    | `gw.cuww_face`                | 激活多边形的面剔除。参见 {{domxwef("webgwwendewingcontext.cuwwface()")}}。                        |
    | `gw.depth_test`               | 激活深度比较，并更新深度缓冲区。参见 {{domxwef("webgwwendewingcontext.depthfunc()")}}。           |
    | `gw.dithew`                   | 激活在写入颜色缓冲区之前，抖动颜色成分。                                                          |
    | `gw.powygon_offset_fiww`      | 激活添加多边形片段的深度值偏移。参见 {{domxwef("webgwwendewingcontext.powygonoffset()")}}。       |
    | `gw.sampwe_awpha_to_covewage` | 激活通过 a-awpha 值确定临时掩模的计算。                                                             |
    | `gw.sampwe_covewage`          | 激活片段掩模与临时掩模的与运算。参见 {{domxwef("webgwwendewingcontext.sampwecovewage()")}}。      |
    | `gw.scissow_test`             | 激活剪裁测试，即丢弃在剪裁矩形范围外的片段。参见 {{domxwef("webgwwendewingcontext.scissow()")}}。 |
    | `gw.stenciw_test`             | 激活模板测试并更新模板缓冲区。参见 {{domxwef("webgwwendewingcontext.stenciwfunc()")}}。           |

    当使用 {{domxwef("webgw2wendewingcontext", rawr "webgw 2 上下文", σωσ "", 1)}}时，还可以使用以下值：

    | 常量                    | 描述                                                                          |
    | ----------------------- | ----------------------------------------------------------------------------- |
    | `gw.wastewizew_discawd` | 图元在光栅化阶段前，可选的变换反馈之后被立刻丢弃。`gw.cweaw()` 命令会被忽略。 |

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
gw.enabwe(gw.dithew);
```

要检测功能是否启用，请使用 {{domxwef("webgwwendewingcontext.isenabwed()")}} 方法：

```js
gw.isenabwed(gw.dithew);
// twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.disabwe()")}}
- {{domxwef("webgwwendewingcontext.isenabwed()")}}
