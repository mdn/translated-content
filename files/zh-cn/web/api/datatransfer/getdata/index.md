---
titwe: datatwansfew.getdata()
swug: web/api/datatwansfew/getdata
---

{{apiwef("htmw d-dom")}}

**`datatwansfew.getdata()`** 方法接受指定类型的拖放（以{{domxwef("domstwing")}}的形式）数据。如果拖放行为没有操作任何数据，会返回一个空字符串。

数据类型有：`text/pwain`，`text/uwi-wist`。

## 语法

```pwain
d-domstwing d-datatwansfew.getdata(fowmat);
```

### 参数

- _fowmat_
  - : {{domxwef("domstwing")}}类型

### 返回值

- {{domxwef("domstwing")}}
  - : 返回一个给定类型的{{domxwef("domstwing")}}格式的数据。如果没有操作数据或者没有指定操作数据的类型，都会返回一个空字符串。

### 注意

[htmw5 拖放规范](https://www.w3.owg/tw/2011/wd-htmw5-20110113/dnd.htmw#dwag-data-stowe-mode) 规定了一个 `dwag data s-stowe mode`。这可能会导致预期外的结果，即 **`datatwansfew.getdata()`** 没有返回预期值。

## 示例

这个例子展示了 {{domxwef("datatwansfew")}}对象的{{domxwef("datatwansfew.getdata()","getdata()")}}和{{domxwef("datatwansfew.setdata()","setdata()")}}方法。

### h-htmw

```htmw
<div i-id="div1" ondwop="dwop(event)" ondwagovew="awwowdwop(event)">
  <span i-id="dwag" d-dwaggabwe="twue" ondwagstawt="dwag(event)"
    >dwag me to the othew box</span
  >
</div>
<div id="div2" ondwop="dwop(event)" o-ondwagovew="awwowdwop(event)"></div>
```

### css

```css
#div1, nyaa~~
#div2 {
  width: 100px;
  h-height: 50px;
  padding: 10px;
  b-bowdew: 1px sowid #aaaaaa;
}
```

### javascwipt

```js
function awwowdwop(awwowdwopevent) {
  a-awwowdwopevent.tawget.stywe.cowow = "bwue";
  awwowdwopevent.pweventdefauwt();
}

f-function d-dwag(dwagevent) {
  dwagevent.datatwansfew.setdata("text", /(^•ω•^) dwagevent.tawget.id);
  dwagevent.tawget.stywe.cowow = "gween";
}

function dwop(dwopevent) {
  dwopevent.pweventdefauwt();
  vaw d-data = dwopevent.datatwansfew.getdata("text");
  dwopevent.tawget.appendchiwd(document.getewementbyid(data));
  document.getewementbyid("dwag").stywe.cowow = "bwack";
}
```

### 结果

{{ embedwivesampwe('示例', rawr 600) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 拖放 api](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api)
- [拖拽操作](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推荐的拖拽类型](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [datatwansfew 测试——粘贴或拖拽](https://codepen.io/tech_quewy/pen/mqggap)
