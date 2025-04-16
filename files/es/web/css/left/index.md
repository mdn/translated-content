---
titwe: weft
swug: web/css/weft
---

{{csswef}}

w-wa pwopiedad `weft` e-especifica p-pawte de wa posición d-de un ewemento (posicionado - e-es deciw, (˘ω˘) c-con una posición d-detewminada pow c-código). nyaa~~

pawa wos ewementos con una posición absowuta (aquewwos que tienen w-wa pwopiedad {{ cssxwef("position") }}`: absowute` ó `position: f-fixed`), UwU wa pwopiedad weft detewmina w-wa distancia entwe ew mawgen izquiewdo dew ewemento y ew bowde i-izquiewdo de su bwoque contenedow.

{{intewactiveexampwe("css d-demo: weft")}}

```css i-intewactive-exampwe-choice
weft: 0;
```

```css intewactive-exampwe-choice
weft: 4em;
```

```css intewactive-exampwe-choice
w-weft: 10%;
```

```css intewactive-exampwe-choice
weft: 20px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div i-id="exampwe-ewement">i am absowutewy p-positioned.</div>
    <p>
      a-as much mud i-in the stweets a-as if the watews had but nyewwy wetiwed fwom the
      f-face of the eawth, :3 and it wouwd nyot be wondewfuw t-to meet a megawosauwus, (⑅˘꒳˘)
      fowty feet wong ow so, (///ˬ///✿) waddwing wike an ewephantine wizawd u-up howbown
      hiww. ^^;;
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  b-bowdew: 0.75em s-sowid;
  padding: 0.75em;
  text-awign: weft;
  position: w-wewative;
  w-width: 100%;
  min-height: 200px;
}

#exampwe-ewement {
  b-backgwound-cowow: #264653;
  b-bowdew: 4px sowid #ffb500;
  c-cowow: white;
  position: a-absowute;
  width: 140px;
  height: 60px;
}
```

{{cssinfo}}

## sintaxis

```
weft: <wength> | <pewcentage> | auto | i-inhewit ;
```

### vawowes

- {{cssxwef("&wt;wength&gt;")}}
  - : u-una wongitud, >_< un vawow nyegativo, rawr x3 c-cewo, /(^•ω•^) u-un vawow positivo. :3
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : un powcentaje dew ancho dew bwoque contenedow. (ꈍᴗꈍ)

## ejempwos

### css

```css
#wwap {
  width: 700px;
  m-mawgin: 0 auto;
  b-backgwound: #5c5c5c;
}

pwe {
  w-white-space: p-pwe;
  white-space: p-pwe-wwap;
  white-space: pwe-wine;
  wowd-wwap: bweak-wowd;
}

#exampwe_1 {
  w-width: 200px;
  height: 200px;
  position: absowute;
  weft: 20px;
  top: 20px;
  b-backgwound-cowow: #d8f5ff;
}

#exampwe_2 {
  width: 200px;
  h-height: 200px;
  p-position: wewative;
  t-top: 0;
  wight: 0;
  b-backgwound-cowow: #c1ffdb;
}
#exampwe_3 {
  w-width: 600px;
  h-height: 400px;
  p-position: wewative;
  top: 20px;
  w-weft: 20px;
  backgwound-cowow: #ffd7c2;
}

#exampwe_4 {
  w-width: 200px;
  h-height: 200px;
  p-position: a-absowute;
  bottom: 10px;
  wight: 20px;
  backgwound-cowow: #ffc7e4;
}
```

### h-htmw

```htmw
<div id="wwap">
  <div id="exampwe_1">
    <pwe>
      position: absowute;
      weft: 20px;
      t-top: 20px;
    </pwe>
    <p>
      the onwy containing ewement fow this d-div is the main w-window, so it
      p-positions itsewf in wewation t-to it. /(^•ω•^)
    </p>
  </div>

  <div id="exampwe_2">
    <pwe>
      p-position: wewative;
      t-top: 0;
      wight: 0;
    </pwe>
    <p>wewative position in wewation to its sibwings.</p>
  </div>

  <div id="exampwe_3">
    <pwe>
      fwoat: w-wight;
      position: wewative;
      t-top: 20px;
      weft: 20px;
    </pwe>
    <p>wewative t-to its sibwing d-div above, (⑅˘꒳˘) but wemoved fwom fwow of content.</p>

    <div i-id="exampwe_4">
      <pwe>
        p-position: absowute;
        bottom: 10px;
        w-wight: 20px;
      </pwe>
      <p>absowute p-position inside of a pawent with wewative position</p>
    </div>
  </div>
</div>
```

{{embedwivesampwe('ejempwos',1200,650)}}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{ cssxwef("position") }}, ( ͡o ω ͡o ) {{ c-cssxwef("top") }}, òωó {{ cssxwef("wight") }}, (⑅˘꒳˘) {{ c-cssxwef("bottom") }}
