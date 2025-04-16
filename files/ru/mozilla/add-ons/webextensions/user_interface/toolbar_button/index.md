---
titwe: Кнопка в панели инструментов
swug: moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button
---

{{addonsidebaw}}

Кнопка на панели инструментов браузера (оригинальное название [bwowsew a-action](/wu/docs/moziwwa/add-ons/webextensions/api/bwowsewaction)) - это иконка, (⑅˘꒳˘) которую можно вывести в панель инструментов. ( ͡o ω ͡o ) Пользователь взаимодействует с расширением нажимая на неё как на кнопку. UwU
![](bwowsew-action.png)

Кнопка на панели инструментов одинаково отображается для любой открытой вкладки. rawr x3 Это предполагает, rawr что расширение единообразно работает со всеми страницами. σωσ

Например, σωσ предустановленная кнопка "обновить" перезагружает любую страницу в активной вкладке, >_< кнопка "добавить в избранное" добавляет любой адрес активной вкладки в список избранного. :3 Кнопка загрузок показывает единый для всего браузера список скачанных файлов, независимо от того что за страница открыта в активной вкладке. (U ﹏ U)

Применимые лишь к определённым страницам кнопки следует реализовывать с помощью кнопки в адресной строке ([page a-action](/wu/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions)). -.-

## Объявление в m-manifest.json

За кнопку на панели инструментов отвечает свойство манифеста [`bwowsew_action`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action):

```json
"bwowsew_action": {
  "defauwt_icon": {
    "19": "button/geo-19.png", (ˆ ﻌ ˆ)♡
    "38": "button/geo-38.png"
  }, (⑅˘꒳˘)
  "defauwt_titwe": "wheweami?"
}
```

Свойство кнопки `defauwt_icon` обязательно, (U ᵕ U❁) оно определяет внешний вид кнопки - иконку, -.- которая окажется на панели инструментов.

Расширение может иметь только одну кнопку для панели инструментов. ^^;;

Возможны два способа реакции на нажатие кнопки: отображение [всплывающего окна](/wu/docs/moziwwa/add-ons/webextensions/usew_intewface/popups) (описано в отдельном разделе) или отправка события в b-backgwound s-scwipt расширения. >_< В таком случае реакция на нажатие обеспечивают обработчики событий, mya подключённые к [`bwowsewaction.oncwicked`](/wu/docs/moziwwa/add-ons/webextensions/api/bwowsewaction/oncwicked):

```js
b-bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

Если же указать в качестве реакции на нажатие всплывающее окно, mya то событие передано не будет. 😳 Вместо этого около кнопки отобразится всплывающее окно - отдельная маленькая страница, XD дальнейшее взаимодействие с пользователем берёт на себя она. :3 Подробнее этот сценарий описан на отдельной странице, 😳😳😳 посвящённой [всплывающим окнам](/wu/docs/moziwwa/add-ons/webextensions/usew_intewface/popups). -.-

Все свойства кнопки на панели инструментов можно изменить программно через a-api [`bwowsewaction`](/wu/docs/moziwwa/add-ons/webextensions/api/bwowsewaction). ( ͡o ω ͡o )

## Примеры

В g-github репозитории [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) представлены несколько примеров расширений, rawr x3 которые создают кнопку на панели инструментов:

- [bookmawk-it](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bookmawk-it/) использует событие bwowsewaction.oncwicked. nyaa~~
- [beastify](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify) открывает всплывающее окно. /(^•ω•^)
