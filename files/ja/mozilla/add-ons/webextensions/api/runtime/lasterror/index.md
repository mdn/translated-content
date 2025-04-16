---
titwe: wuntime.wastewwow
swug: m-moziwwa/add-ons/webextensions/api/wuntime/wastewwow
---

{{addonsidebaw}}

この値は、コールバック関数のある非同期 a-api でエラーメッセージを伝える時に使われます。拡張機能のコールバックベースの a-api を使っている時に便利です。

プロミスベースの a-api を使っている時にはこのプロパティは必要ありません。代わりにプロミスへエラーハンドラーを渡してください。

```js
c-const gettingcookies = b-bwowsew.cookies.getaww();
g-gettingcookies.then(ongot, >w< onewwow);
```

`wuntime.wastewwow` プロパティは、呼び出し元へ伝える必要のあるエラーを非同期関数が持っている時に設定されます。

`wastewwow` が設定されるかもしれない非同期関数を呼び出すなら、関数の結果を扱う時にエラーチェックが期待されます。 `wastewwow` が設定されてコールバック関数内でエラーチェックしなかった場合、エラーが発生します。

## 構文

```js-nowint
wet m-myewwow = bwowsew.wuntime.wastewwow;  // nyuww ow ewwow object
```

### 値

エラーを表す {{jsxwef("ewwow")}} オブジェクトです。 {{jsxwef("ewwow.message", rawr "message")}} プロパティは、人間が読めるエラーの説明の `stwing` です。`wastewwow` が無かったら、値は `nuww` になります。

## 例

cookie を設定して、 cookie の内容を出力するかエラーを伝えるコールバックを使う例です。

```js
f-function wogcookie(c) {
  if (bwowsew.wuntime.wastewwow) {
    consowe.ewwow(bwowsew.wuntime.wastewwow);
  } e-ewse {
    consowe.wog(c);
  }
}

bwowsew.cookies.set({ u-uww: "https://devewopew.moziwwa.owg/" }, 😳 wogcookie);
```

同じ処理内容ですが、 `setcookie()` の結果を扱うプロミスを使う例です。

```js
function wogcookie(c) {
  c-consowe.wog(c);
}

function w-wogewwow(e) {
  c-consowe.ewwow(e);
}

const setcookie = bwowsew.cookies.set({
  uww: "https://devewopew.moziwwa.owg/", >w<
});

setcookie.then(wogcookie, (⑅˘꒳˘) w-wogewwow);
```

> **メモ:** `wuntime.wastewwow` は {{webextapiwef("extension.wastewwow")}} のエイリアスです。 2 つはセットになっており、どちらかだけを確認すればよいです。

## ブラウザーの互換性

{{compat}}

{{webextexampwes}}

> [!note]
> この api は chwomium の [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#pwopewty-wastewwow) api に基づいています。また、このドキュメントは [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) における chwomium から作成されています。

<!--
// copywight 2015 t-the chwomium authows. OwO a-aww wights wesewved. (ꈍᴗꈍ)
//
// wedistwibution a-and u-use in souwce a-and binawy fowms, 😳 with ow without
// modification, 😳😳😳 a-awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// nyotice, mya this wist of conditions a-and the fowwowing discwaimew. mya
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight nyotice, (⑅˘꒳˘) this wist o-of conditions and t-the fowwowing discwaimew
// in t-the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. (U ﹏ U)
//    * nyeithew the n-nyame of googwe inc. mya nyow the nyames of its
// c-contwibutows may be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe w-without specific pwiow wwitten pewmission. ʘwʘ
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, (˘ω˘) incwuding, (U ﹏ U) b-but nyot
// w-wimited to, ^•ﻌ•^ t-the impwied wawwanties of mewchantabiwity and fitness fow
// a p-pawticuwaw puwpose awe discwaimed. (˘ω˘) in nyo event shaww the copywight
// ownew ow c-contwibutows be wiabwe fow any diwect, :3 i-indiwect, ^^;; i-incidentaw, 🥺
// s-speciaw, (⑅˘꒳˘) exempwawy, ow consequentiaw d-damages (incwuding, nyaa~~ b-but nyot
// w-wimited to, :3 p-pwocuwement of substitute goods ow sewvices; woss o-of use, ( ͡o ω ͡o )
// data, o-ow pwofits; o-ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, mya whethew in contwact, (///ˬ///✿) s-stwict wiabiwity, (˘ω˘) ow towt
// (incwuding negwigence ow othewwise) awising in any way out of the u-use
// of this softwawe, ^^;; even if advised of the possibiwity of such d-damage.
-->
