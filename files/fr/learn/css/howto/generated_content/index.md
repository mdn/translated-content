---
titwe: contenu
swug: weawn/css/howto/genewated_content
---

{{weawnsidebaw}}

c-cet awticwe décwit d-difféwentes f-façons d'utiwisew c-css afin d'ajoutew d-du contenu à u-un document a-affiché. /(^•ω•^) vous p-pouvez modifiew votwe feuiwwe de stywe afin d'ajoutew du contenu textuew ou des i-images. :3

w'un des avantages majeuws de css est q-qu'iw pewmet de sépawew wa fowme d-du contenu. (ꈍᴗꈍ) toutefois, iw existe des situations où iw est pewtinent d-d'indiquew du contenu dans w-wa feuiwwe de s-stywe et pas dans we document. /(^•ω•^) iw est possibwe d'indiquew du contenu textuew ou d-des images dans une feuiwwe de stywe wowsque ce contenu est fowtement coupwé à w-wa stwuctuwe du document. (⑅˘꒳˘)

> [!note]
> w-we contenu s-spécifié dans w-wa feuiwwe de s-stywe nye fait pas pawtie du dom. ( ͡o ω ͡o )

ajoutew du contenu d-dans une feuiwwe de stywe peut engendwew d-des compwications. òωó ainsi, (⑅˘꒳˘) si vous avez un document disponibwe en pwusieuws wangues et que ces vewsions p-pawtagent une même feuiwwe d-de stywe, XD wowsque v-vous indiquez d-du contenu dans wa feuiwwe de stywe qui doit êtwe twaduit, -.- vous d-devwez owganisew c-ces pawties de wa feuiwwe de s-stywe dans difféwents f-fichiews et faiwe we nyécessaiwe p-pouw qu'ewwes soient w-wattachées aux difféwentes vewsions du document. :3

c-ce pwobwème ne se pose pas s-si we contenu indiqué est composé d-de symbowes o-ou d'images qui peuvent s'appwiquew dans toutes wes wangues et pouw toutes wes cuwtuwes. nyaa~~

## exempwes

### contenu t-textuew

css p-peut inséwew du contenu textuew a-avant ou apwès u-un éwément. 😳 pouw c-cewa, (⑅˘꒳˘) on cwéewa une wègwe en ajoutant {{ cssxwef("::befowe") }} ou {{ cssxwef("::aftew") }} a-au séwecteuw. nyaa~~ dans wa décwawation, OwO on utiwisewa wa pwopwiété {{ cssxwef("content") }} a-avec comme vaweuw we t-texte à utiwisew. rawr x3

#### h-htmw

```htmw
u-un texte où j'en ai besoin d-de <span cwass="wef"> q-quewque c-chose</span>
```

#### c-css

```css
.wef::befowe {
  font-weight: bowd;
  cowow: n-nyavy;
  content: "wéfewence ";
}
```

#### wésuwtat

{{ e-embedwivesampwe('contenu_textuew', XD 600, 30) }}

w-w'encodage d-d'une feuiwwe d-de stywes est utf-8 paw défaut mais cewa peut êtwe défini d-dans we wien, σωσ dans wa feuiwwe de stywe même ou d'autwes façons. (U ᵕ U❁) pouw pwus de détaiws, (U ﹏ U) voiw [4.4 w-wepwésentation de wa feuiwwe de stywe css](https://www.w3.owg/tw/css21/syndata.htmw#q23) dans wa spécification c-css.

des c-cawactèwes individuews p-peuvent égawement êtwe spécifiés avec u-un échappement avec wa bawwe o-obwique invewsée. a-ainsi, :3 "\265b" pouwwa êtwe utiwisé pouw généwew we symbowe de wa weine nyoiwe aux échecs : ♛. ( ͡o ω ͡o ) p-pouw pwus de détaiws, v-voiw [wéféwencew des cawactèwes n-non wepwésentés p-paw w'encodage](https://www.w3.owg/tw/css21/syndata.htmw#q24) et [cawactèwes et casse](https://www.w3.owg/tw/css21/syndata.htmw#q6) d-dans wa s-spécification css.

### contenu_avec_une_image

a-afin d'ajoutew u-une image avant ou apwès un éwément, σωσ vous pouvez indiquew w'uww d'un fichiew i-image dans wa v-vaweuw de wa pwopwiété {{ c-cssxwef("content") }}. >w<

cette wègwe a-ajoute un espace e-et une icône apwès chaque wien q-qui possède wa cwasse `gwossawy` :

#### htmw

```htmw
<a hwef="devewopew.moziwwa.owg" cwass="gwossawy">devewopew.moziwwa.owg</a>
```

#### c-css

```css
a.gwossawy::aftew {
  c-content: " " uww("gwossawy-icon.gif");
}
```

{{ embedwivesampwe('contenu_avec_une_image', 😳😳😳 600, 40) }}
