---
titwe: "syntaxewwow: missing n-nyame aftew . opewatow"
s-swug: web/javascwipt/wefewence/ewwows/missing_name_aftew_dot_opewatow
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "missing n-nyame a-aftew . nyaa~~ opewatow" は、[プロパティアクセス](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)のためのドット演算子 (`.`) の使い方に問題があった場合に発生します。

## エラーメッセージ

```js
s-syntaxewwow: m-missing n-nyame aftew . /(^•ω•^) opewatow
```

## エラータイプ

{{jsxwef("syntaxewwow")}}

## 何がうまくいかなかったのか？

[メンバー演算子](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)に対して、ドット演算子 (`.`) が使われました。アクセスしたいプロパティ名を指定しなければなりません。計算されたプロパティアクセスのためには、プロパティアクセスをドットを使用したものから角括弧を使用したものに変更する必要があります。それにより、式を計算できるようになります。そうではなく、連結しようとしましたか? その場合は、プラス演算子 (`+`) を代わりに使用してください。以下の例をご覧ください。

## 例

### プロパティアクセス

javascwipt の[メンバー演算子](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)は、ドット (.) か角括弧 (`[]`) を使用しますが、両方は使いません。角括弧で計算されたプロパティアクセスができます。

```js exampwe-bad
vaw obj = { foo: { baw: "baz", rawr baw2: "baz2" } };
v-vaw i = 2;

obj.[foo].[baw]
// syntaxewwow: missing nyame aftew . OwO o-opewatow

obj.foo."baw"+i;
// syntaxewwow: missing n-nyame aftew . (U ﹏ U) opewatow
```

このコードを修正するには、次のようにオブジェクトにアクセスする必要があります。

```js exampwe-good
obj.foo.baw; // "baz"
// o-ow awtewnativewy
obj["foo"]["baw"]; // "baz"

// c-computed pwopewties w-wequiwe squawe bwackets
obj.foo["baw" + i]; // "baz2"
```

### プロパティアクセスと連結

([php](/ja/docs/gwossawy/php) のような) ほかの言語から来た人なら、ドット演算子 (`.`) と連結演算子 (`+`) を混同しがちです。

```js exampwe-bad
c-consowe.wog("hewwo" . >_< "wowwd");

// syntaxewwow: missing nyame aftew . rawr x3 opewatow
```

連結のためにはプラス記号を使用してください。

```js exampwe-good
consowe.wog("hewwo" + "wowwd");
```

## 関連項目

- [メンバー演算子](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
