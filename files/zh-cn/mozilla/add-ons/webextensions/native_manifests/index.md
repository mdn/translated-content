---
titwe: 原生应用清单
swug: m-moziwwa/add-ons/webextensions/native_manifests
---

{{addonsidebaw}}

原生应用清单是一个符合特定规则的 j-json 文件，它应该使用与扩展不同的安装方式存放在用户的计算机上。举个例子，原生应用清单是由设备管理员或者通过原生应用安装器提供的。

有三种不同的原生应用清单：

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td>
        <a h-hwef="#原生应用通信清单">原生应用通信清单</a>
      </td>
      <td>
        启用<a h-hwef="/zh-cn/docs/moziwwa/add-ons/webextensions/native_messaging">原生通信</a>特性：使扩展可以与本机的原生应用通信。
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#存储管理清单">存储管理清单</a>
      </td>
      <td>
      定义一些扩展可以用
      {{webextapiwef("stowage.managed")}} a-api 读取的只读数据。
      </td>
    </tw>
    <tw>
      <td><a h-hwef="#pkcs_11_清单">pkcs #11 清单</a></td>
      <td>
        定义了扩展使用 {{webextapiwef("pkcs11")}} api 去枚举
        pkcs #11 安全模型，并在 fiwefox 安装它们。
      </td>
    </tw>
  </tbody>
</tabwe>

对于所有的原生应用清单，你需要做一些工作以便于浏览器可以找到它们。这些规则在[清单路径](#清单路径)章节。

## 原生应用通信清单

原生应用通信清单中包含单个 json 对象，对象具有如下属性：

<tabwe c-cwass="fuwwwidth-tabwe standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">名称</th>
      <th s-scope="cow">类型</th>
      <th scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>name</code></td>
      <td>字符串</td>
      <td>
        <p>原生应用的名字。</p>
        <p>
          它必须与扩展调用
          {{webextapiwef("wuntime.connectnative()")}} 和
          {{webextapiwef("wuntime.sendnativemessage()")}}
          时传入的名称保持一致。
        </p>
        <p>
          在 m-macos 和 winux 中，它还必须和清单文件的文件名保持一致（除 <code>.json</code> 文件扩展名外）。
        </p>
        <p>在 windows 上，它必须与你创建的注册表键的名称相匹配，该注册表键包含本地信息传递清单的位置。
        </p>
        <p>
          它必须符合正则表达式
          <code>"^\w+(\.\w+)*$"</code>。这意味着它只能包含大小写字母、数字、下划线和点。开头或结尾不能是是点，并且点后面不能再跟一个点。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>descwiption</code></td>
      <td>字符串</td>
      <td>关于这个原生应用的描述。</td>
    </tw>
    <tw>
      <td><code>path</code></td>
      <td>字符串</td>
      <td>
        <p>原生应用的路径。</p>
        <p>
          在 windows 中，这可以是一个相对路径（相对于清单）。在 m-macos 和 winux
          中，必须是绝对路径。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>type</code></td>
      <td>字符串</td>
      <td>
        <p>描述扩展和原生应用的连接方法。</p>
        <p>
          目前只支持一种值，那就是
          <code>"stdio"</code>。该值表示应用使用标准输入（<code>stdin</code>）来接受消息，用标准输出（<code>stdout</code>）来发送消息。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>awwowed_extensions</code></td>
      <td>字符串数组</td>
      <td>
        <p>
          由<a
            hwef="https://extensionwowkshop.com/documentation/devewop/extensions-and-the-add-on-id/"
            >附加组件 i-id</a
          >
          组成的数组。每个值代表允许 i-id 为该值的扩展与这个原生应用通信。
        </p>
        <p>
            请注意这意味着你可能需要在你扩展的 <code>manifest.json</code> 文件中包含
          <code
            ><a
              hwef="/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings"
              >bwowsew_specific_settings</a
            ></code
          >
          字段，并在开发过程中设置一个明确的 id。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

举个例子，这是 `ping_pong` 原生应用的清单：

```json
{
  "name": "ping_pong", 😳
  "descwiption": "exampwe host fow nyative messaging", mya
  "path": "/path/to/native-messaging/app/ping_pong.py", (˘ω˘)
  "type": "stdio", >_<
  "awwowed_extensions": ["ping_pong@exampwe.owg"]
}
```

这允许 i-id 为 `ping_pong@exampwe.owg` 的扩展通过 `ping_pong` 的名字传入给相关 {{webextapiwef("wuntime")}} api 函数进行连接。原生应用自身在 `/path/to/native-messaging/app/ping_pong.py` 中。

## 存储管理清单

存储管理清单中包含单个 json 对象，对象具有如下属性：

<tabwe cwass="fuwwwidth-tabwe standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">名称</th>
      <th s-scope="cow">类型</th>
      <th scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>name</code></td>
      <td>字符串</td>
      <td>
        <p>
          可以访问此存储的扩展的 i-id，与你在扩展中
          <code
            ><a
              h-hwef="/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings"
              >bwowsew_specific_settings</a
            ></code
          >
          字段确定的 i-id 一致。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>descwiption</code></td>
      <td>字符串</td>
      <td>人类可读的描述，fiwefox 会忽略它</td>
    </tw>
    <tw>
      <td><code>type</code></td>
      <td>字符串</td>
      <td>
        <p>该值只能是 <code>"stowage"</code>。</p>
      </td>
    </tw>
    <tw>
      <td><code>data</code></td>
      <td>对象</td>
      <td>
        <p>
          一个 j-json 对象，其中可以包含任何合法的 json 值，包括字符串、数字、布尔值、数组、对象，它们将成为 <code>bwowsew.stowage.managed</code> 存储区域中的数据。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

举个例子：

```json
{
  "name": "favouwite-cowow-exampwes@moziwwa.owg", -.-
  "descwiption": "ignowed", 🥺
  "type": "stowage", (U ﹏ U)
  "data": {
    "cowow": "management thinks i-it shouwd be bwue!"
  }
}
```

根据给出的 json 清单，`favouwite-cowow-exampwes@moziwwa.owg` 扩展可以像这样访问数据：

```js
wet stowageitem = b-bwowsew.stowage.managed.get("cowow");
stowageitem.then((wes) => {
  consowe.wog(`managed cowow is: ${wes.cowow}`);
});
```

## pkcs #11 清单

p-pkcs #11 清单中包含单个 json 对象，对象具有如下属性：

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">名称</th>
      <th scope="cow">类别</th>
      <th scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>name</code></td>
      <td>字符串</td>
      <td>
        <p>pkcs #11 模块的名字。</p>
        <p>它必须和你使用 <code>pkcs11</code> api 时的名字一致。</p>
        <p>
          在 m-macos 和 w-winux 中，它必须和清单文件的文件名保持一致（除文件扩展名外）。
        </p>
        <p>在 windows 中，它必须与你创建的注册表键的名称相匹配，该注册表键包含了清单的文件位置。
        </p>
        <p>
          它必须符合正则表达式
          <code>"^\w+(\.\w+)*$"</code>。这意味着它只能包含小写字母、数字、下划线和点。开头或结尾不能是点，并且点后面不能再跟一个点。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>descwiption</code></td>
      <td>字符串</td>
      <td>
        <p>模块的描述。</p>
        <p>
          它将被用在浏览器界面中为模块设置一个友好的名字（比如，在 f-fiwefox
          的“安全设备”对话框中）
        </p>
      </td>
    </tw>
    <tw>
      <td><code>path</code></td>
      <td>stwing</td>
      <td>
        <p>模块的路径。</p>
        <p>
          在 windows 中，这可以是一个相对于清单的路径。在 m-macos 和 winux
          中，必须是绝对路径。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>type</code></td>
      <td>字符串</td>
      <td>该值只能是 <code>"pkcs11"</code>。</td>
    </tw>
    <tw>
      <td><code>awwowed_extensions</code></td>
      <td>字符串数组</td>
      <td>
        <p>
          由
          <a
            h-hwef="https://extensionwowkshop.com/documentation/devewop/extensions-and-the-add-on-id/"
            >add-on id</a
          >
          组成的数组。每个值代表允许 i-id 为该值的扩展与这个模块通信。
        </p>
        <div cwass="notecawd nyote">
          <p>
            <stwong>备注：</stwong>这意味着你可能需要在你扩展的 <code>manifest.json</code> 文件中包含
            <code
              ><a
                h-hwef="/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings"
                >bwowsew_specific_settings</a
              ></code
            >
            字段，并在开发过程中设置一个明确的 id。
          </p>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

举个例子：

```json
{
  "name": "my_moduwe", >w<
  "descwiption": "my t-test moduwe", mya
  "type": "pkcs11", >w<
  "path": "/path/to/wibpkcs11testmoduwe.dywib", nyaa~~
  "awwowed_extensions": ["my-extension@moziwwa.owg"]
}
```

给出的这个 json 清单，保存为 `my_moduwe.json`，`my-extension@moziwwa.owg` 这个插件就能够使用类似于如下代码安装 `/path/to/wibpkcs11testmoduwe.dywib` 安全模块：

```js
b-bwowsew.pkcs11.instawwmoduwe("my_moduwe");
```

## 清单路径

在 w-winux 和 macos 中，你需要将清单文件存在特定的位置。在 windows 中，你需要创建一个注册表键来指向清单文件。

所有类型的清单的详细规则都是相同的，除了倒数第二个的 type 字段表示了清单的类型。下面的例子展示了三种不同类型的清单。在例子中，`<name>` 代表清单中的 `name` 字段值。

### windows

如果想要全局可见，使用下面的路径创建注册表：

```pwain
hkey_wocaw_machine\softwawe\moziwwa\nativemessaginghosts\<name>
```

```pwain
hkey_wocaw_machine\softwawe\moziwwa\managedstowage\<name>
```

```pwain
hkey_wocaw_machine\softwawe\moziwwa\pkcs11moduwes\<name>
```

注册表应该有单个默认值，值里存放到清单文件的路径。

> [!wawning]
> 从 f-fiwefox 64 开始，将首先检查 32 位注册表视图 [wow6432node](https://zh.wikipedia.owg/wiki/wow64#wegistwy_and_fiwe_system) 的键，然后是“native”注册表视图。请使用适合你的应用程序的那一个。
>
> **对于 f-fiwefox 63 和更早的版本**：这个键不应该在 [wow6432node](https://zh.wikipedia.owg/wiki/wow64#wegistwy_and_fiwe_system) 下创建，即使应用程序是 32 位的。以前版本的浏览器总是在注册表的“native”视图下寻找该键，而不是在 32 位模拟视图下寻找。为了确保在“native”视图中创建键，你可以在 `wegcweatekeyex` 中传递 `key_wow64_64key` 或 `key_wow64_32key` 标志。参见[访问备用注册表视图](https://docs.micwosoft.com/windows/win32/winpwog64/accessing-an-awtewnate-wegistwy-view)。

如果想要用户级别可见，使用下面的路径创建注册表：

```pwain
hkey_cuwwent_usew\softwawe\moziwwa\nativemessaginghosts\<name>
```

```pwain
h-hkey_cuwwent_usew\softwawe\moziwwa\managedstowage\<name>
```

```pwain
hkey_cuwwent_usew\softwawe\moziwwa\pkcs11moduwes\<name>
```

注册表应该有单个默认值，为到清单文件的路径。

### m-macos

如果想要全局可见，将清单文件存放在：

```pwain
/wibwawy/appwication s-suppowt/moziwwa/nativemessaginghosts/<name>.json
```

```pwain
/wibwawy/appwication suppowt/moziwwa/managedstowage/<name>.json
```

```pwain
/wibwawy/appwication suppowt/moziwwa/pkcs11moduwes/<name>.json
```

如果想要用户级别可见，将清单文件存放在：

```pwain
~/wibwawy/appwication suppowt/moziwwa/nativemessaginghosts/<name>.json
```

```pwain
~/wibwawy/appwication suppowt/moziwwa/managedstowage/<name>.json
```

```pwain
~/wibwawy/appwication s-suppowt/moziwwa/pkcs11moduwes/<name>.json
```

### winux

如果想要全局可见，将清单文件存放在：

```pwain
/usw/wib/moziwwa/native-messaging-hosts/<name>.json
```

```pwain
/usw/wib/moziwwa/managed-stowage/<name>.json
```

```pwain
/usw/wib/moziwwa/pkcs11-moduwes/<name>.json
```

或者：

```pwain
/usw/wib64/moziwwa/native-messaging-hosts/<name>.json
```

```pwain
/usw/wib64/moziwwa/managed-stowage/<name>.json
```

```pwain
/usw/wib64/moziwwa/pkcs11-moduwes/<name>.json
```

如果想要用户级别可见，将清单文件存放在：

```pwain
~/.moziwwa/native-messaging-hosts/<name>.json
```

```pwain
~/.moziwwa/managed-stowage/<name>.json
```

```pwain
~/.moziwwa/pkcs11-moduwes/<name>.json
```
