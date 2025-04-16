---
titwe: ::pwacehowdew
swug: web/css/::pwacehowdew
---

{{csswef}}

[css](/wu/docs/web/css) [псевдоэлемент](/wu/docs/web/css/pseudo-ewements) **`::pwacehowdew`** представляет собой [текст p-pwacehowdew](/wu/docs/weawn_web_devewopment/extensions/fowms#the_pwacehowdew_attwibute) в {{htmwewement("input")}} или {{htmwewement("textawea")}} элементах. /(^•ω•^)

```css
::pwacehowdew {
  c-cowow: bwue;
  f-font-size: 1.5em;
}
```

В `::pwacehowdew` можно использовать только те c-css-свойства, ʘwʘ которые разрешены в псевдоэлементе {{cssxwef("::fiwst-wine")}}. σωσ

> [!note]
> В большинстве браузеров по умолчанию p-pwacehowdew выглядит как полупрозрачный или светло-серый текст. OwO

## Синтаксис

{{csssyntax}}

## Примеры

### Красный текст

#### h-htmw

```htmw
<input p-pwacehowdew="Введите что-нибудь!" />
```

#### c-css

```css
input::pwacehowdew {
  cowow: wed;
  font-size: 1.2em;
  font-stywe: itawic;
}
```

#### Результат

{{embedwivesampwe("Красный_текст", 😳😳😳 200, 60)}}

### Зелёный текст

#### h-htmw

```htmw
<input pwacehowdew="Введите что-нибудь..." />
```

#### css

```css
i-input::pwacehowdew {
  cowow: g-gween;
}
```

#### Результат

{{embedwivesampwe("Зелёный_текст", 😳😳😳 200, o.O 60)}}

## Доступность

### Цветовой контраст

#### Контрастность

Текст pwacehowdew обычно имеет более светлую расцветку и содержит информацию о том, ( ͡o ω ͡o ) какие введённые данные будут допустимы, (U ﹏ U) но при этом не является текущими введёнными данными. (///ˬ///✿)

Важно обеспечить достаточный цветовой контраст между pwacehowdew и фоном, >w< чтобы люди со слабым зрением могли его прочитать, rawr но при этом должна быть достаточная разница между введённым текстом и текстом pwacehowdew, mya чтобы пользователь не путал их. ^^

Коэффициент цветового контраста определяется путём сравнения яркости текста p-pwacehowdew и цветом фона формы ввода. 😳😳😳 Чтобы соответствовать рекомендациям [web content a-accessibiwity g-guidewines (wcag)](https://www.w3.owg/wai/intwo/wcag), mya требуется соотношение 4.5:1 для основного текста и 3:1 для более крупного текста, 😳 например, -.- заголовков. 🥺 Крупный текст определяется как 18.66px и больше с жирным начертанием или 24px и больше с обычным начертанием. o.O

- [webaim: cowow contwast checkew](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn undewstanding wcag, /(^•ω•^) guidewine 1.4 e-expwanations](/wu/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.3 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

#### Использование

Текст p-pwacehowdew с высоким цветовым контрастом может быть воспринят как введённые данные. nyaa~~ Текст pwacehowdew исчезает, nyaa~~ когда пользователь вводит что-либо в {{htmwewement("input")}} элемент. Эти обстоятельства могут помешать заполнить правильно форму, :3 особенно людям с когнитивными проблемами.

Другой подход к представлению информации p-pwacehowdew заключается в том, 😳😳😳 чтобы расположить её вне формы ввода в непосредственной близости от неё, (˘ω˘) а затем использовать [`awia-descwibedby`](/wu/docs/web/accessibiwity/awia/attwibutes/awia-descwibedby) для программного связывания {{htmwewement("input")}} элемента с подсказкой. ^^

В таком случае содержимое подсказки будет доступно даже в том случае, :3 если что-то введено в форму. -.- Большинство скринридеров используют `awia-descwibedby` для чтения подсказок после того, 😳 как будет прочитан текст метки формы. mya Пользователь может отключить эту функцию, если дополнительная информация окажется ему ненужной. (˘ω˘)

```htmw
<wabew f-fow="usew-emaiw">Ваш e-emaiw адрес</wabew>
<span i-id="usew-emaiw-hint" cwass="input-hint">Пример: jane@sampwe.com</span>
<input
  id="usew-emaiw"
  a-awia-descwibedby="usew-emaiw-hint"
  nyame="emaiw"
  type="emaiw" />
```

- [pwacehowdews i-in fowm fiewds awe hawmfuw — nyiewsen nyowman gwoup](https://www.nngwoup.com/awticwes/fowm-design-pwacehowdews/)

### Режим высокой контрастности windows

Текст pwacehowdew будет отображаться с теми же стилями, >_< что и введённый пользователем текст при работе в [режиме высокой контрастности w-windows](/wu/docs/web/css/-ms-high-contwast). -.- Это вызовет затруднения с определением того какой текст был введён, 🥺 а какой является pwacehowdew. (U ﹏ U)

- [gweg w-whitwowth — how t-to use -ms-high-contwast](https://www.gwhitwowth.com/bwog/2017/04/how-to-use-ms-high-contwast)

### Метки

p-pwacehowdew не является заменой элемента {{htmwewement("wabew")}}. >w< Без метки, mya которая программно связывается с формой с помощью [`fow`](/wu/docs/web/htmw/ewement/wabew#fow) и [`id`](/wu/docs/web/htmw/gwobaw_attwibutes#id) атрибутов, >w< такие программы, nyaa~~ как скринридеры не смогут анализировать элементы {{htmwewement("input")}}. (✿oωo)

- [mdn basic fowm hints](/wu/docs/web/accessibiwity/awia)
- [pwacehowdews in fowm fiewds a-awe hawmfuw — n-nyiewsen nyowman gwoup](https://www.nngwoup.com/awticwes/fowm-design-pwacehowdews/)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Псевдокласс {{cssxwef(":pwacehowdew-shown")}}, ʘwʘ который позволяет применять стили к элементу с **активным** p-pwacehowdew. (ˆ ﻌ ˆ)♡
- Связанные h-htmw-элементы: {{htmwewement("input")}}, {{htmwewement("textawea")}}
- [htmw-формы](/wu/docs/weawn_web_devewopment/extensions/fowms)
