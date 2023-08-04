---
title: 原生应用清单
slug: Mozilla/Add-ons/WebExtensions/Native_manifests
---

{{AddonSidebar}}

原生应用清单是一个符合特定规则的 JSON 文件，它应该使用与扩展不同的安装方式存放在用户的计算机上。举个例子，原生应用清单是由设备管理员或者通过原生应用安装器提供的。

有三种不同的原生应用清单：

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <a href="#原生应用通信清单">原生应用通信清单</a>
      </td>
      <td>
        启用<a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_messaging">原生通信</a>特性：使扩展可以与本机的原生应用通信。
      </td>
    </tr>
    <tr>
      <td>
        <a href="#存储管理清单">存储管理清单</a>
      </td>
      <td>
      定义一些扩展可以用
      {{WebExtAPIRef("storage.managed")}} API 读取的只读数据。
      </td>
    </tr>
    <tr>
      <td><a href="#pkcs_11_清单">PKCS #11 清单</a></td>
      <td>
        定义了扩展使用 {{WebExtAPIRef("pkcs11")}} API 去枚举
        PKCS #11 安全模型，并在 Firefox 安装它们。
      </td>
    </tr>
  </tbody>
</table>

对于所有的原生应用清单，你需要做一些工作以便于浏览器可以找到它们。这些规则在[清单路径](#清单路径)章节。

## 原生应用通信清单

原生应用通信清单中包含单个 JSON 对象，对象具有如下属性：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">名称</th>
      <th scope="col">类型</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>字符串</td>
      <td>
        <p>原生应用的名字。</p>
        <p>
          它必须与扩展调用
          {{WebExtAPIRef("runtime.connectNative()")}} 和
          {{WebExtAPIRef("runtime.sendNativeMessage()")}}
          时传入的名称保持一致。
        </p>
        <p>
          在 MacOS 和 Linux 中，它还必须和清单文件的文件名保持一致（除 <code>.json</code> 文件扩展名外）。
        </p>
        <p>在 Windows 上，它必须与你创建的注册表键的名称相匹配，该注册表键包含本地信息传递清单的位置。
        </p>
        <p>
          它必须符合正则表达式
          <code>"^\w+(\.\w+)*$"</code>。这意味着它只能包含大小写字母、数字、下划线和点。开头或结尾不能是是点，并且点后面不能再跟一个点。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>字符串</td>
      <td>关于这个原生应用的描述。</td>
    </tr>
    <tr>
      <td><code>path</code></td>
      <td>字符串</td>
      <td>
        <p>原生应用的路径。</p>
        <p>
          在 Windows 中，这可以是一个相对路径（相对于清单）。在 MacOS 和 Linux
          中，必须是绝对路径。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>字符串</td>
      <td>
        <p>描述扩展和原生应用的连接方法。</p>
        <p>
          目前只支持一种值，那就是
          <code>"stdio"</code>。该值表示应用使用标准输入（<code>stdin</code>）来接受消息，用标准输出（<code>stdout</code>）来发送消息。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>allowed_extensions</code></td>
      <td>字符串数组</td>
      <td>
        <p>
          由<a
            href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/"
            >附加组件 ID</a
          >
          组成的数组。每个值代表允许 ID 为该值的扩展与这个原生应用通信。
        </p>
        <p>
            请注意这意味着你可能需要在你扩展的 <code>manifest.json</code> 文件中包含
          <code
            ><a
              href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
              >browser_specific_settings</a
            ></code
          >
          字段，并在开发过程中设置一个明确的 ID。
        </p>
      </td>
    </tr>
  </tbody>
</table>

举个例子，这是 `ping_pong` 原生应用的清单：

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

这允许 ID 为 `ping_pong@example.org` 的扩展通过 `ping_pong` 的名字传入给相关 {{WebExtAPIRef("runtime")}} API 函数进行连接。原生应用自身在 `/path/to/native-messaging/app/ping_pong.py` 中。

## 存储管理清单

存储管理清单中包含单个 JSON 对象，对象具有如下属性：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">名称</th>
      <th scope="col">类型</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>字符串</td>
      <td>
        <p>
          可以访问此存储的扩展的 ID，与你在扩展中
          <code
            ><a
              href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
              >browser_specific_settings</a
            ></code
          >
          字段确定的 ID 一致。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>字符串</td>
      <td>人类可读的描述，Firefox 会忽略它</td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>字符串</td>
      <td>
        <p>该值只能是 <code>"storage"</code>。</p>
      </td>
    </tr>
    <tr>
      <td><code>data</code></td>
      <td>对象</td>
      <td>
        <p>
          一个 JSON 对象，其中可以包含任何合法的 JSON 值，包括字符串、数字、布尔值、数组、对象，它们将成为 <code>browser.storage.managed</code> 存储区域中的数据。
        </p>
      </td>
    </tr>
  </tbody>
</table>

举个例子：

```json
{
  "name": "favourite-color-examples@mozilla.org",
  "description": "ignored",
  "type": "storage",
  "data": {
    "color": "management thinks it should be blue!"
  }
}
```

根据给出的 JSON 清单，`favourite-color-examples@mozilla.org` 扩展可以像这样访问数据：

```js
let storageItem = browser.storage.managed.get("color");
storageItem.then((res) => {
  console.log(`Managed color is: ${res.color}`);
});
```

## PKCS #11 清单

PKCS #11 清单中包含单个 JSON 对象，对象具有如下属性：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">名称</th>
      <th scope="col">类别</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>字符串</td>
      <td>
        <p>PKCS #11 模块的名字。</p>
        <p>它必须和你使用 <code>pkcs11</code> API 时的名字一致。</p>
        <p>
          在 MacOS 和 Linux 中，它必须和清单文件的文件名保持一致（除文件扩展名外）。
        </p>
        <p>在 Windows 中，它必须与你创建的注册表键的名称相匹配，该注册表键包含了清单的文件位置。
        </p>
        <p>
          它必须符合正则表达式
          <code>"^\w+(\.\w+)*$"</code>。这意味着它只能包含小写字母、数字、下划线和点。开头或结尾不能是点，并且点后面不能再跟一个点。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>字符串</td>
      <td>
        <p>模块的描述。</p>
        <p>
          它将被用在浏览器界面中为模块设置一个友好的名字（比如，在 Firefox
          的“安全设备”对话框中）
        </p>
      </td>
    </tr>
    <tr>
      <td><code>path</code></td>
      <td>String</td>
      <td>
        <p>模块的路径。</p>
        <p>
          在 Windows 中，这可以是一个相对于清单的路径。在 MacOS 和 Linux
          中，必须是绝对路径。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>字符串</td>
      <td>该值只能是 <code>"pkcs11"</code>。</td>
    </tr>
    <tr>
      <td><code>allowed_extensions</code></td>
      <td>字符串数组</td>
      <td>
        <p>
          由
          <a
            href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/"
            >Add-on ID</a
          >
          组成的数组。每个值代表允许 ID 为该值的扩展与这个模块通信。
        </p>
        <div class="notecard note">
          <p>
            <strong>备注：</strong>这意味着你可能需要在你扩展的 <code>manifest.json</code> 文件中包含
            <code
              ><a
                href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
                >browser_specific_settings</a
              ></code
            >
            字段，并在开发过程中设置一个明确的 ID。
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

举个例子：

```json
{
  "name": "my_module",
  "description": "My test module",
  "type": "pkcs11",
  "path": "/path/to/libpkcs11testmodule.dylib",
  "allowed_extensions": ["my-extension@mozilla.org"]
}
```

给出的这个 JSON 清单，保存为 `my_module.json`，`my-extension@mozilla.org` 这个插件就能够使用类似于如下代码安装 `/path/to/libpkcs11testmodule.dylib` 安全模块：

```js
browser.pkcs11.installModule("my_module");
```

## 清单路径

在 Linux 和 macOS 中，你需要将清单文件存在特定的位置。在 Windows 中，你需要创建一个注册表键来指向清单文件。

所有类型的清单的详细规则都是相同的，除了倒数第二个的 type 字段表示了清单的类型。下面的例子展示了三种不同类型的清单。在例子中，`<name>` 代表清单中的 `name` 字段值。

### Windows

如果想要全局可见，使用下面的路径创建注册表：

```
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\NativeMessagingHosts\<name>
```

```
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\ManagedStorage\<name>
```

```
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

注册表应该有单个默认值，值里存放到清单文件的路径。

> **警告：** 从 Firefox 64 开始，将首先检查 32 位注册表视图 [Wow6432Node](https://zh.wikipedia.org/wiki/WoW64#Registry_and_file_system) 的键，然后是“native”注册表视图。请使用适合你的应用程序的那一个。
>
> **对于 Firefox 63 和更早的版本**：这个键不应该在 [Wow6432Node](https://zh.wikipedia.org/wiki/WoW64#Registry_and_file_system) 下创建，即使应用程序是 32 位的。以前版本的浏览器总是在注册表的“native”视图下寻找该键，而不是在 32 位模拟视图下寻找。为了确保在“native”视图中创建键，你可以在 `RegCreateKeyEx` 中传递 `KEY_WOW64_64KEY` 或 `KEY_WOW64_32KEY` 标志。参见[访问备用注册表视图](https://docs.microsoft.com/windows/win32/winprog64/accessing-an-alternate-registry-view)。

如果想要用户级别可见，使用下面的路径创建注册表：

```
HKEY_CURRENT_USER\SOFTWARE\Mozilla\NativeMessagingHosts\<name>
```

```
HKEY_CURRENT_USER\SOFTWARE\Mozilla\ManagedStorage\<name>
```

```
HKEY_CURRENT_USER\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

注册表应该有单个默认值，为到清单文件的路径。

### macOS

如果想要全局可见，将清单文件存放在：

```
/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json
```

```
/Library/Application Support/Mozilla/ManagedStorage/<name>.json
```

```
/Library/Application Support/Mozilla/PKCS11Modules/<name>.json
```

如果想要用户级别可见，将清单文件存放在：

```
~/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json
```

```
~/Library/Application Support/Mozilla/ManagedStorage/<name>.json
```

```
~/Library/Application Support/Mozilla/PKCS11Modules/<name>.json
```

### Linux

如果想要全局可见，将清单文件存放在：

```
/usr/lib/mozilla/native-messaging-hosts/<name>.json
```

```
/usr/lib/mozilla/managed-storage/<name>.json
```

```
/usr/lib/mozilla/pkcs11-modules/<name>.json
```

或者：

```
/usr/lib64/mozilla/native-messaging-hosts/<name>.json
```

```
/usr/lib64/mozilla/managed-storage/<name>.json
```

```
/usr/lib64/mozilla/pkcs11-modules/<name>.json
```

如果想要用户级别可见，将清单文件存放在：

```
~/.mozilla/native-messaging-hosts/<name>.json
```

```
~/.mozilla/managed-storage/<name>.json
```

```
~/.mozilla/pkcs11-modules/<name>.json
```
