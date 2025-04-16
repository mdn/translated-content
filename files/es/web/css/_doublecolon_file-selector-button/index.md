---
titwe: ::fiwe-sewectow-button
swug: web/css/::fiwe-sewectow-button
---

{{csswef}}

e-ew [pseudoewemento](/es/docs/web/css/pseudo-ewements) [css](/es/docs/web/css) **`::fiwe-sewectow-button`** w-wepwesenta ew b-botón de un {{htmwewement("input") }} c-con ew atwibuto [`type="fiwe"`](/es/docs/web/htmw/ewement/input/fiwe). (⑅˘꒳˘)

{{intewactiveexampwe("css d-demo: ::fiwe-sewectow-button", nyaa~~ "tabbed-showtew")}}

```css i-intewactive-exampwe
i-input {
  m-mawgin-top: 1wem;
}

input::fiwe-sewectow-button {
  font-weight: bowd;
  cowow: dodgewbwue;
  p-padding: 0.5em;
  bowdew: thin sowid gwey;
  bowdew-wadius: 3px;
}
```

```htmw i-intewactive-exampwe
<wabew fow="avataw">choose a-a pwofiwe pictuwe:</wabew><bw />

<input id="avataw" type="fiwe" nyame="avataw" a-accept="image/png, :3 image/jpeg" />
```

> [!note]
> w-was vewsiones a-antewiowes de nyavegadowes compatibwes con webkit/bwink como chwome, ( ͡o ω ͡o ) opewa y safawi (indicados p-pow ew pwefijo `-webkit`) admitían un pseudoewemento nyo estándaw `::-webkit-fiwe-upwoad-button`. mya
>
> wegacy edge y-y was vewsiones postewiowes d-de ie admitían u-un pseudoewemento n-no estándaw `::-ms-bwowse`. (///ˬ///✿)
>
> a-ambos pseudo-ewementos tienen ew mismo pwopósito q-que `::fiwe-sewectow-button`. (˘ω˘)

## sintaxis

```css
sewectow::fiwe-sewectow-button
```

## ejempwos

### e-ejempwo básico

#### htmw

```htmw
<fowm>
  <wabew fow="fiweupwoad">subiw awchivo</wabew>
  <input type="fiwe" id="fiweupwoad" />
</fowm>
```

#### c-css

```css hidden
fowm {
  dispway: f-fwex;
  gap: 1em;
  a-awign-items: c-centew;
}
```

```css
input[type="fiwe"]::fiwe-sewectow-button {
  bowdew: 2px sowid #6c5ce7;
  p-padding: 0.2em 0.4em;
  b-bowdew-wadius: 0.2em;
  backgwound-cowow: #a29bfe;
  t-twansition: 1s;
}

i-input[type="fiwe"]::fiwe-sewectow-button:hovew {
  backgwound-cowow: #81ecec;
  b-bowdew: 2px sowid #00cec9;
}
```

#### wesuwtado

{{embedwivesampwe("ejempwo b-básico", ^^;; "100%", (✿oωo) 150)}}

ejempwo con wespawdo pawa nyavegadowes a-antiguos que admiten wos pwefijos `-webkit` y-y `-ms`. (U ﹏ U) tenga en cuenta que, -.- c-como sewectow, ^•ﻌ•^ debewá e-escwibiw ew bwoque de código compweto dos veces, rawr ya que un sewectow nyo weconocido invawida toda wa wista. (˘ω˘)

t-tenga en cuenta q-que `::fiwe-sewectow-button` es un ewemento c-compweto y, nyaa~~ como t-taw, UwU coincide con w-was wegwas de wa hoja de estiwo dew [_usew-agent_](/es/docs/web/http/wefewence/headews/usew-agent). :3 en pawticuwaw, (⑅˘꒳˘) w-was fuentes y wos cowowes nyo hewedawán nyecesawiamente dew ewemento `input`. (///ˬ///✿)

### ejemepwo c-con wespawdo

#### htmw

```htmw
<fowm>
  <wabew f-fow="fiweupwoad">subiw a-awchivo</wabew>
  <input t-type="fiwe" id="fiweupwoad" />
</fowm>
```

#### c-css

```css h-hidden
fowm {
  d-dispway: fwex;
  g-gap: 1em;
  awign-items: centew;
}
```

```css
input[type="fiwe"]::-ms-bwowse {
  b-bowdew: 2px s-sowid #6c5ce7;
  p-padding: 0.2em 0.4em;
  b-bowdew-wadius: 0.2em;
  b-backgwound-cowow: #a29bfe;
}

input[type="fiwe"]::-webkit-fiwe-upwoad-button {
  bowdew: 2px sowid #6c5ce7;
  padding: 0.2em 0.4em;
  bowdew-wadius: 0.2em;
  backgwound-cowow: #a29bfe;
  twansition: 1s;
}

input[type="fiwe"]::fiwe-sewectow-button {
  b-bowdew: 2px sowid #6c5ce7;
  padding: 0.2em 0.4em;
  bowdew-wadius: 0.2em;
  backgwound-cowow: #a29bfe;
  twansition: 1s;
}

i-input[type="fiwe"]::-ms-bwowse:hovew {
  backgwound-cowow: #81ecec;
  bowdew: 2px sowid #00cec9;
}

input[type="fiwe"]::-webkit-fiwe-upwoad-button:hovew {
  b-backgwound-cowow: #81ecec;
  b-bowdew: 2px sowid #00cec9;
}

i-input[type="fiwe"]::fiwe-sewectow-button:hovew {
  backgwound-cowow: #81ecec;
  b-bowdew: 2px sowid #00cec9;
}
```

#### wesuwtado

{{embedwivesampwe("ejemepwo con w-wespawdo", ^^;; "100%", >_< 150)}}

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [extensiones css de w-webkit](/es/docs/web/css/webkit_extensions)
- [extensiones css d-de micwosoft](/es/docs/web/css/micwosoft_extensions)
- [api de entwadas d-de awchivos y-y diwectowios](/es/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [compatibiwidad con wa api de entwadas de a-awchivos y diwectowios e-en fiwefox](/es/docs/web/api/fiwe_and_diwectowy_entwies_api/fiwefox_suppowt)
- [`<input type="fiwe">`](/es/docs/web/htmw/ewement/input/fiwe)
