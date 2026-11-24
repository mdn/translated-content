---
title: WebDriver classic のタイムアウト
short-title: タイムアウト
slug: Web/WebDriver/Reference/Classic/Timeouts
l10n:
  sourceCommit: fb6aa6056407ba69d96da0fe140a1ae2320f0fb2
---

各 [WebDriver](/ja/docs/Web/WebDriver) セッションには、[スクリプトの注入](#script)、[文書のナビゲーション](#pageload)、[要素の検索](#implicit) の動作を制御するさまざまなタイムアウト設定が関連付けられています。

[タイムアウトオブジェクト](#ペイロード)は、いくつかの異なる場面で使用されます。[キャパビリティ](/ja/docs/Web/WebDriver/Reference/Capabilities)を通じて[新しいセッションを作成](/ja/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)するときの設定として使用でき、セッション作成後には一致して有効となったキャパビリティの一部として返されます。また、[Set Timeouts](/ja/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) および [Get Timeouts](/ja/docs/Web/WebDriver/Reference/Classic/Commands/GetTimeouts) コマンドの入力と出力としても使用されます。

デフォルト値は[セッションの作成](/ja/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)時に上書きでき、セッションが閉じられるまで有効です。セッションの存続期間中に [Set Timeouts](/ja/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) を呼び出すと、デフォルト値が上書きされ、その後はセッションが存続する間、または [Set Timeouts](/ja/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) が再度呼び出されるまで適用されます。

## ペイロード

**タイムアウトオブジェクト**は、現在のセッションのタイムアウト値を記述する JSON オブジェクト、またはタイムアウトの設定時に入力として使用されるオブジェクトです。

- `implicit`
  - : 要素の検索時に[要素の検索方法](/ja/docs/Web/WebDriver/Reference/WebElement)を再試行する時間（ミリ秒単位）です。デフォルトは `0` で、この場合、検索方法は 1 回だけ実行されます。
- `pageLoad`
  - : 文書の読み込みが完了するまで待機する時間（ミリ秒単位）です。デフォルトでは WebDriver は 5 分（300,000 ms）待機します。
- `script`
  - : [スクリプト実行](/ja/docs/Web/WebDriver/Reference/Commands/ExecuteScript)または[非同期スクリプト実行](/ja/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript)で注入されたスクリプトは、ミリ秒単位で指定されたスクリプトのタイムアウト時間に達するまで実行されます。その後スクリプトは中断され、[スクリプトタイムアウトエラー](/ja/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)が返されます。デフォルトは 30 秒（30,000 ms）です。

このオブジェクトを [Set Timeouts](/ja/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) コマンドの入力として使用する場合、または[新しいセッションを作成](/ja/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)するときに[タイムアウトキャパビリティ](/ja/docs/Web/WebDriver/Reference/Capabilities)の一部として使用する場合、すべてのフィールドは任意です。つまり、タイムアウト時間の値を 0 個以上、個別にまたは一度に設定できます。

ドライバーから返される場合は、[タイムアウト取得](/ja/docs/Web/WebDriver/Reference/Classic/Commands/GetTimeouts)コマンドの返値、または[セッション作成後](/ja/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)に一致したキャパビリティの一部として返される場合のいずれでも、すべてのフィールドが含まれます。

## 例

### セッション作成時のタイムアウト設定

新しい WebDriver セッションを開始するときに[タイムアウトキャパビリティオブジェクト](/ja/docs/Web/WebDriver/Reference/Capabilities)を指定すると、セッションのデフォルトのタイムアウトを上書きできます。

```python
import urllib

from selenium import webdriver

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox(capabilities={"timeouts": {"implicit": 4500}})
session.get(inline("""
    <h1>Example</h1>

    <script>
      // 2.5 秒後に <h1> の下へ <p> を挿入:
      setTimeout(() => {
        const delayedElement = document.createElement("p");
        const h1 = document.querySelector("h1");
        document.body.insertAfter(delayedElement, h1);
      }, 2500);
    </script>
    """)

# DOM に #foo が現れるまで、ドライバーが 4.5 秒間待機:
delayed_element = session.find_element_by_tag_name("p")
```

### 実行時のタイムアウト設定と取得

タイムアウトは、Set Timeouts コマンドを使用して実行時に設定することもできます。設定したタイムアウトはセッションの現在のタイムアウトを上書きし、セッションが存続する間、または同じコマンドが再度呼び出されるまで適用されます。

```python
from selenium import webdriver

session = webdriver.Firefox()

session.set_timeouts({"implicit": 4.5})
print(session.get_timeouts)
```

Python では秒が一般的な時間単位であるため、出力は秒単位になります。

```json
{ "implicit": 4.5, "script": 300, "pageLoad": 30000 }
```
