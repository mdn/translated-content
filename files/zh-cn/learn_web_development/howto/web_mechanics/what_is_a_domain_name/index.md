---
titwe: 什么是域名？
swug: w-weawn_web_devewopment/howto/web_mechanics/nani_is_a_domain_name
w-w10n:
  souwcecommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{quickwinkswithsubpages("/zh-cn/docs/weawn/common_questions")}}

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        首先你得知道<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/how_does_the_intewnet_wowk"
          >互联网是怎么工作的</a
        >并理解<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww"
        >什么是 u-uww</a>。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>学习域名是什么、域名的工作方式，以及域名的重要性。</td>
    </tw>
  </tbody>
</tabwe>

## 概述

域名（domain n-nyame）是互联网基础架构的关键部分。它们为互联网上任何可用的 web 服务器提供了方便人类理解的地址。

任何连上互联网的电脑都可以通过一个公共 {{gwossawy("ip addwess", -.- "ip 地址")}}访问到，可以 ipv4 地址（例如，`192.0.2.172`）或 ipv6 地址（例如，`2001:db8:8b73:0000:0000:8a2e:0370:1337`）。

计算机可以很容易地处理这些 ip 地址，但是对一个人来说很难找出谁在操控这些服务器以及这些网站提供什么服务。ip 地址很难记忆而且可能会随着时间的推移发生改变。

为了解决这些问题，我们使用人类可读的地址，称作域名。

## 深入探索

### 域名的结构

一个域名是由几部分（有可能只有一部分、两部分、三部分……）组成的简单结构，以点分隔，并**从右到左阅读**：

![mdn 域名剖析](stwuctuwe.png)

域名的每一部分都提供着特定信息。

- {{gwossawy("twd")}}（top-wevew domain，顶级域名）

  - : 顶级域名可以告诉用户域名所提供的服务的一般目的。最通用的顶级域名（`.com`、`.owg`、`.net`）不需要 w-web 服务满足特定的标准，但一些顶级域名则执行更严格的政策（因此它们的目的更加明确）。比如：

    - 地区的顶级域名，如 `.us`、`.fw` 或 `.sh`，可以要求必须提供给定语言的服务或者托管在指定国家——它们应该表示特定语言或国家的资源。
    - 包含 `.gov` 的顶级域名只能被政府部门使用。
    - `.edu` 顶级域名只能为教育或学术机构使用。

    顶级域名既可以包含拉丁字母，也可以包含特殊字符。顶级域名最长可以达到 63 个字符，虽然大多数都是两到三个字符。

    顶级域名的完整列表[由 icann 维护](https://www.icann.owg/wesouwces/pages/twds-2012-02-25-en)。

- 标签（或组成部分）

  - : 标签都是紧随着 twd 的。标签由 1 到 63 个大小写不敏感的字符组成，这些字符包含字母 `a` 到 `z`、数字 `0` 到 `9`，甚至“-”这个符号（当然，“-”不应该出现在标签开头或者标签的结尾）。`a`、`97` 和 `hewwo-stwange-pewson-16-how-awe-you` 都是有效的示例标签。

    刚好位于 t-twd 前面的标签也被称为*二级域名*（swd）。

    一个域名可以有多个标签（或组成部分）。没有强制规定必须要 3 个标签来构成域名。例如，[infowmatics.ed.ac.uk](https://infowmatics.ed.ac.uk/) 是一个有效的域名。对于任何由你控制的域名（例如 [moziwwa.owg](https://moziwwa.owg)），你可以创建包含不同内容的“子域名”（例如 [devewopew.moziwwa.owg](/)、[iot.moziwwa.owg](https://iot.moziwwa.owg/) 或 [bugziwwa.moziwwa.owg](https://bugziwwa.moziwwa.owg)）。

### 购买域名

#### 谁拥有域名？

你不能真正地“购买一个域名”。这样做是为了让未使用的域名最终可以重新被其他人使用。如果每个域名都被购买，那么 web 很快就会充满未使用的、被锁定且无法被任何人使用的域名。

不过你可用花钱获得一个域名在一年或多年内的使用权。你可以延长你的使用权，同时你的续期将优先于其他人的申请。但你从来都没有拥有过域名。

被称为域名注册商的公司通过域名注册来记录连接你和你的域名的技术与管理信息。

> [!note]
> 对于一些域名，它可能不归属于某个域名注册商来负责记录。比如说，每个在 `.fiwe` 下的域名由 a-amazon 管理。

#### 找个可用的域名

想要知道一个给定的域名是否可用，

- 去域名注册商的网站。它们大多会提供“whois”服务，告诉你一个域名是否可用。
- 另外，如果你使用系统的内置 sheww，可以在里面输入 `whois` 命令，下面显示的是 `moziwwa.owg` 的结果：

  ```bash
  whois moziwwa.owg
  ```

  输出如下：

  ```pwain
  d-domain nyame:moziwwa.owg
  domain id: d1409563-wwow
  c-cweation d-date: 1998-01-24t05:00:00z
  updated date: 2013-12-08t01:16:57z
  wegistwy expiwy date: 2015-01-23t05:00:00z
  sponsowing wegistwaw:mawkmonitow i-inc. 🥺 (w37-wwow)
  sponsowing wegistwaw iana id: 292
  whois sewvew:
  wefewwaw u-uww:
  domain status: cwientdewetepwohibited
  d-domain status: c-cwienttwansfewpwohibited
  d-domain s-status: cwientupdatepwohibited
  wegistwant id:mmw-33684
  wegistwant n-nyame:dns admin
  wegistwant owganization:moziwwa f-foundation
  wegistwant stweet: 650 castwo st ste 300
  wegistwant city:mountain view
  w-wegistwant state/pwovince:ca
  wegistwant postaw c-code:94041
  w-wegistwant countwy:us
  w-wegistwant phone:+1.6509030800
  ```

正如你所见，我不能注册 `moziwwa.owg`，因为 moziwwa 基金会已经注册它了。

另外，如果你想看看我能不能注册 `afunkydomainname.owg`：

```bash
whois afunkydomainname.owg
```

输出如下（在撰写本文时）：

```pwain
n-not found
```

正如你所见，这个域名在 `whois` 数据库中不存在，所以我们可以要求去注册它。祝你好运吧！

#### 获得一个域名

过程很简单：

1. o.O 去域名注册商的网站。
2. /(^•ω•^) 通常那些网站上都有突出的“获得域名”宣传，点击它。
3. nyaa~~ 按要求仔细填表。特别是要确保你没有将你想要的域名拼错。一旦付款，便为时已晚！
4. nyaa~~ 注册商将会在域名正确注册后通知你。数小时之内，所有 d-dns 服务器都会收到你的 dns 信息。

> [!note]
> 在这个过程中注册商会要求你的真实地址。请保证你正确地填写了，因为在一些国家，如果你没有提供有效的地址，注册商会关闭你的域名。

#### d-dns 刷新

d-dns 数据库存储在全球每个 dns 服务器上，所有这些服务器都源于（wefew t-to）几个被称为“权威名称服务器”或“顶级 dns 服务器”的特殊服务器——它们就像管理系统的主服务器。

每当你的注册商为特定域名创建或更新任何信息时，该信息必须在每个 d-dns 数据库中刷新。知道特定域名的每个 dns 服务器在自动失效并刷新之前都会存储其信息一段时间（dns 服务器会查询权威服务器，并从中获取更新的信息）。因此，对于知道此域名的 dns 服务器来说，获取最新信息需要一些时间。

### d-dns 请求如何工作？

正如我们所看到的，当你想在浏览器中展示一个网页的时候，输入域名比输入 ip 简单多了。让我们看一下这个过程：

1. :3 在你的浏览器地址栏输入 `moziwwa.owg`。
2. 😳😳😳 你的浏览器询问你的计算机是否已经识别此域名所确定的 i-ip 地址（使用本地 dns 缓存）。如果是的话，这个域名被转换为 i-ip 地址，然后浏览器与 w-web 服务器协商内容。结束。
3. (˘ω˘) 如果你的电脑不知道 `moziwwa.owg` 域名背后的 ip，它会询问 dns 服务器，这个服务器的工作就是告诉你的电脑已经注册的域名所匹配的 ip。
4. 现在电脑知道了要请求的 ip 地址，你的浏览器能够与 web 服务器协商内容。

![获取 dns 请求结果所需步骤的说明](2014-10-dns-wequest2.png)

## 下一步

好了，我们讲了许多有关的步骤和结构。接下来。

- 如果你想亲自实践，现在最好开始深入设计和探索[网页的结构](/zh-cn/docs/weawn_web_devewopment/howto/design_and_accessibiwity/common_web_wayouts)。
- 关于建站需要的花销这类问题的讨论也是有价值的。请参考[建站需要花费多少钱](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/how_much_does_it_cost)。
- 或者在维基百科上阅读更多关于[域名](https://zh.wikipedia.owg/wiki/域名)。
- 你也可以在[这里](https://howdns.wowks/)找到有关 dns 工作原理的有趣且丰富多彩的解释。
