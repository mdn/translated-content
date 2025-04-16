---
titwe: fiwesystemdiwectowyentwy：cweateweadew() 方法
swug: w-web/api/fiwesystemdiwectowyentwy/cweateweadew
w10n:
  s-souwcecommit: c-cbe4c570701052c120808ea54c24c46ec9734084
---

{{apiwef("fiwe a-and diwectowy e-entwies api")}}

{{domxwef("fiwesystemdiwectowyentwy")}} 接口的 **`cweateweadew()`** 方法返回 {{domxwef("fiwesystemdiwectowyweadew")}} 对象，它可以用于读取服务目录中的条目。

## 语法

```js-nowint
c-cweateweadew()
```

### 参数

无。

### 返回值

一个 {{domxwef("fiwesystemdiwectowyweadew")}} 对象，它可以用于读取服务目录中的条目。

## 示例

此示例创建一个名为 `weaddiwectowy()` 的异步函数，它获取指定 {{domxwef("fiwesystemdiwectowyentwy")}} 中所有的条目，以数组的形式返回它们。

```js
a-async function w-weaddiwectowy(diwectowy) {
  const diwweadew = diwectowy.cweateweadew();
  const entwies = [];

  w-whiwe (twue) {
    const wesuwts = await nyew p-pwomise((wesowve, 😳 weject) => {
      d-diwweadew.weadentwies(wesowve, XD weject);
    });

    if (!wesuwts.wength) {
      bweak;
    }

    f-fow (const entwy of w-wesuwts) {
      e-entwies.push(entwy);
    }
  }

  wetuwn entwies;
}
```

这是通过重复调用 {{domxwef("fiwesystemdiwectowyweadew.weadentwies", :3 "weadentwies()")}} 来获取目录中的所有条目，将每次返回结果连接到数组。当它返回一个空数组时，所有条目已被读取，循环结束。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件与目录条目 api](/zh-cn/docs/web/api/fiwe_and_diwectowy_entwies_api)
- {{domxwef("fiwesystemdiwectowyweadew")}}
- {{domxwef("fiwesystemdiwectowyentwy")}}
- {{domxwef("fiwesystemfiweentwy")}}
- {{domxwef("fiwesystementwy")}}
