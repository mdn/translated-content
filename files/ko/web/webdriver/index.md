---
title: WebDriver
slug: Web/WebDriver
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

WebDriver는 사용자 에이전트를 탐색하고 제어하는 원격 제어 인터페이스입니다. 이 인터페이스는 플랫폼과 언어에 구애받지 않는 프로토콜을 제공하여 외부 프로그램이 원격으로 웹 브라우저의 동작을 지시할 수 있게 합니다.

다양한 플랫폼의 여러 브라우저에서 동일하게 실행될 수 있는 명령어 세트를 작성하는 능력은 사용자에게 일관된 경험을 제공하는 데 매우 중요합니다. 웹 플랫폼의 새로운 발전과 함께, 기기의 다양성 증가 및 기술 간의 실제 상호 운용성에 대한 요구가 높아지면서 WebDriver는 [크로스 브라우저 테스트](/ko/docs/Learn_web_development/Extensions/Testing/Introduction)를 위한 도구를 제공합니다.

WebDriver는 웹 문서 내의 DOM 요소를 찾고 조작하며 사용자 에이전트의 동작을 제어하기 위한 인터페이스 집합입니다. 주로 웹 개발자가 별도의 제어 프로세스를 통해 사용자 에이전트를 자동화하는 테스트를 작성할 수 있도록 고안되었지만, 브라우저 내 스크립트가 별도의 브라우저를 제어하는 방식으로도 사용될 수 있습니다.

## 사용법

그렇다면 WebDriver로 무엇을 할 수 있고, 어떤 모습일까요? WebDriver는 프로그래밍 언어에 구애받지 않기 때문에, 이 질문에 대한 답은 어떤 WebDriver 클라이언트를 사용하느냐와 선택한 언어에 따라 달라집니다.

하지만 Python으로 작성된 널리 사용되는 클라이언트를 사용한다면, WebDriver와의 상호작용은 다음과 같은 모습일 수 있습니다.

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.expected_conditions import presence_of_element_located

with webdriver.Firefox() as driver:

    driver.get("https://google.com/ncr")
    wait = WebDriverWait(driver, 10)
    driver.find_element(By.NAME, "q").send_keys(f"cheese{Keys.RETURN}")
    wait.until(presence_of_element_located((By.XPATH, '//*[@id="rcnt"]')))
    results = driver.find_elements(By.XPATH, "//a[@href]")

    for i, elem in enumerate(results):
        print(f'#{i} {elem.text} ({elem.get_attribute("href")})')
```

이는 다음과 유사한 출력을 생성할 수 있습니다.

```plain
#1 Cheese - Wikipedia (https://en.wikipedia.org/wiki/Cheese)
```

## 참조

[WebDriver 레퍼런스](/ko/docs/Web/WebDriver/Reference)에서는 사용 가능한 명령(Command), 기능(Capabilities), 오류 등을 포함하여 WebDriver API에 대한 자세한 정보를 제공합니다.

- [타임아웃](/ko/docs/Web/WebDriver/Reference/Timeouts)

### [명령](/ko/docs/Web/WebDriver/Reference/Commands)

{{ListSubpages("/ko/docs/Web/WebDriver/Reference/Commands")}}

### [기능](/ko/docs/Web/WebDriver/Reference/Capabilities)

{{ListSubpages("/ko/docs/Web/WebDriver/Reference/Capabilities")}}

### [오류](/ko/docs/Web/WebDriver/Reference/Errors)

{{ListSubpages("/ko/docs/Web/WebDriver/Reference/Errors")}}

## 명세서

- [WebDriver](https://w3c.github.io/webdriver/)

## 같이 보기

- [테스팅](/ko/docs/Learn_web_development/Extensions/Testing)
- [Selenium 문서](https://www.selenium.dev/documentation/)
