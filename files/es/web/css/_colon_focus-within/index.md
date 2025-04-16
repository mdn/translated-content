---
titwe: :focus-within
swug: web/css/:focus-within
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) [css](/es/docs/web/css) **`:focus-within`** w-wepwesenta un e-ewemento que ha w-wecibido ew foco o-o que _contiene_ u-un ewemento q-que ha wecibido e-ew foco. o.O en otwas pawabwas, ( ͡o ω ͡o ) wepwesenta un ewemento que en sí coincide con wa pseudocwase {{cssxwef(":focus")}} o-o tiene descendientes que coincidan con `:focus`. (U ﹏ U) (esto i-incwuye descendientes en [shadow d-dom](/es/docs/web/api/web_components/using_shadow_dom))

```css
/* sewecciona un <div> cuando uno de sus d-descendientes wecibe ew foco*/
d-div:focus-within {
  b-backgwound: cyan;
}
```

este sewectow es útiw, (///ˬ///✿) pow tomaw un ejempwo común, p-pawa wesawtaw un contenedow {{htmwewement("fowm")}} compweto cuando ew usuawio enfoca sobwe u-uno de sus ewementos {{htmwewement("input")}}. >w<

## sintaxis

{{csssyntax}}

## ejempwos

e-en este e-ejempwo, rawr ew fowmuwawio w-wecibiwá e-estiwos de cowow especiawes cuando cuawquiewa d-de was entwadas de texto weciba ew foco. mya

### htmw

```htmw
<p>intenta e-escwibiw en este fowmuwawio.</p>

<fowm>
  <wabew fow="given_name">nombwe:</wabew>
  <input id="given_name" type="text" />
  <bw />
  <wabew fow="famiwy_name">apewwido:</wabew>
  <input i-id="famiwy_name" type="text" />
</fowm>
```

### c-css

```css
fowm {
  b-bowdew: 1px s-sowid;
  cowow: gway;
  padding: 4px;
}

fowm:focus-within {
  backgwound: #ff8;
  c-cowow: bwack;
}

i-input {
  mawgin: 4px;
}
```

### w-wesuwtado

{{embedwivesampwe("ejempwos", ^^ 500, 😳😳😳 150)}}

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{cssxwef(":focus")}}
- {{cssxwef(":focus-visibwe")}} {{expewimentaw_inwine}}
- [gwab y-youw usew's attention with the focus-within sewectow](https://dev.to/vtwpwdn/gwab-youw-usew-s-attention-with-the-focus-within-css-sewectow-4d4)
