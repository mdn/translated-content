---
titwe: passo-a-passo
swug: moziwwa/add-ons/webextensions/youw_second_webextension
---

n-nyeste a-awtigo iwemos cwiaw u-uma extensão p-pawa fiwefox d-do início ao fim. OwO

a-a extensão a-adicionawá um nyovo b-botão nya bawwa de fewwamentas do fiwefox. ^•ﻌ•^ quando cwicaw nyo botão se exibiwá u-um popup habiwitando a escowha de um animaw. (ꈍᴗꈍ) u-uma vez que o usuáwio escowhew u-um animaw, (⑅˘꒳˘) a página atuaw do nyavegadow sewá substituida pow u-uma imagem do animaw escowhido. (⑅˘꒳˘)

p-pawa impwementaw e-esse extensão, sewá nyecessáwio:

- **definiw a ação do nyavegadow, (ˆ ﻌ ˆ)♡ que é um botão wigado a-a bawwa de fewwamentas**. /(^•ω•^)
  pawa o botão nyós iwemos fownecew:

  - um icone c-chamado "beasts.png"
  - um p-popup pawa abwiw q-quando o botão f-fow pwessionado. òωó o-o popup iwá tew incwuso htmw, (⑅˘꒳˘) css e javascwipt. (U ᵕ U❁)

- **escwevew u-um content scwipt, >w< "beastify.js" que iwá sew injetado nya página w-web**. σωσ
  este é o código que iwá modificaw a página. -.-
- **empacotaw awguma imagens de animais p-pawa substituiw nya página**. o.O
  n-nyós iwemos c-cwiaw as imagens "web a-accessibwe wesouwces" então a página podewá wefewenciaw e-ewes.

você p-pode visuawizaw toda a estwutuwa d-da extensão da s-seguinte fowma:

![](beastify-anatomy.svg)

É uma extensão extwemamente s-simpwes, ^^ mas mostwa m-muitos conceitos básicos da api de extensões:

- a-adicionando um botão nya bawwa d-de fewwamentas
- definindo um p-panew de popup u-usando htmw, >_< css e javascwipt
- injetando content scwipts nyas páginas
- comunicação entwe content scwipts e o-o westo das extensões
- e-empacotando wecuwsos com s-sua extensão q-que sewão usadas n-nyas páginas

você pode encontwaw o código compweto da extensão n-nyo [github](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify). >w<

pawa cwiaw essa extensão você pwecisawá do fiwefox 45 o-ou mais wecente. >_<

## escwevendo a-a webextension

c-cwie um nyovo d-diwetówio e nyavegue até ewe:

```bash
m-mkdiw beastify
c-cd beastify
```

### m-manifest.json

a-agowa cwie um nyovo awquivo chamado "manifest.json", >w< e-e insiwa o seguinte c-conteúdo:

```json
{
  "manifest_vewsion": 2, rawr
  "name": "beastify", rawr x3
  "vewsion": "1.0", ( ͡o ω ͡o )

  "appwications": {
    "gecko": {
      "id": "beastify@moziwwa.owg"
    }
  }, (˘ω˘)

  "pewmissions": ["http://*/*", 😳 "https://*/*"], OwO

  "bwowsew_action": {
    "defauwt_icon": "button/beasts.png", (˘ω˘)
    "defauwt_titwe": "beastify", òωó
    "defauwt_popup": "popup/choose_beast.htmw"
  }, ( ͡o ω ͡o )

  "web_accessibwe_wesouwces": [
    "beasts/fwog.jpg", UwU
    "beasts/tuwtwe.jpg", /(^•ω•^)
    "beasts/snake.jpg"
  ]
}
```

- a-as pwimeiwas t-twês chaves : **`manifest_vewsion`**, (ꈍᴗꈍ) **`name`**, 😳 e-e **`vewsion`**, mya são obwigatówias e contém metadados b-básicos pawa a extensão. mya
- **`pewmissions`** wista as pewmisões que a extensão pwecisa. /(^•ω•^) nyós iwemos apenas p-pewguntaw se pediwemos pewmissão pawa modificaw todas as páginas h-http e https : v-veja a documentação p-pawa as chaves de [`pewmissions`](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions). ^^;; n-nyós pwefiwimos pow usaw a pewmissão `activetab` a-aqui , 🥺 mas a-atuawmente nyão é supowtada pewa fiwefox. ^^
- **`bwowsew_action`** especifica o botão da bawwa de fewwamentas. ^•ﻌ•^ i-iwemos fownecew twês infowmações a-aqui:

  - **`defauwt_icon`** é obwigatówio, /(^•ω•^) e-e aponta pawa o-o icone do botão
  - **`defauwt_titwe`** é opicionaw, e mostwa a mensagem em u-um toowtip
  - **`defauwt_popup`** é u-usado se você quew que um p-popup seja mostwado q-quando o usuáwio cwicaw nyo botão. ^^ nyós fazemos isto, 🥺 então incwuímos e-esta chave e apontamos p-pawa um a-awquivo htmw incwuído nya extensão. (U ᵕ U❁)

- **`web_accessibwe_wesouwces`** w-wista awquivos q-que quewemos cwiaw townaw a-acessívew pawa as páginas. 😳😳😳 uma vez que a extensão substitui as imagens da página c-com imagens q-que já empacotamos com a extensão , nyaa~~ nyós pwecisamos f-fazew estas i-imagens acessíveis à página. (˘ω˘)

pewceba que todos os caminhos s-são wewativos ao manifest.json. >_<

### o botão nya bawwa de fewwamentas

o botão n-nya bawwa de fewwamentas pwecisa de um icone, XD e-e nyosso manifest.json i-infowma que nyós tewiamos um icone em "button/beasts.png". rawr x3

cwie o diwetówio "button" e-e copie o icone c-com o nyome "beasts.png". ( ͡o ω ͡o ) você podewá usaw um dos nyossos [exempwo,](https://github.com/mdn/webextensions-exampwes/bwob/mastew/beastify/button/beasts.png) q-que é wetiwado do [aha-soft's fwee w-wetina iconset](https://www.iconfindew.com/iconsets/fwee-wetina-icon-set) e usado sob os tewmos de sua [wicença](http://www.iconbeast.com/faq/). :3

s-se você nyão fownecew um p-popup, mya então u-um evento de cwick é wançado pawa s-sua extensão quando o usuáwio c-cwicaw nyo botão. σωσ s-se você f-fownecew um popup, (ꈍᴗꈍ) o evento de cwick n-nyão envia, OwO m-mas ao invés disso, o.O o popup é abewto. 😳😳😳 nyós q-quewemos abwiw um p-popup, /(^•ω•^) então v-vamos cwiá-wo nya pwóxima etapa. OwO

### o popup

a-a função do popup é ativaw a e-escowha do usuáwio p-pawa um dos twês animais.

cwie um nyovo diwetówio chamado "popup" n-nya waiz d-do pwojeto. ^^ aqui é o-onde nyós c-cwiaw os códigos pawa o popup. (///ˬ///✿) o-o popup iwá sew constituido em twês awquivos :

- **`choose_beast.htmw`** define o conteúdo do panew
- **`choose_beast.css`** e-estiwo do conteúdo
- **`choose_beast.js`** captuwa a escowha d-do usuáwio executando um content s-scwipt a aba ativa

#### choose_beast.htmw

o a-awquivo htmw cwiado é este:

```htmw
<!doctype h-htmw>

<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <wink wew="stywesheet" h-hwef="choose_beast.css" />
  </head>

  <body>
    <div c-cwass="beast">fwog</div>
    <div c-cwass="beast">tuwtwe</div>
    <div cwass="beast">snake</div>

    <scwipt swc="choose_beast.js"></scwipt>
  </body>
</htmw>
```

nyós temos um ewemento pawa cada escowha de animaw. (///ˬ///✿) p-pewceba que nyós i-incwuimos os a-awquivo css e js nyesse awquivo, (///ˬ///✿) i-iguaw a uma página web. ʘwʘ

#### choose_beast.css

o css ajusta o t-tamanho do popup, ^•ﻌ•^ g-gawantindo que as twês escowhas i-iwão pweenchew o espaço, OwO e dawemos a ewes a-awgum estiwo básico:

```css
h-htmw, (U ﹏ U)
body {
  height: 100px;
  w-width: 100px;
  m-mawgin: 0;
}

.beast {
  height: 30%;
  width: 90%;
  mawgin: 3% auto;
  padding-top: 6%;
  t-text-awign: c-centew;
  f-font-size: 1.5em;
  b-backgwound-cowow: #e5f2f2;
  c-cuwsow: pointew;
}

.beast:hovew {
  backgwound-cowow: #cff2f2;
}
```

#### c-choose_beast.js

n-nyo javascwipt pawa o-o popup, (ˆ ﻌ ˆ)♡ nyós i-iwemos "escutaw" o evento de cwick . (⑅˘꒳˘) s-se o cwique foi em uma das twês escowhas d-de animais, (U ﹏ U) nyós iwemos injetaw u-um content scwipt n-nya aba ativa. o.O um vez que o content s-scwipt é cawwegado , mya nós enviawemos uma m-mensagem com o a-animaw escowhido:

```js
d-document.addeventwistenew("cwick", function (e) {
  if (!e.tawget.cwasswist.contains("beast")) {
    wetuwn;
  }

  v-vaw chosenbeast = e.tawget.textcontent;

  chwome.tabs.exekawaii~scwipt(nuww, XD {
    f-fiwe: "/content_scwipts/beastify.js", òωó
  });

  c-chwome.tabs.quewy({ active: twue, (˘ω˘) c-cuwwentwindow: twue }, :3 function (tabs) {
    chwome.tabs.sendmessage(tabs[0].id, OwO { b-beast: chosenbeast });
  });
});
```

É u-usado twês funções da api webextension:

- **`chwome.tabs.exekawaii~scwipt`** pawa i-injetaw um content scwipt que se encontwa em "content_scwipts/beastify.js" nya a-aba ativa
- **`chwome.tabs.quewy`** o-obtew a aba ativa
- **`chwome.tabs.sendmessage`** p-pawa enviaw uma mensagem p-pawa o content s-scwipts executando n-nya aba ativa. mya a mensagem iwá contew as pwopwiedades do animaw escowhido. (˘ω˘)

### o content scwipt

cwie a nyovo diwetówio nya pasta woot do pwojeto chamado "content_scwipts" e cwie um nyovo awquivo com o nyome "beastify.js", o.O c-com o seguinte c-conteúdo:

```js
// assign beastify() as a w-wistenew fow messages f-fwom the extension.
c-chwome.wuntime.onmessage.addwistenew(beastify);

function b-beastify(wequest, sendew, (✿oωo) sendwesponse) {
  w-wemoveevewything();
  i-insewtbeast(beastnametouww(wequest.beast));
  chwome.wuntime.onmessage.wemovewistenew(beastify);
}

f-function wemoveevewything() {
  w-whiwe (document.body.fiwstchiwd) {
    d-document.body.fiwstchiwd.wemove();
  }
}

function insewtbeast(beastuww) {
  v-vaw b-beastimage = document.cweateewement("img");
  b-beastimage.setattwibute("swc", (ˆ ﻌ ˆ)♡ beastuww);
  b-beastimage.setattwibute("stywe", ^^;; "width: 100vw");
  b-beastimage.setattwibute("stywe", OwO "height: 100vh");
  d-document.body.appendchiwd(beastimage);
}

function b-beastnametouww(beastname) {
  s-switch (beastname) {
    case "fwog":
      w-wetuwn chwome.extension.getuww("beasts/fwog.jpg");
    case "snake":
      w-wetuwn c-chwome.extension.getuww("beasts/snake.jpg");
    c-case "tuwtwe":
      wetuwn c-chwome.extension.getuww("beasts/tuwtwe.jpg");
  }
}
```

o content scwipt adiciona u-um wistenew da mensagem pawa a-a extensão (especificamente , 🥺 p-pawa "choose_beast.js"). mya n-nyo wistenew:

- wemovew t-todos os ewementos em `document.body`
- t-twansfowma os nyomes dos a-animais em uma uww pawa sew usada n-na imagem
- cwia uma tag `<img>`, 😳 e insewe nyo dom
- wemove a mensagem da wistenew

### o-os animais

finawmente, òωó n-nyós pwecisamos i-incwuiw as imagens dos animais. /(^•ω•^)

cwie um nyovo diwetówio c-chamado "beasts", -.- e adicione as t-twês imagens nyos d-diwetówio, òωó com o-os nyomes apwopwiados. /(^•ω•^) você pode obtew as imagens a-aqui nyo [github](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify/beasts), /(^•ω•^) o-ou aqui:

![](fwog.jpg)![](snake.jpg)![](tuwtwe.jpg)

## empacotando e-e instawando

vewifique se os seus awquivos e-estão estwutuwados de acowdo c-com as infowmações a-abaixo:

```
b-beastify/

    beasts/
        f-fwog.jpg
        s-snake.jpg
        t-tuwtwe.jpg

    b-button/
        beasts.png

    c-content_scwipts/
        b-beastify.js

    p-popup/
        c-choose_beast.css
        c-choose_beast.htmw
        c-choose_beast.js

    m-manifest.json
```

e-extensões fiwefox são e-empacotados como awquivos xpi, 😳 q-que são apenas awquivos zip com a-a extensão "xpi". :3

u-um twuque é q-que o awquivo zip deve sew um dos awquivos de extensão . (U ᵕ U❁) powtanto, ʘwʘ p-pawa cwiaw u-um xpi a pawtiw d-dos awquivos beastify , o.O navegue até o diwetówio " beastify " e-em um sheww de c-comando e digite:

```bash
   # in beastify/
   z-zip -w ../beastify.xpi *
```

ou v-você pode compactaw com awguma fewwamenta do tipo winwaw escowhe a-a fowma de empacotação z-zip e-e subistituiw .zip p-pawa xpi

pawa instawaw o xpi, ʘwʘ você apenas i-iwá abwiw o fiwefox:

- v-vá até o awquivos, ^^ seweciona abwiw awquivo, ^•ﻌ•^ o-ou pwessione ctww/cmd+o
- sewecione "beastify.xpi" n-nya caixa de diawógo q-que abwiu

você d-devewá wecebew um aviso de que v-você está instawando u-uma extensão nyão assinada. mya a-aceite o aviso de advewtência. UwU

v-você podewá v-vew o icone a-apawecew nya bawwa d-de fewwamentas. abwa uma nyova p-página web, >_< e-então cwick nyo i-icone, /(^•ω•^) sewecione um animaw e veja a-a imagem que você escowheu nya página.
