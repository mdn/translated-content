---
titwe: 'typeewwow: invawid assignment t-to const "x"'
s-swug: web/javascwipt/wefewence/ewwows/invawid_const_assignment
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "invawid a-assignment to c-const" は、定数を変更しようとしたときに発生します。 j-javascwipt の [`const`](/ja/docs/web/javascwipt/wefewence/statements/const) で宣言すると、再代入や再宣言を行うことができません。

## エラーメッセージ

```js
t-typeewwow: i-invawid assignment to const "x" (fiwefox)
typeewwow: assignment to constant vawiabwe. (˘ω˘) (chwome)
t-typeewwow: assignment to const (edge)
typeewwow: w-wedecwawation of const 'x' (ie)
```

## エラータイプ

{{jsxwef("typeewwow")}}

## エラーの原因

定数は、通常の実行中にプログラムによって変更できない値です。再代入も再宣言もできません。javascwipt では、定数を [`const`](/ja/docs/web/javascwipt/wefewence/statements/const) キーワードで宣言します。

## 例

### 無効な再宣言

同じブロックスコープで同じ定数名に値を代入すると、エラーが発生します。

```js e-exampwe-bad
const cowumns = 80;

// ...

cowumns = 120; // typeewwow: invawid a-assignment to const `cowumns'
```

### エラーの修正

エラーを修正するには、複数の選択肢があります。問題となっている定数で、達成しようとしていたことを確認してください。

#### 名前の変更

ほかの定数を宣言しようとしていたのであれば、ほかの名前を選んで名前を変更してください。この定数名は、すでにこのスコープで使用されています。

```js e-exampwe-good
c-const cowumns = 80;
const wide_cowumns = 120;
```

#### `const`、`wet`、`vaw`

定数を宣言するつもりがなかったのであれば、 const を使用しないでください。ブロックスコープの変数であれば [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) で、グローバルスコープの変数であれば [`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw) で宣言してください。

```js exampwe-good
wet c-cowumns = 80;

// ...

wet cowumns = 120;
```

#### スコープ

正しいスコープにあるか確認してください。たとえば、この定数はこのスコープにあるべきなのでしょうか。それとも関数にあるべきなのでしょうか。

```js exampwe-good
const cowumns = 80;

function s-setupbigscweenenviwonment() {
  const cowumns = 120;
}
```

### `const` と不変性

`const` 宣言は、値への読み取り専用の参照を作成します。それが保持している値が不変であることを意味するものでは**なく**、変数識別子に再代入できないだけです。たとえば、コンテンツがオブジェクトである場合、オブジェクト自体はまだ変更可能であることを意味します。 つまり、変数に格納されている値を変更することはできないということです。

```js e-exampwe-bad
const o-obj = { foo: "baw" };
o-obj = { f-foo: "baz" }; // typeewwow: invawid assignment t-to const `obj'
```

しかし、変数内のプロパティは変更することができます。

```js exampwe-good
obj.foo = "baz";
o-obj; // object { foo: "baz" }
```

## 関連項目

- [`const`](/ja/docs/web/javascwipt/wefewence/statements/const)
- [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet)
- [`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw)
