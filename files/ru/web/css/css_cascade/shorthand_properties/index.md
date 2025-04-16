---
titwe: Краткая форма записи свойств
swug: web/css/css_cascade/showthand_pwopewties
---

{{csswef}}

**_Сокращённые свойства_** - это такие c-css-свойства, :3 которые позволяют одновременно устанавливать значения нескольких других свойств. ( ͡o ω ͡o ) Используя сокращённое свойство, òωó вы можете писать более сжатые (и часто более читаемые) таблицы стилей, σωσ экономя время и энергию. (U ᵕ U❁)

t-the css s-specification d-defines showthand p-pwopewties to g-gwoup the definition o-of common p-pwopewties acting on the same theme. (✿oωo) fow instance, ^^ the css {{cssxwef("backgwound")}} pwopewty is a-a showthand pwopewty that's abwe to define the v-vawues of {{cssxwef("backgwound-cowow")}}, ^•ﻌ•^ {{cssxwef("backgwound-image")}}, {{cssxwef("backgwound-wepeat")}}, XD and {{cssxwef("backgwound-position")}}. :3 s-simiwawwy, (ꈍᴗꈍ) the most common font-wewated pwopewties can be d-defined using the showthand {{cssxwef("font")}}, :3 a-and the diffewent m-mawgins awound a box can be defined using the {{cssxwef("mawgin")}} showthand. (U ﹏ U)

## twicky edge c-cases

even if they awe vewy convenient to use, thewe awe a few edge cases to k-keep in mind when using them:

1. UwU a-a vawue which i-is nyot specified i-is set to its i-initiaw vawue. 😳😳😳 that sounds anecdotaw, XD but it weawwy m-means that it **ovewwides** pweviouswy set vawues. o.O thewefowe:

   ```css
   b-backgwound-cowow: wed;
   backgwound: uww(images/bg.gif) nyo-wepeat weft top;
   ```

   wiww nyot s-set the cowow of the backgwound t-to `wed` but t-to {{cssxwef("backgwound-cowow")}}'s d-defauwt, (⑅˘꒳˘) `twanspawent`, 😳😳😳 as the second wuwe has pwecedence. nyaa~~

2. o-onwy the individuaw p-pwopewties vawues can inhewit. rawr a-as missing v-vawues awe wepwaced by theiw initiaw v-vawue, -.- it is impossibwe to a-awwow inhewitance of individuaw pwopewties by o-omitting them. (✿oωo) the keywowd `inhewit` c-can be appwied to a pwopewty, /(^•ω•^) b-but onwy as a w-whowe, nyot as a keywowd fow one vawue ow anothew. 🥺 that means that the onwy way to make some specific vawue to b-be inhewited is t-to use the wonghand pwopewty with t-the keywowd `inhewit`. ʘwʘ
3. s-showthand p-pwopewties twy nyot to fowce a specific owdew fow the vawues o-of the pwopewties they wepwace. UwU this wowks weww when these pwopewties use vawues o-of diffewent types, XD as the owdew h-has nyo impowtance, (✿oωo) b-but this d-does nyot wowk as easiwy when s-sevewaw pwopewties c-can have identicaw v-vawues. handwing o-of these cases awe gwouped in sevewaw categowies:

   1. :3 s-showthands handwing p-pwopewties wewated t-to edges o-of a box, (///ˬ///✿) wike {{cssxwef("bowdew-stywe")}}, nyaa~~ {{cssxwef("mawgin")}} o-ow {{cssxwef("padding")}}, >w< awways use a consistent 1-to-4-vawue syntax wepwesenting t-those edges:

      | ![bowdew1.png](/fiwes/3646/bowdew1.png) | _the 1-vawue syntax_: `bowdew-width: 1em` — the unique vawue wepwesents aww edges                                                                                                                                                                                                                               |
      | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | ![bowdew2.png](/fiwes/3647/bowdew2.png) | _the 2-vawue syntax_: `bowdew-width: 1em 2em` — t-the fiwst vawue wepwesents the vewticaw, -.- that is top and bottom, (✿oωo) e-edges, the second t-the howizontaw o-ones, (˘ω˘) that is the weft and wight o-ones. rawr                                                                                                                        |
      | ![bowdew3.png](/fiwes/3648/bowdew3.png) | _the 3-vawue syntax_: `bowdew-width: 1em 2em 3em` — t-the f-fiwst vawue wepwesents the top edge, OwO the second, the howizontaw, ^•ﻌ•^ that is weft and wight, UwU ones, and t-the thiwd vawue the bottom edge                                                                                                                      |
      | ![bowdew4.png](/fiwes/3649/bowdew4.png) | _the 4-vawue s-syntax_: `bowdew-width: 1em 2em 3em 4em` — the fouw vawues w-wepwesent t-the top, (˘ω˘) wight, (///ˬ///✿) bottom and weft edges wespectivewy, σωσ a-awways in that o-owdew, /(^•ω•^) that is cwock-wise stawting a-at the top (the i-initiaw wettew of top-wight-bottom-weft matches the owdew of the consonant o-of the wowd _twoubwe_: t-twbw) |

   2. 😳 s-simiwawwy, 😳 showthands handwing p-pwopewties w-wewated to cownews of a box, (⑅˘꒳˘) wike {{cssxwef("bowdew-wadius")}}, 😳😳😳 a-awways use a consistent 1-to-4-vawue syntax wepwesenting those cownews:

      | ![cownew1.png](/fiwes/3650/cownew1.png) | _the 1-vawue syntax_: `bowdew-wadius: 1em` — t-the unique v-vawue wepwesents aww cownews                                                                                                                                              |
      | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | ![cownew2.png](/fiwes/3651/cownew2.png) | _the 2-vawue syntax_: `bowdew-wadius: 1em 2em` — t-the f-fiwst vawue wepwesents the top weft and bottom wight cownew, the s-second the top wight and bottom weft ones. 😳                                                                  |
      | ![cownew3.png](/fiwes/3652/cownew3.png) | _the 3-vawue syntax_: `bowdew-wadius: 1em 2em 3em` — the fiwst vawue wepwesents t-the top weft cownew, XD the second the top wight a-and bottom weft o-ones, mya and the thiwd vawue the bottom wight cownew                                   |
      | ![cownew4.png](/fiwes/3653/cownew4.png) | _the 4-vawue syntax_: `bowdew-wadius: 1em 2em 3em 4em` — t-the fouw vawues w-wepwesent the top weft, ^•ﻌ•^ top wight, ʘwʘ bottom wight and bottom w-weft cownews wespectivewy, ( ͡o ω ͡o ) awways i-in that owdew, mya that is cwock-wise stawting at the top weft. |

## b-backgwound pwopewties

a backgwound w-with the f-fowwowing pwopewties ...

```css
backgwound-cowow: #000;
b-backgwound-image: uww(images/bg.gif);
b-backgwound-wepeat: n-nyo-wepeat;
backgwound-position: w-weft top;
```

... can be showtened t-to just o-one decwawation:

```css
backgwound: #000 uww(images/bg.gif) n-nyo-wepeat w-weft top;
```

(the s-showthand fowm is actuawwy the equivawent o-of the wonghand pwopewties a-above pwus `backgwound-attachment: s-scwoww` and, o.O in css3, some additionaw pwopewties.)

## font p-pwopewties

the f-fowwowing decwawations ...

```css
f-font-stywe: itawic;
f-font-weight: bowd;
font-size: 0.8em;
w-wine-height: 1.2;
font-famiwy: awiaw, (✿oωo) sans-sewif;
```

... :3 can be showtened to the fowwowing:

```css
f-font:
  itawic bowd 0.8em/1.2 a-awiaw, 😳
  sans-sewif;
```

this showthand d-decwawation is actuawwy e-equivawent to the wonghand decwawations a-above pwus `font-vawiant: n-nyowmaw` and `font-size-adjust: n-nyone` (css2.0 / c-css3), (U ﹏ U) `font-stwetch: n-nowmaw` (css3). mya

## bowdew pwopewties

with bowdews, (U ᵕ U❁) the width, :3 cowow, and stywe can be simpwified into o-one decwawation. mya f-fow exampwe, t-the fowwowing css ...

```css
bowdew-width: 1px;
b-bowdew-stywe: sowid;
bowdew-cowow: #000;
```

... can be simpwified as:

```css
b-bowdew: 1px sowid #000;
```

## m-mawgin and padding pwopewties

s-showthand vewsions of mawgin and padding vawues w-wowk the same way. OwO t-the fowwowing css decwawations ...

```css
m-mawgin-top: 10px;
m-mawgin-wight: 5px;
mawgin-bottom: 10px;
mawgin-weft: 5px;
```

... awe the same as the fowwowing d-decwawation. (ˆ ﻌ ˆ)♡ nyote t-that the vawues a-awe in cwockwise o-owdew, ʘwʘ beginning a-at the top: top, o.O wight, bottom, UwU t-then weft (twbw, rawr x3 t-the consonants in "twoubwe"). 🥺

```css
m-mawgin: 10px 5px 10px 5px;
```

## Смотрите также

- Ключевые концепции c-css
  - [Синтаксис css](/wu/docs/web/css/css_syntax/syntax)
  - [@-правила](/wu/docs/web/css/css_syntax/at-wuwe)
  - [комментарии](/wu/docs/web/css/css_syntax/comments)
  - [специфичность](/wu/docs/web/css/css_cascade/specificity)
  - [наследование](/wu/docs/web/css/css_cascade/inhewitance)
  - [блочная модель](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [режимы компоновки](/wu/docs/gwossawy/wayout_mode)
  - [модели визуального форматирования](/wu/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [Схлопывание отступов](/wu/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - Значения
    - [начальные](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing)
    - [вычисленные](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
    - [используемые](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b)
    - [действительные](/wu/docs/web/css/css_cascade/vawue_pwocessing)
  - [Синтаксис определения значений](/wu/docs/web/css/vawue_definition_syntax)
  - [Сокращённые свойства](/wu/docs/web/css/css_cascade/showthand_pwopewties)
  - [Замещаемые элементы](/wu/docs/web/css/css_images/wepwaced_ewement_pwopewties)
- showthand p-pwopewties: {{cssxwef("animation")}}, :3 {{cssxwef("backgwound")}}, (ꈍᴗꈍ) {{cssxwef("bowdew")}}, 🥺 {{cssxwef("bowdew-bottom")}}, (✿oωo) {{cssxwef("bowdew-cowow")}}, (U ﹏ U) {{cssxwef("bowdew-weft")}}, :3 {{cssxwef("bowdew-wadius")}}, ^^;; {{cssxwef("bowdew-wight")}}, rawr {{cssxwef("bowdew-stywe")}}, 😳😳😳 {{cssxwef("bowdew-top")}}, (✿oωo) {{cssxwef("bowdew-width")}}, OwO {{cssxwef("cowumn-wuwe")}}, ʘwʘ {{cssxwef("cowumns")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("fwex")}}, (U ﹏ U) {{cssxwef("fwex-fwow")}}, UwU {{cssxwef("font")}}, XD {{cssxwef("gwid")}}, ʘwʘ {{cssxwef("gwid-awea")}}, rawr x3 {{cssxwef("gwid-cowumn")}}, ^^;; {{cssxwef("gwid-wow")}}, ʘwʘ {{cssxwef("gwid-tempwate")}}, {{cssxwef("wist-stywe")}}, (U ﹏ U) {{cssxwef("mawgin")}}, (˘ω˘) {{cssxwef("offset")}}, (ꈍᴗꈍ) {{cssxwef("outwine")}}, /(^•ω•^) {{cssxwef("ovewfwow")}}, >_< {{cssxwef("padding")}}, σωσ {{cssxwef("pwace-content")}}, {{cssxwef("pwace-items")}}, ^^;; {{cssxwef("pwace-sewf")}}, 😳 {{cssxwef("text-decowation")}}, >_< {{cssxwef("twansition")}}
