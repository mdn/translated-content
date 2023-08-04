---
title: "Django Tutorial Part 7: Sessions framework"
slug: Learn/Server-side/Django/Sessions
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django")}}

本教程擴展了我們的[LocalLibrary](/zh-TW/docs/Learn/Server-side/Django/Tutorial_local_library_website) 網站，為主頁添加了一個基於會話的訪問計數器。這是一個相對簡單的例子，但它確實顯示了，如何使用會話框架，為匿名用戶提供持久的行為。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Complete all previous tutorial topics, including
        <a href="/zh-TW/docs/Learn/Server-side/Django/Generic_views"
          >Django Tutorial Part 6: Generic list and detail views</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To understand how sessions are used.</td>
    </tr>
  </tbody>
</table>

## 概覽

我們在之前的教程中創建的[LocalLibrary](/zh-TW/docs/Learn/Server-side/Django/Tutorial_local_library_website) 網站允許用戶瀏覽目錄中的書籍和作者。 雖然內容是從數據庫動態生成的，但每個用戶在使用該網站時基本上都可以訪問相同的頁面和信息類型。

在一個"真實"的庫中，您可能希望根據用戶以前對網站的使用，首選項等為單個用戶提供定制的體驗。例如，您可以隱藏或存儲用戶下次訪問網站時之前已確認的警告消息，或尊重他們的偏好（例如，他們希望在每個頁面上顯示的搜索結果的數量）。

會話框架允許您實現這種行為，從而允許您基於每個站點訪問者存儲和檢索任意數據。

## What are sessions?

Web 瀏覽器和服務器之間的所有通信都是通過 HTTP 協議進行的，該協議是無狀態的。該協議是無狀態的事實意味著客戶端和服務器之間的消息是完全相互獨立的-沒有基於先前消息的「序列」或行為的概念。因此，如果您想擁有一個跟踪與客戶之間正在進行的關係的站點，則需要自己實施。

會話是 Django（以及大多數 Internet）使用的機制，用於跟踪站點與特定瀏覽器之間的「狀態」。會話允許您在每個瀏覽器中存儲任意數據，並且只要瀏覽器連接，該數據就可用於站點。然後，與會話相關聯的單個數據項被一個\`\`鍵''引用，該鍵既用於存儲又用於檢索數據。

Django 使用包含特殊會話 ID 的 cookie 來標識每個瀏覽器及其與站點的關聯會話。默認情況下，實際會話數據默認存儲在站點數據庫中（這比將數據存儲在 cookie 中更安全，因為 cookie 在 cookie 中更容易受到惡意用戶的攻擊）。您可以將 Django 配置為將會話數據存儲在其他位置（緩存，文件或是「安全」 Cookie），但是默認位置是一個很好且相對安全的選擇。

## Enabling sessions

當我們[創建框架網站](/zh-TW/docs/Learn/Server-side/Django/skeleton_website)時（在教程 2 中），將自動啟用會話。

在項目文件的`INSTALLED_APPS` 和`MIDDLEWARE` 部分中進行配置(**locallibrary/locallibrary/settings.py**)，如下所示：

```python
INSTALLED_APPS = [
    ...
    'django.contrib.sessions',
    ....

MIDDLEWARE = [
    ...
    'django.contrib.sessions.middleware.SessionMiddleware',
    ....
```

## Using sessions

您可以從`request` 參數（作為視圖的第一個參數傳入的`HttpRequest` ）中訪問視圖中的`session` 屬性。 此會話屬性表示與當前用戶的特定連接（或更確切地說，與當前瀏覽器的連接，由該站點的瀏覽器 cookie 中的會話 ID 標識）。

`session` 屬性是一個類似於字典的對象，您可以在視圖中隨意讀取和寫入多次，並根據需要對其進行修改。 您可以執行所有正常的字典操作，包括清除所有數據，測試是否存在鍵，循環訪問數據等。儘管如此，在大多數情況下，您只會使用標準的\`\`字典''API 來獲取和設置值。

下面的代碼片段顯示瞭如何獲取，設置和刪除與當前會話（瀏覽器）相關的鍵「 `my_car`」的某些數據。

> **備註：** Django 的一大優點是，您無需考慮將會話綁定到視圖中當前請求的機制。 如果我們在視圖中使用以下片段，我們將知道有關`my_car` 的信息僅與發送當前請求的瀏覽器相關聯。

```python
# Get a session value by its key (e.g. 'my_car'), raising a KeyError if the key is not present
my_car = request.session['my_car']

# Get a session value, setting a default if it is not present ('mini')
my_car = request.session.get('my_car', 'mini')

# Set a session value
request.session['my_car'] = 'mini'

# Delete a session value
del request.session['my_car']
```

該 API 還提供了許多其他方法，這些方法主要用於管理關聯的會話 cookie。 例如，有一些方法可以測試客戶端瀏覽器是否支持 cookie，設置和檢查 cookie 到期日期以及從數據存儲中清除過期的會話。 您可以在如 [How to use sessions](https://docs.djangoproject.com/en/2.0/topics/http/sessions/) 找到完整的 API（Django 文檔）。

## Saving session data

默認情況下，當會話已被修改（分配）或刪除時，Django 僅保存到會話數據庫並將會話 cookie 發送給客戶端。 如果您要使用上一節中所示的會話密鑰更新某些數據，則無需擔心！ 例如：

```python
# This is detected as an update to the session, so session data is saved.
request.session['my_car'] = 'mini'
```

如果您要更新會話數據中的某些信息，則 Django 將不會識別您已對會話進行了更改並保存了數據（例如，如果要在「 `my_car`」數據中更改「 `wheels`」數據， 如下所示）。 在這種情況下，您需要將會話明確標記為已修改。

```python
# Session object not directly modified, only data within the session. Session changes not saved!
request.session['my_car']['wheels'] = 'alloy'

# Set session as modified to force data updates/cookie to be saved.
request.session.modified = True
```

> **備註：** 您可以更改行為，以便站點可以通過在您的項目設置（**locallibrary/locallibrary/settings.py**）中添加`SESSION_SAVE_EVERY_REQUEST = True` 來更新每個請求的數據庫/發送 cookie。

## Simple example — getting visit counts

作為一個簡單的真實示例，我們將更新我們的庫以告知當前用戶他們訪問 LocalLibrary 主頁的次數。

打開/ **/locallibrary/catalog/views.py**，然後進行以下粗體顯示的更改。

```python
def index(request):
    ...

    num_authors = Author.objects.count()  # The 'all()' is implied by default.

    # Number of visits to this view, as counted in the session variable.
    num_visits = request.session.get('num_visits', 0)
    request.session['num_visits'] = num_visits + 1

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
        'num_visits': num_visits,
    }

    # Render the HTML template index.html with the data in the context variable.
    return render(request, 'index.html', context=context)
```

在這裡，我們首先獲取`'num_visits'`會話密鑰的值，如果之前未設置，則將其設置為 0。 每次接收到請求時，我們都將增加該值並將其存儲回會話中（對於下一次用戶訪問該頁面）。 然後將`num_visits` 變量傳遞到我們的上下文變量中的模板。

> **備註：** 我們也可能會在此處測試瀏覽器是否甚至支持 cookie（例如，請參閱[How to use sessions](https://docs.djangoproject.com/en/2.0/topics/http/sessions/)）或設計我們的 UI，以便無論是否支持 cookie 都無關緊要。

將以下區塊底部看到的行添加到\`\`動態內容''部分底部的主 HTML 模板(**/locallibrary/catalog/templates/index.html**)中以顯示上下文變量：

```django
<h2>Dynamic content</h2>

<p>The library has the following record counts:</p>
<ul>
  <li><strong>Books:</strong> \{{ num_books }}</li>
  <li><strong>Copies:</strong> \{{ num_instances }}</li>
  <li><strong>Copies available:</strong> \{{ num_instances_available }}</li>
  <li><strong>Authors:</strong> \{{ num_authors }}</li>
</ul>

<p>
  You have visited this page \{{ num_visits }} time\{{ num_visits|pluralize }}.
</p>
```

保存更改，然後重新啟動測試服務器。 每次刷新頁面時，數字都會更新。

## 總結

現在，您知道使用會話來改善與匿名用戶的交互是多麼容易。

在接下來的文章中，我們將說明身份驗證和授權（權限）框架，並向您展示如何支持用戶帳戶。

## See also

- [How to use sessions](https://docs.djangoproject.com/en/2.0/topics/http/sessions/) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/Authentication", "Learn/Server-side/Django")}}
