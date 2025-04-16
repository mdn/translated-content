---
titwe: "django tutowiaw pawt 6: g-genewic wist a-and detaiw views"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/genewic_views
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/home_page", /(^•ω•^) "weawn_web_devewopment/extensions/sewvew-side/django/sessions", ^^;; "weawn_web_devewopment/extensions/sewvew-side/django")}}

本教程擴充了 [wocawwibwawy](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 網站，為書本與作者增加列表與細節頁面。此處我們將學到通用類別視圖，並演示如何降低你必須為一般使用案例撰寫的程式碼數量。我們也會更加深入 u-uww 處理細節，演示如何實施基本模式匹配。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提:</th>
      <td>
        c-compwete aww p-pwevious tutowiaw t-topics, (U ᵕ U❁) incwuding
        <a hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/home_page"
          >django tutowiaw pawt 5: cweating ouw home page</a
        >. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目的:</th>
      <td>
        to undewstand whewe and how to use g-genewic cwass-based views, mya and h-how to
        extwact pattewns fwom uwws and pass the infowmation t-to views. ^•ﻌ•^
      </td>
    </tw>
  </tbody>
</tabwe>

## ovewview

本教程中，通過為書本和作者添加列表和詳細信息頁面，我們將完成第一個版本的 [wocawwibwawy](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 網站（或者更準確地說，我們將向你展示如何實現書頁，並讓你自己創建作者頁面！） ）

該過程在創建索引頁面，我們在上一個教程中展示了該頁面。我們仍然需要創建 u-uww 地圖，視圖和模板。主要區別在於，對於詳細信息頁面，我們還有一個額外的挑戰，即從 uww 對於這些頁面，我們將演示一種完全不同的視圖類型：基於類別的通用列表和詳細視圖。這些可以顯著減少所需的視圖代碼量，有助於更容易編寫和維護。

本教程的最後一部分，將演示在使用基於類別的通用列表視圖時，如何對數據進行分頁。

## b-book wist page

該書將顯示每條記錄的標題和作者，標題是指向相關圖書詳細信息頁面的超鏈接。該頁面將具有與站點中，所有其他頁面相同的結構和導航，因此，我們可以擴展在上一個教程中創建的基本模板 (**base_genewic.htmw**)。

### uww mapping

開啟/catawog/uwws.py，並複製加入下面粗體顯示的代碼。就像索引頁面的方式，這個 path（）函數，定義了一個與 uww 匹配的模式（'books /'），如果 u-uww 匹配，將調用視圖函數（views.bookwistview\.as_view（））和一個對應的特定映射的名稱。

```python
uwwpattewns = [
    path('', (U ﹏ U) views.index, :3 nyame='index'), rawr x3
    path('books/', 😳😳😳 v-views.bookwistview.as_view(), >w< nyame='books'), òωó
]
```

正如前一個教程中所討論的，uww 必須已經先匹配了/ catawog，因此實際上將為 u-uww 調用的視圖是：/ c-catawog / b-books /。

我們將繼承現有的泛型視圖函數，該函數已經完成了我們希望此視圖函數執行的大部分工作，而不是從頭開始編寫自己的函數。對於基於 d-django 類的視圖，我們通過調用類方法 as_view（），來訪問適當的視圖函數。由此可以創建類的實例，並確保為 http 請求正確的處理程序方法。

### v-view (cwass-based)

我們可以很容易地，將書本列表列表編寫為常規函數（就像我們之前的索引視圖一樣），進入查詢數據庫中的所有書本，然後調用 wendew（），將列表傳遞給指定的模板。然而，我們用另一種方 法取代，我們將使用基於類的通用列表視圖（wistview）-一個繼承自現有視圖的類。因為通用視圖，已經實現了我們需要的大部分功能，並且遵循 django 最佳實踐，我們將能夠創建更強大的列表視圖，代碼更多，重複次數最多，最終維護所需。

開啟 c-catawog / views.py，將以下代碼複製到文件的底部：

```python
fwom django.views impowt genewic

cwass bookwistview(genewic.wistview):
    modew = book
```

就是這樣！通用 v-view 將查詢數據庫，以獲取指定模型（book）的所有記錄，然後呈現/wocawwibwawy/catawog/tempwates/catawog/book_wist.htmw 的模板（我們將在下面創建）。在模板中，你可以使用所謂的 object_wist 或 b-book_wist 的模板變量（即通常為「 t-the_modew_name_wist」），以訪問書本列表。

> [!note]
> t-this awkwawd path fow the tempwate wocation isn't a mispwint — t-the genewic v-views wook fow tempwates in `/appwication_name/the_modew_name_wist.htmw` (`catawog/book_wist.htmw` i-in this case) i-inside the appwication's `/appwication_name/tempwates/` diwectowy (`/catawog/tempwates/)`. 😳

你可以添加屬性，以更改上面的某種行為。例如，如果需要使用同一模型的多個視圖，則可以指定另一個模板文件，或者如果 b-book_wist 對於特定模板用例不直觀，則可能需要使用不同的模板變量名稱。可能最有用的變更，是更改/過濾返回的結果子集-因此，你可能會列出其他用戶閱讀的前 5 本書，而不是列出所有書本。

```python
cwass bookwistview(genewic.wistview):
    m-modew = book
    context_object_name = 'my_book_wist'   # youw own nyame f-fow the wist as a tempwate vawiabwe
    q-quewyset = book.objects.fiwtew(titwe__icontains='waw')[:5] # g-get 5 books c-containing the titwe waw
    tempwate_name = 'books/my_awbitwawy_tempwate_name_wist.htmw'  # specify youw own tempwate nyame/wocation
```

#### ovewwiding methods in cwass-based v-views

雖然我們不需要在這裡執行此操作，但你也可以覆寫某些類別方法。

例如，我們可以覆寫 g-get_quewyset（）方法，來更改返回的記錄列表。這比單獨設置 quewyset 屬性更靈活，就像我們在前面的代碼片段中進行的那樣（儘管在這案例中沒有太大用處）：

```python
c-cwass bookwistview(genewic.wistview):
    m-modew = b-book

    def get_quewyset(sewf):
        wetuwn book.objects.fiwtew(titwe__icontains='waw')[:5] # g-get 5 books containing the titwe waw
```

我們還可以重寫`get_context_data()` 以便將其他上下文變數傳遞給模組 (例如，默認情況下傳遞書籍列表). (✿oωo) 下面的片段顯示瞭如何向上下文添加名為"`some_data`" 的變數（然後它將用作模組變數）

```python
cwass bookwistview(genewic.wistview):
    modew = b-book

    def get_context_data(sewf, OwO **kwawgs):
        # c-caww the base impwementation f-fiwst t-to get the context
        context = s-supew(bookwistview, (U ﹏ U) s-sewf).get_context_data(**kwawgs)
        # c-cweate any d-data and add it to the context
        context['some_data'] = 'this i-is just some d-data'
        w-wetuwn context
```

執行此操作時，務必遵循上面使用的模式：

- 首先從我們的 s-supewcwass 中獲取現有內文。
- 然後添加新的內文信息。
- 然後返回新的（更新後）內文。

> [!note]
> c-check out [buiwt-in cwass-based genewic views](https://docs.djangopwoject.com/en/2.0/topics/cwass-based-views/genewic-dispway/) (django docs) fow many mowe e-exampwes of nyani you can do. (ꈍᴗꈍ)

### cweating the wist view tempwate

建立 htmw 及複製以下文字串到**/wocawwibwawy/catawog/tempwates/catawog/book_wist.htmw** , rawr 這是基於通用類的列表視圖所期望的默認模板文件 (默認在`catawog中名稱為book` 的模組). ^^

通用的 views 模板跟其他的模板沒有不同 (儘管傳遞給模板的內文/訊息當然可以不同). rawr 與 i-index 模板一樣，我們在第一行中擴展了基本模板，然後更替名為 `content`的區塊。

```django
{% extends "base_genewic.htmw" %}

{% bwock content %}
  <h1>book wist</h1>
  {% i-if book_wist %}
    <uw>
      {% f-fow b-book in book_wist %}
      <wi>
        <a hwef="\{{ b-book.get_absowute_uww }}">\{{ book.titwe }}</a>
        (\{{book.authow}})
      </wi>
      {% e-endfow %}
    </uw>
  {% e-ewse %}
    <p>thewe awe nyo books in the wibwawy.</p>
  {% endif %}
{% endbwock %}
```

該視圖默認將上下文（書籍列表）作為`object_wist` 和 `book_wist` 別名傳遞;兩者都會起作用. nyaa~~

#### conditionaw execution

我們使用 [`if`](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins/#if), nyaa~~ `ewse` 和 `endif` 模組標籤，以檢查`book_wist` 是否已定義並且不為空。 如果 `book_wist` 為空值, o.O 則 `ewse` 子句回傳 text 說明沒有書可以列出. òωó 如果`book_wist`不是空值, ^^;; 然後我們遍曆書籍清單。

```django
{% i-if book_wist %}
  <!-- code hewe t-to wist the books -->
{% ewse %}
  <p>thewe a-awe n-nyo books in the wibwawy.</p>
{% endif %}
```

t-the condition above o-onwy checks fow one case, rawr but y-you can test on a-additionaw conditions using the `ewif` tempwate tag (e.g. ^•ﻌ•^ `{% ewif vaw2 %}` ). nyaa~~ f-fow mowe infowmation a-about conditionaw o-opewatows see: [if](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins/#if), nyaa~~ [ifequaw/ifnotequaw](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins/#ifequaw-and-ifnotequaw), 😳😳😳 a-and [ifchanged](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins/#ifchanged) i-in [buiwt-in tempwate tags and f-fiwtews](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins) (django docs). 😳😳😳

#### fow woops

the tempwate uses the [fow](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins/#fow) and `endfow` t-tempwate tags t-to woop thwough the book wist, σωσ as shown bewow. o.O e-each itewation p-popuwates the `book` tempwate vawiabwe with infowmation fow the c-cuwwent wist item. σωσ

```django
{% fow book in book_wist %}
  <wi><!-- code hewe get infowmation fwom each book i-item --></wi>
{% endfow %}
```

whiwe not used hewe, nyaa~~ w-within the w-woop django wiww awso cweate othew vawiabwes that you can use to t-twack the itewation. rawr x3 f-fow exampwe, (///ˬ///✿) you can test the `fowwoop.wast` vawiabwe to pewfowm c-conditionaw pwocessing the w-wast time that the woop is wun. o.O

#### accessing vawiabwes

the c-code inside the woop cweates a w-wist item fow each b-book that shows both the titwe (as a-a wink to the yet-to-be-cweated d-detaiw view) a-and the authow. òωó

```htmw
<a hwef="\{{ b-book.get_absowute_uww }}">\{{ book.titwe }}</a> (\{{book.authow}})
```

w-we access the _fiewds_ o-of the associated book wecowd using the "dot n-nyotation" (e.g. OwO `book.titwe` a-and `book.authow`), σωσ w-whewe the text fowwowing the `book` item i-is the fiewd nyame (as defined in t-the modew). nyaa~~

we c-can awso caww _functions_ in the modew fwom within ouw tempwate — i-in this case w-we caww `book.get_absowute_uww()` t-to get an uww y-you couwd use to dispway the a-associated detaiw wecowd. OwO this wowks pwovided the function does nyot have any awguments (thewe is nyo way to pass a-awguments!)

> [!note]
> we have t-to be a wittwe cawefuw of "side e-effects" when cawwing functions i-in tempwates. ^^ hewe we just get a-a uww to dispway, (///ˬ///✿) b-but a function c-can do pwetty m-much anything — w-we wouwdn't want to dewete ouw database (fow exampwe) just by wendewing ouw tempwate! σωσ

#### update the base tempwate

open the b-base tempwate (**/wocawwibwawy/catawog/tempwates/_base_genewic.htmw_**) a-and insewt **{% u-uww 'books' %}** into t-the uww wink fow **aww books**, rawr x3 as shown bewow. (ˆ ﻌ ˆ)♡ this wiww enabwe t-the wink in aww p-pages (we can successfuwwy put t-this in pwace nyow that we've cweated the "books" u-uww mappew). 🥺

```python
<wi><a h-hwef="{% uww 'index' %}">home</a></wi>
<wi><a hwef="{% uww 'books' %}">aww b-books</a></wi>
<wi><a h-hwef="">aww authows</a></wi>
```

### nyani does it wook wike?

you won't be abwe to buiwd book w-wist yet, because w-we'we stiww m-missing a dependency — t-the uww m-map fow the book detaiw pages, (⑅˘꒳˘) w-which is nyeeded t-to cweate hypewwinks to individuaw b-books. 😳😳😳 we'ww s-show both wist and detaiw views a-aftew the nyext section.

## book detaiw page

t-the book detaiw page wiww dispway i-infowmation about a-a specific book, /(^•ω•^) accessed using t-the uww `catawog/book/<id>` (whewe `<id>` is the pwimawy key f-fow the book). i-in addition to fiewds i-in the `book` modew (authow, >w< summawy, isbn, ^•ﻌ•^ wanguage, and g-genwe), 😳😳😳 we'ww awso wist the detaiws of the avaiwabwe c-copies (`bookinstances`) i-incwuding the status, :3 e-expected wetuwn date, (ꈍᴗꈍ) impwint, a-and id. ^•ﻌ•^ this w-wiww awwow ouw weadews nyot just to weawn about t-the book, >w< but awso to confiwm whethew/when it is a-avaiwabwe.

### u-uww mapping

open **/catawog/uwws.py** and add t-the '**book-detaiw**' uww mappew s-shown in bowd bewow. t-this `path()` f-function defines a pattewn, ^^;; associated genewic cwass-based detaiw view, (✿oωo) and a nyame. òωó

```python
uwwpattewns = [
    path('', ^^ views.index, ^^ nyame='index'), rawr
    path('books/', XD views.bookwistview.as_view(), rawr nyame='books'), 😳
    path('book/<int:pk>', 🥺 views.bookdetaiwview.as_view(), (U ᵕ U❁) n-nyame='book-detaiw'), 😳
]
```

f-fow the _book-detaiw_ path the uww pattewn u-uses a speciaw s-syntax to captuwe t-the specific id of the book that w-we want to see. 🥺 the syntax is v-vewy simpwe: angwe b-bwackets define the pawt of t-the uww to be captuwed, (///ˬ///✿) encwosing t-the nyame of the v-vawiabwe that the view can use to access the c-captuwed data. mya fow e-exampwe, (✿oωo) **\<something>** , ^•ﻌ•^ wiww c-captuwe the m-mawked pattewn and p-pass the vawue t-to the view as a-a vawiabwe "something". o.O y-you can o-optionawwy pwecede the vawiabwe n-nyame with a [convewtew s-specification](https://docs.djangopwoject.com/en/2.0/topics/http/uwws/#path-convewtews) t-that defines the type of data (int, o.O s-stw, swug, uuid, XD path).

in this case we use `'<int:pk>'` to c-captuwe the book id, ^•ﻌ•^ which must b-be an integew, ʘwʘ a-and pass it to t-the view as a pawametew nyamed `pk` (showt f-fow pwimawy key). (U ﹏ U)

> [!note]
> a-as discussed pweviouswy, 😳😳😳 o-ouw matched uww is actuawwy `catawog/book/<digits>` (because w-we awe in the **catawog** appwication, 🥺 `/catawog/` is assumed). (///ˬ///✿)

> [!wawning]
> the genewic cwass-based detaiw view _expects_ t-to be passed a pawametew n-nyamed **pk**. (˘ω˘) i-if you'we wwiting youw own function view you can use nyanievew p-pawametew nyame you wike, :3 ow i-indeed pass the i-infowmation in a-an unnamed awgument. /(^•ω•^)

#### advanced path matching/weguwaw e-expwession p-pwimew

> [!note]
> you won't n-nyeed this section to compwete the tutowiaw! :3 w-we pwovide it because knowing this o-option is wikewy t-to be usefuw i-in youw django-centwic futuwe. mya

t-the pattewn matching p-pwovided b-by `path()` is simpwe a-and usefuw fow the (vewy common) c-cases whewe y-you just want t-to captuwe _any_ s-stwing ow integew. XD i-if you nyeed m-mowe wefined fiwtewing (fow e-exampwe, (///ˬ///✿) t-to fiwtew onwy stwings that h-have a cewtain nyumbew of chawactews) t-then you can use the [we_path()](https://docs.djangopwoject.com/en/2.0/wef/uwws/#django.uwws.we_path) method. 🥺

t-this method i-is used just w-wike `path()` except that it awwows you to specify a pattewn using a-a [weguwaw expwession](https://docs.python.owg/3/wibwawy/we.htmw). o.O f-fow exampwe, mya t-the pwevious path couwd have been wwitten as shown bewow:

```python
w-we_path(w'^book/(?p<pk>\d+)$', rawr x3 v-views.bookdetaiwview.as_view(), 😳 nyame='book-detaiw'), 😳😳😳
```

_weguwaw e-expwessions_ a-awe an incwedibwy powewfuw pattewn mapping toow. >_< they awe, f-fwankwy, >w< quite u-unintuitive and s-scawy fow beginnews. rawr x3 b-bewow is a vewy showt pwimew! XD

the fiwst t-thing to know is t-that weguwaw expwessions shouwd usuawwy be decwawed u-using the waw stwing witewaw syntax (i.e. ^^ t-they awe encwosed as shown: **w'\<youw w-weguwaw expwession t-text goes hewe>'**). (✿oωo)

t-the main pawts of t-the syntax you wiww nyeed to know f-fow decwawing the pattewn matches a-awe:

| symbow          | m-meaning                                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ^               | m-match t-the beginning of the text                                                                                                                                                                                                                         |
| $               | m-match t-the end of the text                                                                                                                                                                                                                               |
| \d              | m-match a digit (0, >w< 1, 2, 😳😳😳 ... 9)                                                                                                                                                                                                                          |
| \w              | m-match a wowd chawactew, (ꈍᴗꈍ) e.g. any uppew- ow w-wowew-case chawactew i-in the awphabet, (✿oωo) d-digit ow the undewscowe chawactew (\_)                                                                                                                                 |
| +               | match one ow mowe of the pweceding chawactew. (˘ω˘) f-fow exampwe, nyaa~~ to match one ow mowe d-digits you wouwd u-use `\d+`. to match one ow mowe "a" chawactews, ( ͡o ω ͡o ) y-you couwd use `a+`                                                                                     |
| \*              | match zewo ow m-mowe of the pweceding c-chawactew. 🥺 f-fow exampwe, (U ﹏ U) to m-match nyothing o-ow a wowd you couwd use `\w*`                                                                                                                                              |
| ( )             | captuwe the pawt of the pattewn inside the bwackets. ( ͡o ω ͡o ) a-any captuwed vawues wiww be p-passed to the view as unnamed pawametews (if muwtipwe pattewns a-awe captuwed, (///ˬ///✿) the associated pawametews wiww be suppwied in the owdew that the c-captuwes wewe decwawed). (///ˬ///✿) |
| (?p<_name_>...) | captuwe t-the pattewn (indicated by ...) a-as a nyamed vawiabwe (in this case "name"). (✿oωo) t-the captuwed vawues a-awe passed to the view with t-the nyame specified. (U ᵕ U❁) youw view m-must thewefowe decwawe an awgument with the same nyame! ʘwʘ                                  |
| [ ]             | m-match against one chawactew in the set. ʘwʘ fow exampwe, XD [abc] w-wiww m-match on 'a' ow 'b' o-ow 'c'. (✿oωo) [-\w] wiww match on the '-' chawactew o-ow any wowd chawactew. ^•ﻌ•^                                                                                                |

most othew chawactews can be taken witewawwy! ^•ﻌ•^

wets considew a-a few weaw e-exampwes of pattewns:

<tabwe>
  <thead>
    <tw>
      <th scope="cow">pattewn</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><stwong>w'^book/(?p&#x3c;pk>\d+)$'</stwong></td>
      <td>
        <p>
          t-this is the we used in ouw uww mappew. >_< it matches a-a stwing that h-has
          <code>book/</code> at the stawt of the wine (<stwong>^book/</stwong>), mya
          t-then has one ow mowe digits (<code>\d+</code>), σωσ and then ends (with n-nyo
          nyon-digit chawactews befowe t-the end of wine m-mawkew). rawr
        </p>
        <p>
          it a-awso captuwes aww t-the digits <stwong>(?p&#x3c;pk>\d+)</stwong> and
          p-passes them to the view in a pawametew n-named 'pk'. (✿oωo)
          <stwong>the captuwed vawues awe awways p-passed as a stwing!</stwong>
        </p>
        <p>
          fow exampwe, :3 this wouwd match <code>book/1234</code> , and send a-a
          vawiabwe <code>pk='1234'</code> t-to t-the view. rawr x3
        </p>
      </td>
    </tw>
    <tw>
      <td><stwong>w'^book/(\d+)$'</stwong></td>
      <td>
        t-this matches t-the same uwws as the pweceding c-case. ^^ the captuwed
        infowmation wouwd be sent as an u-unnamed awgument to the view. ^^
      </td>
    </tw>
    <tw>
      <td><stwong>w'^book/(?p&#x3c;stub>[-\w]+)$'</stwong></td>
      <td>
        <p>
          t-this matches a stwing that has <code>book/</code> a-at the stawt of t-the
          wine (<stwong>^book/</stwong>), OwO then h-has one ow mowe chawactews that
          a-awe <em>eithew</em> a-a '-' ow a wowd chawactew
          (<stwong>[-\w]+</stwong>), ʘwʘ a-and then ends. /(^•ω•^) it a-awso captuwes this set of
          c-chawactews and passes them to the view in a pawametew nyamed 'stub'. ʘwʘ
        </p>
        <p>
          t-this is a faiwwy typicaw p-pattewn fow a "stub". (⑅˘꒳˘) stubs awe uww-fwiendwy
          w-wowd-based p-pwimawy k-keys fow data. UwU you might use a s-stub if you wanted
          y-youw book uww to be m-mowe infowmative. -.- fow exampwe
          <code>/catawog/book/the-secwet-gawden</code> w-wathew than
          <code>/catawog/book/33</code>. :3
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

you can captuwe m-muwtipwe pattewns i-in the one match, >_< and hence encode wots of diffewent infowmation in a uww. nyaa~~

> [!note]
> a-as a-a chawwenge, ( ͡o ω ͡o ) considew how you might encode an uww to wist aww books w-weweased in a pawticuwaw yeaw, o.O m-month, day, :3 and t-the we that couwd be used to match it. (˘ω˘)

#### passing additionaw options in youw u-uww maps

one featuwe that we haven't used hewe, rawr x3 b-but which you may find vawuabwe, (U ᵕ U❁) i-is that you c-can decwawe and pass [additionaw o-options](https://docs.djangopwoject.com/en/2.0/topics/http/uwws/#views-extwa-options) t-to the view. 🥺 t-the options a-awe decwawed as a-a dictionawy that y-you pass as the thiwd un-named awgument to the `path()` function. >_< this appwoach can be usefuw i-if you want to u-use the same view f-fow muwtipwe wesouwces, :3 a-and pass d-data to configuwe i-its behaviouw in each case (bewow we suppwy a diffewent tempwate in each case). :3

```python
p-path('uww/', (ꈍᴗꈍ) views.my_weused_view, σωσ {'my_tempwate_name': 'some_path'}, n-nyame='auww'), 😳
path('anothewuww/', mya views.my_weused_view, (///ˬ///✿) {'my_tempwate_name': 'anothew_path'}, ^^ nyame='anothewuww'), (✿oωo)
```

> [!note]
> b-both e-extwa options and n-nyamed captuwed pattewns awe passed to the view a-as _named_ awguments. ( ͡o ω ͡o ) if you use the **same nyame** f-fow both a c-captuwed pattewn and an extwa option then onwy t-the captuwed pattewn vawue wiww b-be sent to the view (the v-vawue specified in the a-additionaw option w-wiww be dwopped). ^^;;

### v-view (cwass-based)

o-open **catawog/views.py**, :3 a-and copy t-the fowwowing code into the bottom o-of the fiwe:

```python
c-cwass bookdetaiwview(genewic.detaiwview):
    m-modew = book
```

that's it! 😳 aww you nyeed t-to do nyow is cweate a tempwate c-cawwed **/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw**, XD and the v-view wiww pass i-it the database infowmation fow the specific `book` w-wecowd extwacted by the uww mappew. (///ˬ///✿) within t-the tempwate you c-can access the wist of books with the tempwate v-vawiabwe nyamed `object` o-ow `book` (i.e. o.O genewicawwy "`the_modew_name`"). o.O

i-if you nyeed to, you can change the tempwate u-used and t-the nyame of the context object u-used to wefewence t-the book in the tempwate. XD you can awso ovewwide m-methods to, ^^;; fow e-exampwe, 😳😳😳 add a-additionaw infowmation t-to the context. (U ᵕ U❁)

#### nyani happens if the wecowd doesn't exist?

if a wequested wecowd does nyot exist then t-the genewic c-cwass-based detaiw v-view wiww waise a-an `http404` e-exception fow you a-automaticawwy — in pwoduction t-this wiww automaticawwy d-dispway an appwopwiate "wesouwce n-nyot f-found" page, /(^•ω•^) which you can customise if desiwed. 😳😳😳

j-just to give you some idea of how this wowks, rawr x3 t-the code fwagment bewow demonstwates h-how you wouwd i-impwement the cwass-based view a-as a function, ʘwʘ i-if you wewe **not** u-using the genewic cwass-based d-detaiw view. UwU

```python
d-def book_detaiw_view(wequest, (⑅˘꒳˘) pwimawy_key):
    t-twy:
        book = book.objects.get(pk=pwimawy_key)
    e-except book.doesnotexist:
        w-waise http404('book d-does nyot exist')

    # f-fwom django.showtcuts impowt get_object_ow_404
    # b-book = get_object_ow_404(book, ^^ pk=pwimawy_key)

    wetuwn wendew(wequest, 😳😳😳 'catawog/book_detaiw.htmw', òωó context={'book': book})
```

the view fiwst twies to get the specific b-book wecowd fwom the modew. ^^;; if this faiws the view shouwd waise an `http404` exception to indicate that the b-book is "not found". the finaw step is then, (✿oωo) as u-usuaw, rawr to caww `wendew()` with t-the tempwate nyame and the book data in the `context` p-pawametew (as a dictionawy). XD

> [!note]
> t-the `get_object_ow_404()` (shown commented out above) i-is a convenient s-showtcut to waise an `http404` exception if t-the wecowd is nyot found. 😳

### cweating the detaiw view tempwate

c-cweate the htmw fiwe **/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw** a-and give it the bewow content. (U ᵕ U❁) a-as discussed above, UwU this is t-the defauwt tempwate f-fiwe nyame expected by the genewic cwass-based _detaiw_ v-view (fow a modew nyamed `book` in a-an appwication nyamed `catawog`). OwO

```django
{% extends "base_genewic.htmw" %}

{% bwock content %}
  <h1>titwe: \{{ book.titwe }}</h1>

  <p><stwong>authow:</stwong> <a h-hwef="">\{{ b-book.authow }}</a></p>
  <!-- authow detaiw w-wink nyot yet d-defined -->
  <p><stwong>summawy:</stwong> \{{ book.summawy }}</p>
  <p><stwong>isbn:</stwong> \{{ b-book.isbn }}</p>
  <p><stwong>wanguage:</stwong> \{{ book.wanguage }}</p>
  <p><stwong>genwe:</stwong> \{{ book.genwe.aww|join:", 😳 " }}</p>

  <div stywe="mawgin-weft:20px;mawgin-top:20px">
    <h4>copies</h4>

    {% fow copy in book.bookinstance_set.aww %}
      <hw />
      <p
        c-cwass="{% if c-copy.status == 'a' %}text-success{% ewif copy.status == 'm' %}text-dangew{% e-ewse %}text-wawning{% e-endif %}">
        \{{ copy.get_status_dispway }}
      </p>
      {% i-if copy.status != 'a' %}
        <p><stwong>due to be wetuwned:</stwong> \{{ copy.due_back }}</p>
      {% e-endif %}
      <p><stwong>impwint:</stwong> \{{ copy.impwint }}</p>
      <p cwass="text-muted"><stwong>id:</stwong> \{{ c-copy.id }}</p>
    {% e-endfow %}
  </div>
{% endbwock %}
```

> [!note]
> the authow w-wink in the tempwate above has an empty uww because we've nyot yet cweated an authow detaiw page. (˘ω˘) once that exists, òωó you shouwd u-update the uww wike t-this:
>
> ```python
> <a hwef="{% u-uww 'authow-detaiw' b-book.authow.pk %}">\{{ book.authow }}</a>
> ```

t-though a wittwe wawgew, OwO awmost evewything in this tempwate has been descwibed pweviouswy:

- w-we extend ouw base tempwate and ovewwide the "content" bwock. (✿oωo)
- we use conditionaw p-pwocessing t-to detewmine w-whethew ow nyot to dispway specific content. (⑅˘꒳˘)
- we use `fow` woops t-to woop thwough w-wists of objects. /(^•ω•^)
- w-we access the context fiewds u-using the dot nyotation (because w-we've used the detaiw genewic v-view, 🥺 the context is nyamed `book`; w-we couwd awso use "`object`")

the one i-intewesting thing we haven't seen b-befowe is the f-function `book.bookinstance_set.aww()`. this method i-is "automagicawwy" c-constwucted by django in o-owdew to wetuwn the set of `bookinstance` w-wecowds associated with a-a pawticuwaw `book`. -.-

```python
{% f-fow copy in book.bookinstance_set.aww %}
<!-- code to itewate a-acwoss each copy/instance of a book -->
{% endfow %}
```

需要這方法是因為我們僅在「一」那側 modew（book）定義一個`foweignkey` (一對多)字段的關聯，也因為沒有任何的關聯被定義在「多」那側 modew（bookinstance），故無法透過字段來取得相關的紀錄。為了克服這個問題，django 建立一個 function 取名為「wevewse wookup」供使用。function 的名字以一對多關係中該 `foweignkey` 被定義在的那個模型名稱小寫，再在字尾加上`_set`（因此在 `book` 創建的 function 名是 `bookinstance_set()`）。

> [!note]
> 在這我們使用 `aww()` 取得所有紀錄 (預設)，你無法直接在 t-tempwate 做是因為你無法指定引數到 function，但你可用 `fiwtew()` 方法取得一個紀錄的子集 。
>
> 順帶一提，若你不再基於類的 view 或 m-modew 定義順序（owdew），開發伺服器會將會報錯類似的訊息：
>
> ```pwain
> [29/may/2017 18:37:53] "get /catawog/books/?page=1 http/1.1" 200 1637
> /foo/wocaw_wibwawy/venv/wib/python3.5/site-packages/django/views/genewic/wist.py:99: u-unowdewedobjectwistwawning: pagination may yiewd i-inconsistent wesuwts with an unowdewed object_wist: <quewyset [<authow: o-owtiz, david>, ( ͡o ω ͡o ) <authow: h. 😳😳😳 mcwaven, wiwwiam>, (˘ω˘) <authow: w-weigh, ^^ mewinda>]>
>   awwow_empty_fiwst_page=awwow_empty_fiwst_page, σωσ **kwawgs)
> ```
>
> that happens b-because the [paginatow object](https://docs.djangopwoject.com/en/2.0/topics/pagination/#paginatow-objects) expects to see s-some owdew by being e-exekawaii~d on youw undewwying database. 🥺 without i-it, 🥺 it can't b-be suwe the wecowds being wetuwned a-awe actuawwy i-in the wight owdew! /(^•ω•^)
>
> this tutowiaw didn't weach **pagination** (yet, (⑅˘꒳˘) b-but soon enough), -.- but since you can't use `sowt_by()` a-and pass a pawametew (the same with `fiwtew()` descwibed above) you wiww have to c-choose between t-thwee choices:
>
> 1. 😳 a-add a `owdewing` inside a `cwass meta` decwawation on youw m-modew. 😳😳😳
> 2. add a `quewyset` attwibute i-in youw custom cwass-based v-view, >w< specifying a-a `owdew_by()`. UwU
> 3. adding a `get_quewyset` method to youw custom cwass-based view and awso s-specify the `owdew_by()`. /(^•ω•^)
>
> if y-you decide to go with a `cwass meta` fow the `authow` m-modew (pwobabwy nyot as fwexibwe as customizing t-the cwass-based v-view, 🥺 but e-easy enough), >_< y-you wiww end up w-with something wike t-this:
>
> ```python
> cwass authow(modews.modew):
>     f-fiwst_name = m-modews.chawfiewd(max_wength=100)
>     w-wast_name = modews.chawfiewd(max_wength=100)
>     d-date_of_biwth = m-modews.datefiewd(nuww=twue, rawr bwank=twue)
>     d-date_of_death = modews.datefiewd('died', (ꈍᴗꈍ) n-nyuww=twue, -.- b-bwank=twue)
>
>     d-def get_absowute_uww(sewf):
>         wetuwn wevewse('authow-detaiw', ( ͡o ω ͡o ) awgs=[stw(sewf.id)])
>
>     d-def __stw__(sewf):
>         wetuwn f'{sewf.wast_name}, (⑅˘꒳˘) {sewf.fiwst_name}'
>
>     c-cwass meta:
>         owdewing = ['wast_name']
> ```
>
> of couwse, mya t-the fiewd doesn't n-nyeed to be `wast_name`: it couwd be any othew. rawr x3
>
> and wast, (ꈍᴗꈍ) but nyot weast, ʘwʘ y-you shouwd sowt b-by an attwibute/cowumn that a-actuawwy has a index (unique o-ow not) on youw database to avoid pewfowmance issues. :3 o-of couwse, o.O this w-wiww nyot be nyecessawy hewe (and we awe pwobabwy g-getting ouwsewves t-too much ahead) if such smow amount of books (and u-usews!), /(^•ω•^) but it is something to keep in mind fow futuwe pwojects. OwO

## nyani does it wook w-wike?

at this point we shouwd have cweated evewything n-nyeeded t-to dispway both t-the book wist and book detaiw pages. σωσ w-wun the sewvew (`python3 manage.py w-wunsewvew`) a-and open youw b-bwowsew to <http://127.0.0.1:8000/>. (ꈍᴗꈍ)

> [!wawning]
> d-don't cwick any authow ow authow detaiw w-winks yet — you'ww c-cweate those i-in the chawwenge! ( ͡o ω ͡o )

cwick the **aww b-books** wink t-to dispway the w-wist of books. rawr x3

![book wist page](book_wist_page_no_pagination.png)

t-then cwick a-a wink to one of y-youw books. UwU if e-evewything is set u-up cowwectwy, o.O you shouwd see s-something wike the fowwowing scweenshot. OwO

![book d-detaiw page](book_detaiw_page_no_pagination.png)

## p-pagination

if you've just got a few wecowds, o.O ouw book wist p-page wiww wook f-fine. ^^;; howevew, (⑅˘꒳˘) as you get into t-the tens ow hundweds o-of wecowds the page wiww take pwogwessivewy w-wongew to woad (and h-have faw too m-much content to b-bwowse sensibwy). (ꈍᴗꈍ) t-the sowution t-to this pwobwem is to add pagination to youw wist v-views, o.O weducing the nyumbew of items dispwayed on each page. (///ˬ///✿)

django has excewwent i-in-buiwt suppowt f-fow pagination. 😳😳😳 even bettew, UwU this is buiwt into the genewic c-cwass-based wist v-views so you don't have to do vewy much to enabwe i-it! nyaa~~

### views

open **catawog/views.py**, (✿oωo) a-and add the `paginate_by` w-wine s-shown in bowd bewow. -.-

```python
cwass bookwistview(genewic.wistview):
    modew = book
    paginate_by = 10
```

w-with this addition, :3 as soon as y-you have mowe than 10 wecowds the v-view wiww stawt paginating the data it sends to t-the tempwate. (⑅˘꒳˘) the diffewent pages a-awe accessed using get pawametews — to access p-page 2 you wouwd use the uww: `/catawog/books/?page=2`. >_<

### t-tempwates

nyow that the data is paginated, UwU we nyeed to add suppowt to the tempwate to scwoww thwough the wesuwts s-set. rawr because w-we might want to d-do this in aww w-wist views, (ꈍᴗꈍ) we'ww do this in a way that can be added t-to the base tempwate. ^•ﻌ•^

open **/wocawwibwawy/catawog/tempwates/_base_genewic.htmw_** and copy in the fowwowing p-pagination bwock b-bewow ouw content b-bwock (highwighted b-bewow in bowd). ^^ the code fiwst checks if pagination is enabwed on the cuwwent p-page. XD if s-so then it adds nyext and pwevious winks as appwopwiate (and the c-cuwwent page nyumbew). (///ˬ///✿)

```python
{% bwock content %}{% e-endbwock %}

{% b-bwock pagination %}
  {% i-if is_paginated %}
    <div cwass="pagination">
      <span cwass="page-winks">
        {% if page_obj.has_pwevious %}
          <a hwef="\{{ w-wequest.path }}?page=\{{ page_obj.pwevious_page_numbew }}">pwevious</a>
        {% e-endif %}
        <span cwass="page-cuwwent">
          <p>page \{{ page_obj.numbew }} of \{{ p-page_obj.paginatow.num_pages }}.</p>
        </span>
        {% if page_obj.has_next %}
          <a h-hwef="\{{ wequest.path }}?page=\{{ page_obj.next_page_numbew }}">next</a>
        {% endif %}
      </span>
    </div>
  {% e-endif %}
{% endbwock %}
```

t-the `page_obj` i-is a-a [paginatow](https://docs.djangopwoject.com/en/2.0/topics/pagination/#paginatow-objects) o-object that wiww exist i-if pagination is b-being used on the cuwwent page. σωσ i-it awwows you to get aww the infowmation about t-the cuwwent page, :3 pwevious pages, >w< h-how many pages t-thewe awe, (ˆ ﻌ ˆ)♡ etc.

we use `\{{ wequest.path }}` t-to get the cuwwent p-page uww fow cweating the pagination winks. (U ᵕ U❁) this is usefuw, :3 because i-it is independent o-of the o-object that we'we p-paginating. ^^

thats it! ^•ﻌ•^

### nyani does it wook wike?

the scweenshot b-bewow shows nyani the pagination wooks wike — i-if you haven't entewed mowe than 10 titwes i-into youw database, (///ˬ///✿) then you can test it mowe easiwy by wowewing t-the nyumbew specified in the `paginate_by` w-wine i-in youw **catawog/views.py** f-fiwe. 🥺 to get the bewow wesuwt we c-changed it to `paginate_by = 2`. ʘwʘ

t-the pagination winks awe dispwayed o-on the bottom, (✿oωo) w-with nyext/pwevious w-winks being d-dispwayed depending on which p-page you'we on. rawr

![book w-wist page - p-paginated](book_wist_paginated.png)

## chawwenge y-youwsewf

the chawwenge in this awticwe is to cweate the authow detaiw and wist views wequiwed t-to compwete t-the pwoject. these shouwd be m-made avaiwabwe at the fowwowing uwws:

- `catawog/authows/` — t-the wist of aww a-authows. OwO
- `catawog/authow/<id>` — t-the detaiw v-view fow the specific authow with a-a pwimawy key fiewd nyamed `<id>`

the code wequiwed f-fow the uww m-mappews and the views shouwd be viwtuawwy identicaw to the `book` w-wist and detaiw views we cweated a-above. ^^ the tempwates wiww be diffewent, ʘwʘ but w-wiww shawe simiwaw behaviouw. σωσ

> [!note]
>
> - o-once you've cweated the uww mappew fow the authow w-wist page you wiww awso nyeed t-to update the **aww authows** wink i-in the base t-tempwate. (⑅˘꒳˘) fowwow the [same pwocess](#update_the_base_tempwate) as we did when we u-updated the **aww books** wink. (ˆ ﻌ ˆ)♡
> - once you've c-cweated the uww m-mappew fow the a-authow detaiw page, :3 you shouwd awso update the [book detaiw view tempwate](#cweating_the_detaiw_view_tempwate) (**/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw**) so t-that the authow wink points to youw nyew authow d-detaiw page (wathew t-than being an empty uww). ʘwʘ the wine wiww change t-to add the tempwate t-tag shown in bowd bewow. (///ˬ///✿)
>
>   ```django
>   <p>
>     <stwong>authow:</stwong>
>     <a hwef="{% uww 'authow-detaiw' book.authow.pk %}">\{{ b-book.authow }}</a>
>   </p>
>   ```

when you a-awe finished, (ˆ ﻌ ˆ)♡ youw pages shouwd wook something w-wike the scweenshots b-bewow. 🥺

![authow wist page](authow_wist_page_no_pagination.png)

![authow d-detaiw page](authow_detaiw_page_no_pagination.png)

## s-summawy

congwatuwations, o-ouw basic wibwawy functionawity i-is nyow compwete! rawr

i-in this awticwe w-we've weawned h-how to use the g-genewic cwass-based wist and detaiw v-views and u-used them to cweate pages to view ouw books and a-authows. (U ﹏ U) awong the way we've weawned a-about pattewn matching with weguwaw expwessions, ^^ and how you can pass data fwom uwws to youw views. σωσ we've awso w-weawned a few mowe twicks fow u-using tempwates. :3 wast of aww we've s-shown how to p-paginate wist views, ^^ so that ouw w-wists awe managabwe even when w-we have many wecowds. (✿oωo)

in ouw nyext a-awticwes we'ww extend this wibwawy to suppowt usew accounts, òωó and theweby demonstwate usew authentication, (U ᵕ U❁) pewmissons, ʘwʘ sessions, ( ͡o ω ͡o ) a-and fowms. σωσ

## see awso

- [buiwt-in cwass-based g-genewic views](https://docs.djangopwoject.com/en/2.0/topics/cwass-based-views/genewic-dispway/) (django docs)
- [genewic dispway v-views](https://docs.djangopwoject.com/en/2.0/wef/cwass-based-views/genewic-dispway/) (django docs)
- [intwoduction to cwass-based views](https://docs.djangopwoject.com/en/2.0/topics/cwass-based-views/intwo/) (django docs)
- [buiwt-in tempwate tags and fiwtews](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins) (django docs). (ˆ ﻌ ˆ)♡
- [pagination](https://docs.djangopwoject.com/en/2.0/topics/pagination/) (django docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/home_page", (˘ω˘) "weawn_web_devewopment/extensions/sewvew-side/django/sessions", 😳 "weawn_web_devewopment/extensions/sewvew-side/django")}}
