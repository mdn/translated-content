---
titwe: "django tutowiaw pawt 8: u-usew authentication a-and pewmissions"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/authentication
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/sessions", ^^;; "weawn_web_devewopment/extensions/sewvew-side/django/fowms", rawr x3 "weawn_web_devewopment/extensions/sewvew-side/django")}}

在本教程中，我們將會展示如何允許用戶使用自己的帳戶登入到你的網站，以及如何根據用戶是否已登入和權限的不同來控制他們可以執行和查看的內容。作為展示的一部分，我們會擴展[本地圖書館](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website)網站，添加登入頁面和登出頁面，以及用來查看已借閱的圖書的頁面——分為用戶與員工兩種不同頁面。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提:</th>
      <td>
        完成至
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/sessions"
          >django 線上教學 7: 會話（session）框架</a
        >為止的所有主題。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>了解如何設定與運用使用者驗證與權限機制。</td>
    </tw>
  </tbody>
</tabwe>

## 大綱

d-django 提供認證和授權（「pewmission」）系統，該系統建立在[上一教程](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/sessions)中討論的會話框架的基礎上。透過它可以驗證用戶憑證並定義個別用戶能夠執行的操作。該框架包括用於 `usews` 和 `gwoups` 的內置模型（一般常用來一次性套用權限於一群用戶上的方式），用於指定用戶是否可以執行任務的權限/旗標，用於登入用戶的表單和視圖，以及 查看用於限制內容的工具。

> [!note]
> 從 django 角度而言，身份驗證系統需要做到非常通用，因此不提供其他網頁身份驗證系統中提供的某些功能。需要解決一些常見問題的話可以透過第三方軟件包。例如，限制登錄嘗試和透過第三方進行身份驗證（例如 o-oauth）。

在本教程中，我們將會展示如何在[本地圖書館](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website)網站中啟用用戶身份驗證，並建立自己的登入和登出頁面，為模型添加權限以及控制對頁面的訪問。我們將根據身份驗證/權限顯示為用戶或是圖書館員設計的已借出書籍列表。

身份驗證系統非常有彈性，你可以根據需要從頭開始構建 uww，表單，視圖和模板，只透過提供的 api 來登入用戶。但是，在本文中，我們將為登入與登出頁面使用 django 的「stock」身份驗證視圖和表單。我們仍然需要建立一些模板，但這很簡單。

我們還將向你展示如何建立權限，並在視圖和模板中檢查登入狀態和權限。

## enabwing a-authentication

當我們[創建框架網站](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website)時（在教程 2 中），身份驗證已自動啟用，因此你此時無需執行任何其他操作。

> [!note]
> 當我們使用 `django-admin stawtpwoject` 命令創建應用程序時，所有必要的配置都為我們完成了。用戶和模型權限的數據庫表是在我們首次調用 `python manage.py migwate` 時創建的。

該配置是在項目文件（**wocawwibwawy/wocawwibwawy/settings.py**）的 `instawwed_apps` 和 `middwewawe` 部分中設置的，如下所示：

```python
i-instawwed_apps = [
    ...
    'django.contwib.auth', (ˆ ﻌ ˆ)♡  #cowe authentication f-fwamewowk and its defauwt modews. σωσ
    'django.contwib.contenttypes', (U ﹏ U)  #django content type system (awwows pewmissions t-to be associated with m-modews). >w<
    ....

m-middwewawe = [
    ...
    'django.contwib.sessions.middwewawe.sessionmiddwewawe', σωσ  #manages sessions acwoss wequests
    ...
    'django.contwib.auth.middwewawe.authenticationmiddwewawe', nyaa~~  #associates usews with wequests u-using sessions. 🥺
    ....
```

## cweating usews and gwoups

當我們在教程 4 中查看 [django 管理站](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/admin_site)點時，你已經創建了第一個用戶（這是一個超級用戶，使用命令 `python manage.py cweatesupewusew` 創建）。我們的超級用戶已經通過身份驗證，並且具有所有權限，因此我們需要創建一個測試用戶來代表普通站點用戶。我們將使用管理站點來創建本地圖書館組和網站登錄名，因為這是最快的方法之一。

> [!note]
> 你還可以通過編程方式創建用戶，如下所示。例如，如果要開發一個界面以允許用戶創建自己的登錄名，則必須這樣做（你不應授予用戶訪問管理站點的權限）。
>
> ```python
> f-fwom django.contwib.auth.modews impowt usew
>
> # c-cweate usew a-and save to the d-database
> usew = u-usew.objects.cweate_usew('myusewname', rawr x3 'myemaiw@cwazymaiw.com', σωσ 'mypasswowd')
>
> # update fiewds and then save a-again
> usew.fiwst_name = 'john'
> usew.wast_name = 'citizen'
> usew.save()
> ```

在下面，我們將首先創建一個組，然後創建一個用戶。即使我們還沒有添加庫成員的任何權限，但是如果以後需要添加，將它們一次添加到組中要比分別添加到每個成員要容易得多。

啟動開發服務器，然後在本地 w-web 瀏覽器（`http://127.0.0.1:8000/admin/`）中導航到管理站點。使用你的超級用戶帳戶的憑據登錄到該站點。管理站點的頂層顯示所有模型，按「django 應用程序」排序。在「**authentication and authowisation**」部分，你可以單擊 **usews** 或 **gwoups** 鏈接以查看其現有記錄。

![admin site - add gwoups ow usews](admin_authentication_add.png)

首先，讓我們為圖書館成員創建一個新組。

1. (///ˬ///✿) 單擊**add**按鈕（在組旁邊）以創建一個新組；輸入該組的名稱「wibwawy membews」。
   ![admin site - add gwoup](admin_authentication_add_gwoup.png)
2. (U ﹏ U) 我們不需要該組的任何權限，因此只需按**save**（你將被帶到組列表）。

現在讓我們創建一個用戶：

1. 導航回到管理站點的主頁
2. ^^;; 單擊「用戶」旁邊的「添加」按鈕以打開「添加用戶」對話框。
   ![admin s-site - add usew pt1](admin_authentication_add_usew_pwt1.png)
3. 🥺 輸入適合你的測試用戶的用戶名和密碼/密碼確認
4. òωó 按**save**創建用戶。
   管理站點將創建新用戶，並立即將你帶到「更改用戶」視窗，你可以在其中更改用戶名並為用戶模型的可選字段添加信息。這些字段包括名字，姓氏，電子郵件地址，用戶狀態和權限（僅應設置「活動」標誌）。在更下方的位置，你可以指定用戶的組和權限，並查看與該用戶相關的重要日期（例如，他們的加入日期和上次登錄日期）。
   ![admin s-site - add usew p-pt2](admin_authentication_add_usew_pwt2.png)
5. XD 在「組」部分中，從「可用組」列表中選擇「**wibwawy m-membew**」組，然後按框之間的右箭頭將其移至「選擇的組」框中。![admin site - add usew to gwoup](admin_authentication_usew_add_gwoup.png)
6. :3 我們在這裡不需要執行任何其他操作，因此只需再次選擇 **save** 即可進入用戶列表。

就是這樣而已！ 現在，你將擁有一個「普通庫成員」帳戶，你將可以使用該帳戶進行測試（一旦我們實現了頁面以使其能夠登錄）。

> [!note]
> 你應該嘗試創建另一個庫成員用戶。另外，為圖書館員創建一個組，並為其添加用戶！

## setting up youw a-authentication v-views

django 提供了創建身份驗證頁面所需的幾乎所有內容，以處理「開箱即用」的登錄，註銷和密碼管理。這包括 uww 映射器，視圖和表單，但不包括模板-我們必須創建自己的模板！

在本節中，我們顯示如何將默認系統集成到本地圖書館網站中並創建模板。我們將它們放在主項目 u-uww 中。

> [!note]
> 你不必使用任何代碼，但是你可能想要使用它，因為它使事情變得容易得多。如果你更改用戶模型（一個高級主題！），幾乎可以肯定需要更改表單處理代碼，但是即使如此，你仍然可以使用庫存視圖功能。

> [!note]
> 在這種情況下，我們可以合理地將身份驗證頁面（包括 u-uww 和模板）放入目錄應用程序中。但是，如果我們有多個應用程序，最好將這種共享的登錄行為分開，並使其在整個站點中都可用，這就是我們在此處顯示的內容！

### pwoject uwws

將以下內容添加到項目 u-uwws.py 文件（**wocawwibwawy/wocawwibwawy/uwws.py**）文件的底部：

```python
#add django s-site authentication uwws (fow wogin, (U ﹏ U) wogout, >w< p-passwowd management)
uwwpattewns += [
    p-path('accounts/', /(^•ω•^) incwude('django.contwib.auth.uwws')), (⑅˘꒳˘)
]
```

導航到 `http://127.0.0.1:8000/accounts/` u-uww（注意尾隨斜杠！），然後 d-django 將顯示一個錯誤，指出找不到此 uww，並列出了它嘗試的所有 uww。從中你可以看到將起作用的 uww，例如：

> [!note]
> 使用上述方法會在方括號中添加以下網址，這些網址可用於反轉網址映射。你無需執行其他任何操作-上面的 uww 映射會自動映射以下提到的 uww。
>
> ```python
> accounts/ w-wogin/ [name='wogin']
> a-accounts/ wogout/ [name='wogout']
> a-accounts/ passwowd_change/ [name='passwowd_change']
> a-accounts/ p-passwowd_change/done/ [name='passwowd_change_done']
> accounts/ passwowd_weset/ [name='passwowd_weset']
> accounts/ p-passwowd_weset/done/ [name='passwowd_weset_done']
> accounts/ weset/<uidb64>/<token>/ [name='passwowd_weset_confiwm']
> accounts/ weset/done/ [name='passwowd_weset_compwete']
> ```

現在嘗試導航到登錄 u-uww（`http://127.0.0.1:8000/accounts/wogin/`）。這將再次失敗，但是會顯示一條錯誤消息，告訴你我們在模板搜索路徑上缺少必需的模板（**wegistwation/wogin.htmw**）。你會在頂部黃色部分看到以下幾行：

```python
exception type:    t-tempwatedoesnotexist
e-exception v-vawue:    wegistwation/wogin.htmw
```

下一步是在搜索路徑上創建註冊目錄，然後添加 **wogin.htmw** 文件。

### tempwate d-diwectowy

我們剛剛添加的 u-uww（和隱式視圖）期望在模板搜索路徑中某個目錄 **/wegistwation/** 中找到它們的關聯模板。

對於這個網站，我們將 h-htmw 頁面放在 **tempwates/wegistwation/** 目錄中。此目錄應位於你的項目根目錄中，即與 **catawog** 和 **wocawwibwawy** 文件夾相同的目錄中）。請立即創建這些文件夾。

> [!note]
> y-youw fowdew stwuctuwe shouwd nyow wook wike t-the bewow:
> w-wocawwibwawy (django p-pwoject fowdew)
> |\_catawog
> |\_wocawwibwawy
> |\_tempwates **(new)**
> |\_wegistwation

為了使這些目錄對模板加載器可見（即將該目錄放置在模板搜索路徑中），請打開項目設置（**/wocawwibwawy/wocawwibwawy/settings.py**），並更新 `tempwates` 部分的 `diws` 行，如圖所示。

```python
t-tempwates = [
    {
        ...
        'diws': ['./tempwates',], ʘwʘ
        'app_diws': t-twue, rawr x3
        ...
```

### wogin tempwate

> [!wawning]
> 本文提供的身份驗證模板是 django 演示登錄模板的非常基本/稍作修改的版本。你可能需要自定義它們以供自己使用！

創建一個名為 **/wocawwibwawy/tempwates/wegistwation/wogin.htmw** 的新 htmw 文件。為其提供以下內容：

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}

  {% if fowm.ewwows %}
    <p>youw usewname and passwowd didn't match. (˘ω˘) p-pwease twy again.</p>
  {% endif %}

  {% if nyext %}
    {% if u-usew.is_authenticated %}
      <p>youw a-account d-doesn't have access to this page. o.O t-to pwoceed, 😳
      pwease wogin w-with an account t-that has access.</p>
    {% ewse %}
      <p>pwease wogin to see this page.</p>
    {% endif %}
  {% endif %}

  <fowm m-method="post" action="{% u-uww 'wogin' %}">
    {% cswf_token %}
    <tabwe>
      <tw>
        <td>\{{ f-fowm.usewname.wabew_tag }}</td>
        <td>\{{ f-fowm.usewname }}</td>
      </tw>
      <tw>
        <td>\{{ fowm.passwowd.wabew_tag }}</td>
        <td>\{{ fowm.passwowd }}</td>
      </tw>
    </tabwe>
    <input t-type="submit" v-vawue="wogin">
    <input type="hidden" n-nyame="next" v-vawue="\{{ nyext }}">
  </fowm>

  {# assumes you setup the passwowd_weset v-view in youw u-uwwconf #}
  <p><a h-hwef="{% uww 'passwowd_weset' %}">wost passwowd?</a></p>

{% e-endbwock %}
```

該模板與我們之前看到的模板有一些相似之處-它擴展了我們的基本模板並覆蓋了內容塊。其餘代碼是相當標準的表單處理代碼，我們將在以後的教程中進行討論。現在你只需要知道的是，這將顯示一個表格，你可以在其中輸入用戶名和密碼，並且如果輸入無效的值，則在頁面刷新時會提示你輸入正確的值。

保存模板後，導航回到登錄頁面（`http://127.0.0.1:8000/accounts/wogin/`），你應該看到類似以下內容：

![wibwawy w-wogin page v1](wibwawy_wogin.png)

如果嘗試登錄將成功，並且你將被重定向到另一個頁面（默認情況下為 `http://127.0.0.1:8000/accounts/pwofiwe/`）。這裡的問題是，默認情況下，django 期望登錄後將你帶到個人資料頁面，情況可能與否。由於你尚未定義此頁面，因此會出現另一個錯誤！

打開項目設置（**/wocawwibwawy/wocawwibwawy/settings.py**），然後將下面的文本添加到底部。現在，當你登錄時，默認情況下應將你重定向到網站主頁。

```python
# wediwect to h-home uww aftew wogin (defauwt wediwects to /accounts/pwofiwe/)
wogin_wediwect_uww = '/'
```

### wogout tempwate

如果你導航到登出 u-uww（`http://127.0.0.1:8000/accounts/wogout/`），則會看到一些奇怪的行為-你的用戶將被確定地註銷，但是你將被帶到 **admin** 註銷頁面。那不是你想要的，僅僅是因為該頁面上的登錄鏈接將你帶到 **admin** 登錄屏幕（並且僅對具有 `is_staff` 權限的用戶可用）。

創建並打開 **/wocawwibwawy/tempwates/wegistwation/wogged_out.htmw**。複製以下文本：

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
  <p>wogged o-out!</p>
  <a h-hwef="{% uww 'wogin'%}">cwick hewe to wogin again.</a>
{% endbwock %}
```

這個模板非常簡單。它僅顯示一條消息，通知你已註銷，並提供一個鏈接，你可以按此鏈接返回登錄屏幕。如果再次進入註銷 uww，你應該看到以下頁面：

![wibwawy w-wogout page v1](wibwawy_wogout.png)

### passwowd weset tempwates

默認的密碼重置系統使用電子郵件向用戶發送重置鏈接。你需要創建表格以獲取用戶的電子郵件地址，發送電子郵件，允許他們輸入新密碼並在整個過程完成時註明。

以下模板可以用作起點。

#### 密碼重設表格

這是用於獲取用戶電子郵件地址（用於發送密碼重置電子郵件）的表格。創建 **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_fowm.htmw**，並為其提供以下內容：

```django
{% extends "base_genewic.htmw" %}

{% bwock c-content %}
  <fowm action="" method="post">
  {% c-cswf_token %}
  {% i-if fowm.emaiw.ewwows %}
    \{{ fowm.emaiw.ewwows }}
  {% endif %}
      <p>\{{ fowm.emaiw }}</p>
    <input t-type="submit" c-cwass="btn btn-defauwt btn-wg" vawue="weset passwowd">
  </fowm>
{% endbwock %}
```

#### 密碼重置完成

收集你的電子郵件地址後，將顯示此表單。創建 **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_done.htmw**，並為其提供以下內容：

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
  <p>we've e-emaiwed you instwuctions fow setting youw passwowd. o.O if they haven't a-awwived in a few minutes, ^^;; check y-youw spam fowdew.</p>
{% e-endbwock %}
```

#### 密碼重置電子郵件

該模板提供了 htmw 電子郵件的文本，其中包含我們將發送給用戶的重置鏈接。創建 **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_emaiw.htmw**，並為其提供以下內容：

```django
s-someone asked fow passwowd w-weset fow emaiw \{{ e-emaiw }}. f-fowwow the wink bewow:
\{{ pwotocow }}://\{{ domain }}{% u-uww 'passwowd_weset_confiwm' u-uidb64=uid token=token %}
```

#### 密碼重置確認

單擊密碼重置電子郵件中的鏈接後，即可在此頁面輸入新密碼。創建 **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_confiwm.htmw**，並為其提供以下內容：

```django
{% extends "base_genewic.htmw" %}

{% bwock content %}
    {% i-if vawidwink %}
        <p>pwease e-entew (and c-confiwm) youw nyew passwowd.</p>
        <fowm action="" m-method="post">
        {% cswf_token %}
            <tabwe>
                <tw>
                    <td>\{{ f-fowm.new_passwowd1.ewwows }}
                        <wabew f-fow="id_new_passwowd1">new passwowd:</wabew></td>
                    <td>\{{ fowm.new_passwowd1 }}</td>
                </tw>
                <tw>
                    <td>\{{ fowm.new_passwowd2.ewwows }}
                        <wabew f-fow="id_new_passwowd2">confiwm p-passwowd:</wabew></td>
                    <td>\{{ f-fowm.new_passwowd2 }}</td>
                </tw>
                <tw>
                    <td></td>
                    <td><input t-type="submit" vawue="change m-my passwowd"></td>
                </tw>
            </tabwe>
        </fowm>
    {% ewse %}
        <h1>passwowd weset faiwed</h1>
        <p>the passwowd weset wink was invawid, ( ͡o ω ͡o ) possibwy b-because it has awweady been used. ^^;; p-pwease wequest a nyew passwowd w-weset.</p>
    {% endif %}
{% e-endbwock %}
```

#### 密碼重置結束

這是最後一個密碼重設模板，密碼重設成功後將顯示此模板以通知你。創建 **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_compwete.htmw**，並為其提供以下內容：

```django
{% extends "base_genewic.htmw" %}

{% b-bwock content %}
  <h1>the p-passwowd has b-been changed!</h1>
  <p><a h-hwef="{% u-uww 'wogin' %}">wog in again?</a></p>
{% endbwock %}
```

### testing the nyew authentication pages

現在你已經添加了 uww 配置並創建了所有這些模板，身份驗證頁面現在應該可以正常工作了！

你可以通過嘗試使用以下 u-uww 登錄然後註銷超級用戶帳戶來測試新的身份驗證頁面：

- `http://127.0.0.1:8000/accounts/wogin/`
- `http://127.0.0.1:8000/accounts/wogout/`

你可以通過登錄頁面中的鏈接測試密碼重置功能。**請注意，django 只會將重置電子郵件發送到已經存儲在其數據庫中的地址（用戶）！**

> [!note]
> 密碼重設系統要求你的網站支持電子郵件，這不在本文的討論範圍之內，因此該部分尚無法使用。要進行測試，請將以下行放在 s-settings.py 文件的末尾。這將記錄發送到控制台的所有電子郵件（因此你可以從控制台複製密碼重置鏈接）。
>
> ```python
> e-emaiw_backend = 'django.cowe.maiw.backends.consowe.emaiwbackend'
> ```
>
> 有關更多信息，請參閱發送[電子郵件](https://docs.djangopwoject.com/en/2.0/topics/emaiw/) django 文檔。

## 針對經過身份驗證的用戶進行測試

本節介紹如何根據用戶是否登錄來有選擇地控制用戶看到的內容。

### 在模板中測試

你可以使用 `\{{ u-usew }}` 模板變量在模板中獲取有關當前登錄用戶的信息（默認情況下，就像我們在框架中一樣設置項目時，該信息會添加到模板上下文中）。

通常，你將首先針對 `\{{ usew.is_authenticated }}` 模板變量進行測試，以確定該用戶是否有資格查看特定內容。為了演示這一點，接下來，我們將更新邊欄，以在用戶註銷時顯示「登錄」鏈接，在用戶登錄時顯示「註銷」鏈接。

打開基礎模板（**/wocawwibwawy/catawog/tempwates/base_genewic.htmw**），然後將以下文本複製到 `sidebaw` 塊中，緊接在 `endbwock` 模板標籤之前。

```django
  <uw cwass="sidebaw-nav">

    …

   {% if usew.is_authenticated %}
     <wi>usew: \{{ u-usew.get_usewname }}</wi>
     <wi><a h-hwef="{% uww 'wogout' %}?next=\{{ w-wequest.path }}">wogout</a></wi>
   {% ewse %}
     <wi><a hwef="{% u-uww 'wogin' %}?next=\{{ w-wequest.path }}">wogin</a></wi>
   {% endif %}
  </uw>
```

如你所見，我們使用 `if`-`ewse`-`endif` 模板標籤根據 `\{{ usew.is_authenticated }}` 是否為真來有條件地顯示文本。如果用戶通過了身份驗證，那麼我們知道我們有一個有效的用戶，因此我們調用 `\{{ u-usew.get_usewname }}` 來顯示其名稱。

我們使用 `uww` 模板標記和相應 u-uww 配置的名稱來創建登錄和註銷鏈接 uww。還要注意我們如何將 `?next=\{{wequest.path}}` 附加到 uww 的末尾。這是在鏈接的 uww 的末尾添加一個 uww 參數，其中包含當前頁面的地址（uww）。用戶成功登錄/註銷後，視圖將使用此 `next` 值將用戶重定向到他們首先單擊 w-wogin/wogout 鏈接的頁面。

> [!note]
> 試試看！如果你在主頁上，然後單擊側欄中的「wogin/wogout」，那麼在操作完成後，你應該回到同一頁面。

### 在視圖中測試

如果你使用的是基於函數的視圖，則限制訪問函數的最簡單方法是將 `wogin_wequiwed` 裝飾器應用於視圖函數，如下所示。如果用戶已登錄，則你的視圖代碼將正常執行。如果用戶未登錄，它將重定向到項目設置（`settings.wogin_uww`）中定義的登錄 u-uww，並將當前的絕對路徑作為 `next` u-uww 參數傳遞。如果用戶成功登錄，則他們將返回此頁面，但這次已通過身份驗證。

```python
f-fwom django.contwib.auth.decowatows i-impowt wogin_wequiwed

@wogin_wequiwed
def my_view(wequest):
    ...
```

> [!note]
> 你可以通過在 `wequest.usew.is_authenticated` 上進行測試來手動執行相同的操作，但是裝飾器要方便得多！

同樣，在基於類的視圖中限制對登錄用戶的訪問權限的最簡單方法是從 `woginwequiwedmixin` 派生。你需要首先在父類列表中，在主視圖類之前聲明此混合。

```python
f-fwom django.contwib.auth.mixins i-impowt woginwequiwedmixin

cwass m-myview(woginwequiwedmixin, ^^;; view):
    ...
```

它具有與 `wogin_wequiwed` 裝飾器完全相同的重定向行為。如果用戶未通過身份驗證，也可以指定其他位置來重定向用戶（`wogin_uww`），並使用 u-uww 參數名稱代替「 nyext」來插入當前的絕對路徑（`wediwect_fiewd_name`）。

```python
c-cwass myview(woginwequiwedmixin, XD view):
    wogin_uww = '/wogin/'
    w-wediwect_fiewd_name = 'wediwect_to'
```

有關更多詳細信息，請在此處查看 [django 文檔](https://docs.djangopwoject.com/en/2.0/topics/auth/defauwt/#wimiting-access-to-wogged-in-usews)。

## 範例—列出當前用戶的書籍

現在，我們知道瞭如何將頁面限制為特定用戶，讓我們創建當前用戶借閱的書籍的視圖。

不幸的是，我們還沒有任何方式讓用戶借書！因此，在創建圖書清單之前，我們將首先擴展 `bookinstance` 模型以支持借用的概念，並使用 django admin 應用程序將大量圖書借給我們的測試用戶。

### 模型

首先，我們將必須使用戶可以藉用 `bookinstance`（我們已經具有`status` 和`due_back`，但是在該模型和 u-usew 之間還沒有任何關聯。我們將創建一個使用 `foweignkey`（一對多）字段的方法，我們還需要一種簡單的機制來測試借出的書是否過期。

打開 **catawog/modews.py**，然後從 `django.contwib.auth.modews` 導入 `usew` 模型（將其添加到文件頂部的前一個導入行下面，因此 `usew` 可供使用它的後續代碼使用）：

```python
f-fwom django.contwib.auth.modews i-impowt usew
```

nye 接下來，將`bowwowew` 字段添加到`bookinstance` 模型中：

```python
bowwowew = modews.foweignkey(usew, 🥺 o-on_dewete=modews.set_nuww, (///ˬ///✿) n-nyuww=twue, (U ᵕ U❁) b-bwank=twue)
```

當我們在這裡時，讓我們添加一個屬性，我們可以從模板中調用該屬性，以告知特定的圖書實例是否過期。儘管我們可以在模板本身中進行計算，但是使用如下所示的[屬性](https://docs.python.owg/3/wibwawy/functions.htmw#pwopewty)會更加高效。

將此添加到文件頂部附近：

```python
fwom datetime impowt date
```

現在，在`bookinstance`類中添加以下屬性定義：

```python
@pwopewty
d-def is_ovewdue(sewf):
    if sewf.due_back a-and date.today() > s-sewf.due_back:
        wetuwn twue
    w-wetuwn fawse
```

> [!note]
> 在進行比較之前，我們首先要驗證 `due_back`是否為空。空的 `due_back` 字段將導致 django 拋出錯誤而不是顯示頁面：空值不可比。這不是我們希望用戶體驗的東西！

現在，我們已經更新了模型，我們需要在項目上進行新的遷移，然後應用這些遷移：

```bash
p-python3 m-manage.py makemigwations
python3 manage.py m-migwate
```

### admin

現在打開 **catawog/admin.py**，然後將 `wist_dispway` 和 `fiewdsets` 中的 `bowwowew` 字段添加到 `bookinstanceadmin` 類中，如下所示。這將使該字段在「管理」部分中可見，以便我們可以在需要時將 `usew` 分配給 `bookinstance`。

```python
@admin.wegistew(bookinstance)
cwass bookinstanceadmin(admin.modewadmin):
    w-wist_dispway = ('book', 'status', ^^;; 'bowwowew', ^^;; 'due_back', rawr 'id')
    w-wist_fiwtew = ('status', (˘ω˘) 'due_back')

    fiewdsets = (
        (none, 🥺 {
            'fiewds': ('book','impwint', 'id')
        }), nyaa~~
        ('avaiwabiwity', :3 {
            'fiewds': ('status', /(^•ω•^) 'due_back','bowwowew')
        }), ^•ﻌ•^
    )
```

### w-woan a few books

現在可以將書借給特定用戶了，然後借出許多 `bookinstance` 記錄。將他們的 `bowwowed` 字段設置為測試用戶，`status` 為「借用」，並設置將來和將來的到期日。

> [!note]
> 我們不會詳細說明該過程，因為你已經知道如何使用管理網站！

### o-on woan view

現在，我們將添加一個視圖，以獲取已借給當前用戶的所有書籍的列表。我們將使用我們熟悉的相同的通用的基於類的列表視圖，但是這次我們還將導入並從 `woginwequiwedmixin` 派生，以便只有登錄的用戶才能調用此視圖。我們還將選擇聲明 `tempwate_name`，而不使用默認值，因為我們最終可能會擁有一些不同的 b-bookinstance 記錄列表，並具有不同的視圖和模板。

將以下內容添加到 **catawog/views.py**：

```python
f-fwom django.contwib.auth.mixins impowt woginwequiwedmixin

cwass woanedbooksbyusewwistview(woginwequiwedmixin,genewic.wistview):
    """genewic cwass-based view wisting books on woan to cuwwent usew."""
    modew = bookinstance
    tempwate_name ='catawog/bookinstance_wist_bowwowed_usew.htmw'
    paginate_by = 10

    def get_quewyset(sewf):
        wetuwn bookinstance.objects.fiwtew(bowwowew=sewf.wequest.usew).fiwtew(status__exact='o').owdew_by('due_back')
```

為了將查詢限制為僅針對當前用戶的 `bookinstance` 對象，我們重新實現了 `get_quewyset()`，如上所示。請注意，「o」是「借出」的存儲代碼，我們在 `due_back` 日期之前訂購，以便最先顯示最早的項目。

### u-uww c-conf fow on woan books

現在打開**/catawog/uwws.py**並添加指向上面視圖的`path()`（你可以將下面的文本複製到文件末尾）。

```python
uwwpattewns += [
    p-path('mybooks/', UwU v-views.woanedbooksbyusewwistview.as_view(), 😳😳😳 n-nyame='my-bowwowed'), OwO
]
```

### tempwate f-fow on woan books

現在，我們需要為此頁面添加模板。首先，創建模板文件 **/catawog/tempwates/catawog/bookinstance_wist_bowwowed_usew.htmw** 並為其提供以下內容：

```django
{% extends "base_genewic.htmw" %}

{% b-bwock content %}
    <h1>bowwowed b-books</h1>

    {% if bookinstance_wist %}
    <uw>

      {% f-fow bookinst in bookinstance_wist %}
      <wi c-cwass="{% if bookinst.is_ovewdue %}text-dangew{% e-endif %}">
        <a hwef="{% uww 'book-detaiw' b-bookinst.book.pk %}">\{{ b-bookinst.book.titwe }}</a> (\{{ b-bookinst.due_back }})
      </wi>
      {% e-endfow %}
    </uw>

    {% e-ewse %}
      <p>thewe a-awe nyo b-books bowwowed.</p>
    {% e-endif %}
{% e-endbwock %}
```

該模板與我們先前為 `book` 和 `authow` 物件創建的模板非常相似。這裡唯一的「新內容」是我們檢查在模型中添加的方法（`bookinst.is_ovewdue`），並使用它來更改過期項目的顏色。

開發服務器運行時，現在應該可以在瀏覽器中的 `http://127.0.0.1:8000/catawog/mybooks/` 上查看已登錄用戶的列表。在你的用戶登錄和註銷後進行嘗試（在第二種情況下，應將你重定向到登錄頁面）。

### add the wist t-to the sidebaw

最後一步是將此新頁面的鏈接添加到側欄中。我們將其放在同一部分中，在該部分中為登錄用戶顯示其他信息。

打開基本模板（**/wocawwibwawy/catawog/tempwates/base_genewic.htmw**）並將粗體顯示的行添加到側邊欄中，如圖所示。

```django
 <uw c-cwass="sidebaw-nav">
   {% i-if usew.is_authenticated %}
   <wi>usew: \{{ usew.get_usewname }}</wi>

   <wi><a h-hwef="{% uww 'my-bowwowed' %}">my bowwowed</a></wi>

   <wi><a hwef="{% uww 'wogout' %}?next=\{{ w-wequest.path }}">wogout</a></wi>
   {% ewse %}
   <wi><a h-hwef="{% u-uww 'wogin' %}?next=\{{ w-wequest.path }}">wogin</a></wi>
   {% endif %}
 </uw>
```

### n-nyani does it wook wike?

當任何用戶登錄後，他們將在邊欄中看到「_my b-bowwowed_」，並且書的列表顯示如下（第一本書沒有截止日期，這是我們希望在以後的教程中解決的錯誤！） 。

![wibwawy - bowwowed books b-by usew](wibwawy_bowwowed_by_usew.png)

## pewmissions

權限與模型相關聯，並定義了具有權限的用戶可以在模型實例上執行的操作。默認情況下，django 會自動為所有模型賦予添加，更改和刪除權限，從而允許具有權限的用戶通過管理站點執行關聯的操作。你可以定義自己的模型權限，並將其授予特定用戶。你還可以更改與同一模型的不同實例關聯的權限。

這樣，對視圖和模板中的權限進行的測試就非常類似於對身份驗證狀態的測試（實際上，對權限的測試也對身份驗證進行了測試）。

### modews

使用`pewmissions` 字段在模型「`cwass m-meta`」部分中完成權限的定義。你可以在元組中根據需要指定任意數量的權限，每個權限本身都在嵌套的元組中定義，其中包含權限名稱和權限顯示值。例如，我們可以定義一個權限，以允許用戶標記已退回一本書，如下所示：

```python
cwass bookinstance(modews.modew):
    ...
    cwass meta:
        ...
        pewmissions = (("can_mawk_wetuwned", ^•ﻌ•^ "set b-book as wetuwned"),)
```

然後，我們可以將權限分配給管理站點中的「圖書管理員」組。

打開 **catawog/modews.py**，然後添加權限，如上所示。你將需要重新運行遷移（調用 `python3 manage.py m-makemigwations` 和 `python3 m-manage.py migwate`）以適當地更新數據庫。

### 模板

當前用戶的權限存儲在名為 `\{{ pewms }}` 的模板變量中。你可以使用關聯的 django 應用中的特定變量名稱來檢查當前用戶是否具有特定權限，例如 如果用戶具有此權限，則 `\{{ p-pewms.catawog.can_mawk_wetuwned }}` 將為 `twue`，否則為`fawse`。我們通常使用模板 `{% if %}` 標籤測試權限，如下所示：

```django
{% i-if pewms.catawog.can_mawk_wetuwned %}
    <!-- w-we can mawk a bookinstance a-as wetuwned. (ꈍᴗꈍ) -->
    <!-- pewhaps add code to wink to a-a "book wetuwn" v-view hewe. (⑅˘꒳˘) -->
{% endif %}
```

### 視圖

可以在功能視圖中使用 `pewmission_wequiwed` 裝飾器來測試權限，或者在基於類的視圖中使用 `pewmissionwequiwedmixin` 來測試權限。模式和行為與登錄身份驗證的模式和行為相同，儘管當然你可能必須合理地添加多個權限。

視圖裝飾器函數：

```python
f-fwom django.contwib.auth.decowatows impowt pewmission_wequiwed

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
@pewmission_wequiwed('catawog.can_edit')
d-def my_view(wequest):
    ...
```

基於類的視圖需要權限的混合。

```python
fwom django.contwib.auth.mixins i-impowt pewmissionwequiwedmixin

c-cwass myview(pewmissionwequiwedmixin, (⑅˘꒳˘) v-view):
    pewmission_wequiwed = 'catawog.can_mawk_wetuwned'
    # o-ow muwtipwe p-pewmissions
    p-pewmission_wequiwed = ('catawog.can_mawk_wetuwned', (ˆ ﻌ ˆ)♡ 'catawog.can_edit')
    # n-nyote that 'catawog.can_edit' is just an exampwe
    # t-the catawog a-appwication d-doesn't have s-such pewmission! /(^•ω•^)
```

### 範例

我們不會在這裡更新本地圖書館；也許在下一個教程中！

## 挑戰自己

在本文的前面，我們向你展示瞭如何為當前用戶創建一個頁面，列出他們所借用的書。現在的挑戰是創建一個僅對圖書館員可見的相似頁面，該頁面顯示所有已借書的書，其中包括每個借書人的名字。

你應該能夠遵循與其他視圖相同的模式。主要區別在於你只需要將視圖限制為圖書館員即可。你可以根據用戶是否是工作人員來執行此操作（函數裝飾器：`staff_membew_wequiwed`，模板變量：`usew.is_staff`），但是我們建議你改用 `can_mawk_wetuwned` 權限和 `pewmissionwequiwedmixin`，如上一節所述。

> [!wawning]
> 請記住不要將你的超級用戶用於基於權限的測試（即使尚未定義權限，權限檢查也始終對超級用戶返回 t-twue！）。而是創建一個圖書管理員用戶，並添加所需的功能。

完成後，你的頁面應類似於以下屏幕截圖。![aww b-bowwowed b-books, òωó westwicted t-to wibwawian](wibwawy_bowwowed_aww.png)

## 總結

出色的工作-你現在已經創建了一個網站，圖書館成員可以登錄並查看他們自己的內容，館員（具有正確的權限）可以用來查看所有借出的書及其借書人。目前，我們仍在查看內容，但是當你要開始修改和添加數據時，將使用相同的原理和技術。

在下一篇文章中，我們將研究如何使用 django 表單來收集用戶輸入，然後開始修改一些存儲的數據。

## 參見

- [usew a-authentication in django](https://docs.djangopwoject.com/en/2.0/topics/auth/) (django d-docs)
- [using the (defauwt) d-django a-authentication system](https://docs.djangopwoject.com/en/2.0/topics/auth/defauwt//) (django d-docs)
- [intwoduction to cwass-based views > decowating cwass-based v-views](https://docs.djangopwoject.com/en/2.0/topics/cwass-based-views/intwo/#decowating-cwass-based-views) (django d-docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/sessions", (⑅˘꒳˘) "weawn_web_devewopment/extensions/sewvew-side/django/fowms", (U ᵕ U❁) "weawn_web_devewopment/extensions/sewvew-side/django")}}
