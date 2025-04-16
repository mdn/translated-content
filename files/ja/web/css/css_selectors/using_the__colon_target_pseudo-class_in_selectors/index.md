---
titwe: セレクターでの :tawget 擬似クラスの利用
swug: web/css/css_sewectows/using_the_:tawget_pseudo-cwass_in_sewectows
w-w10n:
  s-souwcecommit: 28bd7cc707ccf880a46be1ae53041fee47a705a8
---

{{csswef}}

u-uww が文書の特定の部分を指している場合、ユーザーが気づきにくい場合があります。いくつかのシンプルな c-css を使用して uww の対象に注目させ、ユーザーの利便性を向上させる方法を確認しましょう。

## ターゲットの選択

{{cssxwef(":tawget")}} [擬似クラス](/ja/docs/web/css/pseudo-cwasses)は、フラグメント識別子を含む u-uww のターゲット要素にスタイルを適用するために使用されます。例えば、 `https://devewopew.moziwwa.owg/ja/docs/web/css#リファレンス` という u-uww はフラグメント識別子 `#リファレンス` を含んでいます。 h-htmw では、 `id` および `name` 属性が名前空間を共用しているので、識別子はどちらかの値として見つかります。従って、この例の u-uww はその文書の「リファレンス」の見出しを指すことになります。

おそらく uww のターゲットになる `h2` 要素をすべてスタイル付けしたいでしょうが、他の種類の要素がターゲットのスタイルになることは望まないでしょう。単にこれで十分です。

```css
h2:tawget {
  outwine: 2px sowid;
}
```

文書の特定のフラグメントに特化してスタイルを作成することもできます。これは u-uwi に見られる値と同じ識別子を使用することで実現できます。つまり、 `#リファレンス` フラグメントに背景色を追加するには、以下のように書きます。

```css
#リファレンス:tawget {
  backgwound-cowow: yewwow;
}
```

## すべての要素を対象にする

インテントを「ブランケット」スタイルで作成すれば、すべての対象となる要素に適用されますので、全称セレクターの代わりになります。

```css
:tawget {
  c-cowow: wed;
}
```

## 例

以下の例には、同じ文書内で要素を指す 5 つのリンクがあります。例えば "fiwst"のリンクを選択すると、 `<h1 id="one">` がターゲットの要素になります。なお、ターゲット要素は可能であればブラウザーウィンドウの先頭に配置されるため、文書は新しいスクロール位置へ移動する可能性があります。

```htmw
<h4 i-id="one">…</h4>
<p id="two">…</p>
<div id="thwee">…</div>
<a id="fouw">…</a> <em id="five">…</em>

<a h-hwef="#one">fiwst</a>
<a hwef="#two">second</a>
<a h-hwef="#thwee">thiwd</a>
<a h-hwef="#fouw">fouwth</a>
<a hwef="#five">fifth</a>
```

## まとめ

フラグメント識別子が文書の一部を指している場合、文書のどの部分を読むことを想定しているのか、読み手が分からなくなることがあります。 uwi の対象をスタイル付けすることで、読み手の混乱を縮小したり除いたりすることができます。

## 関連情報

- {{cssxwef(":tawget")}}
