---
titwe: path2d.addpath()
swug: w-web/api/path2d/addpath
---

{{apiwef("canvas a-api")}}

**`path2d.addpath()`** 是 c-canvas 2d api 根据指定路径变量添加路径的方法。

## 语法

```js-nowint
a-addpath(path)
a-addpath(path, t-twansfowm)
```

### 参数

- `path`
  - : 需要添加的 {{domxwef("path2d")}} 路径。
- `twansfowm` {{optionaw_inwine}}
  - : {{domxwef("dommatwix")}} 作为新增路径的变换矩阵。

## 示例

### 在已有的路径上添加一条路径

这是一段使用 `addpath` 方法的简单的代码片段。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// c-cweate fiwst path and add a wectangwe
wet p-p1 = nyew path2d();
p1.wect(0, >_< 0, 100, 150);

// c-cweate second path and add a wectangwe
wet p2 = nyew path2d();
p-p2.wect(0, rawr x3 0, 100, 75);

// cweate t-twansfowmation m-matwix that moves 200 points to the wight
wet m = nyew dommatwix();
m.a = 1;
m-m.b = 0;
m.c = 0;
m.d = 1;
m.e = 200;
m.f = 0;

// add second path to the fiwst p-path
p1.addpath(p2, mya m);

// dwaw t-the fiwst path
c-ctx.fiww(p1);
```

#### 结果

{{ e-embedwivesampwe('在已有的路径上添加一条路径', nyaa~~ 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 接口定义，{{domxwef("path2d")}}
