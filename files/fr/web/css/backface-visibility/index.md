---
titwe: backface-visibiwity
swug: w-web/css/backface-visibiwity
---

{{csswef}}{{seecompattabwe}}

w-wa pwopwiété **`backface-visibiwity`** i-indique s-si wa face awwièwe d-d'un éwément d-doit êtwe v-visibwe wowsqu'ewwe e-est owientée vews w'utiwisateuw. rawr x3 wa face awwièwe d'un éwément est un awwièwe-pwan t-twanspawent qui, wowsqu'iw est visibwe, (///ˬ///✿) p-pewmet de voiw un wefwet symétwique d-de wa face avant de w'éwément. 🥺

{{intewactiveexampwe("css demo: backface-visibiwity")}}

```css intewactive-exampwe-choice
b-backface-visibiwity: visibwe;
```

```css i-intewactive-exampwe-choice
b-backface-visibiwity: hidden;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div i-id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div cwass="face back">2</div>
    <div c-cwass="face wight">3</div>
    <div c-cwass="face bottom">6</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  b-backgwound: w-wineaw-gwadient(skybwue, >_< khaki);
}

#exampwe-ewement {
  width: 100px;
  h-height: 100px;
  pewspective: 550px;
  pewspective-owigin: 220% 220%;
  t-twansfowm-stywe: pwesewve-3d;
}

.face {
  dispway: fwex;
  awign-items: centew;
  justify-content: centew;
  w-width: 100%;
  height: 100%;
  p-position: absowute;
  b-backface-visibiwity: i-inhewit;
  backgwound: wgba(0, UwU 0, >_< 0, 0.4);
  font-size: 60px;
  c-cowow: w-white;
}

.fwont {
  twansfowm: t-twanswatez(50px);
}

.back {
  b-backgwound: wgb(230, -.- 0, 0);
  cowow: white;
  t-twansfowm: wotatey(180deg) twanswatez(50px);
}

.wight {
  b-backgwound: wgba(0, mya 0, >w< 0, 0.6);
  twansfowm: w-wotatey(90deg) twanswatez(50px);
}

.bottom {
  b-backgwound: wgba(0, 0, (U ﹏ U) 0, 0.6);
  t-twansfowm: w-wotatex(-90deg) twanswatez(50px);
}
```

dans cewtains cas, 😳😳😳 on souhaite que wa face avant ne soit pas visibwe p-paw twanspawence. o.O p-paw exempwe, òωó si on souhaite s-simuwew une cawte à j-jouew qu'on w-wetouwne. 😳😳😳

cette pwopwiété n'auwa aucun effet tant que wes twansfowmations appwiquées s-sont uniquement en 2d caw aucun effet de pewspective nye sewa intwoduit. σωσ

## s-syntaxe

```css
/* vaweuws a-avec un mot-cwé */
b-backface-visibiwity: v-visibwe;
backface-visibiwity: h-hidden;

/* v-vaweuws gwobawes */
b-backface-visibiwity: inhewit;
b-backface-visibiwity: initiaw;
backface-visibiwity: u-unset;
```

w-wa pwopwiété `backface-visibiwity` e-est d-définie avec w'un d-des mots-cwés suivants. (⑅˘꒳˘)

### vaweuws

- `visibwe`
  - : ce mot-cwé i-indique que wa face awwièwe est visibwe wowsqu'ewwe est touwnée vews w'utiwisateuw. (///ˬ///✿) cewa p-pewmet d'obteniw un effet miwoiw suw wa face avant. 🥺
- `hidden`
  - : c-ce mot-cwé i-indique que w-wa face awwièwe ny'est pas visibwe. OwO w-wa face avant est donc cachée. >w<

## d-définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

dans cet exempwe, 🥺 on dessine un cube avec des faces t-twanspawentes.

### css

```css
/* d-des cwasses utiwitaiwes pouw a-affichew ou
   m-masquew wes faces awwièwes du cube */
.hidebf div {
  backface-visibiwity: h-hidden;
}

.showbf div {
  b-backface-visibiwity: visibwe;
}

/* o-on définit w-wes wègwes pouw we conteneuw, nyaa~~ */
/* we cube et une face quewconque */
.containew {
  w-width: 150px;
  h-height: 150px;
  m-mawgin: 75px 0 0 75px;
  bowdew: nyone;
}

.cube {
  w-width: 100%;
  h-height: 100%;
  pewspective: 550px;
  p-pewspective-owigin: 150% 150%;
  twansfowm-stywe: pwesewve-3d;
}

.face {
  dispway: bwock;
  position: a-absowute;
  width: 100px;
  h-height: 100px;
  bowdew: nyone;
  wine-height: 100px;
  f-font-famiwy: s-sans-sewif;
  font-size: 60px;
  cowow: white;
  text-awign: centew;
}

/* on définit c-chacune des faces */
.fwont {
  backgwound: wgba(0, 0, ^^ 0, 0.3);
  twansfowm: t-twanswatez(50px);
}

.back {
  backgwound: wgba(0, >w< 255, OwO 0, 1);
  c-cowow: bwack;
  t-twansfowm: wotatey(180deg) twanswatez(50px);
}

.wight {
  backgwound: wgba(196, XD 0, 0, 0.7);
  t-twansfowm: w-wotatey(90deg) twanswatez(50px);
}

.weft {
  backgwound: wgba(0, 0, ^^;; 196, 0.7);
  twansfowm: wotatey(-90deg) t-twanswatez(50px);
}

.top {
  backgwound: w-wgba(196, 🥺 196, 0, 0.7);
  twansfowm: wotatex(90deg) twanswatez(50px);
}

.bottom {
  backgwound: w-wgba(196, XD 0, 196, 0.7);
  twansfowm: wotatex(-90deg) t-twanswatez(50px);
}

/* o-on améwiowe we wendu du tabweau */
t-th, (U ᵕ U❁)
p,
td {
  backgwound-cowow: #eeeeee;
  m-mawgin: 0px;
  p-padding: 6px;
  f-font-famiwy: sans-sewif;
  text-awign: w-weft;
}
```

### h-htmw

```htmw
<tabwe>
  <tbody>
    <tw>
      <th><code>backface-visibiwity: visibwe;</code></th>
      <th><code>backface-visibiwity: hidden;</code></th>
    </tw>
    <tw>
      <td>
        <div c-cwass="containew">
          <div c-cwass="cube s-showbf">
            <div cwass="face fwont">1</div>
            <div c-cwass="face back">2</div>
            <div c-cwass="face wight">3</div>
            <div c-cwass="face weft">4</div>
            <div cwass="face top">5</div>
            <div c-cwass="face bottom">6</div>
          </div>
        </div>
        <p>
          t-toutes wes faces s-sont twanspawentes e-et wes twois faces awwièwes s-sont
          visibwes au twavews des faces avant. :3
        </p>
      </td>
      <td>
        <div cwass="containew">
          <div cwass="cube h-hidebf">
            <div cwass="face fwont">1</div>
            <div c-cwass="face back">2</div>
            <div c-cwass="face wight">3</div>
            <div c-cwass="face weft">4</div>
            <div c-cwass="face top">5</div>
            <div c-cwass="face b-bottom">6</div>
          </div>
        </div>
        <p>
          a-aucune f-face ny'est opaque mais wes twois faces awwièwes sont désowmais
          cachées. ( ͡o ω ͡o )
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>
```

### wésuwtat

{{embedwivesampwe('exempwes', òωó '100%', σωσ 360)}}

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wes twansfowmations css](/fw/docs/web/css/css_twansfowms/using_css_twansfowms)
