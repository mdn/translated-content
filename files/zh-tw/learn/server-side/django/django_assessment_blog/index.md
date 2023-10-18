---
title: "Assessment: DIY Django mini blog"
slug: Learn/Server-side/Django/django_assessment_blog
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

在這個評估中，您將使用您在 [Django Web Framework (Python)](/zh-TW/docs/Learn/Server-side/Django) 模組中獲得的知識，來創建一個非常基本的部落格。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row"><p>前提:</p></th>
      <td>在開始時做這章節的任務之前，你應該已經看完這個模組的所有文章了。</td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        <p>測試Django基礎的綜合應用，包含URL設定、模型、視圖、表單和模板。</p>
      </td>
    </tr>
  </tbody>
</table>

## 專案簡介

需要顯示的頁面與對應的 URLs 和需求提列於下表：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">頁面</th>
      <th scope="col">URL</th>
      <th scope="col">需求</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>首頁</td>
      <td><code>/</code> 和 <code>/blog/</code></td>
      <td>關於此站的說明。</td>
    </tr>
    <tr>
      <td>所有部落格文章的清單</td>
      <td><code>/blog/blogs/</code></td>
      <td>
        <p>所有部落格文章的清單。</p>
        <ul>
          <li>所有使用者都能從側邊選單進入此頁。</li>
          <li>清單按發布日期排序(新至舊)。</li>
          <li>清單依照每頁5筆文章分頁。</li>
          <li>清單內的每一筆項目顯示文章標題、發布日期與作者的名字。</li>
          <li>文章標題連結至該至文章的詳細頁面。</li>
          <li>作者的名字連結至該作者的詳細頁面。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>部落格作者(blogger) 詳細頁面</td>
      <td>
        <code>/blog/blogger/<em>&#x3C;author-id></em></code>
      </td>
      <td>
        <p>特定作者(由id指定)的資訊與他所發布的部落格文章。</p>
        <ul>
          <li>所有使用者都能從作者連結進入此頁(例如文章內的作者連結)。</li>
          <li>包含一些關於作者本身的資訊。</li>
          <li>文章清單按發布日期排序(新至舊)。</li>
          <li>不用分頁。</li>
          <li>文章清單只顯示文章標題與發佈日期。</li>
          <li>文章標題連結至文章詳細頁面。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>部落格文章詳細頁面</td>
      <td>
        <code>/blog/<em>&#x3C;blog-id></em></code>
      </td>
      <td>
        <p>部落格文章詳細內容。</p>
        <ul>
          <li>任何使用者都能從部落格文章的清單進入此頁。</li>
          <li>包含文章標題、作者、發布日期與內容。</li>
          <li>文章的回覆必須呈現於底部。</li>
          <li>文章的回覆必須按回覆時間排序(舊至新)。</li>
          <li>已登入的使用者能看見新增回覆的連結。</li>
          <li>
            文章與回覆需以純文字的方式顯示。不需要支援任何markup(例如連結、圖片、粗體/斜體等)。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>部落格作者清單</td>
      <td><code>/blog/bloggers/</code></td>
      <td>
        <p>系統內的部落格作者清單。</p>
        <ul>
          <li>任何使用者都可以從側邊選單進入此頁。</li>
          <li>作者名字連結至該作者的詳細頁面。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>回覆表單頁</td>
      <td><code>/blog/<em>&#x3C;blog-id></em>/create</code></td>
      <td>
        <p>新增回覆於特定文章。</p>
        <ul>
          <li>只有登入的使用者可以由文章詳細頁面底部連結進入此頁。</li>
          <li>提供能輸入回覆的表單(發布日期和文章標題不可被編輯)。</li>
          <li>回覆被發表之後，頁面會轉址回該文章詳細頁。</li>
          <li>使用者無法修改或是刪除他發表的回覆。</li>
          <li>
            未登入的使用者會先被導至登入頁，登入之後才能發表回覆。一旦登入之後，他們便會被導至他們想發表回覆的文章頁。
          </li>
          <li>回覆表單頁必須包含該文章的標題與連結。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>使用者身分認證頁</td>
      <td>
        <code>/accounts/<em>&#x3C;standard urls></em></code>
      </td>
      <td>
        <p>標準的Django身分驗證頁面，用來登入、登出及修改密碼。</p>
        <ul>
          <li>使用者能從側欄連結進入登入/登出頁面。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>管理者網頁</td>
      <td>
        <code>/admin/<em>&#x3C;standard urls></em></code>
      </td>
      <td>
        <p>管理者網頁必須能新增/編輯/刪除部落格文章、作者及回覆。</p>
        <ul>
          <li>管理者網頁的每筆文章記錄必須一併於其底下陳列出相關的回覆。</li>
          <li>管理者網頁的每一筆回覆都要以75字的回覆內容作為顯示名稱。</li>
          <li>其餘的紀錄使用基本的註冊即可。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

另外您應該要寫一些基本的測試來驗證:

- 所有的模型欄位都有正確的標示和長度。
- 所有的模型都有期望的物件名稱(例如 `__str__()` 回傳期望的值)。
- 模型有期望的 URL 給每篇文章與回覆。(例如`get_absolute_url()` 回傳期望的 URL)。
- BlogListView (所有文章的頁面) 可以從期望的位址進入(例如/blog/blogs)。
- BlogListView (所有文章的頁面) 可以從期望的位址名稱進入(例如'blogs')。
- BlogListView (所有文章的頁面) 使用期望的模板(例如預設值)。
- BlogListView 以每頁 5 筆項目分頁(至少第一頁是如此)。

> **備註：** 當然你也可以跑很多其他的測試。但是我們會希望您至少實作以上列出的測試項目。

下一區塊顯示符合以上需求的網頁[截圖](#Screenshots)。

## 截圖

The following screenshot provide an example of what the finished program should output.

### 列出所有的部落格文章

這個頁面會列出所有部落格內的文章(可以從側邊選單的「所有文章」連結進入)。
幾項提醒：

- 側邊選單也要列出目前登入的使用者。
- 每篇文章與部落客都能透過連結的方式進入。
- 必須要有分頁(每頁 5 筆資料)。
- 文章排列順序由最新至最舊。

![List of all blogs](diyblog_allblogs.png)

### 列出所有部落客(文章作者)

可以由側邊選單的「所有部落客」進入此頁面，並於頁面上提供連結至每一位部落客。
從截圖可以發現到，並沒有任何一位使用者登入。

![List of all bloggers](diyblog_blog_allbloggers.png)

### 部落格詳細頁

顯示某篇特定部落格文章的詳細內容。

![Blog detail with add comment link](diyblog_blog_detail_add_comment.png)

請注意每個評論都有日期與時間，並且由最後至最新排列(與部落格文章相反)。
我們可以看見最底下有個連結連到新增評論的表單。當使用者沒有登入時，我們改以要求登入的連結代替。

![Comment link when not logged in](diyblog_blog_detail_not_logged_in.png)

### 新增評論表單

這張表單用來新增評論，且使用者必須是登入狀態。當表單送出成功之後，我們必須回到相對應的部落格文章內容頁。

![Add comment form](diyblog_comment_form.png)

### 作者資料

這頁顯示部落客的介紹資料以及列出他們所發表的部落格文章。

![Blogger detail page](diyblog_blogger_detail.png)

## 一步一腳印 Steps to complete

以下說明實作的步驟。

1. 建立一個此網站的專案及 app 骨架(可以參考[Django 教學 2 : 建立一個網站骨架](/zh-TW/docs/Learn/Server-side/Django/skeleton_website))。你也許會用『diyblog』作為專案名稱，『blog』作為 app 的名稱。
2. 建立部落格文章、評論與其他任何所需物件的模型。當你在思考怎麼設計的時候，請記得：

   - 每一個評論都只屬於一篇部落格文章，但每一個部落格文章可以有很多筆評論。
   - 部落格文章必須要依照發布時間排序(新至舊)，評論要依照發布排序(舊至新)。
   - 不是每位使用者都是部落客，但是每一位使用者都可以留下評論。
   - 部落客必須有介紹資訊。

3. 跑 migrations 以及創建一個新的超級使用者(superuser)。
4. 透過 admin 網站新稱一些部落格文章和評論。
5. 幫部落格文章列表頁與部落客列表頁建立視圖、模板及設定 URL。
6. 幫部落格文章詳細頁與部落客詳細頁建立視圖、模板及設定 URL。
7. 建立一個頁面包含可以新增評論的表單(記得只有已登入的使用者可以進入此頁!)

## 提示與小技巧

This project is very similar to the [LocalLibrary](/zh-TW/docs/Learn/Server-side/Django/Tutorial_local_library_website) tutorial. You will be able to set up the skeleton, user login/logout behaviour, support for static files, views, URLs, forms, base templates and admin site configuration using almost all the same approaches.

Some general hints:

1. The index page can be implemented as a basic function view and template (just like for the locallibrary).
2. The list view for blog posts and bloggers, and the detail view for blog posts can be created using the [generic list and detail views](/zh-TW/docs/Learn/Server-side/Django/Generic_views).
3. The list of blog posts for a particular author can be created by using a generic list Blog list view and filtering for blog object that match the specified author.

   - You will have to implement `get_queryset(self)` to do the filtering (much like in our library class `LoanedBooksAllListView`) and get the author information from the URL.
   - You will also need to pass the name of the author to the page in the context. To do this in a class-based view you need to implement `get_context_data()` (discussed below).

4. The _add comment_ form can be created using a function-based view (and associated model and form) or using a generic `CreateView`. If you use a `CreateView` (recommended) then:

   - You will also need to pass the name of the blog post to the comment page in the context (implement `get_context_data()` as discussed below).
   - The form should only display the comment "description" for user entry (date and associated blog post should not be editable). Since they won't be in the form itself, your code will need to set the comment's author in the `form_valid()` function so it can be saved into the model ([as described here](https://docs.djangoproject.com/en/2.0/topics/class-based-views/generic-editing/#models-and-request-user) — Django docs). In that same function we set the associated blog. A possible implementation is shown below (`pk` is a blog id passed in from the URL/URL configuration).

     ```python
         def form_valid(self, form):
             """
             Add author and associated blog to form data before setting it as valid (so it is saved to model)
             """
             #Add logged-in user as author of comment
             form.instance.author = self.request.user
             #Associate comment with blog based on passed id
             form.instance.blog=get_object_or_404(Blog, pk = self.kwargs['pk'])
             # Call super-class form validation behaviour
             return super(BlogCommentCreate, self).form_valid(form)
     ```

   - You will need to provide a success URL to redirect to after the form validates; this should be the original blog. To do this you will need to override `get_success_url()` and "reverse" the URL for the original blog. You can get the required blog ID using the `self.kwargs` attribute, as shown in the `form_valid()` method above.

We briefly talked about passing a context to the template in a class-based view in the [Django Tutorial Part 6: Generic list and detail views](/zh-TW/docs/Learn/Server-side/Django/Generic_views#Overriding_methods_in_class-based_views) topic. To do this you need to override `get_context_data()` (first getting the existing context, updating it with whatever additional variables you want to pass to the template, and then returning the updated context). For example, the code fragment below shows how you can add a blogger object to the context based on their `BlogAuthor` id.

```python
class SomeView(generic.ListView):
    ...

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(SomeView, self).get_context_data(**kwargs)
        # Get the blogger object from the "pk" URL parameter and add it to the context
        context['blogger'] = get_object_or_404(BlogAuthor, pk = self.kwargs['pk'])
        return context
```

## Assessment

The assessment for this task is [available on Github here](https://github.com/mdn/django-diy-blog/blob/master/MarkingGuide.md). This assessment is primarily based on how well your application meets the requirements we listed above, though there are some parts of the assessment that check your code uses appropriate models, and that you have written at least some test code. When you're done, you can check out our [the finished example](https://github.com/mdn/django-diy-blog) which reflects a "full marks" project.

Once you've completed this module you've also finished all the MDN content for learning basic Django server-side website programming! We hope you enjoyed this module and feel you have a good grasp of the basics!

{{PreviousMenu("Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
