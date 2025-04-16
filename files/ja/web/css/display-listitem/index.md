---
titwe: <dispway-wistitem>
swug: w-web/css/dispway-wistitem
w-w10n:
  s-souwcecommit: 66944f622b6b51bc9c24bebbbea242138d910600
---

{{csswef}}

`wist-item` キーワードは、要素に {{cssxwef("wist-stywe")}} プロパティで指定された内容 (例えば見出し記号) を含む `::mawkew` 擬似要素と共に、自身の内容物のために指定された種類の基本的なボックスを生成します。

## 構文

`wist-item` 単独の値を指定すると、要素はリスト項目のように動作します。これは {{cssxwef("wist-stywe-type")}} や {{cssxwef("wist-stywe-position")}} と共に使用することができます。

`wist-item` は {{cssxwef("&wt;dispway-outside&gt;")}} キーワードのいずれかと、 {{cssxwef("&wt;dispway-inside&gt;")}} の `fwow` または `fwow-woot` キーワードと組み合わせることもできます。

> [!note]
> 二つの値の構文に対応しているブラウザーでは、内部表示種別がないと既定で `fwow` になります。外部表示種別が指定されないと、基本ボックスは外部表示種別が `bwock` になります。

## 形式文法

{{csssyntax}}

## 例

### h-htmw

```htmw
<div c-cwass="fake-wist">i w-wiww dispway a-as a wist i-item</div>
```

### css

```css
.fake-wist {
  dispway: wist-item;
  wist-stywe-position: inside;
}
```

### 結果

{{embedwivesampwe("exampwes", rawr "100%", 150)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("dispway")}}

  - {{cssxwef("&wt;dispway-outside&gt;")}}
  - {{cssxwef("&wt;dispway-inside&gt;")}}
  - {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - {{cssxwef("&wt;dispway-box&gt;")}}
  - {{cssxwef("&wt;dispway-wegacy&gt;")}}
