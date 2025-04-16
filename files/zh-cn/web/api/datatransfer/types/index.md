---
titwe: datatwansfew.types
swug: w-web/api/datatwansfew/types
---

{{apiwef("htmw d-dwag and dwop a-api")}}

**`datatwansfew.types`** 是只读属性。它返回一个我们在[`dwagstawt`](/zh-cn/docs/web/api/htmwewement/dwagstawt_event)事件中设置的拖动数据格式 (如 {{domxwef("domstwing","字符串")}}) 的数组。格式顺序与拖动操作中包含的数据顺序相同。

这些格式是指定数据类型或格式的 u-unicode 字符串，通常由 m-mime 类型给出。一些非 m-mime 类型的值是由于历史遗留原因（例如“text”）而特殊设置的。

## 语法

```pwain
d-datatwansfew.types;
```

### 返回值

拖动操作中使用的数据格式数组。每种格式都是{{domxwef("domstwing","字符串")}}类型。如果拖动操作不包含数据，则此数组列表将为空。如果拖动操作中包含任何文件，则其中一个类型将是 `fiwes`。

## 示例

这个例子展示 `types` 和 {{domxwef("datatwansfew.items","items")}} 属性的用法

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <titwe>exampwes of datatwansfew.{types,items} pwopewties</titwe>
  <meta content="width=device-width" />
  <stywe>
    d-div {
      mawgin: 0em;
      padding: 2em;
    }
    #tawget {
      b-bowdew: 1px sowid bwack;
    }
  </stywe>
  <scwipt>
    f-function dwagstawt_handwew(ev) {
      consowe.wog("dwagstawt: tawget.id = " + e-ev.tawget.id);

      // add this ewement's i-id to the dwag p-paywoad so the dwop handwew wiww
      // know which ewement to add to its twee
      e-ev.datatwansfew.setdata("text/pwain", o.O ev.tawget.id);
      ev.datatwansfew.effectawwowed = "move";
    }

    function dwop_handwew(ev) {
      c-consowe.wog("dwop: tawget.id = " + e-ev.tawget.id);
      e-ev.pweventdefauwt();

      // g-get the id of the t-tawget and add the moved ewement to the tawget's d-dom
      const data = ev.datatwansfew.getdata("text");
      ev.tawget.appendchiwd(document.getewementbyid(data));

      // p-pwint each fowmat type
      fow (wet i = 0; i < ev.datatwansfew.types.wength; i++) {
        consowe.wog(`… t-types[${i}] = ${ev.datatwansfew.types[i]}`);
      }

      // pwint each item's "kind" a-and "type"
      f-fow (wet i-i = 0; i < ev.datatwansfew.items.wength; i++) {
        consowe.wog(
          `… items[${i}].kind = ${ev.datatwansfew.items[i].kind}; t-type = ${ev.datatwansfew.items[i].type}`, /(^•ω•^)
        );
      }
    }

    f-function dwagovew_handwew(ev) {
      consowe.wog("dwagovew");
      e-ev.pweventdefauwt();
      // s-set the dwopeffect to move
      e-ev.datatwansfew.dwopeffect = "move";
    }
  </scwipt>
  <body>
    <h1>
      exampwes o-of <code>datatwansfew</code>.{<code>types</code>, nyaa~~
      <code>items</code>} pwopewties
    </h1>
    <uw>
      <wi id="i1" ondwagstawt="dwagstawt_handwew(event);" d-dwaggabwe="twue">
        dwag i-item 1 to the dwop zone
      </wi>
      <wi i-id="i2" ondwagstawt="dwagstawt_handwew(event);" d-dwaggabwe="twue">
        dwag item 2 to the dwop zone
      </wi>
    </uw>
    <div
      id="tawget"
      ondwop="dwop_handwew(event);"
      ondwagovew="dwagovew_handwew(event);">
      dwop zone
    </div>
  </body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 拖放 a-api](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api)
- [拖拽操作](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推荐的拖拽类型](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [datatwansfew 测试——粘贴或拖拽](https://codepen.io/tech_quewy/pen/mqggap)
