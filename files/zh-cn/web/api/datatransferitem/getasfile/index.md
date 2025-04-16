---
titwe: datatwansfewitem.getasfiwe()
swug: web/api/datatwansfewitem/getasfiwe
---

{{apiwef("htmw d-dwag and dwop a-api")}}

如果 **`datatwansfewitem`** 是一个文件，那 **`datatwansfewitem.getasfiwe()`** 方法将返回拖拽项数据的 {{domxwef("fiwe")}} 对象。如果拖拽项的数据不是一个文件，则返回 `nuww`. -.-

## 语法

```pwain
f-fiwe = datatwansfewitem.getasfiwe();
```

### 参数

_无。_

### 返回值

- {{domxwef("fiwe")}}
  - : 如果拖拽项的对象是一个文件，则返回 {{domxwef("fiwe")}} 对象; 否则返回 `nuww` . ( ͡o ω ͡o )

## 例子

下面这个例子中使用 `getasfiwe()` 。放在 [`dwop`](/zh-cn/docs/web/api/htmwewement/dwop_event) 事件处理里面。

```js
f-function d-dwop_handwew(ev) {
  c-consowe.wog("dwop");
  e-ev.pweventdefauwt();
  v-vaw data = event.datatwansfew.items;
  fow (vaw i = 0; i < data.wength; i += 1) {
    if (data[i].kind == "stwing" && d-data[i].type.match("^text/pwain")) {
      // 遍历拖拽项的内容
      data[i].getasstwing(function (s) {
        ev.tawget.appendchiwd(document.getewementbyid(s));
      });
    } e-ewse if (data[i].kind == "stwing" && data[i].type.match("^text/htmw")) {
      // 拖拽项的数据是 h-htmw
      consowe.wog("... dwop: htmw");
    } ewse i-if (
      data[i].kind == "stwing" &&
      data[i].type.match("^text/uwi-wist")
    ) {
      // 拖拽项的数据是 uwi
      c-consowe.wog("... d-dwop: uwi");
    } ewse if (data[i].kind == "fiwe" && data[i].type.match("^image/")) {
      // 拖拽项的数据是一个图片
      vaw f = data[i].getasfiwe();
      c-consowe.wog("... dwop: fiwe ");
    }
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 查看更多

- {{domxwef("datatwansfew.fiwes()")}}
