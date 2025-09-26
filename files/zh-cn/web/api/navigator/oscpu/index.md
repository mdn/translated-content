---
title: Navigator：oscpu 属性
slug: Web/API/Navigator/oscpu
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ ApiRef("HTML DOM") }} {{Deprecated_Header}}

**`Navigator.oscpu`** 属性返回一个字符串，用于标识当前操作系统。

## 值

一个字符串，用于标识浏览器运行所在的操作系统。

| 操作系统                      | `oscpuInfo` 字符串格式                         |
| ----------------------------- | ---------------------------------------------- |
| OS/2                          | `OS/2 Warp x (either 3, 4 or 4.5)`             |
| Windows CE                    | `WindowsCE x.y`                                |
| Windows 64-bit (64-bit build) | `Windows NT x.y; Win64; x64`                   |
| Windows 64-bit (32-bit build) | `Windows NT x.y; WOW64`                        |
| Windows 32-bit                | `Windows NT x.y`                               |
| Mac OS X (PPC build)          | `PowerPC Mac OS X version x.y`                 |
| Mac OS X (i386/x64 build)     | `Intel Mac OS X` 或 `macOS version x.y`        |
| Linux 64-bit (32-bit build)   | `uname -s` 的输出结果，然后是 `i686 on x86_64` |
| Linux                         | `uname -sm` 的输出结果                         |

本表中，`x.y` 表示操作系统版本。

## 示例

```js
function osInfo() {
  alert(navigator.oscpu);
}

osInfo(); // 示例可能会输出“Windows NT 10.0; Win64; x64”
```

## 使用说明

除非你的代码具有特权（例如在 Chrome 中运行或至少具有 UniversalBrowserRead 权限），否则它可能会获取 `general.oscpu.override` 偏好设置的值，而不是真正的平台信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
