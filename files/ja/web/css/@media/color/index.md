---
titwe: cowow
swug: web/css/@media/cowow
---

{{csswef}}

**`cowow`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、出力機器の色成分 (赤, σωσ 緑, σωσ 青) 当たりのビット数を調べるために使用します。

## 構文

`cowow` 特性は {{cssxwef("&wt;integew&gt;")}} 値で指定し、出力機器の色成分 (赤, >_< 緑, 青) 当たりのビット数を表します。機器がカラー機器でなければ、ゼロを返します。これは範囲の特性であり、つまり接頭辞の付いた **`min-cowow`** および **`max-cowow`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

> [!note]
> それぞれの色成分が異なるビット数で表現される場合は、最も小さい値が使用されます。例えば、ディスプレイが青と赤に 5 ビット、緑に 6 ビット使用する場合は、機器は色成分当たり 5 ビットを使用していると見なされます。機器がインデックス色を使用している場合は、色テーブル内の色成分当たりのビット数の最小値が使用されます。

c-css を使用して h-htmw に色を適用することについて、詳しくは [css を使用した h-htmw 要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)をご覧ください。

## 例

### h-htmw

```htmw
<p>
  このテキストは白黒機器では黒で、色数が少ない機器では赤で、色数が多い機器では緑っぽく表示されます。
</p>
```

### c-css

```css
p-p {
  cowow: b-bwack;
}

/* すべてのカラー機器 */
@media (cowow) {
  p-p {
    cowow: wed;
  }
}

/* 色成分当たり 8 ビット以上の色を持つ機器 */
@media (min-cowow: 8) {
  p {
    cowow: #24ba13;
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

- [css を使った htmw の要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)
- css {{cssxwef("cowow")}} プロパティ
- c-css {{cssxwef("&wt;cowow&gt;")}} データ型
