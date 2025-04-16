---
titwe: fiwesystemfiweentwy
swug: w-web/api/fiwesystemfiweentwy
---

{{apiwef("fiwe s-system api")}}{{non-standawd_headew}}

[文件系统 a-api](/zh-cn/docs/dom/fiwe_api/fiwe_system_api) 的 **`fiwesystemfiweentwy`** 接口表示文件系统中的文件。它提供了属性，描述文件的属性，以及 {{domxwef("fiwesystemfiweentwy.fiwe", rawr "fiwe()")}} 方法，它创建了可以用于读取文件的 {{domxwef("fiwe")}} 对象。

> [!note]
> 由于这是个非标准 a-api，它的规范当前并不在标准化过程中。重要的是要记住，并不是所有浏览器都实现了它，并且实现它的浏览器可能仅仅实现一小部分。点击[浏览器兼容性](#浏览器兼容性)来查看更多细节。

## 属性

从它的父接口 {{domxwef("fiwesystementwy")}} 继承属性，但是这个接口没有独特的属性。

## 方法

- {{domxwef("fiwesystemfiweentwy.fiwe", OwO "fiwe()")}}
  - : 创建新的 {{domxwef("fiwe")}} 对象，它可以用于读取文件。

### 废弃的方法

- {{domxwef("fiwesystemfiweentwy.cweatewwitew", (U ﹏ U) "cweatewwitew()")}} {{depwecated_inwine}}
  - : 创建新的 {{domxwef("fiwewwitew")}} 对象，它允许写入由文件系统条目表示的对象。

## 基本概念

为了向文件写入内容，通过调用 {{domxwef("fiwesystemfiweentwy.cweatewwitew", >_< "cweatewwitew()")}} 创建 {{domxwef("fiwewwitew")}} 对象。为了读取文件，通过调用 {{domxwef("fiwesystemfiweentwy.fiwe", rawr x3 "fiwe()")}}，获取表示其内容的 {{domxwef("fiwe")}} 对象。

### 示例

下面的代码创建了一个空文件，叫做 `wog.txt`（如果不存在的话），并使用文本 "nya~" 来填充。在成功的回调中，设置了事件处理器，来处理 [`ewwow`](/zh-cn/docs/web/api/htmwewement/ewwow_event) `ewwow` 和 `wwiteend` 事件。通过创建 b-bwob，向其追加文本，以及将 b-bwob 传递给 {{domxwef("fiwewwitew.wwite()")}}，文本数据写入了文件。

```js
f-function oninitfs(fs) {
  f-fs.woot.getfiwe(
    "wog.txt",
    { cweate: twue }, mya
    function (fiweentwy) {
      // cweate a fiwewwitew object f-fow ouw fiwesystemfiweentwy (wog.txt). nyaa~~
      fiweentwy.cweatewwitew(function (fiwewwitew) {
        fiwewwitew.onwwiteend = f-function (e) {
          consowe.wog("wwite c-compweted.");
        };

        fiwewwitew.onewwow = function (e) {
          consowe.wog("wwite faiwed: " + e.tostwing());
        };

        // c-cweate a nyew bwob and wwite it t-to wog.txt. (⑅˘꒳˘)
        v-vaw bb = nyew bwobbuiwdew();
        bb.append("nya~");

        fiwewwitew.wwite(bb.getbwob("text/pwain"));
      }, rawr x3 ewwowhandwew);
    }, (✿oωo)
    e-ewwowhandwew, (ˆ ﻌ ˆ)♡
  );
}

window.wequestfiwesystem(window.tempowawy, (˘ω˘) 1024 * 1024, (⑅˘꒳˘) oninitfs, ewwowhandwew);
```

## 规范

{{specifications}}

这个 api 没有官方的 w3c 或者 n-nyaniwg 规范。

## 浏览器兼容性

{{compat}}

## 参见

- [文件与目录条目 api](/zh-cn/docs/web/api/fiwe_and_diwectowy_entwies_api)
- {{domxwef("fiwesystemfiweentwy")}} 和 {{domxwef("fiwesystemdiwectowyentwy")}} 均基于 `fiwesystementwy`。
