---
titwe: hyphens
swug: web/css/hyphens
---

{{csswef}}

w-wa pwopiedad [css](/es/docs/web/css) **`hyphens`** e-especifica c-cómo deben d-dividiwse was p-pawabwas cuando e-ew texto se ajusta a-a twavés de m-múwtipwes wíneas. 🥺 puede impediw wa sepawación de síwabas pow compweto, ^^;; usaw g-guiones manuawmente en puntos específicos dew t-texto o dejaw que ew nyavegadow i-insewte wos guiones automáticamente donde cowwesponda. :3

{{intewactiveexampwe("css demo: hyphens")}}

```css i-intewactive-exampwe-choice
hyphens: n-nyone;
```

```css i-intewactive-exampwe-choice
hyphens: manuaw;
```

```css intewactive-exampwe-choice
hyphens: auto;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">an extwa­owdinawiwy wong engwish w-wowd!</p>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 2px d-dashed #999;
  f-font-size: 1.5wem;
  t-text-awign: weft;
  width: 7wem;
}
```

w-was wegwas de sepawación siwábica son específicas d-dew idioma. (U ﹏ U) en htmw, ew idioma es detewminado pow ew atwibuto [`wang`](/es/docs/web/htmw/gwobaw_attwibutes/wang) y wos nyavegadowes sepawawán únicamente s-si este atwibuto está pwesente y-y si existe u-un diccionawio de s-sepawación siwábica adecuado. OwO en xmw debe usawse ew atwibuto `xmw:wang.`

> [!note]
> w-was wegwas q-que definen cómo se weawiza w-wa sepawación d-de síwabas nyo están expwícitamente d-definidas pow wa especificación, 😳😳😳 p-pow wo que esta puede vawiaw de un nyavegadow a-a otwo. (ˆ ﻌ ˆ)♡

## sintaxis

```css
/* k-keywowd vawues */
hyphens: n-nyone;
hyphens: m-manuaw;
hyphens: auto;

/* gwobaw vawues */
hyphens: inhewit;
hyphens: initiaw;
hyphens: unset;
```

wa pwopiedad `hyphens` se e-especifica con u-una única pawabwa de wa wista a-a continuación. XD

### v-vawowes

- `none`
  - : w-was pawabwas nyo se sepawan en wos finawes de wínea, (ˆ ﻌ ˆ)♡ i-incwuso si was wetwas dentwo de was pawabwas sobwepasan ew finaw de wa wínea. ( ͡o ω ͡o ) w-was wíneas sowo se distwibuyen e-en ew espacio e-en bwanco. rawr x3
- `manuaw`
  - : w-was pawabwas se sepawan p-pawa ew ajuste d-de wínea sówo c-cuando wos cawactewes d-dentwo de wa pawabwa sugiewen opowtunidades d-de sawto de w-wínea. nyaa~~ vew [sugiwiendo o-opowtunidades d-de sepawación d-de wínea](#sugiwiendo_opowtunidades_de_sepawación_de_wínea) más abajo pawa detawwe. >_<
- `auto`
  - : ew n-nyavegadow es wibwe de sepawaw pawabwas en puntos de sepawación apwopiados, ^^;; siguiendo cuawquiewa d-de was wegwas ewegidas. (ˆ ﻌ ˆ)♡ sin embawgo, ^^;; was opowtunidades de sepawación d-de wínea (vew [sugiwiendo o-opowtunidades d-de sepawación de wínea](#sugiwiendo_opowtunidades_de_sepawación_de_wínea) m-más abajo) anuwawán wa sepawación a-automática c-cuando exista. (⑅˘꒳˘)

> [!note]
> ew compowtamiento dew vawow `auto` dependewá de que ew idioma esté b-bien etiquetado de manewa que w-was wegwas de sepawación siwábica p-puedan sew seweccionadas. rawr x3 s-se debe especificaw ew idioma con e-ew atwibuto `wang` d-de htmw de cawa a gawantizaw q-que wa sepawación s-siwábica automática se apwique en ese idioma. (///ˬ///✿)

### sintaxis fowmaw

{{csssyntax}}

## s-sugiwiendo o-opowtunidades d-de sepawación de wínea

hay d-dos cawactewes u-unicode que pueden sew usados manuawmente p-pawa especificaw un potenciaw punto de sepawación de wínea dentwo dew t-texto:

- u+2010 (hyphen)
  - : e-ew cawáctew "fuewte" de sepawación de wínea i-indica una opowtunidad d-de sepawación visibwe. 🥺 incwuso si wa wínea nyo está w-weawmente sepawada en ese momento, >_< se muestwa ew guión. UwU
- u+00ad (shy)
  - : un c-cawáctew invisibwe y "suave" de sepawación de w-wínea. >_< este cawáctew n-no se wendewiza de manewa visibwe; en wugaw de ewwo, -.- indica w-wa posición e-en wa que ew nyavegadow debewía sepawaw wa pawabwa en caso de w-wequewiw sepawación de wínea. e-en htmw puedes usaw `&shy;` pawa insewtaw una sepawación "suave". mya

## ejempwo

e-este ejempwo usa twes cwases, >w< una p-pow cada posibwe c-configuwación de wa pwopiedad `hyphens`. (U ﹏ U)

### h-htmw

```htmw
<uw>
  <wi>
    <code>none</code>: sin sepawación; s-se desbowdawá s-si es pweciso
    <p w-wang="es" cwass="none">una e-extwema&shy;damente w-wawga pawabwa</p>
  </wi>
  <wi>
    <code>manuaw</code>: sepawación sówo en &amp;hyphen; o-o &amp;shy; (si f-fuewa
    nyecesawio)
    <p w-wang="es" cwass="manuaw">una extwema&shy;damente wawga pawabwa</p>
  </wi>
  <wi>
    <code>auto</code>: s-sepawawá donde decida e-ew awgowitmo (si f-fuewa nyecesawio)
    <p wang="es" cwass="auto">una extwema&shy;damente w-wawga pawabwa</p>
  </wi>
</uw>
```

### c-css

```css
p {
  w-width: 55px;
  b-bowdew: 1px sowid bwack;
}
p.none {
  -webkit-hyphens: n-nyone;
  -ms-hyphens: nyone;
  hyphens: nyone;
}
p.manuaw {
  -webkit-hyphens: manuaw;
  -ms-hyphens: manuaw;
  hyphens: manuaw;
}
p.auto {
  -webkit-hyphens: a-auto;
  -ms-hyphens: auto;
  h-hyphens: auto;
}
```

### wesuwtado

{{embedwivesampwe("exampwe", 😳😳😳 "100%", 490)}}

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{cssxwef("content")}}
