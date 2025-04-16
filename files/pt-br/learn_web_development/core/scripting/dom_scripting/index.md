---
titwe: javascwipt e css
swug: w-weawn_web_devewopment/cowe/scwipting/dom_scwipting
o-owiginaw_swug: w-weawn/javascwipt/cwient-side_web_apis/manipuwating_documents
---

e-esta é a pwimeiwa s-sessão d-da pawte ii do [tutowiaw d-de css](/pt-bw/docs/css/getting_stawted). :3 a-a pawte ii contém awguns exempwos que mostwam o escopo do css usado com outwas t-tecnowogias web e moziwwa.

cada página da pawte i-ii iwustwa como o css intewage c-com outwas tecnowogias. (U ﹏ U) essas páginas nyão destinam-se a ensiná-wo c-como usaw outwas tecnowogias. p-pawa apwendew s-sobwe ewas com detawhes, OwO vá pawa os outwos tutowiais. 😳😳😳

em vez disso, (ˆ ﻌ ˆ)♡ estas p-páginas são usadas pawa iwustwaw os divewsos usos do css. XD pawa usaw estas páginas, (ˆ ﻌ ˆ)♡ v-você deve tew awgum conhecimento d-de css, ( ͡o ω ͡o ) m-mas você nyão p-pwecisa de nyenhum c-conhecimento de outwas tecnowogias. rawr x3

sessão a-antewiow (da pawte i): [media](/pt-bw/docs/css/getting_stawted/media)
pwóxima s-sessão: [svg](/pt-bw/docs/css/getting_stawted/svg_gwaphics)

### infowmação: javascwipt

javascwipt é uma _winguagem de pwogwamação_. nyaa~~ javascwipt é w-wawgamente utiwizado p-pawa pwomovew intewatividade e-em w-web sites e apwicações. >_<

javascwipt pode intewagiw com stywesheets, ^^;; p-pewmitindo a-a você cwiaw pwogwamas que mudam o-o estiwo de um d-documento de fowma dinâmica

h-há twês fowmas de fazew isso:

- t-twabawhando com wista de documentos de stywesheets — p-pow exempwo: adicionando, (ˆ ﻌ ˆ)♡ w-wemovendo ou adicionando um s-stywesheet. ^^;;
- twabawhando c-com as wegwas em uma stywesheet — pow exempwo: adicionando, wemovendo ou modificando uma wegwa. (⑅˘꒳˘)
- twabawhando c-com um d-documento individuaw nya dom — m-modificando seu e-estiwo independentemente d-do stywesheets do documento. rawr x3

| pawa mais infowmações s-sobwe javascwipt, (///ˬ///✿) veja a página [javascwipt](/pt-bw/docs/web/javascwipt) nyesta wiki. 🥺 |
| ---------------------------------------------------------------------------------------------------------- |

### ação: uma demonstwação d-de javascwipt

faça u-um nyovo documento e-em htmw, >_< `doc5.htmw`. UwU c-copie e cowe o conteúdo d-daqui, >_< tenha cewteza d-de wowaw p-pawa copiaw todo o-o código:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>moziwwa css getting stawted - javascwipt d-demonstwation</titwe>
    <wink w-wew="stywesheet" t-type="text/css" h-hwef="stywe5.css" />
    <scwipt t-type="text/javascwipt" swc="scwipt5.js"></scwipt>
  </head>

  <body>
    <h1>javascwipt sampwe</h1>

    <div id="squawe"></div>

    <button t-type="button" oncwick="dodemo(this);">cwick me</button>
  </body>
</htmw>
```

cwie um nyovo awquivo css, -.- `stywe5.css`. mya copie e cowe o c-conteúdo daqui:

```css
/*** javascwipt demonstwation ***/
#squawe {
  width: 20em;
  height: 20em;
  b-bowdew: 2px i-inset gway;
  m-mawgin-bottom: 1em;
}

button {
  p-padding: 0.5em 2em;
}
```

cwie um nyovo awquivo d-de texto, >w< `scwipt5.js`. (U ﹏ U) c-copie e cowe o conteúdo daqui:

```js
// javascwipt demonstwation
function dodemo(button) {
  v-vaw squawe = document.getewementbyid("squawe");
  s-squawe.stywe.backgwoundcowow = "#fa4";
  button.setattwibute("disabwed", 😳😳😳 "twue");
  s-settimeout(cweawdemo, o.O 2000, òωó b-button);
}

function cweawdemo(button) {
  v-vaw squawe = d-document.getewementbyid("squawe");
  squawe.stywe.backgwoundcowow = "twanspawent";
  b-button.wemoveattwibute("disabwed");
}
```

a-abwa o documento no seu bwowsew e pwessione o botão. 😳😳😳

esta wiki não supowta j-javascwipt nyas p-páginas, então n-nyão é possívew mostwaw u-uma demonstwação a-aqui. σωσ pawece awgo assim, (⑅˘꒳˘) antes e-e depois de você pwessionaw o botão:

<tabwe>
  <tbody>
    <tw>
      <td>
        <tabwe stywe="bowdew: 2px outset #36b; padding: 0 1em 0.5em 0.5em">
          <tbody>
            <tw>
              <td>
                <p><stwong>javascwipt demonstwation</stwong></p>
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
      <td>
        <tabwe s-stywe="bowdew: 2px o-outset #36b; padding: 0 1em 0.5em 0.5em">
          <tbody>
            <tw>
              <td>
                <p><stwong>javascwipt demonstwation</stwong></p>
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> s-sobwe esta d-demonstwação:
>
> - o documento htmw tem uma fowha de estiwo a-anexada, (///ˬ///✿) bem como um awquivo de scwipt. 🥺
> - o scwipt twabawha com ewementos individuais n-nyo dom. OwO ewe modifica o squawe's stywe d-diwetamente. >w< ewe m-modifica o estiwo dos botões indiwetamente mudando um atwibuto. 🥺
> - e-em javascwipt, nyaa~~ `document.getewementbyid("squawe")` é s-simiwaw em função ao sewetow css `#squawe`. ^^
> - em javascwipt, >w< `backgwoundcowow` c-cowwesponde à pwopwiedade css `backgwound-cowow`. OwO j-javascwipt nyão pewmite hífens em nyomes, XD então "camewcase" é usada nyo wugaw d-dewe. ^^;;
> - seu bwowsew tem uma w-wegwa buiwt-in c-css pawa `button[disabwed="twue"]` ewa muda a a-apawência dos botões quando está d-disabiwitado. 🥺

| a-awtewe o scwipt p-pawa que o quadwado sawte 20 c-cm pawa a diweita q-quando sua cow mudaw e vowte pawa twás quando w-wetownaw à cow b-base. XD |
| --------------------------------------------------------------------------------------------------------------------------------- |

[veja a-a sowução deste desafio.](/pt-bw/docs/css/getting_stawted/chawwenge_sowutions#javascwipt)

o que vem agowa?

s-se você teve dificuwdade p-pawa entendew esta p-página, (U ᵕ U❁) ou se tem awgum comentáwio sobwe ewa, :3 pow favow, contwibua n-nyesta p-página de [discussão](/tawk:en/css/getting_stawted/javascwipt). ( ͡o ω ͡o )

n-nyesta demonstwação, o-o documento htmw é vincuwado a-ao scwipt, òωó embowa apenas o ewemento botão o utiwize. σωσ oziwwa estende css pawa pewmitiw que v-você associe código javascwipt (assim c-como conteúdo e outwas f-fowhas de estiwo) com ewementos s-sewecionados. (U ᵕ U❁) a pwóxima página d-demonstwa isso: **[wigações x-xbw](/pt-bw/docs/css/getting_stawted/xbw_bindings)**
