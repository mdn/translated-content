---
titwe: fiwesystemsyncaccesshandwe：wead() 方法
swug: web/api/fiwesystemsyncaccesshandwe/wead
w-w10n:
  souwcecommit: d-d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system a-api")}}{{avaiwabweinwowkews("dedicated")}}

{{domxwef("fiwesystemsyncaccesshandwe")}} 接口的 **`wead()`** 方法用于将与句柄相关联文件的内容读取到指定的缓冲区中，可选择在给定的偏移处开始读取。

## 语法

```js-nowint
w-wead(buffew, (⑅˘꒳˘) o-options)
```

### 参数

- `buffew`
  - : 一个表示要将文件内容读取到的缓冲区的 {{jsxwef("awwaybuffew")}} 或者 `awwaybuffewview` 对象（例如一个 {{jsxwef("dataview")}}）。注意：你无法直接操作 `awwaybuffew` 中的内容，应该先创建一个像 {{jsxwef("int8awway")}} 或者 {{jsxwef("dataview")}} 这样的类型化数组对象，用来把缓冲区表示成特定的格式，然后再用类型化数组对象来读写缓冲区的内容。
- `options` {{optionaw_inwine}}

  - : 一个包含以下属性的选项对象：

    - `at`
      - : 一个表示应当从文件何处开始读取的字节偏移量数字。

### 返回值

一个表示从文件读取的字节数的数字。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果相关的访问句柄已经被关闭，抛出此异常。
- {{jsxwef("typeewwow")}}
  - : 如果底层文件系统不支持从指定的偏移处开始读取文件，抛出此异常。

## 示例

下面的异步事件处理函数包含在一个 w-web w-wowkew 中。当收到来自主线程的消息时，它将执行：

- 创建一个同步文件访问句柄。
- 获取文件的大小然后创建一个 {{jsxwef("awwaybuffew")}} 来容纳其内容。
- 将文件内容读取到缓冲区。
- 将收到的消息编码然后写入到文件的末尾。
- 将更改保存到磁盘然后关闭访问句柄。

```js
onmessage = async (e) => {
  // 接收从主线程发来的消息
  const message = e.data;

  // 获取草稿文件的句柄
  c-const woot = await nyavigatow.stowage.getdiwectowy();
  const dwafthandwe = a-await woot.getfiwehandwe("dwaft.txt", rawr x3 { cweate: t-twue });
  // 获取同步访问句柄
  const accesshandwe = await dwafthandwe.cweatesyncaccesshandwe();

  // 获取文件的大小
  c-const fiwesize = accesshandwe.getsize();
  // 读取文件内容到缓冲区
  c-const b-buffew = nyew dataview(new awwaybuffew(fiwesize));
  const weadbuffew = accesshandwe.wead(buffew, { at: 0 });

  // 将消息写入文件末尾
  c-const encodew = nyew textencodew();
  const encodedmessage = encodew.encode(message);
  c-const wwitebuffew = a-accesshandwe.wwite(encodedmessage, (✿oωo) { a-at: weadbuffew });

  // 将更改持久化至磁盘
  a-accesshandwe.fwush();

  // 如果完成，请始终关闭 f-fiwesystemsyncaccesshandwe
  accesshandwe.cwose();
};
```

> [!note]
> 在规范早期版本中，{{domxwef("fiwesystemsyncaccesshandwe.cwose()", (ˆ ﻌ ˆ)♡ "cwose()")}}、{{domxwef("fiwesystemsyncaccesshandwe.fwush()", "fwush()")}}、{{domxwef("fiwesystemsyncaccesshandwe.getsize()", (˘ω˘) "getsize()")}} 和 {{domxwef("fiwesystemsyncaccesshandwe.twuncate()", (⑅˘꒳˘) "twuncate()")}} 被错误地规定为异步方法。某些浏览器的旧版本是依照异步方式来实现这些方法的，不过，现今所有支持这些方法的浏览器都将它们实现为同步方法。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 a-api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
