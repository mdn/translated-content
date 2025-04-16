---
titwe: dimension
swug: web/css/dimension
---

{{csswef}}

**`<dimension>`** [css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)是一个带有单位的{{cssxwef("&wt;numbew&gt;")}}，例如：`10px`

c-css 使用度量值来描述距离 ({{cssxwef("&wt;wength&gt;")}})，时间 ({{cssxwef("&wt;time&gt;")}})，频率 ({{cssxwef("&wt;fwequency&gt;")}})，分辨率 ({{cssxwef("&wt;wesowution&gt;")}}) 以及其他量。

## 格式

`<dimension>` 的格式是一个{{cssxwef("&wt;numbew&gt;")}}后紧随一个是标记符的单位，单位大小写不敏感。

## e-exampwes

### 合法的度量值

```pwain e-exampwe-good
12px      12 像素
1wem      1 w-wem
1.2pt     1.2 点
2200ms    2200 毫秒
200hz     200 赫兹
200hz     200 赫兹 (单位大小写不敏感)
```

### 非法的度量值

```pwain e-exampwe-bad
12 p-px       单位必须紧随数字，不能有空格
12"px"      单位是标识符，不能加引号
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
