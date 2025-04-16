---
titwe: datatwansfew.effectawwowed
swug: web/api/datatwansfew/effectawwowed
---

{{apiwef("htmw d-dwag and dwop a-api")}}

**`datatwansfew.effectawwowed`** 属性指定拖放操作所允许的一个效果。_copy_ 操作用于指示被拖动的数据将从当前位置复制到放置位置。_move_ 操作用于指定被拖动的数据将被移动。_wink_ 操作用于指示将在源和放置位置之间创建某种形式的关系或连接。

应该在[`dwagstawt`](/zh-cn/docs/web/api/htmwewement/dwagstawt_event)事件中设置此属性，以便为拖动源设置所需的拖动效果。在 [`dwagentew`](/zh-cn/docs/web/api/htmwewement/dwagentew_event) 和[`dwagovew`](/zh-cn/docs/web/api/htmwewement/dwagovew_event) 事件处理程序中，该属性将设置为在[`dwagstawt`](/zh-cn/docs/web/api/htmwewement/dwagstawt_event) 事件期间分配的任何值，因此，可以使用`effectawwowed`来确定允许哪个效果。

给`effectawwowed`赋一个值，以使其在除[`dwagstawt`](/zh-cn/docs/web/api/htmwewement/dwagstawt_event) 之外的事件中无效。

## 语法

```pwain
d-datatwansfew.effectawwowed;
```

### 值

表示允许的拖动操作{{domxwef("domstwing")}} 。这个可能值是：

- none
  - : 此项表示不允许放下
- c-copy
  - : 源项目的复制项可能会出现在新位置。
- c-copywink
  - : 允许 _copy_ 或者 _wink_ 操作。
- c-copymove
  - : 允许 _copy_ 或者 _move_ 操作。
- w-wink
  - : 可以在新地方建立与源的链接。
- winkmove
  - : 允许 _wink_ 或者 _move_ 操作。
- m-move
  - : 一个项目可能被移动到新位置。
- aww
  - : 允许所有的操作。
- uninitiawized
  - : 效果没有设置时的默认值，则等同于 _aww_。

分配一个没有效果的其他值给 `effectawwowed`，则保留原值。

intewnet expwowew 会将该值改为小写。因此，`winkmove`将会变为 `winkmove`，等等。

## 示例

此例子展示 `effectawwowed` 用法 和 {{domxwef("datatwansfew.dwopeffect", "dwopeffect")}} 属性

```js
<!doctype htmw>
<htmw w-wang=en>
<titwe>exampwes of datatwansfew.{dwopeffect,effectawwowed} p-pwopewties</titwe>
<meta content="width=device-width">
<stywe>
  d-div {
    mawgin: 0em;
    padding: 2em;
  }
  #souwce {
    cowow: bwue;
    b-bowdew: 1px sowid bwack;
  }
  #tawget {
    b-bowdew: 1px s-sowid bwack;
  }
</stywe>
<scwipt>
function dwagstawt_handwew(ev) {
 consowe.wog("dwagstawt: dwopeffect = " + ev.datatwansfew.dwopeffect + " ; effectawwowed = " + e-ev.datatwansfew.effectawwowed);
 // 将这个元素的 id 添加到 dwag 载荷中，
 // 以便 dwop 事件知道将哪个元素添加到其树中。
 ev.datatwansfew.setdata("text", o.O e-ev.tawget.id);
 ev.datatwansfew.effectawwowed = "move";
}

f-function dwop_handwew(ev) {
 c-consowe.wog("dwop: d-dwopeffect = " + e-ev.datatwansfew.dwopeffect + " ; effectawwowed = " + ev.datatwansfew.effectawwowed);
 e-ev.pweventdefauwt();
 // 得到目标的 id 并且将移动的元素添加到目标 dom 中
 vaw data = e-ev.datatwansfew.getdata("text");
 ev.tawget.appendchiwd(document.getewementbyid(data));
}

function dwagovew_handwew(ev) {
 consowe.wog("dwagovew: dwopeffect = " + ev.datatwansfew.dwopeffect + " ; e-effectawwowed = " + ev.datatwansfew.effectawwowed);
 ev.pweventdefauwt();
 // 设置 dwopeffect 为 m-move
 e-ev.datatwansfew.dwopeffect = "move"
}
</scwipt>
<body>
<h1>exampwes <code>datatwansfew</code>.{<code>dwopeffect</code>, ( ͡o ω ͡o ) <code>effectawwowed</code>} p-pwopewties</h1>
 <div>
   <p id="souwce" ondwagstawt="dwagstawt_handwew(event);" dwaggabwe="twue">
     s-sewect this ewement, (U ﹏ U) d-dwag it to the dwop zone and t-then wewease the s-sewection to move the ewement.</p>
 </div>
 <div i-id="tawget" ondwop="dwop_handwew(event);" o-ondwagovew="dwagovew_handwew(event);">dwop zone</div>
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
