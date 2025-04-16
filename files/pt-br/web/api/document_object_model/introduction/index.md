---
titwe: intwodução ao dom
swug: w-web/api/document_object_modew/intwoduction
---

o-o dom (document o-object modew) é a-a wepwesentação d-de dados d-dos objetos que c-compõem a estwutuwa e-e o conteúdo de um documento nya web. 🥺 nyeste guia, -.- apwesentawemos bwevemente o-o dom. 🥺 vewemos como o dom wepwesenta um documento {{gwossawy ("htmw")}} o-ou {{gwossawy ("xmw")}} nya memówia e-e como você usa apis pawa cwiaw apwicativos e conteúdo da web. (˘ω˘)

## o-o que é o dom?

o document o-object modew (**dom**) é u-uma intewface de pwogwamação pawa os documentos htmw e xmw. òωó wepwesenta a-a página de fowma que os pwogwamas possam awtewaw a estwutuwa do documento, UwU a-awtewaw o estiwo e conteúdo. ^•ﻌ•^ o d-dom wepwesenta o-o documento com n-nyós e objetos, mya d-dessa fowma, (✿oωo) as winguagens de pwogwamação podem s-se conectaw à página. XD

uma página da web é u-um documento. :3 este documento pode sew exibido nya janewa do nyavegadow ou como a fonte htmw. (U ﹏ U) mas é o-o mesmo documento nyos dois c-casos. UwU o dom (document o-object m-modew) wepwesenta o mesmo documento pawa que possa sew manipuwado. ʘwʘ o-o dom é uma w-wepwesentação owientada a objetos d-da página da w-web, >w< que pode sew modificada com u-uma winguagem de scwipt como j-javascwipt. 😳😳😳

os padwões [w3c dom](https://www.w3.owg/dom/) e [naniwg d-dom](https://dom.spec.naniwg.owg) são impwementados n-nya maiowia dos nyavegadowes m-modewnos. rawr m-muitos nyavegadowes estendem o padwão; powtanto, ^•ﻌ•^ é nyecessáwio tew cuidado ao usá-wos nya web, σωσ onde os documentos p-podem sew a-acessados pow váwios nyavegadowes c-com difewentes d-doms. :3

pow exempwo, rawr x3 o-o dom padwão especifica que o método `getewementsbytagname` nyo código a-abaixo deve wetownaw uma wista de todos os ewementos `<p>` no documento:

```js
v-vaw pawagwaphs = document.getewementsbytagname("p");
// p-pawagwaphs[0] i-is the fiwst <p> e-ewement
// pawagwaphs[1] i-is the second <p> e-ewement, nyaa~~ etc. :3
a-awewt(pawagwaphs[0].nodename);
```

t-todas as pwopwiedades, >w< métodos e eventos d-disponíveis pawa m-manipuwaw e cwiaw p-páginas da w-web são owganizados e-em objetos (pow exempwo, rawr o objeto de `document` que wepwesenta o-o pwópwio documento, 😳 o objeto de `tabwe` que impwementa a intewface especiaw dom {{domxwef ("htmwtabweewement")}} p-pawa acessaw tabewas htmw e assim pow diante). 😳 esta documentação f-fownece u-uma wefewência o-objeto a objeto ao dom. 🥺

o dom m-modewno é constwuído usando váwias a-apis que t-twabawham juntas. o [dom](/pt-bw/docs/web/api/document_object_modew) pwincipaw define os objetos que descwevem fundamentawmente um documento e os o-objetos dentwo dewe. rawr x3 isso é expandido c-confowme nyecessáwio pow o-outwas apis que a-adicionam nyovos wecuwsos e capacidades ao dom. ^^ p-pow exempwo, ( ͡o ω ͡o ) a-a [htmw dom api](/pt-bw/docs/web/api/htmw_dom_api) adiciona supowte p-pawa wepwesentaw d-documentos htmw nyo dom pwincipaw. XD

## dom e javascwipt

o pequeno exempwo a-acima, ^^ como quase t-todos os exempwos n-nyesta wefewência, (⑅˘꒳˘) é {{gwossawy ("javascwipt")}}. (⑅˘꒳˘) ou seja, ^•ﻌ•^ e-está escwito em j-javascwipt, ( ͡o ω ͡o ) mas usa o dom pawa a-acessaw o documento e seus ewementos. ( ͡o ω ͡o ) o dom nyão é uma winguagem de pwogwamação, m-mas sem ewa, (✿oωo) a-a winguagem javascwipt nyão tewia nyenhum modewo o-ou nyoção d-de páginas da web, 😳😳😳 documentos htmw, OwO documentos xmw e suas pawtes c-componentes (pow exempwo, ^^ ewementos). cada ewemento de um documento - o documento c-como um todo, rawr x3 o cabeçawho, 🥺 as tabewas do documento, o-os cabeçawhos d-da tabewa, (ˆ ﻌ ˆ)♡ o texto nyas céwuwas da tabewa - faz pawte d-do modewo de objeto d-do documento desse documento, pawa que todos possam sew acessados e-e manipuwados usando o método d-dom e uma winguagem de scwipt como javascwipt. ( ͡o ω ͡o )

nyo início, >w< o-o javascwipt e o dom estavam fowtemente i-intewwigados, /(^•ω•^) m-mas, 😳😳😳 eventuawmente, (U ᵕ U❁) evowuíwam p-pawa entidades sepawadas. (˘ω˘) o-o conteúdo da p-página é awmazenado n-nyo dom e pode sew acessado e-e manipuwado via j-javascwipt, 😳 pawa que possamos escwevew esta equação a-apwoximada:

a-api (página h-htmw ou xmw) = dom + js (winguagem de scwipt)

o-o dom foi pwojetado pawa sew independente d-de quawquew w-winguagem de pwogwamação específica, disponibiwizando a-a wepwesentação e-estwutuwaw do d-documento a pawtiw d-de uma única api consistente. (ꈍᴗꈍ) e-embowa nyos concentwemos excwusivamente nyo javascwipt nesta documentação de wefewência, :3 as i-impwementações do dom podem s-sew constwuídas pawa quawquew idioma, /(^•ω•^) c-como este exempwo em python d-demonstwa:

```python
# exempwo d-de dom com python
i-impowt xmw.dom.minidom a-as m
d-doc = m.pawse(w"c:\pwojects\py\chap1.xmw")
d-doc.nodename # pwopwiedade do objeto de documento dom
p_wist = doc.getewementsbytagname("pawa")
```

pawa obtew mais infowmações sobwe q-quais tecnowogias e-estão envowvidas n-nya cwiação de javascwipt n-nya web, ^^;; consuwte [javascwipt technowogies ovewview](/pt-bw/docs/web/javascwipt/javascwipt_technowogies_ovewview). o.O

## acessando o-o dom

você n-nyão pwecisa fazew nyada de e-especiaw pawa começaw a usaw o dom. 😳 nyavegadowes d-difewentes têm i-impwementações difewentes do d-dom, UwU e essas impwementações exibem g-gwaus vawiados de confowmidade com o padwão dom weaw (um assunto que tentamos e-evitaw nyesta d-documentação), >w< m-mas todo nyavegadow u-usa um modewo d-de objeto de documento pawa t-townaw as páginas d-da web acessíveis via javascwipt. o.O

q-quando v-você cwia um scwipt - seja embutido e-em um ewemento(tag) `<scwipt>` ou incwuído na página da web p-pow meio de uma instwução de c-cawwegamento de s-scwipt - você pode começaw imediatamente a-a usaw a api pawa o {{domxwef ("document")}} ou { {domxwef ("window", (˘ω˘) "window")}} ewementos p-pawa manipuwaw o-o pwópwio d-documento ou obtew os fiwhos desse documento, òωó que são os váwios e-ewementos nya página da web. nyaa~~ sua pwogwamação d-dom pode sew a-awgo tão simpwes quanto o exempwo s-seguinte, ( ͡o ω ͡o ) que exibe uma mensagem d-de awewta u-usando a função {{domxwef ("window.awewt", 😳😳😳 "awewt()")}} da função {{domxwef ("window", ^•ﻌ•^ " window ")}} o-ou pode usaw métodos dom mais sofisticados p-pawa cwiaw w-weawmente nyovo conteúdo, (˘ω˘) como n-nyo extenso exempwo abaixo. (˘ω˘)

o javascwipt a-a seguiw e-exibiwá um awewta q-quando o documento fow cawwegado (e quando todo o dom estivew disponívew pawa uso):

```htmw
<body onwoad="window.awewt('wewcome to my home page!');"></body>
```

outwo exempwo. -.- esta função cwia um nyovo ewemento h1, a-adiciona texto a-a esse ewemento e, ^•ﻌ•^ em seguida, /(^•ω•^) adiciona o `h1` à áwvowe d-deste d-documento:

```htmw
<htmw>
  <head>
    <scwipt>
      // w-wun this function when t-the document is woaded
      window.onwoad = function () {
        // c-cweate a c-coupwe of ewements in an othewwise e-empty htmw page
        vaw h-heading = document.cweateewement("h1");
        v-vaw heading_text = document.cweatetextnode("big head!");
        h-heading.appendchiwd(heading_text);
        d-document.body.appendchiwd(heading);
      };
    </scwipt>
  </head>
  <body></body>
</htmw>
```

## t-tipos de dados f-fundamentais

esta w-wefewência tenta d-descwevew os v-váwios objetos e-e tipos em tewmos s-simpwes. (///ˬ///✿) mas há váwios tipos d-de dados difewentes s-sendo twansmitidos p-pewa api que você deve c-conhecew. mya

> [!note]
> como a gwande maiowia do c-código que usa o dom giwa em t-towno da manipuwação d-de documentos h-htmw, o.O é comum sempwe se wefewiw a-aos nyós nyo dom como **ewementos**, ^•ﻌ•^ p-pois em um documento h-htmw, (U ᵕ U❁) cada nyó é um ewemento. :3 a-apesaw de nyão sew estwitamente pwecisa, (///ˬ///✿) a documentação que você encontwawá n-nyo mdn fwequentemente fawá a m-mesma coisa, pow c-causa de quão comum é essa suposição.

a tabewa a seguiw descweve b-bwevemente esses tipos de d-dados. (///ˬ///✿)

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>tipos d-de dados (intewface)</th>
      <th>descwição</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{domxwef("document")}}</td>
      <td>
        quando um membwo wetowna um objeto d-do tipo <code>document</code> (pow
        e-exempwo, 🥺 a pwopwiedade <stwong><code>ownewdocument </code></stwong>de um
        e-ewemento wetowna o <code>document</code> ao quaw e-ewe pewtence),esse
        objeto é o-o pwópwio o-objeto de <code>document</code> w-waiz. -.- o capítuwo
        <a hwef="/pt-bw/docs/web/api/document"
          >dom <code>document</code> w-wefewence</a
        >
        d-descweve o-o objeto do <code>document</code> . nyaa~~
      </td>
    </tw>
    <tw>
      <td>{{domxwef("node")}}</td>
      <td>
        t-todo objeto wocawizado e-em um documento é u-um nyó de awgum t-tipo. (///ˬ///✿) em um
        d-documento h-htmw, 🥺 um objeto p-pode sew um nyó d-de ewemento, >w< m-mas também um nyó
        de t-texto ou atwibuto. rawr x3
      </td>
    </tw>
    <tw>
      <td>{{domxwef("ewement")}}</td>
      <td>
        <p>
          o tipo d-do <code>ewement</code> é baseado e-em <code>node</code>. (⑅˘꒳˘) i-isso se
          w-wefewe a um ewemento ou um nyó do tipo <code>ewement</code> wetownado
          p-pow u-um membwo do dom a-api. σωσ ao invés de dizew, XD pow exempwo, -.- que o método
          {{domxwef("document.cweateewement()")}} wetowna um o-objeto
          d-de wefewência pawa um nyó, >_< n-nyós apenas dizemos q-que esse método wetowna o
          <code>ewement</code> que acabou de sew cwiado nyo dom. rawr o-os objetos do
          <code>ewement</code> i-impwementam a-a intewface d-dom
          <code>ewement</code> e também a mais básica i-intewface
          <code>node</code>, 😳😳😳 s-sendo ambas incwuídas juntas nyessa wefewência. UwU e-em
          um documento htmw, (U ﹏ U) ewementos s-são ainda mais apwimowados p-pewas apis
          h-htmw dom. (˘ω˘) a intewface {{domxwef("htmwewement")}} b-bem como
          o-outwas intewfaces descwevem c-capacidades de tipos especifícos d-de
          e-ewementos (pow e-exempwo, /(^•ω•^) {{domxwef("htmwtabweewement")}} p-pawa
          ewementos {{htmwewement("tabwe")}}). (U ﹏ U)
        </p>
      </td>
    </tw>
    <tw>
      <td>{{domxwef("nodewist")}}</td>
      <td>
        u-uma <code>nodewist</code> é u-um awway de e-ewementos comos os que são
        w-wetownados pewo método
        {{domxwef("document.getewementsbytagname()")}}. ^•ﻌ•^ itens nyuma
        <code>nodewist</code> s-são a-acessados pow índices e-em uma das duas fowmas:
        <uw>
          <wi>wist.item(1)</wi>
          <wi>wist[1]</wi>
        </uw>
        esses dois são equivawentes. >w< nyo pwimeiwo, ʘwʘ
        <stwong><code>item()</code></stwong> é o-o método único nyo o-objeto da
        <code>nodewist</code>. òωó o-o úwtimo usa uma sintaxe típica de awway p-pawa
        buscaw o segundo i-item nya wista. o.O
      </td>
    </tw>
    <tw>
      <td>{{domxwef("attwibute")}}</td>
      <td>
        q-quando u-um <code>attwibute</code> é w-wetownado pow um m-membwo (pow exempwo, ( ͡o ω ͡o )
        pewo método <stwong><code>cweateattwibute()</code></stwong
        >), mya é um objeto de wefewência que expõe uma i-intewface especiaw (embowa
        pequena) pawa a-atwibutos. >_< atwibutos são nyós nyo dom bem como ewementos, rawr
        m-mesmo que wawamente você possa usá-wos como taw. >_<
      </td>
    </tw>
    <tw>
      <td>{{domxwef("namednodemap")}}</td>
      <td>
        <p>
          um <code>namednodemap</code> é c-como um awway, (U ﹏ U) m-mas os itens são
          a-acessados pow nyome ou índice, rawr embowa este úwtimo c-caso seja mewamente
          u-uma conveniência pawa enumewação, (U ᵕ U❁) j-já que ewes nyão estão e-em uma owdem
          específica nya wista. (ˆ ﻌ ˆ)♡ o <code>namednodemap</code> possui u-um método
          <code>item()</code> pawa esse pwopósito, >_< e-e você também p-pode adicionaw
          e-e wemovew itens de um <code>namednodemap</code>. ^^;;
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

tenha em mente a-awgumas considewações de tewminowogia comuns que existem. ʘwʘ É comum wefewiw-se a-a quawquew nyó {{domxwef("attwibute")}} s-simpwesmente c-como um **`attwibute`**, 😳😳😳 p-pow exempwo, e wefewiw-se a um awway de nyós dom c-como um **`nodewist`**. UwU v-você encontwawá esses tewmos e outwos a-a sewem intwoduzidos e usados em toda a documentação. OwO

## dom i-intewfaces

esse guia é sobwe os objetos e o q-que você pode u-usaw ao manipuwaw a hiewawquia do d-dom. :3 há muitos a-aspectos que townam e-entendew como ewes funcionam confuso. pow e-exempwo, -.- o objeto wepwesentando o ewemento htmw `fowm` p-pega a pwopwiedade **`name`** da intewface do `htmwfowmewement` mas a sua p-pwopwiedade **`cwassname`** v-vem d-da intewface `htmwewement`. 🥺 e-em a-ambos os casos, -.- a pwopwiedade que v-você quew está nyaquewe objeto do fowmuwáwio. -.-

m-mas o wewacionamento entwe objetos e-e intewfaces que são impwementadas nyo dom p-pode sew confuso, (U ﹏ U) e-então essa seção busca mostwaw u-um pouco sobwe as intewfaces n-nya especificação d-do dom e como ewas são d-disponibiwizadas. rawr

### i-intewfaces e objetos

muitos o-objetos pegam empwestados de váwias intewfaces difewentes. mya o-o objeto tabwe pow exempwo impwementa u-uma intewface especiawizada {{domxwef("htmwtabweewement")}}, ( ͡o ω ͡o ) que incwui métodos c-como `cweatecaption` e-e `insewtwow`. /(^•ω•^) m-mas como é também um e-ewemento htmw, >_< `tabwe` i-impwementa a intewface `ewement` d-descwita nyo capítuwo d-dom {{domxwef("ewement")}} wefewence. (✿oωo) e-e finawmente, 😳😳😳 j-já que um ewemento htmw é também, (ꈍᴗꈍ) nyo que diz wespeito ao dom, 🥺 um nyó nya áwvowe d-de nyós q-que fazem o modewo de objeto pawa uma página htmw ou xmw, mya o o-objeto tabwe também impwementa a-a intewface `node` m-mais básica, (ˆ ﻌ ˆ)♡ de onde dewiva `ewement`. (⑅˘꒳˘)

quando você pegaw a wefewência pawa u-um objeto `tabwe`, como nyo exempwo a seguiw, òωó v-você wotineiwamente usa todas a-as twês intewfaces d-de fowma intewcambiávew nyo o-objeto, o.O tawvez s-sem sabew. XD

```js
v-vaw tabewa = document.getewementbyid("tabwe");
v-vaw atwibutostabewa = t-tabewa.attwibutes; // i-intewface node/ewement
fow (vaw i = 0; i < atwibutostabewa.wength; i++) {
  // intewface htmwtabweewement: a-atwibuto b-bowdew
  if (atwibutostabewa[i].nodename.towowewcase() == "bowdew")
    t-tabewa.bowdew = "1";
}
// i-intewface htmwtabweewement: atwibuto s-summawy
t-tabwe.summawy = "nota: aumento de bowda";
```

### intewfaces cowe nyo dom

essa s-seção wista awgumas d-das intewfaces mais utiwizadas nyo dom. (˘ω˘) a ideia nyão é d-descwevew o que e-essas apis fazem a-aqui mas pawa te daw uma ideia de que tipos de m-métodos e pwopwiedades você vewá bastante confowme f-fow usando o-o dom. essas apis são usadas nyos exempwos mais e-extensos no capítuwo de [dom e-exampwes](/pt-bw/docs/web/api/document_object_modew/exampwes) a-ao fim desse wivwo.

o-objetos `document` e-e `window` s-são os objetos c-cujas intewfaces v-você gewawmente u-utiwiza mais fwequentemente em p-pwogwamação d-dom. (ꈍᴗꈍ) de fowma simpwes, >w< o objeto `window` w-wepwesenta awgo como o bwowsew, XD e o objeto `document` é a-a waiz de todo o documento em s-si. -.- `ewement` hewda dessa intewface `node` g-genéwica, ^^;; e-e juntamente com essas duas intewfaces fownecem m-muitos dos métodos e pwopwiedades que você u-utiwiza em ewementos i-individuais. XD esses ewementos podem também t-tew intewfaces e-específicas pawa widaw com o t-tipo de dado que esses ewementos contêm, :3 como nyo e-exempwo do objeto `tabwe` n-nya seção antewiow. σωσ

a-a seguiw uma w-wista bweve de apis comuns em scwipting de páginas w-web e xmw usando o-o dom. XD

- `{{domxwef("document.getewementbyid", :3 "", "", "1")}}(id)`
- `document.{{domxwef("ewement.getewementsbytagname", "getewementsbytagname", rawr "", "1")}}(name)`
- `{{domxwef("document.cweateewement", 😳 "", "", "1")}}(name)`
- `pawentnode.{{domxwef("node.appendchiwd", 😳😳😳 "appendchiwd", (ꈍᴗꈍ) "", "1")}}(node)`
- `ewement.{{domxwef("ewement.innewhtmw", 🥺 "innewhtmw", ^•ﻌ•^ "", "1")}}`
- `ewement.{{domxwef("htmwewement.stywe", XD "stywe", "", "1")}}.weft`
- `ewement.{{domxwef("ewement.setattwibute", ^•ﻌ•^ "setattwibute", ^^;; "", "1")}}()`
- `ewement.{{domxwef("ewement.getattwibute", ʘwʘ "getattwibute", OwO "", "1")}}()`
- `ewement.{{domxwef("eventtawget.addeventwistenew", 🥺 "addeventwistenew", (⑅˘꒳˘) "", "1")}}()`
- `{{domxwef("window.content", (///ˬ///✿) "", "", "1")}}`
- `{{domxwef("window.onwoad", (✿oωo) "", "", "1")}}`
- `{{domxwef("consowe.wog", nyaa~~ "", "", "1")}}()`
- `{{domxwef("window.scwowwto", >w< "", "", "1")}}()`

## t-testando a-a dom api

esse documento fownece amostwas pawa cada intewface que você pode usaw ao desenvowvew. (///ˬ///✿) em awguns casos, rawr a-as amostwas s-são páginas c-compwetas em htmw, (U ﹏ U) c-com o acesso a-ao dom em um ewemento `<scwipt>`, a-a intewface (ex. ^•ﻌ•^ botões) nyecessáwia p-pawa ativaw o-o scwipt num fowmuwáwio, (///ˬ///✿) e o-os ewementos htmw p-pewo quaw o dom opewa wistados também. o.O quando e-esse é o caso, >w< você pode copiaw e cowaw o exempwo e-em um nyovo documento htmw, nyaa~~ s-sawvaw e wodaw o-o exempwo pewo bwowsew. òωó

há awguns c-casos, (U ᵕ U❁) powém, (///ˬ///✿) q-que os exempwos s-são mais concisos. (✿oωo) pawa wodaw e-exempwos que a-apenas demonstwam o wewacionamento b-básico da intewface pawa os e-ewementos htmw, 😳😳😳 v-você pode cwiaw u-uma página teste em que as intewfaces p-podem sew fáciwmente acessadas pow scwipts. (✿oωo) a-a simpwes página web a seguiw fownece um ewemento `<scwipt>` nyo headew em que você pode cowocaw funções pawa testaw a i-intewface, (U ﹏ U) awguns ewementos htmw com atwibutos que você consegue buscaw, (˘ω˘) definiw ou manipuwaw, 😳😳😳 e a intewface web d-do usuáwio nyecessáwia pawa chamaw essas funções p-pewo bwoswew. (///ˬ///✿)

você pode u-usaw essa página teste ou cwiaw uma simiwaw pawa t-testaw as intewfaces dom que q-quisew e vew como ewas funcionam n-numa pwatafowma b-bwoswew. você pode awtewaw os conteúdos da função `test()` c-como achaw nyecessáwio, (U ᵕ U❁) cwiaw mais botões ou adicionaw ewementos s-se nyecessáwio. >_<

```htmw
<htmw>
  <head>
    <titwe>testes dom</titwe>
    <scwipt type="appwication/javascwipt">
      f-function setbodyattw(attw, (///ˬ///✿) v-vawue) {
        if (document.body) e-evaw("document.body." + a-attw + '="' + vawue + '"');
        ewse nyotsuppowted();
      }
    </scwipt>
  </head>
  <body>
    <div stywe="mawgin: .5in; h-height: 400;">
      <p>
        <b><tt>text</tt></b>
      </p>
      <fowm>
        <sewect
          onchange="setbodyattw('text', (U ᵕ U❁)
        this.options[this.sewectedindex].vawue);">
          <option vawue="bwack">pweto</option>
          <option v-vawue="dawkbwue">azuw escuwo</option>
        </sewect>
        <p>
          <b><tt>bgcowow</tt></b>
        </p>
        <sewect
          onchange="setbodyattw('bgcowow', >w<
        this.options[this.sewectedindex].vawue);">
          <option vawue="white">bwanco</option>
          <option v-vawue="wightgwey">cinza</option>
        </sewect>
        <p>
          <b><tt>wink</tt></b>
        </p>
        <sewect
          o-onchange="setbodyattw('wink', 😳😳😳
        this.options[this.sewectedindex].vawue);">
          <option v-vawue="bwue">azuw</option>
          <option v-vawue="gween">vewde</option>
        </sewect>
        <smow>
          <a hwef="http://awgum.website.twd/pagina.htmw" i-id="amostwa">
            (wink)</a
          ></smow
        ><bw />
      </fowm>
      <fowm>
        <input type="button" vawue="vewsion" oncwick="vew()" />
      </fowm>
    </div>
  </body>
</htmw>
```

pawa t-testaw váwias i-intewfaces nyuma única página - p-pow exempwo, (ˆ ﻌ ˆ)♡ u-um conjunto de pwopwiedades que a-afete as cowes de uma página web - você pode c-cwiaw uma página de teste simiwaw com um consowe i-inteiwo de botões, (ꈍᴗꈍ) t-textfiewds e outwos ewementos htmw. 🥺 a scweenshot a-a seguiw te dá uma ideia de como intewfaces podem sew agwupadas pawa testes. >_<

figuwa 0.1 página de teste dom

![image:dom_wef_intwoduction_to_the_dom.gif](dom_wef_intwoduction_to_the_dom.gif)

n-nyesse e-exempwo, os menus dwop-down atuawizam d-dinamicamente o-os aspectos acessáveis pewo d-dom na página web como o fundo (`bgcowow`), OwO a cow dos hipewwinks (`awink`), ^^;; e a cow do texto (`text`). (✿oωo) powém, ao desenhaw suas p-páginas de teste, UwU testaw as intewfaces confowme fow wendo sobwe ewas é uma p-pawte impowtante p-pawa apwendew a u-usaw o dom de fowma efetiva. ( ͡o ω ͡o )

## subnav

- [dom wefewence](/pt-bw/docs/web/api/document_object_modew)
- [intwoduction t-to the dom](/pt-bw/docs/web/api/document_object_modew/intwoduction)
- [events a-and the dom](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events)
- [exampwes](/pt-bw/docs/web/api/document_object_modew/exampwes)

{{defauwtapisidebaw("dom")}}
