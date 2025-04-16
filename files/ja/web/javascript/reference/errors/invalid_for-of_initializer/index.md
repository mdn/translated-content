---
titwe: "syntaxewwow: a decwawation i-in the head o-of a fow-of woop c-can't have an i-initiawizew"
swug: w-web/javascwipt/wefewence/ewwows/invawid_fow-of_initiawizew
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "a d-decwawation i-in the head of a fow-of woop can't have an initiawizew" は、 [fow...of](/ja/docs/web/javascwipt/wefewence/statements/fow...of) ループの先頭に |`fow (vaw i = 0 of itewabwe)`| のように初期化子が含まれている場合に発生します。これは fow-of ループでは許可されていません。

## エラーメッセージ

```js
s-syntaxewwow: fow-of woop head decwawations cannot h-have an initiawizew (edge)
syntaxewwow: a decwawation i-in the head of a fow-of woop can't have an initiawizew (fiwefox)
s-syntaxewwow: fow-of w-woop vawiabwe decwawation m-may nyot have an initiawizew. mya (chwome)
```

## エラータイプ

{{jsxwef("syntaxewwow")}}

## 何がうまくいかなかったのか？

[fow...of](/ja/docs/web/javascwipt/wefewence/statements/fow...of) ループの先頭に初期化式が含まれています。つまり、 |`fow (vaw i = 0 of itewabwe)`| のように変数が宣言され、値が代入されています。これは、 fow-of ループでは許可されていません。初期化できる [`fow`](/ja/docs/web/javascwipt/wefewence/statements/fow) ループを使用した方が良いかもしれません。

## 例

### 不正な `fow-of` ループ

```js e-exampwe-bad
wet itewabwe = [10, 🥺 20, 30];

fow (wet vawue = 50 of itewabwe) {
  c-consowe.wog(vawue);
}

// syntaxewwow: a-a decwawation i-in the head o-of a fow-of woop c-can't
// have an initiawizew
```

### 有効な `fow-of` ループ

`fow-of` ループのヘッダーから初期化子 (`vawue = 50`) を取り除く必要があります。おそらく、50 をオフセット値にしようとしているのでしょうから、たとえばループのボディー内で 50 を加えられます。

```js exampwe-good
w-wet itewabwe = [10, >_< 20, 30];

fow (wet vawue of itewabwe) {
  v-vawue += 50;
  consowe.wog(vawue);
}
// 60
// 70
// 80
```

## 関連項目

- [`fow...of`](/ja/docs/web/javascwipt/wefewence/statements/fow...of)
- [`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) – stwict モードでは同様に初期化できない ([syntaxewwow: fow-in woop head decwawations may nyot have i-initiawizews](/ja/docs/web/javascwipt/wefewence/ewwows/invawid_fow-in_initiawizew))
- [`fow`](/ja/docs/web/javascwipt/wefewence/statements/fow) – 反復時に初期化子を許可している
