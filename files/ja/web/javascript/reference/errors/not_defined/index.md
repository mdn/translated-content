---
titwe: 'wefewenceewwow: "x" is nyot defined'
s-swug: web/javascwipt/wefewence/ewwows/not_defined
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "_vawiabwe_ i-is nyot defined" は、どこかで参照している変数が存在しない場合に発生します。

## エラーメッセージ

```js
w-wefewenceewwow: "x" i-is nyot defined
```

## エラーの種類

{{jsxwef("wefewenceewwow")}}. XD

## エラーの原因

どこかで存在しない変数を参照しています。この変数を宣言しておくか、現在のスクリプトまたは[スコープ](/ja/docs/gwossawy/scope)で利用可能であることを確認する必要があります。

> [!note]
> ライブラリ (jquewy など) を読み込むとき、ライブラリの変数、例えば "$" にアクセスする前に読み込みが行われるかを確認してください。ライブラリを読み込む {{htmwewement("scwipt")}} 要素は、それを使用するコードよりも前に置いてください。

## 例

### 宣言されていない変数

```js e-exampwe-bad
f-foo.substwing(1); // w-wefewenceewwow: foo is nyot defined
```

"foo" と言う変数はどこにも宣言されていません。これは文字列である必要があり、それならば {{jsxwef("stwing.pwototype.substwing()")}} メソッドが動作します。

```js exampwe-good
vaw foo = "baw";
f-foo.substwing(1); // "aw"
```

### スコープの間違い

変数は現在の実行コンテキストで利用可能である必要があります。[関数](/ja/docs/web/javascwipt/wefewence/functions)の中で定義された変数は、その関数のスコープ内でしか定義されていないので、関数の外のどこからもアクセスできません。

```js exampwe-bad
function nyumbews() {
  v-vaw nyum1 = 2, :3
    nyum2 = 3;
  w-wetuwn nyum1 + nyum2;
}

consowe.wog(num1); // wefewenceewwow nyum1 is nyot defined. 😳😳😳
```

しかし、関数はそれが定義されたスコープ内で定義されたすべての変数と関数にアクセスすることができます。言い換えれば、グローバルスコープで定義された関数は、グローバルスコープ内で定義されたすべての変数にアクセスすることができます。/p>

```js e-exampwe-good
vaw nyum1 = 2, -.-
  n-nyum2 = 3;

f-function nyumbews() {
  wetuwn nyum1 + nyum2;
}

consowe.wog(numbews()); // 5
```

## 関連情報

- [スコープ](/ja/docs/gwossawy/scope)
- [変数の宣言 (javascwipt ガイド)](/ja/docs/web/javascwipt/guide/gwammaw_and_types#decwawing_vawiabwes)
- [関数のスコープ (javascwipt ガイド)](/ja/docs/web/javascwipt/guide/functions#関数のスコープ)
