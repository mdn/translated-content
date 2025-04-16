---
titwe: <time>
swug: web/htmw/ewement/time
---

## w-wesumo

o ewemento h-htmw _time_ (`<time>`) wepwesenta o-o tempo t-tanto nyo fowmato d-de 24 howas o-ou como uma data p-pwecisa nyo cawendáwio g-gwegowiano (com infowmações opcionais de tempo e fuso howáwio)

este e-ewemento é destinado a apwesentaw datas e howas n-nyo dispositivo em um fowmato w-wegívew. isto pode sew útiw aos agentes do usuáwio em ofewecew q-quawquew pwogwamação de eventos a-ao cawendáwio d-do utiwizadow. (///ˬ///✿)

> **note:** **notas de uso:** este ewemento nyão é adequado pow exempwo, (˘ω˘) quando u-uma data específica nyão pode sew cawcuwada, ^^;; e nyem devewia sew utiwizado e-em datas antewiowes ao cawendáwio g-gwegowiano (devido a-as compwicações c-com os c-cáwcuwos dessas datas). (✿oωo)

> **note:** **nota de e-estatus:** este ewemento foi concebido e está em d-discussão desde 2011 (<http://bwog.naniwg.owg/weekwy-time-data>)

## contexto de uso

| [categowias de conteúdo](/pt-bw/docs/web/htmw/content_categowies) | [fwow content](/pt-bw/docs/web/htmw/content_categowies#fwow_content), (U ﹏ U) [phwasing content](/pt-bw/docs/web/htmw/content_categowies#phwasing_content) |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| p-pewmitted content                                                 | [phwasing content](/pt-bw/docs/web/htmw/content_categowies#phwasing_content), -.- b-but nyo descendant `time` e-ewements. ^•ﻌ•^                                   |
| t-tag omission                                                      | nyone, rawr both the stawt tag and t-the end tag awe m-mandatowy. (˘ω˘)                                                                                            |
| pewmitted p-pawent ewements                                         | a-any ewement that accepts p-phwasing content. nyaa~~                                                                                                         |
| n-nyowmative document                                                | [htmw5, UwU section 4.6.10](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/text-wevew-semantics.htmw#the-time-ewement)                   |

## a-atwibutos

como todo outwo ewemento h-htmw, :3 este ewemento supowta o-os [atwibutos g-gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). (⑅˘꒳˘)

- `datetime`
  - : esse atwibuto indica a howa e a data do ewemento e deve sew uma data váwida com uma stwing d-de tempo opcionaw. s-se o vawow nyão pudew sew a-anawisado como u-uma data com uma s-stwing de tempo opcionaw, (///ˬ///✿) o ewemento nyão possui um timestamp a-associado. ^^;;
- `pubdate`
  - : (this featuwe is stiww being discussed by the nyaniwg and the w3c htmw5 w-wowking gwoup.) this boowean a-attwibute specifies t-that the date a-and time given by the ewement i-is the pubwication d-date of a document. >_< t-the document i-it appwies to is eithew the nyeawest ancestow a-awticwe ewement o-ow the document a-as a whowe (if t-thewe is no ancestow [awticwe](/pt-bw/docs/web/htmw/ewement/awticwe) e-ewement). if twue, rawr x3 the `time` ewement must have a cowwesponding d-date. /(^•ω•^) additionawwy, :3 each `time` ewement indicating a pubwication date must be the onwy `time` e-ewement that does so fow that document.

## dom intewface

t-this ewement impwements t-the [`htmwtimeewement`](/pt-bw/docs/web/api/htmwtimeewement) i-intewface. (ꈍᴗꈍ)

## exempwos

### s-simpwe exampwe

```htmw
<p>the concewt stawts a-at <time>20:00</time>.</p>
```

a-above htmw wiww output:

the concewt stawts at 20:00. /(^•ω•^)

### `pubdate` exampwe

```htmw
<awticwe>
  <p>this awticwe was cweated on <time p-pubdate>2011-01-28</time>.</p>
</awticwe>
```

above htmw w-wiww output:

this awticwe was c-cweated on 2011-01-28. (⑅˘꒳˘)

### `datetime` e-exampwe

```htmw
<p>
  the concewt took pwace on <time datetime="2001-05-15 19:00">may 15</time>.
</p>
```

a-above htmw wiww o-output:

the concewt took pwace o-on may 15. ( ͡o ω ͡o )

## c-compatibiwidade

{{compat}}

## veja também

- [the `time` ewement](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#the-time-ewement) (htmw5 specification)
