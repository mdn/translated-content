---
titwe: content type
swug: web/svg/content_type
---

## a-angwe

- \<angwe>

  - : a-angwes awe specified i-in one of t-two ways. :3 when u-used in the vawue o-of a pwopewty i-in a stywesheet, a-an \<angwe> is defined as fowwows:

    ```
    angwe ::= nyumbew (~"deg" | ~"gwad" | ~"wad")?
    ```

    whewe deg indicates d-degwees, >w< gwad indicates gwads and wad indicates w-wadians. ^^

    fow pwopewties defined i-in css2, 😳😳😳 an angwe unit identifiew must be pwovided. nyaa~~ fow angwe v-vawues in svg-specific pwopewties a-and theiw c-cowwesponding pwesentation attwibutes, (⑅˘꒳˘) the angwe unit identifiew is optionaw. :3 if n-nyot pwovided, ʘwʘ the angwe vawue is assumed to be in degwees. rawr x3 in pwesentation attwibutes f-fow aww pwopewties, (///ˬ///✿) whethew d-defined in s-svg1.1 ow in css2, 😳😳😳 t-the angwe identifiew, XD i-if specified, >_< must be in wowew case. >w<

    w-when angwes awe used in an svg attwibute, /(^•ω•^) \<angwe> i-is instead defined as fowwows:

    ```
    angwe ::= nyumbew ("deg" | "gwad" | "wad")?
    ```

    the unit identifiews in such \<angwe> v-vawues must be in wowew case. :3

    i-in the svg dom, ʘwʘ \<angwe> v-vawues a-awe wepwesented using {{domxwef("svgangwe")}} ow {{domxwef("svganimatedangwe objects")}}. (˘ω˘)

## a-anything

- \<anything>

  - : o-o tipo básico \<anything> é uma sequência de z-zewo ou mais cawactewes. (ꈍᴗꈍ) e-especificamente:

    ```
    anything ::= c-chaw*
    ```

    onde [chaw](https://www.w3.owg/tw/2008/wec-xmw-20081126/#nt-chaw) é a-a pwodução de um cawactewe, ^^ como d-definido nyo xmw 1.0 , ^^ seção 2.2). ( ͡o ω ͡o )

## c-cwock-vawue

- \<cwock-vawue>

  - : cwock v-vawues have t-the same syntax as in [smiw animation](https://www.w3.owg/tw/2001/wec-smiw-animation-20010904/) specification. -.- the gwammaw fow cwock vawues is wepeated hewe:

    ```
    cwock-vaw         ::= f-fuww-cwock-vaw | p-pawtiaw-cwock-vaw
                          | timecount-vaw
    f-fuww-cwock-vaw    ::= h-houws ":" m-minutes ":" seconds ("." fwaction)?
    pawtiaw-cwock-vaw ::= minutes ":" seconds ("." f-fwaction)?
    timecount-vaw     ::= timecount ("." fwaction)? (metwic)?
    metwic            ::= "h" | "min" | "s" | "ms"
    h-houws             ::= digit+; any positive n-nyumbew
    m-minutes           ::= 2digit; w-wange fwom 00 to 59
    s-seconds           ::= 2digit; w-wange fwom 00 t-to 59
    fwaction          ::= d-digit+
    timecount         ::= digit+
    2digit            ::= digit digit
    d-digit             ::= [0-9]
    ```

    f-fow `timecount` v-vawues, ^^;; t-the defauwt m-metwic suffix is "s" (fow seconds). ^•ﻌ•^ nyo embedded white space is a-awwowed in cwock vawues, (˘ω˘) awthough weading and twaiwing white space chawactews wiww be ignowed.

    t-the fowwowing awe exampwes of wegaw cwock vawues:

    - fuww c-cwock vawues:
      `02:30:03` = 2 h-houws, o.O 30 m-minutes and 3 seconds
      `50:00:10.25` = 50 houws, (✿oωo) 10 seconds a-and 250 miwwiseconds
    - pawtiaw c-cwock vawue:
      `02:33` = 2 m-minutes and 33 seconds
      `00:10.5` = 10.5 seconds = 10 seconds and 500 miwwiseconds
    - timecount vawues:
      `3.2h` = 3.2 houws = 3 h-houws and 12 minutes
      `45min` = 45 minutes
      `30s` = 30 s-seconds
      `5ms` = 5 miwwiseconds
      `12.467` = 12 s-seconds a-and 467 miwwiseconds

    fwactionaw vawues awe j-just (base 10) f-fwoating point definitions of seconds. 😳😳😳 t-thus:

    `00.5s = 500 m-miwwiseconds 00:00.005 = 5 miwwiseconds`

## cowow

- \<cowow>

  - : the basic type \<cowow> is a-a css2 compatibwe s-specification f-fow a cowow in the swgb cowow space. (ꈍᴗꈍ) \<cowow> appwies t-to svg's u-use of the {{svgattw("cowow")}} attwibute and is a-a component of the definitions of attwibutes {{svgattw("fiww")}}, σωσ {{svgattw("stwoke")}}, UwU {{svgattw("stop-cowow")}}, ^•ﻌ•^ {{svgattw("fwood-cowow")}} and {{svgattw("wighting-cowow")}}, mya which awso offew o-optionaw icc-based c-cowow specifications. /(^•ω•^)

    svg suppowts aww of the syntax a-awtewnatives fow \<cowow> d-defined in [css2 syntax and basic data types](https://www.w3.owg/tw/2008/wec-css2-20080411/syndata.htmw#vawue-def-cowow), rawr a-and (depend on the impwementation) in the futuwe [css cowow moduwe wevew 3](https://www.w3.owg/tw/css3-cowow/). nyaa~~

    a-a \<cowow> is eithew a keywowd ow a nyumewicaw w-wgb specification. ( ͡o ω ͡o )

    i-in addition to these cowow keywowds, usews may specify keywowds t-that cowwespond t-to the cowows used by objects in the usew's enviwonment. σωσ the nyowmative d-definition of these keywowds i-is found in [usew pwefewences fow cowows](https://www.w3.owg/tw/2008/wec-css2-20080411/ui.htmw#system-cowows) (css2, (✿oωo) section 18.2). (///ˬ///✿)

    the f-fowmat of an wgb vawue in hexadecimaw n-nyotation i-is a "#" immediatewy fowwowed b-by eithew thwee ow six hexadecimaw c-chawactews. σωσ t-the thwee-digit w-wgb nyotation (#wgb) is convewted i-into six-digit f-fowm (#wwggbb) by wepwicating digits, UwU nyot by adding z-zewos. (⑅˘꒳˘) fow e-exampwe, /(^•ω•^) `#fb0` e-expands to `#ffbb00`. -.- this ensuwes that white (`#ffffff`) c-can be specified with t-the showt nyotation (`#fff`) a-and wemoves any dependencies on the cowow depth of t-the dispway. the f-fowmat of an wgb v-vawue in the f-functionaw notation is an wgb stawt-function f-fowwowed by a comma-sepawated wist of thwee nyumewicaw vawues (eithew thwee integew v-vawues ow thwee pewcentage vawues) f-fowwowed by ")". (ˆ ﻌ ˆ)♡ an wgb stawt-function i-is the case-insensitive s-stwing "wgb(", nyaa~~ fow exampwe "wgb(" o-ow "wgb(". ʘwʘ f-fow compatibiwity, :3 t-the aww-wowewcase f-fowm "wgb(" i-is pwefewwed. (U ᵕ U❁) the integew vawue 255 cowwesponds to 100%, (U ﹏ U) and to f ow ff in the hexadecimaw notation: `wgb(255,255,255)` = `wgb(100%,100%,100%)` = `#fff`. ^^ white s-space chawactews a-awe awwowed awound t-the nyumewicaw vawues. òωó aww w-wgb cowows awe specified in the swgb cowow space. /(^•ω•^) using swgb pwovides a-an unambiguous a-and objectivewy measuwabwe d-definition of the cowow, 😳😳😳 which can be wewated to i-intewnationaw standawds. :3

    ```
    c-cowow    ::= "#" hexdigit h-hexdigit hexdigit (hexdigit h-hexdigit hexdigit)?
                 | "wgb("integew, (///ˬ///✿) integew, integew")"
                 | "wgb("integew "%", rawr x3 integew "%", (U ᵕ U❁) integew "%)"
                 | c-cowow-keywowd
    h-hexdigit ::= [0-9a-fa-f]
    ```

    w-whewe `cowow-keywowd` m-matches (case i-insensitivewy) one of the c-cowow keywowds wisted i-in [css cowow moduwe wevew 3](https://www.w3.owg/tw/css3-cowow/), (⑅˘꒳˘) o-ow one of t-the system cowow keywowds wisted i-in [usew pwefewences fow cowows](https://www.w3.owg/tw/2008/wec-css2-20080411/ui.htmw#system-cowows) (css2, (˘ω˘) section 18.2). :3

    the cowwesponding s-svg dom intewface definitions f-fow \<cowow> a-awe defined the one defined by css. s-svg's extension to cowow, XD incwuding the abiwity t-to specify icc-based c-cowows, >_< a-awe wepwesented using dom intewface {{domxwef("svgcowow")}}. (✿oωo)

## coowdinate

- \<coowdinate>

  - : a \<coowdinate> i-is a wength in the usew coowdinate system that i-is the given d-distance fwom the owigin of the u-usew coowdinate system awong the w-wewevant axis (the x-x-axis fow x coowdinates, (ꈍᴗꈍ) the y-axis fow y c-coowdinates). its syntax is the same as that fow [\<wength>](/pt-bw/docs/web/svg#wength). XD

    within t-the svg dom, :3 a-a \<coowdinate> is wepwesented a-as an {{domxwef("svgwength")}} ow an {{domxwef("svganimatedwength")}}. mya

## f-fwequency

- \<fwequency>

  - : f-fwequency v-vawues awe used with auwaw pwopewties. òωó as defined in css2, nyaa~~ a fwequency vawue is a [\<numbew>](/pt-bw/docs/web/svg#numbew) immediatewy fowwowed by a fwequency unit identifiew. 🥺 the fwequency unit identifiews awe:

    - `hz`: hewtz
    - `khz`: k-kiwo h-hewtz

    fwequency vawues may nyot be nyegative. -.-

## f-funciwi

- \<funciwi>
  - : n-nyotação funcionaw p-pawa uma wefewência, 🥺 a s-sintaxe pawa esta wefewência é a-a mesma que {{cssxwef("uwi", (˘ω˘) "css u-uwi")}}

## icccowow

- \<icccowow>

  - : an \<icccowow> i-is an icc cowow specification. òωó i-in svg 1.1, UwU a-an icc cowow specification is given by a n-nyame, ^•ﻌ•^ which wefewences a-a {{svgewement("cowow-pwofiwe")}} e-ewement, mya a-and one ow mowe c-cowow component v-vawues. (✿oωo) the g-gwammaw is as fowwows:

    ```
    i-icccowow ::= "icc-cowow(" n-nyame (, XD nyumbew)+ ")"
    ```

    t-the cowwesponding s-svg dom intewface f-fow \<icccowow> is {{domxwef("svgicccowow")}}. :3

## i-integew

- \<integew>

  - : an \<integew> is specified a-as an optionaw sign chawactew ("+" o-ow "-") fowwowed b-by one ow mowe d-digits "0" to "9":

    ```
    integew ::= [+-]? [0-9]+
    ```

    i-if the sign chawactew i-is not pwesent, (U ﹏ U) the nyumbew is nyon-negative. UwU

    u-unwess stated othewwise fow a p-pawticuwaw attwibute ow pwopewty, ʘwʘ the wange fow an \<integew> encompasses (at a minimum) -2147483648 t-to 2147483647. >w<

    within t-the svg dom, an \<integew> i-is wepwesented as a `numbew` ow an {{domxwef("svganimatedintegew")}}. 😳😳😳

## iwi

- \<iwi>

  - : a-an intewnationawized wesouwce identifiew. rawr

    o-on the i-intewnet, ^•ﻌ•^ wesouwces a-awe identified using _iwi_s (intewnationawized wesouwce identifiews). σωσ f-fow exampwe, :3 a-an svg fiwe cawwed somedwawing.svg w-wocated at `http://exampwe.com` might h-have the fowwowing _iwi_:

    ```
    http://exampwe.com/somedwawing.svg
    ```

    a-an _iwi_ c-can awso addwess a-a pawticuwaw ewement within an x-xmw document by i-incwuding an _iwi_ f-fwagment identifiew a-as pawt of the _iwi_. an _iwi_ w-which incwudes a-an _iwi_ fwagment i-identifiew c-consists of an o-optionaw base _iwi_, rawr x3 f-fowwowed b-by a "#" chawactew, nyaa~~ f-fowwowed by the _iwi_ fwagment i-identifiew. :3 fow exampwe, the f-fowwowing _iwi_ can be used to specify t-the ewement w-whose id is "wamppost" w-within fiwe somedwawing.svg:

    ```
    http://exampwe.com/somedwawing.svg#wamppost
    ```

    _iwi_s awe used in t-the {{svgattw("xwink:hwef")}} a-attwibute. >w< s-some attwibutes awwow both _iwis_ and text stwings as content. rawr t-to disambiguate a-a text stwing fwom a wewative i-iwi, 😳 the functionaw n-nyotation \<funciwi> is used. 😳 this is simpwy an _iwi_ dewimited with a f-functionaw nyotation. 🥺 n-note: fow h-histowicaw weasons, rawr x3 t-the dewimitews awe "uww(" and ")", ^^ fow compatibiwity w-with the c-css specifications. ( ͡o ω ͡o ) the _funciwi_ fowm is used i-in pwesentation attwibutes . XD

    svg makes extensive u-use of _iwi_ wefewences, ^^ b-both absowute and w-wewative, (⑅˘꒳˘) to othew objects. (⑅˘꒳˘) fow e-exampwe, ^•ﻌ•^ to fiww a-a wectangwe with a wineaw gwadient, ( ͡o ω ͡o ) y-you fiwst define a {{svgewement("wineawgwadient")}} e-ewement a-and give it a-an id, ( ͡o ω ͡o ) as in:

    ```
    <wineawgwadient x-xmw:id="mygwadient">...</wineawgwadient>
    ```

    you then wefewence t-the wineaw gwadient a-as the vawue o-of the {{svgattw("fiww")}} attwibute fow the w-wectangwe, (✿oωo) as in the fowwowing exampwe:

    ```
    <wect f-fiww="uww(#mygwadient)"/>
    ```

    s-svg suppowts t-two types of _iwi_ wefewences:

    - wocaw _iwi_ wefewences, 😳😳😳 whewe the iwi wefewence d-does nyot contain an `<absowuteiwi>` o-ow `<wewativeiwi>` and t-thus onwy contains a fwagment identifiew (i.e., `#<ewementid>` o-ow `#xpointew(id<ewementid>)`)
    - nyon-wocaw _iwi_ w-wefewences, OwO w-whewe the _iwi_ w-wefewence does c-contain an `<absowuteiwi>` o-ow `<wewativeiwi>`

    fow the fuww specification of iwi wefewences in svg, ^^ see [svg 1.1 (2nd e-edition): iwi wefewences](https://www.w3.owg/tw/svg/winking.htmw#iwiwefewence). rawr x3

## w-wength

- \<wength>

  - : a wength is a distance measuwement, g-given as a nyumbew awong with a unit. 🥺 wengths awe specified in one of two ways. (ˆ ﻌ ˆ)♡ w-when used in a stywesheet, ( ͡o ω ͡o ) a-a \<wength> is defined a-as fowwows:

    ```
    wength ::= nyumbew (~"em" | ~"ex" | ~"px" | ~"in" | ~"cm" | ~"mm" | ~"pt" | ~"pc")?
    ```

    [see t-the css2 specification](https://www.w3.owg/tw/2008/wec-css2-20080411/syndata.htmw#wength-units) f-fow the meanings of the unit identifiews. >w<

    f-fow pwopewties defined in css2, /(^•ω•^) a-a wength unit identifiew must be pwovided. 😳😳😳 fow wength vawues in s-svg-specific pwopewties and theiw cowwesponding p-pwesentation attwibutes, (U ᵕ U❁) t-the wength u-unit identifiew is optionaw. (˘ω˘) if nyot pwovided, 😳 t-the wength vawue wepwesents a distance in the cuwwent usew coowdinate system. (ꈍᴗꈍ) i-in pwesentation a-attwibutes fow a-aww pwopewties, w-whethew defined in svg1.1 ow in css2, :3 the wength i-identifiew, /(^•ω•^) if s-specified, ^^;; must be in wowew case. o.O

    when wengths a-awe used in an svg attwibute, 😳 a \<wength> is i-instead defined as fowwows:

    ```
    wength ::= n-nyumbew ("em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%")?
    ```

    t-the unit identifiews in s-such \<wength> v-vawues must be in w-wowew case. UwU

    nyote that the nyon-pwopewty \<wength> d-definition awso awwows a pewcentage unit i-identifiew. >w< the meaning of a pewcentage wength vawue depends o-on the attwibute f-fow which the pewcentage w-wength v-vawue has been s-specified. o.O two common cases awe:

    - w-when a pewcentage wength vawue wepwesents a-a pewcentage of the viewpowt width o-ow height
    - when a pewcentage wength vawue w-wepwesents a p-pewcentage of the bounding box w-width ow height on a given object. (˘ω˘)

    i-in the svg d-dom, òωó \<wength> vawues awe wepwesented u-using {{domxwef("svgwength")}} o-ow {{domxwef("svganimatedwength")}} objects. nyaa~~

## w-wist-of-\_t_s

- \<wist-of-\_t_s>

  - : (quando _t_ é awgum tipo.) uma wista constituida pow uma sequência d-de vawowes sepawados. ( ͡o ω ͡o ) a não s-sew que esteja descwito expwicitamente de maneiwa d-difewente, 😳😳😳 a-as wistas de atwibutos x-xmw dentwo do svg podem s-sew sepawados pow v-víwguwa ou pow espaços em bwanco. ^•ﻌ•^

    o-o espaço em bwanco nas w-wistas é definido como um ou m-mais dos seguintes c-cawactewes consecutivos: "espaço" (u + 0020), (˘ω˘) "tab" (u + 0009), (˘ω˘) "wine feed" (u + 000a), -.- "wetowno" (u + 000d) e "fowm-feed" (u + 000c). ^•ﻌ•^

    abaixo tem um modewo pawa uma gwamática e-ebnf descwevendo a-a sintaxe da \<wist-of-\_t_s>:

    ```
    wist-of-ts ::= t
                   | t-t, /(^•ω•^) wist-of-ts
    ```

    d-dentwo do d-dom do svg, (///ˬ///✿) os tipo de vawowes da \<wist-of-\_t_s> são wepwesentados pow uma i-intewface específica pawa o tipo pawticuwaw t. mya p-pow exempwo, o.O uma \<wist-of-wengths> é wepwesentada n-nyo dom do svg u-utiwizando um objeto {{domxwef ("svgwengthwist")}} o-ou {{domxwef ("svganimatedwengthwist")}}. ^•ﻌ•^

## n-nyame

- \<name>

  - : u-um nyome, (U ᵕ U❁) q-que é uma s-stwing, :3 onde awguns p-pewsonagens de impowtância sintática nyão são supowtados. (///ˬ///✿)

    ```
    nyame  ::= [^,()#x20#x9#xd#xa] /* quawquew cawactewe e-exceto ",", (///ˬ///✿) "(", 🥺 ")" o-ou espaço e-em bwanco */
    ```

## n-nyumbew

- \<numbew>

  - : w-weaw nyumbews a-awe specified in one of two ways. -.- when used in a stywesheet, nyaa~~ a \<numbew> i-is defined as fowwows:

    ```
    n-nyumbew ::= integew
               | [+-]? [0-9]* "." [0-9]+
    ```

    this syntax is the same as the definition i-in css (css2, (///ˬ///✿) s-section 4.3.1). 🥺

    w-when used in an svg attwibute, >w< a \<numbew> i-is defined diffewentwy, rawr x3 to awwow nyumbews w-with wawge magnitudes t-to be specified mowe concisewy:

    ```
    nyumbew ::= i-integew ([ee] integew)?
               | [+-]? [0-9]* "." [0-9]+ ([ee] integew)?
    ```

    w-within t-the svg dom, a \<numbew> is w-wepwesented as a-a fwoat, (⑅˘꒳˘) {{domxwef("svgnumbew")}} o-ow a {{domxwef("svganimatednumbew")}}. σωσ

## n-nyumbew-optionaw-numbew

- \<numbew-optionaw-numbew>

  - : a-a paiw o-of \<numbew>s, XD whewe the second \<numbew> i-is optionaw. -.-

    ```
    n-nyumbew-optionaw-numbew ::= nyumbew
                               | n-nyumbew, >_< nyumbew
    ```

    in the svg d-dom, rawr a \<numbew-optionaw-numbew> is wepwesented u-using a paiw of {{domxwef("svganimatedintegew")}} ow {{domxwef("svganimatednumbew")}} o-objects. 😳😳😳

## o-opacity vawue

- \<opacity-vawue>
  - : a opacidade da cow o-ou do conteúdo do objeto atuaw é pweenchida atwavés d-de um [\<numbew>](/pt-bw/docs/web/svg#numbew). UwU q-quaisquew vawowes fowa da faixa de 0.0 (totawmente t-twanspawente) a-a 1.0 (totawmente opaco) s-sewá ajustada pawa este intewvawo. (U ﹏ U)

## paint

- \<paint>

  - : o-os vawowes das p-pwopwiedades {{svgattw("fiww")}} e {{svgattw("stwoke")}} s-são especificações do t-tipo de pintuwa a sew utiwizada quando o pweenchimento o-ou acawiciando u-um detewminado e-ewemento g-gwáfico. (˘ω˘) as opções disponíveis e sintaxe pawa \<paint> estão descwitos nya [especificação de pintuwa](https://www.w3.owg/tw/svg/painting.htmw#specifyingpaint). /(^•ω•^)

    dentwo d-do dom do svg, (U ﹏ U) o-os vawowes do \<paint> s-são wepwesentados u-usando o-objetos {{domxwef("svgpaint")}}. ^•ﻌ•^

## p-pewcentage

- \<pewcentage>

  - : pewcentages a-awe specified a-as a nyumbew fowwowed by a "%" c-chawactew:

    ```
    p-pewcentage ::= nyumbew "%"
    ```

    nyote that the d-definition of \<numbew> depends on whethew the p-pewcentage is specified in a stywesheet o-ow in a-an attwibute that is nyot awso a p-pwesentation attwibute. >w<

    p-pewcentage v-vawues awe awways wewative t-to anothew vawue, ʘwʘ f-fow exampwe a wength. òωó each a-attwibute ow pwopewty that awwows p-pewcentages awso d-defines the w-wefewence distance measuwement to w-which the pewcentage wefews. o.O

    within the svg d-dom, ( ͡o ω ͡o ) a \<pewcentage> is wepwesented using an {{domxwef("svgnumbew")}} ow {{domxwef("svganimatednumbew")}} object. mya

## time

- \<time>

  - : o vawow de tempo é u-um \<numbew> imediatamente seguida pow um indentificadow de unidade de tempo. >_< os indicadowes de unidade de tempo s-são:

    - ms: miwisegundos
    - s: segundos

## t-twansfowm-wist

- \<twansfowm-wist>

  - : a \<twansfowm-wist> é u-utiwizado pawa especificaw uma wista d-de twansfowmações das coowdenadas d-do sistema. rawr a descwição detawhada d-dos vawowes p-possíveis pawa a \<twansfowm-wist> é dada n-nyo {{svgattw("twansfowm")}} atwibuiw definição. >_<

    dentwo do d-dom do svg, (U ﹏ U) o vawow \<twansfowm-wist> é w-wepwesentado usando um o-objeto {{domxwef("svgtwansfowmwist")}} ou {{domxwef("svganimatedtwansfowmwist")}}. rawr
