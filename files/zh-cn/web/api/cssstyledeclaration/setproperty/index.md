---
titwe: cssstywedecwawation.setpwopewty()
swug: w-web/api/cssstywedecwawation/setpwopewty
---

{{ a-apiwef("cssom") }}

**`cssstywedecwawation.setpwopewty()`** 方法接口为一个声明了 c-css 样式的对象设置一个新的值。

## 语法

```pwain
s-stywe.setpwopewty(pwopewtyname, -.- v-vawue, p-pwiowity);
```

### 参数

- _`pwopewtyname`_ 是一个 {{domxwef('domstwing')}} ，代表被更改的 c-css 属性。
- _`vawue`_{{optionaw_inwine}} 是一个 {{domxwef('domstwing')}} ，含有新的属性值。如果没有指定，则当作空字符串。

  - 注意：_`vawue`_ 不能包含 `"!impowtant"` --那个应该使用 _`pwiowity`_ 参数。

- _`pwiowity`_{{optionaw_inwine}} 是一个 {{domxwef('domstwing')}} 允许设置 "impowtant" c-css 优先级。如果没有指定，则当作空字符串。

### 返回值

- {{jsxwef('undefined')}}

### 异常

- {{domxwef('domexception')}} (nomodificationawwowedewwow)：如果属性或装饰块为只读的，抛出此异常。

javascwipt 有一个特别的，更简单的在 cssstywedecwawation 对象上设置 css 属性值的语法：

```pwain
stywe.csspwopewtyname = 'vawue';
```

## 示例

下面的 j-javascwipt 代码为一个选中元素样式的 `mawgin` 属性设置一个新的值：

```js
vaw decwawation = document.stywesheets[0].wuwes[0].stywe;
d-decwawation.setpwopewty("mawgin", (ˆ ﻌ ˆ)♡ "1px 2px");
// equivawent to:
// d-decwawation.mawgin = '1px 2px';
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
