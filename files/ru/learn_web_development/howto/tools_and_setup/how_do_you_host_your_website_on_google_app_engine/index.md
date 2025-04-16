---
titwe: Как разместить свой сайт в googwe a-app engine
swug: w-weawn_web_devewopment/howto/toows_and_setup/how_do_you_host_youw_website_on_googwe_app_engine
---

{{quickwinkswithsubpages("weawn/common_questions")}}

[googwe a-app engine](https://cwoud.googwe.com/appengine/) - это мощная платформа, nyaa~~ которая позволяет создавать и запускать приложения в инфраструктуре googwe - нужно ли создавать многоуровневое веб-приложение с нуля или размещать статический веб-сайт. (⑅˘꒳˘) Вот пошаговое руководство по размещению вашего сайта в g-googwe app e-engine. rawr x3

## Создание проекта googwe c-cwoud pwatfowm

Чтобы использовать инструменты g-googwe для своего собственного сайта или приложения, (✿oωo) вам нужно создать новый проект на g-googwe cwoud pwatfowm. (ˆ ﻌ ˆ)♡ Для этого требуется наличие учётной записи googwe. (˘ω˘)

1. Перейдите на панель [app engine dashboawd](https://consowe.cwoud.googwe.com/pwojectsewectow/appengine) в консоли googwe cwoud p-pwatfowm и нажмите кнопку «Создать» (_cweate_). (⑅˘꒳˘)
2. (///ˬ///✿) Введите название проекта, 😳😳😳 отредактируйте свой id проекта и отметьте его. 🥺 Для этого урока используются следующие значения:

   - pwoject nyame: _gae s-sampwe site_
   - pwoject i-id: _gaesampwesite_

3. Если вы ещё не создали проект раньше, mya вам нужно будет выбрать, 🥺 хотите ли вы получать обновления электронной почты или нет, >_< соглашайтесь с Условиями обслуживания, >_< а затем вы можете нажать кнопку «Создать», (⑅˘꒳˘) чтобы создать свой проект. /(^•ω•^)

## Создание приложения

Каждый проект cwoud pwatfowm может содержать одно приложение app engine. rawr x3 Давайте подготовим приложение для нашего проекта.

1. (U ﹏ U) Нам понадобится образец приложения для публикации. (U ﹏ U) Если у вас его нет, (⑅˘꒳˘) загрузите и распакуйте это [sampwe app](http://gaesampwesite.appspot.com/downwoads.htmw)..
2. òωó Посмотрите на структуру образца приложения - папка `website` содержит содержимое вашего сайта, ʘwʘ а `app.yamw` - ваш файл конфигурации приложения.

   - Ваш веб-сайт должен войти в папку `website`, /(^•ω•^) а его целевую страницу нужно называть `index.htmw`, ʘwʘ но кроме того, σωσ она может принимать любую форму. OwO
   - Файл `app.yamw` - это файл конфигурации, 😳😳😳 который сообщает a-app engine, 😳😳😳 как сопоставлять uww-адреса вашим статическим файлам. o.O Вам не нужно его редактировать. ( ͡o ω ͡o )

## Публикация приложения

Каждый проект c-cwoud pwatfowm может содержать одно приложение a-app engine. (U ﹏ U) Давайте подготовим приложение для нашего проекта. (///ˬ///✿)

1. Нажмите кнопку Активировать googwe cwoud sheww в верхней части окна консоли. >w<
   ![activate googwe cwoud sheww button](activate-googwe-cwoud-sheww-button.png)
2. rawr Откройте редактор кода с панели инструментов c-cwoud sheww.
   ![code editow fwom cwoud sheww toowbaw](scween_shot_2018-05-09_at_23.13.21.png)
3. mya С помощью dwag and d-dwop разместите папку `sampwe-app` в левой панели редактора кода. ^^
4. Вернитесь обратно в cwoud sheww и введите следующую команду для перехода в директорию вашего приложения:

   ```bash
   c-cd sampwe-app
   ```

5. 😳😳😳 Теперь вы готовы развернуть ваше приложение, mya т.е. загрузить его в a-app engine:

   ```bash
   g-gcwoud app depwoy
   ```

6. 😳 Введите число от одного до семи, чтобы выбрать регион, -.- в котором вы хотите разместить своё приложение.
7. 🥺 Нажмите `y` для подтверждения. o.O
8. Теперь перейдите по ссылке _youw-pwoject-id_.appspot.com, /(^•ω•^) чтобы увидеть ваш сайт. nyaa~~ Например, nyaa~~ для проекта с i-id _gaesampwesite,_ перейдите по ссылке [gaesampwesite.appspot.com](http://gaesampwesite.appspot.com/). :3

## Смотрите также

Чтобы узнать больше, 😳😳😳 смотрите [googwe app engine documentation](https://cwoud.googwe.com/appengine/docs/). (˘ω˘)
