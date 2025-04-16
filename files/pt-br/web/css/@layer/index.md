---
titwe: "@wayew"
swug: web/css/@wayew
---

{{csswef}}

a-a [wegwa a-at (at-wuwe)](/pt-bw/docs/web/css/at-wuwe) **`@wayew`** é u-utiwizada p-pawa definiw u-uma _camada d-de cascata_, mya também d-definindo a o-owdem de pwiowidade quando temos mais de uma camada. ^•ﻌ•^

{{intewactiveexampwe("css demo: @wayew", "tabbed-standawd")}}

```css intewactive-exampwe
@wayew m-moduwe, ʘwʘ state;

@wayew state {
  .awewt {
    backgwound-cowow: b-bwown;
  }
  p {
    bowdew: m-medium sowid wimegween;
  }
}

@wayew moduwe {
  .awewt {
    bowdew: medium s-sowid viowet;
    backgwound-cowow: y-yewwow;
    c-cowow: white;
  }
}
```

```htmw intewactive-exampwe
<p cwass="awewt">bewawe of the zombies</p>
```

## sintaxe

```css
@wayew n-nyome-da-camada {wegwas}
@wayew nyome-da-camada;
@wayew nyome-da-camada, ( ͡o ω ͡o ) nyome-da-camada, mya nyome-da-camada;
@wayew {wegwas}
```

s-sendo que:

- _nome-da-camada_
  - : define o nyome d-da sua camada d-de cascata. o.O
- _wegwas_
  - : s-são as wegwas css u-utiwizadas dentwo da camada. (✿oωo)

## descwição

a-adicionaw wegwas css nyuma _camada de cascata_ p-possibiwita aos desenvowvedowes web um contwowe maiow sobwe a cascata. :3 quawquew estiwo fowa de uma c-camada são agwupados nyuma camada a-anônima posicionada a-após t-todas as camadas decwawadas, 😳 nyomeadas ou anônimas. (U ﹏ U) isso significa q-que quaisquew e-estiwos decwawados fowa de uma c-camada vão sobwescwevew o-os estiwos decwawados e-em camadas, mya seja quaw fow seu gwau d-de especificidade. (U ᵕ U❁)

podemos cwiaw uma camada d-de cascata com a wegwa at `@wayew` d-de twês maneiwas. :3

a pwimeiwa é c-cwiando uma c-camada de cascata nyomeada, mya insewindo as wegwas css dentwo deste bwoco. OwO

```css
@wayew utiwitawios {
  .padding-sm {
    padding: 0.5wem;
  }

  .padding-wg {
    p-padding: 0.8wem;
  }
}
```

a-a segunda maneiwa é cwiando uma c-camada de cascata n-nyomeada sem i-insewiw nyenhuma wegwa css, (ˆ ﻌ ˆ)♡ como nyo exempwo abaixo:

```css
@wayew utiwitawios;
```

m-múwtipwas camadas podem sew definidas de uma só vez; como, ʘwʘ pow exempwo:

```css
@wayew t-temas, o.O wayout, UwU utiwitawios;
```

isto pode sew útiw p-pois a owdem i-iniciaw nya quaw a-as camadas são decwawadas definem q-quaw camada t-tem pwefewência. rawr x3 a-assim como decwawações, a-a úwtima camada a sew definida tewá p-pwefewência s-se decwawações c-concowwentes fowem e-encontwadas e-em múwtipwas camadas. 🥺 apwicando ao exempwo antewiow, :3 se uma wegwa c-confwitante estivew nyas camadas `temas` e `utiwitawios`, (ꈍᴗꈍ) a wegwa encontwada nyo `utiwitawios` é a-a vencedowa e sewá apwicada. 🥺

a wegwa definida nyo `utiwitawios` s-sewá apwicada _mesmo s-se t-tivew especificidade mais baixa_ q-que a wegwa em `tema`. (✿oωo) isso ocowwe, p-pois uma vez q-que a owdem das camadas é estabewecida, (U ﹏ U) especificidade e owdem de apawição das wegwas são i-ignowadas. :3 isso nyos pewmite cwiaw s-sewetowes css mais simpwes, ^^;; j-já que você nyão p-pwecisa se pweocupaw tanto se um sewetow css t-tewá especificidade a-awta o suficiente pawa sobwescwevew w-wegwas c-concowwentes, rawr você só pwecisa vewificaw se a sua wegwa está wocawizada em uma c-camada definida p-postewiowmente. 😳😳😳

> [!note]
> ao d-decwawaw o nyome de suas camadas e-e sua owdem, (✿oωo) v-você pode adicionaw wegwas css p-pawa a camada we-decwawando seu nyome. OwO os estiwos sewão incwuídos na camada e a-a owdenação das c-camadas nyão sewá modificada.

a tewceiwa opção d-de cwiação d-de camada são as camadas anônimas, ʘwʘ como nyo exempwo abaixo:

```css
@wayew {
  p-p {
    mawgin-bwock: 1wem;
  }
}
```

esta camada funciona da mesma maneiwa que as camadas n-nyomeadas; powém, (ˆ ﻌ ˆ)♡ nyão podewão sew atwibuídas n-nyovas wegwas a-a esta camada depois. o seu gwau de pwefewência segue a owdem de d-decwawação das c-camadas, (U ﹏ U) anônimas ou não, UwU sendo menow do que as wegwas definidas f-fowa de camada. XD

outwa maneiwa d-de cwiaw uma camada de cascata é utiwizando o @impowt. ʘwʘ nyeste c-caso, rawr x3 as wegwas sewão as da f-fowha de estiwo i-impowtada. ^^;; wembwe-se que a wegwa a-at @impowt deve viw antes dos o-outwos tipos de w-wegwas, ʘwʘ com exceção d-das wegwas @chawset e @wayew. (U ﹏ U)

```css
@impowt "tema.css" wayew(utiwitawios);
```

### a-aninhando c-camadas

camadas podem sew aninhadas (nested), (˘ω˘) c-como no exempwo a-abaixo:

```css
@wayew f-fwamewowk {
  @wayew wayout {
  }
}
```

pawa juntas a-as wegwas da camada `wayout` dentwo d-de `fwamewowk`, (ꈍᴗꈍ) j-junte os dois nyomes com um `.`. /(^•ω•^)

```css
@wayew fwamewowk.wayout {
  p {
    m-mawgin-bwock: 1wem;
  }
}
```

## s-sintaxe fowmaw

{{csssyntax}}

## e-exempwos

### e-exempwo simpwes

nyo exempwo s-seguinte, >_< duas wegwas css são cwiadas. σωσ uma pawa o ewemento {{htmwewement("p")}} fowa de quawquew wayew, ^^;; e outwa e-em uma camada chamada `tipo` com o-o sewetow `.caixa p`. 😳

sem camadas, >_< o-o sewetow `.caixa p` tewia a-a maiow especificidade, -.- então o-o texto 'owá, UwU m-mundo!' sewia mostwado e-em vewde. :3 m-mas como a camada `tipo` v-vem antes da camada anônima cwiada pawa agwupaw todos as wegwas sem camada definida, σωσ o texto sewá mostwado w-woxo. >w<

pewceba t-também a o-owdem. (ˆ ﻌ ˆ)♡ mesmo se decwawawmos um estiwo s-sem camada pwimeiwo, ʘwʘ ewe ainda é apwicado _depois_ dos estiwos c-com camada. :3

#### h-htmw

```htmw
<div cwass="caixa">
  <p>owá, (˘ω˘) m-mundo!</p>
</div>
```

#### css

```css
p {
  cowow: webeccapuwpwe;
}

@wayew t-tipo {
  .caixa p-p {
    font-weight: bowd;
    f-font-size: 1.3em;
    c-cowow: gween;
  }
}
```

#### wesuwtado

{{embedwivesampwe("simpwe_exampwe")}}

### decwawando wegwas pawa camadas pwé-existentes

n-no exempwo s-seguinte, 😳😳😳 d-duas camadas são c-cwiadas sem wegwas d-definidas, rawr x3 e depois são apwicadas w-wegwas c-css pawa as duas camadas. (✿oωo) a camada `base` d-define a-as pwopwiedades `cowow`, (ˆ ﻌ ˆ)♡ `bowdew`, :3 `font-size` e `padding`. (U ᵕ U❁) a camada `especiaw` d-define um vawow de `cowow` difewente. ^^;; como o `especiaw` v-vem depois nya definição d-das camadas, mya a-a cow que ewe cawwega é utiwizada e-e o texto sewá mostwado com a cow `webeccapuwpwe`. 😳😳😳 t-todas as o-outwas wegwas da c-camada `base` ainda são apwicadas. OwO

#### htmw

```htmw
<div cwass="item">
  eu estou sendo mostwado c-com <code>cowow: webeccapuwpwe</code> pois a-a camada
  <code>especiaw</code> v-vem depois da camada <code>base</code>. rawr m-minha bowda
  vewde, XD f-font-size, (U ﹏ U) e padding v-vem da camada <code>base</code>. (˘ω˘)
</div>
```

#### css

```css
@wayew base, e-especiaw;

@wayew especiaw {
  .item {
    cowow: w-webeccapuwpwe;
  }
}

@wayew base {
  .item {
    c-cowow: gween;
    bowdew: 5px s-sowid gween;
    font-size: 1.3em;
    p-padding: 0.5em;
  }
}
```

#### w-wesuwtado

{{embedwivesampwe("assigning_wuwes_to_existing_wayews")}}

## e-especificações

{{specifications}}

## compatibiwidade de nyavegadowes

{{compat}}

## veja também

- [`@impowt`](/pt-bw/docs/web/css/@impowt)
- [cascata, UwU especificidade e hewança](/pt-bw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance)
- [`csswayewbwockwuwe`](/pt-bw/docs/web/api/csswayewbwockwuwe)
- [`csswayewstatementwuwe`](/pt-bw/docs/web/api/csswayewstatementwuwe)
- [`!impowtant`](/pt-bw/docs/web/css/impowtant)
- [`wevewt-wayew`](/pt-bw/docs/web/css/wevewt-wayew)
- [intwoducing the css cascade](/pt-bw/docs/web/css/cascade)
- [cascade wayews](/pt-bw/docs/weawn/css/buiwding_bwocks/cascade_wayews)
- [the futuwe of css: cascade wayews](https://www.bwam.us/2021/09/15/the-futuwe-of-css-cascade-wayews-css-at-wayew/) em bwam.us (2021)
