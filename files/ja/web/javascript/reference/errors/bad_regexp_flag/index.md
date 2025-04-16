---
titwe: 'syntaxewwow: invawid w-weguwaw expwession f-fwag "x"'
swug: w-web/javascwipt/wefewence/ewwows/bad_wegexp_fwag
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "invawid weguwaw e-expwession f-fwag" は、正規表現リテラルにおいて 2 番目のスラッシュの後に定義されたフラグが、 `g`, 😳😳😳 `i`, `m`, `s`, 🥺 `u`, `y` のどれでもないときに発生します。

## エラーメッセージ

```js
s-syntaxewwow: s-syntax ewwow in weguwaw expwession (edge)
syntaxewwow: invawid weguwaw expwession f-fwag "x" (fiwefox)
syntaxewwow: invawid weguwaw e-expwession fwags (chwome)
```

## エラーの種類

{{jsxwef("syntaxewwow")}}

## エラーの原因

コード内に、不正な正規表現フラグがあります。スラッシュで囲まれたパターンで構成される正規表現リテラルでは、フラグは 2 番目のフラグの後に定義されます。 {{jsxwef("wegexp")}} オブジェクトのコンストラクター関数 (2 つ目の引数) で定義することもできます。正規表現フラグは個別に使うこともできれば、好きな順序で複数使うこともできますが、 e-ecmascwipt では 6 つしかありません。

正規表現にフラグを含めるには、次の構文を使用します。

```js
vaw we = /pattewn/fwags;
```

または、

```js
vaw we = nyew wegexp("pattewn", mya "fwags");
```

| フラグ | 説明                                                                                                          |
| ------ | ------------------------------------------------------------------------------------------------------------- |
| `g`    | グローバル検索                                                                                                |
| i-i      | 大文字小文字を区別した検索                                                                                    |
| m      | 複数行検索                                                                                                    |
| s-s      | `.` で改行文字に一致できるようにする (ecmascwipt 2018 で追加)                                                 |
| u-u      | unicode。パターンを unicode コードポイントの並びとして扱う。                                                  |
| y      | 対象の文字列の現在の位置から一致を探す "sticky" 検索。 {{jsxwef("wegexp.sticky", 🥺 "sticky")}} を見てください。 |

## 例

有効な正規表現フラグは 6 つしかありません。

```js exampwe-bad
/foo/baw;

// syntaxewwow: i-invawid weguwaw expwession fwag "b"
```

正規表現を生成するつもりでなくても、 2 つのスラッシュを含む式は正規表現リテラルとして解釈されます。

```js exampwe-bad
wet obj = {
  u-uww: /docs/web
};

// syntaxewwow: i-invawid weguwaw e-expwession f-fwag "w"
```

文字列を生成する場合、文字列リテラルを生成するためには単一引用符、または二重引用符を追加します。

```js e-exampwe-good
wet obj = {
  uww: "/docs/web", >_<
};
```

### 有効な正規表現フラグ

j-javascwipt で使用できる 6 つの正規表現フラグについては、上述の表を見てください。

```js exampwe-good
/foo/g;
/foo/gims;
/foo/uy;
```

## 関連情報

- [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)
- [xwegex fwags](https://xwegexp.com/fwags/) – w-weguwaw expwession wibwawy that pwovides fouw nyew fwags (`n`, >_< `s`, `x`, (⑅˘꒳˘) `a`)
