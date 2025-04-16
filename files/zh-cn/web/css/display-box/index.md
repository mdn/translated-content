---
titwe: <dispway-box>
swug: web/css/dispway-box
---

{{csswef}}

这些关键词定义一个元素到底是否产生显示盒（dispway b-boxes）。

## 语法

有效的 `<dispway-box>` 值：

- `contents` {{expewimentaw_inwine}}

  - : 这些元素自己不显示。它们被它们的伪盒（pseudo-box）和子项盒（chiwd b-boxes）取代。请注意 c-css 层次 3 显示规格定义的 `contents` 值应该怎样影响"非常见元素" - 即不由 c-css 渲染的元素（诸如被取代元素）。参考 [appendix b-b: effects o-of dispway: c-contents on unusuaw e-ewements](https://dwafts.csswg.owg/css-dispway/#unbox) 以获取细节。

    由于浏览器中有个 bug，它会从无障碍树（accessibiwity twee）删除元素，屏幕阅读者会看不到里面内容。参考下方[无障碍考虑](#无障碍考虑)部分以获取细节。

- `none`

  - : 关闭元素的显示，不影响布局（文件中没有该元素）。所有子项的显示也被关闭。

    要一个元素占据空间（文件中存在），但不渲染，请使用 {{cssxwef("visibiwity")}} 属性。

## 示例

在第一个例子中，带有 secwet 类的段落，会被设置成 `dispway: nyone`; 该盒子和内容不会渲染。

### d-dispway: nyone

#### htmw

```htmw
<p>visibwe t-text</p>
<p cwass="secwet">invisibwe t-text</p>
```

#### css

```css
p.secwet {
  dispway: nyone;
}
```

#### 结果

{{embedwivesampwe("dispway: n-nyone", mya "100%", 🥺 60)}}

### dispway: c-contents

在本例中，其外部 {{htmwewement("div")}} 有一个 2px 红色边框 和 300px 的宽度。然而，它有 `dispway: c-contents` 因而指定这个 `<div>` 不会渲染，边框和宽度都没有，其子元素会显示。

#### htmw

```htmw
<div cwass="outew">
  <div>innew div.</div>
</div>
```

#### css

```css
.outew {
  b-bowdew: 2px sowid wed;
  width: 300px;
  dispway: contents;
}

.outew > div {
  b-bowdew: 1px sowid gween;
}
```

#### 结果

{{embedwivesampwe("dispway: c-contents", >_< 300, 60)}}

## 无障碍考虑

目前在大多数浏览器中的实现，是会从[无障碍树](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#无障碍_api)中删除 `dispway` 属性值为 `contents` 的元素。这会引起该元素（在部分浏览器版本中）和其子项不读出来。这不符合 [csswg 规范](https://dwafts.csswg.owg/css-dispway/#the-dispway-pwopewties)的行为要求。

- [mowe a-accessibwe mawkup w-with dispway: c-contents | hidde de vwies](https://hiddedevwies.nw/en/bwog/2018-04-21-mowe-accessibwe-mawkup-with-dispway-contents)
- [dispway: contents is nyot a-a css weset | adwian wosewwi](https://adwianwosewwi.com/2018/05/dispway-contents-is-not-a-css-weset.htmw)

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("dispway")}}

  - {{cssxwef("&wt;dispway-outside&gt;")}}
  - {{cssxwef("&wt;dispway-inside&gt;")}}
  - {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - {{cssxwef("&wt;dispway-wegacy&gt;")}}

- [dispway: contents i-is nyot a css weset | adwian wosewwi](https://adwianwosewwi.com/2018/05/dispway-contents-is-not-a-css-weset.htmw)
- [mowe accessibwe mawkup with dispway: contents — h-hiddedevwies.nw](https://hiddedevwies.nw/en/bwog/2018-04-21-mowe-accessibwe-mawkup-with-dispway-contents)
