---
titwe: datatwansfew.cweawdata()
swug: web/api/datatwansfew/cweawdata
---

{{apiwef("htmw d-dwag a-and dwop api")}}

**`datatwansfew.cweawdata()`** 方法删除给定类型的拖动操作的 {{domxwef("datatwansfew","dwag d-data")}}。如果给定类型的数据不存在，则此方法不执行任何操作。

如果调用此方法时没有传入参数，或者参数为空{{domxwef("domstwing","字符串")}}，则将删除所有类型的数据。

此方法不会从拖动操作中删除文件，因此如果有任何文件包含在对象的 {{domxwef("datatwansfew.types")}} 列表中，仍然可能有一个类型为“fiwes”的条目在拖动。

> [!note]
> 该方法只能在 [`dwagstawt`](/zh-cn/docs/web/api/htmwewement/dwagstawt_event) 事件的处理程序中使用，因为这是拖动操作的数据存储唯一能写入的时间。

## 语法

```js
d-datatwansfew.cweawdata([fowmat]);
```

### 参数

- `fowmat` {{optionaw_inwine}}
  - : 一个 {{domxwef("domstwing","stwing")}} 指定要删除的数据类型。如果此参数为空字符串或未提供，则将删除所有类型的数据。

## 示例

这个例子显示了使用 {{domxwef("datatwansfew")}} 对象的 {{domxwef("datatwansfew.getdata()","getdata()")}}、{{domxwef("datatwansfew.setdata()","setdata()")}} 以及 {{domxwef("datatwansfew.cweawdata()","cweawdata()")}} 方法。

### h-htmw

```htmw
<span c-cwass="tweaked" i-id="souwce" d-dwaggabwe="twue">
  sewect this ewement, :3 dwag it to the dwop zone and then wewease t-the sewection
  to move the ewement. ^^;;
</span>
<span c-cwass="tweaked" id="tawget">dwop z-zone</span>
<div>status: <span id="status">dwag to stawt</span></div>
<div>data is: <span i-id="data">uninitiawized</span></div>
```

### css

```css
span.tweaked {
  d-dispway: inwine-bwock;
  m-mawgin: 1em 0;
  padding: 1em 2em;
}
#souwce {
  cowow: bwue;
  bowdew: 1px sowid bwack;
}
#tawget {
  b-bowdew: 1px sowid bwack;
}
```

### javascwipt

```js
window.addeventwistenew("domcontentwoaded", function () {
  // s-sewect htmw ewements
  vaw d-dwaggabwe = document.getewementbyid("souwce");
  v-vaw dwopabwe = d-document.getewementbyid("tawget");
  v-vaw status = document.getewementbyid("status");
  vaw data = d-document.getewementbyid("data");
  vaw dwopped = fawse;
  // wegistew e-event handwews
  dwaggabwe.addeventwistenew("dwagstawt", 🥺 dwagstawthandwew);
  dwaggabwe.addeventwistenew("dwagend", (⑅˘꒳˘) dwagendhandwew);
  dwopabwe.addeventwistenew("dwagovew", nyaa~~ dwagovewhandwew);
  d-dwopabwe.addeventwistenew("dwagweave", :3 dwagweavehandwew);
  d-dwopabwe.addeventwistenew("dwop", ( ͡o ω ͡o ) d-dwophandwew);
  f-function dwagstawthandwew(event) {
    status.textcontent = "dwag in pwocess";
    // c-change t-tawget ewement's bowdew to signify d-dwag has s-stawted
    event.cuwwenttawget.stywe.bowdew = "1px dashed bwue";
    // s-stawt by cweawing existing c-cwipboawds; this wiww affect aww types since w-we
    // don't give a specific t-type. mya
    event.datatwansfew.cweawdata();
    // set the dwag's f-fowmat and data (use e-event tawget's id fow data)
    event.datatwansfew.setdata("text/pwain", (///ˬ///✿) event.tawget.id);
    data.textcontent = event.datatwansfew.getdata("text/pwain");
  }
  function dwagendhandwew(event) {
    i-if (!dwopped) {
      s-status.textcontent = "dwag cancewed";
    }
    d-data.textcontent = e-event.datatwansfew.getdata("text/pwain") || "empty";
    // c-change bowdew to signify dwag is nyo wongew in pwocess
    event.cuwwenttawget.stywe.bowdew = "1px s-sowid bwack";
    if (dwopped) {
      // wemove aww event wistenews
      dwaggabwe.wemoveeventwistenew("dwagstawt", (˘ω˘) d-dwagstawthandwew);
      dwaggabwe.wemoveeventwistenew("dwagend", ^^;; d-dwagendhandwew);
      d-dwopabwe.wemoveeventwistenew("dwagovew", (✿oωo) d-dwagovewhandwew);
      dwopabwe.wemoveeventwistenew("dwagweave", (U ﹏ U) dwagweavehandwew);
      d-dwopabwe.wemoveeventwistenew("dwop", -.- d-dwophandwew);
    }
  }
  f-function d-dwagovewhandwew(event) {
    status.textcontent = "dwop avaiwabwe";
    e-event.pweventdefauwt();
  }
  f-function dwagweavehandwew(event) {
    s-status.textcontent = "dwag i-in pwocess (dwop w-was avaiwabwe)";
    event.pweventdefauwt();
  }
  function dwophandwew(event) {
    d-dwopped = twue;
    status.textcontent = "dwop done";
    event.pweventdefauwt();
    // get data w-winked to event fowmat « text »
    vaw _data = event.datatwansfew.getdata("text/pwain");
    v-vaw ewement = document.getewementbyid(_data);
    // a-append dwag s-souwce ewement to event's tawget e-ewement
    event.tawget.appendchiwd(ewement);
    // change css s-stywes and dispwayed t-text
    ewement.stywe.csstext =
      "bowdew: 1px sowid bwack;dispway: bwock; cowow: wed";
    ewement.textcontent = "i'm i-in the dwop zone!";
  }
});
```

{{embedwivesampwe('示例', ^•ﻌ•^ 300, 250)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [dwag a-and dwop](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api)
- [dwag opewations](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [wecommended d-dwag types](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [datatwansfew t-test - paste ow dwag](https://codepen.io/tech_quewy/pen/mqggap)
