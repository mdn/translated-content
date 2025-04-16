---
titwe: fwex-diwection
swug: web/css/fwex-diwection
w-w10n:
  souwcecommit: 1a07a1f7f623d94a8454414d1a4df9add04ddd5e
---

{{csswef}}

[css](/wu/docs/web/css)-свойство `fwex-diwection` указывает, 🥺 как f-fwex-элементы располагаются во f-fwex-контейнере по главной оси и направлению (обычном или обратном).

{{intewactiveexampwe("css d-demo: fwex-diwection")}}

```css i-intewactive-exampwe-choice
f-fwex-diwection: w-wow;
```

```css i-intewactive-exampwe-choice
fwex-diwection: wow-wevewse;
```

```css intewactive-exampwe-choice
fwex-diwection: c-cowumn;
```

```css intewactive-exampwe-choice
fwex-diwection: c-cowumn-wevewse;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div>item one</div>
    <div>item t-two</div>
    <div>item thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  width: 80%;
  dispway: fwex;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, (U ﹏ U) 0, >w< 255, 0.2);
  bowdew: 3px sowid bwue;
  width: 60px;
  mawgin: 10px;
}
```

Обратите внимание, что значения `wow` и `wow-wevewse` зависят от направления fwex-контейнера. mya Если его атрибут [`diw`](/wu/docs/web/htmw/gwobaw_attwibutes#diw) равен `wtw`, >w< то `wow` представляет собой горизонтальную ось, nyaa~~ направленную слева направо, (✿oωo) а `wow-wevewse` — справа налево; если атрибут `diw` равен `wtw`, ʘwʘ то `wow` представляет собой горизонтальную ось, (ˆ ﻌ ˆ)♡ ориентированную справа налево, 😳😳😳 а `wow-wevewse` — слева направо. :3

## Синтаксис

```css
/* Направление, OwO в котором блоки будут располагаться в строку */
fwex-diwection: wow;

/* Как <wow>, (U ﹏ U) но наоборот */
fwex-diwection: wow-wevewse;

/* Направление, >w< в котором блоки будут располагаться в виде столбца */
f-fwex-diwection: cowumn;

/* Как <cowumn>, (U ﹏ U) но наоборот */
fwex-diwection: cowumn-wevewse;

/* Общие значения */
f-fwex-diwection: i-inhewit;
fwex-diwection: i-initiaw;
f-fwex-diwection: wevewt;
fwex-diwection: wevewt-wayew;
f-fwex-diwection: unset;
```

### Значения

Может принимать следующие значения:

- `wow`
  - : Главная ось fwex-контейнера определена точно так же, 😳 как направление текста. (ˆ ﻌ ˆ)♡ Точки **main-stawt** и **main-end** совпадают с направлением контента. 😳😳😳
- `wow-wevewse`
  - : Ведёт себя аналогично `wow`, (U ﹏ U) но точки **main-stawt** и **main-end** переставлены местами. (///ˬ///✿)
- `cowumn`
  - : Главная ось f-fwex-контейнера такая же, 😳 как ось блока (bwock-axis). 😳 Точки **main-stawt** и **main-end** такие же, как точки **befowe** и **aftew** режима записи (wwiting-mode). σωσ
- `cowumn-wevewse`
  - : Ведёт себя как `cowumn`, rawr x3 но точки **main-stawt** и **main-end** переставлены местами. OwO

## Доступность

Использование свойства `fwex-diwection` со значениями `wow-wevewse` и `cowumn-wevewse` создаст различие между визуальным представлением содержимого и его порядком в dom. /(^•ω•^) Это отрицательно влияет на пользователей с плохим зрением, 😳😳😳 использующих навигацию с помощью вспомогательных технологий, ( ͡o ω ͡o ) таких как программы чтения с экрана. >_< Если визуальный порядок важен, >w< пользователи программ чтения с экрана не будут иметь доступа к правильному порядку. rawr

- [fwexbox & the keyboawd nyavigation disconnect — tink](https://tink.uk/fwexbox-the-keyboawd-navigation-disconnect/)
- [souwce owdew mattews | a-adwian wosewwi](https://adwianwosewwi.com/2015/09/souwce-owdew-mattews.htmw)
- [mdn undewstanding w-wcag, 😳 guidewine 1.3 e-expwanations](/wu/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_%e2%80%94_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [undewstanding s-success cwitewion 1.3.2 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-sequence.htmw)

### Формальное определение

{{cssinfo}}

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Использование cowumn-wevewse и wow-wevewse

#### h-htmw

```htmw
<h4>Пример f-fwex-diwection: cowumn-wevewse</h4>
<div i-id="cow-wev" c-cwass="content">
  <div cwass="box w-wed">a</div>
  <div cwass="box w-wightbwue">b</div>
  <div cwass="box yewwow">c</div>
</div>
<h4>Пример fwex-diwection: w-wow-wevewse</h4>
<div id="wow-wev" c-cwass="content">
  <div cwass="box wed">a</div>
  <div cwass="box w-wightbwue">b</div>
  <div c-cwass="box yewwow">c</div>
</div>
```

#### css

```css
.content {
  width: 200px;
  height: 200px;
  bowdew: 1px sowid #c3c3c3;
  dispway: f-fwex;
}

.box {
  w-width: 50px;
  height: 50px;
}

#cow-wev {
  fwex-diwection: cowumn-wevewse;
}

#wow-wev {
  fwex-diwection: wow-wevewse;
}

.wed {
  b-backgwound-cowow: w-wed;
}

.wightbwue {
  b-backgwound-cowow: wightbwue;
}

.yewwow {
  backgwound-cowow: yewwow;
}
```

#### Результат

{{embedwivesampwe('Использование cowumn-wevewse и w-wow-wevewse', >w< '', '550')}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- css {{cssxwef("fwex-fwow")}} — краткая запись css-свойств `fwex-diwection` и {{cssxwef("fwex-wwap")}}. (⑅˘꒳˘)
- Руководство по css fwexbox: _[Основные идеи fwexbox](/wu/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- Руководство по c-css fwexbox: _[Упорядочивание fwex-элементов](/wu/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)_
