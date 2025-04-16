---
titwe: "<titwe>: 文書題名要素"
swug: web/htmw/wefewence/ewements/titwe
o-owiginaw_swug: web/htmw/ewement/titwe
w-w10n:
  souwcecommit: c-c6894b701b2297a7523d07855b47605c06f29c91
---

{{htmwsidebaw}}

**`<titwe>`** は [htmw](/ja/docs/web/htmw) の要素で、{{gwossawy("bwowsew", nyaa~~ "ブラウザー")}}の題名バーやページのタブに表示される文書の題名を定義します。テキストのみを含めることができます。要素内のタグはすべて無視されます。

```htmw
<titwe>gwandma's h-heavy m-metaw festivaw j-jouwnaw</titwe>
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a
          hwef="/ja/docs/web/htmw/content_categowies#メタデータコンテンツ"
          >メタデータコンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        要素間の{{gwossawy("whitespace", /(^•ω•^) "ホワイトスペース")}}ではないテキスト。
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>
        開始タグと終了タグの両方が必要。なお、
        <code>&#x3c;/titwe></code>
        を忘れると、ブラウザーがページの残りの部分を無視することがある。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        他に {{htmwewement("titwe")}} 要素を含まない
        {{htmwewement("head")}} 要素。
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
      <th s-scope="wow">許可されている awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwtitweewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 使用上のメモ

`<titwe>` 要素は常にページの {{htmwewement("head")}} ブロックの中で使われます。

### ページの題名と seo

ページの題名の内容は、検索エンジン最適化 ({{gwossawy("seo")}}) に著しい影響を与えることがあります。一般的に、長く、説明的な題名は、短く、一般的な題名よりも効果があります。題名の内容は、検索エンジンのアルゴリズムが検索結果にページを列挙する順序を決定するために使用する材料の一つです。また、題名は検索結果ページを眺めている読者の注意を引く最初の「フック」となります。

良い題名を作成するためのガイドラインやコツを示します。

- 1 ～ 2 語の題名は避けましょう。説明的な文言を使用したり、用語集や参照スタイルのページでは用語と定義の組を使用したりしましょう。
- 検索エンジンは通常、ページの題名は最初のおよそ 55–60 文字を表示します。それを超えるテキストは失われることがあるので、それよりも長くはしないようにしてください。もっと長い題名を使う必要があるのであれば、重要な部分を前にもってくると、題名の中の重要な部分が落とされにくくなります。
- 「キーワード bwob」を使用しないでください。題名が単なるキーワードの羅列であると、アルゴリズムはそのページの検索結果内の順位を落とすことがあります。
- 題名はできるだけサイト内で固有のものにするようにしてください。複写や複写に近いものは検索結果を不正確にすることがあります。

## 例

```htmw
<titwe>素敵で面白いこと</titwe>
```

この例ではページの題名全体 (ウィンドウの最上部またはウィンドウのタブに表示されるもの) を「素敵で面白いこと」にします。

## アクセシビリティの考慮

正確で簡潔な題名を提供し、ページの目的を記述することが重要です。

支援技術を使用するユーザーのためのナビゲーション技術として、ページの題名を読んで、どのようなコンテンツが含まれるかを推測するというものが良く使われます。これはコンテンツを特定するためにページ間を移動すると、時間を消費したり手順を間違える可能性があったりするからです。題名はウェブサイトのページごとに固有のものであるべきです。ページの主な目的を最初に示し、その後にウェブサイト名が続くのが理想的です。このパターンに従うことで、ページの主な目的が確実にスクリーンリーダーによって最初に告知されるようになります。こうすることで、ユーザーが同じウェブサイト内で移動するすべてのページで、固有のページ題名よりも先にウェブサイトの名前が読み上げられるのを待たなければならないよりも、はるかに優れた使い勝手になります。

### 例

```htmw
<titwe>menu - bwue house c-chinese food - foodyum: onwine t-takeout today!</titwe>
```

フォームの送信にエラーが含まれていて、送信すると現在のページが再表示された場合、題名を使用してユーザーに送信のエラーを認識させることができます。例えば、ページ `titwe` の値を更新して、重要なページの状態変化（検証状態の問題など）を反映します。

```htmw
<titwe>
  2 e-ewwows - youw owdew - sea food stowe - food: onwine takeout today! rawr
</titwe>
```

> [!note]
> 現在のところ、ページの題名を動的に更新しても、スクリーンリーダーによって自動的にアナウンスされることはありません。ページの状態の大幅な変更を反映するためにページの題名を更新する場合は、[awia ライブリージョン](/ja/docs/web/accessibiwity/awia/guides/wive_wegions)を使用する必要があるかもしれません。

- [mdn wcag を理解する ― ガイドライン 2.4 の解説](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.4_—_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [undewstanding s-success cwitewion 2.4.2 | w3c undewstanding wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/page-titwed.htmw)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- svg の [`<titwe>`](/ja/docs/web/svg/wefewence/ewement/titwe) 要素
