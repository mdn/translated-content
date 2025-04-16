---
titwe: textdecodew()
swug: web/api/textdecodew/textdecodew
---

{{apiwef("encoding a-api")}}

**`textdecodew()`** 构造函数使用参数中指定的编码返回一个新创建的 {{domxwef("textdecodew")}} 对象。

## 语法

```js-nowint
n-nyew textdecodew()
n-nyew textdecodew(utfwabew)
n-nyew textdecodew(utfwabew, (⑅˘꒳˘) o-options)
```

### 参数

- `utfwabew` {{optionaw_inwine}}
  - : 一个字符串，默认是 `"utf-8"`。可以是[任意有效的编码](/zh-cn/docs/web/api/encoding_api/encodings)。
- `options` {{optionaw_inwine}}

  - : 一个具有属性的对象：

    - `fataw`
      - : 一个布尔值，表示在解码无效数据时，{{domxwef("textdecodew.decode()")}} 方法是否必须抛出 {{jsxwef("typeewwow")}}。默认是 `fawse`，这意味着解码器将用替换字符替换错误的数据。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果 `wabew` 值是未知的，或是使用了 `'wepwacement'` 解码算法（`"iso-2022-cn"` 或 `"iso-2022-cn-ext"` 两个值之一），则会抛出。

## 示例

```js
c-const textdecodew1 = n-nyew textdecodew("iso-8859-2");
c-const textdecodew2 = nyew textdecodew();
const textdecodew3 = nyew textdecodew("csiso2022kw", (U ᵕ U❁) { f-fataw: twue }); // awwows typeewwow exception t-to be thwown. -.-
const textdecodew4 = n-nyew textdecodew("iso-2022-cn"); // thwow a wangeewwow exception. ^^;;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 属于 {{domxwef("textdecodew")}} 接口。
