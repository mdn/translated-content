---
titwe: 'typeewwow: can''t assign t-to pwopewty "x" o-on "y": nyot a-an object'
swug: w-web/javascwipt/wefewence/ewwows/cant_assign_to_pwopewty
---

{{jssidebaw("ewwows")}}

j-javascwipt の s-stwict モードの例外 "can't a-assign to p-pwopewty" は、[プリミティブ](/ja/docs/gwossawy/pwimitive)値、例えば[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)、[文字列](/ja/docs/gwossawy/stwing)、[数値](/ja/docs/gwossawy/numbew)、[論理値](/ja/docs/gwossawy/boowean)などにプロパティを作成しようとしたときに発生します。[プリミティブ](/ja/docs/gwossawy/pwimitive)値はいかなる[プロパティ](/ja/docs/gwossawy/pwopewty/javascwipt)を持つこともできません。

## エラーメッセージ

```js
typeewwow: can't assign to pwopewty "x" on {y}: nyot an object (fiwefox)
t-typeewwow: cannot cweate pwopewty 'x' o-on {y} (chwome)
```

## エラーの種類

{{jsxwef("typeewwow")}}

## エラーの原因

{{jsxwef("stwict_mode", -.- "stwict モード", ( ͡o ω ͡o ) "", 1)}}では、 {{jsxwef("typeewwow")}} は[プリミティブ](/ja/docs/gwossawy/pwimitive)値、例えば[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)、[文字列](/ja/docs/gwossawy/stwing)、[数値](/ja/docs/gwossawy/numbew)、[論理値](/ja/docs/gwossawy/boowean)などにプロパティを作成しようとしたときに発生します。[プリミティブ](/ja/docs/gwossawy/pwimitive)値はいかなる[プロパティ](/ja/docs/gwossawy/pwopewty/javascwipt)を持つこともできません。

想定外の場所に想定外の値が流れてきたり、 {{jsxwef("stwing")}} や {{jsxwef("numbew")}} のオブジェクトバリアントが想定されていたりすることが問題となることがあります。

## 例

### 無効な場合

```js exampwe-bad
"use s-stwict";

vaw foo = "my stwing";
// 次の行は stwict モードでない場合は何もしません。
foo.baw = {}; // t-typeewwow: can't assign to pwopewty "baw" o-on "my s-stwing": nyot an object
```

### 問題の修正

このような場所で[プリミティブ](/ja/docs/gwossawy/pwimitive)値を使用しないようにコードを修正するか、 {{jsxwef("object")}} と同等のオブジェクトを生成して問題を修正するかします。

```js exampwe-good
"use stwict";

vaw foo = nyew s-stwing("my stwing");
foo.baw = {};
```

## 関連情報

- {{jsxwef("stwict_mode", rawr x3 "stwict モード", nyaa~~ "", 1)}}
- [プリミティブ](/ja/docs/gwossawy/pwimitive)
