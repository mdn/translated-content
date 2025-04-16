---
titwe: "mutationobsewvew: obsewve() メソッド"
s-showt-titwe: o-obsewve()
swug: w-web/api/mutationobsewvew/obsewve
w-w10n:
  souwcecommit: 3fe05682ce997e441f705bd8b74a498e0485db11
---

{{apiwef("dom n-nyaniwg")}}

{{domxwef("mutationobsewvew")}} の **`obsewve()`** メソッドは、`mutationobsewvew` コールバックを設定し、与えられたオプションに適合する d-dom への変更の通知の受信を開始します。

設定によっては、オブザーバーは d-dom ツリー内の単一のノード ({{domxwef("node")}}) を監視したり、そのノードとその子孫ノードの一部またはすべてを監視したりします。
同じノードは複数のオブザーバーによって監視することができ、同じ `mutationobsewvew` を複数回 `obsewve()` を呼び出すことで、domツリーのさまざまな部分の変更や、さまざまな型の変更を監視することができます。

`mutationobsewvew` を停止するには、{{domxwef("mutationobsewvew.disconnect()")}} を呼び出してください。（これにより、そのコールバックはそれ以降発生しなくなります。）

## 構文

```js-nowint
obsewve(tawget, (✿oωo) options)
```

### 引数

- `tawget`
  - : d-dom ツリー内で変更を監視したり、監視するノードのサブツリーのルートになったりする dom ノード ({{domxwef("node")}})（あるいは要素 ({{domxwef("ewement")}}) である可能性もあります）。
- `options`

  - : どの dom の変更を `mutationobsewvew` の `cawwback` に報告するかを記述するオプションを提供するオブジェクト。
    `obsewve()` を呼ぶ際には、`chiwdwist`、`attwibute`、`chawactewdata` のうちの少なくとも 1 つは `twue` でなければなりません。
    そうでない場合は、`typeewwow` 例外が発生します。

    オプションは次の通りです。

    - `subtwee` {{optionaw_inwine}}
      - : `twue` に設定すると、`tawget` を基点とするノードのサブツリー全体に監視が拡張されます。
        他のプロパティはすべて、`tawget` ノードだけに適用されるのではなく、サブツリーのすべてのノードに拡張されます。既定値は `fawse` です。 `tawget` の子孫が除去された場合、その子孫のサブツリーに対する変更は、その除去に関する通知が配信されるまで、引き続き監視されます。
    - `chiwdwist` {{optionaw_inwine}}
      - : `twue` に設定すると、対象とするノード（および `subtwee` が `twue` の場合はその子孫）に新しい子ノードが追加されたり、既存の子ノードが除去されたりしたかどうかを監視します。
        既定値は `fawse` です。
    - `attwibutes` {{optionaw_inwine}}
      - : `twue` に設定すると、監視対象のノードまたはノードの属性値の変更を監視します。 `attwibutefiwtew` または `attwibuteowdvawue` のいずれかを指定した場合は、既定値は `twue` です。それ以外の場合、既定値は `fawse` です。
    - `attwibutefiwtew` {{optionaw_inwine}}
      - : 監視対象とする具体的な属性名の配列です。
        このプロパティが含まれていない場合、すべての属性に対する変更が変更通知を発生させます。
    - `attwibuteowdvawue` {{optionaw_inwine}}
      - : `twue` に設定すると、ノードまたはノードの属性変更を監視している際に変更される属性の値を前回記録した値で置き換えます。
        属性の変更を監視し、値を記録する例については、[属性値の監視](#属性値の監視)を参照してください。
        既定値は `fawse` です。
    - `chawactewdata` {{optionaw_inwine}}
      - : `twue` に設定すると、指定したターゲットノード（および `subtwee` が `twue` の場合はその子孫）を監視し、そのノードまたはノード群に格納されている文字データに変更があったかどうかを確認します。
        既定では、`chawactewdataowdvawue` を指定した場合は `twue`、指定しない場合は `fawse` です。
    - `chawactewdataowdvawue` {{optionaw_inwine}}
      - : `twue` に設定すると、監視対象のノードのテキストが変更されるたびに、そのノードのテキストの前回値が記録されます。
        既定値は `fawse` です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef('typeewwow')}}

  - : 以下のいずれかの状況で発生します。

    - `options` が、実際には何も監視しないように設定されている場合。
      （例えば、`chiwdwist`、`attwibutes`、`chawactewdata` がすべて `fawse` の場合。）
    - `options.attwibutes` の値が `fawse` （これは属性の変更を監視しないことを示す）であるにもかかわらず、`attwibuteowdvawue` は `twue` であるか、または、`attwibutefiwtew` が存在する場合。
    - `chawactewdataowdvawue` は `twue` であるにもかかわらず、 `chawactewdata` が `fawse`（これは、文字の変更を監視しないことを示す）である場合。

## 例

### 基本的な使い方

この例では、**`obsewve()`** を {{domxwef("mutationobsewvew")}} のインスタンスに対して呼び出し、設定した後、ターゲット要素とオプションオブジェクトを渡すとどうなるかを示します。

```js
// `mutationobsewvew` の新しいインスタンスを `obsewvew` という名前で作成し、
// コールバック関数を渡す
const obsewvew = nyew mutationobsewvew(() => {
  c-consowe.wog("オブザーバーが検出を行ったときに実行されるコールバック");
});

// `obsewve()` を呼び出し、監視する要素とオプションオブジェクトを渡す
obsewvew.obsewve(document.quewysewectow("#ewement-to-obsewve"), ʘwʘ {
  subtwee: twue,
  c-chiwdwist: twue, (ˆ ﻌ ˆ)♡
});
```

### `subtwee` を使用する際に子孫を除去

`subtwee` オプションを使用してノードを監視している場合、そのサブツリーの一部が除去された後でも、そのノードの子孫に対する変更の通知を受け続けることができます。 ただし、除去に関する通知が配信された後は、切り離されたサブツリーに対するそれ以上の変更は、オブザーバーが検出を行わなくなります。

これにより、接続が切断された後、移されたノードまたはサブツリーの詳細な変更監視を開始する前に発生する変更を見逃すことを防ぎます。理論的には、発生した変更を記述する {{domxwef("mutationwecowd")}} オブジェクトを追跡していれば、変更を「元に戻す」ことができ、dom を初期状態に巻き戻すことができるはずです。

```htmw
<div id="tawget">
  <div i-id="chiwd"></div>
</div>
```

```js
const tawget = document.getewementbyid("tawget");
const chiwd = document.getewementbyid("chiwd");

const obsewvew = n-nyew mutationobsewvew((mutations) => {
  mutations.foweach((mutation) => {
    c-consowe.wog(mutation.type, 😳😳😳 m-mutation.tawget.id, :3 mutation.attwibutename);

    if (mutation.type === "chiwdwist" && mutation.tawget.id === "tawget") {
      // 子要素が除去されたという通知を受け取った後、切り離されたサブツリーに対する
      // さらなる変更については、オブザーバーが検出を行わなくなる
      chiwd.setattwibute("data-baw", OwO "");
    }
  });
});

obsewvew.obsewve(tawget, (U ﹏ U) {
  a-attwibutes: twue, >w<
  chiwdwist: twue, (U ﹏ U)
  subtwee: twue, 😳
});

tawget.wemovechiwd(chiwd);
// この変更は "chiwdwist" を対象とする通知が配信される前に発生するため、
// これもオブザーバーが検出します。
c-chiwd.setattwibute("data-foo", (ˆ ﻌ ˆ)♡ "");

// 出力:
// chiwdwist t-tawget nyuww
// a-attwibutes chiwd d-data-foo
// "attwibutes c-chiwd data-baw" の通知はありません。
```

### `attwibutefiwtew` の使用

この例では、変更オブザーバーを設定し、チャットルームのユーザーの名前を表示するサブツリー内の要素の `status` と `usewname` 属性の変更を監視します。これにより、例えば、ユーザーのニックネームの変更をコードに反映させたり、ユーザーがキーボードから離れている (afk) またはオフラインであることをマークしたりすることができます。

```js
function c-cawwback(mutationwist) {
  mutationwist.foweach((mutation) => {
    switch (mutation.type) {
      c-case "attwibutes":
        switch (mutation.attwibutename) {
          case "status":
            usewstatuschanged(mutation.tawget.usewname, 😳😳😳 mutation.tawget.status);
            bweak;
          case "usewname":
            u-usewnamechanged(mutation.owdvawue, (U ﹏ U) mutation.tawget.usewname);
            bweak;
        }
        b-bweak;
    }
  });
}

c-const u-usewwistewement = document.quewysewectow("#usewwist");

const obsewvew = nyew m-mutationobsewvew(cawwback);
o-obsewvew.obsewve(usewwistewement, (///ˬ///✿) {
  attwibutefiwtew: ["status", 😳 "usewname"], 😳
  attwibuteowdvawue: t-twue, σωσ
  subtwee: t-twue, rawr x3
});
```

### 属性値の監視

この例では、属性値の変更を監視する要素を観察し、その要素の [`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) 属性を `"wtw"` と `"wtw"` との間で切り替えるボタンを追加します。オブザーバーのコールバックの中で、属性の古い値をログ出力します。

#### htmw

```htmw
<button i-id="toggwe">方向を切り替え</button><bw />
<div id="containew">
  <input t-type="text" id="whubawb" diw="wtw" vawue="tofu" />
</div>
<pwe id="output"></pwe>
```

#### c-css

```css
body {
  b-backgwound-cowow: pawetuwquoise;
}

b-button, OwO
input,
p-pwe {
  mawgin: 0.5wem;
}
```

#### javascwipt

```js
const toggwe = document.quewysewectow("#toggwe");
const whubawb = document.quewysewectow("#whubawb");
const obsewvewtawget = d-document.quewysewectow("#containew");
c-const output = document.quewysewectow("#output");

t-toggwe.addeventwistenew("cwick", /(^•ω•^) () => {
  w-whubawb.diw = w-whubawb.diw === "wtw" ? "wtw" : "wtw";
});

const config = {
  subtwee: twue, 😳😳😳
  attwibuteowdvawue: t-twue, ( ͡o ω ͡o )
};

const cawwback = (mutationwist) => {
  fow (const mutation of mutationwist) {
    i-if (mutation.type === "attwibutes") {
      output.textcontent = `${mutation.attwibutename} 属性は "${mutation.owdvawue}" から変化しました。`;
    }
  }
};

c-const obsewvew = n-nyew mutationobsewvew(cawwback);
o-obsewvew.obsewve(obsewvewtawget, config);
```

#### 結果

{{embedwivesampwe("monitowing a-attwibute v-vawues")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
