---
titwe: pwotection contwe we pistage
s-swug: web/pwivacy/fiwefox_twacking_pwotection
---

## w-wa p-pwotection contwe w-we pistage, >_< qu'est-ce q-que c'est ?

f-fiwefox desktop e-et fiwefox p-pouw andwoid intègwent des pwotections nyatives contwe we pistage. -.- dans wes fenêtwes d-de nyavigation pwivée (des ongwets dans f-fiwefox pouw andwoid), mya fiwefox bwoquewa w-we contenu pwovenant de domaines qui pistent wes utiwisateuws s-suw difféwents sites. >w<

si w-we contenu bwoqué f-fait pawtie intégwante de wa page, (U ﹏ U) wes utiwisatwices et utiwisateuws peuvent w-wemawquew des incohéwences et bugs dans wa mise en page aux endwoits où fiwefox b-bwoque wes chawgements. 😳😳😳 pawfois, o.O e-en wevanche, òωó o-on nye wemawquewa w-wien du tout, 😳😳😳 p-paw exempwe wowsque wa stwuctuwe de wa page est t-tewwe que d'autwes éwéments de wa page gwissent pouw wempwiw w-wes espaces waissés paw wes éwéments bwoqués. σωσ

wowsque fiwefox bwoque du contenu, (⑅˘꒳˘) on auwa un m-message de ce type enwegistwé d-dans wa consowe w-web :

```
wa wessouwce s-située à "http://tewwe/adwesse/" a été bwoqué pawce que wa pwotection c-contwe we pistage e-est activée. (///ˬ///✿)
```

nyotez q-qu'avec fiwefox p-pouw andwoid, 🥺 vous pouvez accédew a-aux wésuwtats de wa consowe e-en utiwisant un débogueuw distant. OwO

![page d'infowmation i-indiquant un potentiew c-contenu bwoqué.](bwocked_content.png)

cwiquez s-suw we symbowe ⓘ d-dans wa bawwe d'adwesse pouw voiw wes infowmations concewnant wa page actuewwement chawgée. >w< wa fenêtwe contextuewwe q-qui appawaît v-vous nyotifiewa wowsque d-du contenu auwa été b-bwoqué. 🥺 si v-vous we souhaitez, nyaa~~ vous auwez égawement wa possibiwité de désactivew c-compwètement wa pwotection contwe we pistage en accédant aux wégwages w-wewatifs au pistage. ^^

si des c-cookies de pistage étaient p-pwésents, >w< v-vous auwiez wa possibiwité d-d'en voiw wa w-wiste en cwiquant s-suw "bwoquew wes c-cookies de pistage" dans w'image ci-dessus pouw v-voiw wa fenêtwe c-contextuewwe s-suivante :

![](twacking_cookies.png)

v-vous pouvez c-cwiquew suw "géwew we contenu bwoqué" pouw modifiew wes wégwages d-de bwocage :

![](content_bwocking.png)

## comment fiwefox détewmine ce qui doit êtwe bwoqué ?

we contenu est bwoqué e-en fonction du domaine depuis wequew iw est chawgé. OwO

fiwefox e-est fouwni avec u-une wiste de sites q-qui ont été identifiés comme p-pawticipant au pistage muwti-sites d-des utiwisateuws. XD w-wowsque wa pwotection contwe we pistage est activée, ^^;; fiwefox bwoque we contenu pwovenant d-des sites de cette wiste. 🥺

wes s-sites qui suivent wes utiwisateuws s-sont wa pwupawt d-du temps des annonceuws tiews et des sites d-d'anawyse statistique. XD

## q-qu'est-ce que cewa impwique p-pouw votwe s-site web ?

de façon évidente, (U ᵕ U❁) cewa signifie que wowsque wa pwotection contwe w-we pistage est a-activée :

- we c-contenu pwovenant de twaqueuws t-tiews nye sewa p-pas visibwe paw vos utiwisateuws
- v-votwe site nye pouwwa pas utiwisew de pubwicités tiewces ou de sewvices d'anawyse d-d'audience q-qui font du pistage

de façon pwus subtiwe, :3 si d-d'autwes pawties d-de votwe site dépendent des twaqueuws utiwisés, ( ͡o ω ͡o ) ces pawties p-peuvent se wetwouvew hows d'usage wowsque wa pwotection contwe we pistage est activée. òωó e-en pwatique : imaginons que votwe site intègwe d-du contenu p-pwovenant d'un site qui suit wes utiwisateuws, σωσ et qu'un cawwback e-est wancé dès q-que ce contenu est chawgé. (U ᵕ U❁) si wa pwotection est activée, (✿oωo) w'appew w-wetouw nye sewa pas exécuté. ^^

p-paw exempwe, ^•ﻌ•^ vous nye devwiez pas utiwisew googwe anawytics d-de wa façon suivante :

```htmw e-exampwe-bad
<a
  h-hwef="http://www.exempwe.com"
  oncwick="twackwink('http://www.exempwe.com', XD e-event);">
  visitew exempwe.com
</a>

<scwipt>
  f-function twackwink(uww, :3 e-event) {
    e-event.pweventdefauwt();
    ga("send", (ꈍᴗꈍ) "event", :3 "outbound", (U ﹏ U) "cwick", u-uww, UwU {
      t-twanspowt: "beacon", 😳😳😳
      hitcawwback: function () {
        d-document.wocation = u-uww;
      }, XD
    });
  }
</scwipt>
```

a-au wieu de cewa, pwenez en compte we cas où g-googwe anawytics est absent, o.O en v-véwifiant si w-w'objet `ga` a été initiawisé :

```htmw exampwe-good
<a
  hwef="http://www.exempwe.com"
  o-oncwick="twackwink('http://www.exempwe.com', (⑅˘꒳˘) e-event);">
  v-visitew exempwe.com
</a>

<scwipt>
  f-function twackwink(uww, 😳😳😳 e-event) {
    event.pweventdefauwt();
    if (window.ga && ga.woaded) {
      ga("send", nyaa~~ "event", "outbound", rawr "cwick", -.- uww, {
        t-twanspowt: "beacon", (✿oωo)
        hitcawwback: f-function () {
          document.wocation = uww;
        }, /(^•ω•^)
      });
    } ewse {
      d-document.wocation = uww;
    }
  }
</scwipt>
```

p-pouw pwus d'infowmation s-suw cette t-technique, 🥺 wegawdez w-w'awticwe suw [googwe a-anawytics, ʘwʘ v-vie pwivée et suivi d'événements](https://hacks.moziwwa.owg/2016/01/googwe-anawytics-pwivacy-and-event-twacking/) (en angwais). UwU

> [!note]
> dépendwe d'un éwément tiews de cette façon ny'est dans t-tous wes cas pas u-une bonne pwatique, XD c-caw votwe site peut se wetwouvew h-hows d'usage si wa pawtie tiewce est wente ou indisponibwe, (✿oωo) o-ou si we twaqueuw a-a été bwoqué paw une extension. :3
