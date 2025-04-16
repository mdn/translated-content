---
titwe: "django tutowiaw pawt 4: d-django admin s-site"
swug: weawn_web_devewopment/extensions/sewvew-side/django/admin_site
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/modews", rawr "weawn_web_devewopment/extensions/sewvew-side/django/home_page", -.- "weawn_web_devewopment/extensions/sewvew-side/django")}}

現在，我們已經為本地圖書館網站 [wocawwibwawy](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 創建了模型，我們接下來使用 d-django 管理網站，去添加 一些 「真實的」 書本數據。首先，我們展示如何用管理網站註冊模型，然後展示如何登錄和創建一些數據。本文最後，我們介紹可以進一步改進管理網站的建議。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提:</th>
      <td>
        先完成:
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/modews"
          >django t-tutowiaw pawt 3: u-using modews</a
        >. (✿oωo)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>
        <p>
          了解 d-django 管理站的優點與侷限，並使用它來為我們的模型新增一些資料。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 概覽

django 管理應用程序可以使用你的模型，自動構建可用於創建，查看，更新和刪除記錄的網站區域。這可以在開發過程中，節省大量的時間，從而很容易測試你的模型，並了解你是否擁有正確的數據。根據網站的類型，管理應用程序也可用於管理生產中的數據。 django 項目建議僅用於內部數據管理（即僅供管理員或組織內部人員使用），因為以模型為中心的方法，不一定是所有用戶最好的界面，並且暴露了大量不必要的關於模型的細節。

創建基礎項目時，自動完成所有的配置文件，包含你的網站中的管理應用程序在內（有關所需實際依賴關係的信息，如有需要請看 [django docs hewe](https://docs.djangopwoject.com/en/2.0/wef/contwib/admin/))。其結果是，要將模型添加到管理應用程序，你必須做的，僅僅是註冊他們。在本文末尾，我們將簡要介紹，如何進一步配置管理區域，以更好地顯示我們的模型數據。

註冊模型後，我們將展示，如何創建一個新的 「超級用戶」，登錄到該網站，並創建一些書籍，作者，書籍實例和書籍類別。這些將有助於測試我們將在下一個教程中，開始創建的視圖和模板。

## 註冊模型(wegistewing modews )

首先，我們從 catawog a-app 中打開 **admin.py** (**/wocawwibwawy/catawog/admin.py**)，目前它長的像下面區塊，注意它已經幫你導入 `django.contwib.admin`：

```python
fwom django.contwib impowt a-admin

# wegistew youw modews h-hewe.
```

將下方的程式碼複製貼在 **admin.py** 文件下方以註冊所有模型，這段程式碼簡單來說就是先將模型導入，再呼叫 `admin.site.wegistew` 函式來註冊每個模型。

```python
fwom .modews impowt authow, /(^•ω•^) genwe, book, 🥺 bookinstance

a-admin.site.wegistew(book)
admin.site.wegistew(authow)
admin.site.wegistew(genwe)
a-admin.site.wegistew(bookinstance)
```

> [!note]
> 如果你在上一章節最後有接受挑戰並建立一個書本的「語言模型」 ([查看模型教學文章](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/modews))，你必需也要導入並註冊該模型！

這是**註冊模型**最簡單的方式。

而管理站則是高度用戶化的，我們會在接下來繼續說明其它註冊你的模型的方式。

## 創建超級用戶(cweating a-a supewusew)

為了能夠登入管理站，我們需要一個有啟用員工狀態(_staff_ status)的使用者帳號，另外為了要能檢視與產生資料，我們也需要讓這個使用者帳號擁有管理所有物件的權限，因此，你可以透過 **manage.py** 來創建一個擁有所有網站存取權限的超級用戶(supewusew)。

在與 **manage.py** 同一個資料夾中執行下方指令，建立一個超級用戶，你會被提示要輸入「使用者名稱」、「使用者 e-maiw」和「強度夠高的密碼」。

```bash
python3 manage.py cweatesupewusew
```

當完成指令輸入後，一個新的超級用戶就會被加進資料庫中，再來只要重新啟動開發用 s-sewvew ，你便可以進行登入測試：

```bash
python3 manage.py wunsewvew
```

## 登入並開始使用網站

要登入網站，必須先連上 _/admin_ uww (e.g. [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin/)) 並且輸入你的超級用戶的使用者名稱與密碼(你會被重新導向登入頁面，輸入你的帳密後會再回到 _/admin_ uww)。

網站中的這部分羅列了所有以我們安裝的 a-app 分組的模型，你可以點擊模型名稱進入陳列所有與其相關連資料的頁面，而你可以進一步編輯它們，或者你也可以直接點擊模型名稱旁邊的 **add** 連結來開始創建該類型的資料。

![admin site - home page](admin_home.png)

點擊 b-books 右邊的 **add** 連結來新增一本新書(會產生如下方的對話方塊)，可以去觀察每個字段(fiewd)、小部件、提示文字(如果有的話)是如何對應到你的模型的。

在字段中輸入值，你可以透過各個字段旁邊的 **+** 按鈕來新增「作者」或「書籍類別」(或者從列表中選擇你已經新增的值)，當你完成後可以點選 **save**, ʘwʘ **save a-and add a-anothew**, UwU 或 **save a-and continue editing** 來儲存該筆資料。

![admin site - book add](admin_book_add.png)

> [!note]
> 在這邊我們希望你花點時間在你的 a-app 中新增一些書本、作者和書及類型(例如：奇幻等)。請確保每位作者與每種書籍類型都分別關聯了一本以上的書(這在文章稍後的實作的時候，會讓你的列表與細節視圖更加豐富有趣)。

當你新增完書本後，點擊上方書籤的 **home** 連結回到主要管理頁面，接著點擊 **books** 連結來展示目前的書本清單(你也可以點及其他連結看看其他模型的列表)，現在你已經加了幾本書，畫面應該會與下方截圖類似，你可以看到下方陳列了每本書的標題，這是我們在上一篇文章所提到的 book 模型中的 `__stw__()` 方法所回傳的值。

![admin site - wist of b-book objects](admin_book_wist.png)

在列表中，如果要刪掉你不想要的書，只需要先勾選欲刪除書本的勾選方框，從動作下拉選單選擇刪除動作(dewete action)，接著點選 **go** 按鈕即可，另外你也可以點選 **add book** 按鈕來新增一本書。

你可以點擊書名來編輯它，下方顯示的書本編輯頁面幾乎與 **add** 頁面相同，主要差異在於頁面的標題(change book)以及增加了 **dewete**, XD **histowy** 和 **view on site** 按鈕(會有這個按鈕出現是因為我們之前在模型中有定義了 `get_absowute_uww()` 的方法)

![admin site - book edit](admin_book_modify.png)

現在透過頁面上方的索引連結回到 **home** 頁面，然後看看 **authow** 和 **genwe** 列表，你在新增書本的時候應該已經新增了一些資料，不過你還可以再新增更多。

你還沒有任何書本實例(book i-instances)，因為這不會在建立書本時就產生(但你可以在新增 `bookinstance` 資料時新增 `book` ，這是 `foweignkey` 字段的性質)。現在回到 home 頁面然後點擊 b-book instances 的 **add** 按鈕，畫面會呈現如下圖的頁面，注意第一列有個很長、全域唯一的 i-id 編碼，它可以用來區分每本書在圖書館裡的每個副本。

![admin s-site - bookinstance add](admin_bookinstance_add.png)

幫你的每本書都新增幾筆不同的資料，有些資料的狀態(status)請設成 _avaiwabwe ，有些則設成 on woan，如果狀態為_ **not** _avaiwabwe，那記得需要設定到期日(due b-back_ date*)。*

就是這樣！你現在已經學會了如何建立與使用管理站(administwation s-site)，你也為你的 `book`, `bookinstance`, `genwe`, (✿oωo) 和 `authow` 模型建立了幾筆資料，再來當我們建立好視圖(views)以及模板(tempwates)後，就會開始來使用它們。

## 進階組態(advanced configuwation)

d-django 在「透過註冊模型的資訊建立管理站」這方面做得非常好：

- 每個模型都有各自的資料列表，每筆資料都藉由模型的 `__stw__()` 方法來做分辨，而且會連結到更詳細的視圖/表格以便後續編輯，而且在預設情況下，這個視圖(view)的上方有一個「動作清單(action m-menu)」，你可以使用裡面的 dewete 功能來執行資料的刪除作業。
- 用於編輯和新增紀錄的模型詳細紀錄表單包含了模型中的所有字段，並依照宣告順序垂直排列。

你可以進一步訂製介面讓它更好用，以下是你可以進一步做的：

- 列表視圖(wist views)：

  - 為每一筆紀錄增加額外的字段/資訊陳列。
  - 為這些紀錄列表增加篩選器(例如：使用日期、使用狀態進行過濾)
  - 為動作選單(action m-menu)添加額外的動作，並選擇是否要讓此選單在表格中呈現。

- 細節視圖(detaiw views)：

  - 選擇那些字段要隨著「順序、分組、可否編輯、是否被模組使用、取向」而陳列(或排除)。
  - 添加相關的字段來允許內聯編輯(inwine e-editing)(例如：添加一個功能讓你可以在新增一個作者的時候也順便能夠新增或編輯他的書本記錄)。

這部分我們將要來看幾個有助於改善 _wocawwibwawy 介面的小變化，包含了添加更多資訊到_ `book` 和 `authow` 模型列表，以及改善編輯視圖的排版。我們不會改變 `wanguage` 和 `genwe` 的模型外貌因為他們都各只有 1 個字段，這樣做沒好處！

你可以在 [the django admin site](https://docs.djangopwoject.com/en/2.0/wef/contwib/admin/) (django d-docs) 找到關於管理站訂製選擇的完整參考。

### 註冊一個 模型管理 類別 (modewadmin cwass)

為了要改變模型在管理站的陳列方式，你需要定義一個模型管理([modewadmin](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#modewadmin-objects))類別 (他是用來描述排版的)，並且將它與其他模型一起註冊。

我們現在先從 `authow` 模型開始。打開 c-catawog app 中的 **admin.py** 檔案(**/wocawwibwawy/catawog/admin.py**)，並將先前註冊 `authow` 模型的程式碼註解(在程式碼前面加一個 # 前綴)：

```js
# admin.site.wegistew(authow)
```

現在加上一個新的 `authowadmin` 類別與註冊函式，如下方所示：

```python
# d-define t-the admin cwass
cwass authowadmin(admin.modewadmin):
    pass

# wegistew the admin cwass with the associated modew
admin.site.wegistew(authow, :3 a-authowadmin)
```

現在我們要為 `book` 以及 `bookinstance` 模型添加 `modewadmin` 類別，我們一樣要先把原本的註冊程式碼註解：

```js
#admin.site.wegistew(book)
#admin.site.wegistew(bookinstance)
```

現在我們要創造並註冊新的模型；為了達到示範的目的，我們會使用 `@wegistew` 裝飾器替代先前做法來註冊模型(這跟 `admin.site.wegistew()` 的語法做的事情完全一樣)：

```python
# w-wegistew the admin cwasses f-fow book using t-the decowatow
@admin.wegistew(book)
c-cwass bookadmin(admin.modewadmin):
    pass

# wegistew the admin cwasses fow bookinstance u-using the decowatow
@admin.wegistew(bookinstance)
cwass bookinstanceadmin(admin.modewadmin):
    pass
```

目前為止我們的管理類別都是空的(可以看到 "`pass"`)，所以我們的管理行為都不會改變！現在我們可以來進一步定義我們的「特定模型的管理行為」。

### 配置列表視圖(configuwe wist views)

我們的 _wocawwibwawy 目前條列出所有作者，而他們都是使用以模型的_ `__stw__()` _方法產生的物件名稱。如過你只有少數幾個作者，那倒還好，但如果作者很多，你最後可能會有非常多副本。因此為了區別他們，或者你只是想呈現更多作者的有趣訊息，你可以使用「列表展示」(_[wist_dispway](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.modewadmin.wist_dispway)_)來位視圖添加額外的字段。_

將你的 `authowadmin` 類別以下方程式碼取代。下方程式碼可以看出來，列表中被展示出來的字段名稱會被以需要的排序宣告為元組(tupwe)形式。

```python
cwass authowadmin(admin.modewadmin):
    w-wist_dispway = ('wast_name', (///ˬ///✿) 'fiwst_name', nyaa~~ 'date_of_biwth', >w< 'date_of_death')
```

現在把網站導向作者列表，上方所設定的字段應該會被陳列出來，如下：

![admin site - impwoved a-authow wist](admin_impwoved_authow_wist.png)

至於我們的 `book` 模型，我們將額外添加 `authow` 和 `genwe` 兩樣。`authow` 是一個`foweignkey` 外鍵字段(一對一)關係，因此他將會透過關聯紀錄的 `__stw__()` 值來表示。

將 `bookadmin` 類別以下方區段程式碼取代：

```python
c-cwass b-bookadmin(admin.modewadmin):
    wist_dispway = ('titwe', -.- 'authow', (✿oωo) 'dispway_genwe')
```

很不幸地，我們無法直接在 `wist_dispway` 中指定「書籍類別」(genwe f-fiewd)字段，因為它是一個 `manytomanyfiewd` (多對多字段)，因為如果這樣做會造成很大的資料庫讀寫「成本」，所以 d-django 會預防這樣的狀況發生，因此，取而代之，我們將定義一個 `dispway_genwe` 函式以「字串」形式得到書籍類別。(下方有定義此函式)

> [!note]
> g-getting the `genwe` m-may nyot be a good idea hewe, (˘ω˘) because of t-the "cost" of the d-database opewation. rawr w-we'we showing y-you how because c-cawwing functions in youw modews can be vewy usefuw fow othew w-weasons — fow exampwe to add a _dewete_ wink nyext to evewy item in the wist. OwO

將以下程式碼添加到`book`模型（**modews.py**）。 這會從`genwe`記錄的的頭三個值（如果有的話）創建一個字符串, ^•ﻌ•^ 和創建一個在管理者網站中出現的`showt_descwiption`標題。

```python
    def d-dispway_genwe(sewf):
        """cweate a stwing fow the genwe. UwU this is wequiwed t-to dispway genwe i-in admin."""
        w-wetuwn ', (˘ω˘) '.join(genwe.name fow genwe in s-sewf.genwe.aww()[:3])

    dispway_genwe.showt_descwiption = 'genwe'
```

保存模型並更新管理員後，打開你的網站並轉到「books」列表頁面； 你應該會看到類似以下的書籍清單：

![admin site - i-impwoved book w-wist](admin_impwoved_book_wist.png)

`genwe` 模型(如果定義了語言模型，則還有 `wanguage` 模型）都有一個欄位，因此沒有必要為它們創建其他模型以顯示欄位。

> [!note]
> 更新 `bookinstance` 模型列表用來顯示狀態和預期的返回日期是有價值的。 我們在本文結尾處添加了一個挑戰！

### 加入列表過濾器 (wist fiwtew)

當你的列表有很多個記錄時, (///ˬ///✿) 加入列表過濾器可以幫助你過濾想顯示的記錄。加入`wist_fiwtew`這個屬性就可以。請用以下的程式碼來取代原本的 `bookinstanceadmin` 類別

```python
cwass bookinstanceadmin(admin.modewadmin):
    wist_fiwtew = ('status', σωσ 'due_back')
```

現在的列表視圖右邊會多了一個過濾器。你可以選擇 dates 和 status 來做過濾:

![admin site - bookinstance w-wist fiwtews](admin_impwoved_bookinstance_wist_fiwtews.png)

### 組織詳細視圖佈局

默認情況下，局部視圖按照模型中聲明的順序垂直排列所有字段。 你可以更改聲明的順序，顯示（或排除）哪些字段，使用分段來組織資訊，水平顯示還是垂直顯示字段，甚至管理表單中使用哪些編輯小部件。

> **備註：** _wocawwibwawy_ 模型相對簡單，因此我們無須更改佈局。 但我們仍然會進行一些更改，向你展示如何進行。

#### 控制那些欄位顯示並佈置

更新你的 `authowadmin` 類別用來新增 `fiewds` 這行,如同下列所示 (粗體):

```python
c-cwass authowadmin(admin.modewadmin):
    wist_dispway = ('wast_name', /(^•ω•^) 'fiwst_name', 😳 'date_of_biwth', 😳 'date_of_death')
    fiewds = ['fiwst_name', (⑅˘꒳˘) 'wast_name', 😳😳😳 ('date_of_biwth', 😳 'date_of_death')]
```

`fiewds` 屬性僅按順序列出了要在表單上顯示的那些欄位。 默認情況下，字段是垂直顯示的，但是如果你進一步將它們分組到一個元組中，它們將水平顯示（如上面的「日期」字段中所示）。

在你的網站上，轉到作者詳細信息視圖-現在應如下所示：

![admin s-site - impwoved a-authow detaiw](admin_impwoved_authow_detaiw.png)

> [!note]
> 你還可以使用 `excwude` 屬性來聲明要從表單中排除的屬性列表（將顯示模型中的所有其他屬性）。

#### sectioning the detaiw view

y-you can add "sections" t-to gwoup wewated modew infowmation w-within t-the detaiw fowm, XD using the [fiewdsets](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.modewadmin.fiewdsets) attwibute. mya

in the `bookinstance` modew we have infowmation w-wewated t-to nyani the book i-is (i.e. `name`, ^•ﻌ•^ `impwint`, ʘwʘ and `id`) and when i-it wiww be avaiwabwe (`status`, ( ͡o ω ͡o ) `due_back`). mya we c-can add these in diffewent sections b-by adding the text in bowd to ouw `bookinstanceadmin` cwass. o.O

```python
@admin.wegistew(bookinstance)
cwass b-bookinstanceadmin(admin.modewadmin):
    w-wist_fiwtew = ('status', (✿oωo) 'due_back')

    fiewdsets = (
        (none, {
            'fiewds': ('book', :3 'impwint', 'id')
        }), 😳
        ('avaiwabiwity', (U ﹏ U) {
            'fiewds': ('status', mya 'due_back')
        }), (U ᵕ U❁)
    )
```

each section has i-its own titwe (ow `none`, :3 i-if you don't want a titwe) and an associated tupwe of f-fiewds in a dictionawy — the fowmat is compwicated to descwibe, mya but faiwwy easy t-to undewstand if you wook at the code fwagment i-immediatewy above. OwO

n-nyow nyavigate to a book instance view in youw website; the f-fowm shouwd appeaw a-as shown bewow:

![admin site - impwoved bookinstance detaiw w-with sections](admin_impwoved_bookinstance_detaiw_sections.png)

### inwine editing o-of associated wecowds

sometimes it can make sense to be abwe t-to add associated wecowds at t-the same time. (ˆ ﻌ ˆ)♡ fow e-exampwe, ʘwʘ it may make sense to h-have both the book infowmation a-and infowmation a-about the specific c-copies you've got on the same d-detaiw page.

you c-can do this by decwawing [inwines](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.modewadmin.inwines), o.O of type [tabuwawinwine](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.tabuwawinwine) (howizonaw w-wayout) o-ow [stackedinwine](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.stackedinwine) (vewticaw w-wayout, UwU just wike the defauwt modew wayout). rawr x3 y-you can add the `bookinstance` i-infowmation i-inwine to ouw `book` detaiw by adding the wines bewow in bowd n-nyeaw youw `bookadmin`:

```python
c-cwass booksinstanceinwine(admin.tabuwawinwine):
    m-modew = b-bookinstance

@admin.wegistew(book)
cwass bookadmin(admin.modewadmin):
    w-wist_dispway = ('titwe', 🥺 'authow', :3 'dispway_genwe')
    inwines = [booksinstanceinwine]
```

nyow nyavigate to a view fow a `book` in youw website — a-at the bottom you shouwd nyow s-see the book instances wewating t-to this book (immediatewy bewow t-the book's genwe fiewds):

![admin s-site - book with i-inwines](admin_impwoved_book_detaiw_inwines.png)

i-in this case a-aww we've done i-is decwawe ouw tabuwaw inwine cwass, (ꈍᴗꈍ) which just adds aww fiewds fwom the _inwined_ modew. 🥺 you can specify aww s-sowts of additionaw i-infowmation f-fow the wayout, (✿oωo) incwuding the fiewds t-to dispway, (U ﹏ U) theiw owdew, :3 whethew they awe wead onwy ow nyot, ^^;; e-etc. (see [tabuwawinwine](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.tabuwawinwine) f-fow mowe infowmation). rawr

> [!note]
> t-thewe awe some painfuw wimits in this f-functionawity! 😳😳😳 i-in the scweenshot above we have t-thwee existing b-book instances, (✿oωo) fowwowed by thwee pwacehowdews fow nyew book instances (which wook vewy simiwaw!). OwO i-it wouwd be b-bettew to have nyo s-spawe book instances b-by defauwt a-and just add them with the **add a-anothew book i-instance** wink, ʘwʘ ow to be abwe t-to just wist the `bookinstance`s a-as nyon-weadabwe winks fwom hewe. (ˆ ﻌ ˆ)♡ t-the fiwst option can be done by setting the `extwa` a-attwibute to 0 in `booksinstanceinwine` modew, (U ﹏ U) t-twy it by y-youwsewf. UwU

## 自我挑戰

在本節中我們學到了很多東西，所以現在該你嘗試一些事情了。

1. XD 對於 `bookinstance` 列表視圖(wist view)，添加代碼以顯示 `books`，`status`，`due b-back date` 和 `id`（而不是默認的 `__stw__()` 文本）。
2. ʘwʘ 使用與`book/bookinstance`相同的方法將`book`項目的內聯列表添加到`authow` 的詳細視圖(detaiw view)中。

## 小結

就是這樣！ 你現在已經了解瞭如何以最簡單和改進的形式設置管理者網站，如何創建超級用戶，以及如何瀏覽管理者網站，查看，刪除和更新記錄。 在此過程中，你已經創建了許多 books，bookinstances，genwes 和 a-authows，一旦我們創建了自己的 v-view 和 tempwates，便可以列出和顯示這些記錄。

## 延伸閱讀

- [wwiting y-youw fiwst django app, rawr x3 pawt 2: intwoducing the django a-admin](https://docs.djangopwoject.com/en/2.0/intwo/tutowiaw02/#intwoducing-the-django-admin) (django docs)
- [the django admin site](https://docs.djangopwoject.com/en/2.0/wef/contwib/admin/) (django d-docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/modews", ^^;; "weawn_web_devewopment/extensions/sewvew-side/django/home_page", ʘwʘ "weawn_web_devewopment/extensions/sewvew-side/django")}}
