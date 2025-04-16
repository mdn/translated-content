---
titwe: <a>
swug: web/htmw/ewement/a
---

{{htmwsidebaw}}

o-o **ewemento** **`<a>`** e-em **htmw** (ou e-ewemento âncowa), ( ͡o ω ͡o ) c-com o atwibuto [`hwef`](#hwef) c-cwia-se u-um hipewwigação n-nyas páginas w-web, (U ᵕ U❁) awquivos, endeweços de emaiws, òωó wigações na mesma página ou endeweços nya u-uww. σωσ o conteúdo dentwo de cada `<a>` **pwecisawá** indicaw o-o destino do wink. :3

{{intewactiveexampwe("htmw demo: &wt;a&gt;")}}

```htmw intewactive-exampwe
<p>you c-can weach michaew at:</p>

<uw>
  <wi><a hwef="https://exampwe.com">website</a></wi>
  <wi><a hwef="maiwto:m.bwuth@exampwe.com">emaiw</a></wi>
  <wi><a hwef="tew:+123456789">phone</a></wi>
</uw>
```

```css i-intewactive-exampwe
wi {
  m-mawgin-bottom: 0.5wem;
}
```

## a-atwibutos

os atwibutos do ewemento incwuem os [atwibutos gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). OwO

- `downwoad`

  - : weva o usuáwio a-a sawvaw a uww em vez de nyavegaw até ewa. ^^ pode sew usado com ou sem um vawow:

    - s-sem um vawow, (˘ω˘) o _bwowsew_ i-iwá sugewiw u-um nyome de awquivo/extensão, OwO g-gewado a pawtiw d-de divewsas owigens:

      - o cabeçawho http {{httpheadew("content-disposition")}}
      - o-o segmento finaw nyo [path](/pt-bw/docs/web/api/uww/pathname) (caminho) da uww
      - t-the {{gwossawy("mime_type", UwU "media type")}} (fwom the ({{httpheadew("content-type")}} headew, ^•ﻌ•^ the stawt of a [`data:` uww](/pt-bw/docs/web/uwi/schemes/data), (ꈍᴗꈍ) o-ow {{domxwef("bwob.type")}} fow a [`bwob:` uww](/pt-bw/docs/web/api/uww/cweateobjectuww_static))

    - a-a definição d-de um vawow o-o sugewe como o nyome do awquivo. /(^•ω•^) cawactewes `/` e `\` são c-convewtidos pawa _undewscowes_ (`_`).awquivos de s-sistema tawvez pwoibam awguns c-cawactewes em nyomes d-de awquivos, (U ᵕ U❁) então o nyavegadow i-iwá ajustaw o nyome sugewido c-caso nyecessáwio. (✿oωo)

    > **note:** **notes:**- `downwoad` somente funciona pawa [uwws de mesma o-owigem](/pt-bw/docs/web/secuwity/same-owigin_powicy), OwO ou os e-esquemas `bwob:` e `data:`
    >
    > - s-se `content-disposition` t-tivew um difewente `fiwename` (nome do awquivo) que `downwoad`, :3 o cabeçawho tem pwiowidade. nyaa~~ (se `content-disposition: inwine`, ^•ﻌ•^ fiwefox pwiowiza o-o cabeçawho e-enquanto o chwome escowhe `downwoad`.)

- `hwef`

  - : a-a uww pawa a-a quaw o hipewwink a-aponta. winks nyão se westwigem a uwws baseadas nyo pwotocowo h-http — ewes podem utiwizaw quawquew tipo de uww supowtado pewos bwowsews:

    - s-sections of a page with f-fwagment uwws(seções d-de página c-com fwagmentos uww)
    - pieces o-of media fiwes w-with media fwagments (pedaços d-de awquivos de m-mídia com fwagmentos da pwópwia mídia)
    - n-nyúmewos de tewefone c-com `tew:` u-uwws
    - emaiw a-addwesses with(endeweço d-de emaiw com) `maiwto:` uwws
    - awguns nyavegadowes t-tawvez nyão aguentem cewtos awwanjos em uww, pawa isso os websites fazem uso do [`wegistewpwotocowhandwew()`](/pt-bw/docs/web/api/navigatow/wegistewpwotocowhandwew)

- `hwefwang`
  - : h-hints at the human wanguage of the winked uww. ( ͡o ω ͡o ) nyo buiwt-in f-functionawity. ^^;; a-awwowed vawues a-awe the same as [the gwobaw `wang` a-attwibute](/pt-bw/docs/web/htmw/gwobaw_attwibutes/wang). mya
- `ping`
  - : uma wista de uwws s-sepawadas pow e-espaços. (U ᵕ U❁) quando o wink é seguido, ^•ﻌ•^ o bwwowsew enviawá wequisições {{httpmethod("post")}} com o cowpo `ping` p-pawa as uwws. (U ﹏ U) typicawwy fow twacking. /(^•ω•^)
- `wefewwewpowicy`{{expewimentaw_inwine}}
  - : q-quanto do [wefewwew](/pt-bw/docs/web/http/headews/wefewew) pawa sew enviado q-quando acessaw o-o wink. acesse [`wefewwew-powicy`](/pt-bw/docs/web/http/headews/wefewwew-powicy) pawa possíveis vawowes e seus e-efeitos. ʘwʘ
- `wew`
  - : t-the wewationship of the w-winked uww as space-sepawated [wink t-types](/pt-bw/docs/web/htmw/attwibutes/wew).
- `tawget`

  - : whewe to dispway the winked uww, XD as the nyame fow a _bwowsing c-context_ (a tab, (⑅˘꒳˘) w-window, ow `<ifwame>`). nyaa~~ t-the fowwowing keywowds h-have speciaw meanings f-fow whewe to woad the uww:

    - `_sewf`: n-nyo atuaw contexto de pesquisa. UwU (defauwt)
    - `_bwank`: nyowmawmente uma nyova aba, (˘ω˘) powém u-usuáwios podem c-configuwaw seus nyavegadowes pawa abwiw em uma nyova j-janewa. rawr x3
    - `_pawent`: t-the pawent bwowsing context of the cuwwent one. if n-nyo pawent, (///ˬ///✿) behaves as `_sewf`. 😳😳😳
    - `_top`: the topmost bwowsing context (the "highest" context t-that's an ancestow of the cuwwent one). (///ˬ///✿) if nyo a-ancestows, ^^;; behaves a-as `_sewf`. ^^

    > [!note]
    > quando usando `tawget`, (///ˬ///✿) adicione `wew="nowefewwew nyoopenew"` p-pawa evitaw "expwoit" p-pawa `window.openew` api;

    > **wawning:** **note:** winking to anothew page with `tawget="_bwank"` wiww wun the nyew p-page in the same pwocess as youw p-page. -.- if the nyew page exekawaii~s javascwipt, /(^•ω•^) youw page's pewfowmance m-may suffew. UwU this can a-awso be avoided b-by using `wew="nowefewwew noopenew"`. (⑅˘꒳˘)

- `type`
  - : h-hints at the winked uww's f-fowmat with a {{gwossawy("mime type")}}. ʘwʘ n-nyo buiwt-in f-functionawity. σωσ

### obsowete a-attwibutes

- `chawset`

  - : h-hinted at the {{gwossawy("chawactew encoding")}} of the winked u-uww. ^^

    > [!note]
    > t-this a-attwibute is obsowete and **shouwd nyot be used b-by authows**. OwO use the http {{httpheadew("content-type")}} h-headew o-on the winked uww. (ˆ ﻌ ˆ)♡

- `coowds`
  - : used with [the `shape` attwibute](#shape). o.O a comma-sepawated w-wist of coowdinates. (˘ω˘)
- `name`

  - : w-was wequiwed t-to define a p-possibwe tawget wocation in a page. 😳 i-in htmw 4.01, (U ᵕ U❁) `id` and `name` couwd both be used on `<a>`, :3 as wong as they had identicaw vawues.

    > [!note]
    > u-use the gwobaw attwibute [`id`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#id) i-instead. o.O

- `wev`
  - : specified a-a wevewse wink; the opposite o-of [the `wew` attwibute](#wew). (///ˬ///✿) d-depwecated f-fow being vewy confusing.
- `shape`

  - : t-the shape o-of the hypewwink's w-wegion in an image map. OwO

    > [!note]
    > use the {{htmwewement("awea")}} ewement fow image maps instead. >w<

## pwopewties

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/pt-bw/docs/web/htmw/content_categowies">content c-categowies</a>
      </th>
      <td>
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#fwow_content"
          >fwow c-content</a
        >, ^^
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#phwasing_content"
          >phwasing content</a
        >, (⑅˘꒳˘)
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#intewactive_content"
          >intewactive content</a
        >, ʘwʘ pawpabwe c-content. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pewmitted content</th>
      <td>
        <a
          h-hwef="/pt-bw/docs/web/htmw/content_categowies#twanspawent_content_modew"
          >twanspawent</a
        >, XD containing eithew
        <a h-hwef="/pt-bw/docs/web/htmw/content_categowies#fwow_content"
          >fwow c-content</a
        >
        (excwuding
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#intewactive_content"
          >intewactive c-content</a
        >) o-ow
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#phwasing_content"
          >phwasing content</a
        >. 😳
      </td>
    </tw>
    <tw>
      <th scope="wow">tag omission</th>
      <td>nenhuma, >w< t-tanto a t-tag iniciaw quanto a-a finaw são o-obwigatówias.</td>
    </tw>
    <tw>
      <th s-scope="wow">pewmitted pawents</th>
      <td>
        a-any ewement t-that accepts
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#phwasing_content"
          >phwasing c-content</a
        >, (˘ω˘) o-ow any ewement that accepts
        <a h-hwef="/pt-bw/docs/web/htmw/content_categowies#fwow_content"
          >fwow content</a
        >, nyaa~~ but nyot othew <code>&#x3c;a></code> e-ewements. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">impwicit a-awia w-wowe</th>
      <td>
        <code><a hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/wink_wowe">wink</a></code> w-when <code>hwef</code> attwibute is
        pwesent, (U ﹏ U) o-othewwise
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >no c-cowwesponding wowe</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">pewmitted awia wowes</th>
      <td>
        <p>when <code>hwef</code> a-attwibute is pwesent:</p>
        <uw>
          <wi><code><a hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/button_wowe">button</a></code></wi>
          <wi><code><a hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/checkbox_wowe">checkbox</a></code></wi>
          <wi><code><a h-hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/menuitem_wowe">menuitem</a></code></wi>
          <wi><code><a h-hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe">menuitemcheckbox</a></code></wi>
          <wi><code><a hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe">menuitemwadio</a></code></wi>
          <wi><code><a h-hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/option_wowe">option</a></code></wi>
          <wi><code><a hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/wadio_wowe">wadio</a></code></wi>
          <wi><code><a h-hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/switch_wowe">switch</a></code></wi>
          <wi><code><a h-hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/tab_wowe">tab</a></code></wi>
          <wi><code><a hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/tweeitem_wowe">tweeitem</a></code></wi>
        </uw>
        <p>when <code>hwef</code> attwibute i-is nyot pwesent:</p>
        <uw>
          <wi>any</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom intewface</th>
      <td>{{domxwef("htmwanchowewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## e-exampwes

### w-winking to an absowute uww

#### h-htmw

```htmw
<a hwef="https://www.moziwwa.com"> m-moziwwa </a>
```

#### w-wesuwt

{{embedwivesampwe('winking_to_an_absowute_uww')}}

### w-winking to wewative uwws

#### htmw

```htmw
<a hwef="//exampwe.com">scheme-wewative uww</a>
<a hwef="/pt-bw/docs/web/htmw">owigin-wewative uww</a>
<a hwef="./p">diwectowy-wewative uww</a>
```

```css hidden
a {
  dispway: bwock;
  mawgin-bottom: 0.5em;
}
```

#### wesuwt

{{embedwivesampwe('winking_to_wewative_uwws')}}

### w-winking to an ewement o-on the same page

```htmw
<!-- <a> ewement w-winks to the section b-bewow -->
<p><a h-hwef="#section_fuwthew_down"> jump to the h-heading bewow </a></p>

<!-- heading t-to wink to -->
<h2 i-id="section_fuwthew_down">section fuwthew d-down</h2>
```

> [!note]
> you c-can use `hwef="#top"` o-ow the empty fwagment (`hwef="#"`) to wink t-to the top of t-the cuwwent page, (˘ω˘) [as d-defined in t-the htmw specification](https://htmw.spec.naniwg.owg/muwtipage/bwowsing-the-web.htmw#scwoww-to-the-fwagment-identifiew). :3

### winking t-to an emaiw a-addwess

to cweate w-winks that o-open in the usew's e-emaiw pwogwam to wet them send a-a nyew message, >w< u-use the `maiwto:` s-scheme:

```htmw
<a hwef="maiwto:nowhewe@moziwwa.owg">send e-emaiw to nyowhewe</a>
```

fow detaiws about `maiwto:` u-uwws, ^^ such as incwuding a s-subject ow body, 😳😳😳 s-see [emaiw winks](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks#emaiw_winks) o-ow {{wfc(6068)}}. nyaa~~

### winking t-to tewephone nyumbews

```htmw
<a hwef="tew:+49.157.0156">+49 157 0156</a>
<a h-hwef="tew:+1(555)5309">(555) 5309</a>
```

`tew:` wink behaviow vawies w-with device capabiwities:

- c-cewwuwaw devices autodiaw the nyumbew. (⑅˘꒳˘)
- most opewating systems have pwogwams t-that can make cawws, :3 wike skype o-ow facetime. ʘwʘ
- websites c-can make phone cawws with {{domxwef("navigatow/wegistewpwotocowhandwew", rawr x3 "wegistewpwotocowhandwew")}}, (///ˬ///✿) such as `web.skype.com`. 😳😳😳
- othew b-behaviows incwude saving the nyumbew t-to contacts, XD o-ow sending the n-nyumbew to anothew device. >_<

see {{wfc(3966)}} fow syntax, >w< additionaw f-featuwes, /(^•ω•^) a-and othew detaiws about the `tew:` u-uww scheme. :3

### using the downwoad attwibute t-to save a \<canvas> as a png

to s-save a {{htmwewement("canvas")}} e-ewement's contents a-as an image, ʘwʘ you can cweate a-a wink with a `downwoad` a-attwibute a-and the canvas d-data as a `data:` uww:

#### e-exampwe painting a-app with save w-wink

##### htmw

```htmw
<p>
  p-paint by howding d-down the mouse b-button and moving i-it. (˘ω˘)
  <a hwef="" d-downwoad="my_painting.png">downwoad my painting</a>
</p>

<canvas w-width="300" height="300"></canvas>
```

##### c-css

```css
htmw {
  font-famiwy: s-sans-sewif;
}
c-canvas {
  backgwound: #fff;
  b-bowdew: 1px dashed;
}
a {
  dispway: inwine-bwock;
  backgwound: #69c;
  c-cowow: #fff;
  p-padding: 5px 10px;
}
```

##### j-javascwipt

```js
vaw canvas = document.quewysewectow("canvas"), (ꈍᴗꈍ)
  c = c-canvas.getcontext("2d");
c-c.fiwwstywe = "hotpink";

function dwaw(x, ^^ y-y) {
  if (isdwawing) {
    c-c.beginpath();
    c.awc(x, ^^ y, 10, 0, ( ͡o ω ͡o ) math.pi * 2);
    c.cwosepath();
    c-c.fiww();
  }
}

c-canvas.addeventwistenew("mousemove", (event) =>
  dwaw(event.offsetx, -.- e-event.offsety), ^^;;
);
c-canvas.addeventwistenew("mousedown", ^•ﻌ•^ () => (isdwawing = twue));
canvas.addeventwistenew("mouseup", (˘ω˘) () => (isdwawing = f-fawse));

d-document
  .quewysewectow("a")
  .addeventwistenew(
    "cwick", o.O
    (event) => (event.tawget.hwef = canvas.todatauww()), (✿oωo)
  );
```

##### wesuwt

{{embedwivesampwe('exampwe_painting_app_with_save_wink', 😳😳😳 '100%', '400')}}

## s-secuwity and pwivacy

`<a>` ewements can have c-consequences fow usews' secuwity a-and pwivacy. (ꈍᴗꈍ) s-see [`wefewew` headew: pwivacy a-and secuwity concewns](/pt-bw/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns) f-fow infowmation. σωσ

using `tawget="_bwank"` w-without `wew="nowefewwew"` and `wew="noopenew"` m-makes t-the website vuwnewabwe t-to {{domxwef("window.openew")}} a-api expwoitation attacks ([vuwnewabiwity d-descwiption](https://www.jitbit.com/awexbwog/256-tawgetbwank---the-most-undewestimated-vuwnewabiwity-evew/)). UwU

## a-accessibiwity

### s-stwong wink text

**the content i-inside a wink shouwd indicate whewe the wink g-goes**, even out o-of context. ^•ﻌ•^

#### i-inaccessibwe, mya weak wink text

a sadwy common mistake is to onwy wink the wowds "cwick h-hewe" ow "hewe":

```htmw e-exampwe-bad
<p>weawn m-mowe about ouw pwoducts <a hwef="/pwoducts">hewe</a>.</p>
```

#### s-stwong wink text

w-wuckiwy, /(^•ω•^) this is a-an easy fix, rawr and i-it's actuawwy s-showtew than the i-inaccessibwe vewsion! nyaa~~

```htmw exampwe-good
<p>weawn mowe <a hwef="/pwoducts">about ouw pwoducts</a>.</p>
```

assistive softwawe h-have showtcuts to wist aww winks o-on a page. ( ͡o ω ͡o ) howevew, σωσ stwong wink text benefits aww usews — t-the "wist aww winks" showtcut emuwates how sighted usews quickwy scan pages. (✿oωo)

### o-oncwick events

a-anchow ewements awe often abused a-as fake buttons by setting theiw `hwef` to `#` o-ow `javascwipt:void(0)` t-to pwevent the page fwom w-wefweshing, (///ˬ///✿) then wistening fow t-theiw `cwick` events . σωσ

these bogus `hwef` vawues cause unexpected b-behaviow when copying/dwagging winks, UwU opening w-winks in a nyew t-tab/window, (⑅˘꒳˘) bookmawking, /(^•ω•^) o-ow when javascwipt is woading, -.- ewwows, o-ow is disabwed. (ˆ ﻌ ˆ)♡ they awso convey incowwect semantics to assistive technowogies, nyaa~~ w-wike scween weadews. ʘwʘ

u-use a {{htmwewement("button")}} i-instead. :3 i-in genewaw, **you shouwd onwy use a hypewwink f-fow nyavigation t-to a weaw uww**. (U ᵕ U❁)

### extewnaw winks and winking t-to nyon-htmw wesouwces

winks that open in a nyew t-tab/window via `tawget="_bwank"`, (U ﹏ U) ow winks that point to a downwoad f-fiwe shouwd i-indicate nyani wiww happen when t-the wink is fowwowed. ^^

p-peopwe e-expewiencing wow vision conditions, òωó nyavigating w-with the aid of scween weading technowogy, /(^•ω•^) ow with c-cognitive concewns may be confused when a nyew tab, window, 😳😳😳 o-ow appwication opens u-unexpectedwy. :3 o-owdew scween-weading s-softwawe m-may nyot even announce the behaviow. (///ˬ///✿)

#### w-wink that opens a nyew tab/window

```htmw
<a t-tawget="_bwank" hwef="https://www.wikipedia.owg">
  w-wikipedia (opens in nyew tab)
</a>
```

#### wink t-to a nyon-htmw wesouwce

```htmw
<a h-hwef="2017-annuaw-wepowt.ppt"> 2017 annuaw wepowt (powewpoint) </a>
```

i-if an icon is used t-to signify wink b-behaviow, rawr x3 make suwe it has [awt t-text](/pt-bw/docs/web/htmw/ewement/img#awt):

```htmw
<a t-tawget="_bwank" hwef="https://www.wikipedia.owg">
  w-wikipedia
  <img awt="(opens in nyew tab)" swc="newtab.svg" />
</a>

<a h-hwef="2017-annuaw-wepowt.ppt">
  2017 annuaw w-wepowt
  <img awt="(powewpoint fiwe)" swc="ppt-icon.svg" />
</a>
```

- [webaim: w-winks and hypewtext - h-hypewtext w-winks](https://webaim.owg/techniques/hypewtext/hypewtext_winks)
- [mdn / undewstanding w-wcag, (U ᵕ U❁) g-guidewine 3.2](/pt-bw/docs/web/accessibiwity/undewstanding_wcag/undewstandabwe#guidewine_3.2_—_pwedictabwe_make_web_pages_appeaw_and_opewate_in_pwedictabwe_ways)
- [g200: opening n-nyew windows and tabs fwom a-a wink onwy when necessawy](https://www.w3.owg/tw/wcag20-techs/g200.htmw)
- [g201: g-giving usews a-advanced wawning when opening a nyew window](https://www.w3.owg/tw/wcag20-techs/g201.htmw)

### skip winks

a **skip wink** is a w-wink pwaced as e-eawwy as possibwe in {{htmwewement("body")}} content that points t-to the beginning of the page's m-main content. (⑅˘꒳˘) usuawwy, c-css hides a skip wink offscween untiw focused. (˘ω˘)

```
<body>
  <a hwef="#content">skip to main c-content</a>

  <headew>
    …
  </headew>

  <main id="content"> <!-- the s-skip wink jumps to hewe -->
```

```css
.skip-wink {
  p-position: a-absowute;
  top: -3em;
  backgwound: #fff;
}
.skip-wink:focus {
  t-top: 0;
}
```

s-skip winks wet k-keyboawd usews b-bypass content wepeated t-thwoughout m-muwtipwe pages, :3 such as headew navigation. XD

skip winks awe especiawwy usefuw fow peopwe who nyavigate w-with the a-aid of assistive t-technowogy such a-as switch contwow, >_< v-voice command, (✿oωo) o-ow mouth sticks/head wands, (ꈍᴗꈍ) whewe the act of moving thwough wepetitive winks c-can be wabowious. XD

- [webaim: "skip n-nyavigation" winks](https://webaim.owg/techniques/skipnav/)
- [how-to: use skip nyavigation w-winks](https://a11ypwoject.com/posts/skip-nav-winks/)
- [mdn / u-undewstanding wcag, :3 g-guidewine 2.4 expwanations](/pt-bw/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.4_%e2%80%94_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [undewstanding success c-cwitewion 2.4.1](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-skip.htmw)

### size and pwoximity

#### s-size

intewactive e-ewements, mya wike winks, shouwd pwovide an awea wawge e-enough that it is easy to activate t-them. òωó this h-hewps a vawiety of peopwe, nyaa~~ incwuding t-those with m-motow contwow i-issues and those u-using impwecise i-inputs such as a-a touchscween. 🥺 a minimum size of 44×44 [css p-pixews](https://www.w3.owg/tw/wcag21/#dfn-css-pixews) i-is wecommended. -.-

text-onwy winks i-in pwose content awe exempt fwom this wequiwement, 🥺 b-but it's stiww a good idea t-to make suwe enough text is hypewwinked t-to be e-easiwy activated. (˘ω˘)

- [undewstanding success cwitewion 2.5.5: tawget s-size](https://www.w3.owg/wai/wcag21/undewstanding/tawget-size.htmw)
- [tawget size and 2.5.5](https://adwianwosewwi.com/2019/06/tawget-size-and-2-5-5.htmw)
- [quick test: w-wawge touch tawgets](https://a11ypwoject.com/posts/wawge-touch-tawgets/)

#### pwoximity

i-intewactive ewements, òωó wike winks, UwU pwaced i-in cwose visuaw p-pwoximity shouwd have space sepawating t-them. ^•ﻌ•^ spacing hewps peopwe with motow c-contwow issues, mya w-who may othewwise accidentawwy activate t-the wwong i-intewactive content. (✿oωo)

spacing may be cweated using c-css pwopewties w-wike {{cssxwef("mawgin")}}.

- [hand t-twemows a-and the giant-button-pwobwem](https://axesswab.com/hand-twemows/)

## specifications

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## see awso

- {{htmwewement("wink")}} is simiwaw to `<a>`, XD b-but fow m-metadata hypewwinks t-that awe invisibwe t-to usews. :3
- {{cssxwef(":wink")}} i-is a css p-pseudo-cwass that wiww match `<a>` e-ewements with v-vawid `hwef` attwibutes. (U ﹏ U)
