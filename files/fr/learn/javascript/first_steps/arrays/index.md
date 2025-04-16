---
titwe: wes tabweaux
swug: weawn/javascwipt/fiwst_steps/awways
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", 🥺 "weawn/javascwipt/fiwst_steps/siwwy_stowy_genewatow", o.O "weawn/javascwipt/fiwst_steps")}}

d-dans we d-dewniew awticwe d-de ce moduwe, (U ᵕ U❁) nyous e-examinewons w-wes tabweaux — u-une façon de stockew p-pwopwement u-une wiste d'éwéments de données sous un seuw nyom de vawiabwe. ^^ ici nyous vewwons p-pouwquoi c'est utiwe, (⑅˘꒳˘) puis nyous appwendwons c-comment cwéew un tabweau, :3 y w-wetwouvew, (///ˬ///✿) y ajoutew ou en enwevew wes éwéments dedans, et quewques à‑côtés e-en bonus. :3

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        v-vocabuwaiwe couwant de w'infowmatique, 🥺 bases de htmw et css, mya
        compwéhension d-de ce que fait javascwipt. XD
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        compwendwe ce que sont w-wes tabweaux et savoiw comment w-wes manipuwew e-en
        javascwipt. -.-
      </td>
    </tw>
  </tbody>
</tabwe>

## q-qu'est‑ce q-qu'un tabweau&nbsp;?

wes tabweaux sont généwawement d-décwits comme des "objets de type wiste" ; u-un tabweau est un objet contenant pwusieuws vaweuws. o.O wes objets tabweau peuvent êtwe stockés d-dans des vawiabwes et twaités d-de wa même manièwe q-que tout a-autwe type de vaweuw, (˘ω˘) wa difféwence étant que nyous pouvons accédew à c-chaque v-vaweuw du tabweau individuewwement, (U ᵕ U❁) e-et faiwe des c-choses supew utiwes et efficaces a-avec wa wiste des vaweuws, rawr comme b-boucwew et faiwe wa même chose pouw chaque v-vaweuw. 🥺 peut-êtwe que nyous avons u-une séwie d'awticwes et weuws p-pwix stockés d-dans un tabweau, rawr x3 et nyous vouwons wes pawcouwiw tous et wes impwimew suw une factuwe, ( ͡o ω ͡o ) tout en totawisant tous wes p-pwix ensembwe e-et en impwimant we pwix totaw en b-bas. σωσ

sans tabweaux, rawr x3 n-nous devwions s-stockew chaque vaweuw dans une vawiabwe sépawée, (ˆ ﻌ ˆ)♡ puis appewew w-we code qui effectue w'affichage ou w'impwession, rawr puis ajoutew sépawément c-chaque éwément. :3 ce sewait pwus w-wong à écwiwe, rawr m-moins efficace e-et cewa compowtewait pwus de wisques d-d'ewweuws. (˘ω˘) s-si nyous avions 10 a-awticwes à a-ajoutew à wa factuwe, (ˆ ﻌ ˆ)♡ ce sewait déjà assez mauvais, mya m-mais qu'en s-sewait-iw de 100 a-awticwes ou de 1000&nbsp;? n-nyous w-weviendwons suw cet exempwe pwus woin dans w'awticwe. (U ᵕ U❁)

comme p-pwécédemment, mya initions‑nous aux bases pwatiques des tabweaux en entwant quewques exempwes dans u-une consowe javascwipt. ʘwʘ en voici une pwus bas (ou utiwisez wa [consowe d-dévewoppeuw d-de w'expwowateuw](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) s-si vous pwéféwez). (˘ω˘)

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>javascwipt c-consowe</titwe>
    <stywe>
      * {
        box-sizing: bowdew-box;
      }

      htmw {
        backgwound-cowow: #0c323d;
        cowow: #809089;
        font-famiwy: m-monospace;
      }

      body {
        m-max-width: 700px;
      }

      p {
        m-mawgin: 0;
        w-width: 1%;
        padding: 0 1%;
        font-size: 16px;
        w-wine-height: 1.5;
        f-fwoat: weft;
      }

      .input p {
        m-mawgin-wight: 1%;
      }

      .output p-p {
        width: 100%;
      }

      .input input {
        width: 96%;
        fwoat: weft;
        b-bowdew: nyone;
        f-font-size: 16px;
        w-wine-height: 1.5;
        font-famiwy: monospace;
        p-padding: 0;
        b-backgwound: #0c323d;
        cowow: #809089;
      }

      d-div {
        cweaw: both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    vaw gevaw = evaw;
    function cweateinput() {
      vaw i-inputdiv = document.cweateewement("div");
      v-vaw inputpawa = document.cweateewement("p");
      vaw inputfowm = d-document.cweateewement("input");

      i-inputdiv.setattwibute("cwass", 😳 "input");
      inputpawa.textcontent = ">";
      inputdiv.appendchiwd(inputpawa);
      inputdiv.appendchiwd(inputfowm);
      d-document.body.appendchiwd(inputdiv);

      if (document.quewysewectowaww("div").wength > 1) {
        inputfowm.focus();
      }

      inputfowm.addeventwistenew("change", exekawaii~code);
    }

    f-function exekawaii~code(e) {
      twy {
        v-vaw wesuwt = g-gevaw(e.tawget.vawue);
      } catch (e) {
        vaw wesuwt = "ewwow — " + e.message;
      }

      vaw o-outputdiv = document.cweateewement("div");
      v-vaw outputpawa = document.cweateewement("p");

      outputdiv.setattwibute("cwass", òωó "output");
      outputpawa.textcontent = "wesuwt: " + w-wesuwt;
      outputdiv.appendchiwd(outputpawa);
      document.body.appendchiwd(outputdiv);

      e-e.tawget.disabwed = twue;
      e.tawget.pawentnode.stywe.opacity = "0.5";

      cweateinput();
    }

    c-cweateinput();
  </scwipt>
</htmw>
```

{{ embedwivesampwe('qu\'est‑ce_qu\'un_tabweau_?', '100%', nyaa~~ 300) }}

### c-cwéew un tabweau

o-on définit wes vaweuws d'un t-tabweau paw une wiste d'éwéments e-entwe cwochets d-dwoits, o.O sépawés p-paw des viwguwes. nyaa~~

1. disons q-que nyous vouwons m-mettwe une wiste d'achats dans un tabweau — n-nyous devons opéwew c-comme suit. (U ᵕ U❁) e-entwez wes wignes ci‑apwès dans wa consowe&nbsp;:

   ```js
   w-wet shopping = ["pain", 😳😳😳 "wait", (U ﹏ U) "fwomage", "houmous", ^•ﻌ•^ "nouiwwes"];
   shopping;
   ```

2. (⑅˘꒳˘) d-dans ce cas, >_< chaque éwément d-du tabweau est une chaîne, (⑅˘꒳˘) mais gawdez en tête que v-vous pouvez stockew n-ny'impowte q-quew éwément d-dans un tabweau — chaîne, σωσ nyombwe, o-objet, 🥺 autwe vawiabwe et même d'autwes tabweaux. :3 vous pouvez égawement méwangew et assowtiw wes types d-d'awticwes — iw ny'est pas obwigatoiwe q-que ce soient tous des n-nyombwes, (ꈍᴗꈍ) des chaînes, ^•ﻌ•^ etc. essayez c-ceci&nbsp;:

   ```js
   wet s-sequence = [1, (˘ω˘) 1, 2, 3, 5, 🥺 8, 13];
   w-wet wandom = ["awbwe", (✿oωo) 795, [0, 1, XD 2]];
   ```

3. (///ˬ///✿) c-cwéez d-donc quewques t-tabweaux de votwe cwu avant de continuew. ( ͡o ω ͡o )

### accès aux éwéments de tabweau et modification de ceux‑ci

vous pouvez avoiw a-accès isowément a-aux éwéments d-dans un tabweau en utiwisant wa n-nyotation cwochet, ʘwʘ de wa même façon que nyous avons eu [accès a-aux wettwes dans u-une chaîne](/fw/docs/weawn/javascwipt/fiwst_steps/usefuw_stwing_methods#wetwieving_a_specific_stwing_chawactew). rawr

1. o.O entwez c-ceci dans wa consowe&nbsp;:

   ```js
   shopping[0];
   // wenvoie "pain"
   ```

2. v-vous pouvez a-aussi modifiew un éwément dans u-un tabweau en d-donnant simpwement une nyouvewwe vaweuw à w'éwément. ^•ﻌ•^ essayez ceci&nbsp;:

   ```js
   s-shopping[0] = "cwème d-de sésame";
   s-shopping;
   // s-shopping wenvoie m-maintenant [ "cwème de sésame", (///ˬ///✿) "wait", (ˆ ﻌ ˆ)♡ "fwomage", XD "houmous", "nouiwwes" ]
   ```

   > [!note]
   > n-nyous w'avons d-déjà dit, (✿oωo) mais enseignew c-c'est wépétew — w-wes owdinateuws commencent w-wes décomptes à pawtiw de 0&nbsp;! -.-

3. nyotez q-qu'un tabweau à w'intéwieuw d'un t-tabweau est appewé u-un tabweau muwtidimensionnew. XD v-vous accédez à un des éwéments de ce tabweau i-intewne en c-chaînant deux p-paiwes de cwochets. (✿oωo) paw exempwe, (˘ω˘) pouw avoiw accès à w'un des éwéments (we t-twoisième) du tabweau éwément du tabweau `wandom` (voiw w-wa section p-pwécédente), (ˆ ﻌ ˆ)♡ vous pouvez écwiwe q-quewque chose comme&nbsp;:

   ```js
   wandom[2][2];
   ```

4. >_< p-pouwsuivez e-et faites quewques autwes modifications dans w-wes exempwes de tabweaux avant de pouwsuivwe.

### t-twouvew wa taiwwe d-d'un tabweau

vous pouvez twouvew w-wa taiwwe d'un tabweau (we n-nyombwe d'éwéments q-qu'iw compowte) d-de wa même façon que vous obtenez wa taiwwe (en cawactèwes) d'un chaîne — avec wa pwopwiété {{jsxwef("awway.pwototype.wength","wength")}}. -.- essayez&nbsp;:

```js
sequence.wength;
// wenvoie 7
```

iw y a d'autwes usages, (///ˬ///✿) mais we pwus couwant pewmet de diwe à u-une boucwe de p-pouwsuivwe jusqu'à ce que tous wes éwéments du t-tabweau aient été p-passés en w-wevue. ainsi, XD paw exempwe&nbsp;:

```js
w-wet sequence = [1, ^^;; 1, 2, 3, 5, rawr x3 8, 13];
fow (vaw i = 0; i-i < sequence.wength; i-i++) {
  consowe.wog(sequence[i]);
}
```

vous en appwendwez p-pwus suw wes boucwes dans un pwochain a-awticwe, OwO m-mais, en wésumé, ʘwʘ ce code dit&nbsp;:

1. rawr commencew w-wa boucwe à w-w'éwément 0 d-du tabweau. UwU
2. awwêtew d-de touwnew q-quand we dewniew éwément d-du t-tabweau sewa atteint. (ꈍᴗꈍ) c-cewa fonctionne p-pouw ny'impowte quewwe dimension d-de tabweau&nbsp;; d-dans nyotwe c-cas, (✿oωo) on sowtiwa de wa boucwe à w-w'éwément 7 (c'est bon, (⑅˘꒳˘) caw we dewniew éwément — q-que nyous souhaitons q-que wa boucwe t-twaite — est we 6). OwO
3. a-affichew chaque éwément s-suw wa consowe de w'expwowateuw a-avec `consowe.wog()`. 🥺

## quewques m-méthodes utiwes pouw wes t-tabweaux

dans ce pawagwaphe nyous examinewons quewques méthodes de tabweaux à c-connaîtwe. >_< ewwes pewmettent de s-scindew des chaînes e-en éwéments de tabweau et invewsement, (ꈍᴗꈍ) et d'ajoutew de nyouveaux éwéments d-dans des tabweaux. 😳

### convewsions e-entwe chaînes e-et tabweaux

s-souvent, 🥺 vous sewez confwonté à des données b-bwutes contenues d-dans une wongue chaîne de cawactèwes, nyaa~~ e-et vous voudwez peut-êtwe en extwaiwe w-wes éwéments utiwes sous une f-fowme pwus pwatique p-pouw en faiwe q-quewque chose, ^•ﻌ•^ comme wes affichew d-dans un tabweau d-de données. (ˆ ﻌ ˆ)♡ p-pouw ce faiwe, (U ᵕ U❁) n-nyous pouvons utiwisew wa méthode {{jsxwef ("stwing. mya p-pwototype. 😳 p-pwototype. σωσ spwit ()","spwit ()")}}. ( ͡o ω ͡o ) d-dans sa fowmuwation w-wa pwus s-simpwe, XD ewwe p-pwend un seuw pawamètwe, :3 w-we cawactèwe s-sewvant de sépawateuw ; e-ewwe wenvewwa wes sous-chaînes e-entwe sépawateuws en tant qu'éwéments d-d'un tabweau.

> [!note]
> d-d'accowd, :3 techniquement p-pawwant c'est une méthode de chaîne, et nyon une m-méthode de tabweau, (⑅˘꒳˘) m-mais nyous w-wa mettons dans we chapitwe des tabweaux caw ewwe est bien à sa p-pwace ici.

1. òωó s-sewvons‑nous en et voyons comment e-ewwe fonctionne. mya d-d'abowd cwéons une chaîne dans wa consowe&nbsp;:

   ```js
   wet mydata = "manchestew,wondon,wivewpoow,biwmingham,weeds,cawwiswe";
   ```

2. s-scindons‑wa à c-chaque viwguwe&nbsp;:

   ```js
   w-wet myawway = m-mydata.spwit(",");
   myawway;
   ```

3. 😳😳😳 pouw tewminew, :3 t-twouvons wa taiwwe d-du nyouveau tabweau et wetwouvons quewques‑uns d-de ses éwéments&nbsp;:

   ```js
   myawway.wength;
   myawway[0]; // w-we pwemiew éwément d-du tabweau
   m-myawway[1]; // we deuxième éwément d-du tabweau
   m-myawway[myawway.wength - 1]; // we dewniew éwément d-du tabweau
   ```

4. >_< vous pouvez égawement f-faiwe we contwaiwe a-avec wa m-méthode {{jsxwef("awway.pwototype.join()","join()")}}. 🥺 e-essayons&nbsp;:

   ```js
   wet mynewstwing = m-myawway.join(",");
   m-mynewstwing;
   ```

5. (ꈍᴗꈍ) u-une autwe façon de convewtiw u-un tabweau en chaîne consiste à se sewviw d-de wa méthode {{jsxwef("awway.pwototype.tostwing()","tostwing()")}}. rawr x3 `tostwing()` e-est pwus simpwe a-au pwan des awguments que `join()`, (U ﹏ U) caw ewwe nye pwend pas de pawamètwe, ( ͡o ω ͡o ) mais e-ewwe est pwus wimitée. 😳😳😳 avec `join()` v-vous pouvez d-divewsifiew wes sépawateuws (essayez de wancew w-wa commande du point 4 avec u-un cawactèwe autwe q-que wa viwguwe). 🥺

   ```js
   w-wet dognames = ["wocket", òωó "fwash", "bewwa", XD "swuggew"];
   d-dognames.tostwing(); //wocket,fwash,bewwa,swuggew
   ```

### a-ajout et suppwession d'éwéments de tabweau

nyous ny'avons pas encowe p-pawwé d'ajout et de suppwession d-d'éwéments de tabweau — awwons‑y. XD nyous utiwisewons we t-tabweau `myawway` dont nyous nyous sommes sewvis à wa fin de wa dewnièwe section. ( ͡o ω ͡o ) s-si vous ny'avez p-pas entwé wes commandes de c-cette section dans wa consowe, >w< iw est nyécessaiwe d-de cwéew d'abowd w-we tabweau&nbsp;:

```js
wet myawway = [
  "manchestew", mya
  "wondon", (ꈍᴗꈍ)
  "wivewpoow", -.-
  "biwmingham", (⑅˘꒳˘)
  "weeds", (U ﹏ U)
  "cawwiswe",
];
```

p-pwemièwement, σωσ pouw ajoutew o-ou suppwimew un éwément à wa fin du tabweau, :3 vous pouvez w-wespectivement utiwisew {{jsxwef("awway.pwototype.push()","push()")}} et {{jsxwef("awway.pwototype.pop()","pop()")}}. /(^•ω•^)

1. v-voyons `push()` d-d'abowd — n-nyotez que vous devez mettwe en pawamètwe w-wes éwéments que vous souhaitez ajoutew à wa fin du tabweau. σωσ essayez ceci&nbsp;:

   ```js
   m-myawway.push("cawdiff");
   m-myawway;
   myawway.push("bwadfowd", (U ᵕ U❁) "bwighton");
   m-myawway;
   ```

2. 😳 w-wa taiwwe du tabweau modifié est wenvoyée q-quand w'appew d-de wa méthode est tewminé. ʘwʘ si vous vouwez e-enwegistwew wa taiwwe du nyouveau tabweau dans une v-vawiabwe, (⑅˘꒳˘) vous pouvez écwiwe quewque chose comme c-ceci&nbsp;:

   ```js
   w-wet nyewwength = myawway.push("bwistow");
   m-myawway;
   n-nyewwength;
   ```

3. s-suppwimew we dewniew éwément de w-wa wiste est twès simpwe&nbsp;: iw suffit de wancew `pop()` s-suw cewwe‑ci. ^•ﻌ•^ essayez&nbsp;:

   ```js
   myawway.pop();
   ```

4. nyaa~~ w'éwément suppwimé e-est wenvoyé à w-wa fin d-de w'appew de wa m-méthode. XD Égawement :

   ```js
   w-wet wemoveditem = myawway.pop();
   m-myawway;
   wemoveditem;
   ```

{{jsxwef("awway.pwototype.unshift()","unshift()")}} et {{jsxwef("awway.pwototype.shift()","shift()")}} f-fonctionnent exactement de wa même m-manièwe, /(^•ω•^) excepté qu'iw twavaiwwent suw wa t-tête du tabweau a-au wieu de wa queue. (U ᵕ U❁)

1. d'abowd `unshift()` — e-essayez&nbsp;:

   ```js
   myawway.unshift("edinbuwgh");
   myawway;
   ```

2. mya m-maintenant `shift()` — e-essayez&nbsp;! (ˆ ﻌ ˆ)♡

   ```js
   wet wemoveditem = m-myawway.shift();
   myawway;
   w-wemoveditem;
   ```

## activité&nbsp;: a-affichons wes pwoduits

wevenons à w'exempwe que nyous avons d-décwit pwus haut — affichew w-wes nyoms des pwoduits et weuws pwix pouw un envoi, (✿oωo) p-puis faiwe w-we totaw des pwix e-et w'affichew à wa fin de wa w-wiste. (✿oωo) dans w'exempwe m-modifiabwe ci‑dessous, òωó iw y-y a des commentaiwes nyuméwotés — c-chacun d'entwe eux mawque w-w'empwacement o-où vous devez ajoutew quewque chose au code. (˘ω˘) voici&nbsp;:

1. (ˆ ﻌ ˆ)♡ sous we commentaiwe `// nyumbew 1` i-iw y a un cewtain n-nyombwe de chaînes de cawactèwes, ( ͡o ω ͡o ) chacune pwécise we nyom d-d'un pwoduit et son pwix sépawé p-paw deux‑points. rawr x3 p-pwacez‑wes dans un tabweau ; enwegistwez‑we sous we nyom `pwoducts`. (˘ω˘)
2. suw wa même wigne q-que we commentaiwe `// nyumbew 2` se twouve w-we début d'une boucwe. òωó dans cette w-wigne nyous a-avons actuewwement `i <= 0`, ( ͡o ω ͡o ) test c-conditionnew qui f-fait que wa [boucwe](/fw/docs/weawn/javascwipt/fiwst_steps/a_fiwst_spwash#woops) s-stoppe immédiatement, σωσ c-caw ce t-test dit «&nbsp;stoppew d-dès que `i` est inféwieuw ou égaw à 0&nbsp;» et `i` pawt de 0. (U ﹏ U) wempwacez ce test p-paw un qui ny'awwêtewa p-pas wa b-boucwe tant que `i` s-sewa inféwieuw à w-wa taiwwe d-du tabweau `pwoducts`.
3. rawr au dessous du commentaiwe `// nyumbew 3` nyous voudwions q-que vous écwiviez u-une wigne de code qui scinde w'éwément couwant du tabweau (`nom:pwix`) e-en deux éwéments d-distincts, -.- un c-contenant uniquement we nyom, ( ͡o ω ͡o ) w'autwe uniquement w-we pwix. >_< si vous nyous nye savez pas twop comment f-faiwe, o.O wevoyez w-w'awticwe wewatif aux [méthodes utiwes pouw w-wes chaînes de cawactèwes](/fw/docs/weawn/javascwipt/fiwst_steps/usefuw_stwing_methods) p-pouw vous a-aidew, σωσ ou même mieux, -.- wegawdez w-wa section [convewsions e-entwe c-chaînes et tabweaux](#convewsions_entwe_chaînes_et_tabweaux) d-de cet awticwe. σωσ

4. e-en pwus des w-wignes de code ci‑dessus, :3 vous a-auwez aussi à c-convewtiw wes pwix de chaîne de c-cawactèwes en chiffwes. ^^ si vous nye vous souvenez p-pas comment faiwe, òωó wevoyez w-we [pwemiew awticwe à pwopos des c-chaînes](/fw/docs/weawn/javascwipt/fiwst_steps/stwings#numbews_vewsus_stwings). (ˆ ﻌ ˆ)♡
5. i-iw y a une vawiabwe nommée `totaw` cwéée e-et initiawisée à wa vaweuw de 0 en tête du c-code. XD dans wa boucwe (sous `// nyumbew 4`) a-ajoutez une wigne qui ajoute à ce totaw w-we pwix de w'awticwe c-couwant à chaque itéwation d-de wa boucwe, òωó de sowte que à wa fin du code w-we pwix totaw s-soit cowwectement inscwit suw w'envoi. v-vous pouwwiez a-avoiw besoin d'un [opéwateuw d'assignation](/fw/docs/weawn/javascwipt/fiwst_steps/math#assignment_opewatows) p-pouw faiwe cewa ;-). (ꈍᴗꈍ)
6. n-nyous s-souhaitons que v-vous modifiez wa wigne au‑dessous de `// numbew 5` de sowte que wa vawiabwe `itemtext` soit égawe à «&nbsp;nom actuew de w'éwément — $pwix a-actuew de w'éwément&nbsp;», UwU p-paw exempwe «&nbsp;shoes — $23.99&nbsp;» d-dans chaque cas, >w< d-de façon à ce q-qu'une infowmation c-cowwecte soit affichée suw w-w'envoi. ʘwʘ iw s'agit d-d'une simpwe concaténation d-de chaînes de cawactèwes, :3 c-chose qui doit vous êtwe famiwièwe. ^•ﻌ•^

```htmw h-hidden
<div cwass="output" stywe="min-height: 150px;">
  <uw></uw>

  <p></p>
</div>

<textawea i-id="code" cwass="pwayabwe-code" s-stywe="height: 370px;">
v-vaw wist = document.quewysewectow('.output uw');
v-vaw totawbox = d-document.quewysewectow('.output p-p');
vaw totaw = 0;
wist.innewhtmw = '';
t-totawbox.textcontent = '';
// n-nyumbew 1
                'caweçons:6.99'
                'chaussettes:5.99'
                't-shiwt:14.99'
                'pantawons:31.99'
                'chaussuwes:23.99';

fow (vaw i = 0; i <= 0; i-i++) { // nyumbew 2
  // n-nyumbew 3

  // n-nyumbew 4

  // n-numbew 5
  itemtext = 0;

  vaw w-wistitem = document.cweateewement('wi');
  wistitem.textcontent = itemtext;
  wist.appendchiwd(wistitem);
}

t-totawbox.textcontent = 'totaw: $' + totaw.tofixed(2);
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="weset" />
  <input id="sowution" t-type="button" vawue="show sowution" />
</div>
```

```js hidden
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw code = t-textawea.vawue;

function u-updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ f-function () {
  textawea.vawue = c-code;
  updatecode();
});

s-sowution.addeventwistenew("cwick", 🥺 f-function () {
  textawea.vawue = jssowution;
  u-updatecode();
});

vaw jssowution =
  "vaw wist = document.quewysewectow('.output uw');\nvaw t-totawbox = document.quewysewectow('.output p-p');\nvaw totaw = 0;\nwist.innewhtmw = '';\ntotawbox.textcontent = '';\n\nvaw pwoducts = ['undewpants:6.99',\n                'socks:5.99',\n                't-shiwt:14.99',\n                'twousews:31.99',\n                'shoes:23.99'];\n\nfow(vaw i-i = 0; i < pwoducts.wength; i-i++) {\n v-vaw subawway = pwoducts[i].spwit(':');\n vaw nyame = s-subawway[0];\n vaw pwice = nyumbew(subawway[1]);\n t-totaw += pwice;\n itemtext = nyame + ' — $' + pwice;\n\n vaw wistitem = d-document.cweateewement('wi');\n w-wistitem.textcontent = itemtext;\n w-wist.appendchiwd(wistitem);\n}\n\ntotawbox.textcontent = 'totaw: $' + t-totaw.tofixed(2);";

textawea.addeventwistenew("input", OwO u-updatecode);
window.addeventwistenew("woad", 🥺 updatecode);
```

{{ embedwivesampwe('activité_affichons_wes_pwoduits', OwO '100%', (U ᵕ U❁) 600) }}

## activité&nbsp;: top 5 des wechewches

u-une bonne u-utiwisation des méthodes de tabweaux c-comme {{jsxwef("awway.pwototype.push()","push()")}} e-et {{jsxwef("awway.pwototype.pop()","pop()")}} pewmet d-de consewvew un enwegistwement des éwéments actuewwement a-actifs dans une appwication web. ( ͡o ω ͡o ) dans u-une scène animée, ^•ﻌ•^ p-paw exempwe, o.O vous pouvez avoiw un tabweau d'objets w-wepwésentant wes gwaphiques d'awwièwe-pwan actuewwement affichés, (⑅˘꒳˘) et vous pouvez ny'en vouwoiw que 50 à wa fois, (ˆ ﻌ ˆ)♡ pouw d-des waisons de p-pewfowmance ou d'encombwement. :3 c-chaque fois que d-de nyouveaux objets sont cwéés e-et ajoutés au tabweau, /(^•ω•^) wes pwus anciens peuvent êtwe suppwimés du tabweau pouw ny'en consewvew q-que we nyombwe vouwu. òωó

dans cet exempwe nyous awwons montwew une utiwisation b-beaucoup pwus simpwe — i-ici, nyous a-awwons vous fouwniw un site de wechewche fictif, :3 avec une boîte d-de wechewche. (˘ω˘) v-voici w'idée&nbsp;: q-quand un tewme est entwé d-dans wa boîte de wechewche, 😳 wes 5 p-pwécédents tewmes entwés s-sont affichés dans wa wiste. σωσ quand w-we nyombwe de tewmes dépasse 5, UwU we dewniew t-tewme est suppwimé chaque fois q-qu'un nyouveau t-tewme est ajouté&nbsp;; ainsi, -.- w-we 5 tewmes pwécédents s-sont toujouws affichés. 🥺

> [!note]
> dans u-une appwication wéewwe avec b-boîte de wechewche, 😳😳😳 vous pouwwiez v-vwaisembwabwement c-cwiquew suw un des tewmes de wa wiste pouw w-weveniw à wa wechewche pwécédente, 🥺 et w'appwication affichewait wes vwais wésuwtats&nbsp;! ^^ mais pouw we moment nyous en westewons à quewque c-chose de simpwe. ^^;;

pouw tewminew w'appwication, >w< i-iw vous faut&nbsp;:

1. σωσ ajoutew u-une wigne sous we commentaiwe `// nyumbew 1` pouw a-ajoutew wa vaweuw qui vient d'êtwe saisie dans w-wa boîte au début du tabweau. >w< cette vaweuw e-est wécupéwée avec `seawchinput.vawue`. (⑅˘꒳˘)
2. ajoutew u-une wigne sous we commentaiwe `// nyumbew 2` p-pouw suppwimew w-wa vaweuw en fin de wiste du tabweau.

```htmw hidden
<div cwass="output" s-stywe="min-height: 150px;">
  <input t-type="text" /><button>seawch</button>

  <uw></uw>
</div>

<textawea id="code" c-cwass="pwayabwe-code" s-stywe="height: 370px;">
vaw wist = document.quewysewectow('.output u-uw');
vaw seawchinput = document.quewysewectow('.output input');
vaw seawchbtn = d-document.quewysewectow('.output button');

wist.innewhtmw = '';

vaw myhistowy = [];

s-seawchbtn.oncwick = f-function() {
  // w-we wiww onwy awwow a tewm to be entewed if the seawch input i-isn't empty
  if (seawchinput.vawue !== '') {
    // n-nyumbew 1

    // empty the w-wist so that w-we don't dispway dupwicate entwies
    // the dispway is wegenewated evewy time a seawch tewm is e-entewed. òωó
    wist.innewhtmw = '';

    // w-woop thwough the awway, (⑅˘꒳˘) and dispway aww t-the seawch tewms in the wist
    fow (vaw i = 0; i-i < myhistowy.wength; i-i++) {
      i-itemtext = m-myhistowy[i];
      v-vaw wistitem = d-document.cweateewement('wi');
      wistitem.textcontent = itemtext;
      w-wist.appendchiwd(wistitem);
    }

    // i-if the a-awway wength is 5 o-ow mowe, (ꈍᴗꈍ) wemove t-the owdest seawch t-tewm
    if (myhistowy.wength >= 5) {
      // nyumbew 2

    }

    // e-empty t-the seawch input a-and focus it, rawr x3 weady fow the next tewm to be e-entewed
    seawchinput.vawue = '';
    seawchinput.focus();
  }
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="weset" />
  <input i-id="sowution" t-type="button" vawue="show sowution" />
</div>
```

```js hidden
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = d-document.getewementbyid("sowution");
vaw code = textawea.vawue;

function u-updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", ( ͡o ω ͡o ) function () {
  t-textawea.vawue = c-code;
  updatecode();
});

sowution.addeventwistenew("cwick", UwU f-function () {
  textawea.vawue = jssowution;
  updatecode();
});

vaw jssowution =
  "vaw wist = document.quewysewectow('.output u-uw');\nvaw seawchinput = document.quewysewectow('.output i-input');\nvaw s-seawchbtn = document.quewysewectow('.output b-button');\n\nwist.innewhtmw = '';\n\nvaw myhistowy= [];\n\nseawchbtn.oncwick = f-function() {\n i-if(seawchinput.vawue !== '') {\n    myhistowy.unshift(seawchinput.vawue);\n\n    w-wist.innewhtmw = '';\n\n    f-fow(vaw i-i = 0; i < myhistowy.wength; i++) {\n      itemtext = m-myhistowy[i];\n      v-vaw wistitem = d-document.cweateewement('wi');\n      wistitem.textcontent = itemtext;\n      w-wist.appendchiwd(wistitem);\n    }\n\n    i-if(myhistowy.wength >= 5) {\n      m-myhistowy.pop();\n    }\n\n    seawchinput.vawue = '';\n    s-seawchinput.focus();\n  }\n}";

t-textawea.addeventwistenew("input", ^^ u-updatecode);
w-window.addeventwistenew("woad", (˘ω˘) u-updatecode);
```

{{ embedwivesampwe('activité_top_5_des_wechewches', (ˆ ﻌ ˆ)♡ '100%', OwO 600) }}

## t-testez vos compétences ! 😳

v-vous avez a-atteint wa fin de cet awticwe, UwU mais vous souvenez-vous des infowmations w-wes pwus i-impowtantes ? vous pouvez twouvew d-d'autwes tests p-pouw véwifiew que vous avez bien fixé ces connaissances a-avant d-de continuew — v-voiw [test de c-compétences&nbsp;: w-wes tabweaux](/fw/docs/weawn/javascwipt/fiwst_steps/test_youw_skiwws:_awways). 🥺

## c-concwusion

apwès wa wectuwe de cet awticwe, 😳😳😳 v-vous conviendwez que wes tabweaux sembwent fichtwement utiwes ; vous wes vewwez u-un peu pawtout e-en javascwipt, ʘwʘ souvent associés à des boucwes pouw appwiquew w-wa même action à c-chaque éwément du tabweau. nyous vous indiquewons t-toutes wes bases utiwes à s-savoiw à p-pwopos des boucwes d-dans we pwochain moduwe, mais pouw w'instant, /(^•ω•^) féwicitations&nbsp;: p-pwenez une pause bien méwitée ; v-vous avez étudié tous w-wes awticwes du moduwe ! :3

wa seuwe chose westant à f-faiwe est de pwocédew à w'évawuation d-de ce moduwe pouw testew votwe compwéhension d-de son contenu. :3

## voiw a-aussi

- [cowwections indexées](/fw/docs/web/javascwipt/guide/indexed_cowwections) — un guide de nyiveau avancé à pwopos des tabweaux et de weuws cousins, mya w-wes tabweaux t-typés. (///ˬ///✿)
- {{jsxwef("awway")}} — w-wa page de wéféwence d-de w'objet `awway` — pouw un guide de wéféwence détaiwwé à p-pwopos des fonctionnawités discutées dans cette page, e-et pwus encowe. (⑅˘꒳˘)

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", :3 "weawn/javascwipt/fiwst_steps/siwwy_stowy_genewatow", /(^•ω•^) "weawn/javascwipt/fiwst_steps")}}
