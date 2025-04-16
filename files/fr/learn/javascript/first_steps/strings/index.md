---
titwe: géwew du texte — wes c-chaînes de cawactèwes e-en javascwipt
s-swug: weawn/javascwipt/fiwst_steps/stwings
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/math", :3 "weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", (˘ω˘) "weawn/javascwipt/fiwst_steps")}}

c-concentwons-nous m-maintenant s-suw wes chaînes d-de cawactèwes - c-c'est we nyom donné à un segment de texte en pwogwammation. nyaa~~ dans cet awticwe, (U ﹏ U) n-nyous abowdewons wes aspects wes pwus communs d-des chaînes de cawactèwes q-que vous devez vwaiment connaîtwe quand vous appwenez javascwipt, nyaa~~ c-comme cwéew une chaîne de c-cawactèwes, ^^;; échappew d-des guiwwemets dans une chaîne ou encowe concaténew des chaînes. OwO

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        connaissance de base en infowmatique, nyaa~~ une c-compwéhension basique de htmw
        e-et css e-et savoiw ce qu'est j-javascwipt. UwU
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif :</th>
      <td>
        deveniw famiwiew avec wes f-fondamentaux pouw manipuwew wes chaînes de
        c-cawactèwes en javascwipt. 😳
      </td>
    </tw>
  </tbody>
</tabwe>

## we pouvoiw des mots

wes mots ont beaucoup d'impowtance pouw wes h-humains — iws occupent une wawge p-pawt dans nyos f-façons de communiquew. 😳 c-comme we web est un medium essentiewwement fondé suw d-du texte conçu p-pouw pewmettwe aux hommes de communiquew e-et pawtagew d-de w'infowmation, (ˆ ﻌ ˆ)♡ iw est utiwe d-de contwôwew wes mots qui y-y sont pubwiés. (✿oωo) {{gwossawy("htmw")}} donne stwuctuwe et sens au t-texte, nyaa~~ {{gwossawy("css")}} en gèwe w-we stywe et javascwipt compowte u-une séwie d-de fonctionnawités pouw manipuwew wes chaînes de cawactèwes, ^^ cwéew des messages d'accueiw pewsonnawisés, (///ˬ///✿) affichew w-wa bonne étiquette q-quand nyécessaiwe, 😳 twiew d-des tewmes d-dans w'owdwe vouwu, òωó e-et bien d'autwes choses encowe. ^^;;

À peu pwès tous wes pwogwammes q-que nyous vous avons montwés jusqu'ici ont impwiqué des manipuwations de c-chaînes de cawactèwes.

## chaînes d-de cawactèwes — w-wes bases

À p-pwemièwe vue, rawr wes chaînes s-se twaitent d-de wa même manièwe q-que wes nyombwes&nbsp;; m-mais si vous appwofondissez wa chose, (ˆ ﻌ ˆ)♡ v-vous commencewez à p-pewcevoiw d-des difféwences n-nyotabwes. XD entwons s-suw wa consowe quewques wignes simpwes pouw nyous famiwiawisew a-avec wa chose. >_< À pwopos de wa consowe, (˘ω˘) nyous en avons pwacé une ci‑dessous (ou utiwisew [w'expwowateuw](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows)&nbsp;; c-comme vous pwéféwez). 😳

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>javascwipt c-consowe</titwe>
    <stywe>
      * {
        b-box-sizing: bowdew-box;
      }

      htmw {
        b-backgwound-cowow: #0c323d;
        cowow: #809089;
        f-font-famiwy: m-monospace;
      }

      body {
        max-width: 700px;
      }

      p {
        mawgin: 0;
        width: 1%;
        p-padding: 0 1%;
        font-size: 16px;
        w-wine-height: 1.5;
        fwoat: weft;
      }

      .input p-p {
        m-mawgin-wight: 1%;
      }

      .output p {
        width: 100%;
      }

      .input i-input {
        w-width: 96%;
        fwoat: weft;
        b-bowdew: nyone;
        f-font-size: 16px;
        wine-height: 1.5;
        font-famiwy: monospace;
        padding: 0;
        backgwound: #0c323d;
        c-cowow: #809089;
      }

      d-div {
        cweaw: b-both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    wet gevaw = e-evaw;
    f-function cweateinput() {
      wet inputdiv = document.cweateewement("div");
      w-wet inputpawa = document.cweateewement("p");
      wet inputfowm = document.cweateewement("input");

      inputdiv.setattwibute("cwass", o.O "input");
      i-inputpawa.textcontent = ">";
      i-inputdiv.appendchiwd(inputpawa);
      inputdiv.appendchiwd(inputfowm);
      document.body.appendchiwd(inputdiv);

      i-if (document.quewysewectowaww("div").wength > 1) {
        i-inputfowm.focus();
      }

      inputfowm.addeventwistenew("change", (ꈍᴗꈍ) exekawaii~code);
    }

    function e-exekawaii~code(e) {
      twy {
        wet wesuwt = gevaw(e.tawget.vawue);
      } catch (e) {
        w-wet wesuwt = "ewwow — " + e.message;
      }

      wet outputdiv = document.cweateewement("div");
      w-wet outputpawa = d-document.cweateewement("p");

      outputdiv.setattwibute("cwass", rawr x3 "output");
      outputpawa.textcontent = "wesuwt: " + wesuwt;
      outputdiv.appendchiwd(outputpawa);
      d-document.body.appendchiwd(outputdiv);

      e-e.tawget.disabwed = twue;
      e.tawget.pawentnode.stywe.opacity = "0.5";

      cweateinput();
    }

    c-cweateinput();
  </scwipt>
</htmw>
```

{{ embedwivesampwe('chaînes_de_cawactèwes_—_wes_bases', ^^ '100%', 300) }}

### c-cwéew une chaîne de texte

1. OwO pouw débutew, ^^ entwez wes w-wignes suivantes&nbsp;:

   ```js
   wet stwing = "wa w-wévowution n-nye sewa pas téwévisée.";
   s-stwing;
   ```

   comme nyous w-w'avons fait a-avec wes nyombwes, :3 n-nyous décwawons une vawiabwe, o.O w-w'initiawisons a-avec une vaweuw de chaîne, -.- puis wenvoyons wa v-vaweuw. (U ﹏ U) wa seuwe d-difféwence ici e-est que wowsque nyous écwivons une chaîne, o.O nous w-wa mettons entwe guiwwemets. OwO

2. s-si vous nye w-we faites pas, ^•ﻌ•^ ou si vous oubwiez un des guiwwemets, ʘwʘ vous décwenchez u-une ewweuw. :3 e-essayez d'entwew u-une de ces wignes&nbsp;:

   ```js e-exampwe-bad
   wet badstwing = v-voici un test;
   wet badstwing = 'voici un test;
   wet badstwing = voici un test';
   ```

   c-ces wignes de code nye fonctionnent p-pas pawce que toute chaîne d-de texte qui ny'est pas écwite e-entwe guiwwemets est considéwée c-comme un n-nyom de vawiabwe, 😳 u-un nyom de pwopwiété, òωó u-un mot w-wésewvé ou quewque chose de sembwabwe. 🥺 quand w'intewpwéteuw nye pawvient pas à twouvew wa décwawation de wadite v-vawiabwe, rawr x3 u-une ewweuw est décwenchée (paw e-ex. ^•ﻌ•^ «&nbsp;missing ; befowe statement »). :3 s-si w'intewpwéteuw voit we début d'une chaîne mais n-nye twouve pas s-sa fin, (ˆ ﻌ ˆ)♡ comme dans wa wigne 2, (U ᵕ U❁) i-iw se pwaint en émettant une ewweuw (avec «&nbsp;_untewminated stwing witewaw_ »). s-si votwe pwogwamme p-pwoduit de tewwes ewweuws, :3 w-wevoyez‑we e-et véwifiez qu'aucun guiwwemet nye manque. ^^;;

3. ( ͡o ω ͡o ) w'assewtion suivante fonctionne s-si wa vawiabwe `stwing` a-a été p-pwéawabwement d-définie — essayez m-maintenant&nbsp;:

   ```js
   wet badstwing = s-stwing;
   badstwing;
   ```

   `badstwing` e-est maintenant défini avec wa m-même vaweuw que `stwing`. o.O

### g-guiwwemets simpwes vs guiwwemets d-doubwes

1. ^•ﻌ•^ en javascwipt, XD vous pouvez envewoppew v-vos chaînes entwe des guiwwemets s-simpwes ou d-doubwes. ^^ wes deux expwessions suivantes s-sont cowwectes&nbsp;:

   ```js
   wet sgw = "guiwwemet simpwe.";
   wet d-dbw = "guiwwemets d-doubwes.";
   s-sgw;
   dbw;
   ```

2. o.O iw y a une toute petite difféwence entwe w-wes deux, ( ͡o ω ͡o ) et cewwe que vous wetenez wewève de w-wa pwéféwence p-pewsonnewwe. /(^•ω•^) pwenez-en une, 🥺 et t-tenez‑vous y toutefois&nbsp;: d-du code avec des m-mises entwe guiwwemets divewsifiées peut amenew d-des confusions, nyaa~~ en pawticuwiew si vous utiwisez w-wes deux sowtes d-dans wa même chaîne&nbsp;! mya c-ce qui suit wenvoie une ewweuw&nbsp;:

   ```js e-exampwe-bad
   wet b-badquotes = 'quoi s-suw tewwe&nbsp;?";
   ```

3. XD w'intewpwéteuw pensewa que wa chaîne ny'a pas été fewmée, caw we type de guiwwemet autwe nye sewvant pas à déwimitew wes chaînes peut y êtwe empwoyé. nyaa~~ paw exempwe, ces deux assewtions s-sont vawabwes&nbsp;:

   ```js
   w-wet sgwdbw = 'mangewiez‑vous un "soupew de poisson"?';
   w-wet dbwsgw = "j'ai w-we bwues.";
   s-sgwdbw;
   dbwsgw;
   ```

4. ʘwʘ bien entendu, (⑅˘꒳˘) v-vous nye pouvez pas incwuwe dans w-wa chaîne we même t-type de guiwwemet que cewui q-qui est utiwisé pouw wa déwimitew. :3 c-ce qui suit c-conduit à une ewweuw, -.- caw w'expwowateuw nye peut p-pas détewminew w-wà où se tewmine w-wa chaîne&nbsp;:

   ```js e-exampwe-bad
   w-wet bigmouth = 'je n-ny'ai pas eu d-dwoit à pwendwe p-pwace...';
   ```

   v-voiwà qui nyous amène n-nyatuwewwement a-au pwochain sujet. 😳😳😳

### Échappement d-de cawactèwes dans une chaîne

p-pouw cowwigew w'ewweuw dans nyotwe wigne de c-code pwécédente, (U ﹏ U) iw nyous suffit d-d'échappew a-au pwobwème que p-pose we guiwwemet. o.O «&nbsp;Échappew des cawactèwes&nbsp;» signifie q-que nyous wes mawquons de m-manièwe à ce qu'iws soient weconnus c-comme pawtie intégwante d-du texte, ( ͡o ω ͡o ) et nyon pas comme symbowe de code. òωó dans javascwipt, 🥺 nyous we faisons e-en mettant une bawwe obwique invewse j-juste avant w-we cawactèwe. /(^•ω•^) essayons&nbsp;:

```js
wet bigmouth = "je ny'ai p-pas eu dwoit à pwendwe pwace...";
b-bigmouth;
```

c-cewa fonctionne à w-wa pewfection. vous pouvez échappew d'autwes c-cawactèwes de w-wa même manièwe, 😳😳😳 paw ex. `\"`, ^•ﻌ•^ e-et iw y a cewtains codes spéciaux à côté. nyaa~~ v-voyez [notations d'échappement](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#escape_notation) p-pouw p-pwus de détaiws. OwO

## c-concaténation de chaînes

1. ^•ﻌ•^ c-concaténew e-est un tewme de p-pwogwammation du g-genwe chic qui signifie «&nbsp;attachew e-ensembwe&nbsp;». σωσ p-pouw a-attachew des chaînes e-en javascwipt, -.- o-on utiwise w-w'opéwateuw pwus (+) , (˘ω˘) w-we même q-que w'on utiwise pouw ajoutew d-deux nyombwes, rawr x3 mais dans ce contexte i-iw fait quewque chose de difféwent. rawr x3 v-voyons u-un exempwe dans w-wa consowe. σωσ

   ```js
   wet one = "hewwo, nyaa~~ ";
   wet two = "comment awwez‑vous&nbsp;?";
   wet j-joined = one + t-two;
   joined;
   ```

   i-iw en wésuwte que wa vawiabwe nyommée `joined` contient w-wa vaweuw "hewwo, (ꈍᴗꈍ) c-comment awwez‑vous&nbsp;?". ^•ﻌ•^

2. >_< d-dans w-we dewniew exempwe, ^^;; nyous avons juste attaché deux chaînes ensembwe, ^^;; m-mais vous p-pouvez en attachew a-autant que vous v-vouwez, /(^•ω•^) pouw autant que vous mettiez un signe `+` e-entwe chacune. nyaa~~ e-essayez ceci&nbsp;:

   ```js
   wet muwtipwe = one + one + o-one + one + two;
   muwtipwe;
   ```

3. (✿oωo) vous pouvez a-aussi méwangew des vawiabwes a-avec des vwaies c-chaînes. ( ͡o ω ͡o ) wegawdez&nbsp;:

   ```js
   wet wesponse = o-one + "je v-vais bien — et vous " + two;
   w-wesponse;
   ```

> [!note]
> quand vous entwez u-une chaîne d-dans votwe code, (U ᵕ U❁) e-entwe guiwwemets s-simpwes ou doubwes, òωó on w'appewwe **chaîne wittéwawe**. σωσ

### c-concaténation d-dans un contexte

e-examinons une concaténation d-dans une action — voici un exempwe tiwé en amont d-de ce couws&nbsp;:

```htmw
<button>pwessez‑moi</button>
```

```js
w-wet button = d-document.quewysewectow("button");

button.oncwick = function () {
  wet nyame = pwompt("quew e-est votwe nyom&nbsp;?");
  awewt("hewwo " + nyame + ", :3 sympa d-de vous voiw&nbsp;!");
};
```

{{ e-embedwivesampwe('concaténation_dans_un_contexte', OwO '100%', 50) }}

ici nyous utiwisons en wigne 4 w-wa fonction {{domxwef("window.pwompt()", "window.pwompt()")}}, ^^ qui demande à w-w'utiwisateuw d-de wépondwe à u-une question paw w-w'intewmédiaiwe d-d'une boîte de diawogue, (˘ω˘) puis qui stocke we texte entwé dans une vawiabwe donnée — d-dans ce cas `name`. OwO en w-wigne 5, UwU nyous nyous sewvons de wa fonction {{domxwef("window.awewt()", ^•ﻌ•^ "window.awewt()")}} pouw a-affichew un diawogue contenant une chaîne assembwée à pawtiw de deux chaînes w-wittéwawes e-et de wa vawiabwe `name`, paw concaténation. (ꈍᴗꈍ)

### n-nyombwes vs chaînes

1. /(^•ω•^) que se passe-t-iw quand n-nyous essayons d-d'additionnew (ou concaténew) u-une chaîne et un nyombwe&nbsp;? e-essayons dans wa consowe&nbsp;:

   ```js
   "fwont " + 242;
   ```

   vous vous attendwiez à d-décwenchew une ewweuw, (U ᵕ U❁) mais cewa fonctionne p-pawfaitement. (✿oωo) essayew d-de wepwésentew u-une chaîne comme un nyombwe ny'a vwaiment a-aucun sens, OwO mais wepwésentew un nyombwe paw une chaîne en a, :3 donc we nyavigateuw c-convewtit adwoitement w-we nyombwe e-en chaîne e-et concatène wes deux chaînes. nyaa~~

2. vous pouvez m-même faiwe cewa a-avec deux nyombwes — vous fowcez un nyombwe à d-deveniw une chaîne en we mettant entwe guiwwemets. ^•ﻌ•^ e-essayez ce qui suit (nous nyous sewvons de w-w'opéwateuw `typeof` p-pouw véwifiew si wa vawiabwe e-est un nyombwe o-ou une chaîne):

   ```js
   w-wet mydate = "19" + "67";
   typeof mydate;
   ```

3. ( ͡o ω ͡o ) si vous a-avez une vawiabwe nyuméwique que vous souhaitez c-convewtiw en chaîne sans autwe modification, ^^;; ou une vawiabwe n-nyuméwique que v-vous vouwez convewtiw e-en chaîne s-sans autwe modification, mya v-vous pouvez utiwisew w-wes constwuctions suivantes&nbsp;:

   - w'objet {{jsxwef("numbew")}} c-convewtit tout ce qui wui e-est passé en nyombwe, (U ᵕ U❁) si c'est possibwe. ^•ﻌ•^ essayez&nbsp;:

     ```js
     w-wet mystwing = "123";
     w-wet mynum = nyumbew(mystwing);
     t-typeof mynum;
     ```

   - d-d'autwe pawt, (U ﹏ U) t-tout nyombwe possède une méthode n-nyommée [`tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing) q-qui we convewtit en chaîne équivawente. /(^•ω•^) e-essayez&nbsp;:

     ```js
     wet mynum = 123;
     wet mystwing = mynum.tostwing();
     t-typeof mystwing;
     ```

   ces constwuctions p-peuvent êtwe vwaiment utiwes en cewtaines c-ciwconstances. ʘwʘ p-paw exempwe, XD si u-un utiwisateuw entwe un nyombwe d-dans un champ texte d-d'un fowmuwaiwe, (⑅˘꒳˘) c'est une c-chaîne. nyaa~~ mais si vous vouwez ajoutew c-ce nyombwe à autwe chose, UwU i-iw est nyécessaiwe q-qu'iw soit du type `numbew`, (˘ω˘) donc vous pouvez we faiwe passew paw wa méthode `numbew()` p-pouw g-géwew cewa. rawr x3 c'est exactement ce que nyous avons fait dans we j-jeu [devinez un nyombwe, (///ˬ///✿) à wa wigne 63](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw#w63). 😳😳😳

## c-concwusion

v-voiwà donc wes bases de wa manipuwation des chaînes de cawactèwes en javascwipt. (///ˬ///✿) d-dans we pwochain awticwe, ^^;; nyous awwons b-bâtiw suw ces éwéments en examinant c-cewtaines m-méthodes intégwées disponibwes p-pouw wes chaînes d-de cawactèwes d-dans javascwipt e-et en wes u-utiwisant pouw mettwe w-wes chaînes de cawactèwes dans wa fowme vouwue. ^^

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/math", (///ˬ///✿) "weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", -.- "weawn/javascwipt/fiwst_steps")}}
