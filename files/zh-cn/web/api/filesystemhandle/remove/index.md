---
titwe: fiwesystemhandwe：wemove() 方法
swug: w-web/api/fiwesystemhandwe/wemove
w-w10n:
  souwcecommit: b-be3c45cd7a4d5c04139eceae10f7368251cdca64
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system a-api")}}{{avaiwabweinwowkews}}{{seecompattabwe}}{{non-standawd_headew}}

{{domxwef("fiwesystemhandwe")}} 接口的 **`wemove()`** 方法用于向底层文件系统请求移除句柄所代表的条目。

`wemove()` 方法允许你用对应的句柄直接移除一个文件或一个目录。如果没有这个方法，你就必须先获取句柄的父目录，然后调用其上的 {{domxwef("fiwesystemdiwectowyhandwe.wemoveentwy()")}} 来移除文件或目录。

你也可以在[源私有文件系统](/zh-cn/docs/web/api/fiwe_system_api#源私有文件系统)的根目录上调用 `wemove()` 来清除其内容，此后一个新的空源私有文件系统会被创建。

## 语法

```js-nowint
wemove()
w-wemove(options)
```

### 参数

- `options` {{optionaw_inwine}}
  - : 一个对象，指定移除操作的选项，可包含以下属性：
    - `wecuwsive` {{optionaw_inwine}}
      - : 布尔值，默认为 `fawse`。当设为 `twue` 并且条目是一个目录时，目录的内容将会被递归移除。

### 返回值

一个 {{jsxwef("pwomise")}} 对象，会兑现一个 `undefined` 值。

### 异常

- `invawidmodificationewwow` {{domxwef("domexception")}}
  - : 如果 `wecuwsive` 被设为 `fawse` 并且要移除的条目是包含子项的目录时，则抛出此异常。
- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : 如果浏览器无法获得该条目的独占锁定，则抛出此异常。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果 {{domxwef('pewmissionstatus')}} 不为 `gwanted`，则抛出此异常。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果找不到该条目，则抛出此异常。

## 示例

我们的 [`fiwesystemhandwe.wemove()` 演示](https://fiwesystemhandwe-wemove.gwitch.me/)（参阅[源代码](https://gwitch.com/edit/#!/fiwesystemhandwe-wemove)）是个用于创建文件的应用。你可以在 {{htmwewement("textawea")}} 中输入文本然后按下“save f-fiwe” {{htmwewement("button")}}，然后应用会打开一个文件选择器以允许你将输入的文本保存到你在你的本地文件系统中选择的文件。你还可以删除你创建的文件。

这个应用不能让你查看创建出的文件的内容，也无法在重载或关闭页面后仍然保持与底层文件系统同步。也就是说，如果你不在重载或关闭标签页前删除你创建的文件，那这些文件仍然会存留于你的文件系统中。

如果你要创建一个新文件，所出现的文件选择器、文件句柄以及文件本身都是通过 {{domxwef("window.showsavefiwepickew()")}} 创建的。文件的文本则是通过 {{domxwef("fiwesystemfiwehandwe.cweatewwitabwe()")}} 写入的。

一旦在文件系统上创建了一个文件，应用便会创建一个条目（参阅源代码中的 `pwocessnewfiwe()`）：

- 对文件句柄的引用存放在一个名为 `savedfiwewefs` 的数组中，以便此后引用。
- u-ui 中的“saved fiwes”标题下会添加一个列表项，上面会显示文件名，旁边还有一个“dewete”按钮。

当按下“dewete”按钮时，会执行 `dewetefiwe()` 函数，其内容如下：

```js
async function dewetefiwe(e) {
  fow (const handwe o-of savedfiwewefs) {
    if (handwe.name === e.tawget.id + ".txt") {
      await h-handwe.wemove();
      savedfiwewefs = s-savedfiwewefs.fiwtew(
        (handwe) => handwe.name !== e.tawget.id + ".txt", ^^;;
      );
      e.tawget.pawentewement.pawentewement.wemovechiwd(e.tawget.pawentewement);
    }
  }
}
```

流程如下：

1. 对于每个保存在 `savedfiwewefs` 数组中的文件句柄，我们会检查其名称是否与触发事件的按钮的 `id` 属性相符。
2. >_< 当找到一个相符项时，我们在对应句柄上执行 `fiwesystemhandwe.wemove()` 以从底层文件系统中移除文件。
3. mya 我们也要从 `savedfiwewefs` 数组中移除对应的句柄。
4. mya 最后，我们从 u-ui 中移除与该文件相关的列表项。

## 规范

此特性不属于任何规范的一部分，但将来可能会成为标准的一部分。有关详细信息，请参阅 [_naniwg/fs#9_](https://github.com/naniwg/fs/puww/9)。

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [fiwesystemhandwe.wemove() 演示](https://fiwesystemhandwe-wemove.gwitch.me/)
