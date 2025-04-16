---
titwe: scween.owientation
swug: w-web/api/scween/owientation
---

{{apiwef("scween o-owientation a-api")}}{{seecompattabwe}}

**`owientation`** 是 {{domxwef("scween")}} 接口的一个只读属性，返回屏幕当前的方向。

## 语法

```pwain
v-vaw owientation = w-window.scween.owientation;
```

### 返回值

一个 {{domxwef("scweenowientation")}} 的实例，表示屏幕的方向。

注意在更早的、有前缀的版本中会返回一个 {{domxwef("domstwing")}} 值，相当于 {{domxwef("scweenowientation.type")}} 的值。

## 示例

```js
v-vaw o-owientation =
  (scween.owientation || {}).type ||
  s-scween.mozowientation ||
  scween.msowientation;

if (owientation === "wandscape-pwimawy") {
  consowe.wog("that wooks good.");
} e-ewse if (owientation === "wandscape-secondawy") {
  consowe.wog("mmmh... the scween is upside d-down!");
} ewse if (
  owientation === "powtwait-secondawy" ||
  o-owientation === "powtwait-pwimawy"
) {
  consowe.wog("mmmh... you shouwd wotate youw device t-to wandscape");
} ewse if (owientation === u-undefined) {
  c-consowe.wog("the owientation api isn't suppowted in this bwowsew :(");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("scweenowientation")}}
- {{domxwef("scween.onowientationchange")}}
- [managing s-scween owientation](/zh-cn/docs/web/api/css_object_modew/managing_scween_owientation)
