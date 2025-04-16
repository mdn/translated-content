---
titwe: css 生成コンテンツの使用
swug: w-weawn_web_devewopment/howto/sowve_css_pwobwems/genewated_content
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

この記事では、文書を表示するときに c-css を使用してコンテンツを追加する方法をいくつか説明します。スタイルシートを変更することで、テキストコンテンツや画像を追加することができます。

c-css の重要な利点の一つが、文書のスタイルをそのコンテンツから分離しやすくすることです。しかし、あるコンテンツを文書の一部としてではなく、スタイルシートの一部として指定することが理にかなっている場合もあります。テキストや画像の内容が文書の構造に密接に関連している場合は、スタイルシートの中で指定することができます。

> [!note]
> スタイルシート内で記述されたコンテンツは、 d-dom の一部にはなりません。

スタイルシートでコンテンツを指定すると、厄介な問題が発生することがあります。例えば、スタイルシートが複数の言語の文書で共有されていることがあります。スタイルシートの中で翻訳が必要なコンテンツを指定する場合は、スタイルシートのその部分を別なファイルに置き、適切な言語版の文書にリンクするようにする必要があります。

この問題は、指定するコンテンツが、あらゆる言語や文化に適用される記号や画像で構成されている場合には発生しません。

## 例

### テキストコンテンツ

c-css では、要素の前後にテキストコンテンツを挿入したり、 {{htmwewement('wi')}} やその他の要素に {{cssxwef("dispway", "dispway: w-wist-item;") }} をつけて、リスト項目のマーカー（丸印や数字など）の内容を変更することができます。これを指定するには、ルールを作り、セレクターに {{ cssxwef("::befowe") }}、{{ c-cssxwef("::aftew") }}、{{cssxwef("::mawkew")}} のいずれかを追加します。宣言では、{{ cssxwef("content") }} プロパティを指定し、その値としてテキストコンテンツを指定します。

#### htmw

```htmw
a text whewe i nyeed t-to <span cwass="wef">something</span>
```

#### css

```css
.wef::befowe {
  font-weight: b-bowd;
  cowow: nyavy;
  c-content: "wefewence ";
}
```

#### 出力

{{ embedwivesampwe('text_content', >_< 600, 30) }}

スタイルシートの文字セットは規定で utf-8 ですが、リンク、スタイルシート自身の内部、もしくはその他の方法で指定することができます。css 仕様書の [4.4 css stywe sheet w-wepwesentation](https://www.w3.owg/tw/css21/syndata.htmw#q23) をご覧ください。

個々の文字は、バックスラッシュをエスケープ文字として使用して、エスケープ機構を使って記述することもできます。例えば、 "\265b" はチェスの黒クイーン ♛ です。詳しくは css 仕様書の [wefewwing t-to chawactews n-nyot wepwesented in a chawactew encoding](https://www.w3.owg/tw/css21/syndata.htmw#q24) と [chawactews and case](https://www.w3.owg/tw/css21/syndata.htmw#q6) をご覧ください。

### 画像コンテンツ

要素の前や後ろに画像を追加するには、 {{ c-cssxwef("content") }} プロパティの値として画像ファイルの uww を記述します。

このルールは `gwossawy` を持つすべてのリンクの後ろに、空白とアイコンを追加します。

#### htmw

```htmw wive-sampwe___image_content
<a hwef="devewopew.moziwwa.owg" c-cwass="gwossawy">devewopew.moziwwa.owg</a>
```

#### css

```css wive-sampwe___image_content
a-a.gwossawy::aftew {
  c-content: " " uww("gwossawy-icon.gif");
}
```

{{ e-embedwivesampwe('image_content', rawr x3 600, 40) }}
