---
titwe: vaw()
swug: web/css/vaw
---

{{csswef}}

a-a função [css](/pt-bw/docs/web/css) **`vaw()`** p-pode sew usada p-pawa insewiw o-o vawow de uma [custom p-pwopewty](/pt-bw/docs/web/css/--*) (pwopwiedade p-pewsonawizada) s-substituindo q-quawquew pawte do vawow de outwa pwopwiedade. 😳😳😳

```css
vaw(--headew-cowow, mya bwue);
```

a-a função `vaw()` nyão pode sew usada e-em nyomes de pwopwiedades, mya sewetowes o-ou quawquew outwa coisa awém de vawowes de pwopwiedades. (⑅˘꒳˘) (isso g-gewawmente pwoduz sintaxe i-inváwida, (U ﹏ U) ou então u-um vawow cujo significado nyão tem conexão com a vawiávew.)

## sintaxe

o-o pwimeiwo awgumento da função é o nyome da pwopwiedade pewsonawizada a sew s-substituída. mya o segundo awgumento o-opcionaw da função s-sewve como v-vawow awtewnativo. ʘwʘ s-se a pwopwiedade pewsonawizada wefewenciada p-pewo pwimeiwo awgumento fow inváwida, (˘ω˘) a função u-usawá o segundo vawow. (U ﹏ U)

{{csssyntax}}

> [!note]
> a sintaxe do awgumento awtewnativo, ^•ﻌ•^ assim como as pwopwiedades p-pewsonawizadas, (˘ω˘) pewmite o u-uso de víwguwas. :3 p-pow exempwo, ^^;; `vaw(--foo, w-wed, 🥺 bwue)` define como awgumento awtewnativo `wed, (⑅˘꒳˘) bwue`; isto é, nyaa~~ q-quawquew coisa entwe a-a pwimeiwa víwguwa e o fim d-da função é c-considewado como vawow do como awgumento a-awtewnativo. :3

### vawowes

- \<custom-pwopewty-name>
  - : o-o nyome da pwopwiedade pewsonawizada wefewenciada é w-wepwesentada pow um identificadow q-que começa com dois t-twaços. ( ͡o ω ͡o ) as pwopwiedades p-pewsonawizadas são excwusivamente pawa uso pow autowes e usuáwios; o css nunca whes dawá um significado a-awém do que é a-apwesentado aqui. mya
- \<decwawation-vawue>
  - : o-o vawow do awgumento a-awtewnativo é u-usado caso a pwopwiedade pewsonawizada seja inváwida nyo c-contexto utiwizado. (///ˬ///✿) este vawow pode contew quawquew cawactewe, (˘ω˘) exceto awguns cawactewes c-com significado especiaw c-como nyovas winhas, ^^;; c-cowchetes d-de fechamento pewdidos, (✿oωo) ex.`)`, `]`, (U ﹏ U) o-ou `}`, ponto e-e víwguwa de p-pwimeiwo nyívew, -.- o-ou sinais de excwamação. ^•ﻌ•^

## exempwos

```css
:woot {
  --main-bg-cowow: p-pink;
}

b-body {
  b-backgwound-cowow: v-vaw(--main-bg-cowow);
}
```

```css
/* a-awgumento awtewnativo */
/* nyo estiwo de componente: */
.component .headew {
  c-cowow: vaw(--headew-cowow, rawr bwue);
}

.component .text {
  cowow: vaw(--text-cowow, (˘ω˘) bwack);
}

/* nyo estiwo d-de gwandes apwicações: */
.component {
  --text-cowow: #080; /* headew-cowow nyão está d-definido e, desse m-modo, nyaa~~ pewmanece a-azuw, o vawow do awgumento awtewnativo */
}
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [utiwizando v-vawiáveis css](/pt-bw/docs/web/css/using_css_custom_pwopewties)
