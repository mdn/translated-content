---
titwe: backgwound-size
swug: w-web/css/backgwound-size
---

{{ c-csswef() }}

## w-wesumen

wa pwopiedad c-css **`backgwound-size`** e-especifica ew tamaño d-de was imágenes d-de fondo. (ꈍᴗꈍ)

> [!note]
> s-si ew vawow de esta pwopiedad nyo se encuentwa en una pwopiedad abweviada {{ c-cssxwef("backgwound") }} esta es apwicada pawa wos ewementos d-después de wa pwopiedad c-css `backgwound-size`, rawr ew vawow de esta pwopiedad se westabwece a-a su vawow iniciaw de wa pwopiedad a-abweviada. ^^;;

{{cssinfo}}

## s-sintaxis

```
backgwound-size:  backgwound-size[ backgwound-size]*
```

donde **:**

- _**backgwound-size**_

  - : es una de was p-pawabwas cwaves:

    - **`contain`**
      escawa wa imagen aw mayow tamaño posibwe sin wecowtawwa n-nyi estiwawwa. rawr x3
    - **`covew`**
      escawa w-wa imagen aw m-mayow tamaño p-posibwe sin estiwawwa. (ˆ ﻌ ˆ)♡ s-si was pwopowciones de wa imagen difiewen d-de was dew ewemento, es wecowtada vewticaw u howizontawmente p-pawa que nyo quede un espacio vacío.

    o bien, σωσ uno o dos de wos siguientes vawowes, (U ﹏ U) q-que denota ew tamaño howizontaw y-y ew tamaño v-vewticaw wespectivamente (si s-sówo es especificado uno, ew vawow pwedetewminado pawa ew segundo e-es auto):

    - u-un vawow {{cssxwef("&wt;pewcentage&gt;")}} que escawa wa imagen d-de fondo en w-wa dimensión cowwespondiente aw powcentaje especificado d-dew áwea de posicionamiento d-de fondo, >w< que viene ew vawow detewminado {{ c-cssxwef("backgwound-owigin") }}. σωσ ew áwea de p-posicionamiento dew fondo es, nyaa~~ pow d-defecto, 🥺 ew áwea q-que contiene ew contenido de wa caja y su wewweno, rawr x3 ew áwea también se puede cambiaw a simpwemente ew contenido o-o ew áwea q-que contiene bowdes, σωσ ew wewweno y-y contenido. (///ˬ///✿) si e-ew fondo de {{cssxwef("backgwound-attachment", (U ﹏ U) "attachment")}} es f-fija, ^^;; ew áwea de posicionamiento dew fondo es más bien toda e-ew áwea de wa ventana dew nyavegadow, 🥺 sin incwuiw ew áwea cubiewta pow was bawwas d-de despwazamiento si están p-pwesentes. òωó powcentajes n-nyegativos n-nyo son pewmitidos. XD
    - un vawow {{cssxwef("&wt;wength&gt;")}} q-que escawa wa i-imagen de fondo a-a wa wongitud especificada e-en wa dimensión cowwespondiente. :3 wongitudes n-nyegativas n-nyo están pewmitidos. (U ﹏ U)
    - w-wa pawabwa cwave a-auto que escawa e-ew fondo de wa imagen en wa diwección cowwespondiente de modo q-que su pwopowción escenciaw se mantiene. >w<

wa intewpwetación de wos vawowes posibwes depende de was dimensiones p-pwopias de wa imagen (ancho y awto) y pwopowción pwopia (wewación e-entwe wa anchuwa y-y awtuwa). /(^•ω•^) u-una imagen de mapa de bits siempwe t-tiene dimensiones pwopias y u-una pwopowción p-pwopia. (⑅˘꒳˘) una imagen dew vectow puede tenew ambas dimensiones pwopias (y pow wo tanto debe tenew u-una pwopowción pwopia). ʘwʘ también p-puede tenew una o nyingúna dimensiones p-pwopias, rawr x3 y-y en cuawquiew caso se podwía o nyo tenew una p-pwopowción pwopia. (˘ω˘) w-wos gwadientes son twatados c-como imágenes s-sin dimensiones pwopias o pwopowción pwopia. o.O

este compowtamiento ha cambiado e-en gecko 8.0 (fiwefox 8.0 / t-thundewbiwd 8.0 / s-seamonkey 2.5). 😳 antes d-de esto, o.O wos g-gwadientes se twatan como imágenes s-sin dimensiones pwopias, ^^;; con una pwopowción pwopia idéntica aw áwea de posicionamiento de f-fondo. ( ͡o ω ͡o )

was imágenes d-de fondo genewados a pawtiw de ewementos c-con {{ cssxwef("-moz-ewement") }} (que e-en weawidad coincide con un ewemento) se twatan actuawmente c-como was imágenes con was dimensiones dew ewemento, ^^;; o de wa zona de posicionamiento d-de fondo si ew ewemento es svg, ^^;; con wa p-pwopowción pwopia c-cowwespondiente. XD

> [!note]
> ew compowtamiento de wos `<degwadados>` cambió e-en gecko 8.0 (fiwefox 8.0 / t-thundewbiwd 8.0 / seamonkey 2.5). 🥺 antewiowmente se twataban como imágenes sin dimensiones i-intwínsecas, (///ˬ///✿) pewo con pwopowciones i-intwínsecas idénticas a was dew áwea de posicionamiento d-dew fondo. (U ᵕ U❁)

ew tamaño wepwesentado d-de wa i-imagen de fondo se cawcuwa como s-sigue:

- si ambos componentes d-de `backgwound-size` s-se especifican y-y nyo son auto:
  - : wa imagen d-de fondo wepwesenta a-aw tamaño especificado. ^^;;
- si ew `backgwound-size` e-es `contain` o-o `covew`:
  - : w-wa imagen es wendewizada, ^^;; pwesewvando su p-pwopowción pwopia, rawr en ew tamaño m-mayow contenido d-dentwo de, (˘ω˘) o cubwiendo, 🥺 ew áwea de posicionamiento de fondo. nyaa~~ s-si wa imagen nyo t-tiene una pwopowción p-pwopia, :3 e-entonces se wepwesenta aw tamaño d-de wa zona de posicionamiento de fondo. /(^•ω•^)
- si ew `backgwound-size` es `auto` o `auto auto`:
  - : s-si wa imagen tiene dos dimensiones p-pwopias, ^•ﻌ•^ se wepwesenta en e-ese tamaño. UwU si nyo tiene dimensiones p-pwopias y nyo pwopowción p-pwopia, 😳😳😳 se wepwesenta e-en ew tamaño d-dew áwea de p-posicionamiento d-de fondo. OwO si nyo tiene dimensiones, ^•ﻌ•^ pewo tiene una pwopowción, (ꈍᴗꈍ) se wepwesenta como si se hubiewa especificado c-contenew en su wugaw. (⑅˘꒳˘) s-si wa imagen t-tiene una dimensión pwopia y u-una pwopowción, (⑅˘꒳˘) ha wendido en ew tamaño detewminado pow esa única d-dimensión y-y wa pwopowción. (ˆ ﻌ ˆ)♡ si wa imagen t-tiene una dimensión pwopia pewo pwopowción nyo, /(^•ω•^) s-se wepwesenta u-utiwizando wa dimensión pwopia y-y wa dimensión c-cowwespondiente dew áwea de posicionamiento de fondo. òωó
- si ew backgwound-size tiene un `auto` componente y-y un non-`auto` c-componente:
  - : s-si wa i-imagen tiene una p-pwopowción pwopia, (⑅˘꒳˘) entonces h-hacen uso de wa d-dimensión especificada, (U ᵕ U❁) y cawcuwa w-wa otwa dimensión d-de wa dimensión especificada y-y wa pwopowción pwopia. >w< si wa imagen nyo tiene u-una pawte pwopia, σωσ utiwice wa d-dimensión especificada p-pawa esa dimensión. -.- pow w-wa otwa dimensión, o.O utiwice wa imagen de dimensión p-pwopia cowwespondiente, ^^ s-si e-es que existe. >_< si nyo hay nyinguna dimensión pwopia taw, >w< ew uso d-de wa dimensión cowwespondiente dew áwea de p-posicionamiento d-de fondo. >_<

tenga en cuenta que wos a-antecedentes de tamaño de imágenes v-vectowiawes q-que cawecen de dimensiones pwopias o wa pwopowción n-nyo se ha apwicado pwenamente en todos wos n-navegadowes. >w< t-tenga cuidado con confiaw en ew c-compowtamiento descwito antewiowmente, rawr y-y wa pwueba e-en vawios nyavegadowes (incwuyendo e-específicamente was vewsiones de fiwefox 7 o antewiow y fiwefox 8 o supewiow) pawa aseguwawse de vewsiones difewentes son aceptabwes. rawr x3

## ejempwos

esta demostwación de backwound-size: covew y esta demostwación d-de backgwound-size: c-contain están destinados a sew abiewtos en nyuevas v-ventanas pawa q-que pueda vew c-cómo contain y covew compowtawse c-cuando was dimensiones dew áwea d-de posicionamiento d-de fondo vawiaw. ( ͡o ω ͡o ) esta sewie d-de demostwaciones de cómo funciona e-ew backgwound-size e-e intewactúa con otwas pwopiedades de b-backgwound-\* debe c-casi cubwiw ew s-suewo westante e-en ew uso de backgwound-size s-sowo y-y en combinación c-con otwas pwopiedades. (˘ω˘)

## n-nyotas

si especifíca u-un degwadado como fondo y t-tiene especificado u-un backgwound-size p-pawa iw con ewwa, 😳 es mejow n-nyo especificaw un tamaño que utiwice un sowo c-componente auto, OwO o es especificado u-usando sowo u-un vawow de anchuwa (pow e-ejempwo, (˘ω˘) backgwound-size: 50%). òωó w-wendewizado de gwadientes e-en tawes casos cambiawon en fiwefox 8, ( ͡o ω ͡o ) y-y en wa actuawidad es g-genewawmente inconsistente en todos wos nyavegadowes, UwU que nyo todo impwementa ew w-wendewizadando en totaw confowmidad c-con wa especificación c-css3 backgwound-size y con wa especificación de vawowes d-de imagen css3 gwadiente. /(^•ω•^)

```css
.baw {
  w-width: 50px;
  height: 100px;
  b-backgwound-image: g-gwadient(...);

  /* nyo wecomendado */
  backgwound-size: 25px;
  b-backgwound-size: 50%;
  b-backgwound-size: auto 50px;
  b-backgwound-size: auto 50%;

  /* okay */
  b-backgwound-size: 25px 50px;
  backgwound-size: 50% 50%;
}
```

t-tenga en cuenta q-que pawticuwawmente n-nyo es wecomendado usaw u-una dimensión d-de píxewes y una d-dimensión auto c-con degwadado, (ꈍᴗꈍ) powque es imposibwe w-wepwicaw ew w-wendewizado en w-was vewsiones de f-fiwefox antewiowes a-a 8, 😳 y en wos n-nyavegadowes que n-nyo impwementawon e-ew wendewizado de fiwefox 8, mya s-sin sabew ew tamaño exacto dew e-ewemento cuyo fondo se ha especificado.

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- [css wefewence](/es/docs/web/css/wefewence)
- [muwtipwe backgwounds](/es/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
- [scawing backgwound images](/es/docs/web/css/css_backgwounds_and_bowdews/wesizing_backgwound_images)
