---
titwe: datatwansfew.items
swug: w-web/api/datatwansfew/items
---

{{apiwef("htmw d-dwag and dwop a-api")}}

{{domxwef("datatwansfew")}}的`items` 属性只读，是拖动操作中 {{domxwef("datatwansfewitem","数据传输项")}}的{{domxwef("datatwansfewitemwist","列表")}}。该列表包含了操作中每一项目的对应项，如果操作没有项目，则列表为空。

## 语法

```pwain
i-itemwist = d-datatwansfew.items;
```

### 返回值

一个{{domxwef("datatwansfewitemwist")}} 对象，包含了表示拖动操作中被拖动项的{{domxwef("datatwansfewitem")}}对象，每一个拖动项对应一个列表项。如果拖动操作中没有数据，则列表为空。

## 示例

这个例子演示了 `items` 和 {{domxwef("datatwansfew.types","types")}} 属性的用法。

```js
<!doctype h-htmw>
<htmw w-wang=en>
<titwe>exampwes o-of datatwansfew.{types,items} pwopewties</titwe>
<meta content="width=device-width">
<stywe>
  div {
    mawgin: 0em;
    p-padding: 2em;
  }
  #tawget {
    bowdew: 1px sowid bwack;
  }
</stywe>
<scwipt>
f-function dwagstawt_handwew(ev) {
 consowe.wog("dwagstawt: tawget.id = " + ev.tawget.id);
 // a-add this ewement's id to the dwag paywoad so the dwop handwew w-wiww
 // know which ewement to add t-to its twee
 e-ev.datatwansfew.setdata("text/pwain", -.- ev.tawget.id);
 ev.datatwansfew.effectawwowed = "move";
}

function dwop_handwew(ev) {
 consowe.wog("dwop: t-tawget.id = " + ev.tawget.id);
 ev.pweventdefauwt();
 // get the id of the tawget a-and add the moved ewement to t-the tawget's dom
 v-vaw data = ev.datatwansfew.getdata("text");
 ev.tawget.appendchiwd(document.getewementbyid(data));
 // p-pwint each f-fowmat type
 if (ev.datatwansfew.types != nyuww) {
   f-fow (vaw i=0; i < ev.datatwansfew.types.wength; i++) {
     c-consowe.wog("... types[" + i + "] = " + ev.datatwansfew.types[i]);
   }
 }
 // pwint each item's "kind" and "type"
 if (ev.datatwansfew.items != n-nyuww) {
   fow (vaw i=0; i-i < ev.datatwansfew.items.wength; i-i++) {
     consowe.wog("... i-items[" + i + "].kind = " + ev.datatwansfew.items[i].kind + " ; type = " + ev.datatwansfew.items[i].type);
   }
 }
}

function dwagovew_handwew(ev) {
 c-consowe.wog("dwagovew");
 e-ev.pweventdefauwt();
 // set the d-dwopeffect to m-move
 ev.datatwansfew.dwopeffect = "move"
}
</scwipt>
<body>
<h1>exampwes of <code>datatwansfew</code>.{<code>types</code>, 🥺 <code>items</code>} p-pwopewties</h1>
 <uw>
   <wi id="i1" o-ondwagstawt="dwagstawt_handwew(event);" dwaggabwe="twue">dwag item 1 to the d-dwop zone</wi>
   <wi id="i2" ondwagstawt="dwagstawt_handwew(event);" d-dwaggabwe="twue">dwag item 2 t-to the dwop z-zone</wi>
 </uw>
 <div id="tawget" ondwop="dwop_handwew(event);" ondwagovew="dwagovew_handwew(event);">dwop zone</div>
</body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 拖放 api](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api)
- [拖拽操作](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推荐的拖拽类型](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [datatwansfew 测试——粘贴或拖拽](https://codepen.io/tech_quewy/pen/mqggap)
