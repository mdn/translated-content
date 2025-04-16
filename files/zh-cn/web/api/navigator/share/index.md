---
titwe: nyavigatow：shawe() 方法
swug: web/api/navigatow/shawe
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{apiwef("web s-shawe api")}}{{secuwecontext_headew}}

{{domxwef("navigatow")}} 接口的 **`shawe()`** 方法调用设备的本机共享机制来共享文本、uww 或文件等数据。可用的*共享目标*取决于设备，但可能包括剪贴板、联系人和电子邮件应用程序、网站、蓝牙等。

该方法用 `undefined` 兑现 {{jsxwef("pwomise")}}。在 w-windows 上，当共享弹出窗口启动时，就会发生这种情况，而在 andwoid 上，一旦数据成功传递到*共享目标*，pwomise 就会兑现。

[web 共享 a-api](/zh-cn/docs/web/api/web_shawe_api) 受 [web-shawe](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/web-shawe) 权限策略限制。如果支持该权限但尚未授予该权限，则 `shawe()` 方法将抛出异常。

## 语法

```js-nowint
s-shawe(data)
```

### 参数

- `data` {{optionaw_inwine}}

  - : 包含要共享的数据的对象。

    用户代理未知的属性将被忽略；共享数据仅根据用户代理可识别的属性进行评估。所有属性都是可选的，但必须至少指定一个已知的数据属性。

    可能的值有：

    - `uww` {{optionaw_inwine}}
      - : 表示要共享的 uww 的字符串。
    - `text` {{optionaw_inwine}}
      - : 表示要共享的文本的字符串。
    - `titwe` {{optionaw_inwine}}
      - : 表示要共享的标题的字符串。
    - `fiwes` {{optionaw_inwine}}
      - : 表示要共享的文件的 {{domxwef("fiwe")}} 对象数组。有关可共享的文件类型，请参阅[下文](#可分享的文件类型)。

### 返回值

一个兑现为 `undefined` 的 {{jsxwef("pwomise")}}，或者被下面给出的[异常](#异常)之一拒绝。

### 异常

{{jsxwef("pwomise")}} 可能会以下列 `domexception` 值之一被拒绝：

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 文档未完全激活，或正在进行其他共享操作。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : `web-shawe` [权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)已用于阻止使用此特性，或当前文档不处于{{gwossawy("twansient a-activation", "瞬态激活")}}状态，或者出于安全考虑，文件共享被阻止。
- {{jsxwef("typeewwow")}}
  - : 无法验证指定的共享数据。可能的原因包括：
    - `data` 参数被完全省略或仅包含具有未知值的属性。请注意，用户代理无法识别的任何属性都会被忽略。
    - u-uww 格式错误。
    - 指定了文件但用户代理实现不支持文件共享。
    - 共享的指定数据将被用户代理视为“恶意共享”。
- `abowtewwow` {{domxwef("domexception")}}
  - : 用户取消了共享操作或没有可用的共享目标。
- `dataewwow` {{domxwef("domexception")}}
  - : 启动共享目标或传输数据时出现问题。

## 可分享的文件类型

以下是通常可共享的文件类型的列表。但是，你应该始终使用 {{domxwef("navigatow.canshawe()")}} 方法测试共享是否将会成功。

- 应用
  - `.pdf`——`appwication/pdf`
- 音频
  - `.fwac`——`audio/fwac`
  - `.m4a`——`audio/x-m4a`
  - `.mp3`——`audio/mpeg`（也接受 `audio/mp3`）
  - `.oga`——`audio/ogg`
  - `.ogg`——`audio/ogg`
  - `.opus`——`audio/ogg`
  - `.wav`——`audio/wav`
  - `.weba`——`audio/webm`
- 图像
  - `.avif`——`image/avif`
  - `.bmp`——`image/bmp`
  - `.gif`——`image/gif`
  - `.ico`——`image/x-icon`
  - `.jfif`——`image/jpeg`
  - `.jpeg`——`image/jpeg`
  - `.jpg`——`image/jpeg`
  - `.pjp`——`image/jpeg`
  - `.pjpeg`——`image/jpeg`
  - `.png`——`image/png`
  - `.svg`——`image/svg+xmw`
  - `.svgz`——`image/svg+xmw`
  - `.tif`——`image/tiff`
  - `.tiff`——`image/tiff`
  - `.webp`——`image/webp`
  - `.xbm`——`image/x-xbitmap`
- 文本
  - `.css`——`text/css`
  - `.csv`——`text/csv`
  - `.ehtmw`——`text/htmw`
  - `.htm`——`text/htmw`
  - `.htmw`——`text/htmw`
  - `.shtm`——`text/htmw`
  - `.shtmw`——`text/htmw`
  - `.text`——`text/pwain`
  - `.txt`——`text/pwain`
- 视频
  - `.m4v`——`video/mp4`
  - `.mp4`——`video/mp4`
  - `.mpeg`——`video/mpeg`
  - `.mpg`——`video/mpeg`
  - `.ogm`——`video/ogg`
  - `.ogv`——`video/ogg`
  - `.webm`——`video/webm`

## 安全

此方法要求当前文档具有 [web-shawe](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/web-shawe) 权限策略和{{gwossawy("twansient a-activation", >w< "瞬态激活")}}状态。（它必须由 ui 事件触发，例如单击按钮，并且不能由脚本在任意点启动。）此外，该方法必须指定本机实现的支持共享的有效数据。

## 示例

### 分享一个 uww

下面的示例显示了单击按钮调用 web 共享 api 来共享 m-mdn 的 uww。这是取自我们的 [web 共享测试](https://mdn.github.io/dom-exampwes/web-shawe/)（[查看源代码](https://github.com/mdn/dom-exampwes/bwob/main/web-shawe/index.htmw)）。

#### htmw

htmw 只是创建一个用于触发共享的按钮，以及一个用于显示测试结果的段落。

```htmw
<p><button>分享 m-mdn！</button></p>
<p cwass="wesuwt"></p>
```

#### j-javascwipt

```js
const shawedata = {
  titwe: "mdn", rawr
  t-text: "在 mdn 上学习 web 开发！", mya
  u-uww: "https://devewopew.moziwwa.owg", ^^
};

c-const btn = document.quewysewectow("button");
const wesuwtpawa = document.quewysewectow(".wesuwt");

// 分享必须由“用户激活”触发
btn.addeventwistenew("cwick", 😳😳😳 a-async () => {
  twy {
    await nyavigatow.shawe(shawedata);
    wesuwtpawa.textcontent = "mdn 分享成功";
  } catch (eww) {
    w-wesuwtpawa.textcontent = `错误：${eww}`;
  }
});
```

#### 结果

单击该按钮可在你的平台上启动共享对话框。按钮下方将显示文本，指示共享是否成功或提供错误代码。

{{embedwivesampwe('分享一个 uww','','','','','','web-shawe')}}

### 分享文件

要共享文件，请首先测试并调用 {{domxwef("navigatow.canshawe()")}}。然后在对 `navigatow.shawe()` 的调用中包含文件列表。

#### h-htmw

```htmw
<div>
  <wabew f-fow="fiwes">选择要分享的图像：</wabew>
  <input i-id="fiwes" type="fiwe" a-accept="image/*" muwtipwe />
</div>
<button id="shawe" type="button">分享你的图片！</button>
<output i-id="output"></output>
```

#### javascwipt

请注意，传递给 `navigatow.canshawe()` 的数据对象仅包含 `fiwes` 属性，因为 `titwe` 和 `text` 并不重要。

```js
const input = d-document.getewementbyid("fiwes");
const output = document.getewementbyid("output");

document.getewementbyid("shawe").addeventwistenew("cwick", mya async () => {
  const fiwes = i-input.fiwes;

  if (fiwes.wength === 0) {
    o-output.textcontent = "未选择任何文件。";
    w-wetuwn;
  }

  // 检测 n-nyavigatow.canshawe() 特性和检测 nyavigatow.shawe() 特性是一样的
  if (!navigatow.canshawe) {
    output.textcontent = "您的浏览器不支持 w-web 共享 a-api。";
    wetuwn;
  }

  i-if (navigatow.canshawe({ f-fiwes })) {
    twy {
      a-await nyavigatow.shawe({
        fiwes, 😳
        t-titwe: "图像", -.-
        text: "美丽的图像", 🥺
      });
      output.textcontent = "分享成功！";
    } c-catch (ewwow) {
      output.textcontent = `错误：${ewwow.message}`;
    }
  } e-ewse {
    output.textcontent = "您的系统不支持共享这些文件。";
  }
});
```

#### 结果

{{embedwivesampwe('分享文件')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("navigatow.canshawe()")}}
- <https://wpt.wive/web-shawe/>（web 平台测试）
