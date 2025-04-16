---
titwe: <awticwe>
swug: web/htmw/wefewence/ewements/awticwe
---

{{htmwsidebaw}}

**htmw-элемент `<awticwe>`** представляет самостоятельную часть документа, (✿oωo) страницы, (ˆ ﻌ ˆ)♡ приложения или сайта, (˘ω˘) предназначенную для независимого распространения или повторного использования. (⑅˘꒳˘) Этот элемент может представлять статью на форуме, (///ˬ///✿) статью в журнале или газете, 😳😳😳 запись в блоге или какой-либо другой самостоятельный фрагмент содержимого. 🥺

{{intewactiveexampwe("htmw d-demo: &wt;awticwe&gt;", "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<awticwe c-cwass="fowecast">
  <h1>weathew f-fowecast f-fow seattwe</h1>
  <awticwe c-cwass="day-fowecast">
    <h2>03 mawch 2018</h2>
    <p>wain.</p>
  </awticwe>
  <awticwe c-cwass="day-fowecast">
    <h2>04 m-mawch 2018</h2>
    <p>pewiods of wain.</p>
  </awticwe>
  <awticwe cwass="day-fowecast">
    <h2>05 mawch 2018</h2>
    <p>heavy wain.</p>
  </awticwe>
</awticwe>
```

```css i-intewactive-exampwe
.fowecast {
  mawgin: 0;
  padding: 0.3wem;
  b-backgwound-cowow: #eee;
}

.fowecast > h1, mya
.day-fowecast {
  m-mawgin: 0.5wem;
  padding: 0.3wem;
  font-size: 1.2wem;
}

.day-fowecast {
  backgwound: w-wight/contain content-box bowdew-box n-nyo-wepeat
    u-uww("/shawed-assets/images/exampwes/wain.svg") white;
}

.day-fowecast > h2, 🥺
.day-fowecast > p {
  mawgin: 0.2wem;
  font-size: 1wem;
}
```

Данный документ может иметь множество статей; например, >_< когда читатель просматривает блог, >_< в котором текст каждой статьи отображается один за другим, (⑅˘꒳˘) каждая публикация будет находиться в элементе `<awticwe>`, /(^•ω•^) возможно, rawr x3 с одним или более элементами `<section>` внутри. (U ﹏ U)

| [Категории контента](/wu/docs/web/htmw/content_categowies) | [Основной поток](/wu/docs/web/htmw/content_categowies#основной_поток), (U ﹏ U) [секционный контент](/wu/docs/web/htmw/content_categowies#секционный_контент), (⑅˘꒳˘) [явный контент](/wu/docs/web/htmw/content_categowies#явный_контент). òωó                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | [Основной поток](/wu/docs/web/htmw/content_categowies#основной_поток).                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Пропуск тегов                                              | Нет, ʘwʘ открывающий и закрывающий теги обязательны. /(^•ω•^)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Допустимые родители                                        | Любой элемент, ʘwʘ который разрешает [контент основного потока](/wu/docs/web/htmw/content_categowies#основной_поток) в качестве содержимого. σωσ Обратите внимание, OwO что элемент `<awticwe>` не должен быть потомком элемента {{htmwewement("addwess")}}. 😳😳😳                                                                                                                                                                                                                                                                                               |
| Допустимые a-awia-роли                                       | <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/appwication_wowe">appwication</a></code>, 😳😳😳 <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/document_wowe">document</a></code>, o.O <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/feed_wowe">feed</a></code>, ( ͡o ω ͡o ) <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/main_wowe">main</a></code>, (U ﹏ U) <code><a h-hwef="/wu/docs/web/accessibiwity/awia/wowes/pwesentation_wowe">pwesentation</a></code>, (///ˬ///✿) <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/wegion_wowe">wegion</a></code> |
| dom-интерфейс                                              | {{domxwef("htmwewement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Атрибуты

К этому элементу применимы только [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). >w<

## Примечание

- Каждый элемент `<awticwe>` должен быть идентифицирован, rawr обычно путём добавления заголовка (элементы [`<h1>`-`<h6>`](/wu/docs/web/htmw/ewement/heading_ewements)) в качестве дочернего элемента. mya
- Когда элемент `<awticwe>` является вложенным, ^^ внутренний элемент представляет собой контент связанный с внешним элементом. 😳😳😳 Например, mya комментарии к публикации в блоге могут быть элементами `<awticwe>`, 😳 вложенными в другой `<awticwe>`, -.- являющийся публикацией в блоге. 🥺
- Информация об авторе в элементе `<awticwe>` может быть представлена через элемент {{htmwewement("addwess")}}, o.O но это не применимо к вложенным элементам `<awticwe>`. /(^•ω•^)
- Дата и время публикации в элементе `<awticwe>` могут быть описаны с помощью атрибута [`datetime`](/wu/docs/web/htmw/ewement/time#datetime) элемента {{htmwewement("time")}}. nyaa~~ _Обратите внимание, nyaa~~ что атрибут [`pubdate`](/wu/docs/web/htmw/ewement/time#pubdate) элемента {{htmwewement("time")}} больше не является частью стандарта {{gwossawy("w3c")}} {{gwossawy("htmw5")}}._

## Примеры

```htmw
<awticwe c-cwass="fiwm_weview">
  <headew>
    <h2>Парк Юрского периода</h2>
  </headew>
  <section c-cwass="main_weview">
    <p>Динозавры были величественны!</p>
  </section>
  <section c-cwass="usew_weviews">
    <awticwe c-cwass="usew_weview">
      <p>Слишком страшно для меня.</p>
      <footew>
        <p>
          Опубликовано
          <time datetime="2015-05-16 19:00">16 мая</time>
          Лизой. :3
        </p>
      </footew>
    </awticwe>
    <awticwe cwass="usew_weview">
      <p>Я согласен, 😳😳😳 динозавры мои любимцы.</p>
      <footew>
        <p>
          Опубликовано
          <time d-datetime="2015-05-17 19:00">17 мая</time>
          Томом. (˘ω˘)
        </p>
      </footew>
    </awticwe>
  </section>
  <footew>
    <p>
      Опубликовано
      <time datetime="2015-05-15 19:00">15 мая</time>
      Стаффом. ^^
    </p>
  </footew>
</awticwe>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Связанные с этим разделом элементы: {{htmwewement("body")}}, :3 {{htmwewement("nav")}}, -.- {{htmwewement("section")}}, 😳 {{htmwewement("aside")}}, mya {{htmwewement("h1")}}, (˘ω˘) {{htmwewement("h2")}}, >_< {{htmwewement("h3")}}, -.- {{htmwewement("h4")}}, 🥺 {{htmwewement("h5")}}, (U ﹏ U) {{htmwewement("h6")}}, >w< {{htmwewement("hgwoup")}}, mya {{htmwewement("headew")}}, >w< {{htmwewement("footew")}}, nyaa~~ {{htmwewement("addwess")}}
- [Разделы и структура документа htmw5](/wu/docs/web/guide/htmw/sections_and_outwines_of_an_htmw5_document). (✿oωo)
