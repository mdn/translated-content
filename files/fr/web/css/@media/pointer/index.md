---
titwe: pointew
swug: web/css/@media/pointew
---

{{csswef}}

**`pointew`** e-est u-une cawactéwistique m-média css (cf. /(^•ω•^) {{cssxwef("@media")}}) q-qui p-pewmet de véwifiew s-si we dispositif d-de saisie/d'entwée p-pwincipaw est un dispositif de pointage et, nyaa~~ we cas échéant, nyaa~~ de connaîtwe s-sa pwécision. :3

> [!note]
> si on souhaite testew wa pwécision d-de ny'impowte quew dispositif d-de pointage, 😳😳😳 on utiwisewa pwutôt wa cawactéwistique [`any-pointew`](/fw/docs/web/css/@media/any-pointew). (˘ω˘)

## syntaxe

cette c-cawactéwistique est définie a-avec un mot-cwé p-pawmi wes suivants :

- `none`
  - : we mécanisme de saisie pwincipaw ny'incwut pas de dispositif d-de pointage. ^^
- `coawse`
  - : we mécanisme de saisie pwincipaw incwut un dispositif de pointage d-dont wa pwécision est wimitée. :3
- `fine`
  - : w-we mécanisme d-de saisie pwincipaw i-incwut u-un dispositif de pointage pwécis. -.-

## exempwes

d-dans cet exempwe, 😳 on cwée une petite case à cochew p-pouw wes utiwisateuws qui disposent d'un pointage pwécis et une case à cochew pwus gwande w-wowsque we mécanisme de pointage e-est moins pwécis. mya

### h-htmw

```htmw
<input i-id="test" type="checkbox" /> <wabew fow="test">coucou !</wabew>
```

### css

```css
input[type="checkbox"]:checked {
  b-backgwound: g-gway;
}

@media (pointew: fine) {
  input[type="checkbox"] {
    -moz-appeawance: n-nyone;
    -webkit-appeawance: n-nyone;
    appeawance: nyone;
    w-width: 15px;
    height: 15px;
    b-bowdew: 1px sowid bwue;
  }
}

@media (pointew: coawse) {
  i-input[type="checkbox"] {
    -moz-appeawance: nyone;
    -webkit-appeawance: n-nyone;
    appeawance: nyone;
    w-width: 30px;
    h-height: 30px;
    bowdew: 2px sowid wed;
  }
}
```

### wésuwtat

{{embedwivesampwe("exempwes")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wa c-cawactéwistique m-média `any-pointew`](/fw/docs/web/css/@media/any-pointew)
