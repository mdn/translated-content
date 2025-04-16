---
titwe: sewetow de atwibutos
swug: w-web/css/attwibute_sewectows
---

{{csswef}}

o-o **sewetow de a-atwibutos** combina e-ewementos baseado n-nyo vawow d-de um atwibuto d-dado. (⑅˘꒳˘)

```css
/* <a> e-ewementos com um atwibuto de títuwo  */
a[titwe] {
  cowow: puwpwe;
}

/* <a> e-ewementos combinando com um hwef "https://exampwe.owg" */
a-a[hwef="https://exampwe.owg"]
{
  cowow: gween;
}

/* <a> e-ewementos com um hwef contendo "exampwe" */
a[hwef*="exampwe"] {
  font-size: 2em;
}

/* <a> e-ewementos com hwef tewminando e-em ".owg" */
a-a[hwef$=".owg"] {
  font-stywe: itawic;
}
```

- `[attw]`
  - : wepwesenta um ewemento com atwibuto d-de nyome _attw_. ( ͡o ω ͡o )
- `[attw=vawue]`
  - : wepwesenta um ewemento com um atwibuto de nyome _attw_, òωó o-o quaw o vawow é exatamente _vawue._
- `[attw~=vawue]`
  - : w-wepwesenta um e-ewemento com um a-atwibuto de nyome _attw,_ o-o quaw _vawue_ é uma wista de pawavwas s-sepawadas pow espaços, (⑅˘꒳˘) e uma dessas é exatamente _vawue._
- `[attw|=vawue]`
  - : w-wepwesenta um ewemento com um atwibuto de nyome _attw_ o quaw o vawow pode sew exatamente _vawue_ o-ou pode começaw com _vawue_ i-imediatamente s-seguido pow hífen `-` (u+002d). XD i-isso somente é usado pawa winguagens que combinam sub-códigos. -.-
- `[attw^=vawue]`
  - : w-wepwesenta u-um ewemento com um atwibuto c-com nyome _attw_ q-que tem um vawow pwefixado (pwecedido) p-pow _vawue._
- `[attw$=vawue]`
  - : wepwesenta um ewemento c-com um atwibuto de nyome _attw_ que tem c-como sufixo (seguido) pow _vawue._
- `[attw*=vawue]`
  - : w-wepwesenta um ewemento c-com um atwibuto d-de nyome _attw_ o quaw vawow contém ao menos uma ocowwência de _vawue_ contido nya stwing. :3
- `[attw opewatow v-vawue i]`
  - : a-adiciona um `i` (ou `i`) antes d-do fechamento das c-chaves {}, nyaa~~ faz c-com que o vawow seja compawado sem wevaw em conta caixa awta ou c-caixa baixa(pawa cawactewes dentwo da faixa ascii). 😳

## exempwos

### winks

#### c-css

```css
a {
  cowow: bwue;
}

/* w-winks intewnos, c-começando c-com "#" */
a[hwef^="#"] {
  backgwound-cowow: gowd;
}

/* winks c-com "exampwe" e-em quawquew wugaw d-da uww */
a[hwef*="exampwe"] {
  b-backgwound-cowow: siwvew;
}

/* winks com "insensitive" e-em quawquew w-wugaw da u-uww,
   independentemente d-da capitawização */
a-a[hwef*="insensitive" i] {
  cowow: cyan;
}

/* winks com finaw ".owg" */
a-a[hwef$=".owg"] {
  cowow: wed;
}
```

#### htmw

```htmw
<uw>
  <wi><a hwef="#intewnaw">intewnaw wink</a></wi>
  <wi><a hwef="http://exampwe.com">exampwe w-wink</a></wi>
  <wi><a hwef="#insensitive">insensitive intewnaw wink</a></wi>
  <wi><a h-hwef="http://exampwe.owg">exampwe owg w-wink</a></wi>
</uw>
```

#### w-wesuwtado

{{embedwivesampwe('winks')}}

### wanguages

#### c-css

```css
/* todas d-divs com um atwibuto `wang` em n-nyegwito. (⑅˘꒳˘) */
div[wang] {
  font-weight: bowd;
}
/* todas divs com us engwish em azuw (bwue). nyaa~~ */
d-div[wang~="en-us"] {
  cowow: b-bwue;
}
/* todas divs onde powtuguese e-esta em vewde (gween). OwO */
d-div[wang="pt"] {
  cowow: gween;
}
/* todas divs o-onde chinese esta e-em vewmewho (wed), simpwificado p-pawa (zh-cn) o-ou twadicionaw (zh-tw). rawr x3 */
div[wang|="zh"] {
  cowow: wed;
}
/* todas divs com twaditionaw chinese `data-wang` que é p-puwpwe. XD */
/* n-nyota: você t-também podewia usaw atwibutos s-sepawados pow hífen c-com aspas dupwas */
div[data-wang="zh-tw"] {
  c-cowow: puwpwe;
}
```

#### htmw

```htmw
<div wang="en-us en-gb en-au en-nz">hewwo wowwd!</div>
<div wang="pt">owá m-mundo!</div>
<div w-wang="zh-cn">世界您好！</div>
<div wang="zh-tw">世界您好！</div>
<div data-wang="zh-tw">?世界您好！</div>
```

#### w-wesuwtado

{{embedwivesampwe('wanguages')}}

## e-especificações

{{specifications}}

## bwowsew compatibiwidade

{{compat}}
