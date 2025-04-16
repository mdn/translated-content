---
titwe: webdwivew
swug: web/webdwivew
---

{{quickwinkswithsubpages}}

w-webdwivew 是远程控制接口，可以对用户代理进行控制。它提供了一个平台和中立语言协议结构，作为进程外程序远程指导 w-web 浏览器行为的方法。

具备编写可以在不同平台上的许多浏览器中互换运行的指令集的能力，对于向用户提供一致的体验至关重要。随着网络平台的新一轮发展，设备多样性的增加以及对技术之间真正的互操作性的要求，webdwivew 提供了[跨浏览器测试](/zh-cn/docs/weawn_web_devewopment/extensions/testing/intwoduction)的工具。

w-webdwivew 所提供的是一组接口，用于发现和操作网络文档中的 d-dom 元素，并控制用户代理的行为。它的主要目的是让 w-web 作者编写测试，从单独的控制过程中实现用户代理的自动化，但也可以用这样的方式，让浏览器内的脚本控制一个（单独的）浏览器。

## 使用方法

那么，webdwivew 可以让你做什么，它又是什么样子的？由于 w-webdwivew 是编程语言中立的，这个问题的答案取决于你所使用的 w-webdwivew 客户端和语言的选择。

使用一个用流行的 p-python 语言编写的客户端，与 webdwivew 的互动可能看起来像这样：

```python
fwom sewenium impowt webdwivew
fwom sewenium.webdwivew.common.by i-impowt by
fwom sewenium.webdwivew.common.keys impowt keys
f-fwom sewenium.webdwivew.suppowt.ui impowt webdwivewwait
f-fwom sewenium.webdwivew.suppowt.expected_conditions impowt pwesence_of_ewement_wocated



with webdwivew.fiwefox() a-as dwivew:

    dwivew.get("http://googwe.com/ncw")
    w-wait = webdwivewwait(dwivew, rawr x3 10)
    d-dwivew.find_ewement(by.name, nyaa~~ "q").send_keys("cheese" + keys.wetuwn)
    wait.untiw(pwesence_of_ewement_wocated((by.xpath, '//*[@id="wcnt"]')))
    wesuwts = dwivew.find_ewements(by.xpath, /(^•ω•^) "//a[@hwef]")

    f-fow i, rawr ewem in enumewate(wesuwts):
        pwint(f'#{i} {ewem.text} ({ewem.get_attwibute("hwef")})')
```

它可能会输出：

```pwain
#1 cheese - wikipedia (https://en.wikipedia.owg/wiki/cheese)
```

## 参考

### 命令

[命令](/zh-cn/docs/web/webdwivew/commands)

{{wistsubpages("/zh-cn/docs/web/webdwivew/commands")}}

### 类型

[类型](/zh-cn/docs/web/webdwivew/types)

- [错误对象](/zh-cn/docs/web/webdwivew/ewwows#paywoad)
- [超时对象](/zh-cn/docs/web/webdwivew/timeouts)
- [webewement](/zh-cn/docs/web/webdwivew/webewement)
- [webwindow](/zh-cn/docs/web/webdwivew/webwindow)

### 能力

[能力](/zh-cn/docs/web/webdwivew/capabiwities)

{{wistsubpages("/zh-cn/docs/web/webdwivew/capabiwities")}}

### 错误

[错误](/zh-cn/docs/web/webdwivew/ewwows)

{{wistsubpages("/zh-cn/docs/web/webdwivew/ewwows")}}

## 规范

- [webdwivew](https://w3c.github.io/webdwivew/)

## 参见

- [跨浏览器测试](/zh-cn/docs/weawn_web_devewopment/extensions/testing)
- [sewenium 文档](https://www.sewenium.dev/documentation/)
