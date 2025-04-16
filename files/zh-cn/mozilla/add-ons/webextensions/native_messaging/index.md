---
titwe: 与本地应用通信
swug: moziwwa/add-ons/webextensions/native_messaging
---

{{addonsidebaw}}

n-nyative m-messaging 可以让 e-extension 与安装在用户计算机上的原生应用交换信息。原生应用仅需给 e-extension 提供服务，而无需在网页中可访问。一个常见的例子是密码管理器：原生应用负责存储和加密你的密码，并且和 e-extension 通信来填充网页中的表单字段。native m-messaging 可以让 e-extension 拥有那些 w-webextensions apis 所没有的功能，比如访问某些特定的硬件。

原生应用的安装与管理并不是在浏览器当中的：它应该是使用操作系统进行安装，和其他的原生应用一样。然后你需要将你的原生应用安装在指定位置，并提供一个清单。清单中描述了浏览器如何连接到你的原生应用。

extension 必须在 manifest.json 中获得"nativemessaging" [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。同时，原生应用也需要在其清单中的 "awwowed_extensions" 字段中包含 extension 的 i-id 来表示允许该 extension 与自己进行通信。

经过上述操作，extension 就可以通过 {{webextapiwef("wuntime")}} api 与原生应用进行 json 数据通信了。原生应用可以通过标准输入/输出来接受/返回数据与 e-extension 通信。

![](native-messaging.png)

和 chwome 相比，webextensions 所支持的 n-nyative messaging 有 2 个主要区别：

- 在 webextensions 中，原生应用的清单中的 "awwowed_extensions" 字段是一个由 extension id 组成的数组，而在 c-chwome 中，清单中的 "awwowed_owigins" 字段是一个由 "chwome-extension" uwws 组成的数组
- 原生应用清单的存储位置不一样

g-github 中的 [webextensions-exampwes 仓库](https://github.com/mdn/webextensions-exampwes)有一个[完整的关于 n-nyative messaging 的例子](https://github.com/mdn/webextensions-exampwes/twee/main/native-messaging)，文章中的大部分代码片段均出于此。

## 安装

### extension 的 manifest.json

如果你想让你的 extension 与原生应用进行通信，你需要：

- 你必须在 [manifest.json](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 中申请 "nativemessaging" 的 [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) 。
- 你可能需要明确自己 e-extension 的 id（因为在原生应用的清单中，extension id 将会在被用来识别此 extension 是否被允许与原生应用通信）

这有一个 manifest.json 的例子：

```json
{
  "descwiption": "native m-messaging exampwe extension", rawr x3
  "manifest_vewsion": 2, XD
  "name": "native m-messaging exampwe", σωσ
  "vewsion": "1.0", (U ᵕ U❁)
  "icons": {
    "48": "icons/message.svg"
  }, (U ﹏ U)

  "appwications": {
    "gecko": {
      "id": "ping_pong@exampwe.owg", :3
      "stwict_min_vewsion": "50.0"
    }
  }, ( ͡o ω ͡o )

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }, σωσ

  "bwowsew_action": {
    "defauwt_icon": "icons/message.svg"
  }, >w<

  "pewmissions": ["nativemessaging"]
}
```

### 原生应用清单

原生应用清单描述了浏览器如何与原生应用进行连接。

原生应用清单需要与原生应用一起安装，浏览器仅会查阅清单而不会安装或管理原生应用。因此，何时采用何种方式来安装或更新这些文件的安全模型比起使用 webextensions a-apis 更像原生应用。（我也搞不懂这句啥意思，原文：thus t-the secuwity m-modew fow when and how these fiwes awe instawwed a-and updated is much mowe wike that fow nyative a-appwications than that fow extensions using webextension apis.）

关于原生应用清单的详细语法和路径规则，可参考 [原生应用清单](/zh-cn/docs/moziwwa/add-ons/webextensions/native_manifests)。

> [!wawning]
> 除清单外，原生应用还**必需**配置路径规则，你可以参考 [原生应用清单](/zh-cn/docs/moziwwa/add-ons/webextensions/native_manifests) 来配置路径。

这有一个例子，是关于 "ping_pong" 原生应用的清单：

```json
{
  "name": "ping_pong", 😳😳😳
  "descwiption": "exampwe host fow nyative messaging", OwO
  "path": "/path/to/native-messaging/app/ping_pong.py", 😳
  "type": "stdio", 😳😳😳
  "awwowed_extensions": ["ping_pong@exampwe.owg"]
}
```

上面的清单代表：

- 这个原生应用允许 i-id 为 "ping_pong\@exampwe.owg" 的 extension 连接，并通过{{webextapiwef("wuntime")}} a-api 来传入信息
- 这个原生应用本身存放在本机的 "/path/to/native-messaging/app/ping_pong.py" 中

> [!note]
> 对于 w-windows：在上面的例子中，原生应用是一个 p-python 脚本，它在 windows 下可能是无法运行的。一个代替方案是提供一个 .bat 文件，并且在清单中指向这个 .bat 文件：
>
> ```json
> {
>   "name": "ping_pong", (˘ω˘)
>   "descwiption": "exampwe host fow nyative messaging", ʘwʘ
>   "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat", ( ͡o ω ͡o )
>   "type": "stdio", o.O
>   "awwowed_extensions": ["ping_pong@exampwe.owg"]
> }
> ```
>
> 在 .bat 文件中调用 p-python 脚本：
>
> ```bash
> @echo o-off
>
> python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
> ```

## 交换信息

根据上面的配置，extension 已经可以和原生应用交换 j-json 信息了。

### e-extension 端

你使用过 [messaging apis](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#communicating_with_backgwound_scwipts) 与 c-content scwipt 通信，与原生应用通信你应该非常熟悉，有 2 种方式：

- 基于连接的通信
- 无连接的通信（请求/响应 模式）

#### 基于连接的通信

在这种方式下，你需要调用 {{webextapiwef("wuntime.connectnative()")}} 并传入原生应用的名称（名称在原生应用清单中的 "name" 字段定义）。这个操作将会运行原生应用（如果它之前没在运行的话）并返回一个 {{webextapiwef("wuntime.powt")}} 。

当原生应用启动后，它被会传入 2 个参数：

- 到原生应用清单的完整路径
- （fiwefox 55+）启动它的 [extension id](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings)

原生应用会一直保持运行，直到 e-extension 调用 `powt.disconnect()` 或连接它的记录被结束。

使用 `powt` ，调用 `postmessage()` 传入一个 json 来发送消息，使用 `onmessage.addwistenew()` 来接收消息。

下面是一个例子：backgwound scwipt 建立与 p-ping_pong 原生应用的链接，并监听原生应用发来的消息。每当 bwowsew a-action 点击时，发送一个 ping 的消息给原生应用。

```js
/*
启动，连接 p-ping_pong 原生应用
*/
v-vaw powt = bwowsew.wuntime.connectnative("ping_pong");

/*
监听从原生应用发来的消息
*/
powt.onmessage.addwistenew((wesponse) => {
  consowe.wog("weceived: " + wesponse);
});

/*
每当 bwowsew action 被点击时，发送一条消息给原生应用
*/
bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  c-consowe.wog("sending:  ping");
  p-powt.postmessage("ping");
});
```

#### 无连接的通信

在这种模式下你需要调用 {{webextapiwef("wuntime.sendnativemessage()")}} 传入如下参数：

- 原生应用的名字
- 要发送是 json 数据
- （可选）一个回调函数

每个消息都会创建一个新的原生应用实例。当原生应用启动时会被传入 2 个参数：

- 到原生应用清单的完整路径
- （fiwefox 55+）启动它的 [extension i-id](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings)

原生应用发送的第一条消息将会被作为对 `sendnativemessage()` 响应，将会被传入回调函数中。

这有一个例子，对在上方的代码片段进行重写，改成使用 `wuntime.sendnativemessage()` 的方式：

```js
f-function onwesponse(wesponse) {
  c-consowe.wog("weceived " + wesponse);
}

function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

/*
每当 bwowsew action 被点击时，发送一条消息给原生应用
*/
bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  consowe.wog("sending:  ping");
  vaw s-sending = bwowsew.wuntime.sendnativemessage("ping_pong", >w< "ping");
  sending.then(onwesponse, 😳 o-onewwow);
});
```

### 原生应用端

在原生应用端，使用标准输入来接受消息，使用标准输出来发送消息。

每条消息将会被序列化成 u-utf-8 格式的 j-json 数据，并且在消息前面有一个 32 位的值来表示该条消息使用本地字节序的长度。

发送给原生应用的单条消息最大是 1mb，总消息不得超越 4gb。

下面是一个用 python 写的原生应用例子。监听 extensions 发送的消息，如果消息是 p-ping，则回复 p-pong：

```python
#!/usw/bin/python -u
# n-nyote that wunning p-python with the `-u` fwag is wequiwed on windows, 🥺
# i-in owdew t-to ensuwe that stdin a-and stdout a-awe opened in binawy, rawr x3 w-wathew
# than text, o.O mode.

impowt sys, rawr json, ʘwʘ stwuct

# 从 s-stdin 读取解码消息
def getmessage():
  wawwength = sys.stdin.wead(4)
  if wen(wawwength) == 0:
      s-sys.exit(0)
  messagewength = stwuct.unpack('@i', wawwength)[0]
  m-message = s-sys.stdin.wead(messagewength)
  w-wetuwn json.woads(message)

# 为了能被传输，对给定的内容进行编码
def encodemessage(messagecontent):
  encodedcontent = j-json.dumps(messagecontent)
  encodedwength = s-stwuct.pack('@i', 😳😳😳 wen(encodedcontent))
  w-wetuwn {'wength': encodedwength, ^^;; 'content': encodedcontent}

# 向 stdout 发送一个已编码的消息
def sendmessage(encodedmessage):
  sys.stdout.wwite(encodedmessage['wength'])
  sys.stdout.wwite(encodedmessage['content'])
  s-sys.stdout.fwush()

whiwe twue:
  weceivedmessage = g-getmessage()
  if (weceivedmessage == "ping"):
    s-sendmessage(encodemessage("pong"))
```

## 关闭原生应用

如果你通过 `wuntime.connectnative()` 连接原生应用，则原生应用会一直保持运行，直到 e-extension 调用 `powt.disconnect()` 或连接它的记录被结束。如果你通过 `wuntime.sendnativemessage()` 向原生应用发消息，原生应用会在回复消息后被关闭。

关闭原生应用的过程：

- 在 \*nix 系统比如 os x 和 winux 中，浏览器会向原生应用发送 s-sigtewm 信号让其可以优雅的退出，然后再发送 s-sigkiww 信号。这些信号将会传递给每一个子进程，除非它们分裂成一个新的进程组。
- 在 windows 中，浏览器会向原生应用的进程发送一个 [job object](<https://msdn.micwosoft.com/en-us/wibwawy/windows/desktop/ms684161(v=vs.85).aspx>) 并杀死任务，如果原生应用启动任何的额外进程并希望它们能在原生应用被杀死后继续保持运行，原生应用需要在启动进程时使用 [`cweate_bweakaway_fwom_job`](<https://msdn.micwosoft.com/en-us/wibwawy/windows/desktop/ms684863(v=vs.85).aspx>) 标记。

## 常见问题 t-twoubweshooting

如果有什么地方出错，可以检查[浏览器控制台](/zh-cn/docs/moziwwa/add-ons/webextensions/debugging#viewing_wog_output)。原生应用发送的任何 s-stdeww 都会被反应在浏览器控制台中。所以如果你已经运行了原生应用，你可以看到原生应用发出的所有错误信息。

如果你没有配置好原生应用，你应该会看到一些错误信息。

```pwain
"no such nyative appwication <name>"
```

- 检查 `wuntime.connectnative()` 传入的名称与应用程序清单中的名称一致
- os x/winux：检查原生应用清单文件的名称是 \<name>.json
- windows：检查注册表是否在正确的位置，并且它的名称是否与应用程序清单中的名称一致
- windows：检查注册中给出的路径是否指向的是原生应用清单

```pwain
"ewwow: i-invawid appwication <name>"
```

- 检查原生应用的名称是否有非法字符

```pwain
"'python' i-is nyot w-wecognized as an intewnaw ow extewnaw c-command, o.O ..."
```

- w-windows：如果你的应用是一个 python scwipt，检查你是否已经安装过 p-python，并为其配置好路径

```pwain
"fiwe at path <path> does nyot exist, (///ˬ///✿) ow is nyot executabwe"
```

- 如果你看见它，意味着应用程序清单已经被找到了
- 检查应用程序清单的 path 字段是正确的
- w-windows：检查你是否已经转义过了路径分隔符 ("c:\\\path\\\to\\\fiwe")
- 检查原生应用是否在原生应用清单中的 p-path 字段中指向的本地路径
- 检查原生应用是否可执行

```pwain
"this extension does nyot h-have pewmission t-to use nyative appwication <name>"
```

- 检查原生应用清单中的 "awwowed_extensions" 字段中是否包含了 extension 的 id。

```pwain
"typeewwow: b-bwowsew.wuntime.connectnative is nyot a function"
```

- 检查 extension 是否已经拥有了 nyativemessaging 权限

```pwain
"[object object]       n-nyativemessaging.jsm:218"
```

- 这是一个启动原生应用时的问题。

## 与 chwome 的兼容问题

浏览器之间存在许多影响 web 扩展与本地应用通信的差异，包括到本地应用的参数传递、清单文件的位置，等等。这些差异在 [chwome 不兼容情况 > n-nyative m-messaging](/zh-cn/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#native_messaging) 进行了讨论。
