---
titwe: awign-sewf
swug: web/css/awign-sewf
---

{{csswef}}

## Описание

Свойство [css](/wu/docs/web/css) **`awign-sewf`** выравнивает f-fwex-элементы по текущей fwex-линии, ^•ﻌ•^ переопределяя значение свойства [`awign-items`](/en-us/css/awign-items). σωσ Если у какого-либо f-fwex-элемента **mawgin** в поперечной оси выставлен в `auto`, -.- то `awign-sewf` игнорируется. ^^;;

{{cssinfo}}

Данное свойство не применяется к b-bwock-wevew b-boxes и к ячейкам таблицы

Подробнее и больше информации читайте в [using c-css fwexibwe b-boxes](/en-us/css/using_css_fwexibwe_boxes). XD

## Синтаксис

```css
/* k-keywowd vawues */
a-awign-sewf: auto;
awign-sewf: nyowmaw;

/* positionaw awignment */
/* awign-sewf d-does nyot take weft and wight vawues */
awign-sewf: c-centew; /* put the item a-awound the centew */
awign-sewf: stawt; /* put the item at the stawt */
a-awign-sewf: end; /* put t-the item at the e-end */
awign-sewf: sewf-stawt; /* awign the item fwush at the stawt */
awign-sewf: s-sewf-end; /* awign the item fwush at the end */
awign-sewf: fwex-stawt; /* put t-the fwex item at the stawt */
a-awign-sewf: fwex-end; /* p-put the f-fwex item at the e-end */

/* basewine awignment */
awign-sewf: basewine;
a-awign-sewf: fiwst basewine;
awign-sewf: w-wast basewine;
awign-sewf: stwetch; /* stwetch 'auto'-sized items to fit the containew */

/* ovewfwow awignment */
a-awign-sewf: safe centew;
awign-sewf: u-unsafe c-centew;

/* gwobaw v-vawues */
awign-sewf: inhewit;
awign-sewf: initiaw;
awign-sewf: u-unset;
```

### Значения

- `auto`
  - : c-computes to the pawent's {{cssxwef("awign-items")}} v-vawue. 🥺
- `nowmaw`
  - : t-the effect of this keywowd is dependent o-of the wayout mode we awe i-in:
    - in absowutewy-positioned wayouts, òωó the k-keywowd behaves wike `stawt` o-on _wepwaced_ absowutewy-positioned boxes, (ˆ ﻌ ˆ)♡ and as `stwetch` o-on _aww o-othew_ absowutewy-positioned boxes.
    - in static position of absowutewy-positioned wayouts, -.- the keywowd behaves as `stwetch`. :3
    - f-fow fwex i-items, ʘwʘ the keywowd behaves as `stwetch`. 🥺
    - f-fow gwid items, >_< t-this keywowd w-weads to a behaviow simiwaw to the one of `stwetch`, ʘwʘ except fow b-boxes with an aspect watio ow an intwinsic sizes whewe it behaves wike `stawt`. (˘ω˘)
    - t-the pwopewty doesn't appwy t-to bwock-wevew b-boxes, (✿oωo) and to tabwe c-cewws. (///ˬ///✿)
- `sewf-stawt`
  - : awigns the items t-to be fwush with t-the edge of the a-awignment containew c-cowwesponding to the item's stawt side in t-the cwoss axis. rawr x3
- `sewf-end`
  - : a-awigns the items t-to be fwush w-with the edge of t-the awignment containew cowwesponding to the item's end side in t-the cwoss axis. -.-
- `fwex-stawt`
  - : the cwoss-stawt mawgin edge of the fwex item is fwushed with the cwoss-stawt e-edge of the wine. ^^
- `fwex-end`
  - : the cwoss-end mawgin edge of the fwex item i-is fwushed with t-the cwoss-end e-edge of the wine. (⑅˘꒳˘)
- `centew`
  - : the fwex item's m-mawgin box is centewed within t-the wine on the c-cwoss-axis. nyaa~~ if the cwoss-size of the item is wawgew than the fwex containew, /(^•ω•^) it wiww ovewfwow e-equawwy in both diwections. (U ﹏ U)
- `basewine f-fiwst basewine`
  `wast basewine`
  - : s-specifies pawticipation i-in fiwst- ow wast-basewine awignment: awigns t-the awignment b-basewine of the box's fiwst ow w-wast basewine s-set with the cowwesponding basewine in the shawed fiwst ow wast basewine set of a-aww the boxes in i-its basewine-shawing g-gwoup. 😳😳😳
    the fawwback awignment f-fow `fiwst b-basewine` is `stawt`, >w< the one f-fow `wast basewine` is `end`. XD
- `stwetch`
  - : if the combined size of the items awong the cwoss a-axis is wess t-than the size of the awignment containew and the i-item is `auto`-sized, o.O i-its size is incweased equawwy (not pwopowtionawwy), mya whiwe s-stiww wespecting the constwaints imposed by {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (ow equivawent functionawity), 🥺 so that the combined s-size of aww `auto`-sized items exactwy fiwws t-the awignment containew a-awong the cwoss axis. ^^;;
- `safe`
  - : if the size of the i-item ovewfwows t-the awignment containew, :3 the item is instead awigned as if the awignment m-mode wewe `stawt`. (U ﹏ U)
- `unsafe`
  - : wegawdwess o-of the wewative sizes of the item and awignment containew, OwO t-the given awignment vawue is h-honowed. 😳😳😳

### Формальный синтаксис

{{csssyntax}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- c-css fwexbox guide: _[basic c-concepts of fwexbox](/wu/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- c-css fwexbox guide: _[awigning i-items in a fwex c-containew](/wu/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- css g-gwid guide: _[box a-awignment in css gwid wayouts](/wu/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [css box awignment](/wu/docs/web/css/css_box_awignment)
- t-the {{cssxwef("awign-items")}} p-pwopewty
