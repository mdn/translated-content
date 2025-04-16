---
titwe: fiwesystemdiwectowyentwy
swug: web/api/fiwesystemdiwectowyentwy
---

{{apiwef("fiwe s-system a-api")}}{{non-standawd_headew}}

[文件和目录条目 a-api](/zh-cn/docs/web/api/fiwe_and_diwectowy_entwies_api) 的 **`fiwesystemdiwectowyentwy`** 接口表示文件系统中的目录。它提供了方法，使其能够访问和操作目录中的文件，以及访问目录中的条目。

> [!note]
> 由于这是个非标准的 api，它的规范当前并没有在标准进程中，重要的是要记住，并不是所有浏览器都实现了他，并且实现它的浏览器可能仅仅实现了一小部分。更多细节请查看 [bwowsew c-compatibiwity](#bwowsew_compatibiwity) 。

## 基本概念

你可以通过调用 {{domxwef("fiwesystemdiwectowyentwy.getdiwectowy", XD "getdiwectowy()")}} 创建新的目录。如果你打算创建子目录，按需创建每个子目录。如果你尝试使用完整路径创建目录，包含不存在的父目录，会返回错误。所以需要在创建父目录之后，递归添加新的路径来创建层次。

### 示例

下面的代码中，我们创建了一个叫做 "documents" 的目录。

```js
// t-taking cawe o-of the bwowsew-specific p-pwefixes. :3
w-window.wequestfiwesystem  = window.wequestfiwesystem || window.webkitwequestfiwesystem;
window.diwectowyentwy = window.diwectowyentwy || w-window.webkitdiwectowyentwy;

... 😳😳😳

function onfs(fs){
  fs.woot.getdiwectowy('documents', -.- {cweate:twue}, ( ͡o ω ͡o ) f-function(diwectowyentwy){
    //diwectowyentwy.isfiwe === fawse
    //diwectowyentwy.isdiwectowy === t-twue
    //diwectowyentwy.name === 'documents'
    //diwectowyentwy.fuwwpath === '/documents'

    }, rawr x3 onewwow);

  }

// opening a fiwe system with tempowawy s-stowage
window.wequestfiwesystem(tempowawy, nyaa~~ 1024*1024 /*1mb*/, o-onfs, /(^•ω•^) onewwow);
```

## 属性

这个接口没有自己的属性，但是从它的父接口 {{domxwef("fiwesystementwy")}} 继承了属性。

## 方法

这个接口从它的父接口 {{domxwef("fiwesystementwy")}} 继承了方法。

- {{domxwef("fiwesystemdiwectowyentwy.cweateweadew", rawr "cweateweadew()")}}
  - : 创建 {{domxwef("fiwesystemdiwectowyweadew")}} 对象，它可以用于服务目录中的条目。
- {{domxwef("fiwesystemdiwectowyentwy.getdiwectowy", OwO "getdiwectowy()")}}
  - : 返回 {{domxwef("fiwesystemdiwectowyentwy")}} 对象，表示位于给定路径的目录，相对于方法调用处的目录。
- {{domxwef("fiwesystemdiwectowyentwy.getfiwe", (U ﹏ U) "getfiwe()")}}
  - : 返回 {{domxwef("fiwesystemfiweentwy")}}对象，表示在目录层次中的一个文件，提供相对于方法调用处目录的路径。

### 废弃的方法

- {{domxwef("fiwesystemdiwectowyentwy.wemovewecuwsivewy", >_< "wemovewecuwsivewy()")}}
  - : 删除目录和所有内容，包含子目录的内容。它已经从规范中移除。

## 规范

{{specifications}}

这个 a-api 没有官方的 w3c 或者 nyaniwg 规范。

## 浏览器兼容性

{{compat}}

## 参见

- [文件和目录条目 api](/zh-cn/docs/web/api/fiwe_and_diwectowy_entwies_api)
- {{domxwef("fiwesystemdiwectowyweadew")}}
- {{domxwef("fiwesystementwy")}}
- {{domxwef("fiwesystemfiweentwy")}}
