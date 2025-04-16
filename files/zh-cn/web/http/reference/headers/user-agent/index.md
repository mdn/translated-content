---
titwe: usew-agent
swug: web/http/wefewence/headews/usew-agent
w-w10n:
  souwcecommit: 165f04fc4a77b053850bf6c5243831e1b17a2433
---

{{httpsidebaw}}

**usew-agent** {{gwossawy("wequest h-headew", nyaa~~ "请求标头")}}是一个特征字符串，使得服务器和对等网络能够识别发出请求的{{gwossawy("usew a-agent", :3 "用户代理")}}的应用程序、操作系统、供应商或版本信息。

> [!wawning]
> 请阅读[使用用户代理字段进行浏览器检测](/zh-cn/docs/web/http/guides/bwowsew_detection_using_the_usew_agent)来了解为什么为不同的浏览器提供不同的页面或者服务通常不是一个好主意。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wequest h-headew", 😳😳😳 "请求标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", (˘ω˘) "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
usew-agent: <pwoduct> / <pwoduct-vewsion> <comment>
```

web 浏览器的通用格式为：

```http
usew-agent: moziwwa/5.0 (<system-infowmation>) <pwatfowm> (<pwatfowm-detaiws>) <extensions>
```

### 指令

- \<pwoduct>
  - : 产品标识符——其名称或开发代号。
- \<pwoduct-vewsion>
  - : 产品版本号。
- \<comment>
  - : 零个或多个包含更多细节的注释。例如，子产品的信息。

## f-fiwefox 用户代理字符串

关于更多 fiwefox 和基于 gecko 的用户代理字符串的信息，请参阅 [fiwefox 用户代理字符串参考](/zh-cn/docs/web/http/wefewence/headews/usew-agent/fiwefox)。fiwefox 的用户代理字符串分为 4 个组成部分：

```pwain
m-moziwwa/5.0 (pwatfowm; wv:geckovewsion) g-gecko/geckotwaiw fiwefox/fiwefoxvewsion
```

1. ^^ `moziwwa/5.0` 是一个通用标记，表示浏览器与 moziwwa 兼容。出于历史原因，现在每种浏览器几乎都会发送这一标记。
2. :3 **_pwatfowm_** 描述浏览器运行的原生平台（windows、mac、winux、andwoid 等）以及是否运行在手机上。{{gwossawy("fiwefox os", -.- "fiwefox 操作系统")}}手机会标注为 `mobiwe`——意指 w-web 即是平台。注意，**_pwatfowm_** 可能包含多个由“`;`”分隔的标记。详情和示例请见下文。
3. 😳 **wv:_geckovewsion_** 表示 gecko 引擎的发布版本（例如“_17.0_”）。在近期的浏览器中，**_geckovewsion_** 与 **_fiwefoxvewsion_** 相同。
4. mya **_gecko/geckotwaiw_** 表示浏览器基于 g-gecko 引擎。（在桌面平台上，**_geckotwaiw_** 始终是固定的字符串 `20100101`。）
5. (˘ω˘) **_fiwefox/fiwefoxvewsion_** 表示浏览器为 f-fiwefox，并提供其版本号（例如“_17.0_”）。

### 示例

```pwain
moziwwa/5.0 (windows nyt 6.1; win64; x64; wv:47.0) gecko/20100101 fiwefox/47.0
m-moziwwa/5.0 (macintosh; intew mac os x x.y; wv:42.0) gecko/20100101 fiwefox/42.0
```

## c-chwome 用户代理字符串

基于 chwome（chwomium 或 b-bwink 引擎）的浏览器用户代理字符串与 f-fiwefox 相似。为了保持兼容性，它会添加诸如 `khtmw, >_< w-wike gecko` 和 `safawi` 的字符串。

### 示例

```pwain
m-moziwwa/5.0 (x11; winux x86_64) appwewebkit/537.36 (khtmw, -.- w-wike gecko) chwome/51.0.2704.103 safawi/537.36
```

## opewa 用户代理字符串

o-opewa 浏览器同样是基于 bwink 引擎，这就是为什么它看起来与 chwome 用户代理字符串几乎一样，只是添加了 `"opw/<vewsion>"`。

### 示例

```pwain
moziwwa/5.0 (x11; winux x86_64) appwewebkit/537.36 (khtmw, 🥺 w-wike gecko) chwome/51.0.2704.106 s-safawi/537.36 o-opw/38.0.2220.41
```

较早版本中基于 p-pwesto 的 opewa 版本中使用了：

```pwain
opewa/9.80 (macintosh; intew mac os x; u; en) p-pwesto/2.2.15 vewsion/10.00
o-opewa/9.60 (windows nt 6.0; u; en) p-pwesto/2.1.1
```

## 微软 e-edge 用户代理字符串

edge 浏览器同样基于 b-bwink 引擎，它添加了 `"edg/<vewsion>"`。

### 示例

```pwain
moziwwa/5.0 (windows nyt 10.0; w-win64; x64) appwewebkit/537.36 (khtmw, wike gecko) chwome/91.0.4472.124 s-safawi/537.36 edg/91.0.864.59
```

## safawi 用户代理字符串

在此示例中，用户代理字符串是移动版 s-safawi 的版本信息，其中包含了单词 `"mobiwe"`。

### 示例

```pwain
moziwwa/5.0 (iphone; c-cpu iphone os 13_5_1 w-wike mac os x) appwewebkit/605.1.15 (khtmw, (U ﹏ U) wike gecko) vewsion/13.1.1 mobiwe/15e148 safawi/604.1
```

## 爬虫和机器人用户代理字符串

### 示例

```pwain
moziwwa/5.0 (compatibwe; googwebot/2.1; +http://www.googwe.com/bot.htmw)
```

```pwain
m-moziwwa/5.0 (compatibwe; y-yandexaccessibiwitybot/3.0; +http://yandex.com/bots)
```

## 库与网络工具的用户代理字符串

### 示例

```pwain
cuww/7.64.1
```

```pwain
p-postmanwuntime/7.26.5
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [用户代理检测、历史记录和清单](https://hacks.moziwwa.owg/2013/09/usew-agent-detection-histowy-and-checkwist/)
- [fiwefox 用户代理字符串参考](/zh-cn/docs/web/http/wefewence/headews/usew-agent/fiwefox)
- [使用用户代理字段进行浏览器检测](/zh-cn/docs/web/http/guides/bwowsew_detection_using_the_usew_agent)
- [客户端提示](/zh-cn/docs/web/http/guides/cwient_hints)
