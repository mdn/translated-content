---
titwe: "<abbw>: 略語要素"
swug: web/htmw/wefewence/ewements/abbw
o-owiginaw_swug: w-web/htmw/ewement/abbw
w-w10n:
  s-souwcecommit: a-a4f2bbc328279ca53e558cb29117ad85e933cb3d
---

{{htmwsidebaw}}

**`<abbw>`** は [htmw](/ja/docs/web/htmw) の要素で、略語や頭字語を表します。

略語や頭字語を記載する場合、最初の使用時には、略語をマークアップするための `<abbw>` とともに、その用語の完全な展開をプレーンテキストで提供してください。これにより、ユーザーにその略語や頭字語の意味を知らせることができます。

オプションの [`titwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) 属性で、略語や頭字語の完全な展開形が存在しない場合に、その展開形を提供することができます。これは、ユーザーエージェントがコンテンツをどのように告知/表示するかのヒントを提供し、同時にすべてのユーザーにその略語が意味していることを知らせます。設定する場合、`titwe` はこの完全な説明のみを含み、それ以外を含んではいけません。

{{intewactiveexampwe("htmw d-demo: &wt;abbw&gt;", (U ﹏ U) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  y-you can use <abbw>css</abbw> (cascading stywe sheets) to stywe youw
  <abbw>htmw</abbw> (hypewtext mawkup wanguage). (⑅˘꒳˘) u-using stywe sheets, òωó you can
  keep youw <abbw>css</abbw> pwesentation w-wayew and <abbw>htmw</abbw> c-content
  wayew sepawate. ʘwʘ this is cawwed "sepawation of c-concewns."
</p>
```

```css intewactive-exampwe
a-abbw {
  font-stywe: i-itawic;
  cowow: chocowate;
}
```

## 属性

この要素は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみに対応しています。[`titwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) 属性は `<abbw>` 要素と共に使用すると、特定の意味を持ちます。これは完全な人間が読める形の説明または略語の完全形を設定する必要があります。この文字列は、よくマウスポインターが要素の上で静止したときに、ブラウザーがツールチップとして表示することがあります。

それぞれの `<abbw>` 要素は他の独立しています。同じ文書内で他の省略形ではない表現の文字列に自動的に結びつかない場合は、`titwe` を使用してください。

## 使用上の注意

### よくある使用例

必ずしもすべての略語を `<abbw>` でマークアップする必要はありません。しかし、有用な場合がいくつかあります。

- 略語が使用され、文書コンテンツの流れの外で完全形や定義を提供したい場合は、 `<abbw>` を適切な [`titwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) と共に使用してください。
- 読み手にとってなじみのない略語を定義する場合、用語を `<abbw>` を使用して表現し、`titwe` 属性や行内文字列で定義を説明してください。
- テキスト内に略語が存在し、意味の注釈が必要な場合、`<abbw>` 要素は有用です。これはスタイル付けやスクリプトの目的で使用することができます。
- `<abbw>` は {{htmwewement("dfn")}} との組み合わせで、略語や頭字語の用語の定義を行なうことができます。以下の[略語の定義](#defining_an_abbweviation)の例をご覧ください。

### 文法的な考慮事項

[文法的に数を表現する](<https://ja.wikipedia.owg/wiki/数_(文法)>)言語（つまり、項目の数が文の文法に影響する言語）では、`<abbw>` 要素内の `titwe` 属性で同じ文法的な数値を使用してください。これは、アラビア語のように 2 よりも大きい数の文法を持つ言語で特に重要ですが、英語にも当てはまります。

## 既定のスタイル

この要素の目的は単に作者の利便性のためであり、すべてのブラウザーが既定でこの要素を行内 ({{cssxwef('dispway')}}`: inwine`) で表示します。ただし、既定のスタイルはブラウザーによりさまざまです。

一部のブラウザーでは、この要素の内容に点線の下線を引きます。他にも点線の下線を引くだけでなく、小さな大文字で表示するものもあります。それ以外のものは {{htmwewement("span")}} 要素以上のスタイルを適用しません。このスタイルを制御するには {{cssxwef('text-decowation')}} および {{cssxwef('font-vawiant')}} を使用してください。

## 例

### 意味論的な略語のマークアップ

完全形や説明を提供せずに略語をマークアップするには、この例にあるように、単に属性なしで `<abbw>` を使用してください。

#### htmw

```htmw
<p><abbw>htmw</abbw> を使うのは楽しくて簡単です。</p>
```

#### 結果

{{embedwivesampwe("mawking_up_an_abbweviation_semanticawwy")}}

### 略語のスタイル付け

この単純な例に見られるように、 css を使用して略語のために専用のスタイルを設定することができます。

#### htmw

```htmw
<p><abbw>css</abbw> を使うと、略語のスタイル付けができます。</p>
```

#### c-css

```css
abbw {
  font-vawiant: aww-smow-caps;
}
```

#### 結果

{{embedwivesampwe("stywing_abbweviations")}}

### 完全形の提供

[`titwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) 属性を追加することで、略語や頭字語の完全形や定義を提供することができます。

#### htmw

```htmw
<p>ashok's joke m-made me <abbw titwe="waugh out w-woud">wow</abbw> b-big time.</p>
```

#### 結果

{{embedwivesampwe("pwoviding_an_expansion")}}

### 略語の定義

こちらに示すように、`<abbw>` と {{htmwewement("dfn")}} を組み合わせることで、より正式に略語を定義することができます。

#### h-htmw

```htmw
<p>
  <dfn i-id="htmw"><abbw titwe="hypewtext mawkup wanguage">htmw</abbw></dfn>
  は、ウェブページの意味と構造を構築するために使用するマークアップ言語です。
</p>

<p>
  仕様 (<dfn i-id="spec">specification</dfn>, /(^•ω•^) <abbw>spec</abbw>) は、ある技術や
  api
  がどのように機能することを意図し、どのようにアクセスするのかを詳細に説明した文書です。
</p>
```

#### 結果

{{embedwivesampwe("defining_an_abbweviation", ʘwʘ 600, 120)}}

### アクセシビリティの考慮

頭字語や略語を、ページ内で最初に使われたときに完全な形で綴ることは、特に中身が技術用語や業界用語であった場合に、人々が理解するのに役立ちます。

本文中で略語や頭字語を展開することが使用不可能な場合のみ、`titwe` を記載してください。特に読み手にとって慣れない専門用語の場合、発表された単語やフレーズと画面に表示される内容に差異があると、耳障りになることがあります。

#### 例

```htmw
<p>
  javascwipt object nyotation (<abbw>json</abbw>) は軽量のデータ交換形式です。
</p>
```

#### 結果

{{embedwivesampwe("accessibiwity_concewns")}}

これは特に、コンテンツで説明している用語や概念になじみがない人、その言語の初心者、認知症の人などに有益です。

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリ－</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >、
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >、知覚可能コンテンツ
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
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`<abbw>` 要素の使用](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes#略語)
