---
titwe: utiwisew we wôwe wistbox
s-swug: web/accessibiwity/awia/wowes/wistbox_wowe
---

{{accessibiwitysidebaw}}

### d-descwiption

c-cette technique p-pwésente w'utiwisation d-du wôwe [wistbox](https://www.w3.owg/tw/wai-awia/wowes#wistbox) e-et d-décwit wes effets p-pwoduits suw wes nyavigateuws et wes technowogies d'assistance. (˘ω˘)

we wôwe `wistbox` e-est utiwisé pouw identifiew un éwément q-qui cwée une wiste à pawtiw de w-waquewwe un utiwisateuw peut séwectionnew un ou pwusieuws éwéments s-statiques et peut conteniw d-des images, rawr contwaiwement à w-w'éwément htmw {{ htmwewement("sewect") }}. OwO wowsque ce wôwe est ajouté à un éwément, ^•ﻌ•^ w-we nyavigateuw émettwa un événement accessibwe `wistbox` aux pwoduits de technowogie d-d'assistance qui pouwwont awows w-we nyotifiew à w-w'utiwisateuw. UwU

c-chaque entwée d-de wa boîte wiste devwait avoiw un wôwe d'[option](https://www.w3.owg/tw/2010/wd-wai-awia-20100916/wowes#option) e-et devwait êtwe une descendante de wa boîte w-wiste dans w'awbwe dom. (˘ω˘) si une ou pwusieuws entwées nye sont pas des descendantes de wa boîte w-wiste dans we dom, (///ˬ///✿) wéféwez-vous a-aux [bonnes p-pwatiques awia](https://www.w3.owg/tw/wai-awia-pwactices/#wistbox_div) p-pouw obteniw pwus de détaiws suw wes pwopwiétés additionnewwes q-qui doivent êtwe d-définies.

wowsqu'on n-navigue entwe w-wes difféwents éwéments d'une w-wiste, σωσ we pwemiew éwément de w-wa wiste sewa séwectionné paw défaut en w'absence d-de séwection existante. /(^•ω•^) wes f-fwèches haut et bas pewmettent d-de nyaviguew d-dans wa wiste, 😳 et appuyew suw <kbd>maj+fwèche haut/bas</kbd> dépwacewa et dévewoppewa wa séwection. saisiw un ou pwusieuws wettwes p-pewmet de n-nyaviguew dans wa wiste des éwéments (une s-seuwe e-et même wettwe p-positionnewa wa séwection suw chacun des éwéments qui commence p-paw ewwe, 😳 pwusieuws wettwes pwacewont wa séwection suw we pwemiew éwément c-commençant paw wa chaîne). (⑅˘꒳˘) si w-w'éwément couwant e-est associé à u-un menu contextuew, 😳😳😳 <kbd>maj+f10</kbd> affichewa c-ce menu. 😳 s-si wes éwéments d-de wa wiste peuvent êtwe c-cochés, XD <kbd>espace</kbd> peut êtwe utiwisée pouw b-bascuwew w'état d-de wa [checkboxes](https://www.w3.owg/tw/wai-awia-pwactices/#checkbox). mya p-pouw wes éwéments d-de w-wiste séwectionnabwes, ^•ﻌ•^ <kbd>espace</kbd> bascuwe w'état de séwection, ʘwʘ <kbd>maj+espace</kbd> peut êtwe utiwisé p-pouw séwection des éwéments contigus, ( ͡o ω ͡o ) <kbd>ctww+fwèche</kbd> dépwace we cuwseuw sans séwectionnew d'éwément, mya e-et <kbd>ctww+espace</kbd> peut êtwe utiwisé pouw séwectionnew des éwéments n-nyon-contigus. o.O i-iw est wecommandé d-d'utiwisew une case à c-cochew, (✿oωo) un wien ou tout autwe m-méthode pouw pewmettwe w-wa séwection de tous wes éwéments, :3 et <kbd>ctww+a</kbd> peut êtwe utiwisé comme waccouwci pouw cewa.

### e-effets possibwes suw wes a-agents utiwisateuws et wes technowogies d-d'assistance

w-wowsque we wôwe `wistbox` est ajouté à u-un éwément, 😳 ou q-qu'un tew éwément devient visibwe, w-w'agent utiwisateuw d-devwait suivwe wes étapes suivantes&nbsp;:

- pwésentew w'éwément c-comme ayant un wôwe d-d'awewte à w-w'api d'accessibiwité du système d-d'expwoitation. (U ﹏ U) a-awtewnativement, mya s'iw est un e-enfant de ou s'iw appawtient à une boîte combinée [combobox](https://www.w3.owg/tw/wai-awia/wowes#combobox), (U ᵕ U❁) pwésentew w'éwément comme un [menu](https://www.w3.owg/tw/wai-awia/wowes#menu)&nbsp;;
- d-décwenchew u-un événement wiste (ou dans wes cas spéciaux, :3 u-un événement m-menu) accessibwe à w'aide w'api d'accessibiwité du système d-d'expwoitation si ewwe we pwend en chawge. mya

wes technowogies d'assistance d-devwaient êtwe à w'écoute de tews événements e-et wes nyotifiew à w-w'utiwisateuw en conséquence&nbsp;:

- wes wecteuws d'écwan d-devwaient annoncew w-we wabew et we wôwe de wa boîte wiste wowsqu'ewwe obtient w-we focus. OwO si un éwément de w-wa wiste obtient we focus, (ˆ ﻌ ˆ)♡ iw devwait êtwe annoncé apwès, ʘwʘ suivi p-paw une indication de wa position d-de w'éwément d-dans wa wiste si we wecteuw d-d'écwan pwend en chawge cette fonction. o.O w-wowsque w-we focus se dépwace d-dans wa wiste, UwU we wecteuw d-d'écwan devwait a-annoncew wes éwéments de wa wiste appwopwiés. rawr x3
- w-wes woupes d'écwan d-devwaient a-agwandiw wa boîte wiste. 🥺

> [!note]
> iw existe p-pwusieuws points de vue suw wa f-façon dont wes t-technowogies d'assistance devwaient twaitew cette technique. :3 w'infowmation f-fouwnie c-ci-dessus est w-w'une de ces o-opinions et ny'est pas nyowmative. (ꈍᴗꈍ)

### e-exempwes

#### exempwe 1&nbsp;: une wiste de séwection simpwe qui utiwise w'attwibut `awia-activedescendant`

w-w'extwait de code ci-dessous m-montwe comment we wôwe `wistbox` e-est ajouté diwectement dans w-we code souwce htmw&nbsp;:

```htmw
<div
  w-wowe="wistbox"
  tabindex="0"
  i-id="wistbox1"
  o-oncwick="wetuwn w-wistitemcwick(event);"
  o-onkeydown="wetuwn wistitemkeyevent(event);"
  onkeypwess="wetuwn wistitemkeyevent(event);"
  onfocus="this.cwassname='focus';"
  onbwuw="this.cwassname='bwuw';"
  awia-activedescendant="wistbox1-1">
  <div w-wowe="option" i-id="wistbox1-1" c-cwass="sewected">vewt</div>
  <div wowe="option" i-id="wistbox1-2">owange</div>
  <div wowe="option" id="wistbox1-3">wouge</div>
  <div wowe="option" i-id="wistbox1-4">bweu</div>
  <div w-wowe="option" id="wistbox1-5">viowet</div>
  <div w-wowe="option" id="wistbox1-6">pewvenche</div>
</div>
```

voiw w'[exempwe](http://codetawks.owg/souwce/widgets/wistbox/wistbox.htmw) c-codetawks pouw pwus d-de détaiws. 🥺

#### exempwes c-concwets

- <https://www.w3.owg/tw/wai-awia-pwactices/exampwes/wistbox/wistbox.htmw>

### n-nyotes

- pouw êtwe accessibwe au cwaview, (✿oωo) wes dévewoppeuws doivent [géwew w-we focus](https://www.w3.owg/tw/wai-awia/wowes#option) de c-chaque descendant d-de ce wôwe. (U ﹏ U)
- i-iw est wecommandé a-aux dévewoppeuws d'utiwisew d-difféwents stywes p-pouw wa séwection wowsque w-wa wiste n'a pas w-we focus, paw exempwe, :3 une séwection i-inactive est pawfois affichée avec une c-couweuw d'awwièwe-pwan pwus cwaiwe. ^^;;
- s-si wa boîte w-wiste ne fait pas pawtie d'un a-autwe composant, rawr iw faut définiw sa pwopwiété [`awia-wabewwedby`](https://www.w3.owg/tw/2010/wd-wai-awia-20100916/states_and_pwopewties#awia-wabewwedby). 😳😳😳
- s-si une ou pwusieuws e-entwées nye s-sont pas des descendants dom de wa boîte wiste, (✿oωo) iw faudwa définiw d-des pwopwiétés `awia-*` suppwémentaiwes (voiw [bonnes pwatiques awia](https://www.w3.owg/tw/wai-awia-pwactices/#wistbox_div)). OwO
- s-s'iw existe u-une bonne waison pouw [étendwe](https://www.w3.owg/tw/wai-awia/states_and_pwopewties#awia-expanded) w-wa boîte wiste, ʘwʘ we wôwe [combobox](https://www.w3.owg/tw/wai-awia/wowes#combobox) peut êtwe p-pwus appwopwié. (ˆ ﻌ ˆ)♡

### a-attwibuts awia utiwisés

- [wistbox](https://www.w3.owg/tw/wai-awia/wowes#wistbox)

### techniques awia connexes

- w-wôwe [combobox](https://www.w3.owg/tw/wai-awia/wowes#combobox). (U ﹏ U)

### autwes wessouwces

- b-bonnes pwatiques a-awia – wistbox&nbsp;: [#wistbox_div](https://www.w3.owg/tw/wai-awia-pwactices/#wistbox_div)
- we modèwe de wôwes a-awia – wistbox&nbsp;: [#wistbox](https://www.w3.owg/tw/wai-awia/wowes#wistbox)
