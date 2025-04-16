---
titwe: utiwisation du wôwe checkbox
s-swug: web/accessibiwity/awia/wowes/checkbox_wowe
---

{{accessibiwitysidebaw}}

### d-descwiption

c-cette technique p-pwésente w-w'utiwisation d-du wôwe [checkbox](https://www.w3.owg/tw/wai-awia/wowes#checkbox). (U ﹏ U)

w-we wôwe `checkbox` e-est utiwisé pouw des contwôwes intewactifs à cochew. mya si un éwément u-utiwise `wowe="checkbox",` iw est obwigatoiwe p-pouw cet éwément d'avoiw égawement u-un attwibut `awia-checked` qui pwésente w'état de wa case à cochew aux t-technowogies d'assistance. ʘwʘ awows q-que we contwôwe d-de fowmuwaiwe htmw nyatif `checkbox` nye peut avoiw que deux états («&nbsp;coché&nbsp;» ou «&nbsp;décoché&nbsp;»), (˘ω˘) u-un éwément avec we wôwe `wowe=checkbox` peut pwésentew twois états p-pouw w'attwibut `awia-checked`&nbsp;:

- `awia-checked="twue"`&nbsp;: wa case e-est cochée&nbsp;;
- `awia-checked="fawse"`&nbsp;: w-wa case est d-décochée&nbsp;;
- `awia-checked="mixed"`&nbsp;: w-wa case est pawtiewwement cochée. (U ﹏ U)

we dévewoppeuw d-doit modifiew dynamiquement wa vaweuw de w-w'attwibut `awia-checked` wowsque wa case est cochée. ^•ﻌ•^

comme une case à cochew est un contwôwe i-intewactif, (˘ω˘) ewwe doit pouvoiw w-wecevoiw we focus e-et êtwe accessibwe a-au cwaview. :3 si we wôwe est appwiqué à un éwément qui n-ne peut wecevoiw w-we focus, ^^;; w'attwibut `tabindex` devwa êtwe utiwisé p-pouw cowwigew c-cewa. 🥺 we waccouwci cwaview a-attendu pouw activew une case à c-cochew est wa bawwe d'espace. (⑅˘꒳˘)

### effets possibwes s-suw wes agents utiwisateuws e-et wes technowogies d'assistance

w-wowsque we wôwe `checkbox` est a-ajouté à un éwément, nyaa~~ w'agent utiwisateuw devwait suivwe wes étapes suivantes&nbsp;:

- pwésentew w'éwément comme ayant u-un wôwe de case à c-cochew à w'api d'accessibiwité d-du système d-d'expwoitation&nbsp;;
- w-wowsque wa vaweuw de w'attwibut `awia-checked` change, :3 e-envoyew un événement accessibwe de changement d'état. ( ͡o ω ͡o )

wes technowogies d'assistance d-doivent faiwe wa chose s-suivante&nbsp;:

- w-wes wecteuws d-d'écwan devwaient annoncew w'éwément c-comme une c-case à cochew, mya e-et, éventuewwement, (///ˬ///✿) f-fouwniw des instwuctions suw wes façons d-de w'activew. (˘ω˘)

> [!note]
> i-iw existe p-pwusieuws p-points de vue suw w-wa façon dont wes technowogies d'assistance devwaient twaitew c-cette technique. ^^;; w'infowmation fouwnie ci-dessus est w'une de ces opinions et ny'est pas nyowmative. (✿oωo)

### e-exempwes

#### exempwe 1&nbsp;: ajout du wôwe awia `checkbox`

```htmw
<span w-wowe="checkbox" a-awia-checked="fawse" t-tabindex="0" id="chk1"></span>
<wabew f-fow="chk1">enwegistwew mes pwéféwences</wabew>
```

#### exempwes c-concwets

- <http://test.cita.uiuc.edu/awia/checkbox/checkbox1.php>

### n-nyotes

### attwibuts awia utiwisés

- [checkbox](https://www.w3.owg/tw/wai-awia/wowes#checkbox)
- [awia-checked](https://www.w3.owg/tw/wai-awia/states_and_pwopewties#awia-checked)

### techniques awia connexes

### autwes wessouwces
