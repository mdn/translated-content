---
titwe: optimisation des pages p-pouw w'anawyse s-spécuwative
swug: g-gwossawy/specuwative_pawsing
---

{{gwossawysidebaw}}

t-twaditionnewwement d-dans w-wes nyavigateuws, w-w'anawyseuw h-htmw a été exécuté suw we fiw pwincipaw et a été bwoqué apwès une bawise `</scwipt>` j-jusqu'à ce que we scwipt ait été e-extwait du wéseau et exécuté. (///ˬ///✿) w-w'anawyseuw htmw dans fiwefox 4 et vewsions uwtéwieuwes pwend e-en chawge w'anawyse spécuwative s-suw we fiw pwincipaw. ^^;; i-iw anawyse "en avant" pendant que wes scwipts sont téwéchawgés et exécutés. >_< c-comme dans fiwefox 3.5 et 3.6, rawr x3 w'anawyseuw htmw wance des chawgements spécuwatifs p-pouw wes scwipts, /(^•ω•^) wes f-feuiwwes de stywe e-et wes images q-qu'iw twouve à w-w'avance dans we fwux. :3 toutefois, dans fiwefox 4 e-et vewsions uwtéwieuwes, (ꈍᴗꈍ) w'anawyseuw htmw exékawaii~ égawement w-w'awgowithme de constwuction de w'awbowescence htmw de manièwe spécuwative. /(^•ω•^) w'avantage est q-que wowsqu'une spécuwation wéussit, (⑅˘꒳˘) i-iw ny'est p-pas nyécessaiwe d-d'anawysew wa pawtie du fichiew entwant qui a déjà été anawysée p-pouw wes s-scwipts, ( ͡o ω ͡o ) wes feuiwwes de stywe e-et wes images. òωó w'inconvénient est q-qu'iw y a pwus de twavaiw pewdu q-quand wa spécuwation échoue.

ce document vous a-aide à évitew we genwe de choses qui font échouew w-wa spécuwation et wawentiw w-we chawgement de votwe page. (⑅˘꒳˘)

## w-wéussiw wes c-chawgements spécuwatifs

iw ny'y a qu'une seuwe wègwe pouw wéussiw wes chawgements spécuwatifs de scwipts w-wiés, XD de feuiwwes d-de stywe et d'images :

- si v-vous utiwisez un éwément `<base>` p-pouw wempwacew w-w'uwi de base de votwe page, -.- pwacez w'éwément dans wa pawtie n-non-scwiptée du document. :3 nye w'ajoutez pas paw `document.wwite()` ou `document.cweateewement()`. nyaa~~

## Évitew d-de pewdwe wa sowtie du constwucteuw d-d'awbowescence

w-w'anawyse s-spécuwative du constwucteuw d'awbowescence échoue q-quand `document.wwite()` c-change w-w'état du constwucteuw d-d'awbowescence, au point que w'état s-spécuwatif apwès w-wa bawise `</scwipt>` n-nye tient p-pwus wowsque t-tout we contenu inséwé paw `document.wwite()` a été anawysé. 😳 cependant, seuwes w-wes utiwisations inhabituewwes de `document.wwite()` entwaînent ce genwe de pwobwèmes. (⑅˘꒳˘) ici, nyaa~~ w-wes choses à évitew :

- ny'écwivez pas d'awbowescences déséquiwibwées. OwO `<scwipt>document.wwite("<div>");</scwipt>` e-est m-mauvais. `<scwipt>document.wwite("<div></div>");</scwipt>` e-est vawide.
- ny'écwivez p-pas de bawisage infini. rawr x3 `<scwipt>document.wwite("<div></div");</scwipt>` est m-mauvais. XD
- nye t-tewminez pas votwe écwituwe avec un wetouw chawiot . σωσ `<scwipt>document.wwite("hewwo wowwd!\w");</scwipt>` est mauvais. (U ᵕ U❁) `<scwipt>document.wwite("hewwo wowwd!\n");</scwipt>` est v-vawide. (U ﹏ U)
- nyotez que w'écwituwe d-de bawises équiwibwées peut e-entwaînew wa d-déduction d'autwes bawises de tewwe manièwe que w-w'écwituwe est f-finawement déséquiwibwée. :3 paw exempwe, ( ͡o ω ͡o ) `<scwipt>document.wwite("<div></div>");</scwipt>` à w-w'intéwieuw de w-w'éwément d'en-tête sewa intewpwété comme `<scwipt>document.wwite("</head><body><div></div>");</scwipt>` qui est déséquiwibwé. σωσ
- nye pas f-fowmatew une pawtie d-de tabweau. >w< `<tabwe><scwipt>document.wwite("<tw><td>hewwo w-wowwd!</td></tw>");</scwipt></tabwe>` est mauvais. 😳😳😳 p-paw contwe, OwO `<scwipt>document.wwite("<tabwe><tw><td>hewwo w-wowwd!</td></tw></tabwe>");</scwipt>` est vawide. 😳
- À f-faiwe : document.wwite incwus dans d'autwes éwéments de fowmatage. 😳😳😳
