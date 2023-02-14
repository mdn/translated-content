---
title: Git и GitHub
slug: Learn/Tools_and_testing/GitHub
tags:
  - Веб
  - Начинающий
  - гит
translation_of: Learn/Tools_and_testing/GitHub
original_slug: Learn/Tools_and_testing/GitHub
---

{{LearnSidebar}}

Все разработчики используют ту или иную **систему контроля версий (СКВ, VCS)**, инструмент, позволяющий им взаимодействовать с другими разработчиками на проекте без угрозы того, что кто-то перезапишет чужую работу, а также вернуться к предыдущим версиям кода при обнаружении проблем позднее.

Самая популярная СКВ (по крайней мере, среди веб-разработчиков) являются **Git**, а также **GitHub**- сайт, обеспечивающий размещение ваших репозиториев и включающий инструменты для работы с ними. Цели этого модуля - дать вам необходимые знания о каждой из упомянутых СКВ.

## Обзор

СКВ являются основой для разработки программного обеспечения:

- Редко, когда вы работаете с проектом полностью самостоятельно. Как только вы начинаете работать с другими людьми, возникает риск конфликта. Речь идёт о ситуации, когда несколько человек пытается в одно и то же время обновить одну и ту же часть кода. Нужен определённый механизм, позволяющий управлять событиями и тем самым избежать потери результатов общей работы.
- Работая с проектом в одиночку или с другими, вы захотите иметь возможность иметь резервную копию кода на случай поломки вашего компьютера.
- Также у вас может возникнуть необходимость откатить изменения к более ранним версиям, если проблема обнаружена позднее. Конечно, это начать делать самостоятельно, сохраняя различные версии одного и того же файла, например `myCode.js`, `myCode_v2.js`, `myCode_v3.js`, `myCode_final.js`, `myCode_really_really_final.js`, и так далее, но это на самом деле ненадёжный и порождающий ошибки способ.
- Различные члены команды могут захотеть создать собственные версии кода (в Git такие версии именуются **ветками**), работать над новой фичей в этой версии, а затем контролируемо объединить эту версию (в GitHub используются **пул реквизиты** - запросы на принятие изменений) с главной версией.

СКВ обеспечивают инструменты для решения всех вышеуказанных задач. [Git](https://git-scm.com/) является примером СКВ, а [GitHub](https://github.com/) - это сайт, обеспечивающий веб-интерфейс для работы с гит, а также множество полезных инструментов для работы с гит-репозиториями лично или в командах, такие как фиксация проблем с кодом, инструменты для проверки кода, инструменты для управления созданием продукта, например назначение задач и их статусов, и т.д.

> **Примечание:** ГИТ на самом деле - распределённая система контроля версий, это значит что полная копия репозитория, содержащая всю кодовую базу сохраняется на твой компьютер (и кого-либо ещё). Ты вносишь изменения в свою копию и затем отправляешь эти изменения обратно на сервер, на котором администратор решит соединять ли твои изменения с оригиналом.

## Подготовка

Для использования Git и GitHub тебе необходимо:

- Компьютер с установленной версией Git (посмотри [страницу загрузки Git](https://git-scm.com/downloads)).
- Приложения для работы с Git. В зависимости от того как ты предпочитаешь работать, можешь использовать [Git-клиенты с графическим интерфейсом](https://git-scm.com/downloads/guis/) (мы рекомендуем GitHub Desktop, SourceTree или Git Kraken) или просто продолжай использовать окно терминала. Если честно, будет весьма полезно для тебя узнать основы использования git-команд в терминале, даже если ты собираешься работать через графический интерфейс.
- [Аккаунт на GitHub](https://github.com/join). Если у тебя ещё его нет, зарегистрируйся сейчас по указанной ссылке.

Что касается предварительных знаний, вам не нужно разбираться в веб-разработке, Git / GitHub или VCS, чтобы приступить к этому модулю. Тем не менее, рекомендуется, чтобы вы разбирались в составлении кода, могли его писать и читать, а также сохранили пару строчек кода в своих репозиториях!

Также желательно, чтобы у вас были некоторые базовые знания о терминале, например, перемещение между каталогами, создание файлов и изменение системного `PATH`.

> **Примечание:** Github не единственный сайт / инструментарий который ты можешь использовать с Git. Есть и альтернативы, такие как [GitLab](https://about.gitlab.com/), которые ты можешь попробовать, а также ты можешь попробовать настроить свой собственный сервер Git и использовать вместо GitHub. Мы в этом курсе остановились на GitHub, чтобы показать один из рабочих способов.

## Guides

Note that the links below take you to resources on external sites. Eventually we will are aiming to have our own dedicated Git/GitHub course, but for now, these will help you get to grips with the subject in hand.

- [Hello World (from GitHub)](https://guides.github.com/activities/hello-world/)
  - : This is a good place to start — this practical guide gets you to jump right into using GitHub, learning the basics of Git such as creating repositories and branches, making commits, and opening and merging pull requests.
- [Git Handbook (from GitHub)](https://guides.github.com/introduction/git-handbook/)
  - : This Git Handbook goes into a little more depth, explaining what a VCS is, what a repository is, how the basic GitHub model works, Git commands and examples, and more.
- [Forking Projects (from GitHub)](https://guides.github.com/activities/forking/)
  - : Forking projects is essential when you want to contribute to someone else's code. This guide explains how.
- [About Pull Requests (from GitHub)](https://help.github.com/en/articles/about-pull-requests)
  - : A useful guide to managing pull requests, the way that your suggested code changes are delivered to people's repositories for consideration.
- [Mastering issues (from GitHub)](https://guides.github.com/features/issues/)
  - : Issues are like a forum for your GitHub project, where people can ask questions and report problems, and you can manage updates (for example assigning people to fix issues, clarifying the issue, letting people know things are fixed). This articles gives you what you need to know about issues.

> **Примечание:** There is **a lot more** that you can do with Git and GitHub, but we feel that the above represents the minimum you need to know to start using Git effectively. As you get deeper into Git, you'll start to realise that it is easy to go wrong when you start using more complicated commands. Don't worry, even professional web developers find Git confusing sometimes, and often solve problems by searching for solutions on the web, or consulting sites like [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) and [Dangit, git!](https://dangitgit.com/)

## See also

- [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
- [Git command list](https://git-scm.com/docs)
- [Mastering markdown](https://guides.github.com/features/mastering-markdown/) (the text format you write in on PR, issue comments, and `.md` files).
- [Getting Started with GitHub Pages](https://guides.github.com/features/pages/) (how to publish demos and websites on GitHub).
- [Learn Git branching](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (a very useful compendium of ways to achieve specific things in Git, including how to correct things when you went wrong).
- [Dangit, git!](https://dangitgit.com/) (another useful compendium, specifically of ways to correct things when you went wrong).
