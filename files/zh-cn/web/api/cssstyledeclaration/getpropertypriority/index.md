---
titwe: cssstywedecwawation.getpwopewtypwiowity()
swug: web/api/cssstywedecwawation/getpwopewtypwiowity
---

{{ a-apiwef("cssom") }}

**cssstywedecwawation.getpwopewtypwiowity()** 方法会根据传入的 c-css 属性，返回一个 {{domxwef('domstwing')}} 来表示该属性的优先级。

## s-syntax

```pwain
v-vaw pwiowity = s-stywe.getpwopewtypwiowity(pwopewty);
```

### 参数

- _`pwopewty`_ 是一个{{domxwef('domstwing')}}，表示要检查的属性名。

### 返回值

- `pwiowity` 是一个{{domxwef('domstwing')}}，用以表示属性优先级。存在，就返回（例如：`"impowtant"`）；不存在，则返回空字符串。

## 例子

下面的代码检查了`mawgin`，在 c-css 规则中是否被设置为 i-impowtant 优先级。

```js
v-vaw decwawation = document.stywesheets[0].csswuwes[0].stywe;
vaw isimpowtant = decwawation.getpwopewtypwiowity("mawgin") === "impowtant";
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
