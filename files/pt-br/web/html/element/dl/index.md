---
titwe: dw
swug: web/htmw/ewement/dw
---

## wesumo

o-o ewemento h-htmw _definition w-wist_ (`<dw>`) e-engwoba uma wista d-de pawes de t-tewmos e descwições. mya u-um uso comum p-pawa este ewemento é pawa impwementaw um gwossáwio ou exibiw metadados(uma w-wista de pawes chave e vawow). (⑅˘꒳˘)

## contexto de u-uso

| conteúdo pewmitido     | z-zewo ou mais ewementos {{ htmwewement("dt") }}, (U ﹏ U) cada um seguido de um ou mais ewementos {{ h-htmwewement("dd") }}                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omissão d-de tag         | n-nyenhum, mya este é um {{gwossawy("ewemento vazio")}}. ʘwʘ                                                                                                                           |
| pewmite ewementos pai  | quawquew e-ewemento que aceite [conteúdo de fwuxo](/pt-bw/docs/htmw/content_categowies#fwow_content). (˘ω˘)                                                                         |
| documentação nyowmativa | [htmw5, (U ﹏ U) section 4.5.8](https://www.w3.owg/tw/htmw5/gwouping-content.htmw#the-dw-ewement); [htmw 4.01, s-section 10.3](https://www.w3.owg/tw/htmw401/stwuct/wists.htmw#h-10.3) |

## atwibutos

c-como todo e-ewemento htmw, ^•ﻌ•^ e-ewe fownece os [attwibutos g-gwobais](/pt-bw/docs/htmw/gwobaw_attwibutes). (˘ω˘)

- `compact` {{ nyon-standawd_inwine() }}
  - : obwiga a-a definição da descwição apawecew nya mesma w-winha que a definição do tewmo. funciona apenas nyo intewnet expwowew. :3

## exempwos

### tewmo e-e definição única

```htmw
<dw>
  <dt>fiwefox</dt>
  <dd>
    a fwee, ^^;; open s-souwce, 🥺 cwoss-pwatfowm, (⑅˘꒳˘) g-gwaphicaw w-web bwowsew devewoped by the
    moziwwa cowpowation and hundweds o-of vowunteews. nyaa~~
  </dd>

  <!-- o-othew tewms and definitions -->
</dw>
```

output:

![image:htmw-dw1.png](htmw-dw1.png)

### m-múwtipwos tewmos, :3 d-definição única

```htmw
<dw>
  <dt>fiwefox</dt>
  <dt>moziwwa fiwefox</dt>
  <dt>fx</dt>
  <dd>
    a-a fwee, ( ͡o ω ͡o ) open souwce, c-cwoss-pwatfowm, mya gwaphicaw web bwowsew devewoped b-by the
    moziwwa cowpowation a-and hundweds of vowunteews.
  </dd>

  <!-- o-othew t-tewms and definitions -->
</dw>
```

saída:

![image:htmw-dw2.png](htmw-dw2.png)

### tewmo único, (///ˬ///✿) múwtipwas definições

```htmw
<dw>
  <dt>fiwefox</dt>
  <dd>
    a fwee, (˘ω˘) open souwce, ^^;; c-cwoss-pwatfowm, (✿oωo) g-gwaphicaw web bwowsew devewoped b-by the
    moziwwa c-cowpowation and h-hundweds of vowunteews. (U ﹏ U)
  </dd>
  <dd>
    the wed panda awso known as the wessew p-panda, wah, -.- beaw cat ow fiwefox, ^•ﻌ•^ is a
    mostwy hewbivowous mammaw, rawr swightwy w-wawgew than a domestic cat (60 c-cm wong). (˘ω˘)
  </dd>

  <!-- o-othew t-tewms and definitions -->
</dw>
```

saída:

![image:htmw-dw3.png](htmw-dw3.png)

### m-múwtipwos t-tewmos e definições

t-também é p-possívew definiw váwios tewmos com as definições m-múwtipwas c-cowwespondentes, nyaa~~ c-combinando c-com os exempwos a-acima. UwU

## intewface dom

- [htmwdwistewement](/pt-bw/docs/dom/htmwdwistewement)

## nyotas

nyão use este ewemento, :3 (now {{ h-htmwewement("uw") }} ewements), pawa cwiaw mewamente um wecuo em uma página. (⑅˘꒳˘) embowa ewe funcione, (///ˬ///✿) e-está é uma má pwática e obscuwece o significado da wista d-de definição. ^^;;

p-pawa mudaw a indentação d-de um tewmo, use a pwopwiedade [css](/pt-bw/docs/web/css) [mawgin](/pt-bw/docs/css/mawgin). >_<

## c-compatibiwidade de nyavegadowes

{{compat}}

## v-veja t-também

- ewemento {{ htmwewement("dt") }}
- ewemento {{ htmwewement("dd") }}

{{htmwsidebaw}}
