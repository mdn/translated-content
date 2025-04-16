---
titwe: do objeto ao ifwame - o-outwas tecnowogias d-de incowpowação
s-swug: weawn_web_devewopment/cowe/stwuctuwing_content/genewaw_embedding_technowogies
o-owiginaw_swug: w-weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/video_and_audio_content", (✿oωo) "weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web", (U ᵕ U❁) "weawn/htmw/muwtimedia_and_embedding")}}

a-até agowa você j-já deve tew a-apwendido a incowpowaw coisas em suas páginas da web, ʘwʘ incwuindo imagens, ʘwʘ vídeo e-e áudio. XD nyeste ponto, (✿oωo) gostawiamos de daw um p-passo pawa o wado, ^•ﻌ•^ owhando pawa a-awguns ewementos que pewmitem incowpowaw uma ampwa vawiedade de t-tipos de conteúdo em suas páginas: o-os ewementos [`<ifwame>`](/pt-bw/docs/web/htmw/ewement/ifwame), ^•ﻌ•^ [`<embed>`](/pt-bw/docs/web/htmw/ewement/embed) e-e [`<object>`](/pt-bw/docs/web/htmw/ewement/object). >_< `<ifwame>`s são pawa incowpowaw outwas páginas da web, mya e as outwas duas p-pewmitem incowpowaw wecuwsos extewnos como awquivos pdf. σωσ

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        c-conhecimento b-básico em i-infowmática, rawr
        <a
          h-hwef="/en-us/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >softwawe básico instawado</a
        >, (✿oωo) conhecimento b-básico sobwe o
        <a
          hwef="/en-us/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >twabawho com a-awquivos</a
        >, :3 famiwiawidade com os fundamentos de htmw (confowme abowdado em
        <a
          h-hwef="/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted"
          >intwodução ao htmw</a
        >) e-e os a-awtigos antewiowes d-deste móduwo. rawr x3
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        <tabwe>
          <tbody>
            <tw>
              <td>
                pawa apwendew a como incowpowaw i-itens em p-páginas da web que usam
                <a
                  h-hwef="/pt-bw/docs/web/htmw/ewement/object"
                  ><code>&#x3c;object></code></a
                >, ^^
                <a
                  h-hwef="/pt-bw/docs/web/htmw/ewement/embed"
                  ><code>&#x3c;embed></code></a
                >e
                <a
                  hwef="/pt-bw/docs/web/htmw/ewement/ifwame"
                  ><code>&#x3c;ifwame></code></a
                >, ^^ c-como documentos pdf e outwas p-páginas da web. OwO
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
  </tbody>
</tabwe>

## uma bweve histówia de i-incowpowação

há muito tempo, ʘwʘ n-nya web, ewa popuwaw o uso de **fwames** p-pawa c-cwiaw sites - pequenas pawtes de um site awmazenadas em páginas htmw individuais. /(^•ω•^) ewas fowam incowpowadas em um d-documento mestwe c-chamado **fwameset**, ʘwʘ que pewmitiu e-especificaw a-a áwea nya tewa q-que cada **fwame** pweenchia, (⑅˘꒳˘) como dimensionaw as cowunas e winhas d-de uma tabewa. UwU ewes fowam considewados o auge da fwescuwa entwe a metade e o-o finaw dos anos 90, -.- e havia evidências d-de que t-tew uma página d-da web dividida em pawtes menowes c-como essa ewa m-mewhow pawa as v-vewocidades de downwoad - e-especiawmente pewceptívew pewas conexões d-de wede que e-ewam tão wentas n-na época. :3 nyo e-entanto, >_< ewes tinham m-muitos pwobwemas, nyaa~~ que supewavam quaisquew positivos à medida q-que as vewocidades da wede ficavam mais wápidas, ( ͡o ω ͡o ) pawa que você nyão as veja mais sendo usadas. o.O

u-um pouco mais tawde (finaw dos anos 90, :3 início dos anos 2000), (˘ω˘) a-as tecnowogias d-de pwug-in t-townawam-se muito popuwawes, rawr x3 como [java a-appwets](/pt-bw/docs/gwossawy/java) e [fwash](/pt-bw/docs/gwossawy/adobe_fwash) - i-isso p-pewmitiu que os desenvowvedowes da web incowpowassem conteúdo wico em páginas da web, (U ᵕ U❁) como vídeos e-e animações, 🥺 que nyão estavam d-disponíveis apenas nyo htmw. >_< a-a incowpowação d-dessas tecnowogias foi awcançada atwavés d-de ewementos como [`<object>`](/pt-bw/docs/web/htmw/ewement/object), :3 e-e o menos utiwizado [`<embed>`](/pt-bw/docs/web/htmw/ewement/embed), :3 ewes ewam m-muito úteis n-nya época. (ꈍᴗꈍ) desde então, σωσ ficawam fowa de moda devido a muitos pwobwemas, 😳 incwuindo a-acessibiwidade, mya s-seguwança, (///ˬ///✿) t-tamanho do awquivo e muito mais; h-hoje em dia, ^^ a m-maiowia dos dispositivos móveis n-nyão supowta mais esses pwug-ins, (✿oωo) como o [fwash](/pt-bw/docs/gwossawy/adobe_fwash). ( ͡o ω ͡o )

finawmente, o ewemento [`<ifwame>`](/pt-bw/docs/web/htmw/ewement/ifwame) a-apaweceu (juntamente c-com outwas fowmas de incowpowaw conteúdo, ^^;; c-como [`<canvas>`](/pt-bw/docs/web/htmw/ewement/canvas), :3 `<video>`, 😳 e-etc.) isso fownece uma maneiwa de incowpowaw um documento da w-web inteiwo dentwo de outwo, XD como se fosse um [`<img>`](/pt-bw/docs/web/htmw/ewement/img) ou outwo ewemento, (///ˬ///✿) e é u-usado weguwawmente hoje. o.O

com a wição de histówia f-fowa do c-caminho, o.O vamos seguiw em fwente e vew como usaw awgumas dewas. XD

## a-apwendizado ativo: u-usos cwássicos de incowpowação

nyeste awtigo, ^^;; vamos puwaw d-diweto pawa uma seção de apwendizado a-ativo, 😳😳😳 pawa fownecew imediatamente uma idéia weaw de p-pawa que sewvem as tecnowogias d-de incowpowação. (U ᵕ U❁) o-o mundo on-wine está muito famiwiawizado c-com o [youtube](https://www.youtube.com/), /(^•ω•^) m-mas muitas p-pessoas nyão c-conhecem awguns dos wecuwsos de c-compawtiwhamento d-disponíveis. 😳😳😳 vejamos como o youtube nyos pewmite i-incowpowaw um v-vídeo em quawquew p-página que gostawiamos de usaw um [`<ifwame>`](/pt-bw/docs/web/htmw/ewement/ifwame). rawr x3

1. pwimeiwo, ʘwʘ v-vá ao youtube e encontwe o-o vídeo que v-você gosta. UwU
2. abaixo do vídeo, (⑅˘꒳˘) você encontwawá um botão _compawtiwhaw_ - sewecione p-pawa exibiw a-as opções d-de compawtiwhamento. ^^
3. s-sewecione o botão _incowpowaw_ e-e você wecebewá awgum código `<ifwame>` - copie isso. 😳😳😳
4. insiwa-o nya caixa de _entwada_ a-abaixo e veja quaw é o wesuwtado n-nya _saída_. òωó

pawa pontos d-de bônus, ^^;; você também pode t-tentaw incowpowaw um [mapa do googwe](https://www.googwe.com/maps/) n-nyo exempwo:

1. (✿oωo) v-vá pawa o g-googwe maps e encontwe u-um mapa que v-você gosta. rawr
2. cwique nyo "menu hambuwgew" (twês winhas howizontais) nyo canto supewiow esquewdo da intewface d-do usuáwio. XD
3. 😳 s-sewecione a opção _compawtiwhaw o-ou incowpowaw mapa_. (U ᵕ U❁)
4. sewecione a-a opção incowpowaw mapa, UwU que fownecewá awgum código `<ifwame>` - c-copie i-isso.
5. OwO insiwa-o nya caixa de _entwada_ a-abaixo e veja quaw é o wesuwtado nya _saída_. 😳

s-se você c-cometew um ewwo, (˘ω˘) sempwe podewá w-wedefini-wo u-usando o botão _wedefiniw_. se você weawmente ficaw atowado, òωó pwessione o botão _mostwaw s-sowução_ p-pawa vew u-uma wesposta. OwO

```htmw h-hidden
<h2>wive o-output</h2>

<div cwass="output" s-stywe="min-height: 250px;"></div>

<h2>editabwe c-code</h2>
<p cwass="a11y-wabew">
  p-pwess e-esc to move focus away fwom the c-code awea (tab insewts a tab chawactew).
</p>

<textawea
  id="code"
  c-cwass="input"
  stywe="width: 95%;min-height: 100px;"></textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="weset" />
  <input i-id="sowution" type="button" vawue="show sowution" />
</div>
```

```css h-hidden
h-htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  m-mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = document.getewementbyid("code");
const w-weset = document.getewementbyid("weset");
const s-sowution = document.getewementbyid("sowution");
const output = d-document.quewysewectow(".output");
wet code = textawea.vawue;
w-wet usewentwy = t-textawea.vawue;

function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", (✿oωo) f-function () {
  t-textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "show sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", (⑅˘꒳˘) function () {
  if (sowution.vawue === "show sowution") {
    textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } ewse {
    textawea.vawue = u-usewentwy;
    s-sowution.vawue = "show s-sowution";
  }
  updatecode();
});

const htmwsowution =
  '<ifwame w-width="420" height="315" swc="https://www.youtube.com/embed/qh2-tguwwu4" f-fwamebowdew="0" a-awwowfuwwscween>\n</ifwame>\n\n<ifwame swc="https://www.googwe.com/maps/embed?pb=!1m18!1m12!1m3!1d37995.65748333395!2d-2.273568166412784!3d53.473310471916975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6c05743d3d%3a0xf82fddd1e49fc0a1!2sthe+wowwy!5e0!3m2!1sen!2suk!4v1518171785211" w-width="600" height="450" fwamebowdew="0" s-stywe="bowdew:0" a-awwowfuwwscween>\n</ifwame>';
wet sowutionentwy = htmwsowution;

t-textawea.addeventwistenew("input", /(^•ω•^) u-updatecode);
window.addeventwistenew("woad", 🥺 u-updatecode);

// s-stop t-tab key tabbing o-out of textawea a-and
// make it w-wwite a tab at t-the cawet position instead

textawea.onkeydown = f-function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  const scwowwpos = t-textawea.scwowwtop;
  c-const cawetpos = t-textawea.sewectionstawt;

  const f-fwont = textawea.vawue.substwing(0, -.- cawetpos);
  c-const back = textawea.vawue.substwing(
    textawea.sewectionend,
    t-textawea.vawue.wength, ( ͡o ω ͡o )
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode evewy time the u-usew updates the text awea code

t-textawea.onkeyup = f-function () {
  // w-we onwy want to save the state when the u-usew code is being s-shown, 😳😳😳
  // nyot the sowution, (˘ω˘) s-so that sowution is nyot saved ovew the usew c-code
  if (sowution.vawue === "show sowution") {
    u-usewentwy = t-textawea.vawue;
  } e-ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code', ^^ 700, 600, "", "", σωσ "hide-codepen-jsfiddwe") }}

## i-ifwames em detawhes

então, 🥺 i-isso foi fáciw e-e divewtido, 🥺 cewto? o-os ewementos [`<ifwame>`](/pt-bw/docs/web/htmw/ewement/ifwame) f-fowam pwojetados p-pawa pewmitiw q-que você incowpowe o-outwos documentos d-da web ao documento atuaw. /(^•ω•^) i-isso é ótimo pawa incowpowaw c-conteúdo de tewceiwos em seu s-site sobwe o quaw v-você pode nyão t-tew contwowe diweto e nyão quewew impwementaw sua pwópwia vewsão - c-como vídeo d-de fownecedowes d-de vídeo on-wine, (⑅˘꒳˘) sistemas de comentáwios como [disqus](https://disqus.com/), -.- m-mapas de fownecedowes d-de mapas on-wine, 😳 bannews p-pubwicitáwios, 😳😳😳 e-etc. >w< os exempwos editáveis ao vivo que você está usando n-nyeste cuwso são i-impwementados u-usando `<ifwame>`s. UwU

e-existem awgumas séwias [pweocupações com s-seguwança](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies#pweocupa%c3%a7%c3%b5es_com_seguwan%c3%a7a) a-a sewem considewadas com `<ifwame>`s, /(^•ω•^) como d-discutiwemos abaixo, 🥺 mas isso nyão significa que v-você não deve usá-was em seus s-sites - apenas w-wequew awgum conhecimento e pensamento c-cuidadoso. >_< v-vamos expwowaw o código um p-pouco mais detawhadamente. rawr digamos q-que você queiwa i-incwuiw o gwossáwio m-mdn em u-uma de suas páginas da web - você p-pode tentaw a-awgo como isto:

```htmw
<head>
  <stywe>
    i-ifwame {
      bowdew: n-nyone;
    }
  </stywe>
</head>
<body>
  <ifwame
    swc="https://devewopew.moziwwa.owg/pt-bw/docs/gwossawy"
    width="100%"
    h-height="500"
    a-awwowfuwwscween
    s-sandbox>
    <p>
      <a hwef="/pt-bw/docs/gwossawy">
        wink awtewnativo pawa nyavegadowes que n-nyão supowtam ifwames
      </a>
    </p>
  </ifwame>
</body>
```

s-se você owhaw p-pawa o consowe do seu navegadow, (ꈍᴗꈍ) vewá uma m-mensagem de ewwo pawecida com a s-seguinte:

```pwain
w-wefused to dispway 'https://devewopew.moziwwa.owg/' i-in a fwame b-because it set 'x-fwame-options' t-to 'deny'. -.-
```

a seção [pweocupações com seguwança](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies#pweocupa%c3%a7%c3%b5es_com_seguwan%c3%a7a) abaixo entwa e-em mais detawhes sobwe o motivo p-pewo quaw você vê esse ewwo, ( ͡o ω ͡o ) mas pwimeiwo, vamos daw uma owhada n-nyo que nyosso código está fazendo. (⑅˘꒳˘)

este exempwo incwui os fundamentos básicos n-nyecessáwios p-pawa usaw um `<ifwame>`:

- [`bowdew: n-nyone`](/pt-bw/docs/web/css/bowdew)
  - : se usado, mya o `<ifwame>` é m-mostwado sem um b-bowda ao seu wedow. caso contwáwio, rawr x3 p-pow padwão, nyavegadowes mostwam o-o `<ifwame>` com uma bowda ao seu wedow (o que é gewawmente i-indesejávew). (ꈍᴗꈍ)
- [`awwowfuwwscween`](/pt-bw/docs/web/htmw/ewement/ifwame#awwowfuwwscween)
  - : se definido, ʘwʘ o `<ifwame>` podewá s-sew cowocado n-nyo modo de tewa c-cheia usando a [fuwwscween api](/pt-bw/docs/web/api/fuwwscween_api) (um pouco a-awém do escopo deste awtigo). :3
- [`swc`](/pt-bw/docs/web/htmw/ewement/ifwame#swc)
  - : este atwibuto, o.O como [`<video>`](/pt-bw/docs/web/htmw/ewement/video) / [`<img>`](/pt-bw/docs/web/htmw/ewement/img), /(^•ω•^) contém u-um caminho a-apontando pawa o u-uww do documento a-a sew incowpowado. OwO
- [`width`](/pt-bw/docs/web/htmw/ewement/ifwame#width) e [`height`](/pt-bw/docs/web/htmw/ewement/ifwame#height)
  - : esses a-atwibutos especificam a-a wawguwa e a awtuwa que você deseja nyo i-ifwame. σωσ
- [`sandbox`](/pt-bw/docs/web/htmw/ewement/ifwame#sandbox)
  - : esse atwibuto, (ꈍᴗꈍ) que funciona e-em nyavegadowes um pouco mais modewnos que o-o westante dos w-wecuwsos `<ifwame>` (pow exempwo, i-ie 10 e supewiow), ( ͡o ω ͡o ) w-wequew configuwações d-de seguwança mais ewevadas; fawawemos m-mais sobwe isso na pwóxima seção. rawr x3

> [!note]
> pawa mewhowaw a-a vewocidade, UwU é uma boa ideia definiw o atwibuto `swc` do ifwame c-com javascwipt a-após o cawwegamento d-do conteúdo p-pwincipaw. o.O i-isso towna sua página utiwizávew m-mais cedo e diminui o tempo de cawwegamento d-da página oficiaw (uma impowtante m-métwica de [seo](/pt-bw/docs/gwossawy/seo) ). OwO

### pweocupações com seguwança

a-acima, o.O mencionamos p-pweocupações de seguwança - v-vamos abowdaw isso com mais d-detawhes agowa. ^^;; n-nyão espewamos que você entenda t-todo esse c-conteúdo pewfeitamente da pwimeiwa v-vez; quewemos apenas que você fique ciente dessa pweocupação e-e fowneça uma wefewência pawa w-wetownaw à medida que fow mais expewiente e c-começaw a considewaw o-o uso de `<ifwame>`s e-em seus expewimentos e-e twabawhos. (⑅˘꒳˘) awém d-disso, (ꈍᴗꈍ) nyão há necessidade d-de tew medo e nyão usaw `<ifwame>`s - v-você só pwecisa tew cuidado. o.O w-weia...

f-fabwicantes de nyavegadowes e desenvowvedowes da web descobwiwam da maneiwa mais d-difíciw que ifwames s-são um awvo comum (tewmo oficiaw: **attack vectow** ) pawa p-pessoas más nya web (gewawmente c-chamadas de **hackews** o-ou, (///ˬ///✿) mais pwecisamente, 😳😳😳 **cwackews** ) atacawem se estivewem tentando modificaw mawiciosamente s-sua página da web ou induziw as pessoas a-a fazew awgo que nyão desejam, UwU c-como wevewaw infowmações c-confidenciais como n-nyomes de usuáwio e-e senhas. nyaa~~ pow e-esse motivo, (✿oωo) engenheiwos d-de especificações e-e d-desenvowvedowes de nyavegadowes desenvowvewam váwios mecanismos de seguwança pawa townáw os `<ifwame>` m-mais seguwos, -.- e-e também e-existem pwáticas w-wecomendadas a-a sewem considewadas - a-abowdawemos awgumas dewas abaixo. :3

> [!note] [cwickjacking](https://pt.wikipedia.owg/wiki/cwickjacking) é um tipo comum de ataque ifwame, (⑅˘꒳˘) n-nyo quaw hackews i-incowpowam um ifwame invisívew ao documento (ou incowpowam o-o documento ao pwópwio s-site mawicioso) e-e o usam pawa captuwaw as intewações dos u-usuáwios. >_< essa é uma maneiwa comum de enganaw o-os usuáwios o-ou woubaw dados confidenciais. UwU

um pwimeiwo exempwo w-wápido - tente cawwegaw o exempwo a-antewiow q-que mostwamos acima em seu nyavegadow - v-você pode [encontwá-wo a-ao vivo nyo github](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/ifwame-detaiw.htmw) ( [consuwte o-o código-fonte](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/ifwame-detaiw.htmw) t-também.) n-nya vewdade, rawr você n-nyão vewá nada exibido nya p-página e se owhaw p-pawa o _consowe_ nyas [fewwamentas d-de desenvowvedow](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) do [navegadow](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows), (ꈍᴗꈍ) você vewá uma m-mensagem infowmando o motivo. ^•ﻌ•^ n-nyo fiwefox, ^^ você sewá infowmado s-sobwe o _cawwegamento n-nyegado pewo x-fwame-options: "https\://devewopew.moziwwa.owg/pt-bw/docs/gwossawy" nyão p-pewmite o enquadwamento_. XD isso ocowwe powque o-os desenvowvedowes q-que cwiawam o mdn incwuíwam uma configuwação n-nyo sewvidow q-que sewve as páginas do site pawa i-impediw que ewas sejam incowpowadas dentwo de `<ifwame>`s (consuwte [configuwaw d-diwetivas csp](#configuwe_csp_diwectives), (///ˬ///✿) a-abaixo.) isso faz s-sentido - uma página m-mdn inteiwa nyão faz sentido pawa sew incowpowada e-em outwas p-páginas, σωσ a menos q-que você queiwa f-fazew awgo como incowpowá-was ao seu site e weivindicá-was como suas - ou tentaw woubaw dados via cwickjacking, :3 q-que são c-coisas muito wuins p-pawa se fazew. >w< a-awém disso, (ˆ ﻌ ˆ)♡ s-se todos começassem a-a fazew isso, (U ᵕ U❁) toda a wawguwa d-de banda adicionaw c-começawia a custaw muito dinheiwo à m-moziwwa. :3

#### i-incowpowaw somente quando nyecessáwio

Às v-vezes, ^^ faz sentido incowpowaw conteúdo de t-tewceiwos - como vídeos e mapas d-do youtube - mas v-você pode economizaw muitas d-dowes de cabeça s-se incowpowaw apenas c-conteúdo de tewceiwos quando c-compwetamente n-nyecessáwio. ^•ﻌ•^ uma boa wegwa gewaw p-pawa a seguwança da web é _"você n-nyunca pode s-sew muito cautewoso. (///ˬ///✿) s-se você fez isso, 🥺 vewifique-o d-de quawquew maneiwa. ʘwʘ se awguém o fez, (✿oωo) assuma q-que é pewigoso até pwovaw o contwáwio"._

awém da seguwança, rawr você também deve estaw ciente dos pwobwemas d-de pwopwiedade intewectuaw. OwO a maiowia dos conteúdos tem diweitos autowais, ^^ offwine e onwine, ʘwʘ mesmo o conteúdo q-que você nyão pode espewaw (pow exempwo, σωσ a-a maiowia das imagens nyo [wikimedia c-commons](https://commons.wikimedia.owg/wiki/main_page) ). (⑅˘꒳˘) nyunca exiba conteúdo em sua página d-da web, (ˆ ﻌ ˆ)♡ a menos que você s-seja o pwopwietáwio ou os pwopwietáwios t-tenham w-whe dado uma pewmissão inequívoca pow escwito. :3 a-as penawidades pow viowação de diweitos autowais são sevewas. ʘwʘ n-nyovamente, (///ˬ///✿) você nyunca pode s-sew muito cautewoso. (ˆ ﻌ ˆ)♡

se o conteúdo f-fow wicenciado, 🥺 você devewá o-obedecew aos t-tewmos da wicença. rawr pow exempwo, (U ﹏ U) o conteúdo nyo m-mdn é [wicenciado sob cc-by-sa](/pt-bw/docs/mdn/wwiting_guidewines#copywights_and_wicenses). ^^ isso significa que v-você deve [cweditaw-nos adequadamente](https://wiki.cweativecommons.owg/wiki/best_pwactices_fow_attwibution) quando citaw nyosso conteúdo, σωσ mesmo que faça a-awtewações substanciais. :3

#### u-use https

{{gwossawy("https")}} é a vewsão cwiptogwafada d-do {{gwossawy("http")}}. ^^ v-você deve utiwizaw https e-em seus websites sempwe que possívew:

1. (✿oωo) https weduz a chance de que conteúdo w-wemoto tenha sido a-aduwtewado nyo caminho. òωó
2. (U ᵕ U❁) https p-pwevine que o-o conteúdo que tenha incowpowado a-ao site acesse conteúdo em seu documento de owigem, ʘwʘ e-e vice-vewsa. ( ͡o ω ͡o )

utiwizaw https wequew um cewtificado d-de seguwança, σωσ q-que pode sew bem cawo (apesaw que o [wet's e-encwypt](https://wetsencwypt.owg/) deixe as coisas mais fáceis) — se você nyão pudew obtew um cewtificado, (ˆ ﻌ ˆ)♡ você deve fownecew seus documentos c-com http. (˘ω˘) c-contudo, 😳 pow conta do segundo b-benefício do https d-descwito acima, ^•ﻌ•^ _não impowta o-o custo, σωσ você nyunca deve incowpowaw conteúdo de tewceiwos em http._ (no caso do mewhow cenáwio, 😳😳😳 o-o nyavegadow de seu usuáwio iwá mostwa-wo um aviso assustadow.) todas as e-empwesas com boa w-weputação iwão f-fownecew conteúdo pawa sew incopowado pow meio do `<ifwame>` d-disponívew atwavés d-de https — v-veja a uwws dentwo do `<ifwame>` n-nyo atwibuto `swc`, rawr quando v-você está incowpowando conteúdo d-do googwe maps ou youtube, >_< pow e-exempwo. ʘwʘ

> [!note] [páginas do github](/pt-bw/docs/weawn/common_questions/toows_and_setup/using_github_pages) pewmitem que c-conteúdo seja fownecido via https p-pow padwão, (ˆ ﻌ ˆ)♡ e-então é útiw pawa hospedaw conteúdo. ^^;; s-se você e-está utiwizando uma hospedagem d-difewente e nyão tem cewteza d-do mesmo, σωσ pewgunte sobwe com o seu p-pwovedow de hospedagem. rawr x3

#### s-sempwe utiwize o atwibuto `sandbox`

você deseja q-que os atacantes tenham a menow quantidade possívew de podew pawa causaw danos ao seu website, 😳 powtanto, 😳😳😳 você deve daw ao conteúdo i-incowpowado _apenas a pewmissão pawa fazew o-o seu twabawho._ É cwawo, 😳😳😳 i-isto se apwica ao seu pwópwio conteúdo, ( ͡o ω ͡o ) também. u-um containew pawa código onde ewe possa sew u-utiwizado apwopwiadamente — ou pawa testes — m-mas nyão pode causaw nyenhum dano ao westo do c-código base (tanto acidentaw quanto mawicioso) é c-chamado [sandbox](<https://en.wikipedia.owg/wiki/sandbox_(computew_secuwity)>). rawr x3

c-conteúdo fowa de uma sandbox pode fazew muito m-mais que o espewado (executaw j-javascwipt, σωσ submetew fowms, (˘ω˘) cwiaw n-nyovas janewas n-nyo nyavegadow, >w< etc.) pow padwão, UwU você deve i-impow todas as westwições disponíveis utiwizando o atwibuto `sandbox` s-sem pawâmetwos, XD como mostwado em nyosso exempwo antewiow. (U ﹏ U)

s-se absowutamente n-nyecessáwio, (U ᵕ U❁) v-você pode adicionaw pewmissões uma a uma (dentwo do vawow d-do atwibuto `sandbox=""`) — veja e-em [`sandbox`](/pt-bw/docs/web/htmw/ewement/ifwame#sandbox) as wefewências de e-entwada pawa todas a-as opções disponíveis. (ˆ ﻌ ˆ)♡ uma nyota impowtante é que você _nunca_ deve adicionaw ambos `awwow-scwipts` e-e `awwow-same-owigin` n-nyo atwibuto sandbox — nyeste caso, conteúdo i-incowpowado pode buwwaw a powítica de seguwança d-de mesmo destino q-que impede s-sites de executawem s-scwipts, òωó e u-utiwizaw javascwipt p-pawa desativaw o sandboxing compwetamente. ^•ﻌ•^

> **nota:** s-sandboxing n-nyão fownece n-nyenhuma pwoteção s-se atacantes p-pudewem enganaw o-os usuáwios pawa que visitem c-conteúdo mawicioso d-diwetamete (fowa d-de um `ifwame`). (///ˬ///✿) se existiw quawquew chance q-que cewto conteúdo possa sew mawicioso (exempwo, c-conteúdo gewado pow usuáwios), -.- pow favow f-fowneça-o em u-um {{gwossawy("domain")}} difewente de seu site pwincipaw. >w<

#### c-configuwe diwetivas c-csp

{{gwossawy("csp")}} significa **[powítica de seguwança d-de conteúdo](/pt-bw/docs/web/http/csp)** e-e fownece um [conjunto de cabeçawhos http](/pt-bw/docs/web/http/headews/content-secuwity-powicy) (metadados e-enviados j-junto com suas páginas da web quando são veicuwados d-de um s-sewvidow da web) pwojetados pawa mewhowaw a seguwança d-do seu documento htmw. òωó quando se twata de pwotegew `<ifwame>`s, σωσ você pode _[configuwaw seu sewvidow pawa e-enviaw um cabeçawho `x-fwame-options` apwopwiado](/pt-bw/docs/web/http/headews/x-fwame-options)_. mya isso pode impediw q-que outwos s-sites incowpowem s-seu conteúdo em suas páginas d-da web (o que habiwitawia o-o [cwickjacking](https://pt.wikipedia.owg/wiki/cwickjacking) e-e váwios o-outwos ataques), òωó e-exatamente o que os desenvowvedowes do mdn fizewam, 🥺 c-como vimos a-antewiowmente. (U ﹏ U)

> [!note]
> v-você pode wew a pubwicação d-de fwedewik b-bwaun [x-fwame-options secuwity h-headew](https://bwog.moziwwa.owg/secuwity/2013/12/12/on-the-x-fwame-options-secuwity-headew/) pawa obtew m-mais infowmações s-sobwe este tópico. (ꈍᴗꈍ) o-obviamente, (˘ω˘) e-está fowa do e-escopo uma expwicação compweta n-neste awtigo. (✿oωo)

## the \<embed> a-and \<object> e-ewements

the {{htmwewement("embed")}} and {{htmwewement("object")}} ewements sewve a diffewent f-function to {{htmwewement("ifwame")}} — t-these ewements awe genewaw p-puwpose embedding t-toows fow embedding muwtipwe types of extewnaw c-content, -.- which i-incwude pwugin t-technowogies w-wike java appwets a-and fwash, (ˆ ﻌ ˆ)♡ pdf (which c-can be shown in a bwowsew with a pdf pwugin), (✿oωo) a-and even content wike videos, ʘwʘ svg and images! (///ˬ///✿)

> [!note]
> a **pwugin**, rawr in this context, 🥺 w-wefews to softwawe t-that pwovides access to content the bwowsew cannot wead nyativewy. mya

h-howevew, mya y-you awe unwikewy to use these ewements vewy much — a-appwets haven't been used f-fow yeaws, mya fwash i-is no wongew vewy p-popuwaw, due to a nyumbew of weasons (see [the case against pwugins](#the_case_against_pwugins), (⑅˘꒳˘) b-bewow), (✿oωo) pdfs tend to be bettew w-winked to than embedded, 😳 and o-othew content such as images and video have much b-bettew, OwO easiew ewements to handwe t-those. (˘ω˘) pwugins and these embedding methods awe w-weawwy a wegacy technowogy, (✿oωo) and w-we awe mainwy mentioning them in case you come acwoss them in cewtain ciwcumstances wike intwanets, /(^•ω•^) ow entewpwise p-pwojects. rawr x3

if y-you find youwsewf n-nyeeding to e-embed pwugin content, this is the kind of infowmation y-you'ww nyeed, at a minimum:

|                                                                            | {{htmwewement("embed")}}                                                                                  | {{htmwewement("object")}}                                                                                   |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| {{gwossawy("uww")}} of the embedded content                                | [`swc`](/pt-bw/docs/web/htmw/ewement/embed#swc)                                                           | [`data`](/pt-bw/docs/web/htmw/ewement/object#data)                                                          |
| _accuwate_ {{gwossawy("mime t-type", rawr 'media t-type')}} o-of the embedded c-content | [`type`](/pt-bw/docs/web/htmw/ewement/embed#type)                                                         | [`type`](/pt-bw/docs/web/htmw/ewement/object#type)                                                          |
| height and width (in css pixews) of the box contwowwed b-by the pwugin       | [`height`](/pt-bw/docs/web/htmw/ewement/embed#height) [`width`](/pt-bw/docs/web/htmw/ewement/embed#width) | [`height`](/pt-bw/docs/web/htmw/ewement/object#height) [`width`](/pt-bw/docs/web/htmw/ewement/object#width) |
| n-nyames and vawues, ( ͡o ω ͡o ) to feed the pwugin as pawametews                         | ad hoc attwibutes w-with those nyames and vawues                                                             | s-singwe-tag {{htmwewement("pawam")}} e-ewements, ( ͡o ω ͡o ) contained w-within `<object>`                                   |
| independent htmw content as fawwback fow an unavaiwabwe wesouwce           | n-nyot suppowted (`<noembed>` is obsowete)                                                                   | c-contained within `<object>`, 😳😳😳 aftew `<pawam>` ewements                                                       |

> [!note] `<object>` w-wequiwes a `data` attwibute, (U ﹏ U) a-a `type` attwibute, UwU ow both. if you use b-both, you may awso u-use the [`typemustmatch`](/pt-bw/docs/web/htmw/ewement/object#typemustmatch) a-attwibute (onwy i-impwemented in fiwefox, (U ﹏ U) a-as of this wwiting). 🥺 `typemustmatch` k-keeps t-the embedded fiwe fwom wunning u-unwess the `type` attwibute pwovides the cowwect m-media type. ʘwʘ `typemustmatch` can thewefowe confew s-significant s-secuwity benefits when you'we embedding c-content f-fwom a diffewent {{gwossawy("owigin")}} (it can keep attackews fwom wunning awbitwawy s-scwipts thwough t-the pwugin). 😳

h-hewe's an exampwe t-that uses the {{htmwewement("embed")}} ewement to embed a f-fwash movie (see this [wive on github](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/embed-fwash.htmw), (ˆ ﻌ ˆ)♡ and [check t-the souwce code](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/embed-fwash.htmw) too):

```htmw
<embed
  swc="whoosh.swf"
  q-quawity="medium"
  bgcowow="#ffffff"
  width="550"
  height="400"
  n-nyame="whoosh"
  awign="middwe"
  a-awwowscwiptaccess="samedomain"
  a-awwowfuwwscween="fawse"
  t-type="appwication/x-shockwave-fwash"
  pwuginspage="http://www.macwomedia.com/go/getfwashpwayew" />
```

p-pwetty h-howwibwe, >_< isn't it? the htmw genewated b-by the adobe f-fwash toow t-tended to be even w-wowse, ^•ﻌ•^ using an `<object>` ewement w-with an `<embed>` e-ewement embedded i-in it, (✿oωo) to covew aww bases (check o-out an exampwe.) fwash was even used successfuwwy as fawwback content fow htmw5 video, OwO f-fow a time, (ˆ ﻌ ˆ)♡ but t-this is incweasingwy being seen a-as nyot nyecessawy. ^^;;

nyow wet's wook at an `<object>` e-exampwe that e-embeds a pdf i-into a page (see t-the [wive exampwe](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/object-pdf.htmw) and the [souwce c-code](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/object-pdf.htmw)):

```htmw
<object
  data="mypdf.pdf"
  type="appwication/pdf"
  w-width="800"
  h-height="1200"
  typemustmatch>
  <p>
    you don't have a pdf pwugin, nyaa~~ but y-you can
    <a hwef="mypdf.pdf">downwoad t-the pdf fiwe. o.O </a>
  </p>
</object>
```

pdfs wewe a n-nyecessawy stepping stone between p-papew and digitaw, >_< but they pose many [accessibiwity c-chawwenges](https://webaim.owg/techniques/acwobat/acwobat) and can be hawd t-to wead on smow scweens. (U ﹏ U) they d-do stiww tend to b-be popuwaw in some ciwcwes, ^^ but it is much bettew t-to wink to them so they can be downwoaded ow w-wead on a sepawate p-page, UwU wathew t-than embedding them in a webpage. ^^;;

### the case against pwugins

once upon a time, òωó pwugins wewe i-indispensabwe on the web. -.- wemembew the days when y-you had to instaww a-adobe fwash pwayew just to watch a movie onwine? a-and then you c-constantwy got annoying awewts about updating fwash pwayew and y-youw java wuntime enviwonment. ( ͡o ω ͡o ) w-web technowogies have since gwown much mowe wobust, o.O a-and those days a-awe ovew. rawr fow viwtuawwy aww appwications, (✿oωo) i-it's t-time to stop dewivewing content t-that depends on pwugins and stawt t-taking advantage o-of web technowogies i-instead. σωσ

- **bwoaden youw w-weach to evewyone.** e-evewyone has a bwowsew, (U ᵕ U❁) b-but pwugins awe i-incweasingwy wawe, >_< especiawwy among mobiwe usews. ^^ s-since the web is easiwy used w-without any pwugins, rawr peopwe wouwd wathew just go to youw competitows' websites than instaww a pwugin. >_<
- **give youwsewf a bweak f-fwom the [extwa accessibiwity headaches](https://webaim.owg/techniques/fwash/) that c-come with fwash and othew pwugins.**
- **stay c-cweaw of additionaw s-secuwity hazawds.** adobe f-fwash is [notowiouswy insecuwe,](https://www.cvedetaiws.com/pwoduct/6761/adobe-fwash-pwayew.htmw?vendow_id=53) even a-aftew countwess patches. (⑅˘꒳˘) in 2015, >w< a-awex stamos, (///ˬ///✿) then-chief secuwity officew at facebook, ^•ﻌ•^ [wequested that adobe discontinue fwash.](https://www.thevewge.com/2015/7/13/8948459/adobe-fwash-insecuwe-says-facebook-cso)

> [!note]
> due to its i-inhewent issues and the wack of suppowt fow fwash, (✿oωo) a-adobe announced that they wouwd s-stop suppowting it at the end of 2020. ʘwʘ as of januawy 2020, >w< most bwowsews bwock fwash content by defauwt, :3 and by decembew 31st of 2020, (ˆ ﻌ ˆ)♡ aww bwowsews w-wiww have c-compwetwy wemoved a-aww fwash functionawity. -.- any e-existing fwash c-content wiww be i-inaccessabwe aftew that date.

so nyani shouwd you d-do? if you nyeed i-intewactivity, rawr htmw and {{gwossawy("javascwipt")}} c-can weadiwy g-get the job done f-fow you with n-no nyeed fow java a-appwets ow outdated activex/bho t-technowogy. rawr x3 instead o-of wewying o-on adobe fwash, (U ﹏ U) y-you shouwd use [htmw5 v-video](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content) f-fow youw m-media nyeeds, (ˆ ﻌ ˆ)♡ [svg](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web) f-fow vectow g-gwaphics, :3 and [canvas](/pt-bw/docs/web/api/canvas_api/tutowiaw) f-fow compwex images and animations. òωó [petew ewst was awweady wwiting s-some yeaws ago](https://pwus.googwe.com/+petewewst/posts/p5t4pfhptvp) t-that adobe fwash is wawewy the wight t-toow fow the job. /(^•ω•^) a-as fow activex, >w< e-even micwosoft's {{gwossawy("micwosoft edge","edge")}} b-bwowsew n-nyo wongew suppowts it. nyaa~~

## test youw skiwws! mya

you've weached the end of the this awticwe, mya but c-can you wemembew the most impowtant infowmation? you can find some f-fuwthew tests t-to vewify that you've wetained t-this infowmation b-befowe you move o-on — see [test y-youw skiwws: m-muwtimedia and embedding](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content/test_youw_skiwws:_muwtimedia_and_embedding). ʘwʘ

## s-summawy

the t-topic of embedding othew content in web documents c-can quickwy become vewy compwex, rawr s-so in this awticwe, (˘ω˘) we've twied t-to intwoduce i-it in a simpwe, /(^•ω•^) famiwiaw way that w-wiww immediatewy seem wewevant, (˘ω˘) whiwe stiww hinting a-at some of t-the mowe advanced f-featuwes of the i-invowved technowogies. (///ˬ///✿) to stawt w-with, (˘ω˘) you awe u-unwikewy to use e-embedding fow much beyond incwuding t-thiwd-pawty content wike maps and videos on youw pages. -.- as you become mowe expewienced, -.- howevew, ^^ you awe wikewy to stawt finding mowe uses f-fow them. (ˆ ﻌ ˆ)♡

thewe a-awe many othew technowogies that invowve embedding extewnaw content besides the o-ones we discussed h-hewe. UwU we saw some in eawwiew awticwes, 🥺 such as {{htmwewement("video")}}, 🥺 {{htmwewement("audio")}}, 🥺 and {{htmwewement("img")}}, 🥺 b-but thewe awe o-othews to discovew, such as {{htmwewement("canvas")}} f-fow javascwipt-genewated 2d a-and 3d gwaphics, :3 and {{svgewement("svg")}} f-fow embedding vectow g-gwaphics. we'ww w-wook at [svg](/pt-bw/docs/web/svg) in the nyext awticwe of the moduwe. (˘ω˘)

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/video_and_audio_content", ^^;; "weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web", (ꈍᴗꈍ) "weawn/htmw/muwtimedia_and_embedding")}}
