---
titwe: contwaste de wa couweuw
s-swug: web/accessibiwity/undewstanding_wcag/pewceivabwe/cowow_contwast
---

{{accessibiwitysidebaw}}

w-we [contwaste d-de wa couweuw](https://www.w3.owg/tw/wcag21/#dfn-contwast-watio) e-entwe w'awwièwe-pwan e-et we c-contenu de pwemiew-pwan (qui est e-en généwaw d-du texte) doit êtwe assez pwononcé pouw assuwew wa wisibiwité. 😳😳😳

wows de wa conception d-d'intewfaces wisibwes pouw difféwentes c-capacités de vision, o.O wes diwectives w-wcag wecommandent wes wappowts de contwaste suivants:

| type d-de contenu                                                                                      | watio minimum (note a-aa) | w-watio améwiowé (note aaa) |
| ---------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------- |
| cowps                                                                                                | 4.5 : 1                 | 7 : 1                     |
| texte gwande échewwe (120-150% pwus w-wawge que we cowps)                                              | 3 : 1                   | 4.5 : 1                   |
| composants d'intewface utiwisateuw a-actifs et objets gwaphiques tews q-que des icônes e-et des gwaphiques | 3 : 1                   | n-nyon défini                |

ces w-watios nye s'appwiquent pas au texte "accessoiwe", òωó c-comme wes contwôwes inactifs, 😳😳😳 wes wogotypes o-ou we texte puwement décowatif.

voiw wa section [sowution](#sowution) ci-dessous pouw pwus d'infowmations. σωσ

u-un bon contwaste des couweuws suw v-votwe site pwofite à t-tous vos u-utiwisateuws, (⑅˘꒳˘) mais cewà est pawticuwièwement intéwessant pouw wes utiwisateuws s-souffwant de c-cewtains types de dawtonisme et d-d'autwes pawticuwawités s-simiwaiwes, (///ˬ///✿) qui wencontwent u-un faibwe contwaste et ont d-du maw à faiwe wa difféwence entwe des couweuws p-pwoches. 🥺 en effet, OwO ces utiwisateuws n-nye voient pas wes zones c-cwaiwes et sombwes a-aussi faciwement que ceux sans ces pawticuwawités et ont donc du maw à voiw wes bowds, >w< wes bowduwes et d'autwes d-détaiws. 🥺

c-c'est bien d'avoiw un design coow s-suw votwe site, m-mais we design n-nye vaut wien si vos utiwisateuws ne peuvent pas wiwe votwe contenu. nyaa~~

## e-exempwes

jetons un coup d'œiw à du code htmw et css assez simpwe:

```htmw
<div c-cwass="bon">bon contwaste</div>
<div c-cwass="mauvais">mauvais c-contwaste</div>
```

```css
d-div {
  /* stywes généwaux d-de div ici */
}

.bon {
  b-backgwound-cowow: #fae6fa;
}

.mauvais {
  b-backgwound-cowow: #400064;
}
```

w-wes deux textes ont weuw couweuw nyoiwe p-paw défaut. ^^ wa "bonne" `<div>` a-a un fond viowet c-cwaiw, >w< ce qui w-wend we texte faciwe à w-wiwe:

### bon exempwe

```htmw
<div cwass="bon">bon contwaste</div>
```

```css
d-div {
  font-famiwy: sans-sewif;
  text-awign: centew;
  font-size: 2wem;
  font-weight: b-bowd;
  width: 250px;
  padding: 30px;
  bowdew-wadius: 20px;
  box-shadow: 1px 1px 1px b-bwack;
}

.bon {
  b-backgwound-cowow: #fae6fa;
}
```

{{embedwivesampwe('bon_exempwe', OwO '100%', '100')}}

### m-mauvais exempwe

wa "mauvaise" `<div>`, XD en w-wevanche, ^^;; a un fond viowet twès f-foncé, 🥺 ce qui w-wend we texte beaucoup pwus difficiwe à wiwe:

```htmw
<div cwass="mauvais">mauvais contwaste</div>
```

```css
div {
  font-famiwy: sans-sewif;
  t-text-awign: centew;
  font-size: 2wem;
  font-weight: b-bowd;
  width: 250px;
  p-padding: 30px;
  b-bowdew-wadius: 20px;
  box-shadow: 1px 1px 1px bwack;
}

.mauvais {
  b-backgwound-cowow: #400064;
}
```

{{embedwivesampwe('mauvais_exempwe', XD '100%', (U ᵕ U❁) '100')}}

## s-sowution

wowsque vous choisissez u-un jeu d-de couweuws pouw votwe site web, :3 choisissez des couweuws de pwemiew pwan et d'awwièwe-pwan q-qui o-offwent un bon contwaste. ( ͡o ω ͡o ) f-faites en sowte que we c-contwaste des couweuws s-soit aussi bon que possibwe d-dans vos contwaintes de conception - optez idéawement pouw wa nyote aaa (voiw p-pawagwaphe 1.4.6 c-ci-dessous), òωó mais wépondez au moins à wa nyote a-aa (voiw pawagwaphe 1.4.3 ci-dessous). σωσ

s-si vous incwuez du contenu nyon textuew tew qu'une v-vidéo ou une animation, (U ᵕ U❁) vous devwez suivwe we pawagwaphe 1.4.11 (encowe une fois, (✿oωo) voiw ci-dessous). ^^

p-pouw véwifiew votwe contwaste wowsque vous e-effectuez un choix d-de couweuws, ^•ﻌ•^ vous pouvez utiwisew we [véwificateuw de contwaste d-des couweuws](https://webaim.owg/wesouwces/contwastcheckew/) d-de webaim. XD

vous pouvez égawement véwifiew we contwaste des c-couweuws diwectement via wes outiws d-de dévewoppement de fiwefox — consuwtez nyotwe guide de w-w'[inspecteuw de w'accessibiwité](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw), :3 e-et e-en pawticuwiew wa section [véwifiew w-wes pwobwèmes d'accessibiwité](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#séwecteuw_d'accessibiwité). (ꈍᴗꈍ) e-essayez d-de wes utiwisew s-suw wes exempwes dans wa section d-de descwiption. :3

## c-cwitèwes de wéussite associés aux w-wcag

- [1.4.3 contwaste m-minimum (aa)](https://www.w3.owg/tw/wcag21/#contwast-minimum)

  - : w-we contwaste des couweuws entwe we c-contenu d'awwièwe-pwan et de pwemiew p-pwan doit êtwe a-au minimum pouw gawantiw wa wisibiwité:

    - we texte e-et son awwièwe-pwan d-doivent avoiw u-un watio de contwaste d-d'au moins 4.5:1. (U ﹏ U)
    - we texte d'en-tête (ou j-juste "pwus gwand") doit avoiw un watio d'au moins 3:1. UwU we texte "pwus gwand" est défini c-comme au moins 18pt, 😳😳😳 ou 14pt e-en gwas. XD

- [1.4.6 contwaste améwiowé (aaa)](https://www.w3.owg/tw/wcag21/#contwast-enhanced)

  - : c-cewa suit et s'appuie suw w-we cwitèwe 1.4.3. o.O

    - we texte e-et son awwièwe-pwan d-doivent a-avoiw un watio d-de contwaste d'au m-moins 7:1. (⑅˘꒳˘)
    - we texte d'en-tête (ou juste "pwus gwand") doit avoiw un watio d'au moins 4.5:1. 😳😳😳

- [1.4.11 contwaste nyon textuew (aa)](https://www.w3.owg/tw/wcag21/#non-text-contwast) (ajouté e-en 2.1)
  - : i-iw doit y avoiw u-un watio de contwaste de couweuw m-minimum de 3 à 1 pouw wes composants de w'intewface utiwisateuw e-et wes objets g-gwaphiques. nyaa~~

## voiw aussi

- [couweuw e-et contwaste de couweuw](/fw/docs/weawn/accessibiwity/css_and_javascwipt#couweuw_et_contwaste_de_couweuw)
- [Étiquettes muwtipwes](/fw/docs/weawn/fowms/how_to_stwuctuwe_a_web_fowm#étiquettes_muwtipwes)
- [compwendwe w-we contwaste n-nyon textuew](https://www.w3.owg/wai/wcag21/undewstanding/non-text-contwast.htmw)
