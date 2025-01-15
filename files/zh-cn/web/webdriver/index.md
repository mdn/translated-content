---
title: WebDriver
slug: Web/WebDriver
---

{{QuickLinksWithSubpages}}

WebDriver 是远程控制接口，可以对用户代理进行控制。它提供了一个平台和中立语言协议结构，作为进程外程序远程指导 web 浏览器行为的方法。

具备编写可以在不同平台上的许多浏览器中互换运行的指令集的能力，对于向用户提供一致的体验至关重要。随着网络平台的新一轮发展，设备多样性的增加以及对技术之间真正的互操作性的要求，WebDriver 提供了[跨浏览器测试](/zh-CN/docs/Learn_web_development/Extensions/Testing/Introduction)的工具。

WebDriver 所提供的是一组接口，用于发现和操作网络文档中的 DOM 元素，并控制用户代理的行为。它的主要目的是让 web 作者编写测试，从单独的控制过程中实现用户代理的自动化，但也可以用这样的方式，让浏览器内的脚本控制一个（单独的）浏览器。

## 使用方法

那么，WebDriver 可以让你做什么，它又是什么样子的？由于 WebDriver 是编程语言中立的，这个问题的答案取决于你所使用的 WebDriver 客户端和语言的选择。

使用一个用流行的 Python 语言编写的客户端，与 WebDriver 的互动可能看起来像这样：

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.expected_conditions import presence_of_element_located



with webdriver.Firefox() as driver:

    driver.get("http://google.com/ncr")
    wait = WebDriverWait(driver, 10)
    driver.find_element(By.NAME, "q").send_keys("cheese" + Keys.RETURN)
    wait.until(presence_of_element_located((By.XPATH, '//*[@id="rcnt"]')))
    results = driver.find_elements(By.XPATH, "//a[@href]")

    for i, elem in enumerate(results):
        print(f'#{i} {elem.text} ({elem.get_attribute("href")})')
```

它可能会输出：

```plain
#1 Cheese - Wikipedia (https://en.wikipedia.org/wiki/Cheese)
```

## 参考

### 命令

[命令](/zh-CN/docs/Web/WebDriver/Commands)

{{ListSubpages("/zh-CN/docs/Web/WebDriver/Commands")}}

### 类型

[类型](/zh-CN/docs/Web/WebDriver/Types)

- [错误对象](/zh-CN/docs/Web/WebDriver/Errors#payload)
- [超时对象](/zh-CN/docs/Web/WebDriver/Timeouts)
- [WebElement](/zh-CN/docs/Web/WebDriver/WebElement)
- [WebWindow](/zh-CN/docs/Web/WebDriver/WebWindow)

### 能力

[能力](/zh-CN/docs/Web/WebDriver/Capabilities)

{{ListSubpages("/zh-CN/docs/Web/WebDriver/Capabilities")}}

### 错误

[错误](/zh-CN/docs/Web/WebDriver/Errors)

{{ListSubpages("/zh-CN/docs/Web/WebDriver/Errors")}}

## 规范

- [WebDriver](https://w3c.github.io/webdriver/)

## 参见

- [跨浏览器测试](/zh-CN/docs/Learn_web_development/Extensions/Testing)
- [Selenium 文档](https://www.selenium.dev/documentation/)
