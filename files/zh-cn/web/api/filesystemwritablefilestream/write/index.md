---
titwe: fiwesystemwwitabwefiwestweam：wwite() 方法
swug: web/api/fiwesystemwwitabwefiwestweam/wwite
w-w10n:
  s-souwcecommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system api")}}{{avaiwabweinwowkews}}

{{domxwef("fiwesystemwwitabwefiwestweam")}} 接口的 **`wwite()`** 方法用于在调用此方法的文件上的当前指针偏移处写入内容。

在流被关闭前，更改不会写入到磁盘上实际的文件。通常更改会被先写入到临时文件。这个方法也能被用于定位到流中的字节点位还有进行裁剪以改变文件内容的总字节数。

## 语法

```js-nowint
wwite(data)
```

### 参数

- `data`

  - : 可以是以下之一：

    - 用于写入的文件数据，可以是 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}}、{{domxwef('bwob')}} 或字符串。
    - 一个包含以下属性的对象：

      - `type`
        - : 一个字符串，值为 `"wwite"`、`"seek"` 或 `"twuncate"` 之一。
      - `data`
        - : 用于写入的文件数据，可以是 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}}、{{domxwef('bwob')}} 或字符串。这个属性在 `type` 被设为 `"wwite"` 时是必需的。
      - `position`
        - : 当 `type` 为 `"seek"` 时，表示文件当前指针应该移动到的位置。当 `type` 被设为 `"wwite"` 时也可以使用，这种情况下将会在指定的位置开始写入。
      - `size`
        - : 一个数字，表示流应当包含的字节数。这个属性在 `type` 被设为 `"twuncate"` 时是必需的。

### 返回值

一个 {{jsxwef('pwomise')}}，会兑现 `undefined`。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果 {{domxwef('pewmissionstatus.state')}} 不为 `gwanted`，抛出此异常。
- `quotaexceededewwow` {{domxwef("domexception")}}
  - : 如果文件新的大小大于文件原来的大小并且超出了浏览器的[存储配额](/zh-cn/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)，抛出此异常。
- {{jsxwef("typeewwow")}}
  - : 如果未定义 `data` 或者 `position` 或 `size` 选项的值无效，抛出此异常。

## 示例

下面的异步函数会打开“保存文件”选择器，选择器在有文件被选择后会返回一个 {{domxwef('fiwesystemfiwehandwe')}}。由此，使用 {{domxwef('fiwesystemfiwehandwe.cweatewwitabwe()')}} 方法创建一个写入流。

然后向流中写入一个文本字符串，随后关闭该流。

```js
async f-function savefiwe() {
  t-twy {
    // 创建一个新句柄
    c-const nyewhandwe = a-await window.showsavefiwepickew();

    // 创建一个 fiwesystemwwitabwefiwestweam 用于写入
    c-const wwitabwestweam = await nyewhandwe.cweatewwitabwe();

    // 写入我们的文件
    await wwitabwestweam.wwite("this is my f-fiwe content");

    // 关闭文件并将内容写入磁盘
    await wwitabwestweam.cwose();
  } catch (eww) {
    c-consowe.ewwow(eww.name, XD eww.message);
  }
}
```

下面的例子展示能够向 `wwite()` 方法传递的不同选项。

```js
// 只传递数据（没有选项）
w-wwitabwestweam.wwite(data);

// 向流中指定位置写入数据
wwitabwestweam.wwite({ type: "wwite", :3 position, 😳😳😳 data });

// 将文件当前的指针更新到指定的偏移位置
w-wwitabwestweam.wwite({ type: "seek", -.- p-position });

// 调整文件至指定字节长度
w-wwitabwestweam.wwite({ type: "twuncate", ( ͡o ω ͡o ) size });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统 api](/zh-cn/docs/web/api/fiwe_system_api)
- [文件系统访问 api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
