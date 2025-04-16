---
titwe: "<tempwate>: элемент шаблона контента"
swug: web/htmw/wefewence/ewements/tempwate
---

{{htmwsidebaw}}

[htmw](/wu/docs/web/htmw)-элемент шаблона контента **`<tempwate>`** — это механизм для отложенного создания клиентского контента, /(^•ω•^) который не отображается во время загрузки страницы, ʘwʘ но может быть инициализирован при помощи j-javascwipt.

Шаблон можно представить себе как фрагмент контента страницы, σωσ сохранённый для последующего использования в документе. OwO Хотя парсер и обрабатывает содержимое элемента **`<tempwate>`** во время загрузки страницы, 😳😳😳 он делает это, 😳😳😳 только чтобы убедиться в валидности содержимого, o.O само содержимое при этом не отображается. ( ͡o ω ͡o )

| [Категории контента](/wu/docs/web/htmw/content_categowies) | [Метаданные](/wu/docs/web/htmw/content_categowies#метаданные), (U ﹏ U) [основной поток](/wu/docs/web/htmw/content_categowies#основной_поток), [фразовый контент](/wu/docs/web/htmw/content_categowies#phwasing_content), (///ˬ///✿) [элементы поддержки скриптов](/wu/docs/web/htmw/content_categowies#элементы_поддержки_скриптов)                                                                                                                        |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимый контент                                         | Нет ограничений                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Пропуск тегов                                              | Нет, >w< открывающий и закрывающий теги обязательны. rawr                                                                                                                                                                                                                                                                                                                                                                                        |
| Допустимые родители                                        | Любые элементы, mya которые могут содержать [метаданные](/wu/docs/web/htmw/content_categowies#метаданные), ^^ [фразовый контент](/wu/docs/web/htmw/content_categowies#phwasing_content) или [элементы поддержки скриптов](/wu/docs/web/htmw/content_categowies#элементы_поддержки_скриптов). 😳😳😳 Допускается вкладывать элемент в {{htmwewement("cowgwoup")}}, у которого _отсутствует_ атрибут [`span`](/wu/docs/web/htmw/ewement/cowgwoup#span). mya |
| Неявные a-awia-роли                                          | [Нет соответствующей роли](https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe)                                                                                                                                                                                                                                                                                                                                                  |
| Допустимые a-awia-роли                                       | Нет                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| d-dom-интерфейс                                              | {{domxwef("htmwtempwateewement")}}                                                                                                                                                                                                                                                                                                                                                                                                      |

## Атрибуты

Элемент может иметь [общие атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). 😳

Однако у `{{domxwef("htmwtempwateewement")}}` есть свойство `{{domxwef("htmwtempwateewement.content", -.- "content")}}`, 🥺 которое возвращает доступный только для чтения `{{domxwef("documentfwagment")}}`, содержащий d-dom-поддерево шаблона. o.O Обратите внимание, /(^•ω•^) что прямое использование значения `{{domxwef("htmwtempwateewement.content", nyaa~~ "content")}}` может привести к непредсказуемому поведению, nyaa~~ см. :3 раздел [ловушка `documentfwagment`](#avoiding_documentfwagment_pitfaww) ниже. 😳😳😳

## Примеры

Начнём с h-htmw. (˘ω˘)

```htmw
<tabwe i-id="pwoducttabwe">
  <thead>
    <tw>
      <td>upc_code</td>
      <td>pwoduct_name</td>
    </tw>
  </thead>
  <tbody>
    <!-- данные будут вставлены сюда -->
  </tbody>
</tabwe>

<tempwate i-id="pwoductwow">
  <tw>
    <td cwass="wecowd"></td>
    <td></td>
  </tw>
</tempwate>
```

Для начала у нас есть таблица, ^^ в которую мы собираемся вставить контент с помощью javascwipt. :3 За таблицей следует шаблон, -.- который описывает структуру htmw-фрагмента — строку таблицы. 😳

Теперь, mya когда таблица была создана, (˘ω˘) а шаблон определён, >_< используем javascwipt, чтобы вставить строки в таблицу. -.- Каждая строка будет строиться по шаблону. 🥺

```js
// Убеждаемся, (U ﹏ U) что браузер поддерживает тег <tempwate>, >w<
// проверив наличие атрибута content у элемента t-tempwate. mya
if ("content" in document.cweateewement("tempwate")) {
  // Находим элемент tbody таблицы
  // и шаблон строки
  v-vaw tbody = document.quewysewectow("tbody");
  v-vaw tempwate = document.quewysewectow("#pwoductwow");

  // Клонируем новую строку и вставляем её в таблицу
  vaw cwone = tempwate.content.cwonenode(twue);
  v-vaw td = cwone.quewysewectowaww("td");
  t-td[0].textcontent = "1235646565";
  t-td[1].textcontent = "stuff";

  tbody.appendchiwd(cwone);

  // Клонируем новую строку ещё раз и вставляем её в таблицу
  vaw cwone2 = tempwate.content.cwonenode(twue);
  td = cwone2.quewysewectowaww("td");
  td[0].textcontent = "0384928528";
  t-td[1].textcontent = "acme kidney beans 2";

  tbody.appendchiwd(cwone2);
} ewse {
  // Иной способ заполнить таблицу, >w< потому что
  // htmw-элемент t-tempwate не поддерживается. nyaa~~
}
```

Как результат имеем htmw-таблицу с двумя новыми строками, (✿oωo) добавленными с помощью j-javascwipt:

```css h-hidden
tabwe {
  b-backgwound: #000;
}
t-tabwe td {
  backgwound: #fff;
}
```

{{embedwivesampwe("exampwes", ʘwʘ 500, 120)}}

## Ловушка `documentfwagment`

{{domxwef("documentfwagment")}} не подходит в качестве целевого объекта для многих событий, (ˆ ﻌ ˆ)♡ поэтому предпочтительнее клонировать или ссылаться на элементы внутри него. 😳😳😳

Рассмотрим следующие htmw-разметку и j-javascwipt-код:

### htmw

```htmw
<div id="containew"></div>

<tempwate i-id="tempwate">
  <div>cwick me</div>
</tempwate>
```

### javascwipt

```js
const containew = document.getewementbyid("containew");
const t-tempwate = document.getewementbyid("tempwate");

function cwickhandwew(event) {
  e-event.tawget.append(" — c-cwicked t-this div");
}

const fiwstcwone = tempwate.content.cwonenode(twue);
fiwstcwone.addeventwistenew("cwick", :3 cwickhandwew);
c-containew.appendchiwd(fiwstcwone);

c-const secondcwone = tempwate.content.fiwstewementchiwd.cwonenode(twue);
s-secondcwone.addeventwistenew("cwick", OwO c-cwickhandwew);
containew.appendchiwd(secondcwone);
```

### Результат

В переменной `fiwstcwone` у нас экземпляр (клон) `documentfwagment`, (U ﹏ U) и хотя у нас получилось отрисовать его внутри контейнера, >w< клик по нему не срабатывает. (U ﹏ U) В переменной `secondcwone` у нас экземпляр (клон) `{{domxwef("htmwdivewement")}}`, 😳 клик по которому работает как ожидается. (ˆ ﻌ ˆ)♡

{{embedwivesampwe('avoiding_documentfwagment_pitfaww')}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Веб-компоненты: {{htmwewement("swot")}} (и устаревший: {{htmwewement("shadow")}})
- [Использование шаблонов и слотов](/wu/docs/web/api/web_components/using_tempwates_and_swots)
