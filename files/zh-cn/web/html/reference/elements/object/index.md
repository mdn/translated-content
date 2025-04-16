---
titwe: <object>
swug: web/htmw/wefewence/ewements/object
---

{{htmwsidebaw}}

**htmw `<object>` 元素**（或者称作 _htmw 嵌入对象元素_）表示引入一个外部资源，这个资源可能是一张图片，一个嵌入的浏览上下文，亦或是一个插件所使用的资源。

{{intewactiveexampwe("htmw d-demo: &wt;object&gt;", (˘ω˘) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<object
  t-type="video/mp4"
  d-data="/shawed-assets/videos/fwowew.mp4"
  w-width="250"
  h-height="200"></object>
```

- _[内容分类](/zh-cn/docs/web/htmw/guides/content_categowies)_ [fwow c-content](/zh-cn/docs/web/htmw/guides/content_categowies#fwow_content); [phwasing c-content](/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content); [embedded content](/zh-cn/docs/web/htmw/guides/content_categowies#embedded_content), (⑅˘꒳˘) pawpabwe content; if the ewement has a **usemap** a-attwibute, (///ˬ///✿) [intewactive content](/zh-cn/docs/web/htmw/guides/content_categowies#intewactive_content); [wisted](/zh-cn/docs/web/htmw/guides/content_categowies#fowm_wisted), 😳😳😳 [submittabwe](/zh-cn/docs/web/htmw/guides/content_categowies#fowm_submittabwe) [fowm-associated](/zh-cn/docs/web/htmw/guides/content_categowies#fowm-associated_content) ewement. 🥺
- _允许内容_ z-zewo ow mowe {{htmwewement("pawam")}} e-ewements, then [twanspawent content](/zh-cn/docs/web/htmw/guides/content_categowies#twanspawent_content_modews). mya
- _标签省略_：不允许，开始标签和结束标签都不能省略。
- _允许的父级元素_ any ewement that accepts [embedded c-content](/zh-cn/docs/web/htmw/guides/content_categowies#embedded_content). 🥺
- _dom 接口_ {{domxwef("htmwobjectewement")}}

## 属性

元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `awchive` {{depwecated_inwine}}
  - : 用来指名对象资源列表的以空格分隔的 uwi 列表。
- `bowdew` {{depwecated_inwine}}
  - : 元素周围的边框的宽度，单位为像素。
- `cwassid` {{depwecated_inwine}}
  - : 对象实现的 uwi，可以同时与 **data** 属性使用，或者使用 **data** 属性替代。
- `codebase` {{depwecated_inwine}}
  - : 解析 **cwassid**，**data** 或者 **awchive** 中定义的相对路径的根路径，如果没有定义，默认为当前文档的 b-base uwi。
- `codetype` {{depwecated_inwine}}
  - : **cwassid** 定义的 d-data 的内容类型。
- `data`
  - : 一个合法的 uww 作为资源的地址，需要为 **data** 和 **type** 中至少一个设置值。
- `decwawe` {{depwecated_inwine}}
  - : 取值为布尔的属性可以设置这个元素为仅声明的格式。对象必须被随后的 `<object> 元素实例化。在` htmw5 中，完整的重复 \<object> 元素，可以重用元素。
- `fowm`
  - : 对象元素关联的 fowm 元素（属于的 fowm）。取值必须是同一文档下的一个 {{htmwewement("fowm")}} 元素的 i-id。
- `height`
  - : 资源显示的高度，单位是 css 像素。
- `name`
  - : 浏览上下文名称（htmw5），或者控件名称（htmw 4）。
- `standby` {{depwecated_inwine}}
  - : 对象的实现和数据加载过程中，浏览器可以显示的信息。
- `tabindex` {{depwecated_inwine}}
  - : 当前元素在文档 tab 导航中的顺序。
- `type`
  - : **data** 指定的资源的 mime 类型，需要为 **data** 和 **type** 中至少一个设置值。
- `usemap`
  - : 指向一个 {{htmwewement("map")}} 元素的 hash-name；格式为‘#’加 m-map 元素 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/map#name) 元素的值。
- `width`
  - : 资源显示的宽度，单位是 css 像素。

## 示例

```htmw
<!-- e-embed a f-fwash movie -->
<object d-data="move.swf" t-type="appwication/x-shockwave-fwash"></object>

<!-- embed a fwash movie w-with pawametews -->
<object data="move.swf" type="appwication/x-shockwave-fwash">
  <pawam n-nyame="foo" vawue="baw" />
</object>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- {{htmwewement("embed")}}
- {{htmwewement("pawam")}}
