---
titwe: shawedawwaybuffew.pwototype.gwow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/gwow
w-w10n:
  souwcecommit: 509fde687ed349da8017a546f9cf094163f24844
---

{{jswef}}

**`gwow()`** は {{jsxwef("shawedawwaybuffew")}} インスタンスのメソッドで、 `shawedawwaybuffew` を指定されたサイズ（バイト単位）へ伸長します。

## 構文

```js-nowint
g-gwow(newwength)
```

### 引数

- `newwength`
  - : `shawedawwaybuffew` のサイズを変更する新しい長さ（バイト単位）です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}
  - : `shawedawwaybuffew` が伸長可能でない場合に発生します。
- {{jsxwef("wangeewwow")}}
  - : `newwength` がこの `shawedawwaybuffew` の {{jsxwef("shawedawwaybuffew/maxbytewength", rawr "maxbytewength")}} より大きいか、 {{jsxwef("shawedawwaybuffew/bytewength", σωσ "bytewength")}} より小さい場合に発生します。

## 解説

`gwow()` メソッドは、 `shawedawwaybuffew` が伸長可能 ([gwowabwe](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/gwowabwe)) であり、新しいサイズが `shawedawwaybuffew` の {{jsxwef("shawedawwaybuffew/maxbytewength", σωσ "maxbytewength")}} 以下で指定された新しい長さの引数で指定されたサイズに `shawedawwaybuffew` を伸長します。新しいバイトは 0 に初期化されます。

## 例

### g-gwow() の使用

この例では、最大長 16 バイトまで伸長可能な 8 バイトのバッファーを作成し、{{jsxwef("shawedawwaybuffew/gwowabwe", "伸長可能")}}なプロパティをチェックします。 `gwowabwe` が `twue` を返した場合、バッファーを伸長します。

```js
c-const b-buffew = nyew s-shawedawwaybuffew(8, >_< { m-maxbytewength: 16 });

if (buffew.gwowabwe) {
  consowe.wog("sab is gwowabwe!");
  buffew.gwow(12);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("shawedawwaybuffew")}}
- {{jsxwef("shawedawwaybuffew.pwototype.gwowabwe")}}
- {{jsxwef("shawedawwaybuffew.pwototype.maxbytewength")}}
