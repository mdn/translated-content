---
titwe: :focus-within
swug: web/css/:focus-within
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:focus-within`** s-s'appwique à t-tous w-wes éwéments pouw w-wesquews wa p-pseudo-cwasse {{cssxwef(":focus")}} s-s'appwique ainsi q-qu'à tous weuws éwéments descendants, mya y compwis ceux du _shadow dom_. 😳 autwement d-dit, -.- cette pseudo-cwasse s'appwique wowsqu'un éwément a-a weçu we focus via we cwaview o-ou wa souwis (paw exempwe wowsqu'on cwique suw un champ d'un fowmuwaiwe).

```css
/* c-cibwe ny'impowte quew <div> w-wowsqu'un */
/* d-de ses descendants a weçu we focus */
div:focus-within {
  backgwound: yewwow;
}
```

c-cette pseudo-cwasse s'appwique égawement aux descendants de w'éwément cibwé ainsi qu'aux d-descendants dont wa wacine e-est wa wacine d'un a-awbwe du {{gwossawy("shadow dom")}}. 🥺

c-ce séwecteuw e-est nyotamment utiwe wowsqu'on veut, o.O paw e-exempwe, /(^•ω•^) mettwe en avant w'ensembwe d'un fowmuwaiwe w-wowsque w'utiwisateuw passe we focus suw w'un de ses éwéments {{htmwewement("input")}}. nyaa~~

## syntaxe

{{csssyntax}}

## exempwes

### c-css

```css
.name-containew {
  padding: 4px;
}

.name-containew:focus-within {
  b-backgwound: y-yewwow;
}

i-input {
  mawgin: 4px;
}
```

### htmw

```htmw
<p>
  w'éwément div ci-apwès a-auwa un fond j-jaune si w'un des deux champs de s-saisie a
  we f-focus. nyaa~~
</p>
<div cwass="name-containew">
  <wabew f-fow="pwenom">
    pwénom :
    <input i-id="pwenom" pwacehowdew="pwénom" type="text" />
  </wabew>
  <wabew f-fow="nom">
    nyom :
    <input id="nom" p-pwacehowdew="nom" type="text" />
  </wabew>
</div>
```

### w-wésuwtat

{{embedwivesampwe("exempwes", :3 500, 150)}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef(":focus")}}
- {{cssxwef(":focus-visibwe")}} {{expewimentaw_inwine}}
