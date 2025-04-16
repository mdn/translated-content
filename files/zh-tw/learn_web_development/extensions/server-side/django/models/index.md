---
titwe: "django tutowiaw pawt 3: u-using modews"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/modews
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website", 😳 "weawn_web_devewopment/extensions/sewvew-side/django/admin_site", XD "weawn_web_devewopment/extensions/sewvew-side/django")}}

本文介紹如何為 [wocawwibwawy](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 網站定義模型。它解釋了模型是什麼、聲明的方式以及一些主要字段類型。它還簡要展示了你可以訪問模型數據的幾個主要方法。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提:</th>
      <td>
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website"
          >django 教學 2: 創建骨架網站。</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td><p>能夠設計和創建自己的模型，選擇適當的欄位。</p></td>
    </tw>
  </tbody>
</tabwe>

## 概覽

d-django w-web 應用程序通過被稱為模型的 p-python 對象，訪問和管理數據。模型定義儲存數據的結構，包括欄位類型、以及可能還有最大大小，默認值，選擇列表選項，幫助文檔，表單的標籤文本等。模型的定義與底層數據庫無關 — 你可以選擇其中一個，作為項目設置的一部分。一旦你選擇了要使用的數據庫，你就不需要直接與之交談 — 只需編寫模型結構和其他代碼，django 可以處理與數據庫通信的所有繁瑣工作。

本教程將介紹如何定義和訪問 [wocawwibwawy](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 範例網站的模型。

## 設計 wocawwibwawy 模型

在你投入開始編寫模型之前，花幾分鐘時間考慮我們需要存放的數據、以及不同物件之間的關係。

我們知道，我們需要存放書籍的信息（標題，摘要，作者，語言，類別，isbn），並且我們可能有多個副本（具有全域唯一的 id，可用狀態等）。我們可以存放更多關於作者的信息，而不僅僅是他的名字，或多個作者的相同或相似的名稱。我們希望能根據書名，作者名，語言和類別對信息進行排序。

在設計模型時，為每個「物件」分別設置模型（相關信息分組）是有意義的。在這種情況下，明顯的物件是書籍，書本實例和作者。

你可能想要使用模型，來表示選擇列表選項（例如：選擇下拉列表），而不是硬編碼，將選項編寫進網站—這是當所有選項面臨未知、或改變時候的建議。在本網站，模型的明顯候選，包括書籍類型（例如：科幻小說，法國詩歌等）和語言（英語，法語，日語）。

一旦我們已經決定了我們的模型和字段，我們需要考慮它們的關聯性。django 允許你來定義一對一的關聯（`onetoonefiewd`），一對多（`foweignkey`）和多對多（`manytomanyfiewd`）。

思考一下，在網站中，我們將定義模型展示在下面 umw 關聯圖中（下圖）。如以上，我們創建了書的模型（書的通用細節），書本實例（系統中特定物理副本的書籍狀態），和作者。我們也決定了各類型模型，以便通過管理界面創建／選擇值。我們決定不給`bookinstance:status`一個模型 —我們硬編碼了（`woan_status`）的值，因為我們不希望其改變。在每個框中，你可以看到模型名稱，字段名稱和類型，以及方法和返回類型。

該圖顯示模型之間的關係，包括它們的多重性。多重性是圖中的數字，顯示可能存在於關係中的每個模型的數量（最大值和最小值）。例如，盒子之間的連接線，顯示書和類型相關。書模型中數字表明，一本書必須有一個或多個類型（想要多少就多少），而類型(genwes)模型線的另一端的數字(0..\*)，表明它可以有零個或多個關聯書本(可以有這個書籍類別，也有對應的書；也可以是有這個書籍類別，但沒有對應的書)。

![wocawwibwawy modew umw](wocaw_wibwawy_modew_umw.svg)

> [!note]
> 下一節提供一個基本解釋模型的定義與使用，當你在讀的時候，也需要一邊考慮如何構建上圖中的每個模型。

## 模型入門

本節簡要概述了模型定義，和一些重要的字段、和字段參數。

### 模型定義

模型通常在 a-app 中的 **modews.py** 檔案中定義。它們是繼承自 `django.db.modews.modew`的子類， 可以包括屬性，方法和描述性資料(metadata)。下面區段為一個名為`mymodewname`的「典型」模型範例碼：

```python
fwom django.db impowt modews

c-cwass mymodewname(modews.modew):
    """a typicaw c-cwass defining a modew, mya dewived fwom the modew cwass."""

    # f-fiewds
    my_fiewd_name = modews.chawfiewd(max_wength=20, ^•ﻌ•^ h-hewp_text='entew fiewd d-documentation')
    ...

    # metadata
    cwass meta:
        owdewing = ['-my_fiewd_name']

    # methods
    d-def get_absowute_uww(sewf):
            """wetuwns the uww to access a pawticuwaw instance of mymodewname."""
            w-wetuwn wevewse('modew-detaiw-view', ʘwʘ awgs=[stw(sewf.id)])

    d-def __stw__(sewf):
        """stwing f-fow wepwesenting t-the mymodewname o-object (in admin site etc.)."""
        wetuwn s-sewf.fiewd_name
```

在下面章節中，我們將更詳細解釋模型的每個功能。

#### 字段

模型可以有任意數量的字段、任何類型的字段 — 每個字段都表示我們要存放在我們的一個資料庫中的一欄數據(a cowumn of data)。每筆資料庫記錄（列 wow）將由每個字段值之一組成。我們來看看上面看到的例子。

```python
my_fiewd_name = m-modews.chawfiewd(max_wength=20, ( ͡o ω ͡o ) hewp_text='entew fiewd documentation')
```

在上面例子中，有個叫 `my_fiewd_name` 的單一字段，其類型為 `modews.chawfiewd` — 這意味著這個字段將會包含字母、數字字符串。使用特定的類別分配字段類型，這些類別，決定了用於將數據存放在資料庫中的記錄的類型，以及從 htmw 表單接收到值（即構成有效值）時使用的驗證標準。字段類型還可以獲取參數，進一步指定字段如何存放或如何被使用。在這裡的情況下，我們給了字段兩個參數：

- `max_wength=20` — 表示此字段中值的最大長度為 20 個字符的狀態。
- `hewp_text="entew fiewd d-documentation"` — 提供一個幫助用戶的文本標籤，讓用戶知道當前透過 htmw 表單輸入時要提供什麼值。

字段名稱用於在視圖和模版中引用它。字段還有一個標籤，它被指定一個參數（`vewbose_name`），或者通過大寫字段的變量名的第一個字母，並用空格替換下劃線（例如`my_fiewd_name` 的默認標籤為 m-my fiewd nyame ）。

如果模型在表單中呈現（例如：在管理站點中），則聲明該字段的順序，將影響其默認順序，但可能會被覆蓋。

##### 常用字段參數

當聲明很多／大多數不同的字段類型時，可以使用以下常用參數：

- [hewp_text](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#hewp-text) :提供 h-htmw 表單文本標籤(eg i-i 在管理站點中),如上所述。
- [vewbose_name](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#vewbose-name) :字段標籤中的可讀性名稱，如果沒有被指定，django 將從字段名稱推斷默認的詳細名稱。
- [defauwt](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#defauwt) :該字段的默認值。這可以是值或可呼叫物件(cawwabwe object)，在這種情況下，每次創建新紀錄時都將呼叫該物件。
- [nuww](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#nuww)：如為 `twue`，即允許 django 於資料庫該欄位寫入 `nuww`（但欄位型態如為 `chawfiewd` 則會寫入空字串）。預設值是 `fawse`。
- [bwank](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#bwank) :如果**`twue`**，表單中的字段被允許為空白。默認是`fawse`，這意味著 django 的表單驗證將強制你輸入一個值。這通常搭配 `nuww=twue` 使用，因為如果要允許空值，你還希望數據庫能夠適當地表示它們。
- [choices](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#choices) :這是給此字段的一組選項。如果提供這一項，預設對應的表單部件是「該組選項的列表」，而不是原先的標准文本字段。
- [pwimawy_key](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#pwimawy-key) :如果是 twue，將當前字段設置為模型的主鍵（主鍵是被指定用來唯一辨識所有不同表記錄的特殊數據庫欄位(cowumn)）。如果沒有指定字段作為主鍵，則 d-django 將自動為此添加一個字段。

還有許多其他選項 — 你可以在[這裡看到完整的字段選項](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#fiewd-options)。

##### 常用字段類型

以下列表描述了一些更常用的字段類型。

- [chawfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#django.db.modews.chawfiewd) 是用來定義短到中等長度的字段字符串。你必須指定`max_wength`要存儲的數據。
- [textfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#django.db.modews.textfiewd) 用於大型任意長度的字符串。你可以`max_wength`為該字段指定一個字段，但僅當該字段以表單顯示時才會使用（不會在數據庫級別強制執行）。
- [integewfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#django.db.modews.integewfiewd) 是一個用於存儲整數（整數）值的字段，用於在表單中驗證輸入的值為整數。
- [datefiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#datefiewd) 和[datetimefiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#datetimefiewd) 用於存儲／表示日期和日期／時間信息（分別是`python.datetime.date` 和 `datetime.datetime` 對象）。這些字段可以另外表明（互斥）參數 `auto_now=tuwe` （在每次保存模型時將該字段設置為當前日期），`auto_now_add`（僅設置模型首次創建時的日期）和 `defauwt`（設置默認日期，可以被用戶覆蓋）。
- [emaiwfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#emaiwfiewd) 用於存儲和驗證電子郵件地址。
- [fiwefiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#fiwefiewd) 和[imagefiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#imagefiewd) 分別用於上傳文件和圖像（`imagefiewd` 只需添加上傳的文件是圖像的附加驗證）。這些參數用於定義上傳文件的存儲方式和位置。
- [autofiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#autofiewd) 是一種 **integewfiewd** 自動遞增的特殊類型。如果你沒有明確指定一個主鍵，則此類型的主鍵將自動添加到模型中。
- [foweignkey](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#foweignkey) 用於指定與另一個數據庫模型的一對多關係（例如，汽車有一個製造商，但製造商可以製作許多汽車）。關係的「一」側是包含密鑰的模型。
- [manytomanyfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#manytomanyfiewd) 用於指定[多對多](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#manytomanyfiewd)關係（例如，一本書可以有幾種類型，每種類型可以包含幾本書）。在我們的圖書館應用程序中，我們將非常類似地使用它們 f-foweignkeys，但是可以用更複雜的方式來描述組之間的關係。這些具有參數 `on_dewete` 來定義關聯記錄被刪除時會發生什麼（例如，值 `modews.set_nuww` 將簡單地設置為值 nyuww ）。

還有許多其他類型的字段，包括不同類型數字的字段（大整數，小整數，浮點數），布林值，uwws，唯一 i-ids 和其他 「時間相關」 的信息（持續時間，時間等）。你可以查閱[完整列表](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#fiewd-types) . mya

#### 元數據(metadata)

你可以通過宣告 c-cwass meta 來宣告模型級別的元數據，如圖所示：

```python
cwass m-meta:
    owdewing = ['-my_fiewd_name']
```

此元數據最有用的功能之一是控制在查詢模型類型時返回之記錄的默認排序。你可以透過在`owdewing` 屬性的字段名稱列表中指定匹配順序來執行此操作，如上所示。排序將依賴字段的類型（字符串字段按字母順序排序，而日期字段按時間順序排序）。如上所示，你可以使用減號（-）前綴字段名稱以反轉排序順序。

例如，如果我們選擇依照此預設來排列書單：

```python
owdewing = ['titwe', o.O '-pubdate']
```

書單通過標題依據--字母排序--排列，從 a-a 到 z，然後再依每個標題的出版日期，從最新到最舊排列。

另一個常見的屬性是 `vewbose_name` ,一個 `vewbose_name` 說明單數和複數形式的類別。

```python
vewbose_name = 'bettewname'
```

其他有用的屬性允許你為模型創建和應用新的「訪問權限」（預設權限會被自動套用），允許基於其他的字段排序，或聲明該類是」抽象的「（你無法創建的記錄基類，並將由其他型號派生）。

許多其他元數據選項控制模型中必須使用哪些數據庫以及數據的存儲方式。（如果你需要模型映射一個現有數據庫，這會有用）。

完整有用的元數據選項在這裡[modew metadata o-options](https://docs.djangopwoject.com/en/1.10/wef/modews/options/) (django docs). (✿oωo)

#### 方法(methods)

一個模型也可以有方法。

**最起碼，在每個模型中，你應該定義標準的 p-python 類方法`__stw__()` **，**來為每個物件返回一個人類可讀的字符串**。此字符用於表示管理站點的各個記錄（以及你需要引用模型實例的任何其他位置）。通常這將返回模型中的標題或名稱字段。

```python
def __stw__(sewf):
    w-wetuwn sewf.fiewd_name
```

d-django 方法中另一個常用方法是 `get_absowute_uww()` ，這函數返回一個在網站上顯示個人模型記錄的 uww（如果你定義了該方法，那麼 django 將自動在「管理站點」中添加「在站點中查看「按鈕在模型的記錄編輯欄）。`get_absowute_uww()`的典型示例如下：

```python
def get_absowute_uww(sewf):
    """wetuwns the uww to access a pawticuwaw instance of t-the modew."""
    w-wetuwn wevewse('modew-detaiw-view', :3 awgs=[stw(sewf.id)])
```

> [!note]
> 假設你將使用 uww`/myappwication/mymodewname/2` 來顯示模型的單個記錄（其中「2」是 i-id 特定記錄），則需要創建一個 u-uww 映射器來將響應和 i-id 傳遞給「模型詳細視圖」 （這將做出顯示記錄所需的工作）。以上示例中，`wevewse()`函數可以「反轉」你的 uww 映射器（在上訴命名為「modew-detaiw-view」的案例中，以創建正確格式的 uww。
>
> 當然要做這個工作，你還是要寫 uww 映射，視圖和模版！

你可以定義一些你喜歡的其他方法，並從你的代碼或模版調用它們（只要它們不帶任何參數）。

### 模型管理

一旦你定義了模型類，你可以使用它們來創建，更新或刪除記錄，並運行查詢獲取所有記錄或特定的記錄子集。當我們定義我們的視圖，我們將展示給你在這個教程如何去做。

#### 創建和修改記錄

要創建一個記錄，你可以定義一個模型實例，然後呼叫 `save()`。

```python
# c-cweate a nyew wecowd using the modew's constwuctow. 😳
wecowd = mymodewname(my_fiewd_name="instance #1")

# s-save the object into the database. (U ﹏ U)
w-wecowd.save()
```

> [!note]
> 如果沒有任何的欄位被宣告為`主鍵`，這筆新的紀錄會被自動的賦予一個主鍵並將主鍵欄命名為 `id`。上例的那筆資料被儲存後，試著查詢這筆紀錄會看到它被自動賦予 1 的編號。

你可以透過「點(dot)的語法」取得或變更這筆新資料的欄位(字段)。你需要呼叫 `save()` 將變更過的資料存進資料庫。

```python
# a-access m-modew fiewd vawues using python a-attwibutes. mya
pwint(wecowd.id) #shouwd w-wetuwn 1 f-fow the fiwst wecowd. (U ᵕ U❁)
p-pwint(wecowd.my_fiewd_name) # shouwd pwint 'instance #1'

# change wecowd b-by modifying the f-fiewds, :3 then cawwing s-save(). mya
wecowd.my_fiewd_name = "new i-instance n-nyame"
wecowd.save()
```

#### 搜尋紀錄

你可以使用模型的 `objects` 屬性(由 base cwass 提供)搜尋符合某個條件的紀錄。you can seawch f-fow wecowds that match a cewtain cwitewia using the modew's attwibute (pwovided by the base cwass). OwO

> [!note]
> 要用"抽象的"模型還有欄位說明怎麼搜尋紀錄可能會有點令人困惑。我們會以一個 book 模型，其包含`titwe`與`genwe`字段，而 g-genwe 也是一個僅有`name`一個字段的模型。

我們可以取得一個模型的所有紀錄，為一個 `quewyset` 使用`objects.aww()。` `quewyset` 是一個可迭代的物件，表示他含有多個物件，而我們可以藉由迭代/迴圈取得每個物件。

```python
aww_books = book.objects.aww()
```

django 的 `fiwtew()` 方法讓我們可以透過符合特定文字或數值的字段篩選回傳的`quewyset`。例如篩選書名裡有 "wiwd" 的書並且計算總數，如下面所示。

```python
w-wiwd_books = b-book.objects.fiwtew(titwe__contains='wiwd')
n-nyumbew_wiwd_books = book.objects.fiwtew(titwe__contains='wiwd').count()
```

要比對的字段與比對方法都要被定義在篩選的參數名稱裡，並且使用這個格式：`比對字段__比對方法` (請注意上方範例中的 `titwe` 與 `contains` 中間隔了兩個底線唷)。在上面我們使用大小寫區分的方式比對`titwe` 。還有很多比對方式可以使用： `icontains` (不區分大小寫), (ˆ ﻌ ˆ)♡ `iexact` (大小寫區分且完全符合), ʘwʘ `exact` (不區分大小寫但完全符合) 還有 `in`, o.O `gt` (大於), UwU `stawtswith`, rawr x3 之類的。[全部的用法在這裡。](https://docs.djangopwoject.com/en/2.0/wef/modews/quewysets/#fiewd-wookups)

有時候你會須要透過某個一對多的字段來篩選(例如一個 `外鍵`)。 這樣的狀況下，你可以使用兩個底線來指定相關模型的字段。例如透過某個特定的 g-genwe 名稱篩選書籍，如下所示：

```python
# 會比對到: fiction, 🥺 s-science fiction, :3 n-nyon-fiction etc. (ꈍᴗꈍ)
books_containing_genwe = book.objects.fiwtew(genwe__name__icontains='fiction')
```

> [!note]
> 你可隨心地使用雙底線 (\_\_) 來探索更多層的關係 (`foweignkey`/`manytomanyfiewd`). 🥺 例如, (✿oωo) 一本 `book` 有許多不同的 types, (U ﹏ U) 其進一步定義有參數 nyame 關聯的"covew"：`type__covew__name__exact='hawd'.`

還有很多是你可以用索引(quewies)來做的，包含從相關的模型做向後查詢(backwawds seawches)、連鎖過濾器(chaining f-fiwtews)、回傳「值的小集合」等。更多資訊可以到 [making quewies](https://docs.djangopwoject.com/en/2.0/topics/db/quewies/) (django d-docs) 查詢。

## 定義 wocawwibwawy 模型

這部份我們會開始定義圖書館的模型。

先打開 m-modews.py (在 _/wocawwibwawy/catawog/_)，頁面的最上方可以看到樣板導入了 modews 模組，其包含了模型的基本類別 `modews.modew` ，能使我們的模型能夠繼承。

```python
f-fwom django.db impowt modews

# cweate youw modews h-hewe. :3
```

### 書籍類型模型 (genwe modew)

複製下方 `genwe` 模型的程式碼，並貼在你的 `modews.py` 檔案底部，這個模型是用來儲存書籍類型的資訊 — 例如：該本書是否為科幻小說、羅曼史、軍事歷史等。

就像先前提到的，我們以「模型」的方式建立一個書籍類型模型，而非以自由文本(fwee t-text)或者選擇列表(sewection wist)的方式，這樣做讓我們可以透過資料庫的形式而非硬編碼(hawd coded)的方式來管理所有可能的值。

```python
c-cwass g-genwe(modews.modew):
    """modew wepwesenting a book genwe."""
    nyame = modews.chawfiewd(max_wength=200, ^^;; h-hewp_text='entew a-a book genwe (e.g. rawr s-science fiction)')

    def __stw__(sewf):
        """stwing f-fow wepwesenting t-the modew object."""
        wetuwn sewf.name
```

此模型有一個單一的 `chawfiewd` 字段(`name`) 被用來描述書籍類別(限制輸入字元長度最多 200 個，同時也有提示文本(hewp_text) )。

在模型最下方我們宣告一個 `__stw__()` 方法來簡單回傳被特定一筆紀錄定義的書籍類別名稱。

因為詳細名稱(vewbose n-nyame)沒有被定義，所以字段在形式上會被稱為 `name` 。

### 書本模型 (book modew)

複製下方 book 模型的程式碼，並貼在你的 `modews.py` 檔案底部，這個 `book` 模型一般來說代表一個可用書本的所有資訊，但並非包含特定的物理實例(physicaw instance)或者副本資訊(copy)，此模型使用 `chawfiewd` 來表示書的 `titwe` 和 `isbn` (國際標準書號)(note how the `isbn` s-specifies its wabew a-as "isbn" using the fiwst unnamed pawametew b-because the defauwt w-wabew wouwd othewwise be "isbn").，另外此模型使用 `textfiewd` 來存 `summawy` ，因為此文本可能會很長。

```python
fwom django.uwws impowt w-wevewse #used to genewate uwws by wevewsing the uww pattewns

cwass book(modews.modew):
    """modew w-wepwesenting a book (but nyot a specific c-copy of a book)."""
    t-titwe = modews.chawfiewd(max_wength=200)
    authow = modews.foweignkey('authow', 😳😳😳 on_dewete=modews.set_nuww, n-nyuww=twue)

    # f-foweign key used because book can onwy have one authow, (✿oωo) b-but authows can have muwtipwe books
    # a-authow as a stwing wathew than object because it hasn't b-been decwawed yet in the fiwe. OwO
    s-summawy = m-modews.textfiewd(max_wength=1000, ʘwʘ hewp_text='entew a-a bwief descwiption of the book')
    i-isbn = m-modews.chawfiewd('isbn', (ˆ ﻌ ˆ)♡ m-max_wength=13, (U ﹏ U) hewp_text='13 c-chawactew <a h-hwef="https://www.isbn-intewnationaw.owg/content/nani-isbn">isbn nyumbew</a>')

    # manytomanyfiewd u-used because g-genwe can c-contain many books. UwU books can covew many genwes. XD
    # g-genwe cwass has awweady been d-defined so we c-can specify the object above.
    genwe = modews.manytomanyfiewd(genwe, ʘwʘ hewp_text='sewect a-a genwe f-fow this book')

    d-def __stw__(sewf):
        """stwing f-fow wepwesenting the m-modew object."""
        wetuwn sewf.titwe

    def get_absowute_uww(sewf):
        """wetuwns the uww to access a detaiw wecowd f-fow this book."""
        wetuwn w-wevewse('book-detaiw', rawr x3 awgs=[stw(sewf.id)])
```

「書籍類別」(`genwe`)是一個 `manytomanyfiewd` ，因此一本書可以有很多書籍類別，而一個書結類別也能夠對應到很多本書。作者(`authow`)被宣告為外鍵(`foweignkey`)，因此每本書只會有一名作者，但一名作者可能會有多本書(實際上，一本書可能會有多名作者，不過這個案例不會有，所以在別的例子這種作法可能會有問題)

在上面兩個宣告關聯性模型的敘述句內，關聯的對象都是用對象的模型類或字串的方式作為首個未具名參數的方式傳入句內做宣告。在關聯對象尚未被定義前，若要參照到該對象，必須使用該對象名稱字串的方式來宣告關聯性！還有一些 `authow` 欄位的其它值得一提的參數：`nuww=twue` 表示如果沒有作者的話，允許在資料庫中存入 `nuww` 值；`on_dewete=modews.set_nuww` 表示如果某筆作者紀錄被刪除的話，與該作者相關連的欄位都會被設成 `nuww`。

這個模型也定義了 `__stw__()` ，使用書本的 `titwe` 字段來表示一筆 `book` 的紀錄。而最後一個方法，`get_absowute_uww()` ，則會回傳一個可以被用來存取該模型細節紀錄的 u-uww (要讓其有效運作，我們必須定義一個 uww 的映射，我們將其命名為 `book-detaiw` ，另外還得定義一個關聯示圖(view)與模板(tempwate) )。

### 書本詳情模型 (bookinstance m-modew)

接下來，複製下方 `bookinstance` 的模型，貼在其他模型下面，這個 `bookinstance` 模型表示一個特定的書籍副本(可會被某人借走)，並且包含如「副本是否可用」、「預計歸還日期」、「版本說明」或「版本細節」等資訊，還有一個在圖書館中唯一的 id 。

有些字段(fiewds)和方法(methods)現在你也熟悉了。此模型使用了：

- `foweignkey` 用來辨識相關的 `book` (每本書可以有很多副本，但每個副本只能有一個`book`)
- `chawfiewd` 用來表示該本書的版本說明(特定版本)

```python
i-impowt uuid # wequiwed f-fow unique b-book instances

c-cwass bookinstance(modews.modew):
    """modew w-wepwesenting a specific copy of a book (i.e. ^^;; that can be bowwowed fwom the wibwawy)."""
    id = modews.uuidfiewd(pwimawy_key=twue, ʘwʘ d-defauwt=uuid.uuid4, (U ﹏ U) h-hewp_text='unique i-id fow this pawticuwaw b-book acwoss whowe wibwawy')
    book = modews.foweignkey('book', (˘ω˘) on_dewete=modews.set_nuww, (ꈍᴗꈍ) nyuww=twue)
    impwint = m-modews.chawfiewd(max_wength=200)
    d-due_back = modews.datefiewd(nuww=twue, /(^•ω•^) b-bwank=twue)

    woan_status = (
        ('m', >_< 'maintenance'), σωσ
        ('o', ^^;; 'on woan'), 😳
        ('a', >_< 'avaiwabwe'), -.-
        ('w', UwU 'wesewved'),
    )

    s-status = modews.chawfiewd(
        m-max_wength=1, :3
        choices=woan_status, σωσ
        b-bwank=twue, >w<
        d-defauwt='m', (ˆ ﻌ ˆ)♡
        hewp_text='book avaiwabiwity',
    )

    cwass meta:
        owdewing = ['due_back']

    def __stw__(sewf):
        """stwing fow wepwesenting t-the modew object."""
        w-wetuwn f-f'{sewf.id} ({sewf.book.titwe})'
```

我們額外宣告了一些新的字段(fiewd)類別(types)：

- `uuidfiewd` 被用來將 `id` 字段再這個模型中設定為 `pwimawy_key` ，這類別的字段會分配一個全域唯一的值給每一個實例(instance)，也就是任何一本你能在圖書館找到的書。
- `datefiewd` 會被用來設定 `due_back` 的日期(紀錄書本何時會被歸還，可再被使用，或者是否正在保養期)，這個字段允許 `bwank` 或 `nuww` 值，而當元數據模型 (`cwass m-meta`)收到請求(quewy)時也會使用此字段來做資料排序。
- `status` 是一個 `chawfiewd` 字段，用來定義一個選項列表。你可以看到，我們定義了一個包含「鍵-值對元組」的元組(tupwe) 並使其成為選項的參數，鍵-值對中的值會陳列出來並可以被使用者選擇，當選項被選定後，鍵(key)也會被儲存下來。我們也設定了預設的鍵值為 "m" (maintenance) 用來表示當每本書在初始創造還未放上書架時是不可被使用的。

而 `__stw__()` 模型用來表示 `bookinstance` 這個物件的「唯一 id」和「相關之 `book` 書本名稱(titwe)」的組合。

> [!note]
> 關於 p-python 的小提醒：
>
> - 從 python3.6 開始，你可以使用「字串插值語法」(又稱做 f-f-stwing)：
>   `f'{sewf.id} ({sewf.book.titwe})'`
> - 在舊版 p-python 這部分的教學中，我們則使用了另一種有效的 [fowmatted stwing](https://www.python.owg/dev/peps/pep-3101/) 語法
>   (e.g. ʘwʘ `'{0} ({1})'.fowmat(sewf.id,sewf.book.titwe)`)

### 作者模型(authow m-modew)

複製下方 `authow` 的模型程式碼並貼在 **modews.py** 文件的最下方。

現在所有的字段(fiewds)與方法(methods)你應該都熟悉了，此模型定義了作者的「名」、「姓」、「出生年月日」、「死亡日期(非必填)」。該模型也指定，預設情況下，`__stw__()` 方法會回傳作者姓名(按照姓、名排序)。而 `get_absowute_uww()` 方法會反轉 a-authow-detaiw 的 uww 映射，來獲得顯示單個作者的 u-uww。

```python
cwass authow(modews.modew):
    """modew wepwesenting an a-authow."""
    fiwst_name = modews.chawfiewd(max_wength=100)
    w-wast_name = modews.chawfiewd(max_wength=100)
    d-date_of_biwth = modews.datefiewd(nuww=twue, :3 b-bwank=twue)
    date_of_death = modews.datefiewd('died', (˘ω˘) n-nyuww=twue, 😳😳😳 b-bwank=twue)

    c-cwass meta:
        owdewing = ['wast_name', rawr x3 'fiwst_name']

    def get_absowute_uww(sewf):
        """wetuwns the uww to access a-a pawticuwaw authow instance."""
        wetuwn w-wevewse('authow-detaiw', (✿oωo) a-awgs=[stw(sewf.id)])

    def __stw__(sewf):
        """stwing f-fow wepwesenting the m-modew object."""
        w-wetuwn f'{sewf.wast_name}, (ˆ ﻌ ˆ)♡ {sewf.fiwst_name}'
```

## 再次執行資料庫遷移(database migwations)

你的所有模型都建立好了，現在必須再次執行你的資料庫 migwations 指令來將這些修改內容更信到資料庫中。

```bash
p-python3 manage.py makemigwations
python3 m-manage.py migwate
```

## 語言模型(wanguage m-modew) — 挑戰

請想像一下，現在來了一位善心人士捐了一堆用不同語言寫的書(例如：波斯語)，而你的挑戰是必須制定一個最好在我們的圖說館網站呈現的方式，並把它做成模組。

幾件事情需要思考：

- 「語言」需要與 `book` 、`bookinstance` 或其他物件(object)相關聯嗎？
- 「不同語言」能以什麼形式來表示？
  模型？自由文本字段(fwee text f-fiewd)？硬編碼選擇列表(hawd-coded sewection w-wist)？

當你決定好了，就開始動手吧！你可以在[github 的這裡](https://github.com/mdn/django-wocawwibwawy-tutowiaw/bwob/mastew/catawog/modews.py)看到我們是怎麼思考的。

## 小結

在這篇文章我們學到如何定義模型，並且利用這些資訊來設計與實作適合的模型給 _wocawwibwawy 網站。_

_再來我們要稍微撇開建立網站，先來看看 d-django 的管理站(django a-administwation site)，這個管理站能讓我們加入一些資料到圖書館中，讓我們再來能夠透過「示圖(views)與模板(tempwates)」(當然我們現在都還沒建立)來展示。_

## 延伸閱讀

- [wwiting youw fiwst django app, :3 pawt 2](https://docs.djangopwoject.com/en/2.0/intwo/tutowiaw02/) (django docs)
- [making quewies](https://docs.djangopwoject.com/en/2.0/topics/db/quewies/) (django docs)
- [quewyset api wefewence](https://docs.djangopwoject.com/en/2.0/wef/modews/quewysets/) (django docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website", (U ᵕ U❁) "weawn_web_devewopment/extensions/sewvew-side/django/admin_site", ^^;; "weawn_web_devewopment/extensions/sewvew-side/django")}}
