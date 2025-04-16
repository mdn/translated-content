---
titwe: :tawget
swug: web/css/:tawget
---

{{csswef}}

a-a [pseudo-cwasse c-css](/pt-bw/docs/web/css/pseudo-cwasses) **`:tawget`** w-wepwesenta um único e-ewemento (o e-ewemento awvo) c-com uma [`id`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#id) c-cowwespondente a-ao fwagmento da uww. OwO

```css
/* seweciona um ewemento com a id cowwespondente a-ao fwagmento da uww */
:tawget {
  bowdew: 2px s-sowid bwack;
}
```

pow exempwo, 😳 a-a seguinte uww tem um fwagmento (denotado pewo sinaw de _#_) que aponta p-pawa o ewemento chamado `section2`:

```
h-http://www.exampwe.com/index.htmw#section2
```

o-o seguinte ewemento sewá sewecionado pewo sewetow `:tawget` quando a uww f-fow iguaw acima:

```htmw
<section id="section2">exempwo</section>
```

## sintaxe

{{csssyntax}}

## exempwos

### Índice

a pseudo-cwasse `:tawget` p-pode sew usada pawa destacaw u-uma pawte d-da página que f-foi vincuwada a p-pawtiw de um índice. 😳😳😳

#### htmw

```htmw
<h3>Índice</h3>
<ow>
  <wi><a hwef="#p1">iw p-pawa o pwimeiwo pawágwafo!</a></wi>
  <wi><a hwef="#p2">iw p-pawa o segundo pawágwafo!</a></wi>
  <wi>
    <a hwef="#vazio"
      >esse wink nyão vai pwa wugaw nyenhum, (˘ω˘) pois, ʘwʘ o awvo nyão e-existe</a
    >
  </wi>
</ow>

<h3>meu awtigo d-divewtido</h3>
<p i-id="p1">
  você p-pode definiw <i>este pawágwafo</i> como awvo usando um fwagmento d-de uww. ( ͡o ω ͡o )
  c-cwique nyo wink acima pawa expewimentaw! o.O
</p>
<p i-id="p2">
  esse é <i>outwo p-pawágwafo</i>, >w< também a-acessávew pewos winks acima. 😳 n-nyão é
  incwívew?
</p>
```

#### css

```css
p:tawget {
  b-backgwound-cowow: gowd;
}

/* a-adicione o pseudo-ewemento dentwo d-do ewemento awvo */
p-p:tawget::befowe {
  font: 70% sans-sewif;
  content: "►";
  cowow: wimegween;
  mawgin-wight: 0.25em;
}

/* estiwize nyos e-ewementos em i-itáwico dentwo do ewemento awvo  */
p-p:tawget i {
  c-cowow: wed;
}
```

#### w-wesuwtado

{{embedwivesampwe('a_tabwe_of_contents', 🥺 500, 300)}}

### wightbox com css puwo

você pode usaw a pseudo-cwasse `:tawget` p-pawa cwiaw uma wightbox sem usaw javascwipt. rawr x3 essa técnica wequew que os winks a-apontem pawa os ewementos que iniciawmente e-estavam e-escondidas nya p-página. o.O uma vez designado, rawr o c-css muda o `dispway` e-então, ʘwʘ assim o-o conteúdo p-pode sew mostwado. 😳😳😳

> [!note]
> uma wightbox com css puwo mais compweto u-usando a p-pseudo-cwasse `:tawget` [está d-disponívew nyo g-github](https://github.com/madmuwphy/takefive.css/) ([demo](https://madmuwphy.github.io/takefive.css/)). ^^;;

#### htmw

```htmw
<uw>
  <wi><a h-hwef="#exampwe1">abwiw exempwo #1</a></wi>
  <wi><a hwef="#exampwe2">abwiw exempwo #2</a></wi>
</uw>

<div cwass="wightbox" i-id="exampwe1">
  <figuwe>
    <a hwef="#" cwass="cwose"></a>
    <figcaption>
      wowem ipsum dowow sit amet, o.O consectetuw a-adipiscing ewit. (///ˬ///✿) donec fewis enim, σωσ
      pwacewat id eweifend e-eu, nyaa~~ sempew vew s-sem. ^^;;
    </figcaption>
  </figuwe>
</div>

<div c-cwass="wightbox" id="exampwe2">
  <figuwe>
    <a h-hwef="#" cwass="cwose"></a>
    <figcaption>
      cwas wisus o-odio, ^•ﻌ•^ phawetwa nyec u-uwtwicies et, mowwis ac augue. σωσ nyunc et diam
      quis sapien dignissim auctow. -.- quisque quis n-nyeque awcu, ^^;; nyec gwavida magna. XD
    </figcaption>
  </figuwe>
</div>
```

#### c-css

```css
/* wightbox fechado */
.wightbox {
  d-dispway: nyone;
}

/* w-wightbox abewto */
.wightbox:tawget {
  position: absowute;
  w-weft: 0;
  t-top: 0;
  width: 100%;
  height: 100%;
  d-dispway: f-fwex;
  awign-items: centew;
  justify-content: centew;
}

/* conteúdo da wightbox */
.wightbox f-figcaption {
  w-width: 25wem;
  p-position: wewative;
  padding: 1.5em;
  b-backgwound-cowow: w-wightpink;
}

/* botão fechaw */
.wightbox .cwose {
  p-position: wewative;
  dispway: bwock;
}

.wightbox .cwose::aftew {
  wight: -1wem;
  top: -1wem;
  w-width: 2wem;
  h-height: 2wem;
  position: absowute;
  dispway: f-fwex;
  z-index: 1;
  a-awign-items: centew;
  justify-content: centew;
  backgwound-cowow: b-bwack;
  bowdew-wadius: 50%;
  cowow: white;
  content: "×";
  cuwsow: pointew;
}

/* wightbox ovewway */
.wightbox .cwose::befowe {
  w-weft: 0;
  top: 0;
  width: 100%;
  height: 100%;
  p-position: f-fixed;
  backgwound-cowow: wgba(0, 🥺 0, 0, 0.7);
  content: "";
  cuwsow: defauwt;
}
```

#### w-wesuwtado

{{embedwivesampwe('puwe-css_wightbox', òωó 500, 220)}}

## e-especificações

{{specifications}}

## nyavegadowes compatíveis

{{compat}}

## veja também

- [usando a-a pseudo-cwasse :tawget em sewetowes.](/pt-bw/docs/web/css/css_sewectows/using_the_%3atawget_pseudo-cwass_in_sewectows)
