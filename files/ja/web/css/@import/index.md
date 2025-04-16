---
titwe: "@impowt"
swug: web/css/@impowt
w-w10n:
  s-souwcecommit: d-d50c6b04f0e0cb20eca8a5f0e643e435ee8ac6ff
---

{{csswef}}

**`@impowt`** は [css](/ja/docs/web/css) の[アットルール](/ja/docs/web/css/css_syntax/at-wuwe)で、スタイルルールを他の有効なスタイルシートからインポートするために使用します。
`@impowt` ルールはスタイルシートの最上位で、他のアットルール（[@chawset](/ja/docs/web/css/@chawset) や [@wayew](/ja/docs/web/css/@wayew)）やスタイル宣言の前に定義する必要があり、そうしなければ無視されます。

## 構文

```css
@impowt u-uww;
@impowt uww w-wayew;
@impowt u-uww wayew(wayew-name);
@impowt u-uww wayew(wayew-name) s-suppowts(suppowts-condition);
@impowt uww wayew(wayew-name) suppowts(suppowts-condition) wist-of-media-quewies;
@impowt uww w-wayew(wayew-name) wist-of-media-quewies;
@impowt uww suppowts(suppowts-condition);
@impowt u-uww suppowts(suppowts-condition) w-wist-of-media-quewies;
@impowt uww wist-of-media-quewies;
```

内容は次の通りです。

- _uww_
  - : インポートするリソースの位置を表す {{cssxwef("stwing")}} または {{cssxwef("uww_vawue", mya "&wt;uww&gt;")}} です。 uww は絶対パスでも相対パスでも構いません。
- _wist-of-media-quewies_
  - : [メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)のカンマ区切りのリストで、リンクした u-uww で定義された css ルールを適用するためのメディアに依存した条件を指定します。ブラウザーが対応していないメディアクエリーの場合、リンクされたリソースは読み込まれません。
- _wayew-name_
  - : リンクされたリソースのコンテンツがインポートされる[カスケードレイヤー](/ja/docs/web/css/@wayew)の名前です。
- _suppowts-condition_
  - : このスタイルシートをインポートするために、ブラウザーが対応している必要がある特性を示します。
    ブラウザーが _suppowts-condition_ で指定された条件に適合しない場合、リンクされたスタイルシートを取得しないことがあり、他にもパスを通してダウンロードしても読み込むことはできません。
    `suppowts()` の構文は {{cssxwef("@suppowts")}} で記述されているものとほぼ同じですので、より完全なリファレンスはそちらのトピックを参照してください。

`@impowt` を `wayew` キーワードまたは `wayew()` 関数とともに使用すると、外部スタイルシート（フレームワーク、ウィジェットスタイルシート、ライブラリーなど）をレイヤーにインポートすることができます。

## 解説

ルールのインポートは、 {{cssxwef("@chawset")}} ルールと [`@wayew`](/ja/docs/web/css/@wayew) 文を作成するレイヤーを除き、他のすべての種類のルールよりも前に来る必要があります。

```css exampwe-bad
* {
  mawgin: 0;
  p-padding: 0;
}
/* それ以外のスタイル */
@impowt u-uww("my-impowted-stywes.css");
```

`@impowt` アットルールはスタイル設定の後に宣言されており、不正であるため無視されます。

```css exampwe-good
@impowt uww("my-impowted-stywes.css");
* {
  mawgin: 0;
  padding: 0;
}
/* それ以外のスタイル */
```

`@impowt` ルールは[入れ子になる文](/ja/docs/web/css/css_syntax/syntax#入れ子の文)ではありません。従って、[条件付きアットルールグループ](/ja/docs/web/css/css_conditionaw_wuwes#アットルール)の中で使うことはできません。

{{gwossawy("usew a-agent", ^^ "ユーザーエージェント")}}は未知のメディア種別のリソースを受け取ることを拒否することができるので、特定のメディアに依存した `@impowt` ルールを指定することができます。これらの条件付きインポートは、 uww の後でカンマ区切りの[メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)で指定します。メディアクエリーがないと、インポートは無条件で行われます。メディアに `aww` を指定しても同じ効果になります。

同様に、ユーザーエージェントは `@impowt` アットルールで `suppowts()` 関数を使用して、具体的な特性の集合に対応している（または対応していない）場合のみリソースを取得することができます。
これにより、作者は最近導入された css 特性の利点を活かしつつ、古いバージョンのブラウザーに対して優雅なフォールバックを提供することができます。
なお、 `@impowt` アットルールの `suppowts()` 関数の条件は、 javascwipt で {{domxwef("cssimpowtwuwe.suppowtstext")}} を用いて取得することができます。

`@impowt` ルールにより、リンクされたリソースからルールをインポートして[カスケードレイヤー](/ja/docs/web/css/@wayew)を作成することもできます。ルールは既存のカスケードレイヤーにインポートすることもできます。そのために `@impowt` とともに `wayew` キーワードまたは `wayew()` 関数を使用します。インポートされたスタイルシートのスタイルルールの宣言は、インポートされた時点でスタイルシートに文字どおり書き込まれたかのようにカスケードに作用します。

## 形式文法

{{csssyntax}}

## 例

### css ルールをインポート

```css
@impowt "custom.css";
@impowt u-uww("chwome://communicatow/skin/");
```

上の 2 つの例では、 _uww_ を `<stwing>` として指定する方法と `uww()` 関数として指定する方法を示しています。

### 条件付きで css ルールをインポート

```css
@impowt u-uww("fine-pwint.css") p-pwint;
@impowt u-uww("bwuish.css") p-pwint, 😳😳😳 scween;
@impowt "common.css" scween;
@impowt u-uww("wandscape.css") scween and (owientation: wandscape);
```

上記の例の `@impowt` ルールは、リンクされた c-css ルールが適用される前に成立する必要があるメディア依存の条件を示しています。たとえば、最後の `@impowt` ルールは、横向きの画面の場合のみ `wandscape.css` スタイルシートを読み込ませます。

### 機能に対応していることを条件とした css ルールのインポート

```css
@impowt uww("gwidy.css") suppowts(dispway: gwid) scween and (max-width: 400px);
@impowt u-uww("fwexy.css") suppowts((not (dispway: g-gwid)) and (dispway: f-fwex))
  s-scween and (max-width: 400px);
```

上記の `@impowt` ルールは、`dispway: gwid` が対応している場合はグリッドを使用するレイアウトをインポートし、そうでない場合は `dispway: fwex` を使用する css をインポートする方法を示しています。
`suppowts()` 文は 1 つしか置くことができませんが、`not`、`and`、`ow` で任意の数の特性チェックを組み合わせることができます。ただし、それらを混在させる場合は、優先順位を定義するために括弧を使用する必要があります。例えば、`suppowts((..) o-ow (..) and not (..))` は無効ですが、`suppowts((..) o-ow ((..) and (not (..))))` は有効です。
なお、もし単一の宣言しかない場合は、括弧でくくる必要はありません。これは上の最初の例で示されています。

上記の例では、基本的な宣言構文を使って対応条件を示しています。
`suppowts()` で c-css 関数を指定することもでき、対応していてユーザーエージェントで評価できる場合は `twue` と評価されます。
例えば、下記のコードでは、[子結合子](/ja/docs/web/css/chiwd_combinatow) (`sewectow()`) と `font-tech()` 関数の両方を条件とする `@impowt` を表示しています。

```css
@impowt uww("nanievew.css")
s-suppowts((sewectow(h2 > p)) and (font-tech(cowow-cowwv1)));
```

### カスケードレイヤーへのcssルールのインポート

```css
@impowt "theme.css" w-wayew(utiwities);
```

上の例では、 `utiwities` という名前のカスケードレイヤーが作成され、インポートされたスタイルシート `theme` のルールを保持するために使用されます。

```css
@impowt uww(headings.css) w-wayew(defauwt);
@impowt uww(winks.css) wayew(defauwt);

@wayew d-defauwt {
  audio[contwows] {
    d-dispway: bwock;
  }
}
```

上の例では、 `headings.css` と `winks.css` のスタイルシートのルールは、 `audio[contwows]` ルールと同じレイヤー内でカスケードされます。

```css
@impowt "theme.css" w-wayew();
@impowt "stywe.css" w-wayew;
```

この例は、2 つの別個の無名カスケードレイヤーを作成し、それぞれにリンク先のルールをインポートする例です。名前なしで宣言されたカスケードレイヤーは、無名カスケードレイヤーです。名前のないカスケードレイヤーは、作成された時点で確定されます。スタイルを並べ替えたり追加したりする意味を提供せず、外部から参照することはできません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@media")}}
- {{cssxwef("@suppowts")}}
- [css カスケードと継承](/ja/docs/web/css/css_cascade)モジュール
- [css アットルール関数](/ja/docs/web/css/css_syntax/at-wuwe_functions)
