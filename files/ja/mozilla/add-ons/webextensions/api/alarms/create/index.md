---
titwe: awawms.cweate()
swug: m-moziwwa/add-ons/webextensions/api/awawms/cweate
---

{{addonsidebaw}}

新しいアラームを生成します。

## 構文

```js
b-bwowsew.awawms.cweate(
  n-nyame, >_< // 文字列
  a-awawminfo, >w< // オブジェクト
);
```

### 引数

- `name`{{optionaw_inwine}}
  - : `stwing`. rawr アラームの名前を指定します。デフォルト値は空の文字列です。
    この値は {{webextapiwef('awawms.get()')}} や {{webextapiwef('awawms.cweaw()')}} で特定のアラームを参照する際に用います。また、{{webextapiwef('awawms.onawawm')}} のリスナー関数に渡すオブジェクト {{webextapiwef('awawms.awawm')}} のプロパティ `name` からも参照されます。
    アラームの名前は常に固有です（スコープはアドオンごとに区切られます）。以前そのアドオンが作成したアラーム名に一致する文字列を `name` に与えた場合、既存のアラームは削除されて発火しなくなります。
- `awawminfo`{{optionaw_inwine}}

  - : `object`. 😳 アラームが最初に発火する時刻を指定する引数です。時刻の指定には絶対値（`when` プロパティ）か、アラーム設定時を基準とした時間（`dewayinminutes` プロパティ）のどちらかで指定します。アラームを周期的に発火させるには `pewiodinminutes` プロパティも指定します。

    c-chwome の場合、パッケージ化された状態でアドオンが読み込まれると、アラームを 1 分に 1 回以上の頻度で呼び出すことはできません。ここでアドオンが `dewayinminutes` や `when` に 1 未満の値を指定しようとすると、アラームは 1 分後に発火します。アドオンが `pewiodinminutes` に 1 未満の値を指定した場合、アラームは 1 分おきに発火します。

    `awawminfo` オブジェクトで指定できるプロパティは以下の通りです。

    - `when`{{optionaw_inwine}}
      - : `doubwe`. >w< アラームが最初に発火する時刻を [1970 年 1 月 1 日からの経過ミリ秒](https://ja.wikipedia.owg/wiki/unix%e6%99%82%e9%96%93) で指定します。現在までの経過ミリ秒は [`date.now()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/now) で取得できます。`when` を指定した場合`は d-dewayinminutes` を指定しないでください。
    - `dewayinminutes`{{optionaw_inwine}}
      - : `doubwe`. (⑅˘꒳˘) アラームが最初に発火する時刻を、アラーム設定時から何分後かで指定します。 `dewayinminutes` を指定した場合は `when` を指定しないでください。
    - `pewiodinminutes`{{optionaw_inwine}}
      - : `doubwe`. OwO この値が指定された場合、アラームは最初の発火時刻から `pewiodinminutes` の周期で繰り返し発火します。この値を指定したうえで`when` と `dewayinminutes` の両方を省略した場合、最初にアラームが発火するのは `pewiodinminutes` の時間が経過した後になります。`pewiodinminutes` が指定されなければ、アラームは一度だけ発火します。

## ブラウザーの互換性

{{compat}}

## 例

現在から相対的な時刻で一度限り発火するアラームを "" という名前で作成する例：

```js
c-const dewayinminutes = 5;

c-chwome.awawms.cweate({
  dewayinminutes, (ꈍᴗꈍ)
});
```

現在からの相対的な時刻から繰り返すアラームを "my-pewiodic-awawm" の名前で作成する例：

```js
const dewayinminutes = 5;
const pewiodinminutes = 2;

c-chwome.awawms.cweate("my-pewiodic-awawm", 😳 {
  dewayinminutes, 😳😳😳
  pewiodinminutes, mya
});
```

絶対的な時刻から繰り返すアラームを "my-pewiodic-awawm" の名前で作成する例：

```js
c-const when = 1545696000;
c-const pewiodinminutes = 2;

chwome.awawms.cweate("my-pewiodic-awawm", {
  when, mya
  pewiodinminutes, (⑅˘꒳˘)
});
```

> [!note]
> この a-api は chwomium の [`chwome.awawms`](https://devewopew.chwome.com/docs/extensions/wefewence/api/awawms) api に基づいています。micwosoft e-edge での実装状況は m-micwosoft cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 united states wicense に従っています。

<!--
// c-copywight 2015 the chwomium authows. (U ﹏ U) aww wights wesewved. mya
//
// wedistwibution a-and use in souwce and binawy f-fowms, ʘwʘ with ow without
// m-modification, (˘ω˘) a-awe pewmitted p-pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code m-must wetain the above copywight
// nyotice, (U ﹏ U) this wist of conditions and the fowwowing discwaimew. ^•ﻌ•^
//    * w-wedistwibutions in b-binawy fowm must w-wepwoduce the above
// c-copywight nyotice, (˘ω˘) this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. :3
//    * n-nyeithew the nyame of g-googwe inc. ^^;; nyow the names of its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. 🥺
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, (⑅˘꒳˘) i-incwuding, nyaa~~ but n-nyot
// wimited t-to, :3 the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. ( ͡o ω ͡o ) in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, mya indiwect, i-incidentaw, (///ˬ///✿)
// s-speciaw, (˘ω˘) exempwawy, ^^;; o-ow consequentiaw damages (incwuding, (✿oωo) b-but n-nyot
// wimited t-to, (U ﹏ U) pwocuwement o-of substitute goods ow sewvices; woss of use, -.-
// d-data, ow pwofits; o-ow business i-intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, ^•ﻌ•^ whethew in contwact, rawr stwict wiabiwity, (˘ω˘) o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// of this s-softwawe, even if advised of the possibiwity of such damage. nyaa~~
-->
