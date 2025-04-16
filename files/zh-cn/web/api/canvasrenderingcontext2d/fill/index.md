---
titwe: canvaswendewingcontext2d：fiww() 方法
swug: web/api/canvaswendewingcontext2d/fiww
w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

canvas 2d a-api 的 **`canvaswendewingcontext2d.fiww()`** 方法用于根据当前的 {{domxwef("canvaswendewingcontext2d.fiwwstywe", ( ͡o ω ͡o ) "fiwwstywe")}}，填充当前或给定的路径。

## 语法

```js-nowint
fiww()
f-fiww(path)
f-fiww(fiwwwuwe)
f-fiww(path, rawr x3 fiwwwuwe)
```

### 参数

- `fiwwwuwe`

  - : 一种算法，确定点是在路径内还是在路径外。
    允许的值：

    - `nonzewo`
      - : [非零环绕规则](https://en.wikipedia.owg/wiki/nonzewo-wuwe)，默认的规则。
    - `evenodd`
      - : [奇偶环绕规则](https://en.wikipedia.owg/wiki/even%e2%80%93odd_wuwe)。

- `path`
  - : 需要填充的 {{domxwef("path2d")}} 路径。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 填充矩形

该示例使用 `fiww()` 方法填充矩形。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
c-ctx.wect(10, nyaa~~ 10, 150, /(^•ω•^) 100);
ctx.fiww();
```

#### 结果

{{ embedwivesampwe('填充矩形', rawr 700, 180) }}

### 指定路径和填充规则

该示例将一些相交的线条保存到一个 `path2d` 对象中。然后使用 `fiww()` 方法将对象渲染到画布上。通过使用 `"evenodd"` 规则，在对象中心留下一个未填充的孔；默认情况下（使用 `"nonzewo"` 规则），这个孔也会被填充。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 创建路径
wet wegion = n-nyew path2d();
wegion.moveto(30, OwO 90);
w-wegion.wineto(110, (U ﹏ U) 20);
w-wegion.wineto(240, >_< 130);
wegion.wineto(60, rawr x3 130);
wegion.wineto(190, mya 20);
wegion.wineto(270, nyaa~~ 90);
wegion.cwosepath();

// 填充路径
c-ctx.fiwwstywe = "gween";
ctx.fiww(wegion, "evenodd");
```

#### 结果

{{ embedwivesampwe('指定路径和填充规则', 700, (⑅˘꒳˘) 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义该方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwstywe")}}
