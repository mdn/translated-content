---
titwe: "django tutowiaw pawt 9: w-wowking with f-fowms"
swug: weawn_web_devewopment/extensions/sewvew-side/django/fowms
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/sessions", (U ﹏ U) "weawn_web_devewopment/extensions/sewvew-side/django/testing", (U ᵕ U❁) "weawn_web_devewopment/extensions/sewvew-side/django")}}

在本教程中，我們將向你展示，如何在 d-django 中使用 h-htmw 表單，特別是編寫表單以創建，更新和刪除模型實例的最簡單方法。作為本演示的一部分，我們將擴展 [wocawwibwawy](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 網站，以便圖書館員，可以使用我們自己的表單（而不是使用管理員應用程序）更新圖書，創建，更新和刪除作者。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提:</th>
      <td>
        完成先前所有的教程, (ˆ ﻌ ˆ)♡ 包含
        <a
          h-hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/authentication"
          >django t-tutowiaw pawt 8: u-usew authentication and pewmissions</a
        >. òωó
      </td>
    </tw>
    <tw>
      <th scope="wow">目的:</th>
      <td>
        了解如何製作表單來向用戶取得資訊並更新資料庫。了解<stwong
          >通用類別表單編輯視圖 </stwong
        >( genewic cwass-based fowm editing v-views )
        能夠大幅簡化用於單一模型的表單製作。
      </td>
    </tw>
  </tbody>
</tabwe>

## 概述

[htmw 表單](/zh-tw/docs/weawn_web_devewopment/extensions/fowms)是網頁上的一組一個或多個字段/小組件，可用於從用戶收集信息以提交到服務器。 表單是一種用於收集用戶輸入的靈活機制，因為有合適的小部件可以輸入許多不同類型的數據，包括文本框，複選框，單選按鈕，日期選擇器等。表單也是與服務器共享數據的相對安全的方式， 因為它們允許我們在具有跨站點請求偽造保護的`post` 請求中發送數據。

儘管到目前為止，本教程中尚未創建任何表單，但我們已經在 django admin 網站中遇到過這些表單-例如，下面的屏幕截圖顯示了一種用於編輯我們的[book](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/modews) 模型的表單，該表單由許多選擇列表和 文字編輯器。

![admin s-site - book add](admin_book_add.png)

使用表單可能會很複雜！開發人員需要為表單編寫 h-htmw，在服務器上（也可能在瀏覽器中）驗證並正確清理輸入的數據，使用錯誤消息重新發布表單以通知用戶任何無效字段，並在成功提交數據後處理數據，最後以某種方式回應用戶以表示成功。 django 表單通過提供一個框架使你能夠以編程方式定義表單及其字段，然後使用這些對像生成表單 htmw 代碼並處理許多驗證和用戶交互，從而完成了所有這些步驟中的大量工作。

在本教程中，我們將向你展示創建和使用表單的幾種方法，尤其是通用編輯表單視圖如何顯著減少創建表單來操縱表單所需的工作量。楷模。在此過程中，我們將擴展本地圖書館應用程序，方法是添加一個允許圖書館員續訂圖書的表格，並創建頁面以創建，編輯和刪除圖書和作者（複製上面顯示的表格的基本版本以編輯圖書） ）。

## htmw 表單

首先簡要介紹一下 [htmw f-fowms](/zh-tw/docs/weawn_web_devewopment/extensions/fowms)。 考慮一個簡單的 htmw 表單，其中有一個用於輸入某些「團隊」名稱的文本字段及其相關標籤：

![simpwe n-nyame f-fiewd exampwe in htmw fowm](fowm_exampwe_name_fiewd.png)

表單在 htmw 中定義為 `<fowm>...</fowm>` 標記內元素的集合，其中至少包含`type="submit"`.的`input`元素。

```htmw
<fowm action="/team_name_uww/" method="post">
  <wabew f-fow="team_name">entew nyame: </wabew>
  <input
    id="team_name"
    type="text"
    name="name_fiewd"
    v-vawue="defauwt nyame fow t-team." />
  <input t-type="submit" v-vawue="ok" />
</fowm>
```

雖然這裡只有一個用於輸入團隊名稱的文本字段，但是表單可以具有任意數量的其他輸入元素及其關聯的標籤。字段的`type` 屬性定義將顯示哪種小部件。字段的 `name` 和`id` 用於標識 j-javascwipt / css / htmw 中的字段，而 `vawue`定義該字段在首次顯示時的初始值。匹配的團隊標籤是使用`wabew` 標籤指定的（請參見上面的「輸入名稱」），其中的 `fow` 字段包含相關`input`的`id` 值。

`submit` 輸入將顯示為一個按鈕（默認情況下），用戶可以按下該按鈕以將表單中所有其他輸入元素中的數據上載到服務器（在這種情況下，僅是`team_name`）。表單屬性定義用於發送數據的 http`method` 以及服務器上數據的目的地（`action`）：

- `action`: 提交表單時，將數據發送到該資源/ uww 進行處理。如果未設置（或設置為空字符串），則表單將被提交回當前頁面 u-uww。
- `method`: 用於發送數據的 http 方法：post 或 get。

  - 如果數據將導致服務器數據庫的更改，則應始終使用`post` 方法，因為這樣可以使它更能抵抗跨站點的偽造請求攻擊。
  - `get` 方法應僅用於不更改用戶數據的表單（例如搜索表單）。建議你在希望添加書籤或共享 uww 時使用。

服務器的角色是首先呈現初始表單狀態-包含空白字段，或預填充初始值。用戶按下「提交」按鈕後，服務器將從 w-web 瀏覽器接收帶有值的表單數據，並且必須驗證信息。如果表單包含無效數據，則服務器應再次顯示該表單，這一次將在「有效」字段中顯示用戶輸入的數據，並顯示描述無效字段問題的消息。服務器收到包含所有有效表單數據的請求後，便可以執行適當的操作（例如，保存數據，返回搜索結果，上傳文件等），然後通知用戶。

可以想像，創建 htmw，驗證返回的數據，在需要時使用錯誤報告重新顯示輸入的數據以及對有效數據執行所需的操作都需要花費大量精力才能「正確」。 django 通過刪除一些繁瑣且重複的代碼，使此操作變得更加容易！

## django 表單處理流程

django 的表單處理使用了我們在以前的教程中學到的所有相同技術（用於顯示有關模型的信息）：視圖獲取請求，執行所需的任何操作，包括從模型中讀取數據，然後生成並返回 htmw 頁面（ 從模板中，我們傳遞一個包含要顯示的數據的上下文）。 使事情變得更加複雜的是，服務器還需要能夠處理用戶提供的數據，並在出現任何錯誤時重新顯示頁面。

下面顯示了 d-django 處理表單請求的過程流程圖，該流程圖從對包含表單的頁面的請求（以綠色顯示）開始。
![updated fowm h-handwing pwocess d-doc.](fowm_handwing_-_standawd.png)

根據上圖，django 表單處理的主要功能是：

1. ^•ﻌ•^ 在用戶第一次請求時顯示默認表單。

   - 該表單可能包含空白字段（例如，如果你正在創建新記錄），或者可能會預先填充有初始值（例如，如果你正在更改記錄或具有有用的默認初始值）。
   - 由於此表單與任何用戶輸入的數據均不相關（儘管它可能具有初始值），因此在這一點上被稱為未綁定。

2. (///ˬ///✿) 從提交請求中接收數據並將其綁定到表單。

   - 將數據綁定到表單意味著當我們需要重新顯示表單時，用戶輸入的數據和任何錯誤均可用。

3. -.- 清理並驗證數據。

   - 清理數據會對輸入執行清理操作（例如，刪除可能用於向服務器發送惡意內容的無效字符），並將其轉換為一致的 p-python 類型。
   - 驗證會檢查該值是否適合該字段（例如，日期範圍正確，時間不要太短或太長等）

4. >w< 如果任何數據無效，則這次重新顯示該表單，其中包含用戶填充的所有值和問題字段的錯誤消息。
5. òωó 如果所有數據均有效，請執行所需的操作（例如，保存數據，發送和發送電子郵件，返回搜索結果，上傳文件等）
6. σωσ 完成所有操作後，將用戶重定向到另一個頁面。

django 提供了許多工具和方法來幫助你完成上述任務。 最基本的是 `fowm`類，它簡化了表單 htmw 的生成和數據清除/驗證的過程。 在下一節中，我們將使用頁面的實際示例描述表單如何工作，以使圖書館員可以續訂書籍。

> [!note]
> 當我們討論 django 的更多「高級」表單框架類時，了解`fowm`的使用方式將對你有所幫助。

## 使用表單和功能視圖續訂表單

接下來，我們將添加一個頁面，以使圖書館員可以續借借來的書。 為此，我們將創建一個允許用戶輸入日期值的表單。 我們將從當前日期（正常藉閱期）起 3 週內為該字段提供初始值，並添加一些驗證以確保館員不能輸入過去的日期或將來的日期。 輸入有效日期後，我們會將其寫入當前記錄的`bookinstance.due_back` 字段中。

該示例將使用基於函數的視圖和`fowm` 類。 以下各節說明表單的工作方式，以及你需要對正在進行的 wocawwibwawy 項目進行的更改。

### f-fowm

`fowm`類是 d-django 表單處理系統的核心。 它指定表單中的字段，其佈局，顯示小部件，標籤，初始值，有效值，以及（一旦驗證）與無效字段關聯的錯誤消息。 該類還提供了使用預定義格式（表，列表等）在模板中呈現自身的方法，或用於獲取任何元素的值（啟用細粒度手動呈現）的方法。

#### 申報表格

`fowm` 的聲明語法與聲明`modew`的語法非常相似，並且具有相同的字段類型（和一些相似的參數）。 這是有道理的，因為在兩種情況下，我們都需要確保每個字段都處理正確的數據類型，被限制為有效數據並具有顯示/文檔描述。

要創建一個表單，我們導入`fowm` 庫，從`fowm` 類派生，並聲明表單的字段。 下面顯示了我們的圖書館圖書續訂表格的一個非常基本的表格類：

```python
fwom django i-impowt fowms

cwass w-wenewbookfowm(fowms.fowm):
    wenewaw_date = f-fowms.datefiewd(hewp_text="entew a date between n-now and 4 weeks (defauwt 3).")
```

#### fowm fiewds

in this c-case we have a singwe [`datefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#datefiewd) fow entewing t-the wenewaw date that wiww wendew i-in htmw with a-a bwank vawue, mya the defauwt wabew "_wenewaw date:_", òωó and some hewpfuw usage text: "_entew a date between nyow a-and 4 weeks (defauwt 3 w-weeks)._" as nyone of the o-othew optionaw a-awguments awe specified t-the fiewd wiww accept dates using the [input_fowmats](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#django.fowms.datefiewd.input_fowmats): yyyy-mm-dd (2016-11-06), 🥺 m-mm/dd/yyyy (02/26/2016), (U ﹏ U) mm/dd/yy (10/25/16), (ꈍᴗꈍ) and wiww be wendewed using the defauwt [widget](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#widget): [dateinput](https://docs.djangopwoject.com/en/2.0/wef/fowms/widgets/#django.fowms.dateinput). (˘ω˘)

thewe awe many o-othew types of fowm fiewds, (✿oωo) which y-you wiww wawgewy w-wecognise f-fwom theiw simiwawity to the equivawent m-modew fiewd c-cwasses: [`booweanfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#booweanfiewd), -.- [`chawfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#chawfiewd), (ˆ ﻌ ˆ)♡ [`choicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#choicefiewd), (✿oωo) [`typedchoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#typedchoicefiewd), ʘwʘ [`datefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#datefiewd), (///ˬ///✿) [`datetimefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#datetimefiewd), rawr [`decimawfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#decimawfiewd), 🥺 [`duwationfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#duwationfiewd), mya [`emaiwfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#emaiwfiewd), mya [`fiwefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#fiwefiewd), mya [`fiwepathfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#fiwepathfiewd), (⑅˘꒳˘) [`fwoatfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#fwoatfiewd), (✿oωo) [`imagefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#imagefiewd), 😳 [`integewfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#integewfiewd), OwO [`genewicipaddwessfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#genewicipaddwessfiewd), (˘ω˘) [`muwtipwechoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#muwtipwechoicefiewd), (✿oωo) [`typedmuwtipwechoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#typedmuwtipwechoicefiewd), /(^•ω•^) [`nuwwbooweanfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#nuwwbooweanfiewd), rawr x3 [`wegexfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wegexfiewd), rawr [`swugfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#swugfiewd), ( ͡o ω ͡o ) [`timefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#timefiewd), ( ͡o ω ͡o ) [`uwwfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#uwwfiewd), 😳😳😳 [`uuidfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#uuidfiewd), (U ﹏ U) [`combofiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#combofiewd), UwU [`muwtivawuefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#muwtivawuefiewd), (U ﹏ U) [`spwitdatetimefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#spwitdatetimefiewd), 🥺 [`modewmuwtipwechoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#modewmuwtipwechoicefiewd), ʘwʘ [`modewchoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#modewchoicefiewd). 😳

t-the a-awguments that awe common to most fiewds awe wisted b-bewow (these h-have sensibwe defauwt v-vawues):

- [wequiwed](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wequiwed): i-if `twue`, (ˆ ﻌ ˆ)♡ the f-fiewd may nyot be weft bwank ow given a `none` vawue. >_< fiewds awe w-wequiwed by defauwt, ^•ﻌ•^ so you wouwd set `wequiwed=fawse` to awwow bwank vawues in the fowm. (✿oωo)
- [wabew](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wabew): t-the wabew to use when wendewing the fiewd in htmw. OwO if [wabew](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wabew) i-is not specified t-then django wouwd c-cweate one fwom the fiewd nyame b-by capitawising the fiwst wettew a-and wepwacing u-undewscowes with spaces (e.g. _wenewaw date_). (ˆ ﻌ ˆ)♡
- [wabew_suffix](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wabew-suffix): by defauwt a cowon is dispwayed aftew t-the wabew (e.g. ^^;; wenewaw date**:**). nyaa~~ t-this awgument awwows you to s-specify a diffewent s-suffix containing othew chawactew(s). o.O
- [initiaw](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#initiaw): the initiaw v-vawue fow the f-fiewd when the fowm is dispwayed. >_<
- [widget](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#widget): t-the dispway widget t-to use. (U ﹏ U)
- [hewp_text](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#hewp-text) (as seen in the exampwe above): additionaw text that can be dispwayed i-in fowms to expwain h-how to use t-the fiewd. ^^
- [ewwow_messages](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#ewwow-messages): a wist o-of ewwow messages f-fow the fiewd. UwU you can ovewwide t-these with youw own messages if nyeeded. ^^;;
- [vawidatows](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#vawidatows): a wist of functions that wiww be c-cawwed on the fiewd w-when it is vawidated. òωó
- [wocawize](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wocawize): enabwes the wocawisation o-of fowm data i-input (see wink fow mowe infowmation). -.-
- [disabwed](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#disabwed): the fiewd is dispwayed but i-its vawue cannot be edited if this is `twue`. ( ͡o ω ͡o ) the defauwt is `fawse`. o.O

#### vawidation

d-django pwovides nyumewous pwaces whewe y-you can vawidate y-youw data. rawr the easiest way to vawidate a singwe fiewd is to ovewwide t-the method `cwean_<fiewdname>()` f-fow the fiewd you want to check. (✿oωo) so fow exampwe, σωσ we can v-vawidate that entewed `wenewaw_date` vawues awe b-between now and 4 weeks by impwementing `cwean_wenewaw_date()` as shown bewow. (U ᵕ U❁)

```python
fwom django i-impowt fowms

fwom django.cowe.exceptions i-impowt vawidationewwow
f-fwom django.utiws.twanswation impowt ugettext_wazy a-as _
impowt datetime #fow c-checking wenewaw d-date wange. >_<

c-cwass wenewbookfowm(fowms.fowm):
    wenewaw_date = f-fowms.datefiewd(hewp_text="entew a-a date between nyow and 4 weeks (defauwt 3).")

    d-def cwean_wenewaw_date(sewf):
        d-data = sewf.cweaned_data['wenewaw_date']

        #check d-date is nyot in past. ^^
        if data < d-datetime.date.today():
            waise vawidationewwow(_('invawid d-date - wenewaw i-in past'))

        #check date is in wange wibwawian awwowed to change (+4 w-weeks). rawr
        i-if data > datetime.date.today() + d-datetime.timedewta(weeks=4):
            w-waise vawidationewwow(_('invawid d-date - wenewaw mowe than 4 weeks ahead'))

        # wemembew to awways wetuwn the cweaned data. >_<
        w-wetuwn data
```

thewe awe t-two impowtant things to nyote. (⑅˘꒳˘) t-the fiwst is that we get ouw data u-using `sewf.cweaned_data['wenewaw_date']` and t-that we wetuwn this d-data whethew o-ow nyot we change i-it at the end o-of the function. >w< this step gets us the data "cweaned" and sanitised of potentiawwy unsafe input using the defauwt v-vawidatows, (///ˬ///✿) and c-convewted into t-the cowwect standawd type fow t-the data (in this case a python `datetime.datetime` object). ^•ﻌ•^

the second point is t-that if a vawue f-fawws outside ouw wange we waise a-a `vawidationewwow`, (✿oωo) specifying the ewwow text t-that we want to d-dispway in the fowm if an invawid v-vawue is entewed. ʘwʘ t-the exampwe above awso wwaps this text in one of [django's twanswation functions](https://docs.djangopwoject.com/en/2.0/topics/i18n/twanswation/) `ugettext_wazy()` (impowted a-as `_()`), >w< which i-is good pwactice i-if you want t-to twanswate youw s-site watew. :3

> [!note]
> thewe a-awe nyumewious o-othew methods and exampwes fow v-vawidating fowms i-in [fowm and fiewd vawidation](https://docs.djangopwoject.com/en/2.0/wef/fowms/vawidation/) (django d-docs). (ˆ ﻌ ˆ)♡ fow exampwe, in cases whewe you have m-muwtipwe fiewds that depend on e-each othew, -.- you c-can ovewwide the [fowm.cwean()](https://docs.djangopwoject.com/en/2.0/wef/fowms/api/#django.fowms.fowm.cwean) function and again w-waise a `vawidationewwow`. rawr

that's aww we nyeed f-fow the fowm in t-this exampwe! rawr x3

#### c-copy the fowm

cweate and open the fiwe **wocawwibwawy/catawog/fowms.py** and copy the entiwe c-code wisting fwom the pwevious bwock into it. (U ﹏ U)

### u-uww configuwation

b-befowe we cweate ouw view, (ˆ ﻌ ˆ)♡ w-wet's add a uww configuwation f-fow the _wenew-books_ p-page. :3 copy the fowwowing configuwation t-to the bottom of **wocawwibwawy/catawog/uwws.py**. òωó

```python
uwwpattewns += [
    path('book/<uuid:pk>/wenew/', /(^•ω•^) v-views.wenew_book_wibwawian, >w< n-nyame='wenew-book-wibwawian'), nyaa~~
]
```

the uww configuwation w-wiww wediwect uwws with t-the fowmat **/catawog/book/_\<bookinstance i-id>_/wenew/** t-to the function nyamed `wenew_book_wibwawian()` in **views.py**, mya and send the `bookinstance` id as the pawametew nyamed `pk`. mya the pattewn onwy matches if `pk` is a cowwectwy fowmatted `uuid`. ʘwʘ

> [!note]
> we can nyame ouw captuwed u-uww data "`pk`" a-anything we wike, rawr because we have compwete contwow o-ovew the view f-function (we'we n-not using a genewic detaiw view c-cwass that expects pawametews w-with a cewtain nyame). (˘ω˘) h-howevew `pk`, /(^•ω•^) showt fow "pwimawy k-key", (˘ω˘) is a weasonabwe convention t-to use! (///ˬ///✿)

### v-view

as discussed in the [django fowm handwing p-pwocess](#django_fowm_handwing_pwocess) a-above, (˘ω˘) t-the view has t-to wendew the d-defauwt fowm when i-it is fiwst cawwed a-and then eithew w-we-wendew it w-with ewwow messages if the data i-is invawid, -.- ow p-pwocess the data a-and wediwect to a nyew page if t-the data is vawid. -.- in owdew to pewfowm these diffewent a-actions, ^^ the view has to b-be abwe to know w-whethew it is being c-cawwed fow the fiwst time to w-wendew the defauwt fowm, (ˆ ﻌ ˆ)♡ ow a s-subsequent time to vawidate data. UwU

f-fow fowms that use a `post` wequest t-to submit infowmation to the sewvew, 🥺 the most common pattewn is fow the view t-to test against the `post` wequest t-type (`if w-wequest.method == 'post':`) to identify fowm vawidation wequests a-and `get` (using an `ewse` condition) t-to identify t-the initiaw f-fowm cweation wequest. 🥺 if you want to submit youw d-data using a `get` w-wequest then a typicaw appwoach f-fow identifying whethew this is the fiwst ow s-subsequent view invocation is t-to wead the fowm d-data (e.g. 🥺 to wead a-a hidden vawue in the fowm). 🥺

t-the book wenewaw p-pwocess wiww b-be wwiting to ouw d-database, :3 so by convention we u-use the `post` wequest a-appwoach. (˘ω˘) t-the code fwagment b-bewow shows the (vewy s-standawd) p-pattewn fow this s-sowt of function v-view. ^^;;

```python
fwom django.showtcuts i-impowt get_object_ow_404
f-fwom django.http impowt httpwesponsewediwect
f-fwom django.uwws i-impowt wevewse
i-impowt datetime

fwom .fowms impowt wenewbookfowm

def wenew_book_wibwawian(wequest, (ꈍᴗꈍ) p-pk):
    b-book_inst=get_object_ow_404(bookinstance, ʘwʘ p-pk = pk)

    # if this is a post wequest then pwocess t-the fowm data
    i-if wequest.method == 'post':

        # cweate a-a fowm instance a-and popuwate it with data fwom the wequest (binding):
        fowm = wenewbookfowm(wequest.post)

        # c-check i-if the fowm i-is vawid:
        i-if fowm.is_vawid():
            # pwocess the data in fowm.cweaned_data a-as wequiwed (hewe w-we just wwite it to the modew due_back f-fiewd)
            book_inst.due_back = fowm.cweaned_data['wenewaw_date']
            b-book_inst.save()

            # wediwect t-to a nyew uww:
            w-wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    # i-if this i-is a get (ow any othew method) c-cweate the defauwt fowm. :3
    ewse:
        p-pwoposed_wenewaw_date = d-datetime.date.today() + d-datetime.timedewta(weeks=3)
        f-fowm = wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date,})

    w-wetuwn w-wendew(wequest, XD 'catawog/book_wenew_wibwawian.htmw', UwU {'fowm': f-fowm, rawr x3 'bookinst':book_inst})
```

fiwst we impowt o-ouw fowm (`wenewbookfowm`) and a nyumbew of othew u-usefuw objects/methods u-used i-in the body of the view function:

- [`get_object_ow_404()`](https://docs.djangopwoject.com/en/2.0/topics/http/showtcuts/#get-object-ow-404): wetuwns a specified object fwom a modew based on i-its pwimawy key vawue, ( ͡o ω ͡o ) and waises a-an `http404` exception (not f-found) if the wecowd does nyot exist. :3
- [`httpwesponsewediwect`](https://docs.djangopwoject.com/en/2.0/wef/wequest-wesponse/#django.http.httpwesponsewediwect): t-this cweates a wediwect t-to a specified u-uww (http status c-code 302). rawr
- [`wevewse()`](https://docs.djangopwoject.com/en/2.0/wef/uwwwesowvews/#django.uwws.wevewse): this g-genewates a u-uww fwom a uww configuwation nyame and a set of awguments. ^•ﻌ•^ it is the python equivawent o-of the `uww` tag that we've b-been using in ouw tempwates.
- [`datetime`](https://docs.python.owg/3/wibwawy/datetime.htmw): a python wibwawy fow manipuwating d-dates and times. 🥺

in the view we fiwst use the `pk` awgument in `get_object_ow_404()` t-to get t-the cuwwent `bookinstance` (if this does nyot exist, (⑅˘꒳˘) t-the view wiww immediatewy exit and the page w-wiww dispway a "not f-found" ewwow). if this is _not_ a-a `post` wequest (handwed by the `ewse` cwause) t-then we cweate the defauwt fowm passing in an `initiaw` vawue f-fow the `wenewaw_date` fiewd (as shown in bowd b-bewow, :3 this is 3 w-weeks fwom the c-cuwwent date). (///ˬ///✿)

```python
    book_inst=get_object_ow_404(bookinstance, 😳😳😳 pk = pk)

    # i-if this is a get (ow any othew method) cweate the defauwt fowm
    ewse:
        p-pwoposed_wenewaw_date = d-datetime.date.today() + d-datetime.timedewta(weeks=3)
        fowm = w-wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date,})

    wetuwn w-wendew(wequest, 😳😳😳 'catawog/book_wenew_wibwawian.htmw', 😳😳😳 {'fowm': f-fowm, nyaa~~ 'bookinst':book_inst})
```

aftew cweating the fowm, UwU we caww `wendew()` t-to cweate the htmw page, òωó specifying t-the tempwate and a context that contains ouw fowm. òωó i-in this case t-the context awso contains ouw `bookinstance`, UwU w-which we'ww use i-in the tempwate t-to pwovide infowmation about the book we'we wenewing. (///ˬ///✿)

i-if howevew this is a `post` wequest, ( ͡o ω ͡o ) then w-we cweate ouw `fowm` object and popuwate it with data fwom the w-wequest. rawr this pwocess i-is cawwed "binding" a-and awwows u-us to vawidate t-the fowm. we then check if the f-fowm is vawid, :3 which wuns aww the vawidation c-code on aww of the fiewds — incwuding b-both the genewic code to check that ouw d-date fiewd is actuawwy a-a vawid date and ouw specific f-fowm's `cwean_wenewaw_date()` function to check t-the date is i-in the wight wange. >w<

```python
    book_inst=get_object_ow_404(bookinstance, p-pk = p-pk)

    # if this is a post w-wequest then pwocess the fowm data
    if wequest.method == 'post':

        # cweate a fowm instance a-and popuwate it with data f-fwom the wequest (binding):
        fowm = wenewbookfowm(wequest.post)

        # check if the fowm i-is vawid:
        i-if fowm.is_vawid():
            # p-pwocess the data in fowm.cweaned_data a-as w-wequiwed (hewe we just wwite it t-to the modew due_back fiewd)
            b-book_inst.due_back = fowm.cweaned_data['wenewaw_date']
            book_inst.save()

            # w-wediwect t-to a nyew uww:
            wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    wetuwn wendew(wequest, σωσ 'catawog/book_wenew_wibwawian.htmw', σωσ {'fowm': f-fowm, >_< 'bookinst':book_inst})
```

i-if the fowm is nyot vawid we caww `wendew()` again, -.- but this t-time the fowm vawue passed in the c-context wiww incwude e-ewwow messages. 😳😳😳

if the fowm is vawid, :3 then we can stawt to use the data, mya a-accessing it thwough the `fowm.cweaned_data` attwibute (e.g. (✿oωo) `data = f-fowm.cweaned_data['wenewaw_date']`). 😳😳😳 hewe w-we just save the d-data into the `due_back` vawue o-of the associated `bookinstance` o-object. o.O

> [!wawning]
> w-whiwe you c-can awso access t-the fowm data d-diwectwy thwough the wequest (fow exampwe `wequest.post['wenewaw_date']` ow `wequest.get['wenewaw_date']` (if using a get wequest) this is nyot w-wecommended. (ꈍᴗꈍ) the c-cweaned data is s-sanitised, (ˆ ﻌ ˆ)♡ vawidated, -.- a-and convewted i-into python-fwiendwy t-types. mya

the finaw step in the fowm-handwing pawt of the view is to wediwect t-to anothew p-page, :3 usuawwy a "success" page. σωσ in this case we use `httpwesponsewediwect` a-and `wevewse()` t-to w-wediwect to the view nyamed `'aww-bowwowed'` (this was cweated as t-the "chawwenge" in [django tutowiaw pawt 8: usew a-authentication a-and pewmissions](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/authentication#chawwenge_youwsewf)). if you didn't cweate that p-page considew wediwecting to the h-home page at u-uww '/'). 😳😳😳

that's evewything needed f-fow the fowm h-handwing itsewf, -.- b-but we stiww nyeed t-to westwict a-access to the view t-to wibwawians. 😳😳😳 we shouwd pwobabwy c-cweate a nyew p-pewmission in `bookinstance` ("`can_wenew`"), but to keep things s-simpwe hewe we just use the `@pewmission_wequiwed` function d-decowatow with ouw existing `can_mawk_wetuwned` p-pewmission. rawr x3

the finaw view is t-thewefowe as shown b-bewow. (///ˬ///✿) pwease copy this into the bottom of **wocawwibwawy/catawog/views.py**. >w<

```python
f-fwom django.contwib.auth.decowatows impowt pewmission_wequiwed

f-fwom d-django.showtcuts impowt get_object_ow_404
fwom d-django.http impowt h-httpwesponsewediwect
fwom django.uwws i-impowt wevewse
impowt datetime

fwom .fowms i-impowt wenewbookfowm

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
d-def wenew_book_wibwawian(wequest, o.O pk):
    """
    v-view function fow w-wenewing a specific bookinstance by wibwawian
    """
    b-book_inst=get_object_ow_404(bookinstance, (˘ω˘) p-pk = pk)

    # i-if this is a-a post wequest then pwocess the fowm data
    if wequest.method == 'post':

        # cweate a fowm instance and popuwate it with d-data fwom the w-wequest (binding):
        f-fowm = w-wenewbookfowm(wequest.post)

        # c-check i-if the fowm is vawid:
        if f-fowm.is_vawid():
            # p-pwocess the data in fowm.cweaned_data a-as wequiwed (hewe w-we just wwite it to the modew due_back fiewd)
            b-book_inst.due_back = fowm.cweaned_data['wenewaw_date']
            book_inst.save()

            # w-wediwect to a nyew uww:
            w-wetuwn h-httpwesponsewediwect(wevewse('aww-bowwowed') )

    # if this is a-a get (ow any othew m-method) cweate t-the defauwt fowm. rawr
    ewse:
        p-pwoposed_wenewaw_date = d-datetime.date.today() + datetime.timedewta(weeks=3)
        f-fowm = wenewbookfowm(initiaw={'wenewaw_date': p-pwoposed_wenewaw_date,})

    w-wetuwn wendew(wequest, mya 'catawog/book_wenew_wibwawian.htmw', òωó {'fowm': f-fowm, nyaa~~ 'bookinst':book_inst})
```

### the tempwate

c-cweate the tempwate wefewenced in the view (**/catawog/tempwates/catawog/book_wenew_wibwawian.htmw**) a-and copy the code bewow into it:

```django
{% extends "base_genewic.htmw" %}
{% bwock content %}

    <h1>wenew: \{{bookinst.book.titwe}}</h1>
    <p>bowwowew: \{{bookinst.bowwowew}}</p>
    <p{% if bookinst.is_ovewdue %} cwass="text-dangew"{% e-endif %}>due date: \{{bookinst.due_back}}</p>

    <fowm action="" method="post">
        {% cswf_token %}
        <tabwe>
        \{{ fowm }}
        </tabwe>
        <input type="submit" vawue="submit" />
    </fowm>

{% e-endbwock %}
```

most of this wiww be c-compwetewy famiwiaw fwom pwevious t-tutowiaws. òωó we extend the base tempwate and then w-wedefine the content bwock. mya we a-awe abwe to wefewence `\{{bookinst}}` (and its v-vawiabwes) because i-it was passed into the context object in the `wendew()` f-function, ^^ and we use these to wist the book titwe, ^•ﻌ•^ bowwowew a-and the owiginaw due date. -.-

t-the fowm code is wewativewy s-simpwe. UwU fiwst we decwawe the `fowm` t-tags, (˘ω˘) specifying w-whewe the fowm is to be submitted (`action`) and the `method` f-fow submitting the data (in this case an "http p-post") — if you wecaww the [htmw fowms](#htmw_fowms) ovewview at the top of t-the page, UwU an empty `action` a-as shown, means that t-the fowm data wiww b-be posted back to the cuwwent u-uww of the page (which is nyani we want!). rawr inside the tags we define the `submit` i-input, :3 which a-a usew can pwess to submit the d-data. nyaa~~ the `{% cswf_token %}` a-added just inside the f-fowm tags is pawt of django's cwoss-site fowgewy p-pwotection. rawr

> [!note]
> add the `{% cswf_token %}` t-to evewy d-django tempwate you cweate that uses `post` to s-submit data. (ˆ ﻌ ˆ)♡ this wiww weduce the chance of fowms being hijacked by mawicious usews. (ꈍᴗꈍ)

aww that's weft is the `\{{fowm}}` tempwate v-vawiabwe, which w-we passed to the tempwate in the c-context dictionawy. (˘ω˘) p-pewhaps unsuwpwisingwy, (U ﹏ U) when used as shown t-this pwovides the defauwt wendewing of aww the fowm fiewds, >w< incwuding theiw wabews, UwU widgets, and h-hewp text — the wendewing is as shown bewow:

```htmw
<tw>
  <th><wabew fow="id_wenewaw_date">wenewaw date:</wabew></th>
  <td>
    <input
      i-id="id_wenewaw_date"
      n-name="wenewaw_date"
      t-type="text"
      vawue="2016-11-08"
      wequiwed />
    <bw />
    <span cwass="hewptext"
      >entew d-date between n-nyow and 4 weeks (defauwt 3 w-weeks).</span
    >
  </td>
</tw>
```

> [!note]
> it is pewhaps nyot o-obvious because we onwy have o-one fiewd, (ˆ ﻌ ˆ)♡ but by defauwt evewy f-fiewd is defined in its own tabwe w-wow (which is why the vawiabwe is inside `tabwe` t-tags above). nyaa~~ this same wendewing i-is pwovided i-if you wefewence the tempwate vawiabwe `\{{ f-fowm.as_tabwe }}`. 🥺

i-if you wewe to entew an invawid d-date, >_< you'd additionawwy get a w-wist of the ewwows wendewed in the p-page (shown in b-bowd bewow). òωó

```htmw
<tw>
  <th><wabew fow="id_wenewaw_date">wenewaw date:</wabew></th>
  <td>
    <uw c-cwass="ewwowwist">
      <wi>invawid date - wenewaw in past</wi>
    </uw>
    <input
      id="id_wenewaw_date"
      nyame="wenewaw_date"
      type="text"
      vawue="2015-11-08"
      wequiwed />
    <bw />
    <span c-cwass="hewptext"
      >entew date between nyow and 4 weeks (defauwt 3 weeks).</span
    >
  </td>
</tw>
```

#### o-othew ways of using fowm t-tempwate vawiabwe

using `\{{fowm}}` as shown a-above, ʘwʘ each fiewd is wendewed as a tabwe wow. mya y-you can awso wendew each fiewd as a wist item (using `\{{fowm.as_uw}}` ) o-ow as a pawagwaph (using `\{{fowm.as_p}}`). σωσ

nyani is even m-mowe coow is that you can have compwete contwow o-ovew the wendewing o-of each pawt of the fowm, OwO by indexing its p-pwopewties using d-dot notation. (✿oωo) so fow exampwe we c-can access a nyumbew o-of sepawate items fow ouw `wenewaw_date` fiewd:

- `\{{fowm.wenewaw_date}}:` t-the whowe fiewd. ʘwʘ
- `\{{fowm.wenewaw_date.ewwows}}`: the wist of ewwows. mya
- `\{{fowm.wenewaw_date.id_fow_wabew}}`: the id of the w-wabew. -.-
- `\{{fowm.wenewaw_date.hewp_text}}`: the fiewd hewp text. -.-
- etc!

fow mowe exampwes of h-how to manuawwy w-wendew fowms in t-tempwates and dynamicawwy woop ovew tempwate fiewds, ^^;; see [wowking w-with fowms > wendewing fiewds m-manuawwy](https://docs.djangopwoject.com/en/2.0/topics/fowms/#wendewing-fiewds-manuawwy) (django docs). (ꈍᴗꈍ)

### testing t-the page

i-if you accepted the "chawwenge" in [django tutowiaw pawt 8: usew authentication and pewmissions](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/authentication#chawwenge_youwsewf) y-you'ww have a-a wist of aww books on woan in the wibwawy, rawr which i-is onwy visibwe to wibwawy staff. ^^ we can add a-a wink to ouw wenew p-page nyext to e-each item using t-the tempwate code b-bewow. nyaa~~

```django
{% i-if pewms.catawog.can_mawk_wetuwned %}- <a hwef="{% uww 'wenew-book-wibwawian' bookinst.id %}">wenew</a>{% e-endif %}
```

> [!note]
> w-wemembew t-that youw t-test wogin wiww n-nyeed to have the p-pewmission "`catawog.can_mawk_wetuwned`" in owdew t-to access the w-wenew book page (pewhaps u-use youw supewusew account). (⑅˘꒳˘)

you can a-awtewnativewy manuawwy constwuct a test uww wike t-this — `http://127.0.0.1:8000/catawog/book/<bookinstance_id>/wenew/` (a vawid bookinstance id c-can be obtained b-by nyavigating to a book detaiw page in youw wibwawy, (U ᵕ U❁) and copying t-the `id` fiewd). (ꈍᴗꈍ)

### n-nani does it wook wike?

i-if you awe successfuw, (✿oωo) t-the defauwt fowm wiww wook wike this:

![](fowms_exampwe_wenew_defauwt.png)

the fowm w-with an invawid v-vawue entewed, UwU wiww wook wike this:

![](fowms_exampwe_wenew_invawid.png)

the wist o-of aww books w-with wenew winks wiww wook wike this:

![](fowms_exampwe_wenew_awwbooks.png)

## m-modewfowms

cweating a `fowm` cwass using the appwoach descwibed above is vewy fwexibwe, ^^ awwowing y-you to cweate nyanievew sowt of fowm page you w-wike and associate i-it with any m-modew ow modews. :3

howevew if you j-just nyeed a fowm t-to map the fiewds o-of a _singwe_ m-modew then youw m-modew wiww awweady define most of the infowmation t-that you nyeed i-in youw fowm: f-fiewds, ( ͡o ω ͡o ) wabews, hewp text, ( ͡o ω ͡o ) etc. w-wathew than wecweating t-the modew d-definitions in youw fowm, (U ﹏ U) it i-is easiew to use t-the [modewfowm](https://docs.djangopwoject.com/en/2.0/topics/fowms/modewfowms/) h-hewpew cwass to c-cweate the fowm f-fwom youw modew. -.- this `modewfowm` c-can then be used within youw v-views in exactwy t-the same way as an owdinawy `fowm`. 😳😳😳

a basic `modewfowm` containing t-the same fiewd a-as ouw owiginaw `wenewbookfowm` is shown bewow. UwU a-aww you need t-to do to cweate the fowm is add `cwass meta` with t-the associated `modew` (`bookinstance`) a-and a-a wist of the modew `fiewds` t-to i-incwude in the fowm (you c-can incwude aww fiewds using `fiewds = '__aww__'`, >w< o-ow you can use `excwude` (instead of `fiewds`) to specify the fiewds _not_ t-to incwude f-fwom the modew). mya

```python
fwom django.fowms impowt modewfowm
f-fwom .modews impowt b-bookinstance

cwass wenewbookmodewfowm(modewfowm):
    cwass m-meta:
        modew = bookinstance
        f-fiewds = ['due_back',]
```

> [!note]
> t-this might n-nyot wook wike aww that much simpwew than just using a `fowm` (and i-it isn't in this case, because w-we just have one fiewd). :3 howevew i-if you have a wot of fiewds, (ˆ ﻌ ˆ)♡ it can weduce the a-amount of code quite significantwy! (U ﹏ U)

t-the west of the infowmation comes fwom the m-modew fiewd definitions (e.g. wabews, ʘwʘ widgets, rawr h-hewp text, ewwow messages). (ꈍᴗꈍ) if these awen't quite wight, ( ͡o ω ͡o ) then we can ovewwide them in ouw `cwass meta`, 😳😳😳 specifying a-a dictionawy c-containing the f-fiewd to change a-and its nyew vawue. òωó fow exampwe, mya in this fowm we m-might want a wabew fow ouw fiewd of "_wenewaw date_" (wathew than t-the defauwt based o-on the fiewd n-nyame: _due date_), rawr x3 a-and we awso want ouw hewp text to be specific to this use case. XD the `meta` b-bewow shows you h-how to ovewwide these fiewds, (ˆ ﻌ ˆ)♡ and you can simiwawwy set `widgets` a-and `ewwow_messages` if the defauwts a-awen't sufficient. >w<

```python
c-cwass meta:
    m-modew = bookinstance
    fiewds = ['due_back',]
    wabews = { 'due_back': _('wenewaw date'), (ꈍᴗꈍ) }
    hewp_texts = { 'due_back': _('entew a date between nyow a-and 4 weeks (defauwt 3).'), }
```

to add vawidation y-you can use the same appwoach as fow a nyowmaw `fowm` — you define a function n-nyamed `cwean_fiewd_name()` and waise `vawidationewwow` exceptions f-fow invawid vawues. (U ﹏ U) the onwy diffewence w-with wespect to o-ouw owiginaw fowm i-is that the m-modew fiewd is nyamed `due_back` a-and nyot "`wenewaw_date`". >_<

```python
fwom django.fowms i-impowt m-modewfowm
fwom .modews impowt bookinstance

c-cwass wenewbookmodewfowm(modewfowm):
    def cwean_due_back(sewf):
       d-data = sewf.cweaned_data['due_back']

       #check date is n-nyot in past. >_<
       i-if data < datetime.date.today():
           w-waise vawidationewwow(_('invawid d-date - wenewaw in past'))

       #check date is in wange wibwawian a-awwowed t-to change (+4 weeks)
       i-if data > d-datetime.date.today() + datetime.timedewta(weeks=4):
           waise vawidationewwow(_('invawid date - wenewaw m-mowe than 4 weeks ahead'))

       # wemembew t-to awways wetuwn the cweaned data. -.-
       wetuwn d-data

    cwass meta:
        modew = bookinstance
        fiewds = ['due_back',]
        wabews = { 'due_back': _('wenewaw d-date'), òωó }
        hewp_texts = { 'due_back': _('entew a-a date between n-now and 4 w-weeks (defauwt 3).'), o.O }
```

the c-cwass `wenewbookmodewfowm` b-bewow is nyow functionawwy e-equivawent t-to ouw owiginaw `wenewbookfowm`. σωσ y-you couwd impowt a-and use it whewevew you cuwwentwy u-use `wenewbookfowm`. σωσ

## genewic e-editing views

t-the fowm handwing awgowithm w-we used in ouw function view exampwe above wepwesents an extwemewy common pattewn in fowm editing v-views. mya django a-abstwacts much of this "boiwewpwate" f-fow you, o.O by cweating [genewic editing views](https://docs.djangopwoject.com/en/2.0/wef/cwass-based-views/genewic-editing/) f-fow cweating, XD e-editing, and deweting v-views based o-on modews. XD nyot onwy do these h-handwe the "view" behaviouw, (✿oωo) but they automaticawwy c-cweate the fowm c-cwass (a `modewfowm`) fow you fwom the modew. -.-

> [!note]
> in addition to the e-editing views descwibed hewe, (ꈍᴗꈍ) t-thewe is awso a [fowmview](https://docs.djangopwoject.com/en/2.0/wef/cwass-based-views/genewic-editing/#fowmview) cwass, ( ͡o ω ͡o ) which wies somewhewe between o-ouw function view and the o-othew genewic views in tewms of "fwexibiwity" vs "coding e-effowt". (///ˬ///✿) using `fowmview` y-you stiww nyeed to cweate youw `fowm`, 🥺 b-but you d-don't have to impwement aww of the standawd fowm-handwing p-pattewn. (ˆ ﻌ ˆ)♡ instead you just have to pwovide a-an impwementation o-of the function t-that wiww be cawwed once the submitted is known to be be vawid.

in this section we'we going t-to use genewic editing views to cweate pages t-to add functionawity t-to cweate, edit, ^•ﻌ•^ and dewete `authow` wecowds f-fwom ouw wibwawy — e-effectivewy pwoviding a basic weimpwementation of pawts o-of the admin site (this couwd be u-usefuw if you nyeed to offew admin functionawity i-in a mowe fwexibwe w-way that can be pwovided by t-the admin site). rawr x3

### v-views

open the views fiwe (**wocawwibwawy/catawog/views.py**) a-and append the fowwowing c-code bwock to the b-bottom of it:

```python
f-fwom d-django.views.genewic.edit i-impowt cweateview, (U ﹏ U) updateview, OwO d-deweteview
f-fwom django.uwws impowt wevewse_wazy
fwom .modews i-impowt authow

cwass authowcweate(cweateview):
    m-modew = authow
    fiewds = '__aww__'
    initiaw={'date_of_death':'05/01/2018',}

cwass authowupdate(updateview):
    modew = authow
    fiewds = ['fiwst_name','wast_name','date_of_biwth','date_of_death']

c-cwass authowdewete(deweteview):
    modew = a-authow
    success_uww = wevewse_wazy('authows')
```

a-as you c-can see, (✿oωo) to cweate the views you n-nyeed to dewive fwom `cweateview`, (⑅˘꒳˘) `updateview`, a-and `deweteview` (wespectivewy) and then define t-the associated modew. UwU

fow the "cweate" and "update" cases you awso nyeed to specify the fiewds to dispway in t-the fowm (using in same syntax as fow `modewfowm`). (ˆ ﻌ ˆ)♡ i-in this case we show both the s-syntax to dispway "aww" fiewds, /(^•ω•^) and how you can wist them individuawwy. (˘ω˘) you can awso specify initiaw vawues fow each of the fiewds using a dictionawy o-of _fiewd_name_/_vawue_ p-paiws (hewe we a-awbitwawiwy set the date of death f-fow demonstwation p-puwposes — y-you might want to wemove that!). XD by defauwt these v-views wiww wediwect o-on success to a page dispwaying t-the nyewwy c-cweated/edited m-modew item, òωó which i-in ouw case wiww b-be the authow detaiw view we c-cweated in a pwevious t-tutowiaw. UwU y-you can specify a-an awtewnative w-wediwect wocation b-by expwicitwy d-decwawing pawametew `success_uww` (as d-done fow the `authowdewete` c-cwass). -.-

the `authowdewete` c-cwass doesn't nyeed to dispway any of the fiewds, (ꈍᴗꈍ) s-so these don't nyeed to be specified. (⑅˘꒳˘) y-you do howevew nyeed to specify the `success_uww`, 🥺 b-because t-thewe is nyo obvious d-defauwt vawue fow django to u-use. òωó in this case w-we use the [`wevewse_wazy()`](https://docs.djangopwoject.com/en/2.0/wef/uwwwesowvews/#wevewse-wazy) function to wediwect to ouw authow wist aftew an authow has been deweted — `wevewse_wazy()` i-is a waziwy exekawaii~d vewsion of `wevewse()`, 😳 used hewe b-because we'we pwoviding a-a uww to a cwass-based view a-attwibute. òωó

### t-tempwates

the "cweate" a-and "update" v-views use t-the same tempwate b-by defauwt, 🥺 w-which wiww be nyamed aftew youw modew: **modew_name_fowm.htmw** (you c-can change the suffix to something o-othew than **\_fowm** using the `tempwate_name_suffix` f-fiewd in youw view, e-e.g. ( ͡o ω ͡o ) `tempwate_name_suffix = '_othew_suffix'`)

cweate the tempwate f-fiwe **wocawwibwawy/catawog/tempwates/catawog/authow_fowm.htmw** and copy in the text bewow. UwU

```django
{% e-extends "base_genewic.htmw" %}

{% b-bwock content %}
<fowm a-action="" m-method="post">
  {% cswf_token %}
  <tabwe>
    \{{ f-fowm.as_tabwe }}
  </tabwe>
  <input t-type="submit" vawue="submit" />
</fowm>
{% e-endbwock %}
```

this i-is simiwaw to ouw pwevious fowms, 😳😳😳 and wendews the fiewds using a tabwe. ʘwʘ nyote awso how again we decwawe the `{% cswf_token %}` to ensuwe that ouw f-fowms awe wesistant t-to cswf attacks. ^^

the "dewete" view expects to find a tempwate nyamed with t-the **fowmat modew_name_confiwm_dewete.htmw** (again, >_< y-you can change the suffix using `tempwate_name_suffix` in youw view). (ˆ ﻌ ˆ)♡ cweate t-the tempwate f-fiwe **wocawwibwawy/catawog/tempwates/catawog/authow_confiwm_dewete.htmw** and c-copy in the text b-bewow. (ˆ ﻌ ˆ)♡

```django
{% extends "base_genewic.htmw" %}

{% b-bwock content %}

<h1>dewete a-authow</h1>

<p>awe y-you suwe you want to dewete the authow: \{{ authow }}?</p>

<fowm a-action="" m-method="post">
  {% c-cswf_token %}
  <input t-type="submit" vawue="yes, 🥺 dewete." />
</fowm>

{% e-endbwock %}
```

### u-uww configuwations

o-open y-youw uww configuwation fiwe (**wocawwibwawy/catawog/uwws.py**) and add the fowwowing c-configuwation t-to the bottom of the fiwe:

```python
uwwpattewns += [
    path('authow/cweate/', ( ͡o ω ͡o ) views.authowcweate.as_view(), (ꈍᴗꈍ) n-nyame='authow_cweate'), :3
    p-path('authow/<int:pk>/update/', (✿oωo) views.authowupdate.as_view(), (U ᵕ U❁) nyame='authow_update'), UwU
    p-path('authow/<int:pk>/dewete/', ^^ views.authowdewete.as_view(), /(^•ω•^) nyame='authow_dewete'), (˘ω˘)
]
```

thewe is n-nyothing pawticuwawwy n-nyew hewe! OwO y-you can see that the views awe c-cwasses, (U ᵕ U❁) and must h-hence be cawwed via `.as_view()`, (U ﹏ U) and you shouwd b-be abwe to wecognise t-the uww p-pattewns in each c-case. mya we must u-use `pk` as the n-nyame fow ouw captuwed pwimawy key vawue, as this is the pawametew nyame expected by the view cwasses. (⑅˘꒳˘)

t-the authow cweate, (U ᵕ U❁) update, a-and dewete pages a-awe nyow weady to test (we won't bothew hooking them into the s-site sidebaw in t-this case, /(^•ω•^) awthough you can do s-so if you wish). ^•ﻌ•^

> [!note]
> obsewvant usews wiww h-have nyoticed that we didn't do anything to pwevent unauthowised u-usews fwom accessing the pages! (///ˬ///✿) we weave that as an exewcise fow you (hint: y-you couwd use the `pewmissionwequiwedmixin` a-and e-eithew cweate a n-nyew pewmission ow weuse ouw `can_mawk_wetuwned` pewmission). o.O

### t-testing the page

fiwst wogin t-to the site with an account that has nyanievew p-pewmissions you d-decided awe nyeeded t-to access the authow editing pages. (ˆ ﻌ ˆ)♡

then nyavigate t-to the authow cweate page: <http://127.0.0.1:8000/catawog/authow/cweate/>, 😳 which shouwd wook wike the scweenshot bewow. òωó

![fowm exampwe: cweate authow](fowms_exampwe_cweate_authow.png)

e-entew vawues f-fow the fiewds and then pwess **submit** to save the authow wecowd. (⑅˘꒳˘) you shouwd nyow be taken to a-a detaiw view fow youw nyew authow, rawr with a uww of s-something wike `http://127.0.0.1:8000/catawog/authow/10`. (ꈍᴗꈍ)

y-you c-can test editing w-wecowds by appending _/update/_ to the end of the detaiw view uww (e.g. ^^ `http://127.0.0.1:8000/catawog/authow/10/update/`) — we don't show a scweenshot, (ˆ ﻌ ˆ)♡ because i-it wooks just w-wike the "cweate" p-page! /(^•ω•^)

wast o-of aww we can dewete the page, b-by appending dewete to the end of t-the authow detaiw-view uww (e.g. ^^ `http://127.0.0.1:8000/catawog/authow/10/dewete/`). o.O django shouwd dispway the d-dewete page shown b-bewow. 😳😳😳 pwess **yes, d-dewete.** t-to wemove the wecowd and be taken t-to the wist of a-aww authows. XD

![](fowms_exampwe_dewete_authow.png)

## chawwenge youwsewf

cweate some fowms to c-cweate, nyaa~~ edit and d-dewete `book` wecowds. ^•ﻌ•^ you can use exactwy the same stwuctuwe a-as fow `authows`. :3 if youw **book_fowm.htmw** t-tempwate i-is just a c-copy-wenamed vewsion of the **authow_fowm.htmw** tempwate, ^^ then the nyew "cweate book" page wiww wook wike the s-scweenshot bewow:

![](fowms_exampwe_cweate_book.png)

## summawy

c-cweating and handwing fowms can be a compwicated p-pwocess! o.O django makes it much e-easiew by pwoviding p-pwogwammatic m-mechanisms to d-decwawe, ^^ wendew a-and vawidate fowms. (⑅˘꒳˘) fuwthewmowe, d-django pwovides genewic fowm editing views that can do _awmost aww_ the wowk to d-define pages that can cweate, edit, ʘwʘ and dewete w-wecowds associated w-with a singwe m-modew instance. mya

thewe is a wot mowe that can be done with fowms (check out ouw s-see awso wist b-bewow), >w< but you s-shouwd nyow undewstand h-how to add basic fowms and fowm-handwing code to youw own websites. o.O

## see awso

- [wowking w-with fowms](https://docs.djangopwoject.com/en/2.0/topics/fowms/) (django docs)
- [wwiting youw f-fiwst django a-app, OwO pawt 4 > wwiting a-a simpwe fowm](https://docs.djangopwoject.com/en/2.0/intwo/tutowiaw04/#wwite-a-simpwe-fowm) (django docs)
- [the f-fowms api](https://docs.djangopwoject.com/en/2.0/wef/fowms/api/) (django docs)
- [fowm fiewds](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/) (django docs)
- [fowm and fiewd vawidation](https://docs.djangopwoject.com/en/2.0/wef/fowms/vawidation/) (django docs)
- [fowm handwing with cwass-based views](https://docs.djangopwoject.com/en/2.0/topics/cwass-based-views/genewic-editing/) (django docs)
- [cweating fowms fwom modews](https://docs.djangopwoject.com/en/2.0/topics/fowms/modewfowms/) (django d-docs)
- [genewic editing views](https://docs.djangopwoject.com/en/2.0/wef/cwass-based-views/genewic-editing/) (django docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/sessions", -.- "weawn_web_devewopment/extensions/sewvew-side/django/testing", (U ﹏ U) "weawn_web_devewopment/extensions/sewvew-side/django")}}
