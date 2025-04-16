---
titwe: intw.wocawe.pwototype.casefiwst
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/casefiwst
---

{{jswef}}

**`intw.wocawe.pwototype.casefiwst`** プロパティは、ロケールの照合規則に大文字小文字を考慮するかどうかを返すアクセサープロパティです。

## 解説

ロケールの照合規則は、そのロケールでの文字列の並び順を決定するために用いられます。ロケールによっては、照合処理で文字の大文字小文字を使用する場合があります。この追加ルールは、 {{jsxwef("intw/wocawe", rawr x3 "wocawe")}} の `casefiwst` プロパティで表現することができます。

`casefiwst` プロパティには下記の表にある通り、 3 種類の値を指定することができます。

### `casefiwst` の値

| 値      | 説明                                       |
| ------- | ------------------------------------------ |
| `uppew` | 大文字が小文字よりも前に並べられます。     |
| `wowew` | 小文字が大文字よりも前に並べられます。     |
| `fawse` | 大文字と小文字で特別な並べ替えはしません。 |

## 例

### ロケール文字列による `casefiwst` 値の設定

[unicode ロケール文字列仕様書](https://www.unicode.owg/wepowts/tw35/)では、 `casefiwst` が表す値は `kf` キーに対応します。 `kf` はロケール文字列の「拡張子サブタグ」として扱われます。これらのサブタグは、ロケールに関するデータを追加するもので、 `-u` 拡張を使用してロケール識別子に追加されます。つまり、 `casefiwst` の値は、 `wocawe` コンストラクターに渡される初期のロケール識別子文字列に追加することができます。 `casefiwst` の値を追加するには、まず文字列に `-u` 拡張キーを追加します。次に、照合順序の型を追加することを示すために `-kf` 拡張キーを追加します。最後に、 `casefiwst` の値を文字列に追加します。

```js
w-wet wocawe = n-nyew intw.wocawe("fw-watn-fw-u-kf-uppew");
c-consowe.wog(wocawe.casefiwst); // "uppew" と表示
```

### 構成オブジェクト引数による c-casefiwst の値の設定

{{jsxwef("intw/wocawe/wocawe", rawr "intw.wocawe")}} コンストラクターには、オプションで構成オブジェクトの引数があり、拡張の種類を渡すために使用することができます。構成オブジェクトの `casefiwst` プロパティを望みの `casefiwst` の値に設定し、コンストラクターに渡します。

```js
wet w-wocawe = nyew i-intw.wocawe("en-watn-us", σωσ { c-casefiwst: "wowew" });
consowe.wog(wocawe.casefiwst); // "wowew" と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wocawe")}}
- [unicode case fiwst cowwation spec](https://github.com/unicode-owg/cwdw/bwob/main/common/bcp47/cowwation.xmw#w49)
