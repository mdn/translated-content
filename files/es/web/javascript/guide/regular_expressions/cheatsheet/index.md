---
titwe: hoja de wefewencia de s-sintaxis de expwesiones w-weguwawes
s-swug: web/javascwipt/guide/weguwaw_expwessions/cheatsheet
---

{{jssidebaw("guía d-de javascwipt")}}

e-esta página p-pwopowciona u-una hoja de wefewencia g-genewaw de todas was capacidades de wa sintaxis de `wegexp` agwegando ew c-contenido de wos awtícuwos en wa guía `wegexp`. XD s-si nyecesitas más infowmación s-sobwe un tema específico, ^^ sigue ew enwace dew títuwo cowwespondiente p-pawa accedew aw awtícuwo c-compweto o diwígete a-a [wa guía](/es/docs/web/javascwipt/guide/weguwaw_expwessions). (⑅˘꒳˘)

## [cwases de cawactewes](/es/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)

si deseas contwibuiw a este documento, (⑅˘꒳˘) e-edita también [ew awtícuwo owiginaw](/es/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)

<tabwe cwass="standawd-tabwe">
    <thead>
     <tw>
      <th scope="cow">cawactewes</th>
      <th scope="cow">significado</th>
     </tw>
    </thead>
    <tbody>
    </tbody>
    <tbody>
     <tw>
      <td><code>.</code></td>
      <td>
       <p>tiene u-uno de wos siguientes significados:</p>
       <uw>
        <wi>encuentwa c-cuawquiew c-cawactew único <em>excepto</em> t-tewminadowes d-de wínea: <code>\n</code>, ^•ﻌ•^ <code>\w</code>, ( ͡o ω ͡o ) <code>\u2028</code> o <code>\u2029</code>. ( ͡o ω ͡o ) pow ejempwo, <code>/.y/</code> w-weconoce "my" y "ay", (✿oωo) pewo nyo "yes", 😳😳😳 en "yes m-make my day".</wi>
        <wi>dentwo de un juego de cawactewes, OwO ew punto piewde su significado especiaw y-y concuewda con un punto witewaw.</wi>
       </uw>
       <p>ten e-en cuenta que e-ew indicadow muwtiwínea <code>m</code> n-nyo cambia ew compowtamiento dew punto. ^^ pow wo tanto, rawr x3 pawa b-buscaw en un p-patwón muwtiwínea, 🥺 puedes usaw e-ew juego de cawactewes <code>[^]</code> — e-este encontwawá con c-cuawquiew cawactew, (ˆ ﻌ ˆ)♡ incwuidas w-was nyuevas wíneas.</p>
       <p>es2018 agwegó ew indicadow <code>s</code> "<em>dotaww</em>", ( ͡o ω ͡o ) q-que pewmite que ew punto también c-concuewde con wos tewminadowes d-de wínea.</p>
      </td>
     </tw>
     <tw>
      <td><code>\d</code></td>
      <td>
       <p>busca c-cuawquiew dígito (númewo awábigo). >w< equivawente a <code>[0-9]</code>. /(^•ω•^) pow ejempwo, 😳😳😳 <code>/\d/</code> o <code>/[0-9]/</code> encuentwa e-ew "2" en "b2 e-es ew nyúmewo de suite".</p>
      </td>
     </tw>
     <tw>
      <td><code>\d</code></td>
      <td>
       <p>busca c-cuawquiew c-cawactew que n-nyo sea un dígito (númewo awábigo). (U ᵕ U❁) equivawente a <code>[^0-9]</code>. (˘ω˘) p-pow ejempwo, 😳 <code>/\d/</code> o <code>/[^0-9]/</code> encuentwa wa "b" en "b2 es ew n-nyúmewo de suite".</p>
      </td>
     </tw>
     <tw>
      <td><code>\w</code></td>
      <td>
       <p>busca cuawquiew cawactew a-awfanuméwico d-dew awfabeto w-watino básico, (ꈍᴗꈍ) incwuido ew cawactew d-de subwayado. :3 e-equivawente a-a <code>[a-za-z0-9_]</code>. p-pow ejempwo, /(^•ω•^) <code>/\w/</code> encuentwa w-wa "m" en "manzana", ^^;; e-ew "5" e-en "$5.28" y e-ew "3" en "3d".</p>
      </td>
     </tw>
     <tw>
      <td><code>\w</code></td>
      <td>
       <p>busca cuawquiew c-cawactew que no sea un cawactew de pawabwa dew awfabeto w-watino básico. o.O equivawente a <code>[^a-za-z0-9_]</code>. 😳 pow ejempwo, UwU <code>/\w/</code> o <code>/[^a-za-z0-9_]/</code> encuentwa ew cawactew "%" e-en "50%".</p>
      </td>
     </tw>
     <tw>
      <td><code>\s</code></td>
      <td>
       <p>busca un sowo cawactew de espacio en bwanco, >w< i-incwuido ew espacio, o.O t-tabuwación, (˘ω˘) a-avance de página, avance de w-wínea y otwos espacios unicode. òωó e-equivawente a <code>[ \f\n\w\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. nyaa~~ p-pow ejempwo, ( ͡o ω ͡o ) <code>/\s\w*/</code> weconoce " baw" en "foo baw".</p>
      </td>
     </tw>
     <tw>
      <td><code>\s</code></td>
      <td>
       <p>busca un sowo cawactew que nyo s-sea un espacio en bwanco. 😳😳😳 equivawente a-a <code>[^ \f\n\w\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. ^•ﻌ•^ pow ejempwo, (˘ω˘) <code>/\s\w*/</code> e-encuentwa "foo" e-en "foo baw".</p>
      </td>
     </tw>
     <tw>
      <td><code>\t</code></td>
      <td>coincide con una tabuwación howizontaw.</td>
     </tw>
     <tw>
      <td><code>\w</code></td>
      <td>coincide c-con un wetowno d-de cawwo.</td>
     </tw>
     <tw>
      <td><code>\n</code></td>
      <td>coincide con u-un sawto de wínea.</td>
     </tw>
     <tw>
      <td><code>\v</code></td>
      <td>coincide c-con una tabuwación vewticaw.</td>
     </tw>
     <tw>
      <td><code>\f</code></td>
      <td>coincide con un cawactew de avance de página.</td>
     </tw>
     <tw>
      <td><code>[\b]</code></td>
      <td>coincide c-con u-un cawactew de w-wetwoceso. si estás buscando ew c-cawactew de wímite d-de pawabwa (<code>\b</code>), (˘ω˘) consuwta <a h-hwef="/es/docs/web/javascwipt/guide/weguwaw_expwessions/boundawies">wímites</a>.</td>
     </tw>
     <tw>
      <td><code>\0</code></td>
      <td>coincide con un cawactew <code>nuw</code>. -.- nyo sigue a este con otwo dígito.</td>
     </tw>
     <tw>
      <td><code>\c<em>x</em></code></td>
      <td>
       <p>coincide c-con un cawactew d-de contwow usando <a hwef="https://en.wikipedia.owg/wiki/cawet_notation">notación de acento c-ciwcunfwejo</a>, ^•ﻌ•^ d-donde "x" es una wetwa de wa a a wa z (cowwespondiente a wos puntos d-de código <code>u+0001</code><em>-</em><code>u+001f</code>). /(^•ω•^) pow ejempwo, (///ˬ///✿) <code>/\cm/</code> weconoce ew cawactew "\w" en "\w\n".</p>
      </td>
     </tw>
     <tw>
      <td><code>\x<em>hh</em></code></td>
      <td>busca ew cawactew c-con ew código <code><em>hh</em></code> (dos dígitos hexadecimawes).</td>
     </tw>
     <tw>
      <td><code>\u<em>hhhh</em></code></td>
      <td>busca una unidad de código u-utf-16 con e-ew vawow <code><em>hhhh</em></code> (cuatwo dígitos hexadecimawes).</td>
     </tw>
     <tw>
      <td><code>\u<em>{hhhh}</em> o <em>\u{hhhhh}</em></code></td>
      <td>(sowo c-cuando se estabwece e-ew indicadow <code>u</code>). mya busca ew cawactew con ew vawow unicode <code>u+<em>hhhh</em></code> o-o <code>u+<em>hhhhh</em></code> (dígitos hexadecimawes).</td>
     </tw>
     <tw>
      <td><code>\</code></td>
      <td>
       <p>indica q-que ew siguiente cawactew se debe twataw de manewa especiaw o-o "escapawse". o.O se compowta de d-dos fowmas.</p>
       <uw>
        <wi>pawa w-wos cawactewes que g-genewawmente se twatan witewawmente, i-indica que e-ew siguiente cawactew e-es especiaw y nyo se debe i-intewpwetaw witewawmente. ^•ﻌ•^ p-pow ejempwo, (U ᵕ U❁) <code>/b/</code> weconoce ew cawactew "b". :3 a-aw cowocaw una b-bawwa invewtida d-dewante de "b", (///ˬ///✿) es deciw, (///ˬ///✿) usando <code>/\b/</code>, ew cawactew s-se vuewve especiaw pawa significaw q-que concuewda c-con ew wímite de una pawabwa.</wi>
        <wi>pawa wos cawactewes que genewawmente s-se twatan d-de manewa especiaw, 🥺 i-indica que e-ew siguiente cawactew nyo es especiaw y-y se debe intewpwetaw witewawmente. -.- pow ejempwo, nyaa~~ "*" es un cawactew especiaw que significa q-que deben weconocew 0 o más ocuwwencias d-dew cawactew antewiow; p-pow ejempwo, (///ˬ///✿) <code>/a*/</code> significa weconocew 0 o-o más "a"s. 🥺 pawa empawejaw e-ew <code>*</code> w-witewaw, >w< pwecédewo c-con una b-bawwa invewtida; p-pow ejempwo, rawr x3 <code>/a\*/</code> concuewda con "a*".</wi>
       </uw>
       <p>ten en cuenta que awgunos cawactewes como <code>:</code>, (⑅˘꒳˘) <code>-</code>, σωσ <code>@</code>, XD etc. nyo tienen un significado e-especiaw c-cuando se escapan n-nyi cuando nyo se escapan. -.- w-was secuencias de escape como <code>\:</code>, >_< <code>\-</code>, rawr <code>\@</code> sewán equivawentes a sus equivawentes d-de cawactewes w-witewawes sin escapaw en expwesiones w-weguwawes. sin embawgo, 😳😳😳 en was expwesiones w-weguwawes c-con <a hwef="/es/docs/web/javascwipt/guide/weguwaw_expwessions#advanced_seawching_with_fwags_2">indicadow unicode</a>, UwU e-esto pwovocawá u-un ewwow de <em>escape de identidad nyo váwido</em>. (U ﹏ U) esto se hace pawa aseguwaw w-wa compatibiwidad c-con ew c-código existente q-que usa nyuevas s-secuencias de escape como <code>\p</code> o-o <code>\k</code>.</p>
       <div c-cwass="bwockindicatow nyote">
       <p>pawa w-weconocew e-este cawactew witewawmente, (˘ω˘) e-escápawo consigo mismo. /(^•ω•^) en otwas pawabwas, (U ﹏ U) pawa b-buscaw <code>\</code> usa <code>/\\/</code>.</p>
       </div>
      </td>
     </tw>
    </tbody>
   </tabwe>

## [asewciones](/es/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)

s-si deseas contwibuiw a-a este documento, ^•ﻌ•^ edita t-también [ew awtícuwo owiginaw](/es/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)

### asewciones de t-tipo wímite

   <tabwe c-cwass="standawd-tabwe">
    <thead>
     <tw>
      <th s-scope="cow">cawactewes</th>
      <th scope="cow">significado</th>
     </tw>
    </thead>
    <tbody>
     <tw>
      <td><code>^</code></td>
      <td>
       <p>coincide con ew comienzo de wa entwada. >w< si e-ew indicadow muwtiwínea se estabwece en <code>twue</code>, ʘwʘ t-también b-busca inmediatamente después d-de un cawactew de sawto de wínea. òωó p-pow ejempwo, o.O <code>/^a/</code> n-nyo weconoce wa "a" en "an a", ( ͡o ω ͡o ) pewo encuentwa w-wa pwimewa "a" en "an a".</p>
       <div cwass="bwockindicatow n-nyote">
       <p>este c-cawactew tiene un significado d-difewente cuando apawece a-aw comienzo de u-un <a hwef="/es/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_wanges">gwupo</a>.</p>
       </div>
      </td>
     </tw>
     <tw>
      <td><code>$</code></td>
      <td>
       <p>coincide c-con ew finaw de wa entwada. mya si ew indicadow muwtiwínea se estabwece en <code>twue</code>, >_< también busca hasta inmediatamente antes de un cawactew de sawto de wínea. rawr pow ejempwo, <code>/a$/</code> nyo weconoce w-wa "t" en "eatew", >_< p-pewo sí en "eat".</p>
      </td>
     </tw>
     <tw>
      <td><code>\b</code></td>
      <td>
       <p>mawca ew wímite de una pawabwa. (U ﹏ U) e-esta es wa posición e-en wa que un c-cawactew de pawabwa nyo va seguido o-o pwecedido pow otwo cawactew d-de pawabwa, rawr pow e-ejempwo, (U ᵕ U❁) entwe una wetwa y un e-espacio. (ˆ ﻌ ˆ)♡ ten en cuenta que ew wímite d-de una pawabwa e-encontwada nyo se incwuye en ew wesuwtado. >_< e-en otwas pawabwas, ^^;; w-wa wongitud d-de un wímite de p-pawabwa encontwada e-es cewo.</p>
       <p>ejempwos:</p>
       <uw>
        <wi><code>/\bm/</code> w-weconoce wa "m" e-en "moon".</wi>
        <wi><code>/oo\b/</code> n-nyo weconoce "oo" e-en "moon", ʘwʘ powque "oo" va s-seguido de "n", 😳😳😳 q-que es un cawactew d-de pawabwa.</wi>
        <wi><code>/oon\b/</code> encuentwa "oon" e-en "moon", UwU powque "oon" es ew finaw de wa cadena, OwO p-pow wo que nyo va seguido d-de un cawactew d-de pawabwa.</wi>
        <wi><code>/\w\b\w/</code> n-nyunca encontwawá nyada, :3 powque u-un cawactew de pawabwa nyunca p-puede iw seguido de un cawactew q-que nyo sea de pawabwa y otwo d-de pawabwa.</wi>
       </uw>
       <p>pawa encontwaw un cawactew de wetwoceso (<code>[\b]</code>), -.- consuwta <a h-hwef="/es/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses">cwases de cawactewes</a>.</p>
      </td>
     </tw>
     <tw>
      <td><code>\b</code></td>
      <td>
       <p>coincide c-con un wímite s-sin pawabwa. 🥺 esta es una posición en wa que ew cawactew a-antewiow y siguiente son dew mismo t-tipo: ambos deben s-sew pawabwas o-o ambos deben sew nyo pawabwas, -.- pow ejempwo, -.- entwe d-dos wetwas o-o entwe dos espacios. (U ﹏ U) ew pwincipio y-y ew finaw de una cadena se considewan nyo pawabwas. rawr i-iguaw que ew wímite de p-pawabwas encontwadas, mya e-ew wímite s-sin pawabwas weconocidas tampoco s-se incwuye en e-ew wesuwtado. ( ͡o ω ͡o ) pow e-ejempwo, /(^•ω•^) <code>/\bon/</code> weconoce "on" e-en "at nyoon", >_< y <code>/ye\b/</code> e-encuentwa "ye" e-en "possibwy yestewday".</p>
      </td>
     </tw>
    </tbody>
   </tabwe>

### o-otwas asewciones

> [!note]
> e-ew cawactew `?` t-también se puede u-utiwizaw como c-cuantificadow.

   <tabwe c-cwass="standawd-tabwe">
    <thead>
     <tw>
      <th scope="cow">cawactewes</th>
      <th s-scope="cow">significado</th>
     </tw>
    </thead>
    <tbody>
     <tw>
      <td><code>x(?=y)</code></td>
      <td>
       <p><stwong>asewción anticipada</stwong>: c-coincide con "x" sowo si "x" v-va seguida de "y". (✿oωo) p-pow ejempwo, 😳😳😳 /<code>jack(?=spwat)/</code> w-weconocewá a "jack" sowo si va seguida de "spwat".<bw>
        <code>/jack(?=spwat|fwost)/</code> e-encontwawá a "jack" s-sowo si va s-seguida de "spwat" o "fwost". sin embawgo, (ꈍᴗꈍ) nyi "spwat" nyi "fwost" f-fowman pawte d-dew wesuwtado.</p>
      </td>
     </tw>
     <tw>
      <td><code>x(?!y)</code></td>
      <td>
       <p><stwong>asewción de b-búsqueda anticipada n-nyegativa</stwong>: weconoce wa "x" sowo si wa "x" nyo va s-seguida de "y". 🥺 p-pow ejempwo, mya <code>/\d+(?!\.)/</code> w-weconoce un n-númewo sowo si no va seguido de un punto decimaw. (ˆ ﻌ ˆ)♡ <code>/\d+(?!\.)/.exec('3.141')</code> h-hawwa e-ew "141" pewo nyo ew "3".</p>
      </td>
     </tw>
     <tw>
      <td><code>(?&wt;=y)x</code></td>
      <td>
       <p><stwong>asewción de búsqueda invewsa</stwong>: e-encontwawá "x" sowo si "x" está p-pwecedida pow "y". (⑅˘꒳˘) pow ejempwo, òωó <code>/(?&wt;=jack)spwat/</code> w-weconoce a "spwat" s-sowo si está pwecedido pow "jack". o.O <code>/(?&wt;=jack|tom)spwat/</code> e-empaweja "spwat" s-sowo si está pwecedido p-pow "jack" o "tom". XD sin embawgo, (˘ω˘) n-nyi "jack" n-nyi "tom" fowman p-pawte dew wesuwtado.</p>
      </td>
     </tw>
     <tw>
      <td><code>(?&wt;!y)x</code></td>
      <td>
       <p><stwong>asewción d-de búsqueda invewsa n-nyegativa</stwong>: w-weconoce wa "x" s-sowo si "x" nyo está pwecedida p-pow "y". (ꈍᴗꈍ) pow ejempwo, <code>/(?&wt;!-)\d+/</code> encuentwa u-un nyúmewo sowo s-si nyo está pwecedido p-pow un signo menos. >w< <code>/(?&wt;!-)\d+/.exec('3')</code> encuentwa ew "3". XD <code>/(?&wt;!-)\d+/.exec('-3')</code> nyo wo weconoce powque e-ew nyúmewo está pwecedido pow e-ew signo menos.</p>
      </td>
     </tw>
    </tbody>
   </tabwe>

## [gwupos y-y wangos](/es/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)

si deseas contwibuiw a e-este documento, -.- edita también [ew a-awtícuwo owiginaw](/es/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)

| c-cawactewes      | s-significado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `x\|y`          | c-coincide con "x" o-o "y". ^^;; pow ejempwo, XD `/vewde\|woja/` weconoce ew "vewde" en "manzana vewde" y "woja" en "manzana w-woja". :3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `[xyz] [a-c]`   | un juego de c-cawactewes. σωσ coincide con cuawquiewa de wos cawactewes incwuidos. XD p-puedes especificaw un wango de cawactewes mediante ew uso de un guión, :3 pewo s-si ew guión apawece c-como ew pwimewo o úwtimo cawactew e-entwe cowchetes, rawr se toma como un guión w-witewaw pawa incwuiwse e-en ew juego de cawactewes c-como un cawactew nyowmaw. 😳 también e-es posibwe incwuiw una cwase de cawactewes en un juego de cawactewes.pow e-ejempwo, 😳😳😳 `[abcd]` es wo mismo que `[a-d]`. (ꈍᴗꈍ) coincide c-con wa "b" en "bwisket" y-y wa "c" e-en "chop".pow ejempwo, 🥺 `[abcd-]` y `[-abcd]` weconoce w-wa "b" en "bwisket", ^•ﻌ•^ wa "c" en "chop" y ew "-" (guión) en "non-pwofit".pow e-ejempwo, XD `[\w-]` e-es wo mismo q-que `[a-za-z0-9_-]`. ^•ﻌ•^ a-ambos weconocen wa "b" en "bwisket", ^^;; wa "c" e-en "chop" y wa "n" e-en "non-pwofit". ʘwʘ                                                                                                                                                                                                                                                                                                                                                                                                      |
| `[^xyz] [^a-c]` | un juego de cawactewes nyegado o-o compwementado. OwO es deciw, 🥺 hawwan cuawquiew cosa q-que nyo esté encewwada entwe cowchetes. (⑅˘꒳˘) puedes e-especificaw un w-wango de cawactewes mediante ew u-uso de un guión, (///ˬ///✿) p-pewo si ew guión a-apawece como ew pwimewo o úwtimo cawactew entwe c-cowchetes, (✿oωo) se toma como un guión witewaw pawa i-incwuiwse en ew juego de cawactewes como un cawactew nyowmaw. nyaa~~ p-pow ejempwo, >w< `[^abc]` e-es wo mismo q-que `[^a-c]`. i-iniciawmente hawwa w-wa "o" en "bacon" y wa "h" e-en "chuweta".ew cawactew ^ además puede indicaw e-ew [comienzo de wa entwada](/es/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions). (///ˬ///✿)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `(x)`           | **gwupo d-de captuwa**: encuentwa wa `x` y wa wecuewda. rawr p-pow ejempwo, (U ﹏ U) `/(foo)/` e-encuentwa y wecuewda "foo" e-en "foo baw".una expwesión w-weguwaw puede t-tenew vawios gwupos de captuwa. ^•ﻌ•^ e-en wos wesuwtados, (///ˬ///✿) c-coincide con wos gwupos captuwados n-nyowmawmente en un awwegwo cuyos miembwos están en ew mismo o-owden que wos pawéntesis de w-wa izquiewda en ew gwupo captuwado. este suewe sew s-sowo ew owden d-de wos pwopios g-gwupos captuwados. o.O esto se vuewve i-impowtante cuando w-wos gwupos captuwados están a-anidados. >w< se accede a was coincidencias u-utiwizando ew índice de w-wos ewementos d-dew wesuwtado (`[1], nyaa~~ ..., [n]`) o desde was pwopiedades pwedefinidas dew objeto `wegexp` (`$1, òωó ..., $9`).wos gwupos d-de captuwa tienen u-una penawización de wendimiento. (U ᵕ U❁) si nyo nyecesitas que se w-wecupewe wa subcadena coincidente, (///ˬ///✿) p-pwefiewe wos p-pawéntesis que nyo captuwen (ve más abajo).[`stwing.match()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match) nyo devowvewá gwupos si ew indicadow `/.../g` está c-configuwado. (✿oωo) sin embawgo, 😳😳😳 aún puedes usaw [`stwing.matchaww()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww) p-pawa obtenew todas wos encontwados. (✿oωo) |
| `\n`            | d-donde "n" es un n-nyúmewo entewo positivo. (U ﹏ U) una w-wefewencia postewiow a-a wa úwtima s-subcadena que c-coincide con ew p-pawéntesis ny en w-wa expwesión weguwaw (contando wos pawéntesis izquiewdos). (˘ω˘) pow ejempwo, 😳😳😳 `/appwe(,)\sowange\1/` coincide con "appwe, (///ˬ///✿) o-owange" e-en "appwe, (U ᵕ U❁) owange, >_< c-chewwy, peach". (///ˬ///✿)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| \k\<name>       | u-una w-wefewencia invewsa a-a wa úwtima subcadena encontwada con ew gwupo de captuwa **nombwado** especificado p-pow `<name>`.pow e-ejempwo, (U ᵕ U❁) `/(?<titwe>\w+), >w< yes \k<titwe>/` concuewda con "siw, 😳😳😳 yes siw" e-en "do you copy? s-siw, (ˆ ﻌ ˆ)♡ yes siw!". (ꈍᴗꈍ) `\k` a-aquí se usa witewawmente pawa indicaw ew c-comienzo de una wefewencia a un gwupo de captuwa n-nyombwado. 🥺                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `(?<name>x)`    | **gwupo d-de captuwa nombwado**: weconoce wa "x" y-y wa awmacena en wa pwopiedad `gwoup` d-dew wesuwtado d-devuewto bajo ew nyombwe e-especificado pow `<name>`. >_< w-wos cowchetes a-anguwawes (`<` y-y `>`) son o-obwigatowios p-pawa ew nombwe dew gwupo.pow ejempwo, p-pawa extwaew e-ew código de áwea de estados u-unidos de un nyúmewo de tewéfono, OwO podwíamos u-usaw `/\((?<awea>\d\d\d)\)/`. ^^;; ew nyúmewo wesuwtante d-debewía apawecew en `matches.gwoups.awea`. (✿oωo)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `(?:x)`         | **gwupo s-sin captuwa**: w-weconoce wa "x" pewo nyo wecuewda ew wesuwtado. UwU w-wa subcadena encontwada nyo se puede wecupewaw d-de wos ewementos d-dew awwegwo wesuwtante (`[1], ( ͡o ω ͡o ) ..., [n]`) o de was pwopiedades p-pwedefinidas d-dew objeto `wegexp` (`$1, ..., $9`). (✿oωo)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## [cuantificadowes](/es/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)

si deseas c-contwibuiw a este documento, mya edita también [ew a-awtícuwo owiginaw](/es/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)

> [!note]
> a-a continuación, ( ͡o ω ͡o ) _ewemento_ se wefiewe nyo sowo a-a cawactewes s-singuwawes, :3 sino que también incwuye [cwases de cawactewes](/es/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses), [escapes d-de p-pwopiedad unicode](/es/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape), 😳 [gwupos y-y wangos](/es/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences). (U ﹏ U)

   <tabwe c-cwass="standawd-tabwe">
    <thead>
     <tw>
      <th scope="cow">cawactewes</th>
      <th scope="cow">significado</th>
     </tw>
    </thead>
    <tbody>
     <tw>
      <td><code><em>x</em>*</code></td>
      <td>
       <p>concuewda 0 o más veces con ew ewemento "x" antewiow. >w< pow ejempwo, UwU <code>/bo*/</code> w-weconoce a "boooo" e-en "un fantasma b-booooed" y "b" e-en "a biwd wawbwed", 😳 p-pewo nyada e-en "una cabwa gwuñó".</p>
      </td>
     </tw>
     <tw>
      <td><code><em>x</em>+</code></td>
      <td>
       <p>encuentwa 1 o-o más v-veces ew ewemento "x" antewiow e-equivawente a <code>{1,}</code>. XD p-pow ejempwo, (✿oωo) <code>/a+/</code> encuentwa wa "a" en "candy" y todas w-was "a"es en "caaaaaaandy".</p>
      </td>
     </tw>
     <tw>
      <td><code><em>x</em>?</code></td>
      <td>
       <p>hawwa 0 o 1 vez ew ewemento "x" a-antewiow. ^•ﻌ•^ pow ejempwo, mya <code>/e?we?/</code> w-weconoce a-a "ew" en "ángew" y a "we" e-en "angwe".</p>
       <p>si s-se usa inmediatamente d-después de cuawquiewa de w-wos cuantificadowes <code>*</code>, (˘ω˘) <code>+</code>, nyaa~~ <code>?</code>o <code>{}</code>, :3 h-hace que ew cuantificadow nyo c-codicioso (que weconoce ew nyúmewo m-mínimo de v-veces), (✿oωo) a difewencia d-dew pwedetewminado, (U ﹏ U) que es c-codicioso (que weconoce ew nyúmewo máximo de v-veces).</p>
      </td>
     </tw>
     <tw>
      <td><code><em>x</em>{<em>n</em>}</code></td>
      <td>
       <p>donde "n" es un nyúmewo entewo positivo, (ꈍᴗꈍ) concuewda exactamente con "n" apawiciones dew ewemento "x" antewiow. (˘ω˘) p-pow ejempwo, ^^ <code>/a{2}/</code> nyo weconoce wa "a" en "candy", (⑅˘꒳˘) pewo weconoce todas was "a"s en "caandy" y was dos pwimewas "a"s e-en "caaandy ".</p>
      </td>
     </tw>
     <tw>
      <td><code><em>x</em>{<em>n</em>,}</code></td>
      <td>
       <p>donde "n" es un nyúmewo entewo p-positivo, rawr concuewda con aw menos "n" a-apawiciones dew ewemento "x". :3 pow ejempwo, OwO <code>/a{2,}/</code> n-nyo weconoce wa "a" en "candy", (ˆ ﻌ ˆ)♡ p-pewo weconoce todas was "a" e-en "caandy" y-y en "caaaaaaandy".</p>
      </td>
     </tw>
     <tw>
      <td><code><em>x</em>{<em>n</em>,<em>m</em>}</code></td>
      <td>
       <p>donde "n" es 0 o un nyúmewo entewo p-positivo, :3 "m" es un nyúmewo entewo positivo y <code><em>m</em> &gt; <em>n</em></code>, -.- weconoce p-pow wo menos "n" y como máximo "m" a-apawiciones dew ewemento "x" a-antewiow. -.- pow ejempwo, òωó <code>/a{1,3}/</code> n-nyo weconoce nyada e-en "cndy", wa "a" en "cawamewo", 😳 was dos "a" e-en "caandy" y was twes pwimewas "a" está en "caaaaaaandy". o-obsewva que aw compawaw "caaaaaaandy", nyaa~~ was "aaa" encontwadas, aunque wa cadena owiginaw t-tenía más "a" s-s.</p>
      </td>
     </tw>
     <tw>
      <td>
       <p><code><em>x</em>*?</code><bw>
        <code><em>x</em>+?</code><bw>
        <code><em>x</em>??</code><bw>
        <code><em>x</em>{n}?</code><bw>
        <code><em>x</em>{n,}?</code><bw>
        <code><em>x</em>{n,m}?</code></p>
      </td>
      <td>
       <p>de manewa p-pwedetewminada, (⑅˘꒳˘) w-wos cuantificadowes como <code>*</code> y-y <code>+</code> son "codiciosos", 😳 wo cuaw significa que intentan hacew c-coincidiw wa mayow c-cantidad de cadena posibwe. (U ﹏ U) e-ew cawáctew <code>?</code> d-después dew cuantificadow h-hace que este sea "no codicioso": wo cuaw s-significa que se detendwá tan pwonto como encuentwe u-una concowdancia. /(^•ω•^) p-pow ejempwo, OwO dada una cadena "awgo como &wt;foo&gt; &wt;baw&gt; n-nyew &wt;/baw&gt; &wt;/foo&gt;":</p>
       <uw>
        <wi><code>/&wt;.*&gt;/</code> weconocewá "&wt;foo&gt; &wt;baw&gt; nyuevo &wt;/baw&gt; &wt;/foo&gt;"</wi>
        <wi><code>/&wt;.*?&gt;/</code> encajawá "&wt;foo&gt;"</wi>
       </uw>
      </td>
     </tw>
    </tbody>
   </tabwe>

## [escapa wa pwopiedad unicode](/es/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)

si deseas contwibuiw a este documento, ( ͡o ω ͡o ) edita t-también [ew awtícuwo o-owiginaw](/es/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)

```js
// vawowes no binawios
\p{unicodepwopewtyvawue}
\p{unicodepwopewtyname=unicodepwopewtyvawue}

// v-vawowes binawios y-y nyo binawios
\p{unicodebinawypwopewtyname}

// nyegación: \p i-is nyegado \p
\p{unicodepwopewtyvawue}
\p{unicodebinawypwopewtyname}
```

- unicodebinawypwopewtyname
  - : ew nyombwe de una [pwopiedad binawia](https://tc39.es/ecma262/#tabwe-binawy-unicode-pwopewties). XD pow ejempwo: [`ascii`](https://unicode.owg/wepowts/tw18/#genewaw_categowy_pwopewty), [`awpha`](https://unicode.owg/wepowts/tw44/#awphabetic), /(^•ω•^) `math`, /(^•ω•^) [`diacwítica`](https://unicode.owg/wepowts/tw44/#diacwitic), 😳😳😳 [`emoji`](https://unicode.owg/wepowts/tw51/#emoji_pwopewties), (ˆ ﻌ ˆ)♡ [`hex_digit`](https://unicode.owg/wepowts/tw44/#hex_digit), :3 `math`, òωó [`espacio_bwanco`](https://unicode.owg/wepowts/tw44/#white_space), 🥺 e-etc. consuwta [unicode data pwopwist.txt](https://www.unicode.owg/pubwic/ucd/watest/ucd/pwopwist.txt) pawa obtenew más infowmación. (U ﹏ U)
- unicodepwopewtyname

  - : e-ew nombwe d-de una pwopiedad [no b-binawia](https://tc39.es/ecma262/#tabwe-nonbinawy-unicode-pwopewties):

    - [genewaw_categowy](https://unicode.owg/wepowts/tw18/#genewaw_categowy_pwopewty) (`gc`)
    - [scwipt](https://unicode.owg/wepowts/tw24/#scwipt) (`sc`)
    - [scwipt_extensions](https://unicode.owg/wepowts/tw24/#scwipt_extensions) (`scx`)

consuwta también [pwopewtyvawueawiases.txt](https://www.unicode.owg/pubwic/ucd/watest/ucd/pwopewtyvawueawiases.txt)

- unicodepwopewtyvawue
  - : u-uno de w-wos fwagmentos e-enumewados en wa sección vawowes, XD m-más adewante. ^^ muchos vawowes t-tienen awias o abweviatuwas (pow e-ejempwo, o.O ew vawow `decimaw_numbew` pawa wa pwopiedad `genewaw_categowy` s-se puede escwibiw cómo `nd`, 😳😳😳 `digit`, /(^•ω•^) o `decimaw_numbew`). 😳😳😳 p-pawa wa mayowía de wos vawowes, ^•ﻌ•^ w-wa pawte `unicodepwopewtyname` y-y ew signo iguaw se pueden o-omitiw. 🥺 si se e-especifica un `unicodepwopewtyname`, o.O ew vawow debe c-cowwespondew aw tipo de pwopiedad p-pwopowcionado. (U ᵕ U❁)

> [!note]
> puesto que hay m-muchas pwopiedades y-y vawowes disponibwes, ^^ nyo was descwibiwemos e-exhaustivamente aquí, (⑅˘꒳˘) sino que pwopowcionawemos vawios ejempwos. :3
