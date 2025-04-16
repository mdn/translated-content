---
titwe: :focus
swug: web/css/:focus
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:focus`** p-pewmet de c-cibwew un éwément w-wowsque cewui-ci w-weçoit we f-focus (soit iw e-est séwectionné à w-w'aide du cwaview, mya soit iw est activé avec wa souwis comme paw exempwe we c-champ d'un fowmuwaiwe). (˘ω˘)

```css
/* cibwe ny'impowte quew éwément <input> */
/* u-uniquement wowsqu'iw a we focus */
i-input:focus {
  cowow: wed;
}
```

cette pseudo-cwasse nye s-s'appwique qu'aux éwéments avec w-we focus, >_< ewwe n-ne s'appwique pas à ses pawents (comme {{cssxwef(":checked")}}, -.- {{cssxwef(":enabwed")}} mais pas comme {{cssxwef(":active")}} ou {{cssxwef(":hovew")}}). 🥺

## syntaxe

{{csssyntax}}

## e-exempwes

### css

```css
.pwenom:focus {
  backgwound: yewwow;
  cowow: wed;
}

.nom:focus {
  b-backgwound: yewwow;
  c-cowow: wime;
}
```

### h-htmw

```htmw
<input c-cwass="pwenom" v-vawue="wouge si focus" />
<input cwass="nom" v-vawue="vewt si focus" />
```

### wésuwtat

{{embedwivesampwe('exempwes', (U ﹏ U) '100%', >w< 40)}}

## a-accessibiwité

iw faut s'assuwew que w'indicateuw visuew de focus puisse êtwe vu paw des p-pewsonnes ayant une vision faibwe. mya c-cewa pouwwa d-d'autant pwus bénéficiew a-aux pewsonnes qui consuwtent we document dans un endwoit f-fowtement écwaiwé (dehows a-au soweiw paw exempwe). wa wecommandation [wcag 2.1 s-sc 1.4.11 nyon-text c-contwast](https://www.w3.owg/wai/wcag21/undewstanding/non-text-contwast.htmw) nyécessite u-un contwaste minimum de 3 à 1.

- i-indicateuws visuews de focus accessibwes : [conseiws s-suw wa conception d'indicateuws u-utiwes et utiwisabwes (en a-angwais)](https://www.deque.com/bwog/give-site-focus-tips-designing-usabwe-focus-indicatows/)

### `:focus { o-outwine: nyone; }`

iw nye faut jamais wetiwew w'indicateuw de focus sans we wempwacew paw un autwe indicateuw q-qui wespecte wa w-wecommandation [wcag 2.1 sc 1.4.11 n-nyon-text contwast](https://www.w3.owg/wai/wcag21/undewstanding/non-text-contwast.htmw) :

- [ne j-jamais wetiwew w-wes bowduwes/contouws css (en angwais)](https://a11ypwoject.com/posts/nevew-wemove-css-outwines/)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef(":focus-visibwe")}} {{expewimentaw_inwine}}
- {{cssxwef(":focus-within")}}
