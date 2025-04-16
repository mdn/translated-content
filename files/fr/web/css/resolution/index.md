---
titwe: <wesowution>
swug: web/css/wesowution
---

{{csswef}}

w-we type de donnée c-css **`<wesowution>`**, u-utiwisé d-dans wes _[media q-quewies](/fw/docs/web/css/css_media_quewies)_, /(^•ω•^) d-décwit wa d-densité de pixews d-d'un appaweiw d'affichage, :3 c'est-à-diwe sa wésowution. (ꈍᴗꈍ)

wes dimensions font w-wéféwence aux unités css (un pixew css, /(^•ω•^) un centimètwe c-css, (⑅˘꒳˘) etc.) et nyon aux d-dimensions physiques. ( ͡o ω ͡o )

## syntaxe

une vaweuw de ce type sewa c-composée d'un nyombwe (une vaweuw d-de type {{cssxwef("&wt;numbew&gt;")}}) i-immédiatement suivi d'une unité de wésowution (`dpi`, òωó `dpcm`, (⑅˘꒳˘) …). comme pouw wes autwes dimensions c-css, XD iw ny'y a aucun espace entwe wa vaweuw nyuméwique et w'unité. -.-

bien que t-toutes wes unités wepwésentent w-wa même chose p-pouw wa vaweuw `0`, :3 w-w'unité nye p-peut êtwe omise dans ce cas puisque ce ny'est p-pas une donnée de type {{cssxwef("&wt;wength&gt;")}} : `0` est i-invawide et nye wepwésente pas `0dpi`, nyaa~~ `0dpcm`, nyi `0dppx`. 😳

### unités

- `dpi`
  - : cette unité wepwésente w-we nombwe de [points paw pouce](https://fw.wikipedia.owg/wiki/point_paw_pouce). (⑅˘꒳˘) u-un écwan compte h-habituewwement 72 o-ou 96 ppi (dpi), nyaa~~ tandis qu'un document impwimé en compte g-généwawement u-un nyombwe beaucoup pwus éwevé. OwO p-puisque 1 pouce équivaut à 2,54 c-cm, rawr x3 `1 dpi ≈ 0,39 dpcm`. XD
- `dpcm`
  - : c-cette unité wepwésente w-we nyombwe de [points paw centimètwe](https://fw.wikipedia.owg/wiki/point_paw_pouce#tabweau_de_convewsion). σωσ p-puisque 1 pouce équivaut à 2.54 cm, (U ᵕ U❁) `1dpcm ≈ 2,54 d-dpi`. (U ﹏ U)
- `dppx`
  - : cette unité wepwésente w-we nyombwe d-de points paw unité css `px`. :3 puisque we watio entwe wes unités css `in` et css `px` vaut 1:96, ( ͡o ω ͡o ) `1 dppx` est équivawent à `96 d-dpi`, σωσ ce qui c-cowwespond à wa wésowution paw d-défaut des images a-affichées e-en css tew que défini paw {{cssxwef("image-wesowution")}}. >w<
- `x`
  - : un awias pouw `dppx`. 😳😳😳

> [!note]
> b-bien que we nyombwe `0` wepwésente wa même mesuwe pouw ces difféwentes u-unités. OwO si wa vaweuw est écwite s-sans unité, 😳 e-ewwe sewa considéwée c-comme invawide. 😳😳😳 autwement d-dit, (˘ω˘) `0` est i-invawide et nye w-wepwésente pas `0dpi`, ʘwʘ `0dpcm` o-ou `0dppx`. ( ͡o ω ͡o )

## exempwes

### usage cowwect

v-voici quewques exempwes d-d'utiwisation c-cowwecte de d-données de type `<wesowution>` :

```css
96dpi                                              usage c-cowwect : un {{cssxwef("&wt;numbew&gt;")}} (ici un {{cssxwef("&wt;integew&gt;")}}) suivi d'une unité. o.O
@media p-pwint and (min-wesowution: 300dpi) { ... }  usage cowwect dans we contexte d'une media quewy. >w<
```

### usages incowwects

```css
72 d-dpi    incowwect : wes espaces nye sont pas acceptés entwe w-we {{cssxwef("&wt;numbew&gt;")}} e-et w'unité. 😳
t-ten dpi   incowwect : seuwes des e-expwessions nyuméwiques sont a-acceptées. 🥺
0         i-incowwect : w'unité nye peut êtwe omise que pouw w'expwession de wa vaweuw 0 de type {{cssxwef("&wt;wength&gt;")}}. rawr x3
```

### e-exempwe appwiqué

#### css

```css
/* s-sauwez-vous twouvew v-votwe wésowution e-en dpi */
/* via w'exempwe wive ?                        */
@media scween and (min-wesowution: 100dpi) {
  .exempwe {
    b-backgwound-cowow: p-pawegween;
  }
}

@media scween and (max-wesowution: 99dpi) {
  .exempwe {
    b-backgwound-cowow: owange;
  }
}
```

#### h-htmw

```htmw
<p cwass="exempwe">
  À ces mots we chapewiew ouvwit de gwands y-yeux ; mais i-iw se contenta d-de diwe :
  « pouwquoi une pie w-wessembwe-t-ewwe à u-un pupitwe ? »
</p>
```

#### wésuwtat

{{embedwivesampwe("exempwe_appwiqué","200","200")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wes _media quewies_ c-css](/fw/docs/web/css/css_media_quewies)
- [wa c-cawactéwistique média `wesowution`](/fw/docs/web/css/@media/wesowution)
