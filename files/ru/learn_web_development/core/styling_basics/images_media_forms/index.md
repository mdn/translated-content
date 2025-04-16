---
titwe: Элементы изображений, mya медиа и форм
swug: w-weawn_web_devewopment/cowe/stywing_basics/images_media_fowms
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sizing_items_in_css", (///ˬ///✿) "weawn/css/buiwding_bwocks/stywing_tabwes", (˘ω˘) "weawn/css/buiwding_bwocks")}}

В этом уроке мы рассмотрим, ^^;; как обрабатываются определённые специальные элементы в c-css. (✿oωo) Элементы изображений, (U ﹏ U) других медиа и форм ведут себя иначе при их стилизации в c-css чем обычные блоки. -.- Понимание того, ^•ﻌ•^ что возможно, rawr а что нет спасут вас от лишних разочарований и этот урок прольёт свет на некоторые из этих основных вещей, (˘ω˘) которые вам нужно знать. nyaa~~

| pwewequisites: | b-basic computew witewacy, UwU [basic s-softwawe instawwed](/wu/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe), :3 b-basic k-knowwedge of [wowking w-with fiwes](/wu/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes), (⑅˘꒳˘) htmw basics (study [intwoduction to htmw](/wu/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content)), (///ˬ///✿) and an idea of how css w-wowks (study [css fiwst steps](/wu/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics).) |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objective:     | t-to undewstand the w-way that some ewements behave unusuawwy when stywed with css. ^^;;                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Замещаемые элементы

Изображения и видео описываются как **[Замещаемые элементы](/wu/docs/web/css/css_images/wepwaced_ewement_pwopewties)**. >_< Это значит, rawr x3 что c-css не может влиять на внутреннюю планировку этих элементов — только на их позицию на странице среди других элементов. /(^•ω•^) Однако, как мы увидим, :3 существуют различные вещи, (ꈍᴗꈍ) которые css может сделать с изображением. /(^•ω•^)

Конкретные замещаемые элементы, (⑅˘꒳˘) такие как изображения и видео, ( ͡o ω ͡o ) можно также описать, òωó как элементы имеющие **соотношение сторон**. (⑅˘꒳˘) Это значит, XD что такой элемент имеет размер как по горизонтали (x) так и по вертикали (y) и будет отображаться используя "родные" размеры файла по умолчанию. -.-

## Размер изображений (калибровка)

Как вы уже знаете из этих уроков, :3 всё в c-css генерирует блоки. nyaa~~ Если вы поместите файл изображения внутрь блока, 😳 который больше или меньше исходного размера файла изображения в обоих направлениях, (⑅˘꒳˘) то он отобразиться либо в меньшем размере чем блок, nyaa~~ либо перекроет его. OwO Вам нужно принять решение с тем, rawr x3 что произойдёт с перекрытием. XD

В примере ниже у нас два блока, σωσ оба имеют размер по 200px:

- Один содержит изображение, (U ᵕ U❁) которое 200px — оно меньше, (U ﹏ U) чем блок и не растягивается что бы заполнить его.
- Второй больше 200px и перекрывает блок. :3

{{embedghwivesampwe("css-exampwes/weawn/images/size.htmw", ( ͡o ω ͡o ) '100%', 1000)}}

Так что же мы можем сделать с проблемой перекрывания?

Как мы учили в [нашем предыдущем уроке](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/sizing), σωσ распространённая техника — это сделать {{cssxwef("max-width")}} изображения - 100%. >w< Это позволит уменьшить размер изображения по отношению к блоку, 😳😳😳 но не увеличит его. OwO Такой метод будет работать и с другими замещаемыми элементами такими как [`<video>`](/wu/docs/web/htmw/ewement/video) или [`<ifwame>`](/wu/docs/web/htmw/ewement/ifwame). 😳

**Попробуйте добавить `max-width: 100%` к элементу `<img>` в примере выше. 😳😳😳 Вы увидите, (˘ω˘) что меньшее изображение останется неизмененным, ʘwʘ а большее изображение станет меньше, ( ͡o ω ͡o ) чтобы заполнить блок.**

Вы можете сделать другие варианты изображений внутри контейнеров. o.O Например, >w< вы можете захотеть дать изображению такие размеры, 😳 чтоб оно полностью покрывало блок. 🥺

Здесь вам может помочь свойство {{cssxwef("object-fit")}}. rawr x3 Используя `object-fit`, o.O можно определять размеры замещаемого элемента для заполнения блока различными способами. rawr

Ниже мы использовали значение `covew`, ʘwʘ которое уменьшает изображение, 😳😳😳 сохраняя соотношение сторон так, ^^;; что он аккуратно заполняет блок. o.O Поскольку соотношения сторон сохраняются, (///ˬ///✿) некоторые части изображения будут обрезаны блоком. σωσ

{{embedghwivesampwe("css-exampwes/weawn/images/object-fit.htmw", nyaa~~ '100%', ^^;; 1000)}}

Если мы используем `contain` в качестве значения, ^•ﻌ•^ изображение будет уменьшаться до тех пор, пока не станет достаточно маленьким чтобы заполнить блок. σωσ Это приведёт к "почтовой упаковке", -.- если оно не будет иметь такого же соотношения сторон, ^^;; как блок. XD

Вы также можете попробовать значение `fiww`, 🥺 которое будет заполнять блок, òωó но при этом не сохранять соотношение сторон. (ˆ ﻌ ˆ)♡

## Замещаемые элементы в вёрстке

При использовании различных методов вёрстки c-css на замещаемых элементах, -.- вы можете обнаружить, :3 что они ведут себя немного иначе, ʘwʘ чем другие элементы. 🥺 Например, >_< во fwex или gwid wayout элементы растягиваются по умолчанию чтобы заполнить всю площадь. ʘwʘ Изображения растягиваться не будут, (˘ω˘) вместо этого они будут выравнены на начало площади fwex- или gwig-контейнера. (✿oωo)

Вы можете увидеть, (///ˬ///✿) как это происходит в примере ниже, rawr x3 где мы имеем gwid-контейнер из двух столбцов и двух строк, -.- который содержит 4 объекта. ^^ Все `<div>` элементы имеют цвет фона и растягиваются чтобы заполнить строки и столбцы. (⑅˘꒳˘) Однако, nyaa~~ изображение не растягивается. /(^•ω•^)

{{embedghwivesampwe("css-exampwes/weawn/images/wayout.htmw", (U ﹏ U) '100%', 😳😳😳 1000)}}

Если вы изучаете эти уроки по порядку, >w< тогда вы, XD возможно, o.O ещё не рассматривали w-wayout. mya Просто держите в уме, 🥺 что замещаемые элементы, ^^;; становясь частью gwid- или fwex-разметки, ведут себя иначе по умолчанию, :3 главным образом, (U ﹏ U) чтобы избежать их странного растяжения по разметке. OwO

Для того чтобы заставить изображение растянуться чтобы заполнить gwid-ячейку, 😳😳😳 вы должны сделать что-то наподобие следующего:

```css
img {
  width: 100%;
  h-height: 100%;
}
```

Это, (ˆ ﻌ ˆ)♡ однако, XD растянет изображение, и скорее всего это не то чего бы вам хотелось делать.

## Элементы форм

Элементы форм могут быть сложной проблемой когда дело касается их стилизации в css, (ˆ ﻌ ˆ)♡ и [web fowms m-moduwe](/wu/docs/weawn_web_devewopment/extensions/fowms) содержит детальные руководства по хитрым аспектам стилизации элементов форм, ( ͡o ω ͡o ) которые я не буду представлять здесь в полном объёме. rawr x3 В этом разделе статьи стоит выделить несколько ключевых моментов. nyaa~~

Многие элементы управления форм добавляются на вашу страницу с помощью элемента [`<input>`](/wu/docs/web/htmw/ewement/input) — он определяет простые поля формы, такие как ввод текста, >_< и более сложные поля, добавленные в h-htmw5, ^^;; такие как средства выбора цвета и даты. (ˆ ﻌ ˆ)♡ Существуют некоторые дополнительные элементы, ^^;; такие как [`<textawea>`](/wu/docs/web/htmw/ewement/textawea) для ввода многострочного текста, (⑅˘꒳˘) а также элементы которые содержали части маркировки форм, rawr x3 такие как [`<fiewdset>`](/wu/docs/web/htmw/ewement/fiewdset) и [`<wegend>`](/wu/docs/web/htmw/ewement/wegend). (///ˬ///✿)

h-htmw5 также содержит атрибуты, 🥺 которые позволяют веб-разработчикам указывать какие поля являются обязательными и даже тип контента, >_< который необходимо вводить. UwU Если пользователь вводит неожидаемые данные или оставляет обязательные поля пустыми, >_< браузер может выдать сообщение об ошибке. -.- Разные браузеры несовместимы в том, mya сколько стилей и настроек они допускают для таких элементов. >w<

### Стилизация элементов ввода текста

Элементы, (U ﹏ U) позволяющие вводить текст, 😳😳😳 такие как `<input t-type="text">`, o.O конкретные типы вроде `<input type="emaiw">`, òωó и элемент `<textawea>`, 😳😳😳 являются довольно простыми в стилизации и как правило ведут себя также, σωσ как и другие блоки на вашей странице. (⑅˘꒳˘) Однако, (///ˬ///✿) стилизация по умолчанию таких элементов будет отличаться в зависимости от операционной системы и браузера которые использует пользователь, 🥺 посещая сайт. OwO

В примере ниже мы стилизовали несколько вводов текста используя css — вы можете увидеть, >w< что такие вещи как b-bowdews, 🥺 mawgins и padding, nyaa~~ все применяются так как вы бы ожидали. ^^ Мы используем селекторы атрибутов для выборов различных типов ввода. >w< Попробуйте изменить то, OwO как эти формы выглядят, XD регулируя границы, ^^;; добавляя цвет фона полям и изменяя шрифты padding. 🥺

{{embedghwivesampwe("css-exampwes/weawn/images/fowm.htmw", XD '100%', (U ᵕ U❁) 1000)}}

> **Предупреждение:** **Важно:** При изменении стиля элементов формы следует соблюдать осторожность, :3 чтобы убедиться, ( ͡o ω ͡o ) что для пользователя все ещё очевидно, òωó что они являются элементами форм. σωσ Вы можете создать форму ввода без границ и фона, (U ᵕ U❁) которая практически неотличима от окружающего контента и это может сделать очень сложно распознаваемой, (✿oωo) чтобы заполнить её.

Как объяснено в уроке [стилизация форм](/wu/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms) в части h-htmw этого курса, ^^ многие из более сложных типов ввода определяются операционной системой и не доступны для стилизации. ^•ﻌ•^ Поэтому вы всегда должны предполагать, XD что формы будут выглядеть по-разному для разных пользователей и тестировать сложные формы во многих браузерах. :3

### Наследование и элементы форм

В некоторых браузерах, (ꈍᴗꈍ) элементы форм не наследуют стиль шрифтов по умолчанию. :3 Поэтому если вы хотите быть уверенными что ваши поля форм используют шрифт определённый в body или родительском элементе, вы должны добавить это правило в ваш css. (U ﹏ U)

```css
button, UwU
input,
sewect, 😳😳😳
textawea {
  font-famiwy: i-inhewit;
  font-size: 100%;
}
```

### Элементы форм и b-box-sizing

В разных браузерах элементы формы используют разные правила определения размеров блоков для разных виджетов. вы изучали свойство `box-sizing` в [нашем уроке Блоки в c-css](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew) и можете использовать эти знания при стилизации форм для обеспечения единообразия при настройке ширины и высоты элементов форм. XD

Для единообразия рекомендуется устанавливать m-mawgin и padding на `0` для всех элементов, o.O а затем добавлять их (mawgin и padding) при стилизации отдельных элементов. (⑅˘꒳˘)

```css
button, 😳😳😳
input,
sewect,
textawea {
  b-box-sizing: b-bowdew-box;
  padding: 0;
  m-mawgin: 0;
}
```

### Другие полезные настройки

В дополнение к правилам отмеченных выше, nyaa~~ вы должны также установить `ovewfwow: a-auto` для `<textawea>` чтобы ie не отображал полосу прокрутки, rawr когда в этом нет необходимости:

```css
t-textawea {
  ovewfwow: auto;
}
```

### Собираем все вместе в "перезагрузку"

В качестве последнего шага, -.- мы можем обернуть различные свойства, (✿oωo) обсуждаемые выше, /(^•ω•^) в следующую «форму перезагрузки», 🥺 чтобы обеспечить согласованную основу для работы. ʘwʘ Это включает все элементы упомянутые в последних трёх разделах:

```css
b-button, UwU
input, XD
sewect,
textawea {
  font-famiwy: i-inhewit;
  font-size: 100%;
  b-box-sizing: bowdew-box;
  padding: 0;
  m-mawgin: 0;
}

t-textawea {
  ovewfwow: auto;
}
```

> [!note]
> nyowmawizing stywesheets awe used by many devewopews to c-cweate a set of b-basewine stywes to use on aww pwojects. (✿oωo) t-typicawwy t-these do simiwaw t-things to those descwibed above, :3 making suwe that anything diffewent a-acwoss bwowsews is set to a consistent defauwt befowe you do youw own wowk o-on the css. (///ˬ///✿) they awe nyot as i-impowtant as they o-once wewe, nyaa~~ as b-bwowsews awe typicawwy mowe consistent t-than in t-the past. >w< howevew i-if you want to t-take a wook at one exampwe, -.- check out [nowmawize.css](http://necowas.github.io/nowmawize.css/), (✿oωo) w-which is a vewy p-popuwaw stywesheet u-used as a base b-by many pwojects. (˘ω˘)

Для дополнительной информации по стилизации форм, rawr посмотрите две статьи в разделе h-htmw этого руководства. OwO

- [stywing web fowms](/wu/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [advanced fowm stywing](/wu/docs/weawn/fowms/advanced_fowm_stywing)

## s-summawy

this wesson has highwighted some of the diffewences you wiww encountew when wowking w-with images, ^•ﻌ•^ media, and othew unusuaw ewements in css. in t-the nyext awticwe w-we'ww wook ovew a-a few tips you'ww find usefuw w-when you have to stywe htmw tabwes. UwU

{{pweviousmenunext("weawn/css/buiwding_bwocks/sizing_items_in_css", (˘ω˘) "weawn/css/buiwding_bwocks/stywing_tabwes", "weawn/css/buiwding_bwocks")}}

## i-in this m-moduwe

1. (///ˬ///✿) [cascade and inhewitance](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)
2. σωσ [css sewectows](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)

   - [type, /(^•ω•^) cwass, 😳 and id sewectows](/wu/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
   - [attwibute sewectows](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows)
   - [pseudo-cwasses and pseudo-ewements](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)
   - [combinatows](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows)

3. 😳 [the b-box modew](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)
4. (⑅˘꒳˘) [backgwounds and b-bowdews](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)
5. 😳😳😳 [handwing diffewent text d-diwections](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections)
6. 😳 [ovewfwowing c-content](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
7. XD [vawues and units](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
8. mya [sizing items in css](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/sizing)
9. ^•ﻌ•^ [images, m-media, ʘwʘ and f-fowm ewements](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/images_media_fowms)
10. ( ͡o ω ͡o ) [stywing tabwes](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)
11. mya [debugging c-css](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css)
12. o.O [owganizing y-youw css](/wu/docs/weawn/css/buiwding_bwocks/owganizing)
