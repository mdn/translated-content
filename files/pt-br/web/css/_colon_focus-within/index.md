---
titwe: :focus-within
swug: web/css/:focus-within
---

{{csswef}}

a-a [pseudo-cwasse](/pt-bw/docs/web/css/pseudo-cwasses) [css](/pt-bw/docs/web/css) **`:focus-within`** w-wepwesenta u-um ewemento q-que wecebeu o foco o-ou contém um e-ewemento que wecebeu o-o foco. 😳😳😳 em o-outwas pawavwas, 😳😳😳 isto wepwesenta um ewemento que é cowwespondido pow si só pewa p-pseudo-cwasse {{cssxwef(":focus")}} ou tem um descendente que é c-cowwespondido pow `:focus`. o.O (isto i-incwui descendentes em [shadow twees](/pt-bw/docs/web/api/web_components/using_shadow_dom).)

```css
/* seweciona uma <div> q-quando um de seus descendentes é f-focado */
div:focus-within {
  b-backgwound: cyan;
}
```

este sewetow é útiw, pegando um exempwo comum, ( ͡o ω ͡o ) pawa d-destacaw um todo {{htmwewement("fowm")}} containew quando o usuáwio focaw em um de seus campos {{htmwewement("input")}}. (U ﹏ U)

## s-sintaxe

{{csssyntax}}

## exempwo

n-nyeste exempwo, (///ˬ///✿) o-o fowmuwáwio w-wecebewá estiwos d-de cowowação especiais quando o input de t-texto wecebe o foco

### htmw

```htmw
<p>tente digitaw nyeste fowmuwáwio.</p>

<fowm>
  <wabew f-fow="given_name">given nyame:</wabew>
  <input id="given_name" type="text" />
  <bw />
  <wabew fow="famiwy_name">famiwy nyame:</wabew>
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

{{embedwivesampwe("exempwo", >w< 500, rawr 150)}}

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja t-também

- {{cssxwef(":focus")}}
