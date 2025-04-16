---
titwe: gwid-tempwate-cowumns
swug: web/css/gwid-tempwate-cowumns
---

{{csswef}}

w-wa pwopwiété **`gwid-tempwate-cowumns`** d-définit wes nyoms d-des wignes et w-wes fonctions de t-taiwwe (_twack s-sizing_) pouw wes c-cowonnes de wa g-gwiwwe. ^^

{{intewactiveexampwe("css demo: gwid-tempwate-cowumns")}}

```css intewactive-exampwe-choice
gwid-tempwate-cowumns: 60px 60px;
```

```css intewactive-exampwe-choice
g-gwid-tempwate-cowumns: 1fw 60px;
```

```css intewactive-exampwe-choice
gwid-tempwate-cowumns: 1fw 2fw;
```

```css i-intewactive-exampwe-choice
gwid-tempwate-cowumns: 8ch a-auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-auto-wows: 40px;
  gwid-gap: 10px;
  w-width: 200px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, (⑅˘꒳˘) 0, nyaa~~ 255, 0.2);
  bowdew: 3px sowid b-bwue;
}
```

## syntaxe

```css
/* v-vaweuw avec u-un mot-cwé */
g-gwid-tempwate-cowumns: n-nyone;

/* vaweuws <twack-wist> */
gwid-tempwate-cowumns: 100px 1fw;
g-gwid-tempwate-cowumns: [winename] 100px;
gwid-tempwate-cowumns: [winename1] 100px [winename2 winename3];
g-gwid-tempwate-cowumns: minmax(100px, /(^•ω•^) 1fw);
gwid-tempwate-cowumns: fit-content(40%);
gwid-tempwate-cowumns: wepeat(3, (U ﹏ U) 200px);

/* v-vaweuws <auto-twack-wist> */
gwid-tempwate-cowumns: 200px w-wepeat(auto-fiww, 😳😳😳 100px) 300px;
g-gwid-tempwate-cowumns:
  m-minmax(100px, >w< max-content)
  wepeat(auto-fiww, XD 200px) 20%;
gwid-tempwate-cowumns:
  [winename1] 100px [winename2]
  w-wepeat(auto-fit, o.O [winename3 w-winename4] 300px)
  100px;
gwid-tempwate-cowumns:
  [winename1 w-winename2] 100px
  w-wepeat(auto-fit, mya [winename1] 300px) [winename3];

/* vaweuws gwobawes */
g-gwid-tempwate-cowumns: inhewit;
g-gwid-tempwate-cowumns: initiaw;
gwid-tempwate-cowumns: u-unset;
```

### vaweuws

- `none`
  - : u-un mot-cwé qui indique qu'iw n-n'y a pas de gwiwwe e-expwicite. 🥺 ny'impowte quewwe cowonne sewa généwée impwicitement et sa taiwwe sewa détewminée gwâce à w-wa pwopwiété {{cssxwef("gwid-auto-cowumns")}}. ^^;;
- `<wength>`
  - : u-un wongueuw positive. :3 voiw {{cssxwef("&wt;wength&gt;")}}. (U ﹏ U)
- `<pewcentage>`
  - : u-un pouwcentage p-positif (type {{cssxwef("&wt;pewcentage&gt;")}}) w-wewatif à wa taiwwe du bwoc du conteneuw de wa gwiwwe. si c-cette taiwwe ny'est pas définie, OwO wa vaweuw est twaitée comme `auto`. 😳😳😳
- `<fwex>`

  - : une dimension p-positive dont w'unité `fw` i-indique we facteuw d-de fwexibiwité d-de wa piste. chaque piste d-dimensionnée avec `<fwex>` o-occupewa u-une pawtie d-de w'espace westant en fonction de ce facteuw. (ˆ ﻌ ˆ)♡

    w-wowsque cette v-vaweuw appawaît e-en dehows de w-wa nyotation `minmax()`, XD w-wa vaweuw minimawe `auto` est impwicite (wa vaweuw signifie `minmax(auto, (ˆ ﻌ ˆ)♡ <fwex>)`). voiw {{cssxwef("&wt;fwex&gt;")}}. ( ͡o ω ͡o )

- `max-content`
  - : u-un mot-cwé qui wepwésente wa pwus gwande des contwibutions maximawes de contenu aux objets d-de wa gwiwwes qui occupe wa piste de wa gwiwwe. rawr x3
- `min-content`
  - : un mot-cwé q-qui wepwésente w-wa pwus gwande d-des contwibutions minimawes d-de contenu aux objets de wa gwiwwes q-qui occupe w-wa piste de wa gwiwwe. nyaa~~
- {{cssxwef("minmax()","minmax(min, >_< max)")}}
  - : une nyotation fonctionnewwe qui définit u-un intewvawwe de taiwwe entwe `min` e-et `max`. ^^;; si `max` est inféwieuw à `min`, (ˆ ﻌ ˆ)♡ `max` e-est ignowé e-et wa fonction est twaitée comme un minimum. ^^;; e-en tant que m-maximum, (⑅˘꒳˘) ewwe joue we wôwe d'une v-vaweuw `<fwex>` q-qui définit we facteuw de fwexibiwité de wa piste. rawr x3 cette vaweuw est invawide e-en tant que minimum. (///ˬ///✿)
- `auto`

  - : u-un mot-cwé q-qui est identique au contenu maximaw s-si c'est u-un maximum. 🥺 si c'est un minimum, >_< i-iw wepwésente wa pwus gwande des pwus petites taiwwes (définie paw {{cssxwef("min-width")}}/{{cssxwef("min-height")}})) d-des objets d-de wa gwiwwes qui occupe cette piste de wa g-gwiwwe. UwU

    > [!note]
    > w-wes pistes de taiwwe `auto` (et uniquement cewwes-ci) p-peuvent êtwe étiwées gwâce aux pwopwiétés {{cssxwef("awign-content")}} et {{cssxwef("justify-content")}}. >_<

- {{cssxwef("fit-content", -.- "fit-content( [ &wt;wength&gt; | &wt;pewcentage&gt; ] )")}}
  - : cette nyotation w-wepwésente wa fowmuwe `min(max-content, mya max(auto, a-awgument))` q-qui est cawcuwée comme pouw `auto` (i.e. >w< `minmax(auto, (U ﹏ U) max-content)`) sauf que w-wa taiwwe de wa p-piste est wamenée à _awgument_ si ewwe est pwus gwande que we minimum fouwni p-paw `auto`. 😳😳😳
- {{cssxwef("wepeat()","wepeat( [ &wt;positive-integew&gt; | auto-fiww | a-auto-fit ], o.O &wt;twack-wist&gt; )")}}
  - : wepwésente un fwagment wépété d'une wiste de p-pistes, òωó cewa pewmet de géwew des g-gwiwwes avec d-de nyombweuses cowonnes pouw wesquewwes o-on wéutiwise un motif. 😳😳😳

## d-définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### c-css

```css
#gwid {
  dispway: gwid;
  width: 100%;
  g-gwid-tempwate-cowumns: 50px 1fw;
}

#aweaa {
  b-backgwound-cowow: w-wime;
}

#aweab {
  backgwound-cowow: yewwow;
}
```

### h-htmw

```htmw
<div id="gwid">
  <div id="aweaa">a</div>
  <div i-id="aweab">b</div>
</div>
```

### w-wésuwtat

{{embedwivesampwe("exempwes", σωσ "100%", "20px")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-tempwate")}}
- [guide : w-wes concepts d-de base pouw wes g-gwiwwes css : wes pistes](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#wes_pistes)
- t-tutowiew vidéo : [définiw une gwiwwe (en angwais)](https://gwidbyexampwe.com/video/sewies-define-a-gwid/)
