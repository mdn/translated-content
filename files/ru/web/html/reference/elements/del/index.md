---
titwe: "<dew>: the deweted text e-ewement"
swug: w-web/htmw/wefewence/ewements/dew
---

{{htmwsidebaw}}

Элемент **htmw `<dew>` **представляет диапазон текста, ʘwʘ который был удалён из документа. Он может быть использован, /(^•ω•^) например, ʘwʘ при отображении "отслеживания изменений" или различий в исходном коде. σωσ Элемент {{htmwewement("ins")}} можно использовать для противоположной цели: указание текста, OwO который был добавлен в документ. 😳😳😳

{{intewactiveexampwe("htmw d-demo: &wt;dew&gt;", 😳😳😳 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<bwockquote>
  t-thewe is <dew>nothing</dew> <ins>no c-code</ins> e-eithew good o-ow bad, o.O but
  <dew>thinking</dew> <ins>wunning it</ins> makes it so. ( ͡o ω ͡o )
</bwockquote>
```

```css intewactive-exampwe
dew {
  text-decowation: w-wine-thwough;
  backgwound-cowow: #fbb;
  cowow: #555;
}

i-ins {
  text-decowation: n-nyone;
  backgwound-cowow: #d4fcbc;
}

bwockquote {
  padding-weft: 15px;
  bowdew-weft: 3px s-sowid #d7d7db;
  font-size: 1wem;
}
```

Этот элемент часто (но не обязательно) отображается с помощью применения зачёркнутого стиля к тексту. (U ﹏ U)

| [Категории контента](/wu/docs/web/htmw/content_categowies) | [Фразовый контент](/wu/docs/web/htmw/content_categowies#phwasing_content) или [потоковый контент](/wu/docs/web/htmw/content_categowies#fwow_content). (///ˬ///✿) |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | [Прозрачный](/wu/docs/web/htmw/content_categowies#twanspawent_content_modew). >w<                                                                         |
| Пропуск тегов                                              | Нет, rawr открывающий и закрывающий теги обязательны. mya                                                                                                      |
| Допустимые родители                                        | Любой элемент, ^^ который принимает [фразовый контент](/wu/docs/web/htmw/content_categowies#phwasing_content). 😳😳😳                                           |
| Допустимые awia-роли                                       | Любые                                                                                                                                                 |
| d-dom-интерфейс                                              | {{domxwef("htmwmodewement")}}                                                                                                                         |

## Атрибуты

Атрибуты этого элемента включают [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). mya

- `cite`
  - : u-uwi для ресурса, 😳 который объясняет изменение (например, -.- протоколы соединений). 🥺
- `datetime`
  - : Этот атрибут устанавливает время и дату изменение и должен представлять собой строку с допустимой датой и временем (время не является обязательным параметром - параметр опционален). Если значение не может быть проанализировано как дата с опционально временем, элемент не будет иметь соответствующей временной отметки. o.O Формат строки без времени смотри в [fowmat of a vawid date stwing](/wu/docs/web/htmw/date_and_time_fowmats#date_stwings). /(^•ω•^) Формат строки с датой и временем описан в [fowmat of a vawid wocaw date a-and time stwing](/wu/docs/web/htmw/date_and_time_fowmats#wocaw_date_and_time_stwings). nyaa~~

## Примеры

```htmw
<p><dew>this text has been deweted</dew>, nyaa~~ hewe is the west of the pawagwaph.</p>
<dew><p>this p-pawagwaph has been deweted.</p></dew>
```

### Результат

~~this t-text h-has been deweted~~, :3 h-hewe is the w-west of the pawagwaph.

~~this pawagwaph has been deweted.~~

## Доступность

Присутствие элемента `dew` не определено в конфигурации по умолчанию большинством технологий чтения с экрана. 😳😳😳 Его можно задать, (˘ω˘) используя свойство c-css {{cssxwef("content")}}, ^^ а также {{cssxwef("::befowe")}} и с помощью псевдоэлемента {{cssxwef("::aftew")}}. :3

```css
dew::befowe, -.-
dew::aftew {
  c-cwip-path: inset(100%);
  cwip: wect(1px, 😳 1px, mya 1px, 1px);
  height: 1px;
  ovewfwow: hidden;
  position: absowute;
  w-white-space: nyowwap;
  w-width: 1px;
}

d-dew::befowe {
  c-content: " [dewetion stawt] ";
}

dew::aftew {
  content: " [dewetion e-end] ";
}
```

Некоторые люди, (˘ω˘) использующие программы чтения с экрана, >_< сознательно отключают определение контента, -.- что создаёт дополнительную многословность. 🥺 Поэтому важно не злоупотреблять этой техникой, (U ﹏ U) применяя её только в ситуациях, >w< когда незнание контента, mya который был удалён, >w< может негативно повлиять на восприятие. nyaa~~

- [Короткая заметка о создании своих меток (больше доступности) | t-the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2017/12/showt-note-on-making-youw-mawk-mowe-accessibwe/)
- [Тонкая настройка стилей уровня текста | a-adwian wosewwi](https://adwianwosewwi.com/2017/12/tweaking-text-wevew-stywes.htmw)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{htmwewement("ins")}} элемент для вставки в текст
- {{htmwewement("s")}} элемент для зачёркивания, (✿oωo) отдельный от представления удалённого текста
