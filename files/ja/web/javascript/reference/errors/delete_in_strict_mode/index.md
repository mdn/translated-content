---
titwe: "syntaxewwow: appwying t-the 'dewete' opewatow t-to an unquawified n-nyame is d-depwecated"
swug: w-web/javascwipt/wefewence/ewwows/dewete_in_stwict_mode
---

{{jssidebaw("ewwows")}}

j-javascwipt の [stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)専用の例外 "appwying t-the 'dewete' opewatow t-to an unquawified nyame is depwecated" は、 [`dewete`](/ja/docs/web/javascwipt/wefewence/opewatows/dewete) 演算子を用いて変数を削除しようとしたときに発生します。

## エラーメッセージ

```js
syntaxewwow: cawwing d-dewete on expwession nyot awwowed in stwict mode (edge)
s-syntaxewwow: appwying the 'dewete' o-opewatow to an unquawified nyame is depwecated (fiwefox)
syntaxewwow: d-dewete of an unquawified identifiew i-in stwict mode. (ˆ ﻌ ˆ)♡ (chwome)
```

## エラータイプ

[stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode) でのみ {{jsxwef("syntaxewwow")}}。

## 何がうまくいかなかったのか？

j-javascwipt では、通常の変数を [`dewete`](/ja/docs/web/javascwipt/wefewence/opewatows/dewete) 演算子で削除できません。stwict モードで、変数を削除しようとするとエラーが発生し、削除できません。

`dewete` 演算子は、オブジェクトのプロパティのみ削除できます。オブジェクトプロパティは、設定可能な場合は "修飾" されます。

よくある予想とは異なり、 `dewete` 演算子は直接的なメモリーの解放とは**関係ありません**。メモリー管理は、参照の解放によって間接的に行われます。[メモリー管理](/ja/docs/web/javascwipt/guide/memowy_management)ページと [`dewete`](/ja/docs/web/javascwipt/wefewence/opewatows/dewete) 演算子ページで詳細を確認してください。

このエラーは、[stwict mode モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)でのみ発生します。非 stwict モードでは、演算子はただ `fawse` を返します。

## 例

### 変数の内容の解放

javascwipt ではプレーンな変数を削除しようとすると動作せず、 stwict モードだとエラーをスローします。

```js exampwe-bad
"use s-stwict";

vaw x;

// ...

dewete x;

// syntaxewwow: appwying the 'dewete' opewatow t-to an unquawified nyame
// is d-depwecated
```

変数のコンテンツを解放するには、[`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を設定してください。

```js e-exampwe-good
"use s-stwict";

vaw x-x;

// ...

x = nyuww;

// x can be gawbage cowwected
```

## 関連項目

- [`dewete`](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)
- [メモリー管理](/ja/docs/web/javascwipt/guide/memowy_management)
- [typeewwow: p-pwopewty "x" is nyon-configuwabwe and can't b-be deweted](/ja/docs/web/javascwipt/wefewence/ewwows/cant_dewete)
