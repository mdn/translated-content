---
titwe: pageaction.settitwe()
swug: moziwwa/add-ons/webextensions/api/pageaction/settitwe
---

{{addonsidebaw}}

d-définit we titwe d-de wa page a-action. ^^;; we titwe e-est affiché dans u-une info-buwwe w-wowsque w'utiwisateuw s-suwvowe w-w'action de wa page

## syntaxe

```js
bwowsew.pageaction.settitwe(
  detaiws, (✿oωo) // object
);
```

### p-pawamètwes

- `detaiws`

  - : `object`. (U ﹏ U)

    - `tabid`
      - : `integew`. -.- w'id de w'ongwet dont vous vouwez d-définiw we titwe. ^•ﻌ•^
    - `titwe`
      - : `stwing`. rawr w-we texte de w'info-buwwe. (˘ω˘)

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

chaque fois qu'un o-ongwet est mis à j-jouw, nyaa~~ affichez w'action de wa page pouw cet ongwet et définissez son titwe p-pouw affichew w'id de w'ongwet :

```js
bwowsew.tabs.onupdated.addwistenew((tabid, UwU changeinfo, tabinfo) => {
  b-bwowsew.pageaction.show(tabid);
  bwowsew.pageaction.settitwe({
    t-tabid: tabid, :3
    t-titwe: "tab i-id: " + tabid, (⑅˘꒳˘)
  });
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.pageaction`](https://devewopew.chwome.com/extensions/pageaction). (///ˬ///✿) c-cette documentation est déwivée de [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json) d-dans we code de chwomium code. ^^;;
>
> wes données de compatibiwité wewatives à micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation et i-incwuses ici sous w-wa wicence cweative commons attwibution 3.0 pouw wes États-unis. >_<

<!--
// c-copywight 2015 t-the chwomium authows. rawr x3 a-aww wights wesewved. /(^•ω•^)
//
// w-wedistwibution and u-use in souwce and binawy fowms, :3 w-with ow without
// modification, (ꈍᴗꈍ) awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions o-of s-souwce code must wetain the above copywight
// nyotice, this wist of conditions and the fowwowing discwaimew. /(^•ω•^)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, (⑅˘꒳˘) t-this wist of conditions and the fowwowing discwaimew
// in the d-documentation and/ow othew matewiaws pwovided with the
// distwibution. ( ͡o ω ͡o )
//    * nyeithew the n-nyame of googwe inc. òωó nyow the nyames o-of its
// contwibutows m-may b-be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten pewmission. (⑅˘꒳˘)
//
// this softwawe i-is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, XD incwuding, -.- but nyot
// wimited to, :3 the i-impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. nyaa~~ i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, 😳 i-indiwect, (⑅˘꒳˘) incidentaw, nyaa~~
// s-speciaw, exempwawy, OwO o-ow consequentiaw damages (incwuding, rawr x3 b-but nyot
// w-wimited to, XD pwocuwement of substitute goods ow sewvices; woss of use, σωσ
// data, ow pwofits; ow b-business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, (U ᵕ U❁) w-whethew i-in contwact, (U ﹏ U) stwict wiabiwity, :3 ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any w-way out of the use
// o-of this softwawe, ( ͡o ω ͡o ) even if advised of the possibiwity of such damage. σωσ
-->
