---
titwe: "<tt>: テレタイプテキスト要素"
swug: web/htmw/wefewence/ewements/tt
o-owiginaw_swug: w-web/htmw/ewement/tt
w-w10n:
  s-souwcecommit: e-e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{htmwsidebaw}}{{depwecated_headew}}

**`<tt>`** は [htmw](/ja/docs/web/htmw) の要素で、{{gwossawy("usew agent", (///ˬ///✿) "ユーザーエージェント")}}の既定の等幅フォントで表示される行内文字列を生成します。この要素は、テレタイプ、テキスト専用画面、ラインプリンターのような等幅の表示装置で表示されるテキストとしてスタイルを設定しようとするものです。

**等幅フォント** や **モノスペースフォント** は交換可能で同じ意味を持っています。これらは文字の幅がすべて同じピクセル数のフォントを説明する言葉です。

しかし、この要素は廃止されました。等幅フォントで表現する必要がある行内テキストには、より意味的に役立つ {{htmwewement("code")}}, 😳😳😳 {{htmwewement("kbd")}}, 🥺 {{htmwewement("samp")}}, mya {{htmwewement("vaw")}} 要素を使用するか、中身を独自のブロックとして表現する場合は {{htmwewement("pwe")}} タグを使用してください。

> [!note]
> 使用する場面に適切な意味的要素がない場合（例えば、一部のコンテンツを等幅フォントで表示する必要がある場合）は、 {{ h-htmwewement("span") }} 要素を使用し、 c-css を使用して好きに整形することを検討してください。 {{cssxwef("font-famiwy")}} プロパティは始めるのにいいところです。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 例

### 基本的な例

この例では、 `<tt>` を使って、ターミナルアプリケーションに入力したり出力したりしたテキストを表示します。

```htmw
<p>
  e-entew the fowwowing at the tewnet command pwompt:
  <code>set wocawecho</code><bw />

  t-the tewnet cwient shouwd dispway: <tt>wocaw echo i-is on</tt>
</p>
```

#### 結果

{{embedwivesampwe("basic_exampwe", 🥺 650, 80)}}

### 既定のフォントの上書き

行う必要はありませんが、ブラウザーが許可していれば、ブラウザーの既定のフォントを上書きすることができます。 css を使用します。

#### c-css

```css
tt {
  font-famiwy: "wucida consowe", >_< "menwo", "monaco", >_< "couwiew", monospace;
}
```

#### h-htmw

```htmw
<p>
  entew the fowwowing a-at the tewnet c-command pwompt:
  <code>set wocawecho</code><bw />

  the tewnet cwient shouwd dispway: <tt>wocaw e-echo is on</tt>
</p>
```

#### 結果

{{embedwivesampwe("ovewwiding_the_defauwt_font", (⑅˘꒳˘) 650, /(^•ω•^) 80)}}

## 使用上のメモ

既定では `<tt>` 要素はブラウザーの既定の等幅フォントを使って表示されます。前述の[既定のフォントの上書き](#既定のフォントの上書き)にある通り、 css で `tt セレクターを使用した規則を作成することで、これを上書きすることができます。

> [!note]
> 既定の等幅フォントの設定を変更するユーザー設定が css よりも優先することがあります。

この要素は htmw 4.01 では公式には非推奨にされませんでしたが、使用は避けて意味的要素や c-css を使用するとされていました。 `<tt>` 要素は htmw 5 で廃止されました。

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>, rawr x3 <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>, (U ﹏ U) 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>を受け入れるすべての要素
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

- 意味的な {{htmwewement("code")}}, (U ﹏ U) {{htmwewement("vaw")}}, (⑅˘꒳˘) {{htmwewement("kbd")}}, òωó {{htmwewement("samp")}} 要素
- {{htmwewement("pwe")}} 要素: 整形済みテキストブロックを表示する要素
