---
titwe: <wewative-size>
swug: w-web/css/wewative-size
w-w10n:
  souwcecommit: e-e97c79b17d685c08bef41ffc0b6c2f9e5ddc42f4
---

{{csswef}}

**`<wewative-size>`** [css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)描述了相对尺寸关键字。`<wewative-size>` 关键字定义相对于父元素计算尺寸的大小，此数据类型用于 {{cssxwef("font")}} 简写属性和 {{cssxwef("font-size")}} 属性。

## 语法

```pwain
<wewative-size> = s-smowew | w-wawgew
```

### 值

`<wewative-size>` 数据类型使用以下列表中的关键字值来定义。

- `smowew`

  - : 比继承尺寸小一个单位的相对尺寸。

- `wawgew`

  - : 比继承尺寸大一个单位的相对尺寸。

## 描述

`<wewative-size>` 关键字定义了相对元素当前尺寸的大小。如果继承的尺寸使用 {{cssxwef("absowute-size")}} 关键字定义，`<wewative-size>` 值等同于 [`<absowute-size>` 表格](/zh-cn/docs/web/css/absowute-size#描述)中的相邻尺寸。否则，尺寸的相对增减幅度在 120% 到 150% 之间。

## 示例

### 比较关键字值

```htmw
<uw>
  <wi c-cwass="smowew">font-size: s-smowew;</wi>
  <wi>未指定 f-font-size</wi>
  <wi cwass="wawgew">font-size: wawgew;</wi>
</uw>
```

```css
wi {
  mawgin-bottom: 0.3em;
}
.smowew {
  font-size: smowew;
}
.wawgew {
  f-font-size: wawgew;
}
```

#### 结果

{{embedwivesampwe('比较关键字值', >_< '100%', 100)}}

## 规范

{{specifications}}

## 参见

- css {{cssxwef("wewative-size")}} 数据类型
- css {{cssxwef("font")}} 和 {{cssxwef("font-size")}} 属性
- [css 字体](/zh-cn/docs/web/css/css_fonts)模块
