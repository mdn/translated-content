---
title: Как разместить свой сайт в Google App Engine
slug: Learn/Common_questions/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

[Google App Engine](https://cloud.google.com/appengine/) - это мощная платформа, которая позволяет создавать и запускать приложения в инфраструктуре Google - нужно ли создавать многоуровневое веб-приложение с нуля или размещать статический веб-сайт. Вот пошаговое руководство по размещению вашего сайта в Google App Engine.

## Создание проекта Google Cloud Platform

Чтобы использовать инструменты Google для своего собственного сайта или приложения, вам нужно создать новый проект на Google Cloud Platform. Для этого требуется наличие учётной записи Google.

1. Перейдите на панель [App Engine dashboard](https://console.cloud.google.com/projectselector/appengine) в консоли Google Cloud Platform и нажмите кнопку «Создать» (_Create_).
2. Введите название проекта, отредактируйте свой ID проекта и отметьте его. Для этого урока используются следующие значения:

   - Project name: _GAE Sample Site_
   - Project ID: _gaesamplesite_

3. Если вы ещё не создали проект раньше, вам нужно будет выбрать, хотите ли вы получать обновления электронной почты или нет, соглашайтесь с Условиями обслуживания, а затем вы можете нажать кнопку «Создать», чтобы создать свой проект.

## Создание приложения

Каждый проект Cloud Platform может содержать одно приложение App Engine. Давайте подготовим приложение для нашего проекта.

1. Нам понадобится образец приложения для публикации. Если у вас его нет, загрузите и распакуйте это [sample app](http://gaesamplesite.appspot.com/downloads.html)..
2. Посмотрите на структуру образца приложения - папка `website` содержит содержимое вашего сайта, а `app.yaml` - ваш файл конфигурации приложения.

   - Ваш веб-сайт должен войти в папку `website`, а его целевую страницу нужно называть `index.html`, но кроме того, она может принимать любую форму.
   - Файл `app.yaml` - это файл конфигурации, который сообщает App Engine, как сопоставлять URL-адреса вашим статическим файлам. Вам не нужно его редактировать.

## Публикация приложения

Каждый проект Cloud Platform может содержать одно приложение App Engine. Давайте подготовим приложение для нашего проекта.

1. Нажмите кнопку Активировать Google Cloud Shell в верхней части окна консоли.
   ![Activate Google Cloud Shell button](activate-google-cloud-shell-button.png)
2. Откройте редактор кода с панели инструментов Cloud Shell.
   ![Code Editor from Cloud Shell toolbar](screen_shot_2018-05-09_at_23.13.21.png)
3. С помощью drag and drop разместите папку `sample-app` в левой панели редактора кода.
4. Вернитесь обратно в Cloud Shell и введите следующую команду для перехода в директорию вашего приложения:

   ```bash
   cd sample-app
   ```

5. Теперь вы готовы развернуть ваше приложение, т.е. загрузить его в App Engine:

   ```bash
   gcloud app deploy
   ```

6. Введите число от одного до семи, чтобы выбрать регион, в котором вы хотите разместить своё приложение.
7. Нажмите `Y` для подтверждения.
8. Теперь перейдите по ссылке _your-project-id_.appspot.com, чтобы увидеть ваш сайт. Например, для проекта с ID _gaesamplesite,_ перейдите по ссылке [gaesamplesite.appspot.com](http://gaesamplesite.appspot.com/).

## Смотрите также

Чтобы узнать больше, смотрите [Google App Engine Documentation](https://cloud.google.com/appengine/docs/).
