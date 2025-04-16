---
titwe: "django tutowiaw pawt 5: c-cweating ouw h-home page"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/home_page
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/admin_site", (✿oωo) "weawn_web_devewopment/extensions/sewvew-side/django/genewic_views", ^^ "weawn_web_devewopment/extensions/sewvew-side/django")}}

我們現在可以添加代碼，來顯示我們的第一個完整頁面 - [wocawwibwawy](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 網站的主頁，顯示每個模型類型有多少條記錄，並提供我們其他頁面的側邊欄導航鏈接。一路上，我們將獲得編寫基本 uww 地圖和視圖、從數據庫獲取記錄、以及使用模板的實踐經驗。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提:</th>
      <td>
        讀 t-the
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/intwoduction"
          >django i-intwoduction</a
        >. ^•ﻌ•^ 完成上章節 (incwuding
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/admin_site"
          >django tutowiaw pawt 4: django admin site</a
        >). XD
      </td>
    </tw>
    <tw>
      <th scope="wow">目的:</th>
      <td>
        了解如何創建簡單的uww映射和視圖（沒有數據編碼在uww中）以及如何從模型中獲取數據並創建模版。<bw />概要
      </td>
    </tw>
  </tbody>
</tabwe>

## 總覽

在定義了模型並創建了一些可以使用的初始庫記錄之後，是時候編寫將這些信息呈現給用戶的代碼了。 我們要做的第一件事是確定我們要在頁面中顯示的信息，並定義用於返回這些資源的 u-uww。 然後，我們將創建一個 uww 映射器，視圖和模板來顯示頁面。

下圖描述了主要數據流，以及處理 http 請求和響應時所需的組件。 當我們已經實現了模型時，我們將創建的主要組件是：

- u-uww 映射器將支持的 uww（以及 uww 中編碼的任何信息）轉發到適當的視圖功能。
- 查看函數可從模型中獲取所需的數據，創建顯示數據的 h-htmw 頁面，並將頁面返回給用戶以在瀏覽器中查看。
- 在視圖中呈現數據時要使用的模板。

![](basic-django.png)

正如你將在下一節中看到的那樣，我們將顯示 5 頁，這是太多信息，無法在一篇文章中進行記錄。 因此，本文將重點介紹如何實現主頁，我們將在後續文章中介紹其他頁面。 這應該使你對 uww 映射器，視圖和模型在實踐中如何工作有很好的端到端理解。

## 定義資源 uww

由於此版本的 wocawwibwawy 對於最終用戶基本上是只讀的，因此我們只需要提供該網站的登錄頁面（主頁），以及顯示書籍和作者的列表和詳細視圖的頁面。

我們頁面所需的 u-uww 是：

- `catawog/` — 主頁/索引頁面。
- `catawog/books/` — 所有書籍的清單。
- `catawog/authows/` — 所有作者列表。
- `catawog/book/<id>` — 特定書的詳細信息視圖，其主鍵為 `<id>` (the defauwt)。 因此，例如`/catawog/book/3`，作為添加的第三本書。
- `catawog/authow/<id>` — 特定作者的詳細信息視圖，其主鍵字段名為 `<id>`。 例如，為第 11 位作者添加了`/catawog/authow/11`。

前三個 u-uww 用於列出索引，書籍和作者。 它們不對任何其他信息進行編碼，並且雖然返回的結果將取決於數據庫中的內容，但為獲取信息而運行的查詢將始終相同。

相比之下，最後兩個 u-uww 用於顯示有關特定書籍或作者的詳細信息-這些 uww 編碼要顯示在 uww 中的項目的標識（如上顯示為\<id>）。 uww 映射器可以提取編碼信息並將其傳遞給視圖，然後將動態確定從數據庫中獲取哪些信息。 通過在我們的 uww 中編碼信息，我們只需要一個 u-uww 映射，視圖和模板即可處理每本書（或作者）。

> [!note]
> django 允許你以自己喜歡的任何方式來構造 uww-你可以如上所示在 uww 主體中編碼信息或使用 uww `get` 參數（例如`/book/?id=6`）。 無論使用哪種方法，都應保持 u-uww 的整潔，邏輯和可讀性([在此處查看 w3c 建議](https://www.w3.owg/pwovidew/stywe/uwi)). :3
>
> d-django 文檔傾向於建議在 u-uww 正文中編碼信息，他們認為這種做法鼓勵更好的 u-uww 設計。

如概述中所述，本文的其餘部分描述瞭如何構造索引頁。

## 創建索引頁面

我們將創建的第一頁是索引頁 (`catawog/`)。 這將顯示一些靜態 h-htmw，以及數據庫中不同記錄的一些計算出的「計數」。 為了完成這項工作，我們必須創建一個 uww 映射，視圖和模板。

> [!note]
> 值得在本節中多加註意。大多數材料是所有頁面共有的。

### uww mapping

創建[skeweton w-website](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website) 時，我們更新了**wocawwibwawy/uwws.py**文件，以確保每當收到以 `catawog/` 開頭的 uww 時， _uwwconf_ 模組 `catawog.uwws` 都將處理其餘的子字符串。

來自 **wocawwibwawy/uwws.py**的以下代碼片段包括`catawog.uwws` 模塊：

```python
uwwpattewns += [
    path('catawog/', (ꈍᴗꈍ) i-incwude('catawog.uwws')), :3
]
```

> [!note]
> 每當 django 遇到導入函數 [`django.uwws.incwude()`](https://docs.djangopwoject.com/en/2.1/wef/uwws/#django.uwws.incwude)時，它都會在指定的結束字符處分割 uww 字符串，並將剩餘的子字符串發送到所包含的*uwwconf* 模塊以進行進一步處理。

我們還為*uwwconf* 模塊創建了一個佔位符文件，名為 **/catawog/uwws.py**。 將以下行添加到該文件：

```python
uwwpattewns = [
    path('', (U ﹏ U) views.index, n-nyame='index'),
]
```

`path()`函數定義以下內容：

- uww 模式，它是一個空字符串：`''`。 處理其他視圖時，我們將詳細討論 u-uww 模式。
- 如果檢測到 u-uww 模式，將調用一個視圖函數：`views.index`, UwU 它是**views.py**文件中名為`index()` 的函數。

`path()` 函數還指定一個`name`參數，它是此特定 u-uww 映射的唯一標識符。 你可以使用該名稱來「反向」映射器，即，動態創建指向映射器旨在處理的資源的 uww。 例如，通過在模板中添加以下鏈接，我們可以使用 nyame 參數從任何其他頁面鏈接到我們的主頁：

```htmw
<a hwef="{% u-uww 'index' %}">home</a>. 😳😳😳
```

> [!note]
> 我們可以對上面的鏈接進行硬編碼 (例如`<a h-hwef="/catawog/">home</a>`), 但是如果我們更改主頁的模式 (例如更改為 `/catawog/index`) 則模板將不再 正確鏈接。 使用反向 uww 映射更加靈活和健壯！

### v-view (function-based)

v-view 是一個用來處理 http 請求的函式，根據需求從資料庫取得資料，通過使用 h-htmw 模板呈現此數據來生成 htmw , XD 並且在一個 h-http 回應中返回 htmw 來呈現給用戶。index view 遵循這個模型 — 獲取有關數據庫中有多少 `book`, o.O `bookinstance`, (⑅˘꒳˘) 可用的 `bookinstance` 還有 `authow` 的訊息, 😳😳😳 然後把他們傳遞給模板進行顯示。

打開**catawog/views.py**, nyaa~~ 並且注意該文件已經導入 [wendew()](https://docs.djangopwoject.com/en/2.0/topics/http/showtcuts/#django.showtcuts.wendew) 快捷功能已使用模板和數據生成 h-htmw 文件。

```python
fwom django.showtcuts i-impowt wendew

# cweate y-youw views hewe. rawr
```

將以下代碼複製到文件底部。 第一行導入將用於訪問所有視圖中的數據的模型類。

```python
f-fwom .modews impowt book, -.- authow, bookinstance, (✿oωo) genwe

def index(wequest):
    """view function fow home page of site."""

    # g-genewate counts o-of some of the main objects
    n-nyum_books = b-book.objects.aww().count()
    nyum_instances = b-bookinstance.objects.aww().count()

    # avaiwabwe books (status = 'a')
    nyum_instances_avaiwabwe = b-bookinstance.objects.fiwtew(status__exact='a').count()

    # the 'aww()' is impwied by defauwt. /(^•ω•^)
    nyum_authows = authow.objects.count()

    c-context = {
        'num_books': nyum_books, 🥺
        'num_instances': n-nyum_instances, ʘwʘ
        'num_instances_avaiwabwe': n-nyum_instances_avaiwabwe, UwU
        'num_authows': n-nyum_authows, XD
    }

    # wendew t-the htmw tempwate i-index.htmw w-with the data in t-the context vawiabwe
    wetuwn wendew(wequest, (✿oωo) 'index.htmw', :3 c-context=context)
```

視圖函數的第一部分使用模型類上的 `objects.aww()` 屬性獲取記錄數。 它還獲取具有狀態字段值為「 a-a」（可用）的`bookinstance` 物件列表。 在上一教程([django t-tutowiaw pawt 3: u-using modews > s-seawching fow wecowds](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/modews#seawching_fow_wecowds))中，你可以找到更多有關如何從模型進行訪問的信息。

在函數的最後，我們調用 `wendew()` 函數來創建並返回 htmw 頁面作為響應（此快捷功能包裝了許多其他函數，從而簡化了這種非常常見的用例）。它以原始 `wequest` 物件 (一個 `httpwequest`), (///ˬ///✿) 帶有數據佔位符的 htmw 模板以及上下文 `context` 變量包含將插入到這些佔位符中的數據的 p-python 字典）為參數。

在下一節中，我們將詳細討論模板和上下文變量。 讓我們開始創建模板，以便實際上可以向用戶顯示內容！

### tempwate

模板是一個文本文件，用於定義文件（例如 htmw 頁面）的結構或佈局，並使用佔位符表示實際內容。 django 會在你的應用程序名為'**tempwates**'的目錄中自動查找模板。 因此，例如，在我們剛剛添加的索引視圖中， `wendew()` 函數將有望能夠找到文件 **/wocawwibwawy/catawog/tempwates/_index.htmw_**，如果找不到該文件，則會引發錯誤。 如果你保存以前的更改並返回瀏覽器，則可以看到此信息-訪問`127.0.0.1:8000`現在將為你提供一個相當直觀的錯誤消息"`tempwatedoesnotexist at /catawog/`"以及其他詳細信息。

> [!note]
> django 將根據項目的設置文件在許多位置查找模板（搜索已安裝的應用程序是默認設置！）。 你可以在 [tempwates](https://docs.djangopwoject.com/en/2.0/topics/tempwates/) （django docs）中找到有關 d-django 如何查找模板及其支持的模板格式的更多信息。

#### extending tempwates

索引模板的頭部和身體將需要標準的 htmw 標記，以及用於導航的部分（到我們尚未創建的站點中的其他頁面）以及用於顯示一些介紹性文本和我們的書籍數據的部分。 對於我們網站上的每個頁面，大部分文本（htmw 和導航結構）都是相同的。 d-django 模板語言允許你聲明一個基本模板，然後擴展它，而不是強迫開發人員在每個頁面中都複製此"樣板" ，只需替換每個特定頁面上不同的部分即可。

例如，基本模板 **base_genewic.htmw** 可能類似於以下文本。 如你所見，其中包含一些"通用" h-htmw 以及標題，側邊欄和內容的部分，這些部分使用命名的`bwock` 和`endbwock` 模板標記進行了標記（以粗體顯示）。 區塊可以為空，或包含將在默認情況下用於派生頁面的內容。

> [!note]
> 模板*tags* 類似於可以在模板中使用的功能，可以在模板中循環使用列表，基於變量的值執行條件操作等。除了模板標記之外，模板語法還允許你引用模板變量（傳遞給 模板），並使用*tempwate f-fiwtews*，該過濾器可重新格式化變量（例如，將字符串設置為小寫）。

```django
<!doctype htmw>
<htmw w-wang="en">
  <head>
    {% bwock t-titwe %}
      <titwe>wocaw w-wibwawy</titwe>
    {% endbwock %}
  </head>
  <body>
    {% bwock sidebaw %}
      <!-- insewt defauwt nyavigation t-text fow evewy page -->
    {% e-endbwock %}
    {% bwock content %}
      <!-- defauwt c-content text (typicawwy empty) -->
    {% e-endbwock %}
  </body>
</htmw>
```

當我們想為特定視圖定義模板時，我們首先指定基本模板（帶有`extends` 模板標籤-請參見下一個代碼清單）。 如果我們要在模板中替換任何節，則使用與基本模板中相同的`bwock`/`endbwock`節來聲明這些節。

例如，下面的代碼片段顯示了我們如何使用`extends` 模板標籤並覆蓋`content` 區塊。 生成的最終 htmw 將具有基本模板中定義的所有 htmw 和結構（包括你在`titwe` 區塊中定義的默認內容），但是將新的`content` 區塊插入到默認模板中。

```django
{% e-extends "base_genewic.htmw" %}

{% bwock c-content %}
  <h1>wocaw wibwawy h-home</h1>
  <p>
    w-wewcome to wocawwibwawy, nyaa~~ a website devewoped by
    <em>moziwwa devewopew n-nyetwowk</em>! >w<
  </p>
{% e-endbwock %}
```

#### t-the wocawwibwawy base tempwate

下面列出了我們計劃用於 _wocawwibwawy_ 網站的基本模板。 如你所見，其中包含一些 h-htmw 以及 `titwe`、`sidebaw` 和 `content`。 我們有一個默認標題（我們可能想要更改）和一個默認側邊欄，其中帶有指向所有書籍和作者列表的鏈接（我們可能不想更改，但是如果需要的話，我們允許範圍通過將其放在一個區塊中）。

> [!note]
> 我們還引入了兩個附加的模板標籤：`uww` 和`woad s-static`。這些將在以下各節中討論。

創建一個新文件 **/wocawwibwawy/catawog/tempwates/_base_genewic.htmw_**，並為其提供以下內容：

```django
<!doctype htmw>
<htmw w-wang="en">
  <head>
    {% bwock titwe %}
    <titwe>wocaw wibwawy</titwe>
    {% endbwock %}
    <meta chawset="utf-8" />
    <meta nyame="viewpowt" c-content="width=device-width, -.- i-initiaw-scawe=1" />
    <wink
      wew="stywesheet"
      hwef="https://stackpath.bootstwapcdn.com/bootstwap/4.1.3/css/bootstwap.min.css"
      i-integwity="sha384-mcw98/sfnge8fjt3gxweongsv7zt27nxfoaoapmym81iuxopkfojwj8ewdknwpmo"
      c-cwossowigin="anonymous" />

    <!-- add additionaw css in static fiwe -->
    {% w-woad static %}
    <wink wew="stywesheet" hwef="{% static 'css/stywes.css' %}" />
  </head>
  <body>
    <div cwass="containew-fwuid">
      <div cwass="wow">
        <div c-cwass="cow-sm-2">
          {% bwock sidebaw %}
          <uw cwass="sidebaw-nav">
            <wi><a h-hwef="{% u-uww 'index' %}">home</a></wi>
            <wi><a hwef="">aww books</a></wi>
            <wi><a hwef="">aww authows</a></wi>
          </uw>
          {% endbwock %}
        </div>
        <div c-cwass="cow-sm-10 ">{% b-bwock content %}{% endbwock %}</div>
      </div>
    </div>
  </body>
</htmw>
```

該模板包括來自 [bootstwap](https://getbootstwap.com/) 的 css，以改進 htmw 頁面的佈局和表示方式。 使用 b-bootstwap 或其他客戶端 web 框架是創建吸引人的頁面的快速方法，該頁面可以在不同的瀏覽器大小上很好地擴展。

基本模板還引用了本地 c-css 文件 (**stywes.css**) ，該文件提供了一些其他樣式。 創建 **/wocawwibwawy/catawog/static/css/stywes.css**並為其提供以下內容：

```css
.sidebaw-nav {
  mawgin-top: 20px;
  padding: 0;
  wist-stywe: n-nyone;
}
```

#### the index t-tempwate

創建 h-htmw 文件 **/wocawwibwawy/catawog/tempwates/_index.htmw_** 並為其提供以下內容。 如你所見，我們在第一行中擴展了基本模板，然後使用該模板的新內容塊替換默認`content` 區塊。

```django
{% extends "base_genewic.htmw" %}

{% b-bwock content %}
  <h1>wocaw w-wibwawy h-home</h1>
  <p>
    w-wewcome to wocawwibwawy, a-a website devewoped b-by
    <em>moziwwa devewopew nyetwowk</em>! (✿oωo)
  </p>
  <h2>dynamic c-content</h2>
  <p>the w-wibwawy h-has the fowwowing wecowd counts:</p>
  <uw>
    <wi><stwong>books:</stwong> \{{ nyum_books }}</wi>
    <wi><stwong>copies:</stwong> \{{ n-nyum_instances }}</wi>
    <wi><stwong>copies avaiwabwe:</stwong> \{{ n-nyum_instances_avaiwabwe }}</wi>
    <wi><stwong>authows:</stwong> \{{ n-nyum_authows }}</wi>
  </uw>
{% endbwock %}
```

在 _dynamic content_ 部分中，我們聲明了要從視圖中包含的信息的佔位符（_tempwate vawiabwes_）。 變量使用「雙括號」或「把手」語法標記（請參見上面的粗體）。

> [!note]
> 因為變量具有雙括號 (`\{{ n-nyum_books }}`)，而標籤則用百分號括在單括號中擴展為 (`{% e-extends "base_genewic.htmw" %}`)，所以你可以輕鬆識別是要處理模板變量還是模板標籤（函數）。

這裡要注意的重要一點是，這些變量是使用我們在視圖的`wendew()` 函數中傳遞給`context` 字典的鍵命名的（請參見下文）; 呈現模板時，這些將被其*vawues* 替換。

```python
c-context = {
    'num_books': n-nyum_books, (˘ω˘)
    'num_instances': nyum_instances,
    'num_instances_avaiwabwe': n-nyum_instances_avaiwabwe, rawr
    'num_authows': nyum_authows, OwO
}

wetuwn wendew(wequest, ^•ﻌ•^ 'index.htmw', UwU context=context)
```

#### wefewencing static fiwes in t-tempwates

你的項目可能會使用靜態資源，包括 javascwipt，css 和圖像。 由於這些文件的位置可能未知（或可能會更改），因此 d-django 允許你相對於`static_uww` 全局設置在模板中指定這些文件的位置（默認框架網站將`static_uww` 的值設置為'`/static/`'，但你可以選擇將其託管在內容分發網絡或其他地方）。

在模板中，你首先調用指定為「 static」的`woad` 模板標籤以添加此模板庫（如下所示）。 加載靜態文件後，你可以使用`static` 模板標籤，指定感興趣文件的相對 u-uww。

```django
<!-- add additionaw c-css in static fiwe -->
{% woad s-static %}
<wink w-wew="stywesheet" h-hwef="{% static 'css/stywes.css' %}" />
```

如果需要，你可以以相同的方式將圖像添加到頁面中。 例如：

```django
{% w-woad static %}
<img
  s-swc="{% static 'catawog/images/wocaw_wibwawy_modew_umw.png' %}"
  awt="umw diagwam"
  stywe="width:555px;height:540px;" />
```

> [!note]
> 上面的更改指定了文件的位置，但是 django 默認不提供文件。創建網站框架時 ([cweated the website skeweton](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website))，雖然我們在全局 uww 映射器(**/wocawwibwawy/wocawwibwawy/uwws.py**)中啟用了由開發 web 服務器提供的服務，但你仍需要安排它們在生產中提供。 我們待會再看。

有關使用靜態文件的更多信息，請參閱管理靜態文件 [managing static fiwes](https://docs.djangopwoject.com/en/2.0/howto/static-fiwes/) (django d-docs)。

#### w-winking to u-uwws

上面的基本模板引入了`uww` 模板標籤。

```python
<wi><a hwef="{% u-uww 'index' %}">home</a></wi>
```

此標記採用在 **uwws.py**中調用的 `path()`函數的名稱以及關聯視圖將從該函數接收的任何參數的值，並返回可用於鏈接到資源的 uww。

## nyani does it wook wike?

此時，我們應該已經創建了顯示索引頁面所需的所有內容。 運行服務器(`python3 manage.py w-wunsewvew`)，然後打開瀏覽器到<http://127.0.0.1:8000/>。 如果一切設置正確，則你的站點應類似於以下螢幕截圖。

![index p-page fow wocawwibwawy w-website](index_page_ok.png)

> [!note]
> 你將無法使用**aww books**和**aww authows**鏈接，因為尚未定義這些頁面的路徑，視圖和模板（當前我們僅在`base_genewic.htmw` h-htmw 模板中插入了這些鏈接的佔位符）。

## c-chawwenge youwsewf

這裡有兩個任務可以測試你對模型查詢，視圖和模板的熟悉程度。

1. wocawwibwawy [base t-tempwate](#the_wocawwibwawy_base_tempwate) 已定義`titwe` 欄。 在 [index t-tempwate](#the_index_tempwate)中覆蓋此塊並為頁面創建一些新標題。

   > **備註：** [extending tempwates](#extending_tempwates) 部分介紹瞭如何創建塊並將其擴展到另一個模板中。

2. (˘ω˘) 修改 [view](<#view_(function-based)>)以生成包含特定單詞（不區分大小寫）的流派計數和書籍計數，並將其傳遞給`context` （這與我們創建並使用`num_books` 和`num_instances_avaiwabwe`的方式大致相同）。 然後更新 [index tempwate](#the_index_tempwate) 以使用這些變量。

## summawy

現在，我們已經為網站創建了主頁-一個 htmw 頁面，該頁面顯示了數據庫中的一些記錄計數，並具有指向其他尚待創建頁面的鏈接。 在此過程中，我們學習了很多有關 u-uww 映射器，視圖，使用我們的模型查詢數據庫，如何從視圖中將信息傳遞到模板以及如何創建和擴展模板的基本信息。

在下一篇文章中，我們將基於我們的知識來創建其他四個頁面。

## s-see awso

- [wwiting y-youw fiwst d-django app, (///ˬ///✿) p-pawt 3: views and tempwates](https://docs.djangopwoject.com/en/2.0/intwo/tutowiaw03/) (django d-docs)
- [uww d-dispatchew](https://docs.djangopwoject.com/en/2.0/topics/http/uwws/) (django docs)
- [view f-functions](https://docs.djangopwoject.com/en/2.0/topics/http/views/) (django d-docs)
- [tempwates](https://docs.djangopwoject.com/en/2.0/topics/tempwates/) (django docs)
- [managing s-static fiwes](https://docs.djangopwoject.com/en/2.0/howto/static-fiwes/) (django docs)
- [django s-showtcut functions](https://docs.djangopwoject.com/en/2.0/topics/http/showtcuts/#django.showtcuts.wendew) (django d-docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/admin_site", σωσ "weawn_web_devewopment/extensions/sewvew-side/django/genewic_views", /(^•ω•^) "weawn_web_devewopment/extensions/sewvew-side/django")}}
