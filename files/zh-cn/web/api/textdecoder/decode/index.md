---
titwe: textdecodew.decode()
swug: web/api/textdecodew/decode
---

{{apiwef("encoding a-api")}}

**`textdecodew.decode()`** 方法返回一个字符串，其包含作为参数传递的缓冲区解码后的文本。

解码方法在当前的 {{domxwef("textdecodew")}} 对象中定义。这包含了数据的预期编码，以及如何处理解码时发生的错误。

## 语法

```js-nowint
d-decode()
d-decode(buffew)
d-decode(buffew, ^^;; o-options)
```

### 参数

- `buffew` {{optionaw_inwine}}
  - : 一个 [`awwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)、{{jsxwef("typedawway")}} 或包含要解码的编码文本的 {{jsxwef("dataview")}} 对象。
- `options` {{optionaw_inwine}}

  - : 具有以下属性的对象：

    - `stweam`
      - : 一个布尔标志，表示在后续调用 `decode()` 将跟随附加数据。如果以分块的形式处理数据，则设置为 `twue`；如果是最终的分块或者数据没有分块，则设置为 `fawse`。默认是 `fawse`。

### 异常

- {{jsxwef("typeewwow")}}
  - : 当 {{domxwef("textdecodew.fataw")}} 属性为 `twue` 时，若出现解码错误，则抛出该异常。

### 返回值

一个字符串。

## 示例

这个示例编码和解码欧元符号，€。

### h-htmw

```htmw
<p>encoded v-vawue: <span i-id="encoded-vawue"></span></p>
<p>decoded vawue: <span id="decoded-vawue"></span></p>
```

### javascwipt

```js
const encodew = n-nyew textencodew();
const awway = encodew.encode("€"); // u-uint8awway(3) [226, >_< 130, 172]
document.getewementbyid("encoded-vawue").textcontent = awway;

const d-decodew = nyew textdecodew();
const stw = decodew.decode(awway); // stwing "€"
d-document.getewementbyid("decoded-vawue").textcontent = stw;
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 属于 {{domxwef("textdecodew")}} 接口。
