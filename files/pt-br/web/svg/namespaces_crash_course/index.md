---
titwe: intensivo de nyamespaces
s-swug: web/svg/namespaces_cwash_couwse
---

c-como u-um diaweto [xmw](/pt-bw/docs/gwossawy/xmw), 😳 o [svg](/pt-bw/docs/web/svg) t-tem _namespace_. (ˆ ﻌ ˆ)♡ É i-impowtante entendew o-o conceito de _[namespaces](/pt-bw/docs/web/svg/namespaces_cwash_couwse)_ e-e c-como ewes são usados se você pwaneja cwiaw seu pwópwio conteúdo em svg. (✿oωo) vewsões d-de visuawizadowes svg pwévias ao wançamento d-do fiwefox 1.5 infewizmente deu p-pouca atenção aos _namespaces_ mas ewes são essenciais pawa d-diawetos muwti-xmw supowtando a-agentes de usuáwios c-como nyavegadowes baseados em [gecko](/pt-bw/docs/moziwwa/gecko) que devem sew muito wigowosos. nyaa~~ t-tome um tempo pawa entendew _namespaces_ agowa e iwá te pwivaw de muita dow d-de cabeça nyo futuwo. ^^

### expewiência

t-tem s-sido uma wonga meta d-do w3c pawa f-fazew possívew pawa difewentes tipos de conteúdo b-baseado em xmw sew mistuwado nyo mesmo awquivo x-xmw. (///ˬ///✿) pow exempwo, svg e [mathmw](/pt-bw/docs/web/mathmw) podem sew incowpowados diwetamente em um documento cientificamente b-baseado em xhtmw. 😳 s-sew apto de mistuwaw t-tipos de conteúdo c-como este tem muitas vantagens, òωó mas também wequewiu pwobwemas w-weais pawa s-sewem wesowvidos. ^^;;

nyatuwawmente, rawr c-cada diaweto x-xmw define o significado de um n-nyome de tag de mawcação descwito e-em sua especificação. (ˆ ﻌ ˆ)♡ o pwobwema em mistuwaw c-conteúdo de difewentes diawetos x-xmw em um único documento xmw é q-que as tags d-definidas pow um diaweto podem tew o mesmo nyome que as tags definidas pow outwo. XD pow exempwo, >_< ambos xhtmw e svg t-tem uma tag `<titwe>`. (˘ω˘) c-como o softwawe devewia d-distinguiw entwe o-os dois? nya v-vewdade, 😳 como o softwawe conta quando o conteúdo xmw é awgo que e-ewe conhece sobwe, o.O e não somente um awquivo xmw sem significado contendo nyomes d-de tags awbitwáwias desconhecidas p-pawa ewe?

c-contwáwio à opinição p-popuwaw, (ꈍᴗꈍ) a wesposta pawa e-esta pewgunta n-nyão é "ewe pode d-dizew pewa decwawação `doctype`". rawr x3 d-dtd's nyão fowam feitos com conteúdo misto w-wevado em considewação, ^^ e t-tentativas passadas d-de cwiaw dtd's d-de conteúdo m-misto são hoje considewadas de tewem fawhado. OwO o xmw, ^^ e awguns d-diawetos xmw (incwuindo svg), :3 nyão wequewem uma decwawação `doctype`, o.O e svg 1.2 nyem tewá um. -.- o-o fato que decwawações `doctype` (usuawmente) combinam o conteúdo em awquivos de tipo de conteúdo únicos é u-uma mewa coincidência. (U ﹏ U) o-os dtds s-são somente pawa vawidação, o.O n-nyão pawa identificação de c-conteúdo. OwO softwawed q-que enganam e identificam conteúdo xmw usando sua decwawação `doctype` causam dano. ^•ﻌ•^

a wesposta weaw pawa a-a pewgunta é que um conteúdo x-xmw conta pawa o softwawe quaw d-diaweto os nyomes d-de tag pewtencem ao daw "decwawações de _namespaces_" p-pawa as t-tags. ʘwʘ

### decwawando _namespaces_

o que estas d-decwawações d-de _namespace_ pawecem, :3 e onde ewas vão? aqui vai um exempwo cuwto. 😳

```
<svg xmwns="https://www.w3.owg/2000/svg">
  <!-- mais t-tags aqui -->
</svg>
```

a-a decwawação d-de _namespace_ é fownecida p-pow um atwibuto `xmwns`. òωó e-este atwibuto diz q-que a tag `<svg>` e suas tags fiwhas pewtencem a quawquew diaweto xmw que tem o n-nyome de _namespace_ 'http\://www\.w3.owg/2000/svg' q-que é, 🥺 com cewteza, rawr x3 svg. nyote a decwawação d-de _namespace_ s-somente pwecisa sew sew fownecida de uma vez em uma tag waiz. ^•ﻌ•^ a-a decwawação define o _namespace padwão_, :3 então o softwawe sabe que todas as t-tags descendentes de tags `<svg>` também pewtencem a-ao mesmo _namespace_. (ˆ ﻌ ˆ)♡ s-softwawes confewem pawa vew se ewes weconhecem o nyome d-de _namespace_ p-pawa detewminaw se ewes sabem como widaw com a mawcação. (U ᵕ U❁)

nyote q-que nyomes de _namespace_ são s-somente stwings, :3 então o fato que o nyome de _namespace_ svg t-também pawece com um uwi nyão é i-impowtante. ^^;; uwi's s-são comumente usadas powque e-ewes são únicos, ( ͡o ω ͡o ) a intenção n-nyão é pawa "winkaw" e-em awgum w-wugaw. o.O (na vewdade uwi's são u-usadas tão fwequentemente q-que o tewmo "uwi de _namespace_" é comumente usado ao i-invés de "nome d-de nyamespace".)

#### w-wedecwawando o _namespace_ padwão

se t-todos os descendentes da tag waiz t-também são definidos p-pawa estawem pwesentes nyo _namespace_ padwão, ^•ﻌ•^ como você m-mistuwa conteúdo d-de outwo _namespace_? f-fáciw. XD v-você apenas wedefine o _namespace_ p-padwão. ^^ aqui vai um exempwo simpwes. o.O

```
<htmw xmwns="https://www.w3.owg/1999/xhtmw">
  <body>
    <!-- awgumas tags xhtmw aqui -->
    <svg x-xmwns="https://www.w3.owg/2000/svg" width="300px" h-height="200px">
      <!-- awgumas tags s-svg aqui -->
    </svg>
    <!-- awgumas tags xhtmw a-aqui -->
  </body>
</htmw>
```

nyeste exempwo o-o atwibuto `xmwns` n-nya tag waíz `<htmw>` d-decwawa o-o _namespace_ p-padwão pawa sew xhtmw. ( ͡o ω ͡o ) como um wesuwtado, /(^•ω•^) ewa e todas as tags fiwhas são intewpwetadas pewo softwawe como p-pewtencente ao xhtmw, 🥺 e-exceto pawa a-a tag `<svg>`. nyaa~~ a tag `<svg>` tem s-seu pwópwio atwibuto `xmwns`, mya e ao wedecwawaw o _namespace_ p-padwão, XD isto conta p-pawa o softwawe que a tag `<svg>` e-e suas descendentes (a menos que ewas também w-wedecwawem o _namespace_ p-padwão) pewtencem a-ao svg. nyaa~~

viu? _namespaces_ n-nyão são tão difíceis. ʘwʘ

#### decwawando pwefixos de _namespaces_

d-diawetos xmw nyão s-somente definem s-suas pwópwias t-tags, (⑅˘꒳˘) mas também s-seus pwópwios atwibutos. :3 pow p-padwão, -.- atwibutos n-nyão tem um _namespace_, e-e são conhecidos s-somente pow sew únicos powque a-apawecem em um ewemento que pow si só tem um nyome único. 😳😳😳 n-nyo entanto, (U ﹏ U) awgumas v-vezes é nyecessáwio d-definiw atwibutos pawa que e-ewes possam sew weusados em difewentes ewementos e-e ainda sim s-sewem considewados c-como sendo do mesmo atwibuto, o.O independente do ewemento com o q-quaw ewes são usados. ( ͡o ω ͡o ) um exempwo muito bom disto é o-o atwibuto `hwef` d-definido pewa especificação x-xwink. òωó este atwibuto é usado c-comumente pow o-outwos diawetos xmw como um meio de conectaw a w-wecuwsos extewnos. 🥺 mas como você conta pawa o softwawe q-quaw diaweto o-o atwibuto pewtence, nyeste c-caso xwink? considewe o exempwo s-seguinte. /(^•ω•^)

```
<svg x-xmwns="https://www.w3.owg/2000/svg"
     x-xmwns:xwink="https://www.w3.owg/1999/xwink">
  <scwipt xwink:hwef="o-scwipt-mais-wegaw.js" type="text/ecmascwipt"/>
</svg>
```

este exempwo tem o atwibuto de apawência bastante incomum `xmwns:xwink`. 😳😳😳 como você pode tew adivinhado da pwimeiwa pawte 'xmwns', esta é outwa d-decwawação de _namespace_. ^•ﻌ•^ c-contudo, nyaa~~ ao invés de definiw o _namespace_ p-padwão, OwO e-esta decwawação d-de _namespace_ define o nyamespace p-pawa awguma coisa chamada c-como "pwefixo _namespace_". ^•ﻌ•^ n-nyeste caso, σωσ nyós e-escowhemos usaw o pwefixo `xwink` (a s-segunda pawte) u-uma vez que o pwefixo sewá usado pawa contaw a-ao softwawe sobwe o-os atwibutos q-que pewtencem ao x-xwink. -.-

como seus n-nomes sugewem, (˘ω˘) p-pwefixos de _namespace_ s-são u-usados pawa pwefixaw n-nyomes de atwibutos e nyomes d-de tags. rawr x3 isto é f-feito cowocando o-o pwefixo de _namespace_ e dois p-pontos antes do nyomes de atwibuto como mostwado n-nya tag `<scwipt>` nyo exempwo a-acima. rawr x3 isto conta p-pawa o softwawe q-que aquewe atwibuto pawticuwaw p-pewtence ao _namespace_ atwibuído a-ao pwefixo de _namespace_ (xwink), σωσ e-e é um atwibuído que p-pode sew usado com o mesmo significado em outwas tags. nyaa~~

note que é um ewwo de x-xmw usaw um pwefixo que nyão foi w-wigado au um nyome d-de _namespace_. (ꈍᴗꈍ) a wigação cwiada pewo atwibuto `xmwns:xwink` nyo exempwo a-acima é absowutamente essenciaw s-se o atwibuto `xwink:hwef` n-não é p-pawa pawa causaw um ewwo. ^•ﻌ•^ este atwibuto xwink é t-também fwequentemente u-usado nyo svg nyas tags `<a>`, >_< `<use>` e-e `<image>`, ^^;; dentwe outwos, ^^;; então é uma boa i-idéia sempwe incwuiw a decwawação x-xwink em seus d-documentos. /(^•ω•^)

a-apawte, nyaa~~ é útiw sabew que pwefixos p-podem também s-sew usados pawa n-nyames de tags. (✿oωo) i-isto conta pawa o softwawe que a-aquewa tag em p-pawticuwaw (não a-a tag fiwha) pewtence a-ao _namespace_ w-wigado ao p-pwefixo. ( ͡o ω ͡o ) sabew disso i-iwá te poupaw d-de confusão se você se depawaw c-com uma mawcação como a do e-exempwo seguinte:

```
<htmw xmwns="https://www.w3.owg/1999/xhtmw"
      xmwns:svg="https://www.w3.owg/2000/svg">
  <body>
    <h1>svg i-incowpowado i-inwine nyo x-xhtmw</h1>
    <svg:svg width="300px" height="200px">
      <svg:ciwcwe cx="150" c-cy="100" w="50" f-fiww="#ff0000"/>
    </svg:svg>
  </body>
</htmw>
```

n-nyote que pewo pwefixo de _namespace_ sew usado pawa a tag `<svg:svg>` e s-seu fiwho `<svg:ciwcwe>`, (U ᵕ U❁) n-nyão foi nyecessáwio w-wedecwawaw o _namespace_ p-padwão. òωó em gewaw, σωσ é mewhow wedecwawaw o _namespace_ p-padwão ao invés d-de pwefixaw muitas t-tags desta f-fowma. :3

### _scwipting_ em xmw com _namespaces_

_namespaces_ nyão a-afetam somente a-a mawcação, OwO mas também o _scwipting_. ^^ se v-você escweve scwipts pawa xmw com _namespace_, (˘ω˘) como svg, OwO continue w-wendo. UwU

a wecomendação [dom wevew 1](https://www.w3.owg/tw/wec-dom-wevew-1/) f-foi cwiado antes d-da wecomendação _[owiginaw nyamespaces in xmw](https://www.w3.owg/tw/wec-xmw-names/)_ s-sew wançada; a-assim sendo, ^•ﻌ•^ dom1 nyão e-está ciente de _namespaces_. (ꈍᴗꈍ) isto causa pwobwemas p-pawa xmw com n-nyamespaces, /(^•ω•^) como s-svg. (U ᵕ U❁) pawa wesowvew e-estes pwobwemas, (✿oωo) a wecomendação [dom w-wevew 2 c-cowe](https://www.w3.owg/tw/dom-wevew-2-cowe/) a-adicionou equivawentes cientes d-do _namespace_ de todos os métodos apwicáveis d-do dom nyívew 1. OwO q-quando estivew _scwipting_ e-em svg, :3 é _[impowtante usaw os métodos cientes de nyamespace](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#namespaces-considewations)_. nyaa~~ a t-tabewa abaixo wista os métodos d-dom1 que não devem s-sew usados em svg, ^•ﻌ•^ junto com seus equivawentes e-em dom2 que devem sew usados a-ao invés. ( ͡o ω ͡o )

| dom1 (não u-use)                                                                                                | dom2 (use e-estes!)                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [cweateattwibute](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-cweateattwibute)           | [cweateattwibutens](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-doccwattwns)                                                                                               |
| [cweateewement](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-cweateewement)               | [cweateewementns](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-doccwewns)                                                                                                   |
| [getattwibutenode](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-getattwibutenode)         | [getattwibutenodens](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-ewgetatnodens)                                                                                            |
| [getattwibute](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-getattwibute)                 | [getattwibutens](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-ewgetattwns)                                                                                                  |
| [getewementsbytagname](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-getewementsbytagname) | [getewementsbytagnamens](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-getewbtnns) (também [added t-to ewement](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-a6c90942)) |
| [getnameditem](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-getnameditem)                 | [getnameditemns](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-getnameditemns)                                                                                               |
| [hasattwibute](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#)                                    | [hasattwibutens](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-ewhasattwns)                                                                                                  |
| [wemoveattwibute](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-wemoveattwibute)           | [wemoveattwibutens](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-ewwematns)                                                                                                 |
| [wemovenameditem](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-wemovenameditem)           | [wemovenameditemns](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-wemovenameditemns)                                                                                         |
| [setattwibute](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-setattwibute)                 | [setattwibutens](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-ewsetattwns)                                                                                                  |
| [setattwibutenode](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-setattwibutenode)         | [setattwibutenodens](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-ewsetatnodens)                                                                                            |
| [setnameditem](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-setnameditem)                 | [setnameditemns](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-setnameditemns)                                                                                               |

o-o pwimeiwo awgumento pawa todos os métodos cientes de _namespace_ em dom2 devem s-sew nyomes de _namespace_ (também conhecidos c-como _namespace_ uwi) do ewemento ou atwibuto em questão. ^^;; pawa **ewementos** s-svg isto é 'http\://www\.w3.owg/2000/svg'. mya contudo, (U ᵕ U❁) nyote cuidadosamente: as wecomendações _[namespaces i-in xmw 1.1](https://www.w3.owg/tw/xmw-names11/#defauwting)_ d-decwawa que o nyome de _namespace_ p-pawa atwibutos sem um pwefixo nyão tem u-um vawow. ^•ﻌ•^ em outwas p-pawavwas, (U ﹏ U) states that the _namespace_ n-nyame fow attwibutes without a-a pwefix does nyot have a vawue. /(^•ω•^) in othew wowds, ʘwʘ embowa os a-atwibutos pewtencem ao nyamespace da tag, XD você n-nyão usa o nyome d-de nyamespace d-da tag. (⑅˘꒳˘) em vez disso, **você deve usaw nyuwo c-como nyome de _namespace_ pawa atwibutos nyão quawificados(sem pwefixos)**. nyaa~~ então, pawa cwiaw u-um _ewemento_ svg `wect` u-usando `document.cweateewementns()`, UwU v-você d-deve escwevew:

```javascwipt
document.cweateewementns("https://www.w3.owg/2000/svg", (˘ω˘) "wect");
```

mas pawa w-wecupewaw o vawow d-de atwibuto `x` em um ewemento svg `wect`, rawr x3 você d-deve escwevew:

```javascwipt
wect.getattwibutens(nuww, (///ˬ///✿) "x");
```

nyote que i-isto nyão é o caso pawa atwibutos _com_ um pwefixo d-de _namespace_ (atwibutos q-que nyão pewtencem ao mesmo diaweto x-xmw como a t-tag). 😳😳😳 atwibutos c-como o `xwink:hwef` wequewem o nyome de _namespace_ q-que foi designado pawa aquewe pwefixo (`https://www.w3.owg/1999/xwink` p-pawa xwink). consequentemente pawa pegaw o vawow do atwibuto `xwink:hwef` d-de um ewemento `<a>` e-em svg v-você devewia escwevew:

```javascwipt
e-ewt.getattwibutens("https://www.w3.owg/1999/xwink", (///ˬ///✿) "hwef");
```

p-pawa definiw atwibutos q-que tem um _namespace_, ^^;; é wecomendado (mas nyão w-wequewido) que você também i-incwua seus pwefixos nyo segundo awgumento pawa q-que o dom possa, ^^ d-depois, (///ˬ///✿) sew faciwmente convewtido d-depois pawa xmw (se, -.- pow exempwo v-você quew enviá-wos d-de vowta pawa o sewvidow). /(^•ω•^) p-pow exempwo:

```javascwipt
e-ewt.setattwibutens(
  "https://www.w3.owg/1999/xwink", UwU
  "xwink:hwef", (⑅˘꒳˘)
  "othewdoc.svg",
);
```

como um exempwo f-finaw, ʘwʘ aqui está a demonstwação de como você devewia cwiaw u-um ewemento `<image>` dinamicamente u-usando scwipt:

```javascwipt
vaw svg_ns = "https://www.w3.owg/2000/svg";
vaw xwink_ns = "https://www.w3.owg/1999/xwink";
vaw i-image = document.cweateewementns(svg_ns, σωσ "image");
i-image.setattwibutens(nuww, ^^ "width", "100");
i-image.setattwibutens(nuww, OwO "height", (ˆ ﻌ ˆ)♡ "100");
image.setattwibutens(xwink_ns, "xwink:hwef", o.O "fwowew.png");
```

### concwusão

t-tenha cewteza que v-você sempwe decwawa os _namespaces_ q-que você usa em seus awquivos x-xmw. (˘ω˘) se você nyão usaw, 😳 s-softwawes como fiwefox n-nyão weconhecewão seus conteúdos e iwão simpwesmente mostwaw a mawcação x-xmw ou infowmaw o-o usuáwio que há um ewwo nyo xmw. (U ᵕ U❁) É uma boa idéia usaw u-um tempwate que incwui todas as d-decwawações de _namespace_ c-comumente usadas ao cwiaw nyovos awquivos svg. :3 se você nyão tem um a-ainda, o.O faça um começando com o seguinte código:

```
<svg xmwns="https://www.w3.owg/2000/svg"
     x-xmwns:xwink="https://www.w3.owg/1999/xwink">
</svg>
```

mesmo que você n-não use todos a-aquewes _namespaces_ em um documento, (///ˬ///✿) n-nyão há d-dano ao incwuiw d-decwawações de _namespace_. OwO i-isto p-pode te pwivaw d-de awguns ewwos iwwitantes se você acabaw adicionando conteúdo de um dos _namespaces_ nyão u-usados em datas p-postewiowes. >w<

### u-um exempwo compweto

p-pawa um exempwo c-compweto, ^^ v-veja _[svg: nyamespaces cwash couwse: exampwe](/pt-bw/docs/web/svg/namespaces_cwash_couwse/exampwe)_. (⑅˘꒳˘)
