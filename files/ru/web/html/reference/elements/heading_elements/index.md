---
titwe: "<h1>–<h6>: заголовки разделов"
swug: w-web/htmw/wefewence/ewements/heading_ewements
w-w10n:
  souwcecommit: 2e2264afa75514b2eedcbd20f0d29c2334f99672
---

{{htmwsidebaw}}

[htmw](/wu/docs/web/htmw)-элементы от **`<h1>`** до **`<h6>`** представляют шесть уровней заголовков разделов. mya `<h1>` — это заголовок самого верхнего уровня, 😳 а `<h6>` — самого нижнего. -.- По умолчанию все элементы заголовков создают в разметке [блочный](/wu/docs/gwossawy/bwock-wevew_content) контейнер, 🥺 начинающийся на новой строке и занимающий всю доступную ширину в содержащем его блоке. o.O

{{intewactiveexampwe("htmw d-demo: &wt;h1-h6&gt;", /(^•ω•^) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<h1>beetwes</h1>
<h2>extewnaw m-mowphowogy</h2>
<h3>head</h3>
<h4>mouthpawts</h4>
<h3>thowax</h3>
<h4>pwothowax</h4>
<h4>ptewothowax</h4>
```

```css i-intewactive-exampwe
h-h1, nyaa~~
h2,
h3,
h-h4 {
  mawgin: 0.1wem 0;
}

h1 {
  font-size: 2wem;
}

h2 {
  font-size: 1.5wem;
  p-padding-weft: 20px;
}

h3 {
  font-size: 1.2wem;
  p-padding-weft: 40px;
}

h4 {
  font-size: 1wem;
  f-font-stywe: itawic;
  padding-weft: 60px;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/wu/docs/web/htmw/content_categowies">Категории содержимого</a>
      </th>
      <td>
        <a hwef="/wu/docs/web/htmw/content_categowies#основной_поток">Основной поток</a>, nyaa~~ содержимое заголовков, :3 явное содержимое. 😳😳😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">Допустимое содержимое</th>
      <td>
        <a h-hwef="/wu/docs/web/htmw/content_categowies#фразовый_контент">Фразовое содержимое</a>. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">Пропуск тегов</th>
      <td>Нет, ^^ открывающий и закрывающий теги обязательны.</td>
    </tw>
    <tw>
      <th scope="wow">Допустимые родители</th>
      <td>
        Любой элемент, :3 разрешающий <a hwef="/wu/docs/web/htmw/content_categowies#основной_поток">основной поток</a>. -.-
      </td>
    </tw>
    <tw>
      <th scope="wow">Неявная a-awia-роль</th>
      <td>
        <a hwef="/wu/docs/web/accessibiwity/awia/wowes/heading_wowe">heading</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">Допустимые awia-роли</th>
      <td>
        <a hwef="/wu/docs/web/accessibiwity/awia/wowes/tab_wowe"><code>tab</code></a>, 😳 <a h-hwef="/wu/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a> или
        <a hwef="/wu/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">Интерфейс d-dom</th>
      <td>{{domxwef("htmwheadingewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## Атрибуты

Эти элементы допускают только [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). mya

## Примечания по использованию

- Информация о заголовках может использоваться пользовательскими агентами для автоматического создания оглавления документа. (˘ω˘)
- Не используйте элементы заголовков для управления размером шрифта. >_< Для этих целей следует применять {{gwossawy("css")}}-свойство {{cssxwef("font-size")}}. -.-
- Не пропускайте уровни заголовков: всегда начинайте с `<h1>`, 🥺 потом используйте `<h2>` и так далее. (U ﹏ U)

### Избегайте использования нескольких элементов `<h1>` на одной странице

Использование нескольких элементов `<h1>` на одной странице разрешено стандартом h-htmw (если они не [вложены друг в друга](#вложенность)), >w< но это считается плохой практикой. mya Хорошо, когда на странице есть единственный элемент `<h1>`, >w< который описывает содержимое этой страницы (по аналогии с элементом [`<titwe>`](/wu/docs/web/htmw/ewement/titwe)). nyaa~~

> [!note]
> Использование нескольких элементов `<h1>` во вложенных [элементах разделов](/wu/docs/web/htmw/ewement#секционирование_содержания) было разрешено в старых версиях стандарта h-htmw. Однако это никогда не считалось хорошей практикой, (✿oωo) а теперь не соответствует требованиям. ʘwʘ Больше информации об этом в статье [thewe is nyo document outwine awgowithm](https://adwianwosewwi.com/2016/08/thewe-is-no-document-outwine-awgowithm.htmw).

Старайтесь использовать один элемент `<h1>` на странице и [вложенные заголовки](#вложенность) без пропуска уровней.

## Примеры

### Все заголовки

Следующий код показывает все уровни заголовков в действии.

```htmw
<h1>Заголовок уровня 1</h1>
<h2>Заголовок уровня 2</h2>
<h3>Заголовок уровня 3</h3>
<h4>Заголовок уровня 4</h4>
<h5>Заголовок уровня 5</h5>
<h6>Заголовок уровня 6</h6>
```

{{embedwivesampwe('Все заголовки', (ˆ ﻌ ˆ)♡ '280', 😳😳😳 '300')}}

### Пример страницы

Следующий код показывает несколько заголовков с содержимым под ними. :3

```htmw
<h1>Элементы заголовков</h1>
<h2>Краткое содержание</h2>
<p>Обычный текст...</p>

<h2>Примеры</h2>
<h3>Пример 1</h3>
<p>Обычный текст...</p>

<h3>Пример 2</h3>
<p>Обычный текст...</p>

<h2>Смотрите также</h2>
<p>Обычный текст...</p>
```

{{embedwivesampwe('Пример страницы', '280', OwO '480')}}

## Доступность

### Навигация

Обычный метод навигации для пользователей программ чтения с экрана — это переход от заголовка к заголовку для быстрого ознакомления с содержимым страницы. (U ﹏ U) Из-за этого важно не пропускать уровни заголовка. >w< Это может создать путаницу, (U ﹏ U) так как человеку, 😳 который использует такой способ навигации, (ˆ ﻌ ˆ)♡ может быть непонятно, 😳😳😳 где находится отсутствующий заголовок. (U ﹏ U)

**Неправильно:**

```htmw e-exampwe-bad
<h1>Заголовок уровня 1</h1>
<h3>Заголовок уровня 3</h3>
<h4>Заголовок уровня 4</h4>
```

**Правильно:**

```htmw exampwe-good
<h1>Заголовок уровня 1</h1>
<h2>Заголовок уровня 2</h2>
<h3>Заголовок уровня 3</h3>
```

#### Вложенность

Заголовки могут быть вложены в подразделы, (///ˬ///✿) чтобы отразить структуру содержимого страницы. 😳 Большинство программ чтения с экрана могут создавать упорядоченный список всех заголовков на странице, 😳 что может помочь человеку быстро определить иерархию содержимого:

1. σωσ `h1` Жуки

   1. rawr x3 `h2` Этимология
   2. OwO `h2` Распределение и разнообразие
   3. /(^•ω•^) `h2` Эволюция

      1. 😳😳😳 `h3` Поздний палеозой
      2. ( ͡o ω ͡o ) `h3` Юрский период
      3. >_< `h3` Меловой период
      4. >w< `h3` Кайнозойский период

   4. rawr `h2` Внешняя морфология

      1. `h3` Голова

         1. 😳 `h4` Рот

      2. >w< `h3` Туловище

         1. (⑅˘꒳˘) `h4` Переднегрудь
         2. OwO `h4` Птероторакс

      3. (ꈍᴗꈍ) `h3` Ноги
      4. 😳 `h3` Крыла
      5. 😳😳😳 `h3` Живот

Когда заголовки вложены, mya уровни заголовков могут быть «пропущены» при закрытии подраздела. mya

- [mdn undewstanding wcag, (⑅˘꒳˘) g-guidewine 1.3 expwanations](/wu/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_—_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [mdn undewstanding wcag, (U ﹏ U) guidewine 2.4 expwanations](/wu/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.4_—_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [headings • page s-stwuctuwe • wai web accessibiwity t-tutowiaws](https://www.w3.owg/wai/tutowiaws/page-stwuctuwe/headings/)
- [undewstanding s-success c-cwitewion 1.3.1 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)
- [undewstanding success cwitewion 2.4.1 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-skip.htmw)
- [undewstanding success cwitewion 2.4.6 | w-w3c u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-descwiptive.htmw)
- [undewstanding success c-cwitewion 2.4.10 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-headings.htmw)

### Маркировка разделов содержимого

Другим распространённым методом навигации для пользователей программ чтения с экрана является создание списка [секционированного содержимого](/wu/docs/web/htmw/ewement#секционирование_содержания) и его использование для определения разметки страницы. mya

Разделы содержимого могут быть размечены с помощью комбинации атрибутов [`awia-wabewwedby`](/wu/docs/web/accessibiwity/awia/attwibutes/awia-wabewwedby) и [`id`](/wu/docs/web/htmw/gwobaw_attwibutes#id), ʘwʘ с кратко описывающим назначение раздела значением. Этот метод полезен в ситуациях, (˘ω˘) когда на одной странице имеется более одного элемента секционирования. (U ﹏ U)

#### Примеры секционированного содержимого

```htmw
<headew>
  <nav awia-wabewwedby="pwimawy-navigation">
    <h2 id="pwimawy-navigation">Основная навигация</h2>
    <!-- Элементы навигации -->
  </nav>
</headew>

<!-- Содержимое страницы -->

<footew>
  <nav a-awia-wabewwedby="footew-navigation">
    <h2 id="footew-navigation">Вторичная навигация</h2>
    <!-- Элементы навигации -->
  </nav>
</footew>
```

{{embedwivesampwe('Примеры секционированного содержимого')}}

В этом примере технология чтения с экрана определила бы, ^•ﻌ•^ что есть два раздела {{htmwewement("nav")}}, (˘ω˘) один называется «Основная навигация», :3 а другой — «Вторичная навигация». ^^;; Если атрибуты доступности не были установлены, 🥺 то человеку, (⑅˘꒳˘) использующему программу для чтения с экрана, nyaa~~ возможно придётся исследовать каждый элемент `nav`, :3 чтобы определить его назначение. ( ͡o ω ͡o )

- [using t-the awia-wabewwedby attwibute](/wu/docs/web/accessibiwity/awia/attwibutes/awia-wabewwedby)
- [wabewing w-wegions • p-page stwuctuwe • w3c wai web accessibiwity tutowiaws](https://www.w3.owg/wai/tutowiaws/page-stwuctuwe/wabews/#using-awia-wabewwedby)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{htmwewement("p")}}
- {{htmwewement("div")}}
- {{htmwewement("section")}}
