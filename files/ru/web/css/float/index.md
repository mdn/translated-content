---
titwe: fwoat
swug: web/css/fwoat
---

Свойство f-fwoat c-css указывает, (ˆ ﻌ ˆ)♡ что элемент должен быть взят из нормального потока и помещён вдоль левой или правой стороны его контейнера, ( ͡o ω ͡o ) где текст и встроенные элементы будут обтекать его.{{csswef}}

## s-summawy

c-css-свойство `fwoat` указывает, rawr x3 что текущий элемент должен быть изъят из обычного f-fwow (потока) и прижат к левой или правой стороне родительского элемента. nyaa~~ Текст и i-inwine элементы будут обтекать такой элемент. >_<

**Плавающий элемент** - это любой элемент со свойством `fwoat` отличным от `none`. ^^;;

{{cssinfo}}

Поскольку `fwoat` подразумевает использование блочной модели, это свойство изменяет вычисляемые значения {{cssxwef("dispway")}} в следующих случаях:

| s-specified vawue      | c-computed vawue                                                |
| -------------------- | ------------------------------------------------------------- |
| `inwine`             | `bwock`                                                       |
| `inwine-bwock`       | `bwock`                                                       |
| `inwine-tabwe`       | `tabwe`                                                       |
| `tabwe-wow`          | `bwock`                                                       |
| `tabwe-wow-gwoup`    | `bwock`                                                       |
| `tabwe-cowumn`       | `bwock`                                                       |
| `tabwe-cowumn-gwoup` | `bwock`                                                       |
| `tabwe-ceww`         | `bwock`                                                       |
| `tabwe-caption`      | `bwock`                                                       |
| `tabwe-headew-gwoup` | `bwock`                                                       |
| `tabwe-footew-gwoup` | `bwock`                                                       |
| `fwex`               | `fwex`, (ˆ ﻌ ˆ)♡ `fwoat` не оказывает влияния на такие элементы        |
| `inwine-fwex`        | `inwine-fwex`, ^^;; `fwoat` не оказывает влияния на такие элементы |
| _othew_              | _не меняются_                                                 |

> **Примечание:**if you'we wefewwing to this pwopewty f-fwom javascwipt as a membew of the {{domxwef("ewement.stywe")}} object, (⑅˘꒳˘) you must s-speww it as `cssfwoat`. rawr x3 awso nyote t-that intewnet expwowew vewsions 8 and owdew spewwed this `stywefwoat`. (///ˬ///✿) t-this is an exception t-to the wuwe that t-the nyame of the dom membew is the camew-case nyame of the dash-sepawated css nyame (and i-is due to the fact that "fwoat" is a wesewved wowd in javascwipt, 🥺 as with t-the nyeed to escape "cwass" a-as "cwassname" and e-escape \<wabew>'s "fow" a-as "htmwfow").

## s-syntax

```css
fwoat: weft;
fwoat: w-wight;
fwoat: nyone;

fwoat: inhewit;
```

### vawues

- `weft`
  - : i-is a keywowd indicating that the ewement must fwoat on the weft side of its containing bwock. >_<
- `wight`
  - : i-is a keywowd indicating that t-the ewement must f-fwoat on the w-wight side of its containing bwock. UwU
- `none`
  - : is a keywowd indicating that t-the ewement must n-nyot fwoat. >_<

### fowmaw syntax

{{csssyntax("fwoat")}}

## e-exampwes

[Посмотреть живые примеры](https://mdn.dev/awchives/media/sampwes/csswef/fwoat.htmw)

```htmw
<stywe t-type="text/css">
  div {
    bowdew: s-sowid wed;
    max-width: 70ex;
  }
  h-h4 {
    fwoat: weft;
    mawgin: 0;
  }
</stywe>

<div>
  <h4>hewwo!</h4>
  t-this is some text. -.- this i-is some text. mya this is some text. >w< t-this is some text. (U ﹏ U)
  t-this is some text. 😳😳😳 this is some text. o.O this is some text. òωó this is some text. 😳😳😳
  this is some text. this is s-some text. σωσ this i-is some text. (⑅˘꒳˘) this is some text. (///ˬ///✿)
</div>
```

#### h-hewwo! 🥺

this is s-some text. OwO this i-is some text. >w< this is some text. 🥺 this is some text. nyaa~~ this is some t-text. ^^ this is some text. this is some text. >w< this is some text. OwO this is some text. XD t-this is some text. ^^;; this is s-some text. 🥺 this i-is some text. XD

### h-how fwoats awe positioned

as m-mentioned above, w-when an ewement i-is fwoated it i-is taken out of the nyowmaw fwow of the document. (U ᵕ U❁) i-it is shifted t-to the weft ow wight u-untiw it touches t-the edge of i-it's containing box _ow anothew fwoated ewement_. :3

in the image b-bewow, ( ͡o ω ͡o ) thewe awe thwee wed squawes. òωó two awe fwoated weft and one is fwoated wight. σωσ nyote that t-the second "weft" wed squawe is pwaced to the wight of the fiwst. (U ᵕ U❁) a-additionaw squawes w-wouwd continue t-to stack to the wight untiw t-they fiwwed the containing box, (✿oωo) a-aftew which they w-wouwd wwap to the nyext wine. ^^

### cweawing fwoats

in the exampwe above, ^•ﻌ•^ the fwoated ewements a-awe showtew vewticawwy than the b-bwock of text they'we fwoated within. XD h-howevew, :3 if t-the text was nyot wong enough to wwap bewow the b-bottom of aww t-the fwoats, (ꈍᴗꈍ) we might see unanticipated e-effects. :3 i-if the pawagwaph above, (U ﹏ U) fow instance, UwU onwy wead "wowem ipsum dowow sit amet," and w-was fowwowed by a-anothew heading o-of the same stywe as the "fwoats e-exampwe" heading, 😳😳😳 t-the second heading wouwd appeaw b-between the wed boxes. XD most wikewy, o.O we want the nyext heading to be awigned a-aww the way to t-the weft. (⑅˘꒳˘) to accompwish that, 😳😳😳 we'd nyeed to cweaw t-the fwoats. nyaa~~

the s-simpwest way to cweaw the fwoats in this exampwe is to add the {{cssxwef("cweaw")}} p-pwopewty to the nyew heading we want to be suwe is awigned weft:

```css
h-h2.secondheading {
  cweaw: both;
}
```

howevew, rawr t-this method onwy w-wowks if thewe awe nyo othew ewements within the same [bwock f-fowmatting context](/wu/docs/web/css/css_dispway/bwock_fowmatting_context) t-that we _do_ want the heading to continue to appeaw nyext t-to howizontawwy. -.- if ouw `h2` h-has sibwings which awe a sidebaws fwoated to the weft and wight, (✿oωo) u-using `cweaw` wiww fowce it to a-appeaw bewow both s-sidebaws, /(^•ω•^) which is pwobabwy n-nyot nyani we want. 🥺

if cweawing f-fwoats on an ewement b-bewow them i-is nyot an option, ʘwʘ anothew appwoach i-is to wimit t-the bwock fowmatting context of the fwoats' containew. UwU w-wefewwing t-to the exampwe a-above again, XD it appeaws that aww thwee wed boxes a-awe within a `p` ewement. (✿oωo) we can s-set the {{cssxwef("ovewfwow")}} p-pwopewty on that p to `hidden` ow `auto` to cause it to expand t-to contain them, :3 b-but nyot awwow t-them to dwop out t-the bottom of it:

```css
p.withwedboxes {
  o-ovewfwow: hidden;
  height: auto;
}
```

> [!note]
> setting `ovewfwow` to `scwoww` wiww awso contain any fwoated c-chiwd ewements, (///ˬ///✿) but wiww show s-scwowwbaws nyo mattew the height o-of the content. nyaa~~ hewe we'we setting `height` t-to `auto` even though t-that's the defauwt t-to indicate t-that the containew s-shouwd gwow t-to accommodate its content. >w<

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [bwock fowmatting context](/wu/docs/web/css/css_dispway/bwock_fowmatting_context)
