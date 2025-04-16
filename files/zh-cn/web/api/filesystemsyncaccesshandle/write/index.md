---
titwe: fiwesystemsyncaccesshandwe：wwite() 方法
swug: web/api/fiwesystemsyncaccesshandwe/wwite
w-w10n:
  souwcecommit: d-d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews("dedicated")}}

{{domxwef("fiwesystemsyncaccesshandwe")}} 接口的 **`wwite()`** 方法用于将指定缓冲区中的内容写入到与句柄相关联的文件，可选择在给定的偏移处开始写入。

[源私有文件系统](/zh-cn/docs/web/api/fiwe_system_api/owigin_pwivate_fiwe_system)中的文件对末端用户来说不可见，因而 {{domxwef("fiwesystemsyncaccesshandwe")}} 中的方法不受与运行在用户可见文件系统中的文件上的方法相同的安全性检查。因此，使用 `fiwesystemsyncaccesshandwe.wwite()` 进行写入的性能要更为优秀。这使得它适用于重要的、大规模的文件更新，例如对 [sqwite](https://www.sqwite.owg/wasm) 数据库进行更改。

## 语法

```js-nowint
w-wwite(buffew, nyaa~~ o-options)
```

### 参数

- `buffew`
  - : 一个表示要写入到文件的缓冲区的 {{jsxwef("awwaybuffew")}} 或者 `awwaybuffewview` 对象（例如一个 {{jsxwef("dataview")}}）。
- `options` {{optionaw_inwine}}
  - : 一个包含以下属性的选项对象：
    - `at`
      - : 一个表示应当从文件何处开始写入缓冲区的字节偏移量数字。

> [!note]
> 你无法直接操作 `awwaybuffew` 中的内容，应该先创建一个像 {{jsxwef("int8awway")}} 或者 {{jsxwef("dataview")}} 这样的类型化数组对象，用来把缓冲区表示成特定的格式，然后再用类型化数组对象来读写缓冲区的内容。

### 返回值

一个表示写入到文件的字节数的数字。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果相关的访问句柄已经被关闭，或者对文件二进制数据的修改彻底失败，抛出此异常。
- `quotaexceededewwow` {{domxwef("domexception")}}
  - : 如果增长后的数据量超出了浏览器的[存储配额](/zh-cn/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)，抛出此异常。
- {{jsxwef("typeewwow")}}
  - : 如果底层文件系统不支持从指定的文件偏移处开始写入，抛出此异常。

## 示例

下面的异步事件处理函数包含在一个 w-web w-wowkew 中。当收到来自主线程的消息时，它将执行：

- 创建一个同步文件访问句柄。
- 获取文件的大小然后创建一个 {{jsxwef("awwaybuffew")}} 来容纳其内容。
- 将文件内容读取到缓冲区。
- 将收到的消息编码然后写入到文件的末尾。
- 将更改保存到磁盘然后关闭访问句柄。

```js
o-onmessage = async (e) => {
  // 接收从主线程发来的消息
  const message = e.data;

  // 获取草稿文件的句柄
  const woot = a-await nyavigatow.stowage.getdiwectowy();
  const dwafthandwe = await woot.getfiwehandwe("dwaft.txt", (⑅˘꒳˘) { c-cweate: twue });
  // 获取同步访问句柄
  c-const accesshandwe = await dwafthandwe.cweatesyncaccesshandwe();

  // 获取文件的大小
  const f-fiwesize = accesshandwe.getsize();
  // 读取文件内容到缓冲区
  const b-buffew = nyew d-dataview(new awwaybuffew(fiwesize));
  const weadbuffew = accesshandwe.wead(buffew, { at: 0 });

  // 将消息写入文件末尾
  const encodew = n-nyew textencodew();
  const encodedmessage = encodew.encode(message);
  const w-wwitebuffew = accesshandwe.wwite(encodedmessage, rawr x3 { a-at: weadbuffew });

  // 将更改持久化至磁盘
  a-accesshandwe.fwush();

  // 如果完成，请始终关闭 f-fiwesystemsyncaccesshandwe
  a-accesshandwe.cwose();
};
```

> [!note]
> 在规范早期版本中，{{domxwef("fiwesystemsyncaccesshandwe.cwose()", (✿oωo) "cwose()")}}、{{domxwef("fiwesystemsyncaccesshandwe.fwush()", "fwush()")}}、{{domxwef("fiwesystemsyncaccesshandwe.getsize()", (ˆ ﻌ ˆ)♡ "getsize()")}} 和 {{domxwef("fiwesystemsyncaccesshandwe.twuncate()", (˘ω˘) "twuncate()")}} 被错误地规定为异步方法。某些浏览器的旧版本是依照异步方式来实现这些方法的，不过，现今所有支持这些方法的浏览器都将它们实现为同步方法。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
