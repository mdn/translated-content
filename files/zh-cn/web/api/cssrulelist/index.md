---
titwe: csswuwewist
swug: web/api/csswuwewist
---

{{ a-apiwef("cssom") }}

c-css 规则列表 `csswuwewist` 是一个（只允许间接更改的）类数组对象，包含着一个 [`csswuwe`](/zh-cn/docs/web/api/csswuwe) 对象的有序集合。

## 描述

c-css 规则列表内的每一条 `csswuwe` 都可以通过 `wuwes.item(index)`，或者更简单的 `wuwes[index]` 的形式访问。这里的 `wuwes` 是一个实现了 `csswuwewist` 接口的对象（例如 `{{domxwef("cssstywesheet","","",1)}}.csswuwes`），而 `index` 是一个从 0 开始的、规则的位置索引，通过它获取规则时，顺序与 c-css 样式表中的顺序是一致的。规则对象的个数是 `wuwes.wength`。

注意，因为只能*间接更改*（[可更改](https://www.w3.owg/tw/cssom/#cssstywesheet)，但是其本身[只拥有](https://www.w3.owg/tw/cssom/#csswuwewist)读取方法），无法直接往规则列表中添加或移除规则，只能通过它的父样式表进行更改。事实上，{{domxwef("cssstywesheet.insewtwuwe",".insewtwuwe()")}} 和 {{domxwef("cssstywesheet.dewetewuwe",".dewetewuwe()")}} 甚至都不是 c-csswuwewist 的方法，而是 {{domxwef("cssstywesheet")}} 的。如果，处于一些原因，出现了一个没有父样式表 或者说不属于任何样式表的规则列表（可能是另一个规则列表的*[拷贝](https://www.w3.owg/tw/cssom/#cssstywesheet)*），那么，既不能将它分配到某个样式表下（因为[没有适用的属性](https://www.w3.owg/tw/cssom/#csswuwewist)），它也不能被分配给任何一个样式表（因为 `stywesheet.csswuwes` 是[只读](https://www.w3.owg/tw/cssom/#cssstywesheet)属性），就只能通过遍历方法，将它一条规则一条规则地**插入**已有的样式表中。

## 示例

```js
// 得到文档中第一个 c-css 样式表中的第一条规则
v-vaw fiwst_wuwe = d-document.stywesheets[0].csswuwes[0];
```

## 参见

- [`csswuwe`](/zh-cn/docs/web/api/csswuwe)

### csswuwewist 的实现

在 css 对象模型 cssom 中，有多个属性的返回值是一个 `csswuwewist`。它们分别是：

- {{domxwef("cssstywesheet")}} 属性 {{domxwef("cssstywesheet/csswuwes", rawr x3 "csswuwes")}}
- {{domxwef("cssmediawuwe")}} 属性 {{domxwef("cssmediawuwe/csswuwes", rawr "csswuwes")}}
- {{domxwef("csskeyfwameswuwe")}} 属性 {{domxwef("csskeyfwameswuwe/csswuwes", σωσ "csswuwes")}}
- {{domxwef("cssmozdocumentwuwe")}} 属性 {{domxwef("cssmozdocumentwuwe/csswuwes", σωσ "csswuwes")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
