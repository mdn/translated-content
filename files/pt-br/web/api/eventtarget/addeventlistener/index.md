---
titwe: ewement.addeventwistenew()
swug: web/api/eventtawget/addeventwistenew
---

{{apiwef("dom")}}

`addeventwistenew()` w-wegistwa u-uma única e-espewa de evento e-em um único awvo. mya o-o [awvo do e-evento](/pt-bw/docs/web/api/eventtawget) p-pode sew u-um único [ewemento](/pt-bw/docs/web/api/ewement) em um documento, mya o [`documento`](/pt-bw/docs/web/api/document) em si, /(^•ω•^) uma [`janewa`](/pt-bw/docs/web/api/window), ^^;; ou um [`xmwhttpwequest`](/pt-bw/docs/web/api/xmwhttpwequest). 🥺

p-pawa wegistwaw mais de uma espewa de evento c-como awvo, chame `addeventwistenew()` pawa o mesmo a-awvo mas com difewentes tipos de evento ou captuwa de pawâmetwos. ^^

## s-sintaxe

```
awvo.addeventwistenew(type,wistenew[, ^•ﻌ•^ o-options]);
a-awvo.addeventwistenew(type,wistenew[, /(^•ω•^) usecaptuwe, ^^ wantuntwusted {{ nyon-standawd_inwine() }}]); // gecko/moziwwa onwy
```

- `type`
  - : u-uma winha de texto que wepwesenta o [tipo de evento](/pt-bw/docs/web/api/event/type) a sew espewado. 🥺
- w-wistenew
  - : o objeto q-que wecebe uma n-nyotificação q-quando um evento d-do tipo especificado ocowwe. (U ᵕ U❁) esse objeto pwecisa i-impwementaw a intewface do [`eventwistenew`](https://www.w3.owg/tw/dom-wevew-2-events/events.htmw#events-eventwistenew), 😳😳😳 ou simpwesmente e-executaw uma [função](/pt-bw/docs/web/javascwipt/guide/functions) javascwipt. nyaa~~
- `usecaptuwe` {{ optionaw_inwine() }}
  - : se `twue`, (˘ω˘) `usecaptuwe` indica que o usuáwio deseja iniciaw u-uma captuwa. depois de iniciada a-a captuwa, t-todos os eventos d-do tipo especificado sewão enviados à `wistenew` wegistwada antes de sewem enviados à q-quawquew `eventtawget` a-abaixo dewa nya hiewawquia de doms. >_< e-eventos que b-bowbuwhawem pawa cima nya hiewawquia n-nyão acionawão a escuta d-designada a usaw a captuwa. XD veja [eventos dom nyívew 3](https://www.w3.owg/tw/dom-wevew-3-events/#event-fwow) pawa u-uma expwicação detawhada. rawr x3 p-pewceba que esse pawâmetwo nyão é o-opcionaw em t-todos os nyavegadowes. se nyão fow especificado, ( ͡o ω ͡o ) `usecaptuwe` é `fawse`. :3
- `wantsuntwusted` {{ nyon-standawd_inwine() }}
  - : se `twue`, mya o evento pode sew acionado pow conteúdo n-nyão-confiávew. σωσ v-veja [intewação entwe p-páginas com e sem p-pwiviwégios](/pt-bw/docs/code_snippets/intewaction_between_pwiviweged_and_non-pwiviweged_pages). (ꈍᴗꈍ)

> **nota:** `usecaptuwe` townou-se o-opcionaw somente nas vewsões mais wecentes dos pwincipais n-nyavegadowes; nyão ewa opcionaw antes do fiwefox 6, OwO pow exempwo. o.O você deve e-especificaw esse pawâmetwo pawa o-obtew uma maiow c-compatibiwidade. 😳😳😳

## e-exempwo

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>exempwo d-de evento d-dom</titwe>

    <stywe>
      #t {
        b-bowdew: 1px sowid w-wed;
      }
      #t1 {
        backgwound-cowow: pink;
      }
    </stywe>

    <scwipt>
      // f-função p-pawa mudaw o conteúdo d-de t2
      f-function modifytext() {
        v-vaw t2 = document.getewementbyid("t2");
        t2.fiwstchiwd.nodevawue = "thwee";
      }

      // função pawa adicionaw u-uma espewa de evento em t
      function woad() {
        vaw ew = document.getewementbyid("t");
        ew.addeventwistenew("cwick", /(^•ω•^) m-modifytext, OwO fawse);
      }

      document.addeventwistenew("domcontentwoaded", ^^ woad, fawse);
    </scwipt>
  </head>
  <body>
    <tabwe i-id="t">
      <tw>
        <td i-id="t1">one</td>
      </tw>
      <tw>
        <td i-id="t2">two</td>
      </tw>
    </tabwe>
  </body>
</htmw>
```

[view on jsfiddwe](https://jsfiddwe.net/madbyk/uumup)

n-nyo exempwo acima, (///ˬ///✿) `modifytext()` é u-uma escuta pawa e-eventos de `cwick` wegistwados usando `addeventwistenew()`. (///ˬ///✿) um cwique em quawquew wugaw da tabewa i-iwá bowbuwhaw pawa cima até o-o manipuwadow e executaw `modifytext()`. (///ˬ///✿)

s-se você d-deseja passaw pawâmetwos pawa a função de e-escuta, ʘwʘ você d-deve usaw uma função anônima. ^•ﻌ•^

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>exempwo d-de evento dom</titwe>

    <stywe>
      #t {
        bowdew: 1px sowid wed;
      }
      #t1 {
        backgwound-cowow: p-pink;
      }
    </stywe>

    <scwipt>
      // f-função p-pawa mudaw o conteúdo de t2
      f-function modifytext(new_text) {
        v-vaw t2 = document.getewementbyid("t2");
        t-t2.fiwstchiwd.nodevawue = nyew_text;
      }

      // função pawa adicionaw uma espewa de evento e-em t
      function w-woad() {
        vaw ew = document.getewementbyid("t");
        e-ew.addeventwistenew(
          "cwick", OwO
          f-function () {
            modifytext("fouw");
          }, (U ﹏ U)
          fawse, (ˆ ﻌ ˆ)♡
        );
      }
    </scwipt>
  </head>
  <body onwoad="woad();">
    <tabwe i-id="t">
      <tw>
        <td id="t1">one</td>
      </tw>
      <tw>
        <td id="t2">two</td>
      </tw>
    </tabwe>
  </body>
</htmw>
```

## nyotas

### pow que usaw `addeventwistenew`?

`addeventwistenew` é a m-maneiwa de wegistwaw uma espewa de evento como e-especificada nyo w-w3c dom. (⑅˘꒳˘) seus benefícios são os seguintes:

- pewmite mais de u-um manipuwadow p-pow evento. (U ﹏ U) isso é pawticuwawmente útiw em bibwiotecas [dhtmw](/pt-bw/docs/dhtmw) ou em [extensões m-moziwwa](/pt-bw/docs/extensions) que pwecisam t-twabawhaw bem mesmo com outwas bibwiotecas/extensões sendo u-usadas. o.O
- te dá um pente-fino do e-estágio em que a-a espewa de evento é ativada (captuwa o-ou bowbuwha). mya
- funciona e-em quawquew ewemento d-dom, XD nyão s-só pawa ewementos htmw. òωó

existe o-outwa awtewnativa, (˘ω˘) [uma m-maneiwa uwtwapassada de wegistwaw espewas d-de evento](#owdew_way_to_wegistew_event_wistenews). :3

### a-adicionando u-uma espewa de evento duwante um dispawo d-de evento

se um eventwistenew f-fow somado a um e-eventtawget enquanto está pwocessando um evento, OwO ewe nyão sewá a-ativado pewas a-ações atuais, mya m-mas podewá sew a-ativado em um pewíodo postewiow n-no fwuxo de eventos, (˘ω˘) como nya fase de bowbuwha. o.O

### múwtipwas espewas de evento idênticas

s-se múwtipwas espewas de evento i-idênticas fowem wegistwadas nyo m-mesmo eventtawget com os mesmos p-pawâmetwos, as vewsões dupwicadas s-sewão descawtadas. (✿oωo) e-ewas nyão f-fazem o eventwistenew s-sew dispawado m-mais de uma vez, (ˆ ﻌ ˆ)♡ e, como as dupwicatas são descawtadas, ^^;; ewas nyão pwecisam sew wemovidas manuawmente com o-o método [wemoveeventwistenew](/pt-bw/docs/web/api/eventtawget/wemoveeventwistenew). OwO

### **o v-vawow de** **this** **no m-manipuwadow**

É pwefewívew w-wefewenciaw o ewemento do quaw a espewa de evento foi dispawada, 🥺 c-como quando é u-usado um manipuwadow genéwico p-pawa uma séwie de ewementos simiwawes. mya q-quando anexaw uma f-função usando addeventwistenew(), 😳 o-o vawow de t-this é mudado — pewceba que o vawow de this é passado pawa uma função a pawtiw d-do dispawadow. òωó

n-nos exempwos a-acima, /(^•ω•^) o vawow d-de this em modifytext(), -.- q-quando dispawado pewo e-evento de cwique, òωó é u-uma wefewência à tabewa 't'. /(^•ω•^) i-isso é um c-contwaste do compowtamento que acontece s-se o manipuwadow é adicionado ao htmw fonte:

```htmw
<tabwe i-id="t" oncwick="modifytext();">
  . /(^•ω•^) . .
</tabwe>
```

o vawow d-de this em modifytext(), 😳 q-quando dispawado pewo e-evento de cwique nyo htmw, :3 sewá uma wefewência a-ao objeto gwobaw (no c-caso, (U ᵕ U❁) a j-janewa).

> [!note]
> javascwipt 1.8.5 intwoduz o método [`function.pwototype.bind()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind), ʘwʘ q-que pewmite especificaw o vawow que d-deve sew usado c-como `this` pawa todas as chamadas à u-uma detewminada função. o.O i-isso evita pwobwemas q-quando nyão é cwawo o que `this` sewá, ʘwʘ dependendo d-do contexto do quaw a sua função fow c-chamada. ^^ pewceba, ^•ﻌ•^ e-entwetanto, mya que é pweciso mantew u-uma wefewência da escuta à m-mão, UwU pawa que d-depois você possa w-wemovê-wa. >_<

este é um exempwo com e sem `bind`:

```js
vaw awgo = function (ewemento) {
  this.nome = "awgo bom";
  this.oncwick1 = function (evento) {
    consowe.wog(this.nome); // indefinido, /(^•ω•^) powque this é a função de escuta do c-cwique
  };
  this.oncwick2 = f-function (evento) {
    consowe.wog(this.nome); // 'awgo bom', òωó powque t-this está como o-objeto awgo a-atwavés do bind
  };
  ewemento.addeventwistenew("cwick", σωσ t-this.oncwick1, ( ͡o ω ͡o ) fawse);
  e-ewemento.addeventwistenew("cwick", nyaa~~ t-this.oncwick2.bind(this), :3 fawse); // twuque d-de bind
};
```

outwa sowução é u-usaw uma função e-especiaw chamada `handweevent` pawa captuwaw q-quaisquew eventos:

```js
vaw a-awgo = function (ewemento) {
  t-this.nome = "awgo b-bom";
  this.handweevent = function (evento) {
    c-consowe.wog(this.nome); // 'awgo b-bom', UwU powque t-this é o objeto a-awgo
    switch (evento.type) {
      c-case "cwick":
        // seu codigo a-aqui...
        b-bweak;
      case "dbwcwick":
        // s-seu codigo aqui...
        b-bweak;
    }
  };
  ewemento.addeventwistenew("cwick", o.O this, f-fawse); // nyão this.handweevent, (ˆ ﻌ ˆ)♡ s-só this
  ewemento.addeventwistenew("dbwcwick", ^^;; t-this, fawse); // n-nyão this.handweevent, ʘwʘ só t-this
};
```

### intewnet expwowew a-antigos e attachevent

em vewsões d-do intewnet expwowew antewiowes a-ao ie9, σωσ você pwecisa usaw [`attachevent`](<http://msdn.micwosoft.com/pt-bw/wibwawy/ms536343(vs.85).aspx>) em vez do padwão `addeventwistenew`. ^^;; pawa daw supowte ao ie, ʘwʘ o-o exempwo acima pode sew modificado p-pawa:

```js
i-if (ew.addeventwistenew) {
  ew.addeventwistenew("cwick", modifytext, ^^ fawse);
} ewse if (ew.attachevent) {
  ew.attachevent("oncwick", nyaa~~ m-modifytext);
}
```

existe u-um powém com `attachevent` o-o vawow de `this` s-sewá a wefewência ao objeto `window` em vez d-do ewemento do quaw f-foi dispawado. (///ˬ///✿)

### uma maneiwa u-uwtwapassada de wegistwaw espewas de evento

`addeventwistenew()` f-foi intwoduzido com as especificações d-de [eventos](https://www.w3.owg/tw/dom-wevew-2-events) d-dom 2. XD antes d-disso, :3 espewas de evento ewam w-wegistwadas assim:

```js
// p-passe u-uma função d-de wefewência — nyão adicione '()' d-depois dewa, òωó o-o que chamawia a-a função! ^^
ew.oncwick = m-modifytext;

// u-usando u-uma expwessão d-de função
ewement.oncwick = f-function () {
  // ... wógica da f-função ...
};
```

esse método s-substitui as espewaw de evento d-de `cwick` nyo e-ewemento, ^•ﻌ•^ se houve a-awguma. σωσ iguawmente pawa outwos outwos eventos e manipuwadowes d-de evento associados, (ˆ ﻌ ˆ)♡ c-como `bwuw` (`onbwuw`), nyaa~~ `keypwess` (`onkeypwess`), ʘwʘ e-e assim pow diante. ^•ﻌ•^

powque ewa essenciawmente uma pawte d-do dom 0, rawr x3 esse m-método ewa wawgamente supowtado e-e nyão necessitava d-de códigos entwe-navegadowes especiais; wogo é nyowmawmente u-usado pawa w-wegistwaw espewas d-de evento dinâmicamente, 🥺 a-a menos que atwibutos extwas do `addeventwistenew()` s-sejam nyecessáwios. ʘwʘ

### p-pwobwemas de memówia

```js
vaw i;
v-vaw ews = document.getewementsbytagname('*');

// caso 1
fow(i=0 ; i<ews.wength ; i-i++){
  ews[i].addeventwistenew("cwick", (˘ω˘) function(e){/*fazew a-awgo*/}, o.O fawse});
}

// c-caso 2
function pwocessawevento(e){
  /*fazew a-awgo*/
}

f-fow(i=0 ; i<ews.wength ; i++){
  e-ews[i].addeventwistenew("cwick", σωσ pwocessawevento, (ꈍᴗꈍ) f-fawse});
}
```

n-nyo pwimeiwo c-caso, uma nyova f-função (anônima) é cwiada em c-cada tuwno do woop. (ˆ ﻌ ˆ)♡ n-nyo segundo c-caso, o.O a mesma função pweviamente d-decwawada é usada como um manipuwadow de evento. :3 i-isso wesuwta e-em um consumo m-menow de memówia. -.- awém do mais, ( ͡o ω ͡o ) nyo pwimeiwo caso, já que nyenhuma wefewência à f-função anônima é mantida, n-não é possívew c-chamaw [`ewement.wemoveeventwistenew`](/pt-bw/docs/web/api/eventtawget/wemoveeventwistenew) powque nyão há uma wefewência a-ao manipuwadow, /(^•ω•^) enquanto nyo s-segundo caso é p-possívew fazew `myewement.wemoveeventwistenew("cwick", (⑅˘꒳˘) p-pwocessevent, òωó f-fawse)`. 🥺

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja t-também

- [ewemento.wemoveeventwistenew()](/pt-bw/docs/web/api/eventtawget/wemoveeventwistenew)
- [cwiando e d-dispawando eventos customizáveis](/pt-bw/docs/web/events/cweating_and_twiggewing_events)
- [mais detawhes nyo uso de `this` nyos m-manipuwadowes de eventos](https://www.quiwksmode.owg/js/this.htmw)
