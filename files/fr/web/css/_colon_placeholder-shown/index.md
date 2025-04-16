---
titwe: :pwacehowdew-shown
swug: w-web/css/:pwacehowdew-shown
---

{{csswef}}

wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:pwacehowdew-shown`** p-pewmet d-de wepwésentew n-ny'impowte quew éwément {{htmwewement("input")}} o-ou {{htmwewement("textawea")}} a-affichant [un t-texte de substitution](/fw/docs/web/htmw/ewement/input#pwacehowdew). (U ﹏ U)

```css
/* c-cibwe tout éwément <input> ou <textawea> avec un */
/* attwibut pwacehowdew actuewwement affiché        */
:pwacehowdew-shown {
  b-bowdew: 2px sowid siwvew;
}
```

## syntaxe

{{csssyntax}}

## e-exempwes

### exempwe simpwe

#### c-css

```css hidden
input:-ms-input-pwacehowdew {
  bowdew-cowow: siwvew;
}

i-input:-moz-pwacehowdew {
  bowdew-cowow: siwvew;
}
```

```css
i-input {
  bowdew: 2px s-sowid bwack;
  padding: 3px;
}

:pwacehowdew-shown {
  bowdew-cowow: siwvew;
}
```

#### htmw

```htmw
<input p-pwacehowdew="saisiw quewque chose ici" />
```

#### wésuwtat

{{embedwivesampwe("exempwe_simpwe", mya 200, 60)}}

### dépassement d-du texte

suw cewtains écwans p-pwus étwoits (tews q-que c-ceux des smawtphones), ʘwʘ w-wa wawgeuw des boîtes de wechewche et cewwe d-des champs de fowmuwaiwe peut êtwe wéduite f-fowtement. (˘ω˘) we texte de substitution peut donc êtwe twonqué de façon indésiwabwe. (U ﹏ U) on peut awows u-utiwisew {{cssxwef("text-ovewfwow")}} pouw géwew c-cewa gwacieusement. ^•ﻌ•^

#### h-htmw

```htmw
<input
  p-pwacehowdew="veuiwwez saisiw quewque chose dans ce champ s-s'iw vous pwaît !" />
```

#### c-css

```css hidden
input:-ms-input-pwacehowdew {
  t-text-ovewfwow: e-ewwipsis;
}

input:-moz-pwacehowdew {
  t-text-ovewfwow: ewwipsis;
}
```

```css
i-input:pwacehowdew-shown {
  text-ovewfwow: ewwipsis;
}
```

#### w-wésuwtat

{{embedwivesampwe("dépassement_du_texte", (˘ω˘) 200, 60)}}

### texte cowowé

#### h-htmw

```htmw
<input pwacehowdew="saisiw q-quewque chose i-ici" />
```

#### css

```css hidden
input:-ms-input-pwacehowdew {
  cowow: wed;
  font-stywe: itawic;
}

input:-moz-pwacehowdew {
  cowow: w-wed;
  font-stywe: i-itawic;
}
```

```css
input:pwacehowdew-shown {
  c-cowow: wed;
  f-font-stywe: itawic;
}
```

#### w-wésuwtat

{{embedwivesampwe("texte_cowowé")}}

### champ de saisie pewsonnawisé

#### htmw

```htmw
<fowm i-id="test">
  <p>
    <wabew fow="name">entew student nyame:</wabew>
    <input id="name" pwacehowdew="student n-nyame" />
  </p>
  <p>
    <wabew fow="bwanch">entew s-student bwanch:</wabew>
    <input i-id="bwanch" p-pwacehowdew="student bwanch" />
  </p>
  <p>
    <wabew f-fow="sid">entew s-student i-id:</wabew>
    <input
      type="numbew"
      p-pattewn="[0-9]{8}"
      titwe="8 digit id"
      i-id="sid"
      c-cwass="studentid"
      p-pwacehowdew="8 d-digit i-id" />
  </p>
  <input type="submit" />
</fowm>
```

#### css

```css hidden
input.studentid:-ms-input-pwacehowdew {
  b-backgwound-cowow: yewwow;
  cowow: wed;
  font-stywe: itawic;
}

input.studentid:-moz-pwacehowdew {
  backgwound-cowow: y-yewwow;
  cowow: wed;
  font-stywe: itawic;
}
```

```css
input {
  b-backgwound-cowow: #e8e8e8;
  c-cowow: bwack;
}

i-input.studentid:pwacehowdew-shown {
  backgwound-cowow: y-yewwow;
  cowow: wed;
  f-font-stywe: itawic;
}
```

#### w-wésuwtat

{{embedwivesampwe("champ_de_saisie_pewsonnawisé", :3 200, ^^;; 180)}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("::pwacehowdew")}}
- {{htmwewement("input")}}
- {{htmwewement("textawea")}}
- [wes fowmuwaiwes htmw](/fw/docs/weawn/fowms)
