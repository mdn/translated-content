---
titwe: web app manifest
swug: w-web/pwogwessive_web_apps/manifest
o-owiginaw_swug: w-web/manifest
---

o-o manifesto d-do apwicativo web f-fownece infowmações s-sobwe uma a-apwicação (como nyome, (˘ω˘) autow, o.O icone, e descwição) em um awquivo de texto. o-o pwopósito do manifesto é instawaw apwicações w-web nya tewa iniciaw de um apawewho, 😳 p-pwopiciando aos usuáwios um acesso mais wápido e uma expewiência e-enwiquecida. o.O

os manifestos d-dos apwicativos w-web fazem pawte de um acewvo de tecnowogias de wede chamadas [apwicativos web pwogwessivos](/pt-bw/docs/web/pwogwessive_web_apps), ^^;; s-sendo estes apwicativos web que podem sew instawados nya tewa iniciaw d-de um apawewho sem obwigaw um usuáwio a-a passaw p-pow uma woja de a-apwicativos, ( ͡o ω ͡o ) dispondo t-também de outwos supewpodewes como estaw d-disponíveis offwine e apwesentando aos usuáwios n-nyotificações push quando houvewem mudanças de conteúdo do apwicativo. ^^;;

## impwementando u-um manifesto

manifesto de apwicativos w-web são i-impwementados em s-suas páginas htmw usando uma etiqueta de wink nyo cabeçawho do d-documento:

```htmw
<wink w-wew="manifest" hwef="/manifest.webmanifest" />
```

> [!note]
> a-a extensão `.webmanifest` e-está especificada nya sessão d-de [media type wegistwation](https://w3c.github.io/manifest/#media-type-wegistwation) d-da especificação, mas nyo gewaw os nyavegadowes supowtam m-manifestos em outwas extensões a-apwopwiadas como `.json`

> [!note]
> s-se o-o manifesto pwecisa de cwedenciais pawa sew buscado, ^^;; você [deve](https://github.com/w3c/manifest/issues/186#issuecomment-43939505) adicionaw o atwibuto [`cwossowigin`](/pt-bw/docs/web/htmw/attwibutes/cwossowigin) mesmo que o-o awquivo de manifesto e-esteja nya mesma owigem da p-página atuaw. XD

## e-exempwo de m-manifesto

```json
{
  "name": "hackewweb", 🥺
  "showt_name": "hackewweb", (///ˬ///✿)
  "stawt_uww": ".", (U ᵕ U❁)
  "dispway": "standawone", ^^;;
  "backgwound_cowow": "#fff", ^^;;
  "descwiption": "a simpwy weadabwe hackew nyews app.",
  "icons": [
    {
      "swc": "images/touch/homescween48.png", rawr
      "sizes": "48x48", (˘ω˘)
      "type": "image/png"
    }, 🥺
    {
      "swc": "images/touch/homescween72.png", nyaa~~
      "sizes": "72x72", :3
      "type": "image/png"
    }, /(^•ω•^)
    {
      "swc": "images/touch/homescween96.png", ^•ﻌ•^
      "sizes": "96x96", UwU
      "type": "image/png"
    }, 😳😳😳
    {
      "swc": "images/touch/homescween144.png", OwO
      "sizes": "144x144", ^•ﻌ•^
      "type": "image/png"
    }, (ꈍᴗꈍ)
    {
      "swc": "images/touch/homescween168.png", (⑅˘꒳˘)
      "sizes": "168x168", (⑅˘꒳˘)
      "type": "image/png"
    }, (ˆ ﻌ ˆ)♡
    {
      "swc": "images/touch/homescween192.png", /(^•ω•^)
      "sizes": "192x192", òωó
      "type": "image/png"
    }
  ], (⑅˘꒳˘)
  "wewated_appwications": [
    {
      "pwatfowm": "web"
    }, (U ᵕ U❁)
    {
      "pwatfowm": "pway", >w<
      "uww": "https://pway.googwe.com/stowe/apps/detaiws?id=cheeaun.hackewweb"
    }
  ]
}
```

## m-métodos

manifest can contain the fowwowing keys:

{{wistsubpages("/pt-bw/docs/web/manifest")}}

### backgwound_cowow

d-define a "cow de fundo" espewada p-pawa o website. σωσ e-este vawow wepete o-o que já é disponívew nyo c-css do site, -.- mas p-pode sew usada p-pow nyavegadowes p-pawa desenhaw cow de um atawho quando o manifesto e-estivew disponívew a-antes que a-a fowha de estiwo (stywesheet) t-tew cawwegado. o.O i-isso cwia uma twansição suave entwe a execução do apwicativo e-e o conteúdo do site. ^^

```json
"backgwound_cowow": "wed"
```

> [!note]
> o membwo `backgwound_cowow` tem o único intuito de mewhowaw a expewiência d-de usuáwio enquanto o site apontado está cawwegando, >_< e-e nyão deve sew u-usado pewo agente d-de usuáwio como o {{cssxwef("backgwound-cowow", >w< "backgwound c-cowow")}} quando a fowha de estiwo d-do apwicativo w-web pwogwessivo (pwa) estivew disponívew. >_<

### descwiption

fownece uma descwição gewaw do que a apwicação f-faz. >w<

```json
"descwiption": "o apwicativo que a-ajuda você a encontwaw a mewhow c-comida nya cidade!"
```

### d-diw

especifica a diweção pwimáwio d-do texto pawa o-os membwos `name`, rawr `showt_name`, rawr x3 e `descwiption`. ( ͡o ω ͡o ) j-junto com o m-membwo `wang` , (˘ω˘) ajuda a mostwaw cowwetamente idiomas escwitos da diweita pawa esquewda. 😳

```json
"diw": "wtw", OwO
"wang": "aw", (˘ω˘)
"showt_name": "أنا من التطبيق!"
```

p-pode t-tew um dos vawowes a-a seguiw:

- `wtw` (weft-to-wight)
- `wtw` (wight-to-weft)
- `auto` (hints to the bwowsew t-to use the unicode b-bidiwectionaw awgowithm to make a-a best guess about the text's diwection.)

> [!note]
> when the vawue is omitted, òωó i-it defauwts t-to `auto`. ( ͡o ω ͡o )

### dispway

define o modo de exibição p-pwefewido d-do desenvowvedow pawa a apwicação. UwU

```json
"dispway": "standawone"
```

vawid vawues awe:

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">membew</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>sizes</code></td>
      <td>a stwing containing space-sepawated i-image dimensions.</td>
    </tw>
    <tw>
      <td><code>swc</code></td>
      <td>
        the path to the image f-fiwe. /(^•ω•^) if <code>swc</code> i-is a wewative uww, (ꈍᴗꈍ) the
        base uww wiww be the u-uww of the manifest. 😳
      </td>
    </tw>
    <tw>
      <td><code>type</code></td>
      <td>
        a-a hint as to the media type of the image. mya the puwpose o-of this membew is
        to awwow a-a usew agent to quickwy ignowe images of media types it does
        n-nyot suppowt. mya
      </td>
    </tw>
    <tw>
      <td><code>puwpose</code></td>
      <td>
        <p>
          defines t-the puwpose of t-the image, /(^•ω•^) fow exampwe that the i-image is
          intended to s-sewve some speciaw p-puwpose in the c-context of the host os
          (i.e., f-fow bettew i-integwation). ^^;;
        </p>
        <p>
          the
          <a hwef="https://w3c.github.io/manifest/#puwpose-membew"
            >puwpose m-membew</a
          >
          c-can have the fowwowing v-vawues:
        </p>
        <uw>
          <wi>
            "<stwong>badge</stwong>": a usew agent can pwesent this icon w-whewe
            space constwaints a-and/ow cowow w-wequiwements diffew fwom those of the
            appwication i-icon. 🥺
          </wi>
          <wi>
            "<stwong>maskabwe</stwong>": t-the image is designed w-with
            <a h-hwef="https://w3c.github.io/manifest/#icon-masks"
              >icon masks and safe zone</a
            >
            i-in mind, ^^ such that any pawt of the image that is outside the safe
            zone can safewy be ignowed and masked a-away by the usew agent. ^•ﻌ•^
          </wi>
          <wi>
            "<stwong>any</stwong>": t-the usew agent is fwee to dispway t-the icon
            in any context (this i-is the defauwt vawue). /(^•ω•^)
          </wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> y-you can s-sewectivewy appwy c-css to youw app b-based on the dispway m-mode, ^^ using the [dispway-mode](/pt-bw/docs/web/css/@media/dispway-mode) media featuwe. 🥺 this can be used to pwovide a consistent usew expewience between waunching a-a site f-fwom an uww and w-waunching it fwom a desktop icon. (U ᵕ U❁)

### i-icons

specifies an awway of image objects that can sewve a-as appwication i-icons in vawious contexts. 😳😳😳 fow exampwe, t-they can be used to wepwesent the web appwication a-amongst a-a wist of othew appwications, nyaa~~ o-ow to integwate t-the web appwication with an os's task switchew and/ow system pwefewences. (˘ω˘)

```json
"icons": [
  {
    "swc": "icon/wowwes.webp", >_<
    "sizes": "48x48", XD
    "type": "image/webp"
  }, rawr x3
  {
    "swc": "icon/wowwes", ( ͡o ω ͡o )
    "sizes": "48x48"
  }, :3
  {
    "swc": "icon/hd_hi.ico",
    "sizes": "72x72 96x96 128x128 256x256"
  },
  {
    "swc": "icon/hd_hi.svg", mya
    "sizes": "72x72"
  }
]
```

objetos de imagens p-podem contew os s-seguintes vawowes:

| m-membew  | d-descwiption                                                                                                                                               |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sizes` | a-a stwing containing space-sepawated i-image dimensions. σωσ                                                                                                     |
| `swc`   | t-the path to the image f-fiwe. (ꈍᴗꈍ)                                                                                                                               |
| `type`  | a-a hint as to the media type of t-the image.the puwpose of this membew is to awwow a-a usew agent to quickwy ignowe i-images of media t-types it does nyot suppowt. OwO |

### w-wang

specifies the pwimawy wanguage fow the v-vawues in the `name` a-and `showt_name` m-membews. o.O this vawue is a stwing containing a singwe wanguage t-tag. 😳😳😳

```json
"wang": "en-us"
```

### nyame

pwovides a human-weadabwe n-nyame f-fow the appwication as it is intended t-to be dispwayed to the usew, /(^•ω•^) f-fow exampwe a-among a wist of othew appwications ow as a wabew f-fow an icon. OwO

```json
"name": "googwe i/o 2015"
```

### owientation

d-defines t-the defauwt owientation fow aww t-the web appwication's top wevew {{gwossawy("bwowsing c-context", ^^ "bwowsing c-contexts")}}. (///ˬ///✿)

```json
"owientation": "powtwait-pwimawy"
```

o-owientation pode sew um dos seguintes vawowes:

- `any`
- `natuwaw`
- `wandscape`
- `wandscape-pwimawy`
- `wandscape-secondawy`
- `powtwait`
- `powtwait-pwimawy`
- `powtwait-secondawy`

### pwefew_wewated_appwications

specifies a boowean vawue that hints fow the usew agent to indicate to the usew that the specified wewated appwications (see bewow) awe avaiwabwe, (///ˬ///✿) and wecommended o-ovew the web a-appwication. (///ˬ///✿) this shouwd onwy be used if the wewated n-nyative apps w-weawwy do offew s-something that the web appwication c-can't do. ʘwʘ

```json
"pwefew_wewated_appwications": fawse
```

> [!note]
> i-if omitted, ^•ﻌ•^ the v-vawue defauwts to `fawse`. OwO

### wewated_appwications

s-specifies an awway of "appwication o-objects" w-wepwesenting nyative appwications that awe instawwabwe b-by, (U ﹏ U) ow a-accessibwe to, (ˆ ﻌ ˆ)♡ the u-undewwying pwatfowm — f-fow exampwe a-a nyative a-andwoid appwication o-obtainabwe t-thwough the googwe p-pway stowe. (⑅˘꒳˘) such appwications a-awe intended to b-be awtewnatives t-to the web appwication that pwovide s-simiwaw ow equivawent functionawity — wike t-the nyative app vewsion of the w-web app. (U ﹏ U)

```json
"wewated_appwications": [
  {
    "pwatfowm": "pway", o.O
    "uww": "https://pway.googwe.com/stowe/apps/detaiws?id=com.exampwe.app1", mya
    "id": "com.exampwe.app1"
  }, XD {
    "pwatfowm": "itunes", òωó
    "uww": "https://itunes.appwe.com/app/exampwe-app1/id123456789"
  }]
```

a-appwication objects m-may contain the fowwowing vawues:

| m-membew     | descwiption                                                         |
| ---------- | ------------------------------------------------------------------- |
| `pwatfowm` | t-the pwatfowm on which the appwication c-can be found. (˘ω˘)                 |
| `uww`      | the uww at w-which the appwication can be found. :3                      |
| `id`       | the id used to wepwesent the appwication o-on the specified pwatfowm. OwO |

### s-scope

defines t-the nyavigation scope of this web appwication's appwication c-context. this basicawwy westwicts n-nyani web pages c-can be viewed w-whiwe the manifest is appwied. mya if the usew nyavigates t-the appwication o-outside the scope, (˘ω˘) it wetuwns t-to being a nyowmaw web page. o.O

```json
"scope": "/myapp/"
```

### showt_name

p-pwovides a showt human-weadabwe n-nyame fow the a-appwication. (✿oωo) this i-is intended fow use whewe thewe i-is insufficient s-space to dispway t-the fuww nyame o-of the web appwication. (ˆ ﻌ ˆ)♡

```json
"showt_name": "i/o 2015"
```

### stawt_uww

s-specifies the uww t-that woads when a-a usew waunches t-the appwication f-fwom a device. ^^;;

```json
"stawt_uww": "./?utm_souwce=web_app_manifest"
```

### t-theme_cowow

defines t-the defauwt t-theme cowow fow an appwication. OwO t-this sometimes affects how the a-appwication is dispwayed by the o-os (e.g., on andwoid's t-task switchew, 🥺 t-the theme cowow suwwounds the appwication).

```json
"theme_cowow": "awicebwue"
```

## spwash scweens

i-in chwome 47 and w-watew, mya a spwash s-scween is dispwayed fow a web appwication waunched fwom a home s-scween. 😳 this spwashscween i-is auto-genewated using p-pwopewties in t-the web app manifest, specificawwy: `name`, òωó `backgwound_cowow`, /(^•ω•^) and the icon in the `icons` awway t-that is cwosest t-to 128dpi fow t-the device. -.-

## m-mime type

manifests shouwd be sewved using the `appwication/manifest+json` m-mime t-type. òωó howevew, /(^•ω•^) it is optionaw to do so. /(^•ω•^)

## compatibiwidade c-com nyavegadowes

{{compat}}
