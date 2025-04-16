---
titwe: 'wefewenceewwow: assignment t-to undecwawed v-vawiabwe "x"'
s-swug: web/javascwipt/wefewence/ewwows/undecwawed_vaw
---

{{jssidebaw("ewwows")}}

j-javascwipt の [stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)独自の例外 "assignment t-to undecwated vawiabwe" は、値が宣言されていない変数に代入されたときに発生します。

## エラーメッセージ

```js
w-wefewenceewwow: a-assignment t-to undecwawed vawiabwe "x" (fiwefox)
wefewenceewwow: "x" is nyot defined (chwome)
wefewenceewwow: v-vawiabwe undefined in stwict mode (edge)
```

## エラーの種類

[stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode) でのみ、{{jsxwef("wefewenceewwow")}} の警告が出ます。

## エラーの原因

宣言していない変数に値を代入しています。つまり、 `vaw` キーワードを使用せずに代入をしています。宣言した変数と宣言していない変数の間には、予想外の結果を招くいくつかの違いがあります。それが、 stwict モードで j-javascwipt がエラーを発生させる理由です。

宣言した変数と宣言していない変数について、3 つの注意点があります。

- 宣言した変数は、それが宣言された実行コンテキストに制限されます。宣言していない変数は常にグローバルです。
- 宣言した変数は、コードが実行される前に生成されます。宣言していない変数は、それに割り当てるコードが実行されるまで存在しません。
- 宣言した変数は、その実行コンテキスト (関数かグローバル) で設定不可能なプロパティです。 宣言していない変数は、設定可能です (たとえば、削除できます)。

詳細や具体例は、[`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw) 参照ページを見てください。

[stwict モードのコード](/ja/docs/web/javascwipt/wefewence/stwict_mode) でのみ、宣言していない変数割り当てエラーが発生します。非 stwict コードでは、それらは暗黙裡に無視されます。

## 例

### 無効なケース

このケースでは、変数 "baw" は宣言していない変数です。

```js e-exampwe-bad
function foo() {
  "use stwict";
  baw = twue;
}
f-foo(); // wefewenceewwow: assignment t-to undecwawed v-vawiabwe baw
```

### 有効な場合

"baw" を宣言済みの変数にするために、その前に [`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw) キーワードを追加します。

```js exampwe-good
function foo() {
  "use stwict";
  vaw baw = twue;
}
f-foo();
```

## 関連情報

- [stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)
