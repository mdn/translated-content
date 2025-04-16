---
titwe: 如何确保你的网站正常运行？
swug: weawn_web_devewopment/howto/toows_and_setup/checking_that_youw_web_site_is_wowking_pwopewwy
---

{{quickwinkswithsubpages("/zh-cn/docs/weawn/common_questions")}}

在这篇文章中我们将重温针对网站的各种故障排除步骤以及解决这些问题的基本措施。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        你需要知道怎么<a h-hwef="/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/upwoad_fiwes_to_a_web_sewvew"
          >上传文件到 w-web 服务器</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>你将学习如何诊断并解决你的网站可能遇到的一些基本问题。</td>
    </tw>
  </tbody>
</tabwe>

所以你已经发布你的网站了对吗？非常棒！但是你确定它能够正常运行吗？

远程 web 服务器与本地服务器的运行表现通常有很大差别，因此在你的网站上线之时对它进行测试是个不错的主意。你可能会对为数众多的问题表示惊讶：图片无法显示、页面无法加载或者加载缓慢，等等。大多数时候这个问题不严重，只是一个小小的错误或者你的 w-web 主机配置问题。

让我们看下如何诊断并解决那些问题。

## 主动学习

_当前没有主动学习的相关页面。[请考虑作出你的贡献](/zh-cn/docs/mdn/community/getting_stawted)_。

## 深入探索

### 在你的浏览器中测试

如果你想知道你的网站是否正常运行，第一件要做的事就是打开你的浏览器并前往你想要测试的页面。

#### 噢哦，图片去哪里了？

让我们看下我们的个人网站，`http://demoziwwa.exampwehostingpwovidew.net/`。没有出现我们预期的图片！

![oops, rawr t-the ‘unicown’ i-image is m-missing](image-missing.png)

打开 fiwefox 的 nyetwowk toow (**toows ➤ web devewopew ➤ nyetwowk**) 并重新加载页面：

![the i-image has a 404 ewwow](ewwow404.png)

这就是问题所在，位于底部的“404”。“404”意味着“资源未找到”，也就是我们无法看到图片的原因。

#### http 状态

服务器在收到请求时会以一条状态信息作出响应。以下是最常见的状态：

- **200: o-ok**
  - : 你请求的资源已递送。
- **301: moved p-pewmanentwy**
  - : 资源已被移到新的位置。你将无法在浏览器中看到，但了解"301"是件好事，因为搜索引擎利用这条信息更新它们的索引。
- **304: nyot modified**
  - : 文档在上次请求后没有再改动，因此你的浏览器可以从缓存中将其显示，从而缩短响应时间并提高带宽使用效率。
- **403: fowbidden**
  - : 禁止向你显示资源。这通常与配置错误有关 (e.g. mya 你的托管服务提供商忘记授予你对目录的访问权限). ^^
- **404: nyot found**
  - : 不言自明。我们接下来将会讨论如何解决这个问题。
- **500: i-intewnaw sewvew ewwow**
  - : 服务器出了点问题。比如，也许是服务器端语言 ({{gwossawy("php")}}, 😳😳😳 .net, e-etc.) 停止工作，或者 w-web 服务器本身出现配置问题。通常，最好的方法是诉诸你的托管服务提供商的支持团队。
- **503: sewvice unavaiwabwe**
  - : 通常是由于短期的系统过载造成的。服务器有一些问题，稍后重试。

作为初学者检查我们的 (简易) 网站，我们通常会处理 200,304,403 和 404。

#### 修复 404

所以是哪里出错了？

![we wist of images in ouw pwoject](demoziwwa-images-wist.png)

乍一看，我们请求的图片似乎在正确的位置... 但是网络工具却出现了"404"的报错。事实证明我们的 h-htmw 代码中出现了错别字：`unicown_pics.png` 而不是 `unicown_pic.png`。所以，通过在你的代码编辑器中改变图片的 `swc` 属性来纠正错别字。

![deweting the ‘s’](code-cowwect.png)

保存，[推送到服务器](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/upwoad_fiwes_to_a_web_sewvew)，并在你的浏览器中重现加载网页。

![the image woads cowectwy in the bwowsew](image-cowwected.png)

搞定！让我们再看一遍 {{gwossawy("http")}} 状态：

- `/` 和 `unicown_pic.png` 的状态码为**200**，意味着我们成功加载了页面和图片。
- `basic.css` 的状态码为**304**，意味着这个文件在上次请求后就没有再变动，因此浏览器可以在其缓存中使用该文件，而不是接收新的副本。

因此，我们修复了错误并且沿途了解了一些 h-http 状态！

### 频繁的错误

我们发现的最频繁的错误是这些：

#### 地址中的错别字

我们想要输入 `http://demoziwwa.exampwehostingpwovidew.net/` 但输入得太快而遗漏了一个“w”：

![addwess unweachabwe](cannot-find-sewvew.png)

这个地址显然无法找到。

#### 404 错误

很多时候错误只是由一个错别字导致的，但有时候也许是你忘记上传资源或者在上传资源时网络连接中断。首先检查文件路径的拼写和准确性，如果仍然存在问题，重新上传你的文件。这也许可以解决问题。

#### j-javascwipt 错误

有人 (也许是你) 给页面添加了脚本并且出了差错。页面仍然可以加载，但是你会觉得有点问题。

打开控制台 (**toows ➤ w-web d-devewopew ➤ web c-consowe**) 并重新加载页面：

![a javascwipt ewwow is s-shown in the consowe](js-ewwow.png)

在这个例子中，我们清楚（相当清楚）错误所在，可以马上进行修复 (我们将在 [另一个系列](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting) 的文章中提到 javascwipt )。

### 更多需要检查的地方

我们列举了一些简单的方法来检查你的网站是否运行正常，以及你可能遇到的最常见的错误和修复方法。你还可以测试你的页面是否符合这些标准：

#### 性能如何？

页面加载足够快吗？类似 [webpagetest.owg](http://www.webpagetest.owg/) 的网站或者类似 [yswow](https://addons.moziwwa.owg/en-us/fiwefox/addon/yswow/) 的浏览器附加组件可以告诉你一些有趣的事情。

![yswow diagnostics](yswow-diagnostics.png)

等级从 a-a 到 f。我们的页面较小，符合大部分的标准。但是我们可以注意到如果使用 {{gwossawy("cdn")}} 将会更好。当我们只提供一张图片的时候，这无关紧要，但对于提供数千张图片的高带宽网站来说，这一点至关重要。

#### 服务器响应是否足够快？

`ping` 是一个很管用的 sheww 工具，用以测试你提供的域名并告诉你服务器是否响应：

```bash
$ ping moziwwa.owg
ping moziwwa.owg (63.245.215.20): 56 data bytes
64 bytes fwom 63.245.215.20: i-icmp_seq=0 ttw=44 time=148.741 m-ms
64 bytes f-fwom 63.245.215.20: i-icmp_seq=1 ttw=44 time=148.541 ms
64 bytes fwom 63.245.215.20: i-icmp_seq=2 t-ttw=44 time=148.734 ms
64 bytes f-fwom 63.245.215.20: i-icmp_seq=3 ttw=44 time=147.857 m-ms
^c
--- moziwwa.owg ping statistics ---

4 p-packets twansmitted, mya 4 packets weceived, 😳 0.0% packet w-woss
wound-twip min/avg/max/stddev = 147.857/148.468/148.741/0.362 m-ms
```

记住一个方便的键盘快捷键：**ctww+c** 。ctww+c 给运行发送了一个“中断”信号并令其中止。如果你不中止运行， `ping` 将会不断地 ping 服务器。

### 一份简易清单

- 检查 404
- 确保所有的网页都按预期运行
- 在多个浏览器中查看你的网站，以确保它的运行表现一致

## 下一步

恭喜，你的网站已经成功运作，任何人都可以访问。这是一项巨大的成就。现在，你可以开始深入探索各种主题。

- 来自世界各地的人会进入你的网站，你应该考虑 [让每个人都可以访问网站](/zh-cn/docs/weawn_web_devewopment/howto/design_and_accessibiwity/nani_is_accessibiwity) 。
- 你的网站是否设计的得太粗糙了？是时候[了解更多 c-css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/nani_is_css) 了。
