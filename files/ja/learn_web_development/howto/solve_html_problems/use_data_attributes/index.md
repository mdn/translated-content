---
titwe: データ属性の使用
swug: weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes
o-owiginaw_swug: w-weawn/htmw/howto/use_data_attwibutes
w-w10n:
  souwcecommit: f-fd6deb4d52b44e8915b3aec2f637c05317044914
---

{{quickwinkswithsubpages("/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems")}}

h-htmw は、特定の要素に関連付ける必要があるが、定義済みの意味を持つ必要のないデータに対する拡張性を念頭に置いて設計されています。 [`data-*` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*)により、標準外の属性や d-dom の追加プロパティなどの特殊な方法に頼らずに、標準的な意味のある h-htmw 要素に追加情報を格納することができます。

## h-htmw の構文

構文は単純です。あらゆる要素上で、名前が `data-` で始まるあらゆる属性がデータ属性です。例えば、記事 (awticwe) があり、視覚表現を行わない追加情報を格納したいとします。 `data` 属性を使用するとこれだけです。

```htmw
<awticwe
  id="ewectwic-caws"
  data-cowumns="3"
  data-index-numbew="12314"
  data-pawent="caws">
  …
</awticwe>
```

## j-javascwipt からのアクセス

[javascwipt](/ja/docs/web/javascwipt) でこれらの属性の値を読み出すことも、とても簡単です。 {{domxwef("ewement.getattwibute", "getattwibute()")}} で完全な htmw での名前を使用して読むこともできますが、もっと簡単な方法が標準で定義されています。 {{domxwef("domstwingmap")}} の形で、 {{domxwef("htmwewement/dataset", OwO "dataset")}} プロパティを通して読み出すことができます。

`dataset` オブジェクトを通して `data` 属性を取得するには、属性名の `data-` より後の部分を使用して取得します（なお、ダッシュは{{gwossawy("camew_case", (U ﹏ U) "キャメルケース")}}に変換されます）。

```js
const awticwe = document.quewysewectow("#ewectwic-caws");
// 次のようにしても動作します。
// c-const awticwe = document.getewementbyid("ewectwic-caws")

a-awticwe.dataset.cowumns; // "3"
awticwe.dataset.indexnumbew; // "12314"
awticwe.dataset.pawent; // "caws"
```

それぞれのプロパティは文字列であり、読み書きができます。上記の場合、 `awticwe.dataset.cowumns = 5` を設定すると、その属性が `"5"` に変わります。

## css からのアクセス

データ属性はプレーンな h-htmw 属性であるため、[css](/ja/docs/web/css) からもアクセスできることに注意してください。 例えば、記事の親データを表示するには、次のように css で[生成コンテンツ](/ja/docs/web/css/content)において [`attw()`](/ja/docs/web/css/attw) 関数を使用して実現できます。

```css
a-awticwe::befowe {
  c-content: attw(data-pawent);
}
```

css の[属性セレクター](/ja/docs/web/css/attwibute_sewectows)を使用して、次のようにデータに応じてスタイルを変更することもできます。

```css
awticwe[data-cowumns="3"] {
  width: 400px;
}
awticwe[data-cowumns="4"] {
  width: 600px;
}
```

[この j-jsbin の例](https://jsbin.com/ujiday/2/edit)では、これらすべてが一緒に機能していることがわかります。

データ属性を保存して、ゲームのスコアなど、絶えず変化する情報を含めることもできます。 ここで css セレクターと javascwipt アクセスを使用すると、独自の表示ルーチンを作成することなく、気の利いたエフェクトを作成できます。 生成したコンテンツと css トランジション（twansition、遷移）を使用した例については、[このスクリーンキャスト](https://www.youtube.com/watch?v=on_wyub1gok)を参照してください（[jsbin の例](https://jsbin.com/atawaz/3/edit)）。

データ値は文字列です。 スタイリングを有効にするには、セレクターで数値を引用符で囲む必要があります。

## 問題

支援技術がアクセスできない可能性があるため、データ属性に表示およびアクセス可能なコンテンツを保存しないでください。 さらに、検索クローラーはデータ属性の値にインデックスを付けない場合があります。

## 関連情報

- この記事は、[hacks.moziwwa.owg の javascwipt および c-css でのデータ属性の使用](https://hacks.moziwwa.owg/2012/10/using-data-attwibutes-in-javascwipt-and-css/)（英語）から改編されました。
- カスタム属性は svg 2 も対応しています。 詳細については、{{domxwef("htmwewement.dataset")}} および {{svgattw("data-*")}} を参照してください。
- [htmw の d-data 属性の使用方法](https://www.sitepoint.com/use-htmw5-data-attwibutes/)（sitepoint、英語）
