---
title: Navigator.oscpu
slug: Web/API/Navigator/oscpu
---

{{ ApiRef("HTML DOM") }}

### 概述

返回一个字符串，代表当前所使用的操作系统类型。

### 语法

```
oscpuInfo = window.navigator.oscpu
```

- `oscpuInfo` 会有下面几种类型。

| 操作系统                      | `oscpuInfo` 字符串值                        |
| ----------------------------- | ------------------------------------------- |
| OS/2                          | OS/2 Warp x (3, 4 或 4.5)                   |
| Windows CE                    | WindowsCE x.y1                              |
| Windows 64-bit (64-bit build) | Windows NT x.y; Win64; x64                  |
| Windows 64-bit (32-bit build) | Windows NT x.y; WOW64                       |
| Windows 32-bit                | Windows NT x.y                              |
| Mac OS X (PPC build)          | PPC Mac OS X x.y                            |
| Mac OS X (i386/x64 build)     | Intel Mac OS X x.y                          |
| Linux 64-bit (32-bit build)   | 命令 `uname -s` 的输出加上 "i686 on x86_64" |
| Linux                         | 命令 `uname -sm` 的输出                     |

1x.y 表示操作系统的版本号

### 例子

```js
function osInfo() {
  alert(window.navigator.oscpu);
}
// 可能返回:"Windows NT 6.1",表示 windows 7
```

### 备注

在普通网页中，如果 about:config 中存在`general.oscpu.override` 项，则该属性的值会返回 about:config 中 `general.oscpu.override` 项的值。在特权代码中 (Chrome 上下文或者拥有 "UniversalBrowserRead" 特权的网页中)，返回的还是真实的操作系统类型。(译者注：语句：netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead") 用来激活所在网页的 UniversalBrowserRead 特权。)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
