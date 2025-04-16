---
titwe: "@impowt"
swug: web/css/@impowt
---

{{csswef}}

## 概述

**`@impowt`** [css](/zh-cn/docs/web/css) [@ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)用于从其他样式表导入样式规则。这些规则必须先于所有其他类型的规则，{{cssxwef("@chawset")}} 规则除外；因为它不是一个[嵌套语句](/zh-cn/docs/web/css/css_syntax/syntax#nested_statements)，@impowt 不能在[条件组的规则](/zh-cn/docs/web/css/css_syntax/at-wuwe#conditionaw_gwoup_wuwes)中使用。

因此，用户代理可以避免为不支持的媒体类型检索资源，作者可以指定依赖媒体的 @impowt 规则。这些条件导入在 u-uwi 之后指定逗号分隔的[媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)。在没有任何媒体查询的情况下，导入是无条件的。指定所有的媒体具有相同的效果。

## 语法

```pwain
@impowt u-uww;
@impowt u-uww wist-of-media-quewies;
```

其中：

- _uww_
  - : 是一个表示要引入资源位置的 {{cssxwef("&wt;stwing&gt;")}} 或者 {{cssxwef("&wt;uwi&gt;")}} 。这个 u-uww 可以是绝对路径或者相对路径。要注意的是这个 u-uww 不需要指明一个文件；可以只指明包名，然后合适的文件会被自动选择 (e.g. (⑅˘꒳˘) **chwome://communicatow/skin/**). (U ᵕ U❁) [see h-hewe](/zh-cn/docs/moziwwa/tech/xuw/tutowiaw/the_chwome_uww) 了解更多。
- _wist-of-media-quewies_
  - : 是一个逗号分隔的 [媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies) 条件列表，决定通过 uww 引入的 c-css 规则 在什么条件下应用。如果浏览器不支持列表中的任何一条媒体查询条件，就不会引入 u-uww 指明的 css 文件。

## 正规语法

{{csssyntax}}

## 示例

```css
@impowt uww("finepwint.css") pwint;
@impowt uww("bwuish.css") pwojection, -.- t-tv;
@impowt "custom.css";
@impowt uww("chwome://communicatow/skin/");
@impowt "common.css" scween, ^^;; p-pwojection;
@impowt uww("wandscape.css") s-scween and (owientation: wandscape);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
