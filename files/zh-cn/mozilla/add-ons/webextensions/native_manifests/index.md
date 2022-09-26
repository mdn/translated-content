---
title: 原生应用清单
slug: Mozilla/Add-ons/WebExtensions/Native_manifests
---

{{AddonSidebar}}

原生应用清单是一个符合特定规则的 JSON 文件，它应该使用与 extension 不同的安装方式存放在用户的计算机上。举个例子，原生应用清单是由设备管理员或者通过原生应用安装器提供的。

有三种不同的原生应用清单：

<table class="standard-table">
  <tbody>
    <tr>
      <td><a href="#原生应用通信清单">原生应用通信清单</a></td>
      <td>
        <p>
          定义关于<a
            href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_messaging"
            >与本地应用通信</a
          >的功能：哪一个 extension 可以与本机的原生应用交换信息。
        </p>
      </td>
    </tr>
    <tr>
      <td><a href="#存储管理清单">存储管理清单</a></td>
      <td>
        <p>
          定义一些 extension 可以用
          {{WebExtAPIRef("storage.managed")}} 读取的只读数据。
        </p>
      </td>
    </tr>
    <tr>
      <td><a href="#PKCS #11 清单">PKCS #11 清单</a></td>
      <td>
        <p>
          定义了 extension 使用 {{WebExtAPIRef("pkcs11")}} API 去枚举
          PKCS #11 安全模型 并在 Firefox 安装它们。
        </p>
      </td>
    </tr>
  </tbody>
</table>

对于所有的原生应用清单，你需要做一些工作以便于浏览器可以找到它们。这些规则在 [清单路径](#清单路径) 章节。

## 原生应用通信清单

原生应用通信清单中包含单个 JSON 对象，对象具有如下属性：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td>
        <p>原生应用的名字</p>
        <p>
          它必须与 extension 调用
          {{WebExtAPIRef("runtime.connectNative()")}} 和
          {{WebExtAPIRef("runtime.sendNativeMessage()")}}
          时传入的名称保持一致。
        </p>
        <p>
          在 OS X 和 Linux 中，它必须和清单文件的文件名保持一致（除.json
          文件扩展名外）。
        </p>
        <p>在 Windows 中，它必须和你创建的包含原生应用清单路径的注册表一致。</p>
        <p>
          它必须符合正则表达式
          "^\w+(\.\w+)*$"。这意味着它只能包含小写字母、数字、下划线和
          <code>.</code> ，并且不允许开头或结束是 <code>.</code> ，并且
          <code>.</code> 后面不能是 <code>.</code> 。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td><p>关于这个原生应用的描述。</p></td>
    </tr>
    <tr>
      <td><code>path</code></td>
      <td>String</td>
      <td>
        <p>到原生应用的路径。</p>
        <p>
          在 Windows 中，这可以是一个相对路径。在 OS X 和 Linux
          中，必须是绝对路径。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>String</td>
      <td>
        <p>定义 extension 和原生应用的连接方法。</p>
        <p>
          目前只支持一种值，那就是
          stdio。该值表示应用使用标准输入（stdin）来接受消息，用标准输出（stdout）来发送消息。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>allowed_extensions</code></td>
      <td>Array of String</td>
      <td>
        <p>
          由
          <a
            href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID"
            >Add-on ID</a
          >
          组成的数组。每个值代表允许 ID 为该值的 extension 与这个原生应用通信。
        </p>
        <div class="note">
          <p>
            这意味着你可能需要在你 extension 的 manifest.json 中包含
            <a
              href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications"
              >applications</a
            >
            字段，并为 extension 设置一个显示的 ID，哪怕是在开发时
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

举个例子，这是 ping_pong 原生应用的原生应用通信清单：

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": [ "ping_pong@example.org" ]
}
```

清单表示：它允许 ID 为 ping_pong\@example.org 的 extension 通过传入 ping_pong 给 {{WebExtAPIRef("runtime")}} 与自己连接。原生应用自身在 /path/to/native-messaging/app/ping_pong.py 中。

## 存储管理清单

存储管理清单中包含单个 JSON 对象，对象具有如下属性：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td>
        <p>
          <strong>一个</strong> extension 的 ID，表示这个 extension
          可以读取这个仓库。
        </p>
        <p>
          给出这个 ID 需要你的 extension 的 manifest.json 文件包含
          <a
            href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications"
            >applications</a
          >
          字段。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td><p>人类可读的描述，Firefox 会忽略它。</p></td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>String</td>
      <td><p>该值只能是<code>storage</code>。</p></td>
    </tr>
    <tr>
      <td><code>data</code></td>
      <td>Object</td>
      <td>
        <p>
          一个 JSON 对象，其中可以包含任何合法的 JSON
          值（string、number、boolean、array、object），他们将成为<code>browser.storage.managed</code>可访问的数据。
        </p>
      </td>
    </tr>
  </tbody>
</table>

举个例子：

```json
{
  "name": "favourite-colour-examples@mozilla.org",
  "description": "ignored",
  "type": "storage",
  "data":
  {
    "colour": "management thinks it should be blue!"
  }
}
```

在给出的清单文件中，ID 为 favourite-colour-examples\@mozilla.org 的 extension 有权限使用清单中的 data 字段中的数据，代码如下：

```js
var storageItem = browser.storage.managed.get('colour');
storageItem.then((res) => {
  console.log(`Managed colour is: ${res.colour}`);
});
```

## PKCS #11 清单

PKCS #11 清单中包含单个 JSON 对象，对象具有如下属性：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td>
        <p>PKCS #11 模块的名字。</p>
        <p>它必须和你使用 <code>pkcs11</code> API 时的名字一致。</p>
        <p>
          在 OS X 和 Linux
          中，它必须和清单文件的文件名保持一致（除文件扩展名外）
        </p>
        <p>在 Windows 中，它必须和你创建的包含原生应用清单路径的注册表一致。</p>
        <p>
          它必须符合正则表达式
          "^\w+(\.\w+)*$"。这意味着它只能包含小写字母、数字、下划线和
          <code>.</code> ，并且不允许开头或结束是 <code>.</code> ，并且
          <code>.</code> 后面不能是 <code>.</code> 。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td>
        <p>关于该模块的描述。</p>
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
        <p>到模块的路径。</p>
        <p>
          在 Windows 中，这可以是一个相对路径。在 OS X 和 Linux
          中，必须是绝对路径。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>String</td>
      <td>该值只能是<code>pkcs11</code>。This must be "pkcs11".</td>
    </tr>
    <tr>
      <td><code>allowed_extensions</code></td>
      <td>Array of String</td>
      <td>
        <p>
          由
          <a
            href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID"
            >Add-on ID</a
          >
          组成的数组。每个值代表允许 ID 为该值的 extension 与这个模块通信。
        </p>
        <div class="note">
          <p>
            这意味着你可能需要在你 extension 的 manifest.json 中包含
            <a
              href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications"
              >applications</a
            >
            字段，并为 extension 设置一个显示的 ID，哪怕是在开发时
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

给出的这个 JSON 清单，保存为 my_module.json，ID 为 my-extension\@mozilla.org 的 extension 就能够使用类似于如下代码安装 /path/to/libpkcs11testmodule.dylib 安全模块：

```js
browser.pkcs11.installModule("my_module");
```

## 清单路径

在 Linux 和 Mac OS X 中，你需要将清单文件存在特定的位置。在 Windows 中，你需要创建一个注册表来指向清单文件。

所有类型的清单的详细规则都是相同的，除了倒数第二个的 type 字段表示了清单的类型。下面的例子展示了三种不同类型的清单。在例子中，\<name> 代表清单中的 name 字段值。

### Windows

如果想要全局可见，使用下面的路径创建注册表：

```plain
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\NativeMessagingHosts\<name>

HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\ManagedStorage\<name>

HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

注册表应该有单个默认值，值里存放“到清单文件的路径”。比如为原生应用通信清单建立的注册表差不多是这样：

![为原生应用通信清单建立的注册表](https://mdn.mozillademos.org/files/15643/native-message-regkey-exaple.png)

> **备注：** 对于原生应用清单，即使原生应用是 32 位的，也不能在 [Wow6432Node](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) 下创建注册表。浏览器将总会在 native 视图下寻找注册表的，而不是 32 位放在环境。确保注册表的创建在原生视图中，你可以键入 KEY_WOW64_64KEY 或 KEY_WOW64_32KEY 到 RegCreateKeyEx。请参考：[Accessing an Alternate Registry View](<https://msdn.microsoft.com/en-us/library/windows/desktop/aa384129(v=vs.85).aspx>)

如果想要用户级别的可见，使用下面的路径创建注册表：

```plain
HKEY_CURRENT_USER\SOFTWARE\Mozilla\NativeMessagingHosts\<name>

HKEY_CURRENT_USER\SOFTWARE\Mozilla\ManagedStorage\<name>

HKEY_CURRENT_USER\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

注册表应该有单个默认值，值里存放“到清单文件的路径”。

### Mac OS X

如果想要全局可见，将清单文件存放在：

```plain
/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json

/Library/Application Support/Mozilla/ManagedStorage/<name>.json

/Library/Application Support/Mozilla/PKCS11Modules/<name>.json
```

如果想要用户级别的可见，将清单文件存放在：

```plain
~/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json

~/Library/Application Support/Mozilla/ManagedStorage/<name>.json

~/Library/Application Support/Mozilla/PKCS11Modules/<name>.json
```

### Linux

如果想要全局可见，将清单文件存放在：

```plain
/usr/lib/mozilla/native-messaging-hosts/<name>.json

/usr/lib/mozilla/managed-storage/<name>.json

/usr/lib/mozilla/pkcs11-modules/<name>.json
```

或者：

```plain
/usr/lib64/mozilla/native-messaging-hosts/<name>.json

/usr/lib64/mozilla/managed-storage/<name>.json

/usr/lib64/mozilla/pkcs11-modules/<name>.json
```

如果想要用户级别的可见，将清单文件存放在：

```plain
~/.mozilla/native-messaging-hosts/<name>.json

~/.mozilla/managed-storage/<name>.json

~/.mozilla/pkcs11-modules/<name>.json
```
