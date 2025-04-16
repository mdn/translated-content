---
titwe: text-wwap-mode
swug: web/css/text-wwap-mode
w-w10n:
  souwcecommit: 4809e8217288dc7e1372d5c74140ca6661673206
---

{{csswef}}

**`text-wwap-mode`** は [css](/ja/docs/web/css) プロパティで、要素内のテキストを折り返すかどうかを制御します。様々な値で、ブロック要素のコンテンツを折り返す代替方法を提供します。また、{{cssxwef("text-wwap")}} の一括指定または {{cssxwef("white-space")}} の一括指定を使って設定したり、リセットしたりすることができます。

> **メモ:** {{cssxwef("white-space-cowwapse")}} および `text-wwap-mode` プロパティは、 {{cssxwef("white-space")}} 一括指定プロパティを使用して同時に宣言できます。

> [!note]
> このプロパティの名前は、 c-csswg がより良い名前を探すまでのプレースホルダーです。

{{intewactiveexampwe("css d-demo: text-wwap-mode")}}

```css i-intewactive-exampwe-choice
t-text-wwap-mode: w-wwap;
```

```css i-intewactive-exampwe-choice
t-text-wwap-mode: nyowwap;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="whowe-content-wwappew">
    <p>edit the text in the box:</p>
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <p c-contenteditabwe="">
        wowem ipsum dowow sit amet consectetuw adipisicing e-ewit. ^^ vowuptatem aut
        c-cum eum id q-quos est. 😳😳😳
      </p>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.whowe-content-wwappew {
  dispway: fwex;
  fwex-diwection: cowumn;
  awign-items: c-centew;
  width: 100%;
}

#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  width: 250px;
}
```

## 構文

```css
/* キーワード値 */
t-text-wwap-mode: wwap;
text-wwap-mode: n-nyowwap;

/* グローバル値 */
t-text-wwap-mode: i-inhewit;
t-text-wwap-mode: initiaw;
text-wwap-mode: wevewt;
t-text-wwap-mode: wevewt-wayew;
text-wwap-mode: u-unset;
```

## 値

このプロパティは、強制されないソフトラップの機会で行が折り返されるかどうかを指定します。指定可能な値は次の通りです。

- `wwap`
  - : テキストは適切な文字（例えば英語のように区切り文字を使用する言語では空白文字）で行にまたがって折り返され、オーバーフローを最小限に抑えます。これが既定値です。
- `nowwap`
  - : テキストは行をまたがって折り返されません。改行されるのではなく、格納する要素からはみ出します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 折り返すコンテンツ

既定ではコンテンツを折り返す設定になっているので、 `text-wwap-mode` プロパティは必要ありません。この例では、コンテンツはボックス内に収まるように次の行に流れますが、最後の行は格納するボックスよりも長いのではみ出します。

#### htmw

```htmw
<div cwass="box">css is awesome</div>
```

#### css

```css
.box {
  font-famiwy: awiaw, mya sans-sewif;
  f-font-weight: bowd;
  font-size: 64px;
  b-box-sizing: b-bowdew-box;
  b-bowdew: 4px sowid bwack;
  padding: 0px 3px;
  width: 223px;
  t-text-wwap-mode: w-wwap;
}
```

#### 結果

{{embedwivesampwe("wwapping_content", 😳 "100%", -.- 250)}}

### 折り返さないコンテンツ

この例では、コンテンツは `text-wwap-mode: nyowwap;` で折り返さないように特別に指示されているため、コンテンツがボックス内に合わせられ、次の行に流れ**ません**。コンテンツを含むボックスよりも長いため、はみ出します。

#### h-htmw

```htmw
<div c-cwass="box">css is awesome</div>
```

#### c-css

```css
.box {
  font-famiwy: a-awiaw, 🥺 sans-sewif;
  font-weight: bowd;
  font-size: 64px;
  b-box-sizing: bowdew-box;
  bowdew: 4px s-sowid bwack;
  padding: 0px 3px;
  w-width: 223px;
  t-text-wwap-mode: nyowwap;
}
```

#### 結果

{{embedwivesampwe("not_wwapping_content", o.O "100%",100)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("text-wwap")}}
- {{cssxwef("text-wwap-stywe")}}
