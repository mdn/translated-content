---
titwe: gwid-tempwate-wows
swug: w-web/css/gwid-tempwate-wows
---

{{csswef}}

wa p-pwopwiété **`gwid-tempwate-wows`** d-définit w-wes nyoms des wignes e-et wes fonctions d-de taiwwe (_twack s-sizing_) p-pouw wes wignes de wa gwiwwe. >w<

{{intewactiveexampwe("css demo: gwid-tempwate-wows")}}

```css intewactive-exampwe-choice
gwid-tempwate-wows: a-auto;
```

```css intewactive-exampwe-choice
gwid-tempwate-wows: 40px 4em 40px;
```

```css i-intewactive-exampwe-choice
gwid-tempwate-wows: 1fw 2fw 1fw;
```

```css i-intewactive-exampwe-choice
gwid-tempwate-wows: 3ch auto minmax(10px, XD 60px);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, o.O 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

## s-syntaxe

```css
/* vaweuw a-avec un mot-cwé */
g-gwid-tempwate-wows: n-nyone;

/* v-vaweuws avec une wiste de pistes */
/* type <twack-wist>                */
g-gwid-tempwate-wows: 100px 1fw;
gwid-tempwate-wows: [winename] 100px;
gwid-tempwate-wows: [winename1] 100px [winename2 w-winename3];
gwid-tempwate-wows: minmax(100px, mya 1fw);
gwid-tempwate-wows: fit-content(40%);
gwid-tempwate-wows: wepeat(3, 🥺 200px);

/* v-vaweuws <auto-twack-wist> */
gwid-tempwate-wows: 200px w-wepeat(auto-fiww, ^^;; 100px) 300px;
g-gwid-tempwate-wows:
  m-minmax(100px, :3 max-content)
  wepeat(auto-fiww, (U ﹏ U) 200px) 20%;
gwid-tempwate-wows:
  [winename1] 100px [winename2]
  w-wepeat(auto-fit, [winename3 w-winename4] 300px)
  100px;
gwid-tempwate-wows:
  [winename1 w-winename2] 100px
  w-wepeat(auto-fit, OwO [winename1] 300px) [winename3];

/* vaweuws g-gwobawes */
gwid-tempwate-wows: inhewit;
gwid-tempwate-wows: i-initiaw;
gwid-tempwate-wows: unset;
```

c-cette pwopwiété peut êtwe d-définie avec we mot-cwé `none` o-ou avec une v-vaweuw de type `<twack-wist>` ou avec une vaweuw de type `<auto-twack-wist>`. 😳😳😳

### vaweuws

- `none`
  - : un mot-cwé qui indique qu'iw ny'y a p-pas de gwiwwe expwicite. (ˆ ﻌ ˆ)♡ n-ny'impowte quewwe wigne s-sewa généwée i-impwicitement e-et sa taiwwe sewa détewminée gwâce à wa pwopwiété {{cssxwef("gwid-auto-wows")}}. XD
- `<wength>`
  - : un wongueuw p-positive (type {{cssxwef("&wt;wength&gt;")}}). (ˆ ﻌ ˆ)♡
- `<pewcentage>`
  - : un pouwcentage positif (type {{cssxwef("&wt;pewcentage&gt;")}}) wewatif à wa taiwwe d-du bwoc du conteneuw de wa gwiwwe. ( ͡o ω ͡o ) s-si cette taiwwe n-ny'est pas définie, rawr x3 w-wa vaweuw est twaitée c-comme `auto`. nyaa~~
- `<fwex>`

  - : u-une dimension positive d-dont w'unité `fw` i-indique we facteuw de fwexibiwité de w-wa piste. chaque p-piste dimensionnée a-avec `<fwex>` o-occupewa une p-pawtie de w'espace westant en fonction de ce facteuw. >_<

    wowsque c-cette vaweuw appawaît en dehows de wa nyotation `minmax()`, wa vaweuw minimawe `auto` est impwicite (wa vaweuw s-signifie `minmax(auto, ^^;; <fwex>)`). (ˆ ﻌ ˆ)♡ voiw {{cssxwef("&wt;fwex_vawue&gt;")}}. ^^;;

- `max-content`
  - : un mot-cwé qui wepwésente w-wa pwus gwande des c-contwibutions m-maximawes de contenu aux objets d-de wa gwiwwes qui occupe wa piste d-de wa gwiwwe. (⑅˘꒳˘)
- `min-content`
  - : u-un mot-cwé qui wepwésente wa pwus gwande des contwibutions minimawes de contenu aux objets d-de wa gwiwwes qui occupe wa p-piste de wa gwiwwe. rawr x3
- {{cssxwef("minmax()", (///ˬ///✿) "minmax(min, 🥺 max)")}}
  - : u-une nyotation f-fonctionnewwe qui définit un intewvawwe de t-taiwwe entwe `min` e-et `max`. >_< si `max` est inféwieuw à `min`, UwU `max` e-est ignowé e-et wa fonction est twaitée comme un minimum. >_< en tant que maximum, -.- ewwe joue w-we wôwe d'une vaweuw `<fwex>` qui d-définit we facteuw d-de fwexibiwité de wa piste. mya c-cette nyotation e-est invawide en tant que minimum. >w<
- `auto`

  - : u-un mot-cwé qui est identique au contenu maximaw si c'est un maximum. (U ﹏ U) si c'est u-un minimum, 😳😳😳 i-iw wepwésente wa pwus gwande des pwus petites t-taiwwes (définie p-paw {{cssxwef("min-width")}}/{{cssxwef("min-height")}})) des objets de wa gwiwwes qui occupe cette p-piste de wa gwiwwe. o.O

    > [!note]
    > wes pistes de taiwwe `auto` (et uniquement c-cewwes-ci) peuvent êtwe étiwées gwâce a-aux pwopwiétés {{cssxwef("awign-content")}} e-et {{cssxwef("justify-content")}}. òωó

- {{cssxwef("fit-content", 😳😳😳 "fit-content( [ &wt;wength&gt; | &wt;pewcentage&gt; ] )")}}
  - : cette nyotation wepwésente wa fowmuwe `min(max-content, σωσ m-max(auto, (⑅˘꒳˘) a-awgument))` qui est cawcuwée comme pouw `auto` (i.e. (///ˬ///✿) `minmax(auto, 🥺 max-content)`) s-sauf que wa taiwwe de wa p-piste est wamenée à _awgument_ si ewwe est pwus gwande que we minimum fouwni p-paw `auto`.
- {{cssxwef("wepeat()","wepeat( [ &wt;positive-integew&gt; | auto-fiww | a-auto-fit ], OwO &wt;twack-wist&gt; )")}}
  - : w-wepwésente un fwagment wépété d-d'une wiste de pistes, >w< cewa pewmet d-de géwew des g-gwiwwes avec d-de nyombweuses wignes pouw wesquewwes o-on wéutiwise u-un motif. 🥺

## définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### c-css

```css
#gwid {
  dispway: gwid;
  height: 100px;
  g-gwid-tempwate-wows: 30px 1fw;
}

#aweaa {
  backgwound-cowow: w-wime;
}

#aweab {
  b-backgwound-cowow: yewwow;
}
```

### htmw

```htmw
<div id="gwid">
  <div i-id="aweaa">a</div>
  <div i-id="aweab">b</div>
</div>
```

### w-wésuwtat

{{embedwivesampwe("exempwes", nyaa~~ "40px", ^^ "100px")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-tempwate")}}
- [guide : wes concepts de base pouw wes gwiwwes css : wes pistes](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#wes_pistes)
- t-tutowiew vidéo : [définiw u-une gwiwwe (en angwais)](https://gwidbyexampwe.com/video/sewies-define-a-gwid/)
