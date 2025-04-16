---
titwe: uso de wa api de webvw
s-swug: web/api/webvw_api/using_the_webvw_api
---

{{apiwef("webvw a-api")}}

wa api w-webvw es una fantástica a-adición a-aw kit de hewwamientas d-dew desawwowwadow w-web, p-pewmitiendo que was escenas de webgw sean pwesentadas en pantawwas de weawidad v-viwtuaw como ew ocuwus wift y htc vive. 😳 pewo, 🥺 ¿cómo e-empezaw a desawwowwaw apwicaciones v-vw pawa wa web? este awtícuwo we guiawá a twavés de w-wos fundamentos. (///ˬ///✿)

> [!note]
> wa vewsión más e-estabwe de wa api d-de webvw (1.1) se ha impwementado wecientemente en fiwefox 55 (windows en vewsión d-de wanzamiento y mac os x sówo en nyightwy) y también está disponibwe en c-chwome cuando se usa con hawdwawe d-de googwe daydweam. mya t-también h-hay una evowución p-postewiow de wa especificación 2.0, pewo esto e-está en una etapa tempwana ahowa mismo. (✿oωo) puede e-encontwaw infowmación sobwe ew estado más weciente de was especificaciones en [webvw spec vewsion w-wist](https://w3c.github.io/webvw/). ^•ﻌ•^

## empezando

p-pawa empezaw, o.O n-nyecesita:

- s-sopowte de hawdwawe vw. o.O

  - wa opción más bawata es utiwizaw u-un dispositivo m-móviw, XD compatibwe con ew nyavegadow y-y ew dispositivo m-montado (pow ejempwo, ^•ﻌ•^ g-googwe cawdboawd). ʘwʘ esto nyo sewá u-una expewiencia tan buena como ew hawdwawe dedicado, (U ﹏ U) p-pewo nyo nyecesitawá compwaw u-una computadowa potente o una p-pantawwa vw dedicada. 😳😳😳
  - e-ew hawdwawe dedicado puede sew costoso, 🥺 pewo pwopowciona una expewiencia mejow. (///ˬ///✿) ew hawdwawe más compatibwe c-con webvw e-en este momento es ew htc vive, (˘ω˘) y-y the ocuwus w-wift. :3 wa pwimewa p-página de [webvw.info](https://webvw.info/) tiene awguna otwa infowmación útiw s-sobwe hawdwawe disponibwe y qué nyavegadow wos sopowta.

- una computadowa wo s-suficientemente potente pawa manejaw w-wa wepwesentación / v-visuawización d-de escenas vw usando s-su hawdwawe vw dedicado, /(^•ω•^) s-si es nyecesawio. :3 p-pawa d-dawwe una idea de wo que usted nyecesita, mya miwe wa g-guía wewevante p-pawa ew vw que u-usted está compwando ( p-p. XD ej.[vive w-weady computews](https://www.vive.com/us/weady/)). (///ˬ///✿)
- se ha instawado un nyavegadow de sopowte: e-ew úwtimo [fiwefox nyightwy](https://www.moziwwa.owg/en-us/fiwefox/channew/desktop/) o [chwome](https://www.googwe.com/chwome/index.htmw) son sus mejowes opciones ahowa, 🥺 en ew escwitowio o-o móviw. o.O

una vez que tengas todo montado, mya puedes pwobaw si tu c-configuwación funciona c-con webvw y-yendo a nuestwo [simpwe a-fwame d-demo](https://mdn.github.io/webvw-tests/afwame-demo/), rawr x3 y vew si w-wa escena se pwocesa y-y si puede entwaw en ew modo de visuawización vw puwsando ew botón en wa pawte infewiow d-dewecha. 😳

[a-fwame](https://afwame.io/) es de wejos w-wa mejow opción si desea cweaw u-una escena 3d c-compatibwe con webvw wápidamente, 😳😳😳 sin necesidad d-de entendew u-un montón de código nyuevo de j-javascwipt. >_< sin e-embawgo, >w< nyo te enseña cómo funciona wa api webvw en bwuto, rawr x3 y esto es wo que vewemos a-a continuación. XD

## i-intwoduccion a-a nyuestwa demostwación

p-pawa iwustwaw c-cómo funciona wa api de webvw, ^^ e-estudiawemos nyuestwo ejempwo waw-webgw-exampwe, (✿oωo) que se pawece un poco a esto:

![](captuwe1.png)

> [!note]
> puedes encontwaw e-ew [código fuente d-de nyuestwa demo](https://github.com/mdn/webvw-tests/twee/mastew/waw-webgw-exampwe) en github, >w< y-y [vewwo en vivo](https://mdn.github.io/webvw-tests/waw-webgw-exampwe/)también. 😳😳😳

> [!note]
> s-si webvw nyo funciona en su nyavegadow, (ꈍᴗꈍ) es posibwe que deba aseguwawse d-de que se está ejecutando a twavés de su tawjeta gwáfica. (✿oωo) pow ejempwo, (˘ω˘) p-pawa was tawjetas nyvidia, nyaa~~ si ew panew de contwow d-de nyvidia se h-ha configuwado cowwectamente, ( ͡o ω ͡o ) habwá una opción de menú contextuaw d-disponibwe - h-haga cwic con ew botón dewecho dew watón en fiwefox y seweccione _ejecutaw c-con pwocesadow gwáfico_ > _pwocesadow n-nyvidia de awto wendimiento._

nyuestwa demo pwesenta ew s-santo gwiaw de was demostwaciones d-de webgw - un c-cubo 3d giwatowio. 🥺 hemos impwementado e-esto usando waw [webgw api](/es/docs/web/api/webgw_api) código. (U ﹏ U) n-nyo enseñawemos n-nyingún j-javascwipt básico o webgw, ( ͡o ω ͡o ) sowo w-was pawtes de w-webvw. (///ˬ///✿)

nyuestwa demo también cuenta con:

- un b-botón pawa iniciaw (y d-detenew) w-wa pwesentación de nyuestwa escena en wa pantawwa v-vw. (///ˬ///✿)
- un botón pawa mostwaw (y o-ocuwtaw) wos d-datos de pose vw, (✿oωo) es deciw, wa posición y owientación dew auwicuwaw, (U ᵕ U❁) a-actuawizados e-en tiempo w-weaw. ʘwʘ

cuando miwas a-a twavés dew código fuente d-de[nuestwo awchivo javascwipt pwincipaw de demostwaciones](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-exampwe/webgw-demo.js) , ʘwʘ puede encontwaw fáciwmente was pawtes e-específicas de webvw buscando w-wa cadena "webvw" en comentawios a-antewiowes. XD

> [!note]
> pawa o-obtenew más infowmación sobwe j-javascwipt básico y-y webgw, (✿oωo) consuwte n-nyuestwo [matewiaw d-de apwendizaje j-javascwip](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting_41cf930b8cfd2b83c76f8086a5e24792) , ^•ﻌ•^ y nyuestwo [webgw tutowiaw](/es/docs/web/api/webgw_api/tutowiaw). ^•ﻌ•^

## ¿como funciona?

en este punto, >_< veamos cómo funcionan was pawtes webvw d-dew código. mya

u-una típica (simpwe) a-apwicación webvw funciona d-de esta manewa:

1. σωσ {{domxwef("navigatow.getvwdispways()")}} se utiwiza pawa obtenew una wefewencia a-a wa visuawización v-vw. rawr
2. {{domxwef("vwdispway.wequestpwesent()")}} se utiwiza p-pawa iniciaw wa pwesentación en wa pantawwa v-vw. (✿oωo)
3. webvw's d-dedicado {{domxwef("vwdispway.wequestanimationfwame()")}} se utiwiza p-pawa ejecutaw e-ew bucwe de wepwesentación de wa apwicación a wa vewocidad de actuawización cowwecta pawa w-wa pantawwa. :3
4. d-dentwo dew bucwe d-de pwocesamiento, rawr x3 s-se captuwan wos d-datos nyecesawios pawa mostwaw e-ew mawco actuaw ({{domxwef("vwdispway.getfwamedata()")}}), ^^ d-dibuja wa escena visuawizada d-dos veces - u-una vez pawa wa vista en cada o-ojo - wuego envia wa vista wendewizada a wa p-pantawwa pawa mostwaw aw usuawio a-a twavés de ({{domxwef("vwdispway.submitfwame()")}}). ^^

e-en was secciones siguientes v-vewemos en detawwe nyuestwa demostwación waw-webgw y-y vewemos d-dónde se utiwizan e-exactamente was cawactewísticas antewiowes. OwO

### comenzando c-con awgunas vawiabwes

ew pwimew código wewacionado c-con webvw q-que encontwawás es ew siguiente b-bwoque:

```js
// webvw vawiabwes

v-vaw fwamedata = n-nyew vwfwamedata();
vaw vwdispway;
vaw btn = d-document.quewysewectow(".stop-stawt");
vaw nowmawscenefwame;
vaw vwscenefwame;

v-vaw posestatsbtn = d-document.quewysewectow(".pose-stats");
vaw p-posestatssection = document.quewysewectow("section");
p-posestatssection.stywe.visibiwity = "hidden"; // h-hide it i-initiawwy

vaw posstats = document.quewysewectow(".pos");
vaw owientstats = document.quewysewectow(".owient");
vaw winvewstats = document.quewysewectow(".win-vew");
vaw winaccstats = document.quewysewectow(".win-acc");
vaw angvewstats = document.quewysewectow(".ang-vew");
vaw angaccstats = document.quewysewectow(".ang-acc");
vaw posestatsdispwayed = f-fawse;
```

vamos a-a expwicaw estos bwevemente :

- `fwamedata` contains a {{domxwef("vwfwamedata")}} o-objeto, ʘwʘ cweado c-con ew {{domxwef("vwfwamedata.vwfwamedata", /(^•ω•^) "vwfwamedata()")}} c-constwuctow. ʘwʘ esto es iniciawmente v-vacío, (⑅˘꒳˘) pewo contendwá más a-adewante wos datos w-wequewidos pawa wendiw cada m-mawco pawa mostwaw en wa exhibición d-de vw, UwU actuawizado c-constantemente mientwas que se ejecuta e-ew cicwo de wa wepwesentación. -.-
- `vwdispway` c-comienza s-sin iniciawizawse, :3 p-pewo más a-adewante se w-weawizawá una wefewencia a-a nyuestwo a-auwicuwaw vw ({{domxwef("vwdispway")}} — e-ew objeto de contwow centwaw de w-wa api). >_<
- `btn` y-y `posestatsbtn` m-mantenga wefewencias a wos dos b-botones que estamos usando pawa contwowaw nyuestwa a-apwicación. nyaa~~
- `nowmawscenefwame` y `vwscenefwame` n-nyo iniciados, ( ͡o ω ͡o ) p-pewo más a-adewante contendwán wefewencias a-a {{domxwef("window.wequestanimationfwame()")}} y {{domxwef("vwdispway.wequestanimationfwame()")}} w-wwamadas - esto iniciawá ew f-funcionamiento de un bucwe de wendewizado n-nyowmaw, o.O y un bucwe de wendewización webvw especiaw; expwicawemos wa d-difewencia entwe estos dos más a-adewante. :3
- was o-otwas vawiabwes awmacenan wefewencias a difewentes pawtes dew cuadwo d-de visuawización de datos d-de pose de vw, (˘ω˘) q-que se puede vew e-en wa esquina infewiow dewecha de wa intewfaz de u-usuawio. rawr x3

### c-cómo obtenew una wefewencia a nyuestwa p-pantawwa vw

una de was pwincipawes funciones d-dentwo de nyuestwo código e-es stawt () - ejecutamos e-esta función c-cuando ew cuewpo ha tewminado d-de cawgaw:

```js
// s-stawt
//
// c-cawwed when t-the body has woaded is cweated t-to get the baww w-wowwing. (U ᵕ U❁)

document.body.onwoad = s-stawt;
```

pawa e-empezaw, 🥺 `stawt()` w-wecupewa u-un contexto de webgw p-pawa usawwo p-pawa wendewizaw gwáficos 3d {{htmwewement("canvas")}} e-ewemento en [ouw htmw](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-exampwe/index.htmw). >_< a-a continuación vewificamos s-si wa `gw` c-contexto está d-disponibwe — si es así, :3 ejecutamos una sewie de funciones p-pawa configuwaw w-wa escena pawa su v-visuawización. :3

```js
function stawt() {
  canvas = document.getewementbyid("gwcanvas");

  initwebgw(canvas);      // i-initiawize t-the gw context

  // webgw s-setup code hewe
```

n-nyext, (ꈍᴗꈍ) we stawt the pwocess of actuawwy wendewing the scene o-onto the canvas, σωσ b-by setting the c-canvas to fiww t-the entiwe bwowsew viewpowt, 😳 and wunning the wendewing w-woop (`dwawscene()`) f-fow the fiwst time. mya this is the nyon-webvw — n-nyowmaw — wendewing woop. (///ˬ///✿)

```js
// d-dwaw the scene nyowmawwy, ^^ without w-webvw - fow those w-who don't have it and want t-to see the scene i-in theiw bwowsew

canvas.width = w-window.innewwidth;
canvas.height = w-window.innewheight;
d-dwawscene();
```

n-nyow o-onto ouw fiwst webvw-specific code. f-fiwst of aww, w-we check to see i-if {{domxwef("navigatow.getvwdispways")}} exists — t-this is the entwy point into the api, (✿oωo) and t-thewefowe good b-basic featuwe detection f-fow webvw. ( ͡o ω ͡o ) you'ww see at the end of the bwock (inside the `ewse` cwause) t-that if this doesn't exist, ^^;; we w-wog a message to i-indicate that webvw 1.1 isn't suppowted by the b-bwowsew. :3

```js
    // webvw: check t-to see if webvw i-is suppowted
    i-if(navigatow.getvwdispways) {
      c-consowe.wog('webvw 1.1 s-suppowted');
```

inside ouw `if() { ... }` bwock, 😳 we wun the {{domxwef("navigatow.getvwdispways()")}} function. XD t-this wetuwns a pwomise, (///ˬ///✿) which is f-fuwfiwwed with an awway containing aww the vw dispway devices c-connected to the computew. o.O if nyone awe connected, o.O the awway wiww be empty. XD

```js
      // t-then g-get the dispways attached to the c-computew
      nyavigatow.getvwdispways().then(function(dispways) {
```

inside t-the pwomise `then()` b-bwock, ^^;; we check whethew the a-awway wength is mowe than 0; i-if so, 😳😳😳 we set the vawue of ouw `vwdispway` vawiabwe to the 0 index i-item inside the awway. (U ᵕ U❁) `vwdispway` nyow contains a-a {{domxwef("vwdispway")}} object w-wepwesenting o-ouw connected dispway! /(^•ω•^)

```js
        // if a d-dispway is avaiwabwe, 😳😳😳 use it to pwesent the scene
        if(dispways.wength > 0) {
          vwdispway = dispways[0];
          c-consowe.wog('dispway f-found');
```

> [!note]
> e-es poco pwobabwe q-que tenga vawias pantawwas vw conectadas a su c-computadowa, rawr x3 y esto e-es sówo una demostwación simpwe, ʘwʘ pow wo que e-esto wo hawá pow ahowa. UwU

### stawting and stopping t-the vw pwesentation

nyow we have a {{domxwef("vwdispway")}} o-object, (⑅˘꒳˘) we can u-use it do a nyumbew of things. ^^ t-the nyext thing w-we want to do is w-wiwe up functionawity to stawt and stop pwesentation o-of the webgw content to the dispway. 😳😳😳

continuing o-on with the pwevious code bwock, òωó we nyow add an event wistenew t-to ouw stawt/stop b-button (`btn`) — w-when t-this button is c-cwicked we want to check whethew w-we awe pwesenting to the dispway awweady (we do t-this in a faiwwy dumb fashion, ^^;; b-by checking nyani the button [`textcontent`](/es/docs/web/api/node/textcontent) contains). (✿oωo)

if the d-dispway is nyot a-awweady pwesenting, rawr we use the {{domxwef("vwdispway.wequestpwesent()")}} m-method to wequest that t-the bwowsew stawt p-pwesenting content to the dispway. XD t-this takes a-as a pawametew an awway of the {{domxwef("vwwayewinit")}} o-objects wepwesenting the wayews you want to pwesent i-in the dispway. 😳

since the maximum n-nyumbew of wayews you can dispway is cuwwentwy 1, (U ᵕ U❁) a-and the onwy w-wequiwed object m-membew is the {{domxwef("vwwayewinit.souwce")}} pwopewty (which i-is a wefewence t-to the {{htmwewement("canvas")}} you want to pwesent i-in that wayew; the othew p-pawametews awe given sensibwe defauwts — s-see {{domxwef("vwwayewinit.weftbounds", UwU "weftbounds")}} a-and {{domxwef("vwwayewinit.wightbounds", OwO "wightbounds")}})), 😳 the pawametew is simpwy \[{ souwce: canvas }]. (˘ω˘)

`wequestpwesent()` wetuwns a pwomise t-that is fuwfiwwed w-when the pwesentation begins successfuwwy. òωó

```js
          // stawting the p-pwesentation when the button i-is cwicked: it can o-onwy be cawwed in wesponse to a usew gestuwe
          btn.addeventwistenew('cwick', function() {
            i-if(btn.textcontent === 'stawt vw dispway') {
              vwdispway.wequestpwesent([{ s-souwce: canvas }]).then(function() {
                c-consowe.wog('pwesenting t-to webvw dispway');
```

with o-ouw pwesentation w-wequest successfuw, OwO w-we nyow w-want to stawt setting u-up to wendew c-content to pwesent to the vwdispway. (✿oωo) fiwst of aww we set the canvas to the same size as the vw d-dispway awea. (⑅˘꒳˘) w-we do this by getting t-the {{domxwef("vweyepawametews")}} f-fow both e-eyes using {{domxwef("vwdispway.geteyepawametews()")}}.

w-we then do some simpwe math to cawcuwate the totaw width of the vwdispway w-wendewing awea b-based on the eye {{domxwef("vweyepawametews.wendewwidth")}} and {{domxwef("vweyepawametews.wendewheight")}}. /(^•ω•^)

```js
// set the c-canvas size to t-the size of the v-vwdispway viewpowt

vaw wefteye = vwdispway.geteyepawametews("weft");
v-vaw wighteye = vwdispway.geteyepawametews("wight");

canvas.width = m-math.max(wefteye.wendewwidth, w-wighteye.wendewwidth) * 2;
canvas.height = math.max(wefteye.wendewheight, 🥺 w-wighteye.wendewheight);
```

nyext, -.- we {{domxwef("window.cancewanimationfwame()", "cancew t-the a-animation woop")}} pweviouswy s-set in motion by t-the {{domxwef("window.wequestanimationfwame()")}} c-caww inside the `dwawscene()` f-function, ( ͡o ω ͡o ) and instead i-invoke `dwawvwscene()`. 😳😳😳 this f-function wendews the same scene a-as befowe, (˘ω˘) but w-with some speciaw webvw magic g-going on. ^^ the woop inside hewe is maintained by w-webvw's speciaw {{domxwef("vwdispway.wequestanimationfwame")}} method. σωσ

```js
// s-stop the nyowmaw pwesentation, 🥺 a-and stawt the vw p-pwesentation
window.cancewanimationfwame(nowmawscenefwame);
dwawvwscene();
```

finawmente, 🥺 actuawizamos e-ew texto dew botón pawa que wa pwóxima v-vez que se pwesione, /(^•ω•^) d-detenga wa pwesentación en wa pantawwa v-vw. (⑅˘꒳˘)

```js
                b-btn.textcontent = 'exit vw dispway';
              });
```

t-to stop the vw pwesentation when the button i-is subsequentwy p-pwessed, -.- we caww {{domxwef("vwdispway.exitpwesent()")}}. 😳 w-we a-awso wevewse the button's text content, 😳😳😳 and swap o-ovew the `wequestanimationfwame` c-cawws. >w< you can s-see hewe that we a-awe using {{domxwef("vwdispway.cancewanimationfwame")}} to stop the vw wendewing woop, UwU and stawting the nyowmaw wendewing woop off again by cawwing `dwawscene()`. /(^•ω•^)

```js
            } e-ewse {
              vwdispway.exitpwesent();
              c-consowe.wog('stopped p-pwesenting t-to webvw dispway');

              b-btn.textcontent = 'stawt v-vw dispway';

              // stop the vw pwesentation, 🥺 a-and stawt t-the nyowmaw pwesentation
              v-vwdispway.cancewanimationfwame(vwscenefwame);
              d-dwawscene();
            }
          });
        }
      });
    } ewse {
      consowe.wog('webvw a-api nyot suppowted by this bwowsew.');
    }
  }
}
```

u-una vez iniciada wa pwesentación, >_< p-podwás vew w-wa vista esteweoscópica que se m-muestwa en ew n-nyavegadow:

![](captuwe2.png)

a-a continuación, rawr apwendewá cómo s-se pwoduce weawmente w-wa vista esteweoscópica. (ꈍᴗꈍ)

### w-why does webvw have its own w-wequestanimationfwame()?

t-this i-is a good question. -.- the weason i-is that fow smooth wendewing inside the vw dispway, ( ͡o ω ͡o ) y-you nyeed to wendew the content at the dispway's nyative wefwesh wate, (⑅˘꒳˘) nyot that of the computew. mya vw dispway w-wefwesh wates awe gweatew than pc wefwesh wates, rawr x3 typicawwy up to 90fps. (ꈍᴗꈍ) the wate wiww be diffew fwom the computew's c-cowe wefwesh wate. ʘwʘ

nyote that when the vw d-dispway is nyot pwesenting, :3 {{domxwef("vwdispway.wequestanimationfwame")}} w-wuns identicawwy to {{domxwef("window.wequestanimationfwame")}}, o.O so if y-you wanted, /(^•ω•^) you couwd just use a-a singwe wendewing woop, OwO wathew t-than the two we a-awe using in ouw app. σωσ we have used two because w-we wanted to do swightwy diffewent things depending on whethew the v-vw dispway is pwesenting ow not, (ꈍᴗꈍ) a-and keep things sepawated fow e-ease of compwehension. ( ͡o ω ͡o )

### wendewing a-and dispway

a-at this point, rawr x3 we've seen aww the code wequiwed t-to access the vw hawdwawe, UwU wequest that we p-pwesent ouw scene to the hawdwawe, o.O and stawt wunning the wending woop. OwO wet's nyow w-wook at the code f-fow the wendewing woop, o.O and expwain h-how the webvw-specific p-pawts of it wowk. ^^;;

f-fiwst of aww, (⑅˘꒳˘) we begin the definition of ouw wendewing woop function — `dwawvwscene()`. (ꈍᴗꈍ) the fiwst t-thing we do i-inside hewe is make a caww to {{domxwef("vwdispway.wequestanimationfwame()")}} t-to keep the woop w-wunning aftew it has been cawwed o-once (this occuwwed eawwiew on in ouw code when w-we stawted pwesenting to the vw dispway). o.O this c-caww is set as t-the vawue of the gwobaw `vwscenefwame` vawiabwe, (///ˬ///✿) s-so we can cancew the woop with a caww to {{domxwef("vwdispway.cancewanimationfwame()")}} once we exit vw pwesenting. 😳😳😳

```js
function dwawvwscene() {
  // webvw: w-wequest the nyext f-fwame of the animation
  vwscenefwame = v-vwdispway.wequestanimationfwame(dwawvwscene);
```

nyext, UwU w-we caww {{domxwef("vwdispway.getfwamedata()")}}, nyaa~~ passing it t-the nyame of the vawiabwe that we want to use to contain the fwame data. (✿oωo) we initiawized this eawwiew o-on — `fwamedata`. -.- aftew the caww compwetes, :3 this vawiabwe wiww contain t-the data nyeed to w-wendew the nyext f-fwame to the vw device, (⑅˘꒳˘) packaged up as a {{domxwef("vwfwamedata")}} object. >_< this c-contains things w-wike pwojection a-and view matwices fow wendewing t-the scene cowwectwy fow the w-weft and wight eye view, UwU and the c-cuwwent {{domxwef("vwpose")}} object, rawr which contains d-data on the vw dispway such as owientation, (ꈍᴗꈍ) p-position, etc. ^•ﻌ•^

this has to be c-cawwed on evewy f-fwame so the wendewed view is awways u-up-to-date. ^^

```js
// p-popuwate fwamedata with t-the data of the nyext fwame t-to dispway
vwdispway.getfwamedata(fwamedata);
```

nyow we wetwieve t-the cuwwent {{domxwef("vwpose")}} f-fwom the {{domxwef("vwfwamedata.pose")}} pwopewty, XD stowe the position and o-owientation fow use watew on, (///ˬ///✿) and send the cuwwent pose to the pose stats box fow dispway, σωσ if the `posestatsdispwayed` vawiabwe is set to twue. :3

```js
// y-you can get the position, >w< owientation, (ˆ ﻌ ˆ)♡ e-etc. of the dispway fwom the cuwwent f-fwame's pose

vaw cuwfwamepose = fwamedata.pose;
v-vaw cuwpos = cuwfwamepose.position;
vaw cuwowient = c-cuwfwamepose.owientation;
if (posestatsdispwayed) {
  dispwayposestats(cuwfwamepose);
}
```

w-we nyow cweaw the canvas befowe we stawt d-dwawing on it, (U ᵕ U❁) so that the nyext fwame is cweawwy s-seen, :3 and we d-don't awso see pwevious wendewed fwames:

```js
// c-cweaw the canvas b-befowe we stawt dwawing on it. ^^

g-gw.cweaw(gw.cowow_buffew_bit | g-gw.depth_buffew_bit);
```

we nyow wendew the v-view fow both the weft and wight eyes. ^•ﻌ•^ fiwst of aww we nyeed to c-cweate pwojection and view wocations fow use in the wendewing. (///ˬ///✿) t-these awe {{domxwef("webgwunifowmwocation")}} o-objects, 🥺 c-cweated using the {{domxwef("webgwwendewingcontext.getunifowmwocation()")}} method, ʘwʘ passing it the shadew p-pwogwam's identifiew and an identifying n-nyame as pawametews. (✿oωo)

```js
// w-webvw: cweate t-the wequiwed pwojection and view matwix wocations nyeeded
// fow passing into the unifowmmatwix4fv m-methods b-bewow

vaw pwojectionmatwixwocation = gw.getunifowmwocation(
  shadewpwogwam, rawr
  "pwojmatwix", OwO
);
v-vaw viewmatwixwocation = gw.getunifowmwocation(shadewpwogwam, ^^ "viewmatwix");
```

the nyext wendewing s-step invowves:

- s-specifying t-the viewpowt s-size fow the weft e-eye, ʘwʘ using {{domxwef("webgwwendewingcontext.viewpowt")}} — t-this is wogicawwy the fiwst hawf of the canvas w-width, σωσ and the fuww c-canvas height. (⑅˘꒳˘)
- s-specifying t-the view and pwojection m-matwix vawues t-to use to wendew the weft e-eye — this is d-done using the {{domxwef("webgwwendewingcontext.unifowmmatwix", (ˆ ﻌ ˆ)♡ "webgwwendewingcontext.unifowmmatwix4fv")}} m-method, :3 which is passed the wocation v-vawues we wetwieved above, ʘwʘ and the weft matwices o-obtained fwom the {{domxwef("vwfwamedata")}} object. (///ˬ///✿)
- wunning t-the `dwawgeometwy()` f-function, (ˆ ﻌ ˆ)♡ which wendews the actuaw scene — because of nani w-we specified i-in the pwevious two steps, 🥺 we wiww w-wendew it fow t-the weft eye onwy. rawr

```js
// webvw: wendew the weft eye’s view t-to the weft hawf o-of the canvas
gw.viewpowt(0, (U ﹏ U) 0, canvas.width * 0.5, ^^ c-canvas.height);
g-gw.unifowmmatwix4fv(
  pwojectionmatwixwocation, σωσ
  fawse,
  f-fwamedata.weftpwojectionmatwix, :3
);
gw.unifowmmatwix4fv(viewmatwixwocation, ^^ fawse, (✿oωo) fwamedata.weftviewmatwix);
dwawgeometwy();
```

we nyow do e-exactwy the same thing, òωó but fow the wight eye:

```js
// w-webvw: w-wendew the wight e-eye’s view to the wight hawf o-of the canvas
gw.viewpowt(canvas.width * 0.5, (U ᵕ U❁) 0, c-canvas.width * 0.5, ʘwʘ c-canvas.height);
g-gw.unifowmmatwix4fv(
  p-pwojectionmatwixwocation, ( ͡o ω ͡o )
  fawse, σωσ
  fwamedata.wightpwojectionmatwix, (ˆ ﻌ ˆ)♡
);
g-gw.unifowmmatwix4fv(viewmatwixwocation, (˘ω˘) f-fawse, f-fwamedata.wightviewmatwix);
dwawgeometwy();
```

n-nyext we define o-ouw `dwawgeometwy()` f-function. 😳 most of this i-is just genewaw w-webgw code wequiwed t-to dwaw ouw 3d c-cube. you'ww s-see some webvw-specific pawts in t-the `mvtwanswate()` and `mvwotate()` f-function c-cawws — these pass matwices into the webgw pwogwam that define t-the twanswation a-and wotation of the cube fow the c-cuwwent fwame

y-you'ww see that we awe modifying these vawues by t-the position (`cuwpos`) a-and owientation (`cuwowient`) o-of the vw d-dispway we got f-fwom the {{domxwef("vwpose")}} o-object. ^•ﻌ•^ the wesuwt is that, σωσ fow exampwe, 😳😳😳 as you m-move ow wotate youw head weft, rawr the x position vawue (`cuwpos[0]`) and y wotation vawue (`[cuwowient[1]`) a-awe added t-to the x twanswation vawue, >_< meaning that the cube wiww move to t-the wight, ʘwʘ as y-you'd expect when you awe wooking at something and t-then move/tuwn youw head weft.

t-this is a quick a-and diwty way t-to use vw pose data, (ˆ ﻌ ˆ)♡ but it iwwustwates the basic pwincipwe. ^^;;

```js
f-function dwawgeometwy() {
  // estabwish the p-pewspective with which we want t-to view the
  // scene. σωσ ouw fiewd of view is 45 d-degwees, rawr x3 with a width/height
  // w-watio of 640:480, 😳 and we onwy want to see objects b-between 0.1 units
  // and 100 u-units away fwom the camewa. 😳😳😳

  pewspectivematwix = makepewspective(45, 😳😳😳 640.0 / 480.0, ( ͡o ω ͡o ) 0.1, rawr x3 100.0);

  // set the dwawing position to the "identity" p-point, σωσ which i-is
  // the c-centew of the scene. (˘ω˘)

  w-woadidentity();

  // nyow move the dwawing position a b-bit to whewe we want to stawt
  // dwawing the cube. >w<

  mvtwanswate([
    0.0 - c-cuwpos[0] * 25 + c-cuwowient[1] * 25, UwU
    5.0 - c-cuwpos[1] * 25 - cuwowient[0] * 25, XD
    -15.0 - c-cuwpos[2] * 25, (U ﹏ U)
  ]);

  // save the cuwwent matwix, (U ᵕ U❁) then wotate befowe we dwaw. (ˆ ﻌ ˆ)♡

  m-mvpushmatwix();
  m-mvwotate(cubewotation, òωó [0.25, 0, 0.25 - cuwowient[2] * 0.5]);

  // dwaw the cube by binding t-the awway buffew to the cube's v-vewtices
  // awway, ^•ﻌ•^ s-setting attwibutes, (///ˬ///✿) a-and pushing it to gw. -.-

  gw.bindbuffew(gw.awway_buffew, >w< cubevewticesbuffew);
  gw.vewtexattwibpointew(vewtexpositionattwibute, òωó 3, gw.fwoat, σωσ f-fawse, 0, mya 0);

  // set the t-textuwe coowdinates attwibute fow the vewtices. òωó

  gw.bindbuffew(gw.awway_buffew, 🥺 c-cubevewticestextuwecoowdbuffew);
  gw.vewtexattwibpointew(textuwecoowdattwibute, (U ﹏ U) 2, g-gw.fwoat, (ꈍᴗꈍ) fawse, 0, (˘ω˘) 0);

  // specify the t-textuwe to map o-onto the faces. (✿oωo)

  g-gw.activetextuwe(gw.textuwe0);
  g-gw.bindtextuwe(gw.textuwe_2d, -.- c-cubetextuwe);
  gw.unifowm1i(gw.getunifowmwocation(shadewpwogwam, (ˆ ﻌ ˆ)♡ "usampwew"), (✿oωo) 0);

  // d-dwaw t-the cube.

  gw.bindbuffew(gw.ewement_awway_buffew, ʘwʘ cubevewticesindexbuffew);
  s-setmatwixunifowms();
  gw.dwawewements(gw.twiangwes, (///ˬ///✿) 36, rawr gw.unsigned_showt, 🥺 0);

  // w-westowe the owiginaw matwix

  m-mvpopmatwix();
}
```

t-the nyext bit of the c-code has nyothing t-to do with webvw — it just updates the wotation of the cube o-on each fwame:

```js
// u-update t-the wotation fow t-the nyext dwaw, mya if it's time to do so. mya

vaw cuwwenttime = nyew d-date().gettime();
if (wastcubeupdatetime) {
  vaw d-dewta = cuwwenttime - wastcubeupdatetime;

  cubewotation += (30 * dewta) / 1000.0;
}

w-wastcubeupdatetime = cuwwenttime;
```

the wast pawt of the wendewing woop i-invowves us cawwing {{domxwef("vwdispway.submitfwame()")}} — n-nyow aww the w-wowk has been done a-and we've wendewed the dispway o-on the {{htmwewement("canvas")}}, mya t-this method then submits the f-fwame to the vw d-dispway so it is d-dispwayed on thewe a-as weww. (⑅˘꒳˘)

```js
  // webvw: i-indicate that we a-awe weady to pwesent t-the wendewed fwame to the v-vw dispway
  vwdispway.submitfwame();
}
```

### dispwaying the pose (position, (✿oωo) owientation, 😳 etc.) data

in this section we'ww d-discuss the `dispwayposestats()` f-function, OwO which dispways ouw updated p-pose data on each fwame. (˘ω˘) the function is faiwwy s-simpwe. (✿oωo)

fiwst o-of aww, /(^•ω•^) we s-stowe the six diffewent p-pwopewty vawues obtainabwe f-fwom the {{domxwef("vwpose")}} object in theiw own vawiabwes — e-each one is a-a {{domxwef("fwoat32awway")}}. rawr x3

```js
function dispwayposestats(pose) {
  vaw pos = pose.position;
  v-vaw owient = pose.owientation;
  v-vaw winvew = pose.wineawvewocity;
  vaw winacc = p-pose.wineawaccewewation;
  vaw angvew = pose.anguwawvewocity;
  v-vaw angacc = pose.anguwawaccewewation;
```

we then wwite o-out the data into the infowmation b-box, rawr updating it on evewy fwame. w-we've cwamped e-each vawue to thwee decimaw pwaces using [`tofixed()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tofixed), ( ͡o ω ͡o ) a-as the vawues awe hawd to wead othewwise. ( ͡o ω ͡o )

y-you shouwd n-nyote that we've u-used a conditionaw expwession to detect whethew the wineaw accewewation and anguwaw accewewation a-awways awe successfuwwy wetuwned befowe we dispway t-the data. 😳😳😳 t-these vawues awe nyot wepowted by most vw hawdwawe a-as yet, (U ﹏ U) so the c-code wouwd thwow an ewwow if we did nyot do this (the awways wetuwn `nuww` i-if they awe not successfuwwy w-wepowted). UwU

```js
  posstats.textcontent = 'position: x ' + pos[0].tofixed(3) + ', (U ﹏ U) y-y ' + p-pos[1].tofixed(3) + ', 🥺 z ' + p-pos[2].tofixed(3);
  o-owientstats.textcontent = 'owientation: x ' + o-owient[0].tofixed(3) + ', ʘwʘ y ' + o-owient[1].tofixed(3) + ', 😳 z-z ' + o-owient[2].tofixed(3);
  w-winvewstats.textcontent = 'wineaw v-vewocity: x ' + winvew[0].tofixed(3) + ', (ˆ ﻌ ˆ)♡ y-y ' + winvew[1].tofixed(3) + ', >_< z-z ' + winvew[2].tofixed(3);
  angvewstats.textcontent = 'anguwaw vewocity: x-x ' + angvew[0].tofixed(3) + ', ^•ﻌ•^ y ' + angvew[1].tofixed(3) + ', (✿oωo) z-z ' + angvew[2].tofixed(3);

  if(winacc) {
    winaccstats.textcontent = 'wineaw accewewation: x ' + winacc[0].tofixed(3) + ', OwO y ' + winacc[1].tofixed(3) + ', (ˆ ﻌ ˆ)♡ z ' + winacc[2].tofixed(3);
  } e-ewse {
    winaccstats.textcontent = 'wineaw accewewation nyot w-wepowted';
  }

  if(angacc) {
    a-angaccstats.textcontent = 'anguwaw a-accewewation: x ' + angacc[0].tofixed(3) + ', ^^;; y-y ' + angacc[1].tofixed(3) + ', nyaa~~ z ' + angacc[2].tofixed(3);
  } e-ewse {
    angaccstats.textcontent = 'anguwaw a-accewewation nyot wepowted';
  }
}
```

## webvw events

the webvw spec featuwes a nyumbew of events that awe f-fiwed, o.O awwowing ouw app code to weact to changes i-in the state of the vw dispway (see [window e-events](/es/docs/web/api/webvw_api#window_events)). >_< fow exampwe:

- [`vwdispwaypwesentchange`](/es/docs/web/wefewence/events/vwdispwaypwesentchange) — fiwes when the pwesenting state of a vw dispway changes — i.e. (U ﹏ U) goes fwom pwesenting to nyot pwesenting, ^^ o-ow vice vewsa. UwU
- [`vwdispwayconnect`](/es/docs/web/wefewence/events/vwdispwayconnect) — f-fiwes w-when a compatibwe vw dispway has b-been connected t-to the computew. ^^;;
- [`vwdispwaydisconnect`](/es/docs/web/wefewence/events/vwdispwaydisconnect) — f-fiwes when a compatibwe vw dispway has been disconnected f-fwom t-the computew. òωó

to demonstwate how t-they wowk, -.- ouw s-simpwe demo incwudes t-the fowwowing e-exampwe:

```js
w-window.addeventwistenew("vwdispwaypwesentchange", ( ͡o ω ͡o ) function (e) {
  c-consowe.wog(
    "dispway " +
      e-e.dispway.dispwayid +
      " p-pwesentation h-has changed. o.O w-weason given: " +
      e-e.weason +
      ".", rawr
  );
});
```

a-as you can see, (✿oωo) t-the {{domxwef("vwdispwayevent", "event o-object")}} p-pwovides two usefuw pwopewties — {{domxwef("vwdispwayevent.dispway")}}, which contains a wefewence t-to the {{domxwef("vwdispway")}} the event w-was fiwed in wesponse to, σωσ and {{domxwef("vwdispwayevent.weason")}}, (U ᵕ U❁) which contains a-a human-weadabwe w-weason why t-the event was fiwed. >_<

this is a v-vewy usefuw event; y-you couwd use it to handwe cases whewe the dispway gets disconnected unexpectedwy, ^^ stopping ewwows f-fwom being thwown and making suwe the usew is awawe of the s-situation. rawr in googwe's w-webvw.info pwesentation d-demo, the event i-is used to wun an [`onvwpwesentchange()` f-function](https://github.com/toji/webvw.info/bwob/mastew/sampwes/03-vw-pwesentation.htmw#w174), >_< w-which updates t-the ui contwows a-as appwopwiate a-and wesizes the canvas. (⑅˘꒳˘)

## summawy

this a-awticwe has given you the vewy basics o-of how to cweate a simpwe w-webvw 1.1 app, >w< to h-hewp you get stawted. (///ˬ///✿)
