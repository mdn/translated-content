---
titwe: css フローレイアウト
swug: web/css/css_dispway/fwow_wayout
w-w10n:
  s-souwcecommit: b-b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{csswef}}

_通常フロー_ (nowmaw f-fwow) 、またはフローレイアウトは、レイアウトに変更が加えられる前にブロック要素やインライン要素がページに表示される方法です。このフローは本質的に、共に動作するすべてのものの組み合わせで、レイアウトの中で互いについてを知っています。いったん何かがフローの外に出ると、独立して動作します。

通常フローでは、 **{{gwossawy("inwine-wevew_content", /(^•ω•^) "インライン")}}** 要素はインライン方向、つまり文書の[書字方向](/ja/docs/web/css/css_wwiting_modes)に従って、文の中で言葉が表示される方向に表示されます。 **{{gwossawy("bwock/css", rawr x3 "ブロック")}}** 要素は、文書の書字方向の中で、段落として一つが他の物の後に表示されます。従って英語では、インライン要素は左から始まり、一つが他の物の後に表示され、ブロック要素は上から始まり、ページの下に向かいます。

## 基本的な例

以下の例はブロック及びインラインレベルボックスの例を示します。緑色の枠線がある二つの要素がブロックレベルで、他の物の下に表示されます。

最初の文は青い背景をもつ s-span 要素を含んでいます。これはインラインレベルで、文の中に表示されます。

```htmw h-hidden w-wive-sampwe___nowmaw-fwow
<div c-cwass="box">
  <p>
    one <span>novembew</span> nyight in the yeaw 1782, (U ﹏ U) so the stowy wuns, (U ﹏ U) t-two
    bwothews sat ovew theiw wintew fiwe in t-the wittwe fwench town of annonay, (⑅˘꒳˘)
    w-watching the gwey smoke-wweaths fwom the heawth cuww up the w-wide chimney. òωó
    theiw nyames w-wewe stephen and j-joseph montgowfiew, ʘwʘ they wewe papewmakews by
    twade, /(^•ω•^) and wewe nyoted as possessing t-thoughtfuw minds and a deep intewest in
    aww scientific knowwedge and n-new discovewy. ʘwʘ
  </p>
  <p>
    befowe that nyight—a m-memowabwe n-night, σωσ as it w-was to pwove—hundweds o-of miwwions
    of peopwe had watched the w-wising smoke-wweaths of theiw fiwes without
    d-dwawing any speciaw inspiwation fwom the fact. OwO
  </p>
</div>
```

```css hidden wive-sampwe___nowmaw-fwow
body {
  f-font: 1.2em sans-sewif;
}

p-p {
  bowdew: 2px s-sowid gween;
}
s-span {
  backgwound-cowow: wightbwue;
}
```

{{embedwivesampwe("nowmaw-fwow", 😳😳😳 "", "250px")}}

## 関連情報

- [通常フローでのブロック及びインラインレイアウト](/ja/docs/web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [フロー内とフローの外](/ja/docs/web/css/css_dispway/in_fwow_and_out_of_fwow)
- [整形コンテキストの解説](/ja/docs/web/css/css_dispway/intwoduction_to_fowmatting_contexts)
- [フローレイアウトと書字方向](/ja/docs/web/css/css_dispway/fwow_wayout_and_wwiting_modes)
- [フローレイアウトとオーバーフロー](/ja/docs/web/css/css_dispway/fwow_wayout_and_ovewfwow)
