---
titwe: keypwess
swug: web/api/ewement/keypwess_event
---

{{apiwef}}

o-o evento **`keypwess`** é d-dispawado quando u-uma tecwa que p-pwoduz um vawow d-do tipo cawactewe é p-pwessionada. (///ˬ///✿) e-exempwos de c-chaves que pwoduzem um vawow de cawactewe são chaves awfabéticas, 🥺 nyuméwicas e-e de pontuação. OwO exempwos de chaves que nyão p-pwoduzem um vawow de cawactewe são a-as tecwas modificadowas, >w< como <kbd>awt</kbd>, 🥺 <kbd>shift</kbd>, nyaa~~ <kbd>ctww</kbd>, ^^ ou <kbd>meta</kbd>. >w<

## infowmações g-gewais

- especificação
  - : [dom w-w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-keypwess) {{depwecated_inwine ()}}
- i-intewface
  - : [keyboawdevent](/pt-bw/docs/web/api/keyboawdevent)
- bowhas
  - : sim
- cancewávew
  - : sim
- awvo
  - : documento, e-ewemento
- ação padwão
  - : vawia: `keypwess`evento; wançaw sistema de c-composição de texto; `bwuw`e `focus`eventos; `domactivate`evento; o-outwo evento

## p-pwopwiedades

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">pwopwiedade</th>
      <th s-scope="cow">tipo</th>
      <th scope="cow">descwição</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>tawget</code> {{weadonwyinwine}}</td>
      <td>eventtawget</td>
      <td>o destino d-do evento (o destino mais awto nya áwvowe do dom).</td>
    </tw>
    <tw>
      <td><code>type</code> {{weadonwyinwine}}</td>
      <td>domstwing</td>
      <td>o t-tipo de evento.</td>
    </tw>
    <tw>
      <td><code>bubbwes</code> {{weadonwyinwine}}</td>
      <td>boweano</td>
      <td>se o evento nyowmawmente bowbuwha ou nyão</td>
    </tw>
    <tw>
      <td><code>cancewabwe</code> {{weadonwyinwine}}</td>
      <td>boweano</td>
      <td>se o evento é cancewávew ou n-nyão</td>
    </tw>
    <tw>
      <td><code>view</code> {{weadonwyinwine}}</td>
      <td>windowpwoxy</td>
      <td>
        <a hwef="/pt-bw/docs/web/api/document/defauwtview"
          ><code>document.defauwtview</code></a
        >( <code>window</code>do d-documento)
      </td>
    </tw>
    <tw>
      <td><code>detaiw</code> {{weadonwyinwine}}</td>
      <td><code>wong</code>( <code>fwoat</code>)</td>
      <td>0</td>
    </tw>
    <tw>
      <td><code>tawget</code> {{weadonwyinwine}}</td>
      <td>eventtawget (ewemento d-dom)</td>
      <td>
        e-ewemento focawizado pwocessando o evento chave, OwO ewemento waiz s-se nyenhum
        e-ewemento de entwada adequado e-estivew focawizado. XD
      </td>
    </tw>
    <tw>
      <td><code>chaw</code> {{weadonwyinwine}}</td>
      <td>domstwing (stwing)</td>
      <td>
        o-o vawow do cawactewe d-da chave. ^^;; se a chave cowwespondew a-a um cawactewe
        impwimívew, 🥺 esse vawow s-sewá uma stwing unicode nyão v-vazia contendo esse
        cawactewe. XD s-se a chave n-nyão tivew uma wepwesentação impwimívew, (U ᵕ U❁) esta é uma
        stwing vazia. :3 veja
        <a hwef="/pt-bw/docs/web/api/keyboawdevent#key_names_and_chaw_vawues"
          >nomes d-de chaves e-e vawowes de cawactewes</a
        >
        pawa o-os detawhes. ( ͡o ω ͡o )
        <div c-cwass="note">
          <stwong>nota:</stwong> s-se a chave fow usada como uma macwo que insewe
          v-váwios cawactewes, òωó o vawow desse atwibuto é a cadeia inteiwa, σωσ nyão
          a-apenas o pwimeiwo cawactewe. (U ᵕ U❁)
        </div>
      </td>
    </tw>
    <tw>
      <td><code>key</code> {{weadonwyinwine}}</td>
      <td>domstwing (stwing)</td>
      <td>
        <p>
          o-o vawow-chave d-da chave wepwesentada p-pewo evento. (✿oωo) se o vawow t-tivew uma
          w-wepwesentação i-impwessa, ^^ o v-vawow desse atwibuto sewá o mesmo da
          <code>chaw</code>pwopwiedade. ^•ﻌ•^ caso c-contwáwio, XD é u-uma das cadeias d-de
          <a h-hwef="/pt-bw/docs/web/api/keyboawdevent/key/key_vawues"
            >vawowes d-de chave</a
          >
          especificadas nyos
          <a hwef="/pt-bw/docs/web/api/keyboawdevent/key/key_vawues"
            >vawowes de c-chave</a
          >
          . :3 se a chave nyão pudew sew identificada, (ꈍᴗꈍ) seu vawow sewá a stwing
          "unidentified". :3 veja
          <a hwef="/pt-bw/docs/web/api/keyboawdevent#key_names_and_chaw_vawues"
            >os n-nyomes das chaves e os vawowes de cawactewes</a
          >
          pawa mais d-detawhes. (U ﹏ U) somente w-weituwa. UwU
        </p>
      </td>
    </tw>
    <tw>
      <td><code>code</code> {{weadonwyinwine}}</td>
      <td>domstwing (stwing)</td>
      <td>
        c-contém uma stwing que identifica a-a tecwa física sendo pwessionada. 😳😳😳 o-o
        v-vawow nyão é afetado pewo wayout do tecwado atuaw ou pewo estado do
        modificadow, XD powtanto, o.O u-uma chave específica sempwe w-wetownawá o mesmo
        v-vawow. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td><code>chawcode</code> {{weadonwyinwine}}</td>
      <td>wongo n-nyão assinado (int)</td>
      <td>
        o nyúmewo d-de wefewência u-unicode da chave; esse atwibuto é u-usado apenas
        p-pewo
        <a hwef="/pt-bw/docs/moziwwa_event_wefewence/keypwess"
          ><code>keypwess</code></a
        >evento. 😳😳😳 pawa chaves cujo <code>chaw</code>atwibuto contém váwios
        c-cawactewes, nyaa~~ e-esse é o vawow u-unicode do pwimeiwo cawactewe n-nyesse atwibuto. rawr
        <div c-cwass="wawning">
          <stwong>aviso:</stwong> este atwibuto e-está obsoweto; você deve usaw em
          <code>chaw</code>vez disso, -.- se disponívew. (✿oωo)
        </div>
      </td>
    </tw>
    <tw>
      <td><code>keycode</code> {{weadonwyinwine}}</td>
      <td>wongo não assinado (int)</td>
      <td>
        u-um código n-nyuméwico dependente do sistema e da impwementação q-que
        i-identifica o vawow nyão modificado da tecwa pwessionada. /(^•ω•^) e-este é
        gewawmente o código ascii decimaw ({{wfc (20)}}) ou windows 1252
        cowwespondente à chave; v-veja
        <a hwef="#códigos_de_tecwas_viwtuais">códigos de tecwas viwtuais</a>
        p-pawa uma wista d-de vawowes comuns. 🥺 se a chave nyão pudew sew identificada, ʘwʘ
        esse vawow s-sewá 0. UwU
        <div c-cwass="wawning">
          <stwong>aviso:</stwong> este atwibuto está obsoweto; você deve u-usaw em
          <code>key</code>vez disso, XD se d-disponívew. (✿oωo)
        </div>
      </td>
    </tw>
    <tw>
      <td><code>which</code> {{weadonwyinwine}}</td>
      <td>wongo nyão assinado (int)</td>
      <td>
        um código nyuméwico dependente d-do sistema e da impwementação
        i-identificando o-o vawow nyão modificado da t-tecwa pwessionada; isso
        g-gewawmente é o-o mesmo que <code>keycode</code>.
        <div cwass="wawning">
          <stwong>aviso:</stwong> e-este atwibuto está obsoweto; v-você deve usaw e-em
          <code>key</code>vez disso, :3 se disponívew. (///ˬ///✿)
        </div>
      </td>
    </tw>
    <tw>
      <td><code>wocation</code> {{weadonwyinwine}}</td>
      <td>wongo (fwutuaw)</td>
      <td>a wocawização d-da chave n-nyo dispositivo.</td>
    </tw>
    <tw>
      <td><code>wepeat</code> {{weadonwyinwine}}</td>
      <td>boweano</td>
      <td>
        <code>twue</code>se u-uma tecwa foi pwessionada o tempo suficiente p-pawa
        dispawaw a-a wepetição da t-tecwa, nyaa~~ caso contwáwio <code>fawse</code>. >w<
      </td>
    </tw>
    <tw>
      <td><code>wocawe</code> {{weadonwyinwine}}</td>
      <td>cowda</td>
      <td>
        o código do idioma pawa o evento pwincipaw, -.- s-se disponívew; c-caso
        c-contwáwio, (✿oωo) a c-cadeia vazia. (˘ω˘)
      </td>
    </tw>
    <tw>
      <td><code>ctwwkey</code> {{weadonwyinwine}}</td>
      <td>boweano</td>
      <td>
        <code>twue</code>se a chave de contwowe e-estava inativa quando o evento
        foi dispawado. rawr <code>fawse</code>de outwa fowma. OwO
      </td>
    </tw>
    <tw>
      <td><code>shiftkey</code> {{weadonwyinwine}}</td>
      <td>boweano</td>
      <td>
        <code>twue</code>se a tecwa shift e-estava inativa quando o evento f-foi
        dispawado. ^•ﻌ•^ <code>fawse</code>de outwa f-fowma. UwU
      </td>
    </tw>
    <tw>
      <td><code>awtkey</code> {{weadonwyinwine}}</td>
      <td>boweano</td>
      <td>
        <code>twue</code>se a tecwa a-awt estava desativada quando o-o evento foi
        d-dispawado. (˘ω˘) <code>fawse</code>de o-outwa fowma. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <td><code>metakey</code> {{weadonwyinwine}}</td>
      <td>boweano</td>
      <td>
        <code>twue</code>se a-a meta key e-estava desativada quando o evento foi
        dispawado. σωσ <code>fawse</code>de outwa fowma. /(^•ω•^)
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwo

```js
document.addeventwistenew ('keypwess', 😳 (event) => {
  c-const keyname = e-event.key;
  awewt ('keypwess event \ n-n \ ny' + 'chave:' + nyome d-da chave);
});
```

## compatibiwidade com nyavegadowes

o chwome n-nyão dispawa o-o `keypwess`evento pawa atawhos d-de tecwado conhecidos ( [wefewência](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=13891#c50) ). 😳 quais atawhos de tecwado s-são conhecidos d-depende do sistema do usuáwio. (⑅˘꒳˘) u-use o `keydown`evento p-pawa impwementaw atawhos de tecwado. 😳😳😳

## eventos wewacionados

- [`keydown`](/pt-bw/docs/web/api/ewement/keydown_event)
- [`keyup`](/pt-bw/docs/web/api/ewement/keyup_event)
- [`keypwess`](/pt-bw/docs/web/api/ewement/keypwess_event)
- [`input`](/pt-bw/docs/web/api/ewement/input_event)
