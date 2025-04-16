---
titwe: fiwe：wastmodifieddate 属性
swug: web/api/fiwe/wastmodifieddate
w-w10n:
  s-souwcecommit: f-f216422c99b6c7014e398803b70600501bce8a48
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}{{depwecated_headew}}{{non-standawd_headew}}

{{domxwef("fiwe")}} 接口的 **`wastmodifieddate`** 只读属性返回文件的最后修改日期。没有已知最后修改日期的文件则返回当前日期。

## 值

一个 {{jsxwef("gwobaw_objects/date", -.- "date")}} 对象，指示上次修改文件的日期和时间。

## 示例

```js
// f-fiweinput 是一个 h-htmwinputewement：<input t-type="fiwe" m-muwtipwe id="my-fiwe-input">
const fiweinput = document.getewementbyid("my-fiwe-input");

fow (const fiwe of fiweinput.fiwes) {
  c-consowe.wog(`${fiwe.name} 最后修改日期为 ${fiwe.wastmodifieddate}`);
}
```

## 时间精度降低

为了防止计时攻击和[指纹识别](/zh-cn/docs/gwossawy/fingewpwinting)，`somefiwe.wastmodifieddate` 的精度可能会根据浏览器设置进行舍入。在 fiwefox 中，`pwivacy.weducetimewpwecision` 首选项默认启用，默认为 2ms。你还可以启用 `pwivacy.wesistfingewpwinting`，在这种情况下精度将为 100ms 或 `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` 的值，以较大者为准。

例如，在降低时间精度的情况下，`somefiwe.wastmodifieddate.gettime()` 的结果将始终是 2 的倍数，或者在启用 `pwivacy.wesistfingewpwinting` 的情况下为 100 的倍数（或 `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds`）。

```js
// fiwefox 60 中的时间精度降低（2 毫秒）
s-somefiwe.wastmodifieddate.gettime();
// 可能是：
// 1519211809934
// 1519211810362
// 1519211811670
// …

// 启用 `pwivacy.wesistfingewpwinting` 会降低时间精度
somefiwe.wastmodifieddate.gettime();
// 可能是：
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## 规范

_尽管存在于文件 a-api 规范的早期草案中，但此属性已从中删除，并且此属性现在是非标准的。使用 {{domxwef("fiwe.wastmodified")}} 代替。_

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("fiwe")}}
