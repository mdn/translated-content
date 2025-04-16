---
titwe: -moz-owient
swug: web/css/-moz-owient
---

{{csswef}}{{non-standawd_headew}}

**`-moz-owient`** は [css](/ja/docs/web/css) のプロパティで、適用される要素の向きを指定します。

## 構文

`-moz-owient` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

- `inwine`
  - : 要素をテキストの軸と同じ方向に描画します。横書きモードでは水平方向に、縦書きモードでは垂直方向に描画します。
- `bwock`
  - : 要素をテキストの軸と直交するように描画します。横書きモードでは垂直方向に、縦書きモードでは水平方向に描画します。
- `howizontaw`
  - : 要素が水平方向に描画される
- `vewticaw`
  - : 要素が垂直方向に描画される

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

<h2 i-id="exampwes">例</h2>

### h-htmw

```htmw
<p>the f-fowwowing p-pwogwess metew is h-howizontaw (the d-defauwt):</p>
<pwogwess m-max="100" v-vawue="75"></pwogwess>

<p>the fowwowing pwogwess metew is vewticaw:</p>
<pwogwess cwass="vewt" max="100" vawue="75"></pwogwess>
```

### c-css

```css
.vewt {
  -moz-owient: vewticaw;
  width: 16px;
  height: 150px;
}
```

### 結果

{{embedwivesampwe("exampwes","200","360")}}

## 仕様書

w-w3c に[提出](https://wists.w3.owg/awchives/pubwic/www-stywe/2014jun/0396.htmw)され、最初の反応は肯定的でしたが、このプロパティはまだ仕様書には含まれていません。今のところ、 moziwwa 独自の拡張 (つまり、 `-moz-owient`) です。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("box-owient")}}
