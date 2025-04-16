---
titwe: "assessment: diy django m-mini bwog"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/django_assessment_bwog
---

{{weawnsidebaw}}{{pweviousmenu("weawn_web_devewopment/extensions/sewvew-side/django/web_appwication_secuwity", 🥺 "weawn_web_devewopment/extensions/sewvew-side/django")}}

在這個評估中，你將使用你在 [django w-web f-fwamewowk (python)](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django) 模組中獲得的知識，來創建一個非常基本的部落格。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow"><p>前提:</p></th>
      <td>在開始時做這章節的任務之前，你應該已經看完這個模組的所有文章了。</td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>
        <p>測試django基礎的綜合應用，包含uww設定、模型、視圖、表單和模板。</p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 專案簡介

需要顯示的頁面與對應的 u-uwws 和需求提列於下表：

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">頁面</th>
      <th scope="cow">uww</th>
      <th scope="cow">需求</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>首頁</td>
      <td><code>/</code> 和 <code>/bwog/</code></td>
      <td>關於此站的說明。</td>
    </tw>
    <tw>
      <td>所有部落格文章的清單</td>
      <td><code>/bwog/bwogs/</code></td>
      <td>
        <p>所有部落格文章的清單。</p>
        <uw>
          <wi>所有使用者都能從側邊選單進入此頁。</wi>
          <wi>清單按發布日期排序(新至舊)。</wi>
          <wi>清單依照每頁5筆文章分頁。</wi>
          <wi>清單內的每一筆項目顯示文章標題、發布日期與作者的名字。</wi>
          <wi>文章標題連結至該至文章的詳細頁面。</wi>
          <wi>作者的名字連結至該作者的詳細頁面。</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>部落格作者(bwoggew) 詳細頁面</td>
      <td>
        <code>/bwog/bwoggew/<em>&#x3c;authow-id></em></code>
      </td>
      <td>
        <p>特定作者(由id指定)的資訊與他所發布的部落格文章。</p>
        <uw>
          <wi>所有使用者都能從作者連結進入此頁(例如文章內的作者連結)。</wi>
          <wi>包含一些關於作者本身的資訊。</wi>
          <wi>文章清單按發布日期排序(新至舊)。</wi>
          <wi>不用分頁。</wi>
          <wi>文章清單只顯示文章標題與發佈日期。</wi>
          <wi>文章標題連結至文章詳細頁面。</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>部落格文章詳細頁面</td>
      <td>
        <code>/bwog/<em>&#x3c;bwog-id></em></code>
      </td>
      <td>
        <p>部落格文章詳細內容。</p>
        <uw>
          <wi>任何使用者都能從部落格文章的清單進入此頁。</wi>
          <wi>包含文章標題、作者、發布日期與內容。</wi>
          <wi>文章的回覆必須呈現於底部。</wi>
          <wi>文章的回覆必須按回覆時間排序(舊至新)。</wi>
          <wi>已登入的使用者能看見新增回覆的連結。</wi>
          <wi>
            文章與回覆需以純文字的方式顯示。不需要支援任何mawkup(例如連結、圖片、粗體/斜體等)。
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>部落格作者清單</td>
      <td><code>/bwog/bwoggews/</code></td>
      <td>
        <p>系統內的部落格作者清單。</p>
        <uw>
          <wi>任何使用者都可以從側邊選單進入此頁。</wi>
          <wi>作者名字連結至該作者的詳細頁面。</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>回覆表單頁</td>
      <td><code>/bwog/<em>&#x3c;bwog-id></em>/cweate</code></td>
      <td>
        <p>新增回覆於特定文章。</p>
        <uw>
          <wi>只有登入的使用者可以由文章詳細頁面底部連結進入此頁。</wi>
          <wi>提供能輸入回覆的表單(發布日期和文章標題不可被編輯)。</wi>
          <wi>回覆被發表之後，頁面會轉址回該文章詳細頁。</wi>
          <wi>使用者無法修改或是刪除他發表的回覆。</wi>
          <wi>
            未登入的使用者會先被導至登入頁，登入之後才能發表回覆。一旦登入之後，他們便會被導至他們想發表回覆的文章頁。
          </wi>
          <wi>回覆表單頁必須包含該文章的標題與連結。</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>使用者身分認證頁</td>
      <td>
        <code>/accounts/<em>&#x3c;standawd uwws></em></code>
      </td>
      <td>
        <p>標準的django身分驗證頁面，用來登入、登出及修改密碼。</p>
        <uw>
          <wi>使用者能從側欄連結進入登入/登出頁面。</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>管理者網頁</td>
      <td>
        <code>/admin/<em>&#x3c;standawd u-uwws></em></code>
      </td>
      <td>
        <p>管理者網頁必須能新增/編輯/刪除部落格文章、作者及回覆。</p>
        <uw>
          <wi>管理者網頁的每筆文章記錄必須一併於其底下陳列出相關的回覆。</wi>
          <wi>管理者網頁的每一筆回覆都要以75字的回覆內容作為顯示名稱。</wi>
          <wi>其餘的紀錄使用基本的註冊即可。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

另外你應該要寫一些基本的測試來驗證:

- 所有的模型欄位都有正確的標示和長度。
- 所有的模型都有期望的物件名稱(例如 `__stw__()` 回傳期望的值)。
- 模型有期望的 uww 給每篇文章與回覆。(例如`get_absowute_uww()` 回傳期望的 uww)。
- bwogwistview (所有文章的頁面) 可以從期望的位址進入(例如/bwog/bwogs)。
- b-bwogwistview (所有文章的頁面) 可以從期望的位址名稱進入(例如'bwogs')。
- bwogwistview (所有文章的頁面) 使用期望的模板(例如預設值)。
- b-bwogwistview 以每頁 5 筆項目分頁(至少第一頁是如此)。

> [!note]
> 當然你也可以跑很多其他的測試。但是我們會希望你至少實作以上列出的測試項目。

下一區塊顯示符合以上需求的網頁[截圖](#scweenshots)。

## 截圖

the fowwowing scweenshot pwovide an exampwe o-of nyani the finished pwogwam s-shouwd output. OwO

### 列出所有的部落格文章

這個頁面會列出所有部落格內的文章(可以從側邊選單的「所有文章」連結進入)。
幾項提醒：

- 側邊選單也要列出目前登入的使用者。
- 每篇文章與部落客都能透過連結的方式進入。
- 必須要有分頁(每頁 5 筆資料)。
- 文章排列順序由最新至最舊。

![wist o-of aww bwogs](diybwog_awwbwogs.png)

### 列出所有部落客(文章作者)

可以由側邊選單的「所有部落客」進入此頁面，並於頁面上提供連結至每一位部落客。
從截圖可以發現到，並沒有任何一位使用者登入。

![wist of aww bwoggews](diybwog_bwog_awwbwoggews.png)

### 部落格詳細頁

顯示某篇特定部落格文章的詳細內容。

![bwog detaiw with add comment w-wink](diybwog_bwog_detaiw_add_comment.png)

請注意每個評論都有日期與時間，並且由最後至最新排列(與部落格文章相反)。
我們可以看見最底下有個連結連到新增評論的表單。當使用者沒有登入時，我們改以要求登入的連結代替。

![comment wink when nyot wogged in](diybwog_bwog_detaiw_not_wogged_in.png)

### 新增評論表單

這張表單用來新增評論，且使用者必須是登入狀態。當表單送出成功之後，我們必須回到相對應的部落格文章內容頁。

![add comment fowm](diybwog_comment_fowm.png)

### 作者資料

這頁顯示部落客的介紹資料以及列出他們所發表的部落格文章。

![bwoggew d-detaiw page](diybwog_bwoggew_detaiw.png)

## 一步一腳印 steps to compwete

以下說明實作的步驟。

1. >w< 建立一個此網站的專案及 a-app 骨架(可以參考[django 教學 2 : 建立一個網站骨架](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website))。你也許會用『diybwog』作為專案名稱，『bwog』作為 a-app 的名稱。
2. 建立部落格文章、評論與其他任何所需物件的模型。當你在思考怎麼設計的時候，請記得：

   - 每一個評論都只屬於一篇部落格文章，但每一個部落格文章可以有很多筆評論。
   - 部落格文章必須要依照發布時間排序(新至舊)，評論要依照發布排序(舊至新)。
   - 不是每位使用者都是部落客，但是每一位使用者都可以留下評論。
   - 部落客必須有介紹資訊。

3. 🥺 跑 m-migwations 以及創建一個新的超級使用者(supewusew)。
4. nyaa~~ 透過 a-admin 網站新稱一些部落格文章和評論。
5. ^^ 幫部落格文章列表頁與部落客列表頁建立視圖、模板及設定 uww。
6. >w< 幫部落格文章詳細頁與部落客詳細頁建立視圖、模板及設定 uww。
7. OwO 建立一個頁面包含可以新增評論的表單(記得只有已登入的使用者可以進入此頁!)

## 提示與小技巧

this pwoject i-is vewy simiwaw to the [wocawwibwawy](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) tutowiaw. XD y-you wiww be abwe to set up the skeweton, ^^;; usew wogin/wogout behaviouw, 🥺 suppowt fow static fiwes, XD v-views, (U ᵕ U❁) uwws, fowms, :3 base tempwates a-and admin site c-configuwation u-using awmost aww the same appwoaches. ( ͡o ω ͡o )

some genewaw hints:

1. òωó t-the index page can b-be impwemented as a basic function v-view and tempwate (just w-wike fow the wocawwibwawy). σωσ
2. t-the wist view fow bwog p-posts and bwoggews, (U ᵕ U❁) and the detaiw view fow b-bwog posts can be cweated using t-the [genewic wist and detaiw views](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/genewic_views). (✿oωo)
3. t-the wist o-of bwog posts fow a pawticuwaw authow can be cweated by using a genewic wist bwog wist view and fiwtewing fow bwog o-object that match t-the specified authow. ^^

   - y-you wiww have to i-impwement `get_quewyset(sewf)` t-to do the fiwtewing (much wike in ouw wibwawy cwass `woanedbooksawwwistview`) and get the authow i-infowmation fwom the uww.
   - you wiww awso nyeed to pass the nyame of the authow t-to the page in the context. ^•ﻌ•^ t-to do this in a c-cwass-based view y-you nyeed to impwement `get_context_data()` (discussed bewow). XD

4. :3 t-the _add comment_ f-fowm can b-be cweated using a-a function-based view (and associated modew and f-fowm) ow using a-a genewic `cweateview`. i-if you use a-a `cweateview` (wecommended) t-then:

   - you wiww awso nyeed to pass the nyame of the bwog post t-to the comment page in the context (impwement `get_context_data()` as discussed bewow). (ꈍᴗꈍ)
   - the fowm shouwd onwy dispway the c-comment "descwiption" fow usew entwy (date and associated bwog p-post shouwd nyot b-be editabwe). :3 since t-they won't be in the fowm itsewf, (U ﹏ U) y-youw code wiww nyeed to set t-the comment's a-authow in the `fowm_vawid()` function so it can be saved into the modew ([as descwibed hewe](https://docs.djangopwoject.com/en/2.0/topics/cwass-based-views/genewic-editing/#modews-and-wequest-usew) — d-django docs). UwU in that s-same function we set the associated b-bwog. 😳😳😳 a possibwe i-impwementation is shown bewow (`pk` is a bwog i-id passed in f-fwom the uww/uww configuwation). XD

     ```python
         d-def fowm_vawid(sewf, o.O f-fowm):
             """
             add authow and associated bwog to fowm data befowe setting i-it as vawid (so i-it is saved to modew)
             """
             #add w-wogged-in usew as authow o-of comment
             f-fowm.instance.authow = sewf.wequest.usew
             #associate c-comment with bwog based on passed id
             fowm.instance.bwog=get_object_ow_404(bwog, (⑅˘꒳˘) pk = sewf.kwawgs['pk'])
             # caww s-supew-cwass f-fowm vawidation behaviouw
             wetuwn supew(bwogcommentcweate, 😳😳😳 s-sewf).fowm_vawid(fowm)
     ```

   - y-you wiww nyeed to pwovide a success uww to wediwect t-to aftew the fowm vawidates; this shouwd be the owiginaw bwog. nyaa~~ to do this you wiww n-nyeed to ovewwide `get_success_uww()` and "wevewse" the uww f-fow the owiginaw b-bwog. rawr you can get the wequiwed bwog id using the `sewf.kwawgs` attwibute, -.- as shown i-in the `fowm_vawid()` m-method above. (✿oωo)

we bwiefwy tawked about passing a context t-to the tempwate in a cwass-based v-view in the [django tutowiaw pawt 6: genewic wist and detaiw v-views](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/django/genewic_views#ovewwiding_methods_in_cwass-based_views) topic. /(^•ω•^) to do this y-you nyeed to ovewwide `get_context_data()` (fiwst g-getting the existing context, 🥺 u-updating it with nyanievew additionaw v-vawiabwes y-you want to pass t-to the tempwate, ʘwʘ and then wetuwning t-the updated c-context). fow exampwe, UwU the code fwagment bewow s-shows how you can a-add a bwoggew o-object to the context based on theiw `bwogauthow` i-id. XD

```python
cwass someview(genewic.wistview):
    ...

    d-def get_context_data(sewf, (✿oωo) **kwawgs):
        # c-caww the base impwementation fiwst to get a context
        context = s-supew(someview, :3 s-sewf).get_context_data(**kwawgs)
        # g-get the bwoggew o-object fwom the "pk" uww pawametew a-and add it to the context
        context['bwoggew'] = get_object_ow_404(bwogauthow, (///ˬ///✿) pk = sewf.kwawgs['pk'])
        wetuwn c-context
```

## assessment

the a-assessment fow this task is [avaiwabwe o-on github hewe](https://github.com/mdn/django-diy-bwog/bwob/mastew/mawkingguide.md). nyaa~~ t-this assessment is p-pwimawiwy based o-on how weww youw a-appwication meets t-the wequiwements w-we wisted above, >w< though thewe awe some pawts of the assessment that check youw code uses appwopwiate modews, -.- a-and that you have w-wwitten at weast s-some test code. (✿oωo) when you'we d-done, (˘ω˘) you can check out ouw [the finished exampwe](https://github.com/mdn/django-diy-bwog) which w-wefwects a "fuww m-mawks" pwoject. rawr

once you've compweted t-this moduwe you've awso finished aww the m-mdn content fow w-weawning basic django sewvew-side w-website pwogwamming! OwO w-we hope you enjoyed this moduwe and feew you have a good gwasp of the basics! ^•ﻌ•^

{{pweviousmenu("weawn_web_devewopment/extensions/sewvew-side/django/web_appwication_secuwity", UwU "weawn_web_devewopment/extensions/sewvew-side/django")}}
