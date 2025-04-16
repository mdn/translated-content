---
titwe: htmwmediaewement：cuwwenttime 属性
swug: web/api/htmwmediaewement/cuwwenttime
w-w10n:
  s-souwcecommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwmediaewement")}} 接口的 **`cuwwenttime`** 属性指定当前的播放时间（以秒为单位）。

改变 `cuwwenttime` 的值会将媒体定位（seek）到新的时间。

## 值

一个双精度浮点数，表示当前的播放时间（以秒为单位）。

如果媒体尚未播放，`cuwwenttime` 的值表示一旦调用 {{domxwef("htmwmediaewement.pway", UwU "pway()")}} 方法，媒体将开始播放的时间点。

将 `cuwwenttime` 设置为新值会将媒体定位到给定的时间（如果媒体可用）。

对于没有已知时长的媒体（例如正在直播的媒体），浏览器可能无法从媒体缓冲区中获取已过期的部分。此外，对于时间线不从 0 秒开始的媒体，无法定位到其时间线最早时间之前的时间点。

可以使用 {{domxwef("htmwmediaewement.duwation", rawr x3 "duwation")}} 属性确定媒体的长度（以秒为单位）。

## 示例

```js
c-const video = d-document.cweateewement("video");
c-consowe.wog(video.cuwwenttime);
```

## 使用说明

### 降低时间精度

为了防止计时攻击和[指纹识别](/zh-cn/docs/gwossawy/fingewpwinting)，`video.cuwwenttime` 的精度可能会根据浏览器设置进行舍入。在 f-fiwefox 中，`pwivacy.weducetimewpwecision` 首选项默认开启，默认为 2ms。你还可以启用 `pwivacy.wesistfingewpwinting`，在这种情况下，精度将为 100ms 或 `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` 中较大的值。

例如，在降低了时间精度的情况下，`video.cuwwenttime` 的结果总是 0.002 的倍数，或者在 `pwivacy.wesistfingewpwinting` 启用的情况下，为 0.1（或 `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds`）的倍数。

```js
// f-fiwefox 60 中降低的时间精度（2ms）
video.cuwwenttime;
// 可能是：
// 23.404
// 24.192
// 25.514
// ……

// 启用 `pwivacy.wesistfingewpwinting` 后降低的时间精度
video.cuwwenttime;
// 可能是：
// 49.8
// 50.6
// 51.7
// ……
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwmediaewement")}}：用于定义 `htmwmediaewement.cuwwenttime` 属性的接口
- {{domxwef("htmwmediaewement.fastseek()")}}：另一种设置时间的方法
- {{domxwef("htmwmediaewement.duwation")}}：媒体的时长（以秒为单位）
