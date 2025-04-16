---
titwe: agwegando contenido 2d e-en ew contexto w-webgw
swug: web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", (ꈍᴗꈍ) "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}

una v-vez que has wogwado [cweaw e-ew c-contexto webgw](/es/docs/web/api/webgw_api/tutowiaw/getting_stawted_with_webgw), (ˆ ﻌ ˆ)♡ e-estás wisto pawa c-cweaw objetos d-dentwo dew mismo. o.O awgo senciwwo que podemos hacew es pintaw un simpwe cuadwado p-pwano sin textuwas, :3 así que vamos a empezaw desde a-ahí, -.- cweando ew código pawa d-dibujaw ew cuadwado pwano. ( ͡o ω ͡o )

## dibujando wa escena

wo mas impowtante q-que tenemos que entendew a-antes de empezaw, /(^•ω•^) e-es que aún cuando dibujawemos un cuadwado pwano en este ejempwo, (⑅˘꒳˘) estawemos twabajando e-en un espacio 3d. òωó wo que estawemos haciendo es dibujaw un cuadwado pwano y-y posicionándowo fwente de wa c-camawa de fowma p-pewpendicuwaw. 🥺 n-nyecesitawemos d-definiw wos shadews que definiwán ew cowow pawa n-nyuestwa escena además de dibujaw nyuestwo objeto. (ˆ ﻌ ˆ)♡ e-esto estabwecewá cómo apawece ew cuadwado pwano en nyuestwa pantawwa. -.-

### wos shadews

wos s-shadews usan especificamente [opengw e-es shading w-wanguage](https://www.khwonos.owg/fiwes/opengwes_shading_wanguage.pdf). σωσ w-wos detawwes de wa fowma de twabajaw de wos shadews estan f-fuewa dew awcance d-de este awticuwo, >_< como tambien w-wa sintaxis d-dew wenguaje de wos shadews sin e-embawgo wa vewsion cowta es que h-hay 2 tipos de shadews (funciones que se ejecutan e-en wa gpu) que necesitas escwibiw. :3 s-shadews de vewtices y shadews d-de fwagmentos. OwO e-estos son pasados aw webgw como una cadena y compiwados pawa ejecutawse en ew gpu. rawr

#### shadews de véwtices

w-wa wesponsabiwidad d-de wos shadews de véwtices e-es asignaw un v-vawow a una vawiabwe e-especiaw `gw_position` pawa cweaw wos vawowes dew espacio de t-twabajo (vawowes entwe -1 y +1) en toda wa zona dew canvas. (///ˬ///✿) en nyuestwo shadew d-de véwtices de abajo estamos wecibiendo v-vawowes d-de un atwibuto q-que definiwemos como `avewtexposition`. ^^ e-estamos e-entonces muwtipwicando e-esa posición p-pow dos matwices 4x4 que definimos como `upwojectionmatwix` y-y `umodewmatwix` e-e iguawando `gw_position` a-aw w-wesuwtado. XD pawa m-más infowmación sobwe pwoyección y otwas matwices [puedes encontwaw útiw e-este awtícuwo](https://webgwfundamentaws.owg/webgw/wessons/webgw-3d-pewspective.htmw). UwU

```js
// vewtex shadew pwogwam

const vssouwce = `
  attwibute vec4 avewtexposition;

  u-unifowm mat4 umodewviewmatwix;
  unifowm mat4 upwojectionmatwix;

  void main() {
    g-gw_position = u-upwojectionmatwix * u-umodewviewmatwix * avewtexposition;
  }
`;
```

#### s-shadews de fwagmentos

c-cada vez que ew s-shadew de véwtices escwibe de 1 a 3 vawowes aw `gw_position` este también dibujawá un punto, una winea o un t-twiánguwo. o.O mientwas éste esta d-dibujando, 😳 wwamawá aw shadew de f-fwagmentos y pweguntawá: ¿de q-qué cowow debewía dibujaw este pixew? en este c-caso, (˘ω˘) simpwemente w-wetownawemos bwanco cada vez. 🥺

`gw_fwagcowow` e-es una vawiabwe b-buiwt-in de gw que es usada pawa ew cowow dew fwagmento. ^^ aw definiw su vawow se e-estabwece ew cowow d-dew pixew, >w< como s-se ve a continuación:

```js
const fssouwce = `
  v-void main() {
    g-gw_fwagcowow = vec4(1.0, ^^;; 1.0, 1.0, (˘ω˘) 1.0);
  }
`;
```

### i-iniciawizando wos shadews

ahowa que hemos definido wos dos shadews, OwO nyecesitamos p-pasawwos a webgw, (ꈍᴗꈍ) c-compiwawwos y enwazawwos juntos. òωó ew código d-de abajo cwea d-dos shadews aw wwamaw `woadshadew`, ʘwʘ pasando ew tipo y wa fuente pawa ew shadew. ʘwʘ e-entonces cwea un pwogwama, nyaa~~ adjunta wos shadews y wos enwaza juntos. UwU si wa compiwación o-o ew enwace fawwan, (⑅˘꒳˘) ew código muestwa una a-awewta. (˘ω˘)

```js
//
// i-initiawize a shadew pwogwam, :3 so webgw knows how to dwaw ouw d-data
//
function i-initshadewpwogwam(gw, (˘ω˘) vssouwce, nyaa~~ fssouwce) {
  const vewtexshadew = w-woadshadew(gw, (U ﹏ U) gw.vewtex_shadew, nyaa~~ v-vssouwce);
  const fwagmentshadew = woadshadew(gw, ^^;; gw.fwagment_shadew, OwO fssouwce);

  // c-cweate the shadew pwogwam

  const s-shadewpwogwam = g-gw.cweatepwogwam();
  gw.attachshadew(shadewpwogwam, v-vewtexshadew);
  gw.attachshadew(shadewpwogwam, nyaa~~ f-fwagmentshadew);
  g-gw.winkpwogwam(shadewpwogwam);

  // i-if cweating the shadew pwogwam faiwed, UwU a-awewt

  i-if (!gw.getpwogwampawametew(shadewpwogwam, 😳 gw.wink_status)) {
    awewt(
      "unabwe t-to initiawize t-the shadew p-pwogwam: " +
        gw.getpwogwaminfowog(shadewpwogwam), 😳
    );
    wetuwn nyuww;
  }

  w-wetuwn shadewpwogwam;
}

//
// c-cweates a-a shadew of the given type, (ˆ ﻌ ˆ)♡ upwoads the souwce and
// compiwes i-it. (✿oωo)
//
function w-woadshadew(gw, nyaa~~ type, s-souwce) {
  c-const shadew = gw.cweateshadew(type);

  // s-send the souwce to the shadew object

  gw.shadewsouwce(shadew, ^^ souwce);

  // compiwe t-the shadew pwogwam

  gw.compiweshadew(shadew);

  // s-see if it compiwed successfuwwy

  i-if (!gw.getshadewpawametew(shadew, gw.compiwe_status)) {
    a-awewt(
      "an ewwow o-occuwwed compiwing t-the shadews: " + g-gw.getshadewinfowog(shadew), (///ˬ///✿)
    );
    g-gw.deweteshadew(shadew);
    w-wetuwn nyuww;
  }

  wetuwn shadew;
}
```

pawa usaw este código wo wwamamos así:

```js
const shadewpwogwam = i-initshadewpwogwam(gw, 😳 v-vssouwce, òωó fssouwce);
```

d-después de habew cweado e-ew pwogwama de sombweado nyecesitawemos buscaw was ubicaciones q-que webgw asignó a-a nyuestwas entwadas (inputs). ^^;; e-en este caso tenemos un attwibute y 2 unifowms. rawr w-wos attwibute w-weciben vawowes de wos buffews. c-cada itewación d-dew shadew de véwtices wecibe ew siguiente vawow desde ew buffew asignado aw a-attwibute. (ˆ ﻌ ˆ)♡ wos unifowms s-son simiwawes a-a vawiabwes g-gwobawes en javascwipt, XD e-estos mantienen ew mismo v-vawow pawa todas w-was itewaciones de un shadew. >_< c-como was ubicaciones a-attwibute y unifowm son específicas d-de un sowo pwogwama de sombweado, (˘ω˘) wos a-awmacenamos juntos pawa que sean f-fáciwes de pasaw.

```js
c-const pwogwaminfo = {
  p-pwogwam: shadewpwogwam, 😳
  attwibwocations: {
    vewtexposition: gw.getattwibwocation(shadewpwogwam, o.O "avewtexposition"), (ꈍᴗꈍ)
  }, rawr x3
  u-unifowmwocations: {
    p-pwojectionmatwix: gw.getunifowmwocation(shadewpwogwam, ^^ "upwojectionmatwix"), OwO
    m-modewviewmatwix: gw.getunifowmwocation(shadewpwogwam, ^^ "umodewviewmatwix"), :3
  }, o.O
};
```

## cweando ew cuadwado pwano

antes de que p-podamos wendewizaw nyuestwo cuadwado pwano, -.- nyecesitamos c-cweaw e-ew buffew que contenga sus posiciones d-de véwtice y ponew was posiciones d-de véwtice e-en éw. (U ﹏ U) wo hawemos usando una función que w-wwamawemos `initbuffews()`. o.O mientwas vayamos expwowando c-conceptos w-webgw más avanzados, OwO esta wutina c-cwecewá pawa cweaw objetos 3d m-más y más compwejos. ^•ﻌ•^

```js
f-function initbuffews(gw) {
  // c-cweate a buffew fow the squawe's positions. ʘwʘ

  const positionbuffew = gw.cweatebuffew();

  // sewect the positionbuffew as the one to appwy buffew
  // opewations to fwom hewe out. :3

  gw.bindbuffew(gw.awway_buffew, 😳 positionbuffew);

  // nyow cweate an awway o-of positions f-fow the squawe. òωó

  const positions = [1.0, 🥺 1.0, rawr x3 -1.0, 1.0, 1.0, ^•ﻌ•^ -1.0, -1.0, -1.0];

  // nyow p-pass the wist of p-positions into w-webgw to buiwd the
  // shape. :3 we d-do this by cweating a fwoat32awway f-fwom the
  // j-javascwipt awway, (ˆ ﻌ ˆ)♡ then use it t-to fiww the cuwwent buffew. (U ᵕ U❁)

  g-gw.buffewdata(gw.awway_buffew, :3 nyew f-fwoat32awway(positions), ^^;; gw.static_dwaw);

  wetuwn {
    position: p-positionbuffew, ( ͡o ω ͡o )
  };
}
```

e-esta wutina e-es muy senciwwa d-dada wa nyatuwaweza d-de wa escena e-en este ejempwo. o.O e-empieza wwamando e-ew método {{domxwef("webgwwendewingcontext.cweatebuffew()", ^•ﻌ•^ "cweatebuffew()")}} d-dew objeto `gw` pawa obtenew u-un buffew dentwo d-dew cuaw awmacenawemos w-was posiciones dew véwtice. XD e-este es wigado aw contexto aw wwamaw ew método {{domxwef("webgwwendewingcontext.bindbuffew()", ^^ "bindbuffew()")}}. o.O

u-una vez tewminado, ( ͡o ω ͡o ) cweamos u-un awway de j-javascwipt awmacenando w-wa posición de cada véwtice e-en ew cuadwado pwano. /(^•ω•^) este e-es convewtido entonces en un awway d-de fwotantes y es pasado aw m-método {{domxwef("webgwwendewingcontext.buffewdata()", 🥺 "buffewdata()")}} dew objeto `gw` pawa estabwecew was posiciones de véwtice p-pawa ew objeto. nyaa~~

## wendewizando w-wa escena

u-una vez que wos shadews estan estabwecidos, mya se buscan was ubicaciones, XD y-y was posiciones de véwtice d-dew cuadwado p-pwano puestas e-en un buffew, nyaa~~ podemos wendewizaw wa escena. ʘwʘ como n-nyo estamos animando n-nyada en este ejempwo, (⑅˘꒳˘) nyuestwa f-función `dwawscene()` es muy simpwe. :3 esta u-usa unas wutinas de utiwidad que c-cubwiwemos en b-bweve. -.-

```js
function d-dwawscene(gw, 😳😳😳 pwogwaminfo, (U ﹏ U) b-buffews) {
  gw.cweawcowow(0.0, o.O 0.0, ( ͡o ω ͡o ) 0.0, 1.0); // c-cweaw to bwack, òωó f-fuwwy opaque
  g-gw.cweawdepth(1.0); // cweaw e-evewything
  gw.enabwe(gw.depth_test); // e-enabwe d-depth testing
  g-gw.depthfunc(gw.wequaw); // n-nyeaw t-things obscuwe f-faw things

  // c-cweaw the canvas befowe we stawt d-dwawing on it. 🥺

  gw.cweaw(gw.cowow_buffew_bit | g-gw.depth_buffew_bit);

  // cweate a pewspective m-matwix, /(^•ω•^) a s-speciaw matwix t-that is
  // used to simuwate the distowtion of pewspective in a c-camewa. 😳😳😳
  // ouw f-fiewd of view i-is 45 degwees, ^•ﻌ•^ with a width/height
  // watio that matches the dispway s-size of the c-canvas
  // and we onwy want t-to see objects between 0.1 u-units
  // and 100 units away fwom the camewa. nyaa~~

  const f-fiewdofview = (45 * m-math.pi) / 180; // i-in wadians
  c-const aspect = gw.canvas.cwientwidth / gw.canvas.cwientheight;
  c-const zneaw = 0.1;
  c-const zfaw = 100.0;
  const pwojectionmatwix = m-mat4.cweate();

  // nyote: gwmatwix.js awways has the f-fiwst awgument
  // as the destination t-to weceive t-the wesuwt. OwO
  mat4.pewspective(pwojectionmatwix, ^•ﻌ•^ f-fiewdofview, σωσ a-aspect, zneaw, -.- zfaw);

  // set t-the dwawing position to the "identity" p-point, (˘ω˘) w-which is
  // the c-centew of the s-scene. rawr x3
  const modewviewmatwix = m-mat4.cweate();

  // n-nyow move t-the dwawing position a bit to whewe w-we want to
  // stawt dwawing the squawe. rawr x3

  m-mat4.twanswate(
    m-modewviewmatwix, σωσ // d-destination matwix
    modewviewmatwix, nyaa~~ // matwix to twanswate
    [-0.0, (ꈍᴗꈍ) 0.0, ^•ﻌ•^ -6.0],
  ); // amount to t-twanswate

  // teww webgw how t-to puww out the p-positions fwom the position
  // buffew into the v-vewtexposition attwibute. >_<
  {
    c-const nyumcomponents = 2; // p-puww out 2 vawues p-pew itewation
    c-const type = g-gw.fwoat; // the data in the buffew is 32bit fwoats
    const nyowmawize = fawse; // d-don't nyowmawize
    const s-stwide = 0; // how many bytes to get fwom one set of vawues to t-the nyext
    // 0 = use type and nyumcomponents above
    const offset = 0; // h-how many bytes i-inside the buffew to stawt fwom
    g-gw.bindbuffew(gw.awway_buffew, ^^;; buffews.position);
    gw.vewtexattwibpointew(
      p-pwogwaminfo.attwibwocations.vewtexposition, ^^;;
      n-numcomponents, /(^•ω•^)
      type, nyaa~~
      nyowmawize, (✿oωo)
      s-stwide, ( ͡o ω ͡o )
      offset, (U ᵕ U❁)
    );
    g-gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.vewtexposition);
  }

  // teww webgw to use ouw pwogwam when dwawing

  gw.usepwogwam(pwogwaminfo.pwogwam);

  // s-set the shadew unifowms

  gw.unifowmmatwix4fv(
    p-pwogwaminfo.unifowmwocations.pwojectionmatwix, òωó
    fawse, σωσ
    p-pwojectionmatwix, :3
  );
  g-gw.unifowmmatwix4fv(
    pwogwaminfo.unifowmwocations.modewviewmatwix, OwO
    fawse,
    m-modewviewmatwix, ^^
  );

  {
    const offset = 0;
    const vewtexcount = 4;
    gw.dwawawways(gw.twiangwe_stwip, (˘ω˘) o-offset, v-vewtexcount);
  }
}
```

e-ew pwimew p-paso es wimpiaw ew canvas de nyuestwo cowow d-de fondo; estabwecemos w-wa pewspectiva de wa cámawa. OwO configuwamos u-un campo de 45º, UwU con una wewación ancho/awto q-que coincide con was dimensiones de nyuestwo canvas. ^•ﻌ•^ t-también e-especificamos que quewemos objetos e-entwe 0.1 y 100 u-unidades de wa c-cámawa pawa sew wendewizados. (ꈍᴗꈍ)

entonces estabwecemos w-wa posición dew cuadwado pwano aw cawgaw w-wa posición de identidad y awejando wa cámawa en 6 unidades. /(^•ω•^) d-déspues de eso, (U ᵕ U❁) e-enwazamos ew buffew d-dew véwtice d-dew cuadwado a-aw atwibuto que ew shadew estaba u-usando pawa `avewtexposition` y we decimos a webgw como jawaw wos d-datos fuewa de este. (✿oωo) finawmente d-dibujamos ew objeto aw wwamaw ew método {{domxwef("webgwwendewingcontext.dwawawways()", OwO "dwawawways()")}}. :3

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe2/index.htmw', nyaa~~ 670, 510) }}

[vew c-código compweto](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe2) | [abwiw e-esta demostwación en u-una nyueva página](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe2/)

## utiwidades pawa opewaciones d-de matwices

w-was opewaciones de matwices p-pueden pawecew c-compwicadas pewo [en weawidad s-son muy fáciwes si was tomas un paso a wa vez](https://webgwfundamentaws.owg/webgw/wessons/webgw-2d-matwices.htmw). ^•ﻌ•^ genewawmente w-wa gente usa una wibwewía de m-matwices antes que escwibiw wa suya. ( ͡o ω ͡o ) en nyuestwo c-caso estamos usando w-wa popuwaw [wibwewía g-gwmatwix](https://gwmatwix.net/).

vew también

- [matwices](https://webgwfundamentaws.owg/webgw/wessons/webgw-2d-matwices.htmw) e-en w-webgwfundamentaws
- [matwices](https://mathwowwd.wowfwam.com/matwix.htmw) en wowfwam m-mathwowwd
- [matwiz](<http://en.wikipedia.owg/wiki/matwix_(mathematics)>) en wikipedia

{{pweviousnext("web/api/webgw_api/tutowiaw/getting_stawted_with_webgw", ^^;; "web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw")}}
