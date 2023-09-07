---
title: "Django 教學 2: 創建一個骨架網站"
slug: Learn/Server-side/Django/skeleton_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}

Django 教學的第二篇文章，會展示怎樣創建一個網站的"框架"，在這個框架的基礎上，你可以繼續填充整站使用的 settings， urls，模型(models)，視圖(views)和模板(templates )。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提:</th>
      <td>創建 Django 的開發環境。複習 Django 教學。</td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>能夠使用 Django 提供的工具，搭建你自己的網站。</td>
    </tr>
  </tbody>
</table>

## 概覽

這篇文章會展示怎樣創建一個網站的"框架"，在這個框架的基礎上,你可以繼續填充整站使用的 settings， urls，模型(models)，視圖(views)和模板(templates)（我們會在接下來的文章裡討論）。

搭建 「框架」 的過程很直接:

1. 使用 `django-admin`工具創建工程的文件夾，基本的文件模板和工程管理腳本（**manage.py**）。
2. 用 **manage.py** 創建一個或多個*應用*。

   > **備註：** 一個網站可能由多個部分組成，比如，主要頁面，博客，wiki，下載區域等。Django 鼓勵將這些部分作為分開的應用開發。如果這樣的話，在需要可以在不同的工程中復用這些應用。

3. 工程裡註冊新的應用。
4. 為每個應用分配 url。

為 [locallibrary](/zh-TW/docs/Learn/Server-side/Django/Tutorial_local_library_website) 這個項目創建的網站文件夾和它的工程文件夾都命名為*locallibrary*。我們只創建一個名為*catalog*的應用。最高層的項目文件結構如下所示：

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

接下來的部分，會詳細討論創建網站框架的過程，並會展示怎麼測試這些變化。最後，我們會討論在這個階段裡，你可以設置的全站配置。

## 創建專案項目

首先打開命令提示符/終端，確保您在[虛擬環境](/zh-TW/docs/Learn/Server-side/Django/development_environment#Using_a_virtual_environment)中，導航到您要存放 Django 應用程序的位置（在文檔文件夾中，輕鬆找到它的位置），並為您的新網站，創建一個文件夾（在這種情況下：locallibrary）。然後使用 cd 命令進入該文件夾：

```bash
mkdir locallibrary
cd locallibrary
```

用`django-admin startproject`命令創建新項目，並進入該文件夾。

```bash
django-admin startproject locallibrary
cd locallibrary
```

`django-admin`工具會創建如下所示的文件夾結構

```bash
locallibrary/
    manage.py
    locallibrary/
        __init__.py
        settings.py
        urls.py
        wsgi.py
```

locallibrary 項目的子文件夾是整個網站的進入點：

- **\_\_init\_\_.py** 是一個空文件，指示 Python 將此目錄視為 Python 套件。
- **settings.py** 包含所有的網站設置。這是可以註冊所有創建的應用的地方，也是靜態文件，數據庫配置的地方，等等。
- **urls.py**定義了網站 url 到 view 的映射**。**雖然這裡可以包含所有的 url，但是更常見的做法是把應用相關的 url 包含在相關應用中，你可以在接下來的教程裡看到。
- **wsgi.py** 幫助 Django 應用和網絡服務器間的通訊。你可以把這個當作模板。

**manage.py**腳本可以創建應用，和資料庫通訊，啟動開發用網絡服務器。

## 創建 catalog 應用

接下來，在 locallibrary 項目裡，使用下面的命令創建 catalog 應用（和您項目的**manage.py**在同一個文件夾下）

```bash
python3 manage.py startapp catalog
```

> **備註：** Linux/Mac OS X 應用可以使用上面的命令。在 windows 平台下應該改為： `py -3 manage.py startapp catalog`
>
> 如果你是 windows 系統，在這個部分用`py -3`替代`python3`。
>
> 如果您使用的是 Python 3.7.0，則應使用`py manage.py startapp catalog`

這個工具創建了一個新的文件夾，並為該應用創建了不同的文件（下面黑體所示）。絕大多數文件的命名和它們的目的有關（比如視圖函數就是**views.py，**模型就是**models.py，**測試是**tests.py，**網站管理設置是**admin.py，**註冊應用是**apps.py）**，並且還包含了為項目所用的最小模板。

執行命令後的文件夾結構如下所示：

```bash
locallibrary/
    manage.py
    locallibrary/
    catalog/
        admin.py
        apps.py
        models.py
        tests.py
        views.py
        __init__.py
        migrations/
```

除上面所說的文件外，我們還有：

- 一個*migration*文件夾，用來存放 「migrations」 ——當你修改你的數據模型時，這個文件會自動升級你的資料庫。
- **\_\_init\_\_.py** —一個空文件，Django/Python 會將這個文件作為[Python 套件包](https://docs.python.org/3/tutorial/modules.html#packages)並允許你在項目的其他部分使用它。

> **備註：** 你注意到上面的文件裡有些缺失嘛？儘管有了 views 和 models 的文件，可是 url 映射，網站模板，靜態文件在哪裡呢？我們會在接下來的部分展示如何創建它們（並不是每個網站都需要，不過這個例子需要）。

## 註冊 catalog 應用

既然應用已經創建好了，我們還必須在項目裡註冊它，以便工具在運行時它會包括在裡面（比如在數據庫裡添加模型時）。在項目的 settings 裡，把應用添加進`INSTALLED_APPS` ，就完成了註冊。

打開項目設置文件 **locallibrary/locallibrary/settings.py**找到 `INSTALLED_APPS` 列表裡的定義。如下所示，在列表的最後添加新的一行。

```bash
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'catalog.apps.CatalogConfig',
]
```

新的這行，詳細說明了應用配置文件在( `CatalogConfig`) **/locallibrary/catalog/apps.py** 裡，當你創建應用時就完成了這個過程。

> **備註：** 注意到`INSTALLED_APPS已经有许多其他的应用了` (還有 `MIDDLEWARE`,在 settings 的下面)。這些應用為 [Django administration site](/zh-TW/docs/Learn/Server-side/Django/Admin_site) 提供了支持和許多功能(包括會話，認證系統等)。

## 配置資料庫

現在可以為項目配置資料庫了——為了避免性能上的差異，最好在生產和開發中使用同一種資料庫。你可以在[資料庫](https://docs.djangoproject.com/en/1.10/ref/settings/#databases) 裡找到不同的設置方法(Django 文檔)。

在這個項目裡，我們使用 SQLite。因為在展示用的數據庫中，我們不會有很多並發存取的行為。同時，也因為 SQLite 不需要額外的配置工作。你可以在**settings.py**裡看到這個數據庫怎樣配置的。（更多信息如下所示）

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
```

因為我們使用 SQLite，不需要其他的設置了。我們繼續吧！

## 其他項目設置

settings.py 裡還包括其他的一些設置，現在只需要改變[時區](https://docs.djangoproject.com/en/1.10/ref/settings/#std:setting-TIME_ZONE) —改為和標準[tz 時區數據表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 裡的字符串相同就可以了（數據表裡的 TZ 列有你想要的時區）。把`TIME_ZONE`的值改為你的時區，比如

```python
TIME_ZONE = 'Asia/Taipei'
```

有兩個設置你現在不會用到，不過你應該留意：

- `SECRET_KEY`. 這個密匙值，是 Django 網站安全策略的一部分。如果在開發環境中，沒有保護好這個密匙，把代碼投入生產環境時，最好用不同的密匙代替。（可能從環境變量或文件中讀取）。
- `DEBUG`. 這個會在 debug 日誌裡輸出錯誤信息，而不是輸入 HTTP 的返回碼。在生產環境中，它應設置為 false，因為輸出的錯誤信息，會幫助想要攻擊網站的人。

## 鏈接 URL 映射器

在項目文件夾裡，創建網站時同時生成了 URL 映射器（**urls.py**）。儘管你可以用它來管理所有的 URL 映射，但是更常用的做法是把 URL 映射留到它們相關的應用中。

打開**locallibrary/locallibrary/urls.py** 注意指導文字解釋了一些使用 URL 映射器的方法。

```python
"""locallibrary URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
```

URL 映射通過`urlpatterns` 變量管理，它是一個`path()`函數的 Python 列表。每個`path()`函數，要么將 URL 式樣(URL pattern)關聯到特定視圖( _specific view)_，當模式匹配時將會顯示，要么關聯到某個 URL 式樣列表的測試代碼。(第二種情況下，URL 式樣是目標模型裡的「基本 URL」). `urlpatterns` 列表初始化定義了單一函數，把所有帶有 'admin/' 模式的 URL，映射到`admin.site.urls`。這個函數，包含了 Administration 應用自己的 URL 映射定義。

> **備註：** `path()`中的路由是一個字符串，用於定義要匹配的 URL 模式。該字符串可能包括一個命名變量（在尖括號中），例如`'catalog/<id>/'`。此模式將匹配 **/catalog/any_chars** 等 URL，並將 any_chars 作為參數名稱為`id` 的字符串，傳遞給視圖。我們將在後面的主題中，進一步討論路徑方法和路由模式

在`urlpatterns` 列表的下面一行，插入下面的代码。這個新項目包括一個 `path()` ，它使用模式 `catalog/` 轉發請求到模塊 `catalog.urls`（具有相對 URL **/catalog/urls.py** 的文件）。

```python
# Use include() to add paths from the catalog application
from django.conf.urls import include
from django.urls import path

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

現在我們把我們網站的根 URL(例如`127.0.0.1:8000`)，重新導向 URL `127.0.0.1:8000/catalog/`;這是項目中唯一的應用，所以我們最好這樣做。為了完成這個目標，我們使用一個特別的視圖函數( `RedirectView`)，當`path()`函數中的 url 式樣被識別以後（在這個例子中是根 url），就會把第一個參數，也就是新的相對 URL ，重定向到（`/catalog/`）。

把下面的代碼加到文件最後：

```python
#Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='/catalog/')),
]
```

將路徑函數的第一個參數留空，用以表示'/'。如果您將第一個參數寫為'/'，Django 會在您啟動開發服務器時給出以下警告：

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django 默認不提供 CSS，JavaScript 和圖像等靜態文件，但在創建站點時，開發 Web 服務器這樣做是有用的。作為此 URL 映射器的最終添加，您可以通過附加以下幾行，在開發期間啟用靜態文件的提供。

現在將以下最終區塊，添加到文件的底部：

```python
# Use static() to add url mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> **備註：** 有許多方法可以擴充`urlpatterns`列表（上面我們只是使用`+=`運算符，附加一個新的列表項，來清楚地分隔舊代碼和新代碼）。我們可以改為在原始列表定義中，包含這個新的模式映射：
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='/catalog/', permanent=True)),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```
>
> 此外，我們將導入行（`from django.urls import include`）包含在使用它的代碼中（因此很容易看到我們添加的內容），但通常將所有導入行包含在一個 Python 文件的頂部。

最後一步，在**catalog**文件夾中，創建一個名為**urls.py**的文件，並添加以下文本，以定義（空）導入的`urlpatterns`。這是我們在構建應用程序時，添加模式的地方。

```python
from django.urls import path
from . import views


urlpatterns = [

]
```

## 測試網站框架

現在我們有了一個完整的框架項目。這個網站現在還什麼都不能做，但是我們仍然要運行，以確保我們的更改是有效的。

在運行前，我們應該先運行*數據庫遷移*。這會更新我們的數據庫並且包含所有安裝的應用（同時去除一些警告）。

### 運行資料庫遷移

Django 使用對象關係映射器（ORM），將 Django 代碼中的模型定義，映射到底層資料庫使用的數據結構。當我們更改模型定義時，Django 會跟踪更改，並創建資料庫遷移腳本(位於 **/locallibrary/catalog/migrations/** )，來自動遷移資料庫中的底層數據結構。

當我們創建網站時，Django 會自動添加一些模型，供網站的管理部分使用（稍後我們會解釋）。運行以下命令，來定義資料庫中這些模型的表（確認你位於包含 **manage.py** 的目錄中):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> **警告：** 每次模型改變，都需要運行以上命令，來影響需要存放的數據結構（包括添加和刪除整個模型和單個字段）。

該**`makemigrations`**命令，創建（但不實施）項目中安裝的所有應用程序的遷移（你可以指定應用程序名稱，也可以為單個項目運行遷移）。這讓你有機會在應用這些遷移之前，檢查這些遷移代碼—當你是 Django 專家時，你可以選擇稍微調整它們。

這個 **`migrate`**命令，真正對你的資料庫實施遷移（Django 跟踪哪些已添加到當前資料庫）。

> **備註：** 參見 [Migrations](https://docs.djangoproject.com/en/2.0/topics/migrations/) (Django 文件) ，了解較少使用的遷移命令的其他信息。

### 運行網站

在開發期間，你首先要使用開發網頁服務器，然後用你本機的瀏覽器觀看，來測試你的網站。

> **備註：** 這個開發網頁服務器並不夠強大，不足以用於生產使用，但是它使你在開發期間，能非常容易獲得你的 Django 網站和運行它，以此來進行快速測試。默認情況下，服務器會開通（`http://127.0.0.1:8000/`），但你也可以選擇其他端口。有關更多信息，查閱（[django-admin and manage.py: runserver](https://docs.djangoproject.com/en/1.10/ref/django-admin/#runserver)）(Django docs).

通過如下`runserver`命令，運行開發網頁服務器。（同樣的要在**manage.py**的目錄）

```bash
python3 manage.py runserver

 Performing system checks...

 System check identified no issues (0 silenced).
 September 22, 2016 - 16:11:26
 Django version 1.10, using settings 'locallibrary.settings'
 Starting development server at http://127.0.0.1:8000/
 Quit the server with CTRL-BREAK.
```

一旦服務器運行，你可以用你的瀏覽器導航到<http://127.0.0.1:8000/> 查看。你應該會看到一個錯誤頁面，如下。

![Django Debug page for Django 2.0](django_404_debug_page.png)

別擔心，這個錯誤頁面是預期的結果。因為我們沒有在 `catalogs.urls`模塊中，定義任何頁面或網址（即是當我們使用一個指向根目錄的 URL 時，會被重新定向的地方）。

> **備註：** 上面的頁面，演示了一個很棒的 Django 功能 - 自動除錯日誌記錄。只要找不到頁面，或者代碼引發任何錯誤，就會顯示錯誤畫面，其中包含有用的信息。在這種情況下，我們可以看到我們提供的 URL，與我們的任何 URL 模式都不匹配（如列出的那樣）。在生產期間（當我們將網站放在網上時），日誌記錄將被關閉，在這種情況下，將提供信息量較少、但用戶友好的頁面。

這個時候，我們知道 Django 正在工作！

> **備註：** 在進行重大更改時，你應該重新運行遷移，並重新測試站點。這不需要很長時間！

## 挑戰自我

該 **catalog/** 目錄包含應用程序的視圖、模型、和應用的其他部分，你可以打開這些文件並查看樣板。

如上所述，管理站點的 URL 映射，已經添加到項目的 **urls.py**。在瀏覽器中查看管理區域，看看會發生什麼（你可以從上面映射，推斷正確的 URL）。

## 總結

你現在已經創建了一個完整的骨架網站項目，你可以繼續加入網址、模型、視圖、和模版。

現在，[Local Library website](/zh-TW/docs/Learn/Server-side/Django/Tutorial_local_library_website)的骨架已經完成並運行了，是時候開始寫些代碼，讓網站做些它應該做的事了。

## 參見

- [Writing your first Django app - part 1](https://docs.djangoproject.com/en/2.0/intro/tutorial01/) (Django docs)
- [Applications](https://docs.djangoproject.com/en/2.0/ref/applications/#configuring-applications) (Django Docs). Contains information on configuring applications.

{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}
