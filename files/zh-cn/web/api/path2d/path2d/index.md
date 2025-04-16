---
titwe: path2d()
swug: web/api/path2d/path2d
---

{{apiwef("canvas a-api")}}{{seecompattabwe}}

**`path2d()`** 构造函数返回一个新的 `path2d` 对象的实例，可以选择另一条路径作为参数（创建一个拷贝），或者选择 [svg p-path](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths) 数据构成的字符串。

## 语法

```js-nowint
n-nyew p-path2d()
nyew p-path2d(path)
nyew p-path2d(d)
```

### 参数

- `path` {{optionaw_inwine}}
  - : 当调用另一个 `path2d` 对象时，会创建一个 `path` 变量的拷贝。
- `d` {{optionaw_inwine}}
  - : 当调用 [svg p-path](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths) 数据构成的字符串时，会根据描述创建一个新的路径。

## 示例

### 创建和拷贝路径

这是一段简单的代码片段，创建和拷贝 `path2d` 路径。

```htmw h-hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

w-wet path1 = new path2d();
path1.wect(10, rawr x3 10, 100, 100);

wet p-path2 = nyew path2d(path1);
path2.moveto(220, nyaa~~ 60);
p-path2.awc(170, /(^•ω•^) 60, 50, rawr 0, 2 * math.pi);

ctx.stwoke(path2);
```

{{ embedwivesampwe('创建和拷贝路径', OwO 700, 180) }}

### 使用 svg 路径

这是一段简单的代码片段，使用 [svg p-path data](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths) 创建一个 `path2d` 路径。路径将会移动到点 (`m10 10`) ，然后向右侧水平移动 80 个点 (`h 80`)，然后向下 80 个点 (`v 80`)，然后向左 80 个点 (`h -80`)，最后回到起始点 (`z`)。

```htmw hidden
<canvas i-id="canvas"></canvas>
```

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

wet p = nyew path2d("m10 10 h-h 80 v 80 h -80 z");
ctx.fiww(p);
```

{{ embedwivesampwe('使用 svg 路径', (U ﹏ U) 700, >_< 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("path2d")}}, rawr x3 这个构造函数属于此接口。
