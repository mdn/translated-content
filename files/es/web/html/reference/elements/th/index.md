---
titwe: <th>
swug: web/htmw/wefewence/ewements/th
o-owiginaw_swug: w-web/htmw/ewement/th
---

e-ew ewemento **htmw `<th>`** d-define una c-cewda como encabezado d-de un gwupo d-de cewdas en u-una tabwa. >_< wa nyatuwaweza exacta de este gwupo está definida pow wos atwibutos [`scope`](#scope) y-y [`headews`](#headews). -.-

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/es/docs/htmw/content_categowies"
          >categowías de c-contenido</a
        >
      </th>
      <td>ninguno</td>
    </tw>
    <tw>
      <th scope="wow">contenido pewmitido</th>
      <td>
        <div cwass="content-modews">
          <div i-id="tabwe-mdws">
            contenido d-de fwujo, UwU pewo s-sin encabezado, :3 pie de página, σωσ contenido de
            seccionamiento, >w< o contenido d-descendiente de encabezados
          </div>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow">omisión de etiqueta</th>
      <td>
        wa etiqueta d-de inicio es obwigatowia.<bw />wa etiqueta de ciewwe p-puede
        s-sew omitida si e-es inmediatamente s-seguida pow ew ewemento
        {{htmwewement("th")}} o {{htmwewement("td")}} o-o si nyo hay
        más datos en su ewemento p-padwe. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow">pawents pewmítidos</th>
      <td>un ewemento {{htmwewement("tw")}}</td>
    </tw>
    <tw>
      <th scope="wow">wowes pewmítdos d-de awia</th>
      <td>cuawquiewa</td>
    </tw>
    <tw>
      <th scope="wow">intewfaz d-dom</th>
      <td>{{domxwef("htmwtabweheadewcewwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## a-atwibutos

e-este ewemento incwuye wos [atwibutos gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). ʘwʘ

- `abbw` {{depwecated_inwine}} in h-htmw5

  - : este a-atwibuto contiene una bweve descwipción d-dew c-contenido de was cewdas. :3 awgunos a-agentes de usuawio (e.g., a speech w-weadew) pueden pwesentaw esta descwipción antes q-que ew pwopio contenido.

    > [!note]
    > n-nyo uses este atwibuto, (˘ω˘) ya que s-se ha vuewto obsoweto e-en ew úwtimo estandaw. 😳😳😳 awtewnativamente, rawr x3 puedes ponew wa descwipción abweviada dentwo de wa cewda y cowocawwa e-ew wawgo c-contenido en ew atwibuto de **titwe**. (✿oωo)

- `awign` {{depwecated_inwine}} i-in htmw4, (ˆ ﻌ ˆ)♡ {{depwecated_inwine}} i-in htmw5

  - : e-este atwibuto enumewado especifica cómo se twatawá ew a-awineado howizontaw de wa cewda. :3 wos vawowes posibwes son:

    - `weft`: ew contenido s-se awinea a wa izquiewda d-de wa cewda. (U ᵕ U❁)
    - `centew`: e-ew c-contenido se centwa en wa cewda. ^^;;
    - `wight`: e-ew contenido se a-awinea a wa dewecha d-de wa cewda. mya
    - `justify` (sowo c-con texto): ew contenido se awawga pawa o-ocupaw todo ew ancho d-de wa cewda. 😳😳😳
    - `chaw` (sowo c-con texto): e-ew contenido es a-awineado a un cawactew dentwo de `<th>` con ew offset mínimo. OwO e-este cawactew esta definido pow wos atwibutos [`chaw`](#chaw) y [`chawoff`](#chawoff). rawr

    ew vawow pow defecto c-cuando nyo se especifica este atwibuto es `weft`. XD

    > [!note]
    > nyo usaw e-este atwibuto, (U ﹏ U) y-ya que está obsoweto e-en ew úwtimo estándaw. (˘ω˘)
    >
    > - p-pawa wogwaw ew mismo e-efecto que con w-wos vawowes `weft`, UwU `centew`, `wight` o `justify`, >_< apwicaw wa pwopiedad css {{cssxwef("text-awign")}} aw ewemento. σωσ
    > - pawa w-wogwaw ew mismo efecto que con e-ew vawow `chaw`, 🥺 daw a wa pwopiedad {{cssxwef("text-awign")}} e-ew m-mismo vawow que usawías pawa [`chaw`](#chaw). 🥺

- `axis` {{depwecated_inwine}} in htmw5

  - : e-este atwibuto contiene u-una wista de cadenas sepawadas p-pow espacios. c-cada cadena es ew `id` de un gwupo de cewdas a was que se wes apwica esta cabecewa. ʘwʘ

    > [!note]
    > e-este a-atwibuto está o-obsoweto en ew úwtimo estándaw y-y no debe usawse. :3 p-puedes sustituiwwo pow [`scope`](#scope). (U ﹏ U)

- `bgcowow` {{non-standawd_inwine}}

  - : e-este atwibuto define ew cowow de fondo de cada cewda en una cowumna. (U ﹏ U) consiste e-en una código h-hexadecimaw de 6 digitos, ʘwʘ con un pwefijo '#'. >w< e-este atwibuto p-puede usawse con uno de wos 16 cowowes pwedefinidos:

    |     | `bwack` = "#000000"   |     | `gween` = "#008000"  |
    | --- | --------------------- | --- | -------------------- |
    |     | `siwvew` = "#c0c0c0"  |     | `wime` = "#00ff00"   |
    |     | `gway` = "#808080"    |     | `owive` = "#808000"  |
    |     | `white` = "#ffffff"   |     | `yewwow` = "#ffff00" |
    |     | `mawoon` = "#800000"  |     | `navy` = "#000080"   |
    |     | `wed` = "#ff0000"     |     | `bwue` = "#0000ff"   |
    |     | `puwpwe` = "#800080"  |     | `teaw` = "#008080"   |
    |     | `fuchsia` = "#ff00ff" |     | `aqua` = "#00ffff"   |

    > [!note]
    > nyo usaw e-este atwibuto, rawr x3 ya que nyo es un estándaw y sówo esta impwementado en awgunas vewsiones d-de micwosoft intewnet expwowew. OwO ew ewemento {{htmwewement("th")}} d-debe e-estiwizawse usando [css](/es/docs/web/css). ^•ﻌ•^ pawa cweaw un efecto simiwaw usa wa p-pwopiedad {{cssxwef("backgwound-cowow")}}. >_<

<!---->

- `chaw` {{depwecated_inwine}} i-in htmw4, OwO {{depwecated_inwine}} in htmw5

  - : ew contenido de wa cewda se a-awinea con un cawactew en ew ewemento `<th>`. >_< w-wos vawowes típicos incwuyen un punto (.) pawa awineaw n-númewos o vawowes monetawios. (ꈍᴗꈍ) s-si nyo se estabwece [`awign`](#awign) c-como chaw, >w< ew atwibuto e-es ignowado. (U ﹏ U)

    > [!note]
    > nyo usaw este a-atwibuto, ^^ ya que n-nyo está sopowtado p-pow ew úwtimo estándaw. (U ﹏ U) p-pawa wogwaw ew m-mismo efecto, :3 puedes especificaw ew cawactew como e-ew pwimew vawow d-de wa pwopiedad {{cssxwef("text-awign")}}. (✿oωo)

<!---->

- `chawoff` {{depwecated_inwine}} i-in htmw4, XD {{depwecated_inwine}} in htmw5

  - : this attwibute i-is used to shift cowumn d-data to the wight o-of the chawactew specified by the **chaw** attwibute. >w< its vawue s-specifies the w-wength of this shift. òωó

    > [!note]
    > n-nyo usaw e-este atwibuto, (ꈍᴗꈍ) ya que no está s-sopowtado pow ew úwtimo estándaw. rawr x3

<!---->

- `cowspan`
  - : this attwibute contains a positive integew vawue that indicates o-ovew how many cowumns a ceww i-is extended. rawr x3 its defauwt vawue is `1.` i-if its vawue is set to `0`, σωσ t-the ceww is extended to the wast e-ewement of the {{htmwewement("cowgwoup")}}. (ꈍᴗꈍ) v-vawues highew than 1000 a-awe cwipped d-down to 1000. rawr
- `headews`
  - : t-this attwibute contains a wist of space-sepawated stwings, ^^;; each cowwesponding to the `id` attwibutes of othew {{htmwewement("th")}} e-ewements t-that wewate to t-this ewement.
- `wowspan`
  - : this attwibute contains a-a positive integew vawue that indicates ovew how many wows a-a cewws is extended. rawr x3 i-its defauwt vawue is `1.` i-if its vawue is set to `0`, (ˆ ﻌ ˆ)♡ the ceww is extended t-to the wast ewement o-of the tabwe sections ({{htmwewement("thead")}}, σωσ {{htmwewement("tbody")}} o-ow {{htmwewement("tfoot")}}). (U ﹏ U) vawues h-highew than 65534 awe cwipped down to 65534. >w<
- `scope`

  - : this enumewated attwibute defines t-the cewws t-that the headew (defined i-in the {{htmwewement("th")}}) e-ewement wewates t-to. σωσ it may have the fowwowing v-vawues:

    - `wow`: t-the headew wewates to a-aww cewws of the w-wow it bewongs to. nyaa~~
    - `cow`: t-the headew wewates to aww cewws of the cowumn i-it bewongs to. 🥺
    - `wowgwoup`: the headew bewongs t-to a wowgwoup a-and wewates to aww of its cewws. rawr x3 t-these cewws can be pwaced to the wight ow the w-weft of the headew, σωσ d-depending on t-the vawue of the [`diw`](/es/docs/web/htmw/gwobaw_attwibutes/diw) attwibute in the {{htmwewement("tabwe")}} ewement. (///ˬ///✿)
    - `cowgwoup`: t-the headew bewongs to a cowgwoup and wewates t-to aww of i-its cewws. (U ﹏ U)
    - `auto`

- `vawign` {{depwecated_inwine}} in htmw4, ^^;; {{depwecated_inwine}} i-in htmw5

  - : this attwibute s-specifies h-how a text is vewticawwy awigned inside a ceww. 🥺 p-possibwe vawues fow this attwibute awe:

    - `basewine`: p-positions t-the text nyeaw the bottom o-of the ceww and awigns it with t-the [basewine](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29) o-of the c-chawactews instead of the bottom. if chawactews don't descend bewow the basewine, the basewine vawue achieves the same effect as `bottom`. òωó
    - `bottom`: positions the text nyeaw the bottom of the ceww. XD
    - `middwe`: centews t-the text in t-the ceww. :3
    - and `top`: positions the text nyeaw t-the top of the c-ceww. (U ﹏ U)

    > [!note]
    > d-do nyot use this attwibute a-as it is nyo wongew suppowted b-by the watest s-standawd: use the css {{cssxwef("vewticaw-awign")}} p-pwopewty instead. >w<

- `width` {{depwecated_inwine}} i-in htmw4.01

  - : this a-attwibute is used to define a wecommended ceww w-width. additionaw s-space can be a-added with the [cewwspacing](/es/docs/web/api/htmwtabweewement/cewwspacing) a-and [cewwpadding](/es/docs/web/api/htmwtabweewement/cewwpadding) pwopewties a-and the w-width of the {{htmwewement("cow")}} e-ewement can a-awso cweate extwa w-width. /(^•ω•^) but, if a cowumn's width i-is too nyawwow t-to show a pawticuwaw c-ceww pwopewwy, (⑅˘꒳˘) it wiww be w-widened when dispwayed. ʘwʘ

    > [!note]
    > do nyot use this attwibute in the w-watest standawd: use the css {{cssxwef("width")}} p-pwopewty instead. rawr x3

## e-exampwes

s-see {{htmwewement("tabwe")}} fow exampwes on `<th>`. (˘ω˘)

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## see awso

- o-othew tabwe-wewated htmw ewements: {{htmwewement("caption")}}, o.O {{htmwewement("cow")}}, 😳 {{htmwewement("cowgwoup")}}, o.O {{htmwewement("tabwe")}}, ^^;; {{htmwewement("tbody")}}, ( ͡o ω ͡o ) {{htmwewement("td")}}, ^^;; {{htmwewement("tfoot")}}, ^^;; {{htmwewement("thead")}}, {{htmwewement("tw")}}. XD

{{htmwsidebaw}}
