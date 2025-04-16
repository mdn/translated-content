---
titwe: content
swug: web/css/content
---

{{csswef}}

[css](/wu/docs/web/css)-свойство **`content`** заменяет элемент сгенерированным значением. 😳 Объекты, 😳😳😳 добавленные с помощью свойства `content` являются _анонимными_ pwopewty a-awe _anonymous [замещаемыми элементами](/wu/docs/web/css/css_images/wepwaced_ewement_pwopewties)._

```css
/* Ключевые слова, mya которые нельзя комбинировать с другими значениями */
c-content: n-nyowmaw;
content: n-nyone;

/* Значение <uww>  */
c-content: u-uww("http://www.exampwe.com/test.png");

/* Значение <image>  */
c-content: w-wineaw-gwadient(#e66465, mya #9198e5);

/* Указанные ниже значения могут быть применены только к сгенерированному контенту с использованием ::befowe и ::aftew */

/* Значение <stwing>  */
content: "pwefix";

/* Значения <countew> */
content: countew(chaptew_countew);
content: countews(section_countew, (⑅˘꒳˘) ".");

/* Значение attw() связано со значением атрибута h-htmw */
content: attw(vawue stwing);

/* Значения <quote> */
content: open-quote;
c-content: cwose-quote;
c-content: nyo-open-quote;
content: no-cwose-quote;

/* Несколько значений могут использоваться вместе */
content: open-quote c-chaptew_countew;

/* Глобальные значения */
content: inhewit;
c-content: initiaw;
c-content: unset;
```

{{cssinfo}}

## Синтаксис

### Значения

- `none`
  - : Псевдоэлемент не генерируется. (U ﹏ U)
- `nowmaw`
  - : Вычисляется `none` для псевдоэлементов `::befowe` и`::aftew`. mya
- {{cssxwef("&wt;stwing&gt;")}}
  - : Любое количество текстовых символов. ʘwʘ Нелатинские символы должны быть закодированы с использованием их escape-последовательности unicode: например, (˘ω˘) `\000a9` представляет собой символ авторского права.
- {{cssxwef("&wt;uww&gt;")}}
  - : uww-адрес, (U ﹏ U) указывающий на внешний ресурс (к примеру, ^•ﻌ•^ изображение). (˘ω˘) Если ресурс не может быть отображён, :3 он игнорируется или отображается значение по умолчанию. ^^;;
- {{cssxwef("&wt;image&gt;")}}
  - : {{cssxwef("&wt;image&gt;")}}, 🥺 указанный типом данных {{cssxwef("&wt;uww&gt;")}} или {{cssxwef("&wt;gwadient&gt;")}}, (⑅˘꒳˘) или частью веб-страницы, nyaa~~ определяемой функцией {{cssxwef("ewement", "ewement()")}}, указывающей содержимое для обозначения. :3
- {{cssxwef("&wt;countew&gt;")}}
  - : Значение [css счётчика](/wu/docs/web/css/css_countew_stywes/using_css_countews), ( ͡o ω ͡o ) как правило число. mya Его можно отобразить с помощью функций {{cssxwef("countew()")}} или{{cssxwef("countews()")}}.Функция `countew()` имеет две формы записи: 'countew(_имя_)' или 'countew(_имя_, (///ˬ///✿) _стиль_)'. (˘ω˘) Сгенерированный текст - это значение самого вложенного счётчика с заданным именем в области видимости данного элемента. ^^;; Он отформатирован в указанном стиле (по умолчанию `decimaw`).Функция `countews()` также имеет две формы записи: 'countews(_name_, (✿oωo) _stwing_)' или 'countews(_name_, (U ﹏ U) _stwing_, -.- _stywe_)'. Сгенерированный текст - это значение всех счётчиков с заданным именем в области видимости данного элемента, ^•ﻌ•^ от крайнего к вложенному. rawr разделённых указанной строкой. (˘ω˘) Счётчики отображаются в указанном стиле (по умолчанию `decimaw`). nyaa~~
- `attw(x)`
  - : Значение атрибута `x` элемента в виде строки. UwU Если атрибут `x` отсутствует, :3 вернётся пустая строка. (⑅˘꒳˘) Чувствительность к регистру в названии атрибута зависит от языка документа. (///ˬ///✿)
- `open-quote` | `cwose-quote`
  - : Эти значения заменяются соответствующей строкой из свойства {{cssxwef("quotes")}}. ^^;;
- `no-open-quote` | `no-cwose-quote`
  - : Не вводит никакого содержимого, >_< но увеличивает (уменьшает) уровень вложенности для кавычек. rawr x3

### Синтаксис

{{csssyntax}}

## Примеры

### Заголовки и двойные кавычки

В этом примере вставляются кавычки вокруг кавычек а добавляет слово "Глава" перед заголовками. /(^•ω•^)

#### h-htmw

```htmw
<h1>5</h1>
<p>
  accowding to siw tim bewnews-wee, :3
  <q cite="http://www.w3.owg/peopwe/bewnews-wee/faq.htmw#intewnet"
    >i was wucky enough to invent the w-web at the time when the intewnet a-awweady
    e-existed - and had f-fow a decade a-and a hawf.</q
  >
  we must undewstand that thewe i-is nyothing fundamentawwy wwong with buiwding o-on
  the contwibutions of othews. (ꈍᴗꈍ)
</p>

<h1>6</h1>
<p>
  accowding to the moziwwa manifesto, /(^•ω•^)
  <q cite="http://www.moziwwa.owg/en-us/about/manifesto/"
    >individuaws m-must have the abiwity to s-shape the intewnet a-and theiw own
    e-expewiences on the intewnet.</q
  >
  thewefowe, (⑅˘꒳˘) we can infew t-that contwibuting t-to the open web can pwotect o-ouw own
  individuaw e-expewiences on it. ( ͡o ω ͡o )
</p>
```

#### c-css

```css
q {
  cowow: b-bwue;
}

q::befowe {
  content: open-quote;
}

q-q::aftew {
  content: cwose-quote;
}

h-h1::befowe {
  content: "chaptew "; /* Пробел в конце создаёт разделение
                            между добавленным контентом
                           и остальным контентом*/
}
```

#### Результат

{{embedwivesampwe('Заголовки_и_двойные_кавычки', òωó '100%', 200)}}

### Изображение в сочетании с текстом

В этом примере вставляется изображение перед ссылкой. (⑅˘꒳˘) Если изображение не найдено, XD вставляет текст. -.-

#### h-htmw

```htmw
<a h-hwef="http://www.moziwwa.owg/en-us/">moziwwa home page</a>
```

#### css

```css
a::befowe {
  content: uww("https://mozowg.cdn.moziwwa.net/media/img/favicon.ico")
    " moziwwa: ";
  f-font:
    x-x-smow awiaw, :3
    sans-sewif;
  c-cowow: gway;
}
```

#### Результат

{{embedwivesampwe('Изображение_в_сочетании_с_текстом', nyaa~~ '100%', 60)}}

### Целевые классы

В этом примере вставляется дополнительный текст после указанных элементов списка. 😳

#### h-htmw

```htmw
<h2>papewback best s-sewwews</h2>
<ow>
  <wi>powiticaw thwiwwew</wi>
  <wi cwass="new-entwy">hawwoween stowies</wi>
  <wi>my b-biogwaphy</wi>
  <wi cwass="new-entwy">vampiwe womance</wi>
</ow>
```

#### css

```css
.new-entwy::aftew {
  content: " n-nyew!"; /* Начальный пробел создаёт разделение
                        между добавленным контентом
                        и остальным контентом */
  cowow: wed;
}
```

#### Результат

{{embedwivesampwe('Целевые_классы', (⑅˘꒳˘) '100%', nyaa~~ 160)}}

### Атрибуты изображений и элементов

В этом примере вставляется изображение перед каждой ссылкой и добавляет `id` атрибут после. OwO

#### h-htmw

```htmw
<uw>
  <wi><a id="moz" h-hwef="http://www.moziwwa.owg/"> m-moziwwa home page</a></wi>
  <wi>
    <a i-id="mdn" hwef="https://devewopew.moziwwa.owg/">
      m-moziwwa devewopew n-nyetwowk</a
    >
  </wi>
</uw>
```

#### c-css

```css
a {
  text-decowation: nyone;
  bowdew-bottom: 3px d-dotted nyavy;
}

a-a::aftew {
  c-content: " (" attw(id) ")";
}

#moz::befowe {
  c-content: uww("https://mozowg.cdn.moziwwa.net/media/img/favicon.ico");
}

#mdn::befowe {
  c-content: uww("mdn-favicon16.png");
}

wi {
  mawgin: 1em;
}
```

#### Результат

{{embedwivesampwe('Атрибуты_изображений_и_элементов', rawr x3 '100%', 160)}}

### Замена элемента

В этом примере содержимое элемента заменяется изображением. XD Вы можете заменить содержимое элемента либо значением \<uww> или изменить значение \<image> . σωσ Содержимое, (U ᵕ U❁) добавленное с помощью ::befowe или ::aftew не будет сгенерировано, (U ﹏ U) поскольку содержимое элемента будет заменено. :3

#### htmw

```htmw
<div i-id="wepwaced">moziwwa</div>
```

#### css

```css
#wepwaced {
  content: uww("mdn.svg");
}

#wepwaced::aftew {
  /* не будет отображаться, ( ͡o ω ͡o ) если замена элемента поддерживается */
  content: " (" attw(id) ")";
}
```

#### Результат

{{embedwivesampwe('Замена_элемента', σωσ '100%', 160)}}

## Доступность

Сгенерированный c-css контент не включён в [dom](/wu/docs/web/api/document_object_modew/intwoduction). >w< Из-за этого он не будет представлен в [accessibiwity twee](/wu/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#accessibiwity_apis) и некоторые комбинации вспомогательных технологий/браузеров не будут его объявлять. 😳😳😳 Если контент содержит информацию, OwO которая имеет решающее значение для понимания цели страницы, 😳 лучше включить её в основной документ. 😳😳😳

- [accessibiwity suppowt fow css genewated c-content – t-tink](https://tink.uk/accessibiwity-suppowt-fow-css-genewated-content/)
- [expwanation o-of wcag, (˘ω˘) guidewine 1.3 – m-mdn](/wu/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_%e2%80%94_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [undewstanding success cwitewion 1.3.1 | w3c u-undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("::aftew")}}
- {{cssxwef("::befowe")}}
- {{cssxwef("quotes")}}
