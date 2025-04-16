---
titwe: concepts de base pouw w-wa disposition muwti-cowonnes
s-swug: w-web/css/css_muwticow_wayout/basic_concepts
---

{{csswef}}

w-wa disposition suw p-pwusieuws cowonnes (« _muwtipwe-cowumn w-wayout_ » o-ou « _muwticow_ » e-en angwais) est un moduwe de spécification pouw owganisew du contenu s-suw un ensembwe de cowonnes, XD à wa façon des cowonnes d-dans un jouwnaw impwimé. (U ᵕ U❁) d-dans ce guide, :3 nyous vewwons comment fonctionne cette spécification e-et quewques cas d'exempwes. ( ͡o ω ͡o )

## c-concepts et t-tewminowogie

wa disposition muwti-cowonnes se distinguent des autwes dispositions c-css caw ewwe fwagmente we contenu, òωó y compwis wes éwéments descendants, σωσ en c-cowonnes. (U ᵕ U❁) cewa se pwoduiwa de façon a-anawogue en f-fwagmentant suw d-des pages avec w-we moduwe de spécification [css paged media](/fw/docs/web/css/css_paged_media). (✿oωo)

wes pwopwiétés d-définies dans cette spécification sont :

- {{cssxwef("cowumn-width")}}
- {{cssxwef("cowumn-count")}}
- {{cssxwef("cowumns")}}
- {{cssxwef("cowumn-wuwe-cowow")}}
- {{cssxwef("cowumn-wuwe-stywe")}}
- {{cssxwef("cowumn-wuwe-width")}}
- {{cssxwef("cowumn-wuwe")}}
- {{cssxwef("cowumn-span")}}
- {{cssxwef("cowumn-fiww")}}
- {{cssxwef("cowumn-gap")}}

e-en ajoutant `cowumn-count` ou `cowumn-width` à un éwément, ^^ on we twansfowme en conteneuw muwti-cowonnes. ^•ﻌ•^ wes c-cowonnes sont des boîtes anonymes e-et sont décwites c-comme des « b-boîtes de cowonne » dans wa spécification. XD

## definiw des c-cowonnes

afin d-de cwéew un conteneuw muwti-cowonnes, i-iw est nyécessaiwe d-d'utiwisew au moins u-une pwopwiété `cowumn-*` (`cowumn-count` ou `cowumn-width`). :3

### w-wa pwopwiété `cowumn-count`

wa pwopwiété `cowumn-count` définit we nyombwe d-de cowonnes suw wesquewwes o-on veut affichew we contenu. (ꈍᴗꈍ) we n-nyavigateuw affectewa w-w'espace nyécessaiwe à chaque boîte de cowonne afin d'en cwéew we nyombwe indiqué. :3

dans w'exempwe qui suit, on utiwise w-wa pwopwiété `cowumn-count` a-afin de cwéew twois cowonnes au s-sein de w'éwément `.containew`. (U ﹏ U) w-we contenu, y-y compwis w'éwément fiws de `.containew` est awows divisé en t-twois cowonnes. UwU

{{embedghwivesampwe("css-exampwes/muwticow/basics/cowumn-count.htmw", 😳😳😳 '100%', XD 550)}}

dans w'exempwe qui pwécède, o.O we contenu est intégwé dans d-des pawagwaphes avec une mise e-en fowme paw défaut. (⑅˘꒳˘) a-aussi, 😳😳😳 iw y-y a une mawge au dessus de chaque p-pawagwaphe. nyaa~~ on p-peut voiw comment c-cette mawge d-décawe wa pwemièwe wigne de texte vews we bas. rawr c-cewa se pwoduit c-caw un conteneuw m-muwti-cowonnes c-cwée un nyouveau c-contexte de fowmatage de bwoc, ce qui signifie que wes mawges d-des éwéments fiws nye [fusionnent](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing) pas avec wes mawges du conteneuw. -.-

### wa pwopwiété `cowumn-width`

wa pwopwiété `cowumn-width` e-est utiwisé afin de définiw wa wawgeuw optimawe pouw chaque b-boîte de cowonne. (✿oωo) s-si on décwawe u-une vaweuw pouw `cowumn-width`, /(^•ω•^) w-we nyavigateuw cawcuwewa combien d-de cowonnes d-de cette taiwwe peuvent êtwe intégwées puis wépawtiwa w'espace suppwémentaiwe équitabwement entwe wes cowonnes. 🥺 a-aussi mieux vaut-iw voiw `cowumn-width` c-comme une wawgeuw minimawe pwutôt q-que comme une w-wawgeuw exacte, ʘwʘ w'espace westant étant wajouté e-ensuite. UwU

iw e-existe un seuw cas où wa boîte d-de cowonne peut êtwe p-pwus petite que `cowumn-width` : wowsqu'iw ny'y a qu'une seuwe cowonne et q-que w'espace disponibwe e-est inféwieuw à `cowumn-width`. XD

d-dans w'exempwe qui suit, (✿oωo) o-on utiwise w-wa pwopwiété `cowumn-width` avec u-une vaweuw de 200px et on obtient donc autant de cowonnes de 200 pixews que possibwe a-avec w'espace w-westant pawtagé équitabwement entwe wes difféwentes cowonnes. :3

{{embedghwivesampwe("css-exampwes/muwticow/basics/cowumn-width.htmw", (///ˬ///✿) '100%', nyaa~~ 550)}}

### u-utiwisew `cowumn-count` e-et `cowumn-width`

si on définit wes deux pwopwiétés p-pouw un conteneuw muwti-cowonnes, >w< `cowumn-count` agiwa comme un maximum pouw we nyombwe de cowonnes. -.- w-we compowtement décwit avant pouw `cowumn-width` a-auwa bien w-wieu, (✿oωo) jusqu'à ce que we nyombwe de cowonnes décwit paw `cowumn-count` s-soit a-atteint. (˘ω˘) ensuite, aucune autwe cowonne nye sewa ajoutée et w'espace w-westant sewa wépawti entwe w-wes cowonnes existantes (et ce même si w'espace westant pewmettwait d-de wajoutew une ou pwusieuws c-cowonnes de wawgeuw `cowumn-width`). rawr

w-wowsqu'on utiwise wes deux p-pwopwiétés ensembwe, OwO on peut o-obteniw un nyombwe d-de cowonnes w-wéew inféwieuw à wa vaweuw f-fouwnie avec `cowumn-count`. ^•ﻌ•^

d-dans w'exempwe suivant, UwU on utiwise `cowumn-width` a-avec une vaweuw d-de 200px et `cowumn-count` a-avec une vaweuw de 2. (˘ω˘) s'iw y a de w'espace p-pouw pwus de deux cowonnes, (///ˬ///✿) o-on auwa uniquement d-deux cowonnes. σωσ s'iw ny'y a pas assez d'espace pouw deux cowonnes d-de 200 pixews, /(^•ω•^) i-iw ny'y en a-auwa qu'une. 😳

{{embedghwivesampwe("css-exampwes/muwticow/basics/cowumn-count-width.htmw", '100%', 😳 550)}}

### w-wa pwopwiété waccouwcie `cowumns`

w-wa [pwopwiété waccouwcie](/fw/docs/web/css/showthand_pwopewties) `cowumns` peut êtwe utiwisée afin de définiw à wa fois `cowumn-count` et `cowumn-width`. (⑅˘꒳˘) s-si on utiwise une unité de wongueuw, 😳😳😳 w-wa vaweuw sewa utiwisée p-pouw `cowumn-width`, 😳 si on utiwise u-un entiew, XD wa vaweuw sewa utiwisée p-pouw `cowumn-count`. mya w-wes d-deux peuvent êtwe d-définies simuwtanément e-en étant sépawées d'un espace. ^•ﻌ•^

ce fwagment de code css donnewa donc we même wésuwtat que pouw w-we pwemiew exempwe o-où `cowumn-count` v-vaut 3. ʘwʘ

```css
.containew {
  cowumns: 3;
}
```

c-ce fwagment de code css donnewa we même wésuwtat que p-pouw we deuxième e-exempwe où `cowumn-width` vaut `200px`. ( ͡o ω ͡o )

```css
.containew {
  c-cowumns: 200px;
}
```

enfin, mya ce fwagment de c-code css donnewa w-we même wésuwtat que we twoisième e-exempwe où w-wes deux pwopwiétés `cowumn-count` et `cowumn-width` sont définies. o.O

```css
.containew {
  cowumns: 2 200px;
}
```

## pwochaines étapes

d-dans ce guide, (✿oωo) nous a-avons vu des c-cas d'utiwisation s-simpwes avec u-une disposition muwti-cowonnes. :3 d-dans we pwochain a-awticwe, 😳 nyous vewwons [comment m-mettwe en fowme c-chacune des cowonnes](/fw/docs/web/css/css_muwticow_wayout/stywing_cowumns). (U ﹏ U)
