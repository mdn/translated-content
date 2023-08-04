---
title: "Django Tutorial Part 5: Creating our home page"
slug: Learn/Server-side/Django/Home_page
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}

我們現在可以添加代碼，來顯示我們的第一個完整頁面 - [LocalLibrary](/zh-TW/docs/Learn/Server-side/Django/Tutorial_local_library_website) 網站的主頁，顯示每個模型類型有多少條記錄，並提供我們其他頁面的側邊欄導航鏈接。一路上，我們將獲得編寫基本 URL 地圖和視圖、從數據庫獲取記錄、以及使用模板的實踐經驗。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提:</th>
      <td>
        讀 the
        <a href="/zh-TW/docs/Learn/Server-side/Django/Introduction"
          >Django Introduction</a
        >. 完成上章節 (including
        <a href="/zh-TW/docs/Learn/Server-side/Django/Admin_site"
          >Django Tutorial Part 4: Django admin site</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        了解如何創建簡單的URL映射和視圖（沒有數據編碼在URL中）以及如何從模型中獲取數據並創建模版。<br />概要
      </td>
    </tr>
  </tbody>
</table>

## 總覽

在定義了模型並創建了一些可以使用的初始庫記錄之後，是時候編寫將這些信息呈現給用戶的代碼了。 我們要做的第一件事是確定我們要在頁面中顯示的信息，並定義用於返回這些資源的 URL。 然後，我們將創建一個 URL 映射器，視圖和模板來顯示頁面。

下圖描述了主要數據流，以及處理 HTTP 請求和響應時所需的組件。 當我們已經實現了模型時，我們將創建的主要組件是：

- URL 映射器將支持的 URL（以及 URL 中編碼的任何信息）轉發到適當的視圖功能。
- 查看函數可從模型中獲取所需的數據，創建顯示數據的 HTML 頁面，並將頁面返回給用戶以在瀏覽器中查看。
- 在視圖中呈現數據時要使用的模板。

![](basic-django.png)

正如您將在下一節中看到的那樣，我們將顯示 5 頁，這是太多信息，無法在一篇文章中進行記錄。 因此，本文將重點介紹如何實現主頁，我們將在後續文章中介紹其他頁面。 這應該使您對 URL 映射器，視圖和模型在實踐中如何工作有很好的端到端理解。

## 定義資源 URL

由於此版本的 LocalLibrary 對於最終用戶基本上是只讀的，因此我們只需要提供該網站的登錄頁面（主頁），以及顯示書籍和作者的列表和詳細視圖的頁面。

我們頁面所需的 URL 是：

- `catalog/` — 主頁/索引頁面。
- `catalog/books/` — 所有書籍的清單。
- `catalog/authors/` — 所有作者列表。
- `catalog/book/<id>` — 特定書的詳細信息視圖，其主鍵為 `<id>` (the default)。 因此，例如`/catalog/book/3`，作為添加的第三本書。
- `catalog/author/<id>` — 特定作者的詳細信息視圖，其主鍵字段名為 `<id>`。 例如，為第 11 位作者添加了`/catalog/author/11`。

前三個 URL 用於列出索引，書籍和作者。 它們不對任何其他信息進行編碼，並且雖然返回的結果將取決於數據庫中的內容，但為獲取信息而運行的查詢將始終相同。

相比之下，最後兩個 URL 用於顯示有關特定書籍或作者的詳細信息-這些 URL 編碼要顯示在 URL 中的項目的標識（如上顯示為\<id>）。 URL 映射器可以提取編碼信息並將其傳遞給視圖，然後將動態確定從數據庫中獲取哪些信息。 通過在我們的 URL 中編碼信息，我們只需要一個 URL 映射，視圖和模板即可處理每本書（或作者）。

> **備註：** Django 允許您以自己喜歡的任何方式來構造 URL-您可以如上所示在 URL 主體中編碼信息或使用 URL `GET` 參數（例如`/book/?id=6`）。 無論使用哪種方法，都應保持 URL 的整潔，邏輯和可讀性([在此處查看 W3C 建議](https://www.w3.org/Provider/Style/URI)).
>
> Django 文檔傾向於建議在 URL 正文中編碼信息，他們認為這種做法鼓勵更好的 URL 設計。

如概述中所述，本文的其餘部分描述瞭如何構造索引頁。

## 創建索引頁面

我們將創建的第一頁是索引頁 (`catalog/`)。 這將顯示一些靜態 HTML，以及數據庫中不同記錄的一些計算出的「計數」。 為了完成這項工作，我們必須創建一個 URL 映射，視圖和模板。

> **備註：** 值得在本節中多加註意。大多數材料是所有頁面共有的。

### URL mapping

創建[skeleton website](/zh-TW/docs/Learn/Server-side/Django/skeleton_website) 時，我們更新了**locallibrary/urls.py**文件，以確保每當收到以 `catalog/` 開頭的 URL 時， _URLConf_ 模組 `catalog.urls` 都將處理其餘的子字符串。

來自 **locallibrary/urls.py**的以下代碼片段包括`catalog.urls` 模塊：

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> **備註：** 每當 Django 遇到導入函數 [`django.urls.include()`](https://docs.djangoproject.com/en/2.1/ref/urls/#django.urls.include)時，它都會在指定的結束字符處分割 URL 字符串，並將剩餘的子字符串發送到所包含的*URLconf* 模塊以進行進一步處理。

我們還為*URLConf* 模塊創建了一個佔位符文件，名為 **/catalog/urls.py**。 將以下行添加到該文件：

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

`path()`函數定義以下內容：

- URL 模式，它是一個空字符串：`''`。 處理其他視圖時，我們將詳細討論 URL 模式。
- 如果檢測到 URL 模式，將調用一個視圖函數：`views.index`, 它是**views.py**文件中名為`index()` 的函數。

`path()` 函數還指定一個`name`參數，它是此特定 URL 映射的唯一標識符。 您可以使用該名稱來「反向」映射器，即，動態創建指向映射器旨在處理的資源的 URL。 例如，通過在模板中添加以下鏈接，我們可以使用 name 參數從任何其他頁面鏈接到我們的主頁：

```html
<a href="{% url 'index' %}">Home</a>.
```

> **備註：** 我們可以對上面的鏈接進行硬編碼 (例如`<a href="/catalog/">Home</a>`), 但是如果我們更改主頁的模式 (例如更改為 `/catalog/index`) 則模板將不再 正確鏈接。 使用反向 URL 映射更加靈活和健壯！

### View (function-based)

View 是一個用來處理 HTTP 請求的函式，根據需求從資料庫取得資料，通過使用 HTML 模板呈現此數據來生成 HTML , 並且在一個 HTTP 回應中返回 HTML 來呈現給用戶。Index view 遵循這個模型 — 獲取有關數據庫中有多少 `Book`, `BookInstance`, 可用的 `BookInstance` 還有 `Author` 的訊息, 然後把他們傳遞給模板進行顯示。

打開**catalog/views.py**, 並且注意該文件已經導入 [render()](https://docs.djangoproject.com/en/2.0/topics/http/shortcuts/#django.shortcuts.render) 快捷功能已使用模板和數據生成 HTML 文件。

```python
from django.shortcuts import render

# Create your views here.
```

將以下代碼複製到文件底部。 第一行導入將用於訪問所有視圖中的數據的模型類。

```python
from .models import Book, Author, BookInstance, Genre

def index(request):
    """View function for home page of site."""

    # Generate counts of some of the main objects
    num_books = Book.objects.all().count()
    num_instances = BookInstance.objects.all().count()

    # Available books (status = 'a')
    num_instances_available = BookInstance.objects.filter(status__exact='a').count()

    # The 'all()' is implied by default.
    num_authors = Author.objects.count()

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
    }

    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)
```

視圖函數的第一部分使用模型類上的 `objects.all()` 屬性獲取記錄數。 它還獲取具有狀態字段值為「 a」（可用）的`BookInstance` 物件列表。 在上一教程([Django Tutorial Part 3: Using models > Searching for records](/zh-TW/docs/Learn/Server-side/Django/Models#Searching_for_records))中，您可以找到更多有關如何從模型進行訪問的信息。.

在函數的最後，我們調用 `render()` 函數來創建並返回 HTML 頁面作為響應（此快捷功能包裝了許多其他函數，從而簡化了這種非常常見的用例）。它以原始 `request` 物件 (一個 `HttpRequest`), 帶有數據佔位符的 HTML 模板以及上下文 `context` 變量包含將插入到這些佔位符中的數據的 Python 字典）為參數。

在下一節中，我們將詳細討論模板和上下文變量。 讓我們開始創建模板，以便實際上可以向用戶顯示內容！

### Template

模板是一個文本文件，用於定義文件（例如 HTML 頁面）的結構或佈局，並使用佔位符表示實際內容。 Django 會在您的應用程序名為'**templates**'的目錄中自動查找模板。 因此，例如，在我們剛剛添加的索引視圖中， `render()` 函數將有望能夠找到文件 **/locallibrary/catalog/templates/_index.html_**，如果找不到該文件，則會引發錯誤。 如果您保存以前的更改並返回瀏覽器，則可以看到此信息-訪問`127.0.0.1:8000`現在將為您提供一個相當直觀的錯誤消息"`TemplateDoesNotExist at /catalog/`"以及其他詳細信息。

> **備註：** Django 將根據項目的設置文件在許多位置查找模板（搜索已安裝的應用程序是默認設置！）。 您可以在 [Templates](https://docs.djangoproject.com/en/2.0/topics/templates/) （Django docs）中找到有關 Django 如何查找模板及其支持的模板格式的更多信息。

#### Extending templates

索引模板的頭部和身體將需要標準的 HTML 標記，以及用於導航的部分（到我們尚未創建的站點中的其他頁面）以及用於顯示一些介紹性文本和我們的書籍數據的部分。 對於我們網站上的每個頁面，大部分文本（HTML 和導航結構）都是相同的。 Django 模板語言允許您聲明一個基本模板，然後擴展它，而不是強迫開發人員在每個頁面中都複製此"樣板" ，只需替換每個特定頁面上不同的部分即可。

例如，基本模板 **base_generic.html** 可能類似於以下文本。 如您所見，其中包含一些"通用" HTML 以及標題，側邊欄和內容的部分，這些部分使用命名的`block` 和`endblock` 模板標記進行了標記（以粗體顯示）。 區塊可以為空，或包含將在默認情況下用於派生頁面的內容。

> **備註：** 模板*tags* 類似於可以在模板中使用的功能，可以在模板中循環使用列表，基於變量的值執行條件操作等。除了模板標記之外，模板語法還允許您引用模板變量（傳遞給 模板），並使用*template filters*，該過濾器可重新格式化變量（例如，將字符串設置為小寫）。

```django
<!DOCTYPE html>
<html lang="en">
  <head>
    {% block title %}
      <title>Local Library</title>
    {% endblock %}
  </head>
  <body>
    {% block sidebar %}
      <!-- insert default navigation text for every page -->
    {% endblock %}
    {% block content %}
      <!-- default content text (typically empty) -->
    {% endblock %}
  </body>
</html>
```

當我們想為特定視圖定義模板時，我們首先指定基本模板（帶有`extends` 模板標籤-請參見下一個代碼清單）。 如果我們要在模板中替換任何節，則使用與基本模板中相同的`block`/`endblock`節來聲明這些節。

例如，下面的代碼片段顯示了我們如何使用`extends` 模板標籤並覆蓋`content` 區塊。 生成的最終 HTML 將具有基本模板中定義的所有 HTML 和結構（包括您在`title` 區塊中定義的默認內容），但是將新的`content` 區塊插入到默認模板中。

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Local Library Home</h1>
  <p>
    Welcome to LocalLibrary, a website developed by
    <em>Mozilla Developer Network</em>!
  </p>
{% endblock %}
```

#### The LocalLibrary base template

下面列出了我們計劃用於 _LocalLibrary_ 網站的基本模板。 如您所見，其中包含一些 HTML 以及 `title`、`sidebar` 和 `content`。 我們有一個默認標題（我們可能想要更改）和一個默認側邊欄，其中帶有指向所有書籍和作者列表的鏈接（我們可能不想更改，但是如果需要的話，我們允許範圍通過將其放在一個區塊中）。

> **備註：** 我們還引入了兩個附加的模板標籤：`url` 和`load static`。這些將在以下各節中討論。

創建一個新文件 **/locallibrary/catalog/templates/_base_generic.html_**，並為其提供以下內容：

```django
<!DOCTYPE html>
<html lang="en">
  <head>
    {% block title %}
    <title>Local Library</title>
    {% endblock %}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous" />

    <!-- Add additional CSS in static file -->
    {% load static %}
    <link rel="stylesheet" href="{% static 'css/styles.css' %}" />
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2">
          {% block sidebar %}
          <ul class="sidebar-nav">
            <li><a href="{% url 'index' %}">Home</a></li>
            <li><a href="">All books</a></li>
            <li><a href="">All authors</a></li>
          </ul>
          {% endblock %}
        </div>
        <div class="col-sm-10 ">{% block content %}{% endblock %}</div>
      </div>
    </div>
  </body>
</html>
```

該模板包括來自 [Bootstrap](https://getbootstrap.com/) 的 CSS，以改進 HTML 頁面的佈局和表示方式。 使用 Bootstrap 或其他客戶端 Web 框架是創建吸引人的頁面的快速方法，該頁面可以在不同的瀏覽器大小上很好地擴展。

基本模板還引用了本地 CSS 文件 (**styles.css**) ，該文件提供了一些其他樣式。 創建 **/locallibrary/catalog/static/css/styles.css**並為其提供以下內容：

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### The index template

創建 HTML 文件 **/locallibrary/catalog/templates/_index.html_** 並為其提供以下內容。 如您所見，我們在第一行中擴展了基本模板，然後使用該模板的新內容塊替換默認`content` 區塊。

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Local Library Home</h1>
  <p>
    Welcome to LocalLibrary, a website developed by
    <em>Mozilla Developer Network</em>!
  </p>
  <h2>Dynamic content</h2>
  <p>The library has the following record counts:</p>
  <ul>
    <li><strong>Books:</strong> \{{ num_books }}</li>
    <li><strong>Copies:</strong> \{{ num_instances }}</li>
    <li><strong>Copies available:</strong> \{{ num_instances_available }}</li>
    <li><strong>Authors:</strong> \{{ num_authors }}</li>
  </ul>
{% endblock %}
```

在 _Dynamic content_ 部分中，我們聲明了要從視圖中包含的信息的佔位符（_template variables_）。 變量使用「雙括號」或「把手」語法標記（請參見上面的粗體）。

> **備註：** 因為變量具有雙括號 (`\{{ num_books }}`)，而標籤則用百分號括在單括號中擴展為 (`{% extends "base_generic.html" %}`)，所以您可以輕鬆識別是要處理模板變量還是模板標籤（函數）。

這裡要注意的重要一點是，這些變量是使用我們在視圖的`render()` 函數中傳遞給`context` 字典的鍵命名的（請參見下文）; 呈現模板時，這些將被其*values* 替換。

```python
context = {
    'num_books': num_books,
    'num_instances': num_instances,
    'num_instances_available': num_instances_available,
    'num_authors': num_authors,
}

return render(request, 'index.html', context=context)
```

#### Referencing static files in templates

您的項目可能會使用靜態資源，包括 JavaScript，CSS 和圖像。 由於這些文件的位置可能未知（或可能會更改），因此 Django 允許您相對於`STATIC_URL` 全局設置在模板中指定這些文件的位置（默認框架網站將`STATIC_URL` 的值設置為'`/static/`'，但您可以選擇將其託管在內容分發網絡或其他地方）。

在模板中，您首先調用指定為「 static」的`load` 模板標籤以添加此模板庫（如下所示）。 加載靜態文件後，您可以使用`static` 模板標籤，指定感興趣文件的相對 URL。

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

如果需要，您可以以相同的方式將圖像添加到頁面中。 例如：

```django
{% load static %}
<img
  src="{% static 'catalog/images/local_library_model_uml.png' %}"
  alt="UML diagram"
  style="width:555px;height:540px;" />
```

> **備註：** 上面的更改指定了文件的位置，但是 Django 默認不提供文件。創建網站框架時 ([created the website skeleton](/zh-TW/docs/Learn/Server-side/Django/skeleton_website))，雖然我們在全局 URL 映射器(**/locallibrary/locallibrary/urls.py**)中啟用了由開發 Web 服務器提供的服務，但您仍需要安排它們在生產中提供。 我們待會再看。

有關使用靜態文件的更多信息，請參閱管理靜態文件 [Managing static files](https://docs.djangoproject.com/en/2.0/howto/static-files/) (Django docs)。

#### Linking to URLs

上面的基本模板引入了`url` 模板標籤。

```python
<li><a href="{% url 'index' %}">Home</a></li>
```

此標記採用在 **urls.py**中調用的 `path()`函數的名稱以及關聯視圖將從該函數接收的任何參數的值，並返回可用於鏈接到資源的 URL。

## What does it look like?

此時，我們應該已經創建了顯示索引頁面所需的所有內容。 運行服務器(`python3 manage.py runserver`)，然後打開瀏覽器到<http://127.0.0.1:8000/>。 如果一切設置正確，則您的站點應類似於以下螢幕截圖。

![Index page for LocalLibrary website](index_page_ok.png)

> **備註：** 您將無法使用**All books**和**All authors**鏈接，因為尚未定義這些頁面的路徑，視圖和模板（當前我們僅在`base_generic.html` html 模板中插入了這些鏈接的佔位符）。

## Challenge yourself

這裡有兩個任務可以測試您對模型查詢，視圖和模板的熟悉程度。

1. LocalLibrary [base template](#The_LocalLibrary_base_template) 已定義`title` 欄。 在 [index template](#The_index_template)中覆蓋此塊並為頁面創建一些新標題。

   > **備註：** [Extending templates](#Extending_templates) 部分介紹瞭如何創建塊並將其擴展到另一個模板中。

2. 修改 [view](<#View_(function-based)>)以生成包含特定單詞（不區分大小寫）的流派計數和書籍計數，並將其傳遞給`context` （這與我們創建並使用`num_books` 和`num_instances_available`的方式大致相同）。 然後更新 [index template](#The_index_template) 以使用這些變量。

## Summary

現在，我們已經為網站創建了主頁-一個 HTML 頁面，該頁面顯示了數據庫中的一些記錄計數，並具有指向其他尚待創建頁面的鏈接。 在此過程中，我們學習了很多有關 url 映射器，視圖，使用我們的模型查詢數據庫，如何從視圖中將信息傳遞到模板以及如何創建和擴展模板的基本信息。

在下一篇文章中，我們將基於我們的知識來創建其他四個頁面。

## See also

- [Writing your first Django app, part 3: Views and Templates](https://docs.djangoproject.com/en/2.0/intro/tutorial03/) (Django docs)
- [URL dispatcher](https://docs.djangoproject.com/en/2.0/topics/http/urls/) (Django docs)
- [View functions](https://docs.djangoproject.com/en/2.0/topics/http/views/) (DJango docs)
- [Templates](https://docs.djangoproject.com/en/2.0/topics/templates/) (Django docs)
- [Managing static files](https://docs.djangoproject.com/en/2.0/howto/static-files/) (Django docs)
- [Django shortcut functions](https://docs.djangoproject.com/en/2.0/topics/http/shortcuts/#django.shortcuts.render) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}
