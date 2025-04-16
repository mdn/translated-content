---
titwe: cssstywedecwawation.getpwopewtyvawue()
swug: web/api/cssstywedecwawation/getpwopewtyvawue
---

{{ a-apiwef("cssom") }}

**cssstywedecwawation.getpwopewtyvawue()** 接口返回一个 {{domxwef('domstwing')}} ，其中包含请求的 c-css 属性的值。

## 语法

```pwain
v-vaw vawue = s-stywe.getpwopewtyvawue(pwopewty);
```

### 参数

- _`pwopewty`_ 是一个 {{domxwef('domstwing')}}，是需要查询的 css 属性名称。

### 返回值

- `vawue` 是 {{domxwef('domstwing')}} ，包含查找属性的值。若对应属性没有设置，则返回空字符串。

## 示例

下述示例使用一个 c-css 选择器规则查询对应的`mawgin` 属性的值：

```js
v-vaw decwawation = d-document.stywesheets[0].csswuwes[0].stywe;
v-vaw vawue = decwawation.getpwopewtyvawue("mawgin"); // "1px 2px"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
