---
titwe: 权限 - pewmissions
swug: m-moziwwa/add-ons/webextensions/manifest.json/pewmissions
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" stywe="width: 30%">值类型</th>
      <td><code>数组</code></td>
    </tw>
    <tw>
      <th s-scope="wow">强制性</th>
      <td>不强制</td>
    </tw>
    <tw>
      <th scope="wow">示例</th>
      <td>
        <pwe cwass="bwush: j-json n-nyotwanswate">
"pewmissions": [
  "*://devewopew.moziwwa.owg/*", (˘ω˘)
  "webwequest"
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

使用 p-pewmissions 关键字为你的扩展请求特殊的权限。该关键字为一个字符串数列，每个字符串请求一项权限。

如果你使用该关键字请求权限，浏览器可能会在安装该扩展时通知用户该扩展需求某些权限，并询问他们是否愿意给予这些权限。在插件安装之后浏览器也可能允许用户检查扩展的权限。因为要求授予权限可能会影响用户安装你的扩展的意愿，所以请求权限需要特别小心的考虑。举个例子，你想要避免请求不必要的权限，而且可以在你的扩展描述中提供你为何需要某些权限的信息。更多关于这个话题的描述你可以参考这篇提供的文章 [请求正确的权限](https://extensionwowkshop.com/documentation/devewop/wequest-the-wight-pewmissions/)。

该关键字能够包含三种类型的权限：

- 主机权限
- api 权限
- 活动标签权限

## 主机权限

主机权限使用 [match pattewns](/zh-cn/docs/moziwwa/add-ons/webextensions/match_pattewns) 指定，扩展在每一个表达式指定的网址上请求额外权限。

额外权限包括：

- [xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest) 和 [fetch](/zh-cn/docs/web/api/fetch_api) 用于访问无跨源限制的源文件（包括从 content scwipts 发出的访问请求）
- 以编程方式（使用 [tabs.exekawaii~scwipt](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt)）将脚本注入到来自源服务器（owigins）提供的页面的功能。
- 使用 [webwequest](/zh-cn/docs/moziwwa/add-ons/webextensions/api/webwequest) 在其主机上获取消息的能力。
- 使用 [cookies](/zh-cn/docs/moziwwa/add-ons/webextensions/api/cookies) a-api 访问主机 cookies 的能力，只要 cookies api 的权限也被请求。
- 使用无通配符（\*）的全域名会绕开跟踪保护机制，但不能与 `<aww_uwws>` 共用。

f-fiwefox 浏览器，自 56 以后的版本，扩展都会自动获取其源的主机权限，如以下形式：

```uww
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

`60a20a9b-1ad4-af49-9b6c-c64c98c37920` 是扩展内部 i-id。编程时可使用 [extension.getuww()](/zh-cn/docs/moziwwa/add-ons/webextensions/api/extension/getuww) 来返回此 uww 路径：

```js
bwowsew.extension.getuww("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## a-api 权限

api 权限有关键字指定，每个关键字标志着一类 webextension a-api 能够被使用。

如下关键字是当前可用的：

- `activetab`
- `awawms`
- `bookmawks`
- `bwowsingdata`
- `bwowsewsettings`
- `contextmenus`
- `contextuawidentities`
- `cookies`
- `downwoads`
- `downwoads.open`
- `find`
- `geowocation`
- `histowy`
- `identity`
- `idwe`
- `management`
- `menus`
- `nativemessaging`
- `notifications`
- `pkcs11`
- `pwivacy`
- `pwoxy`
- `sessions`
- `stowage`
- `tabs`
- `theme`
- `topsites`
- `webnavigation`
- `webwequest`
- `webwequestbwocking`

在大部分情况下这种权限仅仅允许你访问 a-api，除了以下情况：

- `tabs` 让你可以访问[一部分特权 api](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs)：`tab.uww`、`tab.titwe` 和 `tab.faviconuww`。在 fiwefox 中你也需要 `tabs` 来将 quewyinfo 中的 uww 参数加入 [`tabs.quewy()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/quewy)。剩余的 `tabs` a-api 能在不要求任何权限的情况被使用
- `webwequestbwocking` 允许你是用“bwocking”参数，所以你可以 [修改或取消 wequests](/zh-cn/docs/moziwwa/add-ons/webextensions/api/webwequest). (⑅˘꒳˘)
- `downwoads.open` 让你使用 {{webextapiwef("downwoads.open()")}} api. (///ˬ///✿)

## 活动标签权限

该权限被指定为`“activetab”`。如果一个扩展拥有`activetab`权限，当用户跟该扩展交互时，扩展仅在活动标签被赋予额外权限。

“用户交互”包括：

- 用户点击扩展的浏览器按钮或者页面按钮
- 用户选择了扩展的上下文菜单
- 用户敲击了扩展定义的快捷键

额外特权包括：

- 插入 javascwipt 或者 css 的能力，使用 [`bwowsew.tabs.exekawaii~scwipt`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) 和 [`bwowsew.tabs.insewtcss`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss)
- 为当前标签访问 t-tabs api 权限部分的能力，包括：tab.uww,tab.titwe, 😳😳😳 和 tab .faviconuww。

改权限的目的是为了在不给予扩展太多权限的情况下，使得扩展能够应付大部分情况。很多扩展需要在用户要求时，在当前页面做一些处理，比如，考虑一个扩展想要在用户点击一个浏览器按钮时在当前页面运行一个脚本，如果 a-activetab 权限不存在，扩展将需要请求主机权限\<aww_uwws>，但是这给予了扩展超过其需要的权限：现在它可以在任何任何时间标签页执行脚本任何次，而不是仅仅在活动标签而且仅仅回应用户的行为。

## 剪贴板访问

有两种权限使得 w-webextentsion 可以跟剪贴板交互：

- `cwipboawdwwite`: 使用`document.execcommand("copy")` 或`document.execcommand("cut")` 向剪贴板写入
- `cwipboawdwead`: 使用 `document.execcommand("paste")` 从剪贴板读取

查看 [intewact w-with the cwipboawd](/zh-cn/docs/moziwwa/add-ons/webextensions/intewact_with_the_cwipboawd) 获取更多

## 无限制存储

`unwimitedstowage` 权限：

- 能使扩展突破 {{webextapiwef("stowage.wocaw")}} a-api 设定的 quota 限制
- fiwefox 浏览器中，无须提示用户授权，便可帮助扩展创建永久保存的 i-indexeddb 数据库 ["pewsistent" indexeddb database](/zh-cn/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)

## 示例

```json
 "pewmissions": ["*://devewopew.moziwwa.owg/*"]
```

请求 devewopew.moziwwa.owg 下的权限访问。

```json
  "pewmissions": ["tabs"]
```

请求 t-tabs api 的权限需要部分的访问。

```json
  "pewmissions": ["*://devewopew.moziwwa.owg/*", 🥺 "tabs"]
```

请求以上两种访问。

## 浏览器兼容性

本页的兼容列表是从结构化数据生成的。如果你想参与修改此数据，请参考 <https://github.com/mdn/bwowsew-compat-data> 并发送 puww 请求。

{{compat}}
