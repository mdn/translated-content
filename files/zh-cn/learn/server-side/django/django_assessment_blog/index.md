---
title: 评估：DIY Django 微博客
slug: Learn/Server-side/Django/django_assessment_blog
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

在这个评估中，您将使用您在 [Django Web Framework (Python)](/zh-CN/docs/Learn/Server-side/Django) 模块中获得的知识，来创建一个非常基本的博客。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>在尝试此评估之前，您应该已经完成了本模块中的所有文章。</td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        测试对 Django 基础知识的理解，包括 URL 配置，模型，视图，表单和模板。
      </td>
    </tr>
  </tbody>
</table>

## 项目概要

下面列出了需要显示的页面、URL 和其他要求：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">页面</th>
      <th scope="col">URL</th>
      <th scope="col">要求</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>主页</td>
      <td><code>/</code> 和 <code>/blog/</code></td>
      <td>描述站点的索引页面。</td>
    </tr>
    <tr>
      <td>所有博客文章列表</td>
      <td><code>/blog/blogs/</code></td>
      <td>
        <p>所有博客文章列表：</p>
        <ul>
          <li>可通过侧边栏链接访问所有用户。</li>
          <li>列表的排序按发布日期（从最新到最旧）。</li>
          <li>列表分页为每 5 篇文章 1 个分页。</li>
          <li>列表项显示博客标题，发布日期和作者。</li>
          <li>博客帖子名称，链接到博客详细信息页面。</li>
          <li>博主（作者姓名）链接到博客作者详细信息页面。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>博客作者（博主）详细信息页面</td>
      <td>
        <code>/blog/blogger/<em>&#x3C;author-id></em></code>
      </td>
      <td>
        <p>指定作者的信息（按 ID）和他们的博客文章列表：</p>
        <ul>
          <li>可以从博客文章等的作者链接访问所有用户</li>
          <li>包含有关博主/作者的一些简要经历信息。</li>
          <li>按发布日期排序的列表（从最新到最旧）。</li>
          <li>没有分页。</li>
          <li>列表项仅显示博客帖子名称和发布日期。</li>
          <li>博客帖子名称，链接到博客详细信息页面。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>博客帖子详细信息页面</td>
      <td>
        <code>/blog/<em>&#x3C;blog-id></em></code>
      </td>
      <td>
        <p>博客帖子详情。</p>
        <ul>
          <li>可从博客帖子列表访问所有用户。</li>
          <li>页面包含博客文章：姓名，作者，发布日期和内容。</li>
          <li>博客文章的评论应显示在底部。</li>
          <li>评论应按顺序排序：从最旧到最近。</li>
          <li>包含为登录用户添加注释的链接（请参阅注释表单页面）</li>
          <li>
            博客帖子和评论，只需显示纯文本。不需要支持任何类型的 HTML
            标记（例如链接，图像，粗体/斜体等）。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>所有博主的名单</td>
      <td><code>/blog/bloggers/</code></td>
      <td>
        <p>系统上的博主列表：</p>
        <ul>
          <li>可从站点侧栏访问所有用户</li>
          <li>博主名称链接到博客作者详细信息页面。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>评论表单页面</td>
      <td><code>/blog/<em>&#x3C;blog-id></em>/create</code></td>
      <td>
        <p>为博客帖子创建评论：</p>
        <ul>
          <li>只能从博客帖子详细信息页面底部的链接，访问登录用户（仅限）。</li>
          <li>显示表单以及用于输入注释的描述（发布日期和博客不可编辑）。</li>
          <li>发布评论后，该页面将重定向回相关的博客帖子页面。</li>
          <li>用户无法编辑或删除其帖子。</li>
          <li>
            注销用户将被引导至登录页面进行登录，然后才能添加评论。登录后，他们将被重定向，回到他们想要评论的博客页面。
          </li>
          <li>评论页面应包含被评论的博客帖子的名称/链接。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>用户认证页面</td>
      <td>
        <code>/accounts/<em>&#x3C;standard urls></em></code>
      </td>
      <td>
        <p>用于登录，注销和设置密码的标准 Django 身份验证页面：</p>
        <ul>
          <li>应该可以通过侧边栏链接，访问登录/退出页面。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>管理站点</td>
      <td>
        <code>/admin/<em>&#x3C;standard urls></em></code>
      </td>
      <td>
        <p>
          应启用管理站点，以允许创建/编辑/删除博客帖子、博客作者、和博客评论（这是博客创建新博客帖子的机制）：
        </p>
        <ul>
          <li>
            管理站点的博客帖子记录，应显示内联的相关评论列表（在每篇博客文章下方）。
          </li>
          <li>
            管理站点中的注释名称，是通过将注释说明，截断为 75 个字符来创建的。
          </li>
          <li>其他类型的记录，可以使用基本注册。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

此外，您应该编写一些基本测试来验证：

- 所有模型字段都具有正确的标签和长度。
- 所有模型都具有预期的对象名称（例如 `__str__()` 返回预期值）。
- 模型具有单个博客和评论记录的预期 URL（例如，`get_absolute_url()`返回预期的 URL）。
- BlogListView（所有博客页面）可在预期位置访问（例如 /blog/blogs）
- BlogListView（所有博客页面）可通过预期的命名网址访问（例如 'blogs'）
- BlogListView（所有博客页面）使用预期的模板（例如默认模板）
- BlogListView 以 5 个记录为 1 个分页（至少在第一页上）

> **备注：** 当然还有许多其他测试可以运行。请谨慎使用，但我们希望您至少进行上述测试。

以下部分，显示了实现上述要求的站点的屏幕截图。

## 截图

以下屏幕截图，提供了完成的程序应输出的示例。

### 所有博客文章列表

这将显示所有博客帖子的列表（可从侧栏中的“所有博客”All blogs 链接访问）。注意事项：

- 侧栏还列出了登录用户。
- 个人博客帖子和博主可以作为页面中的链接访问。
- 启用分页（以 5 个为一组）
- 次序是从最新到最旧。

![List of all blogs](diyblog_allblogs.png)

### 所有博主的列表

这提供了到所有博客的链接，如同来自侧栏中的“所有博客”All bloggers 链接。在这种情况下，我们可以从侧边栏看到，并没有用户登录。

![List of all bloggers](diyblog_blog_allbloggers.png)

### 博客详情页面

这显示了指定博客的详细信息页面。

![Blog detail with add comment link](diyblog_blog_detail_add_comment.png)

请注意，注释具有日期和时间，并且从最旧到最新排序（与博客次序相反）。最后，我们有一个链接，用于访问表单，以添加新评论。如果用户未登录，我们会看到登录的建议。

![Comment link when not logged in](diyblog_blog_detail_not_logged_in.png)

### 添加评论表单

这是添加评论的表单。请注意，我们已登录。如果成功，我们应该返回相关的博客帖子页面。

![Add comment form](diyblog_comment_form.png)

### 作者简介

这会显示博主的个人信息及其博客帖子列表。

![Blogger detail page](diyblog_blogger_detail.png)

## 完成的步骤

以下部分，描述了您需要执行的操作。

1. 为站点创建骨架项目和 Web 应用程序（如[Django 教程 2：创建骨架网站](/zh-CN/docs/Learn/Server-side/Django/skeleton_website)中所述）。您可以使用 'diyblog' 作为项目名称，使用 'blog' 作为应用程序名称。
2. 为博客帖子，评论和所需的任何其他对象创建模型。在考虑您的设计时，请记住：

   - 每个评论只有一个博客，但博客可能有很多评论。
   - 博客帖子和评论，必须按发布日期排序。
   - 并非每个用户都必须是博客作者，尽管任何用户都可能是评论者。
   - 博客作者还必须包含个人信息。

3. 为新模型运行迁移，并创建超级用户。
4. 使用管理站点，创建一些示例博客帖子，和博客评论。
5. 为博客帖子、和博客列表页面，创建视图、模板、和 URL 配置。
6. 为博客帖子、和博客详细信息页面，创建视图、模板、和 URL 配置。
7. 创建一个页面，其中包含用于添加新评论的表单（请记住，这仅适用于已登录的用户！）

## 提示和技巧

该项目与 [LocalLibrary](/zh-CN/docs/Learn/Server-side/Django/Tutorial_local_library_website) 教程非常相似。您将能够使用几乎所有相同的方法，包含设置框架，用户登录/注销行为，对静态文件，视图，URL，表单，基本模板和管理站点配置的支持。

一些一般提示：

1. 索引页面可以实现为基本功能视图和模板（就像 locallibrary 一样）。
2. T 可以使用[通用列表和详细信息视图](/zh-CN/docs/Learn/Server-side/Django/Generic_views)，以创建博客帖子和博主的列表视图，以及博客帖子的详细信息视图。
3. 可以使用通用列表的博客列表视图，并对指定作者匹配的博客对象进行过滤，来创建特定作者的博客帖子列表。

   - 您将必须实现`get_queryset(self)`来进行过滤（很像我们的图书馆类`LoanedBooksAllListView`），并从 URL 获取作者信息。
   - 您还需要将作者的名称，传递给上下文中的页面。要在基于类的视图中执行此操作，您需要实现`get_context_data()`（在下面讨论）。

4. 可以使用基于函数的视图（以及关联的模型和表单），或使用通用`CreateView`，以创建添加注释表单。如果您使用`CreateView`（推荐），那么：

   - 您还需要将博客文章的名称，传递到上下文中的评论页面（实现`get_context_data()` ，如下所述）。
   - 表单应仅显示用户输入的注释“description”（日期和相关的博客文章，不应该是可编辑的）。由于它们本身不在表单中，因此您的代码，需要在`form_valid()` 函数中，设置注释的作者，以便将其保存到模型中（[如此处所述](https://docs.djangoproject.com/en/2.0/topics/class-based-views/generic-editing/#models-and-request-user) - Django 文档）。在同一个功能中，我们设置了相关的博客。可能的实现如下所示（`pk`是从 URL / URL 配置传入的博客 ID）。

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

   - 在表单验证后，您需要提供成功的 URL，以进行重新定向；这应该是原来的博客。为此，您需要覆盖 `get_success_url()`，并为原来的博客“反转”URL。您可以使用`self.kwargs`属性，获取所需的博客 ID，如上面的 `form_valid()` 方法所示。

我们简要地讨论了在[Django 教程 6：通用列表和详细信息视图](/zh-CN/docs/Learn/Server-side/Django/Generic_views#Overriding_methods_in_class-based_views)主题中，在基于类的视图中，将上下文传递给模板。要执行此操作，您需要覆盖`get_context_data()`（首先，获取现有上下文，使用要传递给模板的任何其他变量，更新它，然后返回更新的上下文）。例如，下面的代码片段，显示了如何根据`BlogAuthor` id，将 blogger 对象添加到上下文中。

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

## 评估

这个任务的评估，可以在[Github](https://github.com/mdn/django-diy-blog/blob/master/MarkingGuide.md)上找到。此评估主要基于您的应用程序，满足上面列出要求的程度，尽管评估的某些部分，会检查您的代码是否使用了适当的模型，并且您至少编写了一些测试代码。完成后，您可以查看我们[完成的示例](https://github.com/mdn/django-diy-blog)，该示例项目的表现是“满分”。

完成本单元后，表示您还完成了所有 MDN 用于学习《基本 Django 服务器端网站编程》的内容！我们希望您喜欢这个模块，并感觉您已经掌握了基础知识！

{{PreviousMenu("Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
