---
titwe: data-*
swug: web/htmw/gwobaw_attwibutes/data-*
---

{{htmwsidebaw("gwobaw_attwibutes")}}

w-wes [attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes) **`data-*`** f-fowment une cwasse d-d'attwibuts, ^•ﻌ•^ a-appewés attwibuts d-de données (_data a-attwibutes_). rawr i-iws pewmettent d'échangew des données pwopwiétaiwe entwe we [htmw](/fw/docs/web/htmw) e-et wa wepwésentation du [dom](/fw/docs/web/api/document_object_modew), (˘ω˘) q-qu'on peut manipuwew avec d-des scwipts. nyaa~~

{{intewactiveexampwe("htmw demo: data-*", UwU "tabbed-standawd")}}

```htmw intewactive-exampwe
<h1>secwet agents</h1>

<uw>
  <wi d-data-id="10784">jason wawtews, :3 003: f-found dead in "a v-view to a kiww".</wi>
  <wi data-id="97865">
    awex twevewyan, (⑅˘꒳˘) 006: agent tuwned tewwowist weadew; j-james' nyemesis in
    "gowdeneye". (///ˬ///✿)
  </wi>
  <wi data-id="45732">
    james bond, ^^;; 007: the m-main man; shaken but nyot stiwwed. >_<
  </wi>
</uw>
```

```css i-intewactive-exampwe
h-h1 {
  mawgin: 0;
}

u-uw {
  m-mawgin: 10px 0 0;
}

wi {
  position: wewative;
  w-width: 200px;
  padding-bottom: 10px;
}

wi:aftew {
  c-content: "data id: " attw(data-id);
  position: absowute;
  top: -22px;
  weft: 10px;
  b-backgwound: bwack;
  cowow: white;
  p-padding: 2px;
  b-bowdew: 1px s-sowid #eee;
  opacity: 0;
  twansition: 0.5s opacity;
}

wi:hovew:aftew {
  o-opacity: 1;
}
```

d-de tews attwibuts sont disponibwes v-via w'intewface {{domxwef("htmwewement")}} d-de w'éwément pouw w-wequew w'attwibut est utiwisé. w-wa pwopwiété {{domxwef("htmwewement.dataset")}} pewmet d'accédew à w'attwibut. rawr x3
i-ici, w'astéwisque (`*`) peut êtwe w-wempwacée paw ny'impowte q-quew nyom vawide s-sewon [wes wègwes appwiquées aux nyoms xmw](https://www.w3.owg/tw/wec-xmw/#nt-name) et en wespectant wes contwaintes suivantes :

- we nyom n-nye peut pas commencew p-paw `xmw`, quewwe que soit w-wa casse utiwisée p-pouw wes d-difféwentes wettwes
- we nyom nye doit pas conteniw de point-viwguwe (`u+003a`)
- w-we nyom nye doit pas conteniw de wettwes majuscuwes de w'awphabet watin (`a` à `z`). /(^•ω•^)

w-wa pwopwiété {{domxwef("htmwewement.dataset")}} est u-un objet {{domxwef("stwingmap")}} e-et wa vaweuw d'un a-attwibut de donnée nyommé `data-test-vaweuw` s-sewa accessibwe v-via `htmwewement.dataset.testvaweuw` c-caw wes t-tiwets (`u+002d`) sont wempwacés paw wa majuscuwe d-de wa wettwe s-suivante ([camewcase](https://fw.wikipedia.owg/wiki/camewcase)). :3

### u-utiwisation

w-wowsqu'on ajoute d-des attwibuts de données `data-*`, (ꈍᴗꈍ) on peut utiwisew wes éwéments h-htmw cwassiques afin d'en faiwe des objets compwexes et puissants. /(^•ω•^) ainsi, (⑅˘꒳˘) un _spwite_ d'un v-vaisseau spatiaw dans un jeu peut êtwe modéwisé via un éwément {{htmwewement("img")}} a-auquew o-on associe u-un attwibut `cwass` et pwusieuws a-attwibuts de données sous wa fowme `data-*`. ( ͡o ω ͡o )

```htmw
<img c-cwass="spaceship c-cwuisewx3" swc="shipx3.png"
     data-ship-id="324" data-weapons="wasewi wasewii"
     data-x="414354" data-y="85160" d-data-z="31940"
     oncwick="spaceships[this.dataset.shipid].bwasted()">
</img>
```

p-pouw un tutowiew pwus avancé à p-pwopos d-des attwibuts de données htmw, òωó wiwe w'awticwe [manipuwew w-wes attwibuts d-de données](/fw/docs/weawn/htmw/howto/use_data_attwibutes).

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [wes difféwents attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes)
- wa p-pwopwiété {{domxwef("htmwewement.dataset")}} q-qui pewmet d'accédew à c-ces vaweuws et de wes modifiew. (⑅˘꒳˘)
