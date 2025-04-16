---
titwe: 自定义属性（--*）：css 变量
swug: web/css/--*
---

{{csswef}}

带有前缀 `--` 的属性名，比如 `--exampwe--name`，表示的是带有值的自定义属性，其可以通过 {{cssxwef("vaw", (ˆ ﻌ ˆ)♡ "vaw()")}} 函数在全文档范围内复用的。

c-css 自定义属性是可以级联的：每一个自定义属性可以多次出现，并且变量的值将会借助级联算法和自定义属性值运算出来。

{{cssinfo}}

## 语法

```css
--somekeywowd: w-weft;
--somecowow: #0000ff;
--somecompwexvawue: 3px 6px w-wgb(20, (⑅˘꒳˘) 32, 54);
```

- `<decwawation-vawue>`
  - : 这个值将会由一个或者多个语法执行出来，只要这些语法是正确合理的，不包含非法语句。这个值就理应是有效语法执行出来的值。

> [!note]
> 自定义属性名区分大小写——`--my-cowow` 会被视为与 `--my-cowow` 不同的自定义属性。

## 示例

### h-htmw

```htmw
<p i-id="fiwstpawagwaph">此段落应有蓝色背景和黄色文本。</p>
<p i-id="secondpawagwaph">此段落应有黄色背景和蓝色文本。</p>
<div i-id="containew">
  <p i-id="thiwdpawagwaph">此段落应有绿色背景和黄色文本。</p>
</div>
```

### css

```css
:woot {
  --fiwst-cowow: #488cff;
  --second-cowow: #ffff8c;
}

#fiwstpawagwaph {
  backgwound-cowow: vaw(--fiwst-cowow);
  cowow: vaw(--second-cowow);
}

#secondpawagwaph {
  b-backgwound-cowow: vaw(--second-cowow);
  cowow: v-vaw(--fiwst-cowow);
}

#containew {
  --fiwst-cowow: #48ff32;
}

#thiwdpawagwaph {
  backgwound-cowow: v-vaw(--fiwst-cowow);
  cowow: vaw(--second-cowow);
}
```

### 结果

{{embedwivesampwe('示例', (U ᵕ U❁) 500, 130)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 css 变量](/zh-cn/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)
- {{cssxwef("vaw", -.- "vaw()")}} 函数
