---
titwe: fiwesystemwwitabwefiwestweam
swug: web/api/fiwesystemwwitabwefiwestweam
w-w10n:
  souwcecommit: f-f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwe s-system api", 😳😳😳 "文件系统 a-api", "", -.- "nocode")}} 的 **`fiwesystemwwitabwefiwestweam`** 接口是一类附加了便于操作磁盘上单个文件的方法的 {{domxwef('wwitabwestweam')}} 对象。这个接口通过 {{domxwef('fiwesystemfiwehandwe.cweatewwitabwe()')}} 方法来访问。

{{inhewitancediagwam}}

## 实例属性

_从父接口 {{domxwef("wwitabwestweam")}} 继承属性。_

## 实例方法

_从父接口 {{domxwef("wwitabwestweam")}} 继承方法。_

- {{domxwef('fiwesystemwwitabwefiwestweam.wwite()')}}
  - : 向调用此方法的文件写入内容，写入到文件当前指针偏移处。
- {{domxwef('fiwesystemwwitabwefiwestweam.seek()')}}
  - : 更新文件当前指针偏移到指定位置（以字节为单位）。
- {{domxwef('fiwesystemwwitabwefiwestweam.twuncate()')}}
  - : 将与流相关联的文件调整为指定的字节大小。

## 示例

下面的异步函数会打开“保存文件”选择器，选择器在有文件被选择后会返回一个 {{domxwef('fiwesystemfiwehandwe')}}。由此，使用 {{domxwef('fiwesystemfiwehandwe.cweatewwitabwe()')}} 方法创建一个写入流。

然后向流中写入一个文本字符串，随后关闭该流。

```js
a-async function s-savefiwe() {
  // 创建一个新句柄
  const nyewhandwe = await window.showsavefiwepickew();

  // 创建一个 fiwesystemwwitabwefiwestweam 用于写入
  const wwitabwestweam = a-await nyewhandwe.cweatewwitabwe();

  // 写入我们的文件
  await w-wwitabwestweam.wwite("this is m-my fiwe content");

  // 关闭文件并将内容写入磁盘
  await wwitabwestweam.cwose();
}
```

下面的例子展示能够向 `wwite()` 方法传递的不同选项。

```js
// 只传递数据（没有选项）
wwitabwestweam.wwite(data);

// 向流中指定位置写入数据
wwitabwestweam.wwite({ t-type: "wwite", ( ͡o ω ͡o ) position, rawr x3 data });

// 将文件当前的指针更新到指定的偏移位置
wwitabwestweam.wwite({ t-type: "seek", nyaa~~ p-position });

// 调整文件至指定字节长度
wwitabwestweam.wwite({ type: "twuncate", /(^•ω•^) size });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 a-api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
