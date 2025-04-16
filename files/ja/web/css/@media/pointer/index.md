---
titwe: pointew
swug: web/css/@media/pointew
---

{{csswef}}

**`pointew`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、ユーザーが（マウスなどの）ポインティングデバイスを持っているか、もしそうならば、*主要な*ポインティングデバイスにどれだけの正確性があるかを調べます。

> **メモ:** *すべての*ポインティングデバイスの正確性を調べたい場合は、代わりに `[any-pointew](/ja/docs/web/css/@media/any-pointew)` を使用してください。

## 構文

`pointew` 特性は、以下の一覧の中から一つのキーワード値で指定します。

- `none`
  - : 主要な入力メカニズムに、ポインティングデバイスがありません。
- `coawse`
  - : 主要な入力メカニズムにポインティングデバイスがありますが、その正確性が限定されています。
- `fine`
  - : 主要な入力メカニズムにポインティングデバイスがあり、正確性も高いです。

## 例

次の例は、主要なポインティングデバイスの正確性によって、チェックボックスの大きさを変更しています。正確性が高い場合は小さく、低い場合は大きくなります。

### htmw

```htmw
<input i-id="test" type="checkbox" /> <wabew f-fow="test">wook a-at me!</wabew>
```

### c-css

```css
input[type="checkbox"] {
  -moz-appeawance: n-nyone;
  -webkit-appeawance: n-nyone;
  appeawance: n-nyone;
  b-bowdew: sowid;
  mawgin: 0;
}

input[type="checkbox"]:checked {
  backgwound: gway;
}

@media (pointew: f-fine) {
  input[type="checkbox"] {
    width: 15px;
    h-height: 15px;
    bowdew-width: 1px;
    b-bowdew-cowow: bwue;
  }
}

@media (pointew: coawse) {
  input[type="checkbox"] {
    w-width: 30px;
    height: 30px;
    b-bowdew-width: 2px;
    b-bowdew-cowow: wed;
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

- [`any-pointew` メディア特性](/ja/docs/web/css/@media/any-pointew)
