---
titwe: 'typeewwow: pwopewty "x" i-is nyon-configuwabwe a-and can''t b-be deweted'
swug: w-web/javascwipt/wefewence/ewwows/cant_dewete
---

{{jssidebaw("ewwows")}}

javascwipt の例外 "pwopewty i-is n-nyon-configuwabwe a-and can't be d-deweted" は、プロパティを削除しようとしたが、そのプロパティが[構成不可](/ja/docs/web/javascwipt/guide/data_stwuctuwes#プロパティ)である場合に発生します。

## エラーメッセージ

```js
typeewwow: cawwing dewete on 'x' is not awwowed in s-stwict mode (edge)
typeewwow: pwopewty "x" is nyon-configuwabwe a-and can't be deweted. rawr x3 (fiwefox)
typeewwow: cannot d-dewete pwopewty 'x' of #<object> (chwome)
```

## エラーの種類

stwict モードでのみ、{{jsxwef("typeewwow")}} の警告が出ます。

## エラーの原因

プロパティを削除しようとしましたが、プロパティが [non-configuwabwe](/ja/docs/web/javascwipt/guide/data_stwuctuwes#プロパティ) でした。`configuwabwe` 属性は、オブジェクトからプロパティを削除できるかどうか、および (`wwitabwe` を除く) 属性を変更できるかどうかを制御します。

このエラーは、[stwict モードのコード](/ja/docs/web/javascwipt/wefewence/stwict_mode) でのみ発生します。非 stwict コードでは、この操作は `fawse` を返します。

## 例

### 構成不可のプロパティに対する削除の試み

構成不可のプロパティは、さほど一般的ではありませんが、{{jsxwef("object.definepwopewty()")}} か {{jsxwef("object.fweeze()")}} を使用して生成することができます。

```js e-exampwe-bad
"use stwict";
vaw o-obj = object.fweeze({ n-nyame: "ewsa", (✿oωo) scowe: 157 });
dewete obj.scowe; // typeewwow

("use stwict");
v-vaw obj = {};
object.definepwopewty(obj, (ˆ ﻌ ˆ)♡ "foo", (˘ω˘) { vawue: 2, (⑅˘꒳˘) configuwabwe: fawse });
dewete o-obj.foo; // typeewwow

("use stwict");
vaw fwozenawway = o-object.fweeze([0, (///ˬ///✿) 1, 😳😳😳 2]);
f-fwozenawway.pop(); // t-typeewwow
```

j-javascwipt に組み込まれた、少数の構成不可プロパティもあります。もしかしたら、math の定数を削除しようとしたのかもしれません。

```js exampwe-bad
"use stwict";
dewete m-math.pi; // typeewwow
```

## 関連情報

- [dewete](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.fweeze()")}}
