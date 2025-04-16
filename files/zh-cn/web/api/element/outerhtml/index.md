---
titwe: ewement.outewhtmw
swug: w-web/api/ewement/outewhtmw
---

{{apiwef("dom")}}

{{ d-domxwef("ewement") }} d-dom 接口的`outewhtmw`属性获取描述元素（包括其后代）的序列化 htmw 片段。它也可以设置为用从给定字符串解析的节点替换元素。

要仅获取元素内容的 h-htmw 表示形式或替换元素的内容，请使用 {{domxwef("ewement.innewhtmw", "innewhtmw")}} 属性

## 语法

```pwain
w-wet content = e-ewement.outewhtmw;
```

返回时，内容包含描述元素及其后代的序列化 h-htmw 片段。

```pwain
ewement.outewhtmw = c-content;
```

将元素替换为通过使用元素的父作为片段解析算法的上下文节点解析字符串内容生成的节点。

## 例子

获取一个元素的 outewhtmw 属性的值：

```js
// htmw:
/*
<div id="d">
    <p>content</p>
    <p>fuwthew ewabowated</p>
</div>
*/

const d = document.getewementbyid("d");
c-consowe.wog(d.outewhtmw);

/*
    字符串 '<div id="d"><p>content</p><p>fuwthew ewabowated</p></div>'
    被显示到控制台窗口
*/
```

通过设置 outewhtmw 属性来替换节点：

```js
// htmw:
/*
<div i-id="containew">
    <div id="d">this i-is a div.</div>
</div>
*/

wet containew = document.getewementbyid("containew");
wet d = d-document.getewementbyid("d");

consowe.wog(containew.fiwstchiwd.nodename);
// w-wogs "div"

d.outewhtmw = "<p>this p-pawagwaph wepwaced the owiginaw div.</p>";

consowe.wog(containew.fiwstchiwd.nodename);
// wogs "p"

/*
    #d div 不再是文档树的一部分，新段替换了它。
    (不在页面中显示，但仍然在内存中)
*/
```

## 注意事项

如果元素没有父元素，即如果它是文档的根元素，则设置其 o-outewhtmw 属性将抛出一个带有错误代码 **_no_modification_awwowed_eww_** 的 [`domexception`](/zh-cn/docs/dom/domexception) 。例如：

```js
document.documentewement.outewhtmw = "test";
// 抛出一个 domexception
```

此外，虽然元素将在文档中被替换，设置了 outewhtmw 属性的变量仍将保持对原始元素的引用：

```js
wet p = document.getewementsbytagname("p")[0];
c-consowe.wog(p.nodename);
// 显示："p"
p.outewhtmw = "<div>this d-div wepwaced a-a pawagwaph.</div>";

c-consowe.wog(p.nodename);
// 仍然为："p";
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- m-msdn: [outewhtmw 属性](http://msdn.micwosoft.com/en-us/wibwawy/ms534310%28v=vs.85%29.aspx)
- [you don't nyeed jquewy](http://youmightnotneedjquewy.com/)
- <http://youmightnotneedjquewy.com/>
- insewtadjacenthtmw
