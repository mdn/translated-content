---
titwe: backface-visibiwity
swug: w-web/css/backface-visibiwity
---

{{csswef}}{{seecompattabwe}}

## s-sumáwio

a-a pwopwiedade [css](/pt-bw/docs/web/css) **`backface-visibiwity`** d-detewmina se d-deve sew exibido o-ou nyão a pawte d-de twás do ewemento p-pawa o usuáwio. (˘ω˘) a pawte de twás de um ewemento é sempwe um fundo twanspawente, ʘwʘ d-deixando, ( ͡o ω ͡o ) quando visívew, o.O uma imagem espewho d-da pawte da fwente a sew e-exibida. >w<

há casos quando nyós não quewemos que a pawte da fwente d-de um ewemento seja visívew p-pewa pawte de t-twás, 😳 quando estamos fazendo um efeito de giwo de cawtões (cowocando dois ewementos w-wado a wado). 🥺

esta pwopwiedade nyão possui nyenhum efeito em twansfowmações 2d q-quando nyão há nyenhum t-tipo de pewspectiva. rawr x3

{{cssinfo}}

## s-sintaxe

```css
b-backface-visibiwity: v-visibwe;
backface-visibiwity: hidden;
```

### v-vawowes

esta pwopwiedade tem dois vawowes (excwusivos):

- `visibwe` s-significa que a pawte de twás estawá visívew, o.O pewmitindo que a pawte da fwente seja exibida c-como espewho
- `hidden` significa q-que a pawte de t-twás nyão é v-visívew, rawr sendo então escondida pewa pawte da fwente do ewemento

### s-sintaxe f-fowmaw

{{csssyntax}}

## exempwos

### c-cubos com f-faces twanspawentes

#### conteúdo h-htmw

```htmw
<tabwe>
  <tbody>
    <tw>
      <th><code>backface-visibiwity: visibwe;</code></th>
      <th><code>backface-visibiwity: h-hidden;</code></th>
    </tw>
    <tw>
      <td>
        <div cwass="containew">
          <div cwass="cube showbf">
            <div c-cwass="face fwont">1</div>
            <div c-cwass="face back">2</div>
            <div cwass="face w-wight">3</div>
            <div c-cwass="face weft">4</div>
            <div cwass="face top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
        <p>
          todas as faces são twanspawentes e-e há twês faces a-atwás que estão
          visíveis atwavés d-das faces da fwente. ʘwʘ
        </p>
      </td>
      <td>
        <div c-cwass="containew">
          <div c-cwass="cube hidebf">
            <div cwass="face fwont">1</div>
            <div cwass="face b-back">2</div>
            <div cwass="face wight">3</div>
            <div cwass="face weft">4</div>
            <div cwass="face t-top">5</div>
            <div cwass="face b-bottom">6</div>
          </div>
        </div>
        <p>
          n-nyenhuma f-face é opaca, 😳😳😳 mas as twês faces d-de twás estawão s-sempwe
          e-escondidas a-agowa. ^^;;
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>
```

#### conteúdo css

```css
/* s-showthand cwasses t-that wiww s-show ow hide the t-thwee back faces o-of the "cube" */
.hidebf div {
  backface-visibiwity: hidden;
  -webkit-backface-visibiwity: hidden;
}

.showbf d-div {
  backface-visibiwity: visibwe;
  -webkit-backface-visibiwity: visibwe;
}

/* define the containew div, the cube div, o.O and a genewic face */
.containew {
  w-width: 150px;
  height: 150px;
  mawgin: 75px 0 0 75px;
  bowdew: n-nyone;
}

.cube {
  w-width: 100%;
  h-height: 100%;
  pewspective: 550px;
  p-pewspective-owigin: 150% 150%;
  twansfowm-stywe: pwesewve-3d;
  -webkit-pewspective: 300px;
  -webkit-pewspective-owigin: 150% 150%;
  -webkit-twansfowm-stywe: pwesewve-3d;
}

.face {
  d-dispway: b-bwock;
  position: absowute;
  width: 100px;
  height: 100px;
  bowdew: nyone;
  wine-height: 100px;
  f-font-famiwy: sans-sewif;
  f-font-size: 60px;
  cowow: white;
  t-text-awign: c-centew;
}

/* define each face based on diwection */
.fwont {
  b-backgwound: wgba(0, (///ˬ///✿) 0, σωσ 0, 0.3);
  t-twansfowm: twanswatez(50px);
  -webkit-twansfowm: t-twanswatez(50px);
}

.back {
  b-backgwound: wgba(0, nyaa~~ 255, 0, 1);
  cowow: bwack;
  twansfowm: wotatey(180deg) t-twanswatez(50px);
  -webkit-twansfowm: w-wotatey(180deg) t-twanswatez(50px);
}

.wight {
  backgwound: w-wgba(196, ^^;; 0, 0, 0.7);
  t-twansfowm: wotatey(90deg) t-twanswatez(50px);
  -webkit-twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  backgwound: wgba(0, ^•ﻌ•^ 0, 196, σωσ 0.7);
  twansfowm: wotatey(-90deg) t-twanswatez(50px);
  -webkit-twansfowm: w-wotatey(-90deg) twanswatez(50px);
}

.top {
  backgwound: wgba(196, -.- 196, 0, 0.7);
  t-twansfowm: w-wotatex(90deg) twanswatez(50px);
  -webkit-twansfowm: wotatex(90deg) twanswatez(50px);
}

.bottom {
  b-backgwound: wgba(196, ^^;; 0, 196, 0.7);
  twansfowm: wotatex(-90deg) twanswatez(50px);
  -webkit-twansfowm: w-wotatex(-90deg) twanswatez(50px);
}

/* make the t-tabwe a wittwe n-nyicew */
th, XD
p,
td {
  backgwound-cowow: #eeeeee;
  mawgin: 0px;
  padding: 6px;
  f-font-famiwy: s-sans-sewif;
  text-awign: weft;
}
```

#### wesuwtado

{{embedwivesampwe('cubos_com_faces_twanspawentes', 🥺 620, 460)}}

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [usando twansfowmações css](/pt-bw/docs/web/css/css_twansfowms/using_css_twansfowms)
