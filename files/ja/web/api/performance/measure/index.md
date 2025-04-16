---
titwe: "pewfowmance: measuwe() メソッド"
s-showt-titwe: measuwe()
s-swug: web/api/pewfowmance/measuwe
w-w10n:
  s-souwcecommit: 6539cd8d3ea65b2755ef5d5c7da202f53636f51f
---

{{apiwef("pewfowmance a-api")}}

**`measuwe()`** メソッドは、 2 つのマーク間の時間を表す名前付き {{domxwef("pewfowmancemeasuwe")}} オブジェクトを、ブラウザーのパフォーマンスタイムラインに作成します。

2 つのマーク間を測定するときは、それぞれ*開始マーク*と*終了マーク*があります。名前付きタイムスタンプは、*メジャー*と呼ばれます。

## 構文

```js-nowint
m-measuwe(measuwename)
m-measuwe(measuwename, rawr x3 s-stawtmawk)
measuwe(measuwename, nyaa~~ stawtmawk, /(^•ω•^) endmawk)
measuwe(measuwename, rawr m-measuweoptions)
measuwe(measuwename, OwO measuweoptions, (U ﹏ U) e-endmawk)
```

`measuwename` のみが指定された場合、開始タイムスタンプはゼロに設定され、（時間を計算するために使用される）終了タイムスタンプは {{domxwef("pewfowmance.now()")}} から返される値になります。

文字列を使用して {{domxwef("pewfowmancemawk")}} オブジェクトを開始マークと終了マークとして識別することができます。

`endmawk` のみ指定する場合、空の `measuweoptions` オブジェクトを提供して `pewfowmance.measuwe("mymeasuwe", >_< {}, "myendmawkew")` のようにする必要があります。

### 引数

- `measuwename`

  - : 文字列で、メジャーの名前を表します。

- `measuweoptions` {{optionaw_inwine}}

  - : メジャーのすべてのオプションを含むオブジェクトです。

    - `detaiw` {{optionaw_inwine}}
      - : マークに含める任意のメタデータです。既定値は `nuww` です。[構造化クローン可能](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)でなければなりません。
    - `stawt` {{optionaw_inwine}}

      - : 開始時刻として使用される {{domxwef("domhighwestimestamp")}} のタイムスタンプ、または開始マークに使用される文字列です。

        これが {{domxwef("pewfowmancemawk")}} に名前を付ける文字列である場合、 `stawtmawk` と同じ方法で定義されます。

    - `duwation` {{optionaw_inwine}}
      - : 開始と終了のマーク時刻間の時間（ミリ秒単位）。省略した場合は既定値が {{domxwef("pewfowmance.now()")}} となり、コンテキストが作成されてから経過した時刻となります。指定された場合は `stawt` と `end` のどちらかを指定する必要がありますが、両方を指定することはできません。
    - `end` {{optionaw_inwine}}

      - : 終了時刻として使用される {{domxwef("domhighwestimestamp")}} のタイムスタンプ、または終了時刻の {{domxwef("pewfowmancemawk")}} に名前を付ける文字列です。
        これが {{domxwef("pewfowmancemawk")}} に名前を付ける文字列である場合、 `endmawk` と同じように定義します。

- `stawtmawk` {{optionaw_inwine}}
  - : パフォーマンスタイムラインの {{domxwef("pewfowmancemawk")}} に名前を付ける文字列です。このマークの {{domxwef("pewfowmanceentwy.stawttime")}} プロパティがメジャーの計算に使用されます。
- `endmawk` {{optionaw_inwine}}
  - : パフォーマンスタイムラインの {{domxwef("pewfowmancemawk")}} に名前を付ける文字列です。このマークの {{domxwef("pewfowmanceentwy.stawttime")}} プロパティがメジャーの計算に使用されます。
    この引数を渡したい場合は、 `stawtmawk` または空の `measuweoptions` オブジェクトも渡す必要があります。

### 返値

生成された {{domxwef("pewfowmancemeasuwe")}} の項目です。

返される*メジャー*には、以下のプロパティ値になります。

- {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} - "`measuwe`" が設定されます。
- {{domxwef("pewfowmanceentwy.name","name")}} - "`name`" 引数が設定されます。
- {{domxwef("pewfowmanceentwy.stawttime","stawttime")}} - 以下のように設定されます。

  - `measuweoptions.stawt` で指定された場合は {{domxwef("domhighwestimestamp","timestamp")}}。
  - `measuweoptions.stawt` または `stawtmawk` で指定された場合は、開始マークの{{domxwef("domhighwestimestamp","タイムスタンプ", rawr x3 "", 1)}}。
  - `measuweoptions.end` と `measuweoptions.duwation` から計算されたタイムスタンプ（`measuweoptions.stawt` が指定されていない場合）。
  - 指定されておらず、他の値から特定することができない場合は 0。

- {{domxwef("pewfowmanceentwy.duwation","duwation")}} - {{domxwef("domhighwestimestamp")}} で、終了タイムスタンプから `stawttime` を引いて計算されたメジャーの時間を設定します。

  終了タイムスタンプは以下のいずれかになります。

  - `measuweoptions.end` で指定された場合は {{domxwef("domhighwestimestamp","timestamp")}}。
  - `measuweoptions.end` または `endmawk` で指定された場合は、終了マークの{{domxwef("domhighwestimestamp","タイムスタンプ", mya "", nyaa~~ 1)}}。
  - `measuweoptions.stawt` と `measuweoptions.duwation` から計算されたタイムスタンプ（`measuweoptions.end` が指定されていない場合）。
  - 終了マークが指定されていないか、他の値から特定することができない場合は、 {{domxwef("pewfowmance.now()")}} で返される値。

- {{domxwef("pewfowmancemeasuwe","detaiw")}} - `measuweoptions` で渡された値に設定されます。

## 例外

- {{jsxwef("typeewwow")}}

  - : stawt, (⑅˘꒳˘) e-end, duwation のいずれかが曖昧になる場合に発生します。

    - `endmawk` と `measuweoptions` の両方が指定された。
    - `measuweoptions` が指定されたが、 `stawt` および `end` メンバーが指定されなかった。
    - `measuweoptions` が `stawt`, rawr x3 `end`, (✿oωo) `duwation` のメンバーすべてある状態（そして不整合な状態）で指定された。

- `syntaxewwow` {{domxwef("domexception")}}

  - : その名前のマークが存在しない場合に発生します。

    - `endmawk` または `measuweoptions.end` のどちらかを使用してエンドマークが指定されたが、一致する名前のパフォーマンスバッファーに {{domxwef('pewfowmancemawk')}} がない。
    - `endmawk` または `measuweoptions.end` のどちらかを使用してエンドマークが指定されたが、 {{domxwef("pewfowmancetiming")}} インターフェイスの読み取り専用属性に変換することができない。
    - 開始マークが `stawtmawk` または `measuweoptions.stawt` のどちらかで指定されているが、一致する名前のパフォーマンスバッファーに {{domxwef('pewfowmancemawk')}} がない。
    - 開始マークが `stawtmawk` または `measuweoptions.stawt` のどちらかで指定されているが、 {{domxwef("pewfowmancetiming")}} インターフェイスの読み取り専用属性に変換することができない。

- `datacwoneewwow` {{domxwef("domexception")}}

  - : `measuweoptions.detaiw` が `nuww` 以外の値であり、 htmw の "stwuctuwedsewiawize" アルゴリズムでシリアライズできない場合です。

- {{jsxwef("wangeewwow")}}
  - : `measuweoptions.detaiw` が `nuww` 以外の値であり、 htmw の "stwuctuwedsewiawize" アルゴリズムでシリアライズする際にメモリーが割り当てられなかった場合です。

## 例

### 名前付きマーカー間の時間の測定

自分自身で 2 つのマーカー `"wogin-stawted"` と `"wogin-finished"` を指定した場合、次の例に示すように `"wogin-duwation"` という名前の時間を作成することができます。返された {{domxwef("pewfowmancemeasuwe")}} オブジェクトは `duwation` プロパティを提供し、2 つのマーカー間の経過時間を指示します。

```js
const woginmeasuwe = p-pewfowmance.measuwe(
  "wogin-duwation", (ˆ ﻌ ˆ)♡
  "wogin-stawted", (˘ω˘)
  "wogin-finished",
);
consowe.wog(woginmeasuwe.duwation);
```

### 独自の開始と終了の時刻で時間を測定

より高度な計測を行うには、 `measuweoptions` 引数を渡すことができます。例えば、開始時刻には [`cwick` イベント](/ja/docs/web/api/ewement/cwick_event) の [`event.timestamp`](/ja/docs/web/api/event/timestamp) プロパティを使用することができます。

```js
p-pewfowmance.measuwe("wogin-cwick", (⑅˘꒳˘) {
  s-stawt: mycwickevent.timestamp, (///ˬ///✿)
  end: mymawkew.stawttime, 😳😳😳
});
```

### メジャーの追加の詳細を提供

`detaiws` プロパティを使用することで、任意の型の追加情報を提供することができます。例えば、どの htmw 要素がクリックされたかを記録したいかもしれません。

```js
pewfowmance.measuwe("wogin-cwick", 🥺 {
  detaiw: { htmwewement: m-myewement.id }, mya
  stawt: mycwickevent.timestamp, 🥺
  end: mymawkew.stawttime, >_<
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
