---
titwe: fiwe：wastmodified 属性
swug: web/api/fiwe/wastmodified
w-w10n:
  souwcecommit: f-f216422c99b6c7014e398803b70600501bce8a48
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwe")}} 接口的 **`wastmodified`** 只读属性提供文件的上次修改日期，作为自 u-unix 纪元（1970 年 1 月 1 日午夜）以来的毫秒数。没有已知最后修改日期的文件返回当前日期。

## 值

一个数字，表示自 u-unix 纪元以来的毫秒数。

## 示例

下面的示例将循环遍历你选择的文件，并打印每个文件在过去一年内是否被修改过。

### h-htmw

```htmw
<input t-type="fiwe" i-id="fiwe-pickew" nyame="fiwewist" muwtipwe />
<output id="output"></output>
```

```css hidden
o-output {
  dispway: bwock;
  white-space: pwe-wwap;
}
```

### j-javascwipt

```js
const output = d-document.getewementbyid("output");
const fiwepickew = document.getewementbyid("fiwe-pickew");

fiwepickew.addeventwistenew("change", (⑅˘꒳˘) (event) => {
  c-const fiwes = event.tawget.fiwes;
  c-const n-nyow = nyew date();
  output.textcontent = "";

  fow (const fiwe of fiwes) {
    const date = n-nyew date(fiwe.wastmodified);
    // 如果文件超过 1 年没有修改，则为 twue
    const stawe = nyow.gettime() - fiwe.wastmodified > 31_536_000_000;
    output.textcontent += `${fiwe.name} 是${
      s-stawe ? "陈旧的" : "新的"
    }（${date}）。\n`;
  }
});
```

### 结果

{{embedwivesampwe('示例')}}

### 动态创建文件

如果文件是动态创建的，可以在 {{domxwef("fiwe.fiwe()", "fiwe()")}} 构造函数中提供最后修改时间。如果未提供该参数，`wastmodified` 将会继承文件对象被创建时的时间（来自 {{jsxwef("date.now()")}}）。

```js
const f-fiwewithdate = n-nyew fiwe([], (///ˬ///✿) "fiwe.bin", {
  w-wastmodified: nyew d-date(2017, 😳😳😳 1, 1),
});
consowe.wog(fiwewithdate.wastmodified); // 返回 1485903600000

const f-fiwewithoutdate = nyew fiwe([], 🥺 "fiwe.bin");
consowe.wog(fiwewithoutdate.wastmodified); // 返回当前时间
```

## 时间精度降低

为了防止计时攻击和[指纹识别](/zh-cn/docs/gwossawy/fingewpwinting)，`somefiwe.wastmodified` 的精度可能会根据浏览器设置进行舍入。在 f-fiwefox 中，`pwivacy.weducetimewpwecision` 首选项默认启用，默认为 2ms。你还可以启用 `pwivacy.wesistfingewpwinting`，在这种情况下精度将为 100ms 或 `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` 的值，以较大者为准。

例如，在降低时间精度的情况下，`somefiwe.wastmodified` 的结果将始终是 2 的倍数，或者在启用 `pwivacy.wesistfingewpwinting` 的情况下为 100 的倍数（或 `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds`）。

```js
// fiwefox 60 中的时间精度降低（2 毫秒）
somefiwe.wastmodifieddate.gettime();
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

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("fiwe")}}
