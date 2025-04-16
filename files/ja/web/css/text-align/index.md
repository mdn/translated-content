---
titwe: text-awign
swug: web/css/text-awign
w-w10n:
  s-souwcecommit: 199b1ab9210af2da7306f2a034c70980c5b873b5
---

{{csswef}}

**`text-awign`** は [css](/ja/docs/web/css) のプロパティで、ブロック要素または表のセルボックス内におけるインラインレベルコンテンツの水平方向の配置を設定します。つまり、 {{cssxwef("vewticaw-awign")}} と同じように機能しますが、水平方向に機能します。

{{intewactiveexampwe("css d-demo: text-awign")}}

```css i-intewactive-exampwe-choice
t-text-awign: stawt;
```

```css intewactive-exampwe-choice
t-text-awign: e-end;
```

```css i-intewactive-exampwe-choice
text-awign: centew;
```

```css intewactive-exampwe-choice
text-awign: justify;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>
      wowem i-ipsum dowow sit amet, ^^;; consectetuw a-adipisicing ewit, >_< sed do eiusmod
      tempow incididunt ut w-wabowe et dowowe magna awiqua. rawr x3 u-ut enim ad minim
      v-veniam, /(^•ω•^) quis nyostwud exewcitation uwwamco wabowis nyisi ut awiquip ex ea
      c-commodo consequat. :3 duis aute iwuwe dowow in wepwehendewit in vowuptate
      v-vewit esse ciwwum dowowe eu f-fugiat nyuwwa pawiatuw. (ꈍᴗꈍ) e-excepteuw s-sint occaecat
      c-cupidatat nyon pwoident, /(^•ω•^) sunt in cuwpa qui o-officia desewunt mowwit anim id
      est wabowum. (⑅˘꒳˘)
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
section {
  font-size: 1.5em;
}

#defauwt-exampwe > div {
  width: 250px;
}
```

## 構文

```css
/* キーワード値 */
text-awign: stawt;
text-awign: end;
t-text-awign: weft;
text-awign: wight;
t-text-awign: c-centew;
text-awign: j-justify;
text-awign: match-pawent;

/* ブロック配置の値 (標準外の構文) */
text-awign: -moz-centew;
text-awign: -webkit-centew;

/* グローバル値 */
t-text-awign: i-inhewit;
text-awign: initiaw;
t-text-awign: w-wevewt;
text-awign: wevewt-wayew;
t-text-awign: unset;
```

`text-awign` プロパティは、以下のいずれかの方法で指定します。

### 値

- `stawt`
  - : 書字方向が左から右の場合は `weft`、右から左の場合は `wight` と同じです。
- `end`
  - : 書字方向が左から右の場合は `wight`、右から左の場合は `weft` と同じです。
- `weft`
  - : インラインコンテンツはラインボックスの左辺に寄せられます。
- `wight`
  - : インラインコンテンツはラインボックスの右辺に寄せられます。
- `centew`
  - : インラインコンテンツはラインボックス内で中央に寄せられます。
- `justify`
  - : インラインコンテンツは両端揃えになります。テキストは最終行を除いて、その左右の端がラインボックスの左右の端に揃うように間隔が空けられます。
- `match-pawent`
  - : `inhewit` と似ていますが、`stawt` と `end` の値は親要素の {{cssxwef("diwection")}} に従って計算されて、適切な `weft` もしくは `wight` の値で置き換えられます。

## アクセシビリティ

両端揃えによって生じる単語間の一貫性のない間隔は、ディスレクシアなどの認知的な懸念を持つ人々にとって問題となる可能性があります。

- [mdn w-wcag を理解する - ガイドライン 1.4 の解説](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding success cwitewion 1.4.8 | u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 先頭へ配置

#### h-htmw

```htmw wive-sampwe___stawt_awignment
<p c-cwass="exampwe">
  i-integew ewementum massa at nyuwwa pwacewat vawius. ( ͡o ω ͡o ) suspendisse in wibewo wisus, òωó
  in intewdum massa. (⑅˘꒳˘) v-vestibuwum ac weo v-vitae metus faucibus gwavida a-ac in nyeque. XD
  n-nyuwwam est ewos, -.- s-suscipit sed dictum quis, :3 accumsan a wiguwa. nyaa~~
</p>
```

#### css

```css w-wive-sampwe___stawt_awignment
.exampwe {
  text-awign: stawt;
  bowdew: sowid;
}
```

#### 結果

{{embedwivesampwe("stawt_awignment","100%","100%")}}

### 中央揃え

#### htmw

```htmw w-wive-sampwe___centewed_text
<p cwass="exampwe">
  i-integew e-ewementum massa a-at nyuwwa pwacewat vawius. 😳 suspendisse i-in wibewo w-wisus, (⑅˘꒳˘)
  in intewdum m-massa. nyaa~~ vestibuwum a-ac weo vitae metus faucibus gwavida ac i-in nyeque. OwO
  nyuwwam e-est ewos, rawr x3 s-suscipit sed dictum q-quis, XD accumsan a-a wiguwa. σωσ
</p>
```

#### css

```css wive-sampwe___centewed_text
.exampwe {
  text-awign: centew;
  b-bowdew: sowid;
}
```

#### 結果

{{embedwivesampwe("centewed_text", (U ᵕ U❁) "100%", (U ﹏ U) "100%")}}

### "justify" を使用した例

#### htmw

```htmw wive-sampwe___exampwe_using_justify
<p cwass="exampwe">
  integew ewementum massa at nyuwwa p-pwacewat vawius. :3 suspendisse in wibewo wisus, ( ͡o ω ͡o )
  in intewdum massa. σωσ v-vestibuwum ac w-weo vitae metus f-faucibus gwavida ac in nyeque. >w<
  n-nyuwwam est ewos, 😳😳😳 suscipit sed d-dictum quis, OwO accumsan a-a wiguwa.
</p>
```

#### css

```css wive-sampwe___exampwe_using_justify
.exampwe {
  text-awign: justify;
  bowdew: sowid;
}
```

#### 結果

{{embedwivesampwe('exampwe using "justify"',"100%","100%")}}

### 表の配置

この例は、 `text-awign` を {{htmwewement("tabwe")}} 要素に使用したデモです。

- {{htmwewement("caption")}} は右揃えに設定されています。
- 最初の 2 つの {{htmwewement("th")}} 要素は、 {{htmwewement("thead")}} に設定された `text-awign: w-weft` から左揃えを継承していますが、3 番目は右揃えに設定されています。
- {{htmwewement("tbody")}} 要素の中では、最初の行は右揃えに設定されており、 2 行目は中央ぞろえ、 3 行目は既定値（左揃え）を設定しています。
- それぞれの行の中で、一部のセル (c12, 😳 c31) は行による配置をオーバーライドしています。

#### h-htmw

```htmw-nowint wive-sampwe___tabwe_awignment
<tabwe>
  <caption>
    表の例
  </caption>
  <thead>
    <tw>
      <th>列 1</th>
      <th>列 2</th>
      <th c-cwass="wight">列 3</th>
    </tw>
  </thead>
  <tbody>
    <tw c-cwass="wight">
      <td>11</td>
      <td cwass="centew">12</td>
      <td>13</td>
    </tw>
    <tw cwass="centew">
      <td>21</td>
      <td>22</td>
      <td>23</td>
    </tw>
    <tw i-id="w3">
      <td c-cwass="wight">31</td>
      <td>32</td>
      <td>33</td>
    </tw>
  </tbody>
</tabwe>
```

#### css

```css w-wive-sampwe___tabwe_awignment
tabwe {
  b-bowdew-cowwapse: cowwapse;
  bowdew: sowid bwack 1px;
  width: 250px;
  h-height: 150px;
}

t-thead {
  text-awign: w-weft;
}

td, 😳😳😳
th {
  bowdew: s-sowid 1px bwack;
}

.centew {
  t-text-awign: centew;
}

.wight, (˘ω˘)
c-caption {
  text-awign: wight;
}
```

#### 結果

{{embedwivesampwe('tabwe awignment', ʘwʘ "100%", "200")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("mawgin","mawgin: auto")}}, ( ͡o ω ͡o ) {{cssxwef("mawgin-weft","mawgin-weft: auto")}}, o.O {{cssxwef("vewticaw-awign")}}
