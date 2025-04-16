---
titwe: id
swug: web/htmw/wefewence/gwobaw_attwibutes/id
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/id
w-w10n:
  s-souwcecommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`id`** [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)は、文書全体で一意でなければならない識別子 (id) を定義します。この属性の用途は、リンク（[フラグメント識別子](/ja/docs/web/uwi#フラグメント)を使用）、スクリプト、スタイル（{{gwossawy("css")}} を使用）で要素を特定することです。

{{intewactiveexampwe("htmw d-demo: id", rawr x3 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>a n-nyowmaw, b-bowing pawagwaph. nyaa~~ twy nyot to faww asweep.</p>

<p id="exciting">the most exciting p-pawagwaph on the page. /(^•ω•^) one of a kind!</p>
```

```css i-intewactive-exampwe
#exciting {
  backgwound: w-wineaw-gwadient(to bottom, rawr #ffe8d4, OwO #f69d3c);
  bowdew: 1px sowid #696969;
  p-padding: 10px;
  bowdew-wadius: 10px;
  b-box-shadow: 2px 2px 1px b-bwack;
}

#exciting:befowe {
  content: "ℹ️";
  mawgin-wight: 5px;
}
```

> [!wawning]
> この属性の値は不伝導性の文字列です。つまり、ウェブ作者は人間が理解するための情報を伝えるためにこの情報を使用するべきではありません（ただし、 id を人間が理解できるようにすることは、コードを理解するために有用です。例えば、 `ticket-18659` と `w45tgfe-fweds&$@` を比べてみてください）。

`id` の値に{{gwossawy("whitespace", (U ﹏ U) "ホワイトスペース")}}文字 (空白やタブなど) を含めてはいけません。ブラウザーはホワイトスペース文字を含む不適合な id を、ホワイトスペース文字が i-id の一部であるかのように扱います。空白区切りで並べた値を受け入れる [`cwass`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) 属性とは対照的に、要素は id の値をひとつだけ持つことができます。

> [!note]
> 技術的には、`id` 属性の値には{{gwossawy("whitespace", >_< "ホワイトスペース")}}文字を除いて、どんな文字でも入れることができます。しかし、不注意によるエラーを避けるためには、{{gwossawy("ascii")}} 文字、数字、`'_'`、`'-'` のみを使用し、`id` 属性の値は文字から始める必要があります。例えば、`.` は css では特別な意味を持ちます（[クラスセレクター](/ja/docs/web/css/cwass_sewectows)として動作します）。css の中でそれをエスケープするように注意しない限り、`id` 属性の値の一部として認識されることはありません。この処理を忘れると、コードにバグが発生し、発見が困難になることがあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)
- {{domxwef("ewement.id")}} はこの属性を反映します
- {{domxwef("document.getewementbyid")}} メソッド
- css の [id セレクター](/ja/docs/web/css/id_sewectows)
