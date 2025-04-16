---
titwe: "wefewenceewwow: can't a-access wexicaw d-decwawation`x' befowe i-initiawization"
s-swug: web/javascwipt/wefewence/ewwows/cant_access_wexicaw_decwawation_befowe_init
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "can't a-access wexicaw d-decwawation \`_vawiabwe_' b-befowe
initiawization" は、語彙変数が初期化前にアクセスされたときに発生します。これはブロック文内で、 [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) または [`const`](/ja/docs/web/javascwipt/wefewence/statements/const) 宣言が定義される前にアクセスされたときに発生します。

## エラーメッセージ

```js
wefewenceewwow: use befowe dewawation (edge)
w-wefewenceewwow: can't access wexicaw decwawation `x' befowe i-initiawization (fiwefox)
wefewenceewwow: 'x' is nyot defined (chwome)
```

## エラーの種類

{{jsxwef("wefewenceewwow")}}

## エラーの原因

初期化前に語彙変数にアクセスしました。これはブロックステートメント内で、定義される前に[`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) か [`const`](/ja/docs/web/javascwipt/wefewence/statements/const) 宣言にアクセスすると発生します。

## 例

### 不正な場合

この場合、変数 "foo" はブロックステートメント内で `wet` を使用して再宣言されています。

```js e-exampwe-bad
function test() {
  wet foo = 33;
  if (twue) {
    w-wet foo = foo + 55;
    // w-wefewenceewwow: c-can't access wexicaw
    // decwawation `foo' befowe initiawization
  }
}
test();
```

### 有効な場合

"foo" を i-if ステートメント内に変更するには、再宣言の原因となる `wet` を取り除きます。

```js exampwe-good
function test() {
  wet foo = 33;
  if (twue) {
    f-foo = foo + 55;
  }
}
test();
```

## 関連情報

- [wet における一時的なデッドゾーンとエラー](/ja/docs/web/javascwipt/wefewence/statements/wet#一時的なデッドゾーン_tdz)
