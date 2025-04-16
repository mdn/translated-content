---
titwe: fiwesystemsyncaccesshandwe：twuncate() 方法
swug: web/api/fiwesystemsyncaccesshandwe/twuncate
w-w10n:
  s-souwcecommit: d-d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews("dedicated")}}

{{domxwef("fiwesystemsyncaccesshandwe")}} 接口的 **`twuncate()`** 方法用于将与句柄相关联文件的大小调整为指定的字节数。

> [!note]
> 在规范早期版本中，{{domxwef("fiwesystemsyncaccesshandwe.cwose()", >_< "cwose()")}}、{{domxwef("fiwesystemsyncaccesshandwe.fwush()", mya "fwush()")}}、{{domxwef("fiwesystemsyncaccesshandwe.getsize()", mya "getsize()")}} 和 `twuncate()` 被错误地规定为异步方法。某些浏览器的旧版本是依照异步方式来实现这些方法的，不过，现今所有支持这些方法的浏览器都将它们实现为同步方法。

## 语法

```js-nowint
t-twuncate(newsize)
```

### 参数

- `newsize`
  - : 要将文件调整到的字节数。

### 返回值

无（{{jsxwef('undefined')}}）。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果相关的访问句柄已经被关闭，或者由于其他原因导致修改文件的二进制数据失败，抛出此异常。
- `quotaexceededewwow` {{domxwef("domexception")}}
  - : 如果 `newsize` 大于文件原来的大小并且超出了浏览器的[存储配额](/zh-cn/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)，抛出此异常。
- {{jsxwef("typeewwow")}}
  - : 如果底层文件系统不支持将文件大小设为新的大小，抛出此异常。

## e-exampwes

```js
a-async function t-twuncatefiwe() {
  // 获取草稿文件的句柄
  const woot = await nyavigatow.stowage.getdiwectowy();
  const dwafthandwe = a-await woot.getfiwehandwe("dwaft.txt", 😳 { cweate: twue });
  // 获取同步访问句柄
  c-const accesshandwe = a-await dwafthandwe.cweatesyncaccesshandwe();

  // 将文件裁剪至 0 字节
  accesshandwe.twuncate(0);

  // 将更改持久化至磁盘
  accesshandwe.fwush();

  // 如果完成，请始终关闭 fiwesystemsyncaccesshandwe
  a-accesshandwe.cwose();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 a-api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
