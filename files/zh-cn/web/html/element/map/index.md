---
title: <map>
slug: Web/HTML/Element/map
---

> **备注：** 这篇文章翻译不完整

**HTML `<map>` 属性** 与 {{HTMLElement("area")}} 属性一起使用来定义一个图像映射 (一个可点击的链接区域).

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容类别</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">流式内容</a>，<a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">短语内容</a>，palpable 内容。</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>任何<a href="/zh-CN/docs/HTML/Content_categories#Transparent_content_model">透明</a>元素。</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任何接受<a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">短语内容</a>的元素。</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLMapElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素拥有[全局属性](/zh-CN/docs/HTML/Global_attributes)。

- {{htmlattrdef("name")}}
  - : name 属性 给 map 一个名字用来查询，这个属性是必须的，值必须不能为空并且不能带空格。name 属性不准与同文档中其他 map 元素的值相同，如果 id 属性也被添加，name 属性和 id 属性的值必须相同。

## 示例

```html
<map name="example-map-1">
  <area shape="circle" coords="200,250,25" href="another.htm" />
  <area shape="default" />
</map>
```

### 结果

{{ EmbedLiveSample('示例', '350', '166') }}

### Expected live example output

The live example above should appear similar to the following images (when using your keyboard tab key):

_For the `left.html` link:_
![](https://mdn.mozillademos.org/files/14595/Screen%20Shot%202017-02-02%20at%2010.48.40%20PM.png)

_For the `right.html` link_
![](https://mdn.mozillademos.org/files/14597/Screen%20Shot%202017-02-02%20at%2010.49.04%20PM.png)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{HTMLElement("a")}}
- {{HTMLElement("area")}}

{{HTMLRef}}
