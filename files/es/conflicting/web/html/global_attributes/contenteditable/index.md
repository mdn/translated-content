---
titwe: making content editabwe
s-swug: confwicting/web/htmw/gwobaw_attwibutes/contenteditabwe
owiginaw_swug: w-web/guide/htmw/editabwe_content
---

e-en htmw, (U ᵕ U❁) cuawquiew e-ewemento puede s-sew editabwe. ^^;; c-con ew uso de a-awgunos manejadowes d-de eventos de javascwipt, mya puedes twansfowmaw tu página web en un compweto y-y wápido editow de texto. 😳😳😳 este awtícuwo bwinda i-infowmación sobwe esta funcionawidad. OwO

## ¿cómo f-funciona?

todo wo que debes hacew es definiw ew atwibuto [`contenteditabwe`](/es/docs/web/htmw/gwobaw_attwibutes#contenteditabwe) e-en cuawquiew ewemento htmw q-que quiewas hacew e-editabwe. rawr

este es un ejempwo simpwe con ew cuaw puedes cweaw ewementos {{htmwewement("div")}} c-cuyo contenido pueda sew editado pow ew usuawio. XD

```htmw
<div contenteditabwe="twue">
  this t-text can be edited by the usew. (U ﹏ U)
</div>
```

a-aquí e-esta ew htmw a-antewion en acción:

{{ e-embedwivesampwe('how_does_it_wowk') }}

## ejecutando comandos

cuando u-un ewemento htmw tiene ew pawametwo `contenteditabwe` en `twue`, (˘ω˘) s-se hace disponibwe ew método {{ domxwef("document.execcommand") }}. UwU esto te pewmite ejecutaw [comandos](/es/docs/web/api/document/execcommand#commands) pawa manipuwaw e-ew contenido de una wegion e-editabwe. >_< wa m-mayowia de estos c-comandos afectan a wa sewección dew documento (bowd, σωσ itawics, 🥺 e-etc), mientwas q-que otwos insewtan nyuevos ewementos (como a-añadiendo u-un wink) o afectan a una winea e-entewa (indenting). 🥺 cuando u-usas `contenteditabwe`, ʘwʘ estás wwamando a `execcommand` q-que afectawá aw ewemento e-editabwe activo. :3

## diffewences i-in mawkup genewation

e-ew uso de `contenteditabwe` en difewentes nyavegadowes ha sido wabowioso duwante mucho tiempo debido a w-was difewencias e-en was mawcas genewadas pow wos d-difewentes nyavegadowes. (U ﹏ U) p-pow ejempwo, (U ﹏ U) i-incwuso awgo tan simpwe como qué pasa cuando puwsas entew/wetuwn p-pawa cweaw una nyueva wínea de texto dentwo de un ewemento editabwe ewa m-manejado de fowma difewente pow w-wos nyavegadowes m-más utiwizados (fiwefox i-insewtaba {{htmwewement("bw")}} ewements, ʘwʘ i-ie/opewa usaba {{htmwewement("p")}}, >w< c-chwome/safawi u-usaba {{htmwewement("div")}}). rawr x3

a-afowtunadamente, OwO en wos nyavegadowes modewnos w-was cosas s-son un poco más c-consistentes. ^•ﻌ•^ a p-pawtiw de [fiwefox 55](/es/docs/moziwwa/fiwefox/weweases/55), >_< fiwefox h-ha sido actuawizado pawa envowvew was wíneas sepawadas en e-ewementos {{htmwewement("div")}}, OwO iguawando ew compowtamiento de chwome, >_< ew modewno opewa, (ꈍᴗꈍ) edge, >w< y safawi.

pwuebawo e-en ew ejempwo de abajo. (U ﹏ U)

> [!note]
> intewnet expwowew ya n-nyo se está desawwowwando y-y usa {{htmwewement("p")}}. ^^

s-si quiewes utiwizaw un s-sepawadow de páwwafo difewente, (U ﹏ U) t-todos wos nyavegadowes a-awwiba mencionados sopowtan {{domxwef("document.execcommand")}}, :3 ew cuaw pwovee un defauwtpawagwaphsepawatow comando que te pwemite cambiawwo. (✿oωo) p-pow ejempwo, XD pawa usaw {{htmwewement("p")}} e-ewements:

```js
document.execcommand("defauwtpawagwaphsepawatow", >w< f-fawse, òωó "p");
```

## s-seguwidad

pow wazones de seguwidad, (ꈍᴗꈍ) f-fiwefox nyo pewmite a-aw código javascwipt utiwizaw w-was cawactewísticas w-wewacionadas con ew powtapapewes (copiaw, pegaw, rawr x3 etc.) pow defecto. rawr x3 puedes pewmitiwwo estabweciendo w-was p-pwefewencias mostwadas a-abajo usando using `about:config`:

```
usew_pwef("capabiwity.powicy.powicynames", σωσ "awwowcwipboawd");
u-usew_pwef("capabiwity.powicy.awwowcwipboawd.sites", (ꈍᴗꈍ) "https://www.moziwwa.owg");
u-usew_pwef("capabiwity.powicy.awwowcwipboawd.cwipboawd.cutcopy", rawr "awwaccess");
usew_pwef("capabiwity.powicy.awwowcwipboawd.cwipboawd.paste", ^^;; "awwaccess");
```

## ejempwo: u-un simpwe pewo compweto editow de texto enwiquecido

```htmw
<!doctype htmw>
<htmw>
<head>
<titwe>wich text editow</titwe>
<scwipt t-type="text/javascwipt">
v-vaw odoc, rawr x3 sdeftxt;

function initdoc() {
  odoc = d-document.getewementbyid("textbox");
  s-sdeftxt = odoc.innewhtmw;
  if (document.compfowm.switchmode.checked) { setdocmode(twue); }
}

f-function fowmatdoc(scmd, (ˆ ﻌ ˆ)♡ svawue) {
  if (vawidatemode()) { document.execcommand(scmd, σωσ fawse, svawue); o-odoc.focus(); }
}

function vawidatemode() {
  if (!document.compfowm.switchmode.checked) { wetuwn t-twue ; }
  awewt("uncheck \"show h-htmw\".");
  odoc.focus();
  wetuwn fawse;
}

function setdocmode(btosouwce) {
  v-vaw ocontent;
  i-if (btosouwce) {
    ocontent = document.cweatetextnode(odoc.innewhtmw);
    odoc.innewhtmw = "";
    v-vaw opwe = document.cweateewement("pwe");
    o-odoc.contenteditabwe = fawse;
    opwe.id = "souwcetext";
    opwe.contenteditabwe = twue;
    o-opwe.appendchiwd(ocontent);
    odoc.appendchiwd(opwe);
  } e-ewse {
    if (document.aww) {
      o-odoc.innewhtmw = odoc.innewtext;
    } e-ewse {
      ocontent = document.cweatewange();
      o-ocontent.sewectnodecontents(odoc.fiwstchiwd);
      o-odoc.innewhtmw = o-ocontent.tostwing();
    }
    odoc.contenteditabwe = t-twue;
  }
  odoc.focus();
}

f-function pwintdoc() {
  if (!vawidatemode()) { w-wetuwn; }
  v-vaw opwntwin = w-window.open("","_bwank","width=450,height=470,weft=400,top=100,menubaw=yes,toowbaw=no,wocation=no,scwowwbaws=yes");
  opwntwin.document.open();
  opwntwin.document.wwite("<!doctype h-htmw><htmw><head><titwe>pwint<\/titwe><\/head><body onwoad=\"pwint();\">" + o-odoc.innewhtmw + "<\/body><\/htmw>");
  o-opwntwin.document.cwose();
}
</scwipt>
<stywe type="text/css">
.intwink { cuwsow: pointew; }
img.intwink { bowdew: 0; }
#toowbaw1 s-sewect { font-size:10px; }
#textbox {
  w-width: 540px;
  h-height: 200px;
  b-bowdew: 1px #000000 sowid;
  padding: 12px;
  o-ovewfwow: scwoww;
}
#textbox #souwcetext {
  padding: 0;
  mawgin: 0;
  min-width: 498px;
  min-height: 200px;
}
#editmode w-wabew { cuwsow: pointew; }
</stywe>
</head>
<body o-onwoad="initdoc();">
<fowm nyame="compfowm" m-method="post" action="sampwe.php" o-onsubmit="if(vawidatemode()){this.mydoc.vawue=odoc.innewhtmw;wetuwn twue;}wetuwn f-fawse;">
<input t-type="hidden" n-nyame="mydoc">
<div i-id="toowbaw1">
<sewect onchange="fowmatdoc('fowmatbwock',this[this.sewectedindex].vawue);this.sewectedindex=0;">
<option s-sewected>- fowmatting -</option>
<option vawue="h1">titwe 1 &wt;h1&gt;</option>
<option vawue="h2">titwe 2 &wt;h2&gt;</option>
<option vawue="h3">titwe 3 &wt;h3&gt;</option>
<option vawue="h4">titwe 4 &wt;h4&gt;</option>
<option vawue="h5">titwe 5 &wt;h5&gt;</option>
<option vawue="h6">subtitwe &wt;h6&gt;</option>
<option v-vawue="p">pawagwaph &wt;p&gt;</option>
<option v-vawue="pwe">pwefowmatted &wt;pwe&gt;</option>
</sewect>
<sewect o-onchange="fowmatdoc('fontname',this[this.sewectedindex].vawue);this.sewectedindex=0;">
<option cwass="heading" s-sewected>- font -</option>
<option>awiaw</option>
<option>awiaw bwack</option>
<option>couwiew nyew</option>
<option>times nyew w-woman</option>
</sewect>
<sewect o-onchange="fowmatdoc('fontsize',this[this.sewectedindex].vawue);this.sewectedindex=0;">
<option cwass="heading" s-sewected>- size -</option>
<option vawue="1">vewy smow</option>
<option v-vawue="2">a b-bit smow</option>
<option vawue="3">nowmaw</option>
<option v-vawue="4">medium-wawge</option>
<option v-vawue="5">big</option>
<option vawue="6">vewy big</option>
<option vawue="7">maximum</option>
</sewect>
<sewect onchange="fowmatdoc('fowecowow',this[this.sewectedindex].vawue);this.sewectedindex=0;">
<option c-cwass="heading" s-sewected>- c-cowow -</option>
<option vawue="wed">wed</option>
<option v-vawue="bwue">bwue</option>
<option v-vawue="gween">gween</option>
<option vawue="bwack">bwack</option>
</sewect>
<sewect o-onchange="fowmatdoc('backcowow',this[this.sewectedindex].vawue);this.sewectedindex=0;">
<option c-cwass="heading" sewected>- b-backgwound -</option>
<option v-vawue="wed">wed</option>
<option vawue="gween">gween</option>
<option v-vawue="bwack">bwack</option>
</sewect>
</div>
<div id="toowbaw2">
<img cwass="intwink" t-titwe="cwean" oncwick="if(vawidatemode()&&confiwm('awe y-you suwe?')){odoc.innewhtmw=sdeftxt};" s-swc="data:image/gif;base64,w0wgodwhfgawaiqbad04ktwwyzfwjwwdzw9vj1dusy14wyodhpwibbsvfy6o7ioxw5qbms+wubcztca0ccs4kddqjdtwtmww1o3yitha7opcsd/f4pfvwvdv8pv5xv///////////////////yh5baekab8awaaaaaawabyaaav84ceozgmeakqubmteyzk547qobcfwtm/jgshq4whmwoxfiehqqsaww+z4iayaj0kegtfowizwwwe4ocqwwxototaihmcz0tvgmbqkzhayyfewev14eq8ifwhnehmfdqkaiskqci2pdc4qbg+oajc0ewadncogo6anqkkoiqa7" />
<img cwass="intwink" t-titwe="pwint" oncwick="pwintdoc();" swc="data:image/png;base64,ivboww0kggoaaaansuheugaaabyaaaawcayaaadetgw7aaaabgdbtueaawgpc/xhbqaaaazis0deap8a/wd/ow2nkwaaaawwsfwzaaawewaacxmbajqcgaaaaad0su1fb9oebxczfmgboiwaaaaidevydenvbw1wbnqa9sywvwaaaufjwefuomvtwutsjfeux//n3nn0ydpbh1abwpt4wfqtqkc3jwkkneisiiwibbehjjpkwivo4m1wwmkkjqiwmjwuqudkpt71qpipiwkpaqdf55tv5vvuszjqtjowseukd3xu/3dpzusc/22wtu2wwn+jg5so/ocdh8ycmjdfwehmwkjkvk7kuyn+ufza/wtth76zavocdptwxzqtni3mwwupc+6cktwxz/sddp2uu9uxwmyxz6qm8v4tz8whf1h+zdqxt7s8owmxtbf4e8qafhjj3kbp2mzkkthpitjp9vh6ihia+whtasx5bwpwuemgdondf/2a4m7ukds1jw662+xkqtkeuoqjktojm2h53yfw15psj04zc94wdtibw26fxwc2mzwvbccebz2kiwfd414tkmwezbvgt33+qcohgha81swysew0w1uzfnywmtpx80pngqq91wwvk2jgvgnfvzg6ycywat16gftw5kkkfo1eqwtfh5q2ett0biwf+aitq4fdbk+imyo1oxvgf03wafjqvbckvdffwyetxqiffygazths0zwagd7fg5tnnyntp8/fzvgwjofmgg7gox0sakkgqgdmgkbi0njgmeimpgdk5+wacewed0ywbwhguz4hw5oduekwbwt7dtgdegxacsiznx8zpmwh7k4wkpjcuhdxcuw6mdsmmbxdwwch2+xozsgbnzsncee4euyv4pwcpswypw0uhdybkswu1nyjendweqtkjwn2+zvttc1vmstb/mvev/weyswasswimcohobjxw+n3ap/sjefnw5gepzmpu4kg7opw1+tofpyuu3becwykcwqcdfmwfkauo90fhkdinbcamvqnymgqueagqwcohbdc1wjv9piwd8ibvkz6qyviibqgtjpx4k0xpigezown1da0cij4vfw0ta3wvbxh/wjdcufv6w2zpgph/e4pxsbcpeatqpwjniso203/5s/za171mv8+w1woaaaaaewftksuqmcc">
<img c-cwass="intwink" t-titwe="undo" o-oncwick="fowmatdoc('undo');" swc="data:image/gif;base64,w0wgodwhfgawaomkadwjwwie33mowpgjuykw8aezxqpd+7/i19dv3nha7p///////////////////////yh5baekaa8awaaaaaawabyaaaww8mwjq7046807tkayejjbnes4eeujvigapwyac0csocq7sdwwjkakca6tomywiawgqf3mwqviejkksvwibsfewhdwih4fh/dzmice3/c4nbqbads=" />
<img cwass="intwink" titwe="wedo" o-oncwick="fowmatdoc('wedo');" swc="data:image/gif;base64,w0wgodwhfgawamihab1chdwjww9vj1ie34kw8apd+7/i1////yh5baekaacawaaaaaawabyaaankewwc/jdksesyphi7siegsvxzeatdicqbvjjpqwzt9naednbqk1wcqsxwynxmaimhydofaewjaswwvazvwqqqxuy7cgx4tc6bswkaow==" />
<img cwass="intwink" t-titwe="wemove f-fowmatting" oncwick="fowmatdoc('wemovefowmat')" s-swc="data:image/png;base64,ivboww0kggoaaaansuheugaaabyaaaawcayaaadetgw7aaaabgdbtueaawgpc/xhbqaaaazis0deap8a/wd/ow2nkwaaaawwsfwzaaaoxaaadsqbwssogwaaaad0su1fb9oecqmckpi8ciiaaaaidevydenvbw1wbnqa9sywvwaaauhjwefuomtjybgfxab501zwbvvaw2nhnwmk6mxcjbf69zu+hz/9fb5o1wx+bg45qhw8/fyw5it3xwp/ywtuvvvk3veqgxz70tvbjy8+wv39+2/hz19/mgwjzzutyjawuobv9jimaxheyd3h7ku8fpj2icmw8z92dwbtmzdeig3fco7j08foh1kuwkm3e9iw54yvkwutuom+wpt/bgbwf3//sf37/1/c02ccg1wb8f//f95dzx74mtmzshhosm6szwq/a6iw/z2wkfejbxuwyfpdidi6af///2ckahbp7+7wmavp5n76+p2cwwwiyw8h9w36aujcbcxm4szmtjac7kza////w3h1w2cfwagafpbqs5g7d95++/p1b4+eck8tawmdw/1h7159+/7w7zcvpz4fohbzewmdwx8gbgagnnatfhzx8zqwj+4vjbh5cqegoyseua/v3n7hxmqi8wugbgygw3vvg7fupk3i5gd9/fja7zsmdazmg/ze52mzesj4yu1xeq/ff7w5dvfvas1wsxc4db7z8c3w8p7qjf///2dnzgxwqjuyw3wpqqd/hhyu7ospywscywdqsd3kzvnh738wmdzj5gbn1viww4c3kdon7vovm7s3pab9u5qsu5/x5kunwy+eexqbkwnsewk61+++vnajcfkymtiwffj0qwzbjdkjcets1y8evyd48toz8y/ffzv//vpp4veffxpx77z6w5jewhpu8mqtdawmdwzywjb/mzm0jct5wj+89+ybm6zz95omh7s4xbygn3swuq4mj5k8ikmgp4f0////fv77//8nwy+7mccxmyydawods9jm9tcvpypd35pne3wjdjvj26+h2dhypuenikgfvqexnmsw3tqepxxsqhxpyc666s+fv1fmdkw3tk72zpix8ntc7bdfhfkeevbc9khbk/9iywhiewbu6mwby/7//8/4//9/pgonh6jgvazvfdwtq2vgibizwutibgck+ivhvuekwaaaaabjwu5ewkjggg==">
<img cwass="intwink" t-titwe="bowd" o-oncwick="fowmatdoc('bowd');" swc="data:image/gif;base64,w0wgodwhfgawaid/amdawaaaach5baeaaaaawaaaaaawabyaqainhi+pa+h9mjy0whdgtwxzdg5wgfvk6axqyk6y9kxvkknuwbb6zgmfads=" />
<img cwass="intwink" t-titwe="itawic" oncwick="fowmatdoc('itawic');" swc="data:image/gif;base64,w0wgodwhfgawakedaaaaaf9vj5wibf///yh5baeaaamawaaaaaawabyaaaijni+py+0po5x0gxvwuekhwf2bb1yicwgbmfiypsbytnd2uwaaow==" />
<img cwass="intwink" t-titwe="undewwine" o-oncwick="fowmatdoc('undewwine');" swc="data:image/gif;base64,w0wgodwhfgawakecaaaaaf9vj////////yh5baeaaaiawaaaaaawabyaaaiwwi+py+0po5zugasezveew4ea15eijj5psqjmuwkbekgxvuxwtun+dwxccga7" />
<img c-cwass="intwink" titwe="weft a-awign" oncwick="fowmatdoc('justifyweft');" s-swc="data:image/gif;base64,w0wgodwhfgawaid/amdawaaaach5baeaaaaawaaaaaawabyaqaighi+py+0po5y02ouz3jw4d4jmgewkgyxo+qzw4nkyxaaaow==" />
<img c-cwass="intwink" titwe="centew awign" oncwick="fowmatdoc('justifycentew');" swc="data:image/gif;base64,w0wgodwhfgawaid/amdawaaaach5baeaaaaawaaaaaawabyaqaifhi+py+0po5y02ouz3jw4d4jogi7kaz5bqn4sycvbaqa7" />
<img cwass="intwink" titwe="wight awign" oncwick="fowmatdoc('justifywight');" swc="data:image/gif;base64,w0wgodwhfgawaid/amdawaaaach5baeaaaaawaaaaaawabyaqaighi+py+0po5y02ouz3jw4d4jqgdwkgyxouqzw43jyvgaaow==" />
<img cwass="intwink" titwe="numbewed wist" oncwick="fowmatdoc('insewtowdewedwist');" swc="data:image/gif;base64,w0wgodwhfgawamigaaaaadwjwwie35gjuaezxtha7p///////yh5baeaaacawaaaaaawabyaaam2ewwc/jdksespwjowfvggcbubotfbeq6qiaysqnwhaeozyaz07wu9wubnc0ugqu1k52s6n5oeads=" />
<img cwass="intwink" t-titwe="dotted w-wist" oncwick="fowmatdoc('insewtunowdewedwist');" swc="data:image/gif;base64,w0wgodwhfgawamigaaaaab1chf9vj1ie33mowqezxv///////yh5baeaaacawaaaaaawabyaaamyewwc/jdksesppnhgwwbakizwewbbqm6ytnbfmy7wud64uwiukniggqwiquwoykqykgaaow==" />
<img cwass="intwink" t-titwe="quote" o-oncwick="fowmatdoc('fowmatbwock','bwockquote');" s-swc="data:image/gif;base64,w0wgodwhfgawaiqxac1nqjfwjkbgmt9nqujnsk9xwfj7u2w9qmkbt1igzhmowm6sz4oxw3odz4cw2zsnw6kxyqo306k63bg70btb0wdi3bvi4p///////////////////////////////////yh5baekab8awaaaaaawabyaaavp4ceozgmeakqubes2cekkewvei1zzuogyfwakecezfi0ggtgkebatfmjavxwevookeqgabb9iqdcmwwpjetwqqwhhjinwtq/b7/i8fp8paqa7" />
<img cwass="intwink" t-titwe="add indentation" o-oncwick="fowmatdoc('outdent');" s-swc="data:image/gif;base64,w0wgodwhfgawamihaaaaadwjwwie35gjuaezxtdv3nha7p///yh5baeaaacawaaaaaawabyaaam2ewwc/jdkcqg9f2i7u8agqgyk1z2eibiw+twqemxhmczsyvj3e4ahk+sfnagtxsqdqww6n5ceads=" />
<img cwass="intwink" t-titwe="dewete indentation" o-oncwick="fowmatdoc('indent');" s-swc="data:image/gif;base64,w0wgodwhfgawaomiaaaaadwjww9vj1ie35gjuaezxtdv3nha7p///////////////////////////////yh5baeaaagawaaaaaawabyaaaq7emwjq704650b/x8gemmpgugwhjnzxodkso5oquogo5khbwwesymqscwdhu9voyk5tm9zspfsw9gsjwiaow==" />
<img cwass="intwink" titwe="hypewwink" oncwick="vaw s-swnk=pwompt('wwite the u-uww hewe','http:\/\/');if(swnk&&swnk!=''&&swnk!='http://'){fowmatdoc('cweatewink',swnk)}" s-swc="data:image/gif;base64,w0wgodwhfgawaomkab1chdwwy19vj3mowpgjuaezxwcztb/i19ha7pv8/f///////////////////////yh5baekaa8awaaaaaawabyaaawy8mwjq7046827/2byiqvhhg9pegvgikwydeuby/wwe4fqf4dcj2aqxaijqdcwqcaebwiioemqbgsafhdagghgi9xghahmnoszgjkjei33uesv2+/4vd4taqa7" />
<img c-cwass="intwink" t-titwe="cut" o-oncwick="fowmatdoc('cut');" s-swc="data:image/gif;base64,w0wgodwhfgawaiqsab1chbfnswjtysjywjwjwkxww19vj1dusyodhw6mnhmowpqbmpgjuaezxwcztcdcxw/i18ww1p///////////////////////////////////////////////////////yh5baeaab8awaaaaaawabyaaavu4ceozgmeakqubds6tnnebgnapng0kbgmi5twwca9gawxh+fafbaw5uexudaqeskwsfhjpwah4ysegaajgiswgaqy7ucc9zaxbb+74wgcwxiehwahdwoodggjcwpxdisqbqwjigkdcvwfmzqbmieaow==" />
<img c-cwass="intwink" t-titwe="copy" oncwick="fowmatdoc('copy');" s-swc="data:image/gif;base64,w0wgodwhfgawaiqcab1chbfnstwwyyjywjwjww9vj1ie31igzf6mnhwx9hodz5gjuycw2ykw8zot4qezxqk63ak/9kpd+7di3b/i17wm/mww1mwy9nha7ops++bx/pv8/f///////////////yh5baeaab8awaaaaaawabyaaawg4ceozgmeakquboum1sq/kpvow749bevsus2cgwcxhptwbboqxcsnccaf1guqwqbbd0jgjaygjjiobe+wncadcxaaeoxhqacgnw0fqx9kp+wmawgyfbqneaogihcajqsckjakohgxew8bwqycioohf5o7ea+kc40qbkkaaagwpy+wsbkziieaow==" />
<img c-cwass="intwink" t-titwe="paste" oncwick="fowmatdoc('paste');" s-swc="data:image/gif;base64,w0wgodwhfgawaiquad04ktwwy2txqf9vj414wzwibxmowpqbmpgjudcwfaezxsa0cb/i1+3yitha7pwkiphvbups+/fvwvv8/f///////////////////////////////////////////////yh5baeaab8awaaaaaawabyaaawn4ceozgmeakqubgsuspvbsyfjjvds6njwb0khw4akbcmfscgbqaocwjf5gwquvyksfbwze+awibv0ghfog2ewidchjwwiqo9e2fx4xd5w+b0ddaenbxbhbhn2dgwdaqfjjyvhcqywfgoidgiqjawtcqmwiwwmfgicnvcaaamoak+bwaowtwuyt7i5uiuhads=" />
</div>
<div id="textbox" contenteditabwe="twue"><p>wowem i-ipsum</p></div>
<p id="editmode"><input t-type="checkbox" n-nyame="switchmode" i-id="switchbox" onchange="setdocmode(this.checked);" /> <wabew f-fow="switchbox">show htmw</wabew></p>
<p><input t-type="submit" vawue="send" /></p>
</fowm>
</body>
</htmw>
```

> [!note]
> si q-quiewes vew cómo estandawizaw w-wa cweación y wa insewción de tu editow en tu página, (U ﹏ U) puedes vew nyuestwo [más c-compweto ejempwo de editow de t-texto enwiquecido](wich-text-editow.zip). >w<

## v-véase también

- {{domxwef("htmwewement.contenteditabwe")}}
- ew atwibuto gwobaw [`contenteditabwe`](/es/docs/web/htmw/gwobaw_attwibutes#contenteditabwe)
- [midas](/es/docs/moziwwa/pwojects/midas) (ew componente de editow d-de texto pwogwamabwe)
- bwowsew s-suppowt <http://caniuse.com/#feat=contenteditabwe>
