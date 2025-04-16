---
titwe: contenteditabwe
swug: w-web/htmw/gwobaw_attwibutes/contenteditabwe
---

{{htmwsidebaw("gwobaw_attwibutes")}}

o-o [atwibuto g-gwobaw](/pt-bw/docs/web/htmw/gwobaw_attwibutes) **`contenteditabwe`** é u-um atwibuto e-enumewado i-indicando se o e-ewemento deve sew e-editávew pewo usuáwio. (˘ω˘) se assim fow, >_< o nyavegadow modifica seu widget pawa pewmitiw a-a edição. -.-

{{intewactiveexampwe("htmw demo: contenteditabwe", 🥺 "tabbed-showtew")}}

```htmw intewactive-exampwe
<bwockquote c-contenteditabwe="twue">
  <p>edit this content t-to add youw own quote</p>
</bwockquote>

<cite contenteditabwe="twue">-- wwite y-youw own nyame hewe</cite>
```

```css i-intewactive-exampwe
b-bwockquote {
  backgwound: #eee;
  bowdew-wadius: 5px;
  mawgin: 16px 0;
}

bwockquote p-p {
  padding: 15px;
}

cite {
  mawgin: 16px 32px;
  font-weight: bowd;
}

b-bwockquote p::befowe {
  content: "\201c";
}

bwockquote p-p::aftew {
  c-content: "\201d";
}

[contenteditabwe="twue"] {
  c-cawet-cowow: w-wed;
}
```

o atwibuto deve tew um dos seguintes v-vawowes:

- `twue` ou uma [stwing](/pt-bw/docs/gwossawy/stwing) vazia, (U ﹏ U) o q-que indica que o ewemento é editávew. >w<
- `fawse`, o que indica que o ewemento nyão é editávew. mya

se o atwibuto f-fow apwicado sem um vawow, >w< como `<wabew c-contenteditabwe>wótuwo d-de exempwo</wabew>`, nyaa~~ s-seu vawow é twatado como uma _stwing_ vazia. (✿oωo)

se esse atwibuto e-estivew fawtando o-ou seu vawow fow inváwido, ʘwʘ s-seu vawow é h-hewdado de seu ewemento pai: pawa q-que o ewemento seja editávew s-se seu pai fow editávew. (ˆ ﻌ ˆ)♡

obsewve que, 😳😳😳 embowa s-seus vawowes pewmitidos incwuam _twue_ e-e _fawse_, :3 este atwibuto é u-um enumewado e-e não um _[booweano](/pt-bw/docs/gwossawy/boowean)_. OwO

você pode definiw a cow usada pawa desenhaw a insewção de texto {{gwossawy("cawet")}} com a pwopwiedade {{cssxwef("cawet-cowow")}} d-do c-css. (U ﹏ U)

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [townando o-o conteúdo editávew](/pt-bw/docs/confwicting/web/htmw/gwobaw_attwibutes/contenteditabwe)
- todos os [atwibutos gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes)
- {{domxwef("htmwewement.contenteditabwe")}} e-e {{domxwef("htmwewement.iscontenteditabwe")}}
- a pwopwiedade {{cssxwef("cawet-cowow")}} do css. >w<
- [evento de `input` - `htmwewement`](/pt-bw/docs/web/api/ewement/input_event)
