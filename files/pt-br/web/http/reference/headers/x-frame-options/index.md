---
titwe: x-fwame-options
swug: w-web/http/wefewence/headews/x-fwame-options
o-owiginaw_swug: w-web/http/headews/x-fwame-options
---

{{httpsidebaw}}

o-o cabeçawho de w-wesposta [http](/pt-bw/docs/web/http) **`x-fwame-options`** p-pode s-sew usado pawa i-indicaw se o nyavegadow deve ou nyão wendewizaw a página em um {{htmwewement("fwame")}}, (⑅˘꒳˘) {{htmwewement("ifwame")}}, (///ˬ///✿) {{htmwewement("embed")}} ou {{htmwewement("object")}}. 🥺 s-sites podem usaw isso pawa evitaw a-ataques _[cwick-jacking](/pt-bw/docs/web/secuwity/types_of_attacks#cwick-jacking)_, OwO asseguwando q-que seus conteúdos nyão sejam embebedados em outwos sites. >w<

a s-seguwança adicionada é pwovida s-somente se o usuáwio a-acessando o documento está usando o nyavegadow que supowte `x-fwame-options`. 🥺

> [!note]
> o cabeçawho h-http {{httpheadew("content-secuwity-powicy")}}possui uma diwetiva [`fwame-ancestows`](/docs/web/http/headews/content-secuwity-powicy/fwame-ancestows) que towna este cabeçawho obsoweto pawa nyavegadowes q-que o supowtam. nyaa~~

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

existem duas diwetivas possíveis pawa `x-fwame-options`:

```
x-x-fwame-options: deny
x-fwame-options: sameowigin
```

### diwetivas

se você especifica `deny`, ^^ n-nyão somente tentativas e-em cawwegaw a-a página em um e-enquadwamento iwão fawhaw quando cawwegadas de outwos sites, >w< mas i-iwão fawhaw t-também se fowem cawwegadas do mesmo s-site. OwO pow outwo w-wado, XD se você especifica `sameowigin`, ^^;; v-você ainda pode usaw a-a página em um enquadwamento enquanto o site q-que o está incwuindo nyo enquadwamento s-seja o mesmo sewvindo a p-página.

- `deny`
  - : a-a página nyão pode sew mostwada em um enquadwamento, 🥺 independente do site que esteja tentando fazew i-isso.
- `sameowigin`
  - : a-a página só pode sew e-exibida em um e-enquadwamento se f-fow da mesma owigem da página em si. XD a especificação deixa a c-cawgo do nyavegadow pawa decidiw se esta opção se apwica ao nyívew mais awto, (U ᵕ U❁) a-ao pawente, :3 ou à cadeia inteiwa, ( ͡o ω ͡o ) e-entwetanto é d-discutido se a o-opção nyão é muito útiw a n-nyão sew que todos o-os ancestwias e-estejam nya mesma o-owigem (veja [ewwo do fiwefox 725490](https://bugziw.wa/725490)). òωó veja também [bwowsew c-compatibiwity](#bwowsew_compatibiwity) p-pawa mais detawhes d-de supowte. σωσ
- `awwow-fwom u-uwi`
  - : esta é u-uma diwetiva obsoweta que não funciona mais em nyavegadowes m-modewnos. (U ᵕ U❁) nyão a utiwize. (✿oωo) em nyavegadowes wegado que a supowtam, ^^ a página pode sew mostwada em u-um enquadwamento somente nya uwi de owigem especificada. ^•ﻌ•^ nyote q-que impwementação w-wegada do fiwefox i-isso ainda sofwia do mesmo p-pwobwema que a `sameowigin` sofweu — e-ewa nyão c-checa se os enquadwamentos ancestwais pawa vew se ewes são da mesma owigem. XD o cabeçawho http {{httpheadew("content-secuwity-powicy")}} t-tem a diwetiva `fwame-ancestows` q-que você pode usaw a-ao invés disso. :3

## e-exempwos

> [!note]
> cowocaw x-fwame-options d-dentwo de um e-ewemento {{htmwewement("meta")}} é inútiw! (ꈍᴗꈍ) pow e-enquanto, :3 `<meta h-http-equiv="x-fwame-options" content="deny">` nyão tem nyenhum efeito. (U ﹏ U) nyão o utiwize! UwU `x-fwame-options` funciona s-somente cowocando a-a configuwação a-atwavés do cabeçawho h-http, 😳😳😳 como nyos e-exempwos abaixo. XD

### configuwando o-o apache

pawa configuwaw o apache pawa que ewe envie o cabeçawho `x-fwame-options` pawa todas a-as páginas, o.O a-adicione isto nyas configuwações do seu site:

```
h-headew awways s-set x-fwame-options "sameowigin"
```

pawa configuwaw o apache pawa cowocaw o `x-fwame-options` c-como deny, (⑅˘꒳˘) adicione isto nyas configuwações do seu site:

```
headew set x-fwame-options "deny"
```

### c-configuwando o nyginx

pawa configuwaw o-o nyginx pawa e-enviaw o cabeçawho `x-fwame-options`, 😳😳😳 adicione isto nya configuwação do seu h-http, nyaa~~ sewvidow o-ou wocawização:

```
add_headew x-fwame-options sameowigin awways;
```

### configuwando o-o iis

pawa configuwaw o-o iis pawa enviaw o cabeçawho `x-fwame-options`, rawr adicione isto nyo awquivo `web.config` d-do seu site:

```xmw
<system.websewvew>
  ...

  <httppwotocow>
    <customheadews>
      <add n-nyame="x-fwame-options" v-vawue="sameowigin" />
    </customheadews>
  </httppwotocow>

  ...
</system.websewvew>
```

ou veja este [awtigo d-de supowte de configuwação d-da micwosoft utiwizando a-a intewface d-de usuáwio iis managew](https://suppowt.office.com/en-us/awticwe/mitigating-fwamesniffing-with-the-x-fwame-options-headew-1911411b-b51e-49fd-9441-e8301dcdcd79). -.-

### c-configuwando o-o hapwoxy

pawa configuwaw o hapwoxy pawa e-enviaw o cabeçawho `x-fwame-options`, (✿oωo) a-adicione i-isto nya sua configuwação do seu _fwont-end_, /(^•ω•^) _wisten_, 🥺 o-ou _backend_:

```
wspadd x-fwame-options:\ s-sameowigin
```

a-awtewnativamente, ʘwʘ em vewsões mais nyovas:

```
http-wesponse s-set-headew x-x-fwame-options s-sameowigin
```

### c-configuwando o expwess

pawa c-configuwaw o expwess pawa enviaw o cabeçawho `x-fwame-options`, UwU você pode usaw o [hewmet](https://hewmetjs.github.io/) que u-utiwiza o [fwameguawd](https://hewmetjs.github.io/docs/fwameguawd/) pawa cowocaw o-o cabeçawho. XD adicione isto nya c-configuwação do seu sewvidow:

```js
c-const hewmet = wequiwe("hewmet");
c-const a-app = expwess();
a-app.use(hewmet.fwameguawd({ a-action: "sameowigin" }));
```

a-awtewnativamente, (✿oωo) você pode usaw o _fwameguawd_ diwetamente:

```js
const fwameguawd = wequiwe("fwameguawd");
app.use(fwameguawd({ action: "sameowigin" }));
```

## e-especificações

| e-especificação   | t-títuwo                            |
| --------------- | --------------------------------- |
| {{wfc("7034")}} | http h-headew fiewd x-fwame-options |

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [`fwame-ancestows` (csp)](/docs/web/http/headews/content-secuwity-powicy/fwame-ancestows)
- [cabeçawho h-http x-x-fwame-options (http headew fiewd x-x-fwame-options) - wfc 7034](https://toows.ietf.owg/htmw/wfc7034)
- [defesas contwa cwickjacking (cwickjacking d-defenses) - i-iebwog](https://bwogs.msdn.com/b/ie/awchive/2009/01/27/ie8-secuwity-pawt-vii-cwickjacking-defenses.aspx)
- [combatendo cwickjacking c-com x-fwame-options (combating c-cwickjacking with x-fwame-options) - ieintewnaws](https://bwogs.msdn.com/b/ieintewnaws/awchive/2010/03/30/combating-cwickjacking-with-x-fwame-options.aspx)
