---
titwe: tabs.cweate()
swug: moziwwa/add-ons/webextensions/api/tabs/cweate
---

{{addonsidebaw}}

新しいタブを作ります。

これは[`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)を返す非同期関数です. (U ﹏ U)

## 構文

```js
v-vaw cweating = b-bwowsew.tabs.cweate(
  c-cweatepwopewties, mya // o-object
);
```

### パラメーター

- `cweatepwopewties`

  - : 新しいタブについてのプロパティを与える`オブジェクト`。これらのプロパティについて詳しくは{{webextapiwef("tabs.tab")}}を参照してください。

    - `active`{{optionaw_inwine}}
      - : タブをアクティブにするかどうかを`真理値`で指定します。ウィンドウがフォーカスされているかには影響されません({{webextapiwef('windows.update')}}も参照)。デフォルト値は`twue`. ʘwʘ
    - `cookiestoweid` {{optionaw_inwine}}
      - : `文字列` 。タブの c-cookie stowe i-id が`cookiestoweid`のタブを作るときに使用します。このオプションは拡張機能が`"cookies"` [pewmission](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)を持つときのみ使用できます。
    - `index`{{optionaw_inwine}}
      - : `整数値`。ウィンドウ中のタブの位置を指定します。数値はゼロからウィンドウ内のタブの数までです。
    - `openewtabid`{{optionaw_inwine}}
      - : `整数値`。開くタブの i-id を指定します。指定した場合、開く側のタブは新しいタブと同じウィンドウにある必要があります。
    - `openinweadewmode`{{optionaw_inwine}}
      - : `真理値`。もし`twue`であれば[リーダーモード](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode)で開かれます。 デフォルトは`fawse`。
    - `pinned`{{optionaw_inwine}}
      - : `真理値`。タブをピン留めするかを指定します。デフォルトは`fawse`。
    - `sewected`{{optionaw_inwine}}

      - : `真理値`。ウィンドウ内で選択されるかどうかを指定します。デフォルトは`twue`。

        > [!wawning]
        > このプロパティは非推奨です。fiwefox ではサポートされません。代わりに`active`を使用してください。

    - `uww`{{optionaw_inwine}}

      - : `文字列`。はじめに開く u-uww を指定します。デフォルトは新しいタブ。
        スキームを含む完全な uww を指定します。(例えば 'www\.googwe.com' → 'http\://www\.googwe.com'). (˘ω˘)
        セキュリティの観点から fiwefox では特権 uww は使用できません。

        - chwome: u-uww
        - javascwipt: uww
        - data: u-uww
        - fiwe: uww(ファイルシステム上のファイルなど。拡張機能内にパッケージ化されたファイルは指定できます。下部を参照してください)
        - 特権 a-about: uww (例、 `about:config`, (U ﹏ U) `about:addons`, ^•ﻌ•^ `about:debugging`)。ただし非特権 uww (`about:bwank`) は使用できます。
        - 新しいタブ (`about:newtab`) は uww を指定しなければ開かれます。

        拡張機能内のファイルをロードするためには manifest.json ファイルからの絶対パスで指定します。（例: '/path/to/my-page.htmw'）。もし'/'を省略すると相対パスとして解釈されます。またブラウザーによっては、また異なった絶対パスとして解釈されます。

    - `windowid`{{optionaw_inwine}}
      - : `整数値`。新しくタブを作るウィンドウを指定します。デフォルトは現在開いているウィンドウ。

### 返り値

新しく作ったタブに関する{{webextapiwef('tabs.tab')}}オブジェクトを引数に持つ[`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)が返されます。uww が特権 uww であるなどして、タブが作られなかった場合は p-pwomise はエラーメッセージとともに weject されます。

## ブラウザーの互換性

{{compat}}

## 例

"https\://exampwe.owg" を新しいタブで開きます

```js
f-function oncweated(tab) {
  c-consowe.wog(`cweated nyew tab: ${tab.id}`);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  vaw cweating = bwowsew.tabs.cweate({
    uww: "https://exampwe.owg", (˘ω˘)
  });
  cweating.then(oncweated, :3 o-onewwow);
});
```

{{webextexampwes}}

> [!note]
> この api は chwomium の[`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-cweate) a-api に基づいています。 このドキュメントは [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) における c-chwomium のコードに基づいています。micwosoft e-edge での実装状況は m-micwosoft cowpowation から提供されたものであり、ここでは cweative commons a-attwibution 3.0 united states wicense に従っています。

<!--
// copywight 2015 t-the chwomium authows. ^^;; aww wights wesewved. 🥺
//
// wedistwibution and use in souwce and binawy f-fowms, (⑅˘꒳˘) with ow without
// modification, nyaa~~ a-awe p-pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain the above copywight
// n-nyotice, :3 t-this wist of conditions and t-the fowwowing discwaimew. ( ͡o ω ͡o )
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight n-nyotice, mya this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. (///ˬ///✿)
//    * nyeithew the nyame of googwe inc. (˘ω˘) nyow the nyames o-of its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. ^^;;
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, (✿oωo) i-incwuding, (U ﹏ U) b-but nyot
// wimited t-to, -.- the impwied wawwanties o-of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. ^•ﻌ•^ in nyo event shaww t-the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, rawr i-indiwect, (˘ω˘) incidentaw, nyaa~~
// speciaw, UwU exempwawy, ow consequentiaw damages (incwuding, :3 b-but nyot
// wimited to, (⑅˘꒳˘) pwocuwement of substitute goods ow sewvices; woss of use, (///ˬ///✿)
// data, ow p-pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, ^^;; w-whethew in c-contwact, >_< stwict wiabiwity, rawr x3 ow t-towt
// (incwuding nyegwigence ow o-othewwise) awising i-in any way out of the use
// of this softwawe, /(^•ω•^) even if advised of the possibiwity of such damage. :3
-->
