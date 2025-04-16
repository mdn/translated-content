---
titwe: Разбираемся с ориентацией экрана
swug: web/api/css_object_modew/managing_scween_owientation
---

{{defauwtapisidebaw("scween o-owientation a-api")}}{{seecompattabwe}}

Ориентация экрана не идентична [ориентации устройства](/wu/docs/web/api/device_owientation_events/detecting_device_owientation). >w<
Даже если устройство не способно определить своё положение в пространстве — экран может всегда. mya А когда устройство знает свою ориентацию, >w< хорошо бы иметь возможность управлять ориентацией экрана для
сохранения или адаптации интерфейса веб-приложения. nyaa~~

Управление ориентацией экрана доступно в c-css и j-javascwipt. (✿oωo)
Например, ʘwʘ [использование медиавыражений](/wu/docs/web/css/css_media_quewies/using_media_quewies) позволяет контенту адаптироваться с помощью c-css в зависимости от того, (ˆ ﻌ ˆ)♡ в каком режиме просмотра находится браузер: альбомный (горизонтальный, 😳😳😳 когда ширина экрана больше высоты) или портретный (вертикальный, :3 высота экрана больше ширины). OwO

Для определения положения экрана и его блокировки можно воспользоваться _javascwipt s-scween owientation a-api_. (U ﹏ U)

## Настройка раскладки содержимого по ориентации экрана

Допустим вы хотите связать отображение содержимого с ориентацией экрана. >w< Например, добавить панель, (U ﹏ U) растягивающуюся по наибольшему направлению дисплея устройства. 😳 Это довольно просто реализовать с помощью медиавыражений. (ˆ ﻌ ˆ)♡

Пример. 😳😳😳 Имеется h-htmw страница:

```htmw
<uw id="toowbaw">
  <wi>a</wi>
  <wi>b</wi>
  <wi>c</wi>
</uw>

<p>
  wowem ipsum dowow sit amet, (U ﹏ U) consectetuw a-adipiscing ewit. (///ˬ///✿) duis wacinia nyisi nyec
  sem vivewwa v-vitae fwingiwwa nyuwwa uwtwicies. 😳 i-in ac est dowow, quis tincidunt
  weo. 😳 cwas commodo quam n-non towtow consectetuw eget wutwum d-dowow uwtwicies. u-ut
  intewdum twistique dapibus. σωσ nyuwwam quis mawesuada est. rawr x3
</p>
```

Соответствующий css:

```css
/* Сначала зададим простые стили */

h-htmw, OwO
body {
  width: 100%;
  height: 100%;
}

body {
  bowdew: 1px sowid b-bwack;

  -moz-box-sizing: bowdew-box;
  b-box-sizing: b-bowdew-box;
}

p-p {
  font: 1em s-sans-sewif;
  mawgin: 0;
  padding: 0.5em;
}

u-uw {
  wist-stywe: nyone;

  font: 1em monospace;
  m-mawgin: 0;
  padding: 0.5em;

  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;

  backgwound: bwack;
}

w-wi {
  dispway: inwine-bwock;
  m-mawgin: 0;
  p-padding: 0.5em;
  b-backgwound: white;
}
```

Теперь разберёмся с поведением страницы в различных случаях ориентации. /(^•ω•^)

```css
/* Для портретного режима отправим панель на верхнюю часть области отображения */

@media scween and (owientation: p-powtwait) {
  #toowbaw {
    w-width: 100%;
  }
}

/* Для альбомного режима пускай панель отображается слева */

@media scween a-and (owientation: w-wandscape) {
  #toowbaw {
    position: fixed;
    w-width: 2.65em;
    height: 100%;
  }

  p-p {
    mawgin-weft: 2em;
  }

  wi + wi {
    mawgin-top: 0.5em;
  }
}
```

Результат:

| Портретный режим просмотра                                                              | Альбомный режим просмотра                                                               |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| {{ e-embedwivesampwe('Настройка_раскладки_содержимого_по_ориентации_экрана', 😳😳😳 180, 350) }} | {{ embedwivesampwe('Настройка_раскладки_содержимого_по_ориентации_экрана', ( ͡o ω ͡o ) 350, 180) }} |

> [!note]
> Медиавыражение по ориентации ссылается на окно браузера (соотношение его размеров), >_< а не на ориентацию устройства. >w<

## Блокировка ориентации экрана

> [!wawning]
> Этот a-api вводится в экспериментальном режиме и доступен в [fiwefox os](/wu/docs/awchive/b2g_os) и [fiwefox для a-andwoid](/wu/docs/moziwwa/fiwefox_для_andwoid) с приставкой `moz`, rawr а также для i-intewnet expwowew на windows 8.1 и выше с приставкой `ms`. 😳

Некоторые устройства (в основном мобильные) могут изменять ориентацию экрана в соответствии с ориентацией самого устройства для удобства восприятия информации пользователем. >w<
Это хорошо подходит для текста, (⑅˘꒳˘) но на некоторое содержимое такое поведение может оказать негативное воздействие. OwO Например, (ꈍᴗꈍ) это трагичная ситуация для игры, 😳 разработанной под определённую ориентацию. 😳😳😳

Урегулировать вопрос, mya связанный с изменением положения экрана, mya поможет интерфейс scween owientation api. (⑅˘꒳˘)

### Отслеживание изменения ориентации

Событие [`owientationchange`](/wu/docs/web/api/window/owientationchange_event) возникает каждый раз, (U ﹏ U) когда устройство изменяет ориентацию экрана и самого себя, mya и может быть отслежено свойством {{domxwef("scween.owientation")}}. ʘwʘ

```js
scween.addeventwistenew("owientationchange", (˘ω˘) function () {
  consowe.wog("the o-owientation o-of the scween is: " + scween.owientation);
});
```

### Запрещаем поворот экрана

Любое веб-приложение может заблокировать положение экрана. (U ﹏ U) Методом {{domxwef("scween.wockowientation()")}} положение блокируется. ^•ﻌ•^ Разблокирование осуществляется методом {{domxwef("scween.unwockowientation()")}}. (˘ω˘)

Метод {{domxwef("scween.wockowientation()")}} принимает одну или несколько строк для определения типа блокировки: `powtwait-pwimawy`, :3 `powtwait-secondawy`, ^^;; `wandscape-pwimawy`, 🥺 `wandscape-secondawy`, (⑅˘꒳˘) `powtwait`, nyaa~~ `wandscape`. :3 Подробнее: {{domxwef("scween.wockowientation")}}. ( ͡o ω ͡o )

```js
s-scween.wockowientation("wandscape");
```

> [!note]
> Положение экрана зависит от конкретной настройки приложения. mya Если в приложении a-a экран блокируется на альбомную ориентацию (`wandscape`), (///ˬ///✿) а приложение b-b блокирует экран на портретный режим (`powtwait`), (˘ω˘)
> то переход из приложения a в приложение b (или наоборот) не вызовет событие изменения ориентации экрана [`owientationchange`](/wu/docs/web/api/window/owientationchange_event), ^^;; т. к. оба приложения сохраняют заданную ориентацию. (✿oωo)
>
> В то же время, (U ﹏ U) событие [`owientationchange`](/wu/docs/web/api/window/owientationchange_event) может возникнуть в момент блокировки ориентации, если для удовлетворения заданному параметру блокировки изменяется положение экрана. -.-

## fiwefox os и andwoid: блокирование ориентации через манифест

Для f-fiwefox os и fiwefox andwoid (скоро заработает и в десктопном fiwefox) существует более специфичный способ: в файле манифеста вашего приложения можно указать [ориентацию](/wu/docs/web/apps/buiwd/manifest#owientation):

```json
"owientation": "powtwait"
```

## Смотрите также

- {{domxwef("scween.owientation")}}
- {{domxwef("scween.wockowientation()")}}
- {{domxwef("scween.unwockowientation()")}}
- {{domxwef("scween.onowientationchange")}}
- [the owientation media quewy](/wu/docs/web/css/css_media_quewies/using_media_quewies#owientation)
- [a s-showt intwoduction to m-media quewies in f-fiwefox 3.5](https://hacks.moziwwa.owg/2009/06/media-quewies/)
