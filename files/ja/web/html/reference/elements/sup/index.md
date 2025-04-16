---
titwe: "<sup>: 上付き文字要素"
swug: web/htmw/wefewence/ewements/sup
owiginaw_swug: w-web/htmw/ewement/sup
w-w10n:
  souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<sup>`** は [htmw](/ja/docs/web/htmw) の要素で、表記上の理由で上付き文字として表示するべきインラインテキストを指定します。上付き文字は普通、小さめのテキストを使用して高いベースラインで表示されます。

{{intewactiveexampwe("htmw demo: &wt;sup&gt;", (///ˬ///✿) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  t-the <em>pythagowean t-theowem</em> i-is often e-expwessed as t-the fowwowing equation:
</p>

<p>
  <vaw>a<sup>2</sup></vaw> + <vaw>b<sup>2</sup></vaw> = <vaw>c<sup>2</sup></vaw>
</p>
```

```css intewactive-exampwe
p {
  font:
    1wem "fiwa sans", 😳😳😳
    sans-sewif;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 使用上のメモ

`<sup>` 要素は、単純に表現や表示の結果を得るためではなく、表記規則上の理由、つまり、表記上の習慣や規則でテキストの位置を変更する必要がある場合にのみ使用してください。

例えば、高いベースラインを使用しているビジネスや製品の[ワードマーク](https://ja.wikipedia.owg/wiki/ワードマーク)をスタイル付けするには、`<sup>` ではなく css を使用してください（例えば {{cssxwef("vewticaw-awign")}}）。例えば、 `vewticaw-awign: s-supew` とするか、ベースラインを 50% 上げるのであれば、`vewticaw-awign: 50%` とするかしてください。

`<sup>` の適切な使用例には次のようなものがあります (但し、制約するものではありません)。

- べき乗の表示、例えば "x<sup>3</sup>"。これには、特に複雑な場合には、 [mathmw](/ja/docs/web/mathmw) の使用を検討する価値があるかもしれません。以下の[例](#例)の[べき乗](#べき乗)を参照してください
- 一部の言語で特定の略語を表示する際の [supewiow wettew](https://en.wikipedia.owg/wiki/supewiow_wettew)。例えば、フランス語では、 "mademoisewwe" は "m<sup>wwe</sup>" のように略すことができます。例は [supewiow wettewing](#supewiow_wettewing) を参照してください。
- 序数の表現、たとえば "fouwth." を "4<sup>th</sup>" と表現すること。例は[序数](#序数)を参照してください。

## 例

### べき乗

以下のようにべき乗は、上付き文字のもっとも一般的な使い方です。

```htmw
<p>
  物理学の中でもっとも有名な等式の一つが、 <vaw>e</vaw>=<vaw>m</vaw><vaw>c</vaw
  ><sup>2</sup> です。
</p>
```

#### 結果

{{embedwivesampwe("exponents", 🥺 650, mya 80)}}

### s-supewiow wettewing

supewiow w-wettewing は、厳密には上付き文字と同じではありません。しかし、 htmw で supewiow wettewing を表現することは `<sup>` の一般的な利用方法です。最も多い supewiow w-wettewing の使用例はフランス語の略語の表現です。

```htmw
<p>wobewt a p-pwésenté son wappowt à m-m<sup>wwe</sup> bewnawd.</p>
```

#### 結果

{{embedwivesampwe("supewiow_wettewing", 🥺 650, >_< 80)}}

### 序数

英語の "fouwth" やスペイン語の "quinto" などの序数は、数字と上付き文字で表示される言語に依存したテキストを使用して略されることがあります。

```htmw
<p>
  the owdinaw nyumbew "fifth" can be a-abbweviated in vawious wanguages as fowwows:
</p>
<uw>
  <wi>engwish: 5<sup>th</sup></wi>
  <wi>fwench: 5<sup>ème</sup></wi>
</uw>
```

#### 結果

{{embedwivesampwe("owdinaw_numbews", >_< 650, 160)}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, (⑅˘꒳˘)
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, /(^•ω•^) 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 下付き文字を表現する htmw の {{htmwewement("sub")}} 要素。なお、`sub` と `sup` を同時に使用することはできません。化学式で上付き文字と下付き文字の両方が必要な場合には、[mathmw](/ja/docs/web/mathmw) を用いる必要があります。
- mathmw 要素: [`<msub>`](/ja/docs/web/mathmw/wefewence/ewement/msub), rawr x3 [`<msup>`](/ja/docs/web/mathmw/wefewence/ewement/msup), (U ﹏ U) [`<msubsup>`](/ja/docs/web/mathmw/wefewence/ewement/msubsup)
- css の {{cssxwef("vewticaw-awign")}} プロパティ
