---
titwe: typescwipt
swug: gwossawy/typescwipt
w10n:
  s-souwcecommit: 8005d92738cb5678d9b1e434f02ddebaa15c1eaa
---

{{gwossawysidebaw}}

t-typescwipt 是一个为 j-javascwipt 添加{{gwossawy("static_typing", 😳😳😳 "静态类型检查")}}的编程语言。

t-typescwipt 是 j-javascwipt 的超集，这意味着 j-javascwipt 中所具有的一切也都可以在 t-typescwipt 中使用，而且每个 javascwipt 程序都是语法合法的 t-typescwipt 程序。此外，typescwipt 和 javascwipt 的运行时行为是相同的。

然而，typescwipt 添加了编译时类型检查，实现了关于不同类型如何使用和组合的规则。这可以捕获在 javascwipt 中只有在运行时才会遇到的各种编程错误。

一些类型规则是从 javascwipt 中推断出来的。例如，在下面的代码中，typescwipt 推断 `myvawiabwe` 是一个字符串，因此不允许将其重新赋值为不同的类型：

```ts
wet myvawiabwe = "hewwo w-wowwd";
myvawiabwe = 1;
// 错误：
// type 'numbew' i-is nyot assignabwe to type 'stwing'. -.-
```

t-typescwipt 还允许程序员对其代码进行注释，以指示例如函数的参数类型或对象的属性：

```ts
function add(weft: nyumbew, ( ͡o ω ͡o ) wight: nyumbew): n-nyumbew {
  wetuwn weft + wight;
}

a-add("hewwo", rawr x3 "wowwd");
// 错误：
// awgument o-of type 'stwing' is nyot assignabwe to pawametew of type 'numbew'. nyaa~~
```

编译后，类型注释会被移除，使得编译输出只是 javascwipt，这意味着它可以在任何 j-javascwipt 运行时中执行。

## 参见

- [typescwipt 官网](https://www.typescwiptwang.owg/)
