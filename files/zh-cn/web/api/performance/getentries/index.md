---
title: Performance.getEntries()
slug: Web/API/Performance/getEntries
---

{{APIRef("Performance Timeline API")}}

**`getEntries()`** 对于给定的 filter，此方法返回 {{domxref("PerformanceEntry")}} 对象数组。数组成员（入口）可以在显式的时间点用 performance _marks 或 measures_ 来创建 (例如调用{{domxref("Performance.mark","mark()")}} 方法) .

此方法暴露给{{domxref("Window")}} 和 {{domxref("Worker")}}接口。

## 语法

取全部：

```
entries = window.performance.getEntries();
entries = window.performance.getEntries(PerformanceEntryFilterOptions);
```

取特定：

```
entries = performance.getEntries({name: "entry_name", entryType: "mark"});
```

### 参数

- PerformanceEntryFilterOptions {{optional_inline}}

  - : `PerformanceEntryFilterOptions` 是一个带有以下键值的字典：

    - `"name"`, performance entry. 的名字
    - `"entryType"`, entry 类型。合法的 entry 类型可以从{{domxref("PerformanceEntry.entryType")}} 方法获取。
    - `"initiatorType"`, 初始化资源的类型 (例如一个 HTML element). 其取值被 {{domxref("PerformanceResourceTiming.initiatorType")}} 接口所定义。

### 返回值

- entries
  - : 一个由符合 filter 条件的{{domxref("PerformanceEntry")}} 对象构成的数组 . 数组成员按 PerformanceEntry.{{domxref("PerformanceEntry.startTime","startTime")}}时间顺序排列 . 如果没有符合 filter 条件的对象，那么返回空数组。如果不带任何参数，返回全部 entries.

## Example

```js
function use_PerformanceEntry_methods() {
  log("PerformanceEntry tests ...");

  if (performance.mark === undefined) {
    log("... performance.mark Not supported");
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");
  performance.mark("Begin");
  do_work(100000);
  performance.mark("End");
  do_work(200000);
  performance.mark("End");

  // Use getEntries() to iterate through the each entry
  var p = performance.getEntries();
  for (var i = 0; i < p.length; i++) {
    log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }

  // Use getEntries(name, entryType) to get specific entries
  p = performance.getEntries({ name: "Begin", entryType: "mark" });
  for (var i = 0; i < p.length; i++) {
    log("Begin[" + i + "]");
    check_PerformanceEntry(p[i]);
  }

  // Use getEntriesByType() to get all "mark" entries
  p = performance.getEntriesByType("mark");
  for (var i = 0; i < p.length; i++) {
    log(
      "Mark only entry[" +
        i +
        "]: name = " +
        p[i].name +
        "; startTime = " +
        p[i].startTime +
        "; duration  = " +
        p[i].duration,
    );
  }

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  p = performance.getEntriesByName("Begin", "mark");
  for (var i = 0; i < p.length; i++) {
    log(
      "Mark and Begin entry[" +
        i +
        "]: name = " +
        p[i].name +
        "; startTime = " +
        p[i].startTime +
        "; duration  = " +
        p[i].duration,
    );
  }
}

//entryType,name,initiatorType  Examples
var p = performance.getEntries();

var ptyps = p.map((ele) => {
  return ele.entryType;
});
//Array(94) [ "navigation", "resource", "resource", "resource", "resource", "resource", "resource", "resource", "resource", "resource", … ]

var pnms = p.map((ele) => {
  return ele.name;
});
//Array(94) [ "document", "https://csdnimg.cn/public/static/css/avatar.css", "https://csdnimg.cn/public/common/libs/jquery/jquery-1.9.1.min.js", "https://csdnimg.cn/rabbit/exposure-click/main-1.0.5.js", "https://csdnimg.cn/release/phoenix/production/main-e96db8abdf.js", "https://csdnimg.cn/pubfooter/js/tracking-1.0.2.js", "https://csdnimg.cn/public/common/toolbar/js/content_toolbar.js", "https://csdnimg.cn/release/phoenix/production/markdown_views-ea0013b516.css", "https://csdnimg.cn/search/baidu_search-1.1.2.js?v=201802071056&autorun=true&install=true&keyword=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F", "https://csdnimg.cn/release/phoenix/production/main-f869aa95a4.css", … ]

var pityps = p.map((ele) => {
  return ele.initiatorType;
});
//Array(94) [ "navigation", "link", "script", "script", "script", "script", "script", "link", "script", "link", … ]

Specifications;
```

{{Specifications}}

## 浏览器兼容性

{{Compat}}
