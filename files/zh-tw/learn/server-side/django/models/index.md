---
title: "Django Tutorial Part 3: Using models"
slug: Learn/Server-side/Django/Models
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}

本文介紹如何為 [LocalLibrary](/zh-TW/docs/Learn/Server-side/Django/Tutorial_local_library_website) 網站定義模型。它解釋了模型是什麼、聲明的方式以及一些主要字段類型。它還簡要展示了您可以訪問模型數據的幾個主要方法。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提:</th>
      <td>
        <a href="/zh-TW/docs/Learn/Server-side/Django/skeleton_website"
          >Django 教學 2: 創建骨架網站。</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td><p>能夠設計和創建自己的模型，選擇適當的欄位。</p></td>
    </tr>
  </tbody>
</table>

## 概覽

Django Web 應用程序通過被稱為模型的 Python 對象，訪問和管理數據。模型定義儲存數據的結構，包括欄位類型、以及可能還有最大大小，默認值，選擇列表選項，幫助文檔，表單的標籤文本等。模型的定義與底層數據庫無關 — 你可以選擇其中一個，作為項目設置的一部分。一旦你選擇了要使用的數據庫，你就不需要直接與之交談 — 只需編寫模型結構和其他代碼，Django 可以處理與數據庫通信的所有繁瑣工作。

本教程將介紹如何定義和訪問 [LocalLibrary](/zh-TW/docs/Learn/Server-side/Django/Tutorial_local_library_website) 範例網站的模型。

## 設計 LocalLibrary 模型

在你投入開始編寫模型之前，花幾分鐘時間考慮我們需要存放的數據、以及不同物件之間的關係。

我們知道，我們需要存放書籍的信息（標題，摘要，作者，語言，類別，ISBN），並且我們可能有多個副本（具有全域唯一的 ID，可用狀態等）。我們可以存放更多關於作者的信息，而不僅僅是他的名字，或多個作者的相同或相似的名稱。我們希望能根據書名，作者名，語言和類別對信息進行排序。

在設計模型時，為每個「物件」分別設置模型（相關信息分組）是有意義的。在這種情況下，明顯的物件是書籍，書本實例和作者。

你可能想要使用模型，來表示選擇列表選項（例如：選擇下拉列表），而不是硬編碼，將選項編寫進網站—這是當所有選項面臨未知、或改變時候的建議。在本網站，模型的明顯候選，包括書籍類型（例如：科幻小說，法國詩歌等）和語言（英語，法語，日語）。

一旦我們已經決定了我們的模型和字段，我們需要考慮它們的關聯性。Django 允許你來定義一對一的關聯（`OneToOneField`），一對多（`ForeignKey`）和多對多（`ManyToManyField`）。

思考一下，在網站中，我們將定義模型展示在下面 UML 關聯圖中（下圖）。如以上，我們創建了書的模型（書的通用細節），書本實例（系統中特定物理副本的書籍狀態），和作者。我們也決定了各類型模型，以便通過管理界面創建／選擇值。我們決定不給`BookInstance:status`一個模型 —我們硬編碼了（`LOAN_STATUS`）的值，因為我們不希望其改變。在每個框中，你可以看到模型名稱，字段名稱和類型，以及方法和返回類型。

該圖顯示模型之間的關係，包括它們的多重性。多重性是圖中的數字，顯示可能存在於關係中的每個模型的數量（最大值和最小值）。例如，盒子之間的連接線，顯示書和類型相關。書模型中數字表明，一本書必須有一個或多個類型（想要多少就多少），而類型(Genres)模型線的另一端的數字(0..\*)，表明它可以有零個或多個關聯書本(可以有這個書籍類別，也有對應的書；也可以是有這個書籍類別，但沒有對應的書)。

![LocalLibrary Model UML](local_library_model_uml.svg)

> **備註：** 下一節提供一個基本解釋模型的定義與使用，當你在讀的時候，也需要一邊考慮如何構建上圖中的每個模型。

## 模型入門

本節簡要概述了模型定義，和一些重要的字段、和字段參數。

### 模型定義

模型通常在 app 中的 **models.py** 檔案中定義。它們是繼承自 `django.db.models.Model`的子類， 可以包括屬性，方法和描述性資料(metadata)。下面區段為一個名為`MyModelName`的「典型」模型範例碼：

```python
from django.db import models

class MyModelName(models.Model):
    """A typical class defining a model, derived from the Model class."""

    # Fields
    my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
    ...

    # Metadata
    class Meta:
        ordering = ['-my_field_name']

    # Methods
    def get_absolute_url(self):
            """Returns the url to access a particular instance of MyModelName."""
            return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.field_name
```

在下面章節中，我們將更詳細解釋模型的每個功能。

#### 字段

模型可以有任意數量的字段、任何類型的字段 — 每個字段都表示我們要存放在我們的一個資料庫中的一欄數據(a column of data)。每筆資料庫記錄（列 row）將由每個字段值之一組成。我們來看看上面看到的例子。

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

在上面例子中，有個叫 `my_field_name` 的單一字段，其類型為 `models.CharField` — 這意味著這個字段將會包含字母、數字字符串。使用特定的類別分配字段類型，這些類別，決定了用於將數據存放在資料庫中的記錄的類型，以及從 HTML 表單接收到值（即構成有效值）時使用的驗證標準。字段類型還可以獲取參數，進一步指定字段如何存放或如何被使用。在這裡的情況下，我們給了字段兩個參數：

- `max_length=20` — 表示此字段中值的最大長度為 20 個字符的狀態。
- `help_text="Enter field documentation"` — 提供一個幫助用戶的文本標籤，讓用戶知道當前透過 HTML 表單輸入時要提供什麼值。

字段名稱用於在視圖和模版中引用它。字段還有一個標籤，它被指定一個參數（`verbose_name`），或者通過大寫字段的變量名的第一個字母，並用空格替換下劃線（例如`my_field_name` 的默認標籤為 My field name ）。

如果模型在表單中呈現（例如：在管理站點中），則聲明該字段的順序，將影響其默認順序，但可能會被覆蓋。

##### 常用字段參數

當聲明很多／大多數不同的字段類型時，可以使用以下常用參數：

- [help_text](https://docs.djangoproject.com/en/1.10/ref/models/fields/#help-text) :提供 HTML 表單文本標籤(eg i 在管理站點中),如上所述。
- [verbose_name](https://docs.djangoproject.com/en/1.10/ref/models/fields/#verbose-name) :字段標籤中的可讀性名稱，如果沒有被指定，Django 將從字段名稱推斷默認的詳細名稱。
- [default](https://docs.djangoproject.com/en/1.10/ref/models/fields/#default) :該字段的默認值。這可以是值或可呼叫物件(callable object)，在這種情況下，每次創建新紀錄時都將呼叫該物件。
- [null](https://docs.djangoproject.com/en/1.10/ref/models/fields/#null)：如為 `True`，即允許 Django 於資料庫該欄位寫入 `NULL`（但欄位型態如為 `CharField` 則會寫入空字串）。預設值是 `False`。
- [blank](https://docs.djangoproject.com/en/1.10/ref/models/fields/#blank) :如果**`True`**，表單中的字段被允許為空白。默認是`False`，這意味著 Django 的表單驗證將強制你輸入一個值。這通常搭配 `NULL=True` 使用，因為如果要允許空值，你還希望數據庫能夠適當地表示它們。
- [choices](https://docs.djangoproject.com/en/1.10/ref/models/fields/#choices) :這是給此字段的一組選項。如果提供這一項，預設對應的表單部件是「該組選項的列表」，而不是原先的標准文本字段。
- [primary_key](https://docs.djangoproject.com/en/1.10/ref/models/fields/#primary-key) :如果是 True，將當前字段設置為模型的主鍵（主鍵是被指定用來唯一辨識所有不同表記錄的特殊數據庫欄位(column)）。如果沒有指定字段作為主鍵，則 Django 將自動為此添加一個字段。

還有許多其他選項 — 你可以在[這裡看到完整的字段選項](https://docs.djangoproject.com/en/1.10/ref/models/fields/#field-options)。

##### 常用字段類型

以下列表描述了一些更常用的字段類型。

- [CharField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#django.db.models.CharField) 是用來定義短到中等長度的字段字符串。你必須指定`max_length`要存儲的數據。
- [TextField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#django.db.models.TextField) 用於大型任意長度的字符串。你可以`max_length`為該字段指定一個字段，但僅當該字段以表單顯示時才會使用（不會在數據庫級別強制執行）。
- [IntegerField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#django.db.models.IntegerField) 是一個用於存儲整數（整數）值的字段，用於在表單中驗證輸入的值為整數。
- [DateField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#datefield) 和[DateTimeField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#datetimefield) 用於存儲／表示日期和日期／時間信息（分別是`Python.datetime.date` 和 `datetime.datetime` 對象）。這些字段可以另外表明（互斥）參數 `auto_now=Ture` （在每次保存模型時將該字段設置為當前日期），`auto_now_add`（僅設置模型首次創建時的日期）和 `default`（設置默認日期，可以被用戶覆蓋）。
- [EmailField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#emailfield) 用於存儲和驗證電子郵件地址。
- [FileField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#filefield) 和[ImageField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#imagefield) 分別用於上傳文件和圖像（`ImageField` 只需添加上傳的文件是圖像的附加驗證）。這些參數用於定義上傳文件的存儲方式和位置。
- [AutoField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#autofield) 是一種 **IntegerField** 自動遞增的特殊類型。如果你沒有明確指定一個主鍵，則此類型的主鍵將自動添加到模型中。
- [ForeignKey](https://docs.djangoproject.com/en/1.10/ref/models/fields/#foreignkey) 用於指定與另一個數據庫模型的一對多關係（例如，汽車有一個製造商，但製造商可以製作許多汽車）。關係的「一」側是包含密鑰的模型。
- [ManyToManyField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#manytomanyfield) 用於指定[多對多](https://docs.djangoproject.com/en/1.10/ref/models/fields/#manytomanyfield)關係（例如，一本書可以有幾種類型，每種類型可以包含幾本書）。在我們的圖書館應用程序中，我們將非常類似地使用它們 ForeignKeys，但是可以用更複雜的方式來描述組之間的關係。這些具有參數 `on_delete` 來定義關聯記錄被刪除時會發生什麼（例如，值 `models.SET_NULL` 將簡單地設置為值 NULL ）。

還有許多其他類型的字段，包括不同類型數字的字段（大整數，小整數，浮點數），布林值，URLs，唯一 ids 和其他 「時間相關」 的信息（持續時間，時間等）。你可以查閱[完整列表](https://docs.djangoproject.com/en/1.10/ref/models/fields/#field-types) .

#### 元數據(Metadata)

你可以通過宣告 class Meta 來宣告模型級別的元數據，如圖所示：

```python
class Meta:
    ordering = ['-my_field_name']
```

此元數據最有用的功能之一是控制在查詢模型類型時返回之記錄的默認排序。你可以透過在`ordering` 屬性的字段名稱列表中指定匹配順序來執行此操作，如上所示。排序將依賴字段的類型（字符串字段按字母順序排序，而日期字段按時間順序排序）。如上所示，你可以使用減號（-）前綴字段名稱以反轉排序順序。

例如，如果我們選擇依照此預設來排列書單：

```python
ordering = ['title', '-pubdate']
```

書單通過標題依據--字母排序--排列，從 A 到 Z，然後再依每個標題的出版日期，從最新到最舊排列。

另一個常見的屬性是 `verbose_name` ,一個 `verbose_name` 說明單數和複數形式的類別。

```python
verbose_name = 'BetterName'
```

其他有用的屬性允許你為模型創建和應用新的「訪問權限」（預設權限會被自動套用），允許基於其他的字段排序，或聲明該類是」抽象的「（你無法創建的記錄基類，並將由其他型號派生）。

許多其他元數據選項控制模型中必須使用哪些數據庫以及數據的存儲方式。（如果你需要模型映射一個現有數據庫，這會有用）。

完整有用的元數據選項在這裡[Model metadata options](https://docs.djangoproject.com/en/1.10/ref/models/options/) (Django docs).

#### 方法(Methods)

一個模型也可以有方法。

**最起碼，在每個模型中，你應該定義標準的 Python 類方法`__str__()` **，**來為每個物件返回一個人類可讀的字符串**。此字符用於表示管理站點的各個記錄（以及你需要引用模型實例的任何其他位置）。通常這將返回模型中的標題或名稱字段。

```python
def __str__(self):
    return self.field_name
```

Django 方法中另一個常用方法是 `get_absolute_url()` ，這函數返回一個在網站上顯示個人模型記錄的 URL（如果你定義了該方法，那麼 Django 將自動在「管理站點」中添加「在站點中查看「按鈕在模型的記錄編輯欄）。`get_absolute_url()`的典型示例如下：

```python
def get_absolute_url(self):
    """Returns the url to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> **備註：** 假設你將使用 URL`/myapplication/mymodelname/2` 來顯示模型的單個記錄（其中「2」是 id 特定記錄），則需要創建一個 URL 映射器來將響應和 id 傳遞給「模型詳細視圖」 （這將做出顯示記錄所需的工作）。以上示例中，`reverse()`函數可以「反轉」你的 url 映射器（在上訴命名為「model-detail-view」的案例中，以創建正確格式的 URL。
>
> 當然要做這個工作，你還是要寫 URL 映射，視圖和模版！

你可以定義一些你喜歡的其他方法，並從你的代碼或模版調用它們（只要它們不帶任何參數）。

### 模型管理

一旦你定義了模型類，你可以使用它們來創建，更新或刪除記錄，並運行查詢獲取所有記錄或特定的記錄子集。當我們定義我們的視圖，我們將展示給你在這個教程如何去做。

#### 創建和修改記錄

要創建一個記錄，你可以定義一個模型實例，然後呼叫 `save()`。

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> **備註：** 如果沒有任何的欄位被宣告為`主鍵`，這筆新的紀錄會被自動的賦予一個主鍵並將主鍵欄命名為 `id`。上例的那筆資料被儲存後，試著查詢這筆紀錄會看到它被自動賦予 1 的編號。

你可以透過「點(dot)的語法」取得或變更這筆新資料的欄位(字段)。你需要呼叫 `save()` 將變更過的資料存進資料庫。

```python
# Access model field values using Python attributes.
print(record.id) #should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

#### 搜尋紀錄

你可以使用模型的 `objects` 屬性(由 base class 提供)搜尋符合某個條件的紀錄。You can search for records that match a certain criteria using the model's attribute (provided by the base class).

> **備註：** 要用"抽象的"模型還有欄位說明怎麼搜尋紀錄可能會有點令人困惑。我們會以一個 Book 模型，其包含`title`與`genre`字段，而 genre 也是一個僅有`name`一個字段的模型。

我們可以取得一個模型的所有紀錄，為一個 `QuerySet` 使用`objects.all()。` `QuerySet` 是一個可迭代的物件，表示他含有多個物件，而我們可以藉由迭代/迴圈取得每個物件。

```python
all_books = Book.objects.all()
```

Django 的 `filter()` 方法讓我們可以透過符合特定文字或數值的字段篩選回傳的`QuerySet`。例如篩選書名裡有 "wild" 的書並且計算總數，如下面所示。

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = Book.objects.filter(title__contains='wild').count()
```

要比對的字段與比對方法都要被定義在篩選的參數名稱裡，並且使用這個格式：`比對字段__比對方法` (請注意上方範例中的 `title` 與 `contains` 中間隔了兩個底線唷)。在上面我們使用大小寫區分的方式比對`title` 。還有很多比對方式可以使用： `icontains` (不區分大小寫), `iexact` (大小寫區分且完全符合), `exact` (不區分大小寫但完全符合) 還有 `in`, `gt` (大於), `startswith`, 之類的。[全部的用法在這裡。](https://docs.djangoproject.com/en/2.0/ref/models/querysets/#field-lookups)

有時候你會須要透過某個一對多的字段來篩選(例如一個 `外鍵`)。 這樣的狀況下，你可以使用兩個底線來指定相關模型的字段。例如透過某個特定的 genre 名稱篩選書籍，如下所示：

```python
# 會比對到: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> **備註：** 你可隨心地使用雙底線 (\_\_) 來探索更多層的關係 (`ForeignKey`/`ManyToManyField`). 例如, 一本 `Book` 有許多不同的 types, 其進一步定義有參數 name 關聯的"cover"：`type__cover__name__exact='hard'.`

還有很多是你可以用索引(queries)來做的，包含從相關的模型做向後查詢(backwards searches)、連鎖過濾器(chaining filters)、回傳「值的小集合」等。更多資訊可以到 [Making queries](https://docs.djangoproject.com/en/2.0/topics/db/queries/) (Django Docs) 查詢。

## 定義 LocalLibrary 模型

這部份我們會開始定義圖書館的模型。

先打開 models.py (在 _/locallibrary/catalog/_)，頁面的最上方可以看到樣板導入了 models 模組，其包含了模型的基本類別 `models.Model` ，能使我們的模型能夠繼承。

```python
from django.db import models

# Create your models here.
```

### 書籍類型模型 (Genre model)

複製下方 `Genre` 模型的程式碼，並貼在你的 `models.py` 檔案底部，這個模型是用來儲存書籍類型的資訊 — 例如：該本書是否為科幻小說、羅曼史、軍事歷史等。

就像先前提到的，我們以「模型」的方式建立一個書籍類型模型，而非以自由文本(free text)或者選擇列表(selection list)的方式，這樣做讓我們可以透過資料庫的形式而非硬編碼(hard coded)的方式來管理所有可能的值。

```python
class Genre(models.Model):
    """Model representing a book genre."""
    name = models.CharField(max_length=200, help_text='Enter a book genre (e.g. Science Fiction)')

    def __str__(self):
        """String for representing the Model object."""
        return self.name
```

此模型有一個單一的 `CharField` 字段(`name`) 被用來描述書籍類別(限制輸入字元長度最多 200 個，同時也有提示文本(help_text) )。

在模型最下方我們宣告一個 `__str__()` 方法來簡單回傳被特定一筆紀錄定義的書籍類別名稱。

因為詳細名稱(verbose name)沒有被定義，所以字段在形式上會被稱為 `Name` 。

### 書本模型 (Book model)

複製下方 Book 模型的程式碼，並貼在你的 `models.py` 檔案底部，這個 `Book` 模型一般來說代表一個可用書本的所有資訊，但並非包含特定的物理實例(physical instance)或者副本資訊(copy)，此模型使用 `CharField` 來表示書的 `title` 和 `isbn` (國際標準書號)(note how the `isbn` specifies its label as "ISBN" using the first unnamed parameter because the default label would otherwise be "Isbn").，另外此模型使用 `TextField` 來存 `summary` ，因為此文本可能會很長。

```python
from django.urls import reverse #Used to generate URLs by reversing the URL patterns

class Book(models.Model):
    """Model representing a book (but not a specific copy of a book)."""
    title = models.CharField(max_length=200)
    author = models.ForeignKey('Author', on_delete=models.SET_NULL, null=True)

    # Foreign Key used because book can only have one author, but authors can have multiple books
    # Author as a string rather than object because it hasn't been declared yet in the file.
    summary = models.TextField(max_length=1000, help_text='Enter a brief description of the book')
    isbn = models.CharField('ISBN', max_length=13, help_text='13 Character <a href="https://www.isbn-international.org/content/what-isbn">ISBN number</a>')

    # ManyToManyField used because genre can contain many books. Books can cover many genres.
    # Genre class has already been defined so we can specify the object above.
    genre = models.ManyToManyField(Genre, help_text='Select a genre for this book')

    def __str__(self):
        """String for representing the Model object."""
        return self.title

    def get_absolute_url(self):
        """Returns the url to access a detail record for this book."""
        return reverse('book-detail', args=[str(self.id)])
```

「書籍類別」(`genre`)是一個 `ManyToManyField` ，因此一本書可以有很多書籍類別，而一個書結類別也能夠對應到很多本書。作者(`author`)被宣告為外鍵(`ForeignKey`)，因此每本書只會有一名作者，但一名作者可能會有多本書(實際上，一本書可能會有多名作者，不過這個案例不會有，所以在別的例子這種作法可能會有問題)

在上面兩個宣告關聯性模型的敘述句內，關聯的對象都是用對象的模型類或字串的方式作為首個未具名參數的方式傳入句內做宣告。在關聯對象尚未被定義前，若要參照到該對象，必須使用該對象名稱字串的方式來宣告關聯性！還有一些 `author` 欄位的其它值得一提的參數：`null=True` 表示如果沒有作者的話，允許在資料庫中存入 `Null` 值；`on_delete=models.SET_NULL` 表示如果某筆作者紀錄被刪除的話，與該作者相關連的欄位都會被設成 `Null`。

這個模型也定義了 `__str__()` ，使用書本的 `title` 字段來表示一筆 `Book` 的紀錄。而最後一個方法，`get_absolute_url()` ，則會回傳一個可以被用來存取該模型細節紀錄的 URL (要讓其有效運作，我們必須定義一個 URL 的映射，我們將其命名為 `book-detail` ，另外還得定義一個關聯示圖(view)與模板(template) )。

### 書本詳情模型 (BookInstance model)

接下來，複製下方 `BookInstance` 的模型，貼在其他模型下面，這個 `BookInstance` 模型表示一個特定的書籍副本(可會被某人借走)，並且包含如「副本是否可用」、「預計歸還日期」、「版本說明」或「版本細節」等資訊，還有一個在圖書館中唯一的 id 。

有些字段(fields)和方法(methods)現在你也熟悉了。此模型使用了：

- `ForeignKey` 用來辨識相關的 `Book` (每本書可以有很多副本，但每個副本只能有一個`Book`)
- `CharField` 用來表示該本書的版本說明(特定版本)

```python
import uuid # Required for unique book instances

class BookInstance(models.Model):
    """Model representing a specific copy of a book (i.e. that can be borrowed from the library)."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text='Unique ID for this particular book across whole library')
    book = models.ForeignKey('Book', on_delete=models.SET_NULL, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    LOAN_STATUS = (
        ('m', 'Maintenance'),
        ('o', 'On loan'),
        ('a', 'Available'),
        ('r', 'Reserved'),
    )

    status = models.CharField(
        max_length=1,
        choices=LOAN_STATUS,
        blank=True,
        default='m',
        help_text='Book availability',
    )

    class Meta:
        ordering = ['due_back']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.book.title})'
```

我們額外宣告了一些新的字段(field)類別(types)：

- `UUIDField` 被用來將 `id` 字段再這個模型中設定為 `primary_key` ，這類別的字段會分配一個全域唯一的值給每一個實例(instance)，也就是任何一本你能在圖書館找到的書。
- `DateField` 會被用來設定 `due_back` 的日期(紀錄書本何時會被歸還，可再被使用，或者是否正在保養期)，這個字段允許 `blank` 或 `null` 值，而當元數據模型 (`Class Meta`)收到請求(query)時也會使用此字段來做資料排序。
- `status` 是一個 `CharField` 字段，用來定義一個選項列表。你可以看到，我們定義了一個包含「鍵-值對元組」的元組(tuple) 並使其成為選項的參數，鍵-值對中的值會陳列出來並可以被使用者選擇，當選項被選定後，鍵(key)也會被儲存下來。我們也設定了預設的鍵值為 "m" (maintenance) 用來表示當每本書在初始創造還未放上書架時是不可被使用的。

而 `__str__()` 模型用來表示 `BookInstance` 這個物件的「唯一 ID」和「相關之 `Book` 書本名稱(title)」的組合。

> **備註：** 關於 Python 的小提醒：
>
> - 從 Python3.6 開始，你可以使用「字串插值語法」(又稱做 f-string)：
>   `f'{self.id} ({self.book.title})'`
> - 在舊版 Python 這部分的教學中，我們則使用了另一種有效的 [formatted string](https://www.python.org/dev/peps/pep-3101/) 語法
>   (e.g. `'{0} ({1})'.format(self.id,self.book.title)`)

### 作者模型(Author model)

複製下方 `Author` 的模型程式碼並貼在 **models.py** 文件的最下方。

現在所有的字段(fields)與方法(methods)你應該都熟悉了，此模型定義了作者的「名」、「姓」、「出生年月日」、「死亡日期(非必填)」。該模型也指定，預設情況下，`__str__()` 方法會回傳作者姓名(按照姓、名排序)。而 `get_absolute_url()` 方法會反轉 author-detail 的 URL 映射，來獲得顯示單個作者的 URL。

```python
class Author(models.Model):
    """Model representing an author."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    class Meta:
        ordering = ['last_name', 'first_name']

    def get_absolute_url(self):
        """Returns the url to access a particular author instance."""
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.last_name}, {self.first_name}'
```

## 再次執行資料庫遷移(database migrations)

你的所有模型都建立好了，現在必須再次執行你的資料庫 migrations 指令來將這些修改內容更信到資料庫中。

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## 語言模型(Language model) — 挑戰

請想像一下，現在來了一位善心人士捐了一堆用不同語言寫的書(例如：波斯語)，而你的挑戰是必須制定一個最好在我們的圖說館網站呈現的方式，並把它做成模組。

幾件事情需要思考：

- 「語言」需要與 `Book` 、`BookInstance` 或其他物件(Object)相關聯嗎？
- 「不同語言」能以什麼形式來表示？
  模型？自由文本字段(free text field)？硬編碼選擇列表(hard-coded selection list)？

當你決定好了，就開始動手吧！你可以在[Github 的這裡](https://github.com/mdn/django-locallibrary-tutorial/blob/master/catalog/models.py)看到我們是怎麼思考的。

## 小結

在這篇文章我們學到如何定義模型，並且利用這些資訊來設計與實作適合的模型給 _LocalLibrary 網站。_

_再來我們要稍微撇開建立網站，先來看看 Django 的管理站(Django Administration site)，這個管理站能讓我們加入一些資料到圖書館中，讓我們再來能夠透過「示圖(views)與模板(templates)」(當然我們現在都還沒建立)來展示。_

## 延伸閱讀

- [Writing your first Django app, part 2](https://docs.djangoproject.com/en/2.0/intro/tutorial02/) (Django docs)
- [Making queries](https://docs.djangoproject.com/en/2.0/topics/db/queries/) (Django Docs)
- [QuerySet API Reference](https://docs.djangoproject.com/en/2.0/ref/models/querysets/) (Django Docs)

{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}
