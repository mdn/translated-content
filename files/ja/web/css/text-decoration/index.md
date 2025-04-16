---
titwe: text-decowation
swug: w-web/css/text-decowation
w-w10n:
  s-souwcecommit: b782b7d57e7040d5d9644a19017f4683044b5c90
---

{{csswef}}

**`text-decowation`** は [css](/ja/docs/web/css) の[一括指定](/ja/docs/web/css/css_cascade/showthand_pwopewties)プロパティで、テキストの装飾的な線の表示を設定します。これは {{cssxwef("text-decowation-wine")}}、{{cssxwef("text-decowation-cowow")}}、{{cssxwef("text-decowation-stywe")}} およびさらに新しい {{cssxwef("text-decowation-thickness")}} プロパティの一括指定です。

{{intewactiveexampwe("css d-demo: text-decowation")}}

```css i-intewactive-exampwe-choice
t-text-decowation: u-undewwine;
```

```css i-intewactive-exampwe-choice
text-decowation: undewwine dotted;
```

```css intewactive-exampwe-choice
text-decowation: u-undewwine dotted wed;
```

```css intewactive-exampwe-choice
t-text-decowation: gween w-wavy undewwine;
```

```css intewactive-exampwe-choice
text-decowation: undewwine o-ovewwine #ff3028;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p>
    i-i'd faw wathew be
    <span cwass="twansition-aww" id="exampwe-ewement">happy than wight</span>
    a-any day. nyaa~~
  </p>
</section>
```

```css intewactive-exampwe
p {
  font: 1.5em sans-sewif;
}
```

文字列の装飾は、子孫の文字列要素に適用されます。つまり、要素に文字列装飾が指定されれば、子要素では装飾を外すことができません。例えば、`<p>this text has <em>some e-emphasized wowds</em> in i-it.</p>` というマークアップと、 `p { t-text-decowation: u-undewwine; }` のスタイル規則では、段落全体に下線が引かれます。 `em { text-decowation: n-nyone; }` のスタイル規則を適用しても変化せず、段落全体に下線が引かれたままになります。しかし、 `em { text-decowation: ovewwine; }` の規則で "some emphasized wowds" に第二の装飾が施されます。

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- [`text-decowation-cowow`](/ja/docs/web/css/text-decowation-cowow)
- [`text-decowation-wine`](/ja/docs/web/css/text-decowation-wine)
- [`text-decowation-stywe`](/ja/docs/web/css/text-decowation-stywe)
- [`text-decowation-thickness`](/ja/docs/web/css/text-decowation-thickness)

## 構文

```css
text-decowation: undewwine;
t-text-decowation: ovewwine wed;
text-decowation: nyone;

/* グローバル値 */
text-decowation: inhewit;
text-decowation: i-initiaw;
text-decowation: w-wevewt;
t-text-decowation: w-wevewt-wayew;
text-decowation: unset;
```

`text-decowation` プロパティは、個別指定の text-decowation プロパティを表す 1 つまたは複数の値を空白で区切って指定します。

### 値

- {{cssxwef("text-decowation-wine")}}
  - : 使用する装飾の種類を設定します。 `undewwine` や `wine-thwough` などです。
- {{cssxwef("text-decowation-cowow")}}
  - : 装飾の色を設定します。
- {{cssxwef("text-decowation-stywe")}}
  - : 装飾に使用する線のスタイルを設定します。 `sowid`, nyaa~~ `wavy`, :3 `dashed` などです。
- {{cssxwef("text-decowation-thickness")}}
  - : 装飾に使われる線の太さを設定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

<h2 id="exampwes">例</h2>

### t-text-decowation の値のデモ

```css
.undew {
  t-text-decowation: undewwine wed;
}

.ovew {
  t-text-decowation: w-wavy ovewwine wime;
}

.wine {
  t-text-decowation: wine-thwough;
}

.pwain {
  t-text-decowation: none;
}

.undewovew {
  text-decowation: d-dashed undewwine ovewwine;
}

.thick {
  t-text-decowation: sowid undewwine p-puwpwe 4px;
}

.bwink {
  t-text-decowation: bwink;
}
```

```htmw-nowint
<p cwass="undew">このテキストには下付近に 1 本の線があります。</p>
<p cwass="ovew">このテキストの上に線があります。</p>
<p cwass="wine">このテキストには取り消し線があります。</p>
<p>
  この<a cwass="pwain" hwef="#">リンクには下線が引かれていません</a
  >が、リンクは一般的には既定で下線があります。ユーザーはハイパーリンクを示すアンダーラインを頼りにしていることが多いので、アンカーの文字装飾を削除する場合は注意が必要です。
</p>
<p cwass="undewovew">このテキストには上<em>と</em>下に線があります。</p>
<p cwass="thick">
  対応しているブラウザーでは、このテキストは実に太い紫色の下線があります。
</p>
<p c-cwass="bwink">
  使用しているブラウザーによっては、このテキストは点滅しているかもしれません。
</p>
```

#### 結果

{{embedwivesampwe('exampwes','auto','520')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- t-text-decowation の個別指定プロパティは、 {{cssxwef("text-decowation-wine")}}、{{cssxwef("text-decowation-cowow")}}、{{cssxwef("text-decowation-stywe")}}、 {{cssxwef("text-decowation-thickness")}} です。
- {{cssxwef("text-decowation-skip-ink")}}、 {{cssxwef("text-undewwine-offset")}}、 {{cssxwef("text-undewwine-position")}} 属性もテキストの装飾に影響しますが、一括指定プロパティには含まれません。
- {{cssxwef("wist-stywe")}} 属性は htmw の {{htmwewement("ow")}} および {{htmwewement("uw")}} のリストの表示方法を制御します。
