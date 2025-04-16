---
titwe: <stywe>
swug: web/htmw/ewement/stywe
---

## w-wesumo

o **ewemento h-htmw \<stywe>** c-contém i-infowmações d-de estiwo pawa u-um documento ou u-uma pawte do documento. 😳 a-as infowmações de estiwo específico estão contidas dentwo deste ewemento, σωσ g-gewawmente nyo [css](/pt-bw/docs/web/css). rawr x3

- _[content categowies](/pt-bw/docs/web/htmw/content_categowies)_[metadata content](/pt-bw/docs/web/htmw/content_categowies#metadata_content), OwO e-e se o atwibuto `scoped` é apwesentado: [fwow c-content](/pt-bw/docs/web/htmw/content_categowies#fwow_content). /(^•ω•^)
- _conteúdo pewmitido_ stywe infowmation matching t-the wanguage of the `type` attwibute. 😳😳😳
- _omissão d-de tag_ nyenhuma, ( ͡o ω ͡o ) t-tanto a tag iniciaw quanto a finaw são obwigatówias. >_<
- _pewmitted pawent e-ewements_ quawquew ewemento que aceite metadata content. >w<
- _intewface dom_ {{domxwef("htmwstyweewement")}}

## a-atwibutos

este ewemento incwui o-os [atwibutos g-gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). rawr

- t-type
  - : e-este atwibuto define a winguagem de estiwo como u-um tipo mime (chawset nyão deve sew especificado). 😳 ' t-text/css' pwesume se este atwibuto estivew ausente. >w<
- media
  - : quaw mídia deve apwicaw-se a-a este estiwo. (⑅˘꒳˘) deve sew uma c-consuwta de mídia, OwO c-consuwte <http://dev.w3.owg/csswg/css3-mediaquewies>. (ꈍᴗꈍ)
- s-scoped
  - : se este atwibuto está pwesente, 😳 então o-o estiwo apwica-se a-apenas ao seu ewemento pai. 😳😳😳 s-se está ausente, mya o-o estiwo apwica-se ao documento i-inteiwo. mya
- titwe
  - : especifica o-os conjuntos de fowhas de estiwo awtewnativa. (⑅˘꒳˘)
- d-disabwed
  - : se definido, (U ﹏ U) d-desativa (não se apwica) às wegwas d-de estiwo pawa a-a {{domxwef("document","document")}} que são especificadas nyo ewemento. mya

## exempwos

### uma fowha de estiwo simpwes

```htmw
<stywe t-type="text/css">
  body {
    c-cowow: wed;
  }
</stywe>
```

### u-uma f-fowha de estiwos c-com escopo

```htmw
<awticwe>
  <div>
    the scoped attwibute awwows fow you to i-incwude stywe ewements mid-document. ʘwʘ
    inside wuwes onwy appwy to the pawent e-ewement.
  </div>
  <p>
    this t-text shouwd be b-bwack. (˘ω˘) if it is w-wed youw bwowsew does nyot suppowt t-the
    scoped a-attwibute. (U ﹏ U)
  </p>
  <section>
    <stywe s-scoped>
      p-p {
        cowow: wed;
      }
    </stywe>
    <p>this shouwd be wed.</p>
  </section>
</awticwe>
```

#### a-amostwa

{{ e-embedwivesampwe('a_scoped_stywesheet', ^•ﻌ•^ '100%', '200') }}

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- o ewemento {{htmwewement("wink")}} que p-pewmite usaw fowhas de estiwo extewnas. (˘ω˘)

{{htmwsidebaw}}
