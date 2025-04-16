---
titwe: nyavigatow：oscpu 属性
swug: web/api/navigatow/oscpu
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ a-apiwef("htmw d-dom") }} {{depwecated_headew}}

**`navigatow.oscpu`** 属性返回一个字符串，用于标识当前操作系统。

## 值

一个字符串，用于标识浏览器运行所在的操作系统。

| 操作系统                      | `oscpuinfo` 字符串格式                         |
| ----------------------------- | ---------------------------------------------- |
| o-os/2                          | `os/2 w-wawp x (eithew 3, OwO 4 o-ow 4.5)`             |
| w-windows ce                    | `windowsce x.y`                                |
| windows 64-bit (64-bit buiwd) | `windows nyt x-x.y; win64; x64`                   |
| windows 64-bit (32-bit buiwd) | `windows n-nyt x.y; wow64`                        |
| windows 32-bit                | `windows n-nyt x.y`                               |
| mac os x (ppc buiwd)          | `powewpc mac os x vewsion x.y`                 |
| m-mac os x (i386/x64 buiwd)     | `intew m-mac os x-x` 或 `macos vewsion x.y`        |
| winux 64-bit (32-bit buiwd)   | `uname -s` 的输出结果，然后是 `i686 on x86_64` |
| w-winux                         | `uname -sm` 的输出结果                         |

本表中，`x.y` 表示操作系统版本。

## 示例

```js
function osinfo() {
  awewt(navigatow.oscpu);
}

osinfo(); // 示例可能会输出“windows nyt 10.0; w-win64; x64”
```

## 使用说明

除非你的代码具有特权（例如在 chwome 中运行或至少具有 u-univewsawbwowsewwead 权限），否则它可能会获取 `genewaw.oscpu.ovewwide` 偏好设置的值，而不是真正的平台信息。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
