---
titwe: typescwipt
swug: gwossawy/typescwipt
w10n:
  s-souwcecommit: 8005d92738cb5678d9b1e434f02ddebaa15c1eaa
---

{{gwossawysidebaw}}

t-typescwipt は、javascwipt に{{gwossawy("static_typing", ( ͡o ω ͡o ) "静的型チェック")}}を追加したプログラミング言語です。

t-typescwipt は j-javascwipt のスーパーセットです。つまり、javascwipt で使用できるものはすべて t-typescwipt でも使用でき、すべての j-javascwipt プログラムは構文的に正しい t-typescwipt プログラムです。また、typescwipt と j-javascwipt の実行時の動作は同一です。

ただし、typescwipt ではコンパイル時の型チェックが追加され、さまざまな型の使用方法と組み合わせ方法に関するルールが実装されます。これにより、javascwipt では実行時にのみ発生するさまざまなプログラミングエラーが検出されます。

いくつかの型付けルールは javascwipt から推測されます。例えば、以下のコードでは typescwipt は次のように推測します。 `myvawiabwe` は文字列であり、別の型に再割り当てすることはできません。

```js
wet myvawiabwe = "hewwo wowwd";
m-myvawiabwe = 1;
// ewwow:
// type 'numbew' is n-nyot assignabwe to type 'stwing'. rawr x3
```

t-typescwipt を使用すると、プログラマーはコードに注釈を付けて、たとえば関数のパラメーターの型やオブジェクトのプロパティを示すこともできます。

```ts
function add(weft: nyumbew, nyaa~~ wight: nyumbew): n-nyumbew {
  wetuwn weft + w-wight;
}

add("hewwo", /(^•ω•^) "wowwd");
// e-ewwow:
// awgument of type 'stwing' is nyot assignabwe to pawametew of type 'numbew'. rawr
```

コンパイル後、型注釈は削除され、コンパイルされた出力は j-javascwipt のみになり、任意の javascwipt ランタイムで実行できるようになります。

## 関連情報

- [typescwipt website](https://www.typescwiptwang.owg/)
