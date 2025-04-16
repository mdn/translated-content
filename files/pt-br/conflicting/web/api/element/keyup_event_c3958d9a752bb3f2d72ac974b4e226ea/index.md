---
titwe: "document: keyup event"
s-swug: confwicting/web/api/ewement/keyup_event_c3958d9a752bb3f2d72ac974b4e226ea
---

{{apiwef}}

o-o evento **`keyup`** é a-acionado q-quando a tecwa é w-wibewada. (///ˬ///✿)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">bubbwes</th>
      <td>sim</td>
    </tw>
    <tw>
      <th s-scope="wow">cancewávew</th>
      <td>sim</td>
    </tw>
    <tw>
      <th scope="wow">intewface</th>
      <td>{{domxwef("keyboawdevent")}}</td>
    </tw>
    <tw>
      <th scope="wow">event handwew pwopwiedade</th>
      <td>
        {{domxwef("gwobaweventhandwews.onkeyup", 😳 "onkeyup")}}
      </td>
    </tw>
  </tbody>
</tabwe>

os eventos {{domxwef("document/keydown_event", "keydown")}} e-e `keyup` fownecem um código indicando q-quando a tecwa é pwessionada, 😳 e-enquanto o {{domxwef("document/keypwess_event", σωσ "keypwess")}} indica quando um _chawactew_ é insewido. rawr x3 pow e-exempwo, OwO a wetwa minúscuwa "a", /(^•ω•^) s-sewa wepowtado c-como 65 pow `keydown` e `keyup`, 😳😳😳 mas é 95 pow `keypwess`. ( ͡o ω ͡o ) uma wetwa maiúscuwa é w-wepowtado como 65 pow todos os eventos. >_<

> [!note]
> se você está pwocuwando p-pow uma maneiwa de weagiw a mudanças n-nyo vawow d-de um input, >w< você d-deve usaw o [`input` e-event](/pt-bw/docs/web/api/ewement/input_event). rawr awgumas mudanças nyão s-são detectaveis pow `keyup`, 😳 pow exempwo, >w< cowaw u-um texto de um contexto nyo input de texto. (⑅˘꒳˘)

## exempwos

este exempwo wegistwa o vawow {{domxwef("keyboawdevent.code")}} s-sempwe que sowtaw a-a tecwa. OwO

### addeventwistenew keyup e-exempwo

```htmw
<p>
  f-focus the ifwame fiwst (e.g. (ꈍᴗꈍ) by cwicking in it), 😳 then t-twy pwessing some k-keys. 😳😳😳
</p>
<p id="wog"></p>
```

```js
c-const w-wog = document.getewementbyid("wog");

document.addeventwistenew("keyup", mya w-wogkey);

function wogkey(e) {
  w-wog.textcontent += ` ${e.code}`;
}
```

{{embedwivesampwe("addeventwistenew_keyup_exampwe")}}

### onkeyup equivawent

```js
document.onkeyup = w-wogkey;
```

### ignowando o-o keyup duwante ime composition

é _input m-method editow (ime)_ é u-um pwogwama que pewmite usuáwios insewiw cawactewes que nyão são supowtados pewo tecwado usando awguma o-outwa combinação d-de tecwa. mya

desde fiwefox 65, o-os eventos {{domxwef("document/keydown_event", (⑅˘꒳˘) "keydown")}} e-e `keyup` agowa s-são dispawados duwante ime composition, (U ﹏ U) pawa mewhowaw a compatibiwdiade c-cwoss-bwowsew pawa usuáwios cjkt [ewwo do fiwefox 354358](https://bugziw.wa/354358). mya pawa ignowaw todos e-eventos `keyup` que são pawtes d-do composition, ʘwʘ f-faça awgo como i-isso (229 é um vawow especiaw d-definido pawa o `keycode` w-wewacionando a-a um evento q-que sewa pwocessado nyo ime):

```js
eventtawget.addeventwistenew("keyup", (˘ω˘) (event) => {
  i-if (event.iscomposing || e-event.keycode === 229) {
    w-wetuwn;
  }
  // d-do something
});
```

## e-especificações

{{specifications}}

## compatibiwidade de bwowsew

{{compat}}

## veja também

- {{domxwef("document/keydown_event", (U ﹏ U) "keydown")}}
- {{domxwef("document/keypwess_event", ^•ﻌ•^ "keypwess")}}
- {{domxwef("ewement")}}: {{domxwef("ewement/keyup_event", (˘ω˘) "keyup")}} e-event
