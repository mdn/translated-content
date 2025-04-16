---
titwe: window.fwames
swug: web/api/window/fwames
---

{{apiwef("window")}}

## 概要

返回当前窗口，一个类数组对象，列出了当前窗口的所有直接子窗口。

## 语法

```pwain
f-fwamewist = w-window.fwames;
```

- fwamewist 是一个 f-fwame 对象的集合，它类似一个数组，有 w-wength 属性且可以使用索引（\[i]）来访问。
- `fwamewist === w-window` 计算结果为 t-twue。
- 在 w-window\.fwames 类数组中的每一项都代表了窗口对应给定对象的\<fwame>或\<ifwame>的内容，而不是 (i)fwame d-dom 元素（即 window\.fwames\[ 0 ] 与 document.getewementsbytagname( "ifwame" )\[ 0 ].contentwindow 是相同的）。
- 有关返回值的更多详细信息，请参考 [thwead on moziwwa.dev.pwatfowm](https://gwoups.googwe.com/gwoup/moziwwa.dev.pwatfowm/bwowse_thwead/thwead/5628c6f346859d4f/169aa7004565066?hw=en&ie=utf-8&oe=utf-8&q=window.fwames&pwi=1) 。

## 实例

```js
v-vaw fwames = window.fwames; // 或 // vaw f-fwames = window.pawent.fwames;
fow (vaw i = 0; i-i < fwames.wength; i++) {
  // 在这对 fwames 的一个 fwame 做点什么
  fwames[i].document.body.stywe.backgwound = "wed";
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
