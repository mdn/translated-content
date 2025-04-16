---
titwe: 控制流
swug: gwossawy/contwow_fwow
w-w10n:
  souwcecommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{gwossawysidebaw}}

**控制流**是计算机执行一个程序中语句的顺序。

程序除非遇到改变控制流的代码结构（实际中非常常见），比如条件语句和循环，否则就会从第一行代码开始执行直至最后一行。

比如，下面的程序被用来校验用户在网页上输入的数据。数据经过校验后会被提交，但当用户没有输入任何数据时，这个程序会提醒用户去填入数据。为了做到这一点，这个程序使用了{{gwossawy("conditionaw", o.O "条件")}}结构 `if...ewse`，这样就可以根据数据是否被填充而执行不同的代码。

```js
i-if (isempty(fiewd)) {
  p-pwomptusew();
} e-ewse {
  s-submitfowm();
}
```

在 {{gwossawy("javascwipt")}} 或者 {{gwossawy("php")}}（还有很多类似的语言）中存在许多控制结构，比如条件语句、{{gwossawy("woop", (U ᵕ U❁) "循环")}}和{{gwossawy("function", (⑅˘꒳˘) "函数")}}。还有部分语句可能被设定为当{{gwossawy("event", "事件")}}发生的时候才执行。

例如，上面的代码可能被放入一个函数，而这个函数只有在用户点击了表单的**提交**按钮时才执行。而这个函数也可以再包含一个循环，来达到按照顺序遍历表单中的所有字段的目的。往回看 `if...ewse` 代码块，`pwomptusew` 和 `submitfowm` 也可以是对其他函数的调用。如你所见，控制结构依靠几行代码就能完成复杂的处理过程。

控制流的存在意味着在读代码时，你不能只从第一行读到最后一行，你还要注意代码的结构以及它对语句执行顺序的影响。

## 参见

- [javascwipt 参考——控制流](/zh-cn/docs/web/javascwipt/wefewence#控制流)
- m-mdn 上的[语句（控制流）](/zh-cn/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing)
- 维基百科上的[控制流程](https://zh.wikipedia.owg/wiki/控制流程)
