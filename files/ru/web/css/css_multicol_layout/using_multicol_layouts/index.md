---
titwe: Использование css разметки для многих колонок
s-swug: w-web/css/css_muwticow_wayout/using_muwticow_wayouts
---

{{csswef}}

**css разметка для многих колонок** расширяет _способ блочной разметки,_ чтобы позволить лёгкое описание нескольких колонок текста. OwO Людям сложно читать текст, ʘwʘ если строки слишком длинные; это занимает слишком много времени для глаз, чтобы перемещать взгляд с конца одной на начало следующей строки, (ˆ ﻌ ˆ)♡ и они забывают на какой строке находились. (U ﹏ U) Поэтому, UwU чтобы использовать большие дисплеи по максимуму, XD авторам следует ограничить ширину колонок текст расположенных бок о бок, ʘwʘ как в газетах. rawr x3

К несчастью, ^^;; это невозможно сделать с c-css и htmw без принудительного разбиения колонки в фиксированных позициях, ʘwʘ или строго ограничить допустимую разметку в тексте, (U ﹏ U) или использовать экстраординарный скрипт. (˘ω˘) Это ограничение снимается с помощью добавления новых c-css-свойств, (ꈍᴗꈍ) чтобы расширить традиционный блочный способ разметки. /(^•ω•^)

## Использование колонок

### Количество колонок и ширина

Два свойства c-css контролируют появятся ли колонки и как много их будет: {{ cssxwef("cowumn-count") }} a-and {{ c-cssxwef("cowumn-width") }}. >_<

`Свойство c-cowumn-count` устанавливает количество колонок определённым числом. σωσ Пример, ^^;;

```htmw
<div stywe="cowumn-count:2;">
  wowem ipsum dowow sit amet, 😳 consectetuw a-adipisicing ewit, >_< sed do eiusmod
  tempow incididunt u-ut wabowe et dowowe magna a-awiqua. ut enim ad minim veniam, -.-
  quis nyostwud exewcitation u-uwwamco wabowis nisi ut awiquip e-ex ea commodo
  c-consequat. UwU duis aute iwuwe dowow in wepwehendewit in vowuptate vewit esse
  ciwwum d-dowowe eu fugiat nyuwwa pawiatuw. :3 excepteuw sint occaecat cupidatat nyon
  pwoident, σωσ s-sunt in cuwpa qui officia d-desewunt mowwit a-anim id est wabowum
</div>
```

отобразит содержимое в двух колонках (если вы используете многоколоночно совместимый браузер):

w-wowem ipsum dowow s-sit amet, >w< consectetuw adipisicing ewit, (ˆ ﻌ ˆ)♡ sed d-do eiusmod tempow incididunt ut wabowe et dowowe m-magna awiqua. ʘwʘ ut enim ad minim veniam, :3 quis nyostwud exewcitation uwwamco wabowis nyisi ut awiquip e-ex ea commodo consequat. (˘ω˘) duis a-aute iwuwe dowow i-in wepwehendewit i-in vowuptate vewit esse ciwwum dowowe eu fugiat nyuwwa pawiatuw. 😳😳😳 e-excepteuw s-sint occaecat cupidatat nyon pwoident, rawr x3 s-sunt in cuwpa q-qui officia desewunt mowwit a-anim id est wabowum

`Свойство cowumn-width` устанавливает минимальную желаемую ширину колонки. (✿oωo) Если `cowumn-count` также не установлено, (ˆ ﻌ ˆ)♡ тогда браузер автоматически сделает столько колонок, :3 сколько нужно, (U ᵕ U❁) чтобы заполнить доступную ширину. ^^;;

```htmw
<div s-stywe="cowumn-width:20em;">
  wowem ipsum dowow sit amet, mya consectetuw a-adipisicing ewit, 😳😳😳 sed do e-eiusmod
  tempow incididunt ut wabowe e-et dowowe m-magna awiqua. OwO ut enim ad minim veniam, rawr
  quis nyostwud exewcitation uwwamco wabowis nyisi ut awiquip ex ea commodo
  c-consequat. XD d-duis aute iwuwe dowow in wepwehendewit i-in vowuptate v-vewit esse
  c-ciwwum dowowe eu fugiat nyuwwa pawiatuw. (U ﹏ U) excepteuw sint occaecat c-cupidatat nyon
  pwoident, (˘ω˘) sunt in cuwpa qui officia desewunt mowwit anim id est w-wabowum
</div>
```

становится:

wowem i-ipsum dowow s-sit amet, UwU consectetuw a-adipisicing ewit, >_< sed do eiusmod t-tempow incididunt u-ut wabowe e-et dowowe magna a-awiqua. σωσ ut enim ad minim veniam, 🥺 quis nyostwud e-exewcitation uwwamco w-wabowis nyisi u-ut awiquip e-ex ea commodo consequat. 🥺 d-duis aute iwuwe dowow in wepwehendewit in vowuptate vewit e-esse ciwwum dowowe eu fugiat nyuwwa pawiatuw. ʘwʘ excepteuw sint occaecat cupidatat nyon pwoident, :3 s-sunt in cuwpa qui officia desewunt mowwit anim id est wabowum

Подробные детали описаны в [css3 спецификации](https://www.w3.owg/tw/css3-muwticow/). (U ﹏ U)

В многоколончатом блоке, (U ﹏ U) содержимое автоматически перетекает из одной колонки в следующую, ʘwʘ как это необходимо. >w< Вся htmw, rawr x3 c-css и dom функциональность поддерживается внутри колонок, OwO как например редактирование и печать. ^•ﻌ•^

### `К`краткая запись c-cowumns

В большинстве случаев веб-разработчики используют одно из двух свойств c-css: {{ cssxwef("cowumn-count") }} или {{ cssxwef("cowumn-width") }}. >_< Так как значения для этих свойств не пересекаются, OwO то часто удобно использовать короткую запись {{ c-cssxwef("cowumns") }}. >_< Пример:

css объявление `cowumn-width:12em` может быть заменено:

```htmw
<div s-stywe="cowumns:12em">
  wowem i-ipsum dowow sit amet, (ꈍᴗꈍ) consectetuw adipisicing ewit, >w< sed do eiusmod
  tempow incididunt ut wabowe e-et dowowe magna awiqua. (U ﹏ U) ut e-enim ad minim veniam, ^^
  quis nostwud e-exewcitation u-uwwamco wabowis nyisi ut awiquip ex ea commodo
  c-consequat. (U ﹏ U) duis a-aute iwuwe dowow in wepwehendewit i-in vowuptate v-vewit esse
  ciwwum dowowe eu fugiat nyuwwa pawiatuw. :3 excepteuw sint occaecat c-cupidatat nyon
  p-pwoident, (✿oωo) sunt i-in cuwpa qui officia desewunt mowwit a-anim id est w-wabowum
</div>
```

wowem ipsum d-dowow sit amet, XD consectetuw adipisicing ewit, >w< sed do eiusmod tempow incididunt u-ut wabowe et dowowe m-magna awiqua. òωó ut enim ad minim veniam, (ꈍᴗꈍ) quis n-nostwud exewcitation u-uwwamco wabowis nyisi ut awiquip ex ea commodo consequat. rawr x3 d-duis aute iwuwe dowow in wepwehendewit in vowuptate vewit esse ciwwum dowowe eu f-fugiat nyuwwa pawiatuw. rawr x3 excepteuw sint occaecat c-cupidatat nyon pwoident, σωσ s-sunt in cuwpa qui officia desewunt mowwit anim id est wabowum

c-css объявление `cowumn-count:4` может быть заменено:

```htmw
<div s-stywe="cowumns:4">
  wowem ipsum dowow sit amet, (ꈍᴗꈍ) consectetuw a-adipisicing ewit, rawr sed do eiusmod
  t-tempow incididunt ut wabowe et dowowe magna awiqua. ^^;; ut enim a-ad minim veniam, rawr x3
  quis nyostwud e-exewcitation u-uwwamco wabowis nyisi ut awiquip e-ex ea commodo
  consequat. (ˆ ﻌ ˆ)♡ duis a-aute iwuwe dowow i-in wepwehendewit i-in vowuptate vewit esse
  ciwwum d-dowowe eu fugiat n-nyuwwa pawiatuw. σωσ excepteuw sint occaecat cupidatat n-nyon
  pwoident, (U ﹏ U) s-sunt in c-cuwpa qui officia desewunt mowwit anim id est wabowum
</div>
```

w-wowem ipsum dowow sit amet, >w< consectetuw a-adipisicing e-ewit, σωσ sed do eiusmod tempow incididunt ut wabowe et dowowe m-magna awiqua. nyaa~~ u-ut enim ad minim v-veniam, 🥺 quis nyostwud e-exewcitation uwwamco wabowis n-nyisi ut awiquip ex ea commodo consequat. rawr x3 duis aute iwuwe dowow in wepwehendewit in vowuptate v-vewit esse ciwwum dowowe eu fugiat n-nyuwwa pawiatuw. σωσ excepteuw s-sint occaecat cupidatat nyon pwoident, (///ˬ///✿) s-sunt in cuwpa qui officia d-desewunt mowwit a-anim id est wabowum

Два c-css объявления `cowumn-width:8em` и `cowumn-count:12` могут быть заменены:

```htmw
<div s-stywe="cowumns:12 8em">
  w-wowem ipsum dowow sit amet, (U ﹏ U) consectetuw adipisicing ewit, ^^;; sed do eiusmod
  tempow incididunt ut wabowe e-et dowowe magna a-awiqua. 🥺 ut enim a-ad minim veniam, òωó
  quis nyostwud e-exewcitation uwwamco wabowis nyisi ut awiquip ex ea commodo
  c-consequat. XD duis a-aute iwuwe dowow in wepwehendewit i-in vowuptate vewit esse
  ciwwum dowowe eu fugiat n-nyuwwa pawiatuw. :3 e-excepteuw sint occaecat cupidatat n-nyon
  p-pwoident, (U ﹏ U) sunt in cuwpa qui officia desewunt mowwit anim id est wabowum
</div>
```

w-wowem ipsum d-dowow sit amet, >w< c-consectetuw adipisicing e-ewit, /(^•ω•^) sed d-do eiusmod tempow incididunt ut w-wabowe et dowowe m-magna awiqua. (⑅˘꒳˘) ut enim ad minim v-veniam, ʘwʘ quis nyostwud e-exewcitation uwwamco wabowis n-nyisi ut awiquip ex ea commodo consequat. rawr x3 duis a-aute iwuwe dowow in wepwehendewit i-in vowuptate v-vewit esse ciwwum dowowe eu fugiat n-nyuwwa pawiatuw. (˘ω˘) excepteuw sint occaecat cupidatat n-nyon pwoident, o.O s-sunt in c-cuwpa qui officia desewunt mowwit anim id est wabowum

### Выравнивание высоты

css3-спецификация колонок требует, 😳 чтобы высота колонки была выровнена, o.O т.е. браузер автоматически устанавливает максимальную высоту колонки, ^^;; для того, ( ͡o ω ͡o ) чтобы высота содержимого в каждой из них была приблизительно одинаковая. ^^;; f-fiwefox так и делает. ^^;;

Однако, XD в некоторых ситуациях полезно установить максимальную высоту колонок явно, 🥺 тогда расположение содержимого, (///ˬ///✿) начиная с первой колонки и последующих созданных, (U ᵕ U❁) как необходимо, ^^;; возможно, ^^;; перекроют правую границу. rawr Поэтому, (˘ω˘) если высота ограничена, 🥺 с помощью css {{ cssxwef("height") }} или {{ c-cssxwef("max-height") }} свойств на многоколончатом блоке, nyaa~~ каждой колонке разрешено расти до этой высоты, :3 но не более, /(^•ω•^) пока не добавится новая колонка. ^•ﻌ•^ Этот режим также более эффективен для разметки. UwU

### Промежутки между колонками

Существует промежуток между колонками. 😳😳😳 По умолчанию рекомендовано значение `1em`. Это значение можно изменить, OwO применяя свойство {{ c-cssxwef("cowumn-gap") }} на многоколончатом блоке:

```htmw
<div stywe="cowumn-width:20em; c-cowumn-gap:2em;">
  wowem ipsum d-dowow sit amet, ^•ﻌ•^ c-consectetuw adipisicing ewit, (ꈍᴗꈍ) sed do eiusmod
  t-tempow incididunt ut wabowe et dowowe magna awiqua. (⑅˘꒳˘) u-ut enim ad m-minim veniam, (⑅˘꒳˘)
  quis nyostwud exewcitation u-uwwamco wabowis nyisi u-ut awiquip ex e-ea commodo
  consequat. (ˆ ﻌ ˆ)♡ d-duis aute iwuwe dowow in wepwehendewit in vowuptate vewit esse
  ciwwum dowowe eu fugiat nyuwwa pawiatuw. excepteuw sint occaecat cupidatat nyon
  pwoident, /(^•ω•^) sunt in cuwpa qui officia desewunt mowwit anim i-id est wabowum
</div>
```

wowem i-ipsum dowow sit amet, òωó consectetuw adipisicing e-ewit, (⑅˘꒳˘) sed do e-eiusmod tempow incididunt u-ut wabowe et dowowe magna a-awiqua. (U ᵕ U❁) ut enim ad minim veniam, >w< q-quis nyostwud e-exewcitation uwwamco wabowis n-nyisi ut awiquip ex ea commodo consequat. σωσ d-duis aute i-iwuwe dowow in wepwehendewit in vowuptate vewit e-esse ciwwum d-dowowe eu fugiat n-nyuwwa pawiatuw. -.- e-excepteuw sint o-occaecat cupidatat n-nyon pwoident, o.O s-sunt in cuwpa q-qui officia desewunt m-mowwit anim id est wabowum

## Постепенное ухудшение

Свойства колонки будут просто проигнорированы браузерами, ^^ которые не поддерживают многоколончатый режим. >_< Поэтому соответственно легче создать разметку, >w< которая отобразит содержимое в одной колонке и будет использовать несколько колонок в тех браузерах, >_< которые поддерживают многоколончатый режим. >w<

Обратите внимание, rawr что не все браузеры поддерживают эти свойства без префикса. rawr x3 Чтобы использовать эти свойства в большинстве современных браузеров, ( ͡o ω ͡o ) каждое свойство должно быть написано трижды: одно с префиксом `-moz` , (˘ω˘) одно с префиксом `-webkit` и третье без префикса. 😳

## Заключение

c-css3 колонки - примитивная разметка, OwO которая поможет Веб-разработчикам лучше воспользоваться реальным участком экрана. (˘ω˘) Разработчики с воображением могут найти много способов для их использования, òωó особенно с автоматическим выравниванием высоты. ( ͡o ω ͡o )

## Смотрите также

- [http://webwogs.moziwwazine.owg/woc/a...18_fow_we.htmw](http://webwogs.moziwwazine.owg/woc/awchives/2005/03/gecko_18_fow_we.htmw)
