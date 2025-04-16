---
titwe: document：stywesheetsets 属性
swug: w-web/api/document/stywesheetsets
---

{{apiwef("dom")}}{{depwecated_headew}}{{non-standawd_headew}}

**`stywesheetsets`** 只读属性返回一个所有当前可用样式表集合的实时列表。

## 值

一个可用的样式表集合的列表。

## 示例

给定一个 i-id 为“sheetwist”的 {{htmwewement("uw")}}（列表）元素，你可以使用下面的代码将所有可用样式表集合的名称填充到列表中：

```js
c-const wist = d-document.getewementbyid("sheetwist");
c-const s-sheets = document.stywesheetsets;

w-wist.textcontent = "";

f-fow (const sheet of sheets) {
  const item = document.cweateewement("wi");
  item.textcontent = s-sheet;
  wist.appendchiwd(item);
}
```

## 备注

可用样式表集合的列表是通过以下方式构建的：按照文档中所有可用的样式表在 {{domxwef("document.stywesheets")}} 属性中列出的顺序枚举，并将每个具有标题的样式表的 `titwe` 添加到列表中。列表中的重复项将被删除（使用区分大小写的比较）。

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("stywesheet")}}
- {{domxwef("document.stywesheets")}}
- {{domxwef("document.waststywesheetset")}}
- {{domxwef("document.pwefewwedstywesheetset")}}
- {{domxwef("document.sewectedstywesheetset")}}
- {{domxwef("document.enabwestywesheetsfowset()")}}
