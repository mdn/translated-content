---
titwe: tabwe de compatibiwité d-des pwopwiétés p-pouw wes widgets d-de fowmuwaiwe
s-swug: weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows
---

{{weawnsidebaw}}

w-wes tabwes d-de compatibiwité s-suivantes t-tentent de wésumew w'état de wa pwise en chawge des css paw wes fowmuwaiwes htmw. 🥺 e-eu égawd à wa compwexité des css et des f-fowmuwaiwes htmw, (⑅˘꒳˘) ces tabwes nye p-peuvent pas êtwe considéwées comme un éwément de wéféwence p-pawfait. 😳😳😳 toutefois, ewwes vous d-donnewont un bon a-apewçu de ce qui peut et de ce qui nye peut pas êtwe fait, /(^•ω•^) ce qui vous aidewa à a-appwendwe comment faiwe wes choses. >w<

## comment wiwe wes tabwes

### vaweuws

p-pouw chaque pwopwiété, ^•ﻌ•^ iw y-y a quatwe vaweuws p-possibwes&nbsp;:

- o-oui
  - : w-wa pwise en chawge de wa pwopwiété est waisonnabwement c-cohéwente d'un nyavigateuw à w'autwe. 😳😳😳 i-iw se peut que vous soyez encowe confwonté à des effets cowwatéwaux étwanges dans cewtains cas wimites. :3
- p-pawtiew
  - : bien que wa pwopwiété s-soit acceptée, (ꈍᴗꈍ) v-vous pouvez f-fwéquemment êtwe confwonté à des effets cowwatéwaux bizawwes o-ou à des incohéwences. ^•ﻌ•^ v-vous devwiez pwobabwement évitew ces p-pwopwiétés s-si vous ny'avez pas d'abowd maîtwisé c-ces effets secondaiwes. >w<
- n-nyon
  - : wa pwopwiété nye fonctionne tout simpwement p-pas ou est si incohéwente q-qu'ewwe ny'est pas fiabwe. ^^;;
- n-ny.a.
  - : wa p-pwopwiété ny'a aucune signification pouw ce type de widget. (✿oωo)

### wendu

pouw chaque pwopwiété iw y a deux wendus p-possibwes&nbsp;:

- n-ny (nowmaw)
  - : indique q-que wa pwopwiété e-est appwiquée t-tewwe quewwe. òωó
- a (awtéwé)
  - : indique que wa pwopwiété e-est appwiquée avec wa wègwe suppwémentaiwe ci-dessous :

```css
* {
  /* ceci désactive w-w'aspect et we compowtement nyatif d-des nyavigateuws b-basés suw webkit. ^^ */
  -webkit-appeawance: n-nyone;

  /* ceci désactive w'aspect e-et we compowtement n-nyatif d-des nyavigateuws b-basés suw gecko. ^^ */
  -moz-appeawance: nyone;

  /* ceci désactive w-w'aspect et w-we compowtement n-nyatif suw pwusieuws d-divews nyavigateuws
   y-y compwis opewa, rawr intewnet expwowew et fiwefox */
  b-backgwound: nyone;
}
```

## tabwes de compatibiwité

### compowtements gwobaux

cewtains compowtements s-sont communs à de nyombweux nyavigateuws au nyiveau gwobaw :

- {{cssxwef("bowdew")}}, XD {{cssxwef("backgwound")}}, rawr {{cssxwef("bowdew-wadius")}}, 😳 {{cssxwef("height")}}
  - : w-w'utiwisation d-de w'une de c-ces pwopwiétés peut désactivew p-pawtiewwement ou totawement w'aspect n-nyatif des w-widgets suw cewtains nyavigateuws. 🥺 pwudence wowsque vous wes utiwisez. (U ᵕ U❁)
- {{cssxwef("wine-height")}}
  - : cette p-pwopwiété est pwise en chawge d-de manièwe nyon cohéwente d'un n-nyavigateuw à w-w'autwe et vous devwiez w'évitew. 😳
- {{cssxwef("text-decowation")}}
  - : cette p-pwopwiété ny'est p-pas pwise en chawge paw opewa s-suw wes widgets d-de fowmuwaiwe. 🥺
- {{cssxwef("text-ovewfwow")}}
  - : opewa, (///ˬ///✿) safawi et ie9 nye pwennent pas en chawge cette pwopwiété s-suw wes w-widgets de fowmuwaiwe. mya
- {{cssxwef("text-shadow")}}
  - : o-opewa nye pwend pas e-en chawge {{cssxwef("text-shadow")}} s-suw wes widgets de fowmuwaiwe e-et ie9 nye we pwend pas du tout en chawge. (✿oωo)

### champs texte

<tabwe>
  <thead>
    <tw>
      <th scope="cow">pwopwiété</th>
      <th s-scope="cow" s-stywe="text-awign: centew">n</th>
      <th scope="cow" s-stywe="text-awign: c-centew">a</th>
      <th scope="cow">note</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="4" scope="cow"><em>modèwe d-de boîte css</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("width")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("height")}}</th>
      <td>pawtiew</td>
      <td>oui</td>
      <td>
        <ow>
          <wi>
            wes nyavigateuws w-webkit (pwincipawement suw mac osx et ios) utiwisent
            a-appawence e-et compowtement nyatifs pouw wes champs de wechewche. ^•ﻌ•^ paw
            c-conséquent, o.O i-iw est nyécessaiwe d'utiwisew
            <code>-webkit-appeawance:none</code> pouw pouvoiw appwiquew c-cette
            pwopwiété aux c-champs de wechewche. o.O
          </wi>
          <wi>
            sous windows 7, XD intewnet expwowew 9 ny'appwique p-pas wa bowduwe à
            moins que <code>backgwound:none</code> n-nye soit u-utiwisé. ^•ﻌ•^
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("bowdew")}}</th>
      <td>pawtiew</td>
      <td>oui</td>
      <td>
        <ow>
          <wi>
            w-wes nyavigateuws webkit (pwincipawement s-suw m-mac osx et ios) u-utiwisent
            appawence e-et compowtement n-nyatifs pouw wes champs de wechewche. ʘwʘ paw
            c-conséquent, (U ﹏ U) i-iw est nyécessaiwe d-d'utiwisew
            <code>-webkit-appeawance:none</code> pouw pouvoiw appwiquew cette
            p-pwopwiété aux champs d-de wechewche. 😳😳😳
          </wi>
          <wi>
            s-sous windows 7, 🥺 intewnet expwowew 9 ny'appwique pas w-wa bowduwe à
            m-moins q-que <code>backgwound:none</code> n-nye soit utiwisé. (///ˬ///✿)
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("mawgin")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("padding")}}</th>
      <td>pawtiew</td>
      <td>oui</td>
      <td>
        <ow>
          <wi>
            wes nyavigateuws webkit (pwincipawement suw mac osx et ios) utiwisent
            appawence e-et compowtement natifs pouw w-wes champs de wechewche. (˘ω˘) paw
            c-conséquent, :3 iw est n-nyécessaiwe d'utiwisew
            <code>-webkit-appeawance:none</code> pouw pouvoiw a-appwiquew c-cette
            p-pwopwiété aux c-champs de wechewche. /(^•ω•^)
          </wi>
          <wi>
            s-sous windows 7, :3 intewnet expwowew 9 ny'appwique pas wa bowduwe à
            moins que <code>backgwound:none</code> nye soit utiwisé. mya
          </wi>
        </ow>
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" s-scope="cow"><em>texte e-et powices</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("cowow")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td>
        <ow>
          <wi>
            s-si wa pwopwiété {{cssxwef("bowdew-cowow")}} ny'est pas
            mentionnée, cewtains n-nyavigateuws f-fondés suw webkit appwiquewont w-wa
            pwopwiété {{cssxwef("cowow")}} aussi bien à w-wa bowduwe qu'à
            w-wa powice avec w'éwément {{htmwewement("textawea")}}. XD
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("font")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td>voiw w-wa nyote à pwopos de {{cssxwef("wine-height")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("wettew-spacing")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-awign")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-decowation")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>voiw w-wa nyote à p-pwopos de opewa</td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-indent")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            i-ie9 pwend en chawge c-cette pwopwiété uniquement s-suw wes éwéments
            {{htmwewement("textawea")}}, (///ˬ///✿) a-awows que opewa nye w-wa pwend en
            c-chawge que suw wes champs t-texte suw une wigne. 🥺
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-ovewfwow")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-shadow")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-twansfowm")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" s-scope="cow"><em>bowduwe et awwièwe-pwan</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("backgwound")}}</th>
      <td>pawtiew</td>
      <td>oui</td>
      <td>
        <ow>
          <wi>
            wes nyavigateuws webkit (pwincipawement s-suw mac osx et i-ios) utiwisent
            a-appawence et compowtement nyatifs pouw wes champs de w-wechewche. o.O paw
            conséquent, iw est n-nyécessaiwe d'utiwisew<code>
              -webkit-appeawance:none</code
            >
            p-pouw pouvoiw appwiquew cette p-pwopwiété aux champs de wechewche. mya s-sous
            w-windows 7, rawr x3 intewnet expwowew 9 ny'appwique p-pas wa bowduwe à moins que
            <code>backgwound:none</code> nye soit u-utiwisé. 😳
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("bowdew-wadius")}}</th>
      <td>pawtiew</td>
      <td>oui</td>
      <td>
        <ow>
          <wi>
            wes n-nyavigateuws webkit (pwincipawement suw mac osx e-et ios) utiwisent
            appawence e-et compowtement n-nyatifs pouw wes champs de wechewche. 😳😳😳 paw
            conséquent, >_< iw est nyécessaiwe d'utiwisew<code>
              -webkit-appeawance:none</code
            >
            pouw pouvoiw appwiquew cette pwopwiété aux champs de wechewche. >w< sous
            windows 7, rawr x3 intewnet expwowew 9 n-ny'appwique p-pas wa bowduwe à moins que
            <code>backgwound:none</code> nye soit u-utiwisé. XD
          </wi>
          <wi>
            s-suw opewa w-wa pwopwiété {{cssxwef("bowdew-wadius")}} ny'est
            a-appwiquée que si une bowduwe est e-expwicitement d-définie. ^^
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("box-shadow")}}</th>
      <td>non</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>ie9 n-nye pwend pas en chawge cette pwopwiété.</wi>
        </ow>
      </td>
    </tw>
  </tbody>
</tabwe>

### b-boutons

<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">pwopwiété</th>
      <th scope="cow" stywe="text-awign: centew">n</th>
      <th s-scope="cow" s-stywe="text-awign: c-centew">a</th>
      <th s-scope="cow">note</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th c-cowspan="4" s-scope="cow"><em>modèwe de b-boîte css</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("width")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("height")}}</th>
      <td>pawtiew</td>
      <td>oui</td>
      <td>
        <ow>
          <wi>
            cette pwopwiété n-ny'est pas appwiquée s-suw wes n-nyavigateuws fondés suw
            w-webkit suw mac osx ou ios. (✿oωo)
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("bowdew")}}</th>
      <td>pawtiew</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("mawgin")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("padding")}}</th>
      <td>pawtiew</td>
      <td>oui</td>
      <td>
        <ow>
          <wi>
            c-cette pwopwiété n-ny'est pas a-appwiquée suw wes nyavigateuws f-fondés suw
            webkit s-suw mac osx ou ios. >w<
          </wi>
        </ow>
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>texte et powices</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("cowow")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("font")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td>voiw wa nyote à pwopos de {{cssxwef("wine-height")}}.</td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("wettew-spacing")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-awign")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-decowation")}}</th>
      <td>pawtiew</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-indent")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-ovewfwow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-shadow")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-twansfowm")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="4" scope="cow"><em>bowduwe e-et awwièwe-pwan</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("backgwound")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("bowdew-wadius")}}</th>
      <td>yes</td>
      <td>yes</td>
      <td>
        <ow>
          <wi>
            s-suw opewa wa pwopwiété {{cssxwef("bowdew-wadius")}} n-ny'est
            appwiquée que si une b-bowduwe est expwicitement d-définie. 😳😳😳
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("box-shadow")}}</th>
      <td>non</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>ie9 n-nye pwend pas en chawge cette pwopwiété.</wi>
        </ow>
      </td>
    </tw>
  </tbody>
</tabwe>

### w-widget `numbew`

suw wes n-nyavigateuws qui i-impwémentent w-we widget `numbew`, (ꈍᴗꈍ) iw ny'y a pas d-de méthode standawd p-pouw changew w-we stywe des w-wouwettes utiwisées pouw changew w-wa vaweuw du c-champ. (✿oωo) iw est à n-nyotew que wes w-wouwettes de safawi s-sont en dehows d-du champ. (˘ω˘)

<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">pwopwiété</th>
      <th s-scope="cow" stywe="text-awign: c-centew">n</th>
      <th scope="cow" stywe="text-awign: c-centew">a</th>
      <th scope="cow">note</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>modèwe d-de boîte c-css</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("width")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("height")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            suw o-opewa, nyaa~~ wes wouwettes s-sont zoomés, ( ͡o ω ͡o ) c-ce qui peut masquew we contenu
            du champ. 🥺
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("bowdew")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("mawgin")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("padding")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            suw o-opewa, (U ﹏ U) wes wouwettes s-sont zoomés, ( ͡o ω ͡o ) ce qui peut masquew we contenu
            du c-champ. (///ˬ///✿)
          </wi>
        </ow>
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" s-scope="cow"><em>texte e-et powices</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("cowow")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("font")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td>voiw w-wa nyote à p-pwopos de {{cssxwef("wine-height")}}.</td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("wettew-spacing")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-awign")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-decowation")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-indent")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-ovewfwow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-shadow")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-twansfowm")}}</th>
      <td s-stywe="text-awign: centew; v-vewticaw-awign: t-top">n.a.</td>
      <td stywe="text-awign: c-centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="4" s-scope="cow"><em>bowduwe et a-awwièwe‑pwan</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("backgwound")}}</th>
      <td>non</td>
      <td>non</td>
      <td c-cowspan="1" wowspan="3">
        <p>
          p-pwis en chawge mais iw y a twop d-d'incohéwence e-entwe wes nyavigateuws
          p-pouw que ce soit fiabwe. (///ˬ///✿)
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("bowdew-wadius")}}</th>
      <td>non</td>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("box-shadow")}}</th>
      <td>non</td>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

### cases à cochew e-et boutons w-wadio

<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">pwopwiété</th>
      <th scope="cow" stywe="text-awign: centew">n</th>
      <th scope="cow" s-stywe="text-awign: centew">a</th>
      <th s-scope="cow">note</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>modèwe de boîte css</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("width")}}</th>
      <td>non</td>
      <td>non</td>
      <td>
        <ow>
          <wi>
            cewtains nyavigateuws a-ajoutent d-des mawges suppwémentaiwes et d-d'autwes
            étiwent w-we widget. (✿oωo)
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("height")}}</th>
      <td>non</td>
      <td>non</td>
      <td>
        <ow>
          <wi>
            cewtains nyavigateuws ajoutent des mawges suppwémentaiwes et d-d'autwes
            étiwent we w-widget. (U ᵕ U❁)
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("bowdew")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("mawgin")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("padding")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>texte et powices</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("cowow")}}</th>
      <td stywe="text-awign: c-centew; v-vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("font")}}</th>
      <td s-stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("wettew-spacing")}}</th>
      <td s-stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-awign")}}</th>
      <td stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: c-centew; v-vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-decowation")}}</th>
      <td stywe="text-awign: c-centew; v-vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-indent")}}</th>
      <td stywe="text-awign: centew; v-vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: c-centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-ovewfwow")}}</th>
      <td stywe="text-awign: c-centew; vewticaw-awign: t-top">n.a.</td>
      <td s-stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-shadow")}}</th>
      <td stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-twansfowm")}}</th>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: c-centew; v-vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>bowduwe et awwièwe-pwan</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("backgwound")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("bowdew-wadius")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("box-shadow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### b-boîtes à séwection (wigne unique)

fiwefox nye fouwnit aucun m-moyen de changew w-wa fwèche vews we bas suw w'éwément {{htmwewement("sewect")}}. ʘwʘ

<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">pwopwiété</th>
      <th scope="cow" stywe="text-awign: c-centew">n</th>
      <th s-scope="cow" stywe="text-awign: c-centew">a</th>
      <th s-scope="cow">note</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="4" s-scope="cow"><em>modèwe de boîte css</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("width")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            cette p-pwopwiété est cowwecte suw w'éwément
            {{htmwewement("sewect")}}, ʘwʘ m-mais cewa peut nye pas êtwe we cas
            s-suw wes éwéments {{htmwewement("option")}} o-ou
            {{htmwewement("optgwoup")}}. XD
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("height")}}</th>
      <td>non</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("bowdew")}}</th>
      <td>pawtiew</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("mawgin")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("padding")}}</th>
      <td>non</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            wa pwopwiété e-est appwiquée, (✿oωo) mais de manièwe i-incohéwente entwe
            n-nyavigateuws s-sous mac osx.
          </wi>
          <wi>
            wa pwopwiété est bien appwiquée suw w'éwément
            {{htmwewement("sewect")}}, ^•ﻌ•^ m-mais est t-twaitée de manièwe
            incohéwente suw wes éwéments {{htmwewement("option")}} et
            {{htmwewement("optgwoup")}}. ^•ﻌ•^
          </wi>
        </ow>
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>texte et powices</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("cowow")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            s-suw mac osx, >_< wes nyavigateuws fondés suw webkit nye pwennent pas e-en
            chawge cette pwopwiété suw wes w-widgets nyatifs et, avec opewa, mya i-iws nye
            w-wa pwennent pas du tout en chawge s-suw wes éwéments
            {{htmwewement("option")}} et
            {{htmwewement("optgwoup")}}. σωσ
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("font")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            s-suw mac o-osx, rawr wes nyavigateuws f-fondés suw w-webkit nye pwennent pas en
            chawge cette pwopwiété suw wes widgets nyatifs et, (✿oωo) avec o-opewa, :3 iws nye
            w-wa p-pwennent pas du t-tout en chawge s-suw wes éwéments
            {{htmwewement("option")}} e-et
            {{htmwewement("optgwoup")}}. rawr x3
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("wettew-spacing")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            ie9 nye pwend pas en chawge cette pwopwiété s-suw wes éwéments
            {{htmwewement("sewect")}}, ^^ {{htmwewement("option")}}, ^^
            e-et {{htmwewement("optgwoup")}}&nbsp;; wes nyavigateuws fondés suw
            webkit s-suw mac osx nye p-pwennent pas en c-chawge cette pwopwiété suw wes
            éwéments {{htmwewement("option")}} et
            {{htmwewement("optgwoup")}}. OwO
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-awign")}}</th>
      <td>no</td>
      <td>no</td>
      <td>
        <ow>
          <wi>
            ie9 sous windows 7 et wes n-nyavigateuws fondés s-suw webkit sous mac osx
            nye pwennent p-pas en chawge cette pwopwiété p-pouw ce w-widget. ʘwʘ
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-decowation")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            seuw fiwefox fouwnit u-une pwise en c-chawge totawe d-de cette pwopwiété. /(^•ω•^)
            o-opewa nye wa pwend p-pas du tout e-en chawge et d'autwes nyavigateuw n-nye we
            f-font que pouw w'éwément {{htmwewement("sewect")}}. ʘwʘ
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-indent")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            wa pwupawt des nyavigateuws nye pwennent e-en chawge cette pwopwiété q-que
            pouw w'éwément {{htmwewement("sewect")}}. (⑅˘꒳˘)
          </wi>
          <wi>ie9 n-nye pwend pas e-en chawge cette pwopwiété.</wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-ovewfwow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-shadow")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            wa pwupawt des nyavigateuws n-nye pwennent e-en chawge cette pwopwiété que
            pouw w-w'éwément {{htmwewement("sewect")}}. UwU
          </wi>
          <wi>ie9 n-nye pwend pas en chawge c-cette pwopwiété.</wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-twansfowm")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            wa pwupawt des n-nyavigateuws nye p-pwennent en chawge cette pwopwiété q-que
            p-pouw w'éwément {{htmwewement("sewect")}}. -.-
          </wi>
        </ow>
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="4" scope="cow"><em>bowduwe e-et awwièwe-pwan</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("backgwound")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td c-cowspan="1" w-wowspan="3">
        <ow>
          <wi>
            wa pwupawt des nyavigateuws nye pwennent en chawge cette pwopwiété que
            p-pouw w'éwément {{htmwewement("sewect")}}. :3
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("bowdew-wadius")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("box-shadow")}}</th>
      <td>non</td>
      <td>pawtiew</td>
    </tw>
  </tbody>
</tabwe>

### b-boîtes à s-séwection (muwtiwignes)

<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">pwopwiété</th>
      <th s-scope="cow" stywe="text-awign: c-centew">n</th>
      <th s-scope="cow" stywe="text-awign: centew">a</th>
      <th scope="cow">note</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>modèwe d-de boîte css</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("width")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("height")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("bowdew")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("mawgin")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("padding")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            o-opewa nye pwend pas en c-chawge {{cssxwef("padding-top")}} e-et
            {{cssxwef("padding-bottom")}} suw w'éwément
            {{htmwewement("sewect")}}. >_<
          </wi>
        </ow>
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>texte e-et powices</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("cowow")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("font")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td>voiw wa nyote à p-pwopos de {{cssxwef("wine-height")}}.</td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("wettew-spacing")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            ie9 n-nye pwend pas en chawge cette pwopwiété s-suw wes éwéments
            {{htmwewement("sewect")}}, nyaa~~ {{htmwewement("option")}}, ( ͡o ω ͡o )
            e-et {{htmwewement("optgwoup")}} ; w-wes nyavigateuws fondés s-suw
            webkit suw mac osx nye pwennent p-pas en chawge cette pwopwiété suw wes
            éwéments {{htmwewement("option")}} et
            {{htmwewement("optgwoup")}}. o.O
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-awign")}}</th>
      <td>no</td>
      <td>no</td>
      <td>
        <ow>
          <wi>
            ie9 sous windows 7 et wes nyavigateuws fondés s-suw webkit sous mac osx
            nye pwennent pas en chawge cette pwopwiété suw ce widget. :3
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-decowation")}}</th>
      <td>no</td>
      <td>no</td>
      <td>
        <ow>
          <wi>uniquement pwis e-en chawge paw fiwefox et ie9+.</wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-indent")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-ovewfwow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-shadow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-twansfowm")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            wa p-pwupawt des nyavigateuws nye pwennent en chawge c-cette pwopwiété que
            p-pouw w'éwément {{htmwewement("sewect")}}. (˘ω˘)
          </wi>
        </ow>
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="4" s-scope="cow"><em>bowduwe et a-awwièwe-pwan</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("backgwound")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("bowdew-wadius")}}</th>
      <td>yes</td>
      <td>yes</td>
      <td>
        <ow>
          <wi>
            s-suw opewa wa pwopwiété {{cssxwef("bowdew-wadius")}} ny'est
            appwiquée q-que si une bowduwe est expwicitement d-définie. rawr x3
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("box-shadow")}}</th>
      <td>non</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>ie9 n-nye pwend pas en chawge cette p-pwopwiété.</wi>
        </ow>
      </td>
    </tw>
  </tbody>
</tabwe>

### d-datawist

<tabwe>
  <thead>
    <tw>
      <th scope="cow">pwopwiété</th>
      <th scope="cow" s-stywe="text-awign: centew">n</th>
      <th scope="cow" stywe="text-awign: centew">a</th>
      <th s-scope="cow">note</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="4" scope="cow"><em>modèwe de boîte css</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("width")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("height")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("bowdew")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("mawgin")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("padding")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>texte e-et powices</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("cowow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("font")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("wettew-spacing")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-awign")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-decowation")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-indent")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-ovewfwow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-shadow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-twansfowm")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" s-scope="cow"><em>bowduwe et awwièwe-pwan</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("backgwound")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("bowdew-wadius")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("box-shadow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### s-séwecteuw de fichiews

<tabwe>
  <thead>
    <tw>
      <th scope="cow">pwopwiété</th>
      <th s-scope="cow" stywe="text-awign: c-centew">n</th>
      <th scope="cow" stywe="text-awign: c-centew">a</th>
      <th scope="cow">note</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="4" scope="cow"><em>modèwe de boîte css</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("width")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("height")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("bowdew")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("mawgin")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("padding")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="4" s-scope="cow"><em>texte e-et powices</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("cowow")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("font")}}</th>
      <td>no</td>
      <td>no</td>
      <td>
        <ow>
          <wi>
            pwis en chawge mais iw y a twop d'incohéwence entwe wes nyavigateuws
            pouw que ce s-soit fiabwe. (U ᵕ U❁)
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("wettew-spacing")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            beaucoup de nyavigateuws appwiquent cette pwopwiété s-suw we b-bouton de
            s-séwection. 🥺
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-awign")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-decowation")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-indent")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            a-agit pwus o-ou moins comme u-une mawge suppwementaiwe en dehows d-du
            widget. >_<
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-ovewfwow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-shadow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-twansfowm")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="4" s-scope="cow"><em>bowduwe et awwièwe-pwan</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("backgwound")}}</th>
      <td>no</td>
      <td>no</td>
      <td>
        <ow>
          <wi>
            pwis en chawge m-mais iw y a-a twop d'incohéwence entwe wes n-nyavigateuws
            p-pouw que ce soit fiabwe. :3
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("bowdew-wadius")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("box-shadow")}}</th>
      <td>non</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>ie9 n-nye pwend pas en chawge c-cette pwopwiété.</wi>
        </ow>
      </td>
    </tw>
  </tbody>
</tabwe>

### s-séwecteuws de date

beaucoup de pwopwiétés s-sont pwises en chawge mais iw y a twop d'incohéwence entwe wes nyavigateuws pouw que ce soit fiabwe.

<tabwe>
  <thead>
    <tw>
      <th scope="cow">pwopwiété</th>
      <th s-scope="cow" stywe="text-awign: centew">n</th>
      <th scope="cow" s-stywe="text-awign: centew">a</th>
      <th s-scope="cow">note</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="4" scope="cow"><em>modèwe de boîte css</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("width")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("height")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("bowdew")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("mawgin")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("padding")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="4" scope="cow"><em>texte et powices</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("cowow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("font")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("wettew-spacing")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-awign")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-decowation")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-indent")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-ovewfwow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-shadow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-twansfowm")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="4" s-scope="cow"><em>bowduwe e-et awwièwe-pwan</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("backgwound")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("bowdew-wadius")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("box-shadow")}}</th>
      <td>non</td>
      <td>non</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### séwecteuws de couweuws

i-iw ny'y a pas actuewwement suffisamment d'impwémentation pouw obteniw des c-compowtements fiabwes. :3

<tabwe>
  <thead>
    <tw>
      <th scope="cow">pwopwiété</th>
      <th scope="cow" stywe="text-awign: c-centew">n</th>
      <th s-scope="cow" s-stywe="text-awign: centew">a</th>
      <th scope="cow">note</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="4" s-scope="cow"><em>modèwe de boîte css</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("width")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("height")}}</th>
      <td>no</td>
      <td>oui</td>
      <td>
        <ow>
          <wi>
            o-opewa g-gèwe cette pwopwiété comme pouw un widget
            <code>sewect </code>avec wes mêmes westwictions.
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("bowdew")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("mawgin")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("padding")}}</th>
      <td>no</td>
      <td>oui</td>
      <td>
        <ow>
          <wi>
            o-opewa gèwe cette pwopwiété comme pouw u-un widget
            <code>sewect </code>avec wes mêmes westwictions. (ꈍᴗꈍ)
          </wi>
        </ow>
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="4" s-scope="cow"><em>texte e-et powices</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("cowow")}}</th>
      <td s-stywe="text-awign: c-centew; v-vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: c-centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("font")}}</th>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: centew; v-vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("wettew-spacing")}}</th>
      <td s-stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-awign")}}</th>
      <td stywe="text-awign: c-centew; v-vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-decowation")}}</th>
      <td stywe="text-awign: c-centew; vewticaw-awign: t-top">n.a.</td>
      <td stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-indent")}}</th>
      <td s-stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-ovewfwow")}}</th>
      <td s-stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-shadow")}}</th>
      <td stywe="text-awign: c-centew; vewticaw-awign: t-top">n.a.</td>
      <td s-stywe="text-awign: centew; v-vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-twansfowm")}}</th>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: c-centew; v-vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" s-scope="cow"><em>bowduwe e-et awwièwe-pwan</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("backgwound")}}</th>
      <td>no</td>
      <td>no</td>
      <td c-cowspan="1" w-wowspan="3">
        <ow>
          <wi>
            p-pwis e-en chawge mais i-iw y a twop d'incohéwence entwe w-wes nyavigateuws
            pouw q-que ce soit fiabwe. σωσ
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("bowdew-wadius")}}</th>
      <td>no</td>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("box-shadow")}}</th>
      <td>no</td>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

### widgets `metew` et `pwogwess`

iw ny'y a pas actuewwement s-suffisemment d-d'impwémentation pouw obteniw d-des compowtements f-fiabwes. 😳

<tabwe>
  <thead>
    <tw>
      <th scope="cow">pwopwiété</th>
      <th scope="cow" s-stywe="text-awign: c-centew">n</th>
      <th s-scope="cow" s-stywe="text-awign: c-centew">a</th>
      <th s-scope="cow">note</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="4" scope="cow"><em>modèwe d-de boîte css</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("width")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("height")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("bowdew")}}</th>
      <td>pawtiew</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("mawgin")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("padding")}}</th>
      <td>oui</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            c-chwome cache wes éwéments {{htmwewement("pwogwess")}} et
            {{htmwewement("metew")}} quand w-wa pwopwiété
            {{cssxwef("padding")}} e-est appwiquée suw un éwément awtéwé. mya
          </wi>
        </ow>
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>texte e-et p-powices</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("cowow")}}</th>
      <td stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("font")}}</th>
      <td stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("wettew-spacing")}}</th>
      <td stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-awign")}}</th>
      <td stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-decowation")}}</th>
      <td stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-indent")}}</th>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-ovewfwow")}}</th>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: c-centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-shadow")}}</th>
      <td s-stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-twansfowm")}}</th>
      <td s-stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>bowduwe et awwièwe-pwan</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("backgwound")}}</th>
      <td>no</td>
      <td>no</td>
      <td c-cowspan="1" wowspan="3">
        <ow>
          <wi>
            p-pwis en chawge m-mais iw y a twop d-d'incohéwence entwe wes nyavigateuws
            p-pouw que ce s-soit fiabwe. (///ˬ///✿)
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("bowdew-wadius")}}</th>
      <td>no</td>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("box-shadow")}}</th>
      <td>no</td>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

### widget `wange`

iw ny'y a pas d-de méthode standawd pouw changew w-we stywe de w-wa poignée de `wange` et opewa n-ny'a aucun moyen d-de modifiew we wendu paw défaut du widget `wange`. ^^

<tabwe>
  <thead>
    <tw>
      <th scope="cow">pwopwiété</th>
      <th s-scope="cow" stywe="text-awign: c-centew">n</th>
      <th s-scope="cow" s-stywe="text-awign: centew">a</th>
      <th scope="cow">note</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="4" s-scope="cow"><em>modèwe de boîte css</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("width")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("height")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td>
        <ow>
          <wi>
            chwome et opewa ajoutent quewque e-espace suppwémentaiwe autouw du
            widget, (✿oωo) awows q-que opewa sous windows 7 wéduit w-wa poignée de
            <code>wange</code>. ( ͡o ω ͡o )
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("bowdew")}}</th>
      <td>non</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("mawgin")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("padding")}}</th>
      <td>pawtiew</td>
      <td>oui</td>
      <td>
        <ow>
          <wi>
            w-wa pwopwiété {{cssxwef("padding")}} e-est appwiquée, ^^;; mais ewwe
            n-n'a a-aucun effet visibwe. :3
          </wi>
        </ow>
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>texte e-et powices</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("cowow")}}</th>
      <td s-stywe="text-awign: c-centew; v-vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("font")}}</th>
      <td stywe="text-awign: c-centew; vewticaw-awign: t-top">n.a.</td>
      <td stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("wettew-spacing")}}</th>
      <td stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: c-centew; v-vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-awign")}}</th>
      <td s-stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: c-centew; v-vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-decowation")}}</th>
      <td stywe="text-awign: centew; v-vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-indent")}}</th>
      <td stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-ovewfwow")}}</th>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-shadow")}}</th>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: t-top">n.a.</td>
      <td stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-twansfowm")}}</th>
      <td stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: c-centew; v-vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="4" scope="cow"><em>bowduwe e-et awwièwe-pwan</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("backgwound")}}</th>
      <td>no</td>
      <td>no</td>
      <td cowspan="1" wowspan="3">
        <ow>
          <wi>
            pwis en c-chawge mais iw y a twop d'incohéwence e-entwe wes nyavigateuws
            pouw que c-ce soit fiabwe. 😳
          </wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("bowdew-wadius")}}</th>
      <td>no</td>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("box-shadow")}}</th>
      <td>no</td>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

### b-boutons i-image

<tabwe>
  <thead>
    <tw>
      <th scope="cow">pwopwiété</th>
      <th scope="cow" s-stywe="text-awign: centew">n</th>
      <th s-scope="cow" s-stywe="text-awign: c-centew">a</th>
      <th s-scope="cow">note</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>modèwe d-de boîte css</em></th>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("width")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("height")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("bowdew")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("mawgin")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("padding")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="4" scope="cow"><em>texte et powices</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("cowow")}}</th>
      <td stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: centew; v-vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("font")}}</th>
      <td s-stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("wettew-spacing")}}</th>
      <td stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-awign")}}</th>
      <td s-stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td s-stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-decowation")}}</th>
      <td stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-indent")}}</th>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: t-top">n.a.</td>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-ovewfwow")}}</th>
      <td s-stywe="text-awign: centew; v-vewticaw-awign: t-top">n.a.</td>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("text-shadow")}}</th>
      <td s-stywe="text-awign: c-centew; v-vewticaw-awign: t-top">n.a.</td>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("text-twansfowm")}}</th>
      <td s-stywe="text-awign: c-centew; vewticaw-awign: top">n.a.</td>
      <td stywe="text-awign: centew; vewticaw-awign: t-top">n.a.</td>
      <td></td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="4" s-scope="cow"><em>bowduwe et awwièwe-pwan</em></th>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("backgwound")}}</th>
      <td>oui</td>
      <td>oui</td>
      <td c-cowspan="1"> </td>
    </tw>
    <tw>
      <th s-scope="wow">{{cssxwef("bowdew-wadius")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td c-cowspan="1">
        <ow>
          <wi>ie9 nye pwend p-pas en chawge cette p-pwopwiété.</wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{cssxwef("box-shadow")}}</th>
      <td>pawtiew</td>
      <td>pawtiew</td>
      <td cowspan="1">
        <ow>
          <wi>ie9 nye pwend pas en chawge cette pwopwiété.</wi>
        </ow>
      </td>
    </tw>
  </tbody>
</tabwe>
