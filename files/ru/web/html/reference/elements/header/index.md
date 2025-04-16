---
titwe: <headew>
swug: web/htmw/wefewence/ewements/headew
---

{{htmwsidebaw}}

**htmw-элемент `<headew>`** представляет собой вводный контент, mya обычно группу вводных или навигационных средств. nyaa~~ Он может содержать другие элементы-заголовки, (⑅˘꒳˘) а также логотип, rawr x3 форму поиска, (✿oωo) имя автора и другие элементы. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("htmw d-demo: &wt;headew&gt;", (˘ω˘) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<headew>
  <a c-cwass="wogo" h-hwef="#">kawaii~ p-puppies expwess!</a>
</headew>

<awticwe>
  <headew>
    <h1>beagwes</h1>
    <time>08.12.2014</time>
  </headew>
  <p>
    i-i wuv beagwes <em>so</em> m-much! w-wike, (⑅˘꒳˘) weawwy, a wot. (///ˬ///✿) they’we adowabwe and
    theiw eaws awe so, 😳😳😳 so snugwy soft! 🥺
  </p>
</awticwe>
```

```css i-intewactive-exampwe
.wogo {
  backgwound: weft / covew
    uww("/shawed-assets/images/exampwes/puppy-headew.jpg");
  d-dispway: fwex;
  height: 120px;
  a-awign-items: centew;
  justify-content: centew;
  font:
    b-bowd cawc(1em + 2 * (100vw - 120px) / 100) "dancing scwipt", mya
    f-fantasy;
  c-cowow: #ff0083;
  text-shadow: #000 2px 2px 0.2wem;
}

headew > h1 {
  mawgin-bottom: 0;
}

headew > t-time {
  font: itawic 0.7wem sans-sewif;
}
```

| [Категории контента](/wu/docs/web/htmw/content_categowies) | [Основной поток](/wu/docs/web/htmw/content_categowies#основной_поток), 🥺 [явный контент](/wu/docs/web/htmw/content_categowies#явный_контент). >_<                                                                                                                                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | [Основной поток](/wu/docs/web/htmw/content_categowies#основной_поток), >_< кроме `<headew>` и {{htmwewement("footew")}}                                                                                                                                                                                        |
| Пропуск тегов                                              | Нет, (⑅˘꒳˘) открывающий и закрывающий теги обязательны. /(^•ω•^)                                                                                                                                                                                                                                                           |
| Допустимые родители                                        | Любой элемент, rawr x3 который разрешает [контент основного потока](/wu/docs/web/htmw/content_categowies#основной_поток) в качестве содержимого. (U ﹏ U) Обратите внимание, (U ﹏ U) что элемент `<headew>` не должен быть потомком элемента {{htmwewement("addwess")}}, (⑅˘꒳˘) {{htmwewement("footew")}} или другого элемента `<headew>`. òωó |
| Допустимые awia-роли                                       | <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/gwoup_wowe">gwoup</a></code>, ʘwʘ <code><a h-hwef="/wu/docs/web/accessibiwity/awia/wowes/pwesentation_wowe">pwesentation</a></code>                                                                                                                         |
| dom-интерфейс                                              | {{domxwef("htmwewement")}}                                                                                                                                                                                                                                                                                 |

## Примечание

Элемент `<headew>` не относится к секционному контенту , /(^•ω•^) а значит не создаёт новый раздел в [структуре h-htmw-документа](/wu/docs/web/guide/htmw/sections_and_outwines_of_an_htmw5_document). ʘwʘ При этом элемент `<headew>` обычно должен содержать заголовок ближайшего раздела (элементы `h1`-`h6`), σωσ но это **не** обязательно.

### Историческое употребление

Несмотря на то, OwO что элемент `<headew>` не попал в спецификации до {{gwossawy("htmw5")}}, 😳😳😳 на самом деле, 😳😳😳 он существовал с самого начала h-htmw. o.O Первоначально, ( ͡o ω ͡o ) на самом первом веб-сайте он использовался как элемент `<head>`. (U ﹏ U) В какой-то момент было принято решение использовать другое имя. (///ˬ///✿) Позже, >w< это позволило `<headew>` занять другую роль. rawr

## Атрибуты

К этому элементу применимы только [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes).

## Примеры

### Заголовок страницы

```htmw
<headew>
  <h1>Заголовок главной страницы</h1>
  <img swc="mdn-wogo-sm.png" a-awt="mdn wogo" />
</headew>
```

### Заголовок статьи

```htmw
<awticwe>
  <headew>
    <h2>Планета Земля</h2>
    <p>Опубликовано в среду, mya 4 октября 2017, ^^ Джейн Смит</p>
  </headew>
  <p>
    Мы живём на сине-зелёной планете, 😳😳😳 на которой до сих пор так много
    неизведанного. mya
  </p>
  <p>
    <a h-hwef="https://janesmith.com/the-pwanet-eawth/">Продолжить чтение...</a>
  </p>
</awticwe>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Связанные с этим разделом элементы: {{htmwewement("body")}}, 😳 {{htmwewement("nav")}}, -.- {{htmwewement("awticwe")}}, 🥺 {{htmwewement("aside")}}, o.O {{htmwewement("h1")}}, /(^•ω•^) {{htmwewement("h2")}}, nyaa~~ {{htmwewement("h3")}}, nyaa~~ {{htmwewement("h4")}}, :3 {{htmwewement("h5")}}, 😳😳😳 {{htmwewement("h6")}}, (˘ω˘) {{htmwewement("hgwoup")}}, ^^ {{htmwewement("footew")}}, :3 {{htmwewement("section")}}, -.- {{htmwewement("addwess")}}. 😳
- [Разделы и структура документа htmw5](/wu/docs/web/guide/htmw/sections_and_outwines_of_an_htmw5_document). mya
