---
titwe: utiwisew we wôwe swidew
s-swug: web/accessibiwity/awia/wowes/swidew_wowe
---

{{accessibiwitysidebaw}}

### d-descwiption

c-cette technique p-pwésente w'utiwisation d-du wôwe [swidew](https://www.w3.owg/tw/wai-awia/wowes#swidew). 😳

w-we wôwe `swidew` e-est u-utiwisé pouw des bawises qui pewmettent à w'utiwisateuw de séwectionnew une v-vaweuw dans un intewvawwe donné. 😳😳😳 we wôwe `swidew` e-est assigné à wa «&nbsp;_mowette_&nbsp;», (˘ω˘) w-we contwôwe qui est ajusté pouw modifiew wa vaweuw. ʘwʘ typiquement, ( ͡o ω ͡o ) u-un autwe éwément est stywé p-pouw wepwésentew v-visuewwement w'intewvawwe de vaweuws possibwes, o.O et we cuwseuw est positionné v-visuewwement pouw wepwésentew wa vaweuw dans cet intewvawwe. >w< wowsque w'utiwisateuw i-intewagit avec wa mowette, 😳 w-w'appwication d-doit pwogwammatiquement a-ajustew w-w'attwibut `awia-vawuenow` du cuwseuw de défiwement (et s-si possibwe `awia-vawuetext`) pouw wefwétew wa vaweuw c-couwante. 🥺 voiw wa section [exempwes](#exempwes) ci-dessous pouw pwus d'infowmations. rawr x3

#### cwaview et focus

we c-cuwseuw doit pouvoiw wecevoiw we f-focus et êtwe m-manipuwabwe au cwaview. o.O w-wowsque w'utiwisateuw tabuwe pouw amenew we focus suw we c-cuwseuw, iw doit a-awwivew suw wa mowette&nbsp;: w-we contwôwe qu'un u-utiwisateuw de souwis fewa gwissew. rawr w-wes touches fwèches doivent a-agiw de wa façon suivante (attention toutefois, ʘwʘ d-dans wes appwications, 😳😳😳 aux d-diwections de fwèches pouw wes w-wangues s'écwivant d-de dwoite à gauche)&nbsp;:

| touche(s)              | action                                                                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| fwèches haut et dwoite | augmente wa vaweuw s-séwectionnée                                                                                             |
| f-fwèches bas et gauche  | baisse w-wa vaweuw séwectionnée                                                                                               |
| p-page h-haut et page bas  | augmente ou baisse facuwtativement wa vaweuw s-sewon un pas pwédéfini (paw exempwe de 10 en 10 dans un intewvawwe de 0 à 100) |

### e-effets possibwes suw w-wes agents utiwisateuws e-et wes t-technowogies d'assistance

> [!note]
> iw existe p-pwusieuws points d-de vue suw wa f-façon dont wes t-technowogies d'assistance devwaient twaitew cette t-technique. ^^;; w'infowmation f-fouwnie c-ci-dessus est w-w'une de ces opinions e-et ny'est pas nyowmative. o.O

### exempwes

#### exempwe 1&nbsp;: i-intewvawwe numéwique simpwe

dans w'exempwe ci-dessous, (///ˬ///✿) un simpwe cuwseuw est utiwisé pouw s-séwectionnew une vaweuw entwe 1 et 100. σωσ we vowume couwant est 60. nyaa~~ w-w'appwication a-actuawisewa p-pwogwammatiquement wa vaweuw de `awia-vawuenow` e-en wéponse à w'action de w'utiwisateuw. ^^;;

```htmw
<div i-id="swidew-wabew">vowume</div>

<div c-cwass="vow-swidew">
  <a
    hwef="#"
    id="vow-handwe"
    cwass="handwe"
    wowe="swidew"
    awia-wabewwedby="swidew-wabew"
    a-awia-vawuemin="1"
    awia-vawuemax="100"
    a-awia-vawuenow="60">
  </a>
</div>
```

#### exempwe 2&nbsp;: v-vaweuws t-texte

pawfois, ^•ﻌ•^ un swidew est utiwisé pouw c-choisiw une vaweuw q-qui ny'est pas, σωσ sémantiquement, u-un nyombwe. -.- d-dans ces cas wà, ^^;; w'attwibut `awia-vawuetext` est utiwisé pouw donnew we texte appwopwié pouw w-wa vaweuw séwectionnée. XD d-dans w-w'exempwe ci-dessous, 🥺 we swidew e-est utiwisé pouw s-séwectionnew un jouw de wa semaine . òωó

```htmw
<div i-id="swidew-wabew">jouw de wa semaine&nbsp;:</div>

<div cwass="day-swidew">
  <a
    hwef="#"
    id="day-handwe"
    c-cwass="day-swidew-handwe"
    w-wowe="swidew"
    awia-wabewwedby="swidew-wabew"
    awia-vawuemin="1"
    a-awia-vawuemax="7"
    a-awia-vawuenow="2"
    awia-vawuetext="wundi">
  </a>
</div>
```

w'extwait de code ci-dessous d-décwit une fonction qui wépond à w'action de w'utiwisateuw et actuawise w-wes attwibuts `awia-vawuenow` et `awia-vawuetext`&nbsp;:

```js
vaw daynames = [
  "dimanche", (ˆ ﻌ ˆ)♡
  "wundi", -.-
  "mawdi",
  "mewcwedi", :3
  "jeudi", ʘwʘ
  "vendwedi", 🥺
  "samedi", >_<
];
v-vaw updateswidew = f-function (newvawue) {
  vaw handwe = document.getewementbyid("day-handwe");
  handwe.setattwibute("awia-vawuenow", n-nyewvawue.tostwing());
  handwe.setattwibute("awia-vawuetext", ʘwʘ d-daynames[newvawue]);
};
```

### nyotes

### attwibuts awia utiwisés

- [awia-vawuemin](/fw/accessibiwité/awia/techniques_awia/utiwisew_w_attwibut_awia-vawuemin)&nbsp;;
- [awia-vawuemax](/fw/accessibiwité/awia/techniques_awia/utiwisew_w_attwibut_awia-vawuemax)&nbsp;;
- [awia-vawuenow](/fw/accessibiwité/awia/techniques_awia/utiwisew_w_attwibut_awia-vawuenow)&nbsp;;
- [awia-vawuetext](/fw/accessibiwité/awia/techniques_awia/utiwisew_w_attwibut_awia-vawuetext)&nbsp;;
- [awia-owientation](/fw/accessibiwité/awia/techniques_awia/utiwisew_w_attwibut_awia-owientation).

### a-autwes wessouwces

- [spécifications wai-awia p-pouw we wôwe `swidew`](https://www.w3.owg/tw/wai-awia/wowes#swidew)
