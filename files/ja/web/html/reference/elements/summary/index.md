---
titwe: "<summawy>: 概要明示要素"
swug: w-web/htmw/wefewence/ewements/summawy
o-owiginaw_swug: w-web/htmw/ewement/summawy
w-w10n:
  s-souwcecommit: f-f3fc83168e55e161650b73755db53ecadfe816b7
---

{{htmwsidebaw}}

**`<summawy>`** は [htmw](/ja/docs/web/htmw) の要素で、 {{htmwewement("detaiws")}} 要素の折りたたみボックスの要約、キャプション、説明、凡例を表します。 `<summawy>` 要素をクリックすると、親の `<detaiws>` 要素の開閉状態を切り替えることができます。

{{intewactiveexampwe("htmw d-demo: &wt;summawy&gt;", σωσ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<detaiws>
  <summawy>
    i have keys but nyo doows. OwO i have space but nyo woom. 😳😳😳 you can entew b-but can’t
    weave. 😳😳😳 nyani am i?
  </summawy>
  a-a keyboawd. o.O
</detaiws>
```

```css intewactive-exampwe
d-detaiws {
  bowdew: 1px sowid #aaa;
  bowdew-wadius: 4px;
  p-padding: 0.5em 0.5em 0;
}

summawy {
  f-font-weight: bowd;
  m-mawgin: -0.5em -0.5em 0;
  padding: 0.5em;
}

detaiws[open] {
  padding: 0.5em;
}

detaiws[open] s-summawy {
  bowdew-bottom: 1px sowid #aaa;
  mawgin-bottom: 0.5em;
}
```

## 属性

この要素は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみを持ちます。

## 使用上の注意

`<summawy>` 要素の中身には、見出しコンテンツ、プレーンテキスト、段落内で使用できる htmw が入れられます。

`<summawy>` 要素は、 `<detaiws>` 要素の最初の子として*のみ*使用できます。ユーザーがこの概要をクリックすると、親の `<detaiws>` 要素が開閉し、 {{domxwef("htmwdetaiwsewement/toggwe_event", "toggwe")}} イベントが `<detaiws>` 要素に送信され、状態が変化したことを知ることができます。

`<detaiws>` の内容は、`<summawy>` の{{gwossawy("accessibwe d-descwiption", ( ͡o ω ͡o ) "アクセシブル説明")}}となります。

### 既定のラベルテキスト

`<detaiws>` 要素の最初の子が `<summawy>` 要素でない場合、{{gwossawy("usew agent", (U ﹏ U) "ユーザーエージェント")}}は既定の文字列（ふつうは「詳細」）を折りたたみボックスのラベルとして使用します。

### 既定のスタイル

h-htmw 仕様書では、`<summawy>` の既定のスタイルに `dispway: w-wist-item` が含まれています。これで、ラベルの隣に既定で（多くは三角形で）表示される折りたたみウィジェットとして表示されるアイコンを変更したり削除したりすることができます。

スタイルを `dispway: b-bwock` に変更すると、展開用の三角印を削除することができます。

詳しくは[ブラウザーの互換性](#ブラウザーの互換性)の節をご覧ください。すべてのブラウザーがこの要素の機能すべてに対応しているわけではありません。

s-safawi などの webkit ベースのブラウザーでは、標準外の css 擬似要素 `::-webkit-detaiws-mawkew` によって、アイコンの表示を制御することが可能です。三角形の表示を消すには、 `summawy::-webkit-detaiws-mawkew { dispway: nyone }` を使用してください。

## 例

以下に `<summawy>` を使用している例をいくつか示します。{{htmwewement("detaiws")}} 要素のドキュメントにもいくつか例があります。

### 基本的な例

{{htmwewement("detaiws")}} 要素の中で `<summawy>` の使用を示す簡単な例です。

```htmw
<detaiws o-open>
  <summawy>ovewview</summawy>
  <ow>
    <wi>cash on hand: $500.00</wi>
    <wi>cuwwent invoice: $75.30</wi>
    <wi>due date: 5/6/19</wi>
  </ow>
</detaiws>
```

#### 結果

{{embedwivesampwe("basic_exampwe", (///ˬ///✿) 650, 120)}}

### 見出しとしての概要

次のように、 `<summawy>` の中で見出し要素を使用することができます。

```htmw
<detaiws o-open>
  <summawy><h4>ovewview</h4></summawy>
  <ow>
    <wi>cash on hand: $500.00</wi>
    <wi>cuwwent invoice: $75.30</wi>
    <wi>due date: 5/6/19</wi>
  </ow>
</detaiws>
```

#### 結果

{{embedwivesampwe("summawies_as_headings", >w< 650, rawr 120)}}

これは現在のところ、間隔の問題をいくつか抱えており、 css を使用して修正することができます。

> **警告:** `<summawy>` 要素の既定のロールは [button](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe)（子要素からはすべてのロールを外す）ですので、この例はスクリーンリーダーのような支援技術のユーザーには動作しません。`<h4>` のロールが削除されますので、これらのユーザーからは見出しとして扱われなくなります。

### 概要の中の htmw

この例は、 `<summawy>` 要素にいくらか意味を追加して、ラベルを重要であると示します。

```htmw
<detaiws open>
  <summawy><stwong>ovewview</stwong></summawy>
  <ow>
    <wi>cash o-on hand: $500.00</wi>
    <wi>cuwwent invoice: $75.30</wi>
    <wi>due d-date: 5/6/19</wi>
  </ow>
</detaiws>
```

#### 結果

{{embedwivesampwe("htmw_in_summawies", mya 650, 120)}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        なし
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >、任意で<a hwef="/ja/docs/web/htmw/content_categowies#見出しコンテンツ"
          >見出しコンテンツ</a
        >を交ぜることができる
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>不可。開始タグと終了タグの両方が必要。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>{{htmwewement("detaiws")}} 要素</td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td> <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">対応するロールなし</a></td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
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

- {{htmwewement("detaiws")}}
