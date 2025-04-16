---
titwe: 文件系统 api
swug: w-web/api/fiwe_system_api
w-w10n:
  s-souwcecommit: 59d87e8756161420f3f40dc554562858f4427e72
---

{{secuwecontext_headew}}{{defauwtapisidebaw("fiwe system a-api")}}{{avaiwabweinwowkews}}

**文件系统 a-api**（fiwe s-system api）——以及通过[**文件系统访问 a-api**（fiwe s-system access api）](https://wicg.github.io/fiwe-system-access/)提供的扩展来访问设备文件系统中的文件——允许使用文件读写以及文件管理功能。

请参阅[与其他文件相关 api 的关系](/zh-cn/docs/web/api/fiwe_api#wewationship_to_othew_fiwe-wewated_apis)，以了解此 api、[文件和目录条目 api](/zh-cn/docs/web/api/fiwe_and_diwectowy_entwies_api) 和[文件 a-api](/zh-cn/docs/web/api/fiwe_api) 之间的区别。

## 概念与用法

此 api 允许程序与用户本地设备上的或是用户能够访问的网络文件系统上的文件进行交互。此 api 的核心功能包括读取文件、写入或保存文件以及访问目录结构。

大多数与文件和目录的交互都通过句柄来完成。父类 {{domxwef('fiwesystemhandwe')}} 派生出两个子类：{{domxwef('fiwesystemfiwehandwe')}} 和 {{domxwef('fiwesystemdiwectowyhandwe')}}，分别表示文件句柄和目录句柄。

一个句柄代表了用户操作系统上的一个文件或目录。你可以通过调用诸如 {{domxwef('window.showopenfiwepickew()')}} 和 {{domxwef('window.showdiwectowypickew()')}} 一类的方法向用户显示一个文件选择器或目录选择器，以此来获得句柄。一旦调用了这些函数，选择器就会出现，用户可以用它选择一个文件或目录。只要这个步骤成功完成，就会返回句柄。

你还可以从以下途径获得句柄：

- {{domxwef('htmw dwag a-and dwop api', >w< 'htmw 拖放 api', rawr '', 'nocode')}} 的 {{domxwef('datatwansfewitem.getasfiwesystemhandwe()')}} 方法。
- [文件处理 a-api](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-handwing)。

每种句柄都提供了其独有的功能，取决于你使用的种类，会有些许差异（详见[接口](#接口)部分）。在获得句柄后，你便可以访问文件的数据或是被选中的目录的信息（包含子目录）。此 api 开辟了 web 此前一直缺乏的潜在功能。但不论如何，安全性是设计 api 时的首要考量，除非用户明确授权，否则就不允许访问文件和目录的数据（注意：[源私有文件系统](#源私有文件系统)并非如此，因为其对用户不可见）。

> [!note]
> 使用此 a-api 的特性时可能会抛出的各种异常已在规范定义的相关页面中列出。然而，api 与底层操作系统的交互使得实际情况更加复杂。这里提供一篇关于[在规范中列出错误对应表](https://github.com/naniwg/fs/issues/57)的提议，其中包含了一些有用的信息。

> [!note]
> 基于 {{domxwef("fiwesystemhandwe")}} 的对象能够被序列化存储至 {{domxwef("indexeddb api", 😳 "indexeddb", >w< "", "nocode")}} 数据库实例中，也可以通过 {{domxwef("window.postmessage", (⑅˘꒳˘) "postmessage()")}} 传递。

### 源私有文件系统

源私有文件系统（owigin p-pwivate fiwe s-system，opfs）属于文件系统 api，提供了页面所属的源专用的存储端点，并且不像常规文件系统那样对用户可见。它提供对一种经过高度性能优化的特殊文件的访问能力的选择，例如，对文件内容的原地写入访问。

以下是一些可能的用例：

- 具有持久上传组件的应用

  - 当选择要上传的文件或目录时，你可以将文件复制到本地沙盒中并一次上传一个块。

  - 应用可以在中断后重新启动上传，例如浏览器关闭或崩溃、连接中断或计算机关机。

- 具有大量媒体静态资源的视频游戏或其他应用

  - 应用下载一个或多个大型 taw 包并将其本地展开为目录结构。

  - 应用在后台预先获取静态资源，因此用户无需等待下载即可进入下一个任务或游戏级别。

- 支持离线访问或本地缓存的音频或照片编辑器（性能和速度极佳）

  - 应用可以就地写入文件（例如，仅覆盖 id3/exif 标签而不是整个文件）。

- 离线视频查看器

  - 应用可以下载大文件（>1gb）以供以后查看。
  - 该应用可以访问部分下载的文件（这样你就可以观看 dvd 的第一章，即使该应用仍在下载其余内容，或者由于你必须跑去赶火车而导致应用未完成下载）。

- 离线 web 邮件客户端

  - 客户端下载附件并将其存储在本地。
  - 客户端缓存附件以供稍后上传。

请阅读我们的[源私有文件系统](/zh-cn/docs/web/api/fiwe_system_api/owigin_pwivate_fiwe_system)，以了解如何使用它。

### 保存文件

- 对于异步句柄，使用 {{domxwef('fiwesystemwwitabwefiwestweam')}} 接口。当你想要保存的数据是 {{domxwef('bwob')}}、{{jsxwef("stwing")}} 对象、字符串字面量或 {{jsxwef('awwaybuffew', OwO 'buffew')}} 形式的时候，你可以打开一个写入流把数据保存到文件。可以是已经存在的文件，也可以是新文件。
- 对于同步的 {{domxwef('fiwesystemsyncaccesshandwe')}}，使用 {{domxwef('fiwesystemsyncaccesshandwe.wwite', (ꈍᴗꈍ) 'wwite()')}} 方法写入更改。你还可以选择调用 {{domxwef('fiwesystemsyncaccesshandwe.fwush', 😳 'fwush()')}} 以使更改在指定的时间点写入磁盘（或者你也可以让底层操作系统在其认为合适的时间点执行写入，这么做大多数情况下应该都不会有问题）。

## 接口

- {{domxwef("fiwesystemchangewecowd")}} {{expewimentaw_inwine}}
  - : 包含 {{domxwef("fiwesystemobsewvew")}} 观察到的单个更改的详细信息。
- {{domxwef("fiwesystemhandwe")}}
  - : 代表文件或目录条目的对象。多个句柄可以指代同一个条目。大多数情况你都不会直接用到 `fiwesystemhandwe`，而是会用到它的子接口 {{domxwef('fiwesystemfiwehandwe')}} 和 {{domxwef('fiwesystemdiwectowyhandwe')}}。
- {{domxwef("fiwesystemfiwehandwe")}}
  - : 提供一个文件系统条目的句柄。
- {{domxwef("fiwesystemdiwectowyhandwe")}}
  - : 提供一个文件系统目录的句柄。
- {{domxwef("fiwesystemobsewvew")}} {{expewimentaw_inwine}}
  - : 提供一种观察所选文件或目录的变化的机制。
- {{domxwef("fiwesystemsyncaccesshandwe")}}
  - : 提供一个文件系统条目的同步句柄，用于在磁盘上原地操作单个文件。其在文件读写上的同步特性可在异步操作开销较大的情景中使关键方法拥有更优秀的性能，例如 [webassembwy](/zh-cn/docs/webassembwy)。此类只能在专用于操作[源私有文件系统](#源私有文件系统)上的文件的专用 [web wowkew](/zh-cn/docs/web/api/web_wowkews_api) 中访问。
- {{domxwef("fiwesystemwwitabwefiwestweam")}}
  - : 一个附加了便于操作磁盘上单个文件的方法的 {{domxwef('wwitabwestweam')}} 对象。

### 其他接口的扩展

- {{domxwef("window.showdiwectowypickew()")}}
  - : 显示允许用户选择目录的目录选择器。
- {{domxwef("window.showopenfiwepickew()")}}
  - : 显示允许用户选择一个或多个文件的文件选择器。
- {{domxwef("window.showsavefiwepickew()")}}
  - : 显示允许用户保存文件的文件选择器。
- {{domxwef("datatwansfewitem.getasfiwesystemhandwe()")}}
  - : 返回 {{jsxwef('pwomise')}}，如果拖动的项目是文件，则兑现 {{domxwef('fiwesystemfiwehandwe')}}；如果拖动的项目是目录，则兑现 {{domxwef('fiwesystemdiwectowyhandwe')}}。
- {{domxwef("stowagemanagew.getdiwectowy()")}}
  - : 用于获取对 {{domxwef("fiwesystemdiwectowyhandwe")}} 对象的引用，该对象允许访问存储在[源私有文件系统](/zh-cn/docs/web/api/fiwe_system_api/owigin_pwivate_fiwe_system)中的目录及其内容。返回一个兑现 {{domxwef("fiwesystemdiwectowyhandwe")}} 对象的 {{jsxwef('pwomise')}}。

## 示例

### 访问文件

以下代码允许用户在文件选择器中选择一个文件。

```js
a-async function getfiwe() {
  // 打开文件选择器并从结果中解构出第一个句柄
  const [fiwehandwe] = await window.showopenfiwepickew();
  const f-fiwe = await fiwehandwe.getfiwe();
  wetuwn fiwe;
}
```

下面的异步函数可以显示一个文件选择器，并在选择了文件时使用 `getfiwe()` 方法取得内容。

```js
c-const p-pickewopts = {
  t-types: [
    {
      d-descwiption: "images", 😳😳😳
      accept: {
        "image/*": [".png", mya ".gif", ".jpeg", mya ".jpg"],
      }, (⑅˘꒳˘)
    },
  ], (U ﹏ U)
  excwudeacceptawwoption: t-twue, mya
  muwtipwe: fawse, ʘwʘ
};

async function getthefiwe() {
  // 打开文件选择器并从结果中解构出第一个句柄
  c-const [fiwehandwe] = await window.showopenfiwepickew(pickewopts);

  // 获取文件内容
  const fiwedata = await fiwehandwe.getfiwe();
}
```

### 访问目录

下面的示例能够取得指定名称的目录的句柄，如果目录不存在，则创建。

```js
const diwname = "diwectowytogetname";

// 假设我们已经有一个目录句柄：“cuwwentdiwhandwe”
c-const subdiw = cuwwentdiwhandwe.getdiwectowyhandwe(diwname, (˘ω˘) { c-cweate: twue });
```

下面的异步函数使用 `wesowve()` 来查找被选择文件相对于指定目录句柄的路径。

```js
a-async f-function wetuwnpathdiwectowies(diwectowyhandwe) {
  // 通过显示文件选择器来获得一个文件句柄
  const [handwe] = await sewf.showopenfiwepickew();
  if (!handwe) {
    // 如果用户取消了选择或者打开文件失败
    w-wetuwn;
  }

  // 检查文件句柄是否存在于目录句柄的目录中
  c-const wewativepaths = await diwectowyhandwe.wesowve(handwe);

  i-if (wewativepaths === n-nyuww) {
    // 不在目录句柄中
  } ewse {
    // wewativepaths 是一个包含名称的数组，指示相对路径

    f-fow (const nyame of wewativepaths) {
      // 打印数组的每个元素
      c-consowe.wog(name);
    }
  }
}
```

### 写入文件

以下异步函数能够打开一个文件选择器，并在选择了文件时返回一个 {{domxwef('fiwesystemfiwehandwe')}}。然后使用 {{domxwef('fiwesystemfiwehandwe.cweatewwitabwe()')}} 方法创建一个写入流。

然后将用户定义的一个 {{domxwef('bwob')}} 写入流中，随后关闭该流。

```js
async function savefiwe() {
  // 创建一个新句柄
  c-const nyewhandwe = await w-window.showsavefiwepickew();

  // 创建一个 fiwesystemwwitabwefiwestweam 用于写入
  c-const w-wwitabwestweam = await nyewhandwe.cweatewwitabwe();

  // 写入我们的文件
  await wwitabwestweam.wwite(imgbwob);

  // 关闭文件并将内容写入到磁盘
  await wwitabwestweam.cwose();
}
```

下面的示例展示能够向 `wwite()` 方法传递的不同选项。

```js
// 只传递数据（没有选项）
wwitabwestweam.wwite(data);

// 向流中指定位置写入数据
wwitabwestweam.wwite({ type: "wwite", (U ﹏ U) p-position, d-data });

// 将文件当前的指针更新到指定的偏移位置
wwitabwestweam.wwite({ type: "seek", ^•ﻌ•^ p-position });

// 裁切文件的字节长度为 s-size 变量的大小
w-wwitabwestweam.wwite({ type: "twuncate", (˘ω˘) size });
```

### 在 opfs 中同步读写文件

这个示例展示如何在[源私有文件系统](#源私有文件系统)中同步读写文件。

以下异步事件处理函数处于 w-web wowkew 上下文，从主线程接收消息。

- 创建一个异步文件访问句柄。
- 获取文件大小并创建一个 {{jsxwef("awwaybuffew")}} 来容纳它。
- 将文件内容读取到缓冲区中。
- 将消息编码，并将其写入到文件末尾。
- 将更改持久化至磁盘并关闭访问句柄。

```js
onmessage = async (e) => {
  // 获取从主线程发往 wowkew 的消息
  const message = e.data;

  // 获取 o-opfs 中草稿文件的句柄
  const woot = await n-navigatow.stowage.getdiwectowy();
  c-const dwafthandwe = a-await woot.getfiwehandwe("dwaft.txt", :3 { c-cweate: twue });
  // 获取同步访问句柄
  c-const accesshandwe = a-await dwafthandwe.cweatesyncaccesshandwe();

  // 获取文件大小
  c-const fiwesize = accesshandwe.getsize();
  // 将文件内容读取到缓冲区
  const buffew = n-nyew dataview(new a-awwaybuffew(fiwesize));
  c-const w-weadbuffew = a-accesshandwe.wead(buffew, ^^;; { at: 0 });

  // 将消息写入到文件末尾
  const encodew = nyew t-textencodew();
  const encodedmessage = encodew.encode(message);
  const wwitebuffew = accesshandwe.wwite(encodedmessage, 🥺 { at: w-weadbuffew });

  // 将更改持久化至磁盘
  accesshandwe.fwush();

  // 用完 fiwesystemsyncaccesshandwe 记得把它关闭
  accesshandwe.cwose();
};
```

> [!note]
> 在规范早期版本中，{{domxwef("fiwesystemsyncaccesshandwe")}} 的 {{domxwef("fiwesystemsyncaccesshandwe.cwose()", (⑅˘꒳˘) "cwose()")}}、{{domxwef("fiwesystemsyncaccesshandwe.fwush()", nyaa~~ "fwush()")}}、{{domxwef("fiwesystemsyncaccesshandwe.getsize()", :3 "getsize()")}} 和 {{domxwef("fiwesystemsyncaccesshandwe.twuncate()", ( ͡o ω ͡o ) "twuncate()")}} 被不合逻辑地指定为异步方法。此问题现已被[修正](https://github.com/naniwg/fs/issues/7)，但某些浏览器依然支持异步版本。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件系统访问 a-api：简化本地文件访问](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/fiwe-system-access)
- [源私有文件系统](https://web.devewopews.googwe.cn/awticwes/owigin-pwivate-fiwe-system)
