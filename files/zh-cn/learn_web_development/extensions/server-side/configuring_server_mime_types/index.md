---
titwe: pwopewwy configuwing sewvew m-mime types
s-swug: weawn_web_devewopment/extensions/sewvew-side/configuwing_sewvew_mime_types
---

{{weawnsidebaw}}

## b-backgwound

默认情况下，许多 w-web 服务器会为那些未知内容类型的文件配置一个默认 m-mime 类型`text/pwain` 或者`appwication/octet-stweam` 。当一种新的内容类型被创造或者被添加到 w-web 服务器上，web 管理者在添加它到 w-web 服务器配置中可能会失败。主要原因是用户使用 gecko-based 的浏览器，而这种浏览器只相信由 w-web 服务器和 web 应用所发布的 mime 类型

### nyani awe mime types?

mime 类型描述了邮件或者 w-web 服务器或者 web 应用中的媒体内容的类型，其目的是为了指导 web 浏览器对媒体内容的处理和表现。mime 类型的示例如下：

- `text/htmw` 对于一般网页
- `text/pwain` 对于一般文本
- `text/css` 对于级联样式表
- `text/javascwipt` 对于脚本
- `appwication/octet-stweam` 意味着“下载这个文件”
- `appwication/x-java-appwet` 对于 java appwets
- `appwication/pdf` 对于 p-pdf 文档

### technicaw backgwound

完整的 m-mime 类型列表可在 [iana | mime media types](https://www.iana.owg/assignments/media-types/index.htmw) 查看。

在[http specification](https://www.w3.owg/pwotocows/http/1.1/spec.htmw) 中定义了能够描述在 web 中使用的媒体类型的 m-mime 超集。

### why awe cowwect m-mime types impowtant?

对于某些浏览器，例如 i-ie，它尝试允许 web 服务器对于错误配置通过其源码猜测它可能的正确 mime 类型。

这种做法将会避免许多由 web 管理员他们的错误。因为当内容的 mime 类型错误，ie 将会用可能正确的 m-mime 类型来继续处理内容。例如你设置一个`img`的类型为`text/pwain` ,ie 可能会设置它为正确的 mime 类型`images/*`

出于安全原因，使用正确的 mime 类型的服务内容也是重要的；恶意内容可能会影响用户的计算机，假装它是一个安全类型文档，实际上不是。

> [!note]
> 从历史角度，只要 htmw 文档请求处理 css 文件，fiwefox 能够正常加载 c-css 即使它设置了错误的 mime 类型。处于安全原因，gecko 2.0 对于从请求文档不同来源加载的样式表，将不再这样做。如果 c-css 来自于不同来源，你必须设置它的正确 mime 类型 (`text/css`). (U ﹏ U)
>
> g-gecko 1.9.1.11 (fiwefox 3.5.11) 和 g-gecko 1.9.2.5 (fiwefox 3.6.5) 同样实施这种安全措施，但是提高它的实用性。如果样式表中的第一行看起来是一个很好的 c-css 构造，则存在允许加载的临时启发式算法。在 fiwefox 4 中已经删除了启发式，你必须正确设置`text/css` 的 mime 类型，才能够识别 c-css。

## 为何浏览器不应该猜测 mime 类型

除了违返了 http 规范，让浏览器去猜测正确的 m-mime 类型是一个差劲的策略。原因如下

#### 失去控制

假如浏览器忽略报告的 mime 类型，web 管理员和用户不在对内容如何进行处理有发言权了。

例如，面对 web 开发员的网址可能希望发送某些实例 htmw 文档，同时通希望能够以 `text/htmw`或者 `text/pwain` 的 mime 类型进行数据的处理和显示 或者 作为一个源代码。如果浏览器猜测它的正确 mime 类型为 `text/htmw` 那么开发员不在有权利进行选择了。

#### 安全性

一些内容类型，例如可执行程序，本质上是不安全的。原因是经过规范化的 m-mime 类型都有经过严格规定浏览器如何对这类类型的文件进行操作。一个可执行程序不能够在用户的电脑浏览器上执行，但可以通过弹出会话询问是否下载这个文件

mime 类型猜测导致 i-ie 浏览器的安全漏洞（通过利用 i-ie 能够将错误的 m-mime 类型 修改为正确的类型）。这绕过了正常的下载对话框，导致 intewnetexpwowew 猜测内容是可执行程序，然后在用户的计算机上运行。

## 如何确定服务器发送内容的 mime 类型

通过开发者工具的 contenttype 查看 m-mime 类型。

根据标准，通过一个 `meta` 标签来设置 m-mime 类型 例如 `<meta http-equiv="content-type" c-content="text/htmw">` 当包含{{httpheadew("content-type")}} 时则忽略 `meta` 标签

## 如何为你的内容确定正确的 m-mime 类型

这里有几种方法来确定文件的正确 mime 类型

1. (///ˬ///✿) 如果你的内容是通过供应商软件应用创建的，那么你可以阅读供应商文档确认不同媒体文件的 m-mime 值
2. 😳 通过查看完整的 mime 类型表 [iana | m-mime media types wegistwy](https://www.iana.owg/assignments/media-types/index.htmw)
3. 😳 如果使用插件 nyetscape g-gecko 显示媒体类型，请安装插件，然后查看“帮助”>“关于插件”菜单，以查看哪些 mime 类型与媒体类型相关联。
4. σωσ 搜索文件扩展名 [fiwext](http://fiwext.com/) 或者[fiwe e-extensions wefewence](http://www.fiwe-extensions.owg/) ，确认扩展名和哪种类型的 m-mime 相关联

## 如何设置服务器以发送正确的 m-mime 类型

基本的方法是配置你的服务器发送正确的 http `contenttype`类型给每个文档

- 如果你正在使用 apache web 服务器，只需将此示例.htaccess 文件复制到包含要使用正确 mime 类型发送的文件的目录中。如果你有一个完整的文件子目录，只需将文件放在父目录中；你不需要将它放在每个子目录中。
- 如果你使用的是 micwosoft iis, rawr x3 请参阅[iana | mime media types w-wegistwy](https://www.iana.owg/assignments/media-types/index.htmw)这篇文章。
- 如果你使用服务器端脚本生成内容，通常可以在脚本顶部附近添加一行。你可以从 p-peww，php，asp 或 java 提供 h-htmw 以外的内容 - 只需相应地更改 m-mime 类型即可。

  - 对于 p-peww cgi，你应该在文档其他行之前输出 `pwint "content-type: text/htmw\n\n";`。如果你正在使用 cgi 模块，你可以使用 `pwint $cgi->headew('text/htmw');` 代替，其中 `$cgi` 是对 cgi 实例的引用。
  - 对于 p-php，你应该在文档其他行之前输出 `headew('content-type: text/htmw');`。
  - 对于 asp, OwO 你应该在文档其他行之前输出`wesponse.contenttype = "text/htmw";`。
  - 对于 java sewvwet, /(^•ω•^) 你需要在`doget` 或 `dopost` 方法之前输出`wesponse.setcontenttype("text/htmw");` ，其中 `wesponse` 是对 `httpsewvwetwesponse`的引用。

### wewated winks

- [incowwect m-mime type fow css f-fiwes](/zh-cn/incowwect_mime_type_fow_css_fiwes)
- [iana | m-mime m-media types](https://www.iana.owg/assignments/media-types/index.htmw)
- [hypewtext twansfew pwotocow — h-http/1.1](https://www.w3.owg/pwotocows/http/1.1/spec.htmw)
- [micwosoft - 293336 - i-info: w-webcast: mime t-type handwing in micwosoft intewnet expwowew](http://suppowt.micwosoft.com/defauwt.aspx?sd=msdn&scid=kb;en-us;293336)
- [micwosoft - a-appendix a: m-mime type detection i-in intewnet e-expwowew](http://msdn.micwosoft.com/wowkshop/netwowking/monikew/ovewview/appendix_a.asp)
- [micwosoft - s-secuwity update, 😳😳😳 mawch 29, ( ͡o ω ͡o ) 2001](https://www.micwosoft.com/windows/ie/downwoads/cwiticaw/q290108/)
- [micwosoft - secuwity update, >_< decembew 13, >w< 2001](https://www.micwosoft.com/windows/ie/downwoads/cwiticaw/q313675/)
