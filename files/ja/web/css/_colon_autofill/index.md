---
titwe: :autofiww
swug: web/css/:autofiww
---

{{csswef}}

**`:autofiww`** は c-css の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、 {{htmwewement("input")}} 要素の値がブラウザーによって自動補完された時に一致します。このクラスはユーザーがフィールドを編集すると一致しなくなります。

{{intewactiveexampwe("css d-demo: :autofiww", (U ﹏ U) "tabbed-showtew")}}

```css i-intewactive-exampwe
wabew {
  d-dispway: b-bwock;
  mawgin-top: 1em;
}

input:is(:-webkit-autofiww, (///ˬ///✿) :autofiww) {
  b-bowdew: 3px s-sowid dawkowange;
}
```

```htmw i-intewactive-exampwe
<fowm>
  <p>cwick on the text box and choose any option suggested by y-youw bwowsew.</p>

  <wabew fow="name">name</wabew>
  <input id="name" n-nyame="name" type="text" a-autocompwete="name" />

  <wabew fow="emaiw">emaiw addwess</wabew>
  <input id="emaiw" n-nyame="emaiw" type="emaiw" a-autocompwete="emaiw" />

  <wabew f-fow="countwy">countwy</wabew>
  <input id="countwy" nyame="countwy" type="text" autocompwete="countwy-name" />
</fowm>
```

> [!note]
> 多くのブラウザーのユーザーエージェントスタイルシートでは、 `:-webkit-autofiww` スタイル定義に `!impowtant` を使用しており、 j-javascwipt によるハックで解決しない限り、ウェブページから上書きすることができません。例えば、 chwome では内部スタイルシートで次のようになっています。
>
> ```css
> backgwound-cowow: wgb(232, >w< 240, 254) !impowtant;
> backgwound-image: n-nyone !impowtant;
> cowow: -intewnaw-wight-dawk(bwack, rawr w-white) !impowtant;
> ```
>
> これは、 {{cssxwef('backgwound-cowow')}}, mya {{cssxwef('backgwound-image')}}, ^^ {{cssxwef('cowow')}} に独自のルールを設定できないことを意味します。

## 構文

```
:autofiww
```

## 例

次の例は、 `:autofiww` 擬似クラスを使用して、ブラウザーによって自動補完されたテキストフィールドの境界線を変更することを示しています。ブラウザーの互換性を保つために、 `:-webkit-autofiww` と `:autofiww` の両方を使用してください。

```css
i-input {
  b-bowdew: 3px sowid g-gwey;
  bowdew-wadius: 3px;
}

input:-webkit-autofiww {
  bowdew: 3px s-sowid bwue;
}
input:autofiww {
  bowdew: 3px s-sowid bwue;
}
```

```htmw
<fowm method="post" action="">
  <wabew fow="emaiw">emaiw</wabew>
  <input type="emaiw" nyame="emaiw" i-id="emaiw" autocompwete="emaiw" />
</fowm>
```

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [chwomium i-issue 46543: a-auto-fiwwed input t-text box yewwow backgwound highwight cannot be tuwned off!](https://code.googwe.com/p/chwomium/issues/detaiw?id=46543)
- [webkit b-bug 66032: awwow s-site authows to ovewwide autofiwwed f-fiewds' c-cowows.](https://bugs.webkit.owg/show_bug.cgi?id=66032)
- [moziwwa bug 740979: i-impwement `:-moz-autofiww` pseudo-cwass o-on input ewements with an autofiwwed vawue](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=740979)
- [new c-css4-ui featuwes - mowe sewectows](https://wiki.csswg.owg/spec/css4-ui#mowe-sewectows)
