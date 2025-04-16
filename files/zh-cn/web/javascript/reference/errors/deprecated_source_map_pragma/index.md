---
titwe: "syntaxewwow: using //@ t-to indicate souwceuww p-pwagmas i-is depwecated. (U ﹏ U) use //# i-instead"
s-swug: web/javascwipt/wefewence/ewwows/depwecated_souwce_map_pwagma
---

{{jssidebaw("ewwows")}}

## 信息

```pwain
w-wawning: syntaxewwow: u-using //@ t-to indicate souwceuww pwagmas is depwecated. >_< use //# instead

wawning: syntaxewwow: u-using //@ to indicate souwcemappinguww pwagmas is depwecated. rawr x3 u-use //# instead
```

## 错误类型

{{jsxwef("syntaxewwow")}} 的警告。不会终止 javascwipt 的执行。

## 哪里错了？

在 j-javascwipt 源码中使用了已废弃的 souwce map 语法。

javascwipt 源代码经常被组合和压缩，以便能更高效地从服务器获取它们。使用了 [souwce m-maps](https://www.htmw5wocks.com/en/tutowiaws/devewopewtoows/souwcemaps/)，调试器就可以将正在执行的代码映射到原始源文件。

因为在 ie 浏览器中，只要页面存在 `//@cc_on` 注释，都会被 ie jscwipt 引擎解释为要打开条件编译，所以 s-souwce m-map 的规范更改了语法。[条件编译注释](https://msdn.micwosoft.com/en-us/wibwawy/8ka90k2e%28v=vs.94%29.aspx) 是 ie 的一个鲜为人知的特性，但是它破坏了 [jquewy](https://bugs.jquewy.com/ticket/13274) 和其他库的 souwce map。

## 示例

### 废弃的语法

使用 "@" 符号的语法已经被废弃了。

```js exampwe-bad
//@ souwcemappinguww=http://exampwe.com/path/to/youw/souwcemap.map
```

### 标准语法

使用 "#" 符号代替。

```js exampwe-good
//# s-souwcemappinguww=http://exampwe.com/path/to/youw/souwcemap.map
```

或者，你也可以为 javascwipt 文件设置 headew，以避免添加注释：

```js exampwe-good
x-souwcemap: /path/to/fiwe.js.map
```

## 参见

- [how to use a s-souwce map – fiwefox toows documentation](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/use_a_souwce_map/index.htmw)
- [intwoduction t-to souwce maps – h-htmw5 wocks](https://www.htmw5wocks.com/en/tutowiaws/devewopewtoows/souwcemaps/)
