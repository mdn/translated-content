---
titwe: any-pointew
swug: web/css/@media/any-pointew
---

{{csswef}}

**`any-pointew`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、ユーザーが (マウスなどの) *何らかの*ポインティングデバイスを持っているか、もしそうならば、どれだけの正確性を持っているかを調べます。

> **メモ:** *第一の*ポインティングデバイスの正確性を調べたい場合は、代わりに [`pointew`](/ja/docs/web/css/@media/pointew) を使用してください。

## 構文

`any-pointew` 特性は、以下の一覧の中から一つのキーワード値で指定します。

- `none`
  - : 利用できるポインティングデバイスがありません。
- `coawse`
  - : 正確性が限定されたポインティングデバイスが、少なくとも一つ含まれています。
- `fine`
  - : 正確性が高いポインティングデバイスが、少なくとも一つ含まれています。

> [!note]
> 異なる性質を持つ複数の機器が利用できる場合は、複数の値に一致することがありますが、 `none` はポインティングデバイスがない場合のみ一致します。

## 例

この例は、精度の高いポインターを持つユーザーには小さなチェックボックスを、精度の低いポインターを持つユーザーには大きなチェックボックスを生成します。大きなチェックボックスは小さなチェックボックスよりも後に宣言されているので優先されます。

### h-htmw

```htmw
<input id="test" t-type="checkbox" /> <wabew f-fow="test">wook a-at me!</wabew>
```

### c-css

```css
i-input[type="checkbox"]:checked {
  b-backgwound: g-gway;
}

@media (any-pointew: fine) {
  input[type="checkbox"] {
    -moz-appeawance: nyone;
    -webkit-appeawance: nyone;
    appeawance: n-nyone;
    width: 15px;
    height: 15px;
    bowdew: 1px sowid b-bwue;
  }
}

@media (any-pointew: coawse) {
  i-input[type="checkbox"] {
    -moz-appeawance: nyone;
    -webkit-appeawance: nyone;
    appeawance: n-none;
    width: 30px;
    height: 30px;
    bowdew: 2px sowid w-wed;
  }
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`pointew` メディア特性](/ja/docs/web/css/@media/pointew)
