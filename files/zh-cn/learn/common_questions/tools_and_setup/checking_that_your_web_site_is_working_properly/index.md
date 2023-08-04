---
title: 如何确保你的网站正常运行？
slug: Learn/Common_questions/Tools_and_setup/Checking_that_your_web_site_is_working_properly
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

在这篇文章中我们将重温针对网站的各种故障排除步骤以及解决这些问题的基本措施。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        你需要知道怎么<a href="/zh-CN/docs/Learn/Upload_files_to_a_web_server"
          >上传文件到 web 服务器</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>你将学习如何诊断并解决你的网站可能遇到的一些基本问题。</td>
    </tr>
  </tbody>
</table>

所以你已经发布你的网站了对吗？非常棒！但是你确定它能够正常运行吗？

远程 web 服务器与本地服务器的运行表现通常有很大差别，因此在你的网站上线之时对它进行测试是个不错的主意。你可能会对为数众多的问题表示惊讶：图片无法显示、页面无法加载或者加载缓慢，等等。大多数时候这个问题不严重，只是一个小小的错误或者你的 web 主机配置问题。

让我们看下如何诊断并解决那些问题。

## 主动学习

_当前没有主动学习的相关页面。[请考虑作出你的贡献](/zh-CN/docs/MDN/Community/Contributing/Getting_started)_。

## 深入探索

### 在你的浏览器中测试

如果你想知道你的网站是否正常运行，第一件要做的事就是打开你的浏览器并前往你想要测试的页面。

#### 噢哦，图片去哪里了？

让我们看下我们的个人网站，`http://demozilla.examplehostingprovider.net/`。没有出现我们预期的图片！

![Oops, the ‘unicorn’ image is missing](image-missing.png)

打开 Firefox 的 Network tool (**Tools ➤ Web Developer ➤ Network**) 并重新加载页面：

![The image has a 404 error](error404.png)

这就是问题所在，位于底部的“404”。“404”意味着“资源未找到”，也就是我们无法看到图片的原因。

#### HTTP 状态

服务器在收到请求时会以一条状态信息作出响应。以下是最常见的状态：

- **200: OK**
  - : 你请求的资源已递送。
- **301: Moved permanently**
  - : 资源已被移到新的位置。你将无法在浏览器中看到，但了解"301"是件好事，因为搜索引擎利用这条信息更新它们的索引。
- **304: Not modified**
  - : 文档在上次请求后没有再改动，因此你的浏览器可以从缓存中将其显示，从而缩短响应时间并提高带宽使用效率。
- **403: Forbidden**
  - : 禁止向你显示资源。这通常与配置错误有关 (e.g. 你的托管服务提供商忘记授予你对目录的访问权限).
- **404: Not found**
  - : 不言自明。我们接下来将会讨论如何解决这个问题。
- **500: Internal server error**
  - : 服务器出了点问题。比如，也许是服务器端语言 ({{Glossary("PHP")}}, .Net, etc.) 停止工作，或者 web 服务器本身出现配置问题。通常，最好的方法是诉诸你的托管服务提供商的支持团队。
- **503: Service unavailable**
  - : 通常是由于短期的系统过载造成的。服务器有一些问题，稍后重试。

作为初学者检查我们的 (简易) 网站，我们通常会处理 200,304,403 和 404。

#### 修复 404

所以是哪里出错了？

![Le list of images in our project](demozilla-images-list.png)

乍一看，我们请求的图片似乎在正确的位置... 但是网络工具却出现了"404"的报错。事实证明我们的 HTML 代码中出现了错别字：`unicorn_pics.png` 而不是 `unicorn_pic.png`。所以，通过在你的代码编辑器中改变图片的 `src` 属性来纠正错别字。

![Deleting the ‘s’](code-correct.png)

保存，[推送到服务器](/zh-CN/docs/Learn/Upload_files_to_a_web_server)，并在你的浏览器中重现加载网页。

![The image loads corectly in the browser](image-corrected.png)

搞定！让我们再看一遍 {{Glossary("HTTP")}} 状态：

- `/` 和 `unicorn_pic.png` 的状态码为**200**，意味着我们成功加载了页面和图片。
- `basic.css` 的状态码为**304**，意味着这个文件在上次请求后就没有再变动，因此浏览器可以在其缓存中使用该文件，而不是接收新的副本。

因此，我们修复了错误并且沿途了解了一些 HTTP 状态！

### 频繁的错误

我们发现的最频繁的错误是这些：

#### 地址中的错别字

我们想要输入 `http://demozilla.examplehostingprovider.net/` 但输入得太快而遗漏了一个“l”：

![Address unreachable](cannot-find-server.png)

这个地址显然无法找到。

#### 404 错误

很多时候错误只是由一个错别字导致的，但有时候也许是你忘记上传资源或者在上传资源时网络连接中断。首先检查文件路径的拼写和准确性，如果仍然存在问题，重新上传你的文件。这也许可以解决问题。

#### JavaScript 错误

有人 (也许是你) 给页面添加了脚本并且出了差错。页面仍然可以加载，但是你会觉得有点问题。

打开控制台 (**Tools ➤ Web developer ➤ Web Console**) 并重新加载页面：

![A Javascript error is shown in the Console](js-error.png)

在这个例子中，我们清楚（相当清楚）错误所在，可以马上进行修复 (我们将在 [另一个系列](/zh-CN/docs/Learn/JavaScript) 的文章中提到 JavaScript )。

### 更多需要检查的地方

我们列举了一些简单的方法来检查你的网站是否运行正常，以及你可能遇到的最常见的错误和修复方法。你还可以测试你的页面是否符合这些标准：

#### 性能如何？

页面加载足够快吗？类似 [WebPagetest.org](http://www.webpagetest.org/) 的网站或者类似 [YSlow](https://addons.mozilla.org/en-US/firefox/addon/yslow/) 的浏览器附加组件可以告诉你一些有趣的事情。

![Yslow diagnostics](yslow-diagnostics.png)

等级从 A 到 F。我们的页面较小，符合大部分的标准。但是我们可以注意到如果使用 {{Glossary("CDN")}} 将会更好。当我们只提供一张图片的时候，这无关紧要，但对于提供数千张图片的高带宽网站来说，这一点至关重要。

#### 服务器响应是否足够快？

`ping` 是一个很管用的 shell 工具，用以测试你提供的域名并告诉你服务器是否响应：

```bash
$ ping mozilla.org
PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=44 time=148.741 ms
64 bytes from 63.245.215.20: icmp_seq=1 ttl=44 time=148.541 ms
64 bytes from 63.245.215.20: icmp_seq=2 ttl=44 time=148.734 ms
64 bytes from 63.245.215.20: icmp_seq=3 ttl=44 time=147.857 ms
^C
--- mozilla.org ping statistics ---

4 packets transmitted, 4 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 147.857/148.468/148.741/0.362 ms
```

记住一个方便的键盘快捷键：**Ctrl+C** 。Ctrl+C 给运行发送了一个“中断”信号并令其中止。如果你不中止运行， `ping` 将会不断地 ping 服务器。

### 一份简易清单

- 检查 404
- 确保所有的网页都按预期运行
- 在多个浏览器中查看你的网站，以确保它的运行表现一致

## 下一步

恭喜，你的网站已经成功运作，任何人都可以访问。这是一项巨大的成就。现在，你可以开始深入探索各种主题。

- 来自世界各地的人会进入你的网站，你应该考虑 [让每个人都可以访问网站](/zh-CN/docs/Learn/What_is_accessibility) 。
- 你的网站是否设计的得太粗糙了？是时候[了解更多 CSS](/zh-CN/docs/Learn/CSS/Using_CSS_in_a_web_page) 了。
