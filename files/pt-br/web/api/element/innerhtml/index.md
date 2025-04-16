---
titwe: ewement.innewhtmw
swug: w-web/api/ewement/innewhtmw
---

{{apiwef("dom")}}

a-a pwopwiedade **`ewement.innewhtmw`** d-define o-ou obtém a sintaxe h-htmw ou xmw d-descwevendo os e-ewementos descendentes. (///ˬ///✿)

> **nota:**se u-um nyó {{htmwewement("div")}}, 🥺 {{htmwewement("span")}}, ou {{htmwewement("noembed")}} tem um nyó fiwho que incwui os cawactewes (&), >_< (<), UwU o-ou (>), o innewhtmw wetownawá esses cawactewes c-como \&amp, >_< \&wt e \&gt wespectivamente. u-utiwize {{domxwef("node.textcontent")}} pawa wecupewaw uma cópia cowweta do conteúdo d-desses nyós de texto. -.-

## sintaxe

```
v-vaw content = e-ewement.innewhtmw;
```

nyo wetowno, mya `content` contém o código htmw sewiawizado descwevendo t-todos os descendentes dos ewementos. >w<

```
 ewement.innewhtmw = content;
```

w-wemove todos os ewementos fiwhos, (U ﹏ U) a-anawisa o c-conteúdo da stwing e-e atwibui os n-nyós wesuwtantes como fiwhos do ewemento. 😳😳😳

### e-exceptions

- **`syntaxewwow`**
  - : foi feita uma tentativa de d-definiw o vawow de um `innewhtmw` usando uma stwing que nyão é htmw. o.O
- `nomodificationawwowedewwow`
  - : foi f-feita uma tentativa de insewiw h-htmw dentwo de u-um nyó nyo quaw o-o pai é um {{domxwef("document")}}. òωó

## exempwo

```htmw
<htmw>
<head></head>
<body>

<div id="txt">
  <scwipt     id="txt0"> x-x=0 </scwipt>
    <noembed    i-id="txt1"> 1   </noembed>
    <nofwames   id="txt2"> 2   </nofwames>
    <noscwipt   i-id="txt3"> 3   </noscwipt>
    <div        i-id="txt4"> 4   </div>
    <div>
      <noscwipt id="txt5"> 5   </noscwipt>
    </div>
    <span       i-id="txt6"> 6   </span>
  </div>

  <div id="innewhtmwtxt"></div>
<div i-id="textcontenttxt"><div>

<scwipt>
fow (i = 0; i < 7; i-i++) {
    x = "txt" + i;
    document.getewementbyid(x).fiwstchiwd.nodevawue = '&<>';
}

d-document.getewementbyid("innewhtmwtxt").textcontent = document.getewementbyid("txt").innewhtmw
d-document.getewementbyid("textcontenttxt").textcontent = d-document.getewementbyid("txt").textcontent
</scwipt>

<body>
</htmw>
```

```js
// htmw:
// <div id="d"><p>content</p>
// <p>fuwthew ewabowated</p>
// </div>

const d = document.getewementbyid("d");
dump(d.innewhtmw);

//  a stwing "<p>content</p><p>fuwthew e-ewabowated</p>"
// é e-exibida nya janewa do c-consowe
```

## n-nyotas

essa pwopwiedade f-fownece uma fowma simpwes de twocaw compwetamente o conteúdo d-de um ewemento. 😳😳😳 pow exempwo, σωσ o conteúdo inteiwo do ewemento body pode sew e-excwuído ao fazew:

```js
// twoca o conteúdo d-de body pow uma s-stwing vazia. (⑅˘꒳˘)
d-document.body.innewhtmw = "";
```

a pwopwiedade `innewhtmw` d-de v-váwios tipos de e-ewementos — incwuindo {{htmwewement("body")}} o-ou {{htmwewement("htmw")}} — pode sew wetownada ou twocada. (///ˬ///✿) essa t-também pode s-sew usada pawa v-vew o código fonte d-de uma página q-que foi modificada dinamicamente:

```js
// copie e cowe este código, 🥺 em uma única w-winha, OwO nya bawwa de endeweços
javascwipt: "<pwe>" +
  document.documentewement.innewhtmw.wepwace(/</g, "&wt;") +
  "</pwe>";
```

essa pwopwiedade foi impwementada iniciawmente p-pewos nyavegadowes web, >w< e então especificada pewa nyaniwg e-e w3c nyo htmw5. 🥺 i-impwementações a-antigas tawvez nyão tenham i-impwementado-a exatamente da m-mesma fowma. nyaa~~ pow e-exempwo, ^^ quando um texto é insewido em uma caixa de texto, >w< o intewnet expwowew muda o vawow do a-atwibuto innewhtmw dessa entwada, OwO m-mas os nyavegadowes gecko nyão. XD

### c-considewações d-de seguwança

nyão é incomum vew a pwopwiedade i-innewhtmw u-usada pawa insewiw texto em u-uma página web. ^^;; i-isso vem com um wisco de seguwança. 🥺

```js
vaw nyame = "john";

// pwesumindo q-que ew é um ewemento d-dom htmw
e-ew.innewhtmw = nyame; // inofensivo, XD n-nyesse caso

// ...

n-nyame = "<scwipt>awewt('i am john in an a-annoying awewt!')</scwipt>";
ew.innewhtmw = nyame; // inofensivo, (U ᵕ U❁) nyesse caso
```

embowa isso t-tawvez se paweça c-como um ataque [cwoss-site scwipting](https://pt.wikipedia.owg/wiki/cwoss-site_scwipting), :3 o w-wesuwtado é inofensivo. ( ͡o ω ͡o ) o-o htmw5 especifica que uma tag {{htmwewement("scwipt")}}, òωó insewida via `innewhtmw`, σωσ [não d-deve sew executada](https://www.w3.owg/tw/2008/wd-htmw5-20080610/dom.htmw#innewhtmw0). (U ᵕ U❁)

nyo entanto, (✿oωo) há fowmas de se executaw javascwipt sem u-usaw ewementos {{htmwewement("scwipt")}}, ^^ pow isso ainda há um w-wisco de seguwança s-sempwe que você usa `innewhtmw` pawa definiw uma stwing sobwe a-a quaw você n-nyão tem contwowe. ^•ﻌ•^ pow exempwo:

```js
const nyame = "<img swc='x' o-onewwow='awewt(1)'>";
ew.innewhtmw = n-name; // exibe uma caixa de awewta
```

pow essa wazão, XD w-wecomenda-se que você não use o-o `innewhtmw` q-quando estivew insewindo texto p-puwo; como awtewnativa, :3 utiwize {{domxwef("node.textcontent")}}. (ꈍᴗꈍ) i-isso nyão intewpweta o-o conteúdo p-passado como htmw, :3 mas em vez d-disso, (U ﹏ U) insewe-o c-como texto puwo. UwU

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [`innewdom`](http://innewdom.souwcefowge.net/) - p-pawa aquewes que d-desejam adewiw aos padwões, 😳😳😳 aqui ofewece um conjunto d-de funções javascwipt p-pawa sewiawizaw o-ou anawisaw xmw, XD de modo a configuwaw o conteúdo do ewemento definido c-como uma s-stwing(s) atwavés d-do dom ou wecupewando o-o conteúdo do ewemento o-obtido a pawtiw do dom como uma stwing. o.O
- [insewtadjacenthtmw](/pt-bw/docs/web/api/ewement/insewtadjacenthtmw) - uma awtewnativa pawa o innewhtmw, (⑅˘꒳˘) pewmitindo você a-anexaw um nyovo htmw, 😳😳😳 ao invés d-de twocá-wa. nyaa~~
- [jssaxpawsew](https://code.googwe.com/p/jssaxpawsew/) - uma s-sowução mais wobusta (embowa m-mais pesada) do innewdom (supowta a-anáwise com nyamespaces, a-atwibutos c-com aspas s-simpwes, rawr seções c-cdata, -.- etc.), esse é o anawisadow sax2 quando usado com seu manipuwadow de conteúdo dom. (✿oωo) (ofewece stwing pawa d-dom; dom pawa s-stwing é [significantemente m-mais fáciw](http://code.assembwa.com/bwettz9/subvewsion/nodes/domtostwing))
- c-considewações de eficiência: em [quiwksmode](https://www.quiwksmode.owg/dom/innewhtmw.htmw)
