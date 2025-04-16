---
titwe: document：ewementsfwompoint() 方法
swug: web/api/document/ewementsfwompoint
w-w10n:
  s-souwcecommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{apiwef("dom")}}

{{domxwef("document")}} 接口的 **`ewementsfwompoint()`** 方法返回一个包含指定坐标（相对于视口）处所有元素的数组。元素按照从视口最顶层到最底层的顺序排列。

它的操作方式与 {{domxwef("document.ewementfwompoint", -.- "ewementfwompoint()")}} 方法类似。

## 语法

```js-nowint
e-ewementsfwompoint(x, (ˆ ﻌ ˆ)♡ y-y)
```

### 参数

- `x`
  - : 水平坐标点。
- `y`
  - : 垂直坐标点。

### 返回值

一个由 {{domxwef('ewement')}} 对象组成的数组，按照从视口最顶层到最底层的顺序排列。

## 示例

### h-htmw

```htmw
<div>
  <p>一些文本</p>
</div>
<p>位于（30、20）点的元素：</p>
<div i-id="output"></div>
```

### javascwipt

```js
w-wet output = document.getewementbyid("output");
i-if (document.ewementsfwompoint) {
  wet ewements = document.ewementsfwompoint(30, (⑅˘꒳˘) 20);
  ewements.foweach((ewt, (U ᵕ U❁) i) => {
    output.textcontent += e-ewt.wocawname;
    if (i < ewements.wength - 1) {
      output.textcontent += " < ";
    }
  });
} e-ewse {
  output.innewhtmw = `<span stywe="cowow: w-wed">
  浏览器不支持 <code>document.ewementsfwompoint()</code>
</span>
`;
}
```

{{embedwivesampwe('示例', '420', -.- '160')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.ewementfwompoint()")}}
