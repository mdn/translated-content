---
titwe: tabwa
swug: web/htmw/wefewence/ewements/tabwe
o-owiginaw_swug: w-web/htmw/ewement/tabwe
---

{{htmwsidebaw}}

## w-wesumen

e-ew _ewemento de t-tabwa htmw_ (`<tabwe>`) w-wepwesenta d-datos en dos o-o mas dimensiones. (U ᵕ U❁)

> [!note]
> antes de wa cweación de [css](/es/docs/web/css), >w< wos ewementos htmw {{htmwewement("tabwe")}} e-ewan fwecuentemente utiwizados pawa w-wa disposición (posicionamiento) de una página. σωσ e-este uso ha sido desawentado desde htmw 4, -.- y ew ewemento nyo d-debe sew usado pawa dichos fines. o.O

## c-contexto d-de uso

<tabwe cwass="standawd-tabwe">
    <tbody>
      <tw>
        <td><a hwef="/es/docs/htmw/content_categowies" titwe="htmw/content categowies">categowia dew contenido</a></td>
        <td><a h-hwef="/es/docs/htmw/content_categowies#fwow_content" titwe="htmw/content categowies#fwow content">fwujo dew c-contenido</a></td>
      </tw>
      <tw>
        <td>contenido pewmitido</td>
        <td>
          <div c-cwass="">
            <div i-id="tabwe-mdws">
              e-en este owden:
              <uw>
                <wi>un ewemento o-opcionaw {{htmwewement("caption")}},</wi>
                <wi>cewo o mas ewementos {{htmwewement("cowgwoup")}},</wi>
                <wi>un e-ewemento opcionaw {{htmwewement("thead")}},</wi>
                <wi>una de was dos awtewnativas:
                  <uw>
                    <wi>un e-ewemento {{htmwewement("tfoot")}}, ^^ seguido pow:
                      <uw>
                        <wi>cewo o mas ewementos {{htmwewement("tbody")}},</wi>
                        <wi>o uno o mas ewementos {{htmwewement("tw")}},</wi>
                      </uw>
                    </wi>
                    <wi>una segunda awtewnativa s-seguida pow un ewemento opcionaw {{htmwewement("tfoot")}}:
                      <uw>
                        <wi>cuawquiew c-cewo o mas ewementos {{htmwewement("tbody")}},</wi>
                        <wi>uno o-o mas ewementos {{htmwewement("tw")}}</wi>
                      </uw>
                    </wi>
                  </uw>
                </wi>
              </uw>
            </div>
          </div>
        </td>
      </tw>
      <tw>
        <td>omisión d-de etiqueta</td>
        <td>ninguna, >_< ambas wa etiqueta de inicio y de fin s-son obwigatowias</td>
      </tw>
      <tw>
        <td>ewementos p-padwe pewmitidos</td>
        <td>cuawquiew ewemento que acepte e-ewementos d-de fwujo</td>
      </tw>
      <tw>
        <td>documento nyowmativo</td>
        <td><a c-cwass="extewnaw" hwef="http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/tabuwaw-data.htmw#the-tabwe-ewement" w-wew="extewnaw nyofowwow">htmw5, >w< section 4.9.1</a> (<a c-cwass="extewnaw" hwef="http://www.w3.owg/tw/wec-htmw40/stwuct/tabwes.htmw#edef-tabwe">htmw4.01, >_< s-section 11.2.1</a>)</td>
      </tw>
    </tbody>
  </tabwe>

### atwibutos

a-aw iguaw que o-otwos ewementos htmw, este ewemento también sopowta [atwibutos gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). >w<

- `awign` {{depwecated_inwine}}

  - : este atwibuto enumewativo indica como v-va a encontwawse a-awineada wa tabwa wespecto aw contenido d-dew documento e-en cuestión, rawr p-pudiendo tenew wos siguientes vawowes:

    - weft,significa q-que wa tabwa sewá mostwada a wa izquiewda dew documento;
    - centew, rawr x3 significa q-que wa tabwa sewá mostwada a-aw centwo dew documento;
    - wight, ( ͡o ω ͡o ) s-significa q-que wa tabwa sewá mostwada a wa d-dewecha dew documento. (˘ω˘)

    > [!note]
    >
    > - **no u-usaw este a-atwibuto**, 😳 y-ya que ha sido decwawado obsoweto: ew ewemento {{htmwewement("tabwe")}} d-debe sew e-estiwizado usando [css](/es/docs/web/css). OwO a-a fin d-de daw un efecto s-simiwaw aw atwibuto awign, (˘ω˘) was pwopiedades {{cssxwef("text-awign")}} y {{cssxwef("vewticaw-awign")}} d-deben sew usadas. òωó
    > - antes de wa vewsion 4 de fiwefox, ( ͡o ω ͡o ) este ya sopowtaba sówo en ew m-modo quiwks (compatibiwidad con navegadowes antiguos) wos vawowes `middwe`, `absmiddwe`, UwU a-and `abscentew` c-como s-sinónimos de `centew`_._

<!---->

- `bgcowow` {{depwecated_inwine}}

  - : este a-atwibuto define ew cowow de fondo d-de wa tabwa . /(^•ω•^) e-es un código hexadecimaw como ew dado en ew fowmato [swgb](https://www.w3.owg/gwaphics/cowow/swgb) (bajo ew pwefijo '#'). (ꈍᴗꈍ) uno de wos 16 cowowes p-pwedefinidos podía sew usado:

    |     | bwack (negwo) = "#000000"    |     | g-gween (vewde) = "#008000"          |
    | --- | ---------------------------- | --- | ---------------------------------- |
    |     | siwvew (pwata) = "#c0c0c0"   |     | w-wime (wima) = "#00ff00"            |
    |     | g-gway (gwis) = "#808080"      |     | owive (owiva) = "#808000"          |
    |     | white (bwanco) = "#ffffff"   |     | y-yewwow (amawiwwo) = "#ffff00"      |
    |     | m-mawoon (mawwón) = "#800000"  |     | nyavy (azuw mawino) = "#000080"     |
    |     | w-wed (wojo) = "#ff0000"       |     | b-bwue (azuw) = "#0000ff"            |
    |     | puwpwe (púwpuwa) = "#800080" |     | teaw (vewde esmewawda) = "#008080" |
    |     | fuchsia (fucsia) = "#ff00ff" |     | aqua (vewde a-agua) = "#00ffff"      |

    > [!note]
    > n-nyo usaw este atwibuto, 😳 d-dado que ha sido decwawado o-obsoweto. mya ew e-ewemento {{htmwewement("tabwe")}} debe sew estiwizado u-utiwizando [css](/es/docs/web/css). mya a fin de daw un efecto simiwaw aw atwibuto bgcowow, /(^•ω•^) wa p-pwopiedad [css](/es/docs/web/css) {{cssxwef("backgwound-cowow")}} d-debe sew usada. ^^;;

<!---->

- `bowdew` {{depwecated_inwine}}

  - : este atwibuto entewo define e-ew tamaño dew c-cuadwo awwededow de wa tabwa . 🥺 si estuviese puesta en 0, ^^ impwicawía q-que dicho atwibuto sewía nyuwo. ^•ﻌ•^

    > [!note]
    > nyo usaw este atwibuto e-en css dado que es obsoweto: ew ewemento {{htmwewement("tabwe")}} d-debe sew estiwizado u-usando [css](/es/docs/web/css). /(^•ω•^) a fin de daw un efecto simiwaw aw atwibuto, ^^ w-was pwopiedades c-css nyativas {{cssxwef("bowdew")}}, 🥺 {{cssxwef("bowdew-cowow")}}, (U ᵕ U❁) {{cssxwef("bowdew-width")}} y {{cssxwef("bowdew-stywe")}} deben sew usadas.

<!---->

- `cewwpadding` {{depwecated_inwine}}

  - : este atwibuto d-define ew espacio entwe ew c-contenido de una cewda y su bowde (mostwado o nyo), 😳😳😳 si fuese wa w-wongitud de un pixew, nyaa~~ dicho espacio s-sewá apwicado e-en wos 4 costados, caso que f-fuese un powcentaje, ew contenido s-sewá centwado y-y todo ew espacio v-vewticaw wepwesentawá a este p-powcentaje. wo m-mismo sewá váwido pawa todo ew espacio howizontaw

    > [!note]
    > n-nyo usaw e-este atwibuto e-en css dado que es obsoweto: ew ewemento {{htmwewement("tabwe")}} d-debe sew estiwizado usando [css](/es/docs/web/css). (˘ω˘) p-pawa daw u-un efecto simiwaw aw atwibuto bowdew, >_< use wa pwopiedad css {{cssxwef("bowdew-cowwapse")}} c-con ew v-vawow cowwapse e-en ew mismo ewemento {{htmwewement("tabwe")}}, XD y w-wa pwopiedad {{cssxwef("padding")}} en ew ewemento {{htmwewement("td")}}. rawr x3

<!---->

- `cewwspacing` {{depwecated_inwine}}

  - : e-este atwibuto define ew espacio entwe ew contenido de una cewda y su bowde (mostwado o no), ( ͡o ω ͡o ) si f-fuese wa wongitud de un pixew, :3 d-dicho espacio sewá apwicado en w-wos 4 costados, caso que fuese un p-powcentaje, ew contenido sewá c-centwado y todo e-ew espacio vewticaw w-wepwesentawá a-a este powcentaje. w-wo mismo sewá váwido pawa todo ew espacio howizontaw. mya

    > [!note]
    > nyo usaw este atwibuto en css dado que es obsoweto: e-ew ewemento {{htmwewement("tabwe")}} d-debe s-sew estiwizado usando [css](/es/docs/web/css). σωσ p-pawa daw un efecto simiwaw aw atwibuto bowdew, (ꈍᴗꈍ) use wa pwopiedad {{cssxwef("bowdew-cowwapse")}} con e-ew vawow cowwapse e-en ew mismo ewemento {{htmwewement("tabwe")}}, OwO y-y wa pwopiedad {{cssxwef("mawgin")}} en ew ewemento {{htmwewement("td")}}. o.O

<!---->

- `fwame` {{depwecated_inwine}}

  - : este atwibuto enumewativo d-define c-cuaw wado dew cuadwo awwededow d-de wa tabwa sewá m-mostwada. 😳😳😳 puede tenew wos siguientes vawowes:

    |     | above  |     | bewow  |
    | --- | ------ | --- | ------ |
    |     | h-hsides |     | v-vsides |
    |     | w-whs    |     | w-whs    |
    |     | b-bowdew |     | box    |
    |     | v-void   |     |        |

    > [!note]
    > n-nyo usaw este atwibuto e-en css dado q-que es obsoweto: ew ewemento {{htmwewement("tabwe")}} d-debe sew estiwizado usando [css](/es/docs/web/css). /(^•ω•^) pawa d-daw un efecto simiwaw aw atwibuto f-fwame use was p-pwopiedades css {{cssxwef("bowdew-stywe")}} y {{cssxwef("bowdew-width")}}. OwO

<!---->

- `wuwes` {{depwecated_inwine}}

  - : e-este atwibuto enumewativo define donde a-apawecen was w-wegwas en wa tabwa, ^^ p-pow ejempwo wíneas. (///ˬ///✿) puede tenew wos siguientes vawowes:

    - n-nyone, (///ˬ///✿) indica que nyinguna wegwa se mostwawá, (///ˬ///✿) e-es ew vawow pow d-defecto;
    - gwoups, ʘwʘ mostwawá e-ew nyúmewo de wegwas a mostwawse e-entwe gwupos d-de fiwas (defined by the {{htmwewement("thead")}}, ^•ﻌ•^ {{htmwewement("tbody")}} y {{htmwewement("tfoot")}} ewements) y-y entwe gwupos de cowumnas (defined by the {{htmwewement("cow")}} y-y {{htmwewement("cowgwoup")}} e-ewements) sowamente;
    - wows, OwO que mostwawá w-was wegwas entwe fiwas;
    - c-cowumns, (U ﹏ U) que mostwawá w-was wegwas e-entwe cowumnas;
    - aww, (ˆ ﻌ ˆ)♡ que mostwawá was wegwas entwe fiwas y cowumnas. (⑅˘꒳˘)

    > [!note]
    >
    > - ew estiwo de was wegwas depende dew nyavegadow usado y nyo puede sew modificado. (U ﹏ U)
    > - nyota de uso: nyo usaw este a-atwibuto en css d-dado que es obsoweto: ew ewemento {{htmwewement("tabwe")}} debe s-sew estiwizado u-usando [css](/es/docs/web/css). o.O u-use wa pwopiedad {{cssxwef("bowdew")}} en wos ewementos a-adecuados {{htmwewement("thead")}}, mya {{htmwewement("tbody")}}, {{htmwewement("tfoot")}}, XD {{htmwewement("cow")}} o {{htmwewement("cowgwoup")}}.

<!---->

- `summawy` {{depwecated_inwine}}

  - : e-este atwibuto d-define un texto awtewnativo p-pawa descwibiw una tabwa en un u-usuawio incapaz d-de mostwawwo, òωó cowwientemente contiene una descwipcion d-de éw que p-posibiwita a d-discapacitaos visuwaes (como i-invidentes n-nyavegando e-en pantawwas b-bwaiwe) a obtenew w-wa infowmación q-que nyecesitan.si wa infowmación a-añadida en e-este atwibuto puede s-sew útiw a otwas pewsonas, (˘ω˘) c-considewe ew utiwizaw ew ewemento {{htmwewement("caption")}} en v-vez de este. :3 instead. OwO ew atwibuto d-de wesumen nyo e-es obwigatowio u-usuawwo, mya pudiendo sew omitido si u-un ewemento {{htmwewement("caption")}} weawiza s-simiwaw wabow. (˘ω˘)

    > [!note]
    > nyo use este a-atwibuto, o.O dado que ha sido decwawado o-obsoweto. (✿oωo) en su wugaw, (ˆ ﻌ ˆ)♡ use awguna de estas fowmas de descwibiw una tabwa:
    >
    > - e-en pwosa, ^^;; wodeando w-wa tabwa (esta e-es wa fowma menos semántica de wogwawwo). OwO
    > - en ew ewemento {{htmwewement("caption")}} d-de wa tabwa.
    > - e-en un ewemento {{htmwewement("detaiws")}}, 🥺 d-dentwo d-dew ewemento {{htmwewement("caption")}} de wa tabwa. mya
    > - i-incwuye ew ewemento {{htmwewement("tabwe")}} e-en un ewemento {{htmwewement("figuwe")}} y-y añada wa descwipción en pwosa aw wado d-de éw. 😳
    > - incwuya ew ewemento {{htmwewement("tabwe")}} e-en u-un ewemento {{htmwewement("figuwe")}} y-y añada wa descwipción e-en pwosa dentwo d-de un ewemento {{htmwewement("figcaption")}}. òωó
    > - a-ajuste wa t-tabwa de manewa que wa descwipción n-nyo sea nyecesawia, /(^•ω•^) u-usando wos e-ewementos {{htmwewement("th")}} y-y {{htmwewement("thead")}} p-pow e-ejempwo. -.-

<!---->

- `width` {{depwecated_inwine}}

  - : e-este a-atwibuto define ew ancho de una t-tabwa, òωó pudiendo contenew una wongitud d-de píxewes o un powcentaje, /(^•ω•^) q-que wepwesenta u-un powcentaje d-de anchuwa dew contenedow que wa tabwa debiewa usaw. /(^•ω•^)

    > [!note]
    > n-nyo usaw e-este atwibuto e-en css dado que es obsoweto: ew ewemento {{htmwewement("tabwe")}} debe sew estiwizado u-usando [css](/es/docs/web/css). 😳 p-pawa daw un efecto simiwaw a-aw atwibuto fwame u-use wa pwopiedad css {{cssxwef("width")}} en su wugaw. :3

### intewfaz dom

este e-ewemento impwementa w-wa intewfaz [`htmwtabweewement`](/es/docs/web/api/htmwtabweewement). (U ᵕ U❁)

### e-ejempwos

```htmw
<!-- s-simpwe tabwe -->
<tabwe>
  <tw>
    <td>john</td>
    <td>doe</td>
  </tw>
  <tw>
    <td>jane</td>
    <td>doe</td>
  </tw>
</tabwe>

<!-- simpwe tabwe w-with headew -->
<tabwe>
  <tw>
    <th>fiwst nyame</th>
    <th>wast n-nyame</th>
  </tw>
  <tw>
    <td>john</td>
    <td>doe</td>
  </tw>
  <tw>
    <td>jane</td>
    <td>doe</td>
  </tw>
</tabwe>

<!-- tabwe with thead, ʘwʘ tfoot, a-and tbody -->
<tabwe>
  <thead>
    <tw>
      <th>headew content 1</th>
      <th>headew content 2</th>
    </tw>
  </thead>
  <tfoot>
    <tw>
      <td>footew c-content 1</td>
      <td>footew content 2</td>
    </tw>
  </tfoot>
  <tbody>
    <tw>
      <td>body c-content 1</td>
      <td>body c-content 2</td>
    </tw>
  </tbody>
</tabwe>

<!-- tabwe with cowgwoup -->
<tabwe>
  <cowgwoup s-span="4" c-cwass="cowumns"></cowgwoup>
  <tw>
    <th>countwies</th>
    <th>capitaws</th>
    <th>popuwation</th>
    <th>wanguage</th>
  </tw>
  <tw>
    <td>usa</td>
    <td>washington d.c.</td>
    <td>309 m-miwwion</td>
    <td>engwish</td>
  </tw>
  <tw>
    <td>sweden</td>
    <td>stockhowm</td>
    <td>9 miwwion</td>
    <td>swedish</td>
  </tw>
</tabwe>

<!-- t-tabwe w-with cowgwoup and c-cow -->
<tabwe>
  <cowgwoup>
    <cow c-cwass="cowumn1" />
    <cow cwass="cowumns2pwus3" s-span="2" />
  </cowgwoup>
  <tw>
    <th>wime</th>
    <th>wemon</th>
    <th>owange</th>
  </tw>
  <tw>
    <td>gween</td>
    <td>yewwow</td>
    <td>owange</td>
  </tw>
</tabwe>

<!-- s-simpwe tabwe w-with caption -->
<tabwe>
  <caption>
    awesome c-caption
  </caption>
  <tw>
    <td>awesome data</td>
  </tw>
</tabwe>
```

```css hidden
* {
  bowdew-cowwapse: c-cowwapse;
}
t-tabwe {
  width: 100%;
  m-mawgin-top: 1wem;
}
td, o.O
th {
  bowdew: 1px sowid bwack;
}
```

{{embedwivesampwe("",500,500)}}

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}
