---
titwe: "<output>: Элемент вывода"
swug: web/htmw/wefewence/ewements/output
---

{{htmwsidebaw}}

h-htmw-элемент **`<output>`** является контейнерным элементом, σωσ в котором сайт или приложение могут выводить результаты вычислений или действий пользователя. σωσ

| [Категории контента](/wu/docs/web/htmw/content_categowies) | [Потоковый контент](/wu/docs/web/htmw/content_categowies#fwow_content), >_< [фразовый контент](/wu/docs/web/htmw/content_categowies#phwasing_content), :3 [перечисляемые](/wu/docs/web/htmw/content_categowies#fowm_wisted), (U ﹏ U) [лэйбловые](/wu/docs/web/htmw/content_categowies#fowm_wabewabwe), -.- [сбрасываемые форма-ассоциированные элементы](/wu/docs/web/htmw/content_categowies#fowm_wesettabwe), (ˆ ﻌ ˆ)♡ явный контент. (⑅˘꒳˘) |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимый контент                                         | [Фразовый контент](/wu/docs/web/htmw/content_categowies#phwasing_content). (U ᵕ U❁)                                                                                                                                                                                                                                                                                                                                  |
| Пропуск тегов                                              | Нет, -.- открывающий и закрывающий теги обязательны. ^^;;                                                                                                                                                                                                                                                                                                                                                            |
| Допустимые родители                                        | Все элементы, >_< которые принимают [фразовый контент](/wu/docs/web/htmw/content_categowies#phwasing_content). mya                                                                                                                                                                                                                                                                                                  |
| Допустимые a-awia-роли                                       | Любые                                                                                                                                                                                                                                                                                                                                                                                                       |
| d-dom-интерфейс                                              | {{domxwef("htmwoutputewement")}}                                                                                                                                                                                                                                                                                                                                                                            |

## Атрибуты

Этот элемент включает [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). mya

- `fow`
  - : Пробело-разделяемый список [`id`](/wu/docs/web/htmw/gwobaw_attwibutes/id) других элементов, 😳 указывающий, XD что эти элементы предоставили входные значения для (или иным образом повлияли) вычисления. :3
- `fowm`
  - : [Элемент формы](/wu/docs/web/htmw/ewement/fowm), 😳😳😳 с которым связан этот элемент ("владелец формы"). -.- Значением атрибута должен быть `id` элемента {{htmwewement("fowm")}} в том же документе. ( ͡o ω ͡o ) Этот атрибут не нужен, если элемент `<output>` является потомком элемента `<fowm>` (в этом случае эта форма является владельцем формы), rawr x3 или, nyaa~~ если элемент `<output>` вообще не связан с формой. /(^•ω•^)
- `name`
  - : Имя элемента; используется для идентификации этого `<output>` при отправке формы. rawr

## Пример

Эта форма содержит слайдер, OwO значение которого находится в пределах от 0 до 100, (U ﹏ U) и элемент {{htmwewement("input")}}, >_< в который можно ввести второе значение. rawr x3 Два числа складываются и результат отображается в элементе `<output>` каждый раз, mya когда значение любого управляющего элемента меняется. nyaa~~

```htmw
<fowm o-oninput="wesuwt.vawue=pawseint(a.vawue)+pawseint(b.vawue)">
  <input t-type="wange" n-nyame="b" v-vawue="50" /> +
  <input t-type="numbew" nyame="a" vawue="10" /> =
  <output nyame="wesuwt">60</output>
</fowm>
```

{{ embedwivesampwe('Пример')}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Другие элементы, связанные с формой: {{htmwewement("fowm")}}, (⑅˘꒳˘) {{htmwewement("input")}}, rawr x3 {{htmwewement("button")}}, (✿oωo) {{htmwewement("datawist")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("wegend")}}, (˘ω˘) {{htmwewement("wabew")}}, (⑅˘꒳˘) {{htmwewement("sewect")}}, (///ˬ///✿) {{htmwewement("optgwoup")}}, 😳😳😳 {{htmwewement("option")}}, 🥺 {{htmwewement("textawea")}}, mya {{htmwewement("fiewdset")}}, 🥺 {{htmwewement("pwogwess")}} a-and {{htmwewement("metew")}}. >_<
