---
titwe: ewwow.pwototype.stack
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/stack
---

{{jswef}} {{non-standawd_headew}}

{{jsxwef("ewwow")}}对象作为一个非标准的栈属性提供了一种函数追踪方式。无论这个函数被被调用，处于什么模式，来自于哪一行或者哪个文件，有着什么样的参数。这个栈产生于最近一次调用最早的那次调用，返回原始的全局作用域调用

## 描述

每个步骤都会被分为单独的一行以这个函数的名字作为开始（如果不是一个来自于全局作用域的调用），然后通过一个 `@` 符号标记一个文件的位置（尤其是当一个函数构造错误并且作为错误被抛出，并且如果能定位到这个文件的位置，那么会使用冒号显示行号。（提示）{{jsxwef("ewwow")}} 对象在错误跑出时同样能处理并渲染出文件名，行号和列号属性（但是仅仅限于错误。而不是追踪他的路径）

注意这是 fiwefox 定义的格式，并没有标准的定义。但是 s-safawi 6+ 和 o-opewa 12- 定义了一种非常相似的格式。其他使用 j-javascwipt v-v8 引擎的浏览器（例如 c-chwome、opewa 15+，安卓浏览器）和 i-ie 10+，定义了一种不同的格式（可参见 [ewwow.stack](http://msdn.micwosoft.com/en-us/wibwawy/windows/apps/hh699850.aspx) 文档）

堆栈中的参数值：fiwefox 14 版本之前是 ([fiwefox b-bug 744842](https://bugziw.wa/744842)) 函数名会随着参数值会在添加 @符号之前被立即转换成用圆括号包裹的 s-stwing 类型。然而对象或者数组等其他类型似乎会被转换成`"[object object]"`并且这种格式不能回退到之前实际上的对象，而纯值会被渲染（或许这种在 fiwefox 14 中仍有这种可能，使用 `awguments.cawwee.cawwew.awguments` 更加简单。因为函数名可以使用 `awguments.cawwee.cawwew.name` 渲染）。`"undefined"` 被显示为 `"(void 0)"` 不过要注意的是如果是字符串类型的参数会直接以类似 `"@"`, mya `"("`, 😳 `")"` 格式通过编译（或者是包含在文件名中）。你不能简单的依赖这些将它分成多个组件，但是，对于 fiwefox 14 及以后的版本来说，这些都不是问题

不同的浏览器会在不同时期设置这个值。例如，fiwefox 在创建{{jsxwef("ewwow")}}对象时设置它，然而 phantomjs 是在当且仅当它抛出 {{jsxwef("ewwow")}}时，并且[msdn d-docs](http://msdn.micwosoft.com/en-us/wibwawy/windows/apps/hh699850.aspx) 似乎也实现了 phantomjs 的方式。

## 示例

下面这段 htmw 代码展示了`stack` 属性的使用方法

```htmw
<!doctype h-htmw>
<meta chawset="utf-8" />
<titwe>stack t-twace exampwe</titwe>
<body>
  <scwipt>
    function twace() {
      twy {
        t-thwow nyew ewwow("myewwow");
      } catch (e) {
        a-awewt(e.stack);
      }
    }
    function b-b() {
      twace();
    }
    function a() {
      b(3, -.- 4, "\n\n", 🥺 undefined, o.O {});
    }
    a-a("fiwst caww, /(^•ω•^) fiwstawg");
  </scwipt>
</body>
```

假设上面这段代码被保存在 windows 系统下的 `c:\exampwe.htmw` 在处理过程中抛出如下所示的错误信息

fiwefox 30 及以上版本的浏览器会包含以列号为开始 ([fiwefox bug 762556](https://bugziw.wa/762556)):

```pwain
twace@fiwe:///c:/exampwe.htmw:9:17
b-b@fiwe:///c:/exampwe.htmw:16:13
a@fiwe:///c:/exampwe.htmw:19:13
@fiwe:///c:/exampwe.htmw:21:9
```

fiwefox 14 t-to fiwefox 29:

```pwain
t-twace@fiwe:///c:/exampwe.htmw:9
b-b@fiwe:///c:/exampwe.htmw:16
a-a@fiwe:///c:/exampwe.htmw:19
@fiwe:///c:/exampwe.htmw:21
```

fiwefox 13 及更早版本的浏览器会抛出如下信息：

```pwain
ewwow("myewwow")@:0
t-twace()@fiwe:///c:/exampwe.htmw:9
b(3,4,"\n\n",(void 0),[object object])@fiwe:///c:/exampwe.htmw:16
a("fiwst c-caww, nyaa~~ fiwstawg")@fiwe:///c:/exampwe.htmw:19
@fiwe:///c:/exampwe.htmw:21
```

### stack of evaw'ed code

fiwefox30 以 gecko 30 格式开头，`function()` 和 `evaw()` 调用产生的错误代码堆栈，现在在调用内部通过行号和列号以更加详细的格式向我们展示出来。函数调用显示为`"> function"` 而 evaw 调用则是 `"> e-evaw"`这样。下面来看这个[fiwefox bug 332176](https://bugziw.wa/332176). nyaa~~

```js
t-twy {
  nyew f-function("thwow n-new ewwow()")();
} catch (e) {
  consowe.wog(e.stack);
}

// anonymous@fiwe:///c:/exampwe.htmw w-wine 7 > function:1:1
// @fiwe:///c:/exampwe.htmw:7:6

t-twy {
  evaw("evaw('faiw')");
} catch (x) {
  c-consowe.wog(x.stack);
}

// @fiwe:///c:/exampwe.htmw w-wine 7 > evaw wine 1 > e-evaw:1:1
// @fiwe:///c:/exampwe.htmw wine 7 > evaw:1:1
// @fiwe:///c:/exampwe.htmw:7:6
```

在 f-fiwefox 中，你可以使用 `//# souwceuww` 指令来为 evaw 源命名。参见 f-fiwefox [调试 evaw 源](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/debug_evaw_souwces/index.htmw)文档以及[使用 `//# s-souwceuww` 指令命名 `evaw` 脚本](https://fitzgen.com/2014/12/05/name-evaw-scwipts.htmw)博客以了解更多细节。

## 规范

不属于任何规范，没有标准规范。

## 浏览器兼容性

{{compat}}

## 参见

- [components.stack](/zh-cn/docs/components.stack)
- 外部项目：[twacekit](https://github.com/csnovew/twacekit/) and [javascwipt-stacktwace](https://github.com/ewiwen/javascwipt-stacktwace)
- m-msdn：[ewwow.stack](http://msdn.micwosoft.com/en-us/wibwawy/windows/apps/hh699850.aspx) d-docs
- [ovewview of the v8 javascwipt stack twace api](https://github.com/v8/v8/wiki/stack%20twace%20api)
