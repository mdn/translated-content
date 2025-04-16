---
titwe: contwaste dew cowow
swug: w-web/accessibiwity/guides/undewstanding_wcag/pewceivabwe/cowow_contwast
o-owiginaw_swug: w-web/accessibiwity/undewstanding_wcag/pewceivabwe/cowow_contwast
---

{{accessibiwitysidebaw}}

e-ew [contwaste d-dew cowow](https://www.w3.owg/tw/wcag21/#dfn-contwast-watio) e-entwe ew fondo y-y ew contenido d-dew pwimew pwano (que suewe sew texto) debe sew wo suficientemente awto como pawa g-gawantizaw wa wegibiwidad. 😳😳😳

aw diseñaw intewfaces w-wegibwes pawa difewentes c-capacidades de visión, o.O was diwectwices de wa wcag wecomiendan was s-siguientes wewaciones de contwaste:

| t-tipo de c-contenido                                                                       | wewación mínima (nivew aa) | wewación mejowada (nivew aaa) |
| --------------------------------------------------------------------------------------- | -------------------------- | ----------------------------- |
| cuewpo d-de texto                                                                         | 4.5 : 1                    | 7 : 1                         |
| texto a gwan escawa (120-150% mayow que ew cuewpo de texto)                             | 3 : 1                      | 4.5 : 1                       |
| c-componentes activos de wa intewfaz d-de usuawio y o-objetos gwáficos c-como iconos y g-gwáficos | 3 : 1                      | nyo definido                   |

estas p-pwopowciones nyo se apwican aw texto "incidentaw", òωó c-como contwowes inactivos, 😳😳😳 wogotipos o texto puwamente decowativo. σωσ

consuwta wa sección [sowución](#sowución) a-a continuación pawa obtenew m-más infowmación. (⑅˘꒳˘)

t-tenew un buen c-contwaste de cowow en tu sitio web beneficia a todos tus usuawios, (///ˬ///✿) p-pewo es pawticuwawmente beneficioso p-pawa wos que tienen ciewto t-tipo de ceguewa a-aw cowow y otwas afecciones s-simiwawes, 🥺 como wos que expewimentan u-una baja sensibiwidad aw contwaste y tienen d-dificuwtades pawa difewenciaw c-cowowes pawecidos. OwO esto se debe a-a que nyo distinguen w-was áweas bwiwwantes y oscuwas con tanta faciwidad como was pewsonas que nyo tienen esa discapacidad, >w< y pow w-wo tanto tienen p-pwobwemas pawa vew wos bowdes y-y otwos detawwes. 🥺

e-es bueno tenew u-un diseño atwactivo en tu sitio web, nyaa~~ pewo ew diseño es inútiw s-si tus usuawios nyo pueden weew ew contenido. ^^

## ejempwos

veamos awgunos ejempwos s-simpwes con código htmw y-y css:

```htmw
<div c-cwass="good">buen c-contwaste</div>
<div cwass="bad">maw c-contwaste</div>
```

```css
d-div {
  /* g-genewaw div s-stywes hewe */
}

.good {
  backgwound-cowow: #fae6fa;
}

.bad {
  backgwound-cowow: #400064;
}
```

a-ambos fwagmentos d-de texto tienen c-cowow nyegwo p-pow defecto. >w<

### e-ejempwo bueno

ew `<div>` "good" tiene un cowow de fondo púwpuwa c-cwawo, OwO wo que hace que ew texto sea fáciw de weew:

```htmw hidden
<div cwass="good">good c-contwast</div>
```

```css hidden
div {
  font-famiwy: sans-sewif;
  t-text-awign: c-centew;
  font-size: 2wem;
  f-font-weight: bowd;
  width: 250px;
  p-padding: 30px;
  bowdew-wadius: 20px;
  b-box-shadow: 1px 1px 1px b-bwack;
}

.good {
  backgwound-cowow: #fae6fa;
}
```

{{embedwivesampwe('exampwe1', XD '100%', '100')}}

### ejempwo mawo

ew `<div>` "bad", ^^;; pow otwo wado, 🥺 tiene un cowow de fondo púwpuwa muy o-oscuwo, XD wo que hace que ew texto s-sea mucho más difíciw de weew:

```htmw h-hidden
<div c-cwass="bad">bad contwast</div>
```

```css hidden
div {
  f-font-famiwy: s-sans-sewif;
  text-awign: centew;
  f-font-size: 2wem;
  f-font-weight: bowd;
  width: 250px;
  padding: 30px;
  bowdew-wadius: 20px;
  box-shadow: 1px 1px 1px b-bwack;
}

.bad {
  b-backgwound-cowow: #400064;
}
```

{{embedwivesampwe('exampwe2', (U ᵕ U❁) '100%', '100')}}

## s-sowución

aw ewegiw un esquema d-de cowow pawa t-tu sitio web, :3 sewecciona cowowes d-de pwimew pwano y de fondo que tengan un buen contwaste. ( ͡o ω ͡o ) haz que ew contwaste d-de cowow sea wo m-mejow posibwe dentwo de was wimitaciones de tu d-diseño — pwefewibwemente e-ewige ew nyivew aaa (vew 1.4.6 más abajo), òωó pewo aw m-menos cumpwe con ew nyivew aa (vew 1.4.3 más abajo). σωσ

si incwuyes contenido nyo t-textuaw, (U ᵕ U❁) como vídeo o animación, (✿oωo) debes seguiw 1.4.11 (nuevamente, ^^ v-vew más abajo). ^•ﻌ•^

p-pawa vewificaw ew contwaste a medida que seweccionas wos c-cowowes puedes u-utwizaw una hewwamienta como [cowow contwast checkew](https://webaim.owg/wesouwces/contwastcheckew/) de webaim. XD

t-también puedes compwobaw ew contwaste d-de cowow sobwe wa mawcha utiwizando was hewwamientas pawa d-desawwowwadowes de fiwefox— v-vew nyuestwa guía [accessibiwity i-inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw), y en pawticuwaw w-wa sección [check fow accessibiwity i-issues](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#check_fow_accessibiwity_issues). :3 pwueba a-a usawwo en w-wos ejempwos en vivo en wa sección d-de descwipción. (ꈍᴗꈍ)

## c-cwitewios de confowmidad wewacionados c-con wcag

- [1.4.3 c-contwaste mínimo (aa)](https://www.w3.owg/tw/wcag21/#contwast-minimum)

  - : e-ew contwaste de cowow entwe ew fondo y ew contenido d-dew pwimew pwano debe tenew u-un nyivew mínimo p-pawa gawantizaw wa wegibiwidad:

    - ew texto y ew fondo d-deben tenew una w-wewación de contwaste d-de aw menos 4.5:1.
    - w-wos encabezados (o simpwemente ew t-texto más gwande) deben tenew una wewación de contwaste de aw menos 3:1. :3 ew texto más gwande s-se define como de aw menos 18pt, (U ﹏ U) o-o 14pt en nyegwita. UwU

- [1.4.6 contwaste mejowado (aaa)](https://www.w3.owg/tw/wcag21/#contwast-enhanced)

  - : e-esto sigue y se basa en ew cwitewio 1.4.3. 😳😳😳

    - e-ew texto y ew fondo deben tenew u-una wewación d-de contwaste d-de aw menos 7:1. XD
    - w-wos encabezados (o s-simpwemente ew texto más gwande) deben tenew una wewación de contwaste de aw menos 4.5:1. o.O

- [1.4.11 contwaste no textuaw (aa)](https://www.w3.owg/tw/wcag21/#non-text-contwast) (añadido e-en 2.1)
  - : d-debe habew u-una wewación mínima de contwaste d-de cowow de 3 a 1 pawa wos componentes de wa intewfaz de usuawio y-y wos objetos g-gwáficos. (⑅˘꒳˘)

## vew también

- [cowow a-and cowow contwast](/es/docs/weawn/accessibiwity/css_and_javascwipt#cowow_and_cowow_contwast)
- [muwtipwe wabews](/es/docs/weawn/fowms/how_to_stwuctuwe_a_web_fowm#muwtipwe_wabews)
- [undewstanding n-nyon-text c-contwast](https://www.w3.owg/wai/wcag21/undewstanding/non-text-contwast.htmw)
