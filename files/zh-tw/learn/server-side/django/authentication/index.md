---
title: "Django Tutorial Part 8: User authentication and permissions"
slug: Learn/Server-side/Django/Authentication
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}

在本教程中，我們將會展示如何允許用戶使用自己的帳戶登入到您的網站，以及如何根據用戶是否已登入和權限的不同來控制他們可以執行和查看的內容。作為展示的一部分，我們會擴展 [LocalLibrary](/zh-TW/docs/Learn/Server-side/Django/Tutorial_local_library_website) 網站，添加登入頁面和登出頁面，以及用來查看已借閱的圖書的頁面 - 分為用戶與員工兩種不同頁面。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提:</th>
      <td>
        完成至
        <a href="/zh-TW/docs/Learn/Server-side/Django/Sessions"
          >Django 線上教學 7: 會話(Sessions)框架</a
        >為止的所有主題。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>了解如何設定與運用使用者驗證與權限機制。</td>
    </tr>
  </tbody>
</table>

## 大綱

Django 提供認證和授權（「 permission」）系統，該系統建立在[上一教程](/zh-TW/docs/Learn/Server-side/Django/Sessions)中討論的會話框架的基礎上。透過它可以驗證用戶憑證並定義個別用戶能夠執行的操作。 該框架包括用於`Users` 和`Groups` 的內置模型（一般常用來一次性套用權限於一群用戶上的方式），用於指定用戶是否可以執行任務的權限/旗標，用於登入用戶的表單和視圖，以及 查看用於限制內容的工具。

> **備註：** 從 Django 角度而言，身份驗證系統需要做到非常通用，因此不提供其他網頁身份驗證系統中提供的某些功能。 需要解決一些常見問題的話可以透過第三方軟件包。 例如，限制登錄嘗試和透過第三方進行身份驗證（例如 OAuth）。

在本教程中，我們將會展示如何在[LocalLibrary](/zh-TW/docs/Learn/Server-side/Django/Tutorial_local_library_website)網站中啟用用戶身份驗證，並建立自己的登入和登出頁面，為模型添加權限以及控制對頁面的訪問。 我們將根據身份驗證/權限顯示為用戶或是圖書館員設計的已借出書籍列表。

身份驗證系統非常有彈性，您可以根據需要從頭開始構建 URL，表單，視圖和模板，只透過提供的 API 來登入用戶。 但是，在本文中，我們將為登入與登出頁面使用 Django 的「 stock」身份驗證視圖和表單。 我們仍然需要建立一些模板，但這很簡單。

我們還將向您展示如何建立權限，並在視圖和模板中檢查登入狀態和權限。

## Enabling authentication

當我們[創建框架網站](/zh-TW/docs/Learn/Server-side/Django/skeleton_website)時（在教程 2 中），身份驗證已自動啟用，因此您此時無需執行任何其他操作。

> **備註：** 當我們使用`django-admin startproject`命令創建應用程序時，所有必要的配置都為我們完成了。 用戶和模型權限的數據庫表是在我們首次調用`python manage.py migrate`時創建的。

該配置是在項目文件(**locallibrary/locallibrary/settings.py**)的`INSTALLED_APPS` 和`MIDDLEWARE` 部分中設置的，如下所示：

```python
INSTALLED_APPS = [
    ...
    'django.contrib.auth',  #Core authentication framework and its default models.
    'django.contrib.contenttypes',  #Django content type system (allows permissions to be associated with models).
    ....

MIDDLEWARE = [
    ...
    'django.contrib.sessions.middleware.SessionMiddleware',  #Manages sessions across requests
    ...
    'django.contrib.auth.middleware.AuthenticationMiddleware',  #Associates users with requests using sessions.
    ....
```

## Creating users and groups

當我們在教程 4 中查看[Django 管理站](/zh-TW/docs/Learn/Server-side/Django/Admin_site)點時，您已經創建了第一個用戶（這是一個超級用戶，使用命令 p`python manage.py createsuperuser`創建）。 我們的超級用戶已經通過身份驗證，並且具有所有權限，因此我們需要創建一個測試用戶來代表普通站點用戶。 我們將使用管理站點來創建本地圖書館組和網站登錄名，因為這是最快的方法之一。

> **備註：** 您還可以通過編程方式創建用戶，如下所示。 例如，如果要開發一個界面以允許用戶創建自己的登錄名，則必須這樣做（您不應授予用戶訪問管理站點的權限）。
>
> ```python
> from django.contrib.auth.models import User
>
> # Create user and save to the database
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Update fields and then save again
> user.first_name = 'John'
> user.last_name = 'Citizen'
> user.save()
> ```

在下面，我們將首先創建一個組，然後創建一個用戶。 即使我們還沒有添加庫成員的任何權限，但是如果以後需要添加，將它們一次添加到組中要比分別添加到每個成員要容易得多。

啟動開發服務器，然後在本地 Web 瀏覽器（<http://127.0.0.1:8000/admin/>）中導航到管理站點。 使用您的超級用戶帳戶的憑據登錄到該站點。 管理站點的頂層顯示所有模型，按「 django 應用程序」排序。 在「**Authentication and Authorisation**」部分，您可以單擊**Users** 或**Groups**鏈接以查看其現有記錄。

![Admin site - add groups or users](admin_authentication_add.png)

首先，讓我們為圖書館成員創建一個新組。

1. 單擊**Add**按鈕（在組旁邊）以創建一個新組； 輸入該組的名稱「Library Members」。
   ![Admin site - add group](admin_authentication_add_group.png)
2. 我們不需要該組的任何權限，因此只需按**SAVE** （您將被帶到組列表）。

現在讓我們創建一個用戶：

1. 導航回到管理站點的主頁
2. 單擊「用戶」旁邊的「添加」按鈕以打開「添加用戶」對話框。
   ![Admin site - add user pt1](admin_authentication_add_user_prt1.png)
3. 輸入適合您的測試用戶的用戶名和密碼/密碼確認
4. 按**SAVE**創建用戶。
   管理站點將創建新用戶，並立即將您帶到「更改用戶」視窗，您可以在其中更改用戶名並為用戶模型的可選字段添加信息。 這些字段包括名字，姓氏，電子郵件地址，用戶狀態和權限（僅應設置「活動」標誌）。 在更下方的位置，您可以指定用戶的組和權限，並查看與該用戶相關的重要日期（例如，他們的加入日期和上次登錄日期）。
   ![Admin site - add user pt2](admin_authentication_add_user_prt2.png)
5. 在「組」部分中，從「可用組」列表中選擇「**Library Member**」組，然後按框之間的右箭頭將其移至「選擇的組」框中。![Admin site - add user to group](admin_authentication_user_add_group.png)
6. 我們在這裡不需要執行任何其他操作，因此只需再次選擇**SAVE** 即可進入用戶列表。

就是這樣而已！ 現在，您將擁有一個「普通庫成員」帳戶，您將可以使用該帳戶進行測試（一旦我們實現了頁面以使其能夠登錄）。

> **備註：** 您應該嘗試創建另一個庫成員用戶。 另外，為圖書館員創建一個組，並為其添加用戶！

## Setting up your authentication views

Django 提供了創建身份驗證頁面所需的幾乎所有內容，以處理「開箱即用」的登錄，註銷和密碼管理。 這包括 URL 映射器，視圖和表單，但不包括模板-我們必須創建自己的模板！

在本節中，我們顯示如何將默認系統集成到 LocalLibrary 網站中並創建模板。 我們將它們放在主項目 URL 中。

> **備註：** 您不必使用任何代碼，但是您可能想要使用它，因為它使事情變得容易得多。 如果您更改用戶模型（一個高級主題！），幾乎可以肯定需要更改表單處理代碼，但是即使如此，您仍然可以使用庫存視圖功能。

> **備註：** 在這種情況下，我們可以合理地將身份驗證頁面（包括 URL 和模板）放入目錄應用程序中。 但是，如果我們有多個應用程序，最好將這種共享的登錄行為分開，並使其在整個站點中都可用，這就是我們在此處顯示的內容！

### Project URLs

將以下內容添加到項目 urls.py 文件（**locallibrary/locallibrary/urls.py**）文件的底部：

```python
#Add Django site authentication urls (for login, logout, password management)
urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

導航到<http://127.0.0.1:8000/accounts/> URL（注意尾隨斜杠！），然後 Django 將顯示一個錯誤，指出找不到此 URL，並列出了它嘗試的所有 URL。 從中您可以看到將起作用的 URL，例如：

> **備註：** 使用上述方法會在方括號中添加以下網址，這些網址可用於反轉網址映射。 您無需執行其他任何操作-上面的 url 映射會自動映射以下提到的 URL。
>
> ```python
> accounts/ login/ [name='login']
> accounts/ logout/ [name='logout']
> accounts/ password_change/ [name='password_change']
> accounts/ password_change/done/ [name='password_change_done']
> accounts/ password_reset/ [name='password_reset']
> accounts/ password_reset/done/ [name='password_reset_done']
> accounts/ reset/<uidb64>/<token>/ [name='password_reset_confirm']
> accounts/ reset/done/ [name='password_reset_complete']
> ```

現在嘗試導航到登錄 URL（<http://127.0.0.1:8000/accounts/login/>）。 這將再次失敗，但是會顯示一條錯誤消息，告訴您我們在模板搜索路徑上缺少必需的模板（**registration/login.html**）。 您會在頂部黃色部分看到以下幾行：

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

下一步是在搜索路徑上創建註冊目錄，然後添加**login.html**文件。

### Template directory

我們剛剛添加的 url（和隱式視圖）期望在模板搜索路徑中某個目錄**/registration/** 中找到它們的關聯模板。

對於這個網站，我們將 HTML 頁面放在**templates/registration/**目錄中。 此目錄應位於您的項目根目錄中，即與**catalog** 和**locallibrary** 文件夾相同的目錄中）。 請立即創建這些文件夾。

> **備註：** Your folder structure should now look like the below:
> locallibrary (django project folder)
> |\_catalog
> |\_locallibrary
> |\_templates **(new)**
> |\_registration

為了使這些目錄對模板加載器可見（即將該目錄放置在模板搜索路徑中），請打開項目設置(**/locallibrary/locallibrary/settings.py**)，並更新`TEMPLATES` 部分的`DIRS`行，如圖所示。

```python
TEMPLATES = [
    {
        ...
        'DIRS': ['./templates',],
        'APP_DIRS': True,
        ...
```

### Login template

> **警告：** 本文提供的身份驗證模板是 Django 演示登錄模板的非常基本/稍作修改的版本。 您可能需要自定義它們以供自己使用！

創建一個名為/**locallibrary/templates/registration/login.html**的新 HTML 文件。 為其提供以下內容：

```django
{% extends "base_generic.html" %}

{% block content %}

  {% if form.errors %}
    <p>Your username and password didn't match. Please try again.</p>
  {% endif %}

  {% if next %}
    {% if user.is_authenticated %}
      <p>Your account doesn't have access to this page. To proceed,
      please login with an account that has access.</p>
    {% else %}
      <p>Please login to see this page.</p>
    {% endif %}
  {% endif %}

  <form method="post" action="{% url 'login' %}">
    {% csrf_token %}
    <table>
      <tr>
        <td>\{{ form.username.label_tag }}</td>
        <td>\{{ form.username }}</td>
      </tr>
      <tr>
        <td>\{{ form.password.label_tag }}</td>
        <td>\{{ form.password }}</td>
      </tr>
    </table>
    <input type="submit" value="login">
    <input type="hidden" name="next" value="\{{ next }}">
  </form>

  {# Assumes you setup the password_reset view in your URLconf #}
  <p><a href="{% url 'password_reset' %}">Lost password?</a></p>

{% endblock %}
```

該模板與我們之前看到的模板有一些相似之處-它擴展了我們的基本模板並覆蓋了內容塊。 其餘代碼是相當標準的表單處理代碼，我們將在以後的教程中進行討論。 現在您只需要知道的是，這將顯示一個表格，您可以在其中輸入用戶名和密碼，並且如果輸入無效的值，則在頁面刷新時會提示您輸入正確的值。

保存模板後，導航回到登錄頁面（<http://127.0.0.1:8000/accounts/login/>），您應該看到類似以下內容：

![Library login page v1](library_login.png)

如果嘗試登錄將成功，並且您將被重定向到另一個頁面（默認情況下為<http://127.0.0.1:8000/accounts/profile/>）。 這裡的問題是，默認情況下，Django 期望登錄後將您帶到個人資料頁面，情況可能與否。 由於您尚未定義此頁面，因此會出現另一個錯誤！

打開項目設置(**/locallibrary/locallibrary/settings.py**) ，然後將下面的文本添加到底部。 現在，當您登錄時，默認情況下應將您重定向到網站主頁。

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Logout template

如果您導航到登出 URL (<http://127.0.0.1:8000/accounts/logout/>) ，則會看到一些奇怪的行為-您的用戶將被確定地註銷，但是您將被帶到**Admin** 註銷頁面。 那不是您想要的，僅僅是因為該頁面上的登錄鏈接將您帶到**Admin** 登錄屏幕（並且僅對具有`is_staff` 權限的用戶可用）。

創建並打開 /**locallibrary/templates/registration/logged_out.html**。複製以下文本：

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

這個模板非常簡單。 它僅顯示一條消息，通知您已註銷，並提供一個鏈接，您可以按此鏈接返回登錄屏幕。 如果再次進入註銷 URL，您應該看到以下頁面：

![Library logout page v1](library_logout.png)

### Password reset templates

默認的密碼重置系統使用電子郵件向用戶發送重置鏈接。 您需要創建表格以獲取用戶的電子郵件地址，發送電子郵件，允許他們輸入新密碼並在整個過程完成時註明。

以下模板可以用作起點。

#### 密碼重設表格

這是用於獲取用戶電子郵件地址（用於發送密碼重置電子郵件）的表格。 創建**/locallibrary/templates/registration/password_reset_form.html**，並為其提供以下內容：

```django
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">
  {% csrf_token %}
  {% if form.email.errors %}
    \{{ form.email.errors }}
  {% endif %}
      <p>\{{ form.email }}</p>
    <input type="submit" class="btn btn-default btn-lg" value="Reset password">
  </form>
{% endblock %}
```

#### 密碼重置完成

收集您的電子郵件地址後，將顯示此表單。創建 **/locallibrary/templates/registration/password_reset_done.html**，並為其提供以下內容：

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### 密碼重置電子郵件

該模板提供了 HTML 電子郵件的文本，其中包含我們將發送給用戶的重置鏈接。 創建**/locallibrary/templates/registration/password_reset_email.html**，並為其提供以下內容：

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### 密碼重置確認

單擊密碼重置電子郵件中的鏈接後，即可在此頁面輸入新密碼。 創建 **/locallibrary/templates/registration/password_reset_confirm.html**，並為其提供以下內容：

```django
{% extends "base_generic.html" %}

{% block content %}
    {% if validlink %}
        <p>Please enter (and confirm) your new password.</p>
        <form action="" method="post">
        {% csrf_token %}
            <table>
                <tr>
                    <td>\{{ form.new_password1.errors }}
                        <label for="id_new_password1">New password:</label></td>
                    <td>\{{ form.new_password1 }}</td>
                </tr>
                <tr>
                    <td>\{{ form.new_password2.errors }}
                        <label for="id_new_password2">Confirm password:</label></td>
                    <td>\{{ form.new_password2 }}</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="Change my password"></td>
                </tr>
            </table>
        </form>
    {% else %}
        <h1>Password reset failed</h1>
        <p>The password reset link was invalid, possibly because it has already been used. Please request a new password reset.</p>
    {% endif %}
{% endblock %}
```

#### 密碼重置完成

這是最後一個密碼重設模板，密碼重設成功後將顯示此模板以通知您。 創建**/locallibrary/templates/registration/password_reset_complete.html**，並為其提供以下內容：

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testing the new authentication pages

現在您已經添加了 URL 配置並創建了所有這些模板，身份驗證頁面現在應該可以正常工作了！

您可以通過嘗試使用以下 URL 登錄然後註銷超級用戶帳戶來測試新的身份驗證頁面：

- <http://127.0.0.1:8000/accounts/login/>
- <http://127.0.0.1:8000/accounts/logout/>

您可以通過登錄頁面中的鏈接測試密碼重置功能。 **請注意，Django 只會將重置電子郵件發送到已經存儲在其數據庫中的地址（用戶）！**

> **備註：** 密碼重設系統要求您的網站支持電子郵件，這不在本文的討論範圍之內，因此該部分尚無法使用。 要進行測試，請將以下行放在 settings.py 文件的末尾。 這將記錄發送到控制台的所有電子郵件（因此您可以從控制台複製密碼重置鏈接）。
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> 有關更多信息，請參閱發送電子郵件（[Sending email](https://docs.djangoproject.com/en/2.0/topics/email/)Django 文檔）。

## 針對經過身份驗證的用戶進行測試

本節介紹如何根據用戶是否登錄來有選擇地控制用戶看到的內容。

### 在模板中測試

您可以使用 `\{{ user }}`模板變量在模板中獲取有關當前登錄用戶的信息（默認情況下，就像我們在框架中一樣設置項目時，該信息會添加到模板上下文中）。

通常，您將首先針對 `\{{ user.is_authenticated }}`模板變量進行測試，以確定該用戶是否有資格查看特定內容。 為了演示這一點，接下來，我們將更新邊欄，以在用戶註銷時顯示「登錄」鏈接，在用戶登錄時顯示「註銷」鏈接。

打開基礎模板。 (**/locallibrary/catalog/templates/base_generic.html**) ，然後將以下文本複製到`sidebar` 塊中，緊接在`endblock` 模板標籤之前。

```django
  <ul class="sidebar-nav">

    …

   {% if user.is_authenticated %}
     <li>User: \{{ user.get_username }}</li>
     <li><a href="{% url 'logout' %}?next=\{{ request.path }}">Logout</a></li>
   {% else %}
     <li><a href="{% url 'login' %}?next=\{{ request.path }}">Login</a></li>
   {% endif %}
  </ul>
```

如您所見，我們使用 `if`-`else`-`endif` 模板標籤根據 `\{{ user.is_authenticated }}` \ {{user.is_authenticated}}是否為真來有條件地顯示文本。 如果用戶通過了身份驗證，那麼我們知道我們有一個有效的用戶，因此我們調用 **\\{{ user.get_username }}** 來顯示其名稱。

我們使用 `url` 模板標記和相應 URL 配置的名稱來創建登錄和註銷鏈接 URL。 還要注意我們如何將`?next=\{{request.path}}`附加到 URL 的末尾。 這是在鏈接的 URL 的末尾添加一個 URL 參數，其中包含當前頁面的地址（URL）。 用戶成功登錄/註銷後，視圖將使用此 `next` 值將用戶重定向到他們首先單擊 login/logout 鏈接的頁面。

> **備註：** 試試看！ 如果您在主頁上，然後單擊側欄中的「Login/Logout」，那麼在操作完成後，您應該回到同一頁面。

### 在視圖中測試

如果您使用的是基於函數的視圖，則限制訪問函數的最簡單方法是將`login_required` 裝飾器應用於視圖函數，如下所示。 如果用戶已登錄，則您的視圖代碼將正常執行。 如果用戶未登錄，它將重定向到項目設置（`settings.LOGIN_URL`）中定義的登錄 URL，並將當前的絕對路徑作為`next` URL 參數傳遞。 如果用戶成功登錄，則他們將返回此頁面，但這次已通過身份驗證。

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    ...
```

> **備註：** 您可以通過在`request.user.is_authenticated`上進行測試來手動執行相同的操作，但是裝飾器要方便得多！

同樣，在基於類的視圖中限制對登錄用戶的訪問權限的最簡單方法是從 `LoginRequiredMixin`. 派生。 您需要首先在父類列表中，在主視圖類之前聲明此混合。

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    ...
```

它具有與 `login_required` 裝飾器完全相同的重定向行為。 如果用戶未通過身份驗證，也可以指定其他位置來重定向用戶 (`login_url`)，並使用 URL 參數名稱代替「 next」來插入當前的絕對路徑(`redirect_field_name`).。

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

有關更多詳細信息，請在此處查看[Django 文檔](https://docs.djangoproject.com/en/2.0/topics/auth/default/#limiting-access-to-logged-in-users)。

## 範例—列出當前用戶的書籍

現在，我們知道瞭如何將頁面限制為特定用戶，讓我們創建當前用戶借閱的書籍的視圖。

不幸的是，我們還沒有任何方式讓用戶借書！ 因此，在創建圖書清單之前，我們將首先擴展`BookInstance` 模型以支持借用的概念，並使用 Django Admin 應用程序將大量圖書借給我們的測試用戶。

### 模型

首先，我們將必須使用戶可以藉用`BookInstance` （我們已經具有`status` 和`due_back` ，但是在該模型和 User 之間還沒有任何關聯。我們將創建 一個使用`ForeignKey` （一對多）字段的方法，我們還需要一種簡單的機制來測試借出的書是否過期。

打開**catalog/models.py**，然後從 `django.contrib.auth.models`導入`User` 模型（將其添加到文件頂部的前一個導入行下面，因此`User` 可供使用它的後續代碼使用）：

```python
from django.contrib.auth.models import User
```

Ne 接下來，將`borrower` 字段添加到`BookInstance` 模型中：

```python
borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
```

當我們在這裡時，讓我們添加一個屬性，我們可以從模板中調用該屬性，以告知特定的圖書實例是否過期。 儘管我們可以在模板本身中進行計算，但是使用如下所示的[屬性](https://docs.python.org/3/library/functions.html#property)會更加高效。

將此添加到文件頂部附近：

```python
from datetime import date
```

現在，在`BookInstance`類中添加以下屬性定義：

```python
@property
def is_overdue(self):
    if self.due_back and date.today() > self.due_back:
        return True
    return False
```

> **備註：** 在進行比較之前，我們首先要驗證`due_back`是否為空。 空的 `due_back`字段將導致 Django 拋出錯誤而不是顯示頁面：空值不可比。 這不是我們希望用戶體驗的東西！

現在，我們已經更新了模型，我們需要在項目上進行新的遷移，然後應用這些遷移：

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

現在打開**catalog/admin.py**，然後將`list_display` 和`fieldsets` 中的`borrower` 字段添加到`BookInstanceAdmin` 類中，如下所示。 這將使該字段在「管理」部分中可見，以便我們可以在需要時將`User` 分配給`BookInstance` 。

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_display = ('book', 'status', 'borrower', 'due_back', 'id')
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book','imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back','borrower')
        }),
    )
```

### Loan a few books

現在可以將書借給特定用戶了，然後借出許多`BookInstance` 記錄。 將他們的`borrowed` 字段設置為測試用戶，`status` 為「借用」，並設置將來和將來的到期日。

> **備註：** 我們不會詳細說明該過程，因為您已經知道如何使用管理網站！

### On loan view

現在，我們將添加一個視圖，以獲取已借給當前用戶的所有書籍的列表。 我們將使用我們熟悉的相同的通用的基於類的列表視圖，但是這次我們還將導入並從`LoginRequiredMixin`派生，以便只有登錄的用戶才能調用此視圖。 我們還將選擇聲明`template_name`，而不使用默認值，因為我們最終可能會擁有一些不同的 BookInstance 記錄列表，並具有不同的視圖和模板。

將以下內容添加到**catalog / views.py**：

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin,generic.ListView):
    """Generic class-based view listing books on loan to current user."""
    model = BookInstance
    template_name ='catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact='o').order_by('due_back')
```

為了將查詢限制為僅針對當前用戶的`BookInstance` 對象，我們重新實現了 `get_queryset()`，如上所示。 請注意，「 o」是「借出」的存儲代碼，我們在`due_back` 日期之前訂購，以便最先顯示最早的項目。

### URL conf for on loan books

現在打開**/catalog/urls.py**並添加指向上面視圖的`path()`（您可以將下面的文本複製到文件末尾）。

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Template for on loan books

現在，我們需要為此頁面添加模板。 首先，創建模板文件 **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** 並為其提供以下內容：

```django
{% extends "base_generic.html" %}

{% block content %}
    <h1>Borrowed books</h1>

    {% if bookinstance_list %}
    <ul>

      {% for bookinst in bookinstance_list %}
      <li class="{% if bookinst.is_overdue %}text-danger{% endif %}">
        <a href="{% url 'book-detail' bookinst.book.pk %}">\{{ bookinst.book.title }}</a> (\{{ bookinst.due_back }})
      </li>
      {% endfor %}
    </ul>

    {% else %}
      <p>There are no books borrowed.</p>
    {% endif %}
{% endblock %}
```

該模板與我們先前為`Book` 和`Author` 物件創建的模板非常相似。 這裡唯一的「新內容」是我們檢查在模型中添加的方法（`bookinst.is_overdue`），並使用它來更改過期項目的顏色。

開發服務器運行時，現在應該可以在瀏覽器中的 <http://127.0.0.1:8000/catalog/mybooks/> 上查看已登錄用戶的列表。 在您的用戶登錄和註銷後進行嘗試（在第二種情況下，應將您重定向到登錄頁面）。

### Add the list to the sidebar

最後一步是將此新頁面的鏈接添加到側欄中。 我們將其放在同一部分中，在該部分中為登錄用戶顯示其他信息。

打開基本模板 (**/locallibrary/catalog/templates/base_generic.html**) 並將粗體顯示的行添加到側邊欄中，如圖所示。

```django
 <ul class="sidebar-nav">
   {% if user.is_authenticated %}
   <li>User: \{{ user.get_username }}</li>

   <li><a href="{% url 'my-borrowed' %}">My Borrowed</a></li>

   <li><a href="{% url 'logout' %}?next=\{{ request.path }}">Logout</a></li>
   {% else %}
   <li><a href="{% url 'login' %}?next=\{{ request.path }}">Login</a></li>
   {% endif %}
 </ul>
```

### What does it look like?

當任何用戶登錄後，他們將在邊欄中看到「_My Borrowed_ 」，並且書的列表顯示如下（第一本書沒有截止日期，這是我們希望在以後的教程中解決的錯誤！） 。

![Library - borrowed books by user](library_borrowed_by_user.png)

## Permissions

權限與模型相關聯，並定義了具有權限的用戶可以在模型實例上執行的操作。 默認情況下，Django 會自動為所有模型賦予添加，更改和刪除權限，從而允許具有權限的用戶通過管理站點執行關聯的操作。 您可以定義自己的模型權限，並將其授予特定用戶。 您還可以更改與同一模型的不同實例關聯的權限。

這樣，對視圖和模板中的權限進行的測試就非常類似於對身份驗證狀態的測試（實際上，對權限的測試也對身份驗證進行了測試）。

### Models

使用`permissions` 字段在模型「`class Meta`」部分中完成權限的定義。 您可以在元組中根據需要指定任意數量的權限，每個權限本身都在嵌套的元組中定義，其中包含權限名稱和權限顯示值。 例如，我們可以定義一個權限，以允許用戶標記已退回一本書，如下所示：

```python
class BookInstance(models.Model):
    ...
    class Meta:
        ...
        permissions = (("can_mark_returned", "Set book as returned"),)
```

然後，我們可以將權限分配給管理站點中的「圖書管理員」組。

打開**catalog/models.py，**然後添加權限，如上所示。 您將需要重新運行遷移（調用 `python3 manage.py makemigrations` 和`python3 manage.py migrate`）以適當地更新數據庫。

### 模板

當前用戶的權限存儲在名為 `\{{ perms }}`. 的模板變量中。 您可以使用關聯的 Django "app"「應用」中的特定變量名稱來檢查當前用戶是否具有特定權限，例如 如果用戶具有此權限，則 `\{{ perms.catalog.can_mark_returned }}` 將為 `True` ，否則為`False`。 我們通常使用模板 `{% if %}` 標籤測試權限，如下所示：

```django
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### 視圖

可以在功能視圖中使用`permission_required` 裝飾器來測試權限，或者在基於類的視圖中使用`PermissionRequiredMixin`. 來測試權限。 模式和行為與登錄身份驗證的模式和行為相同，儘管當然您可能必須合理地添加多個權限。

視圖裝飾器函數：

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    ...
```

基於類的視圖需要權限的混合。

```python
from django.contrib.auth.mixins import PermissionRequiredMixin

class MyView(PermissionRequiredMixin, View):
    permission_required = 'catalog.can_mark_returned'
    # Or multiple permissions
    permission_required = ('catalog.can_mark_returned', 'catalog.can_edit')
    # Note that 'catalog.can_edit' is just an example
    # the catalog application doesn't have such permission!
```

### 範例

我們不會在這裡更新 LocalLibrary； 也許在下一個教程中！

## 挑戰自己

在本文的前面，我們向您展示瞭如何為當前用戶創建一個頁面，列出他們所借用的書。 現在的挑戰是創建一個僅對圖書館員可見的相似頁面，該頁面顯示所有已借書的書，其中包括每個借書人的名字。

您應該能夠遵循與其他視圖相同的模式。 主要區別在於您只需要將視圖限制為圖書館員即可。 您可以根據用戶是否是工作人員來執行此操作（函數裝飾器：`staff_member_required`，模板變量：`user.is_staff`），但是我們建議您改用`can_mark_returned` 權限和`PermissionRequiredMixin`，如上一節所述。

> **警告：** 請記住不要將您的超級用戶用於基於權限的測試（即使尚未定義權限，權限檢查也始終對超級用戶返回 true！）。 而是創建一個圖書管理員用戶，並添加所需的功能。

完成後，您的頁面應類似於以下屏幕截圖。![All borrowed books, restricted to librarian](library_borrowed_all.png)

## 總結

出色的工作-您現在已經創建了一個網站，圖書館成員可以登錄並查看他們自己的內容，館員（具有正確的權限）可以用來查看所有借出的書及其借書人。 目前，我們仍在查看內容，但是當您要開始修改和添加數據時，將使用相同的原理和技術。

在下一篇文章中，我們將研究如何使用 Django 表單來收集用戶輸入，然後開始修改一些存儲的數據。

## 也可以看看

- [User authentication in Django](https://docs.djangoproject.com/en/2.0/topics/auth/) (Django docs)
- [Using the (default) Django authentication system](https://docs.djangoproject.com/en/2.0/topics/auth/default//) (Django docs)
- [Introduction to class-based views > Decorating class-based views](https://docs.djangoproject.com/en/2.0/topics/class-based-views/intro/#decorating-class-based-views) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}
