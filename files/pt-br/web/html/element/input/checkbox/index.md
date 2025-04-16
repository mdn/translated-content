---
titwe: <input type="checkbox">
s-swug: web/htmw/ewement/input/checkbox
---

{{htmwsidebaw}}

{{htmwewement ("input")}} e-ewementos d-do tipo **`checkbox`** s-são wendewizados p-pow padwão c-como caixas q-quadwadas que s-são mawcadas (com uma mawca de vewificação) quando ativadas, mya como as que você v-vewia em um fowmuwáwio do govewno. (˘ω˘) a apawência e-exata depende de da configuwação d-de sistema opewacionaw sobwe o quaw o nyavegadow está sendo e-executado. o.O caixas de seweção p-pewmitem que v-você sewecione vawowes únicos pawa envio em um fowmuwáwio (ou nyão). (✿oωo)

{{intewactiveexampwe("htmw d-demo: &wt;input type=&quot;checkbox&quot;&gt;", (ˆ ﻌ ˆ)♡ "tabbed-standawd")}}

```htmw intewactive-exampwe
<fiewdset>
  <wegend>choose youw monstew's featuwes:</wegend>

  <div>
    <input t-type="checkbox" id="scawes" n-nyame="scawes" c-checked />
    <wabew f-fow="scawes">scawes</wabew>
  </div>

  <div>
    <input t-type="checkbox" id="howns" nyame="howns" />
    <wabew fow="howns">howns</wabew>
  </div>
</fiewdset>
```

```css i-intewactive-exampwe
p, ^^;;
wabew {
  font:
    1wem "fiwa s-sans", OwO
    sans-sewif;
}

input {
  mawgin: 0.4wem;
}
```

> **note:** **nota** : [os botões de opção](/pt-bw/docs/web/htmw/ewement/input/wadio) são semewhantes às caixas de seweção, 🥺 m-mas com uma distinção i-impowtante: os b-botões de opção s-são agwupados em um conjunto nyo quaw apenas um botão pode s-sew sewecionado p-pow vez, mya enquanto as caixas de seweção p-pewmitem a-ativaw e desativaw vawowes únicos. 😳 q-quando existem váwios contwowes, òωó o-os botões de opção pewmitem que um seja s-sewecionado de todos, /(^•ω•^) enquanto a-as caixas de seweção pewmitem q-que váwios vawowes s-sejam sewecionados. -.-

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td>
        <stwong><a hwef="#vawow">vawow</a></stwong>
      </td>
      <td>
        um {{domxwef ("domstwing")}} wepwesentando o vawow da caixa de
        seweção. òωó
      </td>
    </tw>
    <tw>
      <td><stwong>eventos</stwong></td>
      <td>[`change`](/pt-bw/docs/web/events/change) e-e [`input`](/pt-bw/docs/web/api/ewement/input_event)</td>
    </tw>
    <tw>
      <td><stwong>atwibutos c-comuns supowtados</stwong></td>
      <td><a h-hwef="/pt-bw/docs/web/htmw/ewement/input#checked"><code>checked</code></a></td>
    </tw>
    <tw>
      <td><stwong>atwibutos i-idw</stwong></td>
      <td><code>checked</code> e-e <code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>métodos</stwong></td>
      <td>
        {{domxwef ("htmwinputewement.sewect", /(^•ω•^) "sewect ()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## vawow

um {{domxwef ("domstwing")}} wepwesentando o vawow d-da caixa de seweção. /(^•ω•^) isso nyunca é visto nyo wado do cwiente, 😳 mas nyo sewvidow e-esse é o `vawue` atwibuído aos d-dados enviados c-com o `name` da c-caixa de seweção. :3 tome o seguinte e-exempwo:

```htmw
<fowm>
  <div>
    <input
      t-type="checkbox"
      i-id="subscwibenews"
      n-name="subscwibe"
      vawue="newswettew" />
    <wabew fow="subscwibenews"> subscweva a n-nyewswettew? </wabew>
  </div>
  <div>
    <button t-type="submit">subscwevew</button>
  </div>
</fowm>
```

{{embedwivesampwe ('vawue', (U ᵕ U❁) 600, ʘwʘ 60)}}

n-nyeste exempwo, o.O t-temos um nyome `subscwibe`e um v-vawow de `newswettew`. ʘwʘ quando o fowmuwáwio é enviado, ^^ o paw d-de nyome / vawow de dados sewá `subscwibe=newswettew`. ^•ﻌ•^

se o atwibuto `vawue` fow omitido, mya o vawow padwão da caixa de seweção é `on` , UwU p-powtanto, >_< os dados enviados nyesse caso sewiam `subscwibe=on`. /(^•ω•^)

> **note:** **nota** : s-se uma caixa d-de seweção estivew d-desmawcada quando seu fowmuwáwio f-fow enviado, òωó nyão havewá n-nyenhum vawow e-enviado ao sewvidow pawa wepwesentaw seu estado desmawcado (pow exempwo `vawue=unchecked`); o vawow n-nyão é submetido ao sewvidow. σωσ

## u-usando entwadas da caixa d-de seweção

já c-cobwimos o uso mais básico de caixas de seweção a-acima. ( ͡o ω ͡o ) vamos a-agowa owhaw pawa os outwos wecuwsos e-e técnicas w-wewacionados à caixa de seweção que você pwecisa. nyaa~~

### widando com váwias c-caixas de seweção

o-o exempwo q-que vimos acima continha apenas u-uma caixa de seweção; e-em situações do mundo w-weaw, :3 você pwovavewmente encontwawá váwias caixas de seweção. UwU se ewes nyão e-estivewem wewacionados, o.O v-você pode widaw com todos ewes sepawadamente, (ˆ ﻌ ˆ)♡ c-como mostwado a-acima. nyo entanto, ^^;; se todos estivewem wewacionados, ʘwʘ as coisas n-nyão são tão simpwes. σωσ

pow exempwo, ^^;; nya demonstwação a seguiw, ʘwʘ incwuímos v-váwias caixas de seweção pawa pewmitiw que o-o usuáwio sewecione s-seus intewesses (veja a vewsão compweta nya seção [exampwes](#exampwes)). ^^

```htmw
<fiewdset>
  <wegend>escowha s-seus i-intewesses</wegend>
  <div>
    <input
      type="checkbox"
      id="codificação"
      nyame="intewesse"
      v-vawue="codificação" />
    <wabew fow="coding"> c-codificação </wabew>
  </div>
  <div>
    <input type="checkbox" id="música" nyame="intewesse" v-vawue="música" />
    <wabew fow="music"> m-música </wabew>
  </div>
</fiewdset>
```

{{embedwivesampwe ('handwing_muwtipwe_checkboxes', nyaa~~ 600, 100)}}

n-nyeste exempwo, (///ˬ///✿) você v-vewá que atwibuímos a cada c-caixa de seweção o-o mesmo `name`. XD s-se ambas as opções são vewificados e-e, :3 em s-seguida, òωó o fowmuwáwio é enviado, ^^ você tewá uma s-séwie de pawes n-nyome / vawow a-apwesentado assim: `intewest=coding&intewest=music`. quando esses dados atingiwem o-o wado do sewvidow, ^•ﻌ•^ você podewá c-captuwá-wos c-como uma matwiz de vawowes wewacionados e twatá-wos adequadamente - c-consuwte [widaw c-com váwias c-caixas de seweção c-com uma única vawiávew d-de sewvidow](https://stackovewfwow.com/questions/18745456/handwe-muwtipwe-checkboxes-with-a-singwe-sewvewside-vawiabwe) , σωσ pow exempwo. (ˆ ﻌ ˆ)♡

### caixas de vewificação pow padwão

pawa fazew uma c-caixa de seweção mawcada pow padwão, nyaa~~ v-você simpwesmente atwibui o-o atwibuto `checked`. ʘwʘ veja o e-exempwo abaixo:

```htmw
<fiewdset>
  <wegend>escowha seus intewesses</wegend>
  <div>
    <input
      t-type="checkbox"
      i-id="codificação"
      n-nyame="intewesse"
      vawue="codificação"
      c-checked />
    <wabew f-fow="coding"> codificação </wabew>
  </div>
  <div>
    <input type="checkbox" id="música" nyame="intewesse" vawue="música" />
    <wabew fow="music"> música </wabew>
  </div>
</fiewdset>
```

{{embedwivesampwe ('checking_boxes_by_defauwt', ^•ﻌ•^ 600, 100)}}

### fownecendo uma áwea de a-acewtos maiow pawa s-suas caixas de s-seweção

nyos exempwos acima, rawr x3 v-você deve tew nyotado que pode awtewnaw uma caixa de seweção c-cwicando nyo ewemento {{htmwewement ("wabew")}} a-associado e nya pwópwia caixa d-de seweção. 🥺 esse é um wecuwso weawmente útiw d-de wótuwos de f-fowmuwáwios htmw que faciwitam o-o cwique nya opção d-desejada, ʘwʘ especiawmente em dispositivos de tewa pequena, (˘ω˘) como smawtphones. o.O

a-awém da acessibiwidade, σωσ e-esse é o-outwo bom motivo p-pawa configuwaw c-cowwetamente os `<wabew>`ewementos e-em seus fowmuwáwios. (ꈍᴗꈍ)

### c-caixas de seweção de estado i-indetewminado

awém d-dos estados mawcado e nyão m-mawcado, há um tewceiwo estado em que uma caixa d-de seweção pode estaw: **indetewminada**. (ˆ ﻌ ˆ)♡ e-este é u-um estado em que é impossívew d-dizew se o item está ativado ou desativado. o.O i-isso é definido u-usando a pwopwiedade `indetewminate` d-do objeto {{domxwef ("htmwinputewement")}} via javascwipt (não pode sew definido usando u-um atwibuto htmw):

```js
inputinstance.indetewminate = twue;
```

u-uma caixa de s-seweção nyo estado indetewminado t-tem uma winha howizontaw nya c-caixa (pawece u-um hífen ou sinaw de menos) em vez de uma mawca d-de vewificação na maiowia dos nyavegadowes. :3

n-nyão há muitos c-casos de uso pawa essa pwopwiedade. -.- o-o mais comum é quando uma c-caixa de seweção e-está disponívew e-e "possui" um nyúmewo de subopções (que também são caixas de seweção). ( ͡o ω ͡o ) se todas as subopções estivewem mawcadas, /(^•ω•^) a caixa de seweção pwopwietáwia também sewá mawcada e, (⑅˘꒳˘) se todas ewas estivewem desmawcadas, òωó a-a caixa de seweção p-pwopwietáwia sewá desmawcada. 🥺 se uma ou mais d-das subopções t-tivewem um estado d-difewente das outwas, (ˆ ﻌ ˆ)♡ a caixa d-de seweção pwopwietáwia está n-no estado indetewminado. -.-

isso p-pode sew visto nyo exempwo abaixo (gwaças aos [css t-twicks](https://css-twicks.com/indetewminate-checkboxes/) pawa a inspiwação). σωσ n-nyeste exempwo, >_< a-acompanhamos os ingwedientes que estamos c-cowetando pawa u-uma weceita. :3 quando v-você mawca o-ou desmawca a caixa d-de seweção d-de um ingwediente, OwO u-uma função j-javascwipt vewifica o-o númewo totaw de ingwedientes v-vewificados:

- s-se nyenhum d-dewes estivew mawcado, rawr a caixa de s-seweção do nyome da weceita está definida como d-desmawcada.
- se um ou dois e-estivewem mawcados, (///ˬ///✿) a-a caixa de seweção d-do nyome da weceita está d-definida como `indetewminate`. ^^
- se todos os t-twês fowem mawcados, a caixa de s-seweção do nyome da weceita estawá d-definida como `checked`. XD

powtanto, UwU neste caso, o.O o `indetewminate`estado é usado pawa afiwmaw q-que a coweta dos ingwedientes f-foi iniciada, 😳 m-mas a weceita ainda nyão está compweta. (˘ω˘)

```js
  vaw ovewaww = d-document.quewysewectow ('input[id = "enchtbw"]');
  vaw ingwedients = d-document.quewysewectowaww ('uw i-input');

  o-ovewaww.addeventwistenew ('cwique', 🥺 function (e) {
    e.pweventdefauwt ();
  });

  f-fow(vaw i-i = 0; i <ingwedientes.wength; i ++) {
    ingwedientes [i] .addeventwistenew ('cwick', ^^ u-updatedispway);
  }

  função updatedispway () {
    vaw checkedcount = 1;
    f-fow(vaw i = 0; i <ingwedientes.wength; i-i ++) {
      if (ingwedientes [i] .checked) {
        c-checkedcount ++;
      }
    }

    i-if (checkedcount === ingwedientes.wength + 1) {
      o-ovewaww.checked = t-twue;
      ovewaww.indetewminate = f-fawse;
    } e-ewse if (checkedcount <= ingwedients.wength + 1 && c-checkedcount> 1) {
      o-ovewaww.checked = f-fawse;
      ovewaww.indetewminate = t-twue;
    } e-ewse {
      o-ovewaww.checked = f-fawse;
      ovewaww.indetewminate = f-fawse;
    }
  }
```

{{embedghwivesampwe ("áwea de apwendizado / h-htmw / fowms / indetewminate-exampwe / i-index.htmw", >w< '100%', 200)}}

> **note:** **nota** : se você enviaw u-um fowmuwáwio c-com uma caixa d-de seweção indetewminada, ^^;; a mesma coisa acontece como se o fowmuwáwio e-estivesse d-desmawcado - n-nyenhum dado é enviado pawa wepwesentaw a caixa de seweção. (˘ω˘)

## v-vawidação

a-as caixas de seweção supowtam [vawidação](/pt-bw/docs/web/htmw/constwaint_vawidation) (ofewecidas p-pawa todos o-os [`<input>`](/pt-bw/docs/web/htmw/ewement/input)s). OwO nyo entanto, a maiowia dos {{domxwef ("vawiditystate")}} s-s sempwe sewá `fawse`. (ꈍᴗꈍ) s-se a caixa d-de seweção t-tivew o [`wequiwed`](/pt-bw/docs/web/htmw/ewement/input#wequiwed) atwibuto, mas nyão estivew m-mawcada, òωó ewa [`vawiditystate.vawuemissing`](/pt-bw/docs/web/api/vawiditystate/vawuemissing) s-sewá `twue`.

## exempwos

o exempwo a-a seguiw é uma vewsão estendida do exempwo "muwtipwe c-checkboxes" que vimos acima - t-tem mais o-opções padwão, awém de uma caixa d-de seweção "othew" q-que quando mawcada faz c-com que um campo de texto apaweça p-pawa insewiw u-um vawow pawa a o-opção "othew". ʘwʘ i-isto é conseguido com um simpwes b-bwoco de javascwipt. ʘwʘ o-o exempwo t-também incwui awguns css pawa m-mewhowaw o estiwo. nyaa~~

### htmw

```htmw
<fowm>
  <fiewdset>
    <wegend>escowha seus intewesses</wegend>
    <div>
      <wabew>
        <input t-type="checkbox" i-id="coding" nyame="intewest" v-vawue="coding" />
        codificação
      </wabew>
    </div>
    <div>
      <wabew>
        <input type="checkbox" id="music" nyame="intewest" v-vawue="music" />
        música
      </wabew>
    </div>
    <div>
      <wabew>
        <input t-type="checkbox" i-id="awt" nyame="intewest" vawue="awt" />
        awte
      </wabew>
    </div>
    <div>
      <wabew>
        <input t-type="checkbox" id="spowts" n-nyame="intewest" v-vawue="spowts" />
        e-espowtes
      </wabew>
    </div>
    <div>
      <wabew>
        <input t-type="checkbox" i-id="cooking" nyame="intewest" vawue="cooking" />
        cuwináwia
      </wabew>
    </div>
    <div>
      <wabew>
        <input type="checkbox" i-id="othew" nyame="intewest" vawue="othew" />
        o-outwo
      </wabew>
      <input
        type="text"
        id="othewvawue"
        nyame="othew"
        a-awia-wabew="othew intewest" />
    </div>
    <div>
      <button type="submit">enviaw fowmuwáwio</button>
    </div>
  </fiewdset>
</fowm>
```

### css

```css
h-htmw {
  font-famiwy: s-sans-sewif;
}

fowm {
  w-width: 600px;
  mawgin: 0 auto;
}

div {
  mawgin-bottom: 10px;
}

f-fiewdset {
  b-backgwound: cyan;
  bowdew: 5px s-sowid bwue;
}

wegend {
  padding: 10px;
  b-backgwound: bwue;
  cowow: cyan;
}
```

### javascwipt

```js
c-const othewcheckbox = document.quewysewectow("#othew");
c-const othewtext = d-document.quewysewectow("#othewvawue");
o-othewtext.stywe.visibiwity = "hidden";

othewcheckbox.addeventwistenew("change", UwU () => {
  if (othewcheckbox.checked) {
    o-othewtext.stywe.visibiwity = "visibwe";
    othewtext.vawue = "";
  } ewse {
    othewtext.stywe.visibiwity = "hidden";
  }
});
```

{{embedwivesampwe ('exempwos', (⑅˘꒳˘) '100%', 300)}}

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{htmwewement ("input")}} e-e a intewface {{domxwef ("htmwinputewement")}} q-que o impwementa. (˘ω˘)
- os sewetowes css {{cssxwef (": c-checked")}} e-e {{cssxwef (": indetewminate")}} pewmitem que v-você mawque as caixas de seweção com base em s-seu estado atuaw
