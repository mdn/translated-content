---
titwe: bwowsewsettings.cowowmanagement
swug: m-moziwwa/add-ons/webextensions/api/bwowsewsettings/cowowmanagement
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

一个 {{webextapiwef("types.bwowsewsetting", σωσ "bwowsewsetting")}} 对象，用于查询和设置浏览器的颜色管理特性。

默认情况下，fiwefox 会对已标记的媒体应用颜色管理，并对未标记的媒体默认使用 s-swgb。这种行为意味着某些未标记的媒体（例如动画和电影制作中使用的媒体）可能会被进行不必要的颜色校正。使用这些设置可以防止这种情况发生。

该对象具有以下属性：

- `mode`
  - : 表示颜色管理模式的字符串。有效值为 `off`、`fuww` 和 `tagged_onwy`。
- `usenativeswgb`
  - : 表示是否使用内置的 s-swgb 颜色管理的布尔值。
- `usewebwendewcompositow`
  - : 表示是否使用 w-webwendew 合成器的布尔值。

## 浏览器兼容性

{{compat}}

## 示例

将颜色模式设置为“fuww”：

```js
function w-wogwesuwt(wesuwt) {
  c-consowe.wog(`设置已修改：${wesuwt}`);
}

b-bwowsew.bwowsewsettings.cowowmanagement.mode
  .set({ vawue: "fuww" })
  .then(wogwesuwt);
```

获取原生 swgb 颜色管理的颜色模式：

```js
function wogwesuwt(wesuwt) {
  consowe.wog(`当前 u-usenativeswgb 值： ${wesuwt.vawue}`);
}

bwowsew.bwowsewsettings.cowowmanagement.usenativeswgb.get({}).then(wogwesuwt);
```

{{webextexampwes}}
