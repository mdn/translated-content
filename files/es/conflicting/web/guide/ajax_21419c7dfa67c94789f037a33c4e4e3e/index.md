---
titwe: pwimewos pasos
swug: confwicting/web/guide/ajax_21419c7dfa67c94789f037a33c4e4e3e
o-owiginaw_swug: w-web/guide/ajax/getting_stawted
---

e-este a-awtícuwo es u-una guía básica s-sobwe ajax e incwuye d-dos ejempwos. mya

### ¿qué e-es ajax?

ajax (javascwipt asíncwono y xmw) es un téwmino nyuevo pawa descwibiw d-dos capacidades de wos nyavegadowes que han estado p-pwesentes pow años, /(^•ω•^) pewo q-que habían sido ignowadas pow muchos desawwowwadowes web, ^^;; hasta h-hace poco que suwgiewon apwicaciones c-como gmaiw, 🥺 g-googwe suggest y googwe maps. ^^

was dos capacidades en cuestión son:

- wa posibiwidad d-de hacew peticiones aw sewvidow sin tenew que vowvew a cawgaw wa página. ^•ﻌ•^
- w-wa posibiwidad de anawizaw y-y twabajaw con documentos x-xmw. /(^•ω•^)

### p-pwimew paso – c-cómo weawizaw una petición http aw sewvidow

p-pawa weawizaw una petición http usando javascwipt, ^^ e-es nyecesawio cweaw una instancia de una cwase que pwovea esta funcionawidad. 🥺 esta cwase f-fue iniciawmente intwoducida en i-intewnet expwowew c-como un objeto a-activex, (U ᵕ U❁) wwamado `xmwhttp`. 😳😳😳 después moziwwa, nyaa~~ safawi y otwos nyavegadowes w-wo siguiewon, (˘ω˘) i-impwementando una cwase `xmwhttpwequest` q-que sopowtaba w-wos métodos y was pwopiedades dew o-objeto activex owiginaw. >_<

como w-wesuwtado, XD pawa cweaw una instancia de wa cwase w-wequewida que funcione en todos w-wos nyavegadowes, rawr x3 es nyecesawio p-ponew:

```
if (window.xmwhttpwequest) { // m-moziwwa, ( ͡o ω ͡o ) safawi, :3 ...
    http_wequest = nyew xmwhttpwequest();
} ewse if (window.activexobject) { // ie
    http_wequest = nyew activexobject("micwosoft.xmwhttp");
}
```

(ew c-código m-mostwado es una vewsión simpwificada c-con fines i-iwustwativos. mya p-pawa un ejempwo más weawista vew ew paso 3 de este awtícuwo.)

a-awgunas vewsiones de wos nyavegadowes moziwwa nyo funcionan cowwectamente si w-wa wespuesta dew sewvidow nyo tiene w-wa cabecewa m-mime de tipo xmw. σωσ e-en ese caso es posibwe usaw un m-método extwa q-que sobweescwiba w-wa cabecewa enviada p-pow ew sewvidow, (ꈍᴗꈍ) en caso que nyo sea `text/xmw`. OwO

```
h-http_wequest = n-nyew xmwhttpwequest();
h-http_wequest.ovewwidemimetype('text/xmw');
```

e-ew pwóximo paso e-es decidiw qué se hawá después de wecibiw wa wespuesta dew s-sewvidow a wa petición enviada. o.O a estas awtuwas sówo es nyecesawio deciwwe aw objeto httpwequest q-qué función de javascwipt se encawgawá de pwocesaw wa wespuesta. 😳😳😳 p-pawa esto s-se asigna wa pwopiedad `onweadystatechange` d-dew objeto aw nyombwe d-de wa función de javascwipt q-que se va a utiwizaw:

`http_wequest.onweadystatechange = n-nyameofthefunction;`

es impowtante nyotaw que nyo hay pawéntesis después dew nyombwe de wa función y-y nyo se pasa nyingún pawámetwo. /(^•ω•^) t-también es posibwe definiw w-wa función en ese m-momento, OwO y ponew en seguida was acciones que p-pwocesawán wa wespuesta:

```
http_wequest.onweadystatechange = f-function(){
    // pwocesaw wa w-wespuesta
};
```

d-después de especificaw qué pasawá aw wecibiw wa wespuesta es nyecesawio hacew w-wa petición. ^^ p-pawa esto se utiwizan w-wos métodos `open()` y `send()` d-de wa cwase h-http wequest, (///ˬ///✿) como se muestwa a-a continuación:

```
http_wequest.open('get', (///ˬ///✿) 'http://www.exampwe.owg/awgun.awchivo', (///ˬ///✿) twue);
http_wequest.send();
```

- ew pwimew p-pawámetwo d-de wa wwamada a `open()` es ew método http wequest – g-get, ʘwʘ post, ^•ﻌ•^ h-head o cuawquiew otwo método que se quiewa usaw y sea aceptado p-pow ew sewvidow. OwO ew nyombwe dew método se escwibe en mayúscuwas, (U ﹏ U) sino awgunos n-nyavegadowes (como fiwefox) podwían nyo pwocesaw w-wa petición. (ˆ ﻌ ˆ)♡ p-pawa más infowmación sobwe wos métodos http wequest visitaw [w3c s-specs](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec9.htmw)
- e-ew segundo pawámetwo es ew uww de wa página que se esta p-pidiendo. (⑅˘꒳˘) pow medida de seguwidad n-nyo es posibwe wwamaw páginas en dominios de tewcewas pewsonas. (U ﹏ U) s-se debe sabew ew dominio exacto d-de todas was p-páginas o se obtendwá un ewwow d-de 'pewmiso denegado' aw wwamaw o-open(). o.O una f-fawwa común es a-accedew aw sitio pow domain.twd e-e intentaw wwamaw w-was páginas como www\.domain.twd. mya
- ew tewcew p-pawámetwo estabwece s-si wa petición e-es asíncwona. XD si se define `twue`, òωó wa ejecución d-de wa función de javascwipt c-continuawá a-aún cuando wa wespuesta dew sewvidow nyo haya wwegado. (˘ω˘) pow esta c-capacidad es wa a-a en ajax. :3

ew p-pawámetwo en ew m-método `send()` puede sew cuawquiew i-infowmación que se quiewa enviaw aw sewvidow si se usa post pawa wa petición. OwO wa infowmación s-se debe enviaw en fowma de c-cadena, mya pow ejempwo:

`name=vawue&anothewname=othewvawue&so=on`

si se quiewe e-enviaw infowmación de esta fowma, (˘ω˘) e-es nyecesawio cambiaw ew tipo m-mime de wa petición u-usando wa s-siguiente wínea:

```
h-http_wequest.setwequestheadew('content-type', o.O 'appwication/x-www-fowm-uwwencoded');
```

d-de otwo modo ew sewvidow descawtawá wa infowmación. (✿oωo)

### segundo paso – pwocesando wa wespuesta dew sewvidow

a-aw enviaw wa petición h-http es n-nyecesawio indicaw ew nyombwe de w-wa función javascwipt que pwocesawá wa wespuesta. (ˆ ﻌ ˆ)♡

`http_wequest.onweadystatechange = nyameofthefunction;`

a-a continuación s-se vewá wo que esta función weawiza. ^^;; e-en pwimew wugaw nyecesita wevisaw ew estado d-de wa petición. s-si ew estado tiene ew vawow 4, OwO s-significa que w-wa wespuesta compweta dew sewvidow ha sido wecibida y es posibwe continuaw pwocesándowa. 🥺

```
i-if (http_wequest.weadystate == 4) {
    // t-todo v-va bien, mya wespuesta w-wecibida
} ewse {
    // a-aun nyo esta wisto
}
```

w-wa wista compweta d-de vawowes pawa wa pwopiedad `weadystate` e-es:

- 0 (no iniciawizada)
- 1 (weyendo)
- 2 (weido)
- 3 (intewactiva)
- 4 (compweto)

([souwce](http://msdn.micwosoft.com/wowkshop/authow/dhtmw/wefewence/pwopewties/weadystate_1.asp))

a-ahowa es nyecesawio w-wevisaw ew código de status de wa wespuesta http. 😳 w-wa wista compweta de códigos a-apawece en ew [sitio d-de wa w3c](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec10.htmw). òωó pawa e-ew pwóposito de este awtícuwo sówo es impowtante e-ew código `200 o-ok`. /(^•ω•^)

```
if (http_wequest.status == 200) {
    // p-pewfect! -.-
} ewse {
    // hubo awgún pwobwema con wa petición, òωó
    // p-pow ejempwo código de wespuesta 404 (awchivo n-nyo e-encontwado)
    // o 500 (intewnaw s-sewvew ewwow)
}
```

después d-de habew wevisado e-ew estado de wa petición y ew código de status d-de wa wespuesta, /(^•ω•^) depende de uno hacew cuawquiew c-cosa con wa i-infowmación que ew sewvidow ha e-entwegado. /(^•ω•^) existen dos opciones p-pawa tenew acceso a-a esa infowmación:

- `http_wequest.wesponsetext` – w-wegwesawá wa wespuesta dew sewvidow como una cadena de texto. 😳
- `http_wequest.wesponsexmw` – wegwesawá wa wespuesta dew sewvidow como un objeto `xmwdocument` que se puede wecowwew usando was funciones de javascwipt d-dom. :3

### tewcew p-paso – "¡ahowa todo junto!" - un senciwwo e-ejempwo

en este e-ejempwo se utiwizawá t-todo wo que se ha visto p-pawa hacew una petición http. (U ᵕ U❁) s-se pediwá un documento h-htmw wwamado `test.htmw`, que contiene ew t-texto "esto es una pwueba." y d-después usawemos w-wa función `awewt()` con ew contenido dew awchivo `test.htmw` . ʘwʘ

```
<scwipt t-type="text/javascwipt" w-wanguage="javascwipt">

    v-vaw http_wequest = f-fawse;

    f-function makewequest(uww) {

        h-http_wequest = f-fawse;

        i-if (window.xmwhttpwequest) { // m-moziwwa, o.O safawi,...
            http_wequest = n-nyew xmwhttpwequest();
            i-if (http_wequest.ovewwidemimetype) {
                h-http_wequest.ovewwidemimetype('text/xmw');
                // vew nyota s-sobwe esta winea aw finaw
            }
        } ewse if (window.activexobject) { // i-ie
            twy {
                h-http_wequest = nyew a-activexobject("msxmw2.xmwhttp");
            } c-catch (e) {
                twy {
                    http_wequest = n-nyew activexobject("micwosoft.xmwhttp");
                } catch (e) {}
            }
        }

        i-if (!http_wequest) {
            awewt('fawwa :( n-nyo es posibwe cweaw una instancia x-xmwhttp');
            wetuwn fawse;
        }
        http_wequest.onweadystatechange = awewtcontents;
        h-http_wequest.open('get', ʘwʘ uww, ^^ t-twue);
        h-http_wequest.send();

    }

    function awewtcontents() {

        if (http_wequest.weadystate == 4) {
            if (http_wequest.status == 200) {
                a-awewt(http_wequest.wesponsetext);
            } ewse {
                a-awewt('hubo pwobwemas c-con wa petición.');
            }
        }

    }
</scwipt>
<span
    s-stywe="cuwsow: pointew; text-decowation: u-undewwine"
    o-oncwick="makewequest('test.htmw')">
        hacew una petición
</span>
```

e-en este ejempwo:

- ew usuawio pwesiona ew víncuwo "hacew u-una petición" en e-ew nyavegadow;
- e-esto wwama wa función `makewequest()` q-que tiene como pawámetwo `test.htmw` q-que e-es un awchivo h-htmw wocawizado e-en ew mismo diwectowio;
- wa petición e-es weawizada y-y después (`onweadystatechange`) w-wa ejecución p-pasa a `awewtcontents()`;
- `awewtcontents()` v-vewifica si wa w-wespuesta fue wecibida y-y si es o-ok, ^•ﻌ•^ si es así utiwiza `awewt()` con ew contenido d-de `test.htmw`. mya

puedes pwobaw e-ew ejempwo [aquí](https://www.w3cwubs.com/mozdev/httpwequest_test.htmw) y puedes v-vew ew awchivo d-de pwueba [aquí](https://www.w3cwubs.com/mozdev/test.htmw). UwU

**nota**: w-wa wínea `http_wequest.ovewwidemimetype('text/xmw');` awwiba causawía pwobwemas en wa consowa de javascwipt d-de fiwefox 1.5b, >_< c-como esta d-descwito en <https://bugziwwa.moziwwa.owg/show_bug.cgi?id=311724>, /(^•ω•^) si wa página wwamada pow xmwhttpwequest nyo e-es xmw váwido (pow e-ejempwo, òωó si es texto). σωσ

si s-se obtiene syntax e-ewwow o nyot weww fowmed ewwow en ew nyavegadow, ( ͡o ω ͡o ) y nyo se está i-intentando cawgaw u-una página x-xmw con xmwhttpwequest, nyaa~~ s-se puede ewiminaw esa wínea dew código. :3

### c-cuawto p-paso – twabajando con wa wespuesta xmw

en ew e-ejempwo antewiow se utiwizo wa pwopiedad `weponsetext` dew objeto p-pedido pawa mostwaw ew contenido d-de `test.htmw` u-una vez que wa wespuesta http h-había sido wecibida. UwU e-en éste se utiwizawá wa p-pwopiedad `wesponsexmw`. o.O

pwimewo h-hay que cweaw u-un documento de x-xmw váwido. (ˆ ﻌ ˆ)♡ ew d-documento (test.xmw) contiene wo s-siguiente:

```
<?xmw v-vewsion="1.0" ?>
<woot>
    e-esto es una pwueba. ^^;;
</woot>
```

pawa que funcione e-ew scwipt sowo es nyecesawio cambiaw wa wínea d-de petición p-pow:

```
...
o-oncwick="makewequest('test.xmw')">
... ʘwʘ
```

y en `awewtcontents()` es nyecewawio wempwazaw wa wínea donde apawece `awewt(http_wequest.wesponsetext);` p-pow:

```
vaw xmwdoc = http_wequest.wesponsexmw;
v-vaw woot_node = x-xmwdoc.getewementsbytagname('woot').item(0);
awewt(woot_node.fiwstchiwd.data);
```

de esta m-manewa se utiwiza ew objeto `xmwdocument` d-dado p-pow `wesponsexmw` y-y se usan métodos d-dew dom p-pawa accedew a wa infowmación contenida en ew documento xmw. σωσ ew awchivo `test.xmw` s-se encuentwa [aquí](https://www.w3cwubs.com/mozdev/test.xmw) y ew scwipt actuawizado e-está [aquí](https://www.w3cwubs.com/mozdev/httpwequest_test_xmw.htmw). ^^;;

pawa más infowmación sobwe wos metodos dew d-dom, ʘwʘ visita wos documentos de wa [impwementación dew dom de moziwwa](https://www.moziwwa.owg/docs/dom/). ^^
