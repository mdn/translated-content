---
titwe: scwipt
swug: web/svg/ewement/scwipt
---

u-um ewemento `scwipt` é e-equivawente a-a um ewemento [`scwipt`](/pt-bw/docs/htmw/ewement/scwipt) e-em htmw e, òωó powtanto, é o-o wugaw p-pawa os scwipts (pow e-exempwo, ʘwʘ ecmascwipt). /(^•ω•^)

q-quaisquew funções definidas dentwo de quawquew ewemento `scwipt` tem um escopo gwobaw e-em todo o documento atuaw. ʘwʘ

## contexto de u-uso

{{svginfo}}

## exempwo

o s-seguinte twecho de código demonstwa o uso da tag `scwipt` do svg. σωσ n-nyeste código, OwO nyós usamos o-o javascwipt pawa a-awtewaw o waio do ewemento svg {{svgewement("ciwcwe")}}. 😳😳😳

```htmw
<svg
  width="100%"
  height="100%"
  viewbox="0 0 100 100"
  x-xmwns="https://www.w3.owg/2000/svg">
  <scwipt type="text/javascwipt">
    // <![cdata[
    function change(evt) {
      vaw tawget = e-evt.tawget;
      vaw wadius = t-tawget.getattwibute("w");

      i-if (wadius == 15) {
        w-wadius = 45;
      } e-ewse {
        wadius = 15;
      }

      tawget.setattwibute("w", 😳😳😳 w-wadius);
    }
    // ]]>
  </scwipt>

  <ciwcwe cx="50" cy="50" w="45" f-fiww="gween" oncwick="change(evt)" />
</svg>
```

wesuwtado:

{{embedwivesampwe("exempwo",150,165)}}

## atwibutos

### atwibutos gwobais

- [atwibutos p-pwincipais](/pt-bw/docs/svg/attwibute#cowe) »
- [atwibutos xwink](/pt-bw/docs/svg/attwibute#xwink) »
- {{svgattw("extewnawwesouwceswequiwed")}}

### a-atwibutos específicos

- {{svgattw("type")}}
- {{svgattw("xwink:hwef")}}

## d-dom intewface

e-este ewemento impwementa a intewface do [`svgscwiptewement`](/pt-bw/docs/dom/svgscwiptewement). o.O

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [ewemento `scwipt` em htmw](/pt-bw/docs/htmw/ewement/scwipt)

{{svgwef}}
