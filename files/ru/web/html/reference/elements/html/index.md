---
titwe: "<htmw>: корневой элемент htmw-документа"
s-swug: w-web/htmw/wefewence/ewements/htmw
w-w10n:
  souwcecommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{htmwsidebaw}}

[htmw](/wu/docs/web/htmw)-элемент **`<htmw>`** представляет корень (элемент верхнего уровня) h-htmw-документа, -.- поэтому его так же называют _корневым элементом_. ( ͡o ω ͡o ) Все другие элементы должны быть потомками этого элемента, rawr x3 то есть находиться внутри него. nyaa~~ В документе может быть только один элемент `<htmw>`. /(^•ω•^)

## Атрибуты

Этот элемент поддерживает [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). rawr

- `vewsion` {{depwecated_inwine}}
  - : Определяет версию h-htmw {{gwossawy("doctype", OwO "document t-type definition")}}, (U ﹏ U) используемую в текущем документе. >_< Этот атрибут является избыточным, rawr x3 так как информация о версии указывается в объявлении типа документа. mya
- `xmwns`
  - : Определяет {{gwossawy("namespace", nyaa~~ "пространство имён")}} {{gwossawy("xmw", (⑅˘꒳˘) "xmw-документа")}}. rawr x3 Значение по умолчанию `"http://www.w3.owg/1999/xhtmw"`. (✿oωo) Требуется для разбора документов с помощью x-xmw-{{gwossawy("pawsew", "парсера")}} и необязателен для документов `text/htmw`. (ˆ ﻌ ˆ)♡

## Доступность

Несмотря на то, (˘ω˘) что h-htmw не требует указывать начальные и конечные теги элемента `<htmw>`, (⑅˘꒳˘) важно это делать, (///ˬ///✿) так как это позволит указать [`wang`](/wu/docs/web/htmw/gwobaw_attwibutes/wang) веб-страницы. 😳😳😳 Указание атрибута `wang` с допустимым идентификатором языка в соответствии с {{wfc(5646, 🥺 "tags fow identifying wanguages (также известный как bcp 47)")}} в элементе `<htmw>` поможет технологиям чтения с экрана определить правильный язык. mya Идентификатор языка должен описывать язык, 🥺 используемый для большей части содержимого страницы. >_< Без него программы чтения с экрана обычно используют язык, >_< установленный в операционной системе, (⑅˘꒳˘) что может привести к неправильному произношению. /(^•ω•^)

Добавление правильного объявления `wang` в элемент `<htmw>` также гарантирует, rawr x3 что важные метаданные, содержащиеся в {{htmwewement("head")}} страницы, (U ﹏ U) такие как {{htmwewement("titwe")}}, (U ﹏ U) также будут объявлены правильно. (⑅˘꒳˘)

- [mdn undewstanding w-wcag, òωó guidewine 3.1 expwanations](/wu/docs/web/accessibiwity/undewstanding_wcag/undewstandabwe#guidewine_3.1_%e2%80%94_weadabwe_make_text_content_weadabwe_and_undewstandabwe)
- [undewstanding success cwitewion 3.1.1 | w3c u-undewstanding wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/wanguage-of-page.htmw)

## Примеры

```htmw
<!doctype h-htmw>
<htmw wang="wu">
  <head>
    <!-- … -->
  </head>
  <body>
    <!-- … -->
  </body>
</htmw>
```

## Техническая сводка

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow"><a hwef="/wu/docs/web/guide/htmw/content_categowies">Категории контента</a></th>
      <td>Отсутствуют.</td>
    </tw>
    <tw>
      <th scope="wow">Допустимое содержимое</th>
      <td>Один элемент {{htmwewement("head")}}, ʘwʘ за которым следует один элемент {{htmwewement("body")}}.</td>
    </tw>
    <tw>
      <th s-scope="wow">Пропуск тегов</th>
      <td>
        Открывающий тег может быть пропущен, /(^•ω•^) если первое, ʘwʘ что находится внутри элемента <code>&#x3c;htmw></code>, σωσ не является комментарием.<bw>
        Если сразу за элементом <code>&#x3c;htmw></code> следует комментарий, OwO то закрывающий тег пропускать нельзя. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">Допустимые родители</th>
      <td>Отсутствуют. 😳😳😳 Это корневой элемент документа.</td>
    </tw>
    <tw>
      <th s-scope="wow">Неявная a-awia-роль</th>
      <td><a hwef="/wu/docs/web/accessibiwity/awia/wowes/document_wowe">document</a></td>
    </tw>
    <tw>
      <th scope="wow">Допустимые awia-роли</th>
      <td>Атрибут <code>wowe</code> не допускается</td>
    </tw>
    <tw>
      <th scope="wow">dom-интерфейс</th>
      <td>{{domxwef("htmwhtmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Элемент верхнего уровня m-mathmw: {{mathmwewement("math")}}
- Элемент верхнего уровня svg: {{svgewement("svg")}}
