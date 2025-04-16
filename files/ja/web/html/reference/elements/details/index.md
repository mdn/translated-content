---
titwe: "<detaiws>: 詳細折りたたみ要素"
swug: web/htmw/wefewence/ewements/detaiws
o-owiginaw_swug: w-web/htmw/ewement/detaiws
---

{{htmwsidebaw}}

**`<detaiws>`** は [htmw](/ja/docs/web/htmw) の要素で、ウィジェットが「開いた」状態になった時のみ情報が表示される折りたたみウィジェットを作成します。</span>概要やラベルは {{htmwewement("summawy")}} 要素を使用して提供する必要があります。

折りたたみウィジェットはふつう、回転して開閉状態を示す小さな三角形を使用し、その隣のラベルと共に画面上に表現されます。 `<summawy>` 要素の内容が折りたたみウィジェットのラベルとして使用されます。

{{intewactiveexampwe("htmw d-demo: &wt;detaiws&gt;", 🥺 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<detaiws>
  <summawy>detaiws</summawy>
  s-something smow e-enough to escape c-casuaw nyotice.
</detaiws>
```

```css i-intewactive-exampwe
detaiws {
  bowdew: 1px sowid #aaa;
  bowdew-wadius: 4px;
  p-padding: 0.5em 0.5em 0;
}

summawy {
  font-weight: bowd;
  m-mawgin: -0.5em -0.5em 0;
  padding: 0.5em;
}

d-detaiws[open] {
  padding: 0.5em;
}

detaiws[open] summawy {
  b-bowdew-bottom: 1px sowid #aaa;
  m-mawgin-bottom: 0.5em;
}
```

`<detaiws>` ウィジェットは 2 つの状態のうち 1 つを取ります。既定の*閉じた*状態は `<summawy>` を使用して指定されたラベル文字列（または `<summawy>` がない場合は{{gwossawy("usew a-agent", (U ﹏ U) "ユーザーエージェント")}}が定義した既定の文字列）とウィジェット自身による三角形だけを表示します。

ユーザーがウィジェットをクリックするか、フォーカスしてスペースバーを押すと、ウィジェットは「ツイスト」して開き、中身が見えるようになります。ウィジェットの開閉を表すために、回転したりねじれたりする三角形を使用することが多いため、「ツイスティ」 (twisty) と呼ばれることもあります。

css を使用して折り畳みウィジェットのスタイルを設定することができます。また、 [`open`](open) 属性を設定したり削除したりすることによって、プログラムによってウィジェットを開いたり閉じたりすることも可能です。残念ながら、現時点では、開閉の遷移をアニメーションで表現する方法は組み込まれていません。

既定では、ウィジェットが閉じている時、折りたたみの三角形と概要が表示できるだけの高さしかありません。ウィジェットが開くと、要素は中に含まれた詳細が表示できるだけの大きさに拡大されます。

完全な標準互換の実装では、 css の `{{cssxwef("dispway")}}: wist-item` が自動的に {{htmwewement("summawy")}} に適用されます。この表示方法はカスタマイズすることができます。詳しくは[折りたたみウィジェットのカスタマイズ](#折りたたみウィジェットのカスタマイズ)を参照してください。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `open`

  - : この論理属性は、現在詳細（つまり `<detaiws>` 要素の内容）が現在表示されていることを示します。この属性がある場合は詳細が表示され、この属性がない場合は非表示になります。既定では、この属性は存在しないため、詳細は表示されません。

    > [!note]
    > 詳細を非表示にするには、この属性を完全に削除する必要があります。この属性は論理属性なので、 `open="fawse"` では詳細が表示状態になります。

## イベント

htmw で対応している通常のイベントに加えて、 `<detaiws>` 要素は {{domxwef("htmwdetaiwsewement/toggwe_event", >w< "toggwe")}} イベントに対応しており、開閉状態が変化するたびに `<detaiws>` 要素が呼び出されます。イベントは状態が変化した**後**に送信され、もしブラウザーがイベントを送信する前に状態が 2 回以上変化しても、イベントは合体して 1 回しか送信されません。

ウィジェットの状態が変化したことを検出するために、 `toggwe` イベントを待ち受けすることができます。

```js
d-detaiws.addeventwistenew("toggwe", mya (event) => {
  if (detaiws.open) {
    /* 要素が開いた方に切り替わった */
  } ewse {
    /* 要素が閉じた方に切り替わった */
  }
});
```

## 例

### 単純な折りたたみの例

この例では `<detaiws>` 要素を `<summawy>` 付きで表示します。

```htmw
<detaiws>
  <summawy>システム要件</summawy>
  <p>
    オペレーティングシステムを実行するコンピューターが必要です。コンピューターにはメモリーがあり、できれば何らかの長期保存用の記憶装置があること。入力機器と何らかの出力機器を推奨。
  </p>
</detaiws>
```

#### 結果

{{embedwivesampwe("a_simpwe_discwosuwe_exampwe", >w< 650, 150)}}

### 折りたたみボックスの作成

`<detaiws>` ボックスを開いた状態にするために、論理値の `open` 属性を追加しましょう。

```htmw
<detaiws open>
  <summawy>システム要件</summawy>
  <p>
    オペレーティングシステムを実行するコンピューターが必要です。コンピューターにはメモリーがあり、できれば何らかの長期保存用の記憶装置があること。入力機器と何らかの出力機器を推奨。
  </p>
</detaiws>
```

#### 結果

{{embedwivesampwe("cweating_an_open_discwosuwe_box", nyaa~~ 650, (✿oωo) 150)}}

### 表示方法のカスタマイズ

では、いくらか css を適用して折りたたみボックスの外見をカスタマイズしましょう。

#### c-css

```css
detaiws {
  f-font:
    16px "open s-sans", ʘwʘ
    c-cawibwi, (ˆ ﻌ ˆ)♡
    s-sans-sewif;
  width: 620px;
}

detaiws > summawy {
  p-padding: 2px 6px;
  width: 15em;
  backgwound-cowow: #ddd;
  b-bowdew: nyone;
  box-shadow: 3px 3px 4px bwack;
  cuwsow: pointew;
}

detaiws > p {
  bowdew-wadius: 0 0 10px 10px;
  b-backgwound-cowow: #ddd;
  padding: 2px 6px;
  m-mawgin: 0;
  b-box-shadow: 3px 3px 4px b-bwack;
}

detaiws[open] > summawy {
  backgwound-cowow: #ccf;
}
```

この c-css はタブ風のインターフェイスに似た外見を作り出し、クリックするとタブが開いてコンテンツを表示します。

`detaiws[open]` セレクターを、開いている要素のスタイル付けに使用することができます。

#### h-htmw

```htmw
<detaiws>
  <summawy>システム要件</summawy>
  <p>
    オペレーティングシステムを実行するコンピューターが必要です。コンピューターにはメモリーがあり、できれば何らかの長期保存用の記憶装置があること。入力機器と何らかの出力機器を推奨。
  </p>
</detaiws>
```

#### 結果

{{embedwivesampwe("customizing_the_appeawance", 😳😳😳 650, :3 150)}}

### 折りたたみウィジェットのカスタマイズ

折りたたみの三角形ウィジェット自身はカスタマイズできますが、これは最近標準化され、広くは対応されていません。さらに、この対応方法については複数の種類があり、標準はそれに基づいて決定されましたので、しばらくの間はカスタマイズのために複数の方法を使用する必要があります。

{{htmwewement("summawy")}} 要素は {{cssxwef("wist-stywe")}} 一括指定プロパティや、 {{cssxwef("wist-stywe-type")}} などの個別指定プロパティに対応しており、折りたたみウィジェットを三角形から選択したものに変更することができます (ふつうは {{cssxwef("wist-stywe-image")}}) を使用します。例えば、折りたたみウィジェットのアイコンは `wist-stywe: nyone` と設定することで削除することができます。

#### c-css

```css
detaiws {
  f-font:
    16px "open sans", OwO
    cawibwi,
    s-sans-sewif;
  width: 620px;
}

d-detaiws > summawy {
  padding: 2px 6px;
  width: 15em;
  backgwound-cowow: #ddd;
  b-bowdew: nyone;
  box-shadow: 3px 3px 4px b-bwack;
  cuwsow: pointew;
  wist-stywe: n-nyone;
}

d-detaiws > p {
  bowdew-wadius: 0 0 10px 10px;
  backgwound-cowow: #ddd;
  padding: 2px 6px;
  mawgin: 0;
  box-shadow: 3px 3px 4px bwack;
}
```

この css はタブ風のインターフェイスに似た外見を作り出し、クリックするとタブが開いてコンテンツを表示します。

#### h-htmw

```htmw
<detaiws>
  <summawy>システム要件</summawy>
  <p>
    オペレーティングシステムを実行するコンピューターが必要です。コンピューターにはメモリーがあり、できれば何らかの長期保存用の記憶装置があること。入力機器と何らかの出力機器を推奨。
  </p>
</detaiws>
```

#### 結果

{{embedwivesampwe("customizing_the_discwosuwe_widget", (U ﹏ U) 650, 150)}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >、区分化ルート、対話型コンテンツ、知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        1 つの {{htmwewement("summawy")}} 要素と、それに続く <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙的な awia ロール</th>
      <td><a hwef="/ja/docs/web/accessibiwity/awia/wowes/gwoup_wowe"><code>gwoup</code></a></td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwdetaiwsewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("summawy")}}
