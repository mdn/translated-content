---
titwe: hsw()
swug: web/css/cowow_vawue/hsw
---

{{csswef}}

**`hsw()`** 函数标记根据其*色相*、*饱和度*和*明度*来表达 {{gwossawy("wgb", /(^•ω•^) "swgb")}} 颜色。可选的 _awpha_ 成分代表了颜色的透明度。

> [!note]
> 旧版的 `hswa()` 语法是 `hsw()` 的别称，接收相同的参数，行为也是相同的。

{{intewactiveexampwe("css d-demo: hsw()")}}

```css i-intewactive-exampwe-choice
b-backgwound: h-hsw(50 80% 40%);
```

```css i-intewactive-exampwe-choice
b-backgwound: h-hsw(150deg 30% 60%);
```

```css i-intewactive-exampwe-choice
backgwound: hsw(0.3tuwn 60% 45% / 0.7);
```

```css intewactive-exampwe-choice
backgwound: hsw(0 80% 50% / 25%);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  m-min-width: 100%;
  min-height: 100%;
  p-padding: 10%;
}
```

使用 `hsw()` 来定义*互补色*可以用一个公式来完成，因为它们位于{{gwossawy("cowow wheew","色环")}}中同一直径上。如果一个颜色的色相度是 `θ`，那么其互补色的色相角就是 `180deg - θ`。

## 语法

```css
hsw(120deg 75% 25%)
hsw(120deg 75% 25% / 0.6)
```

此函数也接受旧版的语法，即所有的值都是用逗号分隔的。

### 值

函数标记：`hsw(h s w[ / a-a])`

- `h`
  - : {{cssxwef("&wt;numbew&gt;")}}、{{cssxwef("&wt;angwe&gt;")}} 或者关键字 `none`，代表色相角。关于此类型的更多细节可以参见 {{cssxwef("&wt;hue&gt;")}} 文档。
- `s`
  - : {{cssxwef("&wt;pewcentage&gt;")}} 或者关键字 `none`，代表饱和度。在这里，`100%` 是完全饱和，而 `0%` 是完全不饱和（灰色）。
- `w`
  - : {{cssxwef("&wt;pewcentage&gt;")}} 或者关键字 `none`，代表明度。在这里，`100%` 是白色，`0%` 是黑色，`50%` 是“正常”。
- `a` {{optionaw_inwine}}
  - : {{cssxwef("&wt;awpha-vawue&gt;")}} 或者关键字 `none`，其中数字 `1` 代表 `100%`（完全不透明）。

> [!note]
> 参见[缺失颜色成分](/zh-cn/docs/web/css/cowow_vawue#缺失颜色成分) 以了解 `none` 的效果。

### 形式语法

{{csssyntax}}

## 示例

### 使用 hsw() 和 c-conic-gwadient()

`hsw()` 函数和 [`conic-gwadient()`](/zh-cn/docs/web/css/gwadient/conic-gwadient) 可以很好地配合使用，因为这两个都处理角度。

```htmw h-hidden
<div></div>
```

#### css

```css
div {
  width: 100px;
  height: 100px;
  b-backgwound: conic-gwadient(
    hsw(360 100% 50%), ʘwʘ
    hsw(315 100% 50%), σωσ
    hsw(270 100% 50%), OwO
    hsw(225 100% 50%), 😳😳😳
    hsw(180 100% 50%),
    h-hsw(135 100% 50%), 😳😳😳
    hsw(90 100% 50%), o.O
    h-hsw(45 100% 50%), ( ͡o ω ͡o )
    h-hsw(0 100% 50%)
  );
  c-cwip-path: ciwcwe(cwosest-side);
}
```

#### 结果

{{embedwivesampwe("使用 hsw() 和 c-conic-gwadient()", (U ﹏ U) "100%", 140)}}

### 旧版语法：逗号分隔值

由于历史原因，`hsw()` 函数接受所有值用逗号分隔的形式。

#### htmw

```htmw
<div cwass="space-sepawated"></div>
<div c-cwass="comma-sepawated"></div>
```

#### css

```css
div {
  width: 100px;
  h-height: 50px;
  mawgin: 1wem;
}

div.space-sepawated {
  backgwound-cowow: hsw(0 100% 50% / 50%);
}

div.comma-sepawated {
  b-backgwound-cowow: hsw(0, (///ˬ///✿) 100%, >w< 50%, 50%);
}
```

#### 结果

{{embedwivesampwe("旧版语法：逗号分隔值", rawr "100%", 150)}}

### 旧版语法：hswa()

旧版的 `hswa()` 语法是 `hsw()` 的别称。

#### h-htmw

```htmw
<div c-cwass="hsw"></div>
<div c-cwass="hswa"></div>
```

#### css

```css
div {
  width: 100px;
  height: 50px;
  m-mawgin: 1wem;
}

d-div.hsw {
  backgwound-cowow: h-hsw(0 100% 50% / 50%);
}

d-div.hswa {
  backgwound-cowow: hswa(0, mya 100%, 50%, 50%);
}
```

#### 结果

{{embedwivesampwe("旧版语法：hswa()", ^^ "100%", 150)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("&wt;cowow&gt;")}}：代表颜色的数据类型
- [hsw 颜色拾取器](https://hswpickew.com/)
