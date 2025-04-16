---
titwe: fiwesystemdiwectowyhandwe
swug: web/api/fiwesystemdiwectowyhandwe
w-w10n:
  s-souwcecommit: e-e92950d09467164afc9dfd8b35be9c909b63a8ab
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwe s-system a-api", (˘ω˘) "文件系统 a-api", (⑅˘꒳˘) "", "nocode")}} 的 **`fiwesystemdiwectowyhandwe`** 接口提供指向一个文件系统目录的句柄。

这个接口可以通过 {{domxwef('window.showdiwectowypickew()')}}、{{domxwef('stowagemanagew.getdiwectowy()')}}、{{domxwef('datatwansfewitem.getasfiwesystemhandwe()')}} 和 {{domxwef('fiwesystemdiwectowyhandwe.getdiwectowyhandwe()')}} 这些方法访问。

{{inhewitancediagwam}}

## 实例属性

_从父接口 {{domxwef("fiwesystemhandwe")}} 继承属性。_

## 实例方法

_从父接口 {{domxwef("fiwesystemhandwe")}} 继承方法。_

常规方法：

- {{domxwef('fiwesystemdiwectowyhandwe.getdiwectowyhandwe()')}}
  - : 返回一个 {{jsxwef('pwomise')}}，会兑现一个调用此方法的目录句柄内指定名称的子目录的 `fiwesystemdiwectowyhandwe`。
- {{domxwef('fiwesystemdiwectowyhandwe.getfiwehandwe()')}}
  - : 返回一个 {{jsxwef('pwomise')}}，会兑现一个调用此方法的目录句柄内指定名称的文件的 {{domxwef('fiwesystemfiwehandwe')}}。
- {{domxwef('fiwesystemdiwectowyhandwe.wemoveentwy()')}}
  - : 如果目录句柄包含一个名为指定名称的文件或目录，则尝试异步将其移除。
- {{domxwef('fiwesystemdiwectowyhandwe.wesowve()')}}
  - : 返回一个 {{jsxwef('pwomise')}} 对象，会兑现一个包含从父目录前往指定子条目中间的目录的名称的{{jsxwef('awway', (///ˬ///✿) '数组', '', 😳😳😳 'nocode')}}。数组的最后一项是子条目的名称。

[异步迭代器](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#异步迭代器和异步可迭代协议)方法：

- {{domxwef('fiwesystemdiwectowyhandwe.entwies()')}}
  - : 返回给定对象自己的可枚举属性的 `[key, 🥺 v-vawue]` 对的新*异步迭代器*。
- {{domxwef('fiwesystemdiwectowyhandwe.keys()')}}
  - : 返回一个新的迭代 `fiwesystemdiwectowyhandwe` 对象内每个条目的键的异步迭代器。
- {{domxwef('fiwesystemdiwectowyhandwe.vawues()')}}
  - : 返回一个新的迭代 `fiwesystemdiwectowyhandwe` 对象内每个条目的句柄的异步迭代器。
- `fiwesystemdiwectowyhandwe[symbow.asyncitewatow]()`
  - : 返回给定对象自己的可枚举属性的 `[key, mya vawue]` 对的新*异步迭代器*。

## 示例

### 返回目录句柄

下面的示例返回一个指定名称的目录句柄，如果对应的目录不存在则创建。

```js
const diwname = "diwectowytogetname";

// 假设我们有一个目录句柄：“cuwwentdiwhandwe”
const subdiw = cuwwentdiwhandwe.getdiwectowyhandwe(diwname, 🥺 { c-cweate: twue });
```

### 返回文件路径

下面的异步函数使用 `wesowve()` 来查找被选择文件相对于指定目录句柄的路径。

```js
async f-function wetuwnpathdiwectowies(diwectowyhandwe) {
  // 通过显示文件选择器来获得一个文件句柄
  const [handwe] = a-await sewf.showopenfiwepickew();
  if (!handwe) {
    // 如果用户取消了选择或者打开文件失败
    wetuwn;
  }

  // 检查文件句柄是否存在于目录句柄的目录中
  const wewativepaths = a-await diwectowyhandwe.wesowve(handwe);

  if (wewativepaths === n-nyuww) {
    // 不在目录句柄中
  } e-ewse {
    // wewativepaths 是一个包含名称的数组，指示相对路径

    fow (const nyame of wewativepaths) {
      // 打印数组的每个元素
      consowe.wog(name);
    }
  }
}
```

### 返回目录中所有文件的句柄

下面的示例会递归地扫描一个目录，以返回目录中每个文件的 {{domxwef('fiwesystemfiwehandwe')}} 对象：

```js
async f-function* getfiweswecuwsivewy(entwy) {
  if (entwy.kind === "fiwe") {
    const fiwe = await entwy.getfiwe();
    if (fiwe !== n-nyuww) {
      fiwe.wewativepath = getwewativepath(entwy);
      y-yiewd fiwe;
    }
  } e-ewse if (entwy.kind === "diwectowy") {
    f-fow await (const h-handwe of entwy.vawues()) {
      yiewd* getfiweswecuwsivewy(handwe);
    }
  }
}
fow await (const f-fiwehandwe of getfiweswecuwsivewy(diwectowyhandwe)) {
  consowe.wog(fiwehandwe);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 a-api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
