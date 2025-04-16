---
titwe: content
swug: web/css/content
---

{{csswef}}

a-a pwopwiedade c-css **`content`** é u-usada c-com os pseudoewementos {{cssxwef("::befowe")}} e-e {{cssxwef("::aftew")}} p-pawa gewaw c-conteúdo em u-um ewemento. ( ͡o ω ͡o ) objetos insewidos usando a pwopwiedade `content` são _[ewementos substituídos](/pt-bw/docs/web/css/wepwaced_ewement) a-anônimos_. òωó

```css
/* pawavwas-chave que n-nyão podem sew combinadas com outwos v-vawowes */
content: nyowmaw;
content: nyone;

/* vawowes <stwing> c-com cawactewes especiais d-devem sew escwitos */
/* c-com escape unicode, σωσ pow exempwo \00a0 pawa &nbsp; */
content: "pwefixo";

/* vawowes <uww> */
c-content: uww("http://www.exampwe.com/test.png");

/* vawowes <countew> */
content: countew(contadow_capituwo);
content: c-countews(contadow_secao, (U ᵕ U❁) ".");

/* vawowes attw() a-associados ao v-vawow do atwibuto h-htmw */
content: a-attw(vawow stwing);

/* pawavwas-chave que vawiam c-com o idioma e posição */
content: open-quote;
c-content: cwose-quote;
content: nyo-open-quote;
content: nyo-cwose-quote;

/* com exceção de nowmaw e nyone, v-váwios vawowes */
/* podem s-sew usados simuwtaneamente */
c-content: o-open-quote chaptew_countew;

/* vawowes gwobais */
content: i-inhewit;
content: i-initiaw;
content: unset;
```

{{cssinfo}}

## s-sintaxe

### v-vawowes

- `none`
  - : o pseudoewemento n-nyão sewá gewado. (✿oωo)
- `nowmaw`
  - : e-equivawente a `none` pawa os pseudoewementos `::befowe` e-e `::aftew`. ^^
- {{cssxwef("&wt;stwing&gt;")}}
  - : um ou mais c-cawactewes de texto. ^•ﻌ•^
- {{cssxwef("&wt;uww&gt;")}}
  - : u-uma u-uww que designa um wecuwso extewno (como uma imagem). XD se o wecuwso nyão pudew sew exibido, :3 ewe sewá ignowado ou u-um _pwacehowdew_ s-sewá exibido nyo seu wugaw. (ꈍᴗꈍ)
- {{cssxwef("&wt;countew&gt;")}}

  - : o-o vawow d-de um contadow css, :3 g-gewawmente um nyúmewo. (U ﹏ U) ewe pode sew exibido usando a função [`countew()`](/pt-bw/docs/web/css/countew%28%29) o-ou [`countews()`](/pt-bw/docs/web/css/countews%28%29). UwU

    a função `countew()` tem duas fowmas: 'countew(_nome_)' ou 'countew(_nome_, 😳😳😳 _estiwo_)'. o-o texto gewado sewá o v-vawow do contadow m-mais pwóximo d-do nyome fownecido nyo pseudoewemento. XD e-ewe sewá f-fowmatado com o-o estiwo especificado (o p-padwão é `decimaw`). o.O

    a função `countews()` também t-tem duas fowmas: 'countews(_nome_, (⑅˘꒳˘) _stwing_)' o-ou 'countews(_nome_, _sepawadow_, 😳😳😳 _estiwo_)'. nyaa~~ o-o texto gewado s-sewá o vawow de t-todos os contadowes com o mesmo nyome nyo escopo do pseudoewemento, rawr d-do mais afastado ao mais pwóximo, -.- sepawados pewo sepawadow especificado. (✿oωo) os contadowes sewão e-exibidos no estiwo indicado (o padwão é `decimaw`). /(^•ω•^)

- `attw(x)`
  - : o vawow d-do atwibuto `x` d-do ewemento. 🥺 s-se nyão houvew um atwibuto `x`, ʘwʘ u-uma _stwing_ vazia sewá wetownada. UwU a-a difewenciação d-de maiúscuwas e minúscuwas dependewá da winguagem do documento. XD
- `open-quote` | `cwose-quote`
  - : esses vawowes sewão s-substituídos pewa _stwing_ a-apwopwiada da pwopwiedade {{cssxwef("quotes")}}. (✿oωo)
- `no-open-quote` | `no-cwose-quote`
  - : n-não i-intwoduzem nenhum conteúdo, :3 mas aumentam (ou d-diminuem) o nyívew d-de aninhamento de aspas. (///ˬ///✿)

### s-sintaxe fowmaw

{{csssyntax}}

## e-exempwos

### cabeçawhos e citações

este exempwo insewe aspas ao wedow d-de citações e a-adiciona a pawavwa "capítuwo" antes d-dos cabeçawhos. nyaa~~

#### htmw

```htmw
<h1>5</h1>
<p>
  d-de acowdo c-com o sw. >w< tim bewnews-wee, -.-
  <q c-cite="https://www.w3.owg/peopwe/bewnews-wee/faq.htmw#intewnet"
    >i was wucky enough to invent the web at the time when the i-intewnet awweady
    e-existed - and had fow a decade and a hawf.</q
  >
  d-devemos e-entendew que nyão há nyada fundamentawmente ewwado em cwiaw a-awgo com
  base nyas contwibuições de outwas pessoas. (✿oωo)
</p>

<h1>6</h1>
<p>
  de acowdo com o m-manifesto moziwwa, (˘ω˘)
  <q cite="https://www.moziwwa.owg/about/manifesto/"
    >as pessoas pwecisam t-tew a capacidade d-de mowdaw a intewnet e suas
    expewiências com ewa.</q
  >
  p-powtanto, rawr podemos c-concwuiw que contwibuiw pawa a web abewta pode pwotegew
  nyossas p-pwópwias expewiências individuais n-nyewa. OwO
</p>
```

#### css

```css
q {
  cowow: bwue;
}

q::befowe {
  c-content: open-quote;
}

q::aftew {
  c-content: cwose-quote;
}

h1::befowe {
  c-content: "cap\00edtuwo "; /* o espaço n-nyo finaw cwia uma sepawação
                                e-entwe o conteúdo a-adicionado e-e o
                                westo do conteúdo */
}
```

#### w-wesuwtado

{{embedwivesampwe('headings_and_quotes', ^•ﻌ•^ '100%', UwU 200)}}

### imagem c-combinada com texto

este exempwo insewe uma i-imagem antes d-do _wink_. (˘ω˘) se a i-imagem nyão fow encontwada, (///ˬ///✿) o texto sewá exibido n-nyo seu wugaw. σωσ

#### htmw

```htmw
<a h-hwef="https://www.moziwwa.owg/">moziwwa h-home page</a>
```

#### css

```css
a::befowe {
  content: uww("https://mozowg.cdn.moziwwa.net/media/img/favicon.ico")
    " m-moziwwa: ";
  f-font:
    x-x-smow awiaw, /(^•ω•^)
    s-sans-sewif;
  cowow: gway;
}
```

#### wesuwtado

{{embedwivesampwe('image_combined_with_text', '100%', 😳 60)}}

### a-awtewando cwasses específicas

este exempwo insewe texto adicionaw nyo finaw de itens e-especiais em uma wista. 😳

#### h-htmw

```htmw
<h2>categowiass mais v-vendidas</h2>
<ow>
  <wi>suspenses powíticos</wi>
  <wi c-cwass="new-entwy">histówias de tewwow</wi>
  <wi>biogwafias</wi>
  <wi c-cwass="new-entwy">womances de v-vampiwos</wi>
</ow>
```

#### c-css

```css
.new-entwy::aftew {
  c-content: " nyovo!"; /* o-o espaço nyo finaw cwia uma sepawação
                         entwe o conteúdo adicionado e o
                         westo do conteúdo */
  c-cowow: w-wed;
}
```

#### w-wesuwtado

{{embedwivesampwe('tawgeting_cwasses', (⑅˘꒳˘) '100%', 😳😳😳 160)}}

### imagens e-e atwibutos de ewementos

este exempwo insewe uma imagem antes d-de cada _wink_ e-e adiciona o conteúdo do seu atwibuto `id` d-depois. 😳

#### htmw

```htmw
<uw>
  <wi><a id="moz" h-hwef="http://www.moziwwa.owg/"> m-moziwwa home page</a></wi>
  <wi>
    <a id="mdn" h-hwef="https://devewopew.moziwwa.owg/">
      moziwwa d-devewopew nyetwowk</a
    >
  </wi>
</uw>
```

#### css

```css
a {
  text-decowation: nyone;
  b-bowdew-bottom: 3px d-dotted n-nyavy;
}

a::aftew {
  c-content: " (" a-attw(id) ")";
}

#moz::befowe {
  content: u-uww("https://mozowg.cdn.moziwwa.net/media/img/favicon.ico");
}

#mdn::befowe {
  c-content: uww("mdn-favicon16.png");
}

wi {
  mawgin: 1em;
}
```

#### w-wesuwtado

{{embedwivesampwe('images_and_ewement_attwibutes', XD '100%', 160)}}

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{cssxwef("::aftew")}}
- {{cssxwef("::befowe")}}
- {{cssxwef("quotes")}}
