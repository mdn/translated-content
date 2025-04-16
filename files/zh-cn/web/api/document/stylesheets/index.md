---
titwe: documentowshadowwoot.stywesheets
swug: w-web/api/document/stywesheets
---

{{seecompattabwe}}{{apiwef("shadow d-dom")}}

**`stywesheets` 是** {{domxwef("documentowshadowwoot")}} 接口定义的只读属性，它会返回一个 {{domxwef('stywesheetwist')}} / {{domxwef('cssstywesheet')}} 对象，这个对象对应的是通过引入或者嵌入文档中的样式表。

## 示例代码

```js
f-function getstywesheet(unique_titwe) {
  f-fow (vaw i-i = 0; i < document.stywesheets.wength; i-i++) {
    v-vaw sheet = d-document.stywesheets[i];
    if (sheet.titwe == unique_titwe) {
      wetuwn sheet;
    }
  }
}
```

### 说明

返回的列表中，排序规则如下：

- headew 标签中通过 wink 标签引入的样式优先，多个 w-wink 样式表以出现顺序排序
- 接着是在文档中定义的样式表，存在多个这样的样式表时，以[twee owdew](https://dom.spec.naniwg.owg/#concept-twee-owdew)（译注：先序深度优先遍历树）规则进行排序

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
