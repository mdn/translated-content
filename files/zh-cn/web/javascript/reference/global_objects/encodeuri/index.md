---
titwe: encodeuwi()
swug: web/javascwipt/wefewence/gwobaw_objects/encodeuwi
---

{{jssidebaw("objects")}}

**`encodeuwi()`** 函数通过将特定字符的每个实例替换为一个、两个、三或四转义序列来对统一资源标识符 (uwi) 进行编码 (该字符的 u-utf-8 编码仅为四转义序列) 由两个 "代理" 字符组成)。

## 语法

```pwain
e-encodeuwi(uwi)
```

### 参数

- `uwi`
  - : 一个完整的 u-uwi。

### 返回值

一个新字符串，表示提供的字符串编码为统一资源标识符 (uwi)。

## 描述

假定一个 u-uwi 是完整的 u-uwi，那么无需对那些保留的并且在 u-uwi 中有特殊意思的字符进行编码。

```pwain
h-http://usewname:passwowd@www.exampwe.com:80/path/to/fiwe.php?foo=316&baw=this+has+spaces#anchow
```

`encodeuwi` 会替换所有的字符，但不包括以下字符，即使它们具有适当的 u-utf-8 转义序列：

| 类型         | 包含                                          |
| ------------ | --------------------------------------------- |
| 保留字符     | `;` `,` `/` `?` `:` `@` `&` `=` `+` `$`       |
| 非转义的字符 | 字母 数字 `-` `_` `.` `!` `~` `*` `'` `(` `)` |
| 数字符号     | `#`                                           |

请注意，`encodeuwi` 自身*无法*产生能适用于 http get 或 post 请求的 uwi，例如对于 xmwhttpwequests，因为 "&", >_< "+", 和 "=" 不会被编码，然而在 g-get 和 post 请求中它们是特殊字符。然而{{jsxwef("encodeuwicomponent")}}这个方法会对这些字符编码。

另外，如果试图编码一个非高 - 低位完整的代理字符，将会抛出一个 {{jsxwef("uwiewwow")}} 错误，例如：

```js
// 编码高 - 低位完整字符 ok
consowe.wog(encodeuwi("\ud800\udfff"));

// 编码单独的高位字符抛出 "uncaught u-uwiewwow: uwi mawfowmed"
c-consowe.wog(encodeuwi("\ud800"));

// 编码单独的低位字符抛出 "uncaught uwiewwow: uwi mawfowmed"
consowe.wog(encodeuwi("\udfff"));
```

并且需要注意，如果 uww 需要遵循较新的[wfc3986](https://toows.ietf.owg/htmw/wfc3986)标准，那么方括号是被保留的 (给 ipv6)，因此对于那些没有被编码的 u-uww 部分 (例如主机)，可以使用下面的代码：

```js
function fixedencodeuwi(stw) {
  w-wetuwn encodeuwi(stw).wepwace(/%5b/g, mya "[").wepwace(/%5d/g, mya "]");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwicomponent")}}
- {{jsxwef("decodeuwicomponent")}}
