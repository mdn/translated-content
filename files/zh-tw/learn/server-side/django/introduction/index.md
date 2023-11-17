---
title: Django 介紹
slug: Learn/Server-side/Django/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}

在這第一篇 Django 文章中，我們將回答「什麼是 Django」這個問題，並概述這個網絡框架有什麼特性。我們將描述主要功能，包括一些高級功能，但我們並不會在本單元中詳細介紹。我們還會展示一些 Django 應用程序的主要構建模塊（儘管此時你還沒有要測試的開發環境）。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先備知識:</th>
      <td>
        基本的電腦知識.對<a href="/zh-TW/docs/Learn/Server-side/First_steps"
          >服務器端網站編程的一般了解</a
        >
        ,特別是<a
          href="/zh-TW/docs/Learn/Server-side/First_steps/Client-Server_overview"
          >網站中客戶端-服務器交互的機制</a
        >
        .
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        了解Django是什麼，它提供了哪些功能，以及Django應用程序的主要構建塊。
      </td>
    </tr>
  </tbody>
</table>

## 什麼是 Django?

Django 是一個高級的 Python 網路框架，可以快速開發安全和可維護的網站。由經驗豐富的開發者構建，Django 負責處理網站開發中麻煩的部分，因此你可以專注於編寫應用程序，而無需重新開發。

它是免費和開源的，有活躍繁榮的社區、豐富的文檔、以及很多免費和付費的解決方案。

Django 可以使你的應用具有以下優點:

- 完備
  - : Django 遵循 「功能完備」 的理念，提供開發人員可能想要 「開箱即用」 的幾乎所有功能。因為你需要的一切，都是一個 」產品「 的一部分，它們都可以無縫結合在一起，遵循一致性設計原則，並且具有廣泛、和[最新的文檔](https://docs.djangoproject.com/en/2.0/)。
- 通用

  - : Django 可以（並已經）用於構建幾乎任何類型的網站—從內容管理系統和維基，到社交網絡和新聞網站。它可以與任何客戶端框架一起工作，並且可以提供幾乎任何格式（包括 HTML、RSS、JSON、XML 等）的內容。你正在閱讀的網站就是基於 Django。

    在內部，儘管它為幾乎所有可能需要的功能（例如幾個流行的資料庫，模版引擎等）提供了選擇，但是如果需要，它也可以擴展到使用其他組件。

- 安全

  - : Django 幫助開發人員，通過提供一個被設計為 「做正確的事情」 來自動保護網站的框架，來避免許多常見的安全錯誤。例如，Django 提供了一種安全的方式，來管理用戶帳號和密碼，避免了常見的錯誤，比如將 session 放在 cookie 中這種易受攻擊的做法（取而代之的是，cookies 只包含一個密鑰，實際數據存儲在數據庫中），或直接存儲密碼，而不是密碼的 hash 值。

    密碼 hash ，是讓密碼通過加密 hash 函數，而創建的固定長度值。 Django 能通過運行 hash 函數，來檢查輸入的密碼 - 就是將輸出的 hash 值，與存儲的 hash 值進行比較是否正確。然而由於功能的 「單向」 性質，假使存儲的 hash 值受到威脅，攻擊者也難以解出原始密碼。 （但其實有彩虹表-譯者觀點）

    默認情況下，Django 可以防範許多漏洞，包括 SQL 注入，跨站點腳本，跨站點請求偽造，和點擊劫持 (請參閱 網站安全 相關信息，如有興趣)。

- 可擴展
  - : Django 使用基於組件的 「無共享」 架構 (架構的每一部分獨立於其他架構，因此可以根據需要進行替換或更改)。在不同部分之間，有明確的分隔，意味著它可以通過在任何級別添加硬件，來擴展服務：緩存服務器，數據庫服務器，或應用程序服務器。一些最繁忙的網站，已經在 Django 架構下成功地縮放了網站的規模大小，以滿足他們的需求（例如 Instagram 和 Disqus，僅舉兩個例子，可自行添加）。
- 可維護
  - : Django 代碼編寫，是遵照設計原則和模式，鼓勵創建可維護和可重複使用的代碼。特別是，它使用了不要重複自己（DRY）原則，所以沒有不必要的重複，減少了代碼的數量。 Django 還將相關功能，分組到可重用的 「應用程序」 中，並且在較低級別，將相關代碼分組或模塊（ 模型視圖控制器 [Model View Controller (MVC)](/zh-TW/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture) 模式）。
- 可移植
  - : Django 是用 Python 編寫的，它在許多平台上運行。這意味著，你不受任務特定的服務器平台的限制，並且可以在許多種類的 Linux，Windows 和 Mac OS X 上運行應用程序。此外，Django 得到許多網路託管提供商的好評，他們經常提供特定的基礎設施，和託管 Django 網站的文檔。

## Django 的起源?

Django 最初在 2003 年到 2005 年間，由負責創建和維護報紙網站的網絡團隊開發。在創建了許多網站後，團隊開始考慮、並重用許多常見的代碼和設計模式。這個共同的代碼，演變一個通用的網絡開發框架，2005 年 7 月，被開源為 「Django」 項目。

Django 不斷發展壯大 — 從 2008 年 9 月的第一個里程碑版本（1.0），到最近發布的（2.0）-（2018）版本。每個版本都添加了新功能，和錯誤修復，從支持新類型的數據庫，模版引擎和緩存，到添加 「通用」 視圖函數和類別（這減少了開發人員在一些編程任務必須編寫的代碼量）。

> **備註：** 查看 Django 網站上的發行說明 [release notes](https://docs.djangoproject.com/en/2.0/releases/)，看看最近版本發生了什麼變化，以及 Django 能做多少工作

Django 現在是一個蓬勃發展的合作開源項目，擁有數千個用戶和貢獻者。雖然它仍然具有反映其起源的一些功能，但 Django 已經發展成為，能夠開發任何類型的網站的多功能框架。

## Django 有多受歡迎?

服務器端框架的受歡迎程度沒有任何可靠和明確的測量（儘管[Hot Frameworks](http://hotframeworks.com/)網站嘗試使用諸如計算每個平台的 GitHub 項目數量和 StackOverflow 問題的機制來評估流行度）。一個更好的問題是 Django 是否「足夠流行」，以避免不受歡迎的平台的問題。它是否繼續發展？如果您需要幫助，可以幫您嗎？如果您學習 Django，有機會獲得付費工作嗎？

基於使用 Django 的流行網站數量，為代碼庫貢獻的人數以及提供免費和付費支持的人數，那麼是的，Django 是一個流行的框架！

使用 Django 的流行網站包括：Disqus，Instagram，騎士基金會，麥克阿瑟基金會，Mozilla，國家地理，開放知識基金會，Pinterest 和開放棧（來源：[Django home page](https://www.djangoproject.com/) ).

## Django 是特定用途的?

Web 框架通常將自己稱為「特定」或「無限制」。

特定框架是對處理任何特定任務的「正確方法」有意見的框架。他們經常支持特定領域的快速發展（解決特定類型的問題），因為正確的做法是通常被很好地理解和記錄在案。然而，他們在解決其主要領域之外的問題時可能不那麼靈活，並且傾向於為可以使用哪些組件和方法提供較少的選擇。

相比之下，无限制的框架对于将组件粘合在一起以实现目标或甚至应使用哪些组件的最佳方式的限制较少。它们使开发人员更容易使用最合适的工具来完成特定任务，尽管您需要自己查找这些组件。

Django「有點有意義」，因此提供了「兩個世界的最佳」。它提供了一組組件來處理大多數 Web 開發任務和一個（或兩個）首選的使用方法。然而，Django 的解耦架構意味著您通常可以從多個不同的選項中進行選擇，也可以根據需要添加對全新的支持。

## Django 代碼是什麼樣子?

在傳統的數據驅動網站中，Web 應用程序會等待來自 Web 瀏覽器（或其他客戶端）的 HTTP 請求。當接收到請求時，應用程序根據 URL 和可能的`POST` 數據或`GET` 數據中的信息確定需要的內容。根據需要，可以從數據庫讀取或寫入信息，或執行滿足請求所需的其他任務。然後，該應用程序將返回對 Web 瀏覽器的響應，通常通過將檢索到的數據插入 HTML 模板中的佔位符來動態創建用於瀏覽器顯示的 HTML 頁面。

Django 網絡應用程序通常將處理每個步驟的代碼分組到單獨的文件中：

![](basic-django.png)

- **URLs:** 雖然可以通過單個功能來處理來自每個 URL 的請求，但是編寫單獨的視圖函數來處理每個資源是更加可維護的。URL 映射器用於根據請求 URL 將 HTTP 請求重定向到相應的視圖。URL 映射器還可以匹配出現在 URL 中的字符串或數字的特定模式，並將其作為數據傳遞給視圖功能。

- **View:** 視圖是一個請求處理函數，它接收 HTTP 請求並返回 HTTP 響應。視圖通過模型訪問滿足請求所需的數據，並將響應的格式委託給模板。

- **Models:** 模型是定義應用程序數據結構的 Python 對象，並提供在數據庫中管理（添加，修改，刪除）和查詢記錄的機制。

- **Templates:** 模板是定義文件（例如 HTML 頁面）的結構或佈局的文本文件，用於表示實際內容的佔位符。一個視圖可以使用 HTML 模板，從數據填充它動態地創建一個 HTML 頁面模型。可以使用模板來定義任何類型的文件的結構;它不一定是 HTML！

> **備註：** Django 將此組織稱為「模型視圖模板（MVT）」架構。它與更加熟悉的[Model View Controller](/zh-TW/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture)架構有許多相似之處.

以下部分將為您提供 Django 應用程序的這些主要部分的想法（稍後我們將在進一步詳細介紹後，我們將在開發環境中進行更詳細的介紹）。

### 將請求發送到正確的視圖(urls.py)

URL 映射器通常存儲在名為 urls.py 的文件中。在下面的示例中，mapper（`urlpatterns`）定義了特定 URL 模式和相應視圖函數之間的映射列表。如果接收到具有與指定模式匹配的 URL（例如 r'^$'，下面）的 HTTP 請求，則將調用相關聯的視圖功能（例如 views.index）並傳遞請求。

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

`urlpatterns` 對像是 `path()` 和/或 `re_path()` 函數的列表（Python 列表使用方括號定義，其中項目用逗號分隔，可以有一個[可選的尾隨逗號](https://docs.python.org/2/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples)。例如：`[item1, item2, item3,]`）。

兩種方法的第一個參數，是將要匹配的路由（模式）。`path()`方法使用尖括號，來定義將被捕獲、並作為命名參數傳遞給視圖函數的 URL 的部分。`re_path()`函數使用靈活的模式匹配方法，稱為正則表達式。我們將在後面的文章中討論這些內容！

第二個參數，是在匹配模式時將調用的另一個函數。註釋 `views.book_detail`表示該函數名為`book_detail()`，可以在名為`views`的模塊中找到（即在名為`views.py`的文件中）

### 處理請求(views.py)

視圖是 Web 應用程序的核心，從 Web 客戶端接收 HTTP 請求並返回 HTTP 響應。在兩者之間，他們編制框架的其他資源來訪問數據庫，渲染模板等。

下面的例子顯示了一個最小的視圖功能 index()，這可以通過我們的 URL 映射器在上一節中調用。像所有視圖函數一樣，它接收一個 HttpRequest 對像作為參數（request）並返回一個 HttpResponse 對象。在這種情況下，我們對請求不做任何事情，我們的響應只是返回一個硬編碼的字符串。我們會向您顯示一個請求，在稍後的部分中會提供更有趣的內容。

```python
## filename: views.py (Django view functions)

from django.http import HttpResponse

def index(request):
    # Get an HttpRequest - the request parameter
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Hello from Django!')
```

> **備註：** 一點點 Python:
>
> - [Python 模塊](https://docs.python.org/3/tutorial/modules.html)是函數的「庫」，存放在單獨的文件中，我們可能希望在代碼中使用。在這裡，我們只導入了`HttpResponse`從對象`django.http`模塊，使我們可以在視圖中使用
>   `from django.http import HttpResponse`。
>   還有其他方法可以從模塊導入一些或所有對象
> - 使用`def`，如上所示的關鍵字聲明函數，命參數在函數名稱後面的括號中列出：整行以冒號結尾。注意下一行是否都**縮進**。縮進很重要，因為它指定代碼行在該特定塊內(強制縮進是 Python 的一個關鍵特徵，而且是 Python 代碼很容易閱讀的一個原因)。

視圖通常存放在一個名為**views.py**的文件中。

### 定義數據模型(models.py)

Django Web 應用程序，通過被稱為模型的 Python 對象，來管理和查詢數據。模型定義存儲數據的結構，包括字段類型 以及字段可能的最大值，默認值，選擇列表選項，文檔幫助文本，表單的標籤文本等。模型的定義與底層數據庫無關-您可以選擇其中一個，作為項目設置的一部分。一旦您選擇了要使用的數據庫，您就不需要直接與之交談- 只需編寫模型結構和其他代碼，Django 可以處理與數據庫通信的所有辛苦的工作。

下面的代碼片段為`Team`對象，展示了一個非常簡單的 Django 模型。本`Team`類別是從 Django 的類別派生`models.Model`。它將團隊名稱和團隊級別，定義為字符字段，並為每個記錄指定了要存放的最大字符數。`team_level`可以是幾個值中的一個，因此，我們將其定義為一個選擇字段，並在被展示的數據、和被儲存的數據之間，建立映射，並設置一個默認值。

```python
# filename: models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        ...  #list other team levels
    )
    team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')
```

> **備註：** Python 小知識:
>
> - Python 支持「面向對象編程」，這是一種編程風格，我們將代碼組織到對像中，其中包括用於對該對象進行操作的相關數據和功能。對像也可以從其他對象繼承／擴展／派生，允許相關對象之間的共同行為被共享。在 Python 中，我們使用關鍵字**Class**定義對象的「藍圖」。我們可以根據類中的模型創建類型的多個特定實例。
> - 例如，我們有個**Team**類，它來自於**Model**類。這意味著它是一個模型，並且將包含模型的所有方法，但是我們也可以給它自己的專門功能。在我們的模型中，我們定義了我們的數據庫需要存儲我們的數據字段，給出它們的具體名稱。Django 使用這些定義（包括字段名稱）來創建底層數據庫。

### 查詢數據(views.py)

Django 模型提供了一個，用於搜索數據庫的簡單查詢 API。這可以使用不同的標準（例如，精確，不區分大小寫，大於等等）來匹配多個字段，並且可以支持複雜語句（例如，您可以在擁有一個團隊的**U11**團隊上指定搜索名稱以「Fr 」開頭或以「al」結尾）。

代碼片段顯示了一個視圖函數（資源處理程序），用於顯示我們所有的**U09**團隊。**粗體**顯示如何使用模型查詢 API，過濾所有記錄，其中該 **team_level**字段，具有正確的文本「 **U09** 」（請注意，該條件如何 filter()作為參數傳遞給該函數，該字段名稱和匹配類型由雙下劃線： **`team_level__exact`**）。

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

此功能使用**render** ()功能創建**HttpResponse**發送回瀏覽器的功能。這個函數是一個快捷方式；它通過組合指定的 HTML 模版和一些數據來插入模版（在名為「 **content** 」的變量中提供）來創建一個**HTML**文件。在下一節中，我們將介紹如何在其中插入數據以創建**HTML**。

### 呈現數據(HTML 模版)

模板系統允許您使用佔位符指定輸出文檔的結構，以便在生成頁面時填充數據。模板通常用於創建 HTML，但也可以創建其他類型的文檔。 Django 支持其本機模板系統，和另一個流行的 Python 庫，名為 Jinja2（如果需要，它也可以支持其他系統）。

代碼片段，顯示了上一節中`render（）`函數調用的 HTML 模板的外觀。這個模板的編寫假設它在渲染時可以訪問名為`youngest_teams`的列表變量（包含在上面`render（）`函數中的上下文變量`context`中）。在 HTML 框架內部，我們有一個表達式，首先檢查`youngest_teams`變量是否存在，然後在`for`循環中迭代它。在每次迭代中，模板在{{htmlelement("li")}}元素中顯示每個團隊的`team_name`值。

```python
## filename: best/templates/best/index.html

<!DOCTYPE html>
<html lang="en">
<body>

 {% if youngest_teams %}
    <ul>
    {% for team in youngest_teams %}
        <li>\{\{ team.team_name \}\}</li>
    {% endfor %}
    </ul>
{% else %}
    <p>No teams are available.</p>
{% endif %}

</body>
</html>
```

## 你還能做什麼？

前面的部分，展示了幾乎每個 Web 應用程序將使用的主要功能：URL 映射，視圖，模型和模版。Django 提供的其他內容包括：

- **表單** : HTML 表單用於收集用戶數據，以便在服務器上進行處理。Django 簡化了表單創建，驗證和處理。
- **用戶身份驗證和權限** : Django 包含了一個強大的用戶身份驗證和權限系統，該系統已經構建了安全性。
- **緩存** :與提供靜態內容相比，動態創建內容需要更大的計算強度（也更緩慢）。Django 提供靈活的緩存，以便你可以存儲所有或部分的頁面。如無必要，不會重新呈現網頁。
- **管理網站** :當你使用基本骨架創建應用時，就已經默認包含了一個 Django 管理站點。它十分輕鬆地創建了一個管理頁面，使網站管理員能夠創建、編輯和查看站點中的任何數據模型。
- **序列化數據** : Django 可以輕鬆地將數據序列化，並支持 XML 或 JSON 格式。這會有助於創建一個 Web 服務（Web 服務指數據純粹為其他應用程序或站點所用，並不會在自己的站點中顯示），或是有助於創建一個由客戶端代碼處理、和呈現所有數據的網站。

## 總結

恭喜，您已經完成了 Django 之旅的第一步！您現在應該了解 Django 的主要優點，一些關於它的歷史，以及 Django 應用程序的每個主要部分可能是什麼樣子。您還應該了解 Python 編程語言的一些內容，包括列表，函數和類別的語法。

您已經看到上面的一些真正的 Django 代碼，但與客戶端代碼不同，您需要設置一個開發環境來運行它。這是我們的下一步。

{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}
