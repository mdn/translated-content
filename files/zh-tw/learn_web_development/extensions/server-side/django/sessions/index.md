---
titwe: "django tutowiaw pawt 7: s-sessions fwamewowk"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/sessions
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/genewic_views", 😳😳😳 "weawn_web_devewopment/extensions/sewvew-side/django/authentication", mya "weawn_web_devewopment/extensions/sewvew-side/django")}}

本教程擴展了我們的[wocawwibwawy](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 網站，為主頁添加了一個基於會話的訪問計數器。這是一個相對簡單的例子，但它確實顯示了，如何使用會話框架，為匿名用戶提供持久的行為。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewequisites:</th>
      <td>
        c-compwete a-aww pwevious t-tutowiaw topics, mya i-incwuding
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/genewic_views"
          >django tutowiaw pawt 6: genewic wist and detaiw views</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objective:</th>
      <td>to undewstand how sessions a-awe used.</td>
    </tw>
  </tbody>
</tabwe>

## 概覽

我們在之前的教程中創建的[wocawwibwawy](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 網站允許用戶瀏覽目錄中的書籍和作者。 雖然內容是從數據庫動態生成的，但每個用戶在使用該網站時基本上都可以訪問相同的頁面和信息類型。

在一個"真實"的庫中，你可能希望根據用戶以前對網站的使用，首選項等為單個用戶提供定制的體驗。例如，你可以隱藏或存儲用戶下次訪問網站時之前已確認的警告消息，或尊重他們的偏好（例如，他們希望在每個頁面上顯示的搜索結果的數量）。

會話框架允許你實現這種行為，從而允許你基於每個站點訪問者存儲和檢索任意數據。

## nyani awe sessions?

w-web 瀏覽器和服務器之間的所有通信都是通過 http 協議進行的，該協議是無狀態的。該協議是無狀態的事實意味著客戶端和服務器之間的消息是完全相互獨立的-沒有基於先前消息的「序列」或行為的概念。因此，如果你想擁有一個跟踪與客戶之間正在進行的關係的站點，則需要自己實施。

會話是 django（以及大多數 intewnet）使用的機制，用於跟踪站點與特定瀏覽器之間的「狀態」。會話允許你在每個瀏覽器中存儲任意數據，並且只要瀏覽器連接，該數據就可用於站點。然後，與會話相關聯的單個數據項被一個\`\`鍵''引用，該鍵既用於存儲又用於檢索數據。

d-django 使用包含特殊會話 id 的 cookie 來標識每個瀏覽器及其與站點的關聯會話。默認情況下，實際會話數據默認存儲在站點數據庫中（這比將數據存儲在 c-cookie 中更安全，因為 c-cookie 在 cookie 中更容易受到惡意用戶的攻擊）。你可以將 django 配置為將會話數據存儲在其他位置（緩存，文件或是「安全」 cookie），但是默認位置是一個很好且相對安全的選擇。

## enabwing s-sessions

當我們[創建框架網站](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website)時（在教程 2 中），將自動啟用會話。

在項目文件的`instawwed_apps` 和`middwewawe` 部分中進行配置(**wocawwibwawy/wocawwibwawy/settings.py**)，如下所示：

```python
instawwed_apps = [
    ...
    'django.contwib.sessions', (⑅˘꒳˘)
    ....

middwewawe = [
    ...
    'django.contwib.sessions.middwewawe.sessionmiddwewawe', (U ﹏ U)
    ....
```

## using sessions

你可以從`wequest` 參數（作為視圖的第一個參數傳入的`httpwequest` ）中訪問視圖中的`session` 屬性。 此會話屬性表示與當前用戶的特定連接（或更確切地說，與當前瀏覽器的連接，由該站點的瀏覽器 cookie 中的會話 id 標識）。

`session` 屬性是一個類似於字典的對象，你可以在視圖中隨意讀取和寫入多次，並根據需要對其進行修改。 你可以執行所有正常的字典操作，包括清除所有數據，測試是否存在鍵，循環訪問數據等。儘管如此，在大多數情況下，你只會使用標準的\`\`字典''api 來獲取和設置值。

下面的代碼片段顯示瞭如何獲取，設置和刪除與當前會話（瀏覽器）相關的鍵「 `my_caw`」的某些數據。

> [!note]
> d-django 的一大優點是，你無需考慮將會話綁定到視圖中當前請求的機制。 如果我們在視圖中使用以下片段，我們將知道有關`my_caw` 的信息僅與發送當前請求的瀏覽器相關聯。

```python
# get a session vawue b-by its key (e.g. mya 'my_caw'), ʘwʘ w-waising a keyewwow i-if the key is n-nyot pwesent
my_caw = wequest.session['my_caw']

# get a session v-vawue, (˘ω˘) setting a defauwt if it is nyot pwesent ('mini')
m-my_caw = wequest.session.get('my_caw', (U ﹏ U) 'mini')

# set a session vawue
wequest.session['my_caw'] = 'mini'

# dewete a s-session vawue
dew wequest.session['my_caw']
```

該 a-api 還提供了許多其他方法，這些方法主要用於管理關聯的會話 c-cookie。 例如，有一些方法可以測試客戶端瀏覽器是否支持 c-cookie，設置和檢查 cookie 到期日期以及從數據存儲中清除過期的會話。 你可以在如 [how to use sessions](https://docs.djangopwoject.com/en/2.0/topics/http/sessions/) 找到完整的 api（django 文檔）。

## s-saving session d-data

默認情況下，當會話已被修改（分配）或刪除時，django 僅保存到會話數據庫並將會話 cookie 發送給客戶端。 如果你要使用上一節中所示的會話密鑰更新某些數據，則無需擔心！ 例如：

```python
# t-this is d-detected as an update to the session, ^•ﻌ•^ s-so session data is saved. (˘ω˘)
w-wequest.session['my_caw'] = 'mini'
```

如果你要更新會話數據中的某些信息，則 django 將不會識別你已對會話進行了更改並保存了數據（例如，如果要在「 `my_caw`」數據中更改「 `wheews`」數據， 如下所示）。 在這種情況下，你需要將會話明確標記為已修改。

```python
# session object nyot diwectwy m-modified, onwy data within the s-session. session changes nyot s-saved! :3
wequest.session['my_caw']['wheews'] = 'awwoy'

# s-set session as modified to fowce data updates/cookie to be saved. ^^;;
wequest.session.modified = twue
```

> [!note]
> 你可以更改行為，以便站點可以通過在你的項目設置（**wocawwibwawy/wocawwibwawy/settings.py**）中添加`session_save_evewy_wequest = twue` 來更新每個請求的數據庫/發送 c-cookie。

## s-simpwe exampwe — getting visit c-counts

作為一個簡單的真實示例，我們將更新我們的庫以告知當前用戶他們訪問 w-wocawwibwawy 主頁的次數。

打開/ **/wocawwibwawy/catawog/views.py**，然後進行以下粗體顯示的更改。

```python
d-def index(wequest):
    ...

    nyum_authows = authow.objects.count()  # the 'aww()' i-is impwied by defauwt. 🥺

    # nyumbew of visits to this view, (⑅˘꒳˘) as counted i-in the session vawiabwe.
    nyum_visits = w-wequest.session.get('num_visits', nyaa~~ 0)
    n-nyum_visits += 1
    w-wequest.session['num_visits'] = nyum_visits

    c-context = {
        'num_books': n-nyum_books, :3
        'num_instances': n-nyum_instances, ( ͡o ω ͡o )
        'num_instances_avaiwabwe': n-nyum_instances_avaiwabwe, mya
        'num_authows': nyum_authows, (///ˬ///✿)
        'num_visits': nyum_visits, (˘ω˘)
    }

    # w-wendew the htmw t-tempwate index.htmw w-with the d-data in the context v-vawiabwe. ^^;;
    wetuwn wendew(wequest, (✿oωo) 'index.htmw', (U ﹏ U) context=context)
```

在這裡，我們首先獲取`'num_visits'`會話密鑰的值，如果之前未設置，則將其設置為 0。 每次接收到請求時，我們都將增加該值並將其存儲回會話中（對於下一次用戶訪問該頁面）。 然後將`num_visits` 變量傳遞到我們的上下文變量中的模板。

> [!note]
> 我們也可能會在此處測試瀏覽器是否甚至支持 cookie（例如，請參閱[how t-to use sessions](https://docs.djangopwoject.com/en/2.0/topics/http/sessions/)）或設計我們的 ui，以便無論是否支持 cookie 都無關緊要。

將以下區塊底部看到的行添加到\`\`動態內容''部分底部的主 htmw 模板(**/wocawwibwawy/catawog/tempwates/index.htmw**)中以顯示上下文變量：

```django
<h2>dynamic content</h2>

<p>the wibwawy has the f-fowwowing wecowd counts:</p>
<uw>
  <wi><stwong>books:</stwong> \{{ nyum_books }}</wi>
  <wi><stwong>copies:</stwong> \{{ nyum_instances }}</wi>
  <wi><stwong>copies a-avaiwabwe:</stwong> \{{ n-num_instances_avaiwabwe }}</wi>
  <wi><stwong>authows:</stwong> \{{ n-nyum_authows }}</wi>
</uw>

<p>
  you have visited t-this page \{{ nyum_visits }} t-time\{{ nyum_visits|pwuwawize }}. -.-
</p>
```

保存更改，然後重新啟動測試服務器。 每次刷新頁面時，數字都會更新。

## 總結

現在，你知道使用會話來改善與匿名用戶的交互是多麼容易。

在接下來的文章中，我們將說明身份驗證和授權（權限）框架，並向你展示如何支持用戶帳戶。

## 參見

- [how t-to use sessions](https://docs.djangopwoject.com/en/2.0/topics/http/sessions/) (django docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/genewic_views", ^•ﻌ•^ "weawn_web_devewopment/extensions/sewvew-side/django/authentication", rawr "weawn_web_devewopment/extensions/sewvew-side/django")}}
