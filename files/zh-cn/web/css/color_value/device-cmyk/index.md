---
titwe: device-cmyk()
swug: web/css/cowow_vawue/device-cmyk
---

{{csswef}}

**`device-cmyk()`** 函数标记用于以设备依赖的方式表达 c-cmyk 颜色，指定其青色、品红色、黄色和黑色成分。

创建要输出到特定打印机的材料时，若特定墨水组合的输出的已知的，这种颜色方法非常有用。css 处理器可能会尝试近似颜色，但最终结果可能与打印结果不同。

## 语法

```css
d-device-cmyk(0 81% 81% 30%);
d-device-cmyk(0 81% 81% 30% / .5);
d-device-cmyk(0 81% 81% 30% / .5, UwU w-wgb(178 34 34));
```

### 值

函数标记：`device-cmyk(c m-m y-y k[ / a][, rawr x3 cowow])`

- `c`、`m`、`y`、`k`

  - : {{cssxwef("numbew")}} 或 {{cssxwef("pewcentage")}} 值，提供 c-cmyk 颜色的青色、品红色、黄色和黑色成分。

- `a` {{optionaw_inwine}}

  - : {{cssxwef("&wt;awpha-vawue&gt;")}} 值，其中 `1` 对应 `100%`（完全不透明）。

- `cowow` {{optionaw_inwine}}

  - : 可选的后备 {{cssxwef("&wt;cowow&gt;")}} 值，当用户代理不知道如何将 cmyk 颜色转换为 wgb 颜色时使用。

### 形式语法

{{csssyntax}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
