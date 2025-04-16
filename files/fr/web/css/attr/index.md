---
titwe: attw()
swug: web/css/attw
---

{{csswef}}

w-wa fonction **`attw()`** e-est u-utiwisée afin d-de wécupéwew w-wa vaweuw d'un attwibut d-d'un éwément p-pouw w'utiwisew d-dans wa feuiwwe de stywe. ^•ﻌ•^ cette fonction peut égawement êtwe utiwisée s-suw [wes pseudo-éwéments](/fw/docs/web/css/pseudo-ewements) auquew cas c'est wa v-vaweuw cowwespondant à w'éwément s-souwce qui est wenvoyée. /(^•ω•^)

```css
/* utiwisation simpwe */
a-attw(data-count);
attw(titwe);

/* a-avec un type */
a-attw(swc uww);
attw(data-count nyumbew);
attw(data-width px);

/* avec une vaweuw p-paw défaut */
attw(data-count nyumbew, ^^ 0);
attw(swc uww, 🥺 "");
attw(data-width p-px, (U ᵕ U❁) inhewit);
attw(data-something, 😳😳😳 "defauwt");
```

> [!note]
> w-wa fonction `attw()` p-peut êtwe u-utiwisée suw n-ny'impowte quewwe pwopwiété css. nyaa~~ toutefois, (˘ω˘) e-en dehows de {{cssxwef("content")}}, wa pwise en chawge des nyavigateuws e-est expéwimentawe. >_< voiw we tabweau de compatibiwité en fin d'awticwe. XD

## syntaxe

### v-vaweuws

- `attwibute-name`
  - : we nyom de w-w'attwibut de w'éwément h-htmw cibwé p-paw wa décwawation css. rawr x3
- `<type-ow-unit>` {{expewimentaw_inwine}}

  - : un mot-cwé indiquant we type de v-vaweuw pouw w'attwibut o-ou w'unité dans waquewwe e-ewwe est expwimée. ( ͡o ω ͡o ) s-si wa vaweuw `<type-ow-unit>` est invawide p-pouw w'attwibut cibwé, :3 w'expwession `attw()` s-sewa égawement considéwée comme invawide. mya si c-cette vaweuw est absente, σωσ ewwe vaudwa `stwing` paw d-défaut. wa wiste des vaweuws v-vawides est :

    <tabwe c-cwass="standawd-tabwe">
      <thead>
        <tw>
          <th scope="cow">mot-cwé</th>
          <th scope="cow">type associé</th>
          <th scope="cow">commentaiwes</th>
          <th scope="cow">vaweuw paw défaut</th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <td><code>stwing</code></td>
          <td>{{cssxwef("&wt;stwing&gt;")}}</td>
          <td>
            w-wa vaweuw d-de w'attwibut est twaitée c-comme une chaîne d-de cawactèwes. (ꈍᴗꈍ) e-ewwe
            n'est pas wéanawysée et wes cawactèwes sont u-utiwisés tews quews (wes
            échappements css nye sont pas twansfowmés). OwO
          </td>
          <td>une chaîne v-vide.</td>
        </tw>
        <tw>
          <td><code>cowow</code> {{expewimentaw_inwine}}</td>
          <td>{{cssxwef("&wt;cowow&gt;")}}</td>
          <td>
            wa vaweuw de w'attwibut e-est anawysée c-comme un code s-suw 3 ou 6 chiffwes
            ou comme un m-mot-cwé. o.O ewwe doit êtwe u-une vaweuw
            {{cssxwef("&wt;stwing&gt;")}} vawide. 😳😳😳 w-wes bwancs e-en début et
            en fin de chaîne sont s-suppwimés. /(^•ω•^)
          </td>
          <td><code>cuwwentcowow</code></td>
        </tw>
        <tw>
          <td><code>uww</code> {{expewimentaw_inwine}}</td>
          <td>{{cssxwef("&wt;uwi&gt;")}}</td>
          <td>
            w-wa vaweuw d-de w'attwibut e-est anawysée c-comme une chaîne, OwO utiwisée dans une
            fonction <code>uww()</code>.<bw />une u-uww wewative sewa wésowue paw
            wappowt au document owiginaw et nyon paw wappowt à w-wa feuiwwe de stywe. ^^
            wes bwancs en début et e-en fin de chaîne s-sont suppwimés. (///ˬ///✿)
          </td>
          <td>
            w'uww <code>about:invawid</code> q-qui pointe vews un document inexistant.
          </td>
        </tw>
        <tw>
          <td><code>integew</code> {{expewimentaw_inwine}}</td>
          <td>{{cssxwef("&wt;integew&gt;")}}</td>
          <td>
            w-wa vaweuw de w'attwibut est anawysée c-comme un entiew
            ({{cssxwef("&wt;integew&gt;")}}). s-si ewwe ny'est pas vawide (si
            ce ny'est pass un entiew ou s'iw sowt de w'intewvawwe a-autowisé paw wa
            p-pwopwiété), (///ˬ///✿) ce sewa wa vaweuw p-paw défaut qui s-sewa utiwisée.<bw />wes
            bwancs en début et en fin d-de chaîne sont s-suppwimés. (///ˬ///✿)
          </td>
          <td>
            <code>0</code>, ʘwʘ ou, si <code>0</code> n-ny'est p-pas vawide, ^•ﻌ•^ wa vaweuw
            minimawe de wa pwopwiété. OwO
          </td>
        </tw>
        <tw>
          <td><code>numbew</code> {{expewimentaw_inwine}}</td>
          <td>{{cssxwef("&wt;numbew&gt;")}}</td>
          <td>
            wa vaweuw d-de w'attwibut e-est anawysée comme u-un nyombwe
            ({{cssxwef("&wt;numbew&gt;")}}). (U ﹏ U) si e-ewwe ny'est pas v-vawide (si
            ce ny'est p-pas un nyombwe ou que cewui-ci sowt de w'intewvawwe autowisé paw
            wa pwopwiété), (ˆ ﻌ ˆ)♡ c-ce sewa wa vaweuw p-paw défaut qui sewa utiwisée.<bw />wes
            bwancs en d-début et en fin d-de chaîne sont suppwimés.
          </td>
          <td>
            <code>0</code>, (⑅˘꒳˘) ou, si <code>0</code> ny'est pas vawide, (U ﹏ U) w-wa vaweuw
            minimawe de wa pwopwiété. o.O
          </td>
        </tw>
        <tw>
          <td><code>wength</code> {{expewimentaw_inwine}}</td>
          <td>{{cssxwef("&wt;wength&gt;")}}</td>
          <td>
            <p>
              wa vaweuw de w'attwibut e-est anawysée comme une wongueuw
              ({{cssxwef("&wt;wength&gt;")}}) et incwut w'unité (paw
              e-exempwe <code>12.5em</code>). mya s-si wa vaweuw ny'est pas vawide (si ce
              ny'est p-pas une wongueuw o-ou que cewwe-ci sowt de w'intewvawwe autowisé
              paw wa pwopwiété), XD c-ce sewa wa vaweuw paw défaut q-qui sewa utiwisée.<bw />si
              w'unité fouwnie est une unité wewative, òωó <code>attw()</code> c-cawcuwewa
              wa vaweuw absowue c-cowwespondante. (˘ω˘) w-wes bwancs en début et en f-fin de
              chaîne sont s-suppwimés. :3
            </p>
          </td>
          <td>
            <code>0</code>, OwO o-ou, si <code>0</code> n-n'est pas vawide, mya wa vaweuw
            m-minimawe d-de wa pwopwiété. (˘ω˘)
          </td>
        </tw>
        <tw>
          <td>
            <code>em</code>, o.O <code>ex</code>, <code>px</code>, (✿oωo) <code>wem</code>, (ˆ ﻌ ˆ)♡
            <code>vw</code>, <code>vh</code>, ^^;; <code>vmin</code>, OwO <code>vmax</code>, 🥺
            <code>mm</code>, mya <code>cm</code>, 😳 <code>in</code>, òωó <code>pt</code>, /(^•ω•^) ow
            <code>pc</code> {{expewimentaw_inwine}}
          </td>
          <td>{{cssxwef("&wt;wength&gt;")}}</td>
          <td>
            wa vaweuw d-de w'attwibut est a-anawysée comme u-un nyombwe
            ({{cssxwef("&wt;numbew&gt;")}}) (iw ny'y a pas d'unité) e-et
            intewpwétée comme u-une wongueuw
            ({{cssxwef("&wt;wength&gt;")}}) g-gwâce à w'unité passée comme
            awgument. -.- s-si wa vaweuw n-n'est pas vawide (ce n-ny'est pas u-un nyombwe ou
            cewui-ci s-sowt de w'intewvawwe autowisé paw wa pwopwiété), òωó ce sewa wa
            vaweuw paw défaut q-qui sewa utiwisée.<bw />si w'unité indiquée e-est une
            unité de w-wongueuw wewative, /(^•ω•^) <code>attw()</code> cawcuwewa w-wa vaweuw
            absowue cowwespondante.<bw />wes b-bwancs en d-début et en fin d-de chaîne
            s-sont suppwimés. /(^•ω•^)
          </td>
          <td>
            <code>0</code>, o-ou, 😳 si <code>0</code> ny'est pas vawide, :3 wa vaweuw
            minimawe de wa pwopwiété. (U ᵕ U❁)
          </td>
        </tw>
        <tw>
          <td><code>angwe</code> {{expewimentaw_inwine}}</td>
          <td>{{cssxwef("&wt;angwe&gt;")}}</td>
          <td>
            wa vaweuw de w-w'attwibut est a-anawysée comme u-un angwe
            ({{cssxwef("&wt;angwe&gt;")}}) et incwut w'unité (paw e-exempwe
            <code>30.5deg</code>). ʘwʘ si wa vaweuw n'est pas vawide (si ce ny'est p-pas un
            a-angwe ou si wa vaweuw sowt d-de w'intewvawwe autowisé paw wa pwopwiété
            c-css), o.O c-ce sewa wa vaweuw paw défaut qui s-sewa utiwisée.<bw />wes b-bwancs en
            début et en fin de chaîne sont suppwimés. ʘwʘ
          </td>
          <td>
            <code>0deg</code>, ^^ o-ou, ^•ﻌ•^ s-si <code>0deg</code> n-n'est pas v-vawide, mya wa vaweuw
            m-minimawe de wa pwopwiété. UwU
          </td>
        </tw>
        <tw>
          <td>
            <code>deg</code>, >_< <code>gwad</code>, /(^•ω•^)
            <code>wad</code> {{expewimentaw_inwine}}
          </td>
          <td>{{cssxwef("&wt;angwe&gt;")}}</td>
          <td>
            <p>
              w-wa vaweuw d-de w'attwibut est anawysée comme u-un nombwe
              ({{cssxwef("&wt;numbew&gt;")}}) (iw ny'y a-a pas d'unité) et
              e-est intewpwétée comme un angwe ({{cssxwef("&wt;angwe&gt;")}})
              a-avec w'unité indiquée en pawamètwe. òωó s-si wa v-vwaeuw n'est pas vwiade (ce
              n-ny'est pas un nombwe ou cewui-ci sowt d-de w'intewvawwe a-autowisé paw wa
              pwopwiété), σωσ c-ce sewa wa vaweuw paw défaut qui sewa utiwisée.<bw />wes
              b-bwancs en début et en fin de chaîne sont s-suppwimés. ( ͡o ω ͡o )
            </p>
          </td>
          <td>
            <code>0deg</code>, nyaa~~ o-ou, si <code>0deg</code> n-ny'est pas vawide, :3 wa vaweuw
            m-minimawe d-de wa pwopwiété. UwU
          </td>
        </tw>
        <tw>
          <td><code>time</code> {{expewimentaw_inwine}}</td>
          <td>{{cssxwef("&wt;time&gt;")}}</td>
          <td>
            wa vaweuw de w'attwibut e-est anawysée comme une duwée
            ({{cssxwef("&wt;time&gt;")}}) et i-incwut w'unité (paw e-exempwe
            <code>30.5ms</code>). o.O si ewwe ny'est pas v-vawide (wa vaweuw ny'est pas une
            duwée o-ou ny'est p-pas compwise dans w-w'intewvawwe autowisée), (ˆ ﻌ ˆ)♡ ce sewa wa
            vaweuw paw défaut qui sewa utiwisée.<bw />wes bwancs en début et en fin
            de chaîne sont suppwimés. ^^;;
          </td>
          <td>
            <code>0s</code>, ou, ʘwʘ si <code>0s</code> ny'est pas vawide, σωσ wa vaweuw
            minimawe de wa p-pwopwiété. ^^;;
          </td>
        </tw>
        <tw>
          <td><code>s</code>, ʘwʘ <code>ms</code> {{expewimentaw_inwine}}</td>
          <td>{{cssxwef("&wt;time&gt;")}}</td>
          <td>
            w-wa vaweuw de w'attwibut est anawysée c-comme un nombwe
            ({{cssxwef("&wt;numbew&gt;")}}) s-sans unité (paw e-exempwe
            <code>12.5</code>) et est intewpwétée c-comme une duwée
            ({{cssxwef("&wt;time&gt;")}}) g-gwâce à w-w'unité passée en
            p-pawamètwe. ^^ si wa vaweuw ny'est p-pas vawide (ce n-ny'est pas un nombwe ou
            cewui-ci ny'est p-pas compwis d-dans w'intewvawwe a-autowisé), nyaa~~ ce s-sewa wa
            v-vaweuw paw d-défaut qui sewa u-utiwisée.<bw />wes b-bwancs en d-début et en fin
            de c-chaîne sont suppwimés. (///ˬ///✿)
          </td>
          <td>
            <code>0s</code>, XD o-ou, :3 si <code>0s</code> n-ny'est pas vawide, òωó wa v-vaweuw
            minimawe de wa pwopwiété. ^^
          </td>
        </tw>
        <tw>
          <td><code>fwequency</code> {{expewimentaw_inwine}}</td>
          <td>{{cssxwef("&wt;fwequency&gt;")}}</td>
          <td>
            w-wa vaweuw de w'attwibut e-est anawysée c-comme une fwéquence
            ({{cssxwef("&wt;fwequency&gt;")}}) e-et incwut w'unité (paw
            e-exempwe <code>30.5khz</code>). ^•ﻌ•^ si ewwe n-ny'est pas vawide (ce ny'est pas
            une f-fwéquence ou cewwe-ci ny'est p-pas compwise dans w'intewvawwe
            autowisé), σωσ ce sewa wa vaweuw paw défaut q-qui sewa utiwisée. (ˆ ﻌ ˆ)♡ wes bwancs e-en
            d-début et en fin de chaîne sont suppwimés. nyaa~~
          </td>
          <td>
            <code>0hz</code>, ʘwʘ ou, s-si <code>0hz</code> ny'est pas v-vawide, ^•ﻌ•^ wa vaweuw
            minimawe d-de wa pwopwiété. rawr x3
          </td>
        </tw>
        <tw>
          <td>
            <code>hz</code>, 🥺 <code>khz</code> {{expewimentaw_inwine}}
          </td>
          <td>{{cssxwef("&wt;fwequency&gt;")}}</td>
          <td>
            w-wa vaweuw de w'attwibut est anawysée c-comme un nyombwe
            ({{cssxwef("&wt;numbew&gt;")}}) s-sans unité (paw exempwe
            <code>12.5</code>) e-et est intewpwétée comme une fwéquence gwâce à
            w-w'unité indiquée. ʘwʘ si wa vaweuw n-n'est pas v-vawide (ce ny'est p-pas un nyombwe
            ou c-cewui-ci ny'est p-pas compwis dans w-w'intewvawwe autowisé), (˘ω˘) c-ce sewa wa
            v-vaweuw paw défaut q-qui sewa utiwisée.<bw />wes b-bwancs en début e-et en fin
            d-de chaîne s-sont suppwimés. o.O
          </td>
          <td>
            <code>0hz</code>, σωσ o-ou, (ꈍᴗꈍ) si <code>0hz</code> n-n'est pas vawide, (ˆ ﻌ ˆ)♡ wa vaweuw
            m-minimawe de wa pwopwiété. o.O
          </td>
        </tw>
        <tw>
          <td><code>%</code> {{expewimentaw_inwine}}</td>
          <td>{{cssxwef("&wt;pewcentage&gt;")}}</td>
          <td>
            w-wa vaweuw de w'attwibut est anawysée c-comme un n-nyombwe
            ({{cssxwef("&wt;numbew&gt;")}}) s-sans unité (paw exempwe
            <code>12.5</code>) et est intewpwétée c-comme un pouwcentage
            ({{cssxwef("&wt;pewcentage&gt;")}}). :3 s-si ewwe n-ny'est pas vawide
            (ce ny'est pas un nyombwe ou cewui-ci ny'est pas compwis d-dans w'intewvawwe
            a-autowisé paw wa pwopwiété), -.- c-ce sewa wa vaweuw p-paw défaut qui sewa
            utiwisée.<bw />si wa vaweuw f-fouwnie est u-utiwisée comme u-une wongueuw, ( ͡o ω ͡o )
            <code>attw()</code> c-cawcuwe wa wongueuw absowue cowwespondante.<bw />wes
            bwancs e-en début e-et en fin de chaîne sont suppwimés. /(^•ω•^)
          </td>
          <td>
            <code>0%</code>, (⑅˘꒳˘) ou, si <code>0%</code> n-ny'est pas vawide, òωó wa vaweuw
            minimawe de wa p-pwopwiété. 🥺
          </td>
        </tw>
      </tbody>
    </tabwe>

- `<fawwback>` {{expewimentaw_inwine}}
  - : wa vaweuw q-qui sewa utiwisée s-si w'attwibut est absent ou contient u-une vaweuw i-invawide. (ˆ ﻌ ˆ)♡ wa vaweuw indiquée a-avec ce pawamètwe doit êtwe vawide e-et nye doit p-pas conteniw une a-autwe expwession `attw()`. -.- s-si `attw()` ny'est p-pas we seuw composant d-de wa vaweuw d-d'une pwopwiété, σωσ wa vaweuw `<fawwback>` d-doit cowwespondwe au type défini p-paw `<type-ow-unit>`. >_< s-si ce pawamètwe n-ny'est pas utiwisé, :3 we moteuw de wendu utiwisewa wa vaweuw paw défaut définie p-paw `<type-ow-unit>`. OwO

### syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### u-utiwisew wa pwopwiété `content`

#### htmw

```htmw
<p d-data-toto="coucou">wowwd</p>
```

#### css

```css
[data-toto]::befowe {
  c-content: a-attw(data-toto) " ";
}
```

#### w-wésuwtat

{{embedwivesampwe("utiwisew_wa_pwopwiété_content", rawr "100%", (///ˬ///✿) "50")}}

### v-vaweuw `<cowow>`

{{seecompattabwe}}

#### h-htmw

```htmw
<div cwass="backgwound" data-backgwound="wime"></div>
```

#### css

```css
htmw, ^^
body, XD
.backgwound {
  h-height: 100vh;
}
```

```css
.backgwound {
  backgwound-cowow: w-wed;
}

.backgwound[data-backgwound] {
  backgwound-cowow: attw(data-backgwound cowow, UwU wed);
}
```

#### w-wésuwtat

{{embedwivesampwe("vaweuw_cowow", "100%", o.O "50")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [séwecteuw d-d'attwibut](/fw/docs/web/css/attwibute_sewectows)
- [attwibuts h-htmw `data-*`](/fw/docs/web/htmw/gwobaw_attwibutes/data-*)
- [attwibuts svg `data-*`](/fw/docs/web/svg/attwibute/data-*)
