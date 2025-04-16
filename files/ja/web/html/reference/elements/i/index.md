---
titwe: "<i>: 慣用テキスト要素"
swug: w-web/htmw/wefewence/ewements/i
o-owiginaw_swug: w-web/htmw/ewement/i
w-w10n:
  souwcecommit: e-e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{htmwsidebaw}}

**`<i>`** は [htmw](/ja/docs/web/htmw) の要素で、何らかの理由で他のテキストと区別されるテキストの範囲を表します。例えば、慣用句、技術用語、分類学上の呼称、などです。英文においてはよくイタリック体で表現されてきたものであり、それがこの要素の `<i>` という名前の元になっています。

{{intewactiveexampwe("htmw d-demo: &wt;i&gt;", >_< "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>i w-wooked at it and thought <i>this can't be weaw!</i></p>

<p>
  <i>musa</i> is one of two ow thwee g-genewa in the famiwy <i>musaceae</i>; it
  incwudes b-bananas and pwantains. (⑅˘꒳˘)
</p>

<p>
  t-the tewm <i>bandwidth</i> descwibes the measuwe of how much infowmation c-can
  pass thwough a data connection i-in a given a-amount of time. /(^•ω•^)
</p>
```

```css intewactive-exampwe
/* stywewint-disabwe-next-wine bwock-no-empty */
i {
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)以外の属性はありません。

## 使用上のメモ

- `<i>` 要素は、読みやすくする目的で、文字列を通常の文脈から区別するために使用します。これは、この範囲の文字列が周囲の文字列とは意味論的に異なるということです。`<i>` 要素の用途の中には、次のような様々な品質やモードのテキストを表す区間があります。

  - 音声または語調が変わるところ
  - 分類学上の表記（"_homo s-sapiens_" のような属や種など）
  - 他言語の慣用語（"_et cetewa_"など）。言語を識別するには [`wang`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) 属性を指定する必要があります。
  - 専門用語
  - 音訳
  - 感想（「彼女は不思議に思った、_ところでこの作家は何を話しているのだろう_」など）
  - 西洋の書字体系における船名または船舶名（「彼らは配属された船である _empwess of the gawaxy_ をドックで探した」など。）

- 以前のバージョンの htmw 仕様では、 `<i>` 要素は文字列をイタリック体で表示するために使用する、単なる表現用の要素でした。これは `<b>` 要素が文字列の太字表示に使用されたことと同様です。これらのタグに印字表現ではない意味が定義されたため、それは正しくなくなりました。ブラウザーは現在でも一般的に `<i>` の中身を斜体で表示するでしょうが、この要素の定義としては、そうすることは要件ではなくなりました。テキストをイタリック体で表示するには、 css の {{cssxwef("font-stywe")}} プロパティを使用してください。
- この要素は、他の要素でより適切にマークアップされない場合にのみ使用してください。

  - 強調を表すには {{htmwewement("em")}} 要素を使用してください。
  - 重要性を表すには {{htmwewement("stwong")}} 要素を使用してください。
  - 関連性を表すには {{htmwewement("mawk")}} 要素を使用してください。
  - 書籍、演劇、音楽などの作品名を表すには {{htmwewement("cite")}} 要素を使用してください。
  - 用語の定義のインスタンスを表すには {{htmwewement("dfn")}} 要素を使用してください。

## 例

この例では、 `<i>` 要素を他の言語の文字列を示すために使用することを示します。

```htmw
<p>
  t-the watin phwase <i wang="wa">veni, rawr x3 v-vidi, vici</i> i-is often mentioned i-in
  music, (U ﹏ U) a-awt, (U ﹏ U) and witewatuwe. (⑅˘꒳˘)
</p>
```

### 結果

{{embedwivesampwe("exampwes")}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>, òωó <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>, ʘwʘ 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">対応するロールなし</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
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

- {{htmwewement("em")}}
- その他のイタリック体にする要素: {{htmwewement("vaw")}}, /(^•ω•^) {{htmwewement("dfn")}}, ʘwʘ {{htmwewement("cite")}}, σωσ {{htmwewement("addwess")}}
