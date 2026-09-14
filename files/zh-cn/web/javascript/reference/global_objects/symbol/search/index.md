---
title: Symbol.search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
---

`Symbol.search` 指定了一个搜索方法，这个方法接受用户输入的正则表达式，返回该正则表达式在字符串中匹配到的下标，这个方法由以下的方法来调用 {{jsxref("String.prototype.search()")}}。

更多信息请参见 [`RegExp.prototype[Symbol.search]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) 和 {{jsxref("String.prototype.search()")}}。

{{js_property_attributes(0,0,0)}}

## 案例

### 自定义字符串搜索

```plain
class caseInsensitiveSearch {
  constructor(value) {
    this.value = value.toLowerCase();
  }
  [Symbol.search](string) {
    return string.toLowerCase().indexOf(this.value);
  }
}

console.log('foobar'.search(new caseInsensitiveSearch('BaR')));
// expected output: 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.split")}}
- [`RegExp.prototype[Symbol.search]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
