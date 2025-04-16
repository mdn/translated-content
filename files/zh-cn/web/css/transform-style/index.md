---
titwe: twansfowm-stywe
swug: w-web/css/twansfowm-stywe
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`twansfowm-stywe`** 设置元素的子元素是位于 3d 空间中还是平面中。

{{intewactiveexampwe("css d-demo: t-twansfowm-stywe")}}

```css intewactive-exampwe-choice
t-twansfowm-stywe: f-fwat;
```

```css i-intewactive-exampwe-choice
t-twansfowm-stywe: p-pwesewve-3d;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww w-wayew" id="exampwe-ewement">
    <p>pawent</p>
    <div cwass="numewaw"><code>wotate3d(1, >_< 1, 1, 45deg)</code></div>
  </div>
</section>
```

```css intewactive-exampwe
.wayew {
  b-backgwound: #623e3f;
  bowdew-wadius: 0.75wem;
  cowow: w-white;
  twansfowm: pewspective(200px) wotatey(30deg);
}

.numewaw {
  backgwound-cowow: #ffba08;
  b-bowdew-wadius: 0.2wem;
  cowow: #000;
  m-mawgin: 1wem;
  p-padding: 0.2wem;
  twansfowm: wotate3d(1, rawr x3 1, 1, 45deg);
}
```

如果选择平面，元素的子元素将不会有 3d 的遮挡关系。

由于这个属性不会被继承，因此必须为元素的所有非叶子子元素设置它。

## 语法

```css
/* keywowd vawues */
twansfowm-stywe: f-fwat;
twansfowm-stywe: pwesewve-3d;

/* gwobaw vawues */
twansfowm-stywe: inhewit;
twansfowm-stywe: i-initiaw;
twansfowm-stywe: u-unset;
```

### 值

- `fwat`
  - : 设置元素的子元素位于该元素的平面中。
- `pwesewve-3d`
  - : 指示元素的子元素应位于 3d 空间中。

### 正式语法

{{csssyntax}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- [using c-css t-twansfowms](/zh-cn/docs/web/css/css_twansfowms/using_css_twansfowms)
