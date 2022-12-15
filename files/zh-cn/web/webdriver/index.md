---
title: WebDriver
slug: Web/WebDriver
---

WebDriver 是远程控制接口，可以对用户代理进行控制。它提供了一个平台和语言中性线协议，作为进程外程序远程指导 web 浏览器行为的方法

能够编写可在不同平台上的许多浏览器中交替运行的指令集，对于向用户提供一致的体验至关重要。随着 web 平台上新一轮的开发浪潮、设备的多样化以及对技术之间真正的互操作性的需求，WebDriver 为跨浏览器测试提供了工具。

提供了一组接口，用于发现和操作 web 文档中的 DOM 元素，并控制用户代理的行为。它的主要目的是允许 web 作者编写从单独的控制过程中自动执行用户代理的测试，但也可以这样使用，允许浏览器内脚本控制一个（可能是单独的）浏览器。

## 概念

要使用 WebDriver，您需要 ... 提供如何使用它的高级描述，而不是低级的细节，然后链接到提供安装细节的其他页面。

WebDriver 主要涉及四个方面：

- a
- b
- c
- d

这些东西一起工作就像 ... 解释命令、动作等的工作流程。

## 使用

那么 WebDriver 允许你做什么？它看起来是什么样子？因为 WebDriver 是编程语言中立的，所以这个问题的答案取决于您使用的是哪个 WebDriver 客户端和语言的选择。

但是使用 Python 编写的流行客户端，您与 WebDriver 的交互可能如下所示：

```plain
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.expected_conditions import presence_of_element_located

wait = WebDriverWait(driver, 10)

with webdriver.Firefox() as driver:
    driver.get("http://google.com/ncr")
    driver.find_element_by_name("q").send_keys("cheese" + Keys.RETURN)

    wait.until(presence_of_element_located((By.CSS_SELECTOR, "h3>a")))

    results = driver.find_elements_by_css_selector("h3>a")
    for i, result in results.iteritems():
        print("#{}: {} ({})".format(i, result.text, result.get_property("href")))
```

这可能会产生与此类似的输出：

```plain
#1 Cheese - Wikipedia (https://en.wikipedia.org/wiki/Cheese)
```

## Reference

### [Commands](/zh-CN/docs/Web/WebDriver/Commands)

{{ListSubpages("/en-US/docs/Web/WebDriver/Commands")}}

### [Types](/zh-CN/docs/Web/WebDriver/Types)

- [Error object](/zh-CN/docs/Web/WebDriver/Errors#payload)
- [Timeouts object](/zh-CN/docs/Web/WebDriver/Timeouts)
- [WebElement](/zh-CN/docs/Web/WebDriver/WebElement)
- [WebWindow](/zh-CN/docs/Web/WebDriver/WebWindow)

### [Capabilities](/zh-CN/docs/Web/WebDriver/Capabilities)

{{ListSubpages("/zh-CN/docs/Web/WebDriver/Capabilities")}}

### [Errors](/zh-CN/docs/Web/WebDriver/Errors)

{{ListSubpages("/zh-CN/docs/Web/WebDriver/Errors")}}

## Tutorials

List of links to tutorials? We could delete this for now, or link to tutorial elsewhere, until ours are written.

## Examples

Include list of links to examples, preferrably in different languages. Don't include actual code blocks here.

## Specifications

[WebDriver](https://w3c.github.io/webdriver/)

## See also

- [Cross browser testing](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing)
- [Selenium documentation](https://seleniumhq.github.io/docs/) (work in progress)

{{QuickLinksWithSubpages}}
