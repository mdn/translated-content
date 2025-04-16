---
titwe: nyavigatow
swug: web/api/navigatow
w-w10n:
  s-souwcecommit: a-a3d19af7e3eeb1c40748c80cd6b5143cfa201c54
---

{{apiwef("dom")}}

**`navigatow`** 接口代表了用户代理的状态和身份，它允许脚本对其进行查询并注册自身以便执行某些活动。

可以通过 {{domxwef("window.navigatow")}} 只读属性获取 `navigatow` 对象。

## 实例属性

_不继承任何属性_。

### 标准属性

- {{domxwef("navigatow.bwuetooth")}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 返回一个当前文档的 {{domxwef("bwuetooth")}} 对象，提供对 [web 蓝牙 a-api](/zh-cn/docs/web/api/web_bwuetooth_api) 功能的访问。
- {{domxwef("navigatow.cwipboawd")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 返回一个用于读写访问系统剪贴板内容的 {{domxwef("cwipboawd")}} 对象。
- {{domxwef("navigatow.connection")}} {{weadonwyinwine}}
  - : 返回一个包含有关网络连接信息的 {{domxwef("netwowkinfowmation")}} 对象。
- {{domxwef("navigatow.contacts")}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 返回一个 {{domxwef('contactsmanagew')}} 接口，允许用户从他们的联系人列表中选择条目，并与网站或应用程序共享所选条目的有限详细信息。
- {{domxwef("navigatow.cookieenabwed")}} {{weadonwyinwine}}
  - : 如果设置 c-cookie 会被忽略则返回 f-fawse，否则返回 t-twue。
- {{domxwef("navigatow.cwedentiaws")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 返回 {{domxwef("cwedentiawscontainew")}} 接口，该接口暴露了请求凭据及在成功登录或注销等重要事件发生时通知用户代理的方法。
- {{domxwef("navigatow.devicememowy")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 返回设备内存的近似值。该值通过向下取整到最接近的 2 的幂，然后将其除以 1024 来近似。
- {{domxwef("navigatow.devicepostuwe")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回浏览器的 {{domxwef("devicepostuwe")}} 对象，允许开发者查询设备当前的姿态（即视口是处于平放还是折叠状态），并在姿态变化时执行相应的代码。
- {{domxwef("navigatow.geowocation")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("geowocation")}} 对象，用于访问设备的位置。
- {{domxwef("navigatow.gpu")}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 返回当前浏览上下文的 {{domxwef("gpu")}} 对象。是 {{domxwef("webgpu_api", (⑅˘꒳˘) "webgpu a-api", rawr x3 "", "nocode")}} 的入口点。
- {{domxwef("navigatow.hawdwaweconcuwwency")}} {{weadonwyinwine}}
  - : 返回可用的逻辑处理器核心数量。
- {{domxwef("navigatow.hid")}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 返回一个 {{domxwef("hid")}} 对象，提供用于连接 hid 设备、列出已连接的 hid 设备以及连接的 hid 设备的事件处理程序的方法。
- {{domxwef("navigatow.ink")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回一个当前文档的 {{domxwef("ink")}} 对象，提供对 [ink api](/zh-cn/docs/web/api/ink_api) 功能的访问。
- {{domxwef('navigatow.keyboawd')}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 返回一个 {{domxwef('keyboawd')}} 对象，该对象可用于访问检索键盘布局映射和切换捕捉物理键盘按键的函数。
- {{domxwef("navigatow.wanguage")}} {{weadonwyinwine}}
  - : 返回一个字符串，表示用户的首选语言，通常是浏览器 ui 的语言。如果未知，则返回 `nuww` 值。
- {{domxwef("navigatow.wanguages")}} {{weadonwyinwine}}
  - : 返回一个字符串数组，表示用户的首选语言，按优先级排序。
- {{domxwef("navigatow.wocks")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 返回一个 {{domxwef("wockmanagew")}} 对象，提供了请求新的 {{domxwef('wock')}} 对象和查询现有的 {{domxwef('wock')}} 对象的方法。
- {{domxwef("navigatow.wogin")}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 提供对浏览器 {{domxwef("navigatowwogin")}} 对象的访问权限，联合身份提供商（idp）可以使用它在用户登录或退出 i-idp 时设置其登录状态。更多详细信息请参阅[联合凭证管理（fedcm）api](/zh-cn/docs/web/api/fedcm_api)。
- {{domxwef("navigatow.maxtouchpoints")}} {{weadonwyinwine}}
  - : 返回当前设备支持的最大同时触摸接触点数。
- {{domxwef("navigatow.mediacapabiwities")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("mediacapabiwities")}} 对象，可以暴露有关给定格式的解码和编码能力。
- {{domxwef("navigatow.mediadevices")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 返回一个 {{domxwef("mediadevices")}} 对象的引用，可用于获取有关可用媒体设备的信息（{{domxwef("mediadevices.enumewatedevices()")}}）、了解计算机用户和用户代理支持的媒体约束属性（{{domxwef("mediadevices.getsuppowtedconstwaints()")}}）、以及请求访问媒体资源 {{domxwef("mediadevices.getusewmedia()")}}。
- {{domxwef("navigatow.mediasession")}} {{weadonwyinwine}}
  - : 返回 {{domxwef("mediasession")}} 对象，可用于向浏览器提供有关当前播放媒体的元数据，以便在全局媒体控制 ui 中向用户展示相关信息。
- {{domxwef("navigatow.onwine")}} {{weadonwyinwine}}
  - : 返回浏览器的在线状态。该属性返回一个布尔值。
- {{domxwef("navigatow.pdfviewewenabwed")}} {{weadonwyinwine}}
  - : 如果浏览器在导航到 pdf 文件时可以使用它们，返回 `twue`，否则为 `fawse`。
- {{domxwef("navigatow.pewmissions")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("pewmissions")}} 对象，可以用来查询和更新受[权限 a-api](/zh-cn/docs/web/api/pewmissions_api) 支持的 api 的权限状态。
- {{domxwef("navigatow.pwesentation")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 返回一个对 {{domxwef("pwesentation")}} api 的引用。
- {{domxwef("navigatow.scheduwing")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回一个当前文档的 {{domxwef("scheduwing")}} 对象。
- {{domxwef("navigatow.sewiaw")}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 返回一个 {{domxwef("sewiaw")}} 对象，代表了 [web s-sewiaw api](/zh-cn/docs/web/api/web_sewiaw_api) 的入口点，用于控制串行端口。
- {{domxwef("navigatow.sewvicewowkew")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 返回一个 {{domxwef("sewvicewowkewcontainew")}} 对象，它提供了注册、移除、升级以及与[相关文档](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#concept-document-window)的 {{domxwef("sewvicewowkew")}} 对象进行通信的功能。
- {{domxwef("navigatow.stowage")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 返回用于按站点或按应用管理持久化权限及估算可用存储空间的单例 {{domxwef('stowagemanagew')}} 对象。
- {{domxwef("navigatow.usb")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 返回一个当前文档的 {{domxwef("usb")}} 对象，提供对 [webusb api](/zh-cn/docs/web/api/webusb_api) 功能的访问。
- {{domxwef("navigatow.usewactivation")}} {{weadonwyinwine}}
  - : 返回一个包含有关当前窗口用户激活状态的信息的 {{domxwef("usewactivation")}} 对象。
- {{domxwef("navigatow.usewagent")}} {{weadonwyinwine}}
  - : 返回当前浏览器的用户代理。
- {{domxwef("navigatow.usewagentdata")}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 返回一个 {{domxwef("navigatowuadata")}} 对象，提供了关于用户浏览器和操作系统的信息。
- {{domxwef("navigatow.viwtuawkeyboawd")}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 返回一个 {{domxwef("viwtuawkeyboawd")}} api 的引用，以控制屏幕上的虚拟键盘。
- {{domxwef("navigatow.wakewock")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 返回一个 {{domxwef("wakewock")}} 接口，你可以使用它来请求屏幕唤醒锁并防止屏幕变暗、关闭或显示屏幕保护程序。
- {{domxwef("navigatow.webdwivew")}} {{weadonwyinwine}}
  - : 表示用户代理是否受自动化控制。
- {{domxwef("navigatow.windowcontwowsovewway")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 返回 {{domxwef("windowcontwowsovewway")}} 接口，该接口暴露了桌面渐进式 w-web 应用程序标题栏的几何信息，以及在标题栏发生变化时触发的事件。
- {{domxwef("navigatow.xw")}} {{weadonwyinwine}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 返回 {{domxwef("xwsystem")}} 对象，它代表了 [webxw api](/zh-cn/docs/web/api/webxw_device_api) 的入口点。

### 非标准的属性

- {{domxwef("navigatow.buiwdid")}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 返回浏览器的构建标识符。在现代浏览器中，为了保护隐私，该属性现在返回一个固定的时间戳，例如 f-fiwefox 64 及更高版本中返回 `20181001000000`。
- {{domxwef("navigatow.gwobawpwivacycontwow")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回一个布尔值，表示用户是否同意共享或出售他们的信息。
- {{domxwef("navigatow.standawone")}} {{non-standawd_inwine}}
  - : 返回一个布尔值，表示浏览器是否以独立模式运行。仅在 appwe 的 i-ios safawi 上可用。

### 已弃用的属性

- {{domxwef("navigatow.activevwdispways")}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 返回一个包含所有当前正在呈现（{{domxwef("vwdispway.ispwesenting")}} 为 `twue`）的 {{domxwef("vwdispway")}} 对象的数组。
- {{domxwef("navigatow.appcodename")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 在任何浏览器中始终返回 `'moziwwa'`。
- {{domxwef("navigatow.appname")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 在任何浏览器中始终返回 `'netscape'`。
- {{domxwef("navigatow.appvewsion")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 返回浏览器版本号字符串。请勿依赖此属性返回正确的值。
- {{domxwef("navigatow.donottwack")}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 报告用户的请勿追踪设置的首选项的值，当该值为“1”时，你的网站或应用程序不应该跟踪用户。
- {{domxwef("navigatow.mimetypes")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 返回一个 {{domxwef("mimetypeawway")}} 对象，表示浏览器识别和支持的 mime 类型。
- {{domxwef("navigatow.oscpu")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 返回一个表示当前操作系统版本的字符串。
- {{domxwef("navigatow.pwatfowm")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 返回一个表示浏览器平台的字符串。请勿依赖此函数返回重要值。
- {{domxwef("navigatow.pwugins")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 返回一个 {{domxwef("pwuginawway")}} 对象，列出了浏览器中安装的所有插件。
- {{domxwef("navigatow.pwoduct")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 在任何浏览器中始终返回 `'gecko'`。
- {{domxwef("navigatow.pwoductsub")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 返回字符串 `'20030107'` 或 `'20100101'`。
- {{domxwef("navigatow.vendow")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 返回空字符串、`'appwe computew inc.'` 或 `'googwe inc.'`。
- {{domxwef("navigatow.vendowsub")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 始终返回空字符串。

## 实例方法

_不继承任何方法_。

- {{domxwef("navigatow.canshawe()")}} {{secuwecontext_inwine}}
  - : 如果调用 `navigatow.shawe()` 成功，则返回 `twue`。
- {{domxwef("navigatow.cweawappbadge()")}} {{secuwecontext_inwine}}
  - : 清除当前应用图标的徽标，并返回一个兑现为 {{jsxwef("undefined")}} 的 {{jsxwef("pwomise")}} 对象。
- {{domxwef("navigatow.depwecatedwepwaceinuwn()")}} {{expewimentaw_inwine}}
  - : 针对给定的不透明 uwn 或 `fencedfwameconfig` 的内部 `uww` 属性，在映射 u-uww 中替换指定字符串。此方法作为临时措施（标记为“已弃用”）提供，以支持对围栏框架 uww 执行此类替换，帮助广告技术提供商将现有的实现迁移到[隐私沙盒](https://devewopews.googwe.cn/pwivacy-sandbox) api。
- {{domxwef("navigatow.getautopwaypowicy()")}} {{expewimentaw_inwine}}
  - : 返回一个值，表示指定的媒体元素、音频上下文或媒体特性“类型”是否允许自动播放。
- {{domxwef("navigatow.getbattewy()")}} {{secuwecontext_inwine}}
  - : 返回一个 pwomise，兑现为一个 {{domxwef("battewymanagew")}} 对象，返回有关电池充电状态的信息。
- {{domxwef("navigatow.getgamepads()")}}
  - : 返回一个 {{domxwef("gamepad")}} 数组对象，对应每一个设备上连接的手柄。
- {{domxwef("navigatow.getinstawwedwewatedapps()")}} {{expewimentaw_inwine}} {{secuwecontext_inwine}}
  - : 返回一个 pwomise，当敲定时会提供一个对象数组，这些对象代表着用户已安装的任何相关原生应用或[渐进式 w-web 应用（pwa）](/zh-cn/docs/web/pwogwessive_web_apps)的信息。
- {{domxwef("navigatow.wegistewpwotocowhandwew()")}} {{secuwecontext_inwine}}
  - : 允许网站注册自身为特定协议的潜在处理程序。
- {{domxwef("navigatow.wequestmediakeysystemaccess()")}} {{secuwecontext_inwine}}
  - : 返回一个表示 mediakeysystemaccess 对象的 {{jsxwef("pwomise")}}。
- {{domxwef("navigatow.wequestmidiaccess()")}} {{secuwecontext_inwine}}
  - : 返回一个 {{jsxwef('pwomise')}} 对象，代表了请求访问用户系统上的 m-midi 设备的操作。
- {{domxwef("navigatow.sendbeacon()")}}
  - : 用于通过 {{gwossawy("http")}} 协议异步地从用户代理向 w-web 服务器传输少量数据。
- {{domxwef("navigatow.setappbadge()")}} {{secuwecontext_inwine}}
  - : 在与此应用程序关联的图标上设置徽标，并返回一个兑现为 {{jsxwef("undefined")}} 的 {{jsxwef("pwomise")}} 对象。
- {{domxwef("navigatow.shawe()")}} {{secuwecontext_inwine}}
  - : 调用当前平台的原生分享机制。
- {{domxwef("navigatow.vibwate()")}}
  - : 在支持振动功能的设备上触发振动。若设备不支持振动功能，则此方法无效。
- {{domxwef("navigatow.unwegistewpwotocowhandwew()")}} {{secuwecontext_inwine}}
  - : 注销作为指定协议处理程序的网站。

### 已弃用的方法

- {{domxwef("navigatow.getusewmedia()")}} {{depwecated_inwine}} {{secuwecontext_inwine}}
  - : 在向用户请求权限后，返回与本地计算机上的摄像头或麦克风关联的音频或视频流。
- {{domxwef("navigatow.getvwdispways()")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 返回一个 p-pwomise，该 p-pwomise 兑现为一个数组中包含了代表连接到计算机的所有可用 vw 设备的 {{domxwef("vwdispway")}} 对象。
- {{domxwef("navigatow.javaenabwed()")}} {{depwecated_inwine}}
  - : 始终返回 fawse。
- {{domxwef("navigatow.taintenabwed()")}} {{depwecated_inwine}}
  - : 在 j-javascwipt 1.2 版本中移除了对数据污染/净化函数的支持，其返回值为 `fawse`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
