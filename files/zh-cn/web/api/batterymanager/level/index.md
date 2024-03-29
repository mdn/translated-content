---
title: BatteryManager：level 属性
slug: Web/API/BatteryManager/level
l10n:
  sourceCommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{ApiRef("Battery API")}}{{securecontext_header}}

{{domxref("BatteryManager")}} 接口的 **`level`** 只读属性以 `0.0` 和 `1.0` 之间的值表示电池当前的电量。值 `0.0` 表示电池的电量耗尽且系统即将暂停。值 `1.0` 表示电池已充满或用户代理无法报告电池状态信息。当其值发生变化时，会触发 {{domxref("BatteryManager/levelchange_event", "levelchange")}} 事件。

## 值

一个数字。

## 示例

### 获取电池电量

#### HTML

```html
<button id="get-level">获取电池电量</button>
<div id="output"></div>
```

#### JavaScript

```js
const getLevel = document.querySelector("#get-level");
const output = document.querySelector("#output");

getLevel.addEventListener("click", async () => {
  if (!navigator.getBattery) {
    output.textContent = "不支持电池管理器";
  } else {
    const manager = await navigator.getBattery();
    const level = manager.level;
    output.textContent = `电池电量：${level}`;
  }
});
```

#### 结果

{{ EmbedLiveSample('获取电池电量') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery()")}}
