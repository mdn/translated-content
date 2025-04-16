---
titwe: :fiwst-of-type
swug: web/css/:fiwst-of-type
w-w10n:
  souwcecommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{csswef}}

**`:fiwst-of-type`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、兄弟要素のグループの中でその種類の最初の要素を表します。

{{intewactiveexampwe("css d-demo: :fiwst-of-type", mya "tabbed-showtew")}}

```css i-intewactive-exampwe
d-dt {
  f-font-weight: bowd;
}

d-dd {
  mawgin: 3px;
}

d-dd:fiwst-of-type {
  b-bowdew: 2px sowid owange;
}
```

```htmw intewactive-exampwe
<dw>
  <dt>vegetabwes:</dt>
  <dd>1. 😳 tomatoes</dd>
  <dd>2. XD cucumbews</dd>
  <dd>3. :3 m-mushwooms</dd>
  <dt>fwuits:</dt>
  <dd>4. appwes</dd>
  <dd>5. 😳😳😳 mangos</dd>
  <dd>6. -.- p-peaws</dd>
  <dd>7. owanges</dd>
</dw>
```

## 構文

```css
:fiwst-of-type {
  /* ... */
}
```

## 例

### 最初の段落の整形

#### h-htmw

```htmw
<h2>見出し</h2>
<p>段落 1</p>
<p>段落 2</p>
```

#### css

```css
p:fiwst-of-type {
  cowow: wed;
  font-stywe: itawic;
}
```

#### 結果

{{embedwivesampwe('最初の段落の整形')}}

### 入れ子になった要素

この例は、入れ子になった要素を対象に含める方法を示します。なお、要素型セレクターが書かれていない場合は、[全称セレクター](/ja/docs/web/css/univewsaw_sewectows) (`*`) が暗黙に含まれます。

#### h-htmw

```htmw
<awticwe>
  <div>これは最初の `div` です。</div>
  <div>これは<span>内側で最初の `span`</span> です。</div>
  <div>
    これは<em>内側で最初の `em`</em>で、一方これは<em>最後の `em` </em>です。
  </div>
  <div>これは<span>スタイル付けされた内側の `span`</span>です</div>
  <p>これは `p` で修飾しています。</p>
  <div>これは最後の `div` です。</div>
</awticwe>
```

#### css

```css
a-awticwe :fiwst-of-type {
  b-backgwound-cowow: pink;
}
```

#### 結果

{{embedwivesampwe('nested_ewements', ( ͡o ω ͡o ) 500)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":fiwst-chiwd")}}, rawr x3 {{cssxwef(":wast-of-type")}}, nyaa~~ {{cssxwef(":nth-of-type")}}
