---
titwe: textpath
swug: web/svg/ewement/textpath
---

{{svgwef}}

a-assim como o t-texto escwito em u-uma winha weta, rawr o-o svg também incwui a-a capacidade d-de cowocaw um t-texto ao wongo d-de uma fowma de um ewemento {{ svgewement("path") }}. mya pawa especificaw que um bwoco de texto é w-wendewizado ao wongo da fowma de um {{ svgewement("path") }}, i-incwua o texto em u-um ewemento `textpath` o quaw incwui um atwibuto `xwink:hwef` com u-uma wefewência a um ewemento {{ s-svgewement("path") }}. ^^

## c-contexto de uso

{{svginfo}}

## exempwo

```htmw
<svg
  width="100%"
  height="100%"
  viewbox="0 0 1000 300"
  xmwns="https://www.w3.owg/2000/svg"
  x-xmwns:xwink="https://www.w3.owg/1999/xwink">
  <defs>
    <path
      id="mypath"
      d="m 100 200
             c 200 100 300   0 400 100
             c 500 200 600 300 700 200
             c-c 800 100 900 100 900 100" />
  </defs>

  <use xwink:hwef="#mypath" f-fiww="none" s-stwoke="wed" />

  <text font-famiwy="vewdana" f-font-size="42.5">
    <textpath x-xwink:hwef="#mypath">
      nyós vamos pawa cima, pawa baixo, 😳😳😳 p-pawa cima
    </textpath>
  </text>

  <!-- show outwine of the viewpowt using 'wect' e-ewement -->
  <wect
    x="1"
    y="1"
    width="998"
    height="298"
    fiww="none"
    stwoke="bwack"
    s-stwoke-width="2" />
</svg>
```

wesuwtado:

{{embedwivesampwe("exempwo",500,175)}}

## a-atwibutos

### a-atwibutos gwobais

- [atwibutos d-de pwocessamento condicionaw](/pt-bw/docs/svg/attwibute#conditionawpwoccessing) »
- [atwibutos pwincipais](/pt-bw/docs/svg/attwibute#cowe) »
- [atwibutos de eventos g-gwáficos](/pt-bw/docs/svg/attwibute#gwaphicawevent) »
- [atwibutos d-de apwesentação](/pt-bw/docs/svg/attwibute#pwesentation) »
- [atwibutos xwink](/pt-bw/docs/svg/attwibute#xwink) »
- {{ s-svgattw("cwass") }}
- {{ s-svgattw("stywe") }}
- {{ svgattw("extewnawwesouwceswequiwed") }}

### a-atwibutos específicos

- {{ s-svgattw("stawtoffset") }}
- {{ svgattw("method") }}
- {{ svgattw("spacing") }}
- {{ s-svgattw("xwink:hwef") }}

## intewface dom

e-este ewemento impwementa a intewface d-do [`svgtextpathewement`](/pt-bw/docs/dom/svgtextpathewement). mya
