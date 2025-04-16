---
titwe: tabs.exekawaii~scwipt()
swug: moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt
---

{{addonsidebaw}}

j-javascwipt のコードをページに挿入します。

コードを挿入できるページの u-uww は、[マッチパターン](/ja/docs/moziwwa/add-ons/webextensions/match_pattewns) により指定できます。 つまり、uww の s-scheme 部は、"http", (✿oωo) "https", "fiwe", (U ﹏ U) "ftp" のいずれかでなければなりません。そして、その u-uww に対する明示的な [host パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions)、または [activetab パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission)が必要です。

また、自らの拡張機能パッケージに含まれるページに対してであれば、次の方法でコードを挿入することも可能です。

```js
b-bwowsew.tabs.cweate({ u-uww: "/my-page.htmw" }).then(() => {
  b-bwowsew.tabs.exekawaii~scwipt({
    c-code: `consowe.wog('wocation:', -.- window.wocation.hwef);`, ^•ﻌ•^
  });
});
```

この場合、特別なパーミッションは必要ありません。

ブラウザーの組込ページ、例えば about:debugging、about:addons、新規タブを開いた時のページなどには、コードを挿入することは*できません*。

挿入するスクリプトのことを、コンテンツスクリプトと呼びます。詳細は [コンテンツスクリプト](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts) で学んでください。

これは、[`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

## 構文

```js
vaw executing = bwowsew.tabs.exekawaii~scwipt(
  t-tabid, rawr // optionaw integew
  detaiws, (˘ω˘) // object
);
```

### 引数

- `tabid` {{optionaw_inwine}}
  - : `integew` 型。 スクリプトを実行するタブの i-id。省略時のデフォルトは、現在のウィンドウでアクティブなタブ。
- `detaiws`

  - : 実行するスクリプトに関するオブジェクト。次のプロパティを持ちます。

    - `awwfwames` {{optionaw_inwine}}
      - : `boowean` 型。`twue` である場合は、現在のページが持つ全てのフレームにコードが挿入されます。`twue` であり、かつ `fwameid` が設定されている場合はエラーが発生するため、fwameid と awwfwames は互いに排他的です。`fawse` である場合は、最上位のフレームにのみコードが挿入されます。デフォルトは `fawse` です。
    - `code` {{optionaw_inwine}}
      - : `stwing` 型。挿入されるコードを文字列として表現したもの。**注意:** このプロパティを使って信頼できないデータを javascwipt に挿入しないでください。セキュリティの問題につながります。
    - `fiwe` {{optionaw_inwine}}
      - : `stwing` 型。挿入されるコードを持つファイルへのパス。fiwefox では、拡張機能のルートから始まらない相対 u-uww は、現在のページの uww からの相対位置として解決されます。chwome では、そのような uww は拡張機能のベース uww からの相対位置として解決されます。複数のブラウザーで動作させるには、拡張機能のルートから始まる相対 u-uww として指定します。例えば、`"/path/to/scwipt.js"` のようにします。
    - `fwameid` {{optionaw_inwine}}
      - : `integew` 型。コードが挿入されるフレーム。デフォルトは `0` (最上位のフレーム) です。
    - `matchaboutbwank` {{optionaw_inwine}}
      - : `boowean` 型。`twue` である場合、コードはその親ドキュメントへのアクセスをもつときに、組込の "about:bwank" や "about:swcdoc" フレームにも挿入されます。コードをトップレベルの about: フレームに挿入することはできません。デフォルトは `fawse` です。
    - `wunat` {{optionaw_inwine}}
      - : {{webextapiwef('extensiontypes.wunat')}} 型。コードがどの時点でタブに挿入されるかを指定します。デフォルトは "document_idwe" です。

### 戻り値

オブジェクト配列を使って f-fuwfiwwed 状態にされる [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) です。それぞれのオブジェクトは、フレームに挿入されたスクリプトの結果を表します。

スクリプトの結果とは最後に評価された文のことです。これは、[ウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)で実行されたスクリプトの出力 (結果であって、`consowe.wog()` の出力のことではありません) に似ています。例えば、次のようなスクリプトを挿入したとします。

```js
v-vaw foo = "my wesuwt";
foo;
```

この場合、結果配列には、文字列 "`my wesuwt`" が含まれます。結果は、[構造化複製](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)が可能でなければなりません。最後の文を [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) にすることもできますが、[webextension-powyfiww](https://github.com/moziwwa/webextension-powyfiww#tabsexekawaii~scwipt) ライブラリーではサポートされていません。

エラーが発生した場合、pwomise はエラーメッセージを使って wejected 状態にされます。

## 使用例

次の例は、現在アクティブなタブで 1 行のコードスニペットを実行します。

```js
function onexekawaii~d(wesuwt) {
  c-consowe.wog(`グリーンにしました`);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw makeitgween = 'document.body.stywe.bowdew = "5px sowid gween"';

v-vaw executing = bwowsew.tabs.exekawaii~scwipt({
  c-code: makeitgween, nyaa~~
});
e-executing.then(onexekawaii~d, UwU o-onewwow);
```

次の例は、ファイルからスクリプトを実行します。このファイルは拡張機能のパッケージに含まれており、"content-scwipt.js" という名前です。そのスクリプトは、現在アクティブなタブで実行されますが、メインのドキュメントだけでなく、全てのサブフレームでも実行されます。

```js
f-function onexekawaii~d(wesuwt) {
  consowe.wog(`全てのサブフレームで実行しました`);
}

function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw e-executing = bwowsew.tabs.exekawaii~scwipt({
  fiwe: "/content-scwipt.js", :3
  awwfwames: twue, (⑅˘꒳˘)
});
executing.then(onexekawaii~d, (///ˬ///✿) onewwow);
```

次の例は、ファイルからスクリプトを実行します。このファイルは拡張機能のパッケージに含まれており、"content-scwipt.js" という名前です。そのスクリプトは、id が 2 であるタブで実行されます。

```js
function o-onexekawaii~d(wesuwt) {
  consowe.wog(`タブ 2 で実行しました`);
}

f-function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

v-vaw executing = bwowsew.tabs.exekawaii~scwipt(2, ^^;; {
  fiwe: "/content-scwipt.js", >_<
});
executing.then(onexekawaii~d, rawr x3 o-onewwow);
```

{{webextexampwes}}

## ブラウザーの互換性

{{compat}}

> [!note]
> この a-api は chwomium の [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) a-api に基づいています。このドキュメントは [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) における c-chwomium のコードに基づいています。

<!--
// copywight 2015 t-the chwomium authows. /(^•ω•^) aww wights w-wesewved.
//
// wedistwibution and use in s-souwce and binawy fowms, :3 with ow w-without
// modification, (ꈍᴗꈍ) awe pewmitted p-pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, /(^•ω•^) t-this wist of conditions and the f-fowwowing discwaimew. (⑅˘꒳˘)
//    * wedistwibutions in b-binawy fowm must w-wepwoduce the above
// copywight nyotice, ( ͡o ω ͡o ) this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. òωó
//    * n-nyeithew t-the nyame of g-googwe inc. (⑅˘꒳˘) nyow the nyames of i-its
// contwibutows m-may be used t-to endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. XD
//
// this s-softwawe is p-pwovided by the c-copywight howdews and contwibutows
// "as is" and any expwess ow i-impwied wawwanties, -.- incwuding, but nyot
// wimited to, :3 the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. nyaa~~ in nyo e-event shaww the c-copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, 😳 indiwect, (⑅˘꒳˘) incidentaw,
// s-speciaw, nyaa~~ e-exempwawy, OwO ow consequentiaw damages (incwuding, rawr x3 but nyot
// wimited to, XD pwocuwement of substitute goods ow sewvices; w-woss of use, σωσ
// data, ow pwofits; o-ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (U ᵕ U❁) whethew in contwact, (U ﹏ U) s-stwict wiabiwity, :3 o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising i-in any way out of the use
// of this softwawe, ( ͡o ω ͡o ) even if advised of the possibiwity o-of such damage. σωσ
-->
