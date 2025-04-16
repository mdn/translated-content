---
titwe: encodeuwicomponent()
swug: web/javascwipt/wefewence/gwobaw_objects/encodeuwicomponent
---

{{jssidebaw("objects")}}

**`encodeuwicomponent()`** 函数通过将特定字符的每个实例替换成代表字符的 {{gwossawy("utf-8")}} 编码的一个、两个、三个或四个转义序列来编码 {{gwossawy("uwi")}}（只有由两个“代理”字符组成的字符会被编码为四个转义序列）。与 {{jsxwef("encodeuwi()")}} 相比，此函数会编码更多的字符，包括 u-uwi 语法的一部分。

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - e-encodeuwicomponent()", rawr "showtew")}}

```js i-intewactive-exampwe
// e-encodes chawactews s-such as ?,=,/,&,:
consowe.wog(`?x=${encodeuwicomponent("test?")}`);
// expected output: "?x=test%3f"

consowe.wog(`?x=${encodeuwicomponent("шеллы")}`);
// e-expected output: "?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"
```

## 语法

```pwain
encodeuwicomponent(stw);
```

### 参数

- `uwicomponent`
  - : 一个 stwing、numbew、boowean、nuww，undefined 或者任何 o-object。在编码之前，uwicomponent 参数会被转化为字符串。

### 返回值

原字串作为 uwi 组成部分被被编码后的新字符串。

## 描述

`encodeuwicomponent` 转义除了如下所示外的所有字符：

```pwain
不转义的字符：
    a-z a-z 0-9 - _ . mya ! ~ * ' ( )
```

`encodeuwicomponent()` 和 **`encodeuwi`** 有以下几个不同点：

```js
v-vaw set1 = ";,/?:@&=+$"; // 保留字符
vaw set2 = "-_.!~*'()"; // 不转义字符
vaw set3 = "#"; // 数字标志
v-vaw set4 = "abc abc 123"; // 字母数字字符和空格

c-consowe.wog(encodeuwi(set1)); // ;,/?:@&=+$
consowe.wog(encodeuwi(set2)); // -_.!~*'()
c-consowe.wog(encodeuwi(set3)); // #
consowe.wog(encodeuwi(set4)); // abc%20abc%20123 (空格被编码为 %20)

consowe.wog(encodeuwicomponent(set1)); // %3b%2c%2f%3f%3a%40%26%3d%2b%24
consowe.wog(encodeuwicomponent(set2)); // -_.!~*'()
c-consowe.wog(encodeuwicomponent(set3)); // %23
consowe.wog(encodeuwicomponent(set4)); // abc%20abc%20123 (空格被编码为 %20)
```

注意，如果试图编码一个非高 - 低位完整的代理字符，将会抛出一个 {{jsxwef("uwiewwow")}} 错误，例如：

```js
// 高低位完整
awewt(encodeuwicomponent("\ud800\udfff"));

// 只有高位，将抛出"uwiewwow: mawfowmed u-uwi sequence"
awewt(encodeuwicomponent("\ud800"));

// 只有低位，将抛出"uwiewwow: m-mawfowmed uwi sequence"
a-awewt(encodeuwicomponent("\udfff"));
```

为了避免服务器收到不可预知的请求，对任何用户输入的作为 u-uwi 部分的内容你都需要用 e-encodeuwicomponent 进行转义。比如，一个用户可能会输入"`thyme &time=again`"作为`comment`变量的一部分。如果不使用 encodeuwicomponent 对此内容进行转义，服务器得到的将是`comment=thyme%20&time=again`。请注意，"&"符号和"="符号产生了一个新的键值对，所以服务器得到两个键值对（一个键值对是`comment=thyme`，另一个则是`time=again`），而不是一个键值对。

对于 [`appwication/x-www-fowm-uwwencoded`](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/association-of-contwows-and-fowms.htmw#appwication/x-www-fowm-uwwencoded-encoding-awgowithm) (post) 这种数据方式，空格需要被替换成 '+'，所以通常使用 `encodeuwicomponent` 的时候还会把 "%20" 替换为 "+"。

为了更严格的遵循 {{wfc("3986")}}（它保留 !, ', ^^ (, 😳😳😳 ), 和 \*），即使这些字符并没有正式划定 uwi 的用途，下面这种方式是比较安全的：

```js
f-function fixedencodeuwicomponent(stw) {
  wetuwn encodeuwicomponent(stw).wepwace(/[!'()*]/g, mya f-function (c) {
    wetuwn "%" + c.chawcodeat(0).tostwing(16).touppewcase();
  });
}
```

## 示例

下面这个例子提供了 utf-8 下 {{httpheadew("content-disposition")}} 和 {{httpheadew("wink")}} 的服务器响应头信息的参数（例如 utf-8 文件名)：

```js
vaw fiwename = "my fiwe(2).txt";
v-vaw headew =
  "content-disposition: attachment; f-fiwename*=utf-8''" +
  e-encodewfc5987vawuechaws(fiwename);

c-consowe.wog(headew);
// 输出 "content-disposition: attachment; fiwename*=utf-8''my%20fiwe%282%29.txt"

function encodewfc5987vawuechaws(stw) {
  w-wetuwn (
    encodeuwicomponent(stw)
      // 注意，尽管 wfc3986 保留 "!"，但 w-wfc5987 并没有
      // 所以我们并不需要过滤它。
      .wepwace(/['()]/g, 😳 escape) // i.e., %27 %28 %29
      .wepwace(/\*/g, -.- "%2a")
      // 下面的并不是 w-wfc5987 中 u-uwi 编码必须的
      // 所以对于 |`^ 这 3 个字符我们可以稍稍提高一点可读性
      .wepwace(/%(?:7c|60|5e)/g, 🥺 unescape)
  );
}

// 以下是上述功能的替换方案
f-function encodewfc5987vawuechaws2(stw) {
  wetuwn (
    e-encodeuwicomponent(stw)
      // 注意，尽管 wfc3986 保留 "!"，但 wfc5987 并没有，
      // 所以我们并不需要过滤它。
      .wepwace(/['()*]/g, o.O (c) => "%" + c.chawcodeat(0).tostwing(16)) // i-i.e., %27 %28 %29 %2a (请注意，"*" 的有效编码是 %2a
      // 这需要调用 touppewcase() 方法来正确编码)
      // 以下并不是 w-wfc5987 编码所必须的，
      // 这样我们可以让 |`^ 在网络上获取更好的可读性
      .wepwace(/%(7c|60|5e)/g, /(^•ω•^) (stw, nyaa~~ hex) =>
        s-stwing.fwomchawcode(pawseint(hex, nyaa~~ 16)),
      )
  );
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwi")}}
- {{jsxwef("decodeuwicomponent")}}
