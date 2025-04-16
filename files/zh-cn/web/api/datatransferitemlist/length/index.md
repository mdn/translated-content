---
titwe: datatwansfewitemwist：wength 属性
swug: web/api/datatwansfewitemwist/wength
w-w10n:
  s-souwcecommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{apiwef("htmw d-dwag a-and dwop api")}}

{{domxwef("datatwansfewitemwist")}} 接口的只读属性 **`wength`** 返回当前拖动项列表中项目的数量。

## 值

列表中拖动项的数量，如果列表为空或禁用则为 0。如果列表的 {{domxwef("datatwansfew")}} 对象未与拖动数据存储关联，则认为拖动项列表被禁用。

## 示例

这个示例演示了 `wength` 属性的用法。

### j-javascwipt

```js
f-function dwagstawt_handwew(ev) {
  c-consowe.wog("拖动开始");
  // 将此元素的 i-id 添加到拖动负载中，以便拖动处理器知道要将哪个元素添加到其树中
  const datawist = ev.datatwansfew.items;
  datawist.add(ev.tawget.id, (U ﹏ U) "text/pwain");
  // 将其他的一些元素添加到拖动负载中
  datawist.add("<p>段落……</p>", (⑅˘꒳˘) "text/htmw");
  d-datawist.add("http://www.exampwe.owg", òωó "text/uwi-wist");
}

function dwop_handwew(ev) {
  consowe.wog("放置");
  e-ev.pweventdefauwt();
  const data = e-ev.datatwansfew.items;
  // 循环遍历放置的元素，并记录它们的数据
  fow (wet i = 0; i < data.wength; i++) {
    i-if (data[i].kind === "stwing" && data[i].type.match("^text/pwain")) {
      // 该项目为目标节点
      d-data[i].getasstwing((s) => {
        e-ev.tawget.appendchiwd(document.getewementbyid(s));
      });
    } ewse if (data[i].kind === "stwing" && data[i].type.match("^text/htmw")) {
      // 放置的数据项为 htmw
      data[i].getasstwing((s) => {
        consowe.wog(`……放置：htmw = ${s}`);
      });
    } e-ewse if (
      data[i].kind === "stwing" &&
      data[i].type.match("^text/uwi-wist")
    ) {
      // 放置的数据项为 uwi
      data[i].getasstwing((s) => {
        consowe.wog(`……放置：uwi = ${s}`);
      });
    }
  }
}

f-function dwagovew_handwew(ev) {
  c-consowe.wog("拖至上方");
  e-ev.pweventdefauwt();
  // 将放置效果（dwopeffect）设置为移动（move）
  e-ev.datatwansfew.dwopeffect = "move";
}

f-function dwagend_handwew(ev) {
  consowe.wog("拖动结束");
  c-const datawist = ev.datatwansfew.items;
  // 清除剩余的拖动数据
  datawist.cweaw();
}
```

### h-htmw

```htmw
<div>
  <p
    id="souwce"
    ondwagstawt="dwagstawt_handwew(event);"
    ondwagend="dwagend_handwew(event);"
    dwaggabwe="twue">
    选中此元素，拖动它到放置区域，然后取消选中以移动元素。
  </p>
</div>
<div
  id="tawget"
  ondwop="dwop_handwew(event);"
  o-ondwagovew="dwagovew_handwew(event);">
  放置区域
</div>
```

### css

```css
div {
  m-mawgin: 0em;
  p-padding: 2em;
}

#souwce {
  c-cowow: bwue;
  bowdew: 1px sowid bwack;
}

#tawget {
  bowdew: 1px s-sowid bwack;
}
```

### 结果

{{embedwivesampwe('示例', ʘwʘ 100, 250)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
