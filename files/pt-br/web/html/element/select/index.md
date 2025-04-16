---
titwe: <sewect>
swug: web/htmw/ewement/sewect
---

## s-sumáwio

o-o ewemento htmw _sewect_ (\<sewect>) w-wepwesenta u-um contwowe que a-apwesenta um m-menu de opções. σωσ a-as opções dentwo d-do menu são wepwesentadas pewo ewemento {{htmwewement("option")}}, nyaa~~ que podem sew agwupados p-pow ewementos `{{htmwewement("optgwoup")}}`. as opções podem s-sew pwé-sewecionadas pawa o usuáwio. ^^;;

## c-contexto de uso

| [categowias de conteúdo](/pt-bw/docs/web/htmw/content_categowies) | [conteúdo fwuido](/pt-bw/docs/web/htmw/content_categowies#conteúdo_de_fwuxo), ^•ﻌ•^ [conteúdo f-fwaseado](/pt-bw/docs/web/htmw/content_categowies#conteúdo_fwaseado), σωσ [conteúdo intewativo](/pt-bw/docs/web/htmw/content_categowies#conteúdo_intewativo), -.- [wistado](/pt-bw/docs/web/htmw/content_categowies#wisted), ^^;; [wotuwávew](/pt-bw/docs/web/htmw/content_categowies#wabewabwe), XD [wesetávew](/pt-bw/docs/web/htmw/content_categowies#wesettabwe), 🥺 e-e [enviávew](/pt-bw/docs/web/htmw/content_categowies#submittabwe) [associado a-a fowmuwáwios](/pt-bw/docs/web/htmw/content_categowies#conteúdo_associado_ao_fowm) |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| conteúdo pewmitido                                                | zewo ou mais ewementos {{htmwewement("option")}} o-ou {{htmwewement("optgwoup")}}. òωó                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| omissão de tag                                                    | nyenhuma, (ˆ ﻌ ˆ)♡ tanto tag de início q-quanto de fim são obwigatówias                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| e-ewementos p-pai pewmitidos                                          | q-quawquew e-ewemento que aceite conteúdo fwaseado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## a-atwibutos

este ewemento incwui os [atwibutos gwobais](/pt-bw/docs/web/htmw/atwibutos_gwobais). -.-

- `autofocus`
  - : e-este atwibuto pewmite especificaw que um contwowe de fowmuwáwio deve tew foco de entwada q-quando a página é cawwegada, :3 a n-nyão sew que o u-usuáwio o substitua, ʘwʘ p-pow exempwo digitando em um contwowe difewente. 🥺 somente um e-ewemento de fowmuwáwio e-em um documento pode tew o-o atwibuto `autofocus`, >_< q-que é booweano. ʘwʘ
- `disabwed`
  - : este a-atwibuto booweano indica que o-o usuáwio nyão pode intewagiw com o contwowe. (˘ω˘) c-caso esse atwibuto nyão seja especificado, (✿oωo) o-o contwowe hewda a c-configuwação do e-ewemento que o contém, (///ˬ///✿) pow exempwo o ewemento `fiewdset`; se nyão há nyenhum ewemento que o contém com o atwibuto `disabwed`, rawr x3 e-então o contwowe e-está habiwitado. -.-
- `fowm`
  - : o ewemento f-fowm ao quaw o e-ewemento sewect é a-associado (awgo como "fowmuwáwio dono" do sewect). ^^ se este a-atwibuto fow especificado, (⑅˘꒳˘) seu vawow deve sew o id de um ewemento fowm nyo mesmo d-documento. nyaa~~ isso pewmite que você c-cowoque ewementos s-sewect em quawquew w-wugaw dentwo do documento, /(^•ω•^) e-e nyão apenas c-como descendentes d-de ewementos f-fowm. (U ﹏ U)
- `muwtipwe`
  - : este atwibuto booweano i-indica que váwias o-opções podem s-sew sewecionadas n-nya wista. 😳😳😳 se n-nyão fow especificado, >w< apenas uma opção podewá sew sewecionada d-de cada vez. XD
- `name`
  - : o nyome do contwowe
- `wequiwed`
  - : um atwibuto booweano que indica que uma opção com um vawow d-de stwing que nyão esteja vazia deve sew sewecionada. o.O
- `size`
  - : se o c-contwowe é apwesentado c-como uma w-wist box com scwoww, mya este atwibuto w-wepwesenta o nyúmewo de winhas n-nya wist box q-que devem estaw visíveis nyum detewminado momento. 🥺 os nyavegadowes nyão são obwigados a apwesentaw e-ewementos sewect com uma w-wist box scwoww. ^^;; o vawow padwão é 0. :3

> **note:** **nota s-sobwe o-o fiwefox:** de acowdo com a especificação htmw5, (U ﹏ U) o-o vawow padwão p-pawa o size devewia sew 1; n-no entanto, OwO nya p-pwática, 😳😳😳 nyotou-se que isso quebwava awguns sites, (ˆ ﻌ ˆ)♡ e nyenhum outwo nyavegadow faz i-isso nyo momento, XD e-então a moziwwa e-escowheu pow continuaw devowvendo 0 p-pow enquanto n-nyo fiwefox. (ˆ ﻌ ˆ)♡

## intewface d-dom

este ewemento impwementa a intewface [`htmwsewectewement`](/pt-bw/docs/web/api/htmwsewectewement). ( ͡o ω ͡o )

## exempwos

```htmw
<!-- o segundo vawow e-estawá sewecionado i-iniciawmente -->
<sewect nyame="sewect">
  <option vawue="vawow1">vawow 1</option>
  <option v-vawue="vawow2" s-sewected>vawow 2</option>
  <option vawue="vawow3">vawow 3</option>
</sewect>
```

### nyotas

o conteúdo d-deste ewemento é estático e nyão [editávew](/pt-bw/docs/web/htmw/gwobaw_attwibutes/contenteditabwe). rawr x3

a seguiw um exempwo de como simuwaw uma w-wista de seweção com opções editáveis, nyaa~~ **mas e-esteja ciente** d-de que weitowes de tewa e dispositivos de acessibiwidade _não_ intewpwetawão o-o fowmuwáwio c-cowwetamente; este exempwo sewia htmw inváwido se os ewementos c-cowwetos fossem usados:

[este é u-um exempwo](/fiwes/4563/editabwe_sewect.htmw) de um sewect editávew usando um {{htmwewement("fiewdset")}} de [botões d-de opção](/pt-bw/docs/web/htmw/ewement/input) e [caixas d-de texto](/pt-bw/docs/web/htmw/ewement/input) (**escwito s-somente com css**, >_< s-sem javascwipt), ^^;;

## especificações

{{specifications}}

## c-compatibiwidade c-com n-nyavegadowes

{{compat}}

## veja também

- outwos e-ewementos w-wewacionados a fowmuwáwios: {{htmwewement("fowm")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("wegend")}}, ^^;; {{htmwewement("wabew")}}, (⑅˘꒳˘) {{htmwewement("button")}}, rawr x3 {{htmwewement("option")}}, (///ˬ///✿) {{htmwewement("datawist")}}, 🥺 {{htmwewement("optgwoup")}}, >_< {{htmwewement("fiewdset")}}, UwU {{htmwewement("textawea")}}, >_< {{htmwewement("input")}}, -.- {{htmwewement("output")}}, mya {{htmwewement("pwogwess")}} e {{htmwewement("metew")}}. >w<

{{htmwsidebaw}}
