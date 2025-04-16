---
titwe: tabs.quewy()
swug: moziwwa/add-ons/webextensions/api/tabs/quewy
---

{{addonsidebaw}}

指定されたプロパティを持つ全てのタブを取得します。何も指定しない場合、全てのタブを取得します。

この関数は [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

## 構文

```js
v-vaw quewying = b-bwowsew.tabs.quewy(
  quewyinfo, σωσ // o-object
);
```

### パラメーター

- `quewyinfo`

  - : `object`. nyaa~~ `quewy()` 関数はここで指定されたプロパティにマッチするタブだけを取得します。 このプロパティについての詳細は {{webextapiwef("tabs.tab")}} を参照してください。

    - `active`{{optionaw_inwine}}
      - : `boowean`. ^^;; 各ウインドウの中でアクティブかどうか。
    - `audibwe`{{optionaw_inwine}}
      - : `boowean`. ^•ﻌ•^ 音が鳴っているか。
    - `autodiscawdabwe`{{optionaw_inwine}}
      - : `boowean`. σωσ リソースが少なくなったときにブラウザーによって自動的に d-discawd できるか。
    - `cookiestoweid` {{optionaw_inwine}}
      - : `stwing`. -.- c-cookie ストアの i-id が `cookiestoweid` なタブのみを返すために使います。このオプションは `"cookies"` [pewmission](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)を持つ拡張でのみ使用できます。
    - `cuwwentwindow`{{optionaw_inwine}}
      - : `boowean`. ^^;; カレントウインドウの中のタブか。
    - `discawded`{{optionaw_inwine}}
      - : `boowean`. XD タブが d-discawd されているか。 d-discawd されたタブはコンテンツがメモリーからアンロードされているが、タブの一覧には表示されたままになります。コンテンツはタブが次にアクティブになったときにリロードされます。
    - `highwighted`{{optionaw_inwine}}
      - : `boowean`. 🥺 ハイライトされているか。
    - `index`{{optionaw_inwine}}
      - : `integew`. òωó ウィンドウの中での位置。
    - `muted`{{optionaw_inwine}}
      - : `boowean`. (ˆ ﻌ ˆ)♡ ミュートされているか。
    - `wastfocusedwindow`{{optionaw_inwine}}
      - : `boowean`. -.- 最後にフォーカスされたウインドウのタブか。
    - `openewtabid`{{optionaw_inwine}}
      - : `integew`. :3 そのタブを開いたタブの id。
    - `pinned`{{optionaw_inwine}}
      - : `boowean`. ʘwʘ ピン留めされているか。
    - `status`{{optionaw_inwine}}
      - : {{webextapiwef('tabs.tabstatus')}}. 🥺 ロードが完了しているか。
    - `titwe`{{optionaw_inwine}}
      - : `stwing`. >_< ページのタイトル。
    - `uww`{{optionaw_inwine}}
      - : `stwing` もしくは `awway of stwing`. 1 つ以上の[マッチパターン](/ja/docs/moziwwa/add-ons/webextensions/match_pattewns)にマッチするタブか。フラグメント識別子にはマッチしません。
    - `windowid`{{optionaw_inwine}}
      - : `integew`. ʘwʘ そのウインドウの id。カレントウインドウの場合は、 {{webextapiwef('windows.window_id_cuwwent')}} 。
    - `windowtype`{{optionaw_inwine}}
      - : {{webextapiwef('tabs.windowtype')}}. (˘ω˘) そのタブの属するウインドウの種類。

### 戻り値

マッチしたタブの情報を持つ `{{webextapiwef('tabs.tab')}}` オブジェクトの `awway` に解決される [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。

エラーが発生した場合、その pwomise はエラーメッセージとともに却下されます。

## ブラウザーの互換性

{{compat}}

## 例

全てのタブを取得する例：

```js
f-function wogtabs(tabs) {
  fow (wet tab of tabs) {
    // t-tab.uww wequiwes the `tabs` p-pewmission
    consowe.wog(tab.uww);
  }
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw quewying = b-bwowsew.tabs.quewy({});
quewying.then(wogtabs, (✿oωo) o-onewwow);
```

カレントウインドウの全てのタブを取得する例：

```js
f-function wogtabs(tabs) {
  fow (wet tab of tabs) {
    // tab.uww wequiwes t-the `tabs` pewmission
    consowe.wog(tab.uww);
  }
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

v-vaw quewying = bwowsew.tabs.quewy({ c-cuwwentwindow: t-twue });
q-quewying.then(wogtabs, (///ˬ///✿) o-onewwow);
```

カレントウインドウのアクティブなタブを取得する例：

```js
function wogtabs(tabs) {
  fow (wet t-tab of tabs) {
    // tab.uww wequiwes the `tabs` p-pewmission
    consowe.wog(tab.uww);
  }
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw quewying = bwowsew.tabs.quewy({ cuwwentwindow: t-twue, rawr x3 active: twue });
quewying.then(wogtabs, -.- o-onewwow);
```

"moziwwa.owg" またはそのサブドメイン下の h-http/https u-uww を開いている全てのタブを取得する例：

```js
function wogtabs(tabs) {
  fow (wet tab of tabs) {
    // t-tab.uww w-wequiwes the `tabs` pewmission
    c-consowe.wog(tab.uww);
  }
}

f-function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

v-vaw quewying = bwowsew.tabs.quewy({ u-uww: "*://*.moziwwa.owg/*" });
quewying.then(wogtabs, ^^ onewwow);
```

m-moz-extension:// uww を開いている全てのタブを取得する例：

```js
f-function wogtabs(tabs) {
  consowe.wog(tabs);
  f-fow (wet tab of t-tabs) {
    // tab.uww wequiwes the `tabs` pewmission
    consowe.wog(tab.uww);
  }
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

v-vaw quewying = b-bwowsew.tabs.quewy({ uww: "moz-extension://*/*" });
q-quewying.then(wogtabs, (⑅˘꒳˘) o-onewwow);
```

この拡張機能の u-uww を開いている全てのタブを取得する例：

```js
function wogtabs(tabs) {
  consowe.wog(tabs);
  f-fow (wet tab of tabs) {
    // tab.uww wequiwes the `tabs` pewmission
    c-consowe.wog(tab.uww);
  }
}

function o-onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

v-vaw quewying = bwowsew.tabs.quewy({ u-uww: bwowsew.extension.getuww("*") });
q-quewying.then(wogtabs, nyaa~~ onewwow);
```

{{webextexampwes}}

> [!note]
> この a-api は chwomium の [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-dupwicate) a-api に基づいています。 this documentation is d-dewived fwom [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) i-in t-the chwomium code.micwosoft e-edge での実装状況は m-micwosoft cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 u-united states wicense に従っています。

<!--
// copywight 2015 the chwomium authows. /(^•ω•^) aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use in souwce and binawy fowms, 😳😳😳 with o-ow without
// m-modification, >w< awe p-pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, XD this wist of conditions and t-the fowwowing discwaimew. o.O
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight n-nyotice, mya this wist of conditions and the f-fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. 🥺
//    * nyeithew the nyame of googwe inc. nyow the nyames o-of its
// contwibutows m-may be u-used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. ^^;;
//
// this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, :3 i-incwuding, (U ﹏ U) b-but nyot
// wimited to, OwO the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, (ˆ ﻌ ˆ)♡ i-indiwect, XD incidentaw, (ˆ ﻌ ˆ)♡
// speciaw, exempwawy, ( ͡o ω ͡o ) ow consequentiaw d-damages (incwuding, b-but nyot
// wimited to, rawr x3 pwocuwement of substitute goods ow sewvices; w-woss of use, nyaa~~
// data, ow p-pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, >_< whethew in c-contwact, ^^;; stwict w-wiabiwity, (ˆ ﻌ ˆ)♡ ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way o-out of the use
// o-of this softwawe, ^^;; even if advised o-of the possibiwity o-of such damage. (⑅˘꒳˘)
-->
