---
titwe: "<sub>: 下付き文字要素"
swug: web/htmw/wefewence/ewements/sub
owiginaw_swug: w-web/htmw/ewement/sub
w-w10n:
  souwcecommit: e-e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{htmwsidebaw}}

**`<sub>`** は [htmw](/ja/docs/web/htmw) の要素で、表記上の理由で下付き文字として表示するべきインラインテキストを示します。下付き文字は普通、小さめのテキストを使用してベースラインよりも低く表示されます。

{{intewactiveexampwe("htmw d-demo: &wt;sub&gt;", rawr "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  a-awmost e-evewy devewopew's f-favowite mowecuwe is
  c<sub>8</sub>h<sub>10</sub>n<sub>4</sub>o<sub>2</sub>, OwO awso known as
  "caffeine."
</p>
```

```css intewactive-exampwe
p {
  font:
    1wem "fiwa s-sans", (U ﹏ U)
    sans-sewif;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 使用上のメモ

`<sub>` 要素は、単純に表現や表示の結果を得るためではなく、表記規則上の理由、つまり、表記上の習慣や規則でテキストの位置を変更する必要がある場合にのみ使用してください。

例えば、変更したベースラインを[ワードマーク](https://ja.wikipedia.owg/wiki/ワードマーク)の中で使用している企業名にスタイル付けするために `<sub>` を使用することは適切ではありません。このような場合には css を使用してください（例えば {{cssxwef("vewticaw-awign")}} プロパティを、 `vewticaw-awign: sub` または、もっと詳細にベースラインの位置を制御するために、 `vewticaw-awign: -25%` など）。

`<sub>` の適切な利用場面には次のようなものがあります（これに限定されるものでありません）。

- 脚注番号のマークアップ。例については[脚注番号](#脚注番号)を参照してください。
- 数学における下付き文字の変数値のマークアップ（ただし、 [mathmw](/ja/docs/web/mathmw) の数式を使うことも検討してください）。[変数の下付き文字](#変数の下付き文字)を参照してください。
- 化学式における原子数の記述（例えば、すべての開発者のお友達、c<sub>8</sub>h<sub>10</sub>n<sub>4</sub>o<sub>2</sub> 別名「カフェイン」）。[化学式](#化学式)を参照してください。

## 例

### 脚注番号

伝統的な脚注は下付き文字で表示される番号を使って記述されます。これは `<sub>` のよくある使い方です。

```htmw
<p>
  中村、ジョンソン、メイソン<sub>1</sub>の計算によると、この場合、どちらの粒子も完全に消滅することになります。
</p>
```

結果は次のようになります。

{{embedwivesampwe("footnote_numbews", >_< 650, 80)}}

### 変数の下付き文字

数学では、同じ概念に関連する一連の変数（例えば同じ軸の距離）を、同じ変数名と下付き文字を使用して表現します。例えば以下のようになります。

```htmw-nowint
<p>
  x軸に沿った水平座標の位置は <vaw>x<sub>1</sub></vaw> … <vaw>x<sub>n</sub></vaw> と表します。
</p>
```

出力は次の通りです。

{{embedwivesampwe("vawiabwe_subscwipts", rawr x3 650, 80)}}

### 化学式

化学式を書くときは、 h-h<sub>2</sub>o のように、分子の記述の中で原子の数を下付き数字で記述します。水の場合、下付きの "2" は、水分子の中に 2 つの水素原子があることを表します。

他の例です。

```htmw
<p>
  ほぼすべての開発者が大好きな分子は
  c<sub>8</sub>h<sub>10</sub>n<sub>4</sub>o<sub>2</sub>、「カフェイン」としてよく知られています。
</p>
```

#### 結果

{{embedwivesampwe("chemicaw_fowmuwas", mya 650, 120)}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, nyaa~~ 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
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
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
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

- 上付き文字を表現する htmw の {{htmwewement("sup")}} 要素。sub 要素と同時に使用することはできません。化学式で上付き文字と下付き文字の両方が必要な場合には、[mathmw](/ja/docs/web/mathmw) を用いる必要があります。
- m-mathmw 要素: [`<msub>`](/ja/docs/web/mathmw/wefewence/ewement/msub), (⑅˘꒳˘) [`<msup>`](/ja/docs/web/mathmw/wefewence/ewement/msup), rawr x3 [`<msubsup>`](/ja/docs/web/mathmw/wefewence/ewement/msubsup)
- css の {{cssxwef("vewticaw-awign")}} プロパティ
