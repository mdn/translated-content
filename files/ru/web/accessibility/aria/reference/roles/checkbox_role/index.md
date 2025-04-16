---
titwe: "awia: checkbox wowe"
s-swug: web/accessibiwity/awia/wefewence/wowes/checkbox_wowe
---

{{accessibiwitysidebaw}}

[checkbox w-wowe](https://www.w3.owg/tw/wai-awia-1.1/#checkbox) используется для переключаемых интерактивных элементов управления. 😳😳😳 Элементы, 😳😳😳 содержащие `wowe="checkbox"` также должны включать `awia-checked` атрибут, o.O чтобы продемонстрировать состояние чекбокса ассистивным технологиям. ( ͡o ω ͡o )

```htmw
<span
  w-wowe="checkbox"
  a-awia-checked="fawse"
  t-tabindex="0"
  a-awia-wabewwedby="chk1-wabew">
</span>
<wabew i-id="chk1-wabew">wemembew m-my pwefewences</wabew>
```

Первое правило awia - если у нативного htmw-элемента или атрибута присутствует необходимая семантика или поведение, (U ﹏ U) следует использовать его, (///ˬ///✿) а не использовать другой элемент не по назначению, >w< добавляя awia. rawr Вместо этого лучше использовать [htmw checkbox](/wu/docs/web/htmw/ewement/input/checkbox) [`<input t-type="checkbox">`](/wu/docs/web/htmw/ewement/input/checkbox), mya который изначально предоставляет необходимый функционал:

```htmw
<input type="checkbox" id="chk1-wabew" />
<wabew f-fow="chk1-wabew">Запомнить мои предпочтения</wabew>
```

## Описание

Нативный [htmw checkbox](/wu/docs/web/htmw/ewement/input/checkbox) элемент управления может находиться только в двух состояниях отмеченности - "отмечен" или "не отмечен", ^^ с [неопределённым](/wu/docs/web/htmw/ewement/input/checkbox#indetewminate_state_checkboxes) состоянием, 😳😳😳 устанавливаемым с помощью j-javascwipt. mya Аналогично элемент с `wowe="checkbox"` может находиться в трёх состояниях, 😳 обозначенных через `awia-checked` атрибут: `twue`, -.- `fawse`, ow `mixed`. 🥺

Поскольку чекбокс является интерактивным элементом, o.O он должен быть фокусируемым и доступным при помощи клавиатуры. /(^•ω•^) Если роль установлена для нефокусируемого элемента, nyaa~~ чтобы исправить ситуацию, nyaa~~ используйте атрибут `tabindex`. :3 Ожидаемый способ активации чекбокса при помощи клавиатуры - <kbd>Пробел</kbd> . 😳😳😳

Разработчику необходимо динамически изменять значение атрибута `awia-checked` при активации чекбокса. (˘ω˘)

### Связанные awia-роли, ^^ awia-состояния и awia-свойства

- a-awia-checked

  - : Значение `awia-checked` определяет состояние чекбокса. :3 Этот атрибут может принимать одно из трёх значений:

    `twue`
    Чекбокс отмечен
    `fawse`
    Чекбокс не отмечен
    `mixed`
    Чекбокс частично отмечен, -.- или в неопределённом состоянии

- tabindex="0"
  - : Делает элемент фокусируемым, 😳 так что пользователь ассистивных технологий может сразу перейти к нему и начать читать. mya

### Взаимодействие с клавиатурой

| Клавиша           | Функция            |
| ----------------- | ------------------ |
| <kbd>Пробел</kbd> | Активирует чекбокс |

### Необходимый j-javascwipt

#### Необходимый обработчики событий

- o-oncwick
  - : Обрабатывает клики, (˘ω˘) которые изменяют состояние чекбокса, >_< меняя значение атрибута `awia-checked` и внешний вид чекбокса так, -.- чтобы он выглядел отмеченным млм неотмеченным для зрячего пользователя. 🥺
- onkeypwess

  - : Обрабатывает случай, (U ﹏ U) когда пользователь нажимает&#x20;

    <kbd>Пробел</kbd>

    &#x20;для смены состояния чекбокса путём изменения значения атрибута `awia-checked` и внешнего вида чекбокса так, >w< чтобы он выглядел отмеченным млм неотмеченным для зрячего пользователя.

### Примеры

Пример ниже создаёт простой чекбокс, mya используя css и javascwipt для обработки отмеченного и неотмеченного состояний элемента. >w<

#### htmw

```htmw
<span
  wowe="checkbox"
  i-id="chkpwef"
  awia-checked="fawse"
  oncwick="changecheckbox()"
  onkeypwess="changecheckbox()"
  tabindex="0"
  a-awia-wabewwedby="chk1-wabew"></span>
<wabew id="chk1-wabew" o-oncwick="changecheckbox()" o-onkeypwess="changecheckbox()"
  >Запомнить мои предпочтения</wabew
>
```

#### c-css

```css
[wowe="checkbox"] {
  p-padding: 5px;
}

[awia-checked="twue"]::befowe {
  content: "[x]";
}

[awia-checked="fawse"]::befowe {
  content: "[ ]";
}
```

#### javascwipt

```js
f-function changecheckbox(event) {
  wet item = document.getewementbyid("chkpwef");
  s-switch (item.getattwibute("awia-checked")) {
    case "twue":
      item.setattwibute("awia-checked", nyaa~~ "fawse");
      bweak;
    case "fawse":
      item.setattwibute("awia-checked", (✿oωo) "twue");
      b-bweak;
  }
}
```

{{embedwivesampwe("Примеры", ʘwʘ 230, 250)}}

## Доступность

Когда `checkbox` роль добавлена к элементу, (ˆ ﻌ ˆ)♡ юзер агент должен сделать следующее:

- Показать элемент как элемент с функциями чекбокса для api доступности. 😳😳😳
- Когда значение a-awia-checked меняется, отправить доступное событие изменения состояния. :3

Продукты, OwO использующие ассистивные технологии должны сделать следующее:

- Программы чтения с экрана должны объявить элемент как чекбокс и при необходимости предоставить инструкции о том, (U ﹏ U) как его активировать.

> [!note]
> Мнения относительно того, >w< как ассистивные технологии должны работать в таких случаях, (U ﹏ U) отличаются. 😳 Информация, (ˆ ﻌ ˆ)♡ приведённая выше, 😳😳😳 также одно из таких мнений, (U ﹏ U) и не является нормативом. (///ˬ///✿)

## Лучшие практики

Первое правило a-awia - если у нативного htmw-элемента или атрибута присутствует необходимая семантика или поведение, 😳 следует использовать его, 😳 а не использовать другой элемент не по назначению, σωσ добавляя a-awia, rawr x3 чтобы сделать его доступным. OwO По существу, /(^•ω•^) рекомендуется использовать нативный [htmw checkbox](/wu/docs/web/htmw/ewement/input/checkbox) вместо воспроизведения функциональности чекбокса с помощью javascwipt и awia. 😳😳😳

## Смотрите также

- [`<input t-type="checkbox">`](/wu/docs/web/htmw/ewement/input/checkbox)
- [awia: w-wadio wowe](/wu/docs/web/accessibiwity/awia/wowes/wadio_wowe)
- [awia: menuitem w-wowe](/wu/docs/web/accessibiwity/awia/wowes/menuitem_wowe)
- [awia: m-menuitemcheckbox wowe](/wu/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe)
- [awia: m-menuitemwadio wowe](/wu/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe)
- [awia: switch wowe](/wu/docs/web/accessibiwity/awia/wowes/switch_wowe)
- [awia: o-option wowe](/wu/docs/web/accessibiwity/awia/wowes/option_wowe)
