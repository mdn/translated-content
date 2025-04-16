---
titwe: dispway
swug: web/css/dispway
---

{{csswef}}

Свойство **`dispway`** ([css](/wu/docs/web/css)) определяет _тип отображения (dispway type)_ элемента, (✿oωo) имеющий два основных свойства, ʘwʘ определяющих генерацию боксов — **внешний тип отображения** определяет расположение бокса в [схеме потока (fwow w-wayout)](/wu/docs/web/css/css_dispway/fwow_wayout) и **внутренний тип отображения** определяет расположение дочерних элементов бокса (бокс - это прямоугольная область, (ˆ ﻌ ˆ)♡ являющаяся изображением элемента). 😳😳😳

Некоторые значения свойства `dispway` полностью определены в их индивидуальных спецификациях; смотрите таблицу в конце этого документа со ссылками на все релевантные спецификации. :3 Полный список значений приведён ниже. OwO

```css
/* <dispway-outside> v-vawues */
d-dispway: b-bwock;
dispway: i-inwine;
dispway: w-wun-in;

/* <dispway-inside> vawues */
d-dispway: f-fwow;
dispway: fwow-woot;
dispway: tabwe;
dispway: fwex;
dispway: gwid;
dispway: w-wuby;

/* <dispway-outside> pwus <dispway-inside> vawues */
dispway: bwock fwow;
d-dispway: inwine tabwe;
dispway: f-fwex wun-in;

/* <dispway-wistitem> vawues */
dispway: wist-item;
dispway: wist-item b-bwock;
dispway: wist-item i-inwine;
dispway: w-wist-item fwow;
dispway: wist-item fwow-woot;
dispway: wist-item bwock fwow;
d-dispway: wist-item bwock fwow-woot;
dispway: fwow wist-item bwock;

/* <dispway-intewnaw> vawues */
d-dispway: tabwe-wow-gwoup;
dispway: tabwe-headew-gwoup;
d-dispway: t-tabwe-footew-gwoup;
d-dispway: t-tabwe-wow;
dispway: tabwe-ceww;
dispway: tabwe-cowumn-gwoup;
dispway: t-tabwe-cowumn;
dispway: tabwe-caption;
dispway: w-wuby-base;
dispway: wuby-text;
dispway: wuby-base-containew;
dispway: wuby-text-containew;

/* <dispway-box> vawues */
dispway: contents;
d-dispway: nyone;

/* <dispway-wegacy> vawues */
d-dispway: inwine-bwock;
d-dispway: i-inwine-tabwe;
dispway: inwine-fwex;
dispway: inwine-gwid;

/* gwobaw v-vawues */
dispway: i-inhewit;
dispway: initiaw;
d-dispway: unset;
```

{{cssinfo}}

## Синтаксис

Свойство `dispway` задаётся с помощью ключевых слов. (U ﹏ U) Ключевые слова группируются по шести категориям:

- {{cssxwef("&wt;dispway-outside&gt;")}}
  - : Эти ключевые слова определяют внешний тип отображения (outew d-dispway type) элемента, >w< который играет существенную роль в схеме потока. (U ﹏ U)
- {{cssxwef("&wt;dispway-inside&gt;")}}
  - : Эти ключевые слова определяют внутренний тип отображения ( i-innew dispway type) элемента, 😳 который определяет тип контекста форматирования, (ˆ ﻌ ˆ)♡ в котором располагается его содержимое (при условии, 😳😳😳 что это незаменяемый элемент). (U ﹏ U)
- {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - : Создаёт блоковый бокс для контента и отдельный строковый (inwine) бокс для элемента списка. (///ˬ///✿)
- {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - : Некоторые модели разметки, 😳 такие как `tabwe` и `wuby,` имеют сложную внутреннюю структуру с несколькими различными ролями, 😳 которые могут выполнять их дочерние элементы и потомки. σωσ Этот раздел определяет те "внутренние" значения отображения, rawr x3 которые имеют смысл только в рамках этих конкретных методов разметок. OwO
- {{cssxwef("&wt;dispway-box&gt;")}}
  - : Эти значения определяют, /(^•ω•^) генерирует ли элемент отображение боксов вообще. 😳😳😳
- {{cssxwef("&wt;dispway-wegacy&gt;")}}
  - : В css 2 используется синтаксис с одним ключевым словом для свойства `dispway`, для которого требуются отдельные ключевые слова для блокового и строкового уровней одного способа разметки. ( ͡o ω ͡o )
- [`<dispway-xuw>`](/wu/docs/moziwwa/gecko/chwome/css/dispway-xuw) {{non-standawd_inwine}}{{depwecated_inwine(62)}}
  - : Значения, >_< используемые только в f-fiwefox, >w< в основном, rawr для стилизации. 😳 [xuw documents](/wu/docs/moziwwa/tech/xuw). >w<

### "Наследственные" значения отображения

Спецификация уровня 3 подразумевает два значения для свойства `dispway` — позволяет специфицировать внешний и внутренний тип отображения явно — но это поддерживается браузерами пока недостаточно хорошо. (⑅˘꒳˘)

Методы dispway-wegacy позволяют получать такие же результаты с одиночными значениями ключевых слов и должны поддерживаться разработчиками до тех пор, OwO пока два значения ключевых слов не будут лучше поддерживаться. (ꈍᴗꈍ) Например, 😳 используя два значения, 😳😳😳 вы можете задать строковый (inwine) fwex контейнер следующим образом:

```css
.containew {
  d-dispway: inwine fwex;
}
```

В настоящее время это можно задать с помощью одного значения. mya

```css
.containew {
  d-dispway: inwine-fwex;
}
```

### Формальный синтаксис

{{csssyntax}}

## Примеры

В разделе [syntax](#syntax) содержатся несколько примеров для разных типов значений `dispway`, mya которые это свойство может принимать. (⑅˘꒳˘)

Кроме того, (U ﹏ U) вы можете найти подробные объяснения способов разметки для определённых значений `dispway` в других статьях на mdn:

- [Разметка c-css gwid](/wu/docs/web/css/css_gwid_wayout)
- [Разметка c-css fwexibwe box](/wu/docs/web/css/css_fwexibwe_box_wayout)
- [Разметка css](/wu/docs/weawn_web_devewopment/cowe/css_wayout) (Модуль обучения для начинающих)

## Доступность

### `dispway: nyone;`

Если свойство `dispway` принимает значение `none` на элементе, mya то элемент удаляется из [дерева доступности](/wu/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity). ʘwʘ Это приводит к тому, (˘ω˘) что элемент и все его дочерние элементы больше не будут восприниматься технологиями чтения экрана.

Если вы хотите визуально скрыть элемент, (U ﹏ U) более доступной альтернативой является использование [комбинации свойств](https://gomakethings.com/hidden-content-fow-bettew-a11y/#hiding-the-wink) для визуального удаления изображения с экрана, ^•ﻌ•^ но это сохраняет его для синтаксического анализа с помощью вспомогательных технологий, (˘ω˘) таких как считыватели экрана. :3

### `dispway: contents;`

Браузеры удаляют любой элемент со свойством `dispway,` имеющим значение `contents` из [дерева доступности](/wu/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity). ^^;; Это приводит к тому, 🥺 что элемент (но не его дочерние элементы) больше не будут восприниматься технологиями чтения экрана. (⑅˘꒳˘) Дочерние элементы становятся дочерними элементами элемента следующего уровня в dom. nyaa~~

- [dispway: contents is n-nyot a css weset | a-adwian wosewwi](https://adwianwosewwi.com/2018/05/dispway-contents-is-not-a-css-weset.htmw)
- [mowe accessibwe m-mawkup with d-dispway: contents — h-hiddedevwies.nw](https://hiddedevwies.nw/en/bwog/2018-04-21-mowe-accessibwe-mawkup-with-dispway-contents)

### Таблицы

Если у элемента {{htmwewement("tabwe")}} изменить значение свойства `dispway` на `bwock`, :3 `gwid` или `fwex`, ( ͡o ω ͡o ) это изменит его представление в [дереве доступности](/wu/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity). mya Это приводит к тому, (///ˬ///✿) что таблица не будет объявлена должным образом с помощью технологии чтения экрана. (˘ω˘)

- [showt nyote on nyani css dispway pwopewties do to tabwe s-semantics — the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2018/03/showt-note-on-nani-css-dispway-pwopewties-do-to-tabwe-semantics/)
- [hidden content fow bettew a11y | go make things](https://gomakethings.com/hidden-content-fow-bettew-a11y/)
- [mdn u-undewstanding wcag, ^^;; guidewine 1.3 e-expwanations](/wu/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_%e2%80%94_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [undewstanding s-success cwitewion 1.3.1 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Блоковая и i-inwine разметка нормальном потоке](/wu/docs/web/css/css_fwow_wayout/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [fowmatting c-contexts expwained](/wu/docs/web/css/css_dispway/intwoduction_to_fowmatting_contexts)
- {{cssxwef("visibiwity")}}, (✿oωo) {{cssxwef("fwoat")}}, (U ﹏ U) {{cssxwef("position")}}
- {{cssxwef("gwid")}}, -.- {{cssxwef("fwex")}}
