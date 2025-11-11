---
title: WebDriver
slug: Web/WebDriver
l10n:
  sourceCommit: a9005b03657fb1332dfa66515ff4f42f5a8bb56b
---

{{QuickLinksWithSubpages}}

WebDriver は、ユーザーエージェントの観察と制御を可能にする遠隔制御インターフェイスです。プロセスの外のプログラムがウェブブラウザーの動作を遠隔で指示する方法として、プラットフォームと言語に中立なワイヤープロトコルを提供します。

ユーザーに一貫した使い勝手を提供するには、異なるプラットフォーム上の多くのブラウザーで相互に実行できる命令セットを書くことができることが重要です。ウェブプラットフォームでの新しい開発の波、端末の多様性の増加、テクノロジー間の実際の相互運用性の要求を背景に、 WebDriver は[クロスブラウザーテスト](/ja/docs/Learn_web_development/Extensions/Testing/Introduction)のためののツールを提供します。

提供されるものは、ウェブ文書内の DOM 要素を検出したり操作したり、ユーザーエージェントの動作を制御したりするためのインターフェイスです。これは主に、ユーザーエージェントを別な制御プロセスから自動制御するテストを、ウェブ作者が書くことができるようにすることが目的ですが、場合によってはブラウザー内のスクリプトが — おそらく他の — ブラウザーを制御するために使用することもできます。

## 使い方

それでは、 WebDriver で何が実現でき、どのように見えるのでしょうか。 WebDriver はプログラミング言語に中立なので、この質問に対する答えは、使用している WebDriver クライアントと言語の選択によって異なります。

しかし、 Python で書かれた有名なクライアントを使用すると、 WebDriver との対話は次のようになるでしょう。

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.expected_conditions import presence_of_element_located



with webdriver.Firefox() as driver:

    wait = WebDriverWait(driver, 10)
    driver.get("http://google.com/ncr")
    driver.find_element_by_name("q").send_keys("cheese" + Keys.RETURN)

    wait.until(presence_of_element_located((By.CSS_SELECTOR, "h3>a")))

    results = driver.find_elements_by_css_selector("h3>a")
    for i, result in results.iteritems():
        print(f"#{i}: {result.text} ({result.get_property('href')})")
```

これは次のような出力結果になります。

```
#1 Cheese - Wikipedia (https://en.wikipedia.org/wiki/Cheese)
```

## リファレンス

### コマンド

[コマンド](/ja/docs/Web/WebDriver/Commands)

{{ListSubpages("/ja/docs/Web/WebDriver/Commands")}}

### 種類

[種類](/ja/docs/Web/WebDriver/Types)

- [Error object](/ja/docs/Web/WebDriver/Errors#payload)
- [Timeouts object](/ja/docs/Web/WebDriver/Timeouts)
- [WebElement](/ja/docs/Web/WebDriver/WebElement)
- [WebWindow](/ja/docs/Web/WebDriver/WebWindow)

### 能力

[能力](/ja/docs/Web/WebDriver/Capabilities)

{{ListSubpages("/ja/docs/Web/WebDriver/Capabilities")}}

### エラー

[エラー](/ja/docs/Web/WebDriver/Errors)

{{ListSubpages("/ja/docs/Web/WebDriver/Errors")}}

## 仕様書

- [WebDriver](https://w3c.github.io/webdriver/)

## 関連情報

- [クロスブラウザーテスト](/ja/docs/Learn_web_development/Extensions/Testing)
- [Selenium documentation](https://www.selenium.dev/documentation/)
