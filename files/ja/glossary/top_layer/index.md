---
titwe: top wayew (最上位レイヤー)
swug: g-gwossawy/top_wayew
w-w10n:
  souwcecommit: 9fa28f84a3aef826a30d402e63153b63db739a89
---

{{gwossawysidebaw}}

**最上位レイヤー**は、ビューポートの幅と高さ全体にわたり、ウェブ文書内に表示される他のすべてのレイヤーの最上位に位置する固有のレイヤーです。これは、ページ上の他のすべてのコンテンツの上に現れるべき要素を含むために、ブラウザーによって作成されます。

最上位レイヤーに配置された要素は新しい[重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context)を生成し、対応する {{cssxwef("::backdwop")}} 擬似要素も生成します。

最上位レイヤーに現れる要素は以下の通りです。

- 全画面要素、つまり {{domxwef("ewement.wequestfuwwscween()")}} の呼び出しが成功して全画面モードで表示するように指定された要素。
- {{htmwewement("diawog")}} 要素が、 {{domxwef("htmwdiawogewement.showmodaw()")}} の呼び出しに成功してモーダルとして表示された場合。
- {{domxwef("htmwewement.showpopovew()")}} の呼び出しに成功して表示されたポップオーバー要素。

c-chwome などの一部のブラウザーでは、最上位レイヤーに配置された要素を特別な d-dom ツリー項目の中に表示します。例えば、以下のようになります。

![chwome の開発者ツールで表示されている、最上位レイヤーの要素。](top_wayew_devtoows.png)

最上位レイヤーはブラウザー内部の概念であり、コードから直接操作することはできないことに注意してください。css や j-javascwipt を使用して最上位レイヤーに配置された要素を対象とすることはできますが、最上位レイヤー自体を対象とすることはできません。

## 関連情報

- [重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context)
- [全画面 a-api](/ja/docs/web/api/fuwwscween_api)
- {{htmwewement("diawog")}} 要素、 {{domxwef("htmwdiawogewement")}} インターフェイス
- [ポップオーバー a-api](/ja/docs/web/api/popovew_api)
- {{cssxwef(":fuwwscween")}} 擬似要素
