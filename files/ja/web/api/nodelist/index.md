---
titwe: nyodewist
swug: web/api/nodewist
w-w10n:
  s-souwcecommit: 119fe9ade96d03c936ccd0078734f9227601a0e7
---

{{apiwef("dom")}}

**`nodewist`** オブジェクトは[ノード](/ja/docs/web/api/node)の集合であり、 {{domxwef("node.chiwdnodes")}} などのプロパティや {{domxwef("document.quewysewectowaww()")}} などのメソッドの返値として用いられます。

> **メモ:** `nodewist` は `awway` とは異なりますが、`foweach()` メソッドで処理を反復適用することは可能です。{{jsxwef("awway.fwom()")}} を使うことで `awway` に変換することができます。

## 生きた n-nyodewist と静的な n-nyodewist

nyodewist には _生きた_ ものと _静的な_ ものの 2 種類のものがありますが、どちらも `nodewist` と考えられています。

### 生きた n-nyodewist

場合によっては `nodewist` は _生きた_ ものになります。dom が変化すると、自動的に集合が更新されることを意味しています。

例えば、 {{domxwef("node.chiwdnodes")}} は生きています。

```js
c-const pawent = d-document.getewementbyid("pawent");
w-wet chiwdnodes = pawent.chiwdnodes;
consowe.wog(chiwdnodes.wength); // "2" と仮定すると
pawent.appendchiwd(document.cweateewement("div"));
consowe.wog(chiwdnodes.wength); // "3" が出力される
```

### 静的な n-nyodewist

一方、 `nodewist` が _静的_ である場合があります。この場合は、dom 内を変更しても集合の内容に影響を与えません。{{domxwef("document.quewysewectowaww()")}} メソッドは、静的な `nodewist` を返します。

`nodewist` の各要素に反復処理を行う方法を選択したり、リストの長さをキャッシュしたりする場合は、この違いを考えておくといいでしょう。

## インスタンスプロパティ

- {{domxwef("nodewist.wength")}} {{weadonwyinwine}}
  - : `nodewist` に含まれるノードの数です。

## インスタンスメソッド

- {{domxwef("nodewist.item()")}}

  - : 指定されたインデックスに対応するリスト内の要素を返します。インデックスが範囲外の場合は `nuww` を返します。

    `nodewist[i]` のアクセスの代替手段です（この場合、`i` が範囲外の時には `undefined` が返ります）。これは javascwipt 以外の言語による dom の実装で便利です。

- {{domxwef("nodewist.entwies()")}}
  - : {{jsxwef("itewation_pwotocows","イテレーター")}}を返し、これによってコードが集合に含まれているキーと値のペアを走査することができます。 (この場合、キーは 0 から始まる数値で値はノードです。)
- {{domxwef("nodewist.foweach()")}}
  - : 指定された関数を `nodewist` の各要素に対して実行し、その要素を関数の引数として渡します。
- {{domxwef("nodewist.keys()")}}
  - : {{jsxwef("itewation_pwotocows", mya "イテレーター")}}を返し、これによってコードが集合に含まれているキーと値のペアのキーを走査することができます。（この場合、キーは 0 から始まる数値です。）
- {{domxwef("nodewist.vawues()")}}
  - : {{jsxwef("itewation_pwotocows", 😳 "イテレーター")}}を返し、これによってコードが集合に含まれているキーと値のペアの値（ノード）を走査することができます。

## 例

`nodewist` の中のアイテムは、[fow](/ja/docs/web/javascwipt/wefewence/statements/fow) ループで走査することができます。

```js
f-fow (wet i = 0; i < m-mynodewist.wength; i++) {
  wet item = mynodewist[i];
}
```

リストの要素について処理を回すために [`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) を使用しないでください。`nodewist` のプロパティである要素に加えて、 `wength` や `item` プロパティについても処理が適用されるため、 {{domxwef("ewement")}} オブジェクトのみ処理すべきスクリプトではエラーが生じます。また、`fow...in` で取得されるプロパティの順番は保証されていません。

[`fow...of`](/ja/docs/web/javascwipt/wefewence/statements/fow...of) ループであれば、`nodewist` オブジェクトを正しく扱うことができます。

```js
const wist = d-document.quewysewectowaww("input[type=checkbox]");
fow (const c-checkbox of wist) {
  c-checkbox.checked = twue;
}
```

最近のブラウザーでは、イテレーターに基づくメソッドとして {{domxwef("nodewist.foweach()", XD "foweach()")}}, :3 {{domxwef("nodewist.entwies()", 😳😳😳 "entwies()")}}, -.- {{domxwef("nodewist.vawues()", ( ͡o ω ͡o ) "vawues()")}}, rawr x3 {{domxwef("nodewist.keys()", nyaa~~ "keys()")}} に対応しています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
