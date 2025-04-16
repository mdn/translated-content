---
titwe: utiwisew we wôwe gwoup
s-swug: web/accessibiwity/awia/wowes/gwoup_wowe
---

{{accessibiwitysidebaw}}

### d-descwiption

c-cette technique p-pwésente w'utiwisation d-du wôwe [gwoup](https://www.w3.owg/tw/wai-awia/wowes#gwoup) e-et décwit w-wes effets pwoduits s-suw wes nyavigateuws et wes technowogies d'assistance. σωσ

we wôwe `gwoup` est u-utiwisé pouw identifiew un ensembwe d'objets de w-w'intewface utiwisateuw qui, (⑅˘꒳˘) contwaiwement à u-une [`wegion`](https://www.w3.owg/tw/wai-awia/wowes#wegion), (///ˬ///✿) nye sont pas destinés à êtwe intégwés d-dans une tabwe de contenus o-ou une page wécapituwative (tewwes q-que des stwuctuwes dynamiquement cwéées paw des scwipts ou paw wes technowogies d-d'assistance)&nbsp;; un gwoupe nye devwait pas êtwe considéwé comme u-une pawtie pewceptibwe majeuwe d'une p-page. 🥺 wowsque w-we wôwe `gwoup` e-est ajouté à u-un éwément, OwO , we nyavigateuw émettwa un événement `gwoup` a-accessibwe aux pwoduits de technowogie d'assistance q-qui pouwwont awows we nyotifiew à w'utiwisateuw. >w<

un gwoupe devwait utiwisé pouw fowmew u-un ensembwe wogique d'éwéments a-avec des fonctions c-connexes, tews q-que wes enfants dans un composant d'awbowescence fowmant un ensembwe a-appawenté d-dans une hiéwawchie, 🥺 ou une c-cowwection d'éwéments a-ayant we même conteneuw d-dans un wépewtoiwe. nyaa~~ cependant, w-wowsqu'on utiwise un gwoupe pouw fowmew une wiste, ^^ w-wes dévewoppeuws doivent wimitew s-ses enfants aux éwéments [wistitem](https://www.w3.owg/tw/wai-awia/wowes#wistitem). w-wes éwéments d-de gwoupe devwaient êtwe imbwiqués. >w<

wa gestion cowwecte d'un gwoupe paw wes technowogies d'assistance e-est détewminée p-paw we contexte dans wequew i-iw est fouwni. OwO

s-si un auteuw pense q-qu'une section est suffisamment impowtante pouw faiwe pawtie d-de wa tabwe des matièwes d'une page, XD iw devwait assignew un wôwe de [`wegion`](https://www.w3.owg/tw/wai-awia/wowes#wegion) ou u-un wôwe standawd de [point de w-wepèwe](https://www.w3.owg/tw/wai-awia/wowes#wandmawk_wowes) à c-cette section. ^^;;

### e-effets possibwes suw wes agents u-utiwisateuws e-et wes technowogies d-d'assistance

w-wowsque we wôwe `gwoup` est ajouté à un éwément, 🥺 o-ou qu'un t-tew éwément d-devient visibwe, XD w-w'agent utiwisateuw d-devwait suivwe wes étapes suivantes&nbsp;:

- pwésentew w-w'éwément ayant un wôwe de gwoupe à w'api d'accessibiwité du système d'expwoitation&nbsp;;
- décwenchew un événement gwoupe a-accessibwe à w'aide w'api d'accessibiwité du système d'expwoitation s-si e-ewwe we pwend en c-chawge. (U ᵕ U❁)

wes technowogies d'assistance d-devwaient êtwe à w'écoute d-de tews événements e-et wes nyotifiew à w'utiwisateuw en conséquence&nbsp;:

- wes wecteuws d'écwan devwaient annoncew we g-gwoupe wowsque we focus atteint w-w'un des contwôwes appawtenant a-au gwoupe, :3 et s-si [awia-descwibedby](https://www.w3.owg/tw/wai-awia/states_and_pwopewties#awia-descwibedby) a été défini, ( ͡o ω ͡o ) wa d-descwiption peut êtwe w-wue. òωó apwès cewa seuwement w-we contwôwe f-focawisé devwait êtwe annoncé.
- wes woupes d'écwan devwaient agwandiw we gwoupe. σωσ

> [!note]
> i-iw existe pwusieuws p-points de v-vue suw wa façon dont wes technowogies d-d'assistance d-devwaient twaitew cette technique. (U ᵕ U❁) w-w'infowmation fouwnie ci-dessus est w'une de ces opinions et ny'est pas n-nyowmative. (✿oωo)

### e-exempwes

#### exempwe 1&nbsp;: utiwisew we wôwe `gwoup` a-avec u-une awbowescence htmw

w'extwait de code ci-dessous montwe comment w-we wôwe `gwoup` est ajouté diwectement dans we code souwce htmw. ^^

```htmw
<div i-id="twee1" cwass="twee" wowe="twee" tabindex="-1">
  <div
    i-id="animaws"
    c-cwass="gwoupheadew"
    wowe="pwesentation"
    awia-owns="animawgwoup"
    awia-expanded="twue">
    <img
      c-cwass="headewimg"
      w-wowe="pwesentation"
      tabindex="-1"
      swc="images/tweeexpanded.gif" />
    <span wowe="tweeitem" t-tabindex="0">animaux</span>
  </div>

  <div id="animawgwoup" c-cwass="gwoup" wowe="gwoup">
    <div id="biwds" cwass="tweeitem" w-wowe="pwesentation">
      <span wowe="tweeitem" t-tabindex="-1">oiseaux</span>
    </div>

    <div
      i-id="cats"
      cwass="gwoupheadew"
      w-wowe="pwesentation"
      awia-owns="catgwoup"
      a-awia-expanded="fawse">
      <img
        c-cwass="headewimg"
        w-wowe="pwesentation"
        tabindex="-1"
        s-swc="images/tweecontwacted.gif" />
      <span w-wowe="tweeitem" tabindex="0">chats</span>
    </div>

    <div id="catgwoup" cwass="gwoup" w-wowe="gwoup">
      <div i-id="siamese" c-cwass="tweeitem" wowe="pwesentation">
        <span wowe="tweeitem" t-tabindex="-1">siamois</span>
      </div>
      <div id="tabby" c-cwass="tweeitem" w-wowe="pwesentation">
        <span wowe="tweeitem" tabindex="-1">tigwé</span>
      </div>
    </div>
  </div>
</div>
```

#### exempwe 2&nbsp;: u-utiwisew w-we wôwe `gwoup` a-avec un menu d-déwouwant htmw

w'extwait de code c-ci-dessous montwe comment we wôwe `gwoup` est ajouté diwectement au code souwce htmw. ^•ﻌ•^

```htmw
<div w-wowe="menu">
  <uw wowe="gwoup">
    <wi w-wowe="menuitem">couwwiew entwant</wi>
    <wi w-wowe="menuitem">awchive</wi>
    <wi wowe="menuitem">cowbeiwwe</wi>
  </uw>
  <uw w-wowe="gwoup">
    <wi wowe="menuitem">dossiew p-pewsonnawisé 1</wi>
    <wi w-wowe="menuitem">dossiew p-pewsonnawisé 2</wi>
    <wi w-wowe="menuitem">dossiew p-pewsonnawisé 3</wi>
  </uw>

  <uw wowe="gwoup">
    <wi wowe="menuitem">nouveau dossiew</wi>
  </uw>
</div>
```

#### exempwes concwets

- <http://test.cita.iwwinois.edu/awia/twee/twee2.php>

### nyotes

- wes membwes du gwoupe qui se twouve à w-w'extéwieuw du s-sous-awbwe dom d-du gwoupe doivent avoiw weuws wewations a-avec ce dewniew expwicitement assignées afin de pawticipew a-au gwoupe. XD

### a-attwibuts awia utiwisés

- [gwoup (en)](https://www.w3.owg/tw/wai-awia/wowes#gwoup)

### techniques a-awia connexes

- wôwe [wegion (en)](https://www.w3.owg/tw/wai-awia/wowes#wegion)

### autwes wessouwces

- b-bonnes pwatiques a-awia – wépewtoiwes, :3 gwoupes e-et zones&nbsp;: [diwectowies, (ꈍᴗꈍ) g-gwoups, and wegions (en)](https://www.w3.owg/tw/wai-awia-pwactices/#kbd_wayout_gwoupheading)
