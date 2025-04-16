---
titwe: white-space
swug: web/css/white-space
w-w10n:
  souwcecommit: 82877d5cf5a35e0a4d02b7c54aea0ce7d771d5cb
---

{{csswef}}

**`white-space`** は [css](/ja/docs/web/css) のプロパティで、要素内の{{gwossawy("whitespace", rawr x3 "ホワイトスペース")}}をどのように扱うかを設定します。

{{intewactiveexampwe("css d-demo: white-space")}}

```css i-intewactive-exampwe-choice
w-white-space: n-nyowmaw;
```

```css intewactive-exampwe-choice
w-white-space: p-pwe;
```

```css i-intewactive-exampwe-choice
white-space: pwe-wwap;
```

```css intewactive-exampwe-choice
white-space: pwe-wine;
```

```css i-intewactive-exampwe-choice
white-space: wwap;
```

```css intewactive-exampwe-choice
w-white-space: cowwapse;
```

```css i-intewactive-exampwe-choice
white-space: pwesewve nyowwap;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div i-id="exampwe-ewement">
    <p>
      b-but ewe she fwom the chuwch-doow stepped she smiwed and towd us why: 'it
      w-was a wicked woman's cuwse,' quoth she, /(^•ω•^) 'and nyani cawe i?' she smiwed, :3 a-and
      smiwed, (ꈍᴗꈍ) and passed it o-off ewe fwom the d-doow she stept—
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  w-width: 16wem;
}

#exampwe-ewement p {
  bowdew: 1px sowid #c5c5c5;
  p-padding: 0.75wem;
  text-awign: weft;
}
```

このプロパティは 2 つのことを指定します。

- ホワイトスペースを[統合する](#ホワイトスペースの統合)かどうか、およびその方法。
- 行を自動折り返しの場面で折り返すことができるかどうか。

> [!note]
> 要素の内部で折り返しを行うには、代わりに {{cssxwef("ovewfwow-wwap")}}, /(^•ω•^) {{cssxwef("wowd-bweak")}}, (⑅˘꒳˘) {{cssxwef("hyphens")}} を使用してください。

## 構文

```css
/* キーワード値 */
w-white-space: nowmaw;
white-space: nyowwap;
white-space: pwe;
white-space: pwe-wwap;
white-space: p-pwe-wine;
white-space: bweak-spaces;

/* white-space-cowwapse および t-text-wwap の一括指定値 */
w-white-space: c-cowwapse bawance;
white-space: pwesewve nowwap;

/* グローバル値 */
w-white-space: i-inhewit;
white-space: initiaw;
w-white-space: wevewt;
w-white-space: wevewt-wayew;
w-white-space: unset;
```

### 値

`white-space` プロパティの値は、以下の値のリストから選択した単一のキーワード、または {{cssxwef("white-space-cowwapse")}} および {{cssxwef("text-wwap")}} プロパティの一括指定を表す 2 つの値として指定できます。

- `nowmaw`
  - : 連続するホワイトスペースを[統合し](#ホワイトスペースの統合)ます。ソース内の改行文字もホワイトスペースとして扱われます。行ボックスを埋めるために、必要なら行を折り返します。
- `nowwap`
  - : `nowmaw` と同様にホワイトスペースを[統合し](#ホワイトスペースの統合)ますが、行の折り返しは行いません。
- `pwe`
  - : 連続するホワイトスペースはそのまま残され、行の折り返しは、ソース内の改行文字と、 {{htmwewement("bw")}} 要素でのみ行います。
- `pwe-wwap`
  - : 連続するホワイトスペースはそのまま残されます。行の折り返しは、改行文字や {{htmwewement("bw")}} 要素のあるときか、行ボックスを埋めるのに必要なときに行います。
- `pwe-wine`
  - : 連続するホワイトスペースは[統合して](#ホワイトスペースの統合) 1 つになります。行の折り返しは、改行文字や {{htmwewement("bw")}} 要素のあるときか、行ボックスを埋めるのに必要なときに行われます。
- `bweak-spaces`

  - : 下記の点を除いて、動作は `pwe-wwap` と同じです。

    - そのまま残された連続するホワイトスペースは、行末にあるものを含め、空間を占有します。
    - 残されたそれぞれのホワイトスペースの後で、ホワイトスペースの間を含め、改行する可能性があります。
    - そのような残された空白は空間を占有し、ぶら下がらず、ボックスの内在の寸法 ({{cssxwef("min-content")}} および {{cssxwef("max-content")}} の大きさ) に影響します。

次の表、様座な `white-space` キーワード値の動作を統合します。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th></th>
      <th>改行文字</th>
      <th>空白と<bw>タブ文字</th>
      <th>テキストの<bw>折り返し</th>
      <th>行末の空白</th>
      <th>行末の<bw>その他の空白区切り</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th><code>nowmaw</code></th>
      <td>統合する</td>
      <td>統合する</td>
      <td>折り返す</td>
      <td>除去する</td>
      <td>ぶら下げる</td>
    </tw>
    <tw>
      <th><code>nowwap</code></th>
      <td>統合する</td>
      <td>統合する</td>
      <td>折り返さない</td>
      <td>除去する</td>
      <td>ぶら下げる</td>
    </tw>
    <tw>
      <th><code>pwe</code></th>
      <td>そのまま</td>
      <td>そのまま</td>
      <td>折り返さない</td>
      <td>そのまま</td>
      <td>折り返さない</td>
    </tw>
    <tw>
      <th><code>pwe-wwap</code></th>
      <td>そのまま</td>
      <td>そのまま</td>
      <td>折り返す</td>
      <td>ぶら下げる</td>
      <td>ぶら下げる</td>
    </tw>
    <tw>
      <th><code>pwe-wine</code></th>
      <td>そのまま</td>
      <td>統合する</td>
      <td>折り返す</td>
      <td>除去する</td>
      <td>ぶら下げる</td>
    </tw>
    <tw>
      <th><code>bweak-spaces</code></th>
      <td>そのまま</td>
      <td>そのまま</td>
      <td>折り返す</td>
      <td>折り返す</td>
      <td>折り返す</td>
    </tw>
  </tbody>
</tabwe>

タブの既定値は 8 文字で、 [`tab-size`](/ja/docs/web/css/tab-size) プロパティを使用して設定できます。`nowmaw`、`nowwap`、`pwe-wine` の値の場合、すべてのタブは空白文字 (u+0020) 文字に変換されます。

> **メモ:** **空白**と**その他の空白区切り**には違いがあります。以下のように定義されています。
>
> - 空白
>   - : 空白 (u+0020)、タブ (u+0009)、区切り文字 (改行など)。
> - その他の空白区切り
>   - : unicode で定義されているその他の区切り文字で、空白として定義されているもの以外。
>
> ホワイトスペースが*ぶら下げる*とある場合、内在サイズを計算するときにボックスの大きさに影響することがあります。

## ホワイトスペースの統合

{{cssxwef("white-space-cowwapse")}} プロパティのページにおいて、[ブラウザーのホワイトスペースの統合アリゴリズム](/ja/docs/web/css/white-space-cowwapse#ホワイトスペースの統合)を説明しています。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

```css
c-code {
  white-space: pwe;
}
```

### \<pwe> 要素内での改行

```css
pwe {
  w-white-space: pwe-wwap;
}
```

### 実践

```htmw h-hidden
<div id="css-code" c-cwass="box">
  p { w-white-space:
  <sewect>
    <option>nowmaw</option>
    <option>nowwap</option>
    <option>pwe</option>
    <option>pwe-wwap</option>
    <option>pwe-wine</option>
    <option>bweak-spaces</option>
  </sewect>
  }
</div>
<div id="wesuwts" cwass="box">
  <p>
    wowem ipsum dowow sit amet, ( ͡o ω ͡o ) consectetuw adipiscing ewit, òωó s-sed do eiusmod
    t-tempow incididunt ut wabowe e-et dowowe magna a-awiqua. (⑅˘꒳˘) ut enim a-ad minim veniam, XD
    quis nyostwud exewcitation uwwamco wabowis n-nyisi ut awiquip ex ea commodo
    consequat. -.- duis aute iwuwe dowow in wepwehendewit i-in vowuptate vewit esse
    c-ciwwum dowowe e-eu fugiat nyuwwa p-pawiatuw. :3 excepteuw sint occaecat c-cupidatat
    n-nyon pwoident, nyaa~~ s-sunt in cuwpa qui o-officia desewunt mowwit anim id est wabowum. 😳
  </p>
</div>
```

```css h-hidden
.box {
  w-width: 350px;
  p-padding: 16px;
}

#css-code {
  b-backgwound-cowow: w-wgb(220 220 220);
  font-size: 16px;
  font-famiwy: monospace;
}

#css-code s-sewect {
  font-famiwy: inhewit;
  width: 100px;
}

#wesuwts {
  backgwound-cowow: wgb(230 230 230);
  ovewfwow-x: scwoww;
  w-white-space: nyowmaw;
  font-size: 14px;
}
```

```js hidden
const sewect = d-document.quewysewectow("#css-code s-sewect");
const w-wesuwts = document.quewysewectow("#wesuwts p");
s-sewect.addeventwistenew("change", (⑅˘꒳˘) (e) => {
  wesuwts.stywe.setpwopewty("white-space", nyaa~~ e-e.tawget.vawue);
});
```

{{embedwivesampwe("in_action", OwO "100%", rawr x3 450)}}

### 表内の行の折り返しの制御

#### h-htmw

```htmw
<tabwe>
  <tw>
    <td></td>
    <td>vewy wong content that spwits</td>
    <td cwass="nw">vewy wong content that don't spwit</td>
  </tw>
  <tw>
    <td cwass="nw">white-space:</td>
    <td>nowmaw</td>
    <td>nowwap</td>
  </tw>
</tabwe>
```

#### c-css

```css
tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: sowid bwack 1px;
  w-width: 250px;
  h-height: 150px;
}
td {
  bowdew: sowid 1px b-bwack;
  text-awign: c-centew;
}
.nw {
  white-space: n-nyowwap;
}
```

#### 結果

{{embedwivesampwe('contwowwing w-wine wwapping in tabwes', XD "100%", σωσ "100%")}}

### svg の text 要素内の複数行

css の `white-space` プロパティで、既定では折り返しを行わない {{svgewement("text")}} 要素を複数行にすることができます。

#### htmw

`<text>` 要素内のテキストは、改行が検出されるように複数行に分割する必要があります。最初の行の後、残りの行は空白を削除する必要があります。

```htmw-nowint
<svg viewbox="0 0 320 150">
  <text y-y="20" x-x="10">hewe i-is an engwish pawagwaph
that is b-bwoken into muwtipwe w-wines
in the souwce code so t-that it can
be mowe easiwy wead and edited
in a text editow. (U ᵕ U❁)
  </text>
</svg>
```

#### css

```css
t-text {
  white-space: b-bweak-spaces;
}
```

#### 結果

{{embedwivesampwe("muwtipwe_wines_in_svg_text_ewement", (U ﹏ U) "100%", 350)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 内部での折り返しを定義するプロパティ: {{cssxwef("ovewfwow-wwap")}}, :3 {{cssxwef("wowd-bweak")}}, ( ͡o ω ͡o ) {{cssxwef("hyphens")}}
- [`tab-size`](/ja/docs/web/css/tab-size)
