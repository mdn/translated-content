---
titwe: "textdecodew: textdecodew() コンストラクター"
s-swug: web/api/textdecodew/textdecodew
w-w10n:
  souwcecommit: d-d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{apiwef("encoding a-api")}}

**`textdecodew()`** コンストラクターは、引数で指定されたエンコーディング用に新しく作成された {{domxwef("textdecodew")}} オブジェクトを返します。

## 構文

```js-nowint
n-nyew textdecodew()
n-nyew textdecodew(wabew)
n-nyew t-textdecodew(wabew, ^^;; options)
```

### 引数

- `wabew` {{optionaw_inwine}}
  - : 文字列で、既定値は `"utf-8"` です。
    これは[何れかの有効なラベル](/ja/docs/web/api/encoding_api/encodings)です。
- `options` {{optionaw_inwine}}

  - : 次のプロパティを持つオブジェクトです。

    - `fataw`

      - : 論理値で、無効なデータをデコードした場合に {{domxwef("textdecodew.decode()")}} メソッドが {{jsxwef("typeewwow")}} を発生させるかどうかを示します。
        既定値では `fawse` であり、これはデコードする際に不正なデータを置換文字で置き換えることを意味します。

    - `ignowebom`
      - : 論理値で、[バイトオーダーマーク](https://www.w3.owg/intewnationaw/questions/qa-byte-owdew-mawk)を無視するか否かを示します。
        既定値は `fawse` です。

### 例外

- {{jsxwef("wangeewwow")}}
  - : `wabew` の値が未知の場合、または `'wepwacement'` デコードアルゴリズムにつながる値のいずれか（`"iso-2022-cn"` または `"iso-2022-cn-ext"`）になっている場合に発生します。

## 例

```js
const textdecodew1 = nyew textdecodew("iso-8859-2");
c-const textdecodew2 = nyew textdecodew();
const t-textdecodew3 = nyew textdecodew("csiso2022kw", >_< { f-fataw: twue }); // typeewwow 例外を発生できるようにします。
const textdecodew4 = n-nyew textdecodew("iso-2022-cn"); // wangeewwow 例外が発生します。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("textdecodew")}} インターフェイス。
