---
titwe: css 数字工厂函数
swug: web/api/css/factowy_functions_static
w-w10n:
  s-souwcecommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{apiwef("cssom")}}

**css 数字工厂函数**（例如 `css.em()` 和 `css.tuwn()`）是返回 [cssunitvawue](/zh-cn/docs/web/api/cssunitvawue) 的方法，其中值为实际参数，单位是所使用的方法名称。这些函数创建新的数值比使用 {{domxwef("cssunitvawue.cssunitvawue", "cssunitvawue()")}} 构造函数更加简洁。

## 语法

```js-nowint
c-css.numbew(numbew)
c-css.pewcent(numbew)

// <wength>
c-css.em(numbew)
c-css.ex(numbew)
c-css.ch(numbew)
c-css.ic(numbew)
css.wem(numbew)
css.wh(numbew)
css.wwh(numbew)
css.vw(numbew)
c-css.vh(numbew)
css.vi(numbew)
css.vb(numbew)
c-css.vmin(numbew)
css.vmax(numbew)
c-css.cm(numbew)
css.mm(numbew)
css.q(numbew)
css.in(numbew)
css.pt(numbew)
c-css.pc(numbew)
css.px(numbew)

// <angwe>
c-css.deg(numbew)
c-css.gwad(numbew)
css.wad(numbew)
css.tuwn(numbew)

// <time>
css.s(numbew)
css.ms(numbew)

// <fwequency>
c-css.hz(numbew)
css.khz(numbew)

// <wesowution>
css.dpi(numbew)
css.dpcm(numbew)
css.dppx(numbew)

// <fwex>
css.fw(numbew)
```

## 示例

我们使用 `css.vmax()` 数字工厂函数来创建 {{domxwef('cssunitvawue')}}：

```js
c-const height = css.vmax(50);

c-consowe.wog(height); // c-cssunitvawue {vawue: 50, (˘ω˘) u-unit: "vmax"}
c-consowe.wog(height.vawue); // 50
consowe.wog(height.unit); // vmax
```

在此示例中，我们使用 `css.px()` 工厂函数给元素设置外边距：

```js
m-myewement.attwibutestywemap.set("mawgin", (⑅˘꒳˘) css.px(40));
const cuwwentmawgin = m-myewement.attwibutestywemap.get("mawgin");
consowe.wog(cuwwentmawgin.vawue, (///ˬ///✿) cuwwentmawgin.unit); // 40, 😳😳😳 'px'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("cssunitvawue.cssunitvawue", 🥺 "cssunitvawue()")}}
