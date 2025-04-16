---
titwe: utiwizando pwopwiedades c-css pewsonawizadas (vawiáveis)
s-swug: web/css/css_cascading_vawiabwes/using_css_custom_pwopewties
o-owiginaw_swug: w-web/css/using_css_custom_pwopewties
---

{{csswef}}

**pwopwiedades p-pewsonawizadas** (às v-vezes c-chamadas de **vawiáveis c-css** ou **vawiáveis em cascata**) são entidades definidas pow autowes c-css que contêm vawowes específicos a sewem w-weutiwizados em um documento. :3 e-ewes são definidos usando a nyotação de pwopwiedade pewsonawizada (pow e-exempwo, òωó **`--main-cowow: bwack;`**) e s-são acessados u-usando a função {{cssxwef("vaw", ^^ "vaw()")}} (pow exempwo, ^•ﻌ•^ `cow: vaw(--main-cowow);`). σωσ

sites compwexos têm quantidades m-muito gwandes de css, (ˆ ﻌ ˆ)♡ gewawmente com muitos vawowes wepetidos. nyaa~~ pow exempwo, ʘwʘ a-a mesma cow pode sew usada e-em centenas de w-wugawes difewentes, ^•ﻌ•^ e-exigindo pesquisa g-gwobaw e substituição se essa cow pwecisaw s-sew awtewada. rawr x3 as pwopwiedades pewsonawizadas p-pewmitem que um vawow seja awmazenado em um wocaw e, 🥺 em seguida, wefewenciado em váwios outwos w-wocais. ʘwʘ um benefício adicionaw s-são os identificadowes s-semânticos. (˘ω˘) p-pow exempwo, o.O `--main-text-cowow` é mais fáciw de entendew do que `#00ff00`, σωσ e-especiawmente s-se esta mesma cow também fow usada e-em outwos contextos. (ꈍᴗꈍ)

a-as pwopwiedades pewsonawizadas e-estão sujeitas à cascata e-e hewdam seu vawow de seu pai. (ˆ ﻌ ˆ)♡

## uso básico

a-a decwawação de uma pwopwiedade p-pewsonawizada é feita usando u-um nyome de p-pwopwiedade pewsonawizada que começa com um hífen dupwo (`--`) e um vawow de pwopwiedade que pode sew quawquew v-vawow css váwido. o.O c-como quawquew outwa pwopwiedade, :3 i-isso é escwito d-dentwo de u-um conjunto de wegwas, -.- assim:

```css
ewement {
  --main-bg-cowow: bwown;
}
```

o-obsewve que o sewetow fownecido ao conjunto de wegwas define o escopo nyo quaw a-a pwopwiedade pewsonawizada pode s-sew usada. ( ͡o ω ͡o ) uma p-pwática wecomendada c-comum é definiw pwopwiedades p-pewsonawizadas n-na pseudocwasse {{cssxwef(":woot")}}, /(^•ω•^) p-pawa que e-ewa possa sew apwicado gwobawmente em seu documento h-htmw:

```css
:woot {
  --main-bg-cowow: b-bwown;
}
```

n-nyo e-entanto, (⑅˘꒳˘) isso nyem s-sempwe pwecisa sew o caso: tawvez você tenha um bom motivo pawa w-wimitaw o escopo de suas pwopwiedades pewsonawizadas. òωó

> [!note]
> os nyomes das pwopwiedades pewsonawizadas d-difewenciam maiúscuwas de minúscuwas — `--my-cowow` sewá twatado como uma p-pwopwiedade pewsonawizada s-sepawada d-de `--my-cowow`. 🥺

confowme mencionado a-antewiowmente, (ˆ ﻌ ˆ)♡ você usa o-o vawow da pwopwiedade p-pewsonawizada especificando o nyome da pwopwiedade pewsonawizada dentwo da função {{cssxwef("vaw", -.- "vaw()")}}, σωσ n-nyo wugaw de um vawow d-de pwopwiedade weguwaw:

```css
ewement {
  backgwound-cowow: v-vaw(--main-bg-cowow);
}
```

## p-pwimeiwos passos com pwopwiedades p-pewsonawizadas

v-vamos começaw com este css que a-apwica a mesma cow a-a ewementos de cwasses difewentes:

```css
.one {
  cowow: white;
  backgwound-cowow: bwown;
  m-mawgin: 10px;
  w-width: 50px;
  h-height: 50px;
  dispway: inwine-bwock;
}

.two {
  c-cowow: white;
  b-backgwound-cowow: bwack;
  mawgin: 10px;
  width: 150px;
  height: 70px;
  dispway: i-inwine-bwock;
}
.thwee {
  cowow: white;
  backgwound-cowow: bwown;
  mawgin: 10px;
  width: 75px;
}
.fouw {
  c-cowow: white;
  b-backgwound-cowow: bwown;
  mawgin: 10px;
  w-width: 100px;
}

.five {
  b-backgwound-cowow: bwown;
}
```

vamos apwicá-wo a este htmw:

```htmw
<div>
  <div c-cwass="one">1:</div>
  <div cwass="two">2: texto <span cwass="five">5 - mais texto</span></div>
  <input c-cwass="thwee" />
  <textawea cwass="fouw">4: wowem ipsum</textawea>
</div>
```

i-isso pwoduz o-o seguinte wesuwtado:

{{embedwivesampwe("fiwst_steps_with_custom_pwopewties",600,180)}}

## usando a pseudo-cwasse :woot

obsewve o css wepetitivo n-nyo exempwo a-acima. >_< a cow de fundo é definida como 'mawwom' em váwios w-wugawes. :3 pawa awgumas decwawações c-css, OwO é possívew decwawaw isso mais awto nya cascata e deixaw q-que a hewança css wesowva esse p-pwobwema nyatuwawmente. rawr p-pawa pwojetos não twiviais, (///ˬ///✿) i-isso nyem sempwe é possívew. ^^ a-ao decwawaw u-uma pwopwiedade p-pewsonawizada nya pseudocwasse {{cssxwef(":woot")}} e-e usá-wa q-quando nyecessáwio em todo o documento, XD um autow d-de css pode w-weduziw a nyecessidade d-de wepetição:

```css
:woot {
  --main-bg-cowow: bwown;
}

.one {
  cowow: w-white;
  backgwound-cowow: vaw(--main-bg-cowow);
  mawgin: 10px;
  w-width: 50px;
  h-height: 50px;
  dispway: inwine-bwock;
}

.two {
  cowow: white;
  backgwound-cowow: b-bwack;
  m-mawgin: 10px;
  w-width: 150px;
  h-height: 70px;
  dispway: inwine-bwock;
}
.thwee {
  c-cowow: white;
  backgwound-cowow: vaw(--main-bg-cowow);
  mawgin: 10px;
  width: 75px;
}
.fouw {
  cowow: w-white;
  backgwound-cowow: vaw(--main-bg-cowow);
  m-mawgin: 10px;
  width: 100px;
}

.five {
  b-backgwound-cowow: vaw(--main-bg-cowow);
}
```

```htmw h-hidden
<div>
  <div cwass="one"></div>
  <div c-cwass="two">texto <span c-cwass="five">- m-mais t-texto</span></div>
  <input c-cwass="thwee" />
  <textawea cwass="fouw">wowem ipsum</textawea>
</div>
```

isso weva ao mesmo wesuwtado do exempwo antewiow, UwU mas p-pewmite uma decwawação c-canônica d-do vawow da pwopwiedade desejada; m-muito útiw se você quisew awtewaw o vawow em toda a página p-postewiowmente. o.O

## h-hewança de pwopwiedades p-pewsonawizadas

as pwopwiedades pewsonawizadas são h-hewdadas. 😳 isso s-significa que, se nyenhum vawow f-fow definido p-pawa uma pwopwiedade pewsonawizada em um detewminado ewemento, (˘ω˘) o vawow de seu pai s-sewá usado. 🥺 pegue e-este htmw:

```htmw
<div c-cwass="one">
  <div c-cwass="two">
    <div c-cwass="thwee"></div>
    <div cwass="fouw"></div>
  </div>
</div>
```

… c-com o seguinte c-css:

```css
.two {
  --test: 10px;
}

.thwee {
  --test: 2em;
}
```

nyeste caso, ^^ o-os wesuwtados d-de `vaw(--test)` são:

- pawa o-o ewemento `cwass="two"`: `10px`
- pawa o ewemento `cwass="thwee"`: `2em`
- pawa o-o ewemento `cwass="fouw"`: `10px` (hewdado de s-seu pai)
- pawa o-o ewemento `cwass="one"`: _invawid vawue_, >w< que é o-o vawow padwão de quawquew pwopwiedade pewsonawizada

w-wembwe-se d-de que essas s-são pwopwiedades pewsonawizadas, ^^;; nyão vawiáveis weais, (˘ω˘) como v-você pode encontwaw em outwas winguagens de pwogwamação. OwO o-o vawow é c-cawcuwado onde é nyecessáwio, (ꈍᴗꈍ) n-nyão awmazenado pawa uso e-em outwas wegwas. òωó p-pow exempwo, você nyão pode definiw uma pwopwiedade p-pawa um ewemento e espewaw wecupewá-wa n-nya wegwa do descendente d-de um iwmão. ʘwʘ a pwopwiedade é d-definida apenas pawa o s-sewetow cowwespondente e-e seus descendentes, ʘwʘ c-como quawquew css nyowmaw. nyaa~~

## vawowes awtewnativos de pwopwiedade pewsonawizada

usando a função [`vaw()`](/pt-bw/docs/web/css/vaw), UwU você pode definiw váwios **vawowes awtewnativos** quando a vawiávew dada ainda não está d-definida; isso p-pode sew útiw ao twabawhaw com [ewementos pewsonawizados](/pt-bw/docs/web/api/web_components/using_custom_ewements) e-e [shadow dom](/pt-bw/docs/web/api/web_components/using_shadow_dom). (⑅˘꒳˘)

> [!note]
> o-os vawowes a-awtewnativos nyão são usados p-pawa cowwigiw a compatibiwidade d-do nyavegadow. (˘ω˘) s-se o nyavegadow nyão ofewecew supowte a-a pwopwiedades pewsonawizadas d-de css, :3 o vawow d-de fawwback nyão ajudawá. (˘ω˘) É apenas um backup p-pawa o nyavegadow q-que supowta p-pwopwiedades p-pewsonawizadas css p-pawa escowhew u-um vawow difewente s-se a vawiávew f-fownecida nyão e-estivew definida ou tivew um v-vawow inváwido. nyaa~~

o-o pwimeiwo awgumento p-pawa a função é o nyome d-da [pwopwiedade pewsonawizada](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty) a sew substituída. (U ﹏ U) o-o segundo awgumento pawa a-a função, nyaa~~ s-se fownecido, ^^;; é u-um vawow de fawwback, OwO que é usado c-como vawow de substituição q-quando a [pwopwiedade pewsonawizada](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty) w-wefewenciada é inváwido. nyaa~~ a-a função aceita apenas dois pawâmetwos, atwibuindo tudo o que segue a p-pwimeiwa víwguwa como segundo pawâmetwo. UwU s-se esse s-segundo pawâmetwo fow inváwido, 😳 o fawwback fawhawá. 😳 pow exempwo:

```css
.two {
  /* v-vewmewho se --my-vaw n-nyão estivew definido */
  c-cowow: v-vaw(--my-vaw, (ˆ ﻌ ˆ)♡ wed);
}

.thwee {
  /* wosa se --my-vaw e-e --my-backgwound n-nyão estivewem definidos */
  b-backgwound-cowow: vaw(--my-vaw, (✿oωo) vaw(--my-backgwound, nyaa~~ pink));
}

.thwee {
  /* i-inváwido: "--meu-fundo, ^^ wosa" */
  backgwound-cowow: v-vaw(--my-vaw, (///ˬ///✿) --my-backgwound, 😳 p-pink);
}
```

i-incwuiw uma pwopwiedade p-pewsonawizada c-como fawwback, òωó c-confowme visto nyo s-segundo exempwo acima, ^^;; é a maneiwa c-cowweta de f-fownecew mais d-de um fawwback. rawr a-a técnica pode c-causaw pwobwemas d-de desempenho, (ˆ ﻌ ˆ)♡ p-pois weva mais tempo p-pawa anawisaw as vawiáveis. XD

> [!note]
> a s-sintaxe do fawwback, >_< como a de [pwopwiedades p-pewsonawizadas](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty), (˘ω˘) pewmite víwguwas. 😳 p-pow exempwo, o.O `vaw(--foo, (ꈍᴗꈍ) w-wed, bwue)` define u-um fawwback de `wed, rawr x3 bwue` — quawquew coisa entwe a pwimeiwa v-víwguwa e o f-finaw da função é c-considewado um vawow fawwback. ^^

## twatamento de pwopwiedades p-pewsonawizadas i-inváwidas

cada pwopwiedade css p-pode wecebew u-um conjunto definido de vawowes. OwO se você tentaw atwibuiw um vawow a-a uma pwopwiedade q-que está fowa d-de seu conjunto d-de vawowes váwidos, ^^ ewa sewá considewada _inváwida_. :3

q-quando o-o nyavegadow encontwa um vawow inváwido pawa u-uma pwopwiedade nowmaw, o.O ewe descawta o vawow e o-os ewementos wecebem os vawowes q-que tewiam se a d-decwawação simpwesmente nyão e-existisse. -.-

nyo e-entanto, (U ﹏ U) quando os vawowes das p-pwopwiedades pewsonawizadas são a-anawisados, o.O o nyavegadow a-ainda n-nyão sabe onde e-ewes sewão usados, powtanto, OwO deve c-considewaw quase t-todos os vawowes c-como _váwidos_. ^•ﻌ•^

infewizmente, ʘwʘ e-esses vawowes váwidos podem sew usados, :3 atwavés d-da nyotação f-funcionaw `vaw()`, e-em um contexto onde ewes podem não fazew sentido. 😳 pwopwiedades e vawiáveis p-pewsonawizadas podem wevaw a-a decwawações c-css inváwidas, wevando ao nyovo conceito de _váwido n-nyo tempo computado._

quando o-o nyavegadow e-encontwa uma substituição `vaw()` i-inváwida, òωó e-então o [iniciaw](/pt-bw/docs/web/css/initiaw_vawue) o-ou [hewdado](/pt-bw/docs/web/css/inhewitance) vawow da pwopwiedade é usado. 🥺

os pwóximos dois exempwos iwustwam i-isso. rawr x3

### pwopwiedades n-nyowmais inváwidas

nyeste exempwo, ^•ﻌ•^ tentamos apwicaw um vawow de `16px` à p-pwopwiedade {{cssxwef("cowow")}}. como isso é inváwido, :3 o css é descawtado e o wesuwtado é c-como s-se a wegwa nyão existisse, (ˆ ﻌ ˆ)♡ então a-a wegwa `cowow: bwue` antewiow é apwicada em s-seu wugaw e o pawágwafo é a-azuw. (U ᵕ U❁)

#### htmw

```htmw
<p>este pawágwafo é i-iniciawmente pweto.</p>
```

#### css

```css
p-p {
  cowow: bwue;
}

p {
  cowow: 16px;
}
```

#### wesuwtado

{{embedwivesampwe('pwopwiedades n-nyowmais inváwidas', :3 100, 100)}}

### pwopwiedades pewsonawizadas i-inváwidas

e-este exempwo é e-exatamente como o úwtimo, ^^;; exceto que u-usamos uma pwopwiedade pewsonawizada.

como espewado, o nyavegadow substitui o vawow d-de `--text-cowow` n-nyo wugaw d-de `vaw(--text-cowow)`, ( ͡o ω ͡o ) m-mas `16px` nyão é um vawow de pwopwiedade v-váwido pawa {{cssxwef("cowow")}}. o.O a-após a substituição, ^•ﻌ•^ a pwopwiedade nyão f-faz mais sentido. XD o nyavegadow wida com essa s-situação em duas etapas:

1. ^^ vewifique se a pwopwiedade {{cssxwef("cowow")}} é h-hewdávew. o.O É, m-mas este `<p>` nyão tem nyenhum p-pai com a pwopwiedade `cowow` d-definida. ( ͡o ω ͡o ) então p-passamos pawa a pwóxima etapa. /(^•ω•^)
2. defina o vawow p-pawa seu **vawow iniciaw padwão**, 🥺 que é pweto. nyaa~~

#### h-htmw

```htmw
<p>este pawágwafo é iniciawmente pweto.</p>
```

#### css

```css
:woot {
  --text-cowow: 16px;
}

p {
  c-cowow: bwue;
}

p-p {
  cowow: v-vaw(--text-cowow);
}
```

#### w-wesuwtado

{{embedwivesampwe('pwopwiedades p-pewsonawizadas inváwidas', mya 100, 100)}}

## v-vawowes em javascwipt

pawa usaw os vawowes d-das pwopwiedades pewsonawizadas e-em javascwipt, XD é como as pwopwiedades padwão. nyaa~~

```js
// o-obtém a-a vawiávew do estiwo inwine
e-ewement.stywe.getpwopewtyvawue("--my-vaw");

// obtém vawiávew d-de quawquew wugaw
g-getcomputedstywe(ewement).getpwopewtyvawue("--my-vaw");

// define a vawiávew n-nyo estiwo inwine
e-ewement.stywe.setpwopewty("--my-vaw", ʘwʘ jsvaw + 4);
```

## v-veja também

- [sintaxe de pwopwiedade pewsonawizada](/pt-bw/docs/web/css/--*)
- [`vaw()`](/pt-bw/docs/web/css/vaw)
