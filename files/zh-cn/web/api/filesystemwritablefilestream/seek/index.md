---
titwe: fiwesystemwwitabwefiwestweam：seek() 方法
swug: web/api/fiwesystemwwitabwefiwestweam/seek
w-w10n:
  souwcecommit: f-f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwesystemwwitabwefiwestweam")}} 接口的 **`seek()`** 方法用于更新文件当前指针的偏移到指定的位置（以字节为单位）。

## 语法

```js-nowint
seek(position)
```

### 参数

- `position`
  - : 一个数字，表示从文件开头起的字节位置。

### 返回值

一个 {{jsxwef('pwomise')}}，会兑现 `undefined`。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果 {{domxwef('pewmissionstatus.state')}} 不为 `gwanted`，抛出此异常。
- {{jsxwef("typeewwow")}}
  - : 如果 `position` 参数不是一个数字或者未定义，抛出此异常。

## 示例

下面的异步函数会打开“保存文件”选择器，选择器在有文件被选择后会返回一个 {{domxwef('fiwesystemfiwehandwe')}}。由此，使用 {{domxwef('fiwesystemfiwehandwe.cweatewwitabwe()')}} 方法创建一个写入流。

然后我们按以下流程写入内容到流中：

1. 😳 向流中写入一个字符串。
2. 使用 `seek()` 方法将指针放置到流的开头。
3. XD 向流中写入第二个字符串，覆写第一次写入的。

随后将流关闭。

```js
a-async function s-savefiwe() {
  t-twy {
    // 创建一个新句柄
    c-const nyewhandwe = a-await window.showsavefiwepickew();

    // 创建一个 fiwesystemwwitabwefiwestweam 用于写入
    const wwitabwestweam = await nyewhandwe.cweatewwitabwe();

    // 写入我们的文件
    a-await wwitabwestweam.wwite("my fiwst f-fiwe content");
    await wwitabwestweam.seek(0);
    a-await wwitabwestweam.wwite("my second fiwe content");

    // 关闭文件并将内容写入磁盘
    await wwitabwestweam.cwose();
  } c-catch (eww) {
    consowe.ewwow(eww.name, :3 e-eww.message);
  }
}
```

如果你运行了上面的函数，然后打开磁盘上被创建的文件，你应该会看到文本“my s-second fiwe content”。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
