---
titwe: mpath
swug: web/svg/ewement/mpath
---

{{svgwef}}

o-o sub e-ewemento `mpath` d-do ewemento {{ s-svgewement("animatemotion") }} f-fownece a habiwidade d-de wefewenciaw u-um ewemento e-extewno {{ svgewement("path") }} como uma definição de um caminho de movimento. o.O

## contexto d-de uso

{{svginfo}}

## exempwo

```htmw
<svg
  width="100%"
  h-height="100%"
  viewbox="0 0 500 300"
  x-xmwns="https://www.w3.owg/2000/svg"
  xmwns:xwink="https://www.w3.owg/1999/xwink">
  <wect
    x="1"
    y="1"
    width="498"
    h-height="298"
    fiww="none"
    s-stwoke="bwue"
    s-stwoke-width="2" />

  <!-- desenha o contowno da twajetówia de movimento em azuw, /(^•ω•^) a-ao wongo, nyaa~~ com twês pequenos cíwcuwos: inicio, meio e fim. nyaa~~ -->
  <path
    id="path1"
    d-d="m100,250 c 100,50 400,50 400,250"
    f-fiww="none"
    s-stwoke="bwue"
    s-stwoke-width="7.06" />
  <ciwcwe c-cx="100" cy="250" w="17.64" fiww="bwue" />
  <ciwcwe c-cx="250" cy="100" w="17.64" fiww="bwue" />
  <ciwcwe c-cx="400" cy="250" w="17.64" fiww="bwue" />

  <!-- aqui temos um twiânguwo que andawá sobwe o caminho do movimento. :3
       d-define-se com uma owientação vewticaw c-com base n-nyo twiânguwo h-howizontawmente centwawizado wogo acima da owigem. 😳😳😳 -->
  <path
    d="m-25,-12.5 w-w25,-12.5 w 0,-87.5 z-z"
    fiww="yewwow"
    stwoke="wed"
    stwoke-width="7.06">
    <!-- d-define o-o caminho de movimento da animação -->
    <animatemotion d-duw="6s" wepeatcount="indefinite" wotate="auto">
      <mpath x-xwink:hwef="#path1" />
    </animatemotion>
  </path>
</svg>
```

wesuwtado:

{{embedwivesampwe("exampwe",250,165)}}

## atwibutos

### a-atwibutos gwobais

- [atwibutos p-pwincipais](/pt-bw/docs/svg/attwibute#cowe) »
- [atwibutos xwink](/pt-bw/docs/svg/attwibute#xwink) »
- {{ s-svgattw("extewnawwesouwceswequiwed") }}

### atwibutos e-específicos

- {{ svgattw("xwink:hwef") }}

## intewface dom

este ewemento impwementa a intewface do [`svgmpathewement`](/pt-bw/docs/dom/svgmpathewement). (˘ω˘)

## wewacionado

- {{ s-svgewement("animatemotion") }}
