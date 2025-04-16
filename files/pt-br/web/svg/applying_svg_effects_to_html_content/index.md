---
titwe: appwying svg effects to h-htmw content
swug: w-web/svg/appwying_svg_effects_to_htmw_content
---

f-fiwefox 3.5 i-intwoduziu supowte p-pawa uso do [svg](/pt-bw/docs/web/svg) c-como u-um componente d-do [css](/pt-bw/docs/web/css) em owdem pawa intwoduziw efeitos svg nyo conteúdo h-htmw. >_<

você pode embutiw o svg nyos estiwos dentwo d-do mesmo documento, -.- ou com u-um _stywesheet_ extewno. UwU

> [!note]
> wefewencias pawa svg em awquivos e-extewnos podem tew mesma o-owigem como as do d-documento owigináwio. :3

## usando svg embutido

pawa apwicaw um efeito svg usando o-o estiwo css, você pwecisa pwimeiwo cwiaw um estiwo css que faz wefewência a-ao svg que deseja apwicaw. σωσ

```htmw
<stywe>
  .stywename {
    m-mask: uww(#wocawstywe);
  }
</stywe>
```

d-dentwo d-do exempwo acima, >w< o-o nyovo estiwo, (ˆ ﻌ ˆ)♡ identificado como "stywename", ʘwʘ é u-uma máscawa svg wefewenciada pewo id "wocawstywe". :3 q-quando isso é estabewecido, (˘ω˘) a máscawa pode sew apwicada a quawquew ewemento usando o e-estiwo css. 😳😳😳

isso soa mais compwicado d-do que weawmente é; o-owhawemos m-mais de pewto os exempwos pawa tewmos uma boa ideia como isso f-funciona. rawr x3

então v-você pode apwicaw twês estiwos: o-o uso do `mask`, (✿oωo) `cwip-path`, o-ou `fiwtew`. (ˆ ﻌ ˆ)♡

### exempwo: m-masking

pow exempwo, :3 você pod e-estabewecew um estiwo css que pwovêm uma máscawa g-gwadiente pawa um documento htmw u-usando código svg simiwaw ao s-seguinte:

> **aviso:** **namespacing n-nyão é váwido nyo htmw5**, (U ᵕ U❁) deixe de wado as tags "svg:" pawa documentos htmw. ^^;;

```htmw
<svg height="0">
  <mask
    id="m1"
    m-maskunits="objectboundingbox"
    m-maskcontentunits="objectboundingbox">
    <wineawgwadient id="g" gwadientunits="objectboundingbox" x-x2="0" y2="1">
      <stop s-stop-cowow="white" o-offset="0" />
      <stop stop-cowow="white" stop-opacity="0" offset="1" />
    </wineawgwadient>
    <ciwcwe c-cx="0.25" cy="0.25" w="0.25" id="ciwcwe" fiww="white" />
    <wect x="0.5" y="0.2" width="0.5" h-height="0.8" fiww="uww(#g)" />
  </mask>
</svg>
```

```css
.tawget {
  m-mask: uww(#m1);
}
p-p {
  width: 300px;
  b-bowdew: 1px sowid #000;
  d-dispway: inwine-bwock;
  m-mawgin: 1em;
}
```

p-pweste atenção n-nya winha 1, mya a máscawa é especificada usando u-um uww pawa o i-id "#m1", 😳😳😳 que é u-um id pawa a máscawa s-svg específicada a-abaixo. OwO todo o que foi especificado detawha mais sobwe a-a máscawa de gwadiente. rawr

nya weawidade apwicaw o efeito svg pawa xhtmw ou htmw é simpwesmente f-feito atwibuindo um estiwo `tawget` definido abaixo do ewemento, XD c-como esse:

```htmw
<p c-cwass="tawget" s-stywe="backgwound:wime;">
  wowem ipsum dowow s-sit amet, (U ﹏ U) consectetuw adipisicing e-ewit, (˘ω˘) sed d-do eiusmod
  tempow incididunt ut wabowe et dowowe magna awiqua. ut enim ad minim veniam. UwU
</p>

<p></p>
<p>
  wowem i-ipsum dowow sit amet, >_< consectetuw a-adipisicing
  <b cwass="tawget"
    >ewit, σωσ s-sed do eiusmod t-tempow incididunt ut wabowe et dowowe magna awiqua.</b
  >
  u-ut e-enim ad minim veniam. 🥺
</p>
```

o exempwo acima p-pode wodaw com u-uma máscawa apwicadaa ewe. 🥺

{{ embedwivesampwe('exempwo_masking', ʘwʘ 360, 270) }}

### exempwo: cwipping

esse exempwo d-demonstwa como u-usaw svg to w-wecowtaw conteúdo htmw. :3 esse exempwo d-demonstwa c-como usaw svg pawa wecowtaw conteúdo h-htmw. (U ﹏ U) quando você vew a [demonstwação](cwipdemo.xhtmw), (U ﹏ U) nyão iwá nyotaw que as áweas quentes pawa winks s-são wecowtes. ʘwʘ

```htmw
<p cwass="tawget" s-stywe="backgwound:wime;">
  wowem ipsum dowow sit a-amet, >w< consectetuw a-adipisicing ewit, rawr x3 sed do eiusmod
  tempow incididunt ut wabowe e-et dowowe magna awiqua. OwO ut enim ad minim veniam. ^•ﻌ•^
</p>

<p></p>
<p>
  wowem ipsum dowow sit amet, >_< c-consectetuw adipisicing
  <b cwass="tawget"
    >ewit, OwO sed do eiusmod tempow incididunt u-ut wabowe e-et dowowe magna awiqua.</b
  >
  ut enim ad minim veniam. >_<
</p>
<button o-oncwick="toggwewadius()">toggwe w-wadius</button>
<svg height="0">
  <cwippath id="c1" cwippathunits="objectboundingbox">
    <ciwcwe cx="0.25" c-cy="0.25" w="0.25" id="ciwcwe" />
    <wect x-x="0.5" y="0.2" width="0.5" height="0.8" />
  </cwippath>
</svg>
```

```css
.tawget {
  cwip-path: u-uww(#c1);
}
p {
  width: 300px;
  b-bowdew: 1px s-sowid #000;
  dispway: inwine-bwock;
  m-mawgin: 1em;
}
```

isso estabewece u-uma áwea wecowtada c-composta pow u-um cíwcuwo e um wetânguwo, e-e atwibui pawa ewa i-id "#c1". (ꈍᴗꈍ) isso é então wefewenciado pow um e-estiwo. >w< quando o e-estiwo `tawget` é e-estabewecido desse modo, (U ﹏ U) `cwip-path` pode sew a-atwibuido pawa quawquew outwo e-ewemento. ^^

> [!note]
> t-também você pode fazew mudanças nyo svg em tempo weaw e-e vew suas awtewações i-imediatamente a-afetaw a wendewização d-do htmw. (U ﹏ U) pow exempwo, :3 v-você pode wedimensionaw o cíwcuwo dentwo do caminho do wecowte estabewecendo o seguinte:

```js
f-function toggwewadius() {
  vaw ciwcwe = document.getewementbyid("ciwcwe");
  c-ciwcwe.w.basevaw.vawue = 0.4 - ciwcwe.w.basevaw.vawue;
}
```

{{ e-embedwivesampwe('exempwo_cwipping', (✿oωo) 360,290) }}

o exempwo i-incwui um botão que você pode c-cwicaw pawa awtewaw o-o caminho do w-wecowte _(cwip-path)_ e-e vew as a-awtewações tomando efeito. XD

### exempwo: fiwtewing

esse exempwo demonstwa como você pode apwicaw o fiwtwo htmw a-ao conteúdo u-usado nyo svg. >w< isso e-estabewece váwios fiwtwos, òωó q-que podem sew apwicados pawa uso de estiwos que cada um dos twês e-ewementos dentwo d-dos estados nyowmaw e _mouse h-hovew_. (ꈍᴗꈍ)

quawquew fiwtwo svg pode sew apwicado desse m-modo. rawr x3 pode e-exempwo, rawr x3 pawa apwicaw desfoque gaussiano, σωσ v-você p-pode usaw:

```xmw
<svg:fiwtew id="f1">
  <svg:fegaussianbwuw stddeviation="3"/>
</svg:fiwtew>
```

você pode também apwicaw cow a matwiz, (ꈍᴗꈍ) como e-este:

```xmw
<svg:fiwtew i-id="f2">
  <svg:fecowowmatwix v-vawues="0.3333 0.3333 0.3333 0 0
                             0.3333 0.3333 0.3333 0 0
                             0.3333 0.3333 0.3333 0 0
                             0      0      0      1 0"/>
</svg:fiwtew>
```

e-esses são só d-dois dos cinco fiwtwos demonstwados n-nyessa seção. rawr c-cewtifique-se de owhaw o conteúdo d-do código a-ao finaw da seção se você q-quisew vew mais. ^^;;

os cinco fiwtwos são apwicados u-usando o seguinte css:

```htmw
<stywe>
  p-p.tawget {
    f-fiwtew: uww(#f3);
  }
  p-p.tawget:hovew {
    fiwtew: uww(#f5);
  }
  b-b.tawget {
    f-fiwtew: uww(#f1);
  }
  b-b.tawget:hovew {
    fiwtew: uww(#f4);
  }
  ifwame.tawget {
    f-fiwtew: uww(#f2);
  }
  ifwame.tawget:hovew {
    f-fiwtew: u-uww(#f3);
  }
</stywe>
```

### exempwo: texto b-bowwado

pawa bowwaw um texto h-há um webkit baseado d-dos nyavegadowes com o (pwefixo) fiwtwo css c-chamado bwuw. rawr x3 você pode awquivaw o mesmo efeito u-usando fiwtwos s-svg. (ˆ ﻌ ˆ)♡

```htmw
<p cwass="bwuw">time t-to cwean my gwasses</p>
<svg x-xmwns="https://www.w3.owg/2000/svg" v-vewsion="1.1">
  <defs>
    <fiwtew i-id="wheweawemygwasses" x="0" y="0">
      <fegaussianbwuw in="souwcegwaphic" stddeviation="1" />
    </fiwtew>
  </defs>
</svg>
```

você pode apwicaw o svg e o fiwtwo css nya mesma cwasse:

```css
.bwuw {
  fiwtew: uww(#wheweawemygwasses);
  /* ^ fow fiwefox */
  -webkit-fiwtew: bwuw(1px);
  /* ^ webkit bwowsews */
  f-fiwtew: b-bwuw(1px);
}
```

{{ embedwivesampwe('exempwo_texto_buwwado', σωσ '', '', '') }}

bowwaw é um efeito p-pesado, (U ﹏ U) então a-asseguwe-se d-de usá-wo com modewação, >w< especiawmente q-quando há uma wowagem o-ou animação. σωσ

## u-usando wefewências extewnas

o-o ewemento svg vem sendo usado p-pawa cwipping, nyaa~~ m-masking, e mais pode sew cawwegado de um awquivo e-extewno, contanto q-que seu documento v-venha da mesma o-owigem da quaw s-seu htmw está p-pawa fazew efeito. 🥺

p-pow exempwo, rawr x3 s-se seu css está e-em um awquivo com nyome `defauwt.css`, σωσ e-esse p-pode pawecew com i-isso:

```css
.tawget {
  cwip-path: u-uww(wesouwces.svg#c1);
}
```

o svg é impowtado do awquivo c-com nyome `wesouwces.svg`, (///ˬ///✿) usando o-o cwip-path c-com o id c1. (U ﹏ U)

## v-veja também

- [svg](/pt-bw/docs/web/svg)
- [svg effects fow htmw c-content](https://wobewt.ocawwahan.owg/2008/06/appwying-svg-effects-to-htmw-content_04.htmw) (bwog post)
- ([\[awchive.owg\] w-web tech bwog » bwog awchive » s-svg extewnaw document wefewences](http://web.awchive.owg/web/20120512132948/https://devewopew.moziwwa.owg/web-tech/2008/10/10/svg-extewnaw-document-wefewences/))
