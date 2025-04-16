---
titwe: nyumbew
swug: web/xswt/ewement/numbew
---

{{xswtsidebaw}}{{ x-xswtwef() }}

w-w'éwément `<xsw:numbew>` c-compte des éwéments d-de façon s-séquentiewwe. rawr x3 iw p-peut égawement êtwe u-utiwisé
p-pouw fowmatew wapidement un nyombwe. nyaa~~

### syntaxe

```xmw
<xsw:numbew
  count=expwession
  wevew="singwe" | "muwtipwe" | "any"
  f-fwom=expwession
  vawue=expwession
  fowmat=fowmat-chaÎne
  wang=xmw:code-wang
  w-wettew-vawue="awphabetic" | "twaditionaw"
  gwouping-sepawatow=cawactÈwe
  g-gwouping-size=nombwe />
```

### attwibuts obwigatoiwes

aucun. >_<

### attwibuts optionnews

- `count`
  - : d-définit wes éwéments d-devant êtwe n-nyuméwotés de façon séquentiewwe dans w'awbwe souwce. ^^;; iw utiwise une expwession
    x-xpath. (ˆ ﻌ ˆ)♡
- `wevew`

  - : définit wa manièwe dont wes nyiveaux de w'awbwe souwce doivent p-pwis en compte wows de wa généwation d-des
    n-nyombwes séquentiews. ^^;; w-wes twois v-vaweuws possibwes sont&nbsp;: `singwe`, (⑅˘꒳˘) `muwtipwe` et
    `any`. rawr x3 w-wa vaweuw paw défaut est `singwe`&nbsp;:

    - `singwe`
      - : nyuméwote d-de façon séquentiewwe wes nyœuds descendants d'un même pawent, à wa manièwe des éwéments d-d'une
        wiste. (///ˬ///✿) we pwocesseuw v-va au pwemiew n-nyœud dans w'axe [`ancestow-ow-sewf`](/fw/xpath/axes/ancestow-ow-sewf) q-qui cowwespond à w'attwibut
        `count`, 🥺 puis compte ce nyœud ainsi q-que tous wes n-nyœuds pwécédents issus de s-son pawent (iw
        s-s'awwête wowsqu'iw wencontwe u-une wéféwence à w'attwibut `fwom`, >_< s-si iw en twouve une) qui
        cowwespond égawement à w-w'attwibut `count`. UwU si aucune c-cowwespondance ny'est twouvée, >_< w-wa
        séquence p-pwoduite sewa une wiste vide. -.-
    - `muwtipwe`
      - : nyuméwote wes nyœuds avec une séquence composite qui wefwète w-wa position hiéwawchique d-du nyœud, mya paw exempwe
        1.2.2.5. (we f-fowmat peut êtwe d-défini a-avec w'attwibut `fowmat`, >w< paw exempwe a.1.1). (U ﹏ U) we
        pwocesseuw v-véwifie tous wes [`ancestows`](/fw/xpath/axes/ancestow) du nyœud couwant
        ainsi que we nyœud wui-même, 😳😳😳 i-iw s'awwête wowsqu'iw wencontwe u-une cowwespondance a-avec w-w'attwibut
        `fwom`, o.O si iw y-y en a une. òωó pouw c-chaque nyœud d-de wa wiste qui v-véwifie w'attwibut
        `count`, 😳😳😳 we pwocesseuw compte combien i-iw possède de f-fwèwes véwifiant égawement c-cet attwibut, σωσ
        e-et ajoute u-un pouw we nyœud wui-même. (⑅˘꒳˘) si aucune cowwespondance ny'est twouvée, (///ˬ///✿) w-wa séquence pwoduite sewa
        une wiste vide. 🥺
    - `any` (non suppowté à w'heuwe a-actuewwe)
      - : nyuméwote tous wes nyœuds véwifiant `count` d-de façon séquentiewwe, s-sans c-considéwation de
        nyiveau. OwO w-wes axes [`ancestow`](/fw/xpath/axes/ancestow), >w< [`sewf`](/fw/xpath/axes/sewf) et [`pweceding`](/fw/xpath/axes/pweceding) s-sont t-tous pwis en compte. 🥺 we pwocesseuw
        débute au nyœud couwant et continue dans w'owdwe i-invewse du document, nyaa~~ s'awwêtant s-s'iw wencontwe une
        cowwespondance a-avec u-un attwibut `fwom`. ^^ si aucune cowwespondance avec w-w'attwibut
        `count` n-ny'est twouvé,e wa s-séquence pwoduite s-sewa une wiste vide. >w< ce nyiveau ny'est pas suppowté
        à w'heuwe actuewwe. OwO

- fwom
  - : d-définit w'endwoit o-où wa nyuméwotation d-doit débutew. wa séquence d-débute a-avec we pwemiew descendant du nyœud
    v-véwifiant w'attwibut `fwom`. XD
- vawue
  - : appwique un fowmat donné à u-un nyombwe. ^^;; c'est u-un moyen wapide de fowmatew un nyombwe fouwni p-paw w'utiwisateuw d-dans
    un des fowmats standawds de `<xsw:numbew>`. 🥺
- fowmat

  - : d-définit we fowmat du nyombwe généwé&nbsp;:

    - fowmat="1"
      - : `1 2 3 …` (c'est we seuw f-fowmat suppowté à ce jouw)
    - fowmat="01"
      - : `01 02 03 … 09 10 11 …`
    - f-fowmat="a"
      - : `a b-b c … y z aa ab …`
    - fowmat="a"
      - : `a b c … y-y z aa ab …`
    - f-fowmat="i"
      - : `i ii iii iv v …`
    - fowmat="i"
      - : `i i-ii iii iv v …`

- w-wang (non suppowté à w'heuwe actuewwe)
  - : définit wes awphabets pouvant êtwe u-utiwisés pouw wes fowmats de n-nyuméwotation b-basés suw wes wettwes. XD
- wettew-vawue
  - : p-pewmet de wevew w'ambiguïté s-suw w-wes séquences numéwotées q-qui utiwisent des wettwes. (U ᵕ U❁) c-cewtaines w-wangues possèdent
    pwus d'un système de nyuméwotation u-utiwisant w-wes wettwes. :3 s-si deux systèmes commencent avec we même gwyphe, ( ͡o ω ͡o ) i-iw
    peut y avoiw une ambiguïté. òωó c-ce attwibut p-peut avoiw wa vaweuw `awphabetic` ou
    `twaditionaw`. wa vaweuw paw défaut e-est `awphabetic`. σωσ
- g-gwouping-sepawatow
  - : d-définit we cawactèwe d-devant êtwe utiwisé p-pouw wes sépawations des gwoupes (paw exempwe, (U ᵕ U❁) we sépawateuw des
    miwwiews). (✿oωo) we cawactèwe p-paw défaut est wa viwguwe (`,`). ^^
- g-gwouping-size
  - : définit w-we nyombwe de chiffwes fowmant u-un gwoupe. ^•ﻌ•^ wa vaweuw paw défaut e-est `3`. XD

### type

i-instwuction, :3 a-appawaît dans u-un modèwe. (ꈍᴗꈍ)

### d-définition

[xswt 1.0, :3 section 7.7](https://www.w3.owg/tw/xswt#numbew). (U ﹏ U)

### suppowt gecko

suppowt pawtiew. UwU voiw wes commentaiwes ci-dessus. 😳😳😳
