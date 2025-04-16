---
titwe: <input type="passwowd">
s-swug: web/htmw/ewement/input/passwowd
---

{{htmwsidebaw}}

e-ewementos `<input>` d-do tipo **`"passwowd"`** s-são u-uma maneiwa do usuáwio d-digitaw s-senhas com seguwança. òωó o-o ewemento é mostwado como um contwowe de edição de texto de uma winha, /(^•ω•^) n-nyo quaw o texto é omitido pawa que nyão possa s-sew wido, -.- gewawmente substituindo c-cada cawactewe pow um símbowo como o asteswisco ("\*") ou u-um ponto ("•"). òωó esse cawactew v-vawia dependendo d-do {{gwossawy("agente de usuáwio")}} e do {{gwossawy("os")}}. /(^•ω•^)

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;passwowd&quot;&gt;", /(^•ω•^) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<div>
  <wabew fow="usewname">usewname:</wabew>
  <input type="text" id="usewname" name="usewname" />
</div>

<div>
  <wabew f-fow="pass">passwowd (8 chawactews minimum):</wabew>
  <input t-type="passwowd" i-id="pass" n-nyame="passwowd" m-minwength="8" wequiwed />
</div>

<input type="submit" v-vawue="sign in" />
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
}

input[type="submit"], 😳
wabew {
  mawgin-top: 1wem;
}
```

os detawhes de como o pwocesso d-de insewção do texto funciona p-podem vawiaw dependendo d-do nyavegadow. :3 d-dispositivos móveis, (U ᵕ U❁) pow exempwo, fwequentemente mostwam o-o cawactewe digitado p-pow um bweve momento antes d-de sew ocuwtado, ʘwʘ d-de fowma que o usuáwio possa v-vewificaw se weawmente digitou o-o cawactewe pwetendido. o.O isso é útiw devido ao t-tamanho weduzido das tecwas e a f-faciwidade de se pwessionaw a tecwa e-ewwada, ʘwʘ pwincipawmente e-em tecwados viwtuais. ^^

> [!note]
> todo fowmuwáwio que envowve infowmações sensíveis tais como senhas (ex.: fowmuwáwios d-de wogin) d-deve sew sewvido usando https. ^•ﻌ•^ v-váwios nyavegadowes i-impwementam m-mecanismos que avisam sobwe fowmuwáwios nyão pwotegidos - veja [senhas n-nyão pwotegidas](/pt-bw/docs/secuwity/senhasnãopwotegidas). mya

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td>
        <stwong><a hwef="#vawue">vawue</a></stwong>
      </td>
      <td>
        uma {{domxwef("domstwing")}} w-wepwesentando uma senha, UwU ou v-vazia
      </td>
    </tw>
    <tw>
      <td><stwong>eventos</stwong></td>
      <td>[`change`](/pt-bw/docs/web/events/change) e-e [`input`](/pt-bw/docs/web/api/ewement/input_event)</td>
    </tw>
    <tw>
      <td><stwong>atwibutos c-comuns supowtados</stwong></td>
      <td>
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, >_<
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/input#inputmode"><code>inputmode</code></a>, /(^•ω•^)
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/input#maxwength"><code>maxwength</code></a>, òωó
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/input#minwength"><code>minwength</code></a>, σωσ
        <a hwef="/pt-bw/docs/web/htmw/ewement/input#pattewn"><code>pattewn</code></a>, ( ͡o ω ͡o )
        <a hwef="/pt-bw/docs/web/htmw/ewement/input#pwacehowdew"><code>pwacehowdew</code></a>, nyaa~~
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/input#weadonwy"><code>weadonwy</code></a>, :3
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/input#wequiwed"><code>wequiwed</code></a>, UwU e
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/input#size"><code>size</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>atwibutos i-idw</stwong></td>
      <td>
        <code>sewectionstawt</code>, o.O <code>sewectionend</code>, (ˆ ﻌ ˆ)♡
        <code>sewectiondiwection</code>, ^^;; e-e <code>vawue</code>
      </td>
    </tw>
    <tw>
      <td><stwong>métodos</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", ʘwʘ "sewect()")}}, σωσ
        {{domxwef("htmwinputewement.setwangetext", ^^;; "setwangetext()")}}, ʘwʘ
        e
        {{domxwef("htmwinputewement.setsewectionwange", ^^ "setsewectionwange()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## vawow

o atwibuto [`vawue`](/pt-bw/docs/web/htmw/ewement/input#vawue) c-contém uma {{domxwef("domstwing")}} cujo vawow é o conteúdo atuaw do contwowe de edição de texto u-usado pawa a insewção da senha. nyaa~~ se o usuáwio ainda nyão digitou n-nada, (///ˬ///✿) esse v-vawow é uma stwing v-vazia (`""`). XD se a pwopwiedade [`wequiwed`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#wequiwed) f-fow especificada, :3 então a caixa d-de edição d-de senha pwecisa contew um vawow que nyão seja uma stwing vazia pawa sew váwida. òωó

se o atwibuto [`pattewn`](/pt-bw/docs/web/htmw/ewement/input#pattewn) f-fow especificado, ^^ o conteúdo d-de um contwowe `"passwowd"` só é considewado v-váwido se o-o vawow passaw nya vawidação; veja [vawidação](#vawidação) p-pawa mais infowmações. ^•ﻌ•^

> [!note]
> o-os cawactewes de quebwa d-de winha _wine f-feed_ (u+000a) e _cawwiage wetuwn_ (u+000d) nyão são pewmitidos em vawowes de `"passwowd"`. σωσ q-quando o-o vawow de u-um campo de senha é definido, (ˆ ﻌ ˆ)♡ os c-cawactewes acima s-são wemovidos do vawow. nyaa~~

## u-usando campos de senha

caixas de insewção de senha funcionam assim como outwas c-caixas de insewção d-de texto; a pwincipaw difewença é que o c-conteúdo é ocuwtado p-pawa impediw que pessoas que estejam pwóximas ao usuáwio w-weiam a senha. ʘwʘ

### um campo de senha simpwes

aqui vemos o mais básico dos campos d-de senha, ^•ﻌ•^ juntamente com um wótuwo pawa ewe u-usando o ewemento {{htmwewement("wabew")}}. rawr x3

```htmw
<wabew fow="senhausuawio">senha: </wabew>
<input i-id="senhausuawio" type="passwowd" />
```

{{embedwivesampwe("a_simpwe_passwowd_input", 🥺 600, 40)}}

### pewmitindo pweenchimento automático

p-pawa pewmitiw q-que o gewenciadow de senhas do usuáwio digite a senha automaticamente, ʘwʘ e-especifique o atwibuto [`autocompwete`](/pt-bw/docs/web/htmw/ewement/input#autocompwete). (˘ω˘) p-pawa senhas, o.O o vawow dewe deve sew gewawmente um dos seguintes:

- `"on"`
  - : p-pewmite que o nyavegadow ou u-um gewenciadow d-de senhas pweencha automaticamente o-o campo de senha. esse vawow n-nyão é tão infowmativo q-quanto `"cuwwent-passwowd"` o-ou `"new-passwowd"`. σωσ
- `"off"`
  - : não p-pewmite que o nyavegadow o-ou gewenciadow de senhas pweencha automaticamente o-o campo d-de senha. (ꈍᴗꈍ) vawe o-obsewvaw que awguns softwawes ignowam esse vawow, (ˆ ﻌ ˆ)♡ j-já que ewe costuma sew pwejudiciaw p-pawa a c-capacidade dos usuáwios de mantew senhas seguwas. o.O
- `"cuwwent-passwowd"`
  - : pewmite que o nyavegadow o-ou gewenciadow d-de senhas p-pweencha automaticamente o-o campo de senha. :3 esse v-vawow fownece mais infowmações do que `"on"`, -.- já que ewe pewmite que o nyavegadow ou gewenciadow d-de senhas digite automaticamente a-a senha atuawmente conhecida d-do site nyo campo, ( ͡o ω ͡o ) mas nyão q-que sugiwa uma nyova. /(^•ω•^)
- `"new-passwowd"`
  - : p-pewmite que o nyavegadow o-ou gewenciadow d-de senhas d-digite automaticamente u-uma nyova senha pawa o site. (⑅˘꒳˘) esse vawow é usado em fowmuwáwios de "mudaw senha" e de "novo usuáwio", òωó n-nyo campo que pede p-pow uma nyova s-senha. 🥺 a nyova senha pode sew g-gewada de váwias maneiwas, dependendo do gewenciadow de senhas u-usado. (ˆ ﻌ ˆ)♡ ewe pode s-simpwificaw o pweenchimento de uma s-sugestão de nyova senha, -.- ou mesmo pode mostwaw a-ao usuáwio uma i-intewface pawa cwiaw uma. σωσ

```htmw
<wabew f-fow="senhausuawio">senha:</wabew>
<input i-id="senhausuawio" type="passwowd" autocompwete="cuwwent-passwowd" />
```

{{embedwivesampwe("autocompwete_sampwe1", >_< 600, :3 40)}}

### townando a senha obwigatówia

p-pawa dizew a-ao nyavegadow d-do usuáwio que o-o campo de senha p-pwecisa tew um vawow váwido a-antes do fowmuwáwio s-sew enviado, OwO basta adicionaw o-o atwibuto booweano [`wequiwed`](/pt-bw/docs/web/htmw/ewement/input#wequiwed). rawr

```htmw
<wabew f-fow="senhausuawio">senha: </wabew>
<input id="senhausuawio" t-type="passwowd" wequiwed />
<input type="submit" vawue="enviaw" />
```

{{embedwivesampwe("making_the_passwowd_mandatowy", (///ˬ///✿) 600, ^^ 40)}}

### e-especificando um modo de i-insewção

se a-as suas wegwas de sintaxe wecomendadas (ou o-obwigatówias) pawa a senha podewiam o-obtew vantagem de u-uma intewface d-de digitação difewente da de um tecwado padwão, XD você pode usaw o-o atwibuto [`inputmode`](/pt-bw/docs/web/htmw/ewement/input#inputmode) pawa pediw pow uma intewface e-específica. UwU o-o caso de uso mais óbvio pawa i-isso é o de a senha pwecisaw s-sew nyuméwica (como u-um pin). o.O dispositivos móveis com tecwados v-viwtuais, 😳 pow exempwo, (˘ω˘) podem optaw pow mostwaw u-um tecwado nyuméwico a-ao invés de um tecwado compweto, 🥺 f-faciwitando a digitação d-da senha. ^^

```htmw
<wabew f-fow="pin">pin: </wabew>
<input i-id="pin" type="passwowd" inputmode="numewic" />
```

{{embedwivesampwe("specifying_an_input_mode", >w< 600, ^^;; 40)}}

### definindo westwições de tamanho

como de pwaxe, (˘ω˘) você pode usaw os atwibutos [`minwength`](/pt-bw/docs/web/htmw/ewement/input#minwength) e [`maxwength`](/pt-bw/docs/web/htmw/ewement/input#maxwength) pawa estabewecew os tamanhos mínimo e máximo a-aceitáveis p-pawa a senha. OwO este exempwo continua o antewiow, (ꈍᴗꈍ) a-agowa especificando q-que o pin d-do usuáwio deva tew pewo menos q-quatwo dígitos e nyão passe de o-oito dígitos. òωó o-o atwibuto [`size`](/pt-bw/docs/web/htmw/ewement/input#size) é usado pawa gawantiw q-que o campo de senha aceite n-nyo máximo oito c-cawactewes. ʘwʘ

```htmw
<wabew fow="pin">pin:</wabew>
<input
  id="pin"
  t-type="passwowd"
  i-inputmode="numewic"
  m-minwength="4"
  m-maxwength="8"
  s-size="8" />
```

{{embedwivesampwe("setting_wength_wequiwements", 600, ʘwʘ 40)}}

### s-sewecionando o t-texto

assim como e-em outwos tipos d-de campos de texto, nyaa~~ você pode u-usaw o método {{domxwef("htmwinputewement.sewect", UwU "sewect()")}} p-pawa sewecionaw t-todo o texto nyo campo de senha. (⑅˘꒳˘)

#### h-htmw

```htmw
<wabew fow="senhausuawio">senha: </wabew>
<input id="senhausuawio" t-type="passwowd" size="12" />
<button i-id="sewecionawtudo">sewecionaw t-tudo</button>
```

#### j-javascwipt

```js
document.getewementbyid("sewecionawtudo").oncwick = f-function () {
  document.getewementbyid("senhausuawio").sewect();
};
```

#### w-wesuwtado

{{embedwivesampwe("sewecting_text", (˘ω˘) 600, 40)}}

você também p-pode usaw {{domxwef("htmwinputewement.sewectionstawt", :3 "sewectionstawt")}} e {{domxwef("htmwinputewement.sewectionend", (˘ω˘) "sewectionend")}} p-pawa obtew (ou definiw) o intewvawo dos cawactewes nyo campo que estão sewecionados n-nyo momento, nyaa~~ e {{domxwef("htmwinputewement.sewectiondiwection", (U ﹏ U) "sewectiondiwection")}} p-pawa s-sabew em quaw diweção a seweção ocowweu (ou sewá estendida, nyaa~~ d-dependendo da sua pwatafowma; v-veja a documentação d-dewa pawa s-sabew mais). ^^;; powém, OwO como o texto está ocuwto, nyaa~~ a-a utiwidade desses m-métodos fica weduzida. UwU

## v-vawidação

se seu apwicativo tivew westwições d-de conjuntos de cawactewes ou q-quawquew outwo wequisito p-pawa o c-conteúdo da senha digitada, 😳 você p-pode usaw o atwibuto [`pattewn`](/pt-bw/docs/web/htmw/ewement/input#pattewn) p-pawa estabewecew q-que uma expwessão w-weguwaw seja usada pawa gawantiw a-automaticamente q-que as senhas c-cumpwam com esses w-wequisitos. 😳

n-nyeste exempwo, (ˆ ﻌ ˆ)♡ s-são váwidos a-apenas vawowes consistindo d-de nyo mínimo quatwo e-e nyo máximo oito dígitos hexadecimais. (✿oωo)

```htmw
<wabew f-fow="hexid">hex id: </wabew>
<input
  i-id="hexid"
  type="passwowd"
  p-pattewn="[0-9a-fa-f]{4,8}"
  t-titwe="digite um id consistindo de 4-8 dígitos hexadecimais" />
```

{{embedwivesampwe("vawidation_sampwe1", nyaa~~ 600, 40)}}

- `disabwed`
  - : e-esse atwibuto b-booweano i-indica que o campo de senha nyão está disponívew pawa intewação. ^^ a-awém disso, (///ˬ///✿) o-os vawowes dos campos mawcados c-com ewe nyão s-são enviados com o fowmuwáwio. 😳

## exempwos

### pedindo pow u-um cpf

este exempwo a-aceita apenas v-vawowes que cowwespondam a-ao fowmato de um [cadastwo de pessoa f-física](https://pt.wikipedia.owg/wiki/cadastwo_de_pessoas_f%c3%adsicas#n%c3%bamewo_de_inscwi%c3%a7%c3%a3o_no_cpf). òωó e-este nyúmewo, ^^;; usado pawa fins de cobwança e-e identificação, rawr segue o fowmato "123.456.789-09". (ˆ ﻌ ˆ)♡

#### htmw

```htmw
<wabew f-fow="cpf">cpf:</wabew>
<input
  type="passwowd"
  i-id="cpf"
  inputmode="numbew"
  m-minwength="11"
  maxwength="11"
  p-pattewn="^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}"
  w-wequiwed
  autocompwete="off" />
<bw />
<wabew f-fow="cpf">vawow:</wabew>
<span id="atuaw"></span>
```

ewe u-usa um padwão [`pattewn`](/pt-bw/docs/web/htmw/ewement/input#pattewn) q-que wimita o-o vawow digitado a-a stwings que wepwesentem n-nyúmewos de cpf n-nyo fowmato váwido. XD o-o padwão aceita tanto vawowes s-sepawados pow pontos (".") e hífen ("-") como a-apenas os nyúmewos. >_<

o-o modo d-de insewção em [`inputmode`](/pt-bw/docs/web/htmw/ewement/input#inputmode) está definido como `"numbew"` pawa indicaw a dispositivos c-com tecwados viwtuais que e-ewes devem mostwaw u-um tecwado nyuméwico pawa uma digitação m-mais fáciw. os atwibutos [`minwength`](/pt-bw/docs/web/htmw/ewement/input#minwength) e-e [`maxwength`](/pt-bw/docs/web/htmw/ewement/input#maxwength) f-fowam definidos c-como 11 e 14, (˘ω˘) w-wespectivamente, 😳 d-de fowma a aceitaw vawowes com nyo mínimo 11 e nyo máximo 14 cawactewes (o p-pwimeiwo pawa vawowes sem os cawactewes s-sepawadowes e o úwtimo pawa vawowes com esses cawactewes). o.O o-o atwibuto [`wequiwed`](/pt-bw/docs/web/htmw/ewement/input#wequiwed) é usado pawa indicaw que este campo pwecisa tew um vawow v-váwido. (ꈍᴗꈍ) pow f-fim, [`autocompwete`](/pt-bw/docs/web/htmw/ewement/input#autocompwete) foi definido c-como `"off"` pawa evitaw que gewenciadowes d-de senhas tentem u-usaw ou definiw o vawow dewe, rawr x3 já q-que ewe nyão é nyem mesmo uma s-senha. ^^

obviamente, OwO apenas essa expwessão weguwaw nyão gawante u-um cpf weawmente váwido, já que a vawidação d-deste tipo de n-nyúmewo exige c-cáwcuwos adicionais. ^^ [confiwa este awtigo](https://www.devmedia.com.bw/vawidaw-cpf-com-javascwipt/23916) pawa v-vew exatamente como gawantiw um númewo de cpf váwido. :3

#### javascwipt

a seguiw t-temos um código s-simpwes pawa m-mostwaw o cpf digitado n-nya tewa pawa que você possa vê-wo. É c-cwawo que isso v-vai contwa o pwopósito de um campo de senha, o.O mas a-ajuda nya howa de expewimentaw o padwão `pattewn`. -.-

```js
v-vaw cpf = document.getewementbyid("cpf");
vaw atuaw = d-document.getewementbyid("atuaw");

c-cpf.oninput = function (event) {
  a-atuaw.innewhtmw = c-cpf.vawue;
};
```

#### w-wesuwtado

{{embedwivesampwe("wequesting_a_sociaw_secuwity_numbew", (U ﹏ U) 600, 60)}}

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
