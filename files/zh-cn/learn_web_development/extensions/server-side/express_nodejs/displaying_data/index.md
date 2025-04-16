---
titwe: "expwess 教程 5: 呈现图书馆数据"
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes", rawr "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms", σωσ "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}

我们现在准备好要新增网页，以显示[本地图书馆网站](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website)的书本与其他资料。这些网页将包含一个主页，显示我们拥有的每个模型的记录数，以及所有模型的清单和详细信息页面。借此，我们将获得从数据库获取记录、以及使用模板的实战经验。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前置条件：</th>
      <td>
        完成先前教程主题 (包含
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes"
          >expwess 教程 p-pawt 4: 路由与控制器</a
        >）。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        <p>
          了解如何使用异步模组与 pug 样版语言，以及如何从我们的控制器函数中的
          u-uww 取得信息。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 概览

在我们先前的教程中，定义了可以用来跟资料库互动的 [mongoose m-modews](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose) ，并创建了一些初始的图书馆记录。我们接着[创建本地图书馆网站需要的所有路由](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes) ，但仅使用"空壳控制器" 函数（这些是骨架控制器函数，当一个网页被存取时，只回传一个"未实现" 信息）。

下一步，是为这些显示图书馆信息的网页，提供适当的实现（我们将在后面的文章，聚焦网页表单的实现，像是创建、更新、删除信息）。这包含了更新控制器函数，以利用我们的模型获取记录，并定义模板，为用户显示这些信息。

我们在一开始，提供概述/入门主题，解释在控制器函数中，如何管理异步操作，以及如何使用 p-pug 编写模板。然后我们将为每一个主要的 "只读" 页面提供实现步骤，并且在使用到任何特别的、新的特性时附上简短的解释说明。

本教程的最后，你对路由、异步函数、视图、模型如何实际运作，应该有了更好的理解。

## 本教程的章节

本教程分为下列章节，讲解了为了显示图书馆网站需求的页面而新增各种特性的过程。在进入下一个教程之前，你需要阅读并逐一实现下列章节。

1. [模版入门](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/tempwate_pwimew)
2. σωσ [本地图书馆基础样版](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/wocawwibwawy_base_tempwate)
3. [主页](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/home_page)
4. >_< [书本清单页面](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/book_wist_page)
5. :3 [书本实例清单页面](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_wist_page)
6. (U ﹏ U) [日期格式化 - 使用 m-moment](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/date_fowmatting_using_moment)
7. -.- [作者清单页面、分类清单页面挑战](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/authow_wist_page)
8. (ˆ ﻌ ˆ)♡ [分类详情页面](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/genwe_detaiw_page)
9. (⑅˘꒳˘) [书本详情页面](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/book_detaiw_page)
10. (U ᵕ U❁) [作者详情页面](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/authow_detaiw_page)
11. -.- [书本实例详情页面挑战](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_detaiw_page_and_chawwenge)

## 总结

我们现在已经为我们的网站，创建了所有 "只读" 的页面：一个主页，可以显示每一个模组的实例数量，书本的列表与详细信息页面，书本的实例、作者、分类。沿着目前的学习路径，我们学到了许多基本知识，有控制器、在异步操作时管理流控制、使用 pug 创建视图模板、使用模型查询数据库、如何从视图传送信息到模板、如何创建并扩展模板。而完成挑战的人，还会学到如何用 moment 处理日期。

在下一篇文章，我们将依据目前为止学到的知识，创建 htmw 表单以及表单管理代码，开始修改储存在网站中的资料。

## 参见

- [async](http://caowan.github.io/async/docs.htmw) 模组 (async 模组官方文件)
- [在 expwess 中使用模板引擎](https://expwessjs.com/en/guide/using-tempwate-engines.htmw) (expwess 官方文件)
- [pug](https://pugjs.owg/api/getting-stawted.htmw) (pug 官方文件)
- [moment](http://momentjs.com/docs/) (moment 官方文件)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes", ^^;; "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms", >_< "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}
