---
title: RegExp.$1, …, RegExp.$9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}} {{deprecated_header}}

> **メモ:** グローバルに最後の一致状態を公開する `RegExp` の静的プロパティは、すべて非推奨です。詳しくは[非推奨の RegExp 機能](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)を参照してください。

**`RegExp.$1, …, RegExp.$9`** は静的アクセサープロパティで、括弧で括られた部分文字列に一致したものを返します。

## 解説

`$1`–`$9` は {{jsxref("RegExp")}} の静的プロパティであり、常に `RegExp.$1`, `RegExp.$2`, のように扱います。作成した `RegExp` オブジェクトのプロパティとしては使用できません。

`$1, …, $9` の値は `RegExp` の（ただし `RegExp` のサブクラスではない）インスタンスが一致に成功するたびに更新されます。一致したものがなかったか、最後に一致したものに対応するキャプチャグループがなかった場合、それぞれのプロパティは空文字列になります。それぞれのプロパティの設定アクセサーは `undefined` ですので、直接プロパティを変更することはできません。

括弧で括られた部分文字列の数に制限はありませんが、 `RegExp` オブジェクトは最初の 9 つの部分文字列しか保持できません。返された配列のインデックスを使用すると、すべての括弧付き部分文字列にアクセスすることができます。

`$1, …, $9` は {{jsxref("String.prototype.replace()")}} メソッドの置換テキストでも使用することができますが、古い `RegExp.$n` には関係しません。

## 例

### $n と RegExp.prototype.test() の使用

次のスクリプトは、{{jsxref("RegExp")}} インスタンスの {{jsxref("RegExp.prototype.test()", "test()")}} メソッドを使用して、一般的な文字列で数値を取得しています。

```js
const str = "Test 24";
const number = /(\d+)/.test(str) ? RegExp.$1 : "0";
number; // "24"
```

`re.test(str)` 呼び出しと `RegExp.$n` プロパティの間で他の正規表現を使用する操作は、副作用がある可能性があることに注意してください。そのため、これらの特殊なプロパティへのアクセスは即座に行うべきで、そうしないと予期せぬ結果になる可能性があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
