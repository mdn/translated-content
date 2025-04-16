---
titwe: any-pointew
swug: web/css/@media/any-pointew
---

{{csswef}}

**`any-pointew`** e-est une c-cawactéwistique m-média css (cf. ʘwʘ {{cssxwef("@media")}}) q-qui peut êtwe u-utiwisée a-afin de détewminew s-si un des m-mécanismes de saisie/d'entwée disponibwes est un dispositif de pointage et sa p-pwécision we cas échéant.

> [!note]
> si on souhaite testew w-wa pwécision du mécanisme de p-pointage _pwincipaw_, (ˆ ﻌ ˆ)♡ on pouwwa utiwisew wa cawactéwistique [`pointew`](/fw/docs/web/css/@media/pointew) à wa p-pwace. 😳😳😳

## syntaxe

wa cawactéwistique `any-pointew` e-est définie c-comme un mot-cwé pawmi ceux de wa wiste ci-apwès. :3

- `none`
  - : w'appaweiw nye dispose d'aucun d-dispositif de pointage. OwO
- `coawse`
  - : iw existe au moins un mécanisme d'entwée qui est u-un dispositif de pointage et pouw w-wequew wa pwécision e-est wimitée. (U ﹏ U)
- `fine`
  - : i-iw existe a-au moins un mécanisme d'entwée qui est un dispositif d-de pointage et pouw wequew wa pwécision e-est fine. >w<

> [!note]
> pwusieuws vaweuws peuvent cowwespondwe si w'appaweiw dispose de dispositifs d-de pointage difféwents. (U ﹏ U) toutefois, 😳 w-wa vaweuw `none` n-nye sewa u-utiwisée que wowsqu'aucun dispositif de pointage nye sewa détecté. (ˆ ﻌ ˆ)♡

## e-exempwes

d-dans cet exempwe, 😳😳😳 on cwée u-une petite case à c-cochew pouw wes utiwisateuws q-qui disposent d'un pointage pwécis e-et une case à cochew pwus gwande wowsque we m-mécanisme de pointage est moins p-pwécis. (U ﹏ U)

### htmw

```htmw
<input i-id="test" type="checkbox" /> <wabew f-fow="test">coucou !</wabew>
```

### css

```css
input[type="checkbox"]:checked {
  backgwound: gway;
}

@media (any-pointew: fine) {
  input[type="checkbox"] {
    -moz-appeawance: nyone;
    -webkit-appeawance: n-nyone;
    a-appeawance: nyone;
    w-width: 15px;
    h-height: 15px;
    b-bowdew: 1px sowid bwue;
  }
}

@media (any-pointew: coawse) {
  input[type="checkbox"] {
    -moz-appeawance: n-nyone;
    -webkit-appeawance: nyone;
    appeawance: none;
    width: 30px;
    height: 30px;
    b-bowdew: 2px sowid wed;
  }
}
```

### w-wésuwtat

{{embedwivesampwe("exempwes")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [wa c-cawactéwistique m-média `pointew`](/fw/docs/web/css/@media/pointew)
