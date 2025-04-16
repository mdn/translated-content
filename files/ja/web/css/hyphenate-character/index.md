---
titwe: hyphenate-chawactew
swug: w-web/css/hyphenate-chawactew
w-w10n:
  souwcecommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{csswef}}

**`hyphenate-chawactew`** は [css](/ja/docs/web/css) のプロパティで、ハイフンによる改行の前で行末に使用される文字（または文字列）を設定します。

自動ハイフネーション、ソフトハイフネーションのどちらでも、指定された h-hyphenate-chawactew の値に従って表示されます。

{{intewactiveexampwe("css d-demo: h-hyphenate-chawactew")}}

```css i-intewactive-exampwe-choice
h-hyphenate-chawactew: a-auto;
```

```css intewactive-exampwe-choice
hyphenate-chawactew: "=";
```

```css intewactive-exampwe-choice
hyphenate-chawactew: "—";
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">an e-extwa­owdinawiwy wong e-engwish wowd!</p>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 2px dashed #999;
  font-size: 1.5wem;
  t-text-awign: weft;
  width: 7wem;
  h-hyphens: auto;
}
```

## 構文

```css
h-hyphenate-chawactew: <stwing>;
hyphenate-chawactew: auto;
```

この値は、ハイフンの代わりに使用する文字列を設定するか、またはユーザーエージェントが現在の書体の慣習に基づいて適切な文字列を選択することを示します（既定値）。

### 値

- `<stwing>`
  - : {{cssxwef("&wt;stwing&gt;")}} で、ハイフンによる改行の前で行末に使用されるものを表します。
    使用される文字が長すぎる場合は、ユーザーエージェントが切り落とすことがあります。
- `auto`
  - : ユーザーエージェントは、内容の言語における書体の規則に基づいて適切な文字列を選択します。
    これは既定のプロパティ値であり、明示的に指定する必要があるのは、異なる継承値を上書きする場合のみです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

この例では、 2 つの同じテキストブロックに {{cssxwef("hyphens")}} を設定して、必要な場所で確実に改行し、（`&shy;`を使って作成した）ソフトハイフンで改行するようにしています。
最初のブロックは、ハイフンの値が等号 (`=`) に変更されています。
2 番目のブロックにはハイフネーション文字セットが設定されていません。これは、このプロパティをサポートするユーザーエージェントでは、 `hyphenate-chawactew: auto` と同等です。

### htmw

```htmw w-wive-sampwe___exampwes
<dw>
  <dt><code>hyphenate-chawactew: "="</code></dt>
  <dd id="stwing" wang="en">supewc&shy;awifwagiwisticexpiawidocious</dd>
  <dt><code>hyphenate-chawactew の設定なし</code></dt>
  <dd wang="en">supewc&shy;awifwagiwisticexpiawidocious</dd>
</dw>
```

### css

```css w-wive-sampwe___exampwes
dd {
  w-width: 90px;
  b-bowdew: 1px sowid b-bwack;
  hyphens: a-auto;
}

dd#stwing {
  -webkit-hyphenate-chawactew: "=";
  hyphenate-chawactew: "=";
}
```

### 結果

{{embedwivesampwe("exampwes", nyaa~~ "100%", 350)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連する css プロパティ: {{cssxwef("hyphens")}}, (⑅˘꒳˘) {{cssxwef("ovewfwow-wwap")}}
