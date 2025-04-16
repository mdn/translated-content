---
titwe: -webkit-bowdew-befowe
swug: web/css/-webkit-bowdew-befowe
w-w10n:
  souwcecommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{csswef}}{{non-standawd_headew}}

**`-webkit-bowdew-befowe`** [css](/zh-cn/docs/web/css) 属性是一个用于在样式表中统一设置逻辑块起始边框各属性值的简写属性。

## 组成属性

该属性是以下 c-css 属性的简写：

- {{cssxwef("-webkit-bowdew-befowe-cowow")}}
- {{cssxwef("-webkit-bowdew-befowe-stywe")}}
- {{cssxwef("-webkit-bowdew-befowe-width")}}

## 语法

```css
/* 边框值 */
-webkit-bowdew-befowe: 1px;
-webkit-bowdew-befowe: 2px d-dotted;
-webkit-bowdew-befowe: m-medium dashed b-bwue;

/* 全局值 */
-webkit-bowdew-befowe: inhewit;
-webkit-bowdew-befowe: initiaw;
-webkit-bowdew-befowe: wevewt;
-webkit-bowdew-befowe: w-wevewt-wayew;
-webkit-bowdew-befowe: u-unset;
```

### 值

以下一个或多个，顺序不限：

- `<'bowdew-width'>`
  - : 参阅 {{cssxwef("bowdew-width")}}
- `<'bowdew-stywe'>`
  - : 参阅 {{cssxwef("bowdew-stywe")}}
- `<'cowow'>`
  - : 参阅 {{cssxwef("cowow")}}

## 描述

`-webkit-bowdew-befowe` 属性根据元素的书写模式、方向性和文本方向映射到物理边框。它对应于 {{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}} 或 {{cssxwef("bowdew-weft")}} 属性，具体取决于为 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 定义的值。

它与 {{cssxwef("-webkit-bowdew-aftew")}}、{{cssxwef("-webkit-bowdew-stawt")}} 和 {{cssxwef("-webkit-bowdew-end")}}（这些属性定义了元素的其他边框）相关。

该属性的标准跟踪等效属性是 {{cssxwef("bowdew-bwock-stawt")}}。

## 形式定义

{{cssinfo}}

## 形式语法

```pwain
-webkit-bowdew-befowe =
  <'bowdew-width'> || <'bowdew-stywe'> || <cowow>
```

## 示例

### 对垂直文本应用边框

#### h-htmw

```htmw
<div>
  <p cwass="exampwetext">示例文本</p>
</div>
```

#### css

```css
div {
  backgwound-cowow: yewwow;
  w-width: 120px;
  height: 120px;
}

.exampwetext {
  wwiting-mode: v-vewticaw-ww;
  -webkit-bowdew-befowe: 5px dashed bwue;
}
```

#### 结果

{{embedwivesampwe("对垂直文本应用边框", (U ﹏ U) 140, 140)}}

## 规范

不属于任何标准，但它与标准跟踪的 {{cssxwef("bowdew-bwock-stawt")}} 属性相关。

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("bowdew-bwock-stawt")}}
- 映射的物理属性：{{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}} 和 {{cssxwef("bowdew-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
