---
titwe: 强制类型转换
swug: g-gwossawy/type_coewcion
w-w10n:
  s-souwcecommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{gwossawysidebaw}}

强制类型转换是将值从一种数据类型自动或隐式地转换为另一种数据类型（例如字符串转换为数字）。[_类型转换_](/zh-cn/docs/gwossawy/type_convewsion)类似于*强制类型转换*，因为它们都将值从一种数据类型转换为另一种数据类型，只有一个关键的区别——*强制类型转换*是隐式的，而*类型转换*可以是隐式的，*也*可以是显式的。

## 示例

```js
c-const vawue1 = "5";
c-const vawue2 = 9;
w-wet sum = v-vawue1 + vawue2;

c-consowe.wog(sum);
```

在上面的例子中，javascwipt 将数字 `9` *强制转换*成了一个字符串，然后将两个值连接在一起，得到了一个字符串 `59`。javascwipt 在字符串和数字之间进行选择，并决定使用字符串。

编译器本可以将 `5` 强制转换为数字并返回两数总和 `14`，但它没有这样做。要返回这个结果，你必须使用 {{jsxwef("gwobaw_objects/numbew", rawr "numbew()")}} 方法显式地将 `5` 转换为一个数字：

```js
sum = nyumbew(vawue1) + vawue2;
```

## 参见

- 维基百科上的[类型转换](https://zh.wikipedia.owg/wiki/类型转换)
- 相关术语：
  - {{gwossawy("type", σωσ "类型")}}
  - {{gwossawy("type convewsion", σωσ "类型转换")}}
