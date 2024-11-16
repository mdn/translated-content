---
title: 服务端 web 框架
slug: Learn/Server-side/First_steps/Web_frameworks
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}

前面的文章向你展示了 web 客户端和服务器之间的通信是什么样子的，HTTP 的请求和回应之间的性质，以及服务器端应用为了回应来自 web 浏览器的请求的需要做的事情。有了这些知识后，现在是时候来探索一个 web 框架是如何简化这些任务的，并且告诉你应该如何为你的第一个服务器端应用选择一个框架。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预先要求：</th>
      <td>
        基础电脑素养。对于服务器端代码是如何处理并响应 HTTP
        请求有深刻的理解。（参见<a
          href="/zh-CN/docs/Learn/Server-side/First_steps/Client-Server_overview"
          >Client-Server overview</a
        >）
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        理解 web
        框架是如何简化服务器端代码的开发和维护的，并且帮助读者思考如何为他们自己的开发项目选择一个框架。
      </td>
    </tr>
  </tbody>
</table>

下面的部分通过使用一些来自 web 框架的代码段来说明一些要点。如果不能完全看懂代码也不用太在意。我们在“框架详解”模块会帮助你完全理解。

## 概览

服务器端框架 (亦称 "web 应用框架") 使编写、维护和扩展 web 应用更加容易。它们提供工具和库来实现简单、常见的开发任务，包括 路由处理，数据库交互，会话支持和用户验证，格式化输出 (e.g. HTML, JSON, XML), 提高安全性应对网络攻击。

下一节将详细介绍 web 框架如何简化 web 应用程序开发。然后，我将阐述一些选择 web 框架的标准，并给你列出一些选项。

## web 框架可以为你做什么？

你并不是必须得使用一个服务器端的 web 框架，但是我们强烈建议你使用框架——框架会使得你的生活更美好。

这个部分我们讲一下 web 框架通常会提供的功能（并不是说每一个框架一定会提供下面的所有功能！）

### 直接处理 HTTP 请求和响应

从上一篇文章中我们知道，web 服务器和浏览器通过 HTTP 协议进行通信——服务器等待来自浏览器的 HTTP 请求然后在 HTTP 回应中返回相关信息。web 框架允许你编写简单语法的代码，即可生成处理这些请求和回应的代码。这意味着你的工作变得简单、交互变得简单、并且使用抽象程度高的代码而不是底层代码。

每一个“view”函数（请求的处理者）接受一个包含请求信息的`HttpRequest`对象，并且被要求返回一个包含格式化输出的`HttpResponse`（在下面的例子中是一个字符串）。

```python
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### 将请求路由到相关的 handler 中

大多数的站点会提供一系列不同资源，通过特定的 URL 来访问。如果都放在一个函数里面，网站会变得很难维护。所以 web 框架提供一个简单机制来匹配 URL 和特定处理函数。这种方式对网站维护也有好处，因为你只需要改变用来传输特定功能的 URL 而不用改变任何底层代码。

不同的框架使用不同机制进行匹配。比如 Flask（Python）框架通过使用装饰器来增加视图的路由。

```python
@app.route("/")
def hello():
    return "Hello World!"
```

然而，Django 则期望开发者们定义一张 URL pattern 和视图函数 URL 的匹配列表。

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/myteamname/5/
    url(r'^(?P<team_name>\w.+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### 使从请求中获得数据变得简单

数据在 HTTP 请求中的编码方式有很多种。一个从服务器获得文件或者数据的 HTTP `GET`请求可能会按照 URL 参数中要求的或者 URL 结构中的方式进行编码。一个更新服务器上数据的 HTTP `POST`请求则会在请求主体中包含像“POST data”这样的更新信息。HTTP 请求也可能包含客户端 cookie 中的即时会话和用户信息。

web 框架提供一个获得这些信息的适合编程语言的机制。比如，Django 传递给视图函数的`HttpRequest`对象包含着获得目标 URL 的方式和属性、请求的类型（比如一个 HTTP `GET`）、`GET`或者`POST`参数、cookie 或者 session 数据等等。Django 也可以通过在 URL 匹配表中定义“抓取模式”来在 URL 结构中传递编码了的信息（如上面的编码片段中的最后一行）。

### 抽象和简化数据库接口

网站使用数据库来存储与用户分享的信息和用户个人信息。web 框架通常会提供一个数据库层来抽象数据库的读、写、查询和删除操作。这一个抽象层被称作对象关系映射器（ORM）。

使用对象关系映射器有两个好处：

- 你不需要改变使用数据库的代码就可以替换底层数据库。这就允许开发者依据用途优化不同数据库的特点。
- 简单的数据的验证可以被植入到框架中。这会使得检查数据是否按照正确的方式存储在数据库字段中或者是否是特定的格式变得简单（比如邮箱地址），并且不是恶意的（黑客可以利用特定的编码模式来进行一些如删除数据库记录的非法操作）。

比如，Django 框架提供一个对象关系映射，并且将用来定义数据库记录的结构称作模型。模型制定被存储的字段类型，可能也会提供那些要被存储的信息的验证（比如，一个 email 字段只允许合法 email 地址）。字段可能也会指明最大信息量、默认值、选项列表、帮助文档、表单标签等。这个模型不会申明任何底层数据库的信息，因为这是一个只能被我们的代码改变的配置信息。

下面第一个代码片段展示了一个简单的为`Team`对象设计的 Django 模型。这个模型会使用字符字段来存储一个队伍的名字和级别，同时还指定了用来存储每一条记录的最大字符数量。`team_level`是一个枚举字段，所以我们也提供了一个被存储的数据和被展示出来的选项之间的匹配，同时指定了一个默认值。

```python
#best/models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11, 'Under 11s'),
        ...  #list our other teams
    )
    team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')
```

Django 模型提供了简单的搜索数据库的查询 API。这可以通过使用不同标准来同时匹配一系列的字段（比如精确、不区分大小写、大于等等），并且支持一些复杂的陈述（比如，你可以指定在 U11 水平的队伍中搜索队伍名字中以“Fr”开头或者“al”结尾的队伍）。

第二个代码片段展示了一个视图函数（资源处理器），这个视图函数用来展示所有 U09 水平的队伍——通过指明过滤出所有`team_level`字段能准确匹配'U09'的队伍（注意过滤规则如何传递给`filter( )`，它被视为一个变量：`team_level__exact`，由字段名、匹配类型和分隔它们的双重下划线组成）。

```python
#best/views.py

from django.shortcuts import render
from .models import Team

def youngest(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, 'best/index.html', context)
```

### 渲染数据

web 框架经常提供模板系统。这些允许你制定输出文档的结构，使用为那些数据准备的将在页面生成时添加进去的占位符。模板经常是用来生成 HTML 的，但是也可以用来生成一些其他的文档。

框架提供一个机制，使得从存储的数据中生成其他格式数据变得简单，包括{{glossary("JSON")}}和{{glossary("XML")}}。

比如，Django 模板允许你通过使用“双重花括号”（如 `\{{ variable_name }}`）来指定变量，当页面被渲染出来时，这些变量会被从视图函数传递过来的值代替。模板系统也会提供表达支持（通过语法 `{% expression %}` 来实现），这样就允许模板进行一些简单的操作比如迭代传递给模板的值列表。

> [!NOTE]
> 很多其他的模板系统使用相似的语法，比如：Jinja2 (Python), handlebars (JavaScript), moustache (JavaScript), 等。

下面的代码片段展示了它们如何工作的。下面的内容接着从上一个部分而来的“youngest team”实例，HTML 模板通过视图函数传进一个叫做 youngest_teams 的值列表。在 HTML 骨架中我们有一个初步检查 youngest_teams 变量是否存在的表示，然后会在 for 循环里面进行迭代。在每一次迭代中模板会以列表元素的形式展示队伍的 team_name 值。

```django
<!-- best/templates/best/index.html -->

<!doctype html>
<html lang="en">
  <body>
    {% if youngest_teams %}
      <ul>
        {% for team in youngest_teams %}
          <li>\{\{ team.team_name \}\}</li>
        {% endfor %}
      </ul>
    {% else %}
      <p>No teams are available.</p>
    {% endif %}
  </body>
</html>
```

## 如何选择一个 web 框架

几乎对于你想要使用的每一种语言都有大量的 web 框架（我们在下面的部分列举了一些比较受欢迎的框架）。有这么多选择，导致很难决定选择哪个框架为你的新 web 应用提供最好的开端。

一些影响你决定的因素有：

- **学习代价**：学习一个 web 框架取决于你对底层语言的熟悉程度，它的 API 的一致性与否，文档质量，社区的体量和活跃程度。如果你完全没有编程基础的话，那就考虑 Django 吧（它是基于上面几条标准来看最容易学习的了）。如果你已经成为开发团队的一部分，而那个开发团队对某一种语言或者某一个框架有着很重要的开发经历，那么就坚持相关框架。
- **效率**：效率是指一旦你熟悉某一个框架之后，你能够多块地创造一个新功能的衡量方式，包括编写和维护代码的代价（因为当前面的功能崩掉之后，你没法编写新的功能）。影响效率的大多数因素和学习代价是类似的——比如，文档，社区，编程经历等等。——其他因素还有：

  - 框架目的/起源：一些框架最初是用来解决某一类特定问题的，并且最好在生成 app 的时候顾及到这些约束。比如，Django 是用来支持新闻网站的，因此非常适合博客或者其他包含发布内容的网站。相反的，Flask 是一个相对来说轻量级的框架，因此适合用来生成一些在嵌入式设备上运行的 app。
  - _Opinionated vs unopinionated_：一个 opinionated 的框架是说，解决某一个特定问题时，总有一个被推荐的最佳的解决方法。opinionated 的框架在你试图解决一些普通问题的时候，更加趋向于产品化，因为它们会将你引入正确的方向，尽管有些时候并不那么灵活。
  - 一些 web 框架默认地包含了开发者们能遇到的任何一个问题的工具/库，而一些轻量级的框架希望开发者们自己从分离的库中选择合适的解决方式（Django 是其前者的一个实例，而 Flask 则是轻量级的一个实例）。包含了所有东西的框架通常很容易上手因为你已经有了你所需要的任何东西，并且很可能它已经被整合好了，并且文档也写得很完善。然而一个较小型的框架含有你所需要（或者以后需要）的各种东西，它将只能在受更多限制的环境中运行，并且需要学习更小的、更简单的子集学习。
  - 是否选择一个鼓励良好开发实例的框架：比如，一个鼓励 [Model-View-Controller](/zh-CN/docs/Glossary/MVC) 结构来将代码分离到逻辑函数上的框架将会是更加易于维护的代码，想比与那些对开发者没有此期待的框架而言。同样的，框架设计也深刻影响了测试和重复使用代码的难易程度。

- **框架/编程语言的表现**：通常来讲，“速度”并不是选择中最重要的因素，甚至，相对而言，运行速度很缓慢的 Python 对于一个在中等硬盘上跑的中等大小的网站已经足够了。其他语言（C++/Javascript）的明显的速度优势很有可能被学习和维护的代价给抵消了。
- **缓存支持**：当你的网站之间变得越来越成功之后，你可能会发现它已经无法妥善处理它收到的大量请求了。在这个时候，你可能会开始考虑添加缓存支持。缓存是一种优化，是指你将全部的或者大部分的网站请求保存起来，那么在后继请求中就不需要重新计算了。返回一个缓存请求比重新计算一次要快得多。缓存可以被植入你的代码里面，或者是服务器中（参见[反向代理](https://zh.wikipedia.org/wiki/反向代理)）。web 框架对于定义可缓存内容有着不同程度的支持。
- **可扩展性**：一旦你的网站非常成功的时候，你会发现缓存的好处已经所剩无几了，甚至垂直容量到达了极限（将程序运行在更加有力的硬件上面）。在这个时候，你可能需要水平扩展（将你的网站分散到好几个服务器和数据库上来加载）或者“地理上地”扩展，因为你的一些客户距离你的服务器很远。你所选择的框架将会影响到扩展你的网站的难易程度。
- **网络安全**：一些 web 框架对于解决常见的网络攻击提供更好的支持。例如，Django 消除所有用户从 HTML 输入的东西。因此从用户端输入的 Javascript 不会被运行。其他框架也提供相似的功能，但是通常在默认情况下是不直接开启的。

可能还有其他一些原因，包括许可证、框架是否处于动态发展过程中等等。

如果你是一个完全的初学者，那么你可能会基于“易于学习”来选择你的框架。除了语言本身的“易于学习”之外，帮助新手的高质量的文档/教程和一个活跃的社区是你最有价值的资源。在后续课程中，我们选取了 Django（Python）和 Express（Node/Javascript）来编写我们的实例，主要因为它们很容易上手并且有强大的支持。

> [!NOTE]
> 我们可以去 [Django](https://www.djangoproject.com/) (Python) 和 [Express](https://expressjs.com/) (Node/JavaScript) 的主页上去看看它们的文档和社区。
>
> 1. 导航至主页 (上面已给出链接)
>
>    - 点击文档菜单的链接 (通常都叫做 "Documentation（文档）、Guide（指南）、API Reference（API 参考）、Getting Started（快速开始）"之类的。）
>    - 你能看到如何设置 URL 路由、模板、数据库/数据模型的主题吗？
>    - 文档说得够清楚吗？
>
> 2. 导航至各个站点的邮件列表（从社区的链接访问）
>
>    - 近几天提出了多少问题？
>    - 有多少问题得到了回应？
>    - 他们是否有一个活跃的社区？

## 几个还不错的框架？

让我们继续，来讨论几个特定的服务器端框架。

下面的服务器端框架体现了现在最受欢迎的几个。它们有你需要用来提升效率的一切东西——它们是开源的，一直保持发展的态势，有着富有激情的社区，社区里的人创作出文档并且在讨论板上帮助使用者，并且被使用在很多高质量的网站上。当然还有很多其他非常棒的框架，你可以使用搜索引擎探索一下。

> [!NOTE]
> （部分）解释来自框架的官方网站！

### Django (Python)

[Django](https://www.djangoproject.com/)是一个高水平的 python web 框架，它鼓励快速的开发和简洁、务实的设计。它由非常有经验的开发者创建的，考虑到了 web 开发中会遇到的大多数难题，所以你无需重复造轮就能够专心编写你的应用。

Django 遵循“Batteries included”哲学，并且提供了几乎所有大多开发者们想要“开箱即用”的东西。因为它已经包含了所有东西，它作为一个整体一起工作，遵循着一致的设计原则，并且有扩展的、持续更新的文档。它也是非常快、安全和易于扩展的。基于 python，Django 代码非常容易阅读和维护。

使用 Django 的主流网站（从 Django 官网首页看到的）包括：Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.pocoo.org/)是 python 的一个微型框架

虽然体量很小，Flask 却可以开箱即用地创造出完备网站。它包含一个开发服务器和调试器，并且包含对于 [Jinja2](https://github.com/pallets/jinja) 模板的支持，安全的 cookie, [unit testing](https://en.wikipedia.org/wiki/Unit_testing), 和 [RESTful](https://www.restapitutorial.com/lessons/restfulresourcenaming.html) request dispatching。它有很好的文档和一个活跃的社区。

Flask 已经非常火爆了，部分因为那些需要在小型的、资源受限的系统中提供 web 服务的开发者们。(比如，在[Raspberry Pi](https://www.raspberrypi.org/), [Drone controllers](https://blogtarkin.com/drone-definitions-learning-the-drone-lingo/)等上面运行服务器)。

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) 针对 [Node.js](https://nodejs.org/en/) 的快速的、unopinioned、灵活的、小型的 web 框架 (node 是用来运行 Javascript 的无浏览器的环境)。它为 web 和移动应用提供强大的系列功能，并且传输有用的 HTTP 工具、方法和[middleware](/zh-CN/docs/Glossary/Middleware).

Express 非常受欢迎，主要因为它减轻了客户端 Javascript 程序到服务器端开发的迁移，并且部分因为它是资源节约型（底层的 node 环境在单线程中使用轻量级多任务处理，而不是为每个 web 请求提供单独的进程）。

因为 Express 是一个小型的 web 框架，它几乎不包含任何你可能想要使用的组件（比如，数据库接口和对用户和会话的支持通过独立的库来完成）。有很多独立的、非常好的组件，但是有时候你可能很难决定对于特定目的而言哪一个是最好的！

很多非常受欢迎的服务器端编程和全栈框架（同时包括服务器端和客户端框架），包括 [Feathers](https://feathersjs.com/)、[ItemsAPI](https://www.itemsapi.com/)、[KeystoneJS](https://keystonejs.com/)、[Kraken](https://krakenjs.com/)、[LoopBack](https://loopback.io/)、[MEAN](https://mean.io/) 和 [Sails](https://sailsjs.org/)。

大量的 profile company 使用 Express，包括优步、Accenture、IBM 等（[这里](https://expressjs.com/en/resources/companies-using-express.html)是一张列表）。

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) （通常被称作"Ruby on Rails"）是一个为 Ruby 语言编写的 web 框架。

Rails 遵循了和 Django 非常相似的设计哲学。正如 Django 一样，它提供了检索 URLs 的标准机制、从数据库中访问数据、从模板中生成 HTML 页面、格式化数据{{glossary("JSON")}} 或者 {{glossary("XML")}}。同样的，它也鼓励如 DRY（不要重复你自己）的设计模板——尽可能地只写一次代码、MVC（模板 - 视图 - 控制中心）以及很多其他的一些。

当然，还有很多由于因为具体设计决定和语言的特性导致的差异。

Rails 被用在很多站点中，包括：[Basecamp](https://basecamp.com/)、[GitHub](https://github.com/)、[Shopify](https://shopify.com/)、[Airbnb](https://airbnb.com/)、[Twitch](https://twitch.tv/)、[SoundCloud](https://soundcloud.com/)、[Hulu](https://hulu.com/)、[Zendesk](https://zendesk.com/)、[Square](https://square.com/)、[Hi](https://highrisehq.com/)

### ASP.NET

[ASP.NET](https://www.asp.net/) 是一个由微软开发的开源 Web 框架，用于构建现代的 Web 应用程序和服务。通过 ASP.NET 你能快速创建基于 HTML、CSS、JavaScript 的网站，并且能满足大量用户的需求，还可以很容易地添加诸如 Web API、数据表单、即时通讯的功能。

ASP.NET 的特点之一就是它建立在 [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR 公共语言运行时) 之上。这使得程序员可以使用任何支持的.NET 语言（如 C#、Visual Basic) 来编写 ASP.NET 代码。和很多微软的产品一样，它得益于出色的开发工具（通常是免费的）、活跃的开发者社区，以及详尽的文档。

ASP.NET 被微软、Xbox、Stack Overflow 等采用。

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/)是为 Perl 语言设计的新一代 Web 框架。

在 Web 的早期阶段，许多人都为了一个叫做 [CGI](https://metacpan.org/module/CGI) 的优秀的 Perl 库而学过 Perl。它简单到即使你不是太懂这门语言也可以开始使用，而且也强大到足以让你可以用下去。Mojolicious 通过最新的技术实现了这个想法。

Mojolicious 提供的一些功能是：

- **实时 Web 框架**，可轻松将单个文件原型，生成为结构良好的 MVC Web 应用程序；
- RESTful 路由，插件，命令，Perl-ish 模板，内容协商，会话管理，表单验证，测试框架，静态文件服务器，CGI /[PSGI](https://plackperl.org/) 检测，一流的 Unicode 支持；
- 全栈式 HTTP 和 WebSocket 客户机/服务器架構，由以下技术支持与实作－IPv6，TLS，SNI，IDNA，HTTP / SOCKS5 代理，UNIX 域套接字，Comet（长轮询），保持活动，连接池，超时，cookie，multipart，支持 gzip 压缩
- 具有 CSS 选择器支持的 JSON 和 HTML / XML 解析器和生成器；
- 非常干净，可移植且面向对象的纯 Perl API，没有任何隐藏的魔法；
- 全新的代码基于多年的经验，免费和开源。

## 总结

这篇文章展示了 web 框架如何使得编写和维护服务器端代码变得简单。它也提供了对于几个流行的框架的评价，还讨论了选择一个 web 框架的标准。你现在至少应该了解了如何为你的服务器端开发选择一个 web 框架。如果还没有，也不要担心——接下来我们给你一个详细的 Django 和 Express 教程，从而让你有一些使用 web 框架的实战经验。

这个模块的下一章节我们会稍微转变一下思路，我们会讨论一下网络安全。

{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}
