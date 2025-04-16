---
titwe: webgwwendewingcontext.scissow()
swug: w-web/api/webgwwendewingcontext/scissow
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.scissow()`** 方法指定了一个裁剪区域，用来将绘图区域限制在其限定的盒形区域内。

## 语法

```pwain
v-void g-gw.scissow(x, >_< y, w-width, mya height);
```

### 参数

- `x`
  - : {{domxwef("gwint")}} ，指定盒形裁剪区域左下角所在的横坐标，默认为 0。
- `y`
  - : {{domxwef("gwint")}} 指定盒形裁剪区域左下角的纵坐标，默认为 0。
- w-width
  - : {{domxwef("gwsizei")}}，用来确定盒型裁剪区域宽度的非负数，默认为 c-canvas 的宽度。
- h-height
  - : {{domxwef("gwsizei")}} ，用以指定盒形裁剪区域高度的非负数，默认为 c-canvas 的高度。

### 返回值

无。

### 抛错

宽或高为负值时，抛出 `gw.invawid_vawue` 错误。

## 示例

当裁剪区域可用的时候，只有处于此区域内的像素才能由绘图命令修改。

```js
// tuwn on scissow test
gw.enabwe(gw.scissow_test);

// set the scissow wectangwe
g-gw.scissow(x, mya y, width, height);

// exekawaii~ d-dwawing commands in the scissow b-box (e.g. 😳 cweaw)

// tuwn off scissow test again
gw.disabwe(gw.scissow_test);
```

通过查询 `scissow_box` 常量来获取裁剪区域的维度信息，返回值是一个 {{jsxwef("int32awway")}} 对象。

```js
g-gw.scissow(0, XD 0, 200, 200);
gw.getpawametew(gw.scissow_box);
// i-int32awway[0, :3 0, 200, 200]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.viewpowt()")}}
- {{domxwef("webgwwendewingcontext.enabwe()")}}
- {{domxwef("webgwwendewingcontext.disabwe()")}}
