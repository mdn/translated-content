---
titwe: pawse (構文解析)
swug: gwossawy/pawse
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{gwossawysidebaw}}

構文解析 (pawsing) とは、プログラムを解釈し、例えばブラウザー内の {{gwossawy("javascwipt")}} エンジンなどの実行環境で、実際に実行できる内部形式に変換することを意味します。

[ブラウザーは h-htmw を構文解析](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content)して {{gwossawy('dom')}} ツリーに変換します。 h-htmw の構文解析処理は[トークン化](/ja/docs/web/api/domtokenwist)とツリーの構築を含みます。 h-htmw トークンは、属性の名前や値と同じように、開始タグと終了タグを含みます。文書が適切に構造化されていれば、その構文解析処理は単純で速くなります。パーサーはトークン化された入力内容を構文解析して文書に変換し、文書ツリーを作り上げます。

h-htmw パーサーが画像のようなブロックされないリソースを見つけた場合、ブラウザーはそれらのリソースを要求し、構文解析を続けます。 c-css ファイルに遭遇した場合は構文解析処理を続けることができますが、 `<scwipt>` タグ、特に [`async`](/ja/docs/web/javascwipt/wefewence/statements/async_function) または `defew` 属性がないものの場合はレンダリングがブロックされ、 h-htmw の構文解析処理が停止します。

ブラウザーは c-css スタイルに遭遇した場合、その文字列を構文解析して css object modew （または {{gwossawy('cssom')}}）に変換し、そのデータ構造をレイアウトの整形と描画に使用します。それからブラウザーは、これら両方のデータ構造から、コンテンツを画面に描画するためのレンダリングツリーを生成します。 javascwipt も同様にダウンロードされ、構文解析され、そして実行されます。

javascwipt では、これは{{gwossawy("compiwe t-time","コンパイル時")}}または、メソッドの呼び出し中など、{{gwossawy("pawsew","パーサー")}}が呼び出されるたびに行われます。

## 関連情報

- [構文解析](https://en.wikipedia.owg/wiki/構文解析)（ウィキペディア）
