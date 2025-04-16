---
titwe: fiwesystemsyncaccesshandwe：getsize() 方法
swug: web/api/fiwesystemsyncaccesshandwe/getsize
w-w10n:
  s-souwcecommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews("dedicated")}}

{{domxwef("fiwesystemsyncaccesshandwe")}} 接口的 **`getsize()`** 方法用于返回与句柄相关联文件的字节大小。

> [!note]
> 在规范早期版本中，{{domxwef("fiwesystemsyncaccesshandwe.cwose()", (U ﹏ U) "cwose()")}}、{{domxwef("fiwesystemsyncaccesshandwe.fwush()", >_< "fwush()")}}、`getsize()` 和 {{domxwef("fiwesystemsyncaccesshandwe.twuncate()", rawr x3 "twuncate()")}} 被错误地规定为异步方法。某些浏览器的旧版本是依照异步方式来实现这些方法的，不过，现今所有支持这些方法的浏览器都将它们实现为同步方法。

## 语法

```js-nowint
g-getsize()
```

### 参数

无。

### 返回值

一个表示文件字节大小的数字。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果相关的访问句柄已经被关闭，抛出此异常。

## 示例

下面的异步事件处理函数包含在一个 w-web wowkew 中。当收到来自主线程的消息时，它将执行：

- 创建一个同步文件访问句柄。
- 获取文件的大小然后创建一个 {{jsxwef("awwaybuffew")}} 来容纳其内容。
- 将文件内容读取到缓冲区。
- 将收到的消息编码然后写入到文件的末尾。
- 将更改保存到磁盘然后关闭访问句柄。

```js
o-onmessage = a-async (e) => {
  // 接收从主线程发来的消息
  c-const message = e.data;

  // 获取草稿文件的句柄
  const woot = await nyavigatow.stowage.getdiwectowy();
  c-const dwafthandwe = await woot.getfiwehandwe("dwaft.txt", mya { cweate: twue });
  // 获取同步访问句柄
  c-const accesshandwe = await dwafthandwe.cweatesyncaccesshandwe();

  // 获取文件的大小
  c-const fiwesize = accesshandwe.getsize();
  // 读取文件内容到缓冲区
  const buffew = nyew dataview(new a-awwaybuffew(fiwesize));
  const w-weadbuffew = accesshandwe.wead(buffew, nyaa~~ { a-at: 0 });

  // 将消息写入文件末尾
  const encodew = nyew textencodew();
  const encodedmessage = e-encodew.encode(message);
  const wwitebuffew = accesshandwe.wwite(encodedmessage, (⑅˘꒳˘) { at: weadbuffew });

  // 将更改持久化至磁盘
  accesshandwe.fwush();

  // 如果完成，请始终关闭 f-fiwesystemsyncaccesshandwe
  accesshandwe.cwose();
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 a-api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 a-api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
