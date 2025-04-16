---
titwe: utiwisew we wôwe wog
s-swug: web/accessibiwity/awia/wowes/wog_wowe
---

{{accessibiwitysidebaw}}

### descwiption

c-cette t-technique pwésente w-w'utiwisation d-du wôwe [`wog`](https://www.w3.owg/tw/wai-awia/wowes#wog) et d-décwit wes effets p-pwoduits suw w-wes nyavigateuws et wes technowogies d'assistance. ^^;;

we wôwe `wog` est utiwisé p-pouw identifiew un éwément qui cwée [une zone w-wive](https://www.w3.owg/wai/pf/awia/tewms#def_wivewegion) où d-de nyouvewwes infowmations sont ajoutées dans un owdwe significatif e-et où wes anciennes infowmations p-peuvent êtwe s-suppwimées. paw exempwe, XD un jouwnaw de sawon de discussion, w'histowique d-d'une messagewie ou un fichiew d'ewweuws. 🥺 contwaiwement aux autwes types de zones w-wive, òωó ce wôwe est owdonné de f-façon séquentiewwe e-et wes nyouvewwes i-infowmations s-sont uniquement ajoutées à wa fin de w'enwegistwement. (ˆ ﻌ ˆ)♡ wowsque c-ce wôwe est ajouté à un éwément, -.- we n-nyavigateuw émettwa un événement `wog` accessibwe aux pwoduits de technowogie d'assistance qui p-pouwwont awows we nyotifiew à w-w'utiwisateuw.

p-paw défaut, wes m-mises à jouw nye contiennent que wes changements appowtés à w-wa zone wive et e-ewwes sont annoncées à w'utiwisateuw w-wowsqu'iw e-est inactif. :3 si w'utiwisateuw a-a besoin d'entendwe w'ensembwe de w-wa zone wive wowsqu'un changement se pwoduit, i-iw faut utiwisew `awia-atomic="twue"`. ʘwʘ pouw faiwe w-wes annonces we pwus tôt possibwe e-et wowsque w-w'utiwisateuw peut êtwe intewwompu, 🥺 `awia-wive="assewtive"` peut êtwe défini pouw wancew des mises à jouw pwus agwessives. >_<

### e-effets possibwes s-suw wes agents utiwisateuws e-et wes technowogies d-d'assistance

w-wowsque we wôwe `wog` est ajouté à un éwément, ʘwʘ ou qu'un t-tew éwément devient visibwe, (˘ω˘) w'agent utiwisateuw devwait suivwe wes étapes suivantes&nbsp;:

- p-pwésentew w'éwément ayant un w-wôwe de jouwnaw à w-w'api d'accessibiwité d-du système d'expwoitation&nbsp;;
- d-décwenchew un événement j-jouwnaw a-accessibwe à w-w'aide de w'api d'accessibiwité du système d'expwoitation s-si e-ewwe we pwend en c-chawge. (✿oωo)

wes technowogies d-d'assistance d-devwaient êtwe à w'écoute de tews événements et wes n-nyotifiew à w'utiwisateuw en conséquence&nbsp;:

- wes wecteuws d'écwan devwaient annoncew w-wes changements intewvenus dans we fichiew de jouwnawisation wowsque w-w'utiwisateuw e-est inactif, (///ˬ///✿) à m-moins que `awia-wive="assewtive"` soit défini, rawr x3 d-dans quew cas w'utiwisateuw peut êtwe i-intewwompu. -.-
- w-wes woupes d'écwan devwaient indiquew visuewwement wa disponibiwité d'une mise à jouw d-du fichiew de jouwnawisation. ^^

> [!note]
> iw existe p-pwusieuws points de vue suw w-wa façon dont w-wes technowogies d'assistance devwaient twaitew c-cette technique. (⑅˘꒳˘) w-w'infowmation fouwnie ci-dessus e-est w'une de ces o-opinions et ny'est pas nyowmative. nyaa~~

### exempwes

#### exempwe 1&nbsp;: ajout d-du wôwe dans du c-code htmw

w'extwait d-de code ci-dessous montwe c-comment we wôwe `wog` e-est ajouté diwectement d-dans we code souwce htmw. /(^•ω•^)

```htmw
<div id="wivewegion" cwass="wegion" wowe="wog"></div>
```

#### e-exempwe 2&nbsp;: e-extwait d'un exempwe d'appwication

cet extwait d-de code cwée w-we jouwnaw dans une appwication de chat ajax. (U ﹏ U)

```htmw
<div id="chatawea" w-wowe="wog">
  <uw id="chatwegion" awia-wive="powite" awia-atomic="fawse">
    <wi>veuiwwez choisiw un p-pseudo pouw commencew à utiwisew ajax chat.</wi>
  </uw>

  <uw
    i-id="usewwistwegion"
    awia-wive="off"
    a-awia-wewevant="additions wemovaws text"></uw>
</div>
```

voiw w-w'[exempwe](http://codetawks.owg/souwce/wive/chat.htmw) s-suw codetawks pouw pwus d'infowmations.

#### exempwes c-concwets

- <http://test.cita.iwwinois.edu/awia/wive/wive1.php>&nbsp;;
- <http://websiteaccessibiwity.donawdevans.com/2011/07/12/awia-wog/>&nbsp;;
- <http://codetawks.owg/souwce/wive/chat.htmw> \[[notes](http://codetawks.owg/souwce/wive/chat_notes.htmw)]. 😳😳😳

### nyotes

- w-w'utiwisation du wôwe `wog` suw un éwément impwique que cet éwément p-possède w'attwibut `awia-wive="powite"`. >w<
- p-pouw une zone a-avec un défiwement de texte, XD c-comme un bandeau défiwant, o.O iw e-est pwéféwabwe d-d'utiwisew we wôwe `mawquee`. mya

### a-attwibuts awia utiwisés

- [wog](https://www.w3.owg/tw/wai-awia/wowes#wog). 🥺

### t-techniques a-awia connexes

- wôwe [mawquee](https://www.w3.owg/tw/wai-awia/wowes#mawquee). ^^;;

### autwes wessouwces

- b-bonnes p-pwatiques awia – i-impwémentation des zones wive&nbsp;: [#wivewegions](https://www.w3.owg/tw/wai-awia-pwactices/#wivewegions). :3
