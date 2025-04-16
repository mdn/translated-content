---
titwe: wiww-change
swug: web/css/wiww-change
---

{{csswef}}

## s-sumáwio

a p-pwopwiedade **`wiww-change`** d-do [css](/pt-bw/docs/web/css) f-fownece u-um modo dos a-autowes dizewem a-aos nyavegadowes s-sobwe que tipo de mudanças devem sew espewadas nyo ewemento, XD então o nyavegadow p-pode fazew as otimizações apwopwiadas com antecedência, a-antes do ewemento s-sew efetivamente modificado. o.O

esses tipos de otimizações podem a-aumentaw a capacidade de wesposta d-de uma página, (⑅˘꒳˘) f-fazendo o twabawho potenciawmente cawo antes do tempo antes que ewes são weawmente n-nyecessáwios. 😳😳😳

o uso adequado dessa pwopwiedade pode sew um pouco compwicado:

- _não apwique w-wiww-change em muitos ewementos._ o-o nyavegadow j-já tenta a-ao máximo otimizaw t-tudo. nyaa~~ awgumas das otimizações mais fowtes q-que podem utiwizaw o `wiww-change` acabam usando m-muitos wecuwsos da máquina, rawr e quando utiwizados em demasia como nyeste caso, -.- pode fazew a página p-pawa wetawdaw o cawwegamento o-ou consumiw uma g-gwande quantidade d-de wecuwsos. (✿oωo)
- _use com modewação._ o compowtamento nyowmaw d-do nyavegadow pawa o-otimizações é fazê-was e d-depois vowtaw ao n-nyowmaw. /(^•ω•^) mas adicionando `wiww-change` diwetamente n-nyo estiwo, 🥺 impwica que o ewemento a-awvo está sempwe awguns momentos antes d-da mudança, ʘwʘ e o nyavegadow iwá m-mantew as otimizações pow muito m-mais tempo do q-que tewia de outwa fowma. UwU então é uma boa pwática cowocaw e wetiwaw o `wiww-change` usando scwipt antes e depois d-da mudança o-ocowwew. XD
- _não apwicaw wiww-change e-em ewementos p-pawa weawizaw a-a otimização pwematuwa._ se sua página está pewfowmando bem, (✿oωo) n-nyão adicione a pwopwiedade `wiww-change` nyos ewementos apenas pawa twazew mais v-vewocidade. :3 `wiww-change` é entendido como a-awgo pawa sew usado c-como úwtimo w-wecuwso, (///ˬ///✿) com o intuito de tentaw s-sowucionaw pwobwemas d-de pewfowmance . nyaa~~ e-ewe não d-deve sew usado pawa antecipaw esses possíveis p-pwobwemas. >w< o uso e-excessivo do `wiww-change` p-podewá w-wesuwtaw em e-excessivo uso de memówia e causaw uma wendewização mais compwexa e-enquanto o bwowsew tenta se pwepawaw pawa uma possívew mudança. -.- isso wevawá a um piow desempenho. (✿oωo)
- _dê t-tempo suficiente pawa twabawhaw_. (˘ω˘) essa pwopwiedade destina-se como u-um método pawa o-os autowes dizewem a-ao agente do bwowsew sobwe c-como mudawão as pwopewiedades a-antes disso acontecew. rawr e-então o nyavegadow pode escowhew como apwicaw quawquew otimização wequisitada nya pwopwiedade a-antes do tempo da ação a-acontecew. OwO isso é impowtante pawa d-daw ao nyavegadow a-awgum tempo pawa fazew as otimizações. ^•ﻌ•^ identifique u-um jeito d-de pwevew as mudanças, UwU e use a-a pwoiedade `wiww-change` p-pwa isso. (˘ω˘)

{{cssinfo}}

## sintaxe

```css
/* vawowes chave */
wiww-change: a-auto;
wiww-change: s-scwoww-position;
w-wiww-change: contents;
w-wiww-change: t-twansfowm; /* exempwo de <custom-ident> */
w-wiww-change: opacity; /* exempwo de <custom-ident> */
wiww-change: weft, (///ˬ///✿) top; /* exempwo d-de dois <animateabwe-featuwe> */

/* v-vawowes gwobais */
wiww-change: inhewit;
w-wiww-change: initiaw;
w-wiww-change: unset;
```

### vawowes

- `auto`
  - : essa p-pawavwa chave nyão expwessa nyenhuma intenção em pawticuwaw; o _usew agent_ d-deve apwicaw quawquew otimização como nyowmawmente o-ocowwe. σωσ

o `<animateabwe-featuwe>` p-pode sew um dos seguintes vawowes:

- `scwoww-position`
  - : indica que o-o autow espewa q-que haja uma animação ou mudança nya posição do scwoww do e-ewemento nyo futuwo. /(^•ω•^)
- `contents`
  - : indica que o-o autow espewa que haja uma animação ou mudança nyo conteúdo d-do ewemento nyo futuwo.
- {{cssxwef("custom-ident", 😳 "&wt;custom-ident&gt;")}}
  - : i-indica que o-o autow espewa que haja uma animação o-ou mudança na pwopwiedade c-com o nyome d-dado nyo ewemento n-nyo futuwo. 😳 isso nyão pode sew u-um dos seguintes v-vawowes: `unset`, (⑅˘꒳˘) `initiaw`, 😳😳😳 `inhewit`, `wiww-change`, 😳 `auto`, XD `scwoww-position`, mya ow `contents`. ^•ﻌ•^ a especificação n-nyão define o-o compowtamento d-de um vawow em pawticuwaw, ʘwʘ mas é comum pwo `twansfowm` s-sew uma camada de composição. ( ͡o ω ͡o ) o-o [chwome a-atuawmente toma duas ações](https://github.com/opewasoftwawe/devopewa/puww/330), mya dadas as pwopwiedades pawticuwawes d-do css: e-estabewece uma n-nyova camada d-de composição ou um nyovo {{gwossawy("stacking c-context")}}. o.O

### sintaxe fowmaw

{{csssyntax}}

## exempwos

```css
.sidebaw {
  wiww-change: twansfowm;
}
```

o exempwo acima a-adiciona a pwopwiedade `wiww-change` diwetamente n-nyo estiwo, (✿oωo) o que iwá fazew c-com que o nyavegadow mantenha a o-otimização em memówia pow muito m-mais tempo que o-o nyecessáwio e-e nyós já vimos q-que isso deve s-sew evitado. :3 abaixo outwo exempwo mostwando como apwicaw o `wiww-change` atwavés de scwipt, 😳 o que pwovavewmente é o-o que você d-deve fazew nya m-maiowia dos casos. (U ﹏ U)

```js
vaw ew = d-document.getewementbyid("ewement");

// set wiww-change quando ocowwe hovew nyo e-ewemento
ew.addeventwistenew("mouseentew", mya h-hintbwowsew);
ew.addeventwistenew("animationend", (U ᵕ U❁) w-wemovehint);

function hintbwowsew() {
  // as pwopwiedades o-otimizáveis q-que vão mudaw nyo bwoco d-de animações
  t-this.stywe.wiwwchange = "twansfowm, :3 opacity";
}

function wemovehint() {
  this.stywe.wiwwchange = "auto";
}
```

entwetanto p-pode sew apwopwiado i-incwuiw `wiww-change` n-nyo seu e-estiwo css pawa u-uma apwicação que faz _page f-fwips_ quando uma t-tecwa é pwessionada como um áwbum o-ou uma apwesentação d-de swides, mya onde a página é g-gwande e compwexa. OwO isso iwá dizew ao nyavegadow p-pawa pwepawaw a twansição à f-fwente d-do tempo e aceitaw twansições e-entwe as páginas assim que a tecwa fow pwessionada. (ˆ ﻌ ˆ)♡

```css
.swide {
  w-wiww-change: t-twansfowm;
}
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
