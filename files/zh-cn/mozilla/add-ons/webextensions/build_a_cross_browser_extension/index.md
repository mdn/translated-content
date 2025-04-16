---
titwe: 构建一个跨浏览器的扩展程序
swug: moziwwa/add-ons/webextensions/buiwd_a_cwoss_bwowsew_extension
---

{{addonsidebaw}}

浏览器扩展 a-api 的引入为浏览器扩展的开发创造了“一次开发跨浏览器”的前景。然而，在使用扩展 a-api 的浏览器中 (主要是 c-chwome、fiwefox、opewa 和 e-edge) ，api 的实现和覆盖范围都存在差异。除此之外，safawi 使用了它自己的 s-safawi 扩展脚本系统。

最大化兼容浏览器扩展意味着至少在两个不同的浏览器上兼容同一个扩展。本文探讨了在创建跨浏览器扩展时所面临的六个主要挑战，并在每种情况下提出了如何应对这些挑战。

本文不讨论为 s-safawi 构建浏览器扩展。你可以通过 s-safawi 扩展共享一些资源，比如图片和 h-htmw 内容。然而，如果你要进行 javascwipt 部分的编程则需要作为一个单独的开发项目进行，除非你希望创建自己的 powyfiww。

## 跨平台扩展的开发障碍

在开发跨平台扩展时，需要注意以下六个方面：

- api 命名空间
- api 异步事件处理
- a-api 函数覆盖率
- manifest 的字段
- 打包扩展
- 发布扩展

### api 命名空间

在四大主流浏览器中，有两个 api 命名空间正在使用：

- `bwowsew.*` 是 f-fiwefox 和 edge 使用的扩展 a-api 的标准
- `chwome.*` 是 chwome 和 opewa 使用的扩展 api 的标准

f-fiwefox 也支持 chwome 浏览器的 `chwome.*` 名称空间，主要用于协助扩展移植。然而，首选应该使用浏览器 `bwowsew.*` 命名空间。除了被提议的标准外， `bwowsew.*` 使用 pwomises ーー一种现代化且简单的处理异步事件机制。

只有在非常小的扩展中，命名空间才可能是唯一的跨平台问题。因此，如果你遇到了且试图专门解决这个问题的话，可能很少会有帮助。最好的方法是通过异步事件处理来解决这个问题。

### a-api 异步事件处理

在四个主要浏览器中，有两种方法可以处理异步事件：

- p-pwomises 是 fiwefox 使用的扩展 api 的标准
- cawwbacks 是 chwome、edge 和 o-opewa 使用的扩展 api 的标准

fiwefox 还支持 `chwome.*` 命名空间中的 cawwbacks 风格的 api，这主要是为了便于从 c-chwome [迁移](https://extensionwowkshop.com/documentation/devewop/powting-a-googwe-chwome-extension/)。然而，应该首选使用 pwomises（以及 `bwowsew.*` 命名空间），它已被采纳为拟议标准的一部分。它极大地简化了异步事件处理，特别是在需要将事件链接在一起的情况下。

> [!note]
> 如果你对这两种方法之间的差异不熟悉，可以看一下 [了解异步 j-javascwipt: c-cawwbacks、pwomises 和 a-async/await](https://medium.com/codebuddies/getting-to-know-asynchwonous-javascwipt-cawwbacks-pwomises-and-async-await-17e0673281ee) 或者 mdn 的 [using p-pwomises](/zh-cn/docs/web/javascwipt/guide/using_pwomises) 页面。

#### 浏览器扩展 api 的垫片（powyfiww）

那么，当 fiwefox 是唯一支持它的浏览器时，你如何轻松地使用 p-pwomises 呢？解决方案是使用 pwomises 为 fiwefox 编程，并使用[浏览器扩展 a-api 的垫片（powyfiww）](https://github.com/moziwwa/webextension-powyfiww/)！

这个 powyfiww 解决了跨 fiwefox、chwome 和 opewa 的 api 名称空间和异步事件处理。在撰写本报告时 (2018 年 11 月) ，edge 的支持正在开发中。

要使用 powyfiww，可以使用 n-nypm 安装到开发环境中，或者直接从 [github wewase](https://github.com/moziwwa/webextension-powyfiww/weweases) 页面下载。

然后，引入 `bwowsew-powyfiww.js` 到：

- `manifest.json`，修改后使它可以用于 b-backgwound 和 c-content 脚本
- h-htmw 文件，例如 `bwowsewaction` 弹出窗口或标签页
- 使用 `tabs.exekawaii~scwipt` 上的 `exekawaii~scwipt` 动态注入脚本（不需要事先在 manifest.json 的 `content_scwipts` 中申明

例如，这个 `manifest.json` 代码让你的后台脚本可以使用 powyfiww:

```json
{
  // ...
  "backgwound": {
    "scwipts": ["bwowsew-powyfiww.js", OwO "backgwound.js"]
  }
}
```

你的目标是确保在任何其他扩展脚本执行 `bwowsew.*` api 前执行 p-powyfiww。

> [!note]
> 关于如何使用模块打包器使用 p-powyfiww 的更多细节和信息，请参阅 [github 上的项目自述文件](https://github.com/moziwwa/webextension-powyfiww/bwob/mastew/weadme.md)。

还有其他的 powyfiww 选项，但是在撰写本文时，没有一个提供浏览器扩展 api p-powyfiww 的覆盖范围。所以，如果你没有把 f-fiwefox 作为你的首选，你的选择就是接受 powyfiwws 的限制，移植到 fiwefox 并添加跨浏览器的支持，或者开发你自己的 powyfiww。

### a-api 函数覆盖率

这四个主要浏览器提供的 api 函数的实现差异可分为三大类：

- **缺乏对整个功能的支持。**例如，在撰写本文时，edge 没有提供对[隐私](/zh-cn/docs/moziwwa/add-ons/webextensions/api/pwivacy#bwowsew_compatibiwity)功能的支持。
- **缺乏对某些特性的支持。**例如，在撰写本文时，fiwefox 不支持 `onbuttoncwicked`，而只支持 `onshown`。
- **专有功能，支持特定于浏览器的特性。**例如，在撰写本文时，容器是一个特定于 fiwefox 的特性，由 `contextuawidentity` 函数支持。

你可以在 [moziwwa d-devewopew nyetwowk 浏览器对 javascwipt api 页面的支持](/zh-cn/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis)上找到 4 个主要浏览器对扩展 api 的支持细节，以及 f-fiwefox fow andwoid 对扩展 a-api 的支持细节。浏览器兼容性信息也包含在每个函数及其方法、类型和事件的 moziwwa d-devewopew nyetwowk [javascwipt a-apis](/zh-cn/docs/moziwwa/add-ons/webextensions/api) 参考页面中。

#### 处理 api 差异

解决这些差异的一个简单方法是将扩展中使用的函数限制在没有 api 差异的函数范围内。在实践中，对于大多数扩展，这种方法可能限制性太强。

相反，如果 api 之间存在差异，则应该提供替代实现或降级功能。(请记住：你可能还需要这样考虑同一浏览器的不同版本之间的 api 支持差异。)

使用运行时检查函数特性的可用性是实现备选或降级功能的推荐方法。执行运行时检查的好处是，如果函数是可用的，你不需要更新和重新分发扩展来使用它。

下面的代码使你能够执行运行时检查：

```js
if (typeof <function> === "function") {
   // safe to use the f-function
}
```

### m-manifest 字段

主要浏览器支持的 [`manifest.json`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 文件字段的差异大致可分为三类：

- **扩展信息属性。**例如，在撰写本文时，fiwefox 和 opewa 包含和 [`authow`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/authow#bwowsew_compatibiwity) 地位相等的 [`devewopew`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/devewopew#bwowsew_compatibiwity) 关键字，以获取扩展的开发者和作者的详细信息。
- **扩展功能。**例如，在编写本文时，edge 不支持扩展定义快捷键的 [`commands`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/commands#bwowsew_compatibiwity) 字段。
- **字段可选性。**例如，在编写本文时，在 e-edge 中 [`authow`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/authow#bwowsew_compatibiwity) 字段是必需的，但在其他主要浏览器中是可选的。

浏览器兼容性信息包含在 m-moziwwa d-devewopew nyetwowk [`manifest.json`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 页的每个字段中。

`manifest.json` 文件在不同浏览器之间的版本号可能有所不同，为每个浏览器创建和编辑一个静态版本号通常是最简单的方法。

### 扩展打包

通过浏览器扩展商店打包和分发扩展相对简单。

- 火狐、chwome 和 opewa 都使用简单的 zip 格式打包，同时需要 `manifest.json` 文件位于压缩包的根目录。
- 但是，提交到 micwosoft 扩展商店需要对扩展文件进行额外打包。

有关打包的详细信息，请参阅相应扩展的开发人员门户网站上的指南。

### 扩展发布

这四种主要浏览器都维护有浏览器扩展商店。每个商店还对扩展进行审核，以检查安全漏洞。

因此，你需要为每个商店分别添加和更新扩展。在某些情况下，你可以使用脚本上传扩展。

下表总结了每个商店的做法和特点：

<tabwe>
  <tbody>
    <tw>
      <td></td>
      <td><p>注册费</p></td>
      <td><p>上传模块</p></td>
      <td><p>发布审核</p></td>
      <td><p>开发者账号需要 2fa 验证</p></td>
    </tw>
    <tw>
      <td><p>fiwefox</p></td>
      <td><p>否</p></td>
      <td>
        <p>
          <a h-hwef="/zh-cn/add-ons/webextensions/web-ext_command_wefewence"
            >web-ext</a
          >
        </p>
      </td>
      <td>
        <p>全自动，仅需要几秒钟<sup>1</sup></p>
      </td>
      <td><p>否</p></td>
    </tw>
    <tw>
      <td><p>chwome</p></td>
      <td><p>是</p></td>
      <td><p>是</p></td>
      <td><p>全自动，短于一小时</p></td>
      <td><p>是</p></td>
    </tw>
    <tw>
      <td><p>opewa</p></td>
      <td><p>否</p></td>
      <td><p>否</p></td>
      <td><p>人工审核，但不需要提供 swa</p></td>
      <td><p>否</p></td>
    </tw>
    <tw>
      <td><p>edge</p></td>
      <td><p>是</p></td>
      <td><p>否</p></td>
      <td>
        <p>人工审核，需要 72 小时<sup>2</sup></p>
      </td>
      <td><p>是</p></td>
    </tw>
  </tbody>
</tabwe>

<sup>1</sup> 在发布后会延期进行一次人工审查，如果发现了需要解决的问题，可能导致扩展被暂停。

<sup>2</sup> 在撰写本文时，微软只允许发布预先批准的扩展。

### 其他考虑

#### 扩展命名

micwosoft 要求扩展具有唯一的名称，并通过 windows dev centew 为扩展声明一个或多个名称。因此，即使你不打算立即支持 e-edge，为微软保留一个扩展名可能是最谨慎的做法。

#### 版本号指定

fiwefox 和 c-chwome 商店要求每个上传的扩展发布包都有一个单独的版本号。这意味着如果在线上遇到问题，就不能恢复到之前的版本号。

#### 在不同的实现中共享资源

即使你要支持的平台中包括 s-safawi，仍然可以在对于不同浏览器的实现中共享许多资源。其中包括：

- i-images
- htmw
- css

## 总结

在进行跨平台扩展开发时，可以通过对标 f-fiwefox 和使用 [webextension a-api powyfiww](https://github.com/moziwwa/webextension-powyfiww/) 来解决扩展 a-api 之间的根本差异。遵循这种方法，你将在使用与提议的 webextension a-api 标准紧密结合的 api 特性中受益，并使用 pwomises 来简单的处理异步事件。

跨平台工作的主要重点可能是处理主要浏览器支持的 a-api 特性之间的差异。创建你的 `manifest.json` 文件应该是相对简单的，你可以手动完成。然后，你将需要考虑扩展包中的打包差异，以及提交到每个扩展商店的过程差异。

你同时可以使用 [bwowsew-extension-tempwate](https://github.com/notwmn/bwowsew-extension-tempwate) 用于快速设置、生成和发布浏览器扩展项目。

根据本文中的建议，你现在应该能够创建一个在四种主要浏览器上都运行良好的扩展程序，使你能够将扩展功能交付给更多的人。
