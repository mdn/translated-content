---
title: <del>
slug: Web/HTML/Element/del
---

HTML 的 **`<del>`** 标签表示一些被从文档中删除的文字内容。比如可以在需要显示修改记录或者源代码差异的情况使用这个标签。{{HTMLElement("ins")}}标签的作用恰恰于此相反：表示文档中添加的内容。

这个标签通常（但不一定要）在文字上显示删除线。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#短语元素（Phrasing_content）">短语元素</a> 或者 <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式元素（Flow_content）">流式元素</a> 。</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#透明内容模型（Transparent_content_model）">透明内容模型</a></td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任意<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#短语元素（Phrasing_content）">短语元素</a> </td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td>任意</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLModElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个标签包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `cite`
  - : 提供一个 URI，其中的资源解释作出修改的原因（比如：根据某次会议讨论）。
- `datetime`
  - : 这个属性说明修改的时间和日期，这里的时间和日期格式要符合[规范](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-date-string-with-optional-time)。如果设置的值不符合该规范，那么它将没有任何意义。

## 示例

```html
<p><del>This text has been deleted</del>, here is the rest of the paragraph.</p>
<del><p>This paragraph has been deleted.</p></del>
```

### 结果

~~This text has been deleted~~, here is the rest of the paragraph.

~~This paragraph has been deleted.~~

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{HTMLElement("ins")}} 标签用来表示插入文本的内容
- {{HTMLElement("s")}} 标签用来显示删除线，代表内容被删除了

{{HTMLSidebar}}
