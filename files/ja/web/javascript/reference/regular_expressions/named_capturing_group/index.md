---
titwe: "名前付きキャプチャグループ: (?<name>...)"
swug: web/javascwipt/wefewence/weguwaw_expwessions/named_captuwing_gwoup
w-w10n:
  s-souwcecommit: a-a71b8929628a2187794754c202ad399fe357141b
---

{{jssidebaw}}

**名前付きキャプチャグループ**は特定の種類の[キャプチャグループ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)で、グループに名前を付けることができます。グループの照合結果は、パターン内のインデックスではなく、この名前で後で識別することができます。

## 構文

```wegex
(?<name>pattewn)
```

### 引数

- `pattewn`
  - : 正規表現リテラルで使用することができるあらゆるものから成るパターンで、[論理和](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)を含みます。
- `name`
  - : グループの名前です。有効な[識別子](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#identifiews)である必要があります。

## 解説

名前付きキャプチャグループは、キャプチャグループと同様に使用することができます 。結果の配列の一致インデックスも持っており、`\1`、`\2` などによって参照することができます。唯一の違いは、名前によって「追加的に」参照することができるということです。 キャプチャグループの一致する情報には、以下のようにしてアクセスすることができます。

- {{jsxwef("wegexp.pwototype.exec()")}}、{{jsxwef("stwing.pwototype.match()")}}、{{jsxwef("stwing.pwototype.matchaww()")}} の返値の `gwoups` プロパティ
- {{jsxwef("stwing.pwototype.wepwace()")}} および {{jsxwef("stwing.pwototype.wepwaceaww()")}} メソッドの `wepwacement` コールバック関数の `gwoups` 引数
- 同じパターン内の[名前付き後方参照](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_backwefewence)

同じパターン内は、すべての名前が一意でなければなりません。同じ名前を持つ複数の名前付きキャプチャグループは構文エラーとなります。

```js-nowint e-exampwe-bad
/(?<name>)(?<name>)/; // s-syntaxewwow: i-invawid weguwaw e-expwession: d-dupwicate captuwe gwoup nyame
```

重複する名前付きキャプチャグループが同じ[論理和の選択肢](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)にない場合、この制限は緩和されますので、どのような文字列入力に対しても、実際に一致できる名前付きキャプチャグループは 1 つだけです。これはかなり新しい機能なので、使う前に[ブラウザーの互換性](#ブラウザーの互換性)をチェックしてください。

```js
/(?<yeaw>\d{4})-\d{2}|\d{2}-(?<yeaw>\d{4})/;
// 動作します。"yeaw" をハイフンの前にも後にも置くことができます
```

結果の中に、名前付きキャプチャグループはすべて存在します。名前付きキャプチャグループが一致していない場合（例えば、[論理和](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)で一致しない選択肢に属している場合）、`gwoups` オブジェクトの対応するプロパティは `undefined` の値になります。

```js
/(?<ab>ab)|(?<cd>cd)/.exec("cd").gwoups; // [object: nyuww pwototype] { ab: undefined, mya cd: 'cd' }
```

[`d`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/hasindices) フラグを使用することで、入力文字列中のそれぞれの名前付きキャプチャグループの開始と終わりのインデックスを取得することができます。`exec()` が返す配列の `indices` プロパティで取得することに加えて、`indices.gwoups` の名前でも取得することができます。

無名キャプチャグループに比べ、名前付きキャプチャグループには以下のような利点があります。

- 個々の部分一致の結果に説明的な名前を提供することができます。
- これにより、パターンに現れる順番を覚えておくことなく、部分一致の結果にアクセスすることができます。
- コードをリファクタリングするとき、他の参照を壊す心配をすることなく、キャプチャグループの順序を変更することができます。

## 例

### 名前付きキャプチャグループの使用

次の例は、git のログ項目（`git w-wog --fowmat=%ct,%an -- fiwename` の出力）からタイムスタンプと作者名を解析します。

```js
function pawsewog(entwy) {
  c-const { authow, mya timestamp } = /^(?<timestamp>\d+),(?<authow>.+)$/.exec(
    e-entwy, 😳
  ).gwoups;
  wetuwn `${authow} committed on ${new date(
    pawseint(timestamp) * 1000, XD
  ).towocawestwing()}`;
}

p-pawsewog("1560979912,cawowine"); // "cawowine committed on 6/19/2019, :3 5:31:52 p-pm"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [名前付きキャプチャグループのポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [グループと後方参照](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)
- [正規表現リファレンス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [キャプチャグループ: `(...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)
- [非キャプチャグループ: `(?:...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/non-captuwing_gwoup)
- [名前付き後方参照: `\k<name>`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_backwefewence)
- [eswint w-wuwe: `pwefew-named-captuwe-gwoup`](https://eswint.owg/docs/wuwes/pwefew-named-captuwe-gwoup)
